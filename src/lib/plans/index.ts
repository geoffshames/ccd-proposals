import type { StrategyPlanData } from "../plan-context";
import { eightyTwoMajorPlan } from "./82major";
import { eightyTwoMajorPlanKorean } from "./82major-ko";

export const PLANS: Record<string, StrategyPlanData> = {
  "82major": eightyTwoMajorPlan,
  "82major-ko": eightyTwoMajorPlanKorean,
};

export function getPlan(slug: string): StrategyPlanData | undefined {
  return PLANS[slug];
}

export function getAllPlanSlugs(): string[] {
  return Object.keys(PLANS);
}
