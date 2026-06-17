"use client";

import { useState } from "react";
import type { Locale } from "@/content/de";

interface EmailGateProps {
  t: Locale["cta"];
}

export function EmailGate({ t }: EmailGateProps) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div
        style={{
          maxWidth: 430,
          margin: "0 auto",
          padding: "var(--space-xl)",
          border: "1px solid var(--ampel-green)",
          background: "var(--brand-tint-bg)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.1875rem",
            marginBottom: "var(--space-sm)",
          }}
        >
          {t.successHeading}
        </div>
        <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9375rem", margin: 0 }}>
          {t.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      style={{ maxWidth: 430, margin: "0 auto" }}
      onSubmit={(e) => {
        e.preventDefault();
        /* UI-only gate — real email capture / PDF delivery is a separate ticket */
        setDone(true);
      }}
    >
      <input
        type="email"
        placeholder={t.emailPlaceholder}
        required
        style={{
          width: "100%",
          fontFamily: "var(--font-primary)",
          fontSize: "1rem",
          padding: "13px 15px",
          border: "1px solid var(--brand-border)",
          borderRadius: 0,
          background: "var(--brand-surface)",
          color: "var(--brand-text-body)",
          marginBottom: "var(--space-sm)",
          display: "block",
        }}
      />
      <input
        type="text"
        placeholder={t.companyPlaceholder}
        style={{
          width: "100%",
          fontFamily: "var(--font-primary)",
          fontSize: "1rem",
          padding: "13px 15px",
          border: "1px solid var(--brand-border)",
          borderRadius: 0,
          background: "var(--brand-surface)",
          color: "var(--brand-text-body)",
          marginBottom: "var(--space-sm)",
          display: "block",
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          fontFamily: "var(--font-primary)",
          fontWeight: 600,
          fontSize: "0.875rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "14px 28px",
          background: "var(--brand-primary)",
          color: "var(--cotoaga-ai-white)",
          border: "none",
          borderRadius: 0,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.background = "var(--brand-accent)";
          (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.background = "var(--brand-primary)";
          (e.target as HTMLButtonElement).style.transform = "";
        }}
      >
        {t.submitLabel}
      </button>
    </form>
  );
}
