import type { ProjectData } from "../project-context";

export const trim: ProjectData = {
  accentColor: "#CC0000",

  client: {
    name: "TRIM",
    logo: "",
    contactName: "TBD",
    contactRole: "Management",
    contactEmail: "TBD",
    industry: "Music / Hip-Hop / Emerging Artist",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Pass The Tiara Campaign",
    tagline:
      "You went from first song to 2M Spotify listeners in under a year. We build the marketing infrastructure that turns viral momentum into a sustainable career — fan data capture, paid media, content systems, and creator strategy around the Pass The Tiara rollout.",
    type: "Full-Service Marketing Retainer",
    startDate: "May 1, 2026",
    endDate: "July 31, 2026",
    duration: "3 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will build and operate the full marketing infrastructure around TRIM's debut EP rollout and sustained growth push. The engagement covers four workstreams: Laylo-powered fan data capture turning every viral moment into an owned subscriber, paid media across Meta and TikTok driving streams and building audiences, a content strategy system that keeps the TikTok algorithm fed with purpose-built assets, and creator marketing that puts TRIM's music in front of the right audiences through strategic placements. The goal is to exit these 3 months with an owned fan database, a proven paid media playbook, and a content engine that compounds — not just a spike that fades.",
    objectives: [
      "Build a first-party fan database from scratch via Laylo — capturing email and SMS subscribers from every viral moment, release drop, and social interaction so TRIM owns her audience instead of renting it from algorithms",
      "Launch paid media campaigns across Meta and TikTok to drive streams, grow Spotify listeners, and build retargeting audiences around the Pass The Tiara EP release cycle",
      "Develop a repeatable content strategy system — hooks, formats, and posting cadences optimized for TikTok discovery and Instagram engagement, informed by what's already working",
      "Execute creator marketing placements — getting TRIM's tracks into the hands of creators who can spark the next viral moment, with managed outreach and tracking",
    ],
    subtitle:
      "Fan data capture, paid media, content systems, and creator marketing — built around the hottest debut in female rap.",
    imageCaption: "Full-Service Marketing Retainer",
    stats: [
      {
        value: 25,
        suffix: "K+",
        label: "Subscriber Target",
        description:
          "First-party fan database built from scratch via Laylo — email and SMS subscribers captured from every viral moment and release drop",
      },
      { value: 2, suffix: "M+", label: "Listener Growth Target" },
      { value: 3, label: "Month Campaign" },
      { value: 4, label: "Workstreams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited TRIM's full digital ecosystem — social channels, streaming presence, content performance, and competitive landscape. The finding is clear: the organic momentum is exceptional, but there's zero marketing infrastructure capturing or compounding it. Every viral moment is a one-time event right now.",
    insights: [
      {
        label: "Zero Owned Channel",
        finding:
          "2M Spotify listeners, 516K TikTok followers, 164K Instagram — but no email list, no SMS database, no Laylo, no fan CRM of any kind. Every fan relationship is rented from an algorithm that could change tomorrow.",
        source: "Social media audit / Spotify",
      },
      {
        label: "Viral Without Infrastructure",
        finding:
          "\"BOAT\" generated 22.9M+ TikTok likes organically, caught cosigns from Tyla, Rico Nasty, and Baby Tate — but none of that attention was captured into an owned channel. The virality worked once; infrastructure makes it repeatable.",
        source: "TikTok analytics / press coverage",
      },
      {
        label: "Press Momentum Accelerating",
        finding:
          "The FADER, Audiomack, Complex \"26 Rappers to Watch,\" The Shade Room, Hot 100.9 — TRIM is getting editorial placement that most artists spend years chasing. This press window is finite and needs to be capitalized on now.",
        source: "Press audit — FADER, Complex, Audiomack",
      },
      {
        label: "Princess of Rap Moment",
        finding:
          "The self-declared \"Princess of Rap\" moment at her Charleston show sparked a national debate across Shade Room, NewDope, and social media — free press worth more than any ad campaign. But it was a moment, not a strategy. CCD turns moments into systems.",
        source: "The Shade Room / social media analysis",
      },
      {
        label: "Collaborator Network Untapped",
        finding:
          "Features with BunnaB (3.2M listeners), YKNIECE (3.1M listeners), and Vayda — a ready-made cross-promotion network. But there's no coordinated marketing around these collaborations, no shared fan capture, no data exchange.",
        source: "Spotify / collaboration analysis",
      },
    ],
    marketContext:
      "Female rap is in a golden era — GloRilla, Sexxy Red, and Megan Thee Stallion proved the lane is wide open, and TikTok has become the primary discovery engine for new voices. TRIM is one of the few emerging artists getting editorial and platform attention simultaneously. The Pass The Tiara EP is the natural vehicle to convert this moment into a permanent position.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "TRIM's audience is young, female-skewing, TikTok-native, and deeply invested in the next wave of women running rap — a community that discovers through sound, stays for personality, and buys when they feel connected.",
    demographics:
      "16–25 core, predominantly female (65%+), concentrated on TikTok and Instagram. Diverse, trend-forward, and highly engaged with female rap content.",
    demographicCards: [
      {
        label: "Age Range",
        value: "16–25 core",
        detail: "18–22 peak engagement",
      },
      {
        label: "Gender",
        value: "65%+ female",
        detail: "Girl's girl energy draws strong female demo",
      },
      {
        label: "Discovery",
        value: "TikTok-first",
        detail: "Sound-driven discovery, then migrate to Spotify",
      },
      {
        label: "Behavior",
        value: "High share rate",
        detail: "UGC creators, duets, and sound reuse drive organic growth",
      },
    ],
    personas: [
      {
        name: "The FYP Discoverer",
        ageRange: "16–20",
        description:
          "Found TRIM through BOAT on their For You page. Makes TikToks using her sounds, shares clips with friends, follows for the personality as much as the music. First to use a new sound.",
        traits: ["TikTok Native", "Sound Reuser", "Share-Heavy", "Trend-Forward"],
      },
      {
        name: "The Girl's Girl",
        ageRange: "18–24",
        description:
          "Follows TRIM because she represents the energy — confident, unapologetic, Charleston accent and all. Engages with every post, defends her in comment sections, wants to see her win.",
        traits: ["Loyal Commenter", "Instagram Active", "Concert-Goer", "Merch Buyer"],
      },
      {
        name: "The Culture Watcher",
        ageRange: "20–28",
        description:
          "Hip-hop heads who follow emerging talent. Saw the FADER piece or the Complex list. Respects the rapid come-up and the co-signs. Curates playlists and influences what their circle listens to.",
        traits: ["Playlist Curator", "Press-Aware", "Spotify Heavy", "Taste Maker"],
      },
    ],
    psychographics: [
      "Drawn to authenticity and confidence — TRIM's unapologetic personality and Charleston accent feel real in a space full of manufactured personas",
      "Invested in the next wave of women in rap — they want to be part of an artist's rise from day one, not discover her after she's mainstream",
      "Sound-driven discovery — the hook, the cadence, the accent catch them first; the personality and story keep them",
      "Community-oriented — they share, duet, comment, and defend. Fandom is participatory, not passive",
    ],
    painPoints: [
      "No direct line to TRIM — no way to know when something drops unless the algorithm shows it to them",
      "FOMO on releases and announcements — by the time they see it, the moment has passed",
      "Want more content and behind-the-scenes — the TikTok clips aren't enough, they want the full picture",
      "No merch or fan products to buy — no way to physically represent the fandom yet",
    ],
    purchaseTriggers: [
      "Viral TikTok moments that create urgency and FOMO — when a sound blows up, fans rush to Spotify",
      "Limited drops and exclusivity — early access, subscriber-only content, first-to-know status",
      "Co-signs from bigger artists — Tyla, Rico Nasty, Baby Tate stamps validate the investment in TRIM",
      "EP release momentum — Pass The Tiara is the first major release, and fans want to be part of the origin story",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "516K followers, 22.9M likes — the primary discovery and engagement engine. Sound reuse, duets, and UGC drive organic growth. This is where new fans find TRIM.",
      },
      {
        name: "Instagram",
        description:
          "164K followers — personality-driven content, lifestyle posts, and press moments. Where casual followers become invested fans.",
      },
      {
        name: "Spotify",
        description:
          "2M monthly listeners — streaming is the conversion metric. Playlist placement and algorithmic discovery feed the growth loop from TikTok.",
      },
      {
        name: "YouTube",
        description:
          "Music videos for BOAT, GUAPO, and upcoming Pass The Tiara visuals. Long-form content and catalog discovery for deeper engagement.",
      },
    ],
    quotes: [
      {
        text: "She got that accent and those bars and you can't stop listening. BOAT been on repeat for weeks.",
        source: "TikTok comments",
      },
      {
        text: "Trim is what happens when you let a girl from Charleston just be herself on the mic. Princess of Rap is valid.",
        source: "Instagram comments",
      },
      {
        text: "She's one of the few new rappers where I heard one song and immediately went to find everything else she's made.",
        source: "Twitter / X",
      },
    ],
  },

  targets: [
    {
      metric: "Laylo Subscribers",
      value: "25K+",
      context:
        "Building from zero to 25K+ email/SMS subscribers in 3 months by capturing every viral moment, release drop, and social interaction into Laylo.",
    },
    {
      metric: "Spotify Monthly Listeners",
      value: "4M+",
      context:
        "Doubling from 2M to 4M+ monthly listeners through paid media, playlist strategy, and the Pass The Tiara EP release cycle.",
    },
    {
      metric: "TikTok Followers",
      value: "1M+",
      context:
        "Growing from 516K to 1M+ followers through optimized content cadence, creator placements, and paid amplification of top-performing organic content.",
    },
    {
      metric: "Creator Placements",
      value: "50+",
      context:
        "50+ strategic creator placements across TikTok and Instagram Reels — seeding TRIM's sounds with creators who have proven music-discovery audiences.",
    },
  ],

  competitive: {
    summary:
      "TRIM's competitive set isn't the established names — it's the next wave of viral-to-career female rappers fighting for the same editorial attention, playlist slots, and audience share. At 2M monthly listeners with a debut EP on deck, TRIM is at the inflection point where marketing infrastructure separates the ones who last from the ones who fade.",
    competitors: [
      {
        name: "Monaleo — 1.9M Monthly Listeners",
        strength:
          "Houston co-sign, strong regional identity, consistent release cadence, and a loyal core following that pre-dates her viral breakout",
        gap: "Slower TikTok growth trajectory and less editorial buzz in 2026 — TRIM's press momentum (FADER, Complex, Audiomack) is outpacing Monaleo's current cycle. No visible fan data infrastructure.",
      },
      {
        name: "Lola Brooke — 656K Monthly Listeners",
        strength:
          "Brooklyn authenticity, \"Don't Play With It\" was a genuine cultural moment, strong live presence, and co-signs from NYC heavyweights",
        gap: "Listener growth has plateaued despite early viral success — exactly the trajectory TRIM needs to avoid. No content system keeping the algorithm fed between releases.",
      },
      {
        name: "Maiya The Don — 126K Monthly Listeners",
        strength:
          "Distinctive Bay Area voice, critical darling status, and a loyal niche following that over-indexes on engagement relative to size",
        gap: "Hasn't converted critical acclaim into audience scale — at 126K listeners vs TRIM's 2M, the gap is widening. TRIM's TikTok-native discovery advantage is significant.",
      },
    ],
  },

  timelineSubheading:
    "A focused 3-month sprint from infrastructure build through EP launch and sustained growth — every phase designed to capture momentum and convert it into lasting audience ownership.",
  timelineImageCaption: "3 Months / 3 Phases / 4 Workstreams",

  timeline: [
    {
      phase: "Infrastructure & Foundation",
      week: "Weeks 1–4",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy Laylo fan data infrastructure — SMS/email capture flows, welcome sequences, segmentation architecture, and social-to-list conversion funnels",
        "Set up paid media architecture — Meta and TikTok ad accounts, pixel/CAPI tracking, conversion events, and audience seeds from existing followers",
        "Audit and systematize content strategy — analyze top-performing organic content, build a repeatable hook/format library, and establish posting cadence",
        "Begin creator marketing outreach — identify and vet 50+ creators for sound seeding, negotiate rates, and build the placement pipeline",
      ],
    },
    {
      phase: "EP Launch & Paid Push",
      week: "Weeks 5–8",
      date: "June 2026",
      status: "upcoming" as const,
      tasks: [
        "Execute Pass The Tiara rollout campaigns — pre-save capture via Laylo, countdown sequences, and release-day SMS/email blasts to the growing subscriber list",
        "Launch paid media campaigns — Spotify growth ads on Meta, TikTok Spark Ads amplifying top organic content, and retargeting flows for engaged non-followers",
        "Deploy creator placements — seeding EP tracks with vetted creators, coordinated drop timing, and performance tracking across all placements",
        "Content system in full operation — daily TikTok cadence, Instagram strategy, and real-time optimization based on what the algorithm is rewarding",
      ],
    },
    {
      phase: "Scale & Compound",
      week: "Weeks 9–12",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Scale what's working — double down on winning ad creatives, top-performing creator placements, and content formats driving the most growth",
        "Lifecycle campaigns on Laylo — subscriber-exclusive content, early access to new music, and fan engagement sequences that keep the database active",
        "Full performance analysis — Spotify growth attribution, Laylo capture rates, paid media ROI, creator marketing performance, and content engagement metrics",
        "Deliver growth playbook — documented systems, winning formulas, and strategic recommendations for the next cycle so momentum doesn't stop when this engagement ends",
      ],
      ongoing: true,
    },
  ],

  deliverables: [
    {
      category: "Fan Data Capture",
      icon: "◆",
      items: [
        {
          name: "Laylo Infrastructure",
          quantity: "1 build",
          description:
            "Full Laylo implementation — fan database architecture, SMS/email capture flows, segmentation schema, welcome sequences, and pre-save/drop page templates",
        },
        {
          name: "Capture Campaigns",
          quantity: "6+ campaigns",
          description:
            "Social-to-list conversion funnels for every release, viral moment, and content milestone — turning passive followers into owned subscribers",
        },
        {
          name: "Lifecycle Sequences",
          quantity: "4+ flows",
          description:
            "Welcome series, release-day blasts, subscriber-exclusive content drops, and re-engagement sequences — keeping the database active and growing",
        },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "3 months",
          description:
            "Instagram and Facebook campaigns — Spotify growth, follower acquisition, and retargeting of engaged fans. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "TikTok Advertising",
          quantity: "3 months",
          description:
            "Spark Ads amplifying top organic content and in-feed campaigns driving sound discovery. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "Monthly Reporting",
          quantity: "3 reports",
          description:
            "Full-funnel performance reports — ad spend, cost per stream, cost per follower, ROAS, and optimization recommendations delivered monthly",
        },
      ],
    },
    {
      category: "Content Strategy",
      icon: "●",
      items: [
        {
          name: "Content System Build",
          quantity: "1 system",
          description:
            "Repeatable content framework — hook library, format templates, posting cadence calendar, and real-time optimization playbook built from TRIM's best-performing organic content",
        },
        {
          name: "Content Calendar",
          quantity: "12 weeks",
          description:
            "Weekly content calendars with platform-specific recommendations for TikTok and Instagram — what to post, when to post, and why it works",
        },
        {
          name: "Performance Optimization",
          quantity: "Ongoing",
          description:
            "Weekly analysis of content performance — identifying winning hooks, formats, and posting times to continuously refine the content engine",
        },
      ],
    },
    {
      category: "Creator Marketing",
      icon: "◇",
      items: [
        {
          name: "Creator Outreach & Vetting",
          quantity: "50+ creators",
          description:
            "Identifying, vetting, and negotiating with TikTok and Instagram creators who have proven music-discovery audiences in TRIM's demographic",
        },
        {
          name: "Sound Seeding Campaigns",
          quantity: "3+ waves",
          description:
            "Coordinated creator placement waves timed to single drops and EP release — seeding TRIM's sounds into the feeds of millions of potential fans",
        },
        {
          name: "Performance Tracking",
          quantity: "Ongoing",
          description:
            "Creator-level attribution tracking — which placements drive streams, which drive follows, and which drive Laylo opt-ins. ROI on every dollar spent.",
        },
      ],
    },
  ],

  deliverablesSubheading:
    "Four workstreams operating in sync — fan data capture, paid media, content strategy, and creator marketing — the full growth infrastructure around TRIM's breakout moment.",

  scope: {
    included: [
      "Full Laylo implementation — fan database build, SMS/email capture flows, segmentation, and lifecycle automation",
      "Paid media management across Meta and TikTok for streaming growth and audience building (ad spend billed separately at 15% management fee)",
      "Content strategy system — framework build, weekly calendars, and ongoing optimization for TikTok and Instagram",
      "Creator marketing — outreach, vetting, negotiation, placement coordination, and performance tracking for 50+ creators",
      "Monthly performance reports covering all workstreams with actionable optimization recommendations",
      "Pass The Tiara EP rollout campaign — pre-save capture, release-day activation, and post-release sustain strategy",
      "End-of-engagement growth playbook — documented systems and strategic recommendations for the next cycle",
    ],
    excluded: [
      "Music production, recording, mixing, or mastering",
      "Music video production and directing (available as add-on — scoped and quoted separately)",
      "Graphic design, animation, and visual asset creation (available as add-on — scoped and quoted separately)",
      "PR, press relations, or media outreach",
      "Tour booking, logistics, or live event production",
      "Legal counsel, contract negotiation, or rights management",
    ],
    subheading:
      "Everything included in this engagement — and where the line sits between CCD's marketing mandate and the existing creative and management operations.",
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Paid Media Management",
        description:
          "Campaign strategy, audience building, creative direction, optimization, and reporting across Meta and TikTok. Ad spend billed separately at 15% management fee.",
        price: 2000,
        recurring: true,
      },
      {
        name: "Laylo + Fan Data Capture",
        description:
          "Full Laylo infrastructure build, SMS/email capture campaigns, lifecycle sequences, segmentation, and ongoing database growth and nurture",
        price: 1500,
        recurring: true,
      },
      {
        name: "Content Strategy + Creator Marketing",
        description:
          "Content system build, weekly calendars, optimization, creator outreach and vetting, sound seeding campaigns, and performance tracking",
        price: 1500,
        recurring: true,
      },
    ],
    subtotal: 5000,
    setupFee: {
      label: "Setup & Onboarding",
      amount: 1500,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Media + Creator Budget",
      amount: 3000,
      note: "Recommended ad spend across Meta and TikTok plus creator placement fees — billed to platforms and creators directly, managed by CCD at 15% management fee included in retainer.",
    },
    total: 16500,
    paymentSchedule: [
      {
        milestone: "Month 1",
        percentage: 39.39,
        amount: 6500,
        due: "Upon approval — includes $1,500 setup fee + first month retainer",
      },
      {
        milestone: "Month 2",
        percentage: 30.30,
        amount: 5000,
        due: "June 1, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 30.30,
        amount: 5000,
        due: "July 1, 2026",
      },
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "https://buy.stripe.com/cNi3cueu83MtfPrfs5a7C09",
  },

  nextSteps: [
    {
      step: 1,
      title: "Review & Connect",
      description:
        "TRIM's team reviews this proposal. Schedule a 30-minute call with Geoff to walk through the strategy, answer questions, and align on priorities for the Pass The Tiara rollout.",
    },
    {
      step: 2,
      title: "Approve & Kick Off",
      description:
        "Sign off on scope and timeline. CCD begins the onboarding sprint — Laylo setup, paid media architecture, content audit, and creator pipeline build.",
    },
    {
      step: 3,
      title: "Onboarding Questionnaire",
      description:
        "CCD sends a focused intake covering social account access, Spotify for Artists credentials, existing ad accounts, and any historical performance data — everything needed to wire up the infrastructure.",
    },
    {
      step: 4,
      title: "Infrastructure Goes Live",
      description:
        "Laylo capture flows active. Paid media campaigns in market. Content system operational. Creator pipeline loaded. The growth engine is running.",
    },
    {
      step: 5,
      title: "Pass The Tiara Launch",
      description:
        "Full EP rollout execution — coordinated across all four workstreams. Pre-save capture, release-day activation, creator wave, and paid amplification firing simultaneously.",
    },
  ],

  cta: {
    headline: "The Crown Is Yours — Now Build the Kingdom",
    body: "You went from first song to 2M listeners in under a year. The FADER, Complex, Audiomack — they're all watching. Pass The Tiara isn't just a debut EP, it's the moment where viral becomes permanent. CCD builds the infrastructure that makes sure every fan you touch stays in your world. Let's talk.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/trim/hero1.png",
    hero2: "/images/trim/hero2.png",
    product: "/images/trim/product.png",
    editorial: "/images/trim/editorial.png",
    texture: "/images/trim/texture.png",
    brutalist: "/images/trim/brutalist.png",
    heroBg: "/images/trim/hero-bg.png",
    hero1Caption: "Full-Service Marketing Retainer",
    ogImage: "/images/trim/og-image.png",
    brutalistCaption: "TRIM × Crowd Control Digital",
  },
};
