import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  language: "en",
  languageAlternates: [{ slug: "82major-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "U.S. Growth Strategy",
    title: "82MAJOR",
    subtitle: "A long-term U.S. expansion framework through 1H 2027. Fandom-first. Song-agnostic. Scalable.",
    partnership: "Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "May 2026",
    backgroundImage: "/images/82major/hero1.png",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Geoff will be in touch.",
    caption: "CLICKS NOTIFY GEOFF AT CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview / Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      title: "Overview & Objective",
      subtitle: "A scalable U.S. expansion strategy that builds fandom infrastructure first and amplifies through digital, experiential, and PR around release windows.",
      body: [
        "This deck frames a long-term U.S. growth framework for 82MAJOR. It supports the current SIGN and TROPHY promotional cycle, the September comeback rollout, the November U.S. tour, and the longer arc of fandom plus audience growth through 1H 2027.",
        "It is not a detailed creative deck. It is not a campaign-by-campaign tactical document. It is the strategic framework that governs how budget is allocated across verticals and across the 12-month horizon. Recommended spend allocation, scalable U.S. market-building, and a non-negotiable foundational layer that runs whether or not new music is shipping.",
      ],
      supports: {
        heading: "What This Strategy Supports",
        items: [
          "Current SIGN and TROPHY promotional efforts",
          "September comeback rollout (7th mini)",
          "November U.S. tour (return run)",
          "1H 2027 Japan launch under HoriPro",
          "Long-term fandom growth through 1H 2027 and beyond",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Fandom growth: U.S.-owned channels and CRM that compound across cycles",
          "Digital marketing: discovery-layer acquisition calibrated to the conversion ratio already in place",
          "Experiential marketing: IRL moments that manufacture social proof and earned media",
          "PR amplification: credibility and narrative extension on top of the layers below it",
          "DSP and partnership opportunities: editorial relationships and platform integrations",
          "Optional add-ons: A&R / features strategy and a separate $25K radio plan",
        ],
      },
      footnote: "This deck is the strategic spine. The campaign-by-campaign creative and tactical plans sit beneath it.",
    },

    // ===================================================================
    // 02. Core Strategy + Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      title: "Core Strategy & Philosophy",
      thesis: "Fandom drives everything. PR does not break artists on its own. Strong fandom plus engagement creates moments worth reporting. IRL activations drive digital conversation. Digital momentum strengthens media and partnership opportunities.",
      hierarchy: [
        {
          label: "Fandom (Foundation, Always-On)",
          description: "The compounding layer. U.S. fan-page network, CRM and SMS via Laylo, owned-audience capture, fan engagement mechanics. Runs every week regardless of release calendar. Non-negotiable foundational spend. Without this layer, every other dollar leaks.",
        },
        {
          label: "Digital (Amplifier)",
          description: "Where reach happens. Platform strategy, narrative positioning, creator participation, paid amplification, DSP and editorial partnerships. Calibrated to the fandom layer below it. Spend rises during release windows; the team stays the same.",
        },
        {
          label: "Experiential (Amplifier)",
          description: "Where social proof gets manufactured. Listening events, pop-ups, OOH, specialty physical, gaming and XR integrations. IRL creates content. Content creates digital chatter. Digital chatter feeds PR. Skipping this layer means the brand never has a moment worth covering.",
        },
        {
          label: "PR (Amplifier)",
          description: "Credibility and narrative extension. Not a top-of-funnel growth engine. PR works when fandom, digital, and IRL are already producing something to point at. Pitched too early, it burns relationships. Pitched at the right moment, it scales every prior dollar.",
        },
      ],
      messaging: [
        "The fandom and digital infrastructure is song-agnostic. It supports SIGN, TROPHY, the September comeback, and every release after.",
        "Continuous spend on the foundation. Episodic spend on the amplifiers, calibrated to release windows and tour dates.",
        "Twelve-month minimum horizon. No campaign-by-campaign re-buildouts.",
        "Tier framing over impressionistic ranking. Every recommendation references where 82MAJOR sits versus tier-one peers and what closing that gap requires.",
      ],
      footnote: "Foundational spend is non-negotiable. Amplifier spend is calibrated to the calendar.",
    },

    // ===================================================================
    // 03. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "03",
      title: "Proposal Structure",
      intro: "Two tiers. Both are all-in budgets for a six-month deployable window aligned to the September comeback and the November U.S. tour. Reauthorization happens twice per year, in March and September. CCD execution fee ($2,500/month retainer + 15% management on managed media) sits inside the tier budget, not on top.",
      tiers: [
        {
          label: "Tier 01",
          budget: "$50,000",
          name: "Foundation Plan",
          goal: "Establish foundational U.S. fan ecosystem and sustained engagement between release windows.",
          includes: [
            "Always-on fandom infrastructure (U.S. fan-page network)",
            "Fan HQ social strategy",
            "CRM and SMS capture on Laylo",
            "Baseline PR support",
            "Light content and narrative spend",
          ],
        },
        {
          label: "Tier 02",
          budget: "$100,000",
          name: "Expanded Growth Plan",
          goal: "Accelerate audience growth and create larger cultural moments around the comeback and tour.",
          featured: true,
          includes: [
            "Everything in Tier 1",
            "Increased digital spend (full-funnel)",
            "Influencer / creator support",
            "More aggressive marketing campaigns",
            "Experiential activations (listening event, pop-up)",
            "OOH timed to release window",
            "Larger-scale fandom growth initiatives",
            "Expanded content ecosystem",
          ],
        },
      ],
    },

    // ===================================================================
    // 04. Vertical 1: Fandom / Always-On Digital
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      title: "Vertical 1 / Fandom & Always-On Digital",
      philosophy: "The compounding foundation. Continuous spend. Song-agnostic. The layer every other dollar relies on.",
      subBlocks: [
        {
          label: "A",
          title: "U.S.-Centric HQ Fan Pages",
          budget: "~$6K / mo agency retainer (to be finalized)",
          timeline: "3-6 month minimum; warm-up starts ~1 month pre-campaign",
          objective: "Build a dedicated U.S.-focused fandom ecosystem that lives outside the Korean fan-channel default and turns U.S. interest into U.S.-owned audience.",
          strategy: "Partner with agencies like Beautiful Digital or INFINITIZE to run a network of U.S.-positioned channels. Repurpose Korean content with subtitles and localization. Create U.S.-specific edits. Provide shot lists and content requests in advance so the channels operate as an extension of the artist team, not a fan-account guess.",
          components: {
            heading: "What The Network Does",
            items: [
              "Repurposes Korean content with English subtitles and U.S. edits",
              "Produces U.S.-first cuts (live clip moments, member spotlights, tour footage)",
              "Builds authentic fandom engagement on a U.S. cadence",
              "Captures U.S. fans onto channels CCD and the artist team control",
              "Coordinates with Hello82, Kpop-Nara, and partner ecosystems on activations",
            ],
          },
          kpis: [
            "Incremental follower growth",
            "Engagement growth (saves, shares, comments)",
            "Fan participation rates",
            "UGC amplification",
            "Community retention",
          ],
        },
        {
          label: "B",
          title: "Email CRM + SMS Strategy",
          budget: "TBD (inside tier)",
          objective: "Convert casual audience into a retained fandom ecosystem that the artist team owns outside platform algorithms.",
          strategy: "Stand up Laylo as the U.S. CRM and SMS platform. Capture email and SMS at every touchpoint (Hello82 drops, tour stops, content unlocks, social DM funnels). Segment by city, engagement tier, and purchase history. Run retention flows tied to release windows.",
          components: {
            heading: "Components",
            items: [
              "Email capture flows (web, social, tour)",
              "Laylo SMS stack (drop alerts, ticketing, tour comms)",
              "Fan segmentation by city, tier, behavior",
              "Retention campaigns timed to release windows",
              "Fan incentives that drive list growth (pre-save unlocks, photocard offers)",
            ],
          },
          kpis: [
            "Email list: 10K+ within 6 months",
            "SMS list: 5K+ within 6 months",
            "Open rate: 40%+ (Laylo industry average for active fandoms)",
            "Click-through on release-day flows: 15%+",
          ],
        },
        {
          label: "C",
          title: "Fan Engagement Mechanics",
          objective: "Create viral fandom perception, 'this group does more for their fans' sentiment, and public social proof that creators, press, and partners can see.",
          tactics: [
            "Contests (UGC challenges, photo contests, lyric challenges)",
            "Giveaways (signed photocards, tour tickets, member-curated bundles)",
            "Exclusive content unlocks (early MV access, behind-the-scenes cuts)",
            "Fan rewards tied to streaming, pre-saves, purchases",
            "VIP engagement (top-tier fan recognition, member shoutouts)",
            "Participation campaigns (member-led challenges, dance covers)",
          ],
        },
      ],
      footnote: "Foundation runs every month regardless of release calendar. This is the layer that compounds.",
    },

    // ===================================================================
    // 05. Vertical 2: Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "High-level spend allocation strategy across paid, organic, creator, and DSP. The amplifier that turns the fandom foundation into reach.",
      subBlocks: [
        {
          label: "A",
          title: "Content Narrative + Song Positioning",
          objective: "Resolve the brand-vs-listener gap. The brand markets hip-hop. The audience consumes melodic B-sides. The narrative architecture should treat both as members' own work, not as a creative reset.",
          components: {
            heading: "Components",
            items: [
              "Title-track positioning (hip-hop frame)",
              "B-side positioning (melodic frame)",
              "Production-credit content (members-as-producers, the underused asset)",
              "Viral storytelling (anchored to real catalog moments, not invented ones)",
              "UGC campaigns coordinated with title-track and B-side cycles",
            ],
          },
        },
        {
          label: "B",
          title: "TikTok Amplification + Creator Participation",
          budget: "Tier 2 only",
          objective: "Move TikTok from the platform 82MAJOR is most under-built on to the discovery engine that turns U.S. tour-converts and K-hip-hop crossover fans into followers and streamers.",
          tactics: [
            "Tastemaker creator activations (8-15 per release window)",
            "Flighthouse-style amplification on title-track moments",
            "Organic creator participation around B-side cuts",
            "Paid creator support (sponsored posts, dance challenges)",
            "Trend co-option timed to release windows",
          ],
        },
        {
          label: "C",
          title: "Influencer Marketing",
          budget: "Tier 2 only",
          components: {
            heading: "Components",
            items: [
              "Tastemaker tier (mid-influence, high-credibility creators)",
              "Flighthouse-style amplification (mass-distribution networks)",
              "Organic plus paid creator support",
              "Korean hip-hop crossover creators (the credibility-unlock layer)",
              "U.S. dance and styling creators tied to release aesthetics",
            ],
          },
        },
        {
          label: "D",
          title: "DSP + Streaming Support",
          objective: "Bridge the discovery-layer gap. The fandom conversion ratio is already healthy; the bottleneck is reach into the DSP discovery surfaces.",
          components: {
            heading: "Components",
            items: [
              "Playlist pitching across Spotify, Apple Music, YouTube Music",
              "Editorial relationships: Spotify Equal Asia, Apple Music K-Hits",
              "Platform integrations and 360 campaigns",
              "DSP marketing support tied to release windows",
              "Catalog metadata (Spotify Canvas) on top-10 catalog tracks",
            ],
          },
          examples: [
            "COLORS",
            "NBA Asia",
            "Vevo DSCVR",
            "Amazon Music City Sessions",
            "Cultural-music partnership programs",
          ],
        },
      ],
    },

    // ===================================================================
    // 06. Vertical 3: Experiential Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      title: "Vertical 3 / Experiential Marketing",
      philosophy: "IRL drives digital. Real-world moments create social sharing, fandom credibility, earned media, and viral content opportunities.",
      subBlocks: [
        {
          label: "A",
          title: "Listening Events",
          budget: "Tier 2 / 1 per cycle",
          objective: "Create a release-day moment that fans, creators, and press want to be part of. Anchor for the digital chatter that follows.",
          tactics: [
            "Elevated listening experience (Polygon / L-Acoustics style)",
            "Partner venues (Cosm, Little Cinema, cultural institutions)",
            "Brand or DSP partnership for cost offset and cross-promotion",
            "Live performance integration where possible",
            "Online hub for fans outside the host city",
          ],
        },
        {
          label: "B",
          title: "Pop-Ups",
          budget: "Tier 2 / tour-timed",
          objective: "Convert U.S. tour stops and Hello82 quarterly drops into multi-day photo, content, and sales moments.",
          tactics: [
            "Standalone pop-ups in LA and NYC",
            "Layered onto Hello82 quarterly drops in tier-2 cities",
            "Cup-sleeve events at coffee partners",
            "Fan-sign integration with partner record stores",
            "Photo-card and limited-edition physical drops on site",
          ],
        },
        {
          label: "C",
          title: "OOH",
          budget: "Tier 2 / release-window",
          objective: "Generate the receipt fans share. OOH is not awareness; it is content for the U.S. fan ecosystem to amplify.",
          examples: [
            "Posters and snipes in LA + NYC tour-stop neighborhoods",
            "QR / phone-number campaigns that drive to Laylo signup",
            "Street marketing tied to high-traffic K-pop fan zones",
            "Interactive billboards (member portraits, comeback teasers)",
            "Visible placements near Spotify (DTLA) and PMC / Billboard (Westwood)",
          ],
        },
        {
          label: "D",
          title: "Specialty Merch & Physical",
          objective: "Local U.S. production where the math supports it; import where it does not. Sovereignty of the physical drop matters more than the unit margin alone.",
          examples: [
            "Eco-friendly vinyl variants (Good Neighbor-style partners)",
            "Member-specific cassette tapes (Y2K-coded collectibles)",
            "Photo-card sets tied to U.S. tour cities",
            "Signed limited-edition runs through partner record stores",
            "Hello82 D2C exclusives",
          ],
        },
        {
          label: "E",
          title: "XR / VR / Gaming Integrations",
          objective: "Reach the U.S. tour-convert demo where they already spend leisure time.",
          examples: [
            "Roblox or Fortnite skin / experience integration",
            "Twitch performance partnership",
            "Discord server activations tied to release windows",
            "Gaming brand sponsorships (Riot, Razer, Logitech)",
          ],
        },
      ],
      footnote: "IRL is what gives PR something to report. Without it, the press cycle starves.",
    },

    // ===================================================================
    // 07. Vertical 4: PR
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      title: "Vertical 4 / PR",
      philosophy: "Amplification, narrative extension, credibility. Not a primary growth engine. PR is most effective when supported by strong fandom engagement, digital momentum, experiential moments, and streaming traction.",
      subBlocks: [
        {
          label: "A",
          title: "Focus Areas",
          components: {
            heading: "Where PR Works",
            items: [
              "Media narrative around the U.S. growth story",
              "Cultural-momentum framing (the group's tier ascent)",
              "Fan-engagement success as the news beat",
              "Firsts and milestones (first U.S. tour, first Japan launch, chart benchmarks)",
              "Long-term artist profile-building over a 12-month horizon",
            ],
          },
        },
        {
          label: "B",
          title: "Editorial Support",
          components: {
            heading: "What CCD Pitches",
            items: [
              "Interviews (artist and member-level)",
              "Long-form profile features",
              "Campaign and release announcements",
              "Tour coverage in U.S. publications",
              "Tentpole moments (comeback, Japan debut, milestones)",
            ],
          },
        },
        {
          label: "C",
          title: "Press Targets",
          tactics: [
            "Tier 1 (narrative shapers): Billboard, Rolling Stone, Pitchfork, Pigeons & Planes, SPIN, NYT",
            "Tier 2 (pop-culture / youth media): Teen Vogue, Paper, Nylon, HYPEBAE, i-D",
            "Tier 3 (digital tastemakers): EARMILK, Consequence, NME, DORK, The Line of Best Fit",
            "Tier 4 (K-pop and music blogs): Soompi, Allkpop, KPOPWORLD, Just Jared",
            "Hip-hop press lane: Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea",
          ],
        },
        {
          label: "D",
          title: "End-to-End Media Relations",
          components: {
            heading: "Operational Scope",
            items: [
              "Tentpole moments and events",
              "In-market promo and logistical support",
              "Press junket coordination at U.S. tour cities",
              "Risk monitoring (crisis management at additional fee)",
            ],
          },
        },
      ],
      footnote: "Tier labels are directional, not chronological. Outreach is guided by story-readiness, not hierarchy.",
    },

    // ===================================================================
    // 08. Vertical 5: Optional Add-Ons
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      title: "Vertical 5 / Optional Add-Ons",
      philosophy: "Outside the tier. Scoped and quoted separately. Triggered when the strategic moment justifies the spend.",
      subBlocks: [
        {
          label: "A",
          title: "A&R / Features Strategy",
          objective: "Expand the artist ecosystem and audience overlap through targeted U.S. collaborations and Korean hip-hop credibility unlocks.",
          components: {
            heading: "Components",
            items: [
              "Feature strategy across U.S. and Korean artists",
              "Artist compatibility analysis (musical, audience, narrative)",
              "U.S. collaboration introductions",
              "Korean hip-hop credibility features (Beenzino, BIG Naughty, OLNL, Sik-K)",
              "Strategic creative direction for collaboration cycles",
            ],
          },
        },
        {
          label: "B",
          title: "Radio Strategy",
          budget: "$25,000 (not included in Tier 1 or Tier 2)",
          objective: "Coordinated U.S. radio push tied to a designated release moment. Separate budget because radio operates on a different timeline and relationship cadence than the fandom and digital stack.",
          components: {
            heading: "Components",
            items: [
              "Station relationships (alternative, top-40, AAA, college)",
              "Spins targets and on-air premieres",
              "Programmer relationships and DJ outreach",
              "Coordinated launch around a single moment per cycle",
            ],
          },
        },
        {
          label: "C",
          title: "Additional Experiential",
          objective: "Multi-event experiential, gaming and XR integrations, and sponsored partnership executions beyond the in-tier listening event.",
        },
        {
          label: "D",
          title: "Additional Content Production",
          objective: "Monthly studio vlog series, production-credit content, live performance recordings, and episodic tour-diary content for YouTube and Instagram Reels.",
        },
      ],
    },

    // ===================================================================
    // 09. Final Pricing Sheets
    // ===================================================================
    {
      type: "pricing",
      number: "09",
      title: "Final Pricing Sheets",
      intro: "Two tiers. Six-month deployable window aligned to the September comeback and the November U.S. tour. CCD execution fee ($2,500/mo retainer + 15% media management) is inside both tiers; the math is shown below.",
      ccdNote: "Tier 1: $15K retainer (six months × $2,500) + $3.5K media management (15% on $23K managed media) leaves $31.5K deployable to vendors and spend. Tier 2: $15K retainer (six months × $2,500) + $11.1K media management (15% on $74K managed media) leaves $73.9K deployable to vendors and spend.",
      tiers: [
        {
          label: "Tier 01",
          budget: "$50,000",
          name: "Foundation Plan",
          tagline: "All-in cost ceiling. Six months. Foundation only.",
          deployable: "$31,500",
          breakdown: [
            { vertical: "Fandom (Always-On)", amount: "$18,000" },
            { vertical: "Digital Marketing (Light)", amount: "$8,500" },
            { vertical: "PR (Baseline)", amount: "$5,000" },
            { vertical: "CCD Retainer + Mgmt Fee", amount: "$18,500" },
          ],
        },
        {
          label: "Tier 02",
          budget: "$100,000",
          name: "Expanded Growth Plan",
          tagline: "All-in cost ceiling. Six months. Foundation plus amplifiers.",
          featured: true,
          deployable: "$73,900",
          breakdown: [
            { vertical: "Fandom (Expanded)", amount: "$22,000" },
            { vertical: "Digital Marketing (Full-Funnel)", amount: "$26,000" },
            { vertical: "Influencer / Creator", amount: "$12,000" },
            { vertical: "Experiential (Event + Pop-Up + OOH)", amount: "$10,000" },
            { vertical: "PR (Expanded)", amount: "$3,900" },
            { vertical: "CCD Retainer + Mgmt Fee", amount: "$26,100" },
          ],
        },
      ],
      addOns: [
        { name: "Radio Strategy", budget: "$25,000", description: "U.S. radio push, spins targets, station relationships, on-air premieres. Triggered per release moment." },
        { name: "A&R / Features Strategy", budget: "Scoped", description: "Feature strategy, artist compatibility analysis, U.S. collaboration introductions, Korean hip-hop credibility features." },
        { name: "Additional Experiential", budget: "Scoped", description: "Multi-event experiential beyond the in-tier listening event. Gaming and XR partnerships, sponsored executions." },
        { name: "Additional Content Production", budget: "Scoped", description: "Monthly studio vlog series, production-credit content, live recordings, episodic tour-diary content." },
      ],
      footnote: "Tiers reauthorize twice per year, in March and September. Add-ons trigger per release cycle on standalone SOW.",
    },
  ],
};
