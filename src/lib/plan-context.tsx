"use client";

import { createContext, useContext, type ReactNode } from "react";

// Section variants ----------------------------------------------------------

export type OverviewSection = {
  type: "overview";
  number: string;
  navLabel?: string;
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
  charts?: PlanChartSpec[];
  footnote?: string;
};

export type PhilosophySection = {
  type: "philosophy";
  number: string;
  navLabel?: string;
  title: string;
  thesis: string;
  hierarchy: { label: string; description: string }[];
  messaging?: string[];
  footnote?: string;
};

export type StructureSection = {
  type: "structure";
  number: string;
  navLabel?: string;
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

export type FeatureArtist = {
  name: string;
  monthlyListeners: string;
  instagram: string;
  reference: string;
  referenceUrl?: string;
  note: string;
};

export type FeatureArtistTier = {
  label: string;
  artists: FeatureArtist[];
};


export type ChartPoint = { x: string; y: number | null };
export type ChartSeries = { name: string; color?: string; points: ChartPoint[] };
export type PlanChartSpec = {
  kind: "line" | "area" | "bars" | "hbars" | "grouped";
  title: string;
  subtitle?: string;
  unit?: string;
  series: ChartSeries[];
  markers?: { x: string; label: string }[];
  highlightX?: string[];
  yMax?: number;
  note?: string;
  source?: string;
  tall?: boolean;
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
  featureTiers?: FeatureArtistTier[];
  featureTiersHeading?: string;
  links?: { label: string; url: string }[];
  linksHeading?: string;
  charts?: PlanChartSpec[];
};

export type VerticalSection = {
  type: "vertical";
  number: string;
  navLabel?: string;
  title: string;
  philosophy?: string;
  intro?: string;
  subBlocks: VerticalSubBlock[];
  footnote?: string;
};

export type AgeBracket = {
  bracket: string;   // e.g. "16-24"
  weight: number;    // percentage (0-100)
};

export type AudiencePersona = {
  name: string;
  label?: string;
  priority?: "primary" | "secondary" | "expansion";
  profile: string;
  psychographics?: string[];
  motivations?: string[];
  behaviors?: string[];
  platforms?: { name: string; role: string }[];
  barriers?: string[];
  triggers?: string[];
  conversionGoal?: string;
};

export type AudienceInsightGroup = {
  label: string;
  items: string[];
};

export type AudienceBehaviorSignal = {
  behavior: string;
  platforms?: string[];
  implication?: string;
};

export type AudienceBarrier = {
  barrier: string;
  response: string;
};

export type AudienceTrigger = {
  trigger: string;
  implication: string;
};

export type AudienceFanQuote = {
  quote: string;
  source?: string;
  insight?: string;
  synthesized?: boolean;
};

export type AudienceSection = {
  type: "audience";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  thesis?: string;
  metrosLabel?: string;
  metros?: { name: string; tier?: "primary" | "secondary" }[];
  ageDistribution?: AgeBracket[];
  genderDistribution?: { female: number; male: number };
  personas?: AudiencePersona[];
  psychographics?: AudienceInsightGroup[];
  behaviorSignals?: AudienceBehaviorSignal[];
  barriers?: AudienceBarrier[];
  triggers?: AudienceTrigger[];
  fanQuotes?: AudienceFanQuote[];
  fanQuotesLabel?: string;
  similarArtists?: string[];
  genres?: string[];
  platformSignals?: { platform: string; note: string }[];
  footnote?: string;
};

export type BrandAuditScore = {
  dimension: string;
  score?: number;
  maxScore?: number;
  status?: string;
  evidence: string;
};

export type BrandAuditFoundation = {
  label: string;
  value: string;
  note?: string;
};

export type BrandAuditImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BrandAuditSystem = {
  label: string;
  traits: string[];
  direction?: string;
};

export type BrandAuditFinding = {
  title: string;
  detail: string;
};

export type BrandAuditGap = {
  title: string;
  finding: string;
  opportunity: string;
};

export type BrandAuditTension = {
  label: string;
  brandSignal: string;
  audienceTruth: string;
  direction: string;
};

export type BrandAuditSection = {
  type: "brandAudit";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  verdict: string;
  image?: BrandAuditImage;
  scorecard: BrandAuditScore[];
  foundations?: BrandAuditFoundation[];
  systems?: BrandAuditSystem[];
  strengths: BrandAuditFinding[];
  gaps: BrandAuditGap[];
  tensions?: BrandAuditTension[];
  footnote?: string;
};

export type CompetitivePeer = {
  name: string;
  lane?: string;
  proof?: string;
  strength: string;
  gap: string;
  implication: string;
};

export type CompetitiveWhitespace = {
  title: string;
  description: string;
};

export type CompetitiveSection = {
  type: "competitive";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  thesis: string;
  competitors: CompetitivePeer[];
  whitespace?: CompetitiveWhitespace[];
  principles?: string[];
  footnote?: string;
};

export type KpiTarget = {
  metric: string;
  baseline: string;
  target: string;
  window: string;
  rationale?: string;
  measurement: string;
  featured?: boolean;
};

export type TargetsSection = {
  type: "targets";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  targets: KpiTarget[];
  measurementPrinciples?: string[];
  disclaimer?: string;
  footnote?: string;
};

export type WeekBreakdown = {
  weekIndex: number;
  title: string;
  items: string[];
};

export type TimelineWeek = {
  index: number;
  label: string;
  dates: string;
  highlight?: boolean;
  note?: string;
};

export type TimelineCell = {
  weekIndex: number;
  intensity: "low" | "medium" | "high";
  milestone?: boolean;
  label?: string;
};

export type TimelineWorkstream = {
  name: string;
  cells: TimelineCell[];
};

export type TimelineSection = {
  type: "timeline";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  weeks: TimelineWeek[];
  workstreams: TimelineWorkstream[];
  weekBreakdowns?: WeekBreakdown[];
  footnote?: string;
};

export type FlightPhase = {
  label: string;
  window: string;
  focus: string;
  budget?: string;
  tactics?: string[];
};

export type FlightSection = {
  type: "flight";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  totalBudget?: string;
  phases: FlightPhase[];
  footnote?: string;
};

export type PricingTierBreakdown = {
  vertical: string;
  amount: string;
};

export type PricingSection = {
  type: "pricing";
  number: string;
  navLabel?: string;
  title: string;
  intro: string;
  ccdNote?: string;
  breakdownLabel?: string;
  deployableLabel?: string;
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
      mediaManagementLabel?: string;
    };
    featured?: boolean;
  }[];
  addOns?: { name: string; subtitle?: string; budget: string; description: string }[];
  footnote?: string;
};


export type DeliverableExample = {
  platform: "youtube" | "youtube-short" | "tiktok";
  id: string;
  artist: string;
  label: string;
  takeaway?: string;
};

export type DeliverableItem = {
  id: string;
  title: string;
  priority?: string;
  formats: string[];
  duration?: string;
  platforms: string[];
  variants?: string;
  hook: string;
  cta: string;
  notes?: string[];
  examples?: DeliverableExample[];
};

export type DeliverableGroup = {
  heading: string;
  description?: string;
  items: DeliverableItem[];
};

export type DeliverablesSection = {
  type: "deliverables";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  storageKey?: string;
  hookLabel?: string;
  ctaLabel?: string;
  groups: DeliverableGroup[];
  footnote?: string;
};

export type RoadmapCampaign = {
  label: string;
  name: string;
  window: string;
  budget?: string;
  budgetNote?: string;
  objective: string;
  compounds?: string[];
  featured?: boolean;
  badge?: string;
  detailAnchor?: string;
  detailLabel?: string;
};

export type RoadmapSection = {
  type: "roadmap";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  compoundsLabel?: string;
  campaigns: RoadmapCampaign[];
  footnote?: string;
};

export type ContentExample = {
  platform: "tiktok" | "instagram";
  id: string; // TikTok video id or Instagram reel shortcode
  label: string;
  date?: string;
  stat?: string;
  note?: string;
};

export type ContentFinding = {
  id: string;
  title: string;
  verdict: "confirmed" | "partial" | "refuted";
  confidence?: string;
  summary: string;
  evidence: string[];
  counterEvidence?: string[];
  examples?: ContentExample[];
  pivot: {
    title: string;
    actions: string[];
  };
};

export type ContentMixRow = {
  metric: string;
  lolaAmour: string;
  benchmark: string;
  read: "ahead" | "inline" | "behind" | "neutral";
  note?: string;
};

export type ContentCorpusStat = {
  label: string;
  value: string;
  detail?: string;
};

export type ContentAnalysisSection = {
  type: "contentAnalysis";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  clientQuestion?: { attribution: string; question: string };
  methodology?: { label: string; value: string }[];
  corpusStats?: ContentCorpusStat[];
  mixColumnLabel?: string;
  mixHeading?: string;
  mixIntro?: string;
  mixRows?: ContentMixRow[];
  mixFootnote?: string;
  charts?: PlanChartSpec[];
  findingsHeading?: string;
  findingsIntro?: string;
  findings: ContentFinding[];
  footnote?: string;
};

export type AssetChecklistItem = {
  id: string;
  label: string;
  formats?: string[];
  owner?: string;
  note?: string;
  status?: "have" | "in-progress" | "needed";
};

export type AssetChecklistGroup = {
  heading: string;
  release?: string;
  format?: string;
  status?: "done" | "next" | "upcoming";
  description?: string;
  items: AssetChecklistItem[];
};

export type AssetChecklistSection = {
  type: "assetChecklist";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  storageKey?: string;
  standardNote?: string;
  ownerLegend?: { owner: string; label: string }[];
  groups: AssetChecklistGroup[];
  footnote?: string;
};

export type CalendarEntryKind =
  | "release"
  | "presave"
  | "announce"
  | "content"
  | "paid"
  | "asset"
  | "live"
  | "milestone";

export type CalendarEntry = {
  date: string;
  kind: CalendarEntryKind;
  label: string;
  detail?: string;
  channel?: string[];
  time?: string;
  cta?: string;
  status?: "done" | "next" | "upcoming";
};

export type CalendarPhase = {
  key: string;
  title: string;
  window?: string;
  releaseDate?: string;
  format?: string;
  status?: "done" | "next" | "upcoming";
  summary?: string;
  entries: CalendarEntry[];
};

export type CalendarLegendItem = { kind: string; label: string };

export type CalendarSection = {
  type: "calendar";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  cadenceNote?: string;
  postingRules?: string[];
  channelNote?: string;
  legend?: CalendarLegendItem[];
  phases: CalendarPhase[];
  footnote?: string;
};

export type CostModelRateCard = {
  label: string;
  value: string;
  unit?: string;
};

export type CostModelBar = {
  label: string;
  value: number;
  display: string;
};

export type CostModelSeries = {
  name: string;
  values: number[];
  emphasis?: boolean;
  dashed?: boolean;
};

export type CostModelScenario = {
  name: string;
  badge?: string;
  assumption: string;
  monthly: number[];
  monthlyDisplay: string[];
  total: string;
  subscriptionTotal?: string;
  listEnd: string;
  emphasis?: boolean;
  dashed?: boolean;
};

export type CostModelSection = {
  type: "costModel";
  number: string;
  navLabel?: string;
  title: string;
  intro?: string;
  rateHeading?: string;
  rateCards: CostModelRateCard[];
  rateCaption?: string;
  dropHeading?: string;
  dropChip?: string;
  dropBars: CostModelBar[];
  dropCaption?: string;
  formulaHeading?: string;
  formulaParts?: string[];
  formulaResult?: string;
  growthHeading?: string;
  growthChip?: string;
  growthStats?: { label: string; value: string; accent?: boolean }[];
  growthPoints: { label: string; day: number }[];
  growthSeries: CostModelSeries[];
  growthMarkers?: { day: number; label: string }[];
  growthBands?: { from: number; to: number; label: string }[];
  growthMax?: number;
  growthCaption?: string;
  costHeading?: string;
  costChip?: string;
  costMonths: string[];
  costCaption?: string;
  scenarioHeading?: string;
  scenarios: CostModelScenario[];
  calendarHeading?: string;
  calendarChip?: string;
  calendarStats?: { label: string; value: string; accent?: boolean; swatch?: string }[];
  calendarPhases?: DropCalendarPhase[];
  calendarCaption?: string;
  calendarPrinciplesHeading?: string;
  calendarPrinciples?: string[];
  leversHeading?: string;
  levers?: string[];
  footnote?: string;
};

export type DropCalendarEntry = {
  date: string;
  label: string;
  kind: "full" | "mms" | "geo";
};

export type DropCalendarPhase = {
  window: string;
  title: string;
  entries: DropCalendarEntry[];
  marketsLabel?: string;
  markets?: string[];
};

export type PlanSection =
  | OverviewSection
  | PhilosophySection
  | RoadmapSection
  | AudienceSection
  | BrandAuditSection
  | CompetitiveSection
  | TargetsSection
  | StructureSection
  | VerticalSection
  | FlightSection
  | TimelineSection
  | PricingSection
  | DeliverablesSection
  | ContentAnalysisSection
  | CalendarSection
  | AssetChecklistSection
  | CostModelSection;

// Plan root -----------------------------------------------------------------

export type StrategyPlanData = {
  accentColor: string;
  noIndex?: boolean;

  /**
   * Optional custom render key. When set, the [slug] route renders a dedicated
   * client component (e.g. the Uber × HITC bespoke experience) instead of the
   * generic PlanClient section renderer.
   */
  customRender?: "uber-hitc";

  cover: {
    label: string;
    title: string;
    subtitle: string;
    partnership: string;
    prepared: string;
    date: string;
    backgroundImage?: string;
    logo?: string;
  };

  ogImage?: string;

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
