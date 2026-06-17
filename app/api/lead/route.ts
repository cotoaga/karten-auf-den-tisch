import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as {
    email: string
    locale: string
    hp?: string
  } | null

  // Honeypot — silent reject so bots get no signal
  if (!body || body.hp) {
    return NextResponse.json({ ok: true })
  }

  const { email, locale } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid-email' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from   = process.env.RESEND_FROM ?? 'Karten auf den Tisch <noreply@cotoaga.ai>'
  const to     = process.env.RESEND_TO   ?? 'kurt@cotoaga.net'

  if (!apiKey) {
    // Not configured yet — visitor still gets the PDF
    console.error('[lead-gate] RESEND_API_KEY not configured')
    return NextResponse.json({ ok: true, warn: 'mail-not-configured' })
  }

  const timestamp = new Date().toISOString()
  const resend    = new Resend(apiKey)

  const result = await resend.emails.send({
    from,
    to,
    subject: `[Karten auf den Tisch] Lead — ${locale.toUpperCase()} — ${timestamp}`,
    text: [
      'Neuer Download über das Formular.',
      '',
      `Locale:    ${locale}`,
      `Timestamp: ${timestamp}`,
      `Email:     ${email}`,
      '',
      'Das Deck wurde sofort auf dem Bildschirm angeboten — kein Follow-up nötig.',
    ].join('\n'),
  })

  if ('error' in result && result.error) {
    // Log failure without the address — PII stays out of logs
    console.error('[lead-gate] lead-mail send failed:', result.error?.name)
    return NextResponse.json({ ok: true, warn: 'lead-mail-send-failed' })
  }

  return NextResponse.json({ ok: true })
}
