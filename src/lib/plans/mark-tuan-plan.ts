import type { StrategyPlanData } from "../plan-context";

export const markTuanPlanProposal: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/mark-tuan/og-image-plan.png",
  partSwitch: {
    currentCode: "PLAN",
    slug: "mark-tuan",
    code: "AUDIT",
    label: "the brand audit",
    eyebrow: "Part One",
    endTitle: "The Brand Audit",
    endBlurb: "The evidence this plan is built on: market position against sixteen peers, consumption and decay era by era, the Southeast Asia audience profile, 162 videos analyzed frame by frame, and the infrastructure audit.",
    endCta: "Read the audit",
  },

  cover: {
    label: "Part Two / Southeast Asia Launch Plan",
    title: "Night Light",
    subtitle: "What Crowd Control Digital runs for the MILLI feature, priced two ways, Thailand first. The audit this plan is built on sits in Part One.",
    partnership: "Transparent Arts \u00d7 Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/mark-tuan/mark-tuan-hero.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview & Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Objective",
      subtitle: "Thailand already chose Mark Tuan. This plan spends against that, Thailand first, on the two things a budget this size can actually move.",
      body: [
        "The audit in Part One measured five things. Thailand is his largest Spotify market at 55,244 monthly listeners, ahead of the United States, and it is 47.9% of his TikTok audience. His follower base moved 7.8% in eighteen months while monthly listeners swung between 282,423 and 937,006, so the audience each release brings in does not stay. His two biggest tracks and his seventh are collaborations, all of them ahead of every solo single since 2025. He holds five Spotify editorial placements reaching 33,087 people against MILLI's nineteen reaching 2.5 million. And across 162 analyzed videos, no collaboration post has ever let a guest speak, two carry an on-screen ask, and none of his best-performing work contains a single Thai marker.",
        "This plan puts $15,000 to $20,000 against that, and it buys two things: paid media concentrated on Thailand, where his audience already sits and media costs a fraction of Western rates, and a Thai creator wave at the tier where Thai rates make real volume affordable. Creative direction, the asset briefs, the DSP pitch material and the weekly readout sit inside the campaign fee. Everything else the audit surfaced is listed in section 08 as a no-cost recommendation for the artist team, because it costs no money and Crowd Control Digital does not bill for it.",
      ],
      supports: {
        heading: "What This Plan Covers",
        items: [
          "The strategy and the two budget tiers, both Thailand first",
          "Vertical 1: paid media across TikTok, Meta and YouTube, test then scale",
          "Vertical 2: creator seeding on two sound cuts, in two waves",
          "Vertical 3: creative direction and the asset brief, inside the fee",
          "Vertical 4: measurement, DSP pitch material and the weekly readout, inside the fee",
          "What we do not bill for, the phased flight, the ten-week timeline and final pricing",
        ],
      },
      goals: {
        heading: "Campaign Targets (Ten-Week Window, Expected Case)",
        items: [
          "Thailand Spotify monthly listeners: 55K to 150K at cycle peak, the first time a release is promoted to the market that already listens most",
          "Total Spotify monthly listeners: 404K to 750K at cycle peak",
          "Spotify followers: +25K against a base that has added 46K in eighteen months",
          "Creator volume: 5,000+ videos on the official sound across TikTok in Thailand and the region during the window",
          "Paid efficiency: a modelled $0.19 to $0.28 per pre-save or stream action, reported weekly against actuals",
          "Retention: the post-cycle listener floor lands above 350K, versus 282K before the current single",
        ],
      },
      footnote: "Every target carries a worst, expected and best case in the verticals below. Streaming is the one variable this plan reports on rather than guarantees. All figures trace to the audit in Part One, pulled September 3, 2026.",
    },

    // ===================================================================
    // 02. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "Mark Tuan does not need Thailand to discover him. It already has. Every dollar in this plan buys reach in the market that already listens most, or puts the record in front of Thai creators who will carry it further than paid can. Nothing here asks the song to be something it is not, and nothing here bills for work that costs no money.",
      hierarchy: [
        {
          label: "Paid Media, Thailand First",
          description: "The majority of the budget. TikTok, Meta and YouTube spend concentrated on Thailand, where 48% of his TikTok audience already sits and media costs run a fraction of Western rates, with a Southeast Asia ring around it. Every line opens in test mode and scales on data.",
        },
        {
          label: "Creator Seeding",
          description: "The second budget line and the one paid cannot replace. Thai nano and micro creators cost $60 to $610 a video, which makes a real wave affordable at this budget, and the record's beat switch into MILLI's verse is a transition template creators copy on their own once it is seeded.",
        },
        {
          label: "Creative Direction",
          description: "Included in the campaign fee, not a media line. Crowd Control Digital writes the asset briefs, the sound cuts, the end-card spec and the weekly posting plan from the video intelligence findings and the record's actual shape. The artist team produces to them.",
        },
        {
          label: "Measurement and Reporting",
          description: "Also inside the fee. A written weekly readout on spend, creator volume, listener and follower movement by market, and cost per action against the target ranges, with a stated scale-or-cut rule on every line.",
        },
      ],
      messaging: [
        "Audit before prescription: every recommendation in the verticals traces to a measured gap in the audit in Part One.",
        "Streams are not promised. Every target carries a worst, expected and best case, and streaming is the one variable this plan reports on rather than guarantees.",
        "Test, then scale: every paid line opens at roughly 30% of its budget and earns the rest on data inside the first week.",
        "Thailand is promoted like the No. 1 market it already is, not like a future expansion.",
        "Budgets are per cycle. The next release authorizes a fresh budget on the same structure.",
      ],
      footnote: "Two budget lines, media and creators. Two workstreams inside the fee, creative direction and reporting. Everything else in this document is either audit or a no-cost recommendation for the artist team.",
    },

    // ===================================================================
    // 03. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "03",
      navLabel: "Structure",
      title: "Proposal Structure",
      intro: "Two budgets for the Night Light cycle, both Thailand first. Every dollar shown buys media or creators. Creative direction, the asset briefs, the DSP pitch material and the weekly reporting sit inside the Crowd Control Digital campaign fee, which is billed separately and shown in the pricing section. Both tiers run the same ten-week window; the Expanded tier raises the Thai weight, doubles the creator wave and adds a funded Southeast Asia ring.",
      tiers: [
        {
          label: "Foundation",
          budget: "$15,000",
          name: "Thailand-First Launch",
          goal: "Put Night Light in front of the Thai audience that already follows Mark Tuan, and seed the MILLI entrance across Thai creators at the tier where Thai rates make volume affordable.",
          includes: [
            "Thailand paid media across TikTok, Meta and YouTube, test then scale",
            "Thai creator seeding wave: 20 to 25 nano and micro creators across two waves",
            "Light Southeast Asia ring: retargeting and lookalike reach in Malaysia, the Philippines, Indonesia and Singapore",
            "Creative direction, asset briefs and sound cuts (inside the campaign fee)",
            "DSP pitch material and weekly reporting (inside the campaign fee)",
          ],
        },
        {
          label: "Expanded",
          budget: "$20,000",
          name: "Thailand Plus the Southeast Asia Ring",
          goal: "Thailand at full weight, a 35-creator wave with paid usage rights so the winners can be amplified, and a funded ring including Spotify display advertising in the three ring markets where it runs.",
          featured: true,
          includes: [
            "Thailand paid media at full weight across TikTok, Meta and YouTube",
            "Creator wave of 35 across Thailand and the Philippines with Spark Ads usage rights on the winners",
            "Funded Southeast Asia ring including Spotify Marquee in Indonesia, the Philippines and Singapore",
            "Creative direction, asset briefs and sound cuts (inside the campaign fee)",
            "DSP pitch material and weekly reporting (inside the campaign fee)",
          ],
        },
      ],
    },

    // ===================================================================
    // 04. Vertical 1 / Paid Media, Thailand First
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Paid",
      title: "Vertical 1 / Paid Media, Thailand First",
      philosophy: "The majority of the budget. Thailand's media costs are a fraction of Western rates and the audience is already following him; paid exists to move that audience from following to listening.",
      intro: "Benchmarks used below are published 2025 to 2026 Thai and Southeast Asian rates: TikTok CPM roughly $0.60 to $1.60 in Thailand, Meta CPM $2.50 to $4.00 on Facebook with Instagram running 20 to 40% above it, YouTube in-stream around $0.004 per view. Every line opens in test mode at roughly 30% of its budget in the first week and earns the balance on data.",
      subBlocks: [
        {
          label: "A",
          title: "Thailand Core Flight",
          budget: "$10,000 Foundation / $11,000 Expanded",
          objective: "Run the first dedicated paid program in the market that already listens most.",
          strategy: "Three channels, weighted to where the audience and the cost meet. TikTok carries the largest share, running Spark Ads on the organic winners and the top creator posts rather than bespoke ad creative, against fans of MILLI, BamBam, Jackson Wang, Jeff Satur and the Thai pop and hip-hop interest stack, with Thailand's 18-to-34 female core as the seed. Meta runs Instagram Reels and Facebook video on the same assets, because Instagram is where his identical posts systematically out-earn TikTok and where 2.84M Thai followers already sit. YouTube carries the music video and the MILLI-verse cut as in-stream ads at a per-view cost that makes a 375K-view flight cost roughly $1,500. Objectives ladder from video views in week one to engagement and pre-save clicks from week two, with retargeting pools built from viewers and engagers.",
          components: {
            heading: "Channel Split and Modelled Delivery",
            items: [
              "TikTok Spark Ads on organic and creator winners: $5,000 to $5,500, a modelled 3 to 8 million Thai impressions at published rates",
              "Meta Reels and video: $3,500 to $4,000, a modelled 700K to 1.5M impressions depending on the Instagram-to-Facebook weighting",
              "YouTube in-stream on the music video and the MILLI cut: $1,500, a modelled 300K to 400K completed views",
              "Retargeting architecture across video viewers and engagers from week one",
            ],
          },
          kpis: [
            "Thailand Spotify monthly listeners at cycle peak: 90K worst, 150K expected, 250K best (from 55K)",
            "Cost per pre-save or stream action: $0.19 to $0.28 modelled from published benchmarks, reported against actuals weekly",
            "Retargeting pool of 500K+ Thai users by the end of week two after release",
          ],
        },
        {
          label: "B",
          title: "The Southeast Asia Ring",
          budget: "$1,000 Foundation / $3,000 Expanded",
          objective: "Extend the record to four of his top ten markets at the intensity each tier can afford.",
          strategy: "Malaysia, the Philippines, Indonesia and Singapore hold 99K of his monthly listeners between them and returned reported iTunes No. 1 or top-three placements for the last EP without ever being toured or promoted. Foundation runs a light ring: lookalike and retargeting reach on TikTok and Meta against followers and engagers in those markets. Expanded runs a funded ring and adds Spotify Marquee in Indonesia, the Philippines and Singapore, the three ring markets where the product runs and where he clears the 5,000-listener minimum, inside the first 18 days after release. Malaysia runs on TikTok, Meta and YouTube only. The Philippines carries the SB19 collaboration as its creative angle.",
          components: {
            heading: "Components",
            items: [
              "Foundation: TikTok and Meta retargeting and lookalike reach across the four ring markets",
              "Expanded: funded flights on TikTok, Meta and YouTube, weighted to Malaysia and the Philippines",
              "Expanded: Spotify Marquee in Indonesia, the Philippines and Singapore in the first 18 days",
              "Philippines creative built on the existing SB19 collaboration; Indonesia and Malaysia on the MILLI-entrance transition",
            ],
          },
        },
        {
          label: "C",
          title: "The Scale Rule",
          objective: "Move money toward what works, on a written rule rather than a judgment call.",
          strategy: "Every paid line opens at roughly 30% of budget for its first seven days, baselining cost per view, cost per engagement and cost per click by market and by asset. Lines that beat their benchmark scale; lines that miss it by more than 50% are cut and the budget moves inside the tier. Streaming is reported weekly and is the one number this plan does not guarantee, because paid reach converts to streams through the platforms' own recommendation systems and no agency controls that. What the plan commits to is the target ranges below, each with a worst, expected and best case, and a written weekly readout on all of them.",
          kpis: [
            "Total Spotify monthly listeners at cycle peak: 550K worst, 750K expected, 1.0M best (from 404K)",
            "Spotify followers added in the window: 10K worst, 25K expected, 50K best",
            "Post-cycle listener floor: above 350K, against 282K before the current single",
          ],
        },
      ],
      footnote: "Impression and view estimates are modelled from published Thai and Southeast Asian rate benchmarks and are replaced with live account data after the first week of delivery. Spotify Marquee availability per market as published by Spotify, September 2026.",
    },

    // ===================================================================
    // 05. Vertical 2 / Creator Seeding
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Creators",
      title: "Vertical 2 / Creator Seeding",
      philosophy: "The line paid media cannot replace. Thai creator rates make real volume affordable at this budget, and the record has a transition built into it that creators will copy once they see it.",
      intro: "Night Light is a 2:34 mid-tempo record at roughly 96 BPM. Mark sings in English throughout; MILLI's verse lands at 1:32 to 1:52, mostly in Thai, and she returns with ad-libs on the bridge and the final chorus. The hook first lands at 0:50. It is not a hard-drop dance record, so the creator play is not a dance challenge. It is a transition record, and the beat switch into MILLI's entrance is the ten seconds a Thai creator will use.",
      subBlocks: [
        {
          label: "A",
          title: "The Two Sound Cuts",
          objective: "Give creators one clip that travels globally and one built for Thailand, rather than a single generic sound.",
          strategy: "The hook cut at 0:51 to 1:01 is the global clip: melodic, singable, the section a lip-sync or outfit-switch post uses. The MILLI entrance at 1:32 to 1:42 is the Thai anchor: the beat switch, the language switch and the energy shift all land inside ten seconds, which is the exact shape of a transition video. Seeding both means the Thai wave and the wider region are not competing for the same ten seconds of the record, and the analytics separate cleanly by market.",
          components: {
            heading: "Cut Specification",
            items: [
              "Global cut: 0:51 to 1:01, the hook, for lip-sync, outfit-switch and duet formats",
              "Thai anchor cut: 1:32 to 1:42, the beat switch into MILLI's verse, for transition and reaction formats",
              "Both cuts uploaded as official sounds before the first creator wave posts",
            ],
          },
        },
        {
          label: "B",
          title: "Wave One: Release Week",
          budget: "$2,000 Foundation / $2,750 Expanded",
          objective: "Put the MILLI-entrance transition into Thai creator ecosystems in the week the record is available.",
          strategy: "Thai nano and micro creators cost roughly $60 to $610 per TikTok video, which is what makes a real wave affordable inside this budget. Foundation runs 10 creators in wave one, Expanded 18, across dance, comedy and lifestyle in Bangkok and the secondary cities. Creators are briefed on the template rather than a script: the transition on the beat switch, the Thai text treatment, the sound cut. The outputs read native rather than sponsored, which is the point. His previous sounds accumulated 28,000 to 47,000 creator videos over time without a paid wave behind them, so the seeded wave is a starting gun, not the whole number.",
          tactics: [
            "10 creators Foundation, 18 Expanded, on the MILLI-entrance transition template",
            "Bangkok plus Chiang Mai and Khon Kaen for regional spread",
            "Brief is the template and the sound cut, not a script or a required caption",
            "Daily creator readout in release week: videos on the sound, views, which template is traveling",
          ],
        },
        {
          label: "C",
          title: "Wave Two: The Scale Wave",
          budget: "$2,000 Foundation / $2,750 Expanded",
          objective: "Double down on whichever template and creator tier over-indexed in wave one.",
          strategy: "Wave two drops two weeks after release, once the data says which of the two cuts is traveling and which creator tier delivered the cheaper view. Foundation runs a further 10 to 15 creators; Expanded runs 17 and adds five Philippine creators through the existing SB19 relationship, plus Spark Ads usage rights on the top five creator posts so the paid vertical can amplify proven creator content rather than untested ad creative. Rights are bought as a separate line rather than bundled into the base rate, which is standard practice and keeps the cost visible.",
          tactics: [
            "10 to 15 creators Foundation, 17 plus a five-creator Philippine lane Expanded",
            "Spark Ads usage rights on the top five creator posts (Expanded), feeding Vertical 1",
            "Reallocation rule: the wave-one winner takes at least 60% of wave two",
          ],
          kpis: [
            "Creator videos on the official sound during the window: 1,000 worst, 5,000 expected, 15,000 best",
            "Creator-post median above 50K views in Thailand; at least three creator posts above 1M",
            "Blended cost per creator video at or below $200",
          ],
        },
      ],
      footnote: "Sound-cut timestamps refer to the mix supplied September 3, 2026 and shift with any final edit. Creator rates from published Thai agency rate cards, 2025, converted at 32 to 33 baht per U.S. dollar. Usage rights are billed as a separate line, not bundled into the base creator rate.",
    },

    // ===================================================================
    // 06. Vertical 3 / Creative Direction
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Creative",
      title: "Vertical 3 / Creative Direction",
      philosophy: "Inside the campaign fee, not a media line. Crowd Control Digital specifies the assets; the artist team produces them. What is specified comes straight from the video intelligence findings and the record's actual shape.",
      intro: "The paid budget can only amplify what exists. This vertical is the brief for what should exist, written to the six video intelligence findings in Part One and delivered before the shoot rather than after it.",
      subBlocks: [
        {
          label: "A",
          title: "The Asset Brief",
          objective: "Specify a package of assets that fixes the measured gaps rather than repeating the current template.",
          strategy: "Ten assets, each tied to a finding. A two-hander in which MILLI raps to camera in Thai and Mark reacts, because 26 collaboration posts contain no guest voice. A direct-address introduction in Mark's own voice with Thai subtitles, because the catalog has never carried a record introduced that way. A process cut from the session or the shoot, because no behind-the-scenes footage exists anywhere in the corpus while two regional peers run it as a core format. The outfit switch at its proven spec, set to the hook. A transition video built on the beat switch, which is the template the creator wave copies. An asset shot with identifiably Thai settings and props, because his best-performing work contains none. Thai-script title and end cards on every regional cut. Instagram-first variants of the three strongest cuts. The music video and lyric video for YouTube, with the MILLI verse cut as a Short.",
          components: {
            heading: "The Ten Assets",
            items: [
              "Two-hander: MILLI on camera, in Thai, with Mark reacting rather than mirroring",
              "Direct address: Mark introduces the record and MILLI in his own voice, Thai subtitles burned in",
              "Process cut: session or shoot footage paired with the finished performance",
              "Outfit switch to the hook: 9 to 11 seconds, four to six looks, a hard cut every 2 to 3 seconds, question in the caption",
              "Transition video on the beat switch into MILLI's verse, the creator-wave template",
              "Thai-setting asset: street signage, a Bangkok exterior, Thai food or a recognizable venue",
              "Thai-first title and end-card templates applied to every Southeast Asia cut",
              "Instagram-first variants of the three strongest TikTok assets",
              "Music video and lyric video, with the MILLI verse cut as a YouTube Short",
              "Two official sound cuts uploaded before the creator wave posts",
            ],
          },
        },
        {
          label: "B",
          title: "Cadence and Platform Plan",
          objective: "Give the artist team a weekly posting plan built on the account's own data.",
          strategy: "Three posts a week on TikTok from two weeks before release through six weeks after, using MILLI's cadence as the floor; the account currently runs at one. Instagram receives the strongest assets as twins plus one Instagram-first test a week, because identical edits have out-earned their TikTok originals in 25 of 31 verified pairs and won three of four pairs in the current release window. YouTube Shorts carries the MILLI verse and the process cut. Every release asset closes on the end card; the challenge and outfit lanes stay clean and carry the ask in the caption and the pinned comment.",
          kpis: [
            "TikTok cadence: 3 posts a week for eight weeks, 24 posts against a current pace of 8",
            "Every TikTok winner backfilled to Instagram within 48 hours",
            "Release-asset lane median above the account median, against 412K today on TikTok",
          ],
        },
        {
          label: "C",
          title: "Creative Rotation",
          objective: "Keep paid running on proven creative rather than on a fixed set of ads.",
          strategy: "Paid creative is drawn weekly from whatever performed organically or in the creator wave, not produced separately. That is the cheapest creative pipeline available to a campaign this size and it is what the Spark Ads structure in Vertical 1 is built for. Crowd Control Digital picks the rotation each week from the performance data and briefs any small edit required, which the artist team's editor executes.",
        },
      ],
      footnote: "Everything in this vertical sits inside the campaign fee. Production, editing and localization are executed by the artist team and its existing partners; the briefs, specs and rotation calls come from Crowd Control Digital.",
    },

    // ===================================================================
    // 07. Vertical 4 / Measurement & Reporting
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Reporting",
      title: "Vertical 4 / Measurement & Reporting",
      philosophy: "Also inside the fee. A campaign that cannot be read week to week cannot be reallocated week to week, and reallocation is where a budget this size earns its return.",
      subBlocks: [
        {
          label: "A",
          title: "The Weekly Readout",
          objective: "Put one written document in front of the team every week with the same numbers in the same order.",
          strategy: "Spend and delivery by channel and market. Creator volume on both sound cuts. Spotify monthly listeners and followers, total and Thailand, against the target ranges. Cost per view, per engagement and per action by asset. Which creative is winning and what moves next week. The scale-or-cut decisions taken and why. Every figure carries its source and its date, and every target carries the worst, expected and best case it was set against.",
          components: {
            heading: "What the Readout Carries",
            items: [
              "Spend, delivery and efficiency by channel and market, against the modelled benchmarks",
              "Creator volume and creator-post performance on both official sound cuts",
              "Listener and follower movement, total and Thailand, against the target ranges",
              "The week's reallocation decisions and the rule that triggered them",
            ],
          },
        },
        {
          label: "B",
          title: "DSP Pitch Material",
          objective: "Give the distributor's regional editorial teams the strongest possible case, at no media cost.",
          strategy: "Crowd Control Digital writes the pitch packet and the week-two follow-up: the feature story, the Thai consumption data from this audit, the creator numbers as they land, and the market-by-market case. The distributor's teams submit it through their own channels, which is where editorial decisions are made. The follow-up matters more than the launch pitch here, because the discovery playlists that held for this artist before are the ones that respond to live consumption rather than to a release announcement.",
          components: {
            heading: "What We Supply",
            items: [
              "Launch pitch packet with the feature story and the Thai consumption case, before release week",
              "Week-two follow-up carrying live Thai consumption and creator data, aimed at the discovery lists that hold",
              "Market-by-market target list: New Music Friday across Thailand and the ring, the Thai discovery and pop lists, the regional list, and the Korean hip-hop lane the feature opens",
            ],
          },
        },
        {
          label: "C",
          title: "Close-Out and Next Cycle",
          objective: "End the window with a document the next campaign can be priced from.",
          strategy: "A full-window readout across every workstream: listeners and followers, total and Thailand, creator volume, editorial holds, paid efficiency by channel and market, and the post-cycle floor against the 350K target. Then the recommendation for the next cycle, priced on what this one actually returned rather than on the same modelled benchmarks.",
        },
      ],
      footnote: "Reporting and DSP pitch material sit inside the campaign fee. Readouts are written documents, delivered weekly.",
    },

    // ===================================================================
    // 08. Recommendations for the Artist Team
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Recommendations",
      title: "Recommendations for the Artist Team",
      philosophy: "Everything here costs no media budget and is not billed by Crowd Control Digital. It is listed because the audit found it, and because each item raises the return on the spend in the verticals above.",
      intro: "The audit surfaced a short list of fixes that sit with the artist team and its existing partners. None of them requires a media budget. All of them make the paid and creator spend work harder, and several of them take an afternoon.",
      subBlocks: [
        {
          label: "A",
          title: "Put Pixels on the Owned Surfaces",
          objective: "Make site traffic measurable and re-addressable before paid runs.",
          strategy: "The official site carries analytics only. A Meta pixel and a TikTok pixel on the site and on the release landing page, installed before the flight opens, mean the campaign can build audiences from every visit and report conversions honestly rather than inferring them. This is the single highest-return item on the list and it has no cost.",
        },
        {
          label: "B",
          title: "Carry the Capture Surface Forward",
          objective: "Restore on the single what the last EP already had.",
          strategy: "The Silhouette campaign page captured email and country through the distributor's forms host. The Alone smart link captures nothing. The same tooling is already in the stack, so the release page for Night Light can carry email capture and a follow gate at no cost. Routing every bio link to it, including the X account that currently has no link at all, costs nothing either.",
          components: {
            heading: "No-Cost Fixes",
            items: [
              "Release landing page with capture rather than a DSP button list, using the pre-save tooling already in the stack",
              "Every bio link routed to it for the window, including the 8.5M-follower X account",
              "Spotify Countdown page and Canvas for the release",
              "YouTube Memberships switched on; the events page and concert listings brought current",
            ],
          },
        },
        {
          label: "C",
          title: "Localization and Production",
          objective: "Keep the Thai-language layer with the people who already speak it.",
          strategy: "Thai-script title cards, subtitles and caption translation are produced by the artist team and its Thai partners, who are closer to the language and the market than any external agency. Crowd Control Digital supplies the spec, the copy structure and the placement, and the team's own editors execute. The same applies to the shoot itself: the asset briefs in Vertical 3 are written to be produced in a single content day with the crew already in place.",
        },
        {
          label: "D",
          title: "Press and Partner Communications",
          objective: "Run the story through the relationships that already exist.",
          strategy: "The narrative assets are already banked: an arena run with a Thai-language cover, a national countdown performance, a Thai media tour, and now a record with MILLI. The Thai partners already hold the broadcast and publication relationships that carried the last cycle, and MILLI's team holds her own. Crowd Control Digital supplies the story, the data and the assets; the outreach itself stays where the relationships are.",
        },
      ],
      footnote: "Nothing in this section is billed by Crowd Control Digital or drawn from the media budget. It is listed because the audit found it and because it raises the return on everything above it.",
    },

    // ===================================================================
    // 09. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "09",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "How the budget deploys across a ten-week window keyed to release week (R). Pre-release warms the Thai audience and books the creators. Release week turns everything on at test weight. The sustain phase, where every previous era actually peaked, carries the largest share and scales what the first week proved. Phase figures show Foundation first and Expanded second.",
      totalBudget: "$15,000 Foundation / $20,000 Expanded, all to media and creators",
      phases: [
        {
          label: "Pre-Release",
          window: "R-3 to R-1 / 3 weeks",
          focus: "Creative direction and the asset brief land in week one, so the shoot happens with time to spare. Creators are sourced, briefed and contracted. Paid warms the Thai audience on the teaser at test weight and starts building retargeting pools. The DSP pitch packet goes to the distributor. No creator money is spent until the sound cuts are live.",
          budget: "$1,500 / $2,000",
          tactics: [
            "Thailand paid warm-up on the teaser, TikTok and Meta only: $1,500 / $2,000",
            "Creator sourcing, briefing and contracting (no spend until wave one posts)",
            "Asset briefs, sound cuts and end-card specs delivered; DSP pitch packet submitted",
          ],
        },
        {
          label: "Release Week",
          window: "R / 1 week",
          focus: "Thailand paid opens across TikTok, Meta and YouTube on the release assets at roughly 30% weight and scales inside the week on data. Creator wave one drops the MILLI-entrance transition. New Music Friday push across Thailand and the ring; Marquee opens in the three ring markets where it runs on Expanded.",
          budget: "$5,500 / $7,250",
          tactics: [
            "Thailand paid media, test then scale: $3,000 / $3,500",
            "Creator wave one, 10 / 18 creators: $2,000 / $2,750",
            "Southeast Asia ring, including Marquee on Expanded: $500 / $1,000",
          ],
        },
        {
          label: "Sustain",
          window: "R+1 to R+6 / 6 weeks",
          focus: "The window where every previous era peaked. Paid scales on the winning assets and audiences, Spark Ads run on the top creator posts, creator wave two drops on whichever template is traveling, and the week-two DSP follow-up carries live consumption data. Weekly readouts drive reallocation inside the tier.",
          budget: "$8,000 / $10,750",
          tactics: [
            "Thailand paid media at scale, weighted to weeks two through six: $5,500 / $5,500",
            "Creator wave two, 10 to 15 / 17 creators, plus Spark rights on Expanded: $2,000 / $2,750",
            "Southeast Asia ring: $500 / $2,000",
            "Reserve held for the week that reads strongest: $0 / $500",
          ],
        },
      ],
      footnote: "Phase budgets are directional; Crowd Control Digital reallocates between line items inside the tier on weekly performance signals. Calendar dates lock when the release date does.",
    },

    // ===================================================================
    // 10. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "10",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "A ten-week window keyed to release week. Briefs and creator booking happen in the three weeks before release; paid and creators launch in release week at test weight; the sustain phase runs six weeks because that is where this artist's eras have always peaked. Calendar dates lock when the release date does.",
      weeks: [
        { index: 1, label: "R-3", dates: "3 weeks out" },
        { index: 2, label: "R-2", dates: "2 weeks out" },
        { index: 3, label: "R-1", dates: "1 week out" },
        { index: 4, label: "R", dates: "Release week", highlight: true, note: "RELEASE" },
        { index: 5, label: "R+1", dates: "Week 2" },
        { index: 6, label: "R+2", dates: "Week 3", note: "WAVE 2" },
        { index: 7, label: "R+3", dates: "Week 4" },
        { index: 8, label: "R+4", dates: "Week 5", note: "PEAK WINDOW" },
        { index: 9, label: "R+5", dates: "Week 6" },
        { index: 10, label: "R+6", dates: "Week 7" },
      ],
      workstreams: [
        {
          name: "Paid Media",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "WARM" },
            { weekIndex: 4, intensity: "high", label: "TEST" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
          ],
        },
        {
          name: "Creator Seeding",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "SOURCE" },
            { weekIndex: 3, intensity: "medium", label: "BRIEF" },
            { weekIndex: 4, intensity: "high", label: "WAVE 1" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high", label: "WAVE 2" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
          ],
        },
        {
          name: "Creative Direction",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BRIEF" },
            { weekIndex: 2, intensity: "high", label: "SHOOT" },
            { weekIndex: 3, intensity: "high", label: "CUTS" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
          ],
        },
        {
          name: "DSP Material",
          cells: [
            { weekIndex: 1, intensity: "high", label: "PACKET" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "NMF" },
            { weekIndex: 5, intensity: "high", label: "FOLLOW-UP" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
          ],
        },
        {
          name: "Reporting",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "BASELINE" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high", label: "READOUT" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "MID-WINDOW" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "CLOSE-OUT" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Briefs and pitch material",
          items: [
            "Asset briefs and shoot list for the ten-asset package delivered, written to the video intelligence findings and the record's section map.",
            "DSP pitch packet written and handed to the distributor's regional teams.",
            "Creator sourcing opens in Thailand across dance, comedy and lifestyle tiers.",
          ],
        },
        {
          weekIndex: 2,
          title: "Shoot and creator booking",
          items: [
            "Content day: the two-hander, the direct address, the process cut, the outfit switch, the transition and the Thai-setting asset captured.",
            "Creator wave one contracted and briefed on the MILLI-entrance transition template and the Thai text treatment.",
          ],
        },
        {
          weekIndex: 3,
          title: "Cuts, warm-up and baseline",
          items: [
            "Both official sound cuts uploaded. Localized cuts delivered by the artist team with Thai-script cards to the supplied spec.",
            "Paid warm-up runs on the teaser in Thailand at test weight, building retargeting pools.",
            "Baseline readout: current listeners, followers and per-post medians recorded so the window can be measured against them.",
          ],
        },
        {
          weekIndex: 4,
          title: "Release week",
          items: [
            "Thailand paid opens across TikTok, Meta and YouTube at roughly 30% weight on the release assets, and scales inside the week on cost per view and click.",
            "Creator wave one drops on the MILLI-entrance sound cut.",
            "New Music Friday push across Thailand and the ring; Marquee opens in Indonesia, the Philippines and Singapore on Expanded.",
          ],
        },
        {
          weekIndex: 5,
          title: "Scale on data",
          items: [
            "Paid scales on the winning assets and audiences; Spark Ads open on the top creator posts on Expanded; ring flights open at funded weight on Expanded.",
            "Week-two DSP follow-up carries live Thai consumption and creator data to the discovery lists.",
            "First full readout against the worst, expected and best cases.",
          ],
        },
        {
          weekIndex: 6,
          title: "Wave two",
          items: [
            "Creator wave two drops on whichever cut and creator tier over-indexed; the Philippine lane opens on Expanded.",
            "Instagram-first tests begin on the strongest TikTok assets.",
          ],
        },
        {
          weekIndex: 8,
          title: "Peak window",
          items: [
            "The week this artist's eras have historically peaked: paid held at full weight, creative refreshed from the winners, retargeting pools worked hardest.",
            "Mid-window review against every target range, and reallocation across lines inside the tier.",
          ],
        },
        {
          weekIndex: 10,
          title: "Close-out and next cycle",
          items: [
            "Full-window readout: Thai and total listeners, followers, creator volume, editorial holds, cost per action by channel and market, and the post-cycle floor against the 350K target.",
            "Next-cycle recommendation, priced on what this window actually returned rather than on modelled benchmarks.",
          ],
        },
      ],
      footnote: "Sprints run in one-week cycles with written weekly readouts. The next release authorizes a fresh campaign window on this same structure.",
    },

    // ===================================================================
    // 11. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "11",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro: "Two tiers for the Night Light cycle. Every dollar of the budget buys media or creators. The Crowd Control Digital campaign fee covers strategy, paid media management across every platform and market, creator program management, creative direction and the asset briefs, DSP pitch material and the weekly readout, and is billed separately from the budget.",
      ccdNote: "The campaign fee is billed separately. Every dollar in the budget reaches the market or a creator.",
      breakdownLabel: "Budget by Line",
      deployableLabel: "Total Including Campaign Fee",
      tiers: [
        {
          label: "Foundation",
          budget: "$15,000",
          name: "Thailand-First Launch",
          tagline: "Ten weeks. Thailand paid across three channels, a 20 to 25 creator Thai wave in two drops, and a light Southeast Asia ring.",
          deployable: "$18,000",
          feeBreakdown: {
            retainer: "$3,000",
            retainerDetail: "Flat campaign fee, ten-week window, billed separately",
            mediaManagementLabel: "Budget",
            mediaManagement: "$15,000",
            mediaManagementDetail: "Buys media and creators only",
          },
          breakdown: [
            { vertical: "Thailand paid media (TikTok, Meta, YouTube)", amount: "$10,000" },
            { vertical: "Thai creator seeding, two waves", amount: "$4,000" },
            { vertical: "Southeast Asia ring (retargeting and lookalike)", amount: "$1,000" },
          ],
        },
        {
          label: "Expanded",
          budget: "$20,000",
          name: "Thailand Plus the Southeast Asia Ring",
          tagline: "Ten weeks. Thailand at full weight, a 35-creator wave with usage rights on the winners, and a funded ring including Spotify Marquee in three markets.",
          featured: true,
          deployable: "$24,000",
          feeBreakdown: {
            retainer: "$4,000",
            retainerDetail: "Flat campaign fee, ten-week window, billed separately",
            mediaManagementLabel: "Budget",
            mediaManagement: "$20,000",
            mediaManagementDetail: "Buys media and creators only",
          },
          breakdown: [
            { vertical: "Thailand paid media (TikTok, Meta, YouTube)", amount: "$11,000" },
            { vertical: "Creator seeding, 35 creators plus Spark Ads rights", amount: "$5,500" },
            { vertical: "Southeast Asia ring (incl. Marquee ID, PH, SG)", amount: "$3,000" },
            { vertical: "Held reserve, allocated on weekly performance", amount: "$500" },
          ],
        },
      ],
      footnote: "Each release cycle gets its own authorization. Creative direction, asset briefs, DSP pitch material and weekly reporting are inside the campaign fee. Production, editing, localization and press outreach sit with the artist team and its partners and carry no charge from Crowd Control Digital.",
    },
  ],
};
