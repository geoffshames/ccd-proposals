import type { StrategyPlanData } from "../plan-context";
import { eightyTwoMajorPlan } from "./82major";

export const PLANS: Record<string, StrategyPlanData> = {
  "82major": eightyTwoMajorPlan,
};

export function getPlan(slug: string): StrategyPlanData | undefined {
  return PLANS[slug];
}

export function getAllPlanSlugs(): string[] {
  return Object.keys(PLANS);
}
