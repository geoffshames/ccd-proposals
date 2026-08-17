"use client";
import { useProject } from "@/lib/project-context";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Tiers() {
  const PROJECT = useProject();
  if (!PROJECT.tiers || PROJECT.tiers.tiers.length === 0) return null;
  const T = PROJECT.tiers;

  return (
    <section id="tiers" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionLabel number={T.sectionNumber || "06"} label="Investment Tiers" />
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-text-primary leading-[1.05] tracking-tight mt-4">
            {T.heading || "Three Tiers. One Goal."}
          </h2>
          {T.subheading && (
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
              {T.subheading}
            </p>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
          {T.tiers.map((tier, i) => {
            const isFeatured = !!tier.featured;
            return (
              <ScrollReveal key={i}>
                <motion.div
                  className={`ccd-card relative h-full p-8 md:p-10 flex flex-col ${
                    isFeatured ? "!bg-white/[0.06] !border-white/[0.18]" : ""
                  }`}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  {isFeatured && (
                    <div className="absolute top-0 right-0 bg-accent text-[color:var(--on-accent)] text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2">
                      Recommended
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-3">
                      {tier.label}
                    </div>
                    <h3 className="text-[26px] md:text-[28px] font-bold text-text-primary leading-tight">
                      {tier.name}
                    </h3>
                    {tier.tagline && (
                      <p className="text-text-muted text-[15px] mt-2 leading-relaxed">
                        {tier.tagline}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-2">
                      <span className="display text-[clamp(2.5rem,4.5vw,3.5rem)] text-text-primary leading-none">
                        {tier.price}
                      </span>
                      {tier.priceSuffix && (
                        <span className="text-text-muted text-sm font-mono">
                          {tier.priceSuffix}
                        </span>
                      )}
                    </div>
                    {tier.priceContext && (
                      <p className="text-text-muted/70 text-[13px] font-mono mt-2">
                        {tier.priceContext}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
                      Included
                    </div>
                    <ul className="space-y-3">
                      {tier.includes.map((item, j) => (
                        <li key={j} className="flex gap-3 text-[14px] text-text-primary/90 leading-relaxed">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.excludes && tier.excludes.length > 0 && (
                      <>
                        <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mt-8 mb-4">
                          Not Included
                        </div>
                        <ul className="space-y-3">
                          {tier.excludes.map((item, j) => (
                            <li key={j} className="flex gap-3 text-[14px] text-text-muted/70 leading-relaxed">
                              <span className="text-text-muted/40 mt-1 flex-shrink-0">×</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <a
                    href={`mailto:${PROJECT.cta.email}?subject=${encodeURIComponent(
                      `${PROJECT.client.name} \u00d7 Crowd Control Digital \u2014 Get Started: ${tier.name}`
                    )}&body=${encodeURIComponent(
                      `Hi Geoff,\n\nWe'd like to get started with the "${tier.name}" option for ${PROJECT.client.name}. Let's set it up.\n\nThanks`
                    )}`}
                    className="mt-8 block w-full text-center bg-accent text-[color:var(--on-accent)] font-semibold text-[14px] py-4 rounded-none tracking-[-0.01em] hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </a>

                  {tier.footerNote && (
                    <div className="mt-8 pt-6 border-t border-white/[0.08]">
                      <p className="text-text-muted/80 text-[13px] leading-relaxed italic">
                        {tier.footerNote}
                      </p>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {T.footnote && (
          <p className="text-text-muted/60 text-xs font-mono mt-10 text-center max-w-3xl mx-auto">
            {T.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
