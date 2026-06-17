"use client";

import { useEffect, useRef } from "react";

interface RevealOnEnterProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnEnter({ children, className = "", delay = 0 }: RevealOnEnterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : "0ms";
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-enter ${className}`}>
      {children}
    </div>
  );
}
