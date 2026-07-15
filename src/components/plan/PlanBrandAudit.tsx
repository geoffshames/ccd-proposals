"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { BrandAuditSection } from "@/lib/plan-context";
import { PlanSectionHeader } from "./PlanSectionHeader";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70">
      {children}
    </div>
  );
}

export function PlanBrandAudit({ section }: { section: BrandAuditSection }) {
  return (
    <section
      id={`section-${section.number}`}
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number={section.number}
          title={section.title}
          intro={section.intro}
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-accent pl-7 md:pl-9 max-w-5xl mb-14 md:mb-18"
        >
          <Eyebrow>Audit verdict</Eyebrow>
          <p
            className="mt-4 text-[clamp(1.35rem,2.6vw,2.1rem)] leading-[1.28] font-bold text-text-primary"
            style={{
              fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
            }}
          >
            {section.verdict}
          </p>
        </motion.blockquote>

        {section.image && (
          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-18 border border-text-muted/15 bg-bg-card overflow-hidden"
          >
            <div className="relative aspect-[16/7] min-h-[260px] overflow-hidden bg-bg-card">
              <motion.img
                src={section.image.src}
                alt={section.image.alt}
                initial={{ scale: 1.025 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/45 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-bg/85 backdrop-blur-sm border border-white/10 px-3 py-2 text-[10px] font-mono tracking-[0.18em] uppercase text-text-primary/80">
                Brand-world reference
              </div>
            </div>
            {section.image.caption && (
              <figcaption className="px-5 py-4 text-[11px] font-mono tracking-[0.1em] uppercase leading-relaxed text-text-muted/65">
                {section.image.caption}
              </figcaption>
            )}
          </motion.figure>
        )}

        <div className="mb-14 md:mb-18">
          <Eyebrow>Readiness observations</Eyebrow>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {section.scorecard.map((item, i) => {
              const hasScore = typeof item.score === "number";
              const maxScore = item.maxScore ?? 10;
              const percentage = hasScore
                ? Math.max(0, Math.min(100, (item.score! / maxScore) * 100))
                : 0;

              return (
                <motion.div
                  key={`${item.dimension}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="border border-text-muted/15 bg-bg-card p-6 md:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-[16px] md:text-[17px] font-bold text-text-primary leading-tight">
                        {item.dimension}
                      </h3>
                      {item.status && (
                        <div className="mt-2 text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65">
                          {item.status}
                        </div>
                      )}
                    </div>
                    {hasScore && (
                      <div className="flex items-baseline gap-1 text-accent tabular-nums flex-shrink-0">
                        <span
                          className="text-[32px] md:text-[38px] font-bold leading-none"
                          style={{
                            fontFamily:
                              "var(--font-heading), var(--font-sans), sans-serif",
                          }}
                        >
                          {item.score}
                        </span>
                        <span className="text-[11px] font-mono text-text-muted/70">
                          /{maxScore}
                        </span>
                      </div>
                    )}
                  </div>
                  {hasScore && (
                    <div className="mt-5 h-1.5 bg-text-muted/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + i * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-accent"
                      />
                    </div>
                  )}
                  <p
                    className={`${hasScore ? "mt-4" : "mt-5"} text-[13px] md:text-[14px] leading-relaxed text-text-muted`}
                  >
                    {item.evidence}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {section.foundations && section.foundations.length > 0 && (
          <div className="mb-14 md:mb-18">
            <Eyebrow>Brand foundations</Eyebrow>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-text-muted/15 border border-text-muted/15">
              {section.foundations.map((foundation, i) => (
                <motion.div
                  key={`${foundation.label}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="bg-bg-card p-6"
                >
                  <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-accent">
                    {foundation.label}
                  </div>
                  <div className="mt-3 text-[17px] font-bold text-text-primary leading-snug">
                    {foundation.value}
                  </div>
                  {foundation.note && (
                    <p className="mt-3 text-[13px] leading-relaxed text-text-muted">
                      {foundation.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {section.systems && section.systems.length > 0 && (
          <div className="mb-14 md:mb-18">
            <Eyebrow>Current brand system</Eyebrow>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {section.systems.map((system, i) => (
                <motion.div
                  key={`${system.label}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="border border-text-muted/15 bg-bg-card p-7"
                >
                  <h3
                    className="text-[22px] font-bold text-text-primary"
                    style={{
                      fontFamily:
                        "var(--font-heading), var(--font-sans), sans-serif",
                    }}
                  >
                    {system.label}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {system.traits.map((trait, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[14px] leading-relaxed text-text-primary/85"
                      >
                        <span className="text-accent flex-shrink-0">▸</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                  {system.direction && (
                    <div className="mt-6 pt-5 border-t border-text-muted/15">
                      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
                        Direction
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-text-primary/90">
                        {system.direction}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border border-white/[0.14] bg-white/[0.035] p-7 md:p-8"
          >
            <Eyebrow>Protect and amplify</Eyebrow>
            <div className="mt-6 space-y-6">
              {section.strengths.map((strength, i) => (
                <div key={`${strength.title}-${i}`} className="flex gap-4">
                  <span className="text-[11px] font-mono text-accent pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-bold text-text-primary">
                      {strength.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                      {strength.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="border border-text-muted/20 bg-bg-card p-7 md:p-8"
          >
            <Eyebrow>Resolve and build</Eyebrow>
            <div className="mt-6 space-y-7">
              {section.gaps.map((gap, i) => (
                <div key={`${gap.title}-${i}`}>
                  <div className="flex gap-4">
                    <span className="text-[11px] font-mono text-text-muted/70 pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-text-primary">
                        {gap.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                        {gap.finding}
                      </p>
                      <p className="mt-3 text-[13px] leading-relaxed text-text-primary/90 border-l border-accent/50 pl-4">
                        {gap.opportunity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {section.tensions && section.tensions.length > 0 && (
          <div className="mb-12">
            <Eyebrow>Brand and audience tensions</Eyebrow>
            <div className="mt-4 border-t border-text-muted/20">
              {section.tensions.map((tension, i) => (
                <motion.div
                  key={`${tension.label}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-7 border-b border-text-muted/20"
                >
                  <div className="lg:col-span-3">
                    <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-accent">
                      {tension.label}
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                      {tension.brandSignal}
                    </p>
                  </div>
                  <div className="lg:col-span-4 lg:border-l lg:border-text-muted/15 lg:pl-6">
                    <div className="text-[10px] font-mono tracking-[0.16em] uppercase text-text-muted/70">
                      Audience truth
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-primary/85">
                      {tension.audienceTruth}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:border-l lg:border-text-muted/15 lg:pl-6">
                    <div className="text-[10px] font-mono tracking-[0.16em] uppercase text-text-muted/70">
                      Strategic direction
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-text-primary">
                      {tension.direction}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {section.footnote && (
          <p className="mt-12 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/70 leading-relaxed max-w-4xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
