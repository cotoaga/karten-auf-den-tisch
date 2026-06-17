"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "chapter-hero", label: "Setup" },
  { id: "chapter-act1", label: "Act 1" },
  { id: "chapter-tenth", label: "10th Man" },
  { id: "chapter-joker", label: "Joker" },
  { id: "chapter-cases", label: "Cases" },
  { id: "chapter-cta", label: "Get the deck" },
];

export function ActsRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".chapter-spine") || window;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = CHAPTERS.findIndex((c) => c.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      {
        root: container instanceof Window ? null : (container as Element),
        threshold: 0.5,
      }
    );

    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="acts-rail" aria-label="Chapter navigation">
      {CHAPTERS.map((chapter, i) => (
        <button
          key={chapter.id}
          className={`acts-rail-dot${i === active ? " active" : ""}`}
          onClick={() => scrollTo(chapter.id)}
          title={chapter.label}
          aria-label={chapter.label}
          aria-current={i === active ? "step" : undefined}
        />
      ))}
    </nav>
  );
}
