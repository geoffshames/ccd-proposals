"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { META } from "@/lib/uber-hitc";

const PILLARS = [
  {
    id: "A",
    name: "Pickup + Drop-Off",
    image: "/images/uber-hitc-2026/street-trails.jpg",
    alt: "Night city light trails, abstract arrival energy",
    points: [
      "A recognizable, wayfinding-lit zone at the venue, subject to final operations approval",
      "Cloud-marked signage and a staffed greeting moment at arrival and departure",
      "Published zone map and hours inside every late-flight creative unit",
      "Designed for the 2025 edition's single worst moment: the post-headliner exit",
    ],
    note: "Exact traffic, staffing, and venue logistics subject to final operations approval by venue, city, and partners.",
  },
  {
    id: "B",
    name: "Branded Vehicles",
    image: "/images/uber-hitc-2026/concept-vehicle.jpg",
    alt: "Conceptual visualization of a dark wrapped vehicle with a red route light line and cloud fog",
    points: [
      "A wrapped fleet turns LA's streets into the campaign's largest media surface",
      "Exterior direction: festival clouds over dark bodywork, code visible at a glance",
      "Interior touchpoints: code cards, set-time cards, a first-stage moment when the door closes",
      "Built for the capture: the vehicle is a photo op before it is a ride",
    ],
    note: "Vehicle rendering below is a conceptual visualization, not final production artwork.",
    conceptual: true,
  },
  {
    id: "C",
    name: "Partnership Media",
    image: "/images/uber-hitc-2026/festival-dusk.jpg",
    alt: "Festival crowd at dusk with raised hands",
    points: [
      "Meta and TikTok announce and amplify the physical experience",
      `Every unit drives to one action: the event code ${META.eventCode}`,
      "Creative phases mirror the plan: reveal the partnership, teach the plan, own the day",
      "Measurement separates media delivery from code action, with no invented attribution",
    ],
    note: "All performance figures shown in this proposal are estimates, not guarantees.",
  },
];

export function UberActivation() {
  return (
    <section id="activation" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="08"
          title="The Activation Ecosystem"
          intro="Three pillars, one idea. The physical experience makes the media true; the media makes the physical experience famous. Each pillar works alone. Together they are the campaign."
        />

        <div className="space-y-8">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border border-text-muted/15 bg-bg-card overflow-hidden`}
            >
              <div className={`lg:col-span-5 relative min-h-[240px] lg:min-h-full ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.image})` }}
                  role="img"
                  aria-label={p.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent lg:bg-gradient-to-r" aria-hidden="true" />
                <span className="absolute top-5 left-5 display text-6xl md:text-7xl text-text-primary/15" aria-hidden="true">{p.id}</span>
                {p.conceptual && (
                  <span className="absolute bottom-4 left-5 text-[9px] font-mono tracking-[0.2em] uppercase text-text-primary/70 bg-bg/70 border border-text-muted/30 px-2 py-1">
                    Conceptual visualization
                  </span>
                )}
              </div>
              <div className="lg:col-span-7 p-8 md:p-12">
                <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent mb-3">Pillar {p.id}</div>
                <h3 className="display text-3xl md:text-4xl text-text-primary mb-7">{p.name}</h3>
                <ul className="space-y-3.5 mb-8">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[14.5px] text-text-muted leading-relaxed">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-[11.5px] font-mono tracking-[0.06em] text-text-muted/60 leading-relaxed border-t border-text-muted/15 pt-5">
                  {p.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
