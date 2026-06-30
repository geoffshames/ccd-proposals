"use client";

import { useProject } from "@/lib/project-context";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { ParallaxImage } from "./ParallaxImage";

export function Overview() {
  const PROJECT = useProject();
  return (
    <section id="overview" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="02" label="Overview" />
        </ScrollReveal>

        {/* Image + text split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-32">
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8">
              {PROJECT.overview.heading || "The Vision"}
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.8] tracking-[-0.01em]">
              <TextReveal delay={0.3}>
                {PROJECT.overview.summary}
              </TextReveal>
            </p>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={PROJECT.images.editorial}
              alt={`${PROJECT.client.name} creative direction`}
              caption={PROJECT.overview.imageCaption || PROJECT.project.type}
              className="aspect-[4/3] rounded-none"
            />
          </div>
        </div>

        {/* Objectives */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10">
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">
              Key Objectives
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-5" staggerDelay={0.12}>
          {/* Featured */}
          <StaggerItem className="md:col-span-7">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-none p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500 mb-6">
                  <span className="text-[15px] font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">01</span>
                </div>
                <p className="text-[20px] text-text-primary font-medium leading-[1.5] tracking-[-0.01em] mb-4">
                  {PROJECT.overview.objectives[0]}
                </p>
                {PROJECT.overview.subtitle && (
                  <p className="text-[13px] text-text-muted leading-[1.7]">
                    {PROJECT.overview.subtitle}
                  </p>
                )}
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-none p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500 mb-6">
                  <span className="text-[15px] font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">02</span>
                </div>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[1]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-none p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500 mb-6">
                  <span className="text-[15px] font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">03</span>
                </div>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[2]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-7">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-none p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <div className="w-10 h-10 rounded-none bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500 mb-6">
                  <span className="text-[15px] font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">04</span>
                </div>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[3]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Stats */}
        {PROJECT.overview.stats && PROJECT.overview.stats.length > 0 && (
          <div className="mt-28 grid md:grid-cols-12 gap-5">
            <ScrollReveal delay={0.15} variant="scaleIn" className="md:col-span-5">
              <TiltCard className="group h-full">
                <div className="card frame bg-bg-card rounded-none p-10 h-full flex flex-col justify-center hover:bg-bg-card-hover transition-all duration-500">
                  <div className="display text-[72px] text-text-primary leading-none tracking-[-0.04em] mb-3">
                    <AnimatedCounter value={PROJECT.overview.stats[0].value} suffix={PROJECT.overview.stats[0].suffix || ""} />
                  </div>
                  <div className="text-[13px] text-text-muted leading-[1.6] group-hover:text-text-secondary transition-colors duration-500">
                    {PROJECT.overview.stats[0].label}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PROJECT.overview.stats.slice(1).map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.2 + i * 0.1} variant="scaleIn">
                  <TiltCard className="group h-full">
                    <div className="card frame bg-bg-card rounded-none p-8 text-center h-full flex flex-col justify-center hover:bg-bg-card-hover transition-all duration-500">
                      <div className="display text-[34px] text-text-primary mb-2 tracking-[-0.03em]">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} />
                      </div>
                      <div className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase group-hover:text-accent/60 transition-colors duration-500">
                        {stat.label}
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
