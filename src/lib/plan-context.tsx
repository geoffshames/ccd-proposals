"use client";

import { createContext, useContext, type ReactNode } from "react";

// Section variants ----------------------------------------------------------

export type OverviewSection = {
  type: "overview";
  number: string;
  title: string;
  subtitle?: string;
  body: string[];
  supports?: {
    heading: string;
    items: string[];
  };
  goals?: {
    heading: string;
    items: string[];
  };
  footnote?: string;
};

export type PhilosophySection = {
  type: "philosophy";
  number: string;
  title: string;
  thesis: string;
  hierarchy: { label: string; description: string }[];
  messaging?: string[];
  footnote?: string;
};

export type StructureSection = {
  type: "structure";
  number: string;
  title: string;
  intro: string;
  tiers: {
    label: string;
    budget: string;
    name: string;
    goal: string;
    includes: string[];
    breakdown?: PricingTierBreakdown[];
    deployable?: string;
    featured?: boolean;
  }[];
};

export type VerticalSubBlock = {
  label: string;
  title: string;
  budget?: string;
  objective?: string;
  strategy?: string;
  components?: { heading?: string; items: string[] };
  kpis?: string[];
  tactics?: string[];
  examples?: string[];
  timeline?: string;
};

export type VerticalSection = {
  type: "vertical";
  number: string;
  title: string;
  philosophy?: string;
  intro?: string;
  subBlocks: VerticalSubBlock[];
  footnote?: string;
};

export type PricingTierBreakdown = {
  vertical: string;
  amount: string;
};

export type PricingSection = {
  type: "pricing";
  number: string;
  title: string;
  intro: string;
  ccdNote?: string;
  tiers: {
    label: string;
    budget: string;
    name: string;
    tagline?: string;
    deployable: string;
    breakdown: PricingTierBreakdown[];
    feeBreakdown?: {
      retainer: string;
      retainerDetail: string;
      mediaManagement: string;
      mediaManagementDetail: string;
    };
    featured?: boolean;
  }[];
  addOns?: { name: string; budget: string; description: string }[];
  footnote?: string;
};

export type PlanSection =
  | OverviewSection
  | PhilosophySection
  | StructureSection
  | VerticalSection
  | PricingSection;

// Plan root -----------------------------------------------------------------

export type StrategyPlanData = {
  accentColor: string;

  cover: {
    label: string;
    title: string;
    subtitle: string;
    partnership: string;
    prepared: string;
    date: string;
    backgroundImage?: string;
  };

  approveCta?: {
    label: string;
    caption: string;
    sentLabel: string;
  };

  sections: PlanSection[];

  language?: string;
  languageAlternates?: {
    slug: string;
    label: string;
    code: string;
  }[];
};

// Context wiring ------------------------------------------------------------

const PlanContext = createContext<StrategyPlanData | null>(null);

export function PlanProvider({
  data,
  children,
}: {
  data: StrategyPlanData;
  children: ReactNode;
}) {
  return <PlanContext.Provider value={data}>{children}</PlanContext.Provider>;
}

export function usePlan(): StrategyPlanData {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
