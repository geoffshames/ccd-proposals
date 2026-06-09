import type { StrategyPlanData } from "../plan-context";
import { eightyTwoMajorPlan } from "./82major";
import { eightyTwoMajorPlanStrategy } from "./82major-strategy";
import { eightyTwoMajorPlanKorean } from "./82major-ko";
import { eightyTwoMajorPlanStrategyKorean } from "./82major-strategy-ko";
import { eightyTwoMajorDeliverables } from "./82major-deliverables";
import { eightyTwoMajorDeliverablesKorean } from "./82major-deliverables-ko";

export const PLANS: Record<string, StrategyPlanData> = {
  "82major": eightyTwoMajorPlan,
  "82major-strategy": eightyTwoMajorPlanStrategy,
  "82major-ko": eightyTwoMajorPlanKorean,
  "82major-strategy-ko": eightyTwoMajorPlanStrategyKorean,
  "82major-deliverables": eightyTwoMajorDeliverables,
  "82major-deliverables-ko": eightyTwoMajorDeliverablesKorean,
};

export function getPlan(slug: string): StrategyPlanData | undefined {
  return PLANS[slug];
}

export function getAllPlanSlugs(): string[] {
  return Object.keys(PLANS);
}
