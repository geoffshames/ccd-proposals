"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProject } from "@/lib/project-context";
import { useScrolled } from "@/lib/use-scrolled";
import { LanguageSwitch } from "@/components/LanguageSwitch";

/**
 * Hero-state language toggle. Floats fixed at top-right ONLY while the page is
 * near the top (before the Navigation bar slides in). Once scrolled, the
 * Navigation bar takes over and renders its own inline toggle next to the CTA,
 * so the two never overlap at any viewport width. Positioned below the hero's
 * top-right corner bracket to avoid colliding with it.
 */
export function LanguageToggle() {
  const PROJECT = useProject();
  const scrolled = useScrolled(100);
  const alts = PROJECT.languageAlternates;
  if (!alts || alts.length === 0) return null;

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 right-4 md:top-5 md:right-6 z-[60]"
        >
          <LanguageSwitch />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
