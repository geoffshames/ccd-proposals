"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { JOURNEY } from "@/lib/uber-hitc";

/**
 * FrictionMap — interactive attendee journey. Each node is a focusable card
 * with a heat indicator (documented friction intensity) and the partnership's
 * intervention. Accessible table alternative below.
 */
export function UberFrictionMap() {
  return (
    <section id="friction" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="05"
          title="The Friction Map"
          intro="The attendee journey, from discovery to the ride home, mapped against documented friction from the 2025 edition and Rose Bowl area event operations. The partnership's job is to show up exactly where the day breaks down. Exact venue operations remain subject to final approvals."
        />

        <div className="relative">
          {/* Route spine */}
          <div className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-text-muted/25 to-accent/60" aria-hidden="true" />

          <ol className="space-y-6 md:space-y-0">
            {JOURNEY.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={j.stage}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.05 * i }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 md:py-5 pl-10 md:pl-0`}
                >
                  {/* Node dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 md:top-7 h-[13px] w-[13px] rounded-full border-2 ${
                      j.heat >= 3 ? "border-accent bg-accent/30" : j.heat >= 1 ? "border-accent/70 bg-transparent" : "border-text-muted/50 bg-transparent"
                    }`}
                  />
                  <div className={left ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}>
                    <div className="flex items-baseline gap-3 md:justify-inherit flex-wrap" style={{ justifyContent: left ? undefined : undefined }}>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[18px] md:text-[20px] font-bold text-text-primary">{j.stage}</h3>
                      {j.heat >= 3 && (
                        <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-accent border border-accent/40 px-1.5 py-0.5">
                          High friction
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-[14px] text-text-muted leading-relaxed">
                      <span className="text-text-primary/70 font-medium">Today: </span>{j.friction}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed">
                      <span className="text-accent font-medium">With the partnership: </span>
                      <span className="text-text-primary/85">{j.role}</span>
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Accessible summary table */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-left text-[13px] border border-text-muted/15">
            <caption className="sr-only">Attendee journey friction summary</caption>
            <thead>
              <tr className="border-b border-text-muted/15 text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
                <th className="px-4 py-3 font-normal">Stage</th>
                <th className="px-4 py-3 font-normal">Friction today</th>
                <th className="px-4 py-3 font-normal">Partnership role</th>
              </tr>
            </thead>
            <tbody>
              {JOURNEY.map((j) => (
                <tr key={j.stage} className="border-b border-text-muted/10 last:border-0">
                  <th className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">{j.stage}</th>
                  <td className="px-4 py-3 text-text-muted">{j.friction}</td>
                  <td className="px-4 py-3 text-text-primary/85">{j.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
