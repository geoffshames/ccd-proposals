"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "opportunity", label: "Opportunity" },
  { id: "brands", label: "Two Brands" },
  { id: "audience", label: "Audience" },
  { id: "friction", label: "Friction" },
  { id: "benchmarks", label: "Benchmarks" },
  { id: "platform", label: "Platform" },
  { id: "activation", label: "Activation" },
  { id: "creative", label: "Creative" },
  { id: "flight", label: "Media" },
  { id: "measurement", label: "Measurement" },
  { id: "execution", label: "Plan" },
  { id: "investment", label: "Investment" },
  { id: "next", label: "Next" },
];

export function UberNav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Proposal sections"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-text-muted/10" : ""
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between gap-6">
        <a href="#top" className="text-[10px] font-mono tracking-[0.25em] uppercase text-text-primary/90 shrink-0">
          UBER <span className="text-accent">×</span> HITC
        </a>
        <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-[10px] font-mono tracking-[0.18em] uppercase whitespace-nowrap transition-colors ${
                active === s.id ? "text-accent" : "text-text-muted/70 hover:text-text-primary"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 shrink-0">
          {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>
    </nav>
  );
}
