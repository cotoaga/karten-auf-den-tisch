"use client";

import { useState } from "react";
import type { Locale } from "@/content/de";

interface EmailGateProps {
  t: Locale["cta"];
  locale: "de" | "en";
}

export function EmailGate({ t, locale }: EmailGateProps) {
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div style={{ maxWidth: 430, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            padding: "var(--space-xl)",
            border: "1px solid var(--ampel-green)",
            background: "var(--brand-tint-bg)",
            marginBottom: "var(--space-md)",
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
          <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9375rem", margin: "0 0 var(--space-lg)" }}>
            {t.successBody}
          </p>
          <a
            href={t.pdfHref}
            download
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
            ⬇︎ {t.downloadLabel}
          </a>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--brand-text-secondary)", marginTop: "var(--space-sm)", letterSpacing: "0.05em" }}>
            {t.downloadNote}
          </p>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent || submitting) return;

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const hp    = (form.elements.namedItem("website") as HTMLInputElement).value;

    setSubmitting(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, hp }),
      });
    } catch {
      // Network error — visitor still gets the PDF
    }

    // Show success and PDF regardless of API result
    setDone(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 430, margin: "0 auto" }}>
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <input
        type="email"
        name="email"
        placeholder={t.emailPlaceholder}
        required
        style={inputStyle}
      />
      <input
        type="text"
        name="company"
        placeholder={t.companyPlaceholder}
        style={{ ...inputStyle, marginBottom: "var(--space-md)" }}
      />

      {/* Consent checkbox */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-sm)",
          marginBottom: "var(--space-md)",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, flexShrink: 0, accentColor: "var(--brand-primary)" }}
        />
        <span style={{ fontFamily: "var(--font-primary)", fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--brand-text-secondary)" }}>
          {t.consentLabel}{" "}
          <a href={t.privacyHref} target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-primary)" }}>
            {locale === "de" ? "Datenschutzerklärung" : "Privacy policy"}
          </a>
        </span>
      </label>

      <button
        type="submit"
        disabled={!consent || submitting}
        style={{
          width: "100%",
          fontFamily: "var(--font-primary)",
          fontWeight: 600,
          fontSize: "0.875rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "14px 28px",
          background: consent ? "var(--brand-primary)" : "var(--brand-border)",
          color: consent ? "var(--cotoaga-ai-white)" : "var(--brand-text-secondary)",
          border: "none",
          borderRadius: 0,
          cursor: consent ? "pointer" : "not-allowed",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? "…" : t.submitLabel}
      </button>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
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
};
