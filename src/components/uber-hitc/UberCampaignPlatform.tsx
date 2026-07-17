"use client";
import { motion } from "framer-motion";
import { PLATFORM, META } from "@/lib/uber-hitc";

/**
 * The Campaign Platform — the proposal's visual climax.
 * Dark, oversized reveal with the official HITC cloud character and the
 * winning territory. Territories considered are shown as a decision trail,
 * then the winner owns the screen.
 */
export function UberCampaignPlatform() {
  return (
    <section id="platform" className="relative border-t border-text-muted/10 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/images/uber-hitc-2026/cloud-field.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/70 to-bg" aria-hidden="true" />

      <div className="relative px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex items-baseline gap-6 mb-10"
          >
            <span className="text-[12px] font-mono tracking-[0.25em] uppercase text-accent">07</span>
            <div className="flex-1 h-px bg-text-muted/20" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60">The recommendation</span>
          </motion.div>

          {/* Cloud character + platform name */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0"
            >
              <motion.img
                src="/images/uber-hitc-2026/cloud-cheer.png"
                alt="Official Head In The Clouds cloud character"
                className="w-40 md:w-56 lg:w-64 h-auto drop-shadow-[0_0_60px_rgba(253,55,55,0.15)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
              <p className="mt-3 text-center text-[9px] font-mono tracking-[0.18em] uppercase text-text-muted/50">
                Official HITC character asset
              </p>
            </motion.div>

            <div className="text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="display text-text-primary leading-[0.92]"
                style={{ fontSize: "clamp(2.6rem, 7.5vw, 6.5rem)" }}
              >
                THE RIDE IS<br />THE <span className="text-accent">FIRST STAGE</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 max-w-2xl text-[17px] md:text-[20px] leading-relaxed text-text-primary/85 mx-auto lg:mx-0"
              >
                {PLATFORM.idea}
              </motion.p>
            </div>
          </div>

          {/* Message hierarchy */}
          <motion.ol
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-text-muted/15 border border-text-muted/15"
          >
            {PLATFORM.hierarchy.map((h, i) => (
              <li key={h} className="bg-bg p-6 md:p-8">
                <span className="text-[10px] font-mono tracking-[0.2em] text-accent">MESSAGE {i + 1}</span>
                <p className="mt-3 text-[15px] text-text-primary/85 leading-relaxed">{h}</p>
              </li>
            ))}
          </motion.ol>

          {/* Why it wins */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PLATFORM.rationale.map((r, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-[14px] text-text-muted leading-relaxed border-l-2 border-accent/50 pl-5"
              >
                {r}
              </motion.p>
            ))}
          </div>

          {/* Territories considered (decision trail) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 border border-text-muted/15 bg-bg/60 p-6 md:p-8"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-5">
              How we got here — territories considered
            </div>
            <ul className="space-y-4">
              {PLATFORM.territoriesConsidered.map((t) => (
                <li key={t.name} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                  <span className={`text-[14px] font-bold whitespace-nowrap ${t.verdict.startsWith("WINNER") ? "text-accent" : "text-text-primary/60 line-through decoration-text-muted/40"}`}>
                    {t.name}
                  </span>
                  <span className="text-[13px] text-text-muted">{t.verdict.replace("WINNER. ", "")}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="mt-10 text-[11px] font-mono tracking-[0.12em] text-text-muted/60 uppercase">
            Promo code: {META.eventCode} · Offer terms: {META.offerDetails} · Artist likeness used only with cleared approvals.
          </p>
        </div>
      </div>
    </section>
  );
}
