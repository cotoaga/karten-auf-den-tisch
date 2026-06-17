/* German copy — canonical DE locale
 * Source: karten-auf-den-tisch.jsx (DE copy lifted verbatim where present)
 * ⚠ CONTENT GAP: "Warum ein Spiel?" section (DE equivalent of EN "Most AI edge cases are never decided")
 *   has no German copy in the source files. Flagged for Kurt to supply.
 *   Placeholder text marks the gap; do not machine-translate.
 */
export const de = {
  locale: "de" as "de" | "en",
  lang: "de",
  dir: "ltr" as "ltr" | "rtl",

  meta: {
    title: "Karten auf den Tisch — Das KI-Ethik-Spiel für Teams",
    description:
      "12 Dilemmas. Keine einfachen Antworten. Helft euch selber, wenn Chef, Kollegen und Compliance nicht helfen.",
    ogLocale: "de_DE",
  },

  nav: {
    flagEmoji: "🇩🇪",
    flagLabel: "Deutsch",
    otherLocale: "en",
    otherFlagEmoji: "🇺🇸",
    otherFlagLabel: "English",
  },

  hero: {
    kicker: "Das KI-Ethik-Spiel für Teams · CC BY-SA 4.0",
    title: "KARTEN AUF\nDEN TISCH!",
    subtitle: "12 Dilemmas. Keine einfachen Antworten.",
    creed:
      "Helft euch selber, wenn Chef, Kollegen und Compliance nicht helfen.",
    chips: ["3–6 Spieler", "45–90 Minuten", "12 Dilemma-Karten", "Kostenlos · Open Source"],
    ctaPrimary: "Spielen →",
    ctaSecondary: "Wie es funktioniert",
  },

  whyGame: {
    kicker: "Warum überhaupt ein Spiel",
    /* ⚠ CONTENT GAP — German copy for this section not in source files.
     * Kurt supplies. Do not machine-translate. */
    heading: "⚠ Inhalt fehlt — Kurt liefert deutschen Text",
    body: [
      "⚠ Diese Sektion hat noch keinen deutschen Text in den Quelldateien. Bitte liefere die deutsche Version des «Warum ein Spiel?»-Abschnitts nach (englisches Original in der EN-Vorlage: «Most AI edge cases are never decided. They just happen.»).",
    ],
    ampelGreen: { label: "Grün", desc: "\"Das geht, wir können es tun.\"" },
    ampelYellow: { label: "Gelb", desc: "\"Bedenken — braucht erst Bedingungen.\"" },
    ampelRed: { label: "Rot", desc: "\"No Way. Zu riskant, zu problematisch.\"" },
  },

  actOne: {
    kicker: "Spielmechanik · Akt 1",
    heading: "Vorlesen. Verdeckt abstimmen. Gleichzeitig aufdecken.",
    body: [
      "Eine Person liest den Fall vor. Dann wählt jeder verdeckt eine Karte — Grün, Gelb oder Rot. Kein Zeigen, keine Diskussion vorher, selbst denken. Auf «1, 2, 3» deckt alle gleichzeitig auf. Kein Abtasten, kein Schielen zum Chef.",
      "Alle gleich? Konsens, nächster Fall. Unterschiedlich? Jetzt wird's spannend. Warum seht ihr es anders? Was fehlt? Was würde Gelb zu Grün machen? Zehn Minuten, nicht mehr.",
      "Und die wichtigste Zeile des ganzen Regelwerks: Konsens ist nicht Pflicht. Manchmal ist die ehrlichste Antwort «wir sind uneinig, weil X.» Dann dokumentiert ihr die Meinungsverschiedenheit und macht weiter. Jeder Spieler hält auch eine private Karte, die nie auf den Tisch muss — gleich mehr dazu.",
      "Sechs Fälle so. Dann kommt die Pause.",
    ],
  },

  tenthMan: {
    kicker: "Spielmechanik · Akt 2 · Ab Fall 7",
    heading: "Der 10. Mann",
    context: "Israelischer Militärgeheimdienst, 1973",
    body: [
      "1973, Jom-Kippur-Krieg. Neun Analysten des israelischen Geheimdienstes waren einer Meinung: kein Angriff zu erwarten. Alle neun lagen falsch. Katastrophe.",
      "Danach galt eine neue Regel: wenn neun einer Meinung sind, muss der Zehnte das Gegenteil beweisen — auch wenn er persönlich nicht daran glaubt. Nicht weil der Zehnte klüger ist. Weil Konsens bei komplexen Entscheidungen gefährlich wird. Blinde Flecken wachsen, nicht schrumpfen. Kritische Stimmen verschwinden.",
      "Ab Fall 7 zieht jeder eine zusätzliche Karte verdeckt. Fünf weiße, eine schwarze.",
    ],
    whiteRole: "Nicht du diesmal.",
    whiteNote: "Aber einer deiner Kollegen schon. Du diskutierst normal weiter.",
    blackRole: "DU bist der 10. Mann.",
    blackNote:
      "Finde das stärkste Argument gegen die Mehrheit. Egal was du persönlich denkst. Dein Job beginnt jetzt.",
    bodyAfter: [
      "Der 10. Mann argumentiert gegen die Gruppe. Radikal — nicht «ein bisschen skeptisch». Er sucht das beste Gegenargument, nicht das bequemste. Es ist eine Rolle, keine Aussage — und genau deshalb funktioniert es. Niemand muss rechtfertigen, warum er schwierig ist. Die schwarze Karte ist das Mandat.",
    ],
    permission: "\"Ich hab die schwarze Karte.\" = Erlaubnis, dagegen zu sein.",
    bodyFinal: [
      "Darum geht es im Spiel: Wenn du die Schwächen nicht findest, findet sie jemand anderes — im Audit, in der Presse, vor Gericht. Der 10. Mann schützt die Gruppe vor sich selbst.",
    ],
  },

  joker: {
    kicker: "Die Karte, die keiner zurückgibt",
    heading: "Jeder hat einen Joker.",
    lead: "Klick auf die Karte. Entdecke, was darunter liegt.",
    lidTitle: "JOKER",
    lidSub:
      "Öffne die Karte, wenn DU ein ungutes Gefühl hast. Die Karte bleibt bei dir. Nutze sie so oft du willst. Verrate nicht, was drinsteht.",
    lidHint: "↑ aufdecken",
    goldenTitle: "Die Goldene Regel",
    goldenBody:
      "Wechsel die Perspektive! Stell dir vor: DU bist die betroffene Person. Wie würdest DU behandelt werden wollen? Genau so solltet ihr entscheiden.",
    goldenFooter: "BLEIBT FÜR IMMER IM SPIEL",
    bodyAfter: [
      "Jeder Spieler hat einen. Er geht nicht in die Diskussion, er wird nicht abgestimmt, er muss nie auf den Tisch. Wenn dein Bauch schreit — egal was die Gruppe «rational» gerade entscheidet — schlägst du den Deckel auf und liest, was darunter steht.",
      "Darunter steht keine Regel, keine Vorschrift, keine Compliance-Direktive. Darunter steht ein Perspektivwechsel. Und das ist der schärfste ethische Punkt im ganzen Stapel.",
    ],
    bodyFinal: [
      "Die anderen Karten kommen nach jeder Runde zurück in die Schachtel. Der Joker nicht. Er bleibt für das ganze Spiel in deiner Hand — geöffnet oder nicht. Intuition hat Gründe, die der Verstand noch nicht kennt; der Joker gibt ihr eine Stimme, ohne dass du sie rechtfertigen musst.",
      "Und hier schließt sich der Kreis zurück zur Werkbank: Fast jeder der zwölf Fälle versteckt eine betroffene Person, die in der Debatte leicht verloren geht — der vorher ausgesortete Bewerber, der Mitarbeiter auf der «Performance-Risiko-Liste», der abgelehnte Kreditkandidat, der Patient, der der Gesundheits-App wie einem Arzt vertraut. Der 10. Mann findet den blinden Fleck im Denken. Der Joker findet den Menschen am anderen Ende der Entscheidung. Zwei private Karten, zwei Wächter: einer für den Kopf, einer für das Gewissen.",
    ],
  },

  cases: {
    kicker: "12 Dilemmas",
    heading: "Von einfach bis unmöglich.",
    lead: "Steigende Komplexität. Steigende Ambiguität. Keine vorgegebenen Antworten.",
    phase1Label: "Phase 1 — Die Grundlagen",
    pivotLabel: "⚠ STOP — Spielmechanik ändert sich — 10. Mann betritt das Feld",
    phase2Label: "Phase 2 — Der 10. Mann",
    wendepunktLabel: "⚠ WENDEPUNKT",
    casePrefix: "Fall",
    difficultyLabel: "Schwierigkeit",
  },

  gift: {
    kicker: "Warum es kostenlos ist",
    heading: "Weil das genau der Punkt ist.",
    body: [
      "Mein Geschäft ist das Reparieren von Transformationen — nicht das Verkaufen von Abhängigkeit. Beratungen verschenken so etwas nicht; sie verkaufen Manntage, keine Lösungen. Ich mache mich lieber überflüssig.",
      "Dieses Spiel ist die ehrlichste Form davon: Euer Team lernt, KI-Grenzfälle selbst zu sehen, selbst zu diskutieren und Uneinigkeit selbst auszuhalten — ohne mich im Raum. Wenn es funktioniert, braucht ihr mich für diese Fälle nicht mehr. Gut.",
      "Also: Downloaden, drucken, spielen. Ändert, was nicht passt. Fügt eigene Fälle hinzu. Gebt es weiter. Das ist nicht nur erlaubt — das ist der Sinn.",
    ],
    ccLine: "⚖️ CC BY-SA 4.0 · Mit KI entwickelt, um besser die KI zu orchestrieren",
  },

  funnel: {
    kicker: "Wenn der Tisch nicht reicht",
    heading: "Nicht jeder Fall braucht einen Werkstatt-Termin.",
    lead: "Die meisten Grenzfälle entscheidet ihr selbst — am Tisch, als Team, mit drei Karten und einem 10. Mann. Manche nicht. Wenn das Spiel zeigt, dass ihr bei euren eigenen echten Systemen Fall für Fall uneinig seid, oder dass niemand wirklich weiß, was im Einsatz ist — dann liegt etwas auf der Werkbank, das mehr braucht als einen Spielabend.",
    path1Title: "Wo steht euer Fahrzeug?",
    path1Body:
      "Zwölf Fragen, fünf Minuten, eine Sofortauswertung — wie weit eure KI-Diagnose ist, und die Haltung, in der über KI gesprochen wird.",
    path1Cta: "KI-Standort-Bestimmung →",
    path1Href: "https://cotoaga.ai/ki-standortbestimmung-2026/",
    path2Title: "Motorhaube auf, bevor der Prüfer kommt.",
    path2Body:
      "Der KI-Workshop-Termin: ein halber Tag, schriftliche Befunde, Festpreis. Was läuft, was hängt, was ohnehin fällig ist — vor dem 2. August 2026.",
    path2Cta: "EU AI Act 2026 →",
    path2Href: "https://cotoaga.ai/eu-ai-act-2026/",
  },

  cta: {
    kicker: "Karten auf den Tisch — auch in echt",
    heading: "Hol das Deck.",
    lead: "Print-and-Play: zwölf Fälle, Abstimmkarten, Joker und die 10.-Mann-Erweiterung. Regeln inklusive. Ein kleines Gegengeschäft — du hinterlässt eine geschäftliche E-Mail, ich schicke das PDF. Kein Newsletter, kein Verkaufstrichter, ein Download.",
    emailPlaceholder: "Geschäftliche E-Mail",
    companyPlaceholder: "Unternehmen (optional)",
    submitLabel: "⬇︎ Deck schicken (PDF)",
    successHeading: "Schau in dein Postfach. 🃏",
    successBody:
      "Das Print-and-Play-PDF ist unterwegs. Drucken, schneiden, spielen — und gern weitergeben.",
    fine: "Für Teams ab 10 Personen gibt es eine Workshop-Edition mit Moderationsguide und produzierten Karten — kurt@cotoaga.ai. Für einen Spielabend zu viert reicht das PDF.",
  },

  seal: {
    triangleText:
      "Drei Punkte. Ein Dreieck. Kein Spektrum, kein Entweder-oder — drei verbundene Säulen, die sich gegenseitig stützen. {lit} kennt, was die Regulierung fordert. {sov} weiß, was die Organisation davon braucht. {eth} weiß, wo die Linie ist — und Karten auf den Tisch ist, wie ein Team diese Linie findet: gemeinsam, am Tisch, bevor es jemand anderes tut.",
    litLabel: "EU AI Act Literacy",
    sovLabel: "Cognitive Sovereignty",
    ethLabel: "Ethical AI Usage",
  },

  footer: {
    credit: "1982→2026 · 60 Jahre · 20 Länder · 7 Sprachen · C64→KI · 100% Skin-in-the-Game",
    tagline: "COTOAGA.AI — eine Mensch + KI Kollaboration · CC BY-SA 4.0",
    links: {
      portfolio: "Portfolio:",
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
    },
  },
};

export type Locale = typeof de;
