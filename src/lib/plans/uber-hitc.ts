import type { StrategyPlanData } from "../plan-context";
import { META } from "../uber-hitc";

/**
 * Registry stub for the Uber × HITC custom proposal.
 * The [slug] route detects `customRender: "uber-hitc"` and renders
 * UberHitcClient instead of the generic PlanClient sections.
 */
export const uberHitcPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  customRender: "uber-hitc",
  cover: {
    label: "Partnership Awareness Campaign",
    title: META.title,
    subtitle: META.thesis,
    partnership: "Uber × 88rising — Head In The Clouds Los Angeles 2026",
    prepared: `Prepared for 88rising by ${META.preparedBy}, ${META.agency}`,
    date: META.proposalDate,
  },
  ogImage: META.ogImage,
  sections: [],
};
