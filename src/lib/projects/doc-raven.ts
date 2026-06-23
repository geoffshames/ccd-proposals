import type { ProjectData } from "../project-context";

export const docRaven: ProjectData = {
  accentColor: "#FD3737",

  client: {
    name: "Doc Raven",
    logo: "",
    contactName: "Dr. Troy Foskey Jr.",
    contactRole: "Artist & Owner, Doc Raven Media",
    contactEmail: "info@docraven.org",
    industry: "Music / Independent Outlaw Country",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "The Raven Nation Engine",
    tagline:
      "Turn the stream into a standing army. A growth engine that converts 780K passive listeners and a viral TikTok following into an owned, monetizable Raven Nation.",
    type: "Artist Growth — Paid Media, Fan Data & Content",
    startDate: "July 2026",
    endDate: "December 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Growth Plan",
    summary:
      "Doc Raven did the hard part alone. A razor-sharp outlaw brand, full ownership of every master and publishing right, ~780K Spotify monthly listeners, and 112K+ rabid TikTok fans — all built DIY, with no label and no machine behind it. The problem isn't the music or the audience. It's that the audience is invisible. Every stream, every like, every save evaporates the moment it happens — there is no owned email or SMS list, no paid fuel under the tracks that are already proving themselves, and no systematic content engine driving the next release. Crowd Control Digital will build the missing infrastructure: an owned fan-data layer powered by Laylo, a paid-media engine that amplifies proven songs across Meta, TikTok and YouTube, and a content + release-rollout system that keeps Raven Nation fed. We turn a passive audience into an owned army that compounds with every release.",
    objectives: [
      "Build the owned fan-data layer — capture email + SMS from the existing TikTok and streaming audience into a Laylo database Doc Raven owns outright, converting anonymous fans into a list that can be activated on demand",
      "Stand up a paid amplification engine — put real budget behind already-proven tracks (Outlaw Heaven, My Ride or Die, Dirty South Demons) across Meta, TikTok and YouTube to drive streams, follows and list growth efficiently",
      "Install a content + release-rollout system — a repeatable monthly engine of short-form edits, studio and behind-the-scenes footage, and lyric clips that feeds every channel on a consistent cadence",
      "Own the 'realest outlaw, NO A.I.' narrative — lean Doc Raven's authentic, anti-establishment, real-artist identity into authenticity-forward marketing that the audience already rallies behind",
    ],
    subtitle:
      "Fan-data infrastructure, paid amplification, and a content engine — built around one of independent outlaw country's most loyal and fastest-growing fanbases.",
    imageCaption: "Fan Data + Paid Media + Content Engine",
    stats: [
      {
        value: 4,
        label: "Paid Platforms",
        description:
          "Full-funnel paid amplification across Meta, TikTok, and YouTube — fueling proven tracks and capturing fans into an owned list",
      },
      { value: 6, label: "Laylo Flows" },
      { value: 12, suffix: "+", label: "Content Pieces/mo" },
      { value: 4, label: "Channels Managed" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited the full Doc Raven ecosystem — docraven.org, Bandcamp, the streaming footprint, the TikTok and Instagram presence, and the independent outlaw-country landscape he competes in. The findings are clear: this is one of the most authentic, self-built operations in independent country music. The opportunity isn't to fix what's broken — it's to add the infrastructure that multiplies what's already working.",
    insights: [
      {
        label: "The Core Opportunity",
        finding:
          "~780K monthly Spotify listeners and 112K+ TikTok followers — with no owned email or SMS capture anywhere. No newsletter, no SMS keyword, no Laylo, no fan CRM on docraven.org or at any touchpoint. After the stream or the like, every fan is a ghost. The audience exists; it just isn't owned.",
        source: "docraven.org audit / streaming + social analysis",
      },
      {
        label: "Proven, Unfueled Tracks",
        finding:
          "Songs like 'Outlaw Heaven,' 'My Ride or Die,' and 'Dirty South Demons' have already proven they connect organically — yet zero paid budget sits behind them. Tracks that win on their own are the cheapest, safest paid media a catalog can run, and right now that fuel line is empty.",
        source: "Catalog + paid-media footprint review",
      },
      {
        label: "Total Ownership = Total Upside",
        finding:
          "Doc Raven owns 100% of his masters and publishing through Doc Raven Media and Raven-Wolf Studios. Every dollar of streaming, merch, and sync flows back to him. That makes him the rare artist where investing in audience and paid amplification compounds entirely in his favor — no label split, no recoupment.",
        source: "Doc Raven Media / ownership structure",
      },
      {
        label: "Inconsistent Content Engine",
        finding:
          "Content and social are self-run and sporadic — no systematic rollout cadence, no repeatable short-form engine tied to releases. The viral moments happen by instinct, not by system, leaving reach and list-growth on the table between drops.",
        source: "Social content cadence audit",
      },
      {
        label: "The A.I.-Slop Wedge",
        finding:
          "The genre is booming but muddied by A.I.-generated 'country' that fans can't always tell from the real thing. Doc Raven's loud 'NO A.I. / real artist' identity is a rare, ownable wedge — authenticity is the exact thing this audience is hungry for and suspicious about.",
        source: "Genre landscape + audience sentiment",
      },
    ],
    marketContext:
      "Independent outlaw country is having its moment — DIY artists are outdrawing Nashville, and fans are actively rejecting the polished, the corporate, and the artificial. But the lane is crowded and A.I.-muddied, and the artists who win the next 24 months won't be the ones with the most streams — they'll be the ones who convert virality into an owned, activatable fanbase before the moment passes.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Doc Raven speaks to rural and working-class America — military and veteran communities, faith-and-grit Southerners, and a fast-growing wave of TikTok-native young listeners who are done with fake, corporate, A.I.-smoothed country.",
    demographics:
      "Rural and working-class Americans across the South and beyond, skewing male, with a broad age span anchored by a 35–54 core and a rapidly growing 18–34 TikTok-native segment. Strong military and veteran representation (Hinesville is a Fort Stewart town).",
    demographicCards: [
      { label: "Core Age", value: "35–54", detail: "Plus a fast-growing 18–34 TikTok-native wave" },
      { label: "Geography", value: "Rural South", detail: "Working-class America, military towns" },
      { label: "Skew", value: "Male-leaning", detail: "Broad, family + community-driven" },
      { label: "Audience Now", value: "780K + 112K", detail: "Monthly listeners + TikTok followers" },
    ],
    personas: [
      {
        name: "The Raven Nation Day One",
        ageRange: "30–55",
        description:
          "Working-class, faith-and-grit Southerners who found Doc Raven and never looked back. They feel seen by songs about addiction, redemption, and rebellion — and they'd buy merch and ride for him if there were a direct way to.",
        traits: ["Loyal Superfan", "Merch Buyer", "Bandcamp Supporter", "Word-of-Mouth"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "18–34",
        description:
          "Found Doc Raven on a viral clip and followed because it hit different — raw, real, not Nashville. They're high-engagement but completely uncaptured: a like today, a ghost tomorrow unless we give them a reason to opt in.",
        traits: ["Short-Form Native", "High Engagement", "Shares Clips", "Uncaptured"],
      },
      {
        name: "The Anti-Nashville Outlaw Fan",
        ageRange: "25–54",
        description:
          "Listens across the whole DIY outlaw lane — Cody Jinks, Treaty Oak Revival, Colby Acuff. Actively rejects polished, corporate, and A.I. 'country,' and rallies around artists who are unmistakably real. Doc Raven's 'NO A.I.' stance is exactly their flag.",
        traits: ["Genre Loyalist", "Anti-Corporate", "Authenticity-First", "Playlist Adder"],
      },
    ],
    psychographics: [
      "Authenticity over polish — they can smell manufactured, and they hate it",
      "Faith meets grit — life lived between the church pew and the dive bar",
      "Loyalty to 'real' artists who are unapologetic and self-made",
      "Deep suspicion of corporate, mainstream, and A.I.-generated music",
    ],
    painPoints: [
      "Mainstream country feels fake and over-produced",
      "Can't always tell a real artist from A.I. slop",
      "Few direct, meaningful ways to support the indie artists they love",
      "The artists they discover on TikTok disappear from their feed days later",
    ],
    purchaseTriggers: [
      "Raw authenticity paired with an undeniable hook",
      "The underdog, fully-DIY, owns-his-masters story",
      "Faith-meets-grit lyricism that mirrors their own lives",
      "Direct support — merch drops, Bandcamp, and exclusive access they can act on",
    ],
    platforms: [
      { name: "TikTok (@docraven)", description: "Primary discovery engine — 112.5K followers, 674K+ likes. Where new fans find Doc Raven and where short-form content drives the top of the funnel." },
      { name: "Spotify / Apple Music", description: "The streaming home base — ~780K monthly listeners and the catalog that paid media will amplify and convert into list signups." },
      { name: "YouTube", description: "Music videos and full songs — long-form home for the catalog and a key paid-amplification surface for proven tracks." },
      { name: "Facebook + Bandcamp", description: "Facebook anchors the older core and community; Bandcamp (docraven.bandcamp.com) is where superfans buy music and merch directly." },
    ],
    quotes: [
      { text: "This is real outlaw country, not the Nashville stuff.", source: "Fan sentiment — social comments" },
      { text: "Finally a real artist. NO AI, just truth.", source: "Raven Nation — TikTok / community" },
      { text: "Diesel-soaked hymns for the unchurched — that's exactly it.", source: "Brand positioning, echoed by fans" },
    ],
  },

  targets: [
    {
      metric: "Owned Email + SMS List",
      value: "0 → 25K",
      context: "Build an owned Laylo database from scratch in 6 months by converting TikTok and streaming traffic — directional target, not a guarantee.",
    },
    {
      metric: "Spotify Monthly Listeners",
      value: "780K → 1.5M",
      context: "Roughly double monthly listeners by putting paid fuel behind already-proven tracks. Directional ambition grounded in current organic momentum.",
    },
    {
      metric: "TikTok Followers",
      value: "112K → 250K",
      context: "Compound the existing viral engine with a consistent content cadence and paid support. Directional, dependent on creative velocity.",
    },
    {
      metric: "Paid Efficiency",
      value: "Benchmark CPM / cost-per-view",
      context: "Establish and beat baseline CPM and cost-per-view efficiency across Meta, TikTok, and YouTube within the first 60 days of spend.",
    },
  ],

  competitive: {
    summary:
      "The independent outlaw lane is booming but crowded — and increasingly muddied by A.I.-generated 'country.' The artists who win convert virality into an owned fanbase. Doc Raven has the brand and the traction; what he's missing is the owned audience, paid engine, and content system his lane-mates are starting to build.",
    competitors: [
      {
        name: "Cody Jinks — 3.5M Monthly Listeners",
        strength:
          "The independent north star — built a massive, fiercely loyal fanbase with no major label, proving the fully-owned outlaw model works at scale.",
        gap:
          "Years of compounding gave Jinks an owned-audience and touring machine. Doc Raven can leapfrog the slow build by installing the fan-data + paid layer now, while his momentum is fresh.",
      },
      {
        name: "Treaty Oak Revival — 9.2M Monthly Listeners",
        strength:
          "DIY Texas outlaw/rock with a young, rabid base and explosive streaming growth — a blueprint for converting raw energy into scale.",
        gap:
          "Their growth rode organic virality. Doc Raven's similar outlaw-meets-rock edge is unfueled by paid and uncaptured into a list — the exact gap CCD closes to compound his reach instead of leaking it.",
      },
      {
        name: "Colby Acuff — 1M Monthly Listeners",
        strength:
          "Indie-ethos traditionalist with credibility and a steady, authenticity-first fan following in the same lane.",
        gap:
          "Comparable listener scale to Doc Raven, but neither has a systematic owned-audience engine. First mover to build the Laylo + paid + content stack wins the lane's loyalty war.",
      },
      {
        name: "Trey Pendley — Emerging Outlaw + Rock",
        strength:
          "Rising lane-mate who broke through on raw, relatable storytelling ('Daddy's Son') — proof the appetite for new, real outlaw voices is wide open.",
        gap:
          "Still early in building infrastructure. Doc Raven already has the bigger audience and full ownership — getting the owned-data and paid engine live first turns that lead into a durable moat.",
      },
    ],
  },

  timelineHeading: "The Roadmap",
  timelineSubheading:
    "A focused 6-month build — from infrastructure and audit, through paid amplification and list-building, into a compounding always-on engine.",
  timelineImageCaption: "6 Months / 4 Phases / 1 Owned Army",
  timeline: [
    {
      phase: "Foundation & Fan-Data Build",
      week: "Month 1",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Full audit of streaming, social, and catalog + onboarding questionnaire",
        "Stand up Laylo — email/SMS capture across docraven.org, link-in-bio, and key touchpoints",
        "Pixel + tracking install across Meta, TikTok, and YouTube",
        "Define Raven Nation segmentation and the 'NO A.I.' brand voice guide",
      ],
    },
    {
      phase: "Paid Engine & Content System Launch",
      week: "Month 2",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch paid campaigns behind proven tracks across Meta, TikTok, YouTube",
        "Build the monthly content engine — short-form edits, studio/BTS, lyric clips",
        "Deploy first Laylo capture flows and welcome sequence",
        "Establish baseline CPM / cost-per-view efficiency benchmarks",
      ],
    },
    {
      phase: "Scale & Optimize",
      week: "Months 3–4",
      date: "Sep – Oct 2026",
      status: "upcoming" as const,
      tasks: [
        "Scale winning ad sets, kill losers, expand audiences and creative",
        "Grow the owned list with data-gated drops and exclusives",
        "Tighten release-rollout cadence around new music",
        "Monthly reporting on list growth, listeners, follows, and paid efficiency",
      ],
    },
    {
      phase: "Always-On Growth Engine",
      week: "Months 5–6",
      date: "Nov – Dec 2026",
      status: "upcoming" as const,
      ongoing: true,
      tasks: [
        "Run the compounding engine: paid + content + lifecycle in lockstep",
        "Activate the owned list for releases, merch, and direct support",
        "Refine segmentation and lifecycle flows from performance data",
        "End-of-engagement review + roadmap for the next phase of Raven Nation",
      ],
    },
  ],

  deliverablesSubheading:
    "The full growth stack — fan-data infrastructure, paid amplification, content, and channel management, run as one engine.",
  deliverables: [
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Full-Funnel Campaign Management",
          quantity: "Meta · TikTok · YouTube",
          description:
            "Strategy, build, and ongoing optimization of paid campaigns amplifying proven tracks to drive streams, follows, and list growth. Ad spend billed separately at a 15% management fee.",
        },
        {
          name: "Ad Sets & Audiences",
          quantity: "12+ active",
          description:
            "Layered targeting — lookalikes off the growing fan list, interest stacks across the outlaw lane, and retargeting pools that get smarter as the audience compounds.",
        },
        {
          name: "Paid Creative Variations",
          quantity: "Ongoing / mo",
          description:
            "A steady rotation of ad creative cut from the content engine — hook-first edits tuned per platform and refreshed as performance data comes in.",
        },
      ],
    },
    {
      category: "Fan Data (Laylo)",
      icon: "◆",
      items: [
        {
          name: "Laylo Email + SMS Build",
          quantity: "Owned database",
          description:
            "Stand up Laylo from scratch — the owned fan-data layer that turns anonymous TikTok and streaming fans into an email/SMS list Doc Raven controls outright.",
        },
        {
          name: "Capture & Lifecycle Flows",
          quantity: "6 flows",
          description:
            "Welcome series, release-day blasts, drop/exclusive triggers, and re-engagement sequences — automated flows that activate the list on every release.",
        },
        {
          name: "Audience Segmentation",
          quantity: "Superfan → casual",
          description:
            "Segment Raven Nation by engagement and behavior so messaging hits superfans, recent discoverers, and lapsed fans differently.",
        },
      ],
    },
    {
      category: "Content",
      icon: "●",
      items: [
        {
          name: "Short-Form Edits",
          quantity: "8+ / mo",
          description:
            "Hook-first vertical edits built for TikTok, Reels, and Shorts — the top-of-funnel fuel that drives discovery and feeds paid.",
        },
        {
          name: "Studio & Behind-the-Scenes",
          quantity: "Monthly",
          description:
            "Raven-Wolf Studios sessions, road footage, and real-moment captures that deepen the authentic, anti-A.I. brand story.",
        },
        {
          name: "Lyric & Release Clips",
          quantity: "Per release",
          description:
            "Lyric clips and rollout assets timed to each release so every drop lands with a coordinated content push.",
        },
      ],
    },
    {
      category: "Social Management",
      icon: "■",
      items: [
        {
          name: "Channel Cadence",
          quantity: "4 channels",
          description:
            "Consistent posting and scheduling across TikTok, Instagram, YouTube, and Facebook — turning sporadic posting into a reliable engine.",
        },
        {
          name: "Community & Raven Nation Engagement",
          quantity: "Ongoing",
          description:
            "Active community management — replies, comment seeding, and superfan engagement that keeps Raven Nation loud and growing.",
        },
        {
          name: "Monthly Reporting",
          quantity: "1 / mo",
          description:
            "A clear monthly report on list growth, monthly listeners, follower growth, and paid efficiency — tied back to the targets above.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this growth retainer — and where the boundaries are.",
    included: [
      "Paid media strategy, build, and optimization across Meta, TikTok, and YouTube",
      "Laylo email/SMS setup, capture flows, lifecycle automation, and segmentation",
      "Monthly content production — short-form edits, studio/BTS, and lyric/release clips",
      "Social channel management and community engagement across 4 channels",
      "Pixel/tracking install and a measurement framework across all platforms",
      "Release-rollout planning and coordination around new music",
      "Monthly performance reporting against list, listener, follower, and efficiency targets",
      "Ongoing strategic direction and an always-on optimization cadence",
    ],
    excluded: [
      "Ad spend and any creator/influencer fees (billed separately at a 15% management rate)",
      "Music recording, production, mixing, or mastering (handled in-house at Raven-Wolf Studios)",
      "Full music video production (available as an add-on — scoped and quoted separately)",
      "Website design/rebuild beyond capture integration (available as an add-on)",
      "Publicity, radio, and editorial playlist pitching (available as an add-on)",
      "Merch design and fulfillment logistics (available as an add-on)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Paid Media Management",
        description:
          "Strategy, build, optimization, and reporting across Meta, TikTok, and YouTube — amplifying proven tracks for streams, follows, and list growth. Ad spend billed separately at a 15% management fee.",
        price: 5000,
        recurring: true,
        priceLabel: "Included",
      },
      {
        name: "Fan Data — Laylo Email & SMS",
        description:
          "Owned database build, capture + lifecycle flows, and Raven Nation segmentation that turns anonymous fans into an activatable, owned list.",
        price: 5000,
        recurring: true,
        priceLabel: "Included",
      },
      {
        name: "Content Engine",
        description:
          "12+ pieces per month — short-form edits, studio/behind-the-scenes, and lyric/release clips that feed organic and paid alike.",
        price: 5000,
        recurring: true,
        priceLabel: "Included",
      },
      {
        name: "Social Management & Reporting",
        description:
          "Channel cadence across 4 platforms, community/Raven Nation engagement, and monthly performance reporting against the targets.",
        price: 5000,
        recurring: true,
        priceLabel: "Included",
      },
    ],
    subtotal: 5000,
    setupFee: {
      label: "Setup & Onboarding (one-time, Month 1)",
      amount: 2500,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Ad Spend",
      amount: 3000,
      amountLabel: "$2,000–$4,000/mo",
      note:
        "Recommended monthly ad spend across Meta, TikTok, and YouTube — billed directly to the platforms, plus a 15% management fee. Separate from the management retainer above and scalable to results.",
    },
    total: 32500,
    paymentSchedule: [
      {
        milestone: "Month 1 (incl. $2,500 setup)",
        percentage: 23.08,
        amount: 7500,
        due: "Upon approval — July 2026",
      },
      {
        milestone: "Month 2",
        percentage: 15.38,
        amount: 5000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 15.38,
        amount: 5000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 4",
        percentage: 15.38,
        amount: 5000,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 5",
        percentage: 15.38,
        amount: 5000,
        due: "November 1, 2026",
      },
      {
        milestone: "Month 6",
        percentage: 15.40,
        amount: 5000,
        due: "December 1, 2026",
      },
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "#approve",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve the Proposal",
      description:
        "Hit approve to lock in the engagement. That notifies the CCD team and kicks off onboarding for a July 2026 start.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "We'll send a short questionnaire to capture access, current tools, and priorities — so we hit the ground running on day one.",
    },
    {
      step: 3,
      title: "Kickoff & Access",
      description:
        "Kickoff call plus access to streaming, social, and ad accounts. We stand up Laylo and tracking in Month 1.",
    },
    {
      step: 4,
      title: "Engine Goes Live",
      description:
        "Paid campaigns, the content engine, and fan-data capture launch — and Raven Nation starts compounding into an owned army.",
    },
  ],

  cta: {
    headline: "Let's turn Raven Nation into an army you own.",
    body:
      "Doc Raven built a real brand, a loyal following, and full ownership of everything — completely DIY. Now let's build the infrastructure that makes it compound. Approve below and we'll get the engine running for a July 2026 start.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/doc-raven/hero1.png",
    hero2: "/images/doc-raven/hero2.png",
    product: "/images/doc-raven/product.png",
    editorial: "/images/doc-raven/editorial.png",
    texture: "/images/doc-raven/texture.png",
    brutalist: "/images/doc-raven/brutalist.png",
    ogImage: "/images/doc-raven/og-image.png",
    hero1Caption: "Diesel-soaked hymns for the unchurched",
    brutalistCaption: "Doc Raven × Crowd Control Digital",
  },
};
