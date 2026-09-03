"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePlan } from "@/lib/plan-context";

/**
 * Part switch for plans that ship as two linked pages (e.g. an audit and the
 * plan built on it). Opt in by setting `partSwitch` on the plan data; plans
 * without it render nothing and are untouched.
 *
 * Three call sites give continuous coverage:
 *  - PlanPartToggle: fixed top-right while the page is near the top.
 *  - PlanPartPills (compact): inside the scrolled PlanNavigation bar.
 *  - PlanPartEnd: a full-width band at the foot of the page.
 * The toggle and the nav bar use the same 600px threshold, so exactly one of
 * them is on screen at any scroll position and they never overlap.
 */

function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M1 5h11M8.5 1.5 12 5l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** The red-pill current/other switch. Inline, so it drops into any flex row. */
export function PlanPartPills({ compact = false }: { compact?: boolean }) {
  const PLAN = usePlan();
  const ps = PLAN.partSwitch;
  if (!ps) return null;

  const pad = compact ? "px-2.5 py-1" : "px-2.5 md:px-3 py-1.5 md:py-2";

  return (
    <div className="flex items-center text-[10px] md:text-[11px] font-mono tracking-[0.14em] uppercase backdrop-blur-xl bg-bg/70 border border-text-muted/25 shrink-0">
      <span
        className={`${pad} bg-accent text-[color:var(--on-accent)] font-bold`}
        aria-current="page"
      >
        {ps.currentCode}
      </span>
      <Link
        href={`/${ps.slug}`}
        prefetch
        title={ps.label}
        aria-label={`Go to ${ps.label}`}
        className={`${pad} text-text-muted hover:text-text-primary hover:bg-bg-card-hover transition-colors border-l border-text-muted/20`}
      >
        {ps.code}
      </Link>
    </div>
  );
}

/**
 * Hero-state switch. Floats fixed at top-right until the PlanNavigation bar
 * slides in at the same scroll threshold and takes over with its own inline
 * copy, so the control is never absent and the two never collide.
 */
export function PlanPartToggle() {
  const PLAN = usePlan();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!PLAN.partSwitch) return null;

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 right-4 md:top-5 md:right-6 z-[60]"
        >
          <PlanPartPills />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Full-width band at the foot of the page pointing at the other part. */
export function PlanPartEnd() {
  const PLAN = usePlan();
  const ps = PLAN.partSwitch;
  if (!ps) return null;

  return (
    <section className="border-t border-text-muted/15 px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        {ps.eyebrow && (
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-5">
            {ps.eyebrow}
          </div>
        )}
        <h2
          className="text-[30px] md:text-[44px] font-bold leading-[1.06] text-text-primary"
          style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
        >
          {ps.endTitle ?? ps.label}
        </h2>
        {ps.endBlurb && (
          <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-text-secondary max-w-2xl mx-auto">
            {ps.endBlurb}
          </p>
        )}
        <Link
          href={`/${ps.slug}`}
          prefetch
          className="mt-9 md:mt-10 inline-flex items-center gap-3 px-8 md:px-10 py-4 bg-accent text-[color:var(--on-accent)] text-[12px] md:text-[13px] font-mono tracking-[0.16em] uppercase hover:bg-accent/90 transition-colors"
        >
          {ps.endCta ?? `Read ${ps.label}`}
          <Arrow />
        </Link>
      </motion.div>
    </section>
  );
}
