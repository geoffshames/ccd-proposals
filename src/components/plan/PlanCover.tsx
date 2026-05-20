"use client";
import { motion } from "framer-motion";
import { usePlan } from "@/lib/plan-context";

export function PlanCover() {
  const PLAN = usePlan();
  const { label, title, subtitle, partnership, prepared, date, backgroundImage } = PLAN.cover;

  return (
    <section
      id="cover"
      className="relative min-h-[92vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-20 md:pt-12 pb-16 overflow-hidden"
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.28] grayscale contrast-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/60 to-bg/10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg/95 via-bg/40 to-bg/30" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6 pr-0 md:pr-32 lg:pr-36"
      >
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-text-muted/70">
          {label}
        </span>
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-text-muted/70">
          {date}
        </span>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-[0.92] tracking-[-0.02em] text-text-primary"
          style={{
            fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
            fontSize: "clamp(4rem, 14vw, 12rem)",
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl"
        >
          <div className="h-[2px] w-16 bg-accent mb-6" />
          <p className="text-[clamp(1.5rem, 3vw, 2.25rem)] font-bold leading-[1.1] text-text-primary"
             style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
            {subtitle}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
      >
        <div>
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">
            Partnership
          </div>
          <div className="text-[14px] md:text-[15px] text-text-primary leading-snug">
            {partnership}
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">
            Prepared By
          </div>
          <div className="text-[14px] md:text-[15px] text-text-primary leading-snug">
            {prepared}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
