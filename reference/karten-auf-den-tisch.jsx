import { useState, useEffect, useRef } from "react";

const CASES = [
  { id: 1, title: "Der Praktikant", difficulty: 1, subtitle: "ChatGPT im Büroalltag", color: "#4ade80" },
  { id: 2, title: "Die Bewerbungs-KI", difficulty: 2, subtitle: "HR trifft EU AI Act", color: "#4ade80" },
  { id: 3, title: "Der Chatbot mit Persönlichkeit", difficulty: 2, subtitle: "Transparenz vs. Täuschung", color: "#facc15" },
  { id: 4, title: "Training Data Dilemma", difficulty: 3, subtitle: "Statistik vs. Stereotypen", color: "#facc15" },
  { id: 5, title: "Der Whistle-Blower Bot", difficulty: 3, subtitle: "Gute Überwachung?", color: "#facc15" },
  { id: 6, title: "Die Daten-Kooperation", difficulty: 3, subtitle: "Public Good vs. IP", color: "#f97316" },
  { id: 7, title: "Predictive Firing", difficulty: 4, subtitle: "Der Wendepunkt", color: "#ef4444", pivot: true },
  { id: 8, title: "Content-Moderation", difficulty: 4, subtitle: "94% Accuracy reicht?", color: "#ef4444" },
  { id: 9, title: "Die Gesundheits-KI", difficulty: 4, subtitle: "Legal ≠ Ethisch", color: "#ef4444" },
  { id: 10, title: "Der Bias-Amplifier", difficulty: 5, subtitle: "Systemischer Bias", color: "#dc2626" },
  { id: 11, title: "Der Transparenz-Trade-off", difficulty: 5, subtitle: "Accuracy vs. Erklärbarkeit", color: "#dc2626" },
  { id: 12, title: "Die KI-Governance-KI", difficulty: 5, subtitle: "Quis custodiet?", color: "#dc2626" },
];

function FloatingCard({ delay, x, y, rotation, scale, children, className, style }) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        animation: `cardFloat ${4 + delay}s ease-in-out ${delay * 0.3}s infinite alternate`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CaseCard({ c, index, isHovered, onHover, onLeave }) {
  const stars = "★".repeat(c.difficulty) + "☆".repeat(5 - c.difficulty);
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        width: 220,
        minHeight: 160,
        background: isHovered
          ? "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)"
          : "linear-gradient(145deg, #0f0f1a 0%, #1a1a2e 100%)",
        borderRadius: 16,
        padding: "20px 18px",
        border: `1px solid ${isHovered ? c.color : "rgba(255,255,255,0.06)"}`,
        boxShadow: isHovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${c.color}22, inset 0 1px 0 rgba(255,255,255,0.05)`
          : "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {c.pivot && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
        }} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2,
          color: "rgba(255,255,255,0.3)", textTransform: "uppercase",
        }}>
          Fall {c.id}
        </span>
        <span style={{ fontSize: 10, color: c.color, letterSpacing: 1 }}>{stars}</span>
      </div>
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700,
        color: "#fff", margin: "0 0 8px 0", lineHeight: 1.25,
      }}>
        {c.title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)",
        margin: 0, lineHeight: 1.4,
      }}>
        {c.subtitle}
      </p>
      {c.pivot && (
        <div style={{
          marginTop: 12, padding: "5px 10px", background: "rgba(239,68,68,0.1)",
          borderRadius: 6, display: "inline-block",
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#ef4444", letterSpacing: 1 }}>
            ⚠ WENDEPUNKT
          </span>
        </div>
      )}
    </div>
  );
}

function JokerCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        width: 280, height: 380, perspective: 800, cursor: "pointer",
        margin: "0 auto",
      }}
    >
      <div style={{
        width: "100%", height: "100%", position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* Front - Joker */}
        <div style={{
          position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden",
          background: "linear-gradient(145deg, #1a1a2e 0%, #0a0a14 100%)",
          borderRadius: 20, border: "2px solid rgba(250,204,21,0.3)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(250,204,21,0.08)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 30, textAlign: "center",
        }}>
          <div style={{ fontSize: 64, marginBottom: 16, filter: "drop-shadow(0 0 20px rgba(250,204,21,0.3))" }}>🃏</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, color: "#facc15",
            margin: "0 0 16px 0", fontWeight: 700,
          }}>JOKER</h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6, margin: "0 0 20px 0",
          }}>
            Öffne die Karte, wenn DU ein ungutes Gefühl hast.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)",
            lineHeight: 1.5, margin: 0,
          }}>
            Die Karte bleibt bei dir.<br />Nutze sie so oft du willst.<br />Verrate nicht, was drinsteht.
          </p>
          <div style={{
            marginTop: 24, padding: "8px 20px", border: "1px solid rgba(250,204,21,0.2)",
            borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: "rgba(250,204,21,0.5)", letterSpacing: 2,
          }}>
            KLICK ZUM AUFDECKEN
          </div>
        </div>
        {/* Back - Golden Rule */}
        <div style={{
          position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "linear-gradient(145deg, #1a0a00 0%, #2a1500 50%, #1a0a00 100%)",
          borderRadius: 20, border: "2px solid rgba(250,180,50,0.4)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(250,180,50,0.12)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 30, textAlign: "center",
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22,
            color: "#fbbf24", margin: "0 0 6px 0", fontWeight: 700,
          }}>Die Goldene Regel</h3>
          <div style={{
            width: 60, height: 1, background: "linear-gradient(90deg, transparent, #fbbf24, transparent)",
            margin: "12px 0 16px 0",
          }} />
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17,
            color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 8px 0", fontStyle: "italic",
          }}>
            Wechsel die Perspektive!
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0,
          }}>
            Stell dir vor: DU bist die betroffene Person.<br /><br />
            Wie würdest DU behandelt werden wollen?<br /><br />
            <span style={{ color: "rgba(250,191,36,0.7)" }}>Genau so solltet ihr entscheiden.</span>
          </p>
          <div style={{
            marginTop: 24, padding: "8px 20px", border: "1px solid rgba(250,180,50,0.15)",
            borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: "rgba(250,180,50,0.35)", letterSpacing: 2,
          }}>
            BLEIBT FÜR IMMER IM SPIEL
          </div>
        </div>
      </div>
    </div>
  );
}

function VotingDots() {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
      {[
        { color: "#4ade80", label: "Okay" },
        { color: "#facc15", label: "Bedenken" },
        { color: "#ef4444", label: "No Way" },
      ].map((v) => (
        <div key={v.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 14, height: 14, borderRadius: "50%", background: v.color,
            boxShadow: `0 0 12px ${v.color}44`,
          }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            color: "rgba(255,255,255,0.5)",
          }}>{v.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function KartenAufDenTisch() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes cardFloat {
        0% { transform: translateY(0px) rotate(var(--rot-start, 0deg)); }
        100% { transform: translateY(-20px) rotate(var(--rot-end, 3deg)); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.8; }
      }
      @keyframes driftCard {
        0% { transform: translate(0, 0) rotate(var(--r, 0deg)); }
        25% { transform: translate(var(--dx, 10px), var(--dy, -15px)) rotate(calc(var(--r, 0deg) + 2deg)); }
        50% { transform: translate(calc(var(--dx, 10px) * -0.5), calc(var(--dy, -15px) * 1.5)) rotate(calc(var(--r, 0deg) - 1deg)); }
        75% { transform: translate(calc(var(--dx, 10px) * 0.8), calc(var(--dy, -15px) * -0.5)) rotate(calc(var(--r, 0deg) + 1.5deg)); }
        100% { transform: translate(0, 0) rotate(var(--r, 0deg)); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(style);
    };
  }, []);

  const heroCards = [
    { x: 4, y: 8, rot: -12, s: 0.7, color: "#4ade80", label: "🟢" },
    { x: 78, y: 5, rot: 8, s: 0.65, color: "#facc15", label: "🟡" },
    { x: 85, y: 55, rot: -5, s: 0.6, color: "#ef4444", label: "🔴" },
    { x: 2, y: 60, rot: 15, s: 0.55, color: "#fff", label: "🃏" },
    { x: 70, y: 75, rot: -8, s: 0.5, color: "#222", label: "⚫" },
    { x: 15, y: 80, rot: 10, s: 0.5, color: "#ddd", label: "⚪" },
  ];

  return (
    <div style={{
      minHeight: "100vh", background: "#060609",
      color: "#fff", overflowX: "hidden",
    }}>
      {/* HERO */}
      <section style={{
        minHeight: "100vh", position: "relative", display: "flex",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(250,204,21,0.04) 0%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        {/* Floating cards in background */}
        {heroCards.map((card, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${card.x}%`, top: `${card.y}%`,
              width: 80, height: 112,
              background: `linear-gradient(145deg, ${card.color === "#222" ? "#111" : "#0f0f1a"} 0%, ${card.color === "#222" ? "#000" : "#1a1a2e"} 100%)`,
              borderRadius: 10,
              border: `1px solid ${card.color}18`,
              boxShadow: `0 10px 40px rgba(0,0,0,0.3), 0 0 20px ${card.color}08`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, opacity: 0.35,
              "--r": `${card.rot}deg`,
              "--dx": `${(i % 2 === 0 ? 1 : -1) * (8 + i * 3)}px`,
              "--dy": `${(i % 2 === 0 ? -1 : 1) * (10 + i * 2)}px`,
              animation: `driftCard ${8 + i * 2}s ease-in-out ${i * 0.7}s infinite`,
              pointerEvents: "none",
            }}
          >
            {card.label}
          </div>
        ))}

        {/* Hero content */}
        <div style={{
          position: "relative", zIndex: 2, textAlign: "center",
          maxWidth: 800, padding: "0 24px",
          animation: "fadeInUp 1.2s ease-out",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: 4,
            color: "rgba(250,204,21,0.5)", marginBottom: 24, textTransform: "uppercase",
          }}>
            Das KI-Ethik-Spiel für Teams
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(42px, 7vw, 82px)", fontWeight: 900,
            lineHeight: 1.05, margin: "0 0 12px 0",
            background: "linear-gradient(135deg, #fff 0%, #fbbf24 50%, #fff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 6s linear infinite",
          }}>
            KARTEN AUF<br />DEN TISCH!
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.4)", maxWidth: 500, margin: "24px auto 40px",
            lineHeight: 1.6,
          }}>
            12 Dilemmas. Keine einfachen Antworten.<br />
            Helft euch selber, wenn Chef, Kollegen und Compliance nicht helfen.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#spiel" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
              padding: "14px 32px", borderRadius: 12,
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              color: "#000", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(251,191,36,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}>
              Spielen →
            </a>
            <a href="#mechanik" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
              padding: "14px 32px", borderRadius: 12,
              background: "transparent", color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none",
              transition: "all 0.2s",
            }}>
              Wie es funktioniert
            </a>
          </div>

          <div style={{
            marginTop: 48, display: "flex", gap: 32, justifyContent: "center",
            flexWrap: "wrap",
          }}>
            {[
              { n: "3—6", l: "Spieler" },
              { n: "45—90", l: "Minuten" },
              { n: "CC BY-SA", l: "Open Source" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 18, color: "#fbbf24",
                  fontWeight: 500,
                }}>{s.n}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: "rgba(255,255,255,0.25)", marginTop: 4, letterSpacing: 1,
                  textTransform: "uppercase",
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
          background: "linear-gradient(transparent, #060609)", pointerEvents: "none",
        }} />
      </section>

      {/* HOW IT WORKS */}
      <section id="mechanik" style={{
        padding: "100px 24px", maxWidth: 900, margin: "0 auto",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 3,
          color: "rgba(250,204,21,0.4)", marginBottom: 16, textTransform: "uppercase",
        }}>Spielmechanik</div>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700, color: "#fff", margin: "0 0 60px 0", lineHeight: 1.2,
        }}>
          Drei Werkzeuge.<br />
          <span style={{ color: "rgba(255,255,255,0.3)" }}>Kein Werkzeug reicht allein.</span>
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 24,
        }}>
          {/* Traffic Light */}
          <div style={{
            background: "linear-gradient(145deg, #0a0a14, #0f0f1a)",
            borderRadius: 20, padding: 32,
            border: "1px solid rgba(255,255,255,0.04)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 12px #4ade8044" }} />
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#facc15", boxShadow: "0 0 12px #facc1544" }} />
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 12px #ef444444" }} />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: "#fff",
              margin: "0 0 12px 0",
            }}>Die Ampel</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
            }}>
              Jeder stimmt verdeckt ab. Grün, Gelb, Rot. Gleichzeitig aufdecken.
              Wenn alle gleich stimmen — weiter. Wenn nicht — jetzt wird's spannend.
            </p>
          </div>

          {/* Joker */}
          <div style={{
            background: "linear-gradient(145deg, #0a0a14, #0f0f1a)",
            borderRadius: 20, padding: 32,
            border: "1px solid rgba(250,204,21,0.06)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>🃏</div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: "#fbbf24",
              margin: "0 0 12px 0",
            }}>Der Joker</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
            }}>
              Dein persönlicher Moral-Kompass. Wenn dein Bauchgefühl schreit,
              öffne die Karte. Was drinsteht, bleibt für immer im Spiel.
            </p>
          </div>

          {/* 10th Man */}
          <div style={{
            background: "linear-gradient(145deg, #0a0a14, #0f0f1a)",
            borderRadius: 20, padding: 32,
            border: "1px solid rgba(255,255,255,0.04)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
              <div style={{ width: 28, height: 38, borderRadius: 6, background: "#111", border: "1px solid rgba(255,255,255,0.1)" }} />
              <div style={{ width: 28, height: 38, borderRadius: 6, background: "#eee", border: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: "#fff",
              margin: "0 0 12px 0",
            }}>Der 10. Mann</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
            }}>
              Ab Fall 7. Einer MUSS gegen die Mehrheit argumentieren.
              Groupthink tötet. Der 10. Mann schützt die Gruppe vor sich selbst.
            </p>
          </div>
        </div>
      </section>

      {/* THE JOKER - Interactive */}
      <section style={{
        padding: "80px 24px 100px", maxWidth: 900, margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 3,
          color: "rgba(250,204,21,0.4)", marginBottom: 16, textTransform: "uppercase",
        }}>Das Geheimnis</div>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 700, color: "#fff", margin: "0 0 12px 0",
        }}>
          Jeder hat einen Joker.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.35)",
          margin: "0 0 48px 0",
        }}>
          Klick auf die Karte. Entdecke, was darunter liegt.
        </p>
        <JokerCard />
      </section>

      {/* 12 CASES */}
      <section id="spiel" style={{
        padding: "80px 24px 100px", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 3,
          color: "rgba(250,204,21,0.4)", marginBottom: 16, textTransform: "uppercase",
        }}>12 Dilemmas</div>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700, color: "#fff", margin: "0 0 12px 0", lineHeight: 1.2,
        }}>
          Von einfach bis unmöglich.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.35)",
          margin: "0 0 48px 0", maxWidth: 500,
        }}>
          Steigende Komplexität. Steigende Ambiguity. Keine vorgegebenen Antworten.
        </p>

        {/* Phase 1 */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2,
            color: "rgba(74,222,128,0.5)", marginBottom: 20, textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ width: 30, height: 1, background: "rgba(74,222,128,0.3)" }} />
            Phase 1 — Die Grundlagen
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {CASES.slice(0, 6).map((c, i) => (
              <CaseCard key={c.id} c={c} index={i}
                isHovered={hoveredCard === c.id}
                onHover={() => setHoveredCard(c.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>

        {/* Divider - Stop */}
        <div style={{
          padding: "32px 0", textAlign: "center", margin: "16px 0 48px",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.2), transparent)",
          }} />
          <span style={{
            position: "relative", background: "#060609", padding: "0 24px",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
            color: "#ef4444", letterSpacing: 3, textTransform: "uppercase",
          }}>
            ⚠ STOP — Spielmechanik ändert sich — 10. Mann betritt das Feld
          </span>
        </div>

        {/* Phase 2 */}
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2,
            color: "rgba(239,68,68,0.5)", marginBottom: 20, textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ width: 30, height: 1, background: "rgba(239,68,68,0.3)" }} />
            Phase 2 — Der 10. Mann
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {CASES.slice(6).map((c, i) => (
              <CaseCard key={c.id} c={c} index={i + 6}
                isHovered={hoveredCard === c.id}
                onHover={() => setHoveredCard(c.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10TH MAN EXPLAINER */}
      <section style={{
        padding: "80px 24px", maxWidth: 700, margin: "0 auto",
      }}>
        <div style={{
          background: "linear-gradient(145deg, #0a0a14, #0f0f1a)",
          borderRadius: 24, padding: "48px 40px",
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 20px 80px rgba(0,0,0,0.3)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -40, right: -40, width: 200, height: 200,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.05), transparent)",
            filter: "blur(40px)", pointerEvents: "none",
          }} />
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 3,
            color: "rgba(239,68,68,0.5)", marginBottom: 20, textTransform: "uppercase",
          }}>Israelischer Militärgeheimdienst, 1973</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, color: "#fff",
            margin: "0 0 20px 0", fontWeight: 700, lineHeight: 1.3,
          }}>
            Wenn 9 Analysten einer Meinung sind, MUSS der 10. das Gegenteil beweisen.
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.4)",
            lineHeight: 1.8, margin: "0 0 24px 0",
          }}>
            Jom-Kippur-Krieg. Neun Analysten waren sich einig: kein Angriff.
            Alle lagen falsch. Katastrophe. Danach wurde eine Regel eingeführt,
            die Groupthink strukturell verhindert.
          </p>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 17,
            color: "rgba(255,255,255,0.6)", fontStyle: "italic", lineHeight: 1.6,
          }}>
            Die schwarze Karte ist keine Meinung.<br />
            Es ist die Erlaubnis, dagegen zu sein.
          </p>
        </div>
      </section>

      {/* AFTER THE GAME */}
      <section style={{
        padding: "80px 24px 100px", maxWidth: 700, margin: "0 auto", textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)",
          fontWeight: 700, color: "#fff", margin: "0 0 16px 0",
        }}>
          Das Spiel endet.
        </h2>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700,
          color: "rgba(255,255,255,0.25)", margin: "0 0 40px 0",
        }}>
          Eure Verantwortung nicht.
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16, marginBottom: 48, textAlign: "left",
        }}>
          {[
            { icon: "📝", title: "Dokumentiert", desc: "Learnings, Prinzipien, offene Fragen" },
            { icon: "🔄", title: "Übertragt", desc: "Spielt echte Fälle aus eurem Unternehmen" },
            { icon: "🎯", title: "Baut Strukturen", desc: "Wer entscheidet? Wer ist euer 10. Mann?" },
            { icon: "🌍", title: "Teilt es", desc: "CC BY-SA 4.0 — Open Source, für alle" },
          ].map((step) => (
            <div key={step.title} style={{
              background: "rgba(255,255,255,0.02)", borderRadius: 16,
              padding: "24px 20px", border: "1px solid rgba(255,255,255,0.04)",
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
                color: "#fff", margin: "0 0 6px 0",
              }}>{step.title}</h4>
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.5,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <VotingDots />
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13,
          color: "rgba(255,255,255,0.2)", lineHeight: 1.6,
        }}>
          Karten auf den Tisch — <a href="https://cotoaga.ai" style={{ color: "rgba(250,204,21,0.4)", textDecoration: "none" }}>cotoaga.ai</a> by{" "}
          <a href="https://cotoaga.net" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>cotoaga.net</a>
          <br />
          CC BY-SA 4.0 — Mit KI entwickelt, um besser die KI zu orchestrieren
        </p>
      </footer>
    </div>
  );
}
