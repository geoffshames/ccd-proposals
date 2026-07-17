"use client";
import { motion } from "framer-motion";
import { META, MONEY, CTA_MAILTO } from "@/lib/uber-hitc";

const CASES = [
  { client: "ILLENIUM", metric: "150K+", desc: "tickets sold across live-event campaigns" },
  { client: "BBNO$", metric: "900K+", desc: "TikTok creates driven by paid + creator strategy" },
  { client: "PESO PLUMA", metric: "700M+", desc: "Spotify streams across growth campaigns" },
  { client: "KSI", metric: "350M+", desc: "Spotify streams across campaign flights" },
];

export function UberAboutCCD() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-baseline gap-6 mb-10">
            <span className="text-[12px] font-mono tracking-[0.25em] uppercase text-accent">14</span>
            <div className="flex-1 h-px bg-text-muted/20" />
          </div>
          <h2 className="display text-3xl md:text-5xl text-text-primary max-w-4xl leading-[1.02] mb-6">
            Why Crowd Control Digital
          </h2>
          <p className="max-w-2xl text-[16px] text-text-muted leading-relaxed mb-14">
            A decade of paid media for music, festivals, and the culture around them.
            We plan flights like this one for a living, and we know this audience because
            we have been selling tickets to it for years.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-text-muted/15 border border-text-muted/15">
          {CASES.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-bg p-6 md:p-8"
            >
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60">{c.client}</div>
              <div className="display text-3xl md:text-4xl text-accent mt-2">{c.metric}</div>
              <p className="mt-2 text-[12.5px] text-text-muted leading-snug">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UberFinalCTA() {
  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <section id="next" className="relative border-t border-text-muted/10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/uber-hitc-2026/cloud-field.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" aria-hidden="true" />

      <div className="relative px-6 md:px-12 lg:px-24 py-28 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            src="/images/uber-hitc-2026/cloud-stand.png"
            alt="Official Head In The Clouds cloud character"
            className="mx-auto w-28 md:w-36 h-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display text-text-primary leading-[0.95]"
            style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)" }}
          >
            THE RIDE IS<br />THE <span className="text-accent">FIRST STAGE</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70">Total investment</div>
              <div className="display text-3xl md:text-4xl text-text-primary mt-1">{fmt(MONEY.total)}</div>
            </div>
            <div className="h-10 w-px bg-text-muted/25" aria-hidden="true" />
            <div>
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70">Festival day</div>
              <div className="display text-3xl md:text-4xl text-text-primary mt-1">{META.festivalDateLabel}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12"
          >
            <a
              href={CTA_MAILTO}
              className="inline-block bg-accent px-12 py-5 text-[14px] font-bold tracking-[0.06em] text-white hover:bg-accent/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Confirm campaign direction
            </a>
            <p className="mt-5 text-[12px] font-mono text-text-muted/70">
              Opens an email to {META.agencyEmail}. No payment links, no gates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-text-muted/15 text-[12px] font-mono text-text-muted/70 space-y-1.5"
          >
            <p className="text-text-primary/80">{META.preparedBy}</p>
            <p>{META.agencyEmail}</p>
            <p>{META.agency} · Prepared for 88rising · {META.proposalDate}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
