import type { StrategyPlanData } from "../plan-context";
import { eightyTwoMajorPlan } from "./82major";
import { eightyTwoMajorPlanStrategy } from "./82major-strategy";
import { eightyTwoMajorPlanKorean } from "./82major-ko";
import { eightyTwoMajorPlanStrategyKorean } from "./82major-strategy-ko";
import { eightyTwoMajorDeliverables } from "./82major-deliverables";
import { eightyTwoMajorDeliverablesKorean } from "./82major-deliverables-ko";
import { temporexDeliverables } from "./temporex-deliverables";
import { miguelTestSprint } from "./miguel-test-sprint";
import { ekatorPlan } from "./ekator";
import { ekatorPlanKorean } from "./ekator-ko";
import { trulyYoungPlan } from "./truly-young";
import { eightyTwoMajorRoadmap } from "./82major-roadmap";
import { eightyTwoMajorRoadmapKorean } from "./82major-roadmap-ko";
import { sunChaserPlan } from "./sun-chaser";
import { lolaAmourPlan } from "./lola-amour";
import { uberHitcPlan } from "./uber-hitc";
import { bhaviViajeDeIdaPlan } from "./bhavi-viaje-de-ida";
import { eightyTwoMajorSeptember } from "./82major-september";
import { kiiikiiiPlan } from "./kiiikiii";
import { kiiikiiiPlanKorean } from "./kiiikiii-ko";
import { irationPlan } from "./iration";
import { markTuanPlan } from "./mark-tuan";
import { markTuanPlanProposal } from "./mark-tuan-plan";

export const PLANS: Record<string, StrategyPlanData> = {
  "mark-tuan": markTuanPlan,
  "mark-tuan-plan": markTuanPlanProposal,
  iration: irationPlan,
  kiiikiii: kiiikiiiPlan,
  "kiiikiii-ko": kiiikiiiPlanKorean,
  "bhavi-viaje-de-ida": bhaviViajeDeIdaPlan,
  "hitc-la-uber-26": uberHitcPlan,
  "lola-amour": lolaAmourPlan,
  "sun-chaser-yt": sunChaserPlan,
  "truly-young": trulyYoungPlan,
  ekator: ekatorPlan,
  "ekator-ko": ekatorPlanKorean,
  "82major": eightyTwoMajorPlan,
  "82major-september": eightyTwoMajorSeptember,
  "82major-roadmap": eightyTwoMajorRoadmap,
  "82major-roadmap-ko": eightyTwoMajorRoadmapKorean,
  "82major-strategy": eightyTwoMajorPlanStrategy,
  "82major-ko": eightyTwoMajorPlanKorean,
  "82major-strategy-ko": eightyTwoMajorPlanStrategyKorean,
  "82major-deliverables": eightyTwoMajorDeliverables,
  "82major-deliverables-ko": eightyTwoMajorDeliverablesKorean,
  "temporex-deliverables": temporexDeliverables,
  "miguel-test-sprint": miguelTestSprint,
};

export function getPlan(slug: string): StrategyPlanData | undefined {
  return PLANS[slug];
}

export function getAllPlanSlugs(): string[] {
  return Object.keys(PLANS);
}
