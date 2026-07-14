"use client";

import { createContext, useContext, type ReactNode } from "react";

export type ProjectData = {
  /**
   * Optional NDA gate. When true, the proposal page is hidden behind a mutual NDA
   * signing flow until the visitor signs (verified by signed cookie + Supabase row).
   * See /api/nda/sign and /components/NdaGate.
   */
  requireNda?: boolean;
  /**
   * Optional override for the legal entity name that signs the NDA.
   * Defaults to client.name when not set.
   * Example: "Acme Records, LLC" instead of "Acme".
   */
  clientLegalName?: string;

  accentColor: string;
  client: {
    name: string;
    logo: string;
    contactName: string;
    contactRole: string;
    contactEmail: string;
    industry: string;
  };
  studio: {
    name: string;
    role: string;
    email: string;
  };
  project: {
    name: string;
    tagline: string;
    type: string;
    startDate: string;
    endDate: string;
    duration: string;
    status: "Awaiting Approval";
  };
  overview: {
    summary: string;
    objectives: string[];
    heading?: string;
    subtitle?: string;
    imageCaption?: string;
    stats?: { value: number; suffix?: string; label: string; description?: string }[];
  };
  discovery?: {
    heading?: string;
    summary: string;
    insights: {
      label: string;
      finding: string;
      source?: string;
    }[];
    marketContext?: string;
  };
  audience?: {
    heading?: string;
    summary: string;
    demographics: string;
    demographicCards?: {
      label: string;
      value: string;
      detail?: string;
    }[];
    personas?: {
      name: string;
      ageRange: string;
      description: string;
      traits: string[];
    }[];
    psychographics: string[];
    painPoints: string[];
    purchaseTriggers?: string[];
    platforms?: {
      name: string;
      description: string;
    }[];
    quotes?: {
      text: string;
      source: string;
    }[];
  };
  targets?: {
    metric: string;
    value: string;
    context: string;
  }[];
  mediaFlight?: {
    heading?: string;
    subheading?: string;
    goal: { views: string; window: string; blendedCpv: string; totalBudget: string };
    /** Optional display-label overrides for the goal stat row (e.g. streams instead of views). */
    goalLabels?: { views?: string; window?: string; blendedCpv?: string; totalBudget?: string };
    /** Optional override for the per-track "Planning CPV" row label. */
    cpvRowLabel?: string;
    /** Optional unit word rendered after dial values (defaults to "views"). */
    dialUnit?: string;
    /** Optional override for the hard-coded budget-dial subheading. */
    dialSubheading?: string;
    tracks: {
      key: string;
      role: string;
      budget: string;
      budgetPct: string;
      cpv: string;
      views: string;
      viewsPct: string;
      markets: string;
      mix: string;
      rationale: string;
    }[];
    dial: {
      label: string;
      budget: string;
      views: string;
      split: string;
      note: string;
      featured?: boolean;
    }[];
    exclusions: string[];
    caveat: { heading: string; body: string };
    pacingNote?: string;
  };
  competitive?: {
    summary: string;
    competitors: {
      name: string;
      gap: string;
      strength?: string;
    }[];
  };
  tiers?: {
    sectionNumber?: string;
    heading?: string;
    subheading?: string;
    footnote?: string;
    tiers: {
      label: string;
      name: string;
      tagline?: string;
      price: string;
      priceSuffix?: string;
      priceContext?: string;
      includes: string[];
      excludes?: string[];
      footerNote?: string;
      featured?: boolean;
    }[];
  };
  philosophy?: {
    sectionNumber?: string;
    heading?: string;
    thesis?: string;
    principles?: string[];
    hierarchy: { label: string; description: string }[];
    footnote?: string;
  };
  timelineHeading?: string;
  timelineSubheading?: string;
  timelineImageCaption?: string;
  deliverablesSubheading?: string;
  timeline: {
    phase: string;
    week: string;
    date: string;
    status: "upcoming" | "in-progress" | "completed";
    tasks: string[];
    ongoing?: boolean;
  }[];
  deliverables: {
    category: string;
    icon: string;
    items: {
      name: string;
      quantity: string;
      description: string;
    }[];
  }[];
  scope: {
    included: string[];
    excluded: string[];
    subheading?: string;
  };
  quote?: {
    model?: "project" | "retainer";
    introMode?: boolean;
    investmentSubheading?: string;
    currency: string;
    lineItems: {
      name: string;
      description: string;
      price: number;
      priceLabel?: string;
      recurring?: boolean;
    }[];
    subtotal: number;
    setupFee?: {
      label: string;
      amount: number;
    };
    discount: {
      label: string;
      percentage: number;
      amount: number;
    };
    mediaBudget?: {
      label: string;
      amount: number;
      amountLabel?: string;
      note: string;
    };
    /**
     * Variable costs billed on top of the committed fee. Rendered as a clearly
     * separated block in the Investment section so it is unambiguous these are
     * additional and scoped, not part of the committed retainer. Renders only
     * when present.
     */
    variableCosts?: {
      name: string;
      basis: string;
      note: string;
    }[];
    variableCostsHeading?: string;
    variableCostsNote?: string;
    total: number;
    /**
     * Optional override for the final total row label. Defaults to
     * "Total Campaign Cost" (retainer) / "Total" (project) when omitted.
     */
    totalLabel?: string;
    paymentSchedule: {
      milestone: string;
      percentage: number;
      amount: number;
      due: string;
    }[];
    paymentTerms: string;
    paymentLink: string;
  };
  nextSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  cta: {
    headline: string;
    body: string;
    email: string;
  };
  images: {
    hero1: string;
    hero2: string;
    product: string;
    editorial: string;
    texture: string;
    brutalist: string;
    heroBg?: string;
    ogImage?: string;
    hero1Caption?: string;
    brutalistCaption?: string;
  };
  caseStudies?: {
    client: string;
    metric: string;
    description: string;
  }[];
  language?: string; // ISO code: "en", "ko", "ja", "es", "zh", etc.
  languageAlternates?: {
    slug: string;
    label: string; // Native name: "한국어", "English", "日本語", "Español"
    code: string;  // Display code: "KO", "EN", "JA", "ES"
  }[];
};

const ProjectContext = createContext<ProjectData | null>(null);

export function ProjectProvider({ data, children }: { data: ProjectData; children: ReactNode }) {
  return <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>;
}

export function useProject(): ProjectData {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used within ProjectProvider");
  return ctx;
}
