"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { META } from "@/lib/uber-hitc";

const OPPORTUNITIES = [
  {
    k: "Cultural",
    title: "The festival's worst moment is unbranded",
    body: "In 2025, the most documented pain of the HITC day was not the lineup. It was the exit. Congested gates, long walks in 90-degree heat, and the post-headliner scramble for a ride. That moment is currently owned by no one.",
  },
  {
    k: "Audience",
    title: "They already plan the ride socially",
    body: "Group chats and Reddit threads solve transportation out loud, weeks before the show. A partnership that answers the question early becomes part of the plan, not an ad that interrupts it.",
  },
  {
    k: "Utility",
    title: "Parking is a paid add-on. The alternative is open",
    body: "On-site parking runs $45 to $95 in advance. Every car-free attendee is an audience the partnership can serve directly, with a code instead of a parking pass.",
  },
  {
    k: "Media",
    title: "Summer CPMs favor the flight",
    body: "July and August sit well below Q4 auction pressure. A $15,000 awareness flight buys meaningfully more reach now than it would in November.",
  },
];

export function UberOpportunity() {
  return (
    <section id="opportunity" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="02"
          title="The Opportunity"
          intro={`The audience's relationship with ${META.festival} begins before the gates. Transportation is not a logistical layer. It is the first and final chapter of the festival experience, and right now it is the only chapter nobody has written.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15">
          {OPPORTUNITIES.map((o, i) => (
            <motion.article
              key={o.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="bg-bg p-8 md:p-10"
            >
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent mb-4">
                {o.k} opportunity
              </div>
              <h3 className="text-[20px] md:text-[23px] font-bold text-text-primary leading-tight mb-4">
                {o.title}
              </h3>
              <p className="text-text-muted text-[15px] leading-relaxed">{o.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-[12px] font-mono tracking-[0.12em] text-text-muted/70 uppercase"
        >
          The countdown on this page is live. August 8 is not moving.
        </motion.p>
      </div>
    </section>
  );
}
