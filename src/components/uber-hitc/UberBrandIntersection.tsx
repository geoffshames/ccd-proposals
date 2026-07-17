"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";

const UBER_BRINGS = [
  "The largest mobility platform in the world: 199M+ monthly consumers, 40M+ daily rides and orders",
  "A black-and-white design system built on movement and wayfinding",
  "An advertising practice that already builds bespoke brand experiences through Creative Studio",
  "Festival-scale credibility: presenting partner of London's All Points East since 2024",
];

const HITC_BRINGS = [
  "The defining festival of the Asian and Asian American music diaspora, now in its second decade",
  "A 2026 lineup anchored by KATSEYE's first HITC headline set, with XG, Rich Brian, UMI and more",
  "A visual world people genuinely love: clouds, characters, and a community that shows up in costume",
  "A food-and-culture program that makes the day about more than the stages",
];

const INTERSECTION = [
  { v: "Movement", d: "Uber moves bodies. 88rising moves culture. Same verb, different object." },
  { v: "Discovery", d: "Both brands exist to surface what is next: a new artist, a new part of the city." },
  { v: "Arrival", d: "One measures it in drop-off pins. The other in career-defining stages." },
  { v: "Community", d: "Rides are shared. Festivals are shared. The audience travels together either way." },
];

export function UberBrandIntersection() {
  return (
    <section id="brands" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="03"
          title="Two Brands, One Movement"
          intro="This only works if the partnership is more than a logo swap. It is. The two brands already operate in the same territory: what happens between where you are and where you want to be."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15 mb-px">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-bg-card p-8 md:p-12"
          >
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-text-muted mb-2">What Uber brings</div>
            <h3 className="display text-3xl md:text-4xl text-text-primary mb-8">The Way There</h3>
            <ul className="space-y-4">
              {UBER_BRINGS.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text-muted leading-relaxed">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-text-primary/70" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-bg-card p-8 md:p-12"
          >
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-text-muted mb-2">What 88rising brings</div>
            <h3 className="display text-3xl md:text-4xl text-text-primary mb-8">The Reason To Go</h3>
            <ul className="space-y-4">
              {HITC_BRINGS.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-text-muted leading-relaxed">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-text-muted/15 border border-text-muted/15">
          {INTERSECTION.map((x, i) => (
            <motion.div
              key={x.v}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-bg p-6 md:p-8"
            >
              <div className="display text-accent text-xl md:text-2xl mb-3">{x.v}</div>
              <p className="text-[13px] md:text-[14px] text-text-muted leading-relaxed">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
