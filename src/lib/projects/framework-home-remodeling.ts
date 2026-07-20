import type { ProjectData } from "@/lib/project-context";

export const frameworkHomeRemodeling: ProjectData = {
  accentColor: "#004FFF",

  client: {
    name: "Framework",
    logo: "/images/framework-home-remodeling/logo.png",
    contactName: "Framework Home Remodeling",
    contactRole: "Houston, TX",
    contactEmail: "",
    industry: "Exterior Home Remodeling",
  },

  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },

  project: {
    name: "The Trust Position",
    tagline:
      "A qualification-first paid media engine for Houston's exteriors market: $1,500/day across Meta and Reddit, optimized to booked in-home estimates, not clicks.",
    type: "Paid Media Management",
    startDate: "August 1, 2026",
    endDate: "October 31, 2026",
    duration: "90-Day Initial Flight",
    status: "Awaiting Approval",
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Framework has the hard part done: a GAF-certified lifetime roofing system, a 5.0 review profile, and a real service footprint across six Houston counties. What it does not have is presence where Houston homeowners actually scroll. Right now Framework runs zero paid social while Renewal by Andersen runs roughly 3,100 active Meta ads and Power Home Remodeling runs roughly 270 into the same zip codes. Meanwhile Houston's top local roofers are not on Meta at all. That is the opening: a local, credentialed operator taking the trust position on the two platforms where the nationals are loud and the locals are silent. This engagement stands up a qualification-first funnel built to book in-home estimates from homeowners who own aging roofs and are feeling the insurance squeeze, with every dollar graded on lead quality, not lead count.",
    subtitle:
      "Own the local trust position on Meta and Reddit, and let insurance economics do the selling.",
    imageCaption: "Paid Media Management",
    objectives: [
      "Claim the local trust position on Meta before another Houston roofer wakes up to the vacuum",
      "Build a qualification-first funnel (insurance-angle hooks, gated forms, estimate booking) that filters before it fills",
      "Turn Reddit's contractor-recommendation culture into a proprietary low-CPM lead channel no competitor is using",
      "Wire a lead-quality feedback loop from Framework's sales outcomes back into platform optimization, proving the cost-per-booked-estimate economics that justify scaling past $1,500/day",
    ],
    stats: [
      { value: 45, suffix: "K+", label: "Monthly ad spend managed across Meta and Reddit, optimized to booked in-home estimates" },
      { value: 12, suffix: "+", label: "New Ads Tested / Mo" },
      { value: 100, suffix: "+", label: "Booked Estimates / Mo Target" },
      { value: 6, label: "Counties Covered" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "We audited Framework's digital presence, tore down the live ad libraries of every major exteriors advertiser in the Houston market, and mapped the insurance and energy dynamics driving homeowner urgency in 2026. Three findings shaped this entire plan.",
    insights: [
      {
        label: "Dark On Paid Social",
        finding:
          "Framework runs zero active Meta ads today. Renewal by Andersen runs ~3,100, Power Home Remodeling ~270, and Window World of Houston ~190 into the same households. Framework's 5.0-rated, GAF-certified story is invisible at the exact moment national competitors are buying the market.",
        source: "Meta Ad Library audit, July 2026",
      },
      {
        label: "The Insurance Squeeze",
        finding:
          "Houston home insurance premiums jumped roughly 17% in 2026 to about $7,855 on average, the fifth straight year of increases. Carriers now penalize roof age at renewal and quietly shift roofs to actual-cash-value coverage. A new roof has become an insurance strategy, and homeowners staring at renewal letters are the highest-intent audience in the category.",
        source: "Insurify and Houston market reporting, 2026",
      },
      {
        label: "Local Trust Vacuum",
        finding:
          "Houston's biggest local roofers, including the market leader by review count, run zero Meta ads. The only loud voices on paid social are out-of-state window brands. A local operator with real credentials can take the trust position on Meta essentially uncontested.",
        source: "Meta Ad Library competitor teardown, July 2026",
      },
      {
        label: "Tax-Credit Messaging Died",
        finding:
          "The federal 25C energy-efficiency credit expired December 31, 2025. Competitors still leaning on tax-credit hooks are running expired math. The compliant, stronger play in 2026 is real energy-bill savings plus the insurance angle, both of which Framework's insulation and roofing systems actually deliver.",
        source: "IRS guidance following the One Big Beautiful Bill Act",
      },
      {
        label: "Reddit White Space",
        finding:
          "Reddit CPMs run $3 to $12, roughly 40 to 50 percent below Meta, and no Houston exteriors company advertises there. Houston's subreddits produce contractor-recommendation threads weekly. It is a high-trust, low-cost channel sitting completely unclaimed.",
        source: "Reddit Ads benchmarks and community analysis, 2026",
      },
    ],
    marketContext:
      "Hurricane season runs through November, insurance renewals land year-round, and July electric bills are peaking across the metro. Every seasonal force in Houston is currently pushing homeowners toward exactly what Framework sells. The question is only who they call, and right now the advertisers answering that question are not from Texas.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Owner-occupied Houston-metro households with aging exteriors and rising carrying costs. We are not chasing everyone with a roof; we are qualifying for the homeowners with a reason to move now.",
    demographics:
      "Homeowners 35 to 65 across Harris, Fort Bend, Montgomery, Brazoria, Galveston, and Waller counties, skewing 45+, in homes 15 or more years old.",
    demographicCards: [
      { label: "Age Range", value: "35-65", detail: "45-60 is the decision core" },
      { label: "Housing", value: "Owner-Occupied", detail: "Homes built before 2010" },
      { label: "Geography", value: "6-County Metro", detail: "Harris to Galveston coast" },
      { label: "Trigger State", value: "Rising Costs", detail: "Insurance renewals and summer utility bills" },
    ],
    personas: [
      {
        name: "The Renewal Shock",
        ageRange: "45-65",
        description:
          "Just opened an insurance renewal with a double-digit hike, a roof-age surcharge, or a quiet switch to actual-cash-value coverage. Their 15-plus-year-old roof went from fine to financial liability overnight. They need a credentialed contractor whose paperwork insurers respect.",
        traits: ["Insurance-Driven", "High Urgency", "Equity-Rich", "Documentation-Minded"],
      },
      {
        name: "The Energy Bill Casualty",
        ageRange: "35-55",
        description:
          "August electric bill north of $400 and an attic doing nothing to stop it. Researches obsessively, reads Reddit threads before trusting anyone, and responds to real math over hype. Insulation and windows are the entry point; the roof conversation follows.",
        traits: ["Cost-Cutter", "Heavy Researcher", "Reddit Lurker", "Comfort-Driven"],
      },
      {
        name: "The Storm Prepper",
        ageRange: "40-65",
        description:
          "Coastal-county homeowner who thinks in wind ratings and TWIA compliance. Wants WPI-8 certification handled correctly and a warranty that does not blink at hurricane-force winds. Buys credentials and proof, not discounts.",
        traits: ["Risk-Averse", "Coastal", "Compliance-Aware", "Warranty-Focused"],
      },
    ],
    psychographics: [
      "Trust is the entire purchase: they have all been burned or know someone who has been burned by a contractor",
      "They respond to proof (certifications, warranties, local reviews) over promotions and countdown timers",
      "Money pressure is real but reframed: they will spend on things that cut insurance and energy carrying costs",
      "They research before they call: review profiles, Reddit threads, and neighbor recommendations decide the shortlist",
    ],
    painPoints: [
      "Storm-chaser fatigue: every door-knock and postcard after a storm reads as a scam until proven otherwise",
      "Insurance whiplash: premiums up again, coverage quietly downgraded, roof age suddenly held against them",
      "Bid anxiety: wildly different quotes with no way to tell craftsmanship from a sales script",
      "Contractor ghosting: deposits taken, calls unreturned, jobs half-finished around the neighborhood",
    ],
    purchaseTriggers: [
      "An insurance renewal letter with a rate hike, roof-age surcharge, or ACV conversion",
      "A neighbor's visible roof or window replacement on the same street",
      "A brutal summer electric bill that makes the attic and windows impossible to ignore",
      "A named storm entering the Gulf forecast cone",
    ],
    platforms: [
      {
        name: "Facebook",
        description:
          "The primary decision surface for 45+ Houston homeowners. Community groups and neighborhood pages drive contractor word of mouth; feed and Reels carry the qualification offers.",
      },
      {
        name: "Instagram",
        description:
          "Before-and-after transformations and crew craftsmanship content. Where the 35-50 segment validates that a contractor's work matches the pitch.",
      },
      {
        name: "Reddit",
        description:
          "r/houston and neighborhood subreddits generate weekly who-do-I-trust contractor threads. High research intent, zero competing exteriors advertisers, CPMs 40 to 50 percent below Meta.",
      },
    ],
    quotes: [
      {
        text: "Every roofer who knocks after a storm is a scam until proven otherwise.",
        source: "r/houston contractor threads, paraphrased sentiment",
      },
      {
        text: "My insurer basically repriced my whole policy because the roof is 16 years old.",
        source: "Houston homeowner forums, paraphrased sentiment",
      },
      {
        text: "Who is a roofer here that actually shows up and does not ghost after the deposit?",
        source: "Recurring r/houston recommendation-thread pattern",
      },
    ],
  },

  targets: [
    {
      metric: "Blended Cost Per Qualified Lead",
      value: "<$85",
      context: "Qualified means passing the form gates: owner-occupied, service-area zip, project intent. Search benchmarks for roofing and windows run $200+ per lead.",
    },
    {
      metric: "Cost Per Booked Estimate",
      value: "<$200",
      context: "The north-star metric. Booked in-home estimates are what Framework's model monetizes, and what the platforms will be optimized toward.",
    },
    {
      metric: "Lead-To-Estimate Rate",
      value: "45%+",
      context: "Driven by qualification gates plus speed-to-lead. We throttle volume to match Framework's estimate capacity rather than flooding the calendar.",
    },
    {
      metric: "Booked Estimates / Month",
      value: "100+",
      context: "A deliberately capacity-aware target at $45.6K monthly spend. Quality and show-rate come before raw volume in every optimization decision.",
    },
  ],

  competitive: {
    summary:
      "On Meta in Houston, the loud advertisers are national window brands and the local roofers are silent. Nobody owns the local, credentialed, insurance-fluent trust position. That is the lane this plan takes.",
    competitors: [
      {
        name: "Renewal by Andersen: ~3,100 Active Meta Ads",
        strength:
          "The most sophisticated offer architecture in the category: BOGO windows, 18-month zero-interest financing, qualification-style ads, advertorials, sweepstakes, and quizzes running simultaneously.",
        gap: "Windows only, premium-price backlash in reviews, and zero roofing story. Their qualification playbook works; Framework can run it locally across a full exterior system they cannot match.",
      },
      {
        name: "Power Home Remodeling: ~270 Active Meta Ads",
        strength:
          "Relentless full-funnel testing (30-plus versions per creative), lifetime labor warranty messaging, and a slick project-tracking app as a differentiator.",
        gap: "An out-of-state machine selling the organization, not the crew. No Houston roots, no TWIA or WPI-8 fluency, no local review equity. Local proof beats national polish in a trust category.",
      },
      {
        name: "Window World of Houston: ~190 Active Meta Ads",
        strength:
          "Owns the storm-season angle locally: hurricane-rated glass, zero-percent financing, American-made positioning, heavy video output.",
        gap: "Budget positioning with a thin quality story. Framework's 5.0 reviews, GAF certification, and lifetime system outclass it everywhere except share of voice.",
      },
      {
        name: "Amstill Roofing: 0 Active Meta Ads",
        strength:
          "Houston's review king: 50 years operating and 1,600-plus Google reviews that dominate the search layer.",
        gap: "Completely absent from paid social. The discovery layer (Meta and Reddit) is where Framework can intercept homeowners before they ever type a search.",
      },
    ],
  },

  timelineHeading: "The 90-Day Flight Plan",
  timelineSubheading:
    "A 90-day flight from tracking foundation to scaled, quality-graded lead flow: build in weeks one and two, launch by mid-August, then optimize and scale through October.",
  timelineImageCaption: "90 Days / 4 Phases / 2 Platforms",
  timeline: [
    {
      phase: "Foundation",
      week: "Weeks 1-2",
      date: "Aug 1 - Aug 14",
      status: "upcoming",
      tasks: [
        "Meta Business Manager audit, pixel + Conversions API install, and Reddit Ads account + pixel setup",
        "Qualification funnel architecture: gated instant forms (owner-occupied, zip, roof age, timeline) wired to Framework's CRM with speed-to-lead alerts",
        "Creative Sprint 1: 12 launch ads built from the competitor teardown (insurance angle, energy math, storm readiness, crew craftsmanship)",
        "Landing alignment: estimate-booking flow QA and CRO recommendations on frameworkservices.com",
      ],
    },
    {
      phase: "Launch",
      week: "Weeks 3-4",
      date: "Aug 15 - Aug 31",
      status: "upcoming",
      tasks: [
        "Meta live: roofing-led qualification campaigns with windows and insulation as secondary lines, geo-tiered across the six-county footprint",
        "Reddit live: r/houston and neighborhood subreddit placements with trust-first creative built for the platform's tone",
        "Daily QA on lead quality, form-gate performance, and CAPI signal integrity through the first two weeks of delivery",
        "First optimization pass: kill underperforming hooks, shift budget to the winning angle per service line",
      ],
    },
    {
      phase: "Optimize",
      week: "Weeks 5-8",
      date: "Sep 1 - Sep 30",
      status: "upcoming",
      tasks: [
        "Lead-quality feedback loop live: estimate outcomes from Framework's sales team graded weekly and fed back into platform optimization",
        "Creative Sprint 2: iterate on winning hooks, add seasonal angles (fall roofing window, pre-winter insulation)",
        "Audience expansion: retargeting pools, lookalikes seeded from booked estimates, coastal TWIA-focused segments",
        "Budget reallocation by cost per booked estimate across platforms, services, and geo tiers",
      ],
    },
    {
      phase: "Scale + Read",
      week: "Weeks 9-13",
      date: "Oct 1 - Oct 31",
      status: "upcoming",
      tasks: [
        "Scale winning campaigns while holding quality gates; capacity-aware pacing against Framework's estimate calendar",
        "Creative Sprint 3: proof-stacking ads from jobs completed during the flight (reviews, before-and-afters, warranty stories)",
        "Full 90-day attribution readout: CPQL, cost per booked estimate, estimate-to-close economics by service line",
        "Renewal plan: scale scenarios past $1,500/day, commercial division test, and channel expansion recommendations",
      ],
    },
  ],

  deliverablesSubheading:
    "Everything required to run $1,500/day accountably: strategy, builds, creative, tracking, and reporting across both platforms.",
  deliverables: [
    {
      category: "Meta: Qualification Engine",
      icon: "meta",
      items: [
        {
          name: "Campaign Architecture + Management",
          quantity: "$1,000/day",
          description:
            "Roofing-led qualification campaigns with windows and insulation lines behind them. Gated instant forms and estimate-booking optimization, geo-tiered across all six counties, managed and optimized daily.",
        },
        {
          name: "Qualification Lead Forms",
          quantity: "Full build",
          description:
            "Conditional forms that filter before they fill: owner-occupied, service-area zip, roof age, project timeline. Volume is throttled to protect show-rate and estimator capacity.",
        },
        {
          name: "Retargeting + Lookalikes",
          quantity: "Ongoing",
          description:
            "Site visitors, form abandoners, and engagement pools recaptured; lookalikes seeded from booked estimates rather than raw leads.",
        },
        {
          name: "Conversions API + CRM Sync",
          quantity: "Full build",
          description:
            "Server-side tracking with offline conversion events, so the algorithm learns from booked and shown estimates, not just form fills.",
        },
      ],
    },
    {
      category: "Reddit: The Unclaimed Channel",
      icon: "reddit",
      items: [
        {
          name: "Community Campaign Management",
          quantity: "$500/day",
          description:
            "r/houston, neighborhood, and home-improvement subreddit placements at CPMs 40 to 50 percent below Meta, managed with platform-native tone.",
        },
        {
          name: "Trust-First Creative",
          quantity: "Platform-native",
          description:
            "Ads written like straight answers to the who-do-I-trust threads Houston Reddit produces weekly: credentials, process, warranty, and real pricing posture. No ad-speak.",
        },
        {
          name: "Reddit Pixel + Conversion Tracking",
          quantity: "Full build",
          description:
            "Full-funnel measurement so Reddit-sourced estimates are graded on the same cost-per-booked-estimate scorecard as Meta.",
        },
      ],
    },
    {
      category: "Creative Production",
      icon: "creative",
      items: [
        {
          name: "Ad Creative Sprints",
          quantity: "12+/mo",
          description:
            "Statics, motion, and video cutdowns produced in-house from Framework's job-site footage, reviews, and AI-assisted production. Hooks reverse-engineered from the competitor teardown.",
        },
        {
          name: "Angle Testing Framework",
          quantity: "4 angles",
          description:
            "Insurance squeeze, energy math, storm readiness, and craftsmanship proof, each tested per service line with a structured rotation, so budget follows evidence.",
        },
      ],
    },
    {
      category: "Measurement + Reporting",
      icon: "reporting",
      items: [
        {
          name: "Lead Quality Scorecard",
          quantity: "Weekly",
          description:
            "Every lead graded through to estimate outcome with Framework's sales team. CPQL, cost per booked estimate, and show-rate by campaign, angle, and geo.",
        },
        {
          name: "Reporting + Strategy Cadence",
          quantity: "Weekly + monthly",
          description:
            "Weekly performance reports, a monthly strategy call, and a live dashboard. The 90-day readout closes the flight with scale scenarios.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in the engagement, and where the boundaries are.",
    included: [
      "Full Meta and Reddit strategy, campaign builds, and daily management of $1,500/day in spend",
      "Qualification funnel architecture: gated lead forms, estimate-booking flow, CRM wiring, speed-to-lead alerts",
      "Ad creative production (12+ new ads monthly: statics, motion, video cutdowns from Framework footage and AI-assisted builds)",
      "Pixel, Conversions API, Reddit pixel, and offline conversion tracking setup",
      "Lead-quality feedback loop with weekly grading against estimate outcomes",
      "Weekly reporting, monthly strategy calls, and the full 90-day attribution readout",
      "Landing page CRO recommendations for the estimate-booking flow",
      "Competitor ad monitoring across the Houston exteriors market throughout the flight",
    ],
    excluded: [
      "Ad spend itself ($45,625/mo average, billed directly to Framework's card on each platform)",
      "Google Search and Local Services Ads management (available as add-on, scoped and quoted separately)",
      "Landing page design and development builds (recommendations included; builds available as add-on)",
      "Professional video and photo shoots (available as add-on; creative sprints run on existing and AI-assisted assets)",
      "SEO, content marketing, and email or SMS nurture programs (available as add-on)",
      "Commercial division campaigns (recommended as a phase-two conversation after the residential flight proves out)",
    ],
  },

  quote: {
    model: "retainer",
    currency: "USD",
    investmentSubheading:
      "Management fee only. Ad spend is funded by Framework and billed directly to the platforms at $1,000/day on Meta and $500/day on Reddit.",
    lineItems: [
      {
        name: "Paid Media Management: 15% of Spend",
        description:
          "Covers everything in scope: strategy, campaign builds, daily management, creative production, qualification funnel, tracking infrastructure, lead-quality loop, and reporting across Meta and Reddit. Calculated at 15% of the $45,625 average monthly spend.",
        price: 6844,
        recurring: true,
      },
    ],
    subtotal: 6844,
    discount: { label: "", percentage: 0, amount: 0 },
    mediaBudget: {
      label: "Managed Ad Spend",
      amount: 45625,
      amountLabel: "$45,625/mo avg",
      note: "$1,000/day Meta plus $500/day Reddit, funded by Framework and billed directly to the platforms. The 15% management fee scales with any spend changes we agree on together.",
    },
    total: 20532,
    totalLabel: "Committed Fee (90 Days)",
    paymentSchedule: [
      { milestone: "Month 1: Management Fee", percentage: 33, amount: 6844, due: "Upon approval" },
      { milestone: "Month 2: Management Fee", percentage: 33, amount: 6844, due: "September 1, 2026" },
      { milestone: "Month 3: Management Fee", percentage: 34, amount: 6844, due: "October 1, 2026" },
    ],
    paymentTerms:
      "The committed cost is the $6,844/mo management fee ($20,532 across the 90-day flight), which is 15% of the $45,625 average monthly ad spend. Ad spend is funded by Framework and billed directly to Meta and Reddit; if we adjust daily budgets together, the fee adjusts proportionally. Invoices due 7 days from issue.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve + Kickoff",
      description:
        "Hit Approve below to lock the flight, or reply to Geoff with questions. Kickoff call scheduled within 24 hours of approval.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering access grants: Meta Business Manager, domain and pixel, CRM, call tracking, Google Business Profile, review assets, financing partners, and brand files.",
    },
    {
      step: 3,
      title: "Tracking Foundation",
      description:
        "Pixel, Conversions API, Reddit pixel, form webhooks, and CRM stage sync installed and QA'd, so lead quality is measurable from the first dollar.",
    },
    {
      step: 4,
      title: "Creative Sprint 1",
      description:
        "We pull job-site photos, reviews, and warranty documentation from your team and build the 12-ad launch set across the four angles.",
    },
    {
      step: 5,
      title: "Launch Week",
      description:
        "Meta and Reddit live by August 14 with daily QA through the first two weeks of delivery. Lead flow starts hitting your CRM with alerts.",
    },
    {
      step: 6,
      title: "The Quality Loop",
      description:
        "Weekly lead grading with your estimators from week three onward. Budget follows booked estimates, and the 90-day readout sets the scale plan.",
    },
  ],

  cta: {
    headline: "The market is loud. The trust position is empty.",
    body:
      "Houston homeowners are getting squeezed by insurance and energy costs while out-of-state brands buy their attention. Framework has the credentials, the warranty, and the reviews to own this market's trust, and nobody local is even competing for it on paid social. Approve below to launch August 1, or reply to Geoff to talk through the plan.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/framework-home-remodeling/hero1.jpg",
    hero2: "/images/framework-home-remodeling/hero2.jpg",
    product: "/images/framework-home-remodeling/product.jpg",
    editorial: "/images/framework-home-remodeling/editorial.jpg",
    texture: "/images/framework-home-remodeling/texture.jpg",
    brutalist: "/images/framework-home-remodeling/brutalist.jpg",
    heroBg: "/images/framework-home-remodeling/hero-bg.jpg",
    ogImage: "/images/framework-home-remodeling/og-image.png",
    hero1Caption: "Paid Media Management: Meta + Reddit",
    brutalistCaption: "FRAMEWORK × Crowd Control Digital",
  },

  caseStudies: [
    { client: "MALBON GOLF", metric: "$5M+", description: "REVENUE DRIVEN" },
    { client: "KAPPA", metric: "10X", description: "ROAS" },
    { client: "FOOT LOCKER", metric: "-30%", description: "LOWER CPA" },
    { client: "OASIS WYNWOOD", metric: "+42%", description: "LOWER CPA" },
  ],
};
