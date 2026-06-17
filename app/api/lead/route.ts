import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const PDF_PATH = path.join(process.cwd(), 'public', 'downloads', 'karten-auf-den-tisch_de.pdf')
const PDF_NAME = 'Karten-auf-den-Tisch_Spielanleitung.pdf'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as {
    email: string
    locale: string
    hp?: string
  } | null

  // Honeypot — silent reject, no signal to bots
  if (!body || body.hp) {
    return NextResponse.json({ ok: true })
  }

  const { email, locale } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid-email' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from   = process.env.RESEND_FROM ?? 'kurt@cotoaga.ai'
  const to     = process.env.RESEND_TO   ?? 'kurt@cotoaga.ai'

  if (!apiKey) {
    console.error('[lead-gate] RESEND_API_KEY not configured')
    return NextResponse.json({ ok: true, warn: 'mail-not-configured' })
  }

  const timestamp = new Date().toISOString()
  const resend    = new Resend(apiKey)

  // Load PDF — graceful fallback if Kurt hasn't dropped the file yet
  const pdfExists    = fs.existsSync(PDF_PATH)
  const attachments  = pdfExists
    ? [{ filename: PDF_NAME, content: fs.readFileSync(PDF_PATH) }]
    : []

  if (!pdfExists) {
    console.error('[lead-gate] PDF not found at expected path — sending without attachment')
  }

  // ── Email 1: deck to the visitor ──────────────────────────────────────────
  const visitorSubject = locale === 'de'
    ? 'Karten auf den Tisch — dein Deck'
    : 'Cards on the Table — your deck'
  const visitorText = locale === 'de'
    ? [
        'Anbei findest du das komplette Deck:',
        'Spielanleitung, 12 Fälle, Joker, 10. Mann und Vorlagen.',
        '',
        'Viel Spaß beim Spielen.',
        '',
        'Kurt',
        'https://cotoaga.ai',
      ].join('\n')
    : [
        'Attached is the complete deck:',
        'rules, 12 cases, Joker, 10th Man, and templates.',
        'Note: currently available in German only.',
        '',
        'Kurt',
        'https://cotoaga.ai',
      ].join('\n')

  const visitorResult = await resend.emails.send({
    from,
    to:          email,       // visitor address — goes to Resend, never to logs
    subject:     visitorSubject,
    text:        visitorText,
    attachments,
  })

  const visitorOk = !('error' in visitorResult && visitorResult.error)
  if (!visitorOk) {
    // Log error name only — address stays out of logs
    console.error('[lead-gate] visitor PDF send failed:', (visitorResult as { error?: { name?: string } }).error?.name)
  }

  // ── Email 2: per-send status notification to Kurt ─────────────────────────
  // Kurt's inbox is the lead record — address lives here, not in logs
  await resend.emails.send({
    from,
    to,
    subject: `[Karten auf den Tisch] Lead — ${locale.toUpperCase()} — ${timestamp}`,
    text: [
      `Locale:    ${locale}`,
      `Timestamp: ${timestamp}`,
      `Email:     ${email}`,
      `PDF send:  ${visitorOk ? 'succeeded' : 'failed'}`,
      pdfExists ? '' : 'Warning: PDF file missing on server — visitor sent email without attachment.',
    ].filter(Boolean).join('\n'),
  })

  return NextResponse.json({ ok: true })
}
