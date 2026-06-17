# COTOAGA.AI 2026 Design System
*Complete Reference — Original + Dark Scale*

**Philosophy:** Clean, spacious, mathematical precision with subtle elegance.  
**Reference Implementation:** `ai-risk-amplification/` gem  
**Last Updated:** 2026-02-24  
**Changelog:** Merged dark scale addendum (contributed by APEX Recruiting, 2026-02). Added practical guidance for color selection and font pairing.

---

## How to Read This Guide

This isn't a spec dump. It's organized around the decisions you actually make:

1. **Am I building light or dark?** → Jump to Color Themes
2. **What font do I use here?** → Jump to Typography Decisions
3. **How do I space this?** → Jump to Spacing System
4. **I need a component pattern** → Jump to Component Patterns
5. **Quick copy-paste starter** → Jump to Quick Start Templates

---

## Color System

### The Full Palette

Every color in the system, organized by role — not by hex value.

#### Brand Colors (The Identity)

| Token | Hex | Role | When to Use |
|-------|-----|------|-------------|
| `--cotoaga-green` | `#00A86B` | Primary action | Buttons, CTAs, success states, section titles. The "do something" color. |
| `--cotoaga-blue` | `#0088FF` | Interactive / hero | Hero titles, links, charts, interactive highlights. The "look here" color. |
| `--cotoaga-cyan` | `#00D4FF` | Accent / code | Code syntax, highlights, decorative accents. The "special" color. |

**Decision rule:** If the user should *act* on it → green. If the user should *notice* it → blue. If it's *decorative or technical* → cyan.

#### Semantic Colors (Meaning-Carriers)

| Token | Hex | Role | When to Use |
|-------|-----|------|-------------|
| `--cotoaga-ai-success` | `#098A5E` | Confirmation | "It worked" messages. Darker than brand green — intentionally calmer. |
| `--cotoaga-ai-info` | `#2F67B2` | Information | Help text, tooltips, informational banners. Cooler than brand blue. |
| `--cotoaga-ai-gold` | `#E9B320` | Warning / accent | Warnings, important notices, warm premium accents. |
| `--cotoaga-ai-sand` | `#EB9929` | Warm accent | Equivalent to APEX's `--apex-amber`. Premium warmth in light themes. |

**Note on sand/amber:** Same color (`#EB9929`), different semantic weight. COTOAGA.AI calls it "sand" for warm accent contexts. APEX calls it "amber" for premium identity. Both names are valid in their respective codebases.

#### Neutral Scale (Light to Dark)

This is the full spectrum. The scale is NOT uniform — it jumps from warm neutrals to cold blue-darks intentionally.

```
Lightest ──────────────────────────────────────────── Darkest

#FAFBFB  white          Light theme backgrounds
#E0E0E0  smoke          Borders, dividers (light themes)
#8A8A8A  grey-light     Subtle text, disabled states, light borders
#4A4A4A  grey           Secondary text, muted UI
#2D2D2D  grey-dark      Body text (light themes), warm dark surfaces
─── warm/cold boundary ───
#16213E  dark-marine    Card/panel surfaces (dark themes only)
#191A2E  deep-sky       Page backgrounds (dark themes only)
#0B0B0B  black          Pure black — use sparingly, never as bg
```

| Token | Hex | Temperature | Usage |
|-------|-----|-------------|-------|
| `--cotoaga-ai-white` | `#FAFBFB` | Neutral | Page backgrounds (light theme) |
| `--cotoaga-ai-smoke` | `#E0E0E0` | Neutral | Borders, dividers |
| `--cotoaga-ai-grey-light` | `#8A8A8A` | Neutral | Subtle text, secondary borders |
| `--cotoaga-ai-grey` | `#4A4A4A` | Neutral | Secondary text, disabled elements |
| `--cotoaga-ai-grey-dark` | `#2D2D2D` | Warm | Body text, dark UI elements |
| `--cotoaga-ai-dark-marine` | `#16213E` | Cold (blue) | Cards & panels in dark themes |
| `--cotoaga-ai-deep-sky` | `#191A2E` | Cold (indigo) | Deepest background in dark themes |
| `--cotoaga-ai-black` | `#0B0B0B` | Neutral | True black — rarely used directly |

**Critical distinction:** `grey-dark` (#2D2D2D) is a *warm* neutral. `dark-marine` and `deep-sky` are *cold* blue-tinted darks. They serve completely different emotional registers. Don't substitute one for the other.

### Picking Colors: Light Theme

You're building on a white background. Here's your decision tree:

| Element | Color | Why |
|---------|-------|-----|
| Page background | `--cotoaga-ai-white` (#FAFBFB) | Not pure white — slightly warm, easy on eyes |
| Body text | `--cotoaga-ai-grey-dark` (#2D2D2D) | High contrast but not harsh |
| Secondary text | `--cotoaga-ai-grey` (#4A4A4A) | Clearly subordinate to body text |
| Borders & dividers | `--cotoaga-ai-smoke` (#E0E0E0) | Visible but not heavy — 1px only |
| Hero titles | `--cotoaga-blue` (#0088FF) | Maximum attention |
| Section titles | `--cotoaga-green` (#00A86B) | Strong hierarchy, different from hero |
| Primary buttons | `--cotoaga-green` bg, white text | Action color |
| Links | `--cotoaga-blue` (#0088FF) | Standard interactive color |
| Code blocks | `--cotoaga-ai-grey-dark` bg (#2D2D2D), `--cotoaga-cyan` text (#00D4FF) | Dark island in light context |
| Subtle backgrounds | `rgba(0, 168, 107, 0.05)` | Green tint at 5% — barely visible |
| Table headers | `--cotoaga-green` bg, white text | Full-color headers, no shy pastels |

### Picking Colors: Dark Theme

You're building on deep-sky. Different rules apply.

| Element | Color | Why |
|---------|-------|-----|
| Page background | `--cotoaga-ai-deep-sky` (#191A2E) | Deepest livable dark — darker feels like void |
| Card/panel surface | `--cotoaga-ai-dark-marine` (#16213E) | Lifts visually from background |
| Body text | `--cotoaga-ai-white` (#FAFBFB) | High contrast on dark |
| Secondary text | `--cotoaga-ai-grey-light` (#8A8A8A) | Readable but subordinate |
| Borders | `rgba(255, 255, 255, 0.1)` | Subtle, not harsh white lines |
| Accent color | `--cotoaga-ai-sand` (#EB9929) | Warm amber pops against cold backgrounds |
| Hero titles | `--cotoaga-cyan` (#00D4FF) or white | Cyan reads beautifully on dark navy |
| Buttons | Context-dependent | Green still works; amber for premium feel |
| Code blocks | `--cotoaga-ai-deep-sky` or `--cotoaga-ai-dark-marine` | Depends on surrounding surface |

**Dark theme rule of thumb:** Never use `--cotoaga-ai-black` as a background. It's a void. `deep-sky` has enough indigo warmth to be livable. Card surfaces at `dark-marine` create depth through the blue-navy layering.

### Color Combinations That Work

**Light theme — professional/analytical:**
- Background: white → Cards: white with smoke borders → Text: grey-dark → Accents: green + blue

**Light theme — editorial/narrative:**
- Background: white → Callouts: green at 5% opacity → Text: grey-dark → Pull quotes: blue

**Dark theme — premium product (APEX pattern):**
- Background: deep-sky → Cards: dark-marine → Text: white → Accent: amber/sand → Interactive: cyan

**Dark theme — technical/developer:**
- Background: deep-sky → Code surfaces: dark-marine → Syntax: cyan → Alerts: gold

### Color Combinations to Avoid

- Green text on blue background (vibration)
- Cyan text on white background (too low contrast)
- Grey-light text on white background (fails WCAG)
- Dark-marine or deep-sky anywhere in light themes (they're dark-mode-only)
- Pure black backgrounds (oppressive — use deep-sky instead)
- Red as a primary color (reserved for critical errors only)

---

## Typography

### The Three Fonts

| Font | Role | Character | Load From |
|------|------|-----------|-----------|
| **Space Grotesk** | Display & headings | Geometric, slightly futuristic, authoritative | Google Fonts |
| **Inter** | Body & UI | Clean, highly legible, neutral | Google Fonts |
| **JetBrains Mono** | Code & data | Monospaced, distinguishable characters | Google Fonts |

```html
<!-- Always include this in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### When to Use Which Font

**Space Grotesk** — anything the user reads *first*. It commands attention.
- Hero titles, section headings, card titles, navigation labels
- Never for body paragraphs — it's too heavy for sustained reading
- Weights: 400 (rare), 500 (card titles), 600 (section titles), 700 (hero only)

**Inter** — anything the user reads *for content*. It disappears into the text.
- Body paragraphs, UI labels, buttons, form inputs, tooltips, metadata
- The default — when in doubt, use Inter
- Weights: 400 (body), 500 (emphasis), 600 (labels, buttons), 700 (rare, strong emphasis)

**JetBrains Mono** — anything that is *data, code, or computed*.
- Code blocks, inline code, formula displays, terminal output, IDs, hashes
- Also good for tabular numbers that need to align vertically
- Weights: 400 (standard), 500 (emphasized), 600 (headings in code contexts)

### Typography Scale

| Name | Size | Font | Weight | Use Case |
|------|------|------|--------|----------|
| Hero | 3rem (48px) | Space Grotesk | 700 | Page title, one per page max |
| Section | 2rem (32px) | Space Grotesk | 600 | Major content divisions |
| Card | 1.5rem (24px) | Space Grotesk | 500 | Card headers, sub-sections |
| Subtitle | 1.25rem (20px) | Space Grotesk | 500 | Minor headings |
| Lead | 1.125rem (18px) | Inter | 400 | Intro paragraphs, descriptions |
| Body | 1rem (16px) | Inter | 400 | Standard content |
| UI | 0.875rem (14px) | Inter | 600 | Buttons, labels, nav items |
| Caption | 0.75rem (12px) | Inter | 500 | Metadata, timestamps, badges |

### Line Heights

| Context | Value | Why |
|---------|-------|-----|
| Headings | 1.2 | Tight — large text needs less spacing |
| Body text | 1.6 | Comfortable reading rhythm |
| Large text blocks | 1.8 | Extra air for dense content |

### Letter Spacing

- Hero titles: `-0.02em` (slightly tighter — large text benefits from it)
- Buttons & badges: `0.05em` (wider — improves readability at small sizes, especially UPPERCASE)
- Everything else: default (0)

---

## Spacing System

Based on an 8px grid. Every spacing value is a multiple of 8 (with 4px for micro-adjustments).

```css
--space-xs:  4px;    /* Micro — badge padding, tight gaps */
--space-sm:  8px;    /* Small — between related elements */
--space-md:  16px;   /* Medium — standard internal padding */
--space-lg:  24px;   /* Large — card padding, grid gaps */
--space-xl:  32px;   /* XL — section padding */
--space-2xl: 48px;   /* 2XL — between sections, container padding */
--space-3xl: 64px;   /* 3XL — between major page divisions */
```

### When to Use What

| Spacing | Use For |
|---------|---------|
| 4px | Inside badges, between icon and label |
| 8px | Between title and subtitle, tight list items |
| 16px | Standard margins between paragraphs, cell padding |
| 24px | Card internal padding, grid gaps between cards |
| 32px | Section internal padding |
| 48px | Between sections, container side padding |
| 64px | Between major page divisions (hero → content, content → footer) |

### Container

```css
.gem-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-lg);  /* 48px top/bottom, 24px sides */
}
```

---

## Core Design Principles

### 1. Sharp Edges, No Curves
`border-radius: 0` everywhere. This is non-negotiable. The mathematical, geometric identity comes from sharp edges. If something looks like it needs rounding, the spacing or sizing is wrong — fix that instead.

### 2. Light Borders, Soft Shadows
- Borders: `1px solid var(--cotoaga-ai-smoke)` — visible but not heavy
- Shadows: `0 2px 8px rgba(0, 0, 0, 0.05)` — depth without weight
- Never: 2px+ borders, hard drop shadows, outline-heavy designs

### 3. Generous Space
If it feels spacious, it's about right. If it feels comfortable, add more space. Premium design breathes. Cramped design screams "built by an engineer on a deadline."

### 4. Hover States on Everything Interactive
Every clickable element gets a hover response. Standard pattern:
- `transform: translateY(-2px)` — subtle lift
- Border color shift to brand color
- Shadow increase
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` over `0.3s`

---

## Component Patterns

### Hero Section

```css
.hero-section {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.hero-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--cotoaga-blue);
  letter-spacing: -0.02em;
  margin: 0 0 var(--space-sm) 0;
}

.hero-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--cotoaga-green);
  margin: 0 0 var(--space-md) 0;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--cotoaga-ai-grey-dark);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
```

### Section Card

```css
.section-card {
  background: var(--cotoaga-ai-white);
  border: 1px solid var(--cotoaga-ai-smoke);
  border-radius: 0;
  padding: var(--space-xl);
  margin: var(--space-2xl) 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-card:hover {
  border-color: var(--cotoaga-green);
  box-shadow: 0 4px 16px rgba(0, 168, 107, 0.1);
}
```

### Grid Cards

```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.card {
  background: var(--cotoaga-ai-white);
  border: 1px solid var(--cotoaga-ai-smoke);
  border-radius: 0;
  padding: var(--space-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: var(--cotoaga-cyan);
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.1);
  transform: translateY(-2px);
}
```

### Accent Border Card (Left Stripe)

```css
.card-accent {
  background: var(--cotoaga-ai-white);
  border-left: 4px solid var(--cotoaga-blue);
  padding: var(--space-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
```

### Callout / Insight Box

```css
.callout {
  background: rgba(0, 168, 107, 0.05);
  border-left: 4px solid var(--cotoaga-green);
  padding: var(--space-lg);
  margin: var(--space-md) 0;
  font-style: italic;
}
```

### Buttons

```css
.btn-primary {
  background: var(--cotoaga-green);
  color: var(--cotoaga-ai-white);
  border: none;
  border-radius: 0;
  padding: 14px 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 160px;
}

.btn-primary:hover {
  background: var(--cotoaga-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 168, 107, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Tables

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--space-lg) 0;
}

.data-table th {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  background: var(--cotoaga-green);
  color: var(--cotoaga-ai-white);
  padding: var(--space-md);
  text-align: left;
}

.data-table td {
  padding: var(--space-md);
  border-bottom: 1px solid var(--cotoaga-ai-smoke);
}

.data-table tr:hover {
  background: rgba(0, 168, 107, 0.05);
}
```

### Code / Formula Display

```css
.code-display {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  background: var(--cotoaga-ai-grey-dark);
  color: var(--cotoaga-cyan);
  padding: var(--space-lg);
  border-radius: 0;
  margin: var(--space-lg) 0;
  overflow-x: auto;
  text-align: center;
}
```

### Badges

```css
.badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  border-radius: 0;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background: rgba(0, 168, 107, 0.2);
  color: var(--cotoaga-green);
  border: 1px solid var(--cotoaga-green);
}

.badge-info {
  background: rgba(0, 136, 255, 0.2);
  color: var(--cotoaga-blue);
  border: 1px solid var(--cotoaga-blue);
}

.badge-warning {
  background: rgba(233, 179, 32, 0.2);
  color: var(--cotoaga-ai-gold);
  border: 1px solid var(--cotoaga-ai-gold);
}
```

---

## Responsive Behavior

### Breakpoints

| Name | Range | Key Changes |
|------|-------|-------------|
| Mobile | ≤ 768px | Single column, hero scales to 2rem, tighter padding |
| Tablet | 769–1024px | Two columns where possible, standard padding |
| Desktop | ≥ 1025px | Full grid, maximum spacing |

### Mobile Adjustments

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;        /* Down from 3rem */
  }

  .section-title {
    font-size: 1.5rem;      /* Down from 2rem */
  }

  .gem-container {
    padding: var(--space-lg) var(--space-md);  /* Tighter sides */
  }

  .cards-grid {
    grid-template-columns: 1fr;  /* Stack to single column */
  }
}
```

---

## Transitions & Animation

### Standard Easing (Use Everywhere)

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

This is the only easing curve in the system. Don't introduce `ease-in-out`, `linear`, or custom curves without a reason.

### Hover Patterns

| Element | Effect |
|---------|--------|
| Cards | `translateY(-2px)` + shadow increase + border color shift |
| Buttons | `translateY(-2px)` + shadow increase |
| Table rows | Background color to `rgba(green, 0.05)` |
| Links | Color shift (no movement) |

---

## Do's and Don'ts

### Do

- Use 1px borders in `--cotoaga-ai-smoke`
- Add subtle shadows (`0 2px 8px rgba(0,0,0,0.05)`)
- Give generous padding (32px minimum for sections)
- Use Space Grotesk for headings, Inter for body, JetBrains Mono for code
- Keep backgrounds clean — `--cotoaga-ai-white` for light, `--cotoaga-ai-deep-sky` for dark
- Use `rgba()` overlays for subtle tinted backgrounds
- Apply hover effects to every interactive element
- Use full-color table headers (green or blue, not grey)
- Keep edges sharp — `border-radius: 0` always

### Don't

- Use thick borders (2px+)
- Use `--cotoaga-ai-dark-marine` or `--cotoaga-ai-deep-sky` in light themes
- Use `--cotoaga-ai-black` as a background (use deep-sky instead)
- Add `border-radius` to anything
- Use red as a primary or accent color (critical errors only)
- Skip hover effects on clickable elements
- Use hardcoded hex values instead of CSS variables
- Cram content — when in doubt, add more space
- Mix warm neutrals and cold darks without intention
- Use more than one hero title per page

---

## CSS Variables — Complete Reference

Copy this block into your base stylesheet or `<style>` tag.

```css
:root {
  /* Brand */
  --cotoaga-green: #00A86B;
  --cotoaga-blue: #0088FF;
  --cotoaga-cyan: #00D4FF;

  /* Semantic */
  --cotoaga-ai-success: #098A5E;
  --cotoaga-ai-info: #2F67B2;
  --cotoaga-ai-gold: #E9B320;
  --cotoaga-ai-sand: #EB9929;        /* = APEX --apex-amber */

  /* Neutral Scale (light → dark) */
  --cotoaga-ai-white: #FAFBFB;
  --cotoaga-ai-smoke: #E0E0E0;
  --cotoaga-ai-grey-light: #8A8A8A;
  --cotoaga-ai-grey: #4A4A4A;
  --cotoaga-ai-grey-dark: #2D2D2D;
  --cotoaga-ai-dark-marine: #16213E;  /* Dark theme only */
  --cotoaga-ai-deep-sky: #191A2E;     /* Dark theme only */
  --cotoaga-ai-black: #0B0B0B;

  /* Legacy Aliases (backward compat) */
  --cotoaga-white: #FAFAFA;
  --cotoaga-black: #0A0A0A;
  --cotoaga-charcoal: #2D2D2D;
  --cotoaga-grey-dark: #2D2D2D;
  --cotoaga-grey-light: #E0E0E0;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-primary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing (8px grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Line Height */
  --leading-tight: 1.2;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;
}
```

---

## Quick Start Templates

### Light Theme Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | COTOAGA.AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Paste CSS variables block from above */

    body {
      background: var(--cotoaga-ai-white);
      color: var(--cotoaga-ai-grey-dark);
      font-family: var(--font-primary);
      line-height: var(--leading-normal);
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--space-2xl) var(--space-lg);
    }

    .hero {
      text-align: center;
      margin-bottom: var(--space-3xl);
    }

    .hero h1 {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 700;
      color: var(--cotoaga-blue);
      letter-spacing: -0.02em;
      margin: 0 0 var(--space-sm) 0;
    }

    .section {
      background: var(--cotoaga-ai-white);
      border: 1px solid var(--cotoaga-ai-smoke);
      padding: var(--space-xl);
      margin: var(--space-2xl) 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .section:hover {
      border-color: var(--cotoaga-green);
      box-shadow: 0 4px 16px rgba(0, 168, 107, 0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>Your Title</h1>
      <p>Description text here.</p>
    </div>
    <div class="section">
      <!-- Content -->
    </div>
  </div>
</body>
</html>
```

### Dark Theme Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | COTOAGA.AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Paste CSS variables block from above */

    body {
      background: var(--cotoaga-ai-deep-sky);
      color: var(--cotoaga-ai-white);
      font-family: var(--font-primary);
      line-height: var(--leading-normal);
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--space-2xl) var(--space-lg);
    }

    .hero {
      text-align: center;
      margin-bottom: var(--space-3xl);
    }

    .hero h1 {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 700;
      color: var(--cotoaga-cyan);
      letter-spacing: -0.02em;
      margin: 0 0 var(--space-sm) 0;
    }

    .card {
      background: var(--cotoaga-ai-dark-marine);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: var(--space-xl);
      margin: var(--space-2xl) 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      border-color: var(--cotoaga-ai-sand);
      box-shadow: 0 4px 16px rgba(235, 153, 41, 0.15);
    }

    .accent {
      color: var(--cotoaga-ai-sand);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>Your Title</h1>
      <p>Description text here.</p>
    </div>
    <div class="card">
      <!-- Content -->
    </div>
  </div>
</body>
</html>
```

---

## Reference Implementations

| Product / Gem | Theme | Notes |
|---------------|-------|-------|
| AI Risk Amplification (`/ai-risk-amplification/`) | Light | The canonical reference for light theme |
| Klein Bottle (`/klein-bottle/`) | Light | Clean controls on visualization |
| Industrial AI Complex (`/industrial-ai-complex/`) | Light | Interactive graphs |
| APEX Recruiting | Dark | The canonical reference for dark theme + amber accent |

### Shared Assets
- `/shared/styles/cotoaga-ai.css` — CSS variables and base styles
- `/shared/scripts/responsive.js` — Mobile detection utility

---

*Clean elegance, not heavy decoration. Space, light, and subtle interactions create the premium feel. Sharp edges create the mathematical identity. The dark scale adds depth without void.*
