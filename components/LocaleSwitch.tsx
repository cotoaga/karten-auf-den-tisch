"use client";

import { useEffect } from "react";

interface LocaleSwitchProps {
  currentLocale: "de" | "en";
}

export function LocaleSwitch({ currentLocale }: LocaleSwitchProps) {
  const otherLocale = currentLocale === "de" ? "en" : "de";
  const otherFlag = currentLocale === "de" ? "🇺🇸" : "🇩🇪";
  const otherLabel = currentLocale === "de" ? "EN" : "DE";

  function handleSwitch(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    /* Preserve scroll position on locale switch.
     * Store the current scroll ratio so the destination page can restore it. */
    const container = document.querySelector(".chapter-spine");
    let scrollRatio = 0;
    if (container) {
      const el = container as HTMLElement;
      scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
    } else {
      scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
    }
    sessionStorage.setItem("kadt-scroll-ratio", String(scrollRatio));
    window.location.href = `/${otherLocale}/`;
  }

  useEffect(() => {
    const stored = sessionStorage.getItem("kadt-scroll-ratio");
    if (!stored) return;
    sessionStorage.removeItem("kadt-scroll-ratio");
    const ratio = parseFloat(stored);
    if (isNaN(ratio)) return;

    /* Restore scroll position after navigation */
    const restore = () => {
      const container = document.querySelector(".chapter-spine") as HTMLElement | null;
      if (container) {
        container.scrollTop = ratio * (container.scrollHeight - container.clientHeight);
      } else {
        window.scrollTo(0, ratio * (document.documentElement.scrollHeight - window.innerHeight));
      }
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(restore);
    } else {
      window.addEventListener("load", restore, { once: true });
    }
  }, []);

  return (
    <a
      href={`/${otherLocale}/`}
      onClick={handleSwitch}
      className="locale-btn"
      aria-label={`Switch to ${otherLabel}`}
    >
      {otherFlag} {otherLabel}
    </a>
  );
}
