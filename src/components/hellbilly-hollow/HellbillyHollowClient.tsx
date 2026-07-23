"use client";

import { useState, useEffect, useRef } from "react";
import { hellbillyHollow } from "@/lib/hellbilly-hollow";
import type { MarketingConcept } from "@/lib/hellbilly-hollow";

const CATEGORY_COLORS: Record<string, string> = {
  Guerilla: "#FD3737",
  Digital: "#FF6B35",
  Social: "#E63946",
  Experiential: "#C1121F",
  Merch: "#9D0208",
  Interactive: "#BF0603",
};

const GRID_PATTERN = [
  "md:col-span-12",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-12",
];

function ConceptCard({ concept, index }: { concept: MarketingConcept; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const colSpan = GRID_PATTERN[index % GRID_PATTERN.length];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const catColor = CATEGORY_COLORS[concept.category] || "#FD3737";

  return (
    <div
      ref={ref}
      className={`${colSpan} group relative overflow-hidden bg-bg-card border border-[#1e1e1e] transition-all duration-500 hover:border-[#333] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Image section */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0a0a0a]">
        {!imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-[#1a1a1a]" />
            )}
            <img
              src={concept.image}
              alt={concept.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
            <span className="text-text-muted text-sm font-mono">HELLBILLY HOLLOW</span>
          </div>
        )}
        {/* Number overlay */}
        <div className="absolute top-0 left-0 px-4 py-2 bg-black/80 backdrop-blur-sm border-r border-b border-[#333]">
          <span className="text-[28px] font-bold text-white display tracking-tight">{concept.number}</span>
        </div>
        {/* Category badge */}
        <div
          className="absolute top-0 right-0 px-3 py-2 backdrop-blur-sm border-l border-b border-[#333]"
          style={{ backgroundColor: `rgba(0,0,0,0.8)` }}
        >
          <span
            className="text-[11px] font-mono font-bold uppercase tracking-[0.15em]"
            style={{ color: catColor }}
          >
            {concept.category}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 md:p-8">
        <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary mb-2 leading-tight">
          {concept.title}
        </h3>
        <p className="text-[14px] md:text-[15px] text-accent font-mono italic mb-4 leading-relaxed">
          "{concept.tagline}"
        </p>
        <p className="text-[14px] md:text-[15px] text-text-muted leading-relaxed mb-5">
          {concept.description}
        </p>

        {/* Execution notes */}
        <div className="space-y-2 mb-5">
          <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted/60 mb-3">
            Execution Notes
          </div>
          {concept.executionNotes.map((note, i) => (
            <div key={i} className="flex items-start gap-3 text-[13px] text-text-muted leading-relaxed">
              <span className="text-accent mt-1 shrink-0" style={{ fontSize: "8px" }}>●</span>
              <span>{note}</span>
            </div>
          ))}
        </div>

        {/* Reference link */}
        {concept.referenceUrl && (
          <a
            href={concept.referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-mono text-text-muted/50 hover:text-accent transition-colors uppercase tracking-wider"
          >
            <span>↗</span>
            <span>Reference</span>
          </a>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
        style={{ backgroundColor: catColor }}
      />
    </div>
  );
}

export default function HellbillyHollowClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroScrolled, setHeroScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setHeroScrolled(rect.bottom < window.innerHeight * 0.5);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const data = hellbillyHollow;

  const categories = Array.from(new Set(data.concepts.map((c) => c.category)));
  const filteredConcepts = activeFilter
    ? data.concepts.filter((c) => c.category === activeFilter)
    : data.concepts;

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* ─── Hero ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hellbilly-hollow/hero1.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-[12px] font-mono text-accent tracking-[0.2em] uppercase">
              {data.studio.name} × {data.client.name}
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,11vw,9rem)] font-bold leading-[0.9] tracking-tight mb-6 break-words">
            HELLBILLY
            <br />
            <span className="text-accent">HOLLOW</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.5rem)] text-text-muted max-w-2xl leading-relaxed mb-8">
            {data.project.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[12px] font-mono text-text-muted/60 uppercase tracking-wider">
            <span>{data.project.type}</span>
            <span className="text-accent">●</span>
            <span>{data.concepts.length} Concepts</span>
            <span className="text-accent">●</span>
            <span>Prepared for {data.client.contactName}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] font-mono text-text-muted/40 uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 max-w-5xl mx-auto">
        <div className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase mb-6">
          The Brief
        </div>
        <p className="text-[18px] md:text-[22px] leading-relaxed text-text-secondary font-light">
          {data.intro}
        </p>
      </section>

      {/* ─── Image break ─── */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/images/hellbilly-hollow/hero2.png"
          alt="Abandoned carnival funhouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-transparent to-bg/50" />
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
          <p className="text-[12px] font-mono text-text-muted/60 italic">
            The line between fiction and reality is the most powerful marketing asset any horror property could ask for.
          </p>
        </div>
      </section>

      {/* ─── Concepts grid ─── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
            The Concepts
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-4">
            16 WAYS TO TERRIFY
          </h2>
          <p className="text-[15px] md:text-[16px] text-text-muted max-w-2xl leading-relaxed">
            Each concept is designed to work standalone and as part of the larger ecosystem. Filter by category or scroll through the full campaign.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 text-[11px] font-mono uppercase tracking-wider transition-all ${
              !activeFilter
                ? "bg-accent text-white"
                : "bg-bg-card text-text-muted hover:text-text-primary border border-[#222]"
            }`}
          >
            All ({data.concepts.length})
          </button>
          {categories.map((cat) => {
            const count = data.concepts.filter((c) => c.category === cat).length;
            const color = CATEGORY_COLORS[cat] || "#FD3737";
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[11px] font-mono uppercase tracking-wider transition-all border ${
                  activeFilter === cat
                    ? "text-white"
                    : "bg-bg-card text-text-muted hover:text-text-primary border-[#222]"
                }`}
                style={activeFilter === cat ? { backgroundColor: color, borderColor: color } : {}}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {filteredConcepts.map((concept, i) => (
            <ConceptCard key={concept.number} concept={concept} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Closing statement ─── */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-40 max-w-5xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase mb-6 text-center">
          The Ecosystem
        </div>
        <p className="text-[clamp(1.25rem,3vw,2rem)] leading-relaxed text-text-secondary font-light text-center">
          {data.closingStatement}
        </p>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-4xl mx-auto text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
        <div className="relative z-10">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight mb-6">
            {data.cta.headline}
          </h2>
          <p className="text-[15px] md:text-[16px] text-text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            {data.cta.body}
          </p>
          <a
            href={`mailto:${data.cta.email}`}
            className="inline-flex items-center gap-3 bg-accent text-white font-semibold text-[15px] px-10 py-4 hover:bg-accent/90 transition-colors"
          >
            <span>Let's Talk</span>
            <span>→</span>
          </a>
          <div className="mt-8 text-[12px] font-mono text-text-muted/50 uppercase tracking-wider">
            {data.studio.role} · {data.studio.email}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#1a1a1a] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] font-mono text-text-muted/40 uppercase tracking-wider">
            {data.studio.name} · {data.client.name} · Creative Marketing Campaign
          </div>
          <div className="text-[12px] font-mono text-text-muted/40 uppercase tracking-wider">
            Prepared for {data.client.contactName} · {data.client.contactEmail}
          </div>
        </div>
      </footer>
    </main>
  );
}
