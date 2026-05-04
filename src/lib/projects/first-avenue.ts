import type { ProjectData } from "../project-context";

export const firstAvenue: ProjectData = {
  accentColor: "#865FCC",
  language: "en",

  client: {
    name: "First Avenue",
    logo: "",
    contactName: "First Avenue Marketing",
    contactRole: "First Avenue Productions",
    contactEmail: "info@first-avenue.com",
    industry: "Live Music / Independent Multi-Venue Operator",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "FIRST AVENUE × CCD — PORTFOLIO MARKETING + TOUR CONTROL PILOT",
    tagline:
      "Indie cultural authority. Corporate-marketing velocity. A 3-month pilot wiring predictive ticket pacing, paid media, and Hive activation across all six venues.",
    type: "Venue Marketing Retainer + Tour Control Pacing Tech — 3-Month Pilot",
    startDate: "June 2, 2026",
    endDate: "August 31, 2026",
    duration: "3 Months (Pilot)",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "First Avenue holds the deepest cultural credit line of any indie venue operator in America — the room Prince put on film, the stage Hüsker Dü, the Replacements, Lizzo, and Hippo Campus walked out of, and a 6-venue, 5,750-seat portfolio anchored by Dayna Frank's NIVA leadership. The bones are extraordinary: AXS ticketing across all six rooms, Hive deployed with per-venue segmentation, an existing Memberships program, and a WordPress + WooCommerce stack that already captures owned data. What's missing is velocity. Every show is currently marketed reactively — its own campaign, its own media buy, its own creative — with no shared pacing intelligence and no portfolio-wide audience graph. Live Nation entered 2026 with 26M tickets sold and double-digit growth; the indie sector below 750 capacity dropped 5.3% on the year and 18.6% over three years. The gap is not authority — it is operating system. This 3-month pilot installs that operating system: per-show predictive pacing across all 6 venues, paid media calibrated to each show's pacing trajectory, Hive activation tied to that pacing, and a cross-venue audience graph that finally pulls Mainroom buyers into Fine Line, Turf Club, Palace, and Fitzgerald shows on genre affinity.",
    objectives: [
      "Install predictive ticket pacing across all 6 venues — every show tracked daily against its sell-through model, flagged behind / on / ahead of pace, with calibrated media-spend recommendations attached to each trajectory",
      "Convert reactive per-show media buys into pacing-driven media flighting — Meta, TikTok, and Google ad spend deployed to the shows that need it, when they need it, at the dollar amount the model says will close the gap",
      "Activate the existing Hive list at the per-show level — pacing-triggered email + SMS flows (behind-pace = access offer; on-pace = upsell; ahead-of-pace = better-seats / merch bundle), per-venue segmentation already in place",
      "Build the cross-venue audience graph — Mainroom genre-affinity pulled into Fine Line / Turf Club / Palace / Fitzgerald show recommendations to close the discovery gap fans repeatedly cite",
      "Match Live Nation's content velocity with First Avenue's authority — weekly cultural-institution editorial output (Stars Wall, archival storytelling, fan-poster network) syndicated across paid and Hive at the cadence the indie market actually demands",
    ],
    subtitle:
      "A focused 3-month pilot that proves predictive pacing + portfolio activation at the lowest reasonable risk window before any annual commitment.",
    imageCaption: "Venue Marketing Retainer + Tour Control Pacing Tech",
    stats: [
      {
        value: 6,
        label: "Venues Activated",
        description:
          "Mainroom (1,550), 7th St Entry (250), Fine Line (650), Turf Club (350), Palace Theatre (2,400), Fitzgerald Theater — full portfolio, single operating system",
      },
      { value: 100, suffix: "+", label: "Shows Modeled" },
      { value: 4, label: "Channels Activated" },
      { value: 3, label: "Month Pilot Window" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "We audited first-avenue.com, the AXS storefront, the Hive signup form, social, and the public ticket-pacing data we could see. The takeaway: First Avenue is not a tech laggard. The bones are real — AXS, Hive with per-venue segmentation, Memberships, WordPress + WooCommerce. What's missing is the operating layer that turns those bones into velocity: predictive pacing per show, per-show media calibration, and cross-venue audience activation. The opportunity is not infrastructure-from-scratch. It is the activation tier on top of infrastructure that already exists.",
    insights: [
      {
        label: "Walled-Garden Data — Solved at the Wrong Layer",
        finding:
          "First Avenue already runs Hive with per-venue segmentation toggles configured for Palace, Fitzgerald, Turf Club, and Fine Line — and an SMS opt-in flow on the homepage signup. The Memberships program adds another owned layer. The gap is not capture. The gap is activation: there are no per-show pacing-triggered flows, no cross-venue affinity routing, and no paid-media custom audiences sourced from those Hive segments. The data is sitting still.",
        source: "first-avenue.com homepage signup form audit (Hive SDK + segmentation toggles); Memberships page review",
      },
      {
        label: "AXS Lock-In Means The Pacing Layer Has To Live Outside",
        finding:
          "First Avenue is on an exclusive AXS deal across all 6 venues since February 2021. AXS provides ticketing — it does not provide a portfolio-wide predictive pacing model with calibrated per-show media-spend recommendations. That is precisely the gap CCD's Tour Control system was built to fill: pulling daily counts via export, modeling sell-through trajectories against historical comps, and converting pace-deltas into specific media-spend recommendations per show.",
        source: "Billboard — 'AXS Books First Avenue, Minneapolis Club Loved By Prince & Hüsker Dü Fans' (Feb 2021); Tour Control product spec",
      },
      {
        label: "The Sub-750-Cap Squeeze Is Real",
        finding:
          "Pollstar's 2025 year-end analysis shows the smallest venue category (≤750 cap) average gross down 5.3% YoY and 18.6% over the last three years. First Avenue runs three rooms in or below that band — 7th St Entry (250), Turf Club (350), and Fine Line (650). Live Nation entered 2026 with 26M tickets sold and double-digit growth at the top of the market. Without a marketing operating system that allocates dollars by show pacing, the small rooms get under-served by default and slowly bleed.",
        source: "Pollstar 2025 Year-End Business Analysis (Dec 2025); Live Nation Q3 2025 results (newsroom.livenation.com)",
      },
      {
        label: "'Everything Is Fatty' — Dayna Frank, On The Record",
        finding:
          "The Twin Cities Business profile of First Avenue's economics quoted Dayna Frank directly: 'With social media, everything is really fatty these days. Everyone wants to go to the same shows.' That sentence is the strategic case for predictive pacing in one line. Some shows are oversubscribed; others starve. Per-show pacing intelligence + dynamic media allocation is the only proven system that solves the imbalance — and it is exactly what CCD ships.",
        source: "Twin Cities Business — 'Key Changes: The Tough Economics of Live Music in the Cities' (tcbmag.com)",
      },
      {
        label: "Pabst Theater Group Has Set The Indie Benchmark",
        finding:
          "First Avenue's closest structural peer — Pabst Theater Group in Milwaukee, also a NIVA founding member — operates 6 venues, books 800+ shows/year, and publicly reports $1.3M in annual marketing spend supporting $250M in economic impact. First Avenue runs at comparable scale but is punching below in paid media output and content cadence. Closing that delta does not require Pabst's full budget — it requires Pabst's operating discipline. That is what the pilot is designed to install.",
        source: "Pabst Theater Group About / Connect pages; NIVA member directory",
      },
    ],
    marketContext:
      "May 2026 is the right window to install this system, not the wrong one. Live Nation's machine is widening the gap at the top of the market while indie sub-750 grosses bleed. NIVA's 2025 data shows 64% of indie venues unprofitable in 2024. Twin Cities lost Palmer's after 119 years in 2025. The next 12 months will reward indie operators who run with the discipline of the corporate machine while keeping the cultural authority the corporate machine cannot fake. First Avenue is in the rare position to do both — but only if the pacing + activation layer goes in this summer, ahead of the fall booking surge.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "First Avenue's audience is broader and more loyal than its national reputation suggests. The Twin Cities live-music regular treats First Ave as a cultural institution — the room is the brand. The pilot needs to reach three real segments at once, each with a different relationship to the venue.",
    demographics:
      "21–44 Twin Cities live music regulars; college-and-up Mpls/St. Paul professionals + creatives; touring fans willing to travel for booked acts. Skews indie / alt / hip-hop / electronic, with strong loyalty across genre.",
    demographicCards: [
      { label: "Core Age Tier", value: "25–34", detail: "Highest LTV — Memberships, repeat attendance, merch" },
      { label: "Discovery Tier", value: "21–24", detail: "7th St Entry / Turf Club entry point" },
      { label: "Heritage Tier", value: "35–54", detail: "Stars Wall reverence, Mainroom + Palace + Fitzgerald" },
      { label: "Geo", value: "TC + 200 mi", detail: "Mpls/St. Paul core + Madison, Duluth, Iowa City reach" },
    ],
    personas: [
      {
        name: "The Stars Wall Loyalist",
        ageRange: "30–48",
        description:
          "Has been attending First Avenue shows since college. Talks about the Mainroom the way other people talk about church. Buys Memberships, reads In House, knows who Dan Corrigan is. Currently does not get systematically pulled into Fine Line / Turf Club / Palace shows — a gap that costs revenue every booking week.",
        traits: ["Member", "Multi-Show", "Merch Buyer", "Cross-Venue Convert"],
      },
      {
        name: "The 7th St Entry Discoverer",
        ageRange: "21–28",
        description:
          "Dinkytown / Lyn-Lake creative, in early-career mode. Treats 7th St Entry as the discovery layer — the place to see a band before everyone else. Heavy on TikTok and IG for show research. Most likely to convert the first $20 ticket into 2 years of $35 Mainroom tickets if the post-show flow runs correctly.",
        traits: ["TikTok-Native", "Genre-Curious", "Early Adopter", "Lyn-Lake / Dinkytown"],
      },
      {
        name: "The Routed-Tour Out-of-Towner",
        ageRange: "26–42",
        description:
          "Lives within a 200-mile radius — Madison, Duluth, Iowa City, Fargo. Drives in for specific routed tours that don't stop closer to home. High intent, single-show-per-trip, currently invisible to First Avenue's owned data because they buy through AXS without ever joining Hive.",
        traits: ["High-Intent Buyer", "Single-Trip", "Genre-Specific", "Hive-Capture Gap"],
      },
    ],
    psychographics: [
      "Identity-builders — going to First Avenue is a status marker about taste, not just attendance; the room is part of the personal story",
      "Skeptical of corporate live music — Live Nation / Ticketmaster lock-in is a felt grievance; indie credibility translates directly into trust",
      "Price-sensitive without being cheap — willing to pay for shows they care about, frustrated by the all-in price after AXS fees + Minneapolis 17.525% sales tax",
      "Community-coordinated — group purchases, friend-tagging, post-show debrief on Reddit and IG; word-of-mouth is the dominant recommendation channel",
    ],
    painPoints: [
      "FOMO + scarcity gap — 'everyone wants to go to the same shows' (Dayna Frank, Twin Cities Business). Hot shows sell out before fans hear about them; slower shows starve for attention even when the act is strong",
      "Cross-venue discovery friction — fans who know the Mainroom calendar by heart routinely miss Fine Line and Turf Club shows that match their taste exactly",
      "Fee + tax shock — Minneapolis sales tax is 17.525% on tickets; combined with AXS service charges, the gap between sticker price and all-in price is jarring at point of purchase",
    ],
    purchaseTriggers: [
      "Pre-sale access via Memberships / Hive — converts FOMO into commitment before public on-sale",
      "Friends-going / social proof signals — TikTok and IG show clips of the room itself, not the artist, drive conversion harder than promo art",
      "Genre-adjacent recommendations from venues fans already trust — 'if you went to X at the Mainroom, you should see Y at Fine Line' is the entire cross-venue thesis",
    ],
    platforms: [
      {
        name: "Instagram",
        description:
          "Primary show-discovery channel for the 25–44 segment. Stories drive most ticket clicks; Reels surface for cultural-institution content. The platform that rewards First Avenue's authentic visual archive most — and where the Mainroom-specific imagery converts best.",
      },
      {
        name: "TikTok",
        description:
          "@firstavenue currently sits at ~18.3K followers and 404K likes. Strong floor for the discovery layer (21–28 segment). Show-clip content from the room itself outperforms artist-promo content; this is the segment most likely to convert a 7th St Entry $20 ticket into Mainroom loyalty.",
      },
      {
        name: "Hive (owned email + SMS)",
        description:
          "Already deployed with per-venue segmentation (Palace, Fitzgerald, Turf Club, Fine Line) and an SMS opt-in flow. The activation gap is per-show pacing-triggered flows, custom-audience export to Meta + TikTok, and cross-venue affinity routing.",
      },
      {
        name: "Reddit (r/Minneapolis, r/TwinCities)",
        description:
          "Where the Twin Cities live-music audience vets shows, debates ticket prices, and posts the next-night debrief. Earned-not-paid surface — but a critical signal for pacing intelligence and post-show sentiment.",
      },
      {
        name: "Meta Ad Library + Google",
        description:
          "Where the corporate competition (Live Nation / Varsity Theater) currently runs unanswered. Closing the paid output gap on these channels — calibrated per show by pacing — is the single highest-leverage paid lever in the pilot.",
      },
    ],
    quotes: [
      {
        text: "If you really want an experience, check out a show in the 7th St Entry next door — you will be practically on the stage with the band.",
        source: "Tripadvisor traveler review of First Avenue & 7th St Entry, 2025",
      },
      {
        text: "First Avenue is celebrated for its intimate atmosphere, excellent sound quality, and rich musical history.",
        source: "Yelp / Tripadvisor sentiment synthesis, May 2026",
      },
      {
        text: "With social media, everything is really fatty these days. Everyone wants to go to the same shows.",
        source: "Dayna Frank, President & CEO, First Avenue — Twin Cities Business profile",
      },
    ],
  },

  targets: [
    {
      metric: "Pilot-Window Sell-Through Lift",
      value: "+8–12%",
      context:
        "Directional 90-day target on shows in the pilot pacing model versus matched comps from the prior 12 months. Target reflects the historical lift produced by predictive pacing + per-show media calibration on portfolios of comparable scale; gains compound with subsequent quarters as the model self-calibrates on First Avenue–specific data.",
    },
    {
      metric: "Hive List Activation",
      value: "3× campaign output",
      context:
        "Move Hive from venue-level periodic sends to per-show pacing-triggered flows. Target is roughly 3× the current campaign volume across the 3-month window, segmented by venue and pacing trajectory. Existing Hive infrastructure makes this a configuration sprint, not a build sprint.",
    },
    {
      metric: "Mainroom → Cross-Venue Crossover",
      value: "15%+",
      context:
        "Directional benchmark for cross-venue affinity activation. Today, Mainroom buyers under-index meaningfully on the smaller / cross-portfolio venues despite high genre overlap. Affinity routing is designed to close that gap during the pilot window.",
    },
    {
      metric: "Paid-Media ROAS on Pacing-Triggered Buys",
      value: "≥4× blended",
      context:
        "Industry benchmark for indie venue paid spend ranges 2.5–3.5× ROAS without pacing intelligence. Pacing-calibrated allocation should clear 4× blended on the pilot — the pacing model directs spend to the shows where elasticity is real, not the shows that are already going to clear.",
    },
  ],

  competitive: {
    summary:
      "First Avenue's competitive set is layered: national indie-prestige peers it should match (9:30 Club / I.M.P., Pabst Theater Group), local corporate competition for the same Twin Cities calendar dates (Varsity Theater / Live Nation, Armory, Target Center), and small-cap risers fragmenting the discovery tier (Berlin, Cloudland, White Squirrel). The pilot's competitive thesis is simple: First Avenue should run with Pabst's marketing discipline at I.M.P.'s prestige tier, while keeping the cultural authority no Live Nation–owned room can fake. Numbers below verified from public sources — capacities and operating data per each venue's own published materials.",
    competitors: [
      {
        name: "9:30 Club / I.M.P. — 5 venues, ~28K combined cap (DC)",
        strength:
          "The indie-multi-venue gold standard. 9:30 Club + The Anthem + Lincoln Theatre + The Atlantis + Merriweather Post Pavilion. Owned by Seth Hurwitz since 1986. Signature brand artifacts (the cupcakes). Single-promoter feeder system that artists travel up through. National prestige narrative locked in.",
        gap: "I.M.P. owns the indie-prestige narrative on the East Coast — First Avenue can claim it for the Midwest with sharper marketing velocity. The Prince / Replacements / Lizzo cultural arc is, frankly, deeper than 9:30's. The gap is output cadence, not authority.",
      },
      {
        name: "Pabst Theater Group — 6 venues, $1.3M annual marketing (Milwaukee)",
        strength:
          "Closest structural peer. 6 venues, 800 shows/year, $250M economic impact, 350 staff. NIVA founding member alongside First Avenue. Publicly reports their marketing spend, signaling operating discipline most indie peers don't.",
        gap: "Pabst has set the operating benchmark Midwest indie peers measure themselves against. First Avenue runs at comparable scale but punches below in paid + content output cadence. The pilot is designed to close that gap without requiring Pabst's full budget — through pacing-driven allocation.",
      },
      {
        name: "Varsity Theater — 750 cap, Live Nation–owned (Minneapolis)",
        strength:
          "Live Nation national tour pipeline + corporate ad budgets. 4,834 sq ft Dinkytown venue with state-of-the-art lighting and sound. Direct competitor for mid-tier indie acts that fit between 7th St Entry (250) and Fine Line (650).",
        gap: "Corporate, generic positioning — no cultural narrative to tell. First Avenue's indie credibility is the moat. Weaponizing that moat in paid media, content, and Hive activation is what closes the per-show competition for the 250–750 cap calendar.",
      },
      {
        name: "Armory / Target Center / Xcel — bigger Mpls / St. Paul rooms",
        strength:
          "Capacity to host arena and amphitheater tours; routes the largest tours that bypass First Avenue's Mainroom. Different venue class but compete for the same calendar window when shows are oversold and additional Twin Cities dates are added.",
        gap: "These rooms sell capacity; First Avenue sells experience. The pacing system + Hive activation lets First Avenue out-target on intent — capturing fans who would rather see the artist at Mainroom or Palace than from row 47 of an arena.",
      },
      {
        name: "Local Indie Risers — Berlin, Cloudland, White Squirrel",
        strength:
          "Berlin (85 cap, North Loop), Cloudland (150 cap, Lake Street), White Squirrel (55 cap, St. Paul). Tightly curated niches; new entrants in the discovery tier; growing critical respect.",
        gap: "No cross-venue infrastructure or membership program. Single-room operators cannot run portfolio activation, and cannot invest in pacing tech or paid media at meaningful scale. First Avenue's portfolio + operating system advantage is the structural moat against indie fragmentation.",
      },
    ],
  },

  timelineSubheading:
    "A focused 3-month pilot built around the Tour Control install, paid + Hive activation rollout, and end-of-window read. Each phase calibrated to a different KPI.",
  timelineImageCaption: "3 Months / 4 Phases / 6 Venues",

  timeline: [
    {
      phase: "Install + Baseline",
      week: "Weeks 1–3",
      date: "June 2026",
      status: "upcoming" as const,
      tasks: [
        "Tour Control system integration — AXS export pipeline, historical comp dataset build, predictive pacing model calibrated on prior 12 months of First Avenue data",
        "Hive audit + per-venue flow architecture — map existing segments, design pacing-triggered flow templates (behind-pace / on-pace / ahead-of-pace) per venue",
        "Paid media account stand-up — Meta, TikTok, Google ad accounts wired to AXS conversion events; Hive segment custom-audience export into Meta + TikTok",
        "Brand discovery + content audit — Stars Wall + In House archive review, weekly editorial calendar template, per-venue content pillars",
      ],
    },
    {
      phase: "Activation Rollout",
      week: "Weeks 4–7",
      date: "June 22 – July 19, 2026",
      status: "upcoming" as const,
      tasks: [
        "Pacing dashboard goes live for all 6 venues; daily pacing review, weekly per-show flight plan distributed to First Avenue marketing team",
        "First wave of pacing-triggered Hive flows shipped — behind-pace access offers, on-pace upsells, ahead-of-pace bundle pushes",
        "Paid media campaigns activate per show in 'flight mode' — pacing trajectory dictates spend, audience, and creative; weekly optimization cadence begins",
        "Cross-venue affinity routing v1 — Mainroom buyer segments tested into Fine Line, Turf Club, Palace, Fitzgerald show recommendations",
        "Cultural-institution content engine begins weekly drops — Stars Wall, archival storytelling, room-feature Reels and TikTok",
      ],
    },
    {
      phase: "Optimization Window",
      week: "Weeks 8–11",
      date: "July 20 – August 16, 2026",
      status: "upcoming" as const,
      tasks: [
        "Pacing model recalibrates weekly on First Avenue–specific data; predicted vs. actual sell-through tracked, divisors tuned per venue",
        "Per-show Hive flows re-segmented based on pacing trigger performance; SMS opt-in growth campaigns layered in",
        "Paid creative iterates against winning hooks — show-clip vs. artist-promo vs. cultural-context cuts; per-platform format optimization",
        "Cross-venue affinity routing v2 — model refined with realized cross-venue conversions; expanded to Membership-tier targeting",
      ],
    },
    {
      phase: "Read-Out + Renewal Decision",
      week: "Weeks 12–13",
      date: "August 17 – August 31, 2026",
      status: "upcoming" as const,
      tasks: [
        "Full pilot attribution analysis — sell-through lift vs. matched comps, paid ROAS, Hive flow performance, cross-venue conversion delta, prediction accuracy by venue",
        "Renewal proposal — annual scope recommendation based on what the pilot proved, including which venues reward the highest-leverage continued investment",
        "Operating-system handoff documentation — pacing model, flow library, audience segments, creative library transferable to First Avenue's internal team",
        "Strategic recommendation memo — fall booking surge readiness, Memberships growth roadmap, paid-media annual plan",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Five workstreams running in parallel across the 3-month pilot. Tour Control installs the operating system; Paid Media + Hive Activation + Content + Strategy run the operating system on every show across all 6 venues.",

  deliverables: [
    {
      category: "Tour Control / Pacing Tech",
      icon: "■",
      items: [
        {
          name: "Per-Show Predictive Pacing Model",
          quantity: "All 6 venues",
          description:
            "Daily pacing model for every show across Mainroom, 7th St Entry, Fine Line, Turf Club, Palace Theatre, and Fitzgerald Theater. Each show modeled against historical comps, sell-through trajectory predicted, behind / on / ahead-of-pace status flagged daily.",
        },
        {
          name: "Per-Show Media Spend Recommendations",
          quantity: "Weekly flight plan",
          description:
            "Weekly written flight plan converting pacing deltas into specific media-spend recommendations per show — channel, audience, creative direction, dollar amount. Designed to plug directly into First Avenue's existing weekly marketing cadence.",
        },
        {
          name: "Pacing Dashboard",
          quantity: "Live, all venues",
          description:
            "Hosted dashboard surfacing daily pacing status across the full portfolio. Accessible to First Avenue marketing + ops + bookings teams. Live recalibration as new ticket counts come in.",
        },
        {
          name: "Prediction Accuracy Tracking",
          quantity: "Self-calibrating",
          description:
            "Predicted vs. actual sell-through tracked weekly per venue. Model divisors retuned on First Avenue–specific data so accuracy compounds across the pilot.",
        },
      ],
    },
    {
      category: "Paid Media Management",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "Per-show, pacing-driven",
          description:
            "Instagram + Facebook Feed / Stories / Reels campaigns built per show, deployed against pacing trajectory. Custom audiences sourced from Hive segments + AXS purchaser data. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "TikTok Advertising",
          quantity: "Per-show, pacing-driven",
          description:
            "Spark Ads boosting top-performing organic and creator content; In-Feed creative tied to pacing trajectory; format-native cuts of show-room footage. Highest-leverage discovery channel for the 21–28 segment.",
        },
        {
          name: "Google / YouTube Advertising",
          quantity: "Per-show, pacing-driven",
          description:
            "YouTube In-Stream + In-Feed plus Google Search defending branded queries (artist + 'first avenue', artist + 'minneapolis tickets'). Closes the gap on Live Nation / AXS branded-search ad coverage.",
        },
        {
          name: "Weekly Optimization + Reporting",
          quantity: "Weekly",
          description:
            "Weekly per-channel optimization sprint and written report — what's working, what's fatiguing, where to redeploy spend, which shows need an additional push or a pull.",
        },
      ],
    },
    {
      category: "Hive Activation (Email + SMS)",
      icon: "◆",
      items: [
        {
          name: "Per-Show Pacing-Triggered Flows",
          quantity: "All venues",
          description:
            "Behind-pace = access offer / pre-sale extension; on-pace = upsell to Membership / merch bundle; ahead-of-pace = better-seats / VIP / merch upgrade. Triggered by pacing model output, sent through Hive's existing per-venue segmentation.",
        },
        {
          name: "Cross-Venue Affinity Routing",
          quantity: "Audience graph",
          description:
            "Mainroom buyer segments routed into Fine Line / Turf Club / Palace / Fitzgerald show recommendations based on genre affinity scoring. Closes the discovery gap fans repeatedly cite.",
        },
        {
          name: "SMS Opt-In Growth",
          quantity: "Conversion sprint",
          description:
            "Existing SMS opt-in toggle activated with pacing-triggered SMS layer (highest-leverage on hot, fast-pacing shows). Coordinated growth campaign during the pilot to expand SMS-eligible base.",
        },
        {
          name: "Memberships Activation",
          quantity: "Lifecycle flows",
          description:
            "Lifecycle flow design for the Memberships program — pre-sale unlock messaging, renewal cadence, exclusive-drop announcements; pulls Hive + WooCommerce data for member-only segmentation.",
        },
      ],
    },
    {
      category: "Content & Brand Velocity",
      icon: "●",
      items: [
        {
          name: "Weekly Editorial Drops",
          quantity: "12 weeks",
          description:
            "Weekly cultural-institution editorial output — Stars Wall features, archival storytelling, In House magazine echoes, fan-poster network amplification. Content the Live Nation machine cannot manufacture.",
        },
        {
          name: "Per-Show Creative Assets",
          quantity: "Per show",
          description:
            "Show-specific paid creative cut for Meta + TikTok + YouTube. Format-native crops, hook variants, and pacing-trajectory-aware messaging (urgency for behind-pace, social proof for ahead-of-pace).",
        },
        {
          name: "Per-Platform Formatting",
          quantity: "All channels",
          description:
            "Editorial drops formatted per platform — IG carousels + Reels, TikTok native cuts, Hive email banners, Twitter / X re-runs of archival moments. One narrative, channel-correct execution.",
        },
      ],
    },
    {
      category: "Strategy & Reporting",
      icon: "▲",
      items: [
        {
          name: "Weekly Per-Show Pacing Review",
          quantity: "12 reviews",
          description:
            "Weekly written review covering pacing trajectory across all venues, paid spend efficiency by show, Hive flow performance, and the next-week flight plan. The single recurring artifact First Avenue's marketing team uses to run the week.",
        },
        {
          name: "Monthly Portfolio Performance Report",
          quantity: "3 reports",
          description:
            "Monthly written report — portfolio-wide sell-through lift vs. matched comps, paid ROAS, Hive performance, cross-venue conversion, prediction accuracy. Designed for First Avenue leadership distribution.",
        },
        {
          name: "Renewal Recommendation Memo",
          quantity: "End of pilot",
          description:
            "End-of-pilot memo: what the pilot proved, what to expand, what to cut, recommended annual scope. Honest read on whether full-year retainer is the right next step or whether a different shape fits better.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in the 3-month pilot — and the boundaries that keep the pilot pilot-shaped. Larger-budget items are scoped separately so the pilot can prove the operating system before commitment.",
    included: [
      "Full Tour Control system install + per-show predictive pacing across all 6 venues for the duration of the pilot",
      "Per-show paid media management on Meta, TikTok, and Google / YouTube — strategy, creative direction, optimization, reporting (ad spend billed separately at 15% management fee)",
      "Hive activation — pacing-triggered flow design + buildout, cross-venue affinity routing, SMS opt-in growth, Memberships lifecycle flows",
      "Cultural-institution content engine — 12 weekly editorial drops, per-show paid creative, per-platform formatting",
      "Weekly per-show pacing review + flight plan; monthly portfolio performance report; end-of-pilot renewal recommendation memo",
      "Coordination with First Avenue's existing marketing, booking, and ops teams — pilot is designed to plug into existing weekly cadence, not replace it",
    ],
    excluded: [
      "Full creative production (photo, video, design beyond paid creative crops) — available as add-on, scoped and quoted separately",
      "Out-of-home / DOOH / wild-postings — available as add-on, scoped and quoted separately",
      "Influencer / creator marketing programs — available as add-on, scoped and quoted separately",
      "Membership platform redesign / WooCommerce build work — out of pilot scope; can be addressed in renewal year-one",
      "AXS replacement / ticketing migration — pilot operates on top of existing AXS infrastructure",
      "Pop-up activations, IRL events, or experiential programs — available as add-on, scoped and quoted separately",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Tour Control / Pacing Tech",
        description:
          "Per-show predictive pacing across all 6 venues, weekly flight plan, hosted pacing dashboard, prediction accuracy tracking",
        price: 3500,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Per-show campaign builds + optimization across Meta, TikTok, Google / YouTube. Ad spend billed separately at 15% management fee",
        price: 2500,
        recurring: true,
      },
      {
        name: "Hive Activation (Email + SMS)",
        description:
          "Pacing-triggered flow design + buildout, cross-venue affinity routing, SMS opt-in growth, Memberships lifecycle flows",
        price: 1500,
        recurring: true,
      },
      {
        name: "Content & Brand Velocity",
        description:
          "Weekly editorial drops, per-show paid creative, per-platform formatting — Stars Wall + archival + show-room cuts",
        price: 1500,
        recurring: true,
      },
      {
        name: "Strategy & Reporting",
        description:
          "Weekly per-show pacing review + flight plan; monthly portfolio report; end-of-pilot renewal memo",
        price: 500,
        recurring: true,
      },
    ],
    subtotal: 9500,
    setupFee: {
      label: "One-Time Setup + Onboarding",
      amount: 7500,
    },
    discount: { label: "", percentage: 0, amount: 0 },
    mediaBudget: {
      label: "Recommended Media Spend",
      amount: 20000,
      amountLabel: "/mo recommended",
      note:
        "Recommended monthly ad spend across Meta, TikTok, and Google / YouTube — billed directly to platforms by First Avenue + 15% CCD management fee. Pacing model determines the per-show allocation. Budget is a recommendation, not a requirement; the pacing system runs at any spend level.",
    },
    total: 36000,
    paymentSchedule: [
      {
        milestone: "Month 1 (includes setup)",
        percentage: 47,
        amount: 17000,
        due: "Upon approval",
      },
      {
        milestone: "Month 2",
        percentage: 26,
        amount: 9500,
        due: "July 1, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 26,
        amount: 9500,
        due: "August 1, 2026",
      },
    ],
    paymentTerms:
      "Net 7 from invoice. Management fees only — ad spend is billed separately by Meta / TikTok / Google to First Avenue, with a 15% CCD management fee applied on the spend through CCD invoicing. Pilot renews into an annual retainer at the end of August unless either side opts out — both parties get a clean exit.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve + Sign",
      description:
        "First Avenue leadership approves the pilot scope and signs the agreement. CCD sends the first invoice ($17,000 = $7,500 setup + $9,500 Month 1 retainer).",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "Short intake — AXS export access, Hive admin login, current ad accounts (Meta, TikTok, Google), website / WooCommerce admin, marketing team contacts and weekly cadence. Roughly 30 minutes of First Avenue time.",
    },
    {
      step: 3,
      title: "Tour Control Install (Weeks 1–3)",
      description:
        "AXS data pipeline up, historical comp dataset built, pacing model calibrated. Hive audit + flow templates designed. Paid accounts wired to conversion events. Brand + content audit complete. Pacing dashboard live.",
    },
    {
      step: 4,
      title: "Activation Rollout (Weeks 4–7)",
      description:
        "First wave of pacing-triggered Hive flows live, paid media campaigns flight per show, cross-venue affinity routing v1 in market, weekly editorial drops begin. First Avenue gets the weekly pacing review + flight plan starting Week 4.",
    },
    {
      step: 5,
      title: "Optimize + Read",
      description:
        "Weeks 8–13. Pacing model self-calibrates, paid creative iterates, cross-venue routing refines. End-of-pilot read-out memo with a clean renewal recommendation: continue, expand, reshape, or end.",
    },
  ],

  cta: {
    headline:
      "The cultural authority is yours. Let's pair it with the operating system the corporate competition runs on.",
    body:
      "First Avenue does not need credibility, scale, or audience. The bones — AXS, Hive, Memberships, six legendary rooms — are already in place. The 3-month pilot installs the velocity layer on top: predictive pacing, per-show paid calibration, Hive activation, and a cross-venue audience graph. If the pilot proves the system, we renew into a year. If it doesn't, both sides get a clean exit. Either way, the data we generate together belongs to First Avenue.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/first-avenue/hero1.jpg",
    heroBg: "/images/first-avenue/hero-bg.jpg",
    hero2: "/images/first-avenue/hero2.jpg",
    product: "/images/first-avenue/product.jpg",
    editorial: "/images/first-avenue/editorial.jpg",
    texture: "/images/first-avenue/texture.jpg",
    brutalist: "/images/first-avenue/brutalist.jpg",
    hero1Caption: "Venue Marketing + Tour Control Pacing Tech",
    brutalistCaption: "First Avenue × Crowd Control Digital",
    ogImage: "/images/first-avenue/og-image.png",
  },
};
