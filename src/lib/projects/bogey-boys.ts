import type { ProjectData } from "../project-context";

/**
 * Bogey Boys - E-Comm Stack Retainer Pitch
 *
 * Cold pitch positioning CCD as the always-on e-comm engine beneath the
 * drop calendar. Leverages CCD's apparel + sport + music DNA: Malbon Golf,
 * Kappa, Foot Locker, NBA - plus a music-industry foundation that maps
 * directly to Macklemore's founder lane.
 *
 * Pricing: 6-month retainer at $35K/mo management + $15K setup. Ad spend
 * billed separately at 15% management. Total management value: $225K.
 */
export const bogeyBoys: ProjectData = {
  accentColor: "#C8392E",

  client: {
    name: "Bogey Boys",
    logo: "",
    contactName: "Bogey Boys Team",
    contactRole: "Bogey Boys / Macklemore LLC",
    contactEmail: "hello@bogeyboys.com",
    industry: "Golf & Lifestyle Apparel",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Bogey Boys E-Comm Engine",
    tagline: "The always-on growth stack beneath the drop calendar. Lifecycle, paid media, creative, and creator infrastructure built for an apparel brand that already wins on culture.",
    type: "E-Comm Retainer (6 Months)",
    startDate: "Q3 2026",
    endDate: "Q4 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary: "Bogey Boys has the rarest thing an apparel brand can have: a real founder story, a clear point of view, and editorial-grade photography that already does half the marketing job. What's missing is the always-on engine that turns drop-day spikes into compounding LTV. CCD has built that engine for the brands you compete with - Malbon Golf, Kappa, Foot Locker, NBA - and we live in the music + culture lane that Bogey Boys' founder helped invent. This is a 6-month retainer to stand up the lifecycle program, run paid media as a system not a series of campaigns, scale creative output, and activate the creator network where music, golf, and streetwear actually overlap. Management fees only - ad spend and creator fees billed separately at a 15% management rate.",
    objectives: [
      "Build and run the Klaviyo lifecycle engine (8-10 flows, 8-12 campaigns/mo, segmented SMS) so every site visitor, drop subscriber, and one-time buyer gets a sequenced flywheel - not a single welcome email and silence",
      "Launch full-funnel paid media across Meta, Google (Search + Shopping + PMax), and TikTok with a unified prospecting + retargeting architecture - turning the Adidas-collab and Macklemore-press moments into sustained traffic, not 72-hour spikes",
      "Scale creative production to platform-native volume (40-60 ads/mo) - retaining the Bogey Boys editorial DNA while feeding the systems that demand fresh assets every week",
      "Activate the music-meets-golf creator overlap: a 25-50 creator pipeline spanning golf personalities, hip-hop adjacent culture, and streetwear influencers with the Macklemore halo built in",
      "Stand up the conversion + measurement layer (CRO, attribution, cohort + LTV reporting) so every dollar across the stack is traceable - and Months 4-6 are optimized against real data, not gut"
    ],
    subtitle: "Six months to make Bogey Boys the most efficient drop-driven apparel engine in golf - then scale it.",
    imageCaption: "Bogey Boys x Crowd Control Digital",
    stats: [
      { value: 10, suffix: "+", label: "Lifecycle Flows", description: "Klaviyo + SMS engine built from welcome through win-back, segmented by buyer behavior" },
      { value: 60, suffix: "+", label: "Ad Creatives / Mo" },
      { value: 3, label: "Paid Channels" },
      { value: 50, suffix: "+", label: "Creator Pipeline" }
    ],
  },

  discovery: {
    heading: "What We Found",
    summary: "Before pitching a single deliverable we audited the full Bogey Boys digital footprint - site, social, press, retail, the Adidas collab arc, the Capitol Hill flagship, and the orbit of unaffiliated 'Bogey' accounts that share search intent. Five findings drive the entire scope.",
    insights: [
      {
        label: "Brand Asset, Underleveraged Engine",
        finding: "Bogey Boys has best-in-class founder narrative (Macklemore's actual origin story is on the About page and reads like a short film), editorial-grade photography across every product page, and three legitimate cultural moments (Adidas, Ebbets, TOUR Championship) - all sitting on a Shopify store that doesn't appear to have a sustained lifecycle program running underneath. The brand asset is doing 80% of the work; the conversion engine is doing 20%.",
        source: "Site audit + bogeyboys.com homepage + Shopify signals"
      },
      {
        label: "Drops Without a Flywheel",
        finding: "The brand operates a drop-led model (per the Adidas, Ljubav, Ebbets, and Catalina collection cadence). Drops generate 72-hour traffic spikes, but without a tuned welcome series, abandon flows, post-purchase sequencing, and SMS, that traffic flushes through without compounding into LTV. Every Macklemore press hit is currently a one-shot - it should be the top of a 6-touch nurture.",
        source: "Hypebeast, Robb Report, Footwear News press analysis + drop calendar review"
      },
      {
        label: "SEO + Brand Search Confusion",
        finding: "Search 'Bogey Boys' and the result is muddied by @bogeybois (600K-follower TikTok creators), Bogey Boys Golf Co (10K IG), The Bogey Club (3.7K), and a half-dozen other named accounts. Paid search can't be expensive when this much navigational intent is leaking. There's no defensive bid layer running, which means Macklemore-driven press is paying somebody else's CPCs.",
        source: "Branded SERP audit + Instagram namespace check"
      },
      {
        label: "Reviews Tell a Service Story, Not a Product Story",
        finding: "Thingtesting and r/golf reviews are split: praise for fabric quality and color/embroidery, friction on shipping speed, returns flexibility, and post-purchase support. The product is winning - the post-purchase experience is a tax on repeat buying. Klaviyo + a hands-on retention layer turn that into net loyalty instead of churn.",
        source: "Thingtesting, Reddit r/golf, customer review aggregation"
      },
      {
        label: "Music-Meets-Golf Lane Is Wide Open",
        finding: "Macklemore is the founder. Hip-hop's golf intersection (J Cole, Travis Scott, Drake, Pharrell, Kid Cudi - all known golfers) has zero apparel brand owning the cultural cross-pollination at scale. Malbon plays streetwear-celebrity (NBA, surf), Eastside plays culture + Jordan, Metalwood plays community + repair. The music + golf lane is unclaimed - and it's literally Bogey Boys' founder's home turf.",
        source: "Competitive landscape audit + cultural mapping (CCD music industry data)"
      }
    ],
    marketContext: "Golf apparel: $4.54B (2024) growing to $7.4B by 2033 at 6.3% CAGR. Millennial + Gen Z golf-fashion participation is up 38%. 53% of new golf apparel buyers are influenced primarily by lifestyle branding, not performance specs. The category's growth is being driven by exactly the buyer Bogey Boys was built for - and the bigger that buyer pool gets, the more the always-on engine matters versus the spike-and-flush model. The window to compound is now."
  },

  audience: {
    heading: "Who We're Reaching",
    summary: "Bogey Boys talks to a buyer who grew up on streetwear, picked up golf in the last 2-5 years, and wants apparel that works at the muni AND brunch. They're style-conscious, founder-loyal, and they don't mind paying premium when the cultural thread is real. Three named segments drive the scope.",
    demographics: "Core demo: 25-45, predominantly male with a fast-growing female segment (women's golf participation up 25%). $75K+ income, urban or near-urban, indexes high on hip-hop, streetwear, and design-forward consumer brands. Concentrated geographically in Sun Belt golf metros (LA, Phoenix, Dallas, Atlanta), the Pacific Northwest (founder-loyalty halo), and South Florida.",
    demographicCards: [
      { label: "Age Range", value: "25-45 core", detail: "28-38 highest-LTV cohort" },
      { label: "Household Income", value: "$75K+", detail: "Discretionary apparel buyer" },
      { label: "Golf Tenure", value: "2-5 yrs", detail: "Pandemic + post-pandemic onboards" },
      { label: "Gender Split", value: "~75/25 M/F", detail: "Female segment growing fastest" }
    ],
    personas: [
      {
        name: "The New-Wave Golfer",
        ageRange: "28-38",
        description: "Picked up golf in 2020-2022. Came from a streetwear or sneaker background - Stussy, Aime Leon Dore, Patta. Wears Bogey Boys to the muni and to brunch and considers the crossover the whole point.",
        traits: ["Streetwear-native", "Drop-aware", "Sneaker-collector", "Multi-brand wardrobe"]
      },
      {
        name: "The Macklemore Halo Buyer",
        ageRange: "30-45",
        description: "Followed Macklemore from the music. Found Bogey Boys through the Adidas press cycle, the AT&T Pebble Beach Pro-Am, or a TikTok. Buys on founder loyalty as much as product, and treats every drop as a culture moment.",
        traits: ["Founder-loyal", "Press-responsive", "Mid-handicap", "Tells the story"]
      },
      {
        name: "The Heritage Aesthete",
        ageRange: "32-50",
        description: "Cardigans, tartan, vintage Lee Trevino, Payne Stewart. They were buying tweed before the 'old money golf' aesthetic blew up on TikTok. Higher AOV, lower frequency, and the stickiest LTV cohort once they convert.",
        traits: ["Vintage-fluent", "Higher AOV", "Style-led", "Lower frequency / higher loyalty"]
      }
    ],
    psychographics: [
      "Identify with golf as a lifestyle - not a country-club membership",
      "Style is a substantial part of why they play (53% of new golf buyers cite lifestyle branding as primary purchase driver per industry data)",
      "Founder-led brands matter - they prefer a story they can repeat over a spec sheet",
      "Cultural fluency as taste signal - hip-hop, streetwear, vintage, golf - all in one wardrobe is a flex"
    ],
    painPoints: [
      "Country-club apparel reads as uniform and uninspired - they explicitly want the opposite",
      "When something goes wrong (sizing, shipping, a returns question) the friction is enough to kill repeat purchase",
      "They'd buy more often if they knew when drops were coming - but the discovery is currently random feed-luck",
      "Premium pricing demands a premium experience all the way through delivery - and that's the gap"
    ],
    purchaseTriggers: [
      "Founder-led drops with a real cultural story (Adidas, Ebbets, anniversary moments)",
      "Editorial press hits in Hypebeast, Robb Report, Footwear News, GQ adjacents",
      "Macklemore-driven content - performances, AT&T Pebble Beach appearances, music releases",
      "Creator validation - they'll buy what they see on creators they trust in the golf-culture orbit"
    ],
    platforms: [
      { name: "Instagram (@bogeyboys)", description: "139K followers - the editorial home base. Strong drop visibility, healthy engagement on collab content. Underleveraged for paid social retargeting." },
      { name: "TikTok (@bogeyboys)", description: "The fastest-growing acquisition surface for golf-curious millennials and Gen Z. Currently posting but not yet running the always-on whitelist + creator architecture the platform rewards." },
      { name: "Search (Google)", description: "Brand search is leaking to unaffiliated 'Bogey' accounts. Defensive brand bidding + non-brand long-tail (golf cardigan, vintage golf polo, streetwear golf) is uncovered." },
      { name: "Email + SMS", description: "Drop-day blast cadence. The compounding lifecycle layer (welcome, browse abandon, cart abandon, post-purchase, win-back, VIP, replenishment) is the highest-leverage opportunity in the entire stack." }
    ],
    quotes: [
      { text: "Bogey Boys offers cool styles and fun color ways - it's an alternative and a fashion-forward option, not just another country-club polo.", source: "r/golf community discussion" },
      { text: "The fabric on the seafoam polo is super high quality - it's the closest thing to vintage feel I've gotten new.", source: "r/golf review" },
      { text: "Premium feel and durability... but customer service is barebones, and that hurts when you need help.", source: "Thingtesting customer reviews" }
    ]
  },

  targets: [
    { metric: "Email + SMS Revenue Share", value: "30%+", context: "Industry-leading apparel benchmark for owned-channel attribution by month 6 (Klaviyo apparel cohort median: 22-28%)." },
    { metric: "Blended ROAS", value: "3.5-5x", context: "Full-funnel target across Meta, Google, and TikTok by month 4, after creative + audience iteration cycles." },
    { metric: "Repeat-Purchase Rate", value: "+25%", context: "Lift driven by post-purchase sequencing, replenishment flows, and VIP segment activation versus current baseline." },
    { metric: "List Growth", value: "+50K subs", context: "Net new email + SMS subscribers across 6 months via on-site capture, drop-tease incentives, and paid acquisition layer." }
  ],

  competitive: {
    summary: "The streetwear-golf category has four players that matter, plus a long tail. None of them sit cleanly in the music-meets-golf lane Bogey Boys was literally born in. The opportunity is to own that crossover at the e-comm engine layer - so when the next Macklemore press cycle hits, the system compounds rather than spikes.",
    competitors: [
      { name: "Malbon Golf - $40M+ ARR estimated", strength: "Cultural permeation: New Balance, Budweiser, Anderson .Paak collabs + Buckets logo recognition.", gap: "Crowded brand-as-celebrity playbook. Bogey Boys can win on heritage authenticity (vintage cardigans, tartans, real founder origin) versus Malbon's louder graphic-tee positioning - and on a tighter, more personality-led lifecycle stack." },
      { name: "Eastside Golf - Jordan Brand collab tier", strength: "Black culture-meets-golf positioning, Jordan Brand partnership, ABC docuseries momentum.", gap: "Different audience, but the lesson is identical: founder-story-driven brands win in this category. Bogey Boys' founder story is just as strong - it's not being amplified through the marketing stack at the same volume yet." },
      { name: "Metalwood Studio - LA-based community brand", strength: "'90s vintage + community + club repair model. Tight, loyal, repeat-heavy.", gap: "Smaller retail breadth, smaller paid media engine. Bogey Boys has a much bigger top-of-funnel (Macklemore + Adidas) - the gap is converting that funnel into Metalwood-grade community LTV." },
      { name: "Original Penguin / Devereux / Bad Birdie", strength: "Heritage shorthand and broad retail distribution at lower price points.", gap: "No founder story, no cultural cross-pollination, no drop hype. They compete on price + availability. Bogey Boys plays a fundamentally different game - which is why the e-comm engine has to be tuned to drop economics, not commodity sell-through." }
    ]
  },

  timelineHeading: "Engagement Roadmap",
  timelineSubheading: "A 6-month retainer phased from foundation through optimization. Months 1-2 stand the engine up. Months 3-4 turn it on at full volume. Months 5-6 squeeze the system - cohort by cohort, channel by channel.",
  timelineImageCaption: "6 Months / 4 Phases / 1 Always-On Engine",

  timeline: [
    {
      phase: "Foundation",
      week: "Weeks 1-4",
      date: "Month 1",
      status: "upcoming" as const,
      tasks: [
        "Audit + access: Shopify, Klaviyo, Meta, Google, GA4, ad accounts, attribution tools",
        "Customer + cohort baseline: pull purchase history, RFM segments, list health, current LTV",
        "Klaviyo build phase 1: welcome series, browse abandon, cart abandon, post-purchase flow",
        "Paid media account hygiene + tracking audit: pixels, CAPI, GTM, server-side events"
      ]
    },
    {
      phase: "Activation",
      week: "Weeks 5-8",
      date: "Month 2",
      status: "upcoming" as const,
      tasks: [
        "Launch Meta + Google + TikTok prospecting and retargeting at full budget allocation",
        "Klaviyo build phase 2: VIP, win-back, replenishment, drop-tease, SMS program standup",
        "Creative system: 40-60 ads/mo production cadence - statics, motion, UGC, creator-cut",
        "Creator pipeline: source, vet, and onboard the first 15-20 partners across golf + culture + music"
      ]
    },
    {
      phase: "Drop Architecture",
      week: "Weeks 9-16",
      date: "Months 3-4",
      status: "upcoming" as const,
      tasks: [
        "Drop-campaign template: pre-tease, launch, sustain, post-drop nurture - SOPed for every release",
        "First major drop run end-to-end: paid + organic + email/SMS + creator + landing page tuned together",
        "CRO sprint: PDP, cart, checkout - prioritized by analytics-driven friction map",
        "Mid-engagement strategic review: what's working, what's pivoting, what to double down on"
      ]
    },
    {
      phase: "Optimization & Scale",
      week: "Weeks 17-26",
      date: "Months 5-6",
      status: "upcoming" as const,
      tasks: [
        "Cohort + LTV reporting v2: Months 1-4 buyer cohorts compared, retention modeled, replenishment tuned",
        "Paid media efficiency pass: bidding, audience consolidation, creative refresh velocity, channel mix",
        "Creator program scale: top-performing partners moved into evergreen whitelist + retainer terms",
        "Quarter 7-12 strategic plan: defensible recommendation on multi-quarter renewal scoped against real data"
      ]
    }
  ],

  deliverables: [
    {
      category: "Email & SMS Lifecycle",
      icon: "mail",
      items: [
        { name: "Klaviyo Flow Build (10+)", quantity: "10+ flows", description: "Welcome series, browse abandon, cart abandon, checkout abandon, post-purchase, win-back, replenishment, VIP, drop-tease, sunset. Built, A/B tested, monitored monthly." },
        { name: "Email Campaigns", quantity: "8-12 / mo", description: "Drop launches, collab announcements, evergreen narrative, founder-led storytelling. Designed in-house using the Bogey Boys editorial DNA." },
        { name: "SMS Program", quantity: "Full standup", description: "Compliant opt-in, segmentation, drop-day broadcast, abandoned cart, VIP early-access. Attentive or Klaviyo SMS - whichever is best for the stack." },
        { name: "List Growth", quantity: "Always-on", description: "On-site capture, exit intent, drop-tease incentives, post-purchase referral - feeding the lifecycle engine continuously." }
      ]
    },
    {
      category: "Paid Media",
      icon: "target",
      items: [
        { name: "Meta (Facebook + Instagram)", quantity: "Always-on", description: "Full-funnel: prospecting, retargeting, dynamic catalog ads, drop-tease campaigns, creator whitelist. Daily optimization. Ad spend billed separately at 15% management fee." },
        { name: "Google (Search + Shopping + PMax)", quantity: "Always-on", description: "Brand defense, non-brand long-tail (vintage golf, golf cardigan, streetwear golf), Shopping feed optimization, Performance Max with audience signals. Ad spend billed separately at 15% management fee." },
        { name: "TikTok Ads", quantity: "Always-on", description: "Spark Ads, creator whitelist, native UGC-style creative, drop-launch boosts. Ad spend billed separately at 15% management fee." },
        { name: "Reporting + Attribution", quantity: "Weekly + Monthly", description: "Weekly performance pulses, monthly strategic deep-dives. Triple Whale or Northbeam attribution stack if not already in place." }
      ]
    },
    {
      category: "Creative Production",
      icon: "image",
      items: [
        { name: "Ad Creative Volume", quantity: "40-60 / mo", description: "Static, motion, UGC-style, creator-cut, platform-native edits. Built from existing Bogey Boys editorial assets + new content production." },
        { name: "Email Design System", quantity: "Templated", description: "Modular template library reflecting Bogey Boys' editorial photography and heritage typography. Faster builds, consistent brand." },
        { name: "Landing Page Production", quantity: "1-2 / mo", description: "Drop-specific landing pages, collab microsites, paid-media-optimized pages. Conversion-tested." },
        { name: "Drop Campaign Creative", quantity: "Per drop", description: "Full creative system per drop: launch, sustain, post-drop. Coordinated across paid, email, social, and on-site." }
      ]
    },
    {
      category: "Creator & Influencer",
      icon: "users",
      items: [
        { name: "Creator Pipeline", quantity: "25-50 partners", description: "Sourced, vetted, onboarded across three lanes: golf personalities, hip-hop / culture adjacent, streetwear/lifestyle. Macklemore halo built in." },
        { name: "Seeding Program", quantity: "Monthly", description: "Drop-aligned product seeding, organic content asks, UGC harvesting rights. The ammunition for the paid creative pipeline." },
        { name: "Paid Partnerships", quantity: "5-10 / mo", description: "Higher-tier paid creator placements - whitelisted, repurposed across channels, optimized for conversion not just awareness. Creator fees billed separately at 15% management fee." }
      ]
    },
    {
      category: "CRO & Analytics",
      icon: "bar-chart",
      items: [
        { name: "Site Optimization", quantity: "Continuous", description: "PDP, cart, checkout - friction-mapped and tested. Coordinated with Shopify dev partners as needed." },
        { name: "Cohort + LTV Reporting", quantity: "Monthly", description: "Acquisition cohorts tracked across retention, repeat-purchase, AOV growth, and channel attribution. The compass for the engagement." },
        { name: "Funnel Diagnostics", quantity: "Quarterly deep-dive", description: "Top-of-funnel through repeat purchase: where the system leaks, where to invest more, where to cut." }
      ]
    },
    {
      category: "Strategy & Account Management",
      icon: "compass",
      items: [
        { name: "Monthly Strategy Calls", quantity: "Monthly", description: "Calendar planning, drop sequencing, performance review, creative direction. With CCD's senior strategy team and Bogey Boys leadership." },
        { name: "Drop Campaign Architecture", quantity: "Per drop", description: "End-to-end drop playbook designed and run by CCD, coordinated with the Bogey Boys creative + ops team." },
        { name: "Quarterly Strategic Reviews", quantity: "Q3 + end-Q4", description: "Strategic re-set against business goals. KPI calibration. Multi-quarter plan." }
      ]
    }
  ],

  scope: {
    subheading: "Everything covered by the retainer - and where the boundaries are. Anything outside scope can be added as a quoted add-on.",
    included: [
      "Full Klaviyo lifecycle build (10+ flows) and ongoing campaign cadence (8-12 per month)",
      "SMS program standup and ongoing operation (compliant opt-in through drop broadcast)",
      "Always-on paid media management across Meta, Google (Search + Shopping + PMax), and TikTok",
      "Ad creative production at 40-60 assets per month (static, motion, UGC-style, creator-cut)",
      "Creator pipeline development (25-50 partners) and ongoing seeding + paid partnership management",
      "CRO program: site optimization, A/B testing, funnel diagnostics, monthly cohort + LTV reporting",
      "Drop campaign architecture and execution coordination across the full stack",
      "Monthly strategy calls + quarterly strategic reviews with CCD senior leadership"
    ],
    excluded: [
      "Ad spend across Meta, Google, and TikTok - billed directly to platforms, managed at 15%",
      "Creator partnership fees - billed direct to creators, managed at 15%",
      "Custom photo + video shoots, music video production (available as add-on - scoped and quoted separately)",
      "Shopify development beyond optimization tweaks - structural rebuilds, theme work, app integrations (available as add-on)",
      "Brand identity, packaging, or in-store visual merchandising (available as add-on)",
      "PR + earned media outreach (available as add-on or coordinated with existing PR partner)"
    ]
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      { name: "Email & SMS Lifecycle", description: "Klaviyo build + ongoing campaigns + SMS program. The compounding revenue layer.", price: 9500, recurring: true },
      { name: "Paid Media Management", description: "Meta + Google + TikTok. Management fee only - ad spend billed separately at 15% management.", price: 11000, recurring: true },
      { name: "Creative Production", description: "40-60 ads/mo, email design, landing pages, drop campaign creative.", price: 8500, recurring: true },
      { name: "Creator & Influencer", description: "Pipeline development, seeding, paid partnership management. Creator fees billed separately at 15% management.", price: 3500, recurring: true },
      { name: "CRO, Analytics & Strategy", description: "Site optimization, cohort + LTV reporting, monthly strategy calls, quarterly reviews.", price: 2500, recurring: true }
    ],
    subtotal: 35000,
    setupFee: {
      label: "Onboarding & Foundation (One-Time)",
      amount: 15000
    },
    discount: {
      label: "First-Engagement Partnership Discount",
      percentage: 0,
      amount: 0
    },
    mediaBudget: {
      label: "Recommended Monthly Ad Spend",
      amount: 60000,
      amountLabel: "$45K-$75K",
      note: "Recommended ad spend across Meta, Google, and TikTok - billed direct to platforms, managed at 15% rate. Range scales with drop calendar; lower in evergreen weeks, higher around drop launches."
    },
    total: 225000,
    paymentSchedule: [
      { milestone: "Month 1 (includes setup)", percentage: 22, amount: 50000, due: "On signature - kicks off Foundation phase" },
      { milestone: "Month 2", percentage: 16, amount: 35000, due: "Day 30" },
      { milestone: "Month 3", percentage: 16, amount: 35000, due: "Day 60" },
      { milestone: "Month 4", percentage: 16, amount: 35000, due: "Day 90" },
      { milestone: "Month 5", percentage: 16, amount: 35000, due: "Day 120" },
      { milestone: "Month 6", percentage: 14, amount: 35000, due: "Day 150" }
    ],
    paymentTerms: "Net 7 from invoice. ACH or wire preferred. Stripe link for first invoice provided below.",
    paymentLink: "https://buy.stripe.com/aFabJ01Hm82J46J93Ha7C0d"
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve & Pay",
      description: "Click Approve & Pay above to lock the engagement. Month 1 invoice ($50,000 - includes setup fee) is processed via Stripe and Foundation phase begins immediately."
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description: "We'll send a tight onboarding doc - current ad spend, list size, Shopify access, attribution stack, drop calendar, brand guidelines - so Week 1 starts with full context, not discovery calls."
    },
    {
      step: 3,
      title: "Kickoff & Access Setup",
      description: "60-minute kickoff with the Bogey Boys team and CCD's senior leads (strategy, paid, lifecycle, creative). Account access provisioned, Slack + project tooling stood up."
    },
    {
      step: 4,
      title: "First-30-Day Plan",
      description: "By end of week 1 you'll have a written 30-day Foundation plan: which flows ship in week 1, which in week 2, paid media account hygiene priorities, and the first creator outreach list."
    },
    {
      step: 5,
      title: "Drop into the Rhythm",
      description: "Weekly performance pulse, monthly strategy call, quarterly strategic review. Always-on Slack channel. The system is live, the dashboards are real-time, and the engine starts compounding."
    }
  ],

  cta: {
    headline: "Build the Engine That Lets the Brand Compound.",
    body: "Bogey Boys has the founder, the photography, the press, and the audience. What's missing is the always-on system underneath - and that's exactly what we've built for Malbon, Kappa, Foot Locker, and the brands you compete with. We'd love to plug it in and turn drop-day spikes into a flywheel that pays for itself by month 4.",
    email: "geoff@crowdcontroldigital.com"
  },

  images: {
    hero1: "/images/bogey-boys/hero1.jpg",
    hero2: "/images/bogey-boys/hero2.jpg",
    product: "/images/bogey-boys/product.jpg",
    editorial: "/images/bogey-boys/editorial.jpg",
    texture: "/images/bogey-boys/texture.jpg",
    brutalist: "/images/bogey-boys/brutalist.jpg",
    heroBg: "/images/bogey-boys/hero_bg.jpg",
    ogImage: "/images/bogey-boys/og-image.png",
    hero1Caption: "Bogey Boys 2026 Editorial",
    brutalistCaption: "Bogey Boys x Crowd Control Digital"
  },

  caseStudies: [
    { client: "MALBON GOLF", metric: "FULL-FUNNEL", description: "GROWTH STACK" },
    { client: "KAPPA", metric: "GLOBAL", description: "APPAREL CAMPAIGNS" },
    { client: "FOOT LOCKER", metric: "RETAIL", description: "DROP STRATEGY" },
    { client: "NBA", metric: "LEAGUE-WIDE", description: "CONTENT SYSTEMS" }
  ]
};
