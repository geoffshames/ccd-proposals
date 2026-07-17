"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { MEASUREMENT, TIMELINE, SCOPE, MONEY } from "@/lib/uber-hitc";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function UberMeasurement() {
  return (
    <section id="measurement" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="11"
          title="Measurement Framework"
          intro="The objective is awareness, so the framework is honest about what awareness can and cannot prove. Every metric sits in a labeled tier. Promo-code redemption is reported only if attribution access is confirmed, and never treated as guaranteed."
        />
        <div className="space-y-px bg-text-muted/15 border border-text-muted/15">
          {MEASUREMENT.map((m, i) => (
            <motion.div
              key={m.tier}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-bg px-6 md:px-10 py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
            >
              <div className="md:col-span-3">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[17px] font-bold text-text-primary">{m.tier}</h3>
              </div>
              <p className="md:col-span-5 text-[14px] text-text-primary/80 leading-relaxed">{m.metrics}</p>
              <p className="md:col-span-4 text-[13px] text-text-muted leading-relaxed">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UberExecution() {
  return (
    <section id="execution" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="12"
          title="Execution Plan"
          intro="A compressed but realistic schedule from approval to post-event reporting. Partner review and platform approval are built in as real time, not wished away."
        />
        <ol className="relative border-l border-text-muted/20 ml-2 space-y-8">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.phase}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="relative pl-8"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full border-2 ${
                  i < 4 ? "border-accent bg-accent/25" : "border-text-muted/40 bg-bg"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-[17px] font-bold text-text-primary">{t.phase}</h3>
                <span className="text-[11px] font-mono tracking-[0.12em] text-accent">{t.window}</span>
              </div>
              <p className="mt-1 text-[13.5px] text-text-muted leading-relaxed">{t.note}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function UberScopeInvestment() {
  return (
    <section id="investment" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="13"
          title="Scope + Investment"
          intro="The paid-media scope is priced with precision and separated cleanly from the larger physical activation, which is visualized and recommended here but scoped and quoted separately."
        />

        {/* Investment math */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-text-muted/15 border border-text-muted/15 mb-16">
          <div className="bg-bg p-8 md:p-10">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">Paid media</div>
            <div className="display text-4xl md:text-5xl text-text-primary">{fmt(MONEY.media)}</div>
            <p className="mt-3 text-[12.5px] text-text-muted">Meta + TikTok, billed at cost.</p>
          </div>
          <div className="bg-bg p-8 md:p-10">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">Management fee · 15%</div>
            <div className="display text-4xl md:text-5xl text-text-primary">{fmt(MONEY.fee)}</div>
            <p className="mt-3 text-[12.5px] text-text-muted">Crowd Control Digital media management.</p>
          </div>
          <div className="bg-bg-card border-2 border-accent/40 p-8 md:p-10">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-4">Total proposed investment</div>
            <div className="display text-4xl md:text-5xl text-accent">{fmt(MONEY.total)}</div>
            <p className="mt-3 text-[12.5px] text-text-muted">Media plus management. Nothing hidden.</p>
          </div>
        </div>

        <p className="mb-14 text-[13px] text-text-muted leading-relaxed max-w-3xl border-l-2 border-accent/50 pl-5">
          Media management is calculated at 15% of paid-media spend. Physical activation, promotional subsidy,
          production, staffing, and partner inventory are not included unless separately scoped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15">
          <div className="bg-bg p-8 md:p-10">
            <h3 className="text-[12px] font-mono tracking-[0.22em] uppercase text-accent mb-6">Included in the {fmt(MONEY.fee)} fee</h3>
            <ul className="space-y-3">
              {SCOPE.included.map((s) => (
                <li key={s} className="flex gap-3 text-[14px] text-text-muted leading-relaxed">
                  <span className="text-accent mt-0.5" aria-hidden="true">+</span>{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg p-8 md:p-10">
            <h3 className="text-[12px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">Excluded unless separately approved + quoted</h3>
            <ul className="space-y-3">
              {SCOPE.excluded.map((s) => (
                <li key={s} className="flex gap-3 text-[14px] text-text-muted leading-relaxed">
                  <span className="text-text-muted/50 mt-0.5" aria-hidden="true">–</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
