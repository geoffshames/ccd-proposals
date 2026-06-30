import type { ProjectData } from "../project-context";

export const polkadotfx: ProjectData = {
  accentColor: "#FD3737",

  client: {
    name: "PolkaDotFx",
    logo: "",
    contactName: "PolkaDotFx Team",
    contactRole: "Founder / Brand Lead",
    contactEmail: "info@polkadotbrand.com",
    industry: "Functional Wellness Beverages / CPG",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Retail Launch Growth Engine",
    tagline:
      "The transparent dose in a category full of pixie dust — building the demand engine to win the wellness shelf at Target and Sprouts.",
    type: "Brand Audit + Full-Funnel Growth Marketing",
    startDate: "July 6, 2026",
    endDate: "January 6, 2027",
    duration: "6-Month Retainer",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Growth Plan",
    subtitle:
      "Turn radical dose transparency into the category's trust brand — and capture the retail demand Target and Sprouts are about to generate.",
    summary:
      "PolkaDotFx is entering national retail with a genuinely differentiated product and the category's sharpest trust wedge: every active dosed and printed on the label, third-party tested, no proprietary blends. But the demand engine behind that product isn't ready for the wave of awareness Target and Sprouts will create — checkout routes to Amazon, there's no owned audience or creator proof, and the brand name collides in search with a health-warning-flagged legacy product. Crowd Control Digital will close those gaps: stand up a first-party funnel, make transparency the loud brand platform, build an always-on creator-and-paid engine to manufacture the 'feel-it' proof this category is won on, and convert retail trial into compounding, owned LTV.",
    objectives: [
      "Own 'dose transparency' as the category's trust position — across packaging, site, paid, and creator",
      "Stand up a first-party Shopify funnel + subscription so retail-driven demand compounds into owned LTV (not Amazon's)",
      "Launch an always-on TikTok creator + compliant paid engine that manufactures felt-result proof at scale",
      "Win the Connect social/intimacy whitespace none of the energy-led leaders own",
      "Disambiguate 'PolkaDotFx' from the legacy name in search and protect brand-safety across paid channels",
    ],
    stats: [
      { value: 5, label: "Goal-State SKUs Marketed", description: "Full-funnel growth across Spark, Connect, Revive, Dream & Daily" },
      { value: 100, suffix: "+", label: "Creator Videos / Quarter" },
      { value: 2, label: "Retail Doors Activated", description: "Target + Sprouts launch pull-through" },
      { value: 6, label: "Month Engagement" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "We ran a full brand and competitive audit before writing a word of this proposal. The product is strong and the timing is excellent — mushroom and adaptogen beverages are crossing into mainstream retail right now. But the demand infrastructure behind PolkaDotFx isn't yet built to capture and compound the awareness national retail will create.",
    insights: [
      {
        label: "Category Wedge",
        finding:
          "The #1 complaint about functional drinks is 'I can't tell if it actually works' — and the #1 distrust signal is proprietary blends. PolkaDotFx already publishes every dose and third-party tests every batch. Almost no shelf competitor leads with this. It's the most defensible asset the brand owns and it's currently buried.",
        source: "Competitive audit + r/Nootropics / r/Supplements sentiment",
      },
      {
        label: "Revenue Leak",
        finding:
          "The brand's own site routes checkout to a third-party Amazon storefront — surrendering first-party data, subscription LTV, and retargeting signal at the exact moment of highest intent.",
        source: "Brand website audit (polkadotbrand.com)",
      },
      {
        label: "Whitespace",
        finding:
          "Connect (mood / social / intimacy) is an occasion none of the energy-led leaders — Odyssey, Magic Mind, MUD\\WTR — credibly own, and it rides the booming sober-curious wave where demand is already proven.",
        source: "Competitive landscape analysis",
      },
      {
        label: "Brand-Safety Risk",
        finding:
          "The 'PolkaDot' name collides in search with a health-warning-flagged legacy mushroom-chocolate line, muddying branded search and triggering paid-social rejections that must be engineered around.",
        source: "SERP audit + paid-platform policy review",
      },
      {
        label: "Missing Flywheel",
        finding:
          "There's no consistent owned social presence, creator proof engine, or email/SMS capture — so retail-driven discovery evaporates after the transaction instead of compounding.",
        source: "Owned-channel audit",
      },
    ],
    marketContext:
      "Why now: mushroom drinks are a ~$4B market growing ~7% a year, and 'super mushroom' food & beverage sales jumped ~20% YoY as the category crossed into mainstream grocery. Odyssey alone scaled from 2M to ~10M cans and 8,500+ doors in a single year. Retailers are now building dedicated functional-beverage sets and end caps. PolkaDotFx is arriving at the exact inflection point — but the brands winning shelf velocity are the ones that paired distribution with a real digital demand engine. That's the gap this engagement closes.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "A skeptical, label-reading, sober-curious wellness consumer who wants a drink to actually do something — and rewards the brands that can prove it.",
    demographics:
      "Adults 25–44, slightly female-skewing but broadly mixed, in wellness-forward metros (LA, NYC, Austin, Denver, Miami), college-educated, $60K–$150K household income.",
    demographicCards: [
      { label: "Age Range", value: "25–44 core", detail: "28–38 peak spend" },
      { label: "Gender", value: "Mixed", detail: "Slight female skew" },
      { label: "Income", value: "$60K–$150K", detail: "Premium-willing" },
      { label: "Markets", value: "Wellness metros", detail: "LA, NYC, ATX, DEN, MIA" },
    ],
    personas: [
      {
        name: "The Sober-Curious Socializer",
        ageRange: "27–38",
        description:
          "Cut back on alcohol and wants a social ritual that still feels special. Reaches for Connect at dinners and date nights — the mood lift and presence, without the hangover or regret.",
        traits: ["Non-alc", "Date night", "Mood lift", "Label reader"],
      },
      {
        name: "The Optimizer",
        ageRange: "25–40",
        description:
          "Tracks sleep, takes supplements, treats focus as a performance input. Skeptical of hype, scrutinizes doses on Reddit, and pays a premium only when the actives are proven and tested.",
        traits: ["Nootropics", "Dose-checker", "Spark Shot", "High LTV"],
      },
      {
        name: "The Mainstream Wellness Shopper",
        ageRange: "30–45",
        description:
          "Discovers brands on the Target/Sprouts shelf and through TikTok. Already drinks Olipop/Poppi, curious about mushrooms, but needs the benefit obvious and the taste good. Buys by goal, not ingredient.",
        traits: ["Retail discovery", "Goal-based", "Gummies", "Flavor-first"],
      },
    ],
    psychographics: [
      "Functional ROI — wants the drink to DO something specific, not just taste good",
      "Skeptical proof-seeking — burned by wellness theater, rewards transparency and testing",
      "Sober-curious — looking for social and wind-down rituals without alcohol",
      "Ritual & identity — functional drinks are a daily self-care signal",
    ],
    painPoints: [
      "'I can't tell if it's doing anything' — chronic doubt that functional drinks deliver a felt effect",
      "Proprietary blends and underdosing — distrust of hidden formulas below effective levels",
      "Price-to-effect anxiety — 'is it actually worth it?' is the deciding objection",
    ],
    purchaseTriggers: [
      "A credible creator/UGC moment showing a real, felt result ('25 minutes later…')",
      "Transparent on-label dosing + third-party testing that survives a Reddit teardown",
      "Seeing it on a trusted retail shelf (Target/Sprouts) — distribution legitimizes the brand",
    ],
    platforms: [
      { name: "TikTok", description: "Primary discovery and proof engine — 'does it actually work' reviews and creator trials drive trial. The category is won here." },
      { name: "Instagram", description: "Aesthetic validation and brand-world immersion; Reels of real lifestyle moments drive saves and intent." },
      { name: "Reddit", description: "High-intent due diligence — doses get scrutinized in r/Nootropics and r/Supplements before purchase." },
      { name: "Amazon", description: "Reviews-led conversion; 'I actually felt it' reviews make or break the buy." },
    ],
    quotes: [
      { text: "Magic Mind is good on ingredients, but I didn't feel any particular boost of energy or focus personally.", source: "Reddit r/Biohackers" },
      { text: "It works, but it's expensive — so just have some on hand for when you really need to concentrate.", source: "Reddit r/BrainFog" },
      { text: "Half these functional drinks hide everything in a 'proprietary blend' so you have no idea if it's even dosed enough to work.", source: "Reddit r/Supplements" },
    ],
  },

  targets: [
    { metric: "DTC Conversion Rate", value: "2.5–3.5%", context: "Owned Shopify funnel, established once checkout moves off Amazon" },
    { metric: "Email/SMS Capture", value: "8–12%", context: "Of site visitors, via quiz + welcome-offer funnel" },
    { metric: "Blended CAC", value: "< $28", context: "Sustainable for a multi-unit RTD wellness AOV with subscription LTV" },
    { metric: "Subscription % of DTC", value: "30%+", context: "Strong year-one base; category leaders run 40–60%" },
    { metric: "Creator Volume", value: "100+/qtr", context: "Content density required to move trial in a TikTok-won category" },
    { metric: "Branded Search SOV", value: "Page-one own", context: "Disambiguate from legacy name; capture retail-driven branded demand" },
  ],

  competitive: {
    summary:
      "The functional-beverage shelf is crowded but fragmented by occasion: Odyssey owns mushroom energy, Magic Mind owns the focus shot, MUD\\WTR owns the coffee alternative, and Hiyo/Recess split calm and social. No brand credibly spans the full goal spectrum AND leads on radical dose transparency. That intersection is PolkaDotFx's open lane.",
    competitors: [
      { name: "Odyssey Elixir", strength: "8,500+ retail doors, ~10M cans/yr, $6.3M Series A — proof mushroom beverages win mainstream shelf.", gap: "Energy-occasion only and lighter on dose transparency; cedes sleep, mood and social occasions PolkaDotFx covers." },
      { name: "Magic Mind", strength: "Most recognized focus-shot brand; massive podcast/creator affiliate engine.", gap: "Polarizing taste + efficacy reviews and blend-based formula — exactly the 'does it work / what's in it' doubt PolkaDotFx answers with published doses." },
      { name: "MUD\\WTR", strength: "Leading mushroom coffee-alternative with strong ritual brand and loyal subscriptions.", gap: "Powder needs prep and an acquired taste; cedes all RTD, grab-and-go, and evening/social occasions." },
      { name: "Hiyo", strength: "Rode the sober-curious wave to fast growth and strong Whole Foods/Sprouts traction.", gap: "Subtle 'float' effect invites 'I didn't feel it' skepticism; softer, less clinical story than a dose-transparent brand." },
      { name: "Recess", strength: "Iconic pastel design and strong cultural 'calm' positioning.", gap: "Vibe-led more than efficacy-led; modest doses draw the 'expensive sparkling water?' critique PolkaDotFx beats on proof." },
    ],
  },

  timelineHeading: "Engagement Roadmap",
  timelineSubheading:
    "A 6-month build from brand-safety foundation through retail pull-through and scale — front-loaded to be ready before Target and Sprouts demand lands.",
  timelineImageCaption: "6 Months / 4 Phases / 1 Trust Brand",
  timeline: [
    {
      phase: "Foundation & Brand-Safety",
      week: "Weeks 1–4",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Lock 'PolkaDotFx' as canonical brand entity + search disambiguation",
        "Stand up owned Shopify funnel + subscription, move checkout off Amazon",
        "Install Klaviyo email/SMS with welcome, post-purchase & replenishment flows",
        "Build 'We Put It On The Label' brand platform + launch creative",
      ],
    },
    {
      phase: "Demand Engine Online",
      week: "Weeks 5–8",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch always-on TikTok creator program (first 25–40 creators seeded)",
        "Stand up compliant Meta + TikTok full-funnel paid with clean server-side tracking",
        "Ship goal-based 'find your fit' quiz funnel for AOV + data capture",
        "Whitelist top organic creator videos into paid Spark Ads",
      ],
    },
    {
      phase: "Retail Pull-Through",
      week: "Weeks 9–16",
      date: "Sep–Oct 2026",
      status: "upcoming" as const,
      tasks: [
        "Retail-ready packaging / shelf-legibility optimization",
        "Geo-targeted 'now at Target/Sprouts' paid + creator burst",
        "In-store trial drivers (QR-to-quiz, demo + sampling assets)",
        "Connect social-occasion campaign launch",
      ],
    },
    {
      phase: "Scale & Compound",
      week: "Weeks 17–26",
      date: "Nov 2026 – Jan 2027",
      status: "upcoming" as const,
      ongoing: true,
      tasks: [
        "Scale profitable paid + creator winners",
        "Retention / LTV optimization (subscription, replenishment, bundles)",
        "Expand Connect-led social-occasion campaigns",
        "Monthly performance reporting & strategic roadmap iteration",
      ],
    },
  ],

  deliverablesSubheading:
    "Everything required to turn a differentiated product and national retail placement into a compounding, owned growth engine.",
  deliverables: [
    {
      category: "Brand & Conversion Infrastructure",
      icon: "◆",
      items: [
        { name: "Owned Shopify Funnel + Subscription", quantity: "Build", description: "Migrate primary checkout off Amazon into a premium first-party store with subscribe-and-save." },
        { name: "'We Put It On The Label' Platform", quantity: "Brand", description: "Elevate dose transparency from a PDP detail to the central brand platform across site, packaging panel & paid." },
        { name: "Goal-Based Quiz Funnel", quantity: "1", description: "'Find your fit' (Spark/Connect/Revive/Dream) quiz to lift AOV and capture first-party data." },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        { name: "Meta + TikTok Full-Funnel", quantity: "Ongoing", description: "Compliant prospecting + retargeting engineered to pass wellness review. Managed for 15% of ad spend, billed on top." },
        { name: "Server-Side Conversion Tracking", quantity: "Build", description: "CAPI / server-side tracking tied to the owned funnel for clean attribution." },
        { name: "Retail Launch Geo-Bursts", quantity: "Per launch", description: "Geo-targeted 'now at Target/Sprouts' paid bursts to drive in-store velocity." },
      ],
    },
    {
      category: "Creator & Content",
      icon: "●",
      items: [
        { name: "Always-On Creator Program", quantity: "100+/qtr", description: "Micro & mid-tier creators briefed on the felt-result + dose-transparency story. Creator fees billed on top at 15% mgmt." },
        { name: "Whitelisted Spark Ads", quantity: "Ongoing", description: "Top-performing organic creator videos amplified as paid." },
        { name: "Retail Shopper Content", quantity: "Kit", description: "QR-to-quiz, demo videos, and in-store sampling assets for Target/Sprouts pull-through." },
      ],
    },
    {
      category: "Lifecycle & Retention",
      icon: "■",
      items: [
        { name: "Email/SMS Flows (Klaviyo)", quantity: "Suite", description: "Welcome, post-purchase, replenishment & winback flows to compound LTV." },
        { name: "Subscription & Bundle Strategy", quantity: "Ongoing", description: "Subscribe-and-save mechanics and goal-based bundles to lift repeat rate." },
      ],
    },
    {
      category: "Strategy, SEO & Reporting",
      icon: "◇",
      items: [
        { name: "Search Disambiguation + SEO", quantity: "Ongoing", description: "Own page one for 'PolkaDotFx' and goal-based queries; separate from the legacy name." },
        { name: "Monthly Strategy & Reporting", quantity: "Monthly", description: "Performance reviews, KPI tracking, and roadmap iteration against the targets in this proposal." },
      ],
    },
  ],

  scope: {
    subheading: "Everything included in the management retainer — and where the boundaries are.",
    included: [
      "Brand audit + ongoing strategy and positioning",
      "Paid media management across Meta + TikTok (planning, builds, optimization, reporting)",
      "Always-on creator/influencer program management",
      "Owned funnel + subscription strategy and Klaviyo lifecycle flows",
      "Goal-based quiz funnel and conversion-rate optimization",
      "Search disambiguation + SEO content direction",
      "Retail pull-through strategy and shopper-content direction for Target/Sprouts",
      "Monthly performance reporting and strategic roadmap",
    ],
    excluded: [
      "Ad spend (funded by client, billed directly to platforms; managed at 15%)",
      "Creator/influencer fees (billed separately, managed at 15%)",
      "Content production at scale beyond strategy/direction (scoped per deliverable)",
      "Packaging design/printing and retail slotting fees",
      "Photography, video production, and animation (available as add-on — scoped and quoted separately)",
      "Website platform/subscription software costs (e.g., Shopify, Klaviyo subscriptions)",
    ],
  },

  quote: {
    model: "retainer" as const,
    investmentSubheading:
      "One committed monthly fee covers the full engagement. Ad spend and creator fees are funded by the client and managed at 15% — billed on top, always transparent.",
    currency: "USD",
    lineItems: [
      { name: "Full-Funnel Growth Retainer", description: "The committed monthly fee. Covers brand strategy, paid media management (Meta + TikTok), creator program management, owned-funnel & lifecycle strategy, SEO/disambiguation, retail pull-through, and monthly reporting. This is the only fixed, committed cost.", price: 10000, priceLabel: "Included", recurring: true },
    ],
    subtotal: 10000,
    discount: { label: "", percentage: 0, amount: 0 },
    variableCosts: [
      { name: "Paid Media (Ad Spend)", basis: "15% of ad spend", note: "Ad spend is funded by the client and billed directly to the platforms; CCD manages it for a 15% fee. Example only: at $20,000/mo in spend, the management fee is $3,000/mo. Spend level is set collaboratively and stays flexible. Recommended starting spend is scoped with the team at kickoff." },
      { name: "Creator / Influencer Fees", basis: "Creator fees + 15% mgmt", note: "Creator fees for the always-on program are billed separately and managed at the same 15% rate. Scoped per wave once the creator list is locked. Not included in the retainer." },
      { name: "Content Production", basis: "Production at cost", note: "Original content and edits beyond strategy/direction carry their own production costs, scoped and billed per deliverable. Monthly content budget set with the team. Not included in the retainer." },
    ],
    variableCostsHeading: "Variable Costs (Billed On Top)",
    variableCostsNote:
      "These are additional to the committed retainer and scoped as we go. Recommended ad-spend and content budgets are set collaboratively with the team and inserted here once defined.",
    total: 60000,
    totalLabel: "Committed Fee (6 Months)",
    paymentSchedule: [
      { milestone: "Month 1: Growth Retainer", percentage: 17, amount: 10000, due: "Upon approval" },
      { milestone: "Month 2: Growth Retainer", percentage: 17, amount: 10000, due: "August 6, 2026" },
      { milestone: "Month 3: Growth Retainer", percentage: 17, amount: 10000, due: "September 6, 2026" },
      { milestone: "Month 4: Growth Retainer", percentage: 17, amount: 10000, due: "October 6, 2026" },
      { milestone: "Month 5: Growth Retainer", percentage: 16, amount: 10000, due: "November 6, 2026" },
      { milestone: "Month 6: Growth Retainer", percentage: 16, amount: 10000, due: "December 6, 2026" },
    ],
    paymentTerms: "Net 7 from invoice. Month-to-month after the initial 6-month term.",
    paymentLink: "#",
  },

  nextSteps: [
    { step: 1, title: "Approve the Engagement", description: "Confirm scope and start date so we can lock the July kickoff ahead of the retail launch window." },
    { step: 2, title: "Onboarding Questionnaire", description: "We'll send a short intake covering current spend, platforms, list/CRM, website, and access — to inform execution." },
    { step: 3, title: "Kickoff & Access", description: "Grant access to ad accounts, Shopify, Klaviyo, and analytics so we can stand up the foundation in week one." },
    { step: 4, title: "Foundation Sprint", description: "We build the owned funnel, brand-safety/search layer, and transparency platform before demand lands." },
  ],

  cta: {
    headline: "Let's make PolkaDotFx the trust brand of the functional shelf.",
    body: "The product is ready and the retail moment is here. Let's build the demand engine that turns Target and Sprouts placement into a category-leading brand. Approve below and we'll lock the July kickoff.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/polkadotfx/hero1.png",
    hero2: "/images/polkadotfx/hero2.png",
    product: "/images/polkadotfx/product.png",
    editorial: "/images/polkadotfx/editorial.png",
    texture: "/images/polkadotfx/texture.png",
    brutalist: "/images/polkadotfx/brutalist.png",
    hero1Caption: "Function meets flavor",
    brutalistCaption: "Stand out on a crowded shelf",
  },
};
