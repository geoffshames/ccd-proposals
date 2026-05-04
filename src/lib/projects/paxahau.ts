import type { ProjectData } from "../project-context";

export const paxahau: ProjectData = {
  accentColor: "#DC2626",

  client: {
    name: "Paxahau",
    logo: "",
    contactName: "Paxahau Team",
    contactRole: "Production / Marketing",
    contactEmail: "connect@paxahau.com",
    industry: "Live Music / Festivals / Event Production",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "PAXAHAU // YEAR-ROUND DETROIT",
    tagline:
      "A 6-month pilot covering year-round Detroit programming and the early Movement '27 build. Real-time pacing intelligence on every Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial show — paired with paid media, Laylo lifecycle, organic content, and a creator network engineered for the techno-curious wave that found Detroit on TikTok.",
    type: "Pacing Intelligence + Year-Round Marketing",
    startDate: "June 1, 2026",
    endDate: "November 30, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital deploys a full pacing-intelligence and marketing layer around Paxahau's year-round Detroit programming and the early Movement '27 build cycle. Our proprietary PACING DASHBOARD ingests AXS, Tixr, and Eventbrite ticket data across every venue night — Magic Stick, TV Lounge, Spot Lite, Masonic, Russell Industrial — so soft markets get caught in week 1, not on doors. The COMMENT ENGINE seeds organic-feeling momentum on every announcement post. Paid media drives ticket velocity through Meta, TikTok, and YouTube. Laylo lifecycle finally activates the 25-year ticket-buyer base that lives walled inside AXS. And a creator network captures the Gen Z techno-curious wave that's been finding Detroit on TikTok without anyone catching them. The pilot is engineered to prove the model in 180 days, ahead of the 2027 Movement onsale window.",
    objectives: [
      "Deploy the PACING DASHBOARD across every Paxahau-promoted year-round event — Magic Stick, TV Lounge, Spot Lite, Masonic, Russell Industrial — so soft shows get flagged on day three, not day thirty",
      "Activate the walled-garden audience — 25 years of AXS ticket buyers + the Hive newsletter + the existing laylo.com/paxahau SMS list, finally stitched into a sovereign Paxahau-owned data layer that segments by venue, genre, and buying behavior",
      "Stand up the COMMENT ENGINE — organic-feeling fan engagement seeded on every announcement, lineup wave, and stage reveal so the algorithm reads the post as a moment, not a flyer",
      "Run paid media across Meta, TikTok, and YouTube — for year-round venue events first, then surging into the Movement '27 announcement and presale waves through November",
      "Capture the Gen Z TikTok-techno wave — Detroit techno is in active rotation among 18–24 listeners discovering the genre for the first time. None of that discovery is currently being captured, retargeted, or converted to a year-round ticket",
    ],
    subtitle:
      "Pacing intelligence, lifecycle activation, and creator-driven growth — built by the agency that runs this exact playbook for stadium electronic tours, festival operators, and venue clients.",
    imageCaption: "Pacing Intelligence + Year-Round Marketing",
    stats: [
      {
        value: 50,
        suffix: "+",
        label: "Year-Round Events Tracked",
        description:
          "Every Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial show monitored on the PACING DASHBOARD — soft markets flagged in week 1",
      },
      { value: 6, label: "Month Pilot" },
      { value: 5, label: "Marketing Channels" },
      { value: 1, suffix: "M+", label: "Owned Audience Target" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited the Paxahau and Movement digital ecosystem — paxahau.com, movementfestival.com, every active social handle, the AXS ticketing layer, the Hive newsletter, the laylo.com/paxahau SMS shortlink, the Tripadvisor and Reddit fan threads, and the year-round venue programming at Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial. The findings are unusually clear: Paxahau holds one of the most defensible cultural positions in dance music — and the year-round programming is being sold with a fraction of the marketing infrastructure that the festival itself enjoys. This proposal closes that gap in 6 months.",
    insights: [
      {
        label: "Movement Eats All The Oxygen",
        finding:
          "Movement Festival has 152K Instagram followers and dominates the Paxahau marketing calendar from January through May. The year-round programming — Magic Stick, TV Lounge, Spot Lite, Masonic, Russell Industrial — runs through the same shop without proportional marketing horsepower behind it. Year-round shows are where the per-event margin actually lives, and they're under-promoted by a factor we're confident is conservative.",
        source: "@movementdetroit + @paxahau IG audit, paxahau.com event listings",
      },
      {
        label: "Walled-Garden Ticket Data",
        finding:
          "Movement and Paxahau-promoted shows ticket through AXS (with Tixel as the official resale partner). 20 years of Movement ticket buyers and every year-round venue night sits inside the AXS ecosystem — a real asset, but one that lives in someone else's stack. The Paxahau team can pull reports but cannot independently segment, retarget on Meta and TikTok, build win-back flows, or run pre-onsale to high-intent past buyers on their own cadence. The audience exists; the activation layer doesn't.",
        source: "movementfestival.com/tickets, AXS event listings, Tixel partnership",
      },
      {
        label: "Laylo Exists But Is Dormant",
        finding:
          "laylo.com/paxahau is live and accepting SMS sign-ups — meaning the infrastructure is there, but the actual lifecycle marketing isn't. No segmentation by venue, genre, or buyer history. No pre-show drops. No post-show reactivation. No year-round programming sequences. Laylo is a DJ-grade lifecycle tool and Paxahau is using it as a static signup form. Activating it is one of the highest-leverage wins in the pilot.",
        source: "laylo.com/paxahau audit, paxahau.com footer SMS CTA",
      },
      {
        label: "TikTok Discovery Without Capture",
        finding:
          "Detroit techno is in active rotation on TikTok — Carl Cox / Richie Hawtin clips, Hart Plaza B-roll, and 'birthplace of techno' explainers are pulling Gen Z and younger millennials into the genre for the first time. Movement's official TikTok presence trails its Instagram by an order of magnitude, and there is no creator network amplifying year-round venue events to that discovery audience. The top of the funnel is leaking the entire Detroit calendar.",
        source: "TikTok hashtag scan: #detroittechno #movementdetroit #hartplaza",
      },
      {
        label: "No Live Pacing Intelligence",
        finding:
          "Paxahau's year-round shows go on sale and then quietly sell or quietly don't — without a real-time pacing dashboard, soft markets get diagnosed at the door instead of in week 1, when paid media surges still bend the curve. Movement itself benefits from massive demand inertia, but a Tuesday night at TV Lounge with a touring DJ doesn't. That's exactly where the PACING DASHBOARD compounds — and where 6 months of model calibration sets up a much stronger 2027 onsale.",
        source: "Per-event analysis across Magic Stick, TV Lounge, Spot Lite calendars",
      },
    ],
    marketContext:
      "Movement is celebrating its 20th year under Paxahau in May 2026 with a 115+ artist program headlined by Carl Cox, Dom Dolla, and Sara Landry — by every public account, one of the strongest editions in years. ARC Music Festival in Chicago is closing the festival gap on house, Insomniac's Resistance is scaling globally, and Time Warp is making aggressive plays in North America. Paxahau's competitive moat isn't the festival — it's the year-round Detroit programming and 25 years of community trust that no corporate festival operator can replicate. But that moat depends on the year-round calendar staying healthy. Pilot starts June 2026, two weeks after Movement '26 wraps. By November, the Movement '27 onsale window opens with a fully calibrated pacing model and an activated owned audience underneath it.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Paxahau sits at the intersection of three audiences that almost no other operator in dance music can claim simultaneously — Detroit-rooted techno purists who treat every Movement and venue show as a pilgrimage, international electronic-music tourists who fly in for the weekend and stay for the year, and the Gen Z TikTok wave discovering Detroit techno for the first time. Each one needs a different funnel.",
    demographics:
      "21–44 core, balanced gender split, heavy international representation (Europe, Latin America, Asia), with a deep Detroit and Midwest base anchoring the year-round programming.",
    demographicCards: [
      {
        label: "Age Range",
        value: "21–44 core",
        detail: "25–34 peak Movement buyer, 18–24 TikTok-discovery wave",
      },
      {
        label: "Gender / Identity",
        value: "Balanced split",
        detail: "Movement '25: half the lineup Black, queer, and/or women",
      },
      {
        label: "Geography",
        value: "Global + Detroit core",
        detail: "Heavy international (EU, LATAM, APAC) + Midwest faithful",
      },
      {
        label: "Behavior",
        value: "Pilgrimage + repeat",
        detail: "Multi-year Movement attendees + year-round venue regulars",
      },
    ],
    personas: [
      {
        name: "The Detroit Faithful",
        ageRange: "28–44",
        description:
          "Lives in or around Detroit. Has been to Movement 5+ times. Goes to Magic Stick, TV Lounge, Spot Lite year-round and considers them part of the city's cultural fabric. Treats Paxahau-promoted shows as default-yes plans. Wants priority access, knows the difference between a Mike Banks set and a marquee booking, and resents corporate festival energy.",
        traits: ["Year-Round Regular", "Multi-Movement Vet", "Genre Purist", "Local Pride"],
      },
      {
        name: "The International Pilgrim",
        ageRange: "25–40",
        description:
          "Flies in from London, Berlin, Mexico City, São Paulo, or Tokyo for Memorial Day weekend. Plans the trip 6+ months out, hits 4+ official afterparties across the weekend, and books the same flights every year. Spends heavily across tickets, lodging, food, and merch. Currently engaged via Movement social channels but rarely activated for year-round programming back home.",
        traits: ["High Intent", "Multi-Year Returner", "Premium Spend", "International"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "18–24",
        description:
          "Found Detroit techno through a Carl Cox clip, a Hart Plaza B-roll, or an explainer video about the birthplace of techno. Currently streaming the catalog backwards and adding underground Detroit names to playlists. Has not bought a ticket yet. Could become a 20-year fan if the brand catches them now during the discovery window.",
        traits: ["Gen Z", "Catalog Discoverer", "Mobile-First", "Ungated"],
      },
    ],
    psychographics: [
      "Authenticity-allergic to corporate festival energy — the audience can identify a sponsored-feeling moment from across the room and rewards independent operators",
      "Heritage-reverent — Detroit techno's Black founding (Atkins, Saunderson, May, Banks) is non-negotiable cultural ground, and any messaging that ignores it gets dismissed instantly",
      "Community over hype — fans organize around Reddit threads, Boiler Room comment sections, and Discords more than any official channel because that's where the vibe is real",
      "Multi-decade attention spans — Movement attendees plan years out, return year after year, and treat the festival and year-round venue programming as part of a single ongoing relationship with the city",
    ],
    painPoints: [
      "Tickets for year-round shows often quietly sell out without enough marketing surface — the announcement is on Instagram, the listing is on AXS, and that's the whole funnel",
      "Out-of-towners discover Detroit-only shows after the trip is booked — there's no proactive 'when you're in Detroit next' lifecycle layer for the international Movement crowd",
      "Heat at Hart Plaza in May, year over year — survivable but a real fan complaint in every review and Reddit recap, especially among first-time international attendees",
      "Schedule clash anxiety at Movement and across afterparty programming — fans want better real-time scheduling and capture but it's not a Paxahau-owned channel today",
    ],
    purchaseTriggers: [
      "Lineup-wave drops with announcement-day urgency — Movement and major venue lineups are the highest-intent moments and currently leak demand without retargeting",
      "Friend-of-friend social proof — Movement attendees buy in groups, and the 'who else is going' signal converts harder than any creative",
      "Limited-edition merch and AIR program collectibles — year-over-year buyers collect vinyl, posters, and badges aggressively if drops are clearly communicated",
      "Genuine artist context — Carl Cox, Hawtin, Banks, Saunderson, and the Detroit founders are draw enough on their own when the storytelling is real and not a marketing pitch",
    ],
    platforms: [
      {
        name: "Instagram",
        description:
          "@movementdetroit at 152K is the flagship — strongest engagement on lineup announcement posts, stage reveals, and Detroit founder content. @paxahau is the operator account, lower follower count, more business-facing. Both under-leveraged for year-round venue programming.",
      },
      {
        name: "TikTok",
        description:
          "The fastest-growing top-of-funnel and the single biggest gap. Detroit techno is having a Gen Z moment with Carl Cox / Hawtin clips and 'birthplace of techno' explainers in active rotation. Currently no creator network amplifying year-round events into that audience.",
      },
      {
        name: "Resident Advisor / Mixmag / DJ Mag",
        description:
          "Where the international techno audience reads. Movement gets year-round editorial coverage. Year-round Paxahau venue programming is more sporadic — a fixable distribution gap with consistent press cadence.",
      },
      {
        name: "Reddit + Discord",
        description:
          "/r/electronicmusic, /r/aves, /r/Detroit, and Movement-specific Discords are where the actual community talks. Sentiment is overwhelmingly positive but completely unowned. A community-listening layer here informs creative every week.",
      },
    ],
    quotes: [
      {
        text: "Once you enter Hart Plaza, you'll never return to yourself again. Everyone is there for the love of music — it feels like a techno family reunion.",
        source: "EDM Identity / Movement '25 review",
      },
      {
        text: "More than half of the lineup featured artists who are Black, queer, and/or identify as women. That's not a marketing line, that's the actual booking. That's why this festival means what it means.",
        source: "Mixmag / Movement '25 coverage",
      },
      {
        text: "Movement is the longest-running dance festival in the world for a reason — Paxahau has stayed independent and that's why it still feels like ours.",
        source: "Billboard interview / Jason Huvaere",
      },
    ],
  },

  targets: [
    {
      metric: "Owned Audience",
      value: "1M+",
      context:
        "Stitch the AXS ticket-buyer database, Hive newsletter, and Laylo SMS list into a single Paxahau-owned audience layer with 1M+ addressable contacts segmented by venue, genre, and buying behavior — a sovereign asset that compounds across every future Movement cycle and year-round event.",
    },
    {
      metric: "Year-Round Sell-Through Lift",
      value: "+25%",
      context:
        "Lift sell-through on Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial events vs. baseline through PACING DASHBOARD-driven media surges, Laylo lifecycle drops, and creator-led discovery — caught in week 1 of onsale, not on doors.",
    },
    {
      metric: "Movement '27 Pre-Onsale List",
      value: "100K+",
      context:
        "Build a Movement '27 pre-onsale interest list of 100K+ ahead of the November 2026 announcement window — the difference between a public AXS link doing the work and a primed owned audience already lined up.",
    },
    {
      metric: "TikTok Reach",
      value: "10M+",
      context:
        "Generate 10M+ TikTok views across Paxahau-affiliated creator content during the pilot — capturing the Gen Z techno-discovery wave before any competing festival operator does.",
    },
  ],

  competitive: {
    summary:
      "Paxahau's competitive position is unique in dance music: the only operator running both a 25-year-old globally significant festival AND a year-round programming calendar in the genre's literal birthplace. ARC, Resistance, Time Warp, and Tomorrowland compete on festival scale and corporate marketing horsepower — none of them own the year-round Detroit calendar or the cultural authority Paxahau has built. The opportunity in 6 months is to leapfrog all of them on marketing infrastructure — pacing intelligence, lifecycle activation, and creator-driven discovery — without compromising the independence that makes Paxahau Paxahau.",
    competitors: [
      {
        name: "ARC Music Festival — Chicago / House Counterpart",
        strength:
          "Polished marketing rollout, disciplined creator program, sophisticated pacing on year-over-year ticket sales, strong house-music narrative as Movement's sibling-city counterpart",
        gap: "ARC is a single-weekend operator. Paxahau owns the year-round Detroit calendar that no Chicago promoter can match — but currently markets year-round events with a fraction of ARC's discipline. Closing that infrastructure gap is the single fastest competitive win.",
      },
      {
        name: "Insomniac / Resistance — EDC, Resistance Tours",
        strength:
          "Massive corporate paid media budget, deep creator network, vertically integrated production, global tour scaling",
        gap: "Insomniac is corporate by definition — and Movement attendees actively choose Paxahau because it isn't. Don't fight that battle on Insomniac's terms. Win on independence + Detroit authority + year-round operator depth, all of which Insomniac structurally cannot replicate.",
      },
      {
        name: "Time Warp — Mannheim / NA Expansion",
        strength:
          "International techno purist credibility, premium production design, tightly curated lineups, growing US footprint",
        gap: "Time Warp's NA play is single-night-stadium with a global lineup — closer to a tour than a festival ecosystem. Paxahau's year-round venue programming is a structural advantage Time Warp will spend a decade trying to build. Marketing infrastructure parity protects that advantage.",
      },
      {
        name: "Tomorrowland — Boom, Belgium",
        strength:
          "Branded universe, One World Radio platform, year-round Tomorrowland-branded experiences, world-class digital production",
        gap: "Tomorrowland is a brand-platform. Paxahau is a city. The Paxahau opportunity isn't to imitate Tomorrowland's brand machine — it's to make Detroit itself the always-on platform, with year-round programming, owned audience, and creator narrative all reinforcing that one core idea: this is where techno actually lives.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month pilot from infrastructure deployment through full year-round campaign execution and the Movement '27 announcement window — every phase designed to stack a calibrated pacing model and an activated owned audience underneath the 2027 onsale.",
  timelineImageCaption: "6 Months / 5 Phases / Movement '27-Ready",

  timeline: [
    {
      phase: "Infrastructure Build",
      week: "Weeks 1–4",
      date: "June 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy the PACING DASHBOARD — ingest AXS, Tixr, and Eventbrite data feeds across every Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial event currently on sale; configure sell-through prediction, risk-tier alerts, and per-venue baselines",
        "Activate the Laylo lifecycle layer — segmentation by venue, genre, and historical buyer behavior; welcome sequences, pre-show drops, and post-show reactivation flows. Stitch the existing Hive newsletter and the laylo.com/paxahau SMS list into one sovereign Paxahau-owned audience",
        "Stand up paid media architecture — Meta, TikTok, and YouTube ad accounts; pixel and CAPI tracking; conversion event mapping; AXS ticket-buyer audience uploads as seed lookalikes for soft-market support",
        "Set up the COMMENT ENGINE — fan-page network mapped, comment templates seeded by event type and genre, deployment workflow tested on the first 3 announcement posts of the pilot",
      ],
    },
    {
      phase: "Year-Round Activation",
      week: "Weeks 5–12",
      date: "July – August 2026",
      status: "upcoming" as const,
      tasks: [
        "Run PACING DASHBOARD live across the full year-round calendar — weekly sell-through reports, soft-market alerts in week 1 of onsale, dynamic media-budget recommendations per event",
        "Launch paid media campaigns supporting Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial events — geo-targeted across Detroit, the Midwest faithful, and the international Movement-attendee retargeting pool",
        "Execute Laylo lifecycle drops on every event — pre-show hype 5 days out, day-of push, post-show reactivation 24 hours after doors. Three touchpoints per event, segmented by venue and persona",
        "Launch the creator network — 8–12 Detroit-rooted and techno-credible creators producing weekly content tied to year-round programming, AIR program artists, and the Movement '27 narrative ramp",
      ],
    },
    {
      phase: "Pilot Mid-Point Calibration",
      week: "Weeks 13–16",
      date: "September 2026",
      status: "upcoming" as const,
      tasks: [
        "PACING DASHBOARD model recalibration — review first 12 weeks of sell-through data, refine prediction baselines per venue, and adjust risk-tier thresholds based on real performance",
        "Mid-pilot performance report — capture-rate analysis, channel ROI breakdown, persona segment performance, creator network attribution. Brief the Paxahau team on what's working and where to lean in for the second half",
        "Begin Movement '27 narrative ramp — controlled tease content across Movement social channels and the creator network, designed to build pre-onsale interest without front-running the announcement",
        "Optimize Laylo segmentation — based on first 12 weeks of behavioral data, refine the segments and re-cut the audience for the heavier Q4 push",
      ],
    },
    {
      phase: "Movement '27 Announcement",
      week: "Weeks 17–20",
      date: "October 2026",
      status: "upcoming" as const,
      tasks: [
        "Pre-onsale list build for Movement '27 — Laylo capture campaigns, paid media drives to interest forms, creator-led 'sign up before the lineup drops' content. Target: 100K+ pre-onsale list by end of October",
        "First-wave Movement '27 announcement support — coordinated rollout across paid media, organic social, creator network, and Laylo lifecycle. The COMMENT ENGINE seeds the announcement post on hour one",
        "Continue year-round programming support — Magic Stick / TV Lounge / Spot Lite / Masonic / Russell Industrial events through the fall calendar with full PACING DASHBOARD coverage",
        "Press and editorial coordination — Resident Advisor, Mixmag, DJ Mag, 5 Magazine, Detroit Metro Times briefings on the 2027 program direction and the year-round programming strategy",
      ],
    },
    {
      phase: "Onsale + Pilot Wrap",
      week: "Weeks 21–24",
      date: "November 2026",
      status: "upcoming" as const,
      tasks: [
        "Movement '27 onsale execution — paid media surge across Meta, TikTok, and YouTube; Laylo pre-onsale exclusive drops to the captured list 24 hours before public; PACING DASHBOARD live monitoring through the first 14 days of onsale",
        "Final year-round programming push for Q4 events — sell-through optimization across the November / early-December calendar, holiday-window paid media calibrated to local Detroit and out-of-town Movement attendees",
        "Pilot wrap report — full 6-month performance audit, PACING DASHBOARD model accuracy benchmarks, Laylo audience composition by segment, paid-media efficiency by channel, creator network ROI, and Movement '27 onsale velocity vs. previous-year baselines",
        "Year 2 readiness plan — recommended scope expansion or contraction, calibration handoff for ongoing pacing operations, and the strategic blueprint for 2027 across both Movement and year-round Detroit programming",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable is designed to capture audience data, drive incremental ticket revenue, or surface real-time market intelligence across Paxahau's year-round Detroit calendar and the Movement '27 build cycle.",

  deliverables: [
    {
      category: "PACING DASHBOARD + COMMENT ENGINE",
      icon: "●",
      items: [
        {
          name: "PACING DASHBOARD Deployment",
          quantity: "All venues",
          description:
            "CCD's proprietary pacing intelligence platform — real-time sell-through dashboards across every Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial event. Soft markets flagged in week 1, dynamic media-budget recommendations every Friday, prediction baselines refined every 4 weeks",
        },
        {
          name: "Weekly Pacing Reports",
          quantity: "24 reports",
          description:
            "Per-event sell-through reports with trend lines, velocity indicators, soft-market alerts, and actionable media-allocation recommendations — delivered every Friday throughout the pilot",
        },
        {
          name: "COMMENT ENGINE",
          quantity: "All key posts",
          description:
            "Organic-feeling fan engagement seeded on every Movement and Paxahau announcement, lineup wave, stage reveal, and major venue event — fan-page network deployment within 60 minutes of post publish, designed to read as a moment to the algorithm and the audience",
        },
      ],
    },
    {
      category: "Owned Audience Layer (Laylo + Hive)",
      icon: "◆",
      items: [
        {
          name: "Laylo Lifecycle Build",
          quantity: "1 build",
          description:
            "Full Laylo activation — segmentation schema (venue, genre, buyer history, fan tier), welcome sequences, pre-show / day-of / post-show flows for every event, and the migration plan that finally stitches Hive newsletter, AXS buyers, and the existing laylo.com/paxahau list into one Paxahau-owned audience",
        },
        {
          name: "Lifecycle Drops",
          quantity: "150+ sends",
          description:
            "Pre-show hype, day-of push, and post-show reactivation flows on every Paxahau-promoted year-round event — 3 touchpoints per show, segmented by venue and persona, with SMS prioritized for high-intent windows",
        },
        {
          name: "Movement '27 Pre-Onsale Build",
          quantity: "1 campaign",
          description:
            "Targeted capture campaign building a 100K+ pre-onsale Movement '27 list ahead of the November announcement window — paid media + Laylo capture pages + creator-led 'sign up before the lineup drops' content",
        },
        {
          name: "AXS Audience Sync",
          quantity: "Quarterly",
          description:
            "Quarterly export and sync of AXS ticket-buyer data into the Laylo / Meta / TikTok audience layer — turning the walled-garden 25-year buyer base into a live retargeting and lookalike asset Paxahau actually controls",
        },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Facebook and Instagram campaigns supporting year-round programming and Movement '27 — Detroit core, Midwest faithful, and the international Movement-attendee retargeting pool. Ad spend billed separately + 15% management fee",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads targeting the Gen Z techno-curious wave — capturing the discovery audience that's finding Detroit on TikTok and converting them to year-round ticket sales + Movement '27 pre-onsale signups",
        },
        {
          name: "YouTube Campaigns",
          quantity: "6 months",
          description:
            "Pre-roll and discovery ads targeting electronic music audiences in Detroit, Midwest, and tier-1 international Movement source markets (London, Berlin, Mexico City, São Paulo, Tokyo) for sustained year-round demand",
        },
      ],
    },
    {
      category: "Organic Social + Content",
      icon: "■",
      items: [
        {
          name: "Content Capture",
          quantity: "6 months",
          description:
            "Editorial-grade capture at year-round venue events — DJ-set highlights, AIR program artist features, founder-context content, and Detroit street-level B-roll — feeding social, paid creative, and the Movement '27 narrative ramp",
        },
        {
          name: "Social Strategy + Posting",
          quantity: "6 months",
          description:
            "Strategy, calendar, and execution across @paxahau and @movementdetroit Instagram, TikTok, X, and YouTube — with a dedicated year-round programming layer that no longer plays second fiddle to Movement",
        },
      ],
    },
    {
      category: "Creator Network",
      icon: "◐",
      items: [
        {
          name: "Detroit-Rooted Creator Roster",
          quantity: "8–12 creators",
          description:
            "Curated network of Detroit-rooted and techno-credible TikTok / IG Reels creators — weekly content tied to year-round venue programming, AIR program artists, and the Movement '27 narrative ramp. Built to capture the Gen Z discovery wave the genre is currently pulling in",
        },
        {
          name: "Creator-Led Activations",
          quantity: "10+ activations",
          description:
            "On-site creator coverage at marquee year-round events and Movement '27 announcement moments — purpose-built content drops designed for native platform performance, not afterthought repurposes. Creator fees billed separately + 15% management fee",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this engagement — and where the boundaries are. This is a focused pilot scope built around the year-round Detroit calendar and the Movement '27 build cycle.",
    included: [
      "PACING DASHBOARD deployment, configuration, and ongoing monitoring across all year-round Paxahau-promoted venue events (Magic Stick, TV Lounge, Spot Lite, Masonic, Russell Industrial)",
      "COMMENT ENGINE deployment on all major announcement posts, lineup waves, and stage reveals across Movement and Paxahau social channels",
      "Laylo lifecycle infrastructure build — segmentation, automation flows, pre-show / day-of / post-show drops, and the unified audience-stitching plan across Hive, AXS, and existing Laylo data",
      "Paid media strategy, creative direction, and campaign management across Meta, TikTok, and YouTube",
      "Organic social strategy and execution across @paxahau and @movementdetroit handles, with dedicated year-round programming coverage",
      "Detroit-rooted creator network — creator sourcing, brief development, content management, and on-site activations",
      "Movement '27 announcement and pre-onsale support, including the 100K+ pre-onsale list build",
      "Weekly strategy calls and monthly performance reporting throughout the 6-month pilot",
    ],
    excluded: [
      "Festival production, talent booking, and venue operations — Paxahau owns those workstreams in full; CCD operates exclusively on the marketing layer",
      "Graphic design, key art, and lineup poster production (available as add-on — scoped and quoted separately)",
      "Music video and long-form documentary production (available as add-on)",
      "PR and earned media — coordinated with existing Paxahau press partners but not directly managed by CCD",
      "Ad spend and creator fees — media budgets billed directly to platforms, creator fees billed at cost. CCD manages campaigns and creator relationships at a 15% management fee",
      "Website rebuild, e-commerce migration, or AXS / Tixr integration engineering work (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Strategy & Account Direction",
        description:
          "Senior strategy oversight, weekly calls with the Paxahau team, monthly performance reporting, and the cross-channel calibration that keeps every workstream feeding the same outcome",
        price: 6000,
        recurring: true,
      },
      {
        name: "PACING DASHBOARD + COMMENT ENGINE",
        description:
          "CCD's proprietary pacing intelligence system across every year-round venue event + COMMENT ENGINE deployment on all key Movement and Paxahau announcement posts",
        price: 5000,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign management and optimization across Meta, TikTok, and YouTube — ad spend billed separately to platforms at a 15% management rate",
        price: 5000,
        recurring: true,
      },
      {
        name: "Organic Social + Content Capture",
        description:
          "Strategy, calendar, content capture, and execution across @paxahau and @movementdetroit Instagram, TikTok, X, and YouTube — with dedicated year-round programming coverage",
        price: 6000,
        recurring: true,
      },
      {
        name: "Laylo Lifecycle (Email + SMS)",
        description:
          "Full Laylo activation — segmentation, automation flows, pre-show / day-of / post-show drops, and the audience-stitching plan unifying Hive, AXS, and existing Laylo data",
        price: 3500,
        recurring: true,
      },
      {
        name: "Creator Network + Fan-Page Seeding",
        description:
          "Detroit-rooted creator network management, brief development, content management, and on-site activations. Creator fees billed at cost + 15% management",
        price: 4500,
        recurring: true,
      },
    ],
    subtotal: 30000,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Media Budget",
      amount: 20000,
      note: "Recommended ad spend across Meta, TikTok, and YouTube — billed directly to platforms at a 15% management fee. Scaled per event and per Movement '27 phase based on PACING DASHBOARD signals.",
    },
    total: 180000,
    paymentSchedule: [
      {
        milestone: "Month 1 (June 2026)",
        percentage: 16.67,
        amount: 30000,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (July 2026)",
        percentage: 16.67,
        amount: 30000,
        due: "July 1, 2026",
      },
      {
        milestone: "Month 3 (August 2026)",
        percentage: 16.67,
        amount: 30000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 4 (September 2026)",
        percentage: 16.67,
        amount: 30000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 5 (October 2026)",
        percentage: 16.67,
        amount: 30000,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 6 (November 2026)",
        percentage: 16.65,
        amount: 30000,
        due: "November 1, 2026",
      },
    ],
    paymentTerms: "7 days from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve & Sign",
      description:
        "Review the proposal, ask any questions, and sign off. We'll send a formal agreement and Month 1 invoice.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering AXS / Tixr / Eventbrite data feed access, Hive newsletter credentials, current Laylo configuration, ad account access, and the year-round events we should be tracking on day one.",
    },
    {
      step: 3,
      title: "PACING DASHBOARD Activation",
      description:
        "We ingest AXS, Tixr, and Eventbrite ticket data and configure the PACING DASHBOARD across every Magic Stick, TV Lounge, Spot Lite, Masonic, and Russell Industrial event currently on sale within the first 10 days of kickoff.",
    },
    {
      step: 4,
      title: "Laylo Build + Audience Stitch",
      description:
        "Full Laylo segmentation, automation flows, and the unified audience layer stitching Hive newsletter, AXS ticket buyers, and the existing laylo.com/paxahau SMS list — live and capturing within 3 weeks of kickoff.",
    },
    {
      step: 5,
      title: "Campaigns Go Live",
      description:
        "Paid media, creator network, and the COMMENT ENGINE all deploy by Week 5. From there the PACING DASHBOARD runs live, every event gets the full lifecycle treatment, and the Movement '27 narrative ramp begins.",
    },
  ],

  cta: {
    headline: "20 years of Movement. The next 6 months sets up the next 20.",
    body: "Paxahau has built one of the only operator positions in dance music that no corporate festival company can replicate — independent, Detroit-rooted, year-round. Crowd Control Digital brings the marketing infrastructure layer that protects and compounds that position: pacing intelligence on every show, owned audience underneath every campaign, creator-driven discovery for the next generation finding Detroit techno for the first time. Six months to prove the model. Then the 2027 cycle starts from a much stronger base.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/paxahau/hero1.png",
    heroBg: "/images/paxahau/hero-bg.jpg",
    hero2: "/images/paxahau/hero2.png",
    product: "/images/paxahau/product.png",
    editorial: "/images/paxahau/editorial.png",
    texture: "/images/paxahau/texture.png",
    brutalist: "/images/paxahau/brutalist.png",
    hero1Caption: "Pacing Intelligence + Year-Round Marketing",
    brutalistCaption: "Paxahau × Crowd Control Digital",
    ogImage: "/images/paxahau/og-image.png",
  },
};
