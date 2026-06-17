"use client";

import { CASES } from "@/content/cases";
import { JokerCard } from "./JokerCard";
import { ActsRail } from "./ActsRail";
import { RevealOnEnter } from "./RevealOnEnter";
import { LocaleSwitch } from "./LocaleSwitch";
import { EmailGate } from "./EmailGate";
import type { Locale } from "@/content/de";

interface KartenPageProps {
  t: Locale;
}

const DIFFICULTY_STARS = (n: number) =>
  "★".repeat(n) + "☆".repeat(5 - n);

export function KartenPage({ t }: KartenPageProps) {
  const locale = t.locale;

  return (
    <div className="page-shell">
      <ActsRail />

      {/* ── HEADER — outside scroll container so snap targets are never obscured ── */}
      <header
        style={{
          flexShrink: 0,
          background: "var(--brand-surface)",
          borderBottom: "1px solid var(--brand-border)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "var(--space-md) var(--space-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                color: "var(--brand-text-body)",
              }}
            >
              COTOAGA
              <span style={{ color: "var(--cotoaga-cyan)" }}>.AI</span>
            </span>
          </div>
          <LocaleSwitch currentLocale={locale} />
        </div>
      </header>

      <div className="chapter-spine">

        {/* ══════════════════════════════════════
            CHAPTER 1 — SETUP / HERO
        ══════════════════════════════════════ */}
        <section
          id="chapter-hero"
          className="chapter-beat"
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%" }}>
            <RevealOnEnter delay={0}>
              <div className="section-kicker">{t.hero.kicker}</div>
            </RevealOnEnter>

            <RevealOnEnter delay={80}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "var(--brand-hero-color)",
                  whiteSpace: "pre-line",
                  margin: "var(--space-sm) 0 var(--space-md)",
                }}
              >
                {t.hero.title}
              </h1>
            </RevealOnEnter>

            <RevealOnEnter delay={160}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  color: "var(--brand-primary)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {t.hero.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1.125rem",
                  color: "var(--brand-text-secondary)",
                  maxWidth: 600,
                  lineHeight: 1.6,
                  marginBottom: "var(--space-xl)",
                }}
              >
                {t.hero.creed}
              </p>
            </RevealOnEnter>

            <RevealOnEnter delay={240}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-sm)",
                  marginBottom: "var(--space-xl)",
                }}
              >
                {t.hero.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.8125rem",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--brand-border)",
                      padding: "6px 14px",
                      color: "var(--brand-text-body)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
                <a
                  href="#chapter-cases"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("chapter-cases")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "14px 28px",
                    background: "var(--brand-primary)",
                    color: "var(--cotoaga-ai-white)",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#chapter-act1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("chapter-act1")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-primary)",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "14px 28px",
                    background: "transparent",
                    color: "var(--brand-text-secondary)",
                    textDecoration: "none",
                    border: "1px solid var(--brand-border)",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </RevealOnEnter>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY A GAME (Act 1 setup + Ampel)
        ══════════════════════════════════════ */}
        <section
          id="chapter-act1"
          className="chapter-beat"
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <RevealOnEnter>
              <div className="section-kicker">{t.whyGame.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  color: "var(--brand-primary)",
                  marginBottom: "var(--space-xl)",
                  maxWidth: 800,
                }}
              >
                {t.whyGame.heading}
              </h2>
            </RevealOnEnter>

            <div style={{ maxWidth: 720, marginBottom: "var(--space-2xl)" }}>
              {t.whyGame.body.map((para, i) => (
                <RevealOnEnter key={i} delay={i * 80}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "var(--brand-text-body)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>

            {/* Ampel cards */}
            <RevealOnEnter>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-3xl)",
                }}
              >
                {[
                  { color: "var(--ampel-green)", textColor: "#fff", ...t.whyGame.ampelGreen },
                  { color: "var(--ampel-yellow)", textColor: "var(--cotoaga-ai-grey-dark)", ...t.whyGame.ampelYellow },
                  { color: "var(--ampel-red)", textColor: "#fff", ...t.whyGame.ampelRed },
                ].map((card, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "1 1 180px",
                      minWidth: 160,
                      background: card.color,
                      color: card.textColor,
                      padding: "var(--space-lg)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                      transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      {card.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.45,
                        opacity: 0.95,
                      }}
                    >
                      {card.desc}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnEnter>

            {/* Act 1 mechanics */}
            <RevealOnEnter>
              <div className="section-kicker">{t.actOne.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "var(--brand-text-body)",
                  marginBottom: "var(--space-xl)",
                  maxWidth: 700,
                }}
              >
                {t.actOne.heading}
              </h2>
            </RevealOnEnter>

            <div style={{ maxWidth: 720 }}>
              {t.actOne.body.map((para, i) => (
                <RevealOnEnter key={i} delay={i * 60}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "var(--brand-text-body)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CHAPTER 3 — THE 10TH MAN (dark drop)
        ══════════════════════════════════════ */}
        <section
          id="chapter-tenth"
          className="chapter-beat tenth-man-chapter"
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <RevealOnEnter>
              <div
                className="section-kicker"
                style={{ color: "var(--cotoaga-ai-gold)" }}
              >
                {t.tenthMan.kicker}
              </div>
            </RevealOnEnter>

            <RevealOnEnter delay={80}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--cotoaga-ai-white)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                {t.tenthMan.heading}
              </h2>
            </RevealOnEnter>

            <RevealOnEnter delay={120}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--cotoaga-ai-gold)",
                  marginBottom: "var(--space-xl)",
                }}
              >
                {t.tenthMan.context}
              </div>
            </RevealOnEnter>

            <div style={{ maxWidth: 720, marginBottom: "var(--space-2xl)" }}>
              {t.tenthMan.body.map((para, i) => (
                <RevealOnEnter key={i} delay={i * 60}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "rgba(250,251,251,0.80)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>

            {/* White / Black cards */}
            <RevealOnEnter>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-lg)",
                  marginBottom: "var(--space-2xl)",
                  flexWrap: "wrap",
                }}
              >
                {/* White card */}
                <div
                  style={{
                    width: 168,
                    minHeight: 220,
                    background: "var(--cotoaga-ai-white)",
                    color: "var(--cotoaga-ai-grey-dark)",
                    border: "1.5px solid var(--cotoaga-ai-grey-dark)",
                    padding: "var(--space-lg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "4px 6px 0 rgba(0,0,0,0.35)",
                    transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                    }}
                  >
                    ⚪
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        lineHeight: 1.15,
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      {t.tenthMan.whiteRole}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "0.8125rem",
                        lineHeight: 1.45,
                        opacity: 0.75,
                      }}
                    >
                      {t.tenthMan.whiteNote}
                    </div>
                  </div>
                </div>

                {/* Black card */}
                <div
                  style={{
                    width: 168,
                    minHeight: 220,
                    background: "#000",
                    color: "var(--cotoaga-ai-white)",
                    border: "1.5px solid var(--cotoaga-ai-gold)",
                    padding: "var(--space-lg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "4px 6px 0 rgba(0,0,0,0.5)",
                    transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                    }}
                  >
                    ⚫
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        lineHeight: 1.15,
                        color: "var(--cotoaga-ai-gold)",
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      {t.tenthMan.blackRole}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "0.8125rem",
                        lineHeight: 1.45,
                        opacity: 0.8,
                      }}
                    >
                      {t.tenthMan.blackNote}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnEnter>

            <div style={{ maxWidth: 720 }}>
              {t.tenthMan.bodyAfter.map((para, i) => (
                <RevealOnEnter key={i}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "rgba(250,251,251,0.80)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>

            <RevealOnEnter>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                  color: "var(--cotoaga-ai-gold)",
                  letterSpacing: "-0.01em",
                  margin: "var(--space-xl) 0",
                }}
              >
                {t.tenthMan.permission}
              </p>
            </RevealOnEnter>

            <div style={{ maxWidth: 720 }}>
              {t.tenthMan.bodyFinal.map((para, i) => (
                <RevealOnEnter key={i}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "rgba(250,251,251,0.80)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CHAPTER 4 — THE JOKER (signature set-piece)
        ══════════════════════════════════════ */}
        <section
          id="chapter-joker"
          className="chapter-beat"
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
            background: "radial-gradient(ellipse at 70% 0%, rgba(233,179,32,0.07) 0%, transparent 60%)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <RevealOnEnter>
              <div className="section-kicker">{t.joker.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--brand-text-body)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {t.joker.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1rem",
                  color: "var(--brand-text-secondary)",
                  marginBottom: "var(--space-2xl)",
                }}
              >
                {t.joker.lead}
              </p>
            </RevealOnEnter>

            <div
              style={{
                display: "flex",
                gap: "var(--space-3xl)",
                alignItems: "flex-start",
                flexWrap: "wrap",
                marginBottom: "var(--space-2xl)",
              }}
            >
              <RevealOnEnter>
                <JokerCard t={t.joker} />
              </RevealOnEnter>

              <div style={{ flex: "1 1 300px", maxWidth: 520 }}>
                {t.joker.bodyAfter.map((para, i) => (
                  <RevealOnEnter key={i} delay={i * 80}>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "var(--brand-text-body)",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      {para}
                    </p>
                  </RevealOnEnter>
                ))}
              </div>
            </div>

            <div style={{ maxWidth: 720 }}>
              {t.joker.bodyFinal.map((para, i) => (
                <RevealOnEnter key={i} delay={i * 60}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "var(--brand-text-body)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CHAPTER 5 — CASES (horizontal deck)
        ══════════════════════════════════════ */}
        <section
          id="chapter-cases"
          className="chapter-beat"
          style={{
            padding: "var(--space-3xl) 0",
            borderBottom: "1px solid var(--brand-border)",
          }}
        >
          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "0 var(--space-lg)",
              marginBottom: "var(--space-2xl)",
            }}
          >
            <RevealOnEnter>
              <div className="section-kicker">{t.cases.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--brand-text-body)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {t.cases.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1rem",
                  color: "var(--brand-text-secondary)",
                  maxWidth: 480,
                }}
              >
                {t.cases.lead}
              </p>
            </RevealOnEnter>
          </div>

          {/* Phase 1 deck */}
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <div
              style={{
                padding: "0 var(--space-lg)",
                maxWidth: 1400,
                margin: "0 auto var(--space-md)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ampel-green)",
                }}
              >
                {t.cases.phase1Label}
              </span>
            </div>
            <div className="case-deck-track">
              {CASES.slice(0, 6).map((c) => (
                <CaseCard key={c.id} c={c} t={t.cases} locale={locale} />
              ))}
            </div>
          </div>

          {/* Pivot divider */}
          <div
            style={{
              padding: "var(--space-xl) var(--space-lg)",
              maxWidth: 1400,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "var(--space-lg)",
                right: "var(--space-lg)",
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(192,57,43,0.3), transparent)",
              }}
            />
            <span
              style={{
                position: "relative",
                background: "var(--brand-surface)",
                padding: "0 var(--space-lg)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ampel-red)",
              }}
            >
              {t.cases.pivotLabel}
            </span>
          </div>

          {/* Phase 2 deck */}
          <div>
            <div
              style={{
                padding: "0 var(--space-lg)",
                maxWidth: 1400,
                margin: "0 auto var(--space-md)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ampel-red)",
                }}
              >
                {t.cases.phase2Label}
              </span>
            </div>
            <div className="case-deck-track">
              {CASES.slice(6).map((c) => (
                <CaseCard key={c.id} c={c} t={t.cases} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            GIFT + FUNNEL
        ══════════════════════════════════════ */}
        <section
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <RevealOnEnter>
              <div className="section-kicker">{t.gift.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.2,
                  color: "var(--brand-text-body)",
                  marginBottom: "var(--space-xl)",
                  maxWidth: 700,
                }}
              >
                {t.gift.heading}
              </h2>
            </RevealOnEnter>

            <div style={{ maxWidth: 660, marginBottom: "var(--space-2xl)" }}>
              {t.gift.body.map((para, i) => (
                <RevealOnEnter key={i} delay={i * 60}>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      color: "var(--brand-text-body)",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {para}
                  </p>
                </RevealOnEnter>
              ))}
              <RevealOnEnter>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                    border: "1px solid var(--brand-border)",
                    padding: "var(--space-sm) var(--space-md)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    letterSpacing: "0.04em",
                    color: "var(--brand-text-body)",
                    marginTop: "var(--space-sm)",
                  }}
                >
                  {t.gift.ccLine}
                </div>
              </RevealOnEnter>
            </div>

            {/* Funnel paths */}
            <RevealOnEnter>
              <div className="section-kicker">{t.funnel.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "var(--brand-text-body)",
                  marginBottom: "var(--space-md)",
                  maxWidth: 700,
                }}
              >
                {t.funnel.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "var(--brand-text-body)",
                  maxWidth: 720,
                  marginBottom: "var(--space-xl)",
                }}
              >
                {t.funnel.lead}
              </p>
            </RevealOnEnter>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--space-lg)",
              }}
            >
              {[
                { title: t.funnel.path1Title, body: t.funnel.path1Body, cta: t.funnel.path1Cta, href: t.funnel.path1Href },
                { title: t.funnel.path2Title, body: t.funnel.path2Body, cta: t.funnel.path2Cta, href: t.funnel.path2Href },
              ].map((path, i) => (
                <RevealOnEnter key={i} delay={i * 80}>
                  <div
                    style={{
                      borderLeft: "3px solid var(--brand-primary)",
                      paddingLeft: "var(--space-lg)",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "1.125rem",
                        marginBottom: "var(--space-sm)",
                        color: "var(--brand-text-body)",
                      }}
                    >
                      {path.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "var(--brand-text-secondary)",
                        marginBottom: "var(--space-sm)",
                      }}
                    >
                      {path.body}
                    </p>
                    <a
                      href={path.href}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--brand-primary)",
                        textDecoration: "none",
                        borderBottom: "2px solid var(--brand-primary)",
                      }}
                    >
                      {path.cta}
                    </a>
                  </div>
                </RevealOnEnter>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CHAPTER 6 — CTA / EMAIL GATE
        ══════════════════════════════════════ */}
        <section
          id="chapter-cta"
          className="chapter-beat"
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
            background: "var(--brand-tint-bg)",
          }}
        >
          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <RevealOnEnter>
              <div className="section-kicker">{t.cta.kicker}</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--brand-primary)",
                  marginBottom: "var(--space-md)",
                }}
              >
                {t.cta.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "var(--brand-text-secondary)",
                  maxWidth: 560,
                  margin: "0 auto var(--space-xl)",
                }}
              >
                {t.cta.lead}
              </p>
            </RevealOnEnter>

            <RevealOnEnter delay={100}>
              <EmailGate t={t.cta} />
            </RevealOnEnter>

            <RevealOnEnter delay={160}>
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "0.9375rem",
                  color: "var(--brand-text-secondary)",
                  marginTop: "var(--space-lg)",
                  maxWidth: 560,
                  margin: "var(--space-lg) auto 0",
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{
                  __html: t.cta.fine.replace(
                    "kurt@cotoaga.ai",
                    '<a href="mailto:kurt@cotoaga.ai" style="color:var(--brand-primary)">kurt@cotoaga.ai</a>'
                  ),
                }}
              />
            </RevealOnEnter>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CLOSING SEAL
        ══════════════════════════════════════ */}
        <section
          style={{
            padding: "var(--space-3xl) var(--space-lg)",
            borderBottom: "1px solid var(--brand-border)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <RevealOnEnter>
              {/* AI Workshop Sigil SVG — triangle with vertex dots */}
              <svg
                width="148"
                height="148"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Karten auf den Tisch — AI Workshop Sigil"
                style={{ margin: "0 auto var(--space-xl)", display: "block" }}
              >
                <g stroke="var(--cotoaga-ai-gold)" strokeWidth="4" strokeLinecap="round">
                  <line x1="100" y1="6" x2="100" y2="30"/>
                  <line x1="100" y1="170" x2="100" y2="194"/>
                  <line x1="6" y1="100" x2="30" y2="100"/>
                  <line x1="170" y1="100" x2="194" y2="100"/>
                  <line x1="33" y1="33" x2="50" y2="50"/>
                  <line x1="150" y1="150" x2="167" y2="167"/>
                  <line x1="167" y1="33" x2="150" y2="50"/>
                  <line x1="50" y1="150" x2="33" y2="167"/>
                </g>
                <circle cx="100" cy="100" r="70" fill="none" stroke="var(--cotoaga-ai-gold)" strokeWidth="3"/>
                <circle cx="100" cy="100" r="70" fill="var(--cotoaga-ai-gold)" opacity="0.08"/>
                <polygon points="100,52 142,128 58,128" fill="none" stroke="#b07d12" strokeWidth="2.5"/>
                <circle cx="100" cy="52" r="6" fill="var(--brand-accent)"/>
                <circle cx="142" cy="128" r="6" fill="var(--brand-accent)"/>
                <circle cx="58" cy="128" r="6" fill="var(--ampel-red)"/>
              </svg>

              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  maxWidth: 680,
                  margin: "0 auto",
                  color: "var(--brand-text-body)",
                }}
              >
                {t.seal.triangleText
                  .replace("{lit}", `<strong style="font-family:var(--font-display);color:var(--brand-accent)">${t.seal.litLabel}</strong>`)
                  .replace("{sov}", `<strong style="font-family:var(--font-display);color:var(--brand-accent)">${t.seal.sovLabel}</strong>`)
                  .replace("{eth}", `<strong style="font-family:var(--font-display);color:var(--ampel-red);text-decoration:underline;text-decoration-color:var(--ampel-red)">${t.seal.ethLabel}</strong>`)
                  .split(/(<strong[^>]*>[^<]*<\/strong>)/g)
                  .map((part, i) =>
                    part.startsWith("<strong") ? (
                      <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
              </p>
            </RevealOnEnter>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "var(--cotoaga-ai-grey-dark)",
            color: "var(--cotoaga-ai-white)",
            padding: "var(--space-2xl) var(--space-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
                marginBottom: "var(--space-sm)",
              }}
            >
              {t.footer.credit}
            </p>
            <p
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "0.8125rem",
                opacity: 0.7,
                marginBottom: "var(--space-sm)",
              }}
            >
              {t.footer.tagline}
            </p>
            <p
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "0.8125rem",
                opacity: 0.5,
              }}
            >
              {t.footer.links.portfolio}{" "}
              <a href="https://cotoaga.net" style={{ color: "var(--cotoaga-ai-gold)" }}>
                cotoaga.net
              </a>{" "}
              ·{" "}
              <a href="https://cotoaga.ai" style={{ color: "var(--cotoaga-ai-gold)" }}>
                cotoaga.ai
              </a>{" "}
              ·{" "}
              <a href="https://cotoaga.net/imprint" style={{ color: "var(--cotoaga-ai-gold)" }}>
                {t.footer.links.imprint}
              </a>{" "}
              ·{" "}
              <a href="https://cotoaga.net/privacy" style={{ color: "var(--cotoaga-ai-gold)" }}>
                {t.footer.links.privacy}
              </a>{" "}
              ·{" "}
              <a href="https://cotoaga.net/terms" style={{ color: "var(--cotoaga-ai-gold)" }}>
                {t.footer.links.terms}
              </a>
            </p>
          </div>
        </footer>

      </div>{/* end .chapter-spine */}
    </div>/* end .page-shell */
  );
}

/* ── Case card component ── */
function CaseCard({
  c,
  t,
  locale,
}: {
  c: (typeof CASES)[0];
  t: Locale["cases"];
  locale: "de" | "en";
}) {
  const title = locale === "de" ? c.titleDe : c.titleEn;
  const subtitle = locale === "de" ? c.subtitleDe : c.subtitleEn;
  const stars = DIFFICULTY_STARS(c.difficulty);

  return (
    <div
      className="case-card"
      style={{ borderTop: `3px solid ${c.color}` }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--space-sm)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--brand-text-secondary)",
          }}
        >
          {t.casePrefix} {c.id}
        </span>
        <span style={{ fontSize: "0.75rem", color: c.color, letterSpacing: 1 }}>
          {stars}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.0625rem",
          lineHeight: 1.25,
          color: "var(--brand-text-body)",
          marginBottom: "var(--space-sm)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontSize: "0.8125rem",
          color: "var(--brand-text-secondary)",
          lineHeight: 1.45,
          margin: 0,
        }}
      >
        {subtitle}
      </p>
      {c.pivot && (
        <div
          style={{
            marginTop: "var(--space-sm)",
            padding: "4px var(--space-sm)",
            border: "1px solid var(--ampel-red)",
            display: "inline-block",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--ampel-red)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {t.wendepunktLabel}
          </span>
        </div>
      )}
    </div>
  );
}
