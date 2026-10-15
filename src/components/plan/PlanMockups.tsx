"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { MockupsSection, MockupItem } from "@/lib/plan-context";
import { useT } from "@/lib/plan-i18n";

const ASPECT: Record<MockupItem["aspect"], string> = {
  "9:16": "aspect-[9/16]",
  "2:3": "aspect-[2/3]",
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
};

function Card({ item, idx }: { item: MockupItem; idx: number }) {
  const t = useT();
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
      className="flex flex-col border border-text-muted/15 bg-bg-card/40"
    >
      <div className={`relative w-full ${ASPECT[item.aspect]} bg-bg overflow-hidden`}>
        {item.kind === "video" ? (
          <video
            src={item.src}
            poster={item.poster}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        )}
        <span className="absolute top-3 left-3 px-2 py-1 bg-bg/75 backdrop-blur border border-text-muted/25 text-[9px] font-mono tracking-[0.16em] uppercase text-text-primary/85">
          {t("directional")}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="px-2.5 py-1 border border-accent/40 bg-accent/[0.06] text-[10px] font-mono tracking-[0.16em] uppercase text-accent">
            {item.tag}
          </span>
        </div>
        <h3
          className="text-[20px] md:text-[22px] font-bold text-text-primary leading-tight"
          style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
        >
          {item.title}
        </h3>
        <p className="text-[13.5px] md:text-[14px] text-text-primary/85 leading-relaxed">{item.caption}</p>
        {item.notes && item.notes.length > 0 && (
          <div className="mt-auto pt-3 border-t border-text-muted/15">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">{t("howWeUseIt")}</div>
            <ul className="space-y-1.5">
              {item.notes.map((n, i) => (
                <li key={i} className="text-[13px] text-text-primary/85 leading-relaxed flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function PlanMockups({ section }: { section: MockupsSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} subtitle={section.philosophy} />
        {section.intro && (
          <p className="mt-6 mb-14 text-[15px] md:text-[16px] text-text-muted leading-relaxed max-w-3xl">{section.intro}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {section.items.map((item, i) => (
            <Card key={item.src} item={item} idx={i} />
          ))}
        </div>
        {section.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl"
          >
            {section.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
