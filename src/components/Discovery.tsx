"use client";
import { useProject } from "@/lib/project-context";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

export function Discovery() {
  const PROJECT = useProject();
  if (!PROJECT.discovery) return null;
  const { heading, summary, insights, marketContext } = PROJECT.discovery;
  return (
    <section id="discovery" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number={PROJECT.discovery?.sectionNumber || "01"} label="Research" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">{heading || "What We Found"}</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">{summary}</p>
        </ScrollReveal>
        {PROJECT.discovery.layout === "lede" && insights.length > 1 ? (
          <>
            <ScrollReveal className="mt-16">
              <div className="bg-white/[0.06] border border-white/[0.10] rounded-none p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase bg-white/[0.07] px-3 py-1 rounded-none">{insights[0].label}</span>
                  {insights[0].source && <span className="text-xs font-mono text-text-muted/60 tracking-wider">{insights[0].source}</span>}
                </div>
                <p className="text-text-primary text-xl md:text-2xl leading-[1.55] tracking-[-0.01em] max-w-4xl">{insights[0].finding}</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              {insights.slice(1).map((insight, i) => (
                <ScrollReveal key={i} delay={0.06 * i}>
                  <motion.div className="ccd-card rounded-none p-8 h-full transition-all duration-300" whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase bg-white/[0.07] px-3 py-1 rounded-none whitespace-nowrap">{insight.label}</span>
                      {insight.source && <span className="text-xs font-mono text-text-muted/60 tracking-wider">{insight.source}</span>}
                    </div>
                    <p className="text-text-primary text-base leading-relaxed">{insight.finding}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            {marketContext && (
              <ScrollReveal className="mt-16">
                <div className="border-l-2 border-accent pl-8 max-w-3xl">
                  <p className="text-accent text-xs font-mono tracking-[0.2em] uppercase mb-3">Why Now</p>
                  <p className="text-text-secondary text-lg leading-[1.8]">{marketContext}</p>
                </div>
              </ScrollReveal>
            )}
          </>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-16">
          {insights.map((insight, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-6"];
            return (
              <ScrollReveal key={i} className={spans[i % spans.length]}>
                <motion.div className={`group relative rounded-none p-8 h-full transition-all duration-300 ${i === 0 ? "bg-white/[0.06] border border-white/[0.10]" : "ccd-card"}`} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-accent/70 tracking-[0.15em] uppercase bg-white/[0.07] px-3 py-1 rounded-none">{insight.label}</span>
                    {insight.source && <span className="text-xs font-mono text-text-muted/60 tracking-wider">{insight.source}</span>}
                  </div>
                  <p className="text-text-primary text-base md:text-lg leading-relaxed">{insight.finding}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
        )}
        {PROJECT.discovery.layout !== "lede" && marketContext && (
          <ScrollReveal className="mt-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-text-muted/70 text-sm font-mono tracking-wider uppercase mb-3">Why Now</p>
              <p className="text-text-muted text-lg leading-relaxed italic">{marketContext}</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
