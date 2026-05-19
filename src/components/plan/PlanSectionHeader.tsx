"use client";
import { motion } from "framer-motion";

export function PlanSectionHeader({
  number,
  title,
  subtitle,
  intro,
}: {
  number: string;
  title: string;
  subtitle?: string;
  intro?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-baseline gap-6 mb-6">
          <span className="text-[12px] font-mono tracking-[0.25em] uppercase text-accent">
            {number}
          </span>
          <div className="flex-1 h-px bg-text-muted/20" />
        </div>
        <h2
          className="font-bold tracking-[-0.02em] text-text-primary leading-[1.02]"
          style={{
            fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
            fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-[clamp(1.1rem,1.8vw,1.4rem)] text-text-primary/85 leading-snug max-w-4xl"
             style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
            {subtitle}
          </p>
        )}
        {intro && (
          <p className="mt-6 text-text-muted text-[17px] md:text-[18px] leading-relaxed max-w-3xl">
            {intro}
          </p>
        )}
      </motion.div>
    </div>
  );
}
