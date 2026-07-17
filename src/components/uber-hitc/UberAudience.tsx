"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";

const PERSONAS = [
  {
    name: "The Stan Organizer",
    age: "18–24",
    platform: "TikTok-first",
    story: "KATSEYE or XG is the reason she bought the pass the day it dropped. She runs the group chat, screenshots the set times, and has already decided what everyone is wearing.",
    anxiety: "Getting the whole group there together, and home after the headliner without splitting up.",
    trigger: "Anything that makes the plan official. A code she can drop in the chat is a gift, not an ad.",
  },
  {
    name: "The Culture Core",
    age: "22–32",
    platform: "Instagram + YouTube",
    story: "Grew up on 88rising. Here for Rich Brian, UMI, and the food lineup as much as the headliner. Treats HITC as a yearly reunion with a community that looks like him.",
    anxiety: "Heat, lines, and the walk back to wherever the car ended up. He has done the Rose Bowl exit before.",
    trigger: "Proof the festival thought about the whole day, not just the stages. Utility reads as respect.",
  },
  {
    name: "The Discovery Casual",
    age: "21–30",
    platform: "TikTok discovery",
    story: "Found half the lineup through short-form video. Buys late, goes where the group goes, and decides transportation the week of the show.",
    anxiety: "Surge pricing and not knowing where the pickup zone actually is.",
    trigger: "A concrete, simple answer in the final week: where to get dropped, what code to use.",
  },
];

const PLATFORM_ROLES = [
  { p: "TikTok", stat: "74%", text: "more likely to discover and share new music on short-form video than the average short-form video user (TikTok × Luminate, 2025). This is where fandoms form and where the announcement creative must feel native." },
  { p: "Meta", stat: "45%", text: "of US TikTok users pay to attend live music events (Business Insider on TikTok-commissioned study, 2023). Meta converts that intent: event discovery, retargeting, and link-driven code detail views." },
];

export function UberAudience() {
  return (
    <section id="audience" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="04"
          title="The Audience in Motion"
          intro="Three evidence-based attendee types, built from the lineup's fandoms and documented platform behavior. No invented demographics. What they share: they travel in groups, they plan out loud, and transportation anxiety is a real part of their festival day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-text-muted/15 border border-text-muted/15 mb-16">
          {PERSONAS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-bg p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="min-w-0 text-[19px] font-bold text-text-primary leading-tight">{p.name}</h3>
                <span className="shrink-0 whitespace-nowrap text-[10px] font-mono tracking-[0.15em] text-accent border border-accent/30 px-2 py-1">{p.age}</span>
              </div>
              <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70 mb-5">{p.platform}</div>
              <p className="text-[14px] text-text-muted leading-relaxed mb-5">{p.story}</p>
              <div className="mt-auto space-y-4">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-1.5">Transportation anxiety</div>
                  <p className="text-[13.5px] text-text-primary/80 leading-snug">{p.anxiety}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-1.5">Action trigger</div>
                  <p className="text-[13.5px] text-text-primary/80 leading-snug">{p.trigger}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15">
          {PLATFORM_ROLES.map((r, i) => (
            <motion.div
              key={r.p}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-bg-card p-8 md:p-10"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="display text-4xl md:text-5xl text-accent">{r.stat}</span>
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-text-primary/80">{r.p}</span>
              </div>
              <p className="text-[14px] text-text-muted leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
