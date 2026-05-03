import type { ProjectData } from "../project-context";

export const breakingBenjamin: ProjectData = {
  accentColor: "#B91C1C",

  client: {
    name: "Breaking Benjamin",
    logo: "",
    contactName: "Management",
    contactRole: "Management",
    contactEmail: "management@breakingbenjamin.com",
    industry: "Music / Active Rock / Touring",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "AWAKEN : THE FAN ENGINE",
    tagline:
      "30 amphitheaters and arenas. The first new album in 7 years. One system that turns every ticket scan, presale code, and merch swipe into an owned audience the band controls forever — powered by TOUR CONTROL, built around the Fall 2026 NA tour with Chevelle, Starset, and Kami Kehoe.",
    type: "Tour Data Capture + Revenue Intelligence",
    startDate: "July 1, 2026",
    endDate: "December 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will deploy a full data capture and revenue intelligence layer around Breaking Benjamin's Fall 2026 North American tour. CCD's proprietary TOUR CONTROL platform delivers real-time ticket pacing intelligence across all 30 markets, while a purpose-built fan data system captures email, SMS, and behavioral data from every touchpoint — ticket purchases, presale code redemptions, VIP package activations, merch transactions, and on-site capture. Paid media campaigns drive ticket velocity in soft markets and accelerate streaming growth around the new BMG album cycle. The result: an owned fan database that the band controls — not the label, not Live Nation, not Ticketmaster — and that compounds across every future tour and release.",
    objectives: [
      "Deploy TOUR CONTROL across all 30 Fall 2026 markets — real-time ticket pacing dashboards, sell-through prediction, and dynamic media allocation so paid spend flows to the dates that need it most",
      "Stand up a band-owned fan data system — capturing email, SMS, and behavioral data from ticket buyers, VIP attendees, fan club returners, and the TikTok-driven 'Diary of Jane' discovery wave",
      "Rebuild the broken fan club layer — the official fan club is currently offline and not accepting sign-ups during the biggest tour and album cycle in 7 years; close that hole on day one",
      "Execute paid media campaigns across Meta, TikTok, and YouTube for ticket sales support, BMG album streaming growth, and merch conversion across all 30 dates",
      "Convert presale codes into a list-building tool — every presale acquires a fan record that lives in the band's CRM, not just Ticketmaster's",
    ],
    subtitle:
      "Data capture, real-time tour intelligence, and paid media — built by the agency that runs this exact playbook for arena rock, K-Pop, and stadium electronic tours.",
    imageCaption: "Tour Data Capture + Revenue Intelligence",
    stats: [
      {
        value: 30,
        label: "Markets Monitored",
        description:
          "Real-time ticket pacing and sell-through intelligence via TOUR CONTROL across every Fall 2026 NA date — Camden through Bristow",
      },
      { value: 100, suffix: "K+", label: "Fan Data Target" },
      { value: 6, label: "Month Campaign" },
      { value: 4, label: "Revenue Streams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited Breaking Benjamin's full digital ecosystem — website, fan club, socials, presale strategy, ticketing infrastructure, BMG label transition, and the active rock competitive landscape. The findings are unusually clear: the audience demand is enormous and re-activated. The marketing infrastructure that captures and monetizes it is currently broken or owned by other parties. This proposal closes both gaps in 90 days.",
    insights: [
      {
        label: "Fan Club Is Down",
        finding:
          "breakingbenjamin.com/fanclub explicitly states the fan club is being upgraded and 'is not currently accepting any new sign-ups.' This is during a 30-date amphitheater tour and the first new album in 7 years. Every fan visiting the site right now leaves with no way to opt in. This is the single highest-leverage fix on the list.",
        source: "breakingbenjamin.com/fanclub-faq audit",
      },
      {
        label: "Presale Codes Are Wasted",
        finding:
          "The Fall 2026 presale code 'AWAKEN' was published openly on the official Facebook page. A presale code is a fan-data acquisition machine when it's gated behind email/SMS opt-in — this one acquired nothing. Across 30 dates, that is tens of thousands of unsigned-up fans walking through the highest-intent purchase moment of the year.",
        source: "facebook.com/BreakingBenjamin / Feb 2026 post",
      },
      {
        label: "Walled-Garden Data",
        finding:
          "Ticket-buyer data sits inside Live Nation/Ticketmaster. Streaming and pre-save data sits inside BMG (the band moved from Hollywood Records for the new album cycle). VIP package data sits with VIP Nation. Merch data sits with the print-on-demand vendor. The band team can see reports — but cannot independently segment, retarget, or build flows on their own cadence. The audience exists; it lives behind walls that aren't yours.",
        source: "Ticketmaster / VIP Nation / BMG infrastructure audit",
      },
      {
        label: "TikTok Discovery Without Capture",
        finding:
          "'Diary of Jane' is in active rotation as a Gen Z and millennial nostalgia anchor on TikTok — guitar covers, lyric edits, 'dad rock' nostalgia formats. New fans are discovering Breaking Benjamin every week. None of that discovery is being captured into a list, retargeted, or converted into a ticket sale. The top of the funnel is leaking the entire tour.",
        source: "TikTok hashtag analysis: #breakingbenjamin, #diaryofjane",
      },
      {
        label: "The Active-Rock Streaming Gap",
        finding:
          "Breaking Benjamin sits at 8.4M Spotify monthly listeners — between Shinedown (7.4M) and Disturbed / Three Days Grace (18M+). The catalog is there. The new album is the first since 2018's Ember. A focused 6-month paid streaming push around the album + tour window can credibly close that gap and the album cycle is the single best moment to do it.",
        source: "Spotify / Chartmetric monthly listener comparison",
      },
    ],
    marketContext:
      "The Fall 2026 active-rock touring market is dense — Disturbed, Three Days Grace, Shinedown, and Five Finger Death Punch all running competing amphitheater runs. Breaking Benjamin's edge is genuinely strong: the first headline tour of an album cycle, a lineup featuring James Cassells (Asking Alexandria) on drums, and 7 years of pent-up demand from a famously loyal fanbase. But that edge gets squandered without infrastructure. The fan club is dark. Presale codes are public. The label transition to BMG means the artist team needs sovereign data even more than before. This is the single most leveraged moment in the band's last decade — and it's 90 days away.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Breaking Benjamin's fanbase is the deepest in active rock — multi-generational, blue-collar to white-collar, Midwest and Mid-Atlantic-heavy, and re-activated by a new album for the first time since 2018. They show up. They've always shown up. The infrastructure to recognize that loyalty hasn't existed yet.",
    demographics:
      "25–54 core, 60% male, 40% female. Strongest concentrations in the Midwest, Mid-Atlantic, and South. Suburban and exurban skew, blue-collar to white-collar mix.",
    demographicCards: [
      {
        label: "Age Range",
        value: "25–54 core",
        detail: "30–44 peak spending demo",
      },
      {
        label: "Gender",
        value: "60% male / 40% female",
        detail: "Wider female skew than most active rock",
      },
      {
        label: "Geography",
        value: "Midwest + Mid-Atlantic + South",
        detail: "Camden, Pittsburgh, Detroit, Nashville, Dallas top markets",
      },
      {
        label: "Behavior",
        value: "High intent / low frequency",
        detail: "Lifelong fans, multi-tour attendees, deep merch buyers",
      },
    ],
    personas: [
      {
        name: "The Pit Veteran",
        ageRange: "35–50",
        description:
          "Has been a Breaking Benjamin fan since Saturate or Phobia. Has seen the band 4+ times across their career. Owns vinyl, owns merch from multiple eras, and is now bringing their teenager to the Fall 2026 tour. Wants priority access, recognition for loyalty, and tour-exclusive collectibles.",
        traits: ["Vinyl Collector", "Multi-Tour Attendee", "VIP Buyer", "Brings Family"],
      },
      {
        name: "The Awakened Returner",
        ageRange: "28–44",
        description:
          "Was a Phobia / Dear Agony era fan, drifted away during the 2010 hiatus and the long gap between albums, and is now being pulled back by the new album cycle and 'Awaken' single. High-intent, ready to spend, but currently not on any list. Discovers tour news from Spotify, TikTok algorithms, or word of mouth — never from the band directly.",
        traits: ["Returning Fan", "High Spend", "Spotify Discoverer", "Ungated Audience"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "16–26",
        description:
          "Found Breaking Benjamin through 'Diary of Jane' on TikTok or a Spotify Daylist 'dad rock revival' moment. No historical relationship yet. Curious, streaming the catalog backwards, and could become a multi-decade fan if captured into a real CRM right now during the album cycle.",
        traits: ["TikTok-Native", "Catalog Streamer", "Gen Z / Younger Millennial", "Nostalgia-Curious"],
      },
    ],
    psychographics: [
      "Loyalty-driven and emotionally invested — fans connect to Burnley's lyrics about anxiety, loss, and persistence in a way that runs deeper than typical artist parasocial bonds",
      "Authenticity-allergic to industry polish — the audience smells 'corporate rock' immediately and rewards bands that feel like the same guys who started in basements in Wilkes-Barre",
      "Multi-decade attention spans — these are not trend-chasers. They've been waiting 7 years for a new album and they intend to be at every tour stop they can drive to",
      "Community over ceremony — fans organize around the Reddit, Facebook, and YouTube comment sections more than any official platform, because the official platform (the fan club) has been functionally dark",
    ],
    painPoints: [
      "The official fan club has been broken / inaccessible — fans wanting deeper engagement literally cannot sign up",
      "Presale and VIP information arrives late through Ticketmaster spam, not directly from the band — fans miss windows on tickets they desperately want",
      "Long gaps between albums and tours mean fans lose touch — there's no consistent newsletter, no SMS list, nothing that maintains the relationship between cycles",
      "Tour merch and exclusive drops are inconsistent — fans hear about city-edition designs after they're sold out, with no waitlist, no restock alert, no mechanism to be first in line next time",
    ],
    purchaseTriggers: [
      "First new album in 7 years — the Awaken cycle is once-in-a-decade urgency that creates a massive purchase window across tickets, vinyl, and merch",
      "Limited tour-exclusive vinyl variants and city-edition merch — the existing fanbase will collect aggressively if the drops are clearly communicated and gated",
      "VIP packages with M&G access — already exists via Ticketmaster but conversion is depressed because the upsell never reaches standard ticket holders post-purchase",
      "Presale code access — when 'AWAKEN' goes public on Facebook, every fan should already have it via SMS or email so the code IS the loyalty signal, not just a public discount",
    ],
    platforms: [
      {
        name: "Facebook",
        description:
          "Still the primary social hub for the core 30+ fanbase — large official community group, high comment volume on every band post. The 'AWAKEN' presale code dropped here. This is where the fanbase actually lives, even though it's the least flashy platform.",
      },
      {
        name: "TikTok",
        description:
          "The fastest-growing top-of-funnel. 'Diary of Jane' and 'I Will Not Bow' are in active nostalgia rotation among Gen Z and millennial users. Massive untapped fan-acquisition channel — currently captured by no one, retargeted by no one.",
      },
      {
        name: "Spotify",
        description:
          "8.4M monthly listeners. Catalog deep-divers come in through 'Diary of Jane' and Daylist placements. Pre-save activity around 'Awaken' single. BMG owns this data layer — band team has visibility but not portability.",
      },
      {
        name: "Instagram + YouTube",
        description:
          "IG underutilized relative to Facebook engagement — Reels barely cross-posted from TikTok. YouTube lyric videos drive consistent long-tail discovery and are the single strongest evergreen funnel for new listeners after Spotify.",
      },
    ],
    quotes: [
      {
        text: "Breaking Benjamin albums are consistent front to back — every song has a purpose and a place. That's why people stay loyal for 20 years.",
        source: "Reddit / r/BreakingBenjamin",
      },
      {
        text: "I Will Not Bow gave me something to hold onto when nothing else worked. That's not a song, that's a lifeline. They have thousands of fans like me.",
        source: "Fan comment / YouTube",
      },
      {
        text: "Diary of Jane is having a TikTok moment right now and my 16-year-old just discovered the band that got me through high school. That feels like full circle.",
        source: "Facebook fan group / 2026",
      },
    ],
  },

  targets: [
    {
      metric: "Fan Database Size",
      value: "100K+",
      context:
        "Capture email/SMS data from 100,000+ fans across the full tour cycle — ticket buyers, presale registrants, VIP attendees, fan club returners, and TikTok-driven sign-ups. This becomes the band-owned audience for every future cycle.",
    },
    {
      metric: "Data Capture Rate",
      value: "30%+",
      context:
        "Target 30% opt-in rate from ticket holders across all 30 markets — industry benchmark for data-gated exclusive incentives at amphitheater-scale active rock tours.",
    },
    {
      metric: "Incremental Tour Revenue",
      value: "+15%",
      context:
        "Lift per-head merch and VIP revenue through pre-registration drops, city-edition designs, post-show digital bundles, and direct VIP upsell funnels vs. baseline tour performance.",
    },
    {
      metric: "Spotify Monthly Listeners",
      value: "12M+",
      context:
        "Grow from 8.4M to 12M+ monthly listeners during the Awaken album + tour window through paid media, playlist strategy, and TikTok-to-Spotify conversion campaigns. Closes most of the gap to Disturbed / Three Days Grace.",
    },
  ],

  competitive: {
    summary:
      "Breaking Benjamin competes for the same Fall 2026 amphitheater audience as Disturbed, Three Days Grace, Shinedown, and Five Finger Death Punch — all running competing tour cycles. The difference isn't the catalog or the fanbase loyalty. It's marketing infrastructure. Each of these competitors has a more functional CRM, more disciplined presale gating, and tighter VIP / merch funnels. The Breaking Benjamin opportunity is to leapfrog them in 6 months by building exactly that infrastructure around the Awaken album cycle and 30-date tour.",
    competitors: [
      {
        name: "Disturbed — 18M Monthly Listeners",
        strength:
          "Massive crossover catalog with 'The Sound of Silence' delivering mainstream lift, consistent album cadence, sophisticated presale gating",
        gap: "Disturbed runs presales through Cellarbeasts fan club with disciplined email gating — Breaking Benjamin's fan club is currently offline. Closing that gap is the single fastest infrastructure win.",
      },
      {
        name: "Three Days Grace — 18.1M Monthly Listeners",
        strength:
          "Multi-vocalist era refresh, tight release cadence, strong merch + VIP ecosystem with re-engagement flows",
        gap: "3DG actively retargets concert-goers with email + SMS for follow-up tours. Breaking Benjamin sends nothing direct to fans between cycles — the gap to fix here is the post-show lifecycle, not the on-sale moment.",
      },
      {
        name: "Shinedown — 7.4M Monthly Listeners",
        strength:
          "Brent Smith's media presence, active TikTok strategy, organized fan club with tiered membership perks",
        gap: "Shinedown has fewer monthly listeners than Breaking Benjamin but a more functional CRM. Streaming dominance without infrastructure is half the picture — Breaking Benjamin should not lose this comparison and currently does.",
      },
      {
        name: "Chevelle — 1.6M Monthly Listeners (Tour Support)",
        strength:
          "Loyal cult fanbase, intentionally underground brand, consistent touring presence",
        gap: "Smaller scale, but as a tour support act on this run they bring an additional pre-engaged fanbase that should be captured at every venue with the same on-site capture infrastructure.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through full tour execution and post-tour monetization — every phase designed to maximize data capture and incremental revenue across the Fall 2026 NA run.",
  timelineImageCaption: "6 Months / 6 Phases / 30 Markets",

  timeline: [
    {
      phase: "Infrastructure Build",
      week: "Weeks 1–4",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy TOUR CONTROL platform — ingest ticket pacing data across all 30 Fall 2026 markets, configure sell-through prediction models and risk-tier alert thresholds",
        "Rebuild the fan club capture layer — Laylo SMS/email infrastructure, segmentation architecture (by market, era, purchase behavior, fan club returner status), welcome sequences, and migration plan for any salvageable legacy fan club data",
        "Set up paid media architecture — Meta, TikTok, and YouTube ad accounts, pixel/CAPI tracking, conversion events, and seed audiences from Spotify For Artists + Live Nation ticket data feeds",
        "Design data-gated exclusive strategy — tour-only vinyl variants, city-edition merch, presale codes gated to email/SMS, and VIP upsell funnels for standard ticket holders",
      ],
    },
    {
      phase: "Pre-Tour Campaigns",
      week: "Weeks 5–8",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch pre-tour data capture campaigns — Laylo drop pages for each market, SMS keyword campaigns, social-to-list conversion funnels across Facebook, Instagram, and TikTok",
        "Activate paid media for ticket sales — geo-targeted campaigns across Meta and TikTok driving remaining ticket inventory across all 30 markets, prioritizing TOUR CONTROL-flagged risk-tier dates",
        "Begin TOUR CONTROL market monitoring — weekly pacing reports, sell-through velocity tracking, and budget reallocation recommendations for underperforming dates",
        "Execute first data-gated merch drop — exclusive pre-tour vinyl variant or apparel design available only to SMS/email subscribers, with TikTok-driven hype creative",
      ],
    },
    {
      phase: "Tour Ramp-Up",
      week: "Weeks 9–12",
      date: "September 2026",
      status: "upcoming" as const,
      tasks: [
        "Intensify paid media around Awaken album + tour — Spotify listener growth campaigns targeting Disturbed / 3DG / Shinedown lookalikes, playlist pitching support, streaming-to-ticket conversion funnels",
        "TOUR CONTROL dynamic allocation — shift media budget in real-time based on pacing data. Surge support to markets below 80% sell-through (Council Bluffs, Shakopee, smaller secondary markets are usually the soft spots)",
        "Launch VIP upsell funnels — targeted campaigns to standard ticket holders promoting M&G upgrades, premium reserved tier conversions, and signed memorabilia bundles",
        "Finalize on-site capture kits for all 30 venues — QR codes, SMS keyword signage, merch booth opt-in incentives, and venue-specific Laylo landing pages with city-edition merch previews",
      ],
    },
    {
      phase: "Tour Execution",
      week: "Weeks 13–16",
      date: "October 2026",
      status: "upcoming" as const,
      tasks: [
        "Run TOUR CONTROL in real-time — daily pacing dashboards, dynamic media shifts to remaining-inventory markets, sell-through velocity alerts as tour rolls Camden → Toronto → Detroit → Denver → Anaheim → Bristow",
        "Execute market-by-market lifecycle campaigns — pre-show hype (3 days out), day-of push, post-show exclusive drop (24hr window) for each of the 30 dates",
        "On-site data capture at every venue — QR-to-Laylo, SMS keyword signage, merch booth opt-in, VIP registration data sync. Capture rate target: 30%+ of attendees",
        "Paid media surge for final ticket push — retargeting engaged non-buyers, lookalike expansion in soft markets, post-show ticket-stub-driven retargeting for next-cycle interest",
      ],
    },
    {
      phase: "Post-Tour Monetization",
      week: "Weeks 17–20",
      date: "November 2026",
      status: "upcoming" as const,
      tasks: [
        "Full tour data analysis — capture rates by market, fan database composition by era / persona, revenue attribution across tickets, VIP, and merch touchpoints",
        "Launch post-tour merch drops to captured database — tour recap exclusives, city-edition restocks, holiday vinyl bundles, signed limited editions",
        "TOUR CONTROL season report — pacing model accuracy audit, media efficiency analysis, market intelligence brief for 2027 / European tour planning",
        "Activate cross-sell campaigns — tour attendees → Awaken album streamers → fan club members → vinyl subscribers — building the full lifecycle map",
      ],
    },
    {
      phase: "Data Activation & Holiday",
      week: "Weeks 21–24",
      date: "December 2026",
      status: "upcoming" as const,
      tasks: [
        "Holiday merch campaign — gift-oriented drops, vinyl bundles, signed-poster promotions, fan-to-fan gifting all driven entirely from the captured database",
        "Year-end fan database health report — list size, engagement rates, revenue per subscriber, persona segment performance, ROI by acquisition channel",
        "Deliver 2027 readiness plan — pre-sale architecture using the owned database (no more public AWAKEN codes), TOUR CONTROL calibration recommendations, and lifecycle campaign blueprints for next album / next tour cycle",
        "Handoff documentation — full platform access, process documentation, BMG / Live Nation / VIP Nation data flow map, and recommended next steps for ongoing fan data activation",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable is designed to capture fan data, drive incremental revenue, or provide real-time market intelligence across the Fall 2026 Awaken tour cycle.",

  deliverables: [
    {
      category: "TOUR CONTROL Platform",
      icon: "●",
      items: [
        {
          name: "TOUR CONTROL Deployment",
          quantity: "30 markets",
          description:
            "CCD's proprietary tour intelligence platform — real-time ticket pacing dashboards, sell-through prediction models, risk-tier market classification, and dynamic media budget recommendations across every Fall 2026 NA date from Camden to Bristow",
        },
        {
          name: "Weekly Pacing Reports",
          quantity: "16 reports",
          description:
            "Market-by-market sell-through analysis with trend lines, velocity indicators, and actionable media allocation recommendations — delivered weekly during pre-tour and tour phases",
        },
        {
          name: "Season Intelligence Report",
          quantity: "1",
          description:
            "Comprehensive post-tour analysis — pacing model accuracy audit, market performance rankings, media efficiency metrics, and data-driven planning brief for 2027 touring + potential European run",
        },
      ],
    },
    {
      category: "Fan Data Capture",
      icon: "◆",
      items: [
        {
          name: "Fan Club Rebuild (Laylo)",
          quantity: "1 build",
          description:
            "Full Laylo implementation — replaces the currently-offline fan club with a modern fan capture layer, segmentation schema (market, era, purchase behavior, VIP tier, returner vs new), welcome sequences, and post-show flows",
        },
        {
          name: "Market Landing Pages",
          quantity: "30 pages",
          description:
            "City-specific Laylo drop pages for every Fall 2026 NA date — localized presale access, merch previews, M&G upsell, and SMS/email opt-in tied to each show",
        },
        {
          name: "On-Site Capture Kit",
          quantity: "30 activations",
          description:
            "QR codes, SMS keyword signage, and merch booth opt-in incentives designed for every venue — capturing attendee data at the point of maximum engagement (entry, merch, VIP, post-show)",
        },
        {
          name: "Lifecycle Campaigns",
          quantity: "90+ sends",
          description:
            "Pre-show hype, day-of push, and post-show exclusive drop sequences for every market — 3+ touchpoints per show, personalized by city and persona segment via Laylo",
        },
      ],
    },
    {
      category: "Paid Media & Growth",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Facebook and Instagram campaigns — ticket sales, Awaken album streaming, VIP upsell, vinyl drops, and retargeting of engaged fans across all 30 markets. Facebook is where this fanbase actually lives — we lean in",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads targeting the 'Diary of Jane' nostalgia wave — capturing the Gen Z / younger millennial discovery audience and converting them to streaming + ticket sales for soft markets",
        },
        {
          name: "YouTube Campaigns",
          quantity: "6 months",
          description:
            "Pre-roll and discovery ads targeting active rock audiences in tour markets — Awaken album promotion, lyric video distribution, and subscriber growth campaigns. YouTube is the single strongest evergreen catalog funnel for this band",
        },
        {
          name: "Spotify Growth Strategy",
          quantity: "6 months",
          description:
            "Paid listener acquisition campaigns, Disturbed / 3DG / Shinedown lookalike targeting, playlist pitching coordination, and market-by-market streaming pushes to close the gap from 8.4M to 12M+ monthly listeners during the album + tour window",
        },
      ],
    },
    {
      category: "Revenue Optimization",
      icon: "■",
      items: [
        {
          name: "VIP Upsell Funnels",
          quantity: "30 markets",
          description:
            "Targeted campaigns to standard ticket holders promoting Premium VIP Package upgrades — M&G access, signed posters, side-stage viewing, and exclusive challenge coin / pin set as conversion incentives",
        },
        {
          name: "Data-Gated Vinyl & Merch Drops",
          quantity: "5 drops",
          description:
            "Exclusive vinyl variants and merch releases available only to email/SMS subscribers — pre-tour, mid-tour, post-tour, holiday, and a new-year reactivation drop with city-edition variants and signed limited editions",
        },
        {
          name: "Post-Show Digital Bundles",
          quantity: "30 bundles",
          description:
            "City-specific digital content packages (exclusive photos, behind-the-scenes footage, setlist playlists, post-show acoustic content) delivered to attendees post-show via Laylo — each gated behind data opt-in to convert one-time attendees into long-term subscribers",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this engagement — and where the boundaries are. This is a focused data capture and revenue intelligence scope built around the Fall 2026 NA tour and the Awaken album cycle.",
    included: [
      "TOUR CONTROL platform deployment, configuration, and ongoing monitoring across all 30 Fall 2026 NA markets",
      "Laylo fan data infrastructure build — replaces the currently-offline fan club, with SMS/email capture, segmentation, automation flows, and post-show lifecycle campaigns",
      "Paid media strategy, creative direction, and campaign management across Meta, TikTok, YouTube, and Spotify Growth",
      "Market-by-market lifecycle campaigns — pre-show, day-of, and post-show sequences for all 30 dates",
      "On-site data capture kit design and production for all 30 venues (QR codes, signage, opt-in incentives)",
      "VIP upsell funnel strategy and execution — Premium VIP Package upgrade campaigns to standard ticket holders",
      "Post-tour data analysis, season intelligence report, and 2027 / European tour readiness plan",
      "Weekly strategy calls and monthly performance reporting throughout the 6-month engagement",
    ],
    excluded: [
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Social media management and day-to-day content posting (available as add-on)",
      "Press / publicity / radio promotion — coordinated alongside but managed by existing BMG and label-side teams",
      "Physical merch production and fulfillment — CCD provides the drop strategy, data capture integration, and marketing. Manufacturing and shipping is handled by existing merch partners",
      "Ad spend — media budgets are billed directly to platforms. CCD manages campaigns and optimization included in the retainer",
      "Website redesign or e-commerce platform migration (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Tour Marketing Strategy & Execution",
        description:
          "End-to-end campaign strategy, market-by-market lifecycle campaigns, VIP upsell funnels, and data-gated merch / vinyl drop planning across all 30 Fall 2026 dates",
        price: 4000,
        recurring: true,
      },
      {
        name: "TOUR CONTROL Platform",
        description:
          "CCD's proprietary tour intelligence system — real-time ticket pacing, sell-through prediction, risk-tier classification, and dynamic media allocation across all 30 markets",
        price: 3000,
        recurring: true,
      },
      {
        name: "Fan Data Infrastructure (Laylo)",
        description:
          "Full Laylo implementation, fan club rebuild, SMS/email capture flows, segmentation architecture, automation sequences, and on-site capture kit design",
        price: 2500,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign management and optimization across Meta, TikTok, YouTube, and Spotify Growth — ad spend billed separately to platforms",
        price: 2500,
        recurring: true,
      },
    ],
    subtotal: 12000,
    setupFee: {
      label: "Onboarding & Platform Build",
      amount: 5000,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    total: 77000,
    paymentSchedule: [
      {
        milestone: "Month 1 (July — includes setup fee)",
        percentage: 22,
        amount: 17000,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (August)",
        percentage: 15.6,
        amount: 12000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 3 (September)",
        percentage: 15.6,
        amount: 12000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 4 (October)",
        percentage: 15.6,
        amount: 12000,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 5 (November)",
        percentage: 15.6,
        amount: 12000,
        due: "November 1, 2026",
      },
      {
        milestone: "Month 6 (December)",
        percentage: 15.6,
        amount: 12000,
        due: "December 1, 2026",
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
        "Review the proposal, ask any questions, and sign off. We'll send a formal agreement and invoice for the first month + setup fee.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering current ad accounts, BMG / Live Nation / VIP Nation data feed access, legacy fan club credentials (if salvageable), and team contact info.",
    },
    {
      step: 3,
      title: "TOUR CONTROL Activation",
      description:
        "We ingest ticket pacing data from Live Nation and configure TOUR CONTROL for all 30 Fall 2026 markets within the first week.",
    },
    {
      step: 4,
      title: "Laylo Build & Fan Club Replacement",
      description:
        "Full Laylo setup, segmentation schema, capture flows, and the rebuilt fan club layer — live and capturing fans within 2 weeks of kickoff. The current 'not accepting sign-ups' state is the first thing we close.",
    },
    {
      step: 5,
      title: "Campaigns Go Live",
      description:
        "Pre-tour paid media and data capture campaigns launch by Week 5. From here, TOUR CONTROL runs real-time and every touchpoint captures data through the September 2 Camden opener and beyond.",
    },
  ],

  cta: {
    headline: "First new album in 7 years. 30 dates. Let's make sure every fan counts.",
    body: "The Awaken cycle is the biggest Breaking Benjamin moment in a decade. Crowd Control Digital has the proprietary tour intelligence platform, the active rock fan-data playbook, and the team that has run this exact infrastructure for arena and amphitheater tours. Let's turn 30 amphitheater dates into a permanent fan engine the band actually owns.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/breaking-benjamin/hero1.png",
    heroBg: "/images/breaking-benjamin/hero-bg.jpg",
    hero2: "/images/breaking-benjamin/hero2.png",
    product: "/images/breaking-benjamin/product.png",
    editorial: "/images/breaking-benjamin/editorial.png",
    texture: "/images/breaking-benjamin/texture.png",
    brutalist: "/images/breaking-benjamin/brutalist.png",
    hero1Caption: "Tour Data Capture + Revenue Intelligence",
    brutalistCaption: "Breaking Benjamin × Crowd Control Digital",
    ogImage: "/images/breaking-benjamin/og-image.png",
  },
};
