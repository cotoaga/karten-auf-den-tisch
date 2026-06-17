/* CASES array lifted verbatim from karten-auf-den-tisch.jsx
 * Colors remapped to design system: Tailwind-default traffic-light hex removed.
 * Ampel-range colors are semantic to the game mechanic (sanctioned exception in COT-62).
 *   #4ade80 → #00A86B (brand green / ampel-green)
 *   #facc15 → #E9B320 (gold / ampel-yellow)
 *   #f97316 → #EB9929 (sand/amber — warm transition)
 *   #ef4444 → #C0392B (stop-light red — sanctioned one-off)
 *   #dc2626 → #A93226 (darker stop-light red)
 */
export interface Case {
  id: number;
  titleDe: string;
  titleEn: string;
  subtitleDe: string;
  subtitleEn: string;
  difficulty: number;
  color: string;
  pivot?: boolean;
  questionDe?: string;
  questionEn?: string;
  descriptionDe?: string;
  descriptionEn?: string;
}

export const CASES: Case[] = [
  {
    id: 1,
    titleDe: "Der Praktikant",
    titleEn: "The Intern",
    subtitleDe: "ChatGPT im Büroalltag",
    subtitleEn: "ChatGPT in daily work",
    difficulty: 1,
    color: "#00A86B",
    questionDe: "Okay oder eingreifen?",
    questionEn: "Is this fine, or do you need to step in?",
    descriptionDe: "Ein Praktikant wirft die Briefing-Notizen aus dem Kundengespräch in ChatGPT, um Social Posts zu entwerfen. Keine Personaldaten — aber Produktstrategie und Launch-Timing, noch nicht öffentlich.",
    descriptionEn: "An intern dumps the briefing notes from the client meeting into ChatGPT to draft social posts. No personal data — but product strategy and launch timing, not yet public.",
  },
  {
    id: 2,
    titleDe: "Die Bewerbungs-KI",
    titleEn: "The Recruiting AI",
    subtitleDe: "HR trifft EU AI Act",
    subtitleEn: "HR meets EU AI Act",
    difficulty: 2,
    color: "#00A86B",
    questionDe: "Darf man das einsetzen?",
    questionEn: "May you deploy it?",
  },
  {
    id: 3,
    titleDe: "Der Chatbot mit Persönlichkeit",
    titleEn: "The Chatbot with a Personality",
    subtitleDe: "Transparenz vs. Täuschung",
    subtitleEn: "Transparency vs. deception",
    difficulty: 2,
    color: "#E9B320",
    questionDe: "Transparenz oder stille Täuschung?",
    questionEn: "Transparent or quiet deception?",
  },
  {
    id: 4,
    titleDe: "Training Data Dilemma",
    titleEn: "Training Data Dilemma",
    subtitleDe: "Statistik vs. Stereotypen",
    subtitleEn: "Statistics vs. stereotypes",
    difficulty: 3,
    color: "#E9B320",
  },
  {
    id: 5,
    titleDe: "Der Whistle-Blower Bot",
    titleEn: "The Whistle-Blower Bot",
    subtitleDe: "Gute Überwachung?",
    subtitleEn: "Good surveillance?",
    difficulty: 3,
    color: "#E9B320",
  },
  {
    id: 6,
    titleDe: "Die Daten-Kooperation",
    titleEn: "The Data Cooperation",
    subtitleDe: "Public Good vs. IP",
    subtitleEn: "Public Good vs. IP",
    difficulty: 3,
    color: "#EB9929",
  },
  {
    id: 7,
    titleDe: "Predictive Firing",
    titleEn: "The Predictive-Firing AI",
    subtitleDe: "Der Wendepunkt",
    subtitleEn: "The pivot",
    difficulty: 4,
    color: "#C0392B",
    pivot: true,
    questionDe: "Darf man es einsetzen? Will man es?",
    questionEn: "May you deploy it? Do you want to?",
    descriptionDe: "Das US-Mutterhaus prognostiziert, wer in sechs Monaten 'underperformen' wird. US-HR: 'Das ist nur ein Dashboard.' Realität: Manager starten präventive Performance-Pläne. Jetzt kommt das System in eure EU-Niederlassung.",
    descriptionEn: "The US parent company predicts who will 'underperform' in six months. US HR: 'It's just a dashboard.' Reality: managers launch preemptive performance plans. Now the system is coming to your EU branch.",
  },
  {
    id: 8,
    titleDe: "Content-Moderation",
    titleEn: "Content Moderation",
    subtitleDe: "94% Accuracy reicht?",
    subtitleEn: "94% accuracy enough?",
    difficulty: 4,
    color: "#C0392B",
  },
  {
    id: 9,
    titleDe: "Die Gesundheits-KI",
    titleEn: "The Health AI",
    subtitleDe: "Legal ≠ Ethisch",
    subtitleEn: "Legal ≠ Ethical",
    difficulty: 4,
    color: "#C0392B",
  },
  {
    id: 10,
    titleDe: "Der Bias-Amplifier",
    titleEn: "The Bias Amplifier",
    subtitleDe: "Systemischer Bias",
    subtitleEn: "Systemic bias",
    difficulty: 5,
    color: "#A93226",
  },
  {
    id: 11,
    titleDe: "Der Transparenz-Trade-off",
    titleEn: "The Transparency Trade-off",
    subtitleDe: "Accuracy vs. Erklärbarkeit",
    subtitleEn: "Accuracy vs. explainability",
    difficulty: 5,
    color: "#A93226",
  },
  {
    id: 12,
    titleDe: "Die KI-Governance-KI",
    titleEn: "The AI-Governance AI",
    subtitleDe: "Quis custodiet?",
    subtitleEn: "Quis custodiet?",
    difficulty: 5,
    color: "#A93226",
    questionDe: "Brillante Lösung — oder ein neues Problem?",
    questionEn: "Brilliant solution — or a new problem?",
    descriptionDe: "Ein Anbieter bietet eine Meta-KI an, die alle anderen KI-Systeme überwacht. Der Vorstand ist begeistert. Legal fragt: 'Wer überwacht die Governance-KI?' Ein Ingenieur sagt: 'Das ist Skynet-Territorium.'",
    descriptionEn: "A vendor offers a meta-AI that monitors all your other AI systems. The board loves it. Legal asks: 'Who monitors the governance AI?' An engineer says: 'This is Skynet territory.'",
  },
];
