"use client";
import { useProject } from "@/lib/project-context";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function CreativeExamples() {
  const PROJECT = useProject();
  const ce = PROJECT.creativeExamples;
  if (!ce || ce.items.length === 0) return null;
  return (
    <section id="creative" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number={ce.sectionNumber || "06"} label="Example Creative" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">
            {ce.heading || "Example Creative"}
          </h2>
          {ce.subheading && (
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">{ce.subheading}</p>
          )}
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {ce.items.map((item, i) => (
            <ScrollReveal key={i}>
              <motion.div
                className="ccd-card rounded-none h-full flex flex-col overflow-hidden"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-[4/5] bg-bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.angle} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">{item.angle}</span>
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted border border-white/[0.15] px-2 py-0.5 flex-shrink-0">Example</span>
                  </div>
                  <p className="text-text-muted text-[14px] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        {ce.footnote && (
          <p className="text-text-muted/60 text-xs font-mono mt-8 text-center max-w-3xl mx-auto leading-relaxed">{ce.footnote}</p>
        )}
      </div>
    </section>
  );
}
