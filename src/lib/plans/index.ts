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

export const PLANS: Record<string, StrategyPlanData> = {
  "truly-young": trulyYoungPlan,
  ekator: ekatorPlan,
  "ekator-ko": ekatorPlanKorean,
  "82major": eightyTwoMajorPlan,
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
