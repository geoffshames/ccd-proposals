"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { AudienceSection } from "@/lib/plan-context";

export function PlanAudience({ section }: { section: AudienceSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        {/* Metros */}
        {section.metros && section.metros.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
              {section.metrosLabel ?? "Top U.S. Metros"}
            </div>
            <div className="flex flex-wrap gap-2">
              {section.metros.map((m, i) => {
                const isPrimary = m.tier !== "secondary";
                return (
                  <div
                    key={i}
                    className={`px-4 py-2.5 text-[13px] md:text-[14px] font-mono tracking-[0.05em] border ${
                      isPrimary
                        ? "border-accent/40 bg-accent/[0.08] text-text-primary"
                        : "border-text-muted/20 bg-bg-card text-text-muted"
                    }`}
                  >
                    {m.name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Age + Gender split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {section.ageDistribution && section.ageDistribution.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="border border-text-muted/15 bg-bg-card p-7"
            >
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-5">
                Age Distribution
              </div>
              <div className="space-y-4">
                {section.ageDistribution.map((b, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[13px] font-mono tracking-[0.08em] text-text-primary">
                        {b.bracket}
                      </span>
                      <span className="text-[13px] font-mono tabular-nums text-accent">
                        {b.weight}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-text-muted/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.weight}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {section.genderDistribution && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="border border-text-muted/15 bg-bg-card p-7 flex flex-col"
            >
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-5">
                Gender Distribution
              </div>
              <div className="grid grid-cols-2 gap-px bg-text-muted/15 flex-1">
                <div className="bg-bg-card p-5 text-center flex flex-col justify-center">
                  <div className="text-[40px] md:text-[48px] font-bold text-accent leading-none"
                       style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                    {section.genderDistribution.female}%
                  </div>
                  <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70 mt-3">
                    Female
                  </div>
                </div>
                <div className="bg-bg-card p-5 text-center flex flex-col justify-center">
                  <div className="text-[40px] md:text-[48px] font-bold text-text-primary leading-none"
                       style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                    {section.genderDistribution.male}%
                  </div>
                  <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70 mt-3">
                    Male
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Similar Artists + Genres */}
        {(section.similarArtists?.length || section.genres?.length) && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {section.similarArtists && section.similarArtists.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 border border-text-muted/15 bg-bg-card p-7"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
                  Similar Artists (Lookalike + Conquest)
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.similarArtists.map((a, i) => (
                    <span key={i}
                          className="px-3 py-1.5 text-[13px] font-mono tracking-[0.05em] text-text-primary border border-text-muted/20 bg-bg/40">
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {section.genres && section.genres.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="border border-text-muted/15 bg-bg-card p-7"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
                  Broad Genre
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.genres.map((g, i) => (
                    <span key={i}
                          className="px-3 py-1.5 text-[13px] font-mono tracking-[0.05em] text-accent border border-accent/30 bg-accent/[0.05]">
                      {g}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Platform signals */}
        {section.platformSignals && section.platformSignals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
              Platform Signals
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {section.platformSignals.map((p, i) => (
                <div key={i} className="border border-text-muted/15 bg-bg-card p-5">
                  <div className="text-[12px] font-mono tracking-[0.12em] uppercase text-accent mb-2">
                    {p.platform}
                  </div>
                  <p className="text-[13px] text-text-primary/85 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {section.footnote && (
          <p className="mt-8 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/60 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
