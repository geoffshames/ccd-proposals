import type { StrategyPlanData } from "../plan-context";

export const miguelTestSprint: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/miguel-test-sprint/og-image.png",
  language: "en",

  cover: {
    label: "Test & Learn Sprint / Now Through July",
    title: "MIGUEL",
    subtitle: "A 45-day, three-bucket test flight: merchandise, first-party CRM, and the damned moment. Every dollar reports revenue against spend.",
    partnership: "Miguel × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "June 2026",
    backgroundImage: "/images/miguel-test-sprint/hero.png",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Objective",
      subtitle: "One all-in number, three revenue-accountable buckets, and a defined set of tests. The sprint exists to produce the data that sizes the fall album and tour budget.",
      body: [
        "This plan operationalizes the mandate from our June 9 call: be prescriptive, fund a test-and-learn window from now through the end of July, and report every bucket as dollars in versus revenue out. The budget below is sized to avoid false positives without being bloated. Each bucket carries its own tests, its own success gates, and its own pre-committed scale rule, so by the end of the window we know exactly what a dollar buys in each lane.",
        "Three buckets run in parallel. Merchandise tests creative, pieces, and audiences against the leftover tour inventory at a steady $100 per day, with a hard ROAS gate before any scale-up. First-party CRM runs straight data capture into Hive so we can price a contact with real CAC math once consolidation lands. And damned, the live catalog moment at roughly 460 to 500K streams per day, gets the execution budget from the existing campaign plan while the window is still open.",
        "Reporting runs as agreed: biweekly 15-minute health checks (June 25, July 9, July 23), with a full readout and a fall scale proposal delivered in the final week of the sprint.",
      ],
      supports: {
        heading: "What This Sprint Supports",
        items: [
          "The damned catalog moment while the window is live",
          "Post-tour merchandise sell-through on existing inventory",
          "CRM consolidation onto Hive and compounding owned-list growth",
          "The fall album and tour budget, sized on this sprint's data",
        ],
      },
      goals: {
        heading: "What We Will Know by Day 45",
        items: [
          "Merch: which creative angle, which pieces, and which audiences convert, and the true cost per purchase",
          "CRM: the blended cost to acquire a fan contact, by offer, channel, and geo",
          "damned: whether structured spend converts a UGC spike into a durable streaming base",
          "The scale case: where each incremental dollar should go in August and beyond",
        ],
      },
      footnote: "This sprint sits alongside the existing engagement. The current retainer continues per the existing agreement and is not duplicated in this budget.",
    },

    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "Buckets, not checklists. Every bucket reports dollars in and revenue out. Prove the recipe small, then fund it big.",
      hierarchy: [
        {
          label: "Merchandise (The Margin Engine)",
          description: "The clearest pay-for-yourself lane. Physical inventory already exists, Shopify access is live, and at roughly 30 percent net margin the math is unambiguous: breakeven sits near 3.3x ROAS, and anything sustained above it earns more budget automatically. The test phase prices a purchase; the scale phase buys them in volume.",
        },
        {
          label: "First-Party CRM (The Compounding Asset)",
          description: "Every contact captured is owned forever and monetizes across every future lane: merch drops, presales, releases. The sprint prices the contact while Hive consolidation unifies the list. A proven sub-$5 CPA against a $20-plus annual value per contact is the strongest scale argument in this entire plan.",
        },
        {
          label: "damned (The Live Catalyst)",
          description: "A use-it-or-lose-it catalog moment. The trend already peaked on creation and streams are still accelerating, which is precisely the conversion window. This bucket runs the existing campaign plan: paid clipping volume, owned page network, real-listener streaming, playlisting, and official artist assets, all pointed at one record.",
        },
      ],
      messaging: [
        "Each test has a pre-committed gate and a pre-committed scale rule. No mid-flight improvisation and no vanity metrics.",
        "Budgets are per sprint, not annual. The fall album and tour window authorizes a fresh budget sized by this sprint's results.",
        "Spend follows proof. Dollars reallocate weekly toward whatever lane is clearing its gate.",
        "Everything captured (purchasers, contacts, listeners) feeds the fall campaign as warm audience infrastructure.",
      ],
      footnote: "The target operating point: attributable net revenue covering fees plus spend, so the engagement pays for itself and scale decisions become arithmetic.",
    },

    {
      type: "structure",
      number: "03",
      navLabel: "Structure",
      title: "Proposal Structure",
      intro: "One all-in number for the 45-day sprint (June 11 through July 25). CCD fees sit inside the budget, not on top. Merch and CRM run the full window; damned front-loads into the first four weeks while the moment is live. The fall album and tour cycle authorizes a fresh budget on the same structure.",
      tiers: [
        {
          label: "Test & Learn Sprint",
          budget: "$24,750",
          name: "All-In Budget",
          goal: "Run three revenue-accountable buckets for 45 days: merch creative-to-scale testing at $100 per day, CRM capture at $50 to 100 per day into Hive, and the full damned execution stack. Exit with real CAC, real ROAS, and a data-sized fall proposal.",
          featured: true,
          includes: [
            "Merch paid social: creative, piece, and audience tests concurrent from week 1, with a hard scale gate",
            "CRM capture flights with offer, channel, and geo splits measured in Hive",
            "damned execution: clipping, page network, Strive, and a $3K boost reserve behind winners",
            "Artist content briefed and edited by CCD, produced by Miguel at no hard cost",
            "Biweekly health checks plus a full end-of-sprint readout",
            "Fall album + tour budget proposal, sized on sprint data",
          ],
        },
      ],
    },

    {
      type: "vertical",
      number: "04",
      navLabel: "Merch",
      title: "Bucket 1 / Merchandise Test & Scale",
      philosophy: "Price a purchase before buying purchases in volume. All three tests run concurrently from week 1 inside the $100 per day envelope; the only thing that waits is spending more. The gate math decides when $100 per day becomes $250 to 500.",
      intro: "Total bucket: $4,500 in media ($100 per day x 45 days). Runs on Meta (IG + FB) with Shopify as the source of truth. Store access is already granted. Creative, piece, and audience tests all launch in the week 1 window; budget never exceeds $100 per day until the scale gate clears.",
      subBlocks: [
        {
          label: "A",
          title: "Creative Test (Live Week 1)",
          budget: "$100/day",
          objective: "Find the creative angle that sells before optimizing anything else.",
          strategy: "Three angles enter, one leaves: tour-footage video cuts (the CAOS run as the backdrop), clean product-focused statics, and UGC-style worn-by-fans content. Even-split budget across angles against broad and engaged audiences.",
          components: {
            heading: "Tests",
            items: [
              "Angle test: tour footage vs. product statics vs. UGC-style, even split",
              "Format test: Reels-first video vs. static carousel within the winning angle",
              "Advantage+ vs. manual placements baseline read",
            ],
          },
          kpis: [
            "Winning angle identified by CTR + cost per add-to-cart by Day 14",
            "At least 3 creatives clearing 1 percent CTR",
            "Pixel + catalog events verified end to end in week 1",
          ],
        },
        {
          label: "B",
          title: "Piece-Level Test (Live Week 1)",
          budget: "Within the $100/day flight",
          objective: "Learn which pieces actually sell so inventory and scale decisions follow demand, not guesswork.",
          strategy: "Catalog sync from Shopify powers dynamic product ads across the full merch range from day one, with leftover tour inventory prioritized for sell-through. Runs alongside the creative test; winning angles rotate in as they prove.",
          components: {
            heading: "Tests",
            items: [
              "Dynamic catalog ads across the full range: which pieces pull purchases",
              "Tour-inventory push: dedicated ad sets on overstocked pieces",
              "Price-point read: where conversion clusters across the range",
            ],
          },
          kpis: [
            "Top 3 pieces by ROAS identified by Day 30",
            "Measurable sell-through on leftover tour inventory",
            "Cost per purchase trend established per price tier",
          ],
        },
        {
          label: "C",
          title: "Audience Test (Live Week 1) + Scale Gate",
          budget: "Within the $100/day flight, stepping up only via the gate",
          objective: "Prove which audiences buy, then scale mechanically on the math.",
          strategy: "All three audience tiers (owned: CRM list + engaged followers, lookalike, broad) run from week 1 inside the daily envelope. At roughly 30 percent net margin, breakeven is about 3.3x ROAS. The gate, not opinion, decides scale: budget holds at $100 per day until the math clears it.",
          components: {
            heading: "The Scale Rule",
            items: [
              "Ad set sustains 3.3x+ ROAS for 7 days: budget steps up 20 percent every 72 hours",
              "Blended account ROAS holds 3.5x+ for 7 days: CCD proposes the August step-up to $250 to 500 per day",
              "Anything below 2x for 7 days gets killed and budget reallocates to winners",
            ],
          },
          kpis: [
            "Blended ROAS and true cost per purchase, by audience tier",
            "Merch revenue attributable to paid, reported dollars-in / dollars-out",
            "A go / no-go scale recommendation with the math attached",
          ],
        },
      ],
      footnote: "Estimated bucket spend lands in the $3,000 to 5,000 range depending on in-flight kills and the gate; $4,500 is budgeted. Every dollar saved reallocates inside the sprint.",
    },

    {
      type: "vertical",
      number: "05",
      navLabel: "CRM",
      title: "Bucket 2 / First-Party CRM Growth",
      philosophy: "The list is the asset the trend rents. A contact worth $20-plus per year that costs under $5 to acquire is the best trade in music marketing; this bucket proves we can make that trade at will.",
      intro: "Total bucket: $3,500 in media (roughly $75 per day x 45 days, flexing $50 to 100 per day). Pure data capture measured in Hive. The sprint prices a contact so list growth can scale on real math.",
      subBlocks: [
        {
          label: "A",
          title: "Hive Consolidation (The 30-Day Checkbox)",
          budget: "No media cost / CCD-managed workstream",
          objective: "One deduped list in one system so CAC and revenue-per-contact are actually measurable.",
          strategy: "Klaviyo and S1C stop fighting for attention: both consolidate into Hive over the next 30 days. The artist account is already live from mid-tour, CCD has a direct line to Hive's CTO for the custom S1C integration, and capture pages run on Hive from week one so paid never waits on migration.",
          components: {
            heading: "Workstream",
            items: [
              "Audit + export of Klaviyo and S1C lists, dedupe, and import into Hive",
              "Custom S1C integration scoped directly with Hive engineering",
              "Capture pages live on Hive in week 1; full CAC reporting firm from week 3",
            ],
          },
          kpis: [
            "Single consolidated list live in Hive by Day 30",
            "Baseline established: contacts, reachability, revenue per send",
          ],
        },
        {
          label: "B",
          title: "Capture Offer + Channel Test (Weeks 2-7)",
          budget: "$50-100/day",
          objective: "Find the cheapest repeatable path to a real fan contact.",
          strategy: "Three offers tested against each other: an unreleased damned live one-take as a gift, early access to the next merch drop, and a fall presale waitlist. Each offer runs across instant lead forms and Hive capture pages to isolate channel cost.",
          components: {
            heading: "Tests",
            items: [
              "Offer test: damned exclusive vs. merch early access vs. presale waitlist",
              "Channel test: IG/Meta instant forms vs. click-to-Hive capture page vs. TikTok lead gen",
              "Contact quality read: confirm rate, SMS opt-in rate, first-broadcast engagement",
            ],
          },
          kpis: [
            "Blended CPA at or under $5; winning combination at or under $3",
            "Net-new contacts reported weekly, dollars-in / contacts-out",
          ],
        },
        {
          label: "C",
          title: "Geo Split + The Scale Case (Weeks 4-7)",
          budget: "Within the capture flight",
          objective: "Price a US contact against a Mexico contact and write the scale math for list growth.",
          strategy: "Miguel's five biggest cities in the world are all Mexican. A US vs. MX split tells us whether LATAM list growth is materially cheaper, which would reshape how the fall budget allocates. The end-of-sprint readout converts proven CPA into a funded path toward the contact target, layered with the label list pull and S1C integration.",
          components: {
            heading: "Tests",
            items: [
              "US vs. MX capture cost on identical offers",
              "Spanish-language capture creative vs. English in MX",
              "Revenue-per-contact baseline from the first Hive broadcasts",
            ],
          },
          kpis: [
            "CPA by geo, with a recommendation on LATAM list-growth weighting",
            "A written scale model: dollars required per block of contacts at proven CPA",
          ],
        },
      ],
      footnote: "Paid capture is one of several rails for list growth; this sprint prices the paid rail. The label list, S1C integration, and show-data capture stack on top.",
    },

    {
      type: "vertical",
      number: "06",
      navLabel: "damned",
      title: "Bucket 3 / The damned Sprint",
      philosophy: "The wave already happened. The next 30 days decide who owns it. This bucket funds the existing damned campaign plan at the recommended level: paid volume to re-ignite creation, conversion programs to turn 172M views into streams, and official assets to give the trend somewhere to land.",
      intro: "Total bucket: $13,550, deployed across the programs of the standing campaign plan. Front-loaded into weeks 1 through 4 of the sprint because the window does not wait. Every program carries its own pre-committed success gate. Third-party playlisting is deliberately held as a phase 2 unlock: fund the conversion layer once weeks 1 and 2 prove the re-ignition.",
      subBlocks: [
        {
          label: "A",
          title: "Clipping Program (Two Waves)",
          budget: "$5,000",
          objective: "Reverse the creates plateau with paid nano-account volume, the trend's own proven engine.",
          strategy: "Wave 1 ($3K, week 1): four briefed lanes (judgment-moment POVs, Wildheart nostalgia edits, lyric-meaning explainers, couple storytimes), official sound required for payout, underperforming lanes killed at 72 hours. Wave 2 ($2K, week 3): winning lane doubled plus a Spanish-caption LATAM lane.",
          kpis: [
            "2.5M+ verified views at $2.00 or under blended CPM",
            "60 percent or more of paid clips on the official sound",
            "Creates curve back to net-positive by Day 10",
          ],
        },
        {
          label: "B",
          title: "Fan + Volume Page Network",
          budget: "$3,750 (one page x 1.5 months)",
          objective: "Always-on trend supply on a page we control, posting 3 to 5 times daily across the proven lanes.",
          strategy: "One US-focused volume page on TikTok + IG Reels, always on the official sound, doubling as the distribution rail for clipping winners and the comment-seeding squad's home base. A second Spanish-language page is a scale lever, gated on Mexico listener movement.",
          kpis: [
            "Network pages contribute a measurable share of new damned creates by Day 30",
            "Page-sourced engagement trending up week over week",
          ],
        },
        {
          label: "C",
          title: "Strive.fm Real-Listener Flight",
          budget: "$1,800 all-in",
          objective: "Roughly 150K real, geo-distributed US streams that feed the algorithmic flywheel.",
          strategy: "damned as the lead track with catalog support slots, geo-weighted to the cities where Shazam shows active song-hunting (Denver, Charlotte, Irvine) plus core US majors. The 30-to-45-day flight deliberately outlives the trend window.",
          kpis: [
            "150K streams pacing to full delivery by Day 45",
            "Save rate on campaign streams at 8 percent or better",
          ],
        },
        {
          label: "D",
          title: "Artist Moment + Official Assets",
          budget: "No hard cost / artist-produced, CCD-briefed",
          objective: "Four weeks of official drops that give the trend an artist-sized accelerant, made by Miguel himself.",
          strategy: "Miguel produces the moment: a trend reaction + nano-creator duet, a stripped live one-take (which doubles as the CRM capture gift), a lyric-meaning storytime answering the search demand, a Spanish-language thank-you to Mexico, and the sped-up + slowed versions. CCD briefs, edits, and schedules everything through the existing posting pipeline; the label ships the official pack and a YouTube visualizer.",
          kpis: [
            "Artist trend-participation post at 5M+ views",
            "Official sped-up pack live by week 3 of the bucket",
          ],
        },
        {
          label: "E",
          title: "Boost Reserve + Capture Layer",
          budget: "$3,000 boost reserve / capture layer at no cost",
          objective: "Force distribution behind proven winners and own the audience the trend rented.",
          strategy: "Spark Ads and TikTok Promote behind the top organic clips, page winners, and Miguel's own trend posts (never cold creative), deployed in $500 to 750 increments at peak velocity. Plus the no-cost capture net: the Hive damned page, comment-seeding squads in English and Spanish, a damned-anchored official playlist spreading the surge across the album, and a radio memo built on the Shazam city data.",
          kpis: [
            "Capture layer converting trend traffic into owned contacts",
            "Boosted posts clearing organic engagement benchmarks at 2x or better",
            "Parent-album streams up 25 percent in the window",
          ],
        },
      ],
      footnote: "Program design, projections, and risk contingencies live in the standing damned campaign plan; this page funds it. Total matches the plan's recommended range.",
    },

    {
      type: "vertical",
      number: "07",
      navLabel: "Scale",
      title: "Scale Triggers (Outside the Ceiling)",
      philosophy: "The throttle opens on proof, not on optimism. Each lever below is pre-negotiated: when the gate clears, the budget call is arithmetic.",
      intro: "None of the following spend is inside the $24,750 ceiling. Each trigger activates only when its gate clears, on a one-line approval.",
      subBlocks: [
        {
          label: "A",
          title: "Merch Step-Up",
          budget: "+$250 to 500/day (August onward)",
          objective: "Scale the proven creative x piece x audience combination.",
          strategy: "Gate: blended ROAS holds 3.5x or better for 7 consecutive days during the sprint. At 30 percent net margin, every dollar in returns measurably more than a dollar out at this level.",
        },
        {
          label: "B",
          title: "Phase 2 Unlock: Playlisting + DSP Push",
          budget: "+$5,000 to start / $10,000 full level",
          objective: "Close the conversion gap: 460K+ daily streams and still zero Spotify editorial placements.",
          strategy: "Held deliberately for phase 2. Gate: weeks 1 and 2 confirm the creates curve is back to net-positive and daily streams hold. Then fund vetted independent curator pitching (2-year growth-chart checks, no guaranteed-stream sellers) plus the label-side editorial memo. The full level projects 300 to 500K playlist-driven streams and 2+ editorial adds.",
        },
        {
          label: "C",
          title: "LATAM Page Two",
          budget: "+$2,500/mo",
          objective: "Open the Spanish-language volume page against the cheapest expansion surface in the plan.",
          strategy: "Gate: Mexico monthly listeners visibly inflect during the sprint, or the MX capture CPA undercuts US by 30 percent or more. Runs translated lyric formats and ties into the standing LATAM plan.",
        },
        {
          label: "D",
          title: "CRM Scale Flight",
          budget: "Sized by proven CPA",
          objective: "Fund list growth at scale with real math.",
          strategy: "Gate: blended CPA at or under $5 proven across 30+ days. The end-of-sprint readout includes the exact model: dollars per block of contacts at proven CPA, layered with the label list pull and S1C integration.",
        },
      ],
      footnote: "All four levers roll into the fall album + tour proposal delivered in the final week of the sprint.",
    },

    {
      type: "flight",
      number: "08",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "How the $24,750 deploys across the 45-day window (June 11 through July 25). The damned bucket front-loads while the moment is live; merch and CRM build steadily and finish the sprint carrying the learning. Playlisting sits outside this number as the phase 2 unlock. Health checks land June 25, July 9, and July 23.",
      totalBudget: "$24,750 all-in",
      phases: [
        {
          label: "Ignite + Instrument",
          window: "Jun 11-28 / ~2.5 weeks",
          focus: "The damned engine turns on at full force: clipping wave 1, page network live, Miguel's content batch briefed and in production. Merch launches the creative test at $100 per day with pixel and catalog instrumentation verified. CRM capture pages go live on Hive while consolidation begins. First health check June 25.",
          budget: "~$11,500",
          tactics: [
            "damned: clipping wave 1 ($3K), page network onboard + posting, Miguel content batch briefed (reaction duet, one-take, storytime, Spanish thank-you, sped/slowed versions)",
            "Merch: creative, piece, and audience tests all live within $100/day; Shopify catalog + pixel verified end to end",
            "CRM: Hive capture pages live, offer test launches; Klaviyo + S1C audit and export",
            "First boost increments behind early organic winners",
          ],
        },
        {
          label: "Convert + Read",
          window: "Jun 29 - Jul 12 / 2 weeks",
          focus: "Attention converts to durable signal. Strive flight launches, clipping wave 2 doubles the winning lane, and the boost reserve goes to work behind proven posts. The phase 2 playlisting unlock gets its go / no-go call here. Merch moves to piece-level and audience testing; CRM offer winner takes the budget while Hive consolidation completes. Health check July 9.",
          budget: "~$8,250",
          tactics: [
            "damned: Strive flight live ($1.8K), clipping wave 2 ($2K), sped-up pack ships, boost reserve scaling behind winners",
            "Merch: consolidate behind winning angle x piece x audience combos, tour-inventory push",
            "CRM: winning offer scaled, US vs. MX geo split live, first broadcasts to new captures",
            "Phase 2 decision: fund the playlisting + DSP unlock if weeks 1-2 cleared their gates",
          ],
        },
        {
          label: "Scale What Pays",
          window: "Jul 13-25 / ~2 weeks",
          focus: "Budget consolidates behind whatever cleared its gate. Merch scale rule executes mechanically. CRM scale model gets written from real CAC. The damned readout feeds the month-two decision. Final health check July 23, then the full sprint readout and the fall album + tour proposal.",
          budget: "~$5,000",
          tactics: [
            "Merch: gate evaluation; winners step 20 percent per 72 hours, losers killed",
            "CRM: scale-case modeling at proven CPA; revenue-per-contact baseline from Hive broadcasts",
            "damned: sustain posture, parent-album cross-pollination, month-two decision memo",
            "Full readout: dollars-in / revenue-out per bucket + the fall scale proposal",
          ],
        },
      ],
      footnote: "Phase budgets are directional; CCD reallocates between line items inside the ceiling based on weekly performance signals.",
    },

    {
      type: "timeline",
      number: "09",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Week-by-week deployment across the 45-day window. The damned workstreams run hot in weeks 1 through 4 while the moment is live. Merch and CRM build through the full window and carry the sprint's learning into the readout. Biweekly health checks land in W3, W5, and W7.",
      weeks: [
        { index: 1, label: "W1", dates: "Jun 11" },
        { index: 2, label: "W2", dates: "Jun 15" },
        { index: 3, label: "W3", dates: "Jun 22" },
        { index: 4, label: "W4", dates: "Jun 29" },
        { index: 5, label: "W5", dates: "Jul 6" },
        { index: 6, label: "W6", dates: "Jul 13" },
        { index: 7, label: "W7", dates: "Jul 20", highlight: true, note: "READOUT" },
      ],
      workstreams: [
        {
          name: "Merch Ads",
          cells: [
            { weekIndex: 1, intensity: "high", label: "LAUNCH" },
            { weekIndex: 2, intensity: "high", label: "TEST" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high", label: "READ" },
            { weekIndex: 6, intensity: "high", label: "SCALE" },
            { weekIndex: 7, intensity: "high", label: "GATE" },
          ],
        },
        {
          name: "CRM Capture",
          cells: [
            { weekIndex: 1, intensity: "low", label: "BUILD" },
            { weekIndex: 2, intensity: "medium", label: "LAUNCH" },
            { weekIndex: 3, intensity: "high", label: "OFFERS" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "medium", label: "GEO" },
            { weekIndex: 6, intensity: "medium", label: "SCALE" },
            { weekIndex: 7, intensity: "medium", label: "READ" },
          ],
        },
        {
          name: "Hive Migration",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "MERGE" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "medium", label: "QA" },
            { weekIndex: 5, intensity: "high", label: "LIVE" },
          ],
        },
        {
          name: "damned Clipping",
          cells: [
            { weekIndex: 1, intensity: "high", label: "WAVE 1" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high", label: "WAVE 2" },
            { weekIndex: 4, intensity: "medium" },
          ],
        },
        {
          name: "Page Network",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "ONBOARD" },
            { weekIndex: 2, intensity: "high", label: "POST" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
          ],
        },
        {
          name: "Strive Flight",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "SETUP" },
            { weekIndex: 3, intensity: "high", label: "FLIGHT" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "low" },
          ],
        },
        {
          name: "Artist Content",
          cells: [
            { weekIndex: 1, intensity: "high", label: "CREATE" },
            { weekIndex: 2, intensity: "medium", label: "DROP 1" },
            { weekIndex: 3, intensity: "medium", label: "DROP 2" },
            { weekIndex: 4, intensity: "medium", label: "DROP 3" },
            { weekIndex: 5, intensity: "medium", label: "DROP 4" },
          ],
        },
        {
          name: "Health Checks",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "CHECK" },
            { weekIndex: 5, intensity: "medium", label: "CHECK" },
            { weekIndex: 7, intensity: "high", label: "DECIDE" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Everything turns on",
          items: [
            "damned clipping wave 1 live across four briefed lanes; page network onboarded and posting",
            "Miguel content batch in production: reaction duet, live one-take, storytime, Spanish thank-you, sped/slowed versions (CCD briefs + edits)",
            "Merch: creative, piece, and audience tests all live at $100/day; pixel + Shopify catalog verified",
            "Hive capture pages live; Klaviyo + S1C list audit begins",
          ],
        },
        {
          weekIndex: 2,
          title: "First reads + first drops",
          items: [
            "Drop 1: artist trend reaction on owned channels",
            "Clipping lanes killed or doubled at 72-hour marks",
            "CRM offer test live across lead forms and capture pages",
            "First boost increments behind early organic winners",
          ],
        },
        {
          weekIndex: 3,
          title: "Health check 1 (Jun 25)",
          items: [
            "Strive flight launches geo-weighted to Shazam-spiking cities",
            "Clipping wave 2: winning lane + Spanish-caption LATAM lane",
            "Phase 2 playlisting unlock: go / no-go on the weeks 1-2 data",
            "Merch: first winner reads across angle, piece, and audience",
            "15-minute health check: creates curve, CTR reads, capture CPA",
          ],
        },
        {
          weekIndex: 4,
          title: "Conversion week",
          items: [
            "Official sped-up + slowed pack ships; boost reserve behind top organic clips",
            "Merch tour-inventory push at full force",
            "CRM offer winner takes the full daily budget",
            "Hive migration QA; consolidation on track for the 30-day checkbox",
          ],
        },
        {
          weekIndex: 5,
          title: "Health check 2 (Jul 9) + Hive live",
          items: [
            "Consolidated list live in Hive; CAC reporting firms up",
            "US vs. MX geo split live on capture",
            "Drop 4: Spanish-language thank-you; Mexico listener read begins",
            "15-minute health check: ROAS by audience tier, Strive pacing, stream retention",
          ],
        },
        {
          weekIndex: 6,
          title: "Scale rules execute",
          items: [
            "Merch ad sets clearing 3.3x step up 20 percent per 72 hours; losers killed",
            "CRM scale model drafted from proven CPA",
            "damned sustain posture: parent-album cross-pollination, radio memo out",
          ],
        },
        {
          weekIndex: 7,
          title: "Readout + the fall proposal (Jul 23)",
          items: [
            "Final health check, then the full readout: dollars-in / revenue-out per bucket",
            "Scale triggers evaluated against their gates, one-line approvals queued",
            "Fall album + tour budget proposal delivered, sized on sprint data",
          ],
        },
      ],
      footnote: "damned-bucket cells front-load by design; if the trend decays faster than paid volume can replace it, that budget reallocates to streams-conversion per the standing campaign plan's contingencies.",
    },

    {
      type: "pricing",
      number: "10",
      navLabel: "Pricing",
      title: "Final Pricing Sheet",
      intro: "One all-in number for the 45-day sprint. The only CCD fee inside this budget is media management at 15 percent on managed spend; creative is handled within the existing engagement and Miguel produces the artist content himself. The current retainer continues per the existing agreement and is not duplicated here. The fall album and tour cycle authorizes a fresh budget on the same structure.",
      tiers: [
        {
          label: "Test & Learn Sprint",
          budget: "$24,750",
          name: "All-In Budget",
          tagline: "All-in for the 45-day window (June 11 through July 25): three revenue-accountable buckets, every test gated, readout and fall proposal included.",
          featured: true,
          deployable: "$21,550",
          feeBreakdown: {
            retainer: "$0 incremental",
            retainerDetail: "Current retainer continues per existing agreement",
            mediaManagement: "$3,200",
            mediaManagementDetail: "15% on $21,550 managed, rounded down",
          },
          breakdown: [
            { vertical: "Merch Paid Social ($100/day x 45)", amount: "$4,500" },
            { vertical: "CRM Capture Media (~$75/day x 45)", amount: "$3,500" },
            { vertical: "damned Programs (clipping $5K, pages $3,750, Strive $1,800, boost $3K)", amount: "$13,550" },
            { vertical: "CCD Media Management (15% on managed spend)", amount: "$3,200" },
          ],
        },
      ],
      footnote: "Scale triggers (merch step-up, the phase 2 playlisting unlock, LATAM page two, CRM scale flight) sit outside this ceiling and activate on their gates via one-line approval. Biweekly 15-minute health checks: June 25, July 9, July 23.",
    },
  ],
};
