export type ProposalNavItem = {
  id: string;
  label: string;
};

export type AuditSignal = {
  code: string;
  title: string;
  read: string;
  implication: string;
  basis: string;
};

export type EngagementPhase = {
  number: string;
  window: string;
  title: string;
  objective: string;
  outputs: readonly string[];
  decision: string;
};

export type Workstream = {
  number: string;
  title: string;
  role: string;
  deliverables: readonly string[];
  outcome: string;
};

export type PriorityWindow = {
  window: string;
  title: string;
  focus: string;
  priorities: readonly string[];
  exitCondition: string;
};

export type OptionalModule = {
  id: string;
  title: string;
  timing: string;
  price: string;
  description: string;
  includes: readonly string[];
  trigger: string;
  featured?: boolean;
};

export type CadenceItem = {
  rhythm: string;
  session: string;
  purpose: string;
};

export type Dependency = {
  owner: "Champion Teamwear" | "Joint";
  item: string;
  why: string;
};

export type InvestmentLine = {
  label: string;
  amount: string;
  numericAmount?: number;
  note: string;
};

export const proposalMeta = {
  slug: "champion-teamwear-proposal",
  client: "Champion Teamwear / Athletic Brands Alliance",
  preparedBy: "Crowd Control Digital",
  document: "Growth Strategy Partnership",
  issued: "July 17, 2026",
  classification: "Confidential proposal",
  ndaRequired: false,
  initialTerm: "Proposed 6-month runway",
  roadmapHorizon: "6 to 12 months",
} as const;

export const proposalNav: readonly ProposalNavItem[] = [
  { id: "opportunity", label: "Opportunity" },
  { id: "signals", label: "Signals" },
  { id: "engagement", label: "Engagement" },
  { id: "roadmap", label: "Roadmap" },
  { id: "options", label: "Options" },
  { id: "investment", label: "Investment" },
  { id: "contact", label: "Contact" },
];

export const proposalHero = {
  eyebrow: "Champion Teamwear x Crowd Control Digital",
  headline: "Turn brand permission into a growth system.",
  subheadline:
    "The proposed six-month runway should give Champion Teamwear a clear position, a prioritized growth roadmap, and a channel system the business can operate with confidence.",
  thesis:
    "Crowd Control will embed as Champion Teamwear's strategy and growth partner, helping leadership make the highest-value choices first, then activating the workstreams that can prove those choices in market.",
  termLabel: "Recommended operating runway",
  termValue: "Six months",
  horizonLabel: "Planning horizon",
  horizonValue: "Six to twelve months",
} as const;

export const engagementPremise = {
  title: "Build the decision system before scaling the output.",
  body:
    "Champion Teamwear is managing a brand transition, an ambitious category expansion, and a compressed internal team at the same time. The engagement starts by establishing a shared fact base, then turns that evidence into positioning, growth priorities, channel roles, and activation choices. Social and CRM execution runs inside the core team, while paid media, production, and platform work stay modular so execution follows the strategy instead of outrunning it.",
  priorWorkNote:
    "The July brand and sentiment diagnostic is orientation, not completion. The paid engagement includes a new working audit, direct audience discovery, stakeholder input, data review, and validation of the hypotheses below.",
} as const;

export const auditSignals: readonly AuditSignal[] = [
  {
    code: "01",
    title: "The brand has permission that the current experience does not fully convert.",
    read:
      "Champion recognition, broad product capability, customization, and established relationships create a credible starting position. The customer journey and public brand system do not yet make those advantages feel unified.",
    implication:
      "The first strategic job is to define the Teamwear proposition clearly, then make every channel prove the same promise.",
    basis: "Pre-engagement diagnostic, owned-channel review, and July 14 leadership discussion",
  },
  {
    code: "02",
    title: "The economic buyer and the athlete create demand in different ways.",
    read:
      "Coaches, athletic directors, club owners, and parents need certainty around price, fit, timing, and reorders. Athletes influence preference through identity, style, team pride, and social proof.",
    implication:
      "Audience work must define one purchase system with distinct messages for the person approving the order and the person wearing it.",
    basis: "Customer voice review, category journey analysis, and leadership discussion",
  },
  {
    code: "03",
    title: "Service appears to be a retention advantage, but it is not yet a scalable brand asset.",
    read:
      "Direct customer conversations frequently connect a positive experience to a specific representative. Negative themes tend to surface around updates, replacements, consistency, and recovery.",
    implication:
      "Rep quality and game-date certainty should be translated into visible standards, tools, and proof rather than left to individual relationships.",
    basis: "Directional customer sentiment sample and customer journey review",
  },
  {
    code: "04",
    title: "Digital trust is fragmented across legacy systems and public signals.",
    read:
      "The pre-engagement review found duplicate public hosts, legacy operator residue, inconsistent pathways, and a 2,286 URL sitemap carrying one repeated 2019 modification date.",
    implication:
      "The Shopware program needs brand, content, migration, and customer-journey requirements before interface decisions become expensive to unwind.",
    basis: "Owned-site and public technical review completed July 14, 2026",
  },
  {
    code: "05",
    title: "The current strength and the intended growth market are not the same.",
    read:
      "Leadership identified cheer, dance, and gymnastics as the inherited core, with traditional team sports as the major expansion ambition.",
    implication:
      "Growth planning should protect the core while selecting a small number of traditional-sport beachheads based on market fit, proof, channel access, and operational readiness.",
    basis: "July 14 leadership discussion",
  },
  {
    code: "06",
    title: "The cultural layer is underbuilt relative to the brand's potential.",
    read:
      "Teamwear-specific conversation is still led by price and service. Athlete aspiration, reveal culture, creators, and youth-facing storytelling are less visible in the evidence reviewed to date.",
    implication:
      "Content and activation should create athlete demand without weakening the operational case required by adult buyers.",
    basis: "Directional social, content, and customer voice review",
  },
];

export const engagementPhases: readonly EngagementPhase[] = [
  {
    number: "01",
    window: "Weeks 1 to 4",
    title: "Establish the truth",
    objective:
      "Create the paid, decision-grade foundation for the engagement. Validate what is known, expose what is missing, and separate masterbrand equity from Teamwear performance.",
    outputs: [
      "Working brand, audience, channel, and customer-experience audit",
      "Social and CRM channel takeover with a keep-the-lights-on calendar",
      "Champion and ABG material review with rights and approval questions logged",
      "Leadership, sales, service, and customer discovery",
      "Teamwear-specific sentiment and social listening update",
      "Analytics, CRM, content, media, and commerce baseline",
      "Decision criteria for opportunity prioritization",
    ],
    decision: "Agree on the fact base, priority audiences, and problems worth solving first.",
  },
  {
    number: "02",
    window: "Weeks 5 to 8",
    title: "Make the choices",
    objective:
      "Turn the evidence into a distinct Teamwear position, a practical audience hierarchy, and a ranked growth portfolio.",
    outputs: [
      "Positioning territory and value proposition",
      "Audience and ICP definitions with buying roles",
      "Message architecture and proof framework",
      "Growth opportunity map by audience, category, and channel",
      "Core-business protection and traditional-sports expansion choices",
      "Near-, mid-, and long-term opportunity ranking",
    ],
    decision: "Lock where Champion Teamwear will play, whom it must win, and what it will be known for.",
  },
  {
    number: "03",
    window: "Weeks 9 to 12",
    title: "Design the growth system",
    objective:
      "Translate the strategy into channel roles, operating priorities, and a roadmap the team can execute.",
    outputs: [
      "Brand foundation and brand-bible architecture",
      "Channel roles for social, CRM, web, paid media, content, partnerships, and events",
      "Shopware experience principles and priority journey requirements",
      "Content and campaign territory system",
      "Measurement framework and shared scorecard",
      "Six- to twelve-month growth roadmap with owners, dependencies, and sequencing",
    ],
    decision: "Approve the operating roadmap and select the first market-facing pilots.",
  },
  {
    number: "04",
    window: "Months 4 to 6",
    title: "Pilot, learn, and scale",
    objective:
      "Help the business activate its highest-priority choices, read the signal, and improve the roadmap before larger investment.",
    outputs: [
      "Priority campaign and activation concepts",
      "Pilot briefs, channel plans, and measurement plans",
      "Paid-media strategy and management when activated",
      "Strategic review of priority creative and customer touchpoints",
      "Monthly performance and decision readouts",
      "Month-six roadmap reset for the next two quarters",
    ],
    decision: "Scale the initiatives that produce credible signal and stop the ones that do not.",
  },
];

export const workstreams: readonly Workstream[] = [
  {
    number: "01",
    title: "Brand foundation",
    role: "Define the Teamwear proposition inside the broader Champion system.",
    deliverables: [
      "Paid brand audit and stakeholder discovery",
      "Audience hierarchy and ICPs",
      "Positioning, value proposition, and message architecture",
      "Brand-bible architecture and governance recommendations",
    ],
    outcome: "One strategic foundation that can guide sales, content, commerce, and partnerships.",
  },
  {
    number: "02",
    title: "Growth portfolio",
    role: "Convert a long list of opportunities into a sequence of accountable bets.",
    deliverables: [
      "Audience, category, and channel opportunity map",
      "Core-versus-expansion portfolio choices",
      "Prioritization model based on impact, evidence, effort, and readiness",
      "Six- to twelve-month roadmap with decision gates",
    ],
    outcome: "A clear answer to what happens now, what waits, and what must be true before scaling.",
  },
  {
    number: "03",
    title: "Channel and go-to-market architecture",
    role: "Give each channel a defined job in the customer journey.",
    deliverables: [
      "Social, CRM, web, paid, content, partnership, and event roles",
      "Audience and message mapping by channel",
      "Content and campaign planning framework",
      "Shopware journey and launch requirements",
    ],
    outcome: "A connected system in which channels support one another instead of publishing in parallel.",
  },
  {
    number: "04",
    title: "Social and CRM engine",
    role: "Run the owned channels that carry the brand day to day.",
    deliverables: [
      "Channel strategy, content calendars, and publishing cadence",
      "Day-to-day social content creation and community management",
      "Email and SMS lifecycle flows, campaigns, and segmentation",
      "List growth, deliverability, and performance reporting",
    ],
    outcome: "Owned channels that compound: consistent presence, growing lists, and a measurable contribution to demand.",
  },
  {
    number: "05",
    title: "Campaign and activation platform",
    role: "Build culturally relevant ideas that can still serve commercial priorities.",
    deliverables: [
      "Campaign territories and activation concepts",
      "Grassroots, youth-sport, event, creator, and partnership opportunities",
      "Pilot briefs with objective, audience, channel, and measurement logic",
      "Activation roadmap tied to the business calendar",
    ],
    outcome: "A pipeline of ideas with a reason to exist, a role in growth, and a testable next step.",
  },
  {
    number: "06",
    title: "Operating and measurement system",
    role: "Make the strategy usable by a lean internal team and repeatable across ABA.",
    deliverables: [
      "Shared scorecard and reporting logic",
      "Decision log, ownership model, and approval path",
      "Monthly roadmap calibration",
      "Reusable playbook principles for future ABA brands",
    ],
    outcome: "A practical management layer that preserves context and speeds up good decisions.",
  },
];

export const ninetyDayPriorities: readonly PriorityWindow[] = [
  {
    window: "Days 1 to 30",
    title: "Truth before volume",
    focus: "Build the new paid fact base while containing immediate decision risk.",
    priorities: [
      "Complete stakeholder, sales, service, and customer discovery",
      "Inventory Champion and ABG assets, usage rights, claims, and approval mechanics",
      "Audit the brand, audience, channel, content, CRM, commerce, and media baseline",
      "Define decision criteria and an initial opportunity backlog",
      "Document urgent commercial needs without allowing them to dictate the long-term system",
    ],
    exitCondition: "Leadership agrees on the evidence, open questions, and priority audiences.",
  },
  {
    window: "Days 31 to 60",
    title: "Choice before build",
    focus: "Commit to a position and a focused growth portfolio.",
    priorities: [
      "Lock the Teamwear positioning territory and value proposition",
      "Define ICPs, buying roles, message priorities, and proof requirements",
      "Rank growth opportunities by impact, evidence, effort, and readiness",
      "Select the first traditional-sport beachhead for deeper planning",
      "Set channel roles and the measurement model",
    ],
    exitCondition: "The business can state whom it is for, why it wins, and where it will focus first.",
  },
  {
    window: "Days 61 to 90",
    title: "System before scale",
    focus: "Turn the strategic choices into an operating roadmap and pilot briefs.",
    priorities: [
      "Deliver the brand foundation and brand-bible architecture",
      "Deliver the six- to twelve-month roadmap with owners and dependencies",
      "Define the Shopware experience principles and priority customer journeys",
      "Develop campaign, content, CRM, paid, partnership, and event territories",
      "Select pilots for months four through six and define their success criteria",
    ],
    exitCondition: "Champion Teamwear has an approved roadmap, a working scorecard, and a short list of activation-ready priorities.",
  },
];

export const optionalModules: readonly OptionalModule[] = [
  {
    id: "sales-enablement",
    title: "Sales Enablement Sprint",
    timing: "Two to three weeks",
    price: "$7,500 fixed fee",
    description:
      "A focused bridge for urgent commercial needs while the broader brand system is being built.",
    includes: [
      "Sales narrative and proof hierarchy",
      "Modular sell-sheet system for priority audiences or categories",
      "Trade-show and meeting story flow",
      "Core copy and handoff guidance for internal use",
      "One working review and one refinement round",
    ],
    trigger: "Activate when near-term sales deadlines cannot wait for the full brand foundation.",
    featured: true,
  },
  {
    id: "paid-media",
    title: "Paid Media Strategy and Management",
    timing: "Activated by approved campaign",
    price: "15% of managed media spend",
    description:
      "Planning, launch, optimization, and reporting for paid programs tied to an approved audience and campaign strategy.",
    includes: [
      "Campaign architecture and audience plan",
      "Platform build and quality assurance",
      "Ongoing optimization and budget pacing",
      "Performance reporting and strategic readouts",
    ],
    trigger: "Activate once the objective, conversion path, creative inputs, tracking, and spend level are approved.",
  },
  {
    id: "creative-studio",
    title: "Creative Studio",
    timing: "Scoped per campaign or production cycle",
    price: "Creative fees quoted separately",
    description:
      "Concept development and production support for the specific work required to bring an approved strategy to market.",
    includes: [
      "Campaign design systems",
      "Social, CRM, web, and paid-media assets",
      "Photo, video, and motion production planning",
      "Creator and partner asset direction",
    ],
    trigger: "Activate only against an approved brief, deliverable list, timeline, and production budget.",
  },
  {
    id: "shopware-blueprint",
    title: "Shopware Experience Blueprint",
    timing: "Three to four weeks",
    price: "Scoped separately",
    description:
      "A strategy layer for the new commerce experience, designed to align brand, customer journeys, content, and migration requirements before implementation.",
    includes: [
      "Priority journey definitions",
      "Information and decision architecture",
      "Content and proof requirements",
      "Migration, redirect, and launch-priority brief",
    ],
    trigger: "Activate when the Shopware product owner, technical timeline, and implementation responsibilities are confirmed.",
  },
  {
    id: "catalog-automation",
    title: "Catalog Automation Discovery",
    timing: "Three to four weeks",
    price: "Scoped separately",
    description:
      "A technical and commercial discovery sprint for turning product data and 3D assets into modular, personalized sales materials.",
    includes: [
      "Data, asset, and workflow mapping",
      "Personalization use cases by sport, team, or club",
      "Prototype requirements and integration plan",
      "MVP scope, economics, and delivery roadmap",
    ],
    trigger: "Activate when the 3D builder owner, data model, and technical counterpart are available.",
  },
  {
    id: "activation-production",
    title: "Event and Partnership Activation",
    timing: "Scoped per opportunity",
    price: "Scoped separately",
    description:
      "Strategy and production planning for grassroots sport, youth engagement, creators, artists, events, and co-branded concepts.",
    includes: [
      "Activation concept and partner logic",
      "Audience journey and channel plan",
      "Production scope and operating requirements",
      "Measurement plan and post-event readout",
    ],
    trigger: "Activate when the opportunity has a clear owner, date, budget, rights path, and business objective.",
  },
];

export const collaborationCadence: readonly CadenceItem[] = [
  {
    rhythm: "Weekly",
    session: "Working room",
    purpose: "Review active decisions, pressure-test work in progress, and resolve blockers with the people closest to the issue.",
  },
  {
    rhythm: "Monthly",
    session: "Executive decision review",
    purpose: "Read performance, approve priority changes, and keep the six- to twelve-month roadmap aligned with business reality.",
  },
  {
    rhythm: "Ongoing",
    session: "Shared decision log and roadmap",
    purpose: "Maintain one source of truth for evidence, owners, approvals, dependencies, and next actions.",
  },
  {
    rhythm: "At each phase gate",
    session: "Leadership sign-off",
    purpose: "Confirm the choices that unlock the next phase before strategy becomes production cost.",
  },
];

export const dependencies: readonly Dependency[] = [
  {
    owner: "Champion Teamwear",
    item: "Current Champion and ABG guidelines, licensed assets, usage rules, and approval path",
    why: "Positioning and activation must respect the rights attached to the Teamwear license.",
  },
  {
    owner: "Champion Teamwear",
    item: "Access to analytics, CRM, commerce, social, paid-media, and customer-service data",
    why: "The paid audit and opportunity ranking need an operating baseline, not surface signals alone.",
  },
  {
    owner: "Champion Teamwear",
    item: "Product, margin, inventory, lead-time, reorder, and sales-priority context",
    why: "Growth recommendations must reflect what the business can fulfill and where value is created.",
  },
  {
    owner: "Joint",
    item: "Access to leadership, sales representatives, service teams, customers, parents, coaches, and athletes",
    why: "A credible audience and positioning system requires direct discovery across both purchase and use.",
  },
  {
    owner: "Champion Teamwear",
    item: "A named executive sponsor and final approver",
    why: "Fast, iterative work depends on clear decision rights and timely feedback.",
  },
  {
    owner: "Champion Teamwear",
    item: "Shopware roadmap, technical owners, and 3D builder documentation",
    why: "Digital and automation recommendations must connect to the systems already being built.",
  },
  {
    owner: "Champion Teamwear",
    item: "Commercial calendar, event plans, partnership pipeline, and priority deadlines",
    why: "The roadmap should sequence strategy and execution around real moments of demand.",
  },
  {
    owner: "Joint",
    item: "Approved budgets for media, creative production, research incentives, travel, and third-party costs",
    why: "These costs sit outside the core strategy retainer and require written approval before commitment.",
  },
];

export const investment: readonly InvestmentLine[] = [
  {
    label: "Core partnership: strategy, social and CRM",
    amount: "$10,000 per month",
    numericAmount: 10_000,
    note: "Strategy and growth leadership plus hands-on social and CRM management. Recommended six-month operating runway; final term is confirmed in the engagement agreement.",
  },
  {
    label: "Paid media management",
    amount: "15% of managed media spend",
    note: "Applies only to media placed and managed by Crowd Control. Media spend is funded separately by Champion Teamwear.",
  },
  {
    label: "Creative production",
    amount: "Quoted separately",
    note: "Creative fees are scoped by approved brief, deliverables, production requirements, timeline, and usage.",
  },
  {
    label: "Sales Enablement Sprint",
    amount: "$7,500 fixed fee",
    numericAmount: 7_500,
    note: "Optional two- to three-week module for urgent sales materials and story architecture.",
  },
  {
    label: "Additional optional modules",
    amount: "Scoped separately",
    note: "No optional module begins without an approved scope, fee, timeline, and owner.",
  },
];

export const coreScope = {
  includedTitle: "Included in the core partnership",
  included: [
    "New paid brand, audience, channel, and customer-experience audit",
    "Stakeholder and audience discovery",
    "Positioning, ICPs, messaging, and proof framework",
    "Growth opportunity map and prioritization model",
    "Channel and go-to-market strategy",
    "Social media management: channel strategy, calendars, publishing, and community",
    "CRM and lifecycle management: email and SMS flows, campaigns, and list growth",
    "Campaign and activation ideation",
    "Six- to twelve-month roadmap and monthly calibration",
    "Measurement framework, decision log, and executive readouts",
    "Strategic review of priority work produced by Champion Teamwear or approved partners",
  ],
  excludedTitle: "Scoped and funded separately",
  excluded: [
    "Campaign creative, photo, video, and motion production beyond day-to-day social content",
    "Media spend, creator fees, talent, usage, licensing, and paid partnerships",
    "Website design, development, migration, quality assurance, and ongoing maintenance",
    "Event production, fabrication, printing, shipping, travel, and on-site staffing",
    "Software, data providers, research recruitment, incentives, and other third-party costs",
    "Catalog automation development or integration beyond an approved discovery scope",
  ],
} as const;

export const proposalCta = {
  eyebrow: "Recommended next move",
  headline: "Start with the core partnership. Scale execution where the evidence earns it.",
  body:
    "Crowd Control will schedule kickoff as soon as the engagement agreement is confirmed, issue the access and discovery request, and take over the social and CRM calendar while the new paid audit runs. The first phase ends with a shared fact base and a leadership decision on where Champion Teamwear will focus first.",
  primaryLabel: "CONTACT US",
  primaryHref: "mailto:geoff@crowdcontroldigital.com?subject=Champion%20Teamwear%20Partnership",
  contact: "geoff@crowdcontroldigital.com",
  firstSteps: [
    "Confirm the engagement agreement and operating runway",
    "Tell us who signs off and who we work with day to day",
    "Schedule the kickoff and access intake",
    "Begin the paid audit and discovery phase",
  ],
} as const;

export const championTeamwearProposal = {
  meta: proposalMeta,
  nav: proposalNav,
  hero: proposalHero,
  premise: engagementPremise,
  auditSignals,
  phases: engagementPhases,
  workstreams,
  ninetyDayPriorities,
  optionalModules,
  collaborationCadence,
  dependencies,
  investment,
  coreScope,
  cta: proposalCta,
} as const;

export type ChampionTeamwearProposal = typeof championTeamwearProposal;
