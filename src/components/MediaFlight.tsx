"use client";

import { useProject } from "@/lib/project-context";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

export function MediaFlight() {
  const PROJECT = useProject();
  const mf = PROJECT.mediaFlight;
  if (!mf) return null;

  const goalStats = [
    { label: mf.goalLabels?.views ?? "Views Target", value: mf.goal.views },
    { label: mf.goalLabels?.blendedCpv ?? "Blended CPV", value: mf.goal.blendedCpv },
    { label: mf.goalLabels?.totalBudget ?? "Media Spend", value: mf.goal.totalBudget },
    { label: mf.goalLabels?.window ?? "Flight Window", value: mf.goal.window },
  ];

  return (
    <section id="media-flight" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="06" label="Media Flight" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.05] tracking-tight mt-4">
            {mf.heading || "The Media Flight"}
          </h2>
          {mf.subheading && (
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
              {mf.subheading}
            </p>
          )}
        </ScrollReveal>

        {/* Goal bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 bg-[#222] border border-[#222]">
          {goalStats.map((s, i) => (
            <ScrollReveal key={i} delay={0.05 * i} variant="scaleIn">
              <div className="bg-bg-card p-6 md:p-8 h-full">
                <div className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase mb-3">
                  {s.label}
                </div>
                <div className="display text-[clamp(1.6rem,3.5vw,2.4rem)] text-accent leading-none">
                  {s.value}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Flight tracks */}
        {mf.tracks.length >= 3 ? (
          /* Stacked full-width rows: built for dense 3+ channel flights */
          <div className="flex flex-col gap-5 mt-5">
            {mf.tracks.map((t, i) => (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div className="ccd-card rounded-none p-8 md:p-10">
                  <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12">
                    {/* Identity + numbers */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="text-[10px] font-mono tracking-[0.22em] text-accent/70 uppercase">
                          Track {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted border border-[#2a2a2a] px-3 py-1.5">
                          {t.role}
                        </span>
                      </div>
                      <h3 className="text-[22px] font-bold text-text-primary tracking-tight mb-6">{t.key}</h3>
                      <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
                        <div className="min-w-0">
                          <div className="display text-[clamp(2rem,4vw,2.8rem)] text-text-primary leading-none break-words">
                            {t.views}
                          </div>
                          <div className="text-[11px] font-mono text-text-muted mt-2">{t.viewsPct}</div>
                        </div>
                        <div className="min-w-0">
                          <div className="text-[24px] font-semibold text-accent leading-none">{t.budget}</div>
                          <div className="text-[11px] font-mono text-text-muted mt-2">{t.budgetPct}</div>
                        </div>
                      </div>
                    </div>
                    {/* Details */}
                    <div className="min-w-0 lg:border-l lg:border-[#222] lg:pl-12">
                      <div className="grid sm:grid-cols-3 gap-6 pb-6 border-b border-[#222]">
                        <Cell label={mf.cpvRowLabel ?? "Planning CPV"} value={t.cpv} />
                        <Cell label="Markets" value={t.markets} />
                        <Cell label="Campaign mix" value={t.mix} />
                      </div>
                      <p className="text-[13px] text-text-muted leading-[1.7] pt-6">{t.rationale}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {mf.tracks.map((t, i) => (
              <ScrollReveal key={i} delay={0.1 * i} variant={i === 0 ? "slideRight" : "slideLeft"}>
                <TiltCard className="group h-full">
                  <div className="ccd-card rounded-none p-8 md:p-10 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <div className="text-[10px] font-mono tracking-[0.22em] text-accent/70 uppercase mb-2">
                          Track {String.fromCharCode(65 + i)}
                        </div>
                        <h3 className="text-[22px] font-bold text-text-primary tracking-tight">{t.key}</h3>
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted border border-[#2a2a2a] px-3 py-1.5">
                        {t.role}
                      </span>
                    </div>

                    <div className="flex items-end gap-6 mb-8">
                      <div>
                        <div className="display text-[clamp(2.4rem,6vw,3.6rem)] text-text-primary leading-none">
                          {t.views}
                        </div>
                        <div className="text-[11px] font-mono text-text-muted mt-2">{t.viewsPct}</div>
                      </div>
                      <div className="pb-1">
                        <div className="text-[20px] font-semibold text-accent leading-none">{t.budget}</div>
                        <div className="text-[11px] font-mono text-text-muted mt-2">{t.budgetPct}</div>
                      </div>
                    </div>

                    <div className="space-y-4 border-t border-[#222] pt-6">
                      <Row label={mf.cpvRowLabel ?? "Planning CPV"} value={t.cpv} />
                      <Row label="Markets" value={t.markets} />
                      <Row label="Campaign mix" value={t.mix} />
                    </div>

                    <p className="text-[13px] text-text-muted leading-[1.7] mt-6 pt-6 border-t border-[#222]">
                      {t.rationale}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Honesty caveat box */}
        <ScrollReveal delay={0.1}>
          <div className="mt-5 p-8 md:p-10 bg-white/[0.06] border border-white/[0.10]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.22em] text-accent uppercase">{mf.caveat.heading}</span>
            </div>
            <p className="text-[15px] text-text-primary/90 leading-[1.8] max-w-4xl">{mf.caveat.body}</p>
          </div>
        </ScrollReveal>

        {/* Budget dial */}
        <ScrollReveal>
          <div className="mt-20 mb-8">
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">Budget Dial</span>
            <p className="text-text-muted text-[15px] mt-3 max-w-2xl leading-relaxed">
              {mf.dialSubheading ??
                "The flight scales near-linearly once the test locks real CPV. Same 50/50 posture, three levels of ambition."}
            </p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
          {mf.dial.map((d, i) => (
            <StaggerItem key={i}>
              <div
                className={`rounded-none p-8 h-full ${
                  d.featured
                    ? "bg-white/[0.06] border border-white/[0.14]"
                    : "ccd-card"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted">{d.label}</span>
                  {d.featured && (
                    <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-bg bg-accent px-2 py-1">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="display text-[clamp(2rem,5vw,2.8rem)] text-text-primary leading-none mb-2">{d.budget}</div>
                <div className="text-[14px] text-accent font-semibold mb-5">{d.views} {mf.dialUnit ?? "views"}</div>
                <div className="text-[12px] font-mono text-text-muted mb-5">{d.split}</div>
                <p className="text-[13px] text-text-muted leading-[1.7] border-t border-[#222] pt-5">{d.note}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Exclusions */}
        <ScrollReveal>
          <div className="mt-16">
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">Quality Controls (Non-Negotiable)</span>
            <div className="flex flex-wrap gap-3 mt-5">
              {mf.exclusions.map((ex, i) => (
                <span
                  key={i}
                  className="text-[12px] text-text-primary/80 border border-[#2a2a2a] bg-bg-card px-4 py-2.5 leading-tight"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {mf.pacingNote && (
          <ScrollReveal>
            <p className="text-text-muted/60 text-xs font-mono mt-12 leading-relaxed max-w-3xl">{mf.pacingNote}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted mb-2">{label}</div>
      <div className="text-[13px] text-text-primary/90 leading-[1.6] break-words">{value}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-[11px] font-mono tracking-[0.12em] uppercase text-text-muted flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-[13px] text-text-primary/90 text-right leading-[1.5]">{value}</span>
    </div>
  );
}
