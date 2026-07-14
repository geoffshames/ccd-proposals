export const championTeamwearReport = {
  issued: "July 14, 2026",
  preparedFor: "Champion Teamwear / Athletic Brands Alliance",
  preparedBy: "Crowd Control Digital",
  classification: "Confidential working document",

  executiveRead: {
    headline:
      "Champion Teamwear has more brand permission than its current customer experience knows how to convert.",
    body:
      "This is not a weak-brand problem. It is an equity-leakage problem. Champion brings recognition and heritage; the teamwear business adds broad product capability, customization, reps, and real value. But fragmented digital infrastructure, mixed fulfillment signals, and little youth-facing culture prevent those assets from compounding into preference.",
    decision:
      "Stabilize the sales layer now, then build one Teamwear operating system before the new site, catalog, content, and event programs harden around another temporary identity.",
  },

  facts: [
    {
      value: "2,286",
      label: "URLs in the public sitemap",
      detail: "All carry the same May 15, 2019 last-modified date.",
      tone: "risk",
    },
    {
      value: "3",
      label: "Marketing team members",
      detail: "Down from roughly 15, per the July 14 leadership call.",
      tone: "risk",
    },
    {
      value: "$30K",
      label: "Annual legacy catalog-tool cost",
      detail: "A clear candidate for replacement with reusable internal tooling.",
      tone: "opportunity",
    },
    {
      value: "DEC.",
      label: "First hard commercial milestone",
      detail: "Trade shows and events make brand and sales collateral urgent now.",
      tone: "opportunity",
    },
  ],

  diagnosis: [
    {
      dimension: "Masterbrand permission",
      score: 4.5,
      confidence: "High",
      read: "Champion supplies immediate recognition, heritage, and a credible performance vocabulary.",
    },
    {
      dimension: "Rep + service equity",
      score: 4.0,
      confidence: "Medium",
      read: "Direct user anecdotes repeatedly praise long-tenured reps, flexibility, and personal support.",
    },
    {
      dimension: "Value proposition",
      score: 4.0,
      confidence: "Medium",
      read: "Champion is repeatedly framed as a lower-cost alternative to Varsity and Rebel without feeling disposable.",
    },
    {
      dimension: "Product consistency",
      score: 2.5,
      confidence: "Low–medium",
      read: "Quality sentiment is polarized; sizing, color consistency, and replacement confidence require validation.",
    },
    {
      dimension: "Digital trust",
      score: 1.5,
      confidence: "High",
      read: "Duplicate storefronts, stale search signals, conflicting contact details, and legacy identities create avoidable doubt.",
    },
    {
      dimension: "Youth cultural pull",
      score: 1.5,
      confidence: "Medium",
      read: "Teamwear-specific relevance is thin. Owned social is small or dormant where Gen Alpha discovery happens.",
    },
  ],

  equityLeak: [
    {
      stage: "Permission",
      status: "Strong",
      detail: "Champion name, century-scale heritage, familiar C mark",
    },
    {
      stage: "Product",
      status: "Capable",
      detail: "Broad sport coverage, stock + custom, decoration, TeamStore",
    },
    {
      stage: "Experience",
      status: "Leaking",
      detail: "Too many journeys, domains, handoffs, claims, and legacy systems",
    },
    {
      stage: "Culture",
      status: "Underbuilt",
      detail: "Few athlete-led rituals, reveals, creators, or repeatable event moments",
    },
  ],

  digitalTruths: [
    {
      code: "D-01",
      title: "Search authority is split across a maze of public hosts.",
      finding:
        "Exact-brand and category searches surface root, us, shop, page, connect, customer, cc, ecommerce, support, and other mirrors. Several return HTTP 200 and self-canonicalize instead of consolidating authority.",
      implication:
        "The new Shopware build needs a migration and redirect strategy, not just a visual redesign.",
      evidence: "Public search results + live response checks, Jul. 14, 2026",
    },
    {
      code: "D-02",
      title: "The sitemap says the entire estate stopped in 2019.",
      finding:
        "The XML sitemap contains 2,286 URLs. Of those, 2,154 are product URLs. Every lastmod field is May 15, 2019, despite active 2025–2026 campaigns and products.",
      implication:
        "Freshness, crawl prioritization, and confidence in the underlying catalog are all being suppressed by a solvable technical signal.",
      evidence: "championteamwear.com/sitemap.xml",
    },
    {
      code: "D-03",
      title: "The public identity still reflects multiple former operators.",
      finding:
        "Champion pages still route customers to GTM help/blog properties, Unrivaled legal pages, It's Greek to Me procurement records, and multiple Champion Teamwear entities while the business transitions to ABA.",
      implication:
        "Brand architecture, claims, legal ownership, contact data, and redirects must be treated as one launch-critical workstream.",
      evidence: "Owned site, public procurement records, ABG release, internal working session",
    },
    {
      code: "D-04",
      title: "Three buying missions compete on almost every page.",
      finding:
        "Customers are asked to shop stock, request custom, call a rep, open a TeamStore, use Coach's Assistant, view a catalog, request a mockup, or request a quote. Decision guidance is limited.",
      implication:
        "Rebuild the journey around three explicit doors: buy now, design custom, or outfit/manage a team.",
      evidence: "Homepage and sport/category page review",
    },
  ],

  publicIdentity: [
    { label: "Brand face", value: "Champion Teamwear" },
    { label: "Legacy story", value: "Formerly GTM Sportswear" },
    { label: "Public legal residue", value: "Unrivaled / It's Greek to Me" },
    { label: "Operating future", value: "ABA / FSG America" },
  ],

  urlEstate: {
    total: 2286,
    product: 2154,
    other: 132,
    repeatedLastModified: 2286,
    lastModifiedDate: "May 15, 2019",
  },

  sentiment: {
    sampleNote:
      "Sentiment is directional, not statistically representative. Teamwear-specific evidence was coded separately from the much larger Champion retail conversation.",
    model: {
      consideration: "Champion recognition + accessible price + assortment",
      retention: "Rep quality + game-date certainty + fit/color continuity + recovery",
    },
    sourceTiers: [
      {
        tier: "A",
        label: "Direct use",
        sample: "5 unambiguous Reddit experiences",
        read: "4 positive · 1 negative",
        positive: 4,
        neutral: 0,
        negative: 1,
        confidence: "Best available organic signal",
      },
      {
        tier: "B",
        label: "Local review archive",
        sample: "14 customer texts",
        read: "6 positive · 8 negative",
        positive: 6,
        neutral: 0,
        negative: 8,
        confidence: "Third-party archive; identities not independently verified",
      },
      {
        tier: "C",
        label: "Complaint channel",
        sample: "3 BBB reviews",
        read: "0 positive · 3 negative · 1.0 / 5",
        positive: 0,
        neutral: 0,
        negative: 3,
        confidence: "Very small and structurally negative-skewed",
      },
      {
        tier: "D",
        label: "Review aggregator",
        sample: "23 accessible entries",
        read: "12 positive · 3 neutral · 8 negative · 3.48 / 5",
        positive: 12,
        neutral: 3,
        negative: 8,
        confidence: "Low-confidence theme finder; headline says 25",
      },
    ],
    themes: [
      {
        theme: "Rep relationship",
        direction: "Positive",
        evidence:
          "Long-tenured customers repeatedly name their rep, rather than the website, as the reason they stay. Negative experiences often begin when ownership changes or disappears.",
        action: "End the rep lottery: visible primary, named backup, response standard, and recovery owner.",
      },
      {
        theme: "Price / value",
        direction: "Positive",
        evidence:
          "Champion is framed as meaningfully less expensive than Varsity and Rebel, with enough breadth for budget-conscious programs.",
        action: "Own smart value without becoming the cheap option: transparent tiers, durable proof, reorder economics.",
      },
      {
        theme: "Product quality",
        direction: "Polarized",
        evidence:
          "Some buyers recommend Champion for years; others cite poor quality, sizing variance, or inconsistent repeat orders.",
        action: "Create a proof system: fit data, material standards, wash tests, batch consistency, and make-good policy.",
      },
      {
        theme: "Operational certainty",
        direction: "Negative",
        evidence:
          "The sharpest complaints center on updates, delivery timing, exchanges, samples, and getting the same item twice.",
        action: "Compete on game-date certainty: transparent milestones, alerts, ownership, and fill-in guarantees.",
      },
      {
        theme: "Athlete aspiration",
        direction: "Absent",
        evidence:
          "Direct conversation focuses on price and service, not style, status, reveal moments, or athlete desire.",
        action: "Build the missing demand side with athlete co-creation, reveals, creators, and event-native storytelling.",
      },
    ],
    voices: [
      {
        quote: "The price is good … and my rep is awesome.",
        source: "Reddit / r/Cheerleading",
        href: "https://www.reddit.com/r/Cheerleading/comments/1od69j6/cheer_uniform_help/",
        tone: "positive",
      },
      {
        quote: "Champion uniforms were crap, in our experience.",
        source: "Reddit / r/Cheerleading",
        href: "https://www.reddit.com/r/Cheerleading/comments/1od69j6/cheer_uniform_help/",
        tone: "negative",
      },
      {
        quote: "Our rep is amazing, and uniforms aren't overpriced.",
        source: "Reddit / r/Cheerleading",
        href: "https://www.reddit.com/r/Cheerleading/comments/1ji4m00/uniforms/",
        tone: "positive",
      },
      {
        quote: "I was not impressed with the Champion ones we had one year.",
        source: "Reddit / r/Cheerleading",
        href: "https://www.reddit.com/r/Cheerleading/comments/1e7gpy1/new_cheer_coach/",
        tone: "negative",
      },
    ],
  },

  social: [
    {
      channel: "Instagram",
      scale: "9.3K",
      activity: "~1.2 posts / week",
      read: "Real teams and cause stories materially outperform generic product posts.",
    },
    {
      channel: "TikTok",
      scale: "419",
      activity: "96 videos",
      read: "Underbuilt for a business whose future audience is 12–15 years old.",
    },
    {
      channel: "YouTube",
      scale: "368",
      activity: "Newest visible video ~3 years old",
      read: "Dormant; fit, design, reveal, and ordering education are unclaimed search assets.",
    },
    {
      channel: "Facebook",
      scale: "47.1K likes",
      activity: "17 talking about this",
      read: "Largest visible community, but weak current conversation signal.",
    },
  ],

  competitors: [
    {
      name: "Varsity Brands",
      faces: "Varsity Spirit + BSN Sports",
      breadth: 5.0,
      identity: 4.2,
      owns: "The closest thing to an end-to-end category operating system: culture, events, reps, team shops, and distribution.",
      gap: "Spirit authority and broad-team distribution live in different customer-facing brands.",
    },
    {
      name: "Rebel Athletic",
      faces: "Fashion-first specialist",
      breadth: 1.6,
      identity: 4.8,
      owns: "Gen Alpha fluency, couture expression, ambassador culture, drops, and athlete status.",
      gap: "Narrow category breadth and an account-manager handoff for the real transaction.",
    },
    {
      name: "Elite Sportswear",
      faces: "GK Elite + GK Cheer + Omni",
      breadth: 1.7,
      identity: 4.4,
      owns: "Gymnastics legitimacy, athlete icons, specialist fit, and a credible 3D design tool.",
      gap: "Cannot outfit the full school or club across field and court sports under one identity.",
    },
    {
      name: "Nike / adidas / UA Team",
      faces: "Branded team programs",
      breadth: 4.8,
      identity: 3.1,
      owns: "Performance legitimacy, familiar status badges, broad sport coverage, and dealer reach.",
      gap: "Fragmented portals, long or opaque custom journeys, and little proprietary spirit culture.",
    },
    {
      name: "Momentec",
      faces: "Augusta + Alleson + Russell + 11 more",
      breadth: 4.9,
      identity: 2.0,
      owns: "Operational breadth, near-shore manufacturing, sublimation, value tiers, and dealer infrastructure.",
      gap: "Portfolio complexity and limited athlete-facing culture.",
    },
    {
      name: "Champion Teamwear",
      faces: "Current → opportunity",
      breadth: 5.0,
      identity: 2.7,
      targetIdentity: 4.5,
      owns: "Rare intersection of broad product, service relationships, smart value, customization, and a globally recognized mark.",
      gap: "The identity, journey, and culture do not yet operate as one system.",
    },
  ],

  strategy: {
    whitespace: "Expressive team identity at multisport scale.",
    promise:
      "One coherent identity for game day, practice, travel, and fandom. It is designed with athletes, controlled by coaches, and delivered with game-date certainty.",
    architecture: [
      {
        lens: "Champion Culture",
        job: "Creates desire",
        proof: "Heritage, style codes, creators, street and sport relevance",
      },
      {
        lens: "Champion Teamwear",
        job: "Turns desire into belonging",
        proof: "Uniforms, customization, service, team systems, season certainty",
      },
    ],
    principles: [
      "Borrow the masterbrand's codes without inheriting its consumer proposition.",
      "Design for two customers at once: the adult buyer and the athlete influencer.",
      "Make operational certainty part of the brand, not back-office plumbing.",
      "Treat every uniform reveal as content and every event as a distribution channel.",
      "Build reusable systems for the next ABA brand from day one.",
    ],
  },

  audiences: [
    {
      role: "Economic buyer",
      people: "Coach · Athletic director · Club owner",
      asks: "Will it arrive, fit, reorder, and stay inside budget?",
      win: "Proof, transparent timelines, responsive reps, and total-program economics.",
    },
    {
      role: "Demand creator",
      people: "Athlete · Captain · Gen Alpha team member",
      asks: "Will I feel proud, current, and unmistakably part of this team?",
      win: "Co-creation, reveal culture, expressive design, and social proof.",
    },
    {
      role: "Risk absorber",
      people: "Parent · Booster · Fundraiser",
      asks: "Is this worth the money and easy to manage?",
      win: "Durability, clear sizing, team stores, payment ease, and no surprise reorders.",
    },
    {
      role: "Trust carrier",
      people: "Sales rep · Program specialist",
      asks: "Can the system help me deliver what I promised?",
      win: "Modular tools, live status, reusable templates, and a single source of truth.",
    },
  ],

  futureJourney: [
    "Get inspired",
    "Choose a sport",
    "Design in 3D",
    "See price + lead time",
    "Build roster",
    "Approve",
    "Launch team store",
    "Reorder without friction",
  ],

  roadmap: [
    {
      window: "Days 0–15",
      name: "Stabilize",
      operating: [
        "Ship interim catalog and sell-sheet design system",
        "Fix contact, legal, claim, and source-of-truth inconsistencies",
        "Lock December collateral requirements and owners",
      ],
      brand: [
        "Inventory ABG assets and usage rights",
        "Set interim visual and copy guardrails",
        "Define research sample and decision criteria",
      ],
    },
    {
      window: "Days 16–45",
      name: "Listen + decide",
      operating: [
        "Map every customer journey and backend handoff",
        "Prioritize Shopware migration and redirect requirements",
        "Prototype modular catalog-generation workflow",
      ],
      brand: [
        "Coach, rep, parent, and athlete interviews",
        "Teamwear-only social listening + masterbrand halo analysis",
        "Lock positioning, audience hierarchy, and message house",
      ],
    },
    {
      window: "Days 46–75",
      name: "Codify",
      operating: [
        "Create sell-sheet, catalog, social, email, and web templates",
        "Define content governance and approval flow",
        "Specify 3D-builder → personalized-catalog integration",
      ],
      brand: [
        "Build the Champion Teamwear brand bible",
        "Define photography, athlete, event, and creator systems",
        "Translate the system by sport without fragmenting it",
      ],
    },
    {
      window: "Days 76–90",
      name: "Prove",
      operating: [
        "Pilot one personalized sport brochure",
        "Deliver Shopware experience principles and launch checklist",
        "Stand up a shared performance and production dashboard",
      ],
      brand: [
        "Launch one athlete-led content franchise",
        "Design the December event activation kit",
        "Select the first traditional-sport beachhead",
      ],
    },
  ],

  engagementPaths: [
    {
      number: "01",
      title: "Stabilize the season",
      duration: "10 business days",
      fit: "When sales collateral is the fire",
      outcome: "A coherent interim system the sales team can use immediately.",
      includes: [
        "Catalog and sell-sheet design skin",
        "Merchandising and information architecture pass",
        "Claims, contact, and identity hygiene",
        "Reusable Figma templates",
        "December collateral checklist",
      ],
      recommended: false,
    },
    {
      number: "02",
      title: "Build the Teamwear system",
      duration: "6–8 weeks",
      fit: "When the brand bible must unlock every downstream build",
      outcome: "A research-backed brand foundation plus the tools to put it to work.",
      includes: [
        "Audience interviews + social listening",
        "Brand architecture, positioning, and message house",
        "Visual, verbal, photography, and content systems",
        "Catalog, sell-sheet, web, and social templates",
        "Shopware UX principles + migration priorities",
        "90-day measurement baseline",
      ],
      recommended: true,
    },
    {
      number: "03",
      title: "Embed + scale",
      duration: "90-day pilot",
      fit: "When a three-person team needs an operating partner",
      outcome: "The foundation, execution capacity, and first scalable internal tools.",
      includes: [
        "Everything in the foundation engagement",
        "Fractional strategy, creative, and channel pod",
        "Personalized catalog-builder MVP",
        "Always-on content + AI asset workflow",
        "December activation concept and production plan",
        "Traditional-sport go-to-market pilot",
      ],
      recommended: false,
    },
  ],

  decisionsNeeded: [
    "ABG-approved visual assets, usage rules, and tagline rights",
    "The 6–12 month 'dirty napkin' roadmap and December event calendar",
    "Product grid, current catalog files, sales feedback, and reorder data",
    "Access to site analytics, CRM/email data, and current social accounts",
    "3D builder owner, API surface, and IT counterpart for the catalog prototype",
    "A named final approver for brand, budget, and Shopware decisions",
  ],

  sources: [
    {
      id: "S01",
      label: "Champion Teamwear homepage",
      href: "https://championteamwear.com/",
      type: "Owned",
    },
    {
      id: "S02",
      label: "Champion Teamwear XML sitemap",
      href: "https://championteamwear.com/sitemap.xml",
      type: "Owned / technical",
    },
    {
      id: "S03",
      label: "Champion Teamwear contact page",
      href: "https://championteamwear.com/contact-us",
      type: "Owned",
    },
    {
      id: "S04",
      label: "Champion Teamwear legacy About page",
      href: "https://cc.championteamwear.com/about",
      type: "Owned / legacy",
    },
    {
      id: "S05",
      label: "Authentic's Champion acquisition + operating partners",
      href: "https://corporate.authentic.com/press-releases/authentic-acquires-champion-unveils-new-partners",
      type: "Primary corporate",
    },
    {
      id: "S06",
      label: "Reddit: Cheer Uniform Help",
      href: "https://www.reddit.com/r/Cheerleading/comments/1od69j6/cheer_uniform_help/",
      type: "Customer voice",
    },
    {
      id: "S07",
      label: "Reddit: Uniforms",
      href: "https://www.reddit.com/r/Cheerleading/comments/1ji4m00/uniforms/",
      type: "Customer voice",
    },
    {
      id: "S08",
      label: "BBB customer reviews",
      href: "https://www.bbb.org/us/ks/manhattan/profile/garments-printing-lettering/champion-teamwear-0714-18781/customer-reviews",
      type: "Complaint channel",
    },
    {
      id: "S09",
      label: "Loc8NearMe customer review archive",
      href: "https://www.loc8nearme.com/kansas/manhattan/champion-teamwear-formerly-gtm-sportswear/5019605/comments/",
      type: "Review archive",
    },
    {
      id: "S10",
      label: "WorthEPenny review aggregation",
      href: "https://championteamwear.worthepenny.com/",
      type: "Low-confidence aggregator",
    },
    {
      id: "S11",
      label: "Reddit: New Cheer Coach",
      href: "https://www.reddit.com/r/Cheerleading/comments/1e7gpy1/new_cheer_coach/",
      type: "Customer voice",
    },
    {
      id: "S12",
      label: "Fierce Board: Cheerleading uniforms",
      href: "https://fierceboard.com/threads/cheerleading-uniforms.90401/",
      type: "Customer voice / legacy",
    },
    {
      id: "S13",
      label: "Aspen Institute / State of Play 2025",
      href: "https://projectplay.org/state-of-play-2025/introduction",
      type: "Category context",
    },
    {
      id: "S14",
      label: "Varsity Spirit",
      href: "https://www.varsity.com/about/",
      type: "Competitor / primary",
    },
    {
      id: "S15",
      label: "BSN Sports + 2026 acquisitions",
      href: "https://www.varsitybrands.com/newsroom/press-release/bsn-sports-announces-acquisitions-of-sports-endeavors-and-lax-com/",
      type: "Competitor / primary",
    },
    {
      id: "S16",
      label: "Rebel Athletic cheer program",
      href: "https://rebelathleticcheer.com/pages/allstar-cheer",
      type: "Competitor / primary",
    },
    {
      id: "S17",
      label: "Elite Sportswear brand house",
      href: "https://www.elite-sportswear.com/our-brands/",
      type: "Competitor / primary",
    },
    {
      id: "S18",
      label: "Nike TEAM",
      href: "https://niketeam.nike.com/en/en_US/nts/",
      type: "Competitor / primary",
    },
    {
      id: "S19",
      label: "adidas TEAM",
      href: "https://www.adidas-team.com/usa/",
      type: "Competitor / primary",
    },
    {
      id: "S20",
      label: "Momentec Brands",
      href: "https://www.platinumequity.com/our-company/momentec/",
      type: "Competitor / primary",
    },
  ],
} as const;

export type ChampionTeamwearReport = typeof championTeamwearReport;
