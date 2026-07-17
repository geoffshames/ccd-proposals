"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { META } from "@/lib/uber-hitc";

const MESSAGES = [
  { k: "A", copy: "The ride is the first stage.", use: "Master line. All hero units." },
  { k: "B", copy: "The festival starts when you get in.", use: "TikTok POV creative, vehicle interiors." },
  { k: "C", copy: "Follow the clouds. Your ride is ready.", use: "Day-of and pickup wayfinding units." },
  { k: "D", copy: `Skip the $45 parking pass. Ride with ${META.eventCode}.`, use: "Utility-forward Meta feed units." },
  { k: "E", copy: "Last year the exit was the worst part. This year it is handled.", use: "Retargeting warm audiences who attended 2025." },
];

const FORMATS = [
  {
    f: "Meta Reels / Stories",
    d: "9:16 reveal cut: city light trails resolve into the cloud field, code card end-frame.",
    phase: "P1 Reveal",
    message: "A + code",
    measure: "Reach, 3s views, code detail views",
  },
  {
    f: "Meta Feed Carousel",
    d: "The plan in four cards: the partnership, the code, the pickup zone, the exit.",
    phase: "P2 Culture + Utility",
    message: "D + C",
    measure: "6s views, saves, link clicks",
  },
  {
    f: "TikTok Vertical",
    d: "POV: door closes, city passes, first bass note hits as the venue appears. Creator-voiced, fandom-native.",
    phase: "P1–P2",
    message: "B",
    measure: "Completion rate, shares, profile taps",
  },
  {
    f: "TikTok Day-Of",
    d: "How to find us: animated zone map, pickup walk-through, code reminder.",
    phase: "P3 Final Push",
    message: "C + code",
    measure: "Code saves, day-of clicks",
  },
  {
    f: "Stories Countdown",
    d: "Native countdown sticker + code card. Reminder sequence in final 72 hours.",
    phase: "P3",
    message: "E + code",
    measure: "Reminder opt-ins, code detail views",
  },
];

const ASSET_MATRIX = [
  { asset: "Master reveal video 15s", meta: "Reels, Stories, Feed", tiktok: "Top feed cut", spec: "9:16 + 4:5 + 1:1" },
  { asset: "Utility carousel (4 cards)", meta: "Feed", tiktok: "Photo-mode adapt", spec: "1:1 + 4:5" },
  { asset: "POV ride creative 20–30s", meta: "Reels", tiktok: "Primary unit", spec: "9:16" },
  { asset: "Zone map explainer", meta: "Stories + Feed", tiktok: "Day-of unit", spec: "9:16 + 1:1" },
  { asset: "Countdown / reminder suite", meta: "Stories", tiktok: "Spark posts", spec: "9:16" },
  { asset: "Code end-card system", meta: "All units", tiktok: "All units", spec: `${META.eventCode} lockup` },
];

export function UberCreativeSystem() {
  const [tab, setTab] = useState<"messages" | "formats" | "matrix">("messages");

  return (
    <section id="creative" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="09"
          title="The Creative System"
          intro="One master territory, five message variations, and a format plan that maps every unit to a phase, an audience, and a measurement. Proposed ad copy follows Uber's sentence-case style; artist likeness appears only where rights are cleared."
        />

        {/* Tab bar */}
        <div role="tablist" aria-label="Creative system views" className="flex flex-wrap gap-px bg-text-muted/15 border border-text-muted/15 mb-10 w-fit">
          {(["messages", "formats", "matrix"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`px-5 md:px-7 py-3 text-[11px] font-mono tracking-[0.18em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                tab === t ? "bg-accent text-white" : "bg-bg text-text-muted hover:text-text-primary"
              }`}
            >
              {t === "messages" ? "Messages" : t === "formats" ? "Formats" : "Asset matrix"}
            </button>
          ))}
        </div>

        {tab === "messages" && (
          <div className="space-y-px bg-text-muted/15 border border-text-muted/15">
            {MESSAGES.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-bg px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-10"
              >
                <span className="text-[11px] font-mono text-accent w-8 shrink-0">{m.k}</span>
                <p className="flex-1 text-[18px] md:text-[22px] font-bold text-text-primary leading-snug">{m.copy}</p>
                <span className="text-[11px] font-mono tracking-[0.1em] text-text-muted/70 md:text-right shrink-0">{m.use}</span>
              </motion.div>
            ))}
          </div>
        )}

        {tab === "formats" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15">
            {FORMATS.map((f, i) => (
              <motion.div
                key={f.f}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-bg p-7"
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="text-[16px] font-bold text-text-primary">{f.f}</h3>
                  <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-accent whitespace-nowrap">{f.phase}</span>
                </div>
                <p className="text-[13.5px] text-text-muted leading-relaxed mb-4">{f.d}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] font-mono text-text-muted/70">
                  <span>Message: <span className="text-text-primary/80">{f.message}</span></span>
                  <span>Measured by: <span className="text-text-primary/80">{f.measure}</span></span>
                </div>
              </motion.div>
            ))}
            <div className="bg-bg-card p-7 flex items-center">
              <p className="text-[13px] text-text-muted leading-relaxed">
                Every format connects to a message, a phase, a CTA, the event code, and a measurement method.
                Artist or lineup integration only where rights and approvals are confirmed. No fabricated endorsements.
              </p>
            </div>
          </div>
        )}

        {tab === "matrix" && (
          <div className="overflow-x-auto border border-text-muted/15">
            <table className="w-full text-left text-[13px]">
              <caption className="sr-only">Platform-specific asset matrix</caption>
              <thead>
                <tr className="border-b border-text-muted/15 bg-bg-card text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
                  <th className="px-5 py-3.5 font-normal">Asset</th>
                  <th className="px-5 py-3.5 font-normal">Meta placements</th>
                  <th className="px-5 py-3.5 font-normal">TikTok placements</th>
                  <th className="px-5 py-3.5 font-normal">Specs</th>
                </tr>
              </thead>
              <tbody>
                {ASSET_MATRIX.map((a) => (
                  <tr key={a.asset} className="border-b border-text-muted/10 last:border-0 hover:bg-bg-card/50 transition-colors">
                    <th className="px-5 py-3.5 font-medium text-text-primary">{a.asset}</th>
                    <td className="px-5 py-3.5 text-text-muted">{a.meta}</td>
                    <td className="px-5 py-3.5 text-text-muted">{a.tiktok}</td>
                    <td className="px-5 py-3.5 text-text-muted font-mono text-[12px]">{a.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Promo code treatment */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 border border-accent/30 bg-accent/[0.05] p-8 md:p-10 text-center"
        >
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-text-muted/70 mb-4">
            The single action everywhere
          </div>
          <div className="display text-3xl md:text-5xl text-accent tracking-wide">{META.eventCode}</div>
          <p className="mt-4 text-[13px] text-text-muted max-w-xl mx-auto leading-relaxed">
            Placeholder until the confirmed code string and offer terms are supplied. Offer details appear as {META.offerDetails} in all creative until confirmed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
