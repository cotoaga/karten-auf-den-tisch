/* English copy — canonical EN locale
 * Source: cards-on-the-table.html (EN copy lifted verbatim)
 */
import type { Locale } from "./de";

export const en: Locale = {
  locale: "en",
  lang: "en",
  dir: "ltr",

  meta: {
    title: "Cards on the Table — The AI Ethics Game for Teams",
    description:
      "12 dilemmas. No easy answers. Help yourselves — when the boss, your colleagues and compliance won't.",
    ogLocale: "en_US",
  },

  nav: {
    flagEmoji: "🇺🇸",
    flagLabel: "English",
    otherLocale: "de",
    otherFlagEmoji: "🇩🇪",
    otherFlagLabel: "Deutsch",
  },

  hero: {
    kicker: "The AI ethics game for teams · CC BY-SA 4.0",
    title: "CARDS ON\nTHE TABLE!",
    subtitle: "12 dilemmas. No easy answers.",
    creed: "Help yourselves — when the boss, your colleagues and compliance won't.",
    chips: ["3–6 players", "45–90 minutes", "12 dilemma cards", "Free · Open Source"],
    ctaPrimary: "Play →",
    ctaSecondary: "How it works",
  },

  whyGame: {
    kicker: "Why a game at all",
    heading: "Most AI edge cases are never decided. They just happen.",
    body: [
      "Nobody calls a meeting to clarify whether internal strategy papers may be pasted into a public AI tool. It just happens. Nobody formally votes on whether the recruiting AI is fair — until a journalist crunches the numbers. The edge cases stay invisible until they get expensive.",
      "The problem isn't that teams make bad decisions. The problem is that they don't notice they're deciding at all. And when something does get discussed, the best argument rarely wins — the highest rank or the loudest conviction does.",
      "An honest workshop sorts before it wrenches. This game is the sorting — structured, free of the boss effect, with dissent built in. Three cards, one honest discussion, and the permission to disagree.",
    ],
    ampelGreen: { label: "Green", desc: "\"This is fine, we can do it.\"" },
    ampelYellow: { label: "Yellow", desc: "\"Concerns — needs conditions first.\"" },
    ampelRed: { label: "Red", desc: "\"No way. Too risky, too problematic.\"" },
  },

  actOne: {
    kicker: "How it runs · Act 1",
    heading: "Read it out. Vote face down. Flip together.",
    body: [
      "One person reads the case aloud. Then everyone picks a card face down — green, yellow or red. No showing, no discussing first, think on your own. On \"1, 2, 3\" everyone flips at once. No feeling-out, no glancing at the boss.",
      "All the same? Consensus, next case. Different? Now it gets interesting. Why do you see it differently? What information is missing? What would turn yellow into green? Ten minutes, no more.",
      "And the most important line in the whole rulebook: consensus is not mandatory. Sometimes the most honest answer is \"we disagree, because X.\" Then you document the dissent and move on. Each player also holds one private card that never has to hit the table — more on that in a moment.",
      "Six cases like this. Then comes the break.",
    ],
  },

  tenthMan: {
    kicker: "How it runs · Act 2 · From case 7",
    heading: "The 10th Man",
    context: "Israeli Military Intelligence, 1973",
    body: [
      "1973, the Yom Kippur War. Nine analysts of Israeli intelligence agreed: no attack to be expected. All nine were wrong. Catastrophe followed.",
      "Afterwards a new rule applied: when nine agree, the tenth must prove the opposite — even if he personally doesn't believe it. Not because the tenth is smarter. Because consensus becomes dangerous on complex decisions. Blind spots grow, not shrink. Critical voices disappear.",
      "From case 7 on, everyone draws an extra card face down. Five white, one black.",
    ],
    whiteRole: "Not you this time.",
    whiteNote: "But one of your colleagues is. You keep discussing normally.",
    blackRole: "YOU are the 10th Man.",
    blackNote:
      "Find the strongest argument against the majority. No matter what you personally think. Your job starts now.",
    bodyAfter: [
      "The 10th Man argues against the group. Radically — not \"a little skeptical.\" He looks for the best counter-argument, not the most comfortable one. It's a role, not a statement — and that's exactly why it works. Nobody has to justify why they're being difficult. The black card is the mandate.",
    ],
    permission: "\"I've got the black card.\" = Permission to disagree.",
    bodyFinal: [
      "That's the whole point of the game: if you don't find the weaknesses, someone else will — in the audit, in the press, in court. The 10th Man protects the group from itself.",
    ],
  },

  joker: {
    kicker: "The card nobody hands back",
    heading: "Everyone has a Joker.",
    lead: "Click the card. Discover what lies beneath.",
    lidTitle: "JOKER",
    lidSub:
      "Open this card when YOU have a bad feeling. It stays with you. Use it as often as you like. Don't reveal what's inside.",
    lidHint: "↑ peel the lid",
    goldenTitle: "The Golden Rule",
    goldenBody:
      "Switch perspective. Imagine: YOU are the affected person. How would YOU want to be treated? That's exactly how you should decide.",
    goldenFooter: "STAYS IN THE GAME FOREVER",
    bodyAfter: [
      "Every player has one. It doesn't enter the discussion, it isn't voted on, it never has to hit the table. When your gut screams — no matter what the group is \"rationally\" deciding — you peel back the lid and read what's underneath.",
      "Underneath there's no rule, no statute, no compliance directive. Underneath there's a shift in perspective. And that's the sharpest ethical point in the whole deck.",
    ],
    bodyFinal: [
      "The other cards go back in the box after every round. The Joker doesn't. It stays in your hand for the whole game — opened or not. Intuition has reasons the mind doesn't know yet; the Joker gives it a voice, without you having to justify it.",
      "And this is where the circle closes back to the workbench: almost every one of the twelve cases hides an affected person who easily gets lost in the debate — the pre-screened applicant, the employee on the \"performance-risk list,\" the rejected loan candidate, the patient who trusts the health app like a doctor. The 10th Man finds the blind spot in the thinking. The Joker finds the human on the other end of the decision. Two private cards, two guardians: one for the head, one for the conscience.",
    ],
  },

  cases: {
    kicker: "12 Dilemmas",
    heading: "From simple to impossible.",
    lead: "Escalating complexity. Escalating ambiguity. No prescribed answers.",
    phase1Label: "Phase 1 — The Basics",
    pivotLabel: "⚠ STOP — Game mechanic changes — The 10th Man enters",
    phase2Label: "Phase 2 — The 10th Man",
    wendepunktLabel: "⚠ PIVOT",
    casePrefix: "Case",
    difficultyLabel: "Difficulty",
  },

  gift: {
    kicker: "Why it's free",
    heading: "Because that's exactly the point.",
    body: [
      "My business is repairing transformations — not selling dependency. Consultancies don't give something like this away; they sell FTEs, not solutions. I'd rather make myself redundant.",
      "This game is the most honest form of that: your team learns to see AI edge cases itself, discuss them itself, and tolerate disagreement itself — without me in the room. If it works, you won't need me for these cases anymore. Good.",
      "So: download it, print it, play it. Change what doesn't fit. Add your own cases. Pass it on. That's not merely allowed — it's the whole idea.",
    ],
    ccLine: "⚖️ CC BY-SA 4.0 · Built with AI, to orchestrate AI better",
  },

  funnel: {
    kicker: "When the table isn't enough",
    heading: "Not every case needs an appointment at the workshop.",
    lead: "You decide most edge cases yourselves — at the table, as a team, with three cards and a 10th Man. Some you don't. When the game reveals that you disagree on your own real systems case after case, or that nobody actually knows what's in operation — then something's on the workbench that needs more than a game night.",
    path1Title: "Where does your vehicle stand?",
    path1Body:
      "Twelve questions, five minutes, an instant reading — how far along your AI diagnosis is, and the posture in which AI gets talked about in your organization.",
    path1Cta: "KI-Standort-Bestimmung →",
    path1Href: "https://cotoaga.ai/ki-standortbestimmung-2026/",
    path2Title: "Hood up, before the inspector arrives.",
    path2Body:
      "The AI workshop appointment: half a day, written findings, fixed price. What runs, what's stuck, what's due anyway — before August 2, 2026.",
    path2Cta: "EU AI Act 2026 →",
    path2Href: "https://cotoaga.ai/eu-ai-act-2026/",
  },

  cta: {
    kicker: "Cards on the table — in real life too",
    heading: "Get the deck.",
    lead: "Print-and-play: twelve cases, voting cards, Joker, and the 10th-Man expansion. Rules included. A small quid pro quo — you leave a business email, I send the PDF. No newsletter, no sales funnel, one download.",
    emailPlaceholder: "Business email",
    companyPlaceholder: "Company (optional)",
    submitLabel: "⬇︎ Send me the deck (PDF)",
    successHeading: "On its way. 🃏",
    successBody:
      "The deck is heading to your inbox — and available here for direct download if you need it faster.",
    fine: "For teams of 10+ there's a workshop edition with a facilitator guide and produced cards — kurt@cotoaga.ai. For a game night of four, the PDF is all you need.",
    consentLabel: "I have read the privacy policy and consent to a single follow-up email.",
    privacyHref: "https://cotoaga.net/privacy",
    downloadLabel: "Download now (German PDF)",
    downloadNote: "The deck is currently available in German only — English edition coming.",
    pdfHref: "/downloads/karten-auf-den-tisch_de.pdf",
  },

  seal: {
    triangleText:
      "Three points. One triangle. Not a spectrum, not an either/or — three connected pillars that hold each other up. {lit} knows what the regulation demands. {sov} knows what the organization needs from it. {eth} knows where the line is — and Cards on the Table is how a team finds that line: together, at the table, before anyone else does.",
    litLabel: "EU AI Act Literacy",
    sovLabel: "Cognitive Sovereignty",
    ethLabel: "Ethical AI Usage",
  },

  footer: {
    credit: "1982→2026 · 60 Years · 20 Countries · 7 Languages · C64→AI · 100% Skin-in-the-Game",
    tagline: "COTOAGA.AI — a Human + AI Collaboration · CC BY-SA 4.0",
    links: {
      portfolio: "Portfolio:",
      imprint: "Imprint",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};
