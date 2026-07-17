"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { META } from "@/lib/uber-hitc";
import { UberRouteCanvas } from "./UberRouteCanvas";

function useDaysToGo() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const target = new Date(META.festivalDateISO).getTime();
    const tick = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86400000)));
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  return days;
}

export function UberHero() {
  const days = useDaysToGo();
  return (
    <header className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Atmospheric backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/images/uber-hitc-2026/hero-route.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/55 to-bg" aria-hidden="true" />
      <UberRouteCanvas />

      {/* Top meta bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-24 pt-8 text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-text-muted/80">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Partnership Awareness Campaign
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          {META.proposalDate}
        </motion.span>
      </div>

      {/* Center lockup */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-[11px] md:text-[12px] font-mono tracking-[0.3em] uppercase text-text-muted mb-6"
        >
          Los Angeles · {META.festivalDateLabel}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="display text-text-primary leading-[0.9]"
          style={{ fontSize: "clamp(2.6rem, 9.5vw, 8.5rem)" }}
        >
          UBER <span className="text-accent">×</span> HEAD IN<br className="hidden md:block" /> THE CLOUDS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 max-w-2xl text-[16px] md:text-[19px] leading-relaxed text-text-primary/80"
        >
          {META.thesis}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-mono tracking-[0.2em] uppercase text-text-muted"
        >
          <span>Prepared for 88rising</span>
          <span className="hidden md:inline text-text-muted/40">/</span>
          <span>A proposal by {META.agency}</span>
          <span className="hidden md:inline text-text-muted/40">/</span>
          <span>{META.preparedBy}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 inline-flex items-baseline gap-3 border border-accent/30 bg-accent/[0.06] px-5 py-3"
        >
          <span className="display text-accent text-3xl md:text-4xl tabular-nums">{days ?? "–"}</span>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted">
            days to {META.festivalDateLabel}
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 pb-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-muted/70">Scroll to enter</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-accent to-transparent"
          aria-hidden="true"
        />
      </motion.div>
    </header>
  );
}
