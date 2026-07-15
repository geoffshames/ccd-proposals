"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { AudienceSection } from "@/lib/plan-context";

export function PlanAudience({ section }: { section: AudienceSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        {section.thesis && (
          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65 }}
            className="border-l-2 border-accent pl-7 md:pl-9 max-w-5xl mb-12"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70">
              Audience thesis
            </div>
            <p
              className="mt-4 text-[clamp(1.25rem,2.4vw,1.85rem)] leading-[1.32] font-bold text-text-primary"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              {section.thesis}
            </p>
          </motion.blockquote>
        )}

        {/* Metros */}
        {section.metros && section.metros.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
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
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-5">
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
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-5">
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

        {/* Audience personas */}
        {section.personas && section.personas.length > 0 && (
          <div className="mb-12">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
              Priority audience segments
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {section.personas.map((persona, i) => (
                <motion.article
                  key={`${persona.name}-${i}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className={`border p-7 md:p-8 ${
                    persona.priority === "primary"
                      ? "border-white/[0.16] bg-white/[0.04]"
                      : "border-text-muted/15 bg-bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      {persona.label && (
                        <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-accent mb-2">
                          {persona.label}
                        </div>
                      )}
                      <h3
                        className="text-[23px] md:text-[27px] font-bold text-text-primary leading-tight"
                        style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                      >
                        {persona.name}
                      </h3>
                    </div>
                    {persona.priority && (
                      <span className="border border-text-muted/20 px-2.5 py-1 text-[10px] font-mono tracking-[0.16em] uppercase text-text-muted/65 flex-shrink-0">
                        {persona.priority}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-text-primary/85">
                    {persona.profile}
                  </p>

                  {(persona.psychographics?.length || persona.motivations?.length) && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-text-muted/15">
                      {persona.psychographics && persona.psychographics.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65 mb-3">
                            Psychographics
                          </div>
                          <ul className="space-y-2">
                            {persona.psychographics.map((item, j) => (
                              <li key={j} className="flex gap-2.5 text-[13px] leading-relaxed text-text-muted">
                                <span className="text-accent flex-shrink-0">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {persona.motivations && persona.motivations.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65 mb-3">
                            Motivations
                          </div>
                          <ul className="space-y-2">
                            {persona.motivations.map((item, j) => (
                              <li key={j} className="flex gap-2.5 text-[13px] leading-relaxed text-text-muted">
                                <span className="text-accent flex-shrink-0">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {persona.behaviors && persona.behaviors.length > 0 && (
                    <div className="mt-6">
                      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65 mb-3">
                        Observable behaviors
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {persona.behaviors.map((behavior, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 border border-text-muted/20 bg-bg/30 text-[12px] leading-relaxed text-text-primary/85"
                          >
                            {behavior}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {persona.platforms && persona.platforms.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {persona.platforms.map((platform, j) => (
                        <div key={`${platform.name}-${j}`} className="border-l border-accent/50 pl-4">
                          <div className="text-[10px] font-mono tracking-[0.14em] uppercase text-accent">
                            {platform.name}
                          </div>
                          <p className="mt-1.5 text-[12px] leading-relaxed text-text-muted">
                            {platform.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {(persona.barriers?.length || persona.triggers?.length) && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-text-muted/15">
                      {persona.barriers && persona.barriers.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65 mb-3">
                            Barriers
                          </div>
                          <ul className="space-y-2">
                            {persona.barriers.map((item, j) => (
                              <li key={j} className="text-[13px] leading-relaxed text-text-muted">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {persona.triggers && persona.triggers.length > 0 && (
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-accent/80 mb-3">
                            Triggers
                          </div>
                          <ul className="space-y-2">
                            {persona.triggers.map((item, j) => (
                              <li key={j} className="text-[13px] leading-relaxed text-text-primary/90">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {persona.conversionGoal && (
                    <div className="mt-6 border-t border-text-muted/15 pt-5">
                      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65">
                        Desired conversion
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-text-primary">
                        {persona.conversionGoal}
                      </p>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Psychographic and behavior signals */}
        {(section.psychographics?.length || section.behaviorSignals?.length) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
            {section.psychographics && section.psychographics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="border border-text-muted/15 bg-bg-card p-7 md:p-8"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">
                  Psychographic map
                </div>
                <div className="space-y-6">
                  {section.psychographics.map((group, i) => (
                    <div key={`${group.label}-${i}`}>
                      <h3 className="text-[14px] font-bold text-text-primary">
                        {group.label}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item, j) => (
                          <span
                            key={j}
                            className="px-3 py-1.5 border border-text-muted/20 bg-bg/35 text-[12px] text-text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {section.behaviorSignals && section.behaviorSignals.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="border border-text-muted/15 bg-bg-card p-7 md:p-8"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">
                  Behavior and platform signals
                </div>
                <div className="space-y-6">
                  {section.behaviorSignals.map((signal, i) => (
                    <div key={`${signal.behavior}-${i}`} className="pb-5 border-b border-text-muted/15 last:pb-0 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-mono text-accent pt-1 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-[14px] leading-relaxed text-text-primary/90">
                            {signal.behavior}
                          </p>
                          {signal.platforms && signal.platforms.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {signal.platforms.map((platform, j) => (
                                <span
                                  key={j}
                                  className="text-[10px] font-mono tracking-[0.12em] uppercase text-accent border border-accent/25 px-2 py-1"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          )}
                          {signal.implication && (
                            <p className="mt-3 text-[12px] leading-relaxed text-text-muted">
                              {signal.implication}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Conversion barriers and triggers */}
        {(section.barriers?.length || section.triggers?.length) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
            {section.barriers && section.barriers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="border border-text-muted/20 bg-bg-card p-7 md:p-8"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">
                  Barriers and pain points
                </div>
                <div className="space-y-6">
                  {section.barriers.map((item, i) => (
                    <div key={`${item.barrier}-${i}`}>
                      <h3 className="text-[14px] font-bold text-text-primary">
                        {item.barrier}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-text-muted border-l border-text-muted/25 pl-4">
                        {item.response}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {section.triggers && section.triggers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="border border-white/[0.14] bg-white/[0.035] p-7 md:p-8"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-6">
                  Conversion triggers
                </div>
                <div className="space-y-6">
                  {section.triggers.map((item, i) => (
                    <div key={`${item.trigger}-${i}`}>
                      <h3 className="text-[14px] font-bold text-text-primary">
                        {item.trigger}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-text-primary/80 border-l border-accent/45 pl-4">
                        {item.implication}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

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
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
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
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
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
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
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

        {/* Fan voice or synthesized audience sentiment */}
        {section.fanQuotes && section.fanQuotes.length > 0 && (
          <div className="mt-12 mb-8">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
              {section.fanQuotesLabel ?? "Voice of fan"}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {section.fanQuotes.map((item, i) => (
                <motion.figure
                  key={`${item.quote}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="border border-text-muted/15 bg-bg-card p-7 md:p-8"
                >
                  {item.synthesized ? (
                    <p
                      className="text-[18px] md:text-[20px] leading-relaxed font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                    >
                      {item.quote}
                    </p>
                  ) : (
                    <blockquote
                      className="text-[18px] md:text-[20px] leading-relaxed font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                    >
                      “{item.quote}”
                    </blockquote>
                  )}
                  {item.source && (
                    <figcaption className="mt-5 text-[10px] font-mono tracking-[0.14em] uppercase text-text-muted/70">
                      {item.source}
                    </figcaption>
                  )}
                  {item.insight && (
                    <p className="mt-5 pt-5 border-t border-text-muted/15 text-[13px] leading-relaxed text-text-muted">
                      <span className="text-accent font-mono text-[10px] tracking-[0.14em] uppercase mr-2">
                        Signal
                      </span>
                      {item.insight}
                    </p>
                  )}
                </motion.figure>
              ))}
            </div>
          </div>
        )}

        {section.footnote && (
          <p className="mt-8 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/70 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
