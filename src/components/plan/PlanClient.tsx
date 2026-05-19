"use client";

import { PlanProvider, type StrategyPlanData } from "@/lib/plan-context";
import { PlanCover } from "./PlanCover";
import { PlanOverview } from "./PlanOverview";
import { PlanPhilosophy } from "./PlanPhilosophy";
import { PlanStructure } from "./PlanStructure";
import { PlanVertical } from "./PlanVertical";
import { PlanPricing } from "./PlanPricing";
import { PlanApprove } from "./PlanApprove";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProjectProvider } from "@/lib/project-context";

/**
 * Adapter: LanguageToggle reads useProject(). The plan format doesn't use
 * ProjectContext, so we wrap with a minimal ProjectProvider stub that satisfies
 * the toggle's read path (language + languageAlternates).
 */
function PlanLanguageToggle({ plan }: { plan: StrategyPlanData }) {
  if (!plan.languageAlternates || plan.languageAlternates.length === 0) return null;
  // Stub ProjectData with only what LanguageToggle reads.
  const stub: any = {
    language: plan.language,
    languageAlternates: plan.languageAlternates,
  };
  return (
    <ProjectProvider data={stub}>
      <LanguageToggle />
    </ProjectProvider>
  );
}

export function PlanClient({ plan }: { plan: StrategyPlanData }) {
  return (
    <PlanProvider data={plan}>
      <main
        style={{
          ["--color-accent" as never]: plan.accentColor,
          ["--color-accent-dim" as never]: `${plan.accentColor}10`,
        }}
      >
        <PlanLanguageToggle plan={plan} />
        <PlanCover />

        {plan.sections.map((section, i) => {
          switch (section.type) {
            case "overview":
              return <PlanOverview key={i} section={section} />;
            case "philosophy":
              return <PlanPhilosophy key={i} section={section} />;
            case "structure":
              return <PlanStructure key={i} section={section} />;
            case "vertical":
              return <PlanVertical key={i} section={section} />;
            case "pricing":
              return <PlanPricing key={i} section={section} />;
            default:
              return null;
          }
        })}

        <PlanApprove />

        <footer className="border-t border-text-muted/15 px-6 md:px-12 lg:px-24 py-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
            <span>{plan.cover.label} / {plan.cover.title}</span>
            <span>Crowd Control Digital</span>
            <span>{plan.cover.date}</span>
          </div>
        </footer>
      </main>
    </PlanProvider>
  );
}
