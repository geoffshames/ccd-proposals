"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { ShowcaseSection, ShowcaseItem } from "@/lib/plan-context";

function ShowcaseEmbed({ item }: { item: ShowcaseItem }) {
  const [loaded, setLoaded] = useState(false);
  const isTikTok = item.platform === "tiktok";
  const src = isTikTok
    ? `https://www.tiktok.com/embed/v2/${item.id}`
    : `https://www.instagram.com/p/${item.id}/embed/`;

  return (
    <div className="w-full max-w-[340px] mx-auto lg:mx-0 border border-text-muted/15 bg-bg overflow-hidden">
      <div className={`relative ${isTikTok ? "h-[600px]" : "h-[560px]"}`}>
        {item.embeddable === false ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 w-full h-full group"
            aria-label={`Open post: ${item.artist}, ${item.title}`}
          >
            {item.poster && (
              <img src={item.poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute bottom-6 inset-x-0 flex justify-center">
              <span className="px-4 py-2 border border-accent bg-bg/70 text-[10px] font-mono tracking-[0.2em] uppercase text-text-primary group-hover:bg-accent/25 transition-colors">
                Open on Instagram ↗
              </span>
            </div>
          </a>
        ) : loaded ? (
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            scrolling="no"
            title={`${item.artist}: ${item.title}`}
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Load post: ${item.artist}, ${item.title}`}
          >
            {item.poster && (
              <img
                src={item.poster}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="w-14 h-14 rounded-full border border-accent bg-bg/60 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                <span className="ml-1 text-accent text-[18px]">▶</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-primary/90">
                {isTikTok ? "Load TikTok" : "Load Instagram post"}
              </span>
            </div>
          </button>
        )}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 border-t border-text-muted/15 text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted hover:text-accent transition-colors"
      >
        View original post ↗
      </a>
    </div>
  );
}

function Item({ item, idx }: { item: ShowcaseItem; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="border-t border-text-muted/15 pt-12 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <ShowcaseEmbed item={item} />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="px-2.5 py-1 border border-accent/40 bg-accent/[0.06] text-[10px] font-mono tracking-[0.16em] uppercase text-accent">
                {item.tag}
              </span>
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-text-muted/70">
                {item.platformLabel} / {item.date}
              </span>
            </div>
            <h3
              className="text-[26px] md:text-[32px] font-bold text-text-primary leading-tight"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              {item.artist}
            </h3>
            <p className="mt-1 text-[15px] text-text-muted leading-snug">{item.title}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-text-muted/15 border border-text-muted/15">
            {item.stats.map((s) => (
              <div key={s.label} className="bg-bg-card px-4 py-3">
                <div className="text-[18px] md:text-[20px] font-bold text-text-primary" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                  {s.value}
                </div>
                <div className="mt-1 text-[9.5px] font-mono tracking-[0.16em] uppercase text-text-muted/70">{s.label}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Format</div>
            <p className="text-[14px] md:text-[15px] text-text-primary/90 leading-relaxed">{item.format}</p>
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">Beat by Beat</div>
            <ol className="border-l border-accent/40 space-y-3">
              {item.beats.map((b, i) => (
                <li key={i} className="pl-4 relative">
                  <span className="absolute -left-[4px] top-[7px] w-[7px] h-[7px] bg-accent" />
                  <span className="text-[10.5px] font-mono tracking-[0.12em] uppercase text-accent mr-2">{b.t}</span>
                  <span className="text-[13.5px] md:text-[14px] text-text-primary/85 leading-relaxed">{b.d}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">Why It Works</div>
            <ul className="space-y-2">
              {item.mechanics.map((m, i) => (
                <li key={i} className="text-[13.5px] md:text-[14px] text-text-primary/85 leading-relaxed flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {item.outcome && (
            <div className="border border-text-muted/15 bg-bg-card/60 px-5 py-4">
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Result</div>
              <p className="text-[14px] text-text-primary leading-relaxed">{item.outcome}</p>
              {item.outcomeSource && (
                <div className="mt-2 text-[9.5px] font-mono tracking-[0.14em] uppercase text-text-muted/55">{item.outcomeSource}</div>
              )}
            </div>
          )}

          <div className="border border-accent/40 bg-accent/[0.05] px-5 py-5">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-2">For KiiiKiii</div>
            <div className="text-[16px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
              {item.adapt.title}
            </div>
            <ul className="space-y-2">
              {item.adapt.actions.map((a, i) => (
                <li key={i} className="text-[13.5px] md:text-[14px] text-text-primary/90 leading-relaxed flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function PlanShowcase({ section }: { section: ShowcaseSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} subtitle={section.philosophy} />
        {section.intro && (
          <p className="mt-6 mb-16 text-[15px] md:text-[16px] text-text-muted leading-relaxed max-w-3xl">{section.intro}</p>
        )}
        <div className="space-y-16">
          {section.items.map((item, i) => (
            <Item key={item.id} item={item} idx={i} />
          ))}
        </div>
        {section.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl"
          >
            {section.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
