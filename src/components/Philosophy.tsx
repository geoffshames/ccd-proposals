"use client";
import { useProject } from "@/lib/project-context";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Philosophy / Hierarchy section.
 *
 * Renders Kakao's Section 2 (Core Strategy + Philosophy) as a cascading layer
 * diagram: Fandom -> Digital -> Experiential -> PR, with the "PR amplifies, it
 * does not create" thesis stated up front.
 *
 * Reads from PROJECT.philosophy. Returns null when no philosophy data is set,
 * so it's safe to leave registered on every proposal.
 */
export function Philosophy() {
  const PROJECT = useProject() as ReturnType<typeof useProject> & {
    philosophy?: {
      sectionNumber?: string;
      heading?: string;
      thesis?: string;
      principles?: string[];
      hierarchy: { label: string; description: string }[];
      footnote?: string;
    };
  };

  if (!PROJECT.philosophy) return null;
  const P = PROJECT.philosophy;

  return (
    <section id="philosophy" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number={P.sectionNumber || "02"} label="Strategic Philosophy" />
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-[1.1] tracking-tight mt-4">
            {P.heading || "Fandom Drives Everything."}
          </h2>
          {P.thesis && (
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
              {P.thesis}
            </p>
          )}
        </ScrollReveal>

        {/* Hierarchy cascade */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {P.hierarchy.map((layer, i) => {
            const isAnchor = i === 0;
            const totalSteps = P.hierarchy.length;
            // The "anchor" (foundation) layer gets the widest treatment; downstream layers get progressively de-emphasized.
            const spans = [
              "lg:col-span-12",
              "lg:col-span-10 lg:col-start-2",
              "lg:col-span-8 lg:col-start-3",
              "lg:col-span-6 lg:col-start-4",
              "lg:col-span-4 lg:col-start-5",
            ];
            const span = spans[Math.min(i, spans.length - 1)];

            return (
              <ScrollReveal key={i} className={span}>
                <motion.div
                  className={`relative rounded-none p-8 md:p-10 transition-all duration-300 ${
                    isAnchor
                      ? "bg-white/[0.08] border border-white/[0.18]"
                      : "ccd-card"
                  }`}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`text-[11px] font-mono tracking-[0.22em] uppercase ${
                        isAnchor ? "text-accent" : "text-text-muted/70"
                      } pt-1 flex-shrink-0`}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-[22px] md:text-[28px] font-bold leading-tight ${
                          isAnchor ? "text-text-primary" : "text-text-primary/95"
                        }`}
                      >
                        {layer.label}
                      </h3>
                      <p
                        className={`mt-3 text-[15px] md:text-[16px] leading-relaxed ${
                          isAnchor ? "text-text-primary/85" : "text-text-muted"
                        }`}
                      >
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting line / cascade indicator */}
                  {i < P.hierarchy.length - 1 && (
                    <div className="absolute -bottom-3 left-12 hidden lg:flex flex-col items-center">
                      <div className="h-3 w-px bg-accent/30" />
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Principles list */}
        {P.principles && P.principles.length > 0 && (
          <ScrollReveal>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {P.principles.map((principle, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-accent text-[11px] font-mono tracking-[0.22em] pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-text-primary/90 text-[15px] leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {P.footnote && (
          <ScrollReveal>
            <p className="mt-16 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/60 leading-relaxed">
              {P.footnote}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
