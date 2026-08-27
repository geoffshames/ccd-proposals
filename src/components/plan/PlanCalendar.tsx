"use client";

import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  CalendarSection,
  CalendarPhase,
  CalendarEntry,
} from "@/lib/plan-context";

// Kind -> label + dot treatment. Palette stays on-brand: accent + neutrals only.
const KIND_META: Record<
  string,
  { label: string; dot: string; solid?: boolean }
> = {
  release: { label: "Release", dot: "bg-accent", solid: true },
  presave: { label: "Pre-save", dot: "border-2 border-accent bg-transparent" },
  announce: { label: "Announce", dot: "border-2 border-accent bg-transparent" },
  content: { label: "Organic", dot: "bg-text-primary/70" },
  paid: { label: "Paid", dot: "border-2 border-text-muted/60 bg-transparent" },
  asset: { label: "Asset due", dot: "bg-text-muted/45 rounded-none rotate-45" },
  live: { label: "Live", dot: "bg-accent/45" },
  milestone: { label: "Milestone", dot: "bg-text-muted/45 rounded-none" },
};

function ChannelChips({ channel }: { channel?: string[] }) {
  if (!channel || channel.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {channel.map((c, i) => (
        <span
          key={i}
          className="px-2 py-0.5 border border-text-muted/25 text-[9.5px] font-mono tracking-[0.08em] uppercase text-text-muted/80"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function EntryRow({ entry, last }: { entry: CalendarEntry; last: boolean }) {
  const meta = KIND_META[entry.kind] ?? KIND_META.milestone;
  const done = entry.status === "done";
  const isRelease = entry.kind === "release";

  return (
    <div className={`relative flex gap-4 md:gap-6 ${done ? "opacity-55" : ""}`}>
      {/* Rail + node */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-[14px]">
        <span
          className={`mt-[6px] w-[11px] h-[11px] flex-shrink-0 rounded-full ${meta.dot}`}
          aria-hidden="true"
        />
        {!last && <span className="flex-1 w-px bg-text-muted/15 mt-1" />}
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 ${last ? "pb-0" : "pb-7"}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[11px] md:text-[12px] font-mono tracking-[0.12em] uppercase text-accent whitespace-nowrap tabular-nums">
            {entry.date}
          </span>
          <span className="text-[9.5px] font-mono tracking-[0.16em] uppercase text-text-muted/55">
            {meta.label}
          </span>
          {done && (
            <span className="text-[9.5px] font-mono tracking-[0.16em] uppercase text-accent/80">
              ✓ done
            </span>
          )}
        </div>

        <h5
          className={`mt-1 leading-snug ${
            isRelease
              ? "text-[16px] md:text-[18px] font-bold text-text-primary"
              : "text-[14.5px] md:text-[15.5px] font-semibold text-text-primary/90"
          }`}
          style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
        >
          {entry.label}
        </h5>

        {entry.detail && (
          <p className="mt-1.5 text-[13px] md:text-[13.5px] text-text-primary/70 leading-relaxed max-w-2xl">
            {entry.detail}
          </p>
        )}

        {(entry.channel || entry.time || entry.cta) && (
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <ChannelChips channel={entry.channel} />
            {entry.time && (
              <span className="text-[10.5px] font-mono tracking-[0.06em] text-text-muted/70">
                ◷ {entry.time}
              </span>
            )}
            {entry.cta && (
              <span className="px-2.5 py-0.5 bg-accent/[0.09] border border-accent/30 text-[10px] font-mono tracking-[0.1em] uppercase text-accent">
                {entry.cta}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PhaseCard({ phase, idx }: { phase: CalendarPhase; idx: number }) {
  const isNext = phase.status === "next";
  const isDone = phase.status === "done";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: idx * 0.04 }}
      className={`border bg-bg-card ${
        isNext ? "border-accent/55" : "border-text-muted/15"
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Phase header */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 pb-5 mb-6 border-b border-text-muted/12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3
                className="text-[20px] md:text-[24px] font-bold text-text-primary leading-tight"
                style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
              >
                {phase.title}
              </h3>
              {isNext && (
                <span className="px-2 py-0.5 bg-accent text-black text-[9.5px] font-mono tracking-[0.18em] uppercase">
                  Next up
                </span>
              )}
              {isDone && (
                <span className="px-2 py-0.5 border border-text-muted/35 text-text-muted/80 text-[9.5px] font-mono tracking-[0.18em] uppercase">
                  Shipped
                </span>
              )}
            </div>
            {phase.summary && (
              <p className="mt-2.5 text-[13.5px] md:text-[14px] text-text-primary/70 leading-relaxed max-w-3xl">
                {phase.summary}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 flex-shrink-0">
            {phase.releaseDate && (
              <div className="text-right">
                <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-text-muted/55">
                  Release
                </div>
                <div className="text-[15px] md:text-[17px] font-bold text-accent leading-tight tabular-nums"
                     style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                  {phase.releaseDate}
                </div>
              </div>
            )}
            {phase.format && (
              <span className="px-2 py-0.5 border border-text-muted/25 text-[9.5px] font-mono tracking-[0.1em] uppercase text-text-muted/80">
                {phase.format}
              </span>
            )}
            {phase.window && (
              <span className="text-[10px] font-mono tracking-[0.06em] text-text-muted/55 tabular-nums">
                {phase.window}
              </span>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div>
          {phase.entries.map((e, i) => (
            <EntryRow key={i} entry={e} last={i === phase.entries.length - 1} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PlanCalendar({ section }: { section: CalendarSection }) {
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

        {/* Operating rules strip */}
        {(section.cadenceNote || (section.postingRules && section.postingRules.length > 0)) && (
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {section.cadenceNote && (
              <div className="border border-text-muted/15 bg-bg-card p-5 md:p-6">
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2.5">
                  The repeating arc
                </div>
                <p className="text-[13.5px] text-text-primary/80 leading-relaxed">
                  {section.cadenceNote}
                </p>
              </div>
            )}
            {section.postingRules && section.postingRules.length > 0 && (
              <div className="border border-text-muted/15 bg-bg-card p-5 md:p-6">
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2.5">
                  Posting rules
                </div>
                <ul className="space-y-2">
                  {section.postingRules.map((r, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] text-text-primary/78 leading-relaxed">
                      <span className="text-accent/60 flex-shrink-0">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Channel note */}
        {section.channelNote && (
          <div className="mb-10 border-l-2 border-accent/40 pl-4 md:pl-5 py-1">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-1.5">
              Where spend goes
            </div>
            <p className="text-[13.5px] text-text-primary/78 leading-relaxed max-w-4xl">
              {section.channelNote}
            </p>
          </div>
        )}

        {/* Legend */}
        {section.legend && section.legend.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {section.legend.map((l, i) => {
              const meta = KIND_META[l.kind] ?? KIND_META.milestone;
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-[10px] h-[10px] rounded-full flex-shrink-0 ${meta.dot}`} aria-hidden="true" />
                  <span className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-text-muted/75">
                    {l.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Phases */}
        <div className="space-y-6 md:space-y-8">
          {section.phases.map((phase, i) => (
            <PhaseCard key={phase.key} phase={phase} idx={i} />
          ))}
        </div>

        {section.footnote && (
          <p className="mt-12 text-[12.5px] font-mono text-text-muted/70 leading-relaxed border-l-2 border-accent/40 pl-4">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
