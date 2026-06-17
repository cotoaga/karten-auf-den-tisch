# CLAUDE.md — karten-auf-den-tisch

## Project Identity

**Product:** Karten auf den Tisch / Cards on the Table  
**Type:** Bilingual AI-ethics game — static Vercel-deployable web app  
**Target domain:** `kartenaufdentisch.cotoaga.ai`  
**Style Seed:** v2.1 (`../khaos-seeds/seed-style.md` — canonical)  
**Design System:** cotoaga.ai light theme (one sanctioned dark chapter: 10th Man)

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Vercel-native SSG (`output: "export"`)
- No backend. No animation libraries. CSS + IntersectionObserver only.
- `npm run lint && npm run typecheck && npm run build` — must be green before push

## Routes

- `/` → redirects to `/de/` (German default)
- `/de/` — German locale, SSG
- `/en/` — English locale, SSG

## Design Constraints (NON-NEGOTIABLE)

- `border-radius: 0` everywhere. No exceptions.
- Fonts: Space Grotesk (display) / Inter (body) / JetBrains Mono (mono). Kill Bricolage, Newsreader, Playfair, DM Sans.
- Colors via CSS variables only. Zero arbitrary hex in component code.
- Ampel colors (`--ampel-green`, `--ampel-yellow`, `--ampel-red`) are a sanctioned semantic exception — game mechanic, not decoration.
  - green → `#00A86B`, yellow → `#E9B320`, red → `#C0392B`
  - Forbidden: `#4ade80`, `#facc15`, `#ef4444` (Tailwind traffic-light defaults)
- No glow / blur / shimmer / gradient-text.
- `prefers-reduced-motion` honored: all animations degrade to static.

## Content Architecture

- `content/de.ts` — German copy
- `content/en.ts` — English copy  
- `content/cases.ts` — CASES array (bilingual, difficulty colors remapped)
- ⚠ **Content gap**: `de.ts` → `whyGame.body` placeholder — Kurt supplies German text for the "Warum ein Spiel?" section.

## Key Components

- `KartenPage` — main page (client, handles scroll interactions)
- `JokerCard` — CSS peel signature interaction
- `ActsRail` — fixed side nav dots (IntersectionObserver-driven)
- `RevealOnEnter` — IntersectionObserver reveal
- `LocaleSwitch` — flag switch preserving scroll ratio via sessionStorage
- `EmailGate` — UI-only stub (real delivery = separate ticket)

## Git Discipline

Branch: `kurt/cot-62-build-karten-auf-den-tisch-bilingual-vercel-app-on-the`  
Atomic commits: `feat|fix|refactor|chore(scope): desc`  
No drive-by refactors. No decorative deps.

## Verification Gate

```bash
npm run lint && npm run typecheck && npm run build
# Forbidden hex grep (must be empty in non-comment code):
grep -rE "(#4ade80|#facc15|#ef4444)" --include="*.tsx" --include="*.ts" --include="*.css" . --exclude-dir=node_modules --exclude-dir=.next
```
