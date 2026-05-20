"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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

export function LanguageToggle() {
  const PROJECT = useProject();
  const alts = PROJECT.languageAlternates;
  if (!alts || alts.length === 0) return null;

  const currentCode = (PROJECT.language && LANG_LABELS[PROJECT.language]) || PROJECT.language?.toUpperCase() || "EN";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 right-3 md:top-[13px] md:right-5 z-[60]"
    >
      <div className="flex items-center text-[11px] font-mono tracking-[0.14em] uppercase backdrop-blur-xl bg-bg/70 border border-text-muted/25">
        <span
          className="px-2.5 md:px-3 py-1.5 md:py-2 bg-accent text-white font-bold"
          aria-current="true"
        >
          {currentCode}
        </span>
        {alts.map((alt) => (
          <Link
            key={alt.slug}
            href={`/${alt.slug}`}
            prefetch
            scroll={false}
            className="px-2.5 md:px-3 py-1.5 md:py-2 text-text-muted hover:text-text-primary hover:bg-bg-card-hover transition-colors border-l border-text-muted/20"
            aria-label={`Switch to ${alt.label}`}
            title={alt.label}
          >
            {alt.code}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
