"use client";

import Link from "next/link";
import { useProject } from "@/lib/project-context";

const LANG_LABELS: Record<string, string> = {
  en: "EN",
  ko: "KO",
  ja: "JA",
  es: "ES",
  zh: "ZH",
  fr: "FR",
  de: "DE",
  pt: "PT",
};

/**
 * Presentational EN/ES (etc.) red-pill switch. Renders inline so it can sit
 * inside a flex layout (the scrolled Navigation bar) or be wrapped in a fixed
 * positioner (the hero-state LanguageToggle). Keeps the brand red-pill look in
 * one place so both call sites stay identical.
 *
 * `compact` shrinks the padding for the dense scrolled nav bar.
 */
export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const PROJECT = useProject();
  const alts = PROJECT.languageAlternates;
  if (!alts || alts.length === 0) return null;

  const currentCode =
    (PROJECT.language && LANG_LABELS[PROJECT.language]) ||
    PROJECT.language?.toUpperCase() ||
    "EN";

  const pad = compact ? "px-2.5 py-1" : "px-2.5 md:px-3 py-1.5 md:py-2";

  return (
    <div className="flex items-center text-[11px] font-mono tracking-[0.14em] uppercase backdrop-blur-xl bg-bg/70 border border-text-muted/25 shrink-0">
      <span className={`${pad} bg-accent text-[color:var(--on-accent)] font-bold`} aria-current="true">
        {currentCode}
      </span>
      {alts.map((alt) => (
        <Link
          key={alt.slug}
          href={`/${alt.slug}`}
          prefetch
          scroll={false}
          className={`${pad} text-text-muted hover:text-text-primary hover:bg-bg-card-hover transition-colors border-l border-text-muted/20`}
          aria-label={`Switch to ${alt.label}`}
          title={alt.label}
        >
          {alt.code}
        </Link>
      ))}
    </div>
  );
}
