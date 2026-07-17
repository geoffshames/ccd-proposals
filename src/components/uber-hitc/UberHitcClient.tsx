"use client";

import { UberNav } from "./UberNav";
import { UberHero } from "./UberHero";
import { UberOpportunity } from "./UberOpportunity";
import { UberBrandIntersection } from "./UberBrandIntersection";
import { UberAudience } from "./UberAudience";
import { UberFrictionMap } from "./UberFrictionMap";
import { UberBenchmarks } from "./UberBenchmarks";
import { UberCampaignPlatform } from "./UberCampaignPlatform";
import { UberActivation } from "./UberActivation";
import { UberCreativeSystem } from "./UberCreativeSystem";
import { UberMediaFlight } from "./UberMediaFlight";
import { UberMeasurement, UberExecution, UberScopeInvestment } from "./UberPlanSections";
import { UberAboutCCD, UberFinalCTA } from "./UberClosing";
import { UberSourceDrawer } from "./UberSourceDrawer";
import { META } from "@/lib/uber-hitc";

export function UberHitcClient() {
  return (
    <main id="top" className="relative">
      <UberNav />
      <UberHero />
      <UberOpportunity />
      <UberBrandIntersection />
      <UberAudience />
      <UberFrictionMap />
      <UberBenchmarks />
      <UberCampaignPlatform />
      <UberActivation />
      <UberCreativeSystem />
      <UberMediaFlight />
      <UberMeasurement />
      <UberExecution />
      <UberScopeInvestment />
      <UberAboutCCD />
      <UberFinalCTA />

      <footer className="border-t border-text-muted/15 px-6 md:px-12 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
          <span>Uber × Head In The Clouds LA 2026</span>
          <span>{META.agency}</span>
          <span>{META.proposalDate}</span>
        </div>
      </footer>

      <UberSourceDrawer />
    </main>
  );
}
