"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { MONEY, SPLIT, PHASES, REACH, FLIGHT_NOTES } from "@/lib/uber-hitc";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: n % 1 ? 2 : 0 });

/** Animated bar that draws on view */
function Bar({ pct, color, label, value }: { pct: number; color: string; label: string; value: string }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] font-mono mb-1.5">
        <span className="text-text-muted uppercase tracking-[0.15em]">{label}</span>
        <span className="text-text-primary">{value}</span>
      </div>
      <div className="h-3 bg-text-muted/10 w-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export function UberMediaFlight() {
  const [activePhase, setActivePhase] = useState<string>("p1");
  const phase = PHASES.find((p) => p.id === activePhase)!;
  const totalPct = 100;

  return (
    <section id="flight" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="10"
          title="The $15,000 Media Flight"
          intro="One recommended allocation, three phases, every dollar mapped. Meta carries discovery and retargeting; TikTok carries fandom-native reach. Figures are planning estimates, not guarantees."
        />

        {/* Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-[12px] font-mono tracking-[0.22em] uppercase text-text-muted/70">Platform split</h3>
            {SPLIT.map((s) => (
              <div key={s.platform}>
                <Bar pct={(s.spend / MONEY.media) * 100} color={s.platform === "Meta" ? "#F5F5F5" : "#FD3737"} label={`${s.platform} · ${s.pct}%`} value={fmt(s.spend)} />
                <p className="mt-2 text-[12.5px] text-text-muted/80 leading-snug">{s.role}</p>
              </div>
            ))}
            <div className="pt-3 border-t border-text-muted/15">
              <Bar pct={totalPct} color="linear-gradient(90deg,#F5F5F5 55%,#FD3737 55%)" label="Total paid media" value={fmt(MONEY.media)} />
            </div>
          </div>

          {/* Reach scenarios */}
          <div>
            <h3 className="text-[12px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">
              Reach scenarios · estimates
            </h3>
            <div className="space-y-4">
              {REACH.scenarios.map((s) => {
                const impressions = Math.round((MONEY.media / s.cpm) * 1000);
                const reach = Math.round(impressions / REACH.frequency);
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5 }}
                    className="border border-text-muted/15 bg-bg-card p-5 flex flex-wrap items-baseline gap-x-6 gap-y-1"
                  >
                    <span className={`text-[11px] font-mono tracking-[0.18em] uppercase w-20 ${s.label === "Expected" ? "text-accent" : "text-text-muted/70"}`}>
                      {s.label}
                    </span>
                    <span className="display text-2xl text-text-primary">{(reach / 1000).toFixed(0)}K</span>
                    <span className="text-[11px] text-text-muted/70">reach</span>
                    <span className="text-[11px] font-mono text-text-muted/60">
                      {(impressions / 1000000).toFixed(2)}M imp @ ${s.cpm} CPM
                    </span>
                    <p className="w-full text-[11.5px] text-text-muted/60 mt-1">{s.note}</p>
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-5 text-[11.5px] font-mono text-text-muted/60 leading-relaxed">
              Formula: impressions = spend ÷ CPM × 1,000. Reach = impressions ÷ {REACH.frequency} avg frequency.
              CPM bands from Gupta Media tracker + 2026 aggregator benchmarks. Estimates only.
            </p>
          </div>
        </div>

        {/* Phase selector */}
        <div role="tablist" aria-label="Flight phases" className="grid grid-cols-1 md:grid-cols-3 gap-px bg-text-muted/15 border border-text-muted/15 mb-px">
          {PHASES.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activePhase === p.id}
              onClick={() => setActivePhase(p.id)}
              className={`text-left p-6 md:p-7 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
                activePhase === p.id ? "bg-bg-card" : "bg-bg hover:bg-bg-card/60"
              }`}
            >
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-2">Phase {i + 1} · {p.pct}%</div>
              <div className="text-[17px] font-bold text-text-primary leading-tight">{p.name}</div>
              <div className="mt-1.5 text-[11px] font-mono text-text-muted/70">{p.dates}</div>
              <div className="mt-3 display text-xl text-text-primary/90">{fmt(p.metaSpend + p.tiktokSpend)}</div>
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <motion.div
          key={phase.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-t-0 border-text-muted/15 bg-bg p-7 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">Objective</div>
              <p className="text-[14px] text-text-primary/85 leading-relaxed">{phase.objective}</p>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">Audience</div>
              <p className="text-[14px] text-text-muted leading-relaxed">{phase.audience}</p>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">Creative format</div>
              <p className="text-[14px] text-text-muted leading-relaxed">{phase.formats}</p>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">Message + CTA</div>
              <p className="text-[14px] text-text-primary/85 leading-relaxed">{phase.message}</p>
              <p className="text-[13px] text-accent mt-1">{phase.cta}</p>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">Spend by platform</div>
              <p className="text-[14px] text-text-muted">Meta <span className="text-text-primary">{fmt(phase.metaSpend)}</span></p>
              <p className="text-[14px] text-text-muted">TikTok <span className="text-text-primary">{fmt(phase.tiktokSpend)}</span></p>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">KPIs</div>
              <p className="text-[14px] text-text-muted">Primary: <span className="text-text-primary/85">{phase.kpi}</span></p>
              <p className="text-[14px] text-text-muted">Secondary: <span className="text-text-primary/85">{phase.kpi2}</span></p>
            </div>
          </div>
          <p className="mt-8 pt-6 border-t border-text-muted/10 text-[13px] text-text-muted/80 leading-relaxed">
            <span className="text-accent font-mono text-[11px] uppercase tracking-[0.15em]">Rationale — </span>
            {phase.rationale}
          </p>
        </motion.div>

        {/* Spend-by-phase bars */}
        <div className="mt-16">
          <h3 className="text-[12px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">Spend by phase</h3>
          <div className="space-y-5">
            {PHASES.map((p) => (
              <Bar
                key={p.id}
                pct={p.pct}
                color="#FD3737"
                label={`${p.name} · ${p.dates}`}
                value={`${fmt(p.metaSpend + p.tiktokSpend)} (${p.pct}%)`}
              />
            ))}
          </div>
        </div>

        {/* Flight notes */}
        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {FLIGHT_NOTES.map((n) => (
            <li key={n} className="flex gap-3 text-[13.5px] text-text-muted leading-relaxed">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
