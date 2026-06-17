"use client";

import { useState } from "react";
import type { Locale } from "@/content/de";

interface JokerCardProps {
  t: Locale["joker"];
}

export function JokerCard({ t }: JokerCardProps) {
  const [peeled, setPeeled] = useState(false);

  return (
    <div
      className={`joker-wrap${peeled ? " peeled" : ""}`}
      onClick={() => setPeeled((p) => !p)}
      role="button"
      tabIndex={0}
      aria-label={peeled ? "Close Joker" : "Open Joker"}
      onKeyDown={(e) => e.key === "Enter" && setPeeled((p) => !p)}
    >
      {/* Back — the Golden Rule revealed beneath */}
      <div className="joker-layer joker-golden">
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "var(--space-sm)",
            }}
          >
            {t.goldenTitle}
          </div>
          <div
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "0.9375rem",
              lineHeight: 1.55,
              fontStyle: "italic",
            }}
          >
            {t.goldenBody}
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          {t.goldenFooter}
        </div>
      </div>

      {/* Lid — lifts off to reveal the golden underside */}
      <div className="joker-layer joker-lid">
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              color: "var(--cotoaga-ai-gold)",
              marginBottom: "var(--space-sm)",
            }}
          >
            {t.lidTitle}
          </div>
          <div
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
              opacity: 0.85,
            }}
          >
            {t.lidSub}
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--cotoaga-ai-gold)",
            opacity: 0.8,
          }}
        >
          {t.lidHint}
        </div>
      </div>
    </div>
  );
}
