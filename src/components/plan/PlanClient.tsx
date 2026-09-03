"use client";

import { PlanProvider, type StrategyPlanData } from "@/lib/plan-context";
import { PlanCover } from "./PlanCover";
import { PlanNavigation } from "./PlanNavigation";
import { PlanOverview } from "./PlanOverview";
import { PlanPhilosophy } from "./PlanPhilosophy";
import { PlanRoadmap } from "./PlanRoadmap";
import { PlanAudience } from "./PlanAudience";
import { PlanBrandAudit } from "./PlanBrandAudit";
import { PlanCompetitive } from "./PlanCompetitive";
import { PlanTargets } from "./PlanTargets";
import { PlanStructure } from "./PlanStructure";
import { PlanVertical } from "./PlanVertical";
import { PlanFlight } from "./PlanFlight";
import { PlanTimeline } from "./PlanTimeline";
import { PlanPricing } from "./PlanPricing";
import { PlanDeliverables } from "./PlanDeliverables";
import { PlanCalendar } from "./PlanCalendar";
import { PlanAssetChecklist } from "./PlanAssetChecklist";
import { PlanContentAnalysis } from "./PlanContentAnalysis";
import { PlanCostModel } from "./PlanCostModel";
import { PlanApprove } from "./PlanApprove";
import { PlanPartToggle, PlanPartEnd } from "./PlanPartSwitch";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ProjectProvider, type ProjectData } from "@/lib/project-context";

/**
 * Adapter: LanguageToggle reads useProject(). The plan format doesn't use
 * ProjectContext, so we wrap with a minimal ProjectProvider stub that satisfies
 * the toggle's read path (language + languageAlternates).
 */
function PlanLanguageToggle({ plan }: { plan: StrategyPlanData }) {
  if (!plan.languageAlternates || plan.languageAlternates.length === 0) return null;
  // Stub ProjectData with only what LanguageToggle reads.
  const stub = {
    language: plan.language,
    languageAlternates: plan.languageAlternates,
  } as ProjectData;
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
        lang={plan.language}
        style={{
          ["--color-accent" as never]: plan.accentColor,
          ["--color-accent-dim" as never]: `${plan.accentColor}10`,
          // Hangul has no inter-word break opportunity the way Latin does, so the
          // default `normal` splits Korean words between syllables. keep-all breaks
          // on spaces only, which is correct for Korean and a no-op for English.
          ...(plan.language === "ko" ? { wordBreak: "keep-all" as const } : {}),
        }}
      >
        <PlanLanguageToggle plan={plan} />
        <PlanPartToggle />
        <PlanNavigation />
        <PlanCover />

        {plan.sections.map((section, i) => {
          switch (section.type) {
            case "overview":
              return <PlanOverview key={i} section={section} />;
            case "philosophy":
              return <PlanPhilosophy key={i} section={section} />;
            case "roadmap":
              return <PlanRoadmap key={i} section={section} />;
            case "audience":
              return <PlanAudience key={i} section={section} />;
            case "brandAudit":
              return <PlanBrandAudit key={i} section={section} />;
            case "competitive":
              return <PlanCompetitive key={i} section={section} />;
            case "targets":
              return <PlanTargets key={i} section={section} />;
            case "structure":
              return <PlanStructure key={i} section={section} />;
            case "vertical":
              return <PlanVertical key={i} section={section} />;
            case "flight":
              return <PlanFlight key={i} section={section} />;
            case "timeline":
              return <PlanTimeline key={i} section={section} />;
            case "pricing":
              return <PlanPricing key={i} section={section} />;
            case "deliverables":
              return <PlanDeliverables key={i} section={section} />;
            case "calendar":
              return <PlanCalendar key={i} section={section} />;
            case "assetChecklist":
              return <PlanAssetChecklist key={i} section={section} />;
            case "contentAnalysis":
              return <PlanContentAnalysis key={i} section={section} />;
            case "costModel":
              return <PlanCostModel key={i} section={section} />;
            default:
              return null;
          }
        })}

        <PlanPartEnd />

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
