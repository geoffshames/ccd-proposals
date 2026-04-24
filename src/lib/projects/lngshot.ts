import type { ProjectData } from "../project-context";

export const lngshot: ProjectData = {
  accentColor: "#00C4FF",

  client: {
    name: "LNGSHOT",
    logo: "",
    contactName: "James Roh",
    contactRole: "Transparent Arts",
    contactEmail: "j.roh@transparentarts.com",
    industry: "Music / K-Pop / Hip-Hop",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "THE LONG GAME",
    tagline:
      "LNGSHOT has 3M Instagram followers, 5.6M Spotify listeners, and a TikTok engine that breaks algorithms. The data infrastructure to own that audience? It doesn't exist yet. CCD builds it.",
    type: "US Market Activation + Fan Data Stack",
    startDate: "May 1, 2026",
    endDate: "October 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Crowd Control Digital builds the artist-sovereign infrastructure that More Vision + Transparent Arts don't have yet — and LNGSHOT's US breakthrough demands. That means a Laylo-powered fan data stack the LNGSHOT team actually owns (not Weverse, not TikTok's algorithm), a paid media engine across Meta + TikTok that converts organic momentum into measurable growth, a YouTube strategy that closes the 425K-subscriber gap before the window closes, and a new-tech fan experience layer that CCD designs, recommends, and executes as the group's dedicated digital partner.",
    objectives: [
      "Build the artist-sovereign fan data stack — Laylo email + SMS infrastructure the LNGSHOT team controls, replacing the personal-gmail Mailchimp with a proper CRM the group activates forever",
      "Launch US paid media across Meta + TikTok — converting LNGSHOT's organic virality into a measurable, data-driven growth engine with real fan acquisition economics",
      "Close the YouTube gap — 425K subscribers vs. 3M+ Instagram is leaving long-term catalog value on the table. CCD runs a dedicated growth and amplification program",
      "New-tech fan experiences — AI-powered fan personalization, interactive TikTok formats, and next-gen engagement tools positioned as CCD's exclusive innovation layer",
    ],
    subtitle:
      "Fan data sovereignty, US market activation, and new-tech experiences — built for the group that's already winning on vibes alone.",
    imageCaption: "US Market Activation + Fan Data Stack",
    stats: [
      {
        value: 25,
        suffix: "K+",
        label: "Fan Subscribers Target",
        description:
          "Artist-sovereign Laylo fan database built across email + SMS — no algorithm dependency, no Weverse paywall, no More Vision intermediary",
      },
      { value: 7, suffix: "M+", label: "Spotify Listeners Target" },
      { value: 3, label: "Core US Platforms" },
      { value: 6, label: "Month Retainer" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before writing a single deliverable, we audited LNGSHOT's entire digital footprint — website, socials, streaming, fan infrastructure, label stack, and competitive landscape. The picture is clear: massive organic momentum, zero owned infrastructure to capture it.",
    insights: [
      {
        label: "The Gmail Problem",
        finding:
          "lngshot4sho.com has a newsletter signup — but it's connected to a personal Gmail-linked Mailchimp account. For a group with 3M Instagram followers and 5.6M Spotify listeners, this is a toy-level setup. No automation, no segmentation, no CRM. Every fan who signs up goes into a black hole.",
        source: "lngshot4sho.com source audit",
      },
      {
        label: "Walled-Garden Fan Data",
        finding:
          "LNGSHOT runs their official fan community on Weverse — a platform owned by Weverse Company (a HYBE subsidiary) where LNGSHOT, as a More Vision indie label act, has no data access. Fan letters, community posts, membership perks: all confirmed active, all locked inside a third-party ecosystem. The team can see engagement but can't segment, export, or activate that audience independently.",
        source: "Weverse platform analysis / Instagram audit",
      },
      {
        label: "YouTube Significantly Underperforms",
        finding:
          "425K YouTube subscribers against 3.1M TikTok followers and 3M Instagram followers is a 7x gap. 'Moonwalkin'' has 4.3M MV views on a 425K-subscriber channel. The content exists — it just hasn't been amplified. This is recoverable and fast.",
        source: "YouTube / TikTok / Instagram cross-platform analysis",
      },
      {
        label: "Zero Pre-Save Email Capture on Debut",
        finding:
          "Shot Callers hit 100M streams in 59 days. Neither EP release used a Laylo or Linkfire pre-save flow with email capture. That means debut momentum — which produced 5.9M Spotify listeners in weeks — generated zero fan data. The audience spike happened, but no one caught it.",
        source: "Linkfire / Laylo audit — no LNGSHOT pages found",
      },
      {
        label: "US Infrastructure at Zero",
        finding:
          "The Transparent Arts partnership for international expansion was announced in early 2026. It's new. No US paid social advertising, no US creator seeding, no US landing pages. LNGSHOT is charting in Malaysia, New Zealand, Singapore, and Taiwan — the US is the one major market where infrastructure doesn't match the opportunity.",
        source: "Meta Ad Library audit / Billboard Transparent Arts reporting",
      },
    ],
    marketContext:
      "K-pop is now a top genre for 25% of American kids. 5th-gen groups are built to go global from Day 1 — but the ones winning in the US have owned fan infrastructure. Weverse built HYBE's moat. Laylo is how indie-label artists build theirs. LNGSHOT has Jay Park's hip-hop credibility that no SM or HYBE group can replicate. But credibility without infrastructure doesn't compound. The Transparent Arts window is open right now. CCD closes it.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "SHOTTIES skew young, international, and TikTok-native — drawn to LNGSHOT because they feel like hip-hop artists who happen to do K-pop, not the other way around.",
    demographics: "16–26 core, 18–22 peak engagement. International-first with a rapidly growing US base via TikTok discovery.",
    demographicCards: [
      { label: "Age Range", value: "16–26 core", detail: "18–22 peak spend + engagement" },
      { label: "Discovery Path", value: "TikTok-first", detail: "Algorithm → Spotify → Weverse funnel" },
      { label: "US Opportunity", value: "Underactivated", detail: "Charts in 6 markets, no US paid presence" },
      { label: "Cultural Lane", value: "Hip-hop crossover", detail: "Chris Brown / Bryson Tiller adjacent" },
    ],
    personas: [
      {
        name: "The TikTok Convert",
        ageRange: "16–21",
        description:
          "Found LNGSHOT through a For You page moment — probably 'Moonwalkin'' or a member freestyle clip. Doesn't identify as a K-pop fan first. Follows because they sound like hip-hop and happen to be Korean. High-intent for merch and streams.",
        traits: ["TikTok-Native", "Spotify Streamer", "Non-Kpop K-pop Fan", "Collab Curious"],
      },
      {
        name: "The Seasoned SHOTTIE",
        ageRange: "19–25",
        description:
          "Followed LNGSHOT since the Jay Park pre-debut teaser. Weverse-active, streams on multiple platforms, bought Shot Callers physical. The fandom name just dropped (SHOTTIES, April 2026) and they're ready to organize. Wants direct access — SMS and email drops would hit hard.",
        traits: ["Weverse Regular", "Physical Buyer", "Fan Project Adjacent", "Data Opt-In Ready"],
      },
      {
        name: "The US Hip-Hop Bridge",
        ageRange: "18–26",
        description:
          "Fan of US R&B and trap — Chris Brown, Bryson Tiller, JID. Landed on LNGSHOT through Jay Park's credibility or a US creator recommendation. Engages with music first, group identity second. The hardest to acquire and most valuable to convert.",
        traits: ["R&B-First", "Genre-Agnostic", "Creator-Influenced", "High-Value Convert"],
      },
    ],
    psychographics: [
      "Authenticity-premium — values artists who feel unmanufactured. The middle-finger pre-debut, the DIY Cargo website, the Jay Park CEO parody — LNGSHOT's 'we don't care about your rules' energy is the product",
      "Hip-hop cultural affinity over K-pop idol tradition — SHOTTIES don't want parasocial relationship theatre. They want music credibility and real moments",
      "Streetwear and hype culture overlap — the INSANE GARAGE collab sold via pre-order and generated significant TikTok traction. This audience buys drops",
      "TikTok-first discovery — viral moments (choreography, freestyles, member personalities) are the primary acquisition channel, not music show wins",
    ],
    painPoints: [
      "No direct line to the group — Weverse requires a platform account, fan letters feel distant. SMS or email from the LNGSHOT team directly would hit differently",
      "Merch drops sell out with zero warning or waitlist — fans miss drops and buy from resellers. A Laylo drop page solves this instantly",
      "YouTube feels like an afterthought — the music exists, the views aren't there. Fans want to support the channel but it doesn't signal investment",
      "US fans feel like secondary citizens — no US-specific content, no US tour dates, no US creator collaborations. The market is warm but unsupported",
    ],
    purchaseTriggers: [
      "Limited streetwear drops with urgency — the INSANE GARAGE collab proved this audience buys hype drops when the product is credible",
      "SMS/email exclusives — first access to merch, pre-save drops, and behind-the-scenes content gated behind opt-in drives both list building and purchase simultaneously",
      "US creator seeding — a US R&B or hip-hop creator endorsing LNGSHOT converts the credibility positioning into actual fan acquisition among new demographics",
      "Viral TikTok moments tied to commerce — a SHOTTIE-driven challenge or sound activation creates both awareness and conversion infrastructure simultaneously",
    ],
    platforms: [
      {
        name: "TikTok — 3.1M Followers",
        description:
          "Primary discovery and viral engine. 96.2M likes signals deep algorithmic reach. Organic content is already working — paid amplification and creator seeding would multiply the effect significantly.",
      },
      {
        name: "Instagram — 3M Followers",
        description:
          "Visual identity and press hub. Strong follower count, Reels underutilized vs. feed engagement. Ideal for paid conversion campaigns targeting warm audiences who discovered LNGSHOT via TikTok.",
      },
      {
        name: "Weverse",
        description:
          "Official fan community platform (Weverse.io/lngshot — independently verified). Fan letters, live content, and membership perks are active and high-engagement. Data is owned by Weverse Company, not the artist — LNGSHOT's team cannot segment, export, or reactivate this audience outside the platform.",
      },
      {
        name: "YouTube — 425K Subscribers",
        description:
          "Significantly underperforms vs. social following. 'Moonwalkin'' has 4.3M MV views on a 425K-sub channel — the content is there. Paid amplification and SEO optimization would close this gap quickly.",
      },
    ],
    quotes: [
      {
        text: "For a small company group, their debut left a big impression. They sound like K-pop but feel like hip-hop.",
        source: "r/LNGSHOT community",
      },
      {
        text: "They're literally doing acapella and impromptu singing with no autotune. They're the real deal.",
        source: "allkpop forums",
      },
      {
        text: "SHOT CALLERS sounds like a group confident in their identity instead of chasing current trends.",
        source: "K-pop Weekly Podcast / Substack",
      },
    ],
  },

  targets: [
    {
      metric: "Laylo Fan Subscribers",
      value: "25K+",
      context:
        "Build an artist-sovereign email + SMS fan database of 25,000+ SHOTTIES by Month 3 — capturing release drop traffic, merch buyers, and social opt-ins. The owned asset that compounds across every future release.",
    },
    {
      metric: "Spotify Monthly Listeners",
      value: "7M+",
      context:
        "Grow from 5.6M to 7M+ monthly listeners by Month 6 through paid streaming campaigns, creator seeding, and release momentum amplification. BOYNEXTDOOR benchmarks what a structured paid push delivers.",
    },
    {
      metric: "YouTube Subscriber Growth",
      value: "+150%",
      context:
        "Grow the YouTube channel from 425K toward 1M+ subscribers through paid amplification, SEO optimization, and content strategy. The 7x gap vs. Instagram represents recoverable long-term catalog value.",
    },
    {
      metric: "US Paid Media ROAS",
      value: "4×+",
      context:
        "Target 4x+ return on ad spend across Meta + TikTok — measured against Laylo subscriber cost, streaming lift, and merch conversion benchmarks from comparable 5th-gen K-pop US activations.",
    },
  ],

  competitive: {
    summary:
      "5th-gen K-pop's most-streamed groups all share one advantage: major label marketing infrastructure. HYBE, SM, and JYPE have platforms, dedicated US teams, and institutional paid media machines. LNGSHOT operating through More Vision doesn't have that — and shouldn't need it. CCD is the equalizer.",
    competitors: [
      {
        name: "BOYNEXTDOOR — 744M Spotify Streams",
        strength: "HYBE marketing machine, indie-idol aesthetic that resonates with Western Gen Z, dedicated US social team",
        gap: "BOYNEXTDOOR is a HYBE product wearing indie clothes. LNGSHOT's hip-hop lineage through Jay Park is genuinely credible in US Black music circles in a way no HYBE group can replicate — different cultural lane, different audience.",
      },
      {
        name: "RIIZE — 693M Spotify Streams",
        strength: "SM Entertainment global infrastructure, first global fan meeting tour 2025, Western producer collaborations",
        gap: "RIIZE is polished SM K-pop. LNGSHOT's raw identity and self-production credentials appeal to the audience that finds SM groups too manufactured. CCD builds the infrastructure without sacrificing the authenticity.",
      },
      {
        name: "ZEROBASEONE — 549M Spotify Streams",
        strength: "Built-in fanbase from Boys Planet survival show, sold-out North America world tour, established international infrastructure",
        gap: "ZB1's fanbase was TV-constructed; LNGSHOT's is organic TikTok momentum. The organic route is slower but more authentic — CCD adds paid infrastructure to accelerate what's already working naturally.",
      },
      {
        name: "CORTIS (HYBE) — 254M Spotify Streams",
        strength: "Anti-traditional K-pop positioning similar to LNGSHOT, HYBE's full marketing stack, creative freedom narrative",
        gap: "CORTIS is an anti-idol concept built by the world's largest K-pop company. LNGSHOT IS the indie version. More Vision's authentic hip-hop credibility can't be manufactured — CCD builds the digital infrastructure to make it competitive.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through US market activation — every phase designed to convert LNGSHOT's organic momentum into owned data and measurable growth.",
  timelineImageCaption: "6 Months / 4 Phases / 1 Mission",

  timeline: [
    {
      phase: "Foundation",
      week: "Weeks 1–4",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Laylo infrastructure build — fan database architecture, email + SMS capture flows, segmentation schema (by platform source, purchase behavior, geography), welcome sequences, and first drop page template",
        "Paid media architecture — Meta and TikTok ad account setup, pixel and CAPI tracking, conversion event configuration, and seed audience build from existing Instagram + TikTok engagement data",
        "YouTube channel audit — content performance analysis, SEO keyword mapping, thumbnail strategy, upload cadence recommendations, and subscriber growth baseline",
        "New-tech strategy brief — CCD's recommended tool stack for LNGSHOT fan experiences: AI personalization platforms, interactive TikTok formats, and priority implementation roadmap",
      ],
    },
    {
      phase: "Launch",
      week: "Weeks 5–10",
      date: "May–June 2026",
      status: "upcoming" as const,
      tasks: [
        "First Laylo drop live — release-tied email + SMS campaign converting Training Day momentum into subscriber captures. Target: 5,000 subscribers in the first drop window",
        "US paid media campaigns go live — Meta and TikTok fan acquisition targeting US R&B/hip-hop audiences and K-pop adjacent demographics. First creative testing sprint begins",
        "YouTube paid amplification launch — promoted MV campaigns and subscriber acquisition ads targeting K-pop and hip-hop audiences in US and English-speaking markets",
        "Merch drop integration — first Laylo-gated exclusive or early-access merch moment, tying opt-in incentive to an immediate purchase trigger for new subscribers",
      ],
    },
    {
      phase: "Scale",
      week: "Weeks 11–18",
      date: "July–August 2026",
      status: "upcoming" as const,
      tasks: [
        "US creator seeding program — identify and activate 10–15 US hip-hop, R&B, and K-pop adjacent creators for authentic LNGSHOT introduction content. Measure reach, click-through, and Laylo opt-in lift per creator",
        "Laylo lifecycle campaigns — ongoing email + SMS drops tied to release moments, merch announcements, and exclusive content. Target: 25,000 subscribers by end of Month 3",
        "New-tech fan experiences go live — first AI-powered or interactive campaign launches: personalized fan message activation, TikTok interactive challenge with Laylo integration, or AI-generated fan content drop",
        "Paid media optimization sprint — Week 8 data review drives creative refresh, audience expansion, and bid strategy updates across Meta + TikTok",
      ],
    },
    {
      phase: "Amplify + Optimize",
      week: "Weeks 19–26",
      date: "September–October 2026",
      status: "upcoming" as const,
      tasks: [
        "Full-funnel optimization — retargeting warm audiences, lookalike expansion from Laylo subscriber list, and cross-platform sequential messaging for US market penetration",
        "YouTube milestone push — subscriber growth campaign targeting 1M by end of engagement. Coordinate with new MV or content release for algorithmic momentum",
        "Quarterly strategy review — paid media performance audit, Laylo subscriber health report, YouTube growth analysis, and new-tech ROI review with More Vision + Transparent Arts",
        "6-month season report + 2027 plan — full engagement analysis, fan database delivery, and forward-looking strategy brief for the next release cycle and potential US touring infrastructure",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable fills a specific gap identified in the research — fan data sovereignty, US market penetration, YouTube growth, and new-tech differentiation.",

  deliverables: [
    {
      category: "Fan Data Stack",
      icon: "◆",
      items: [
        {
          name: "Laylo Infrastructure Build",
          quantity: "1 build",
          description:
            "Full Laylo implementation — fan database architecture, email + SMS capture flows, segmentation schema, automated welcome sequences, and drop page templates. The owned fan CRM that replaces the personal-gmail Mailchimp and lives with the LNGSHOT team permanently",
        },
        {
          name: "Release Drop Pages",
          quantity: "6 drops",
          description:
            "Laylo drop pages tied to each release moment, merch announcement, or exclusive content drop — designed to convert TikTok and Instagram traffic into owned fan database subscribers",
        },
        {
          name: "Email + SMS Lifecycle Campaigns",
          quantity: "12+ sends/mo",
          description:
            "Ongoing lifecycle campaigns across email and SMS — release hype, exclusive content previews, merch drop alerts, and fan milestone moments. All segmented by subscriber source, geography, and engagement history",
        },
        {
          name: "Fan Segmentation System",
          quantity: "1 system",
          description:
            "Full segmentation architecture within Laylo — separating US fans from international, TikTok converts from Weverse-natives, merch buyers from streamers-only — enabling precision targeting for every future campaign",
        },
      ],
    },
    {
      category: "US Paid Media",
      icon: "▶",
      items: [
        {
          name: "Meta Campaign Management",
          quantity: "6 months",
          description:
            "Instagram and Facebook paid campaigns driving Laylo fan acquisition, YouTube subscriber growth, and streaming lift — targeting US hip-hop/R&B audiences and K-pop crossover demographics. Ad spend billed to platforms at 15% management fee",
        },
        {
          name: "TikTok Campaign Management",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads amplifying LNGSHOT's best organic content into paid reach — fan acquisition funnels, merch drop promotion, and release moment amplification. TikTok is where LNGSHOT already wins; paid makes it compound",
        },
        {
          name: "Monthly Performance Reports",
          quantity: "6 reports",
          description:
            "Full-funnel paid media reporting — impressions, CPMs, click-through rates, Laylo subscriber cost, streaming lift attribution, and YouTube growth per dollar. Every month tells the story of what's working",
        },
      ],
    },
    {
      category: "YouTube Growth Program",
      icon: "◇",
      items: [
        {
          name: "Channel Audit + Strategy",
          quantity: "1 plan",
          description:
            "Deep audit of LNGSHOT's YouTube channel — content performance gaps, SEO keyword opportunities, thumbnail optimization, upload cadence recommendations, and a 6-month growth roadmap targeting 1M+ subscribers",
        },
        {
          name: "Paid YouTube Amplification",
          quantity: "6 months",
          description:
            "Promoted MV and performance video campaigns targeting K-pop and hip-hop audiences in US and English-speaking markets. Subscriber acquisition ads optimized weekly against cost-per-subscriber benchmarks",
        },
        {
          name: "SEO + Content Optimization",
          quantity: "Ongoing",
          description:
            "Title, description, tag, and thumbnail optimization for all existing and new uploads — ensuring every LNGSHOT video captures long-tail search traffic from US audiences discovering K-pop and hip-hop crossover content",
        },
      ],
    },
    {
      category: "New-Tech Fan Experiences",
      icon: "■",
      items: [
        {
          name: "New-Tech Stack Recommendation",
          quantity: "1 brief",
          description:
            "CCD's full recommendation for LNGSHOT's technology stack — AI fan personalization tools, interactive content platforms, next-gen engagement formats, and a prioritized implementation roadmap with cost and effort estimates",
        },
        {
          name: "Interactive Campaign Activations",
          quantity: "2 campaigns",
          description:
            "Two new-tech-powered fan experience campaigns — could include AI-personalized fan messages, TikTok interactive challenges with Laylo integration, or first-of-its-kind fan content formats. CCD designs, recommends, and executes",
        },
        {
          name: "Monthly Innovation Advisory",
          quantity: "6 sessions",
          description:
            "Monthly strategy session with More Vision and Transparent Arts on emerging fan tech, new platform features, and upcoming innovation opportunities — keeping LNGSHOT ahead of the 5th-gen K-pop marketing curve",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this engagement — and where the scope lines are drawn. Tight focus on the four highest-impact gaps identified in the research.",
    included: [
      "Full Laylo fan data infrastructure build — email + SMS capture, segmentation, automation, and drop page templates",
      "Ongoing Laylo campaign management — 12+ monthly sends across email and SMS, segmented by audience behavior and geography",
      "US paid media strategy and campaign management across Meta and TikTok — creative direction, setup, and ongoing optimization",
      "YouTube growth strategy, channel optimization (SEO, thumbnails, titles), and paid subscriber amplification",
      "New-tech stack recommendation brief and two interactive campaign activations during the engagement",
      "Monthly innovation advisory sessions with More Vision and Transparent Arts",
      "Monthly strategy calls and performance reporting throughout the 6-month engagement",
      "6-month season report and 2027 strategy brief delivered at close of engagement",
    ],
    excluded: [
      "Graphic design and visual content production — ad creative direction is included, but full design production is available as add-on (scoped and quoted separately)",
      "Social media management and daily content posting (available as add-on — scoped and quoted separately)",
      "Website redesign or e-commerce platform build (available as add-on — scoped and quoted separately)",
      "Tour support, live event activation, and on-site data capture (available as add-on — scoped and quoted separately)",
      "Ad spend — media budgets are billed directly to platforms. CCD's management is included in the monthly retainer",
      "Korean-language content creation and Korean market campaigns — this engagement focuses on US and English-speaking international activation",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Fan Data Stack (Laylo)",
        description:
          "Laylo infrastructure build, ongoing email + SMS campaign management, drop page builds, and fan segmentation — the artist-sovereign CRM the team actually owns",
        price: 1750,
        recurring: true,
      },
      {
        name: "US Paid Media Management",
        description:
          "Meta + TikTok campaign strategy, setup, creative direction, and optimization — ad spend billed separately to platforms at 15% management fee",
        price: 1750,
        recurring: true,
      },
      {
        name: "YouTube Growth Program",
        description:
          "Channel audit and strategy, paid amplification management, SEO + thumbnail optimization, and subscriber growth campaigns",
        price: 750,
        recurring: true,
      },
      {
        name: "New-Tech Fan Experiences",
        description:
          "Stack recommendation brief, two interactive campaign activations, and monthly innovation advisory with More Vision + Transparent Arts",
        price: 750,
        recurring: true,
      },
    ],
    subtotal: 5000,
    setupFee: {
      label: "Onboarding + Platform Build",
      amount: 2500,
    },
    mediaBudget: {
      label: "Recommended US Ad Spend",
      amount: 3000,
      note: "Recommended monthly ad spend across Meta + TikTok — billed directly to platforms. Minimum $3K/mo recommended; $5K+ for accelerated growth. Managed at 15% included in retainer.",
    },
    total: 32500,
    paymentSchedule: [
      { milestone: "Month 1 — May (includes setup fee)", percentage: 23, amount: 7500, due: "Upon approval" },
      { milestone: "Month 2 — June", percentage: 15.4, amount: 5000, due: "June 1, 2026" },
      { milestone: "Month 3 — July", percentage: 15.4, amount: 5000, due: "July 1, 2026" },
      { milestone: "Month 4 — August", percentage: 15.4, amount: 5000, due: "August 1, 2026" },
      { milestone: "Month 5 — September", percentage: 15.4, amount: 5000, due: "September 1, 2026" },
      { milestone: "Month 6 — October", percentage: 15.4, amount: 5000, due: "October 1, 2026" },
    ],
    discount: { label: "", percentage: 0, amount: 0 },
    paymentTerms: "7 days from invoice",
    paymentLink: "https://buy.stripe.com/4gM5kC4Ty4Qx7iVeo1a7C0c",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve & Sign",
      description:
        "Review the scope, ask any questions, and sign off. We send a formal agreement and invoice for Month 1 + the setup fee — Laylo build starts within 48 hours of payment.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering current ad account access, More Vision contacts, Weverse admin info, Laylo setup preferences, and any active merch or release timing for Month 1.",
    },
    {
      step: 3,
      title: "Laylo Infrastructure Live",
      description:
        "Full Laylo build complete within 2 weeks of kickoff — fan database live, first drop page designed, and email + SMS welcome sequence active. The LNGSHOT team owns the stack from Day 1.",
    },
    {
      step: 4,
      title: "Paid Media Campaigns Launch",
      description:
        "US Meta + TikTok campaigns go live by Week 4 — fan acquisition targeting US hip-hop and K-pop audiences, YouTube subscriber amplification, and first creative testing sprint underway.",
    },
    {
      step: 5,
      title: "New-Tech Brief Delivered",
      description:
        "CCD delivers the full innovation recommendation brief in Month 1 — prioritized tool stack, cost breakdown, and first interactive campaign concept. Month 2 is when the first new-tech activation goes live.",
    },
  ],

  cta: {
    headline: "LNGSHOT is already winning. Time to own it.",
    body: "The audience exists. The momentum is real. CCD builds the infrastructure to capture it, compound it, and make sure the LNGSHOT team — not Weverse, not TikTok's algorithm — owns the relationship with every SHOTTIE they've earned.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/lngshot/hero1.png",
    hero2: "/images/lngshot/hero2.png",
    product: "/images/lngshot/product.png",
    editorial: "/images/lngshot/editorial.png",
    texture: "/images/lngshot/texture.png",
    brutalist: "/images/lngshot/brutalist.png",
    heroBg: "/images/lngshot/hero-bg.jpg",
    hero1Caption: "US Market Activation + Fan Data Stack",
    brutalistCaption: "LNGSHOT × Crowd Control Digital",
    ogImage: "/images/lngshot/og-image.png",
  },
};
