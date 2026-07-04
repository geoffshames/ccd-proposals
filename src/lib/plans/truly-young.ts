import type { StrategyPlanData } from "../plan-context";

export const trulyYoungPlan: StrategyPlanData = {
  accentColor: "#F0287D",
  ogImage: "/images/truly-young/og-image.png",
  language: "en",

  cover: {
    label: "Dear Joshua EP · U.S. Digital Strategy",
    title: "TRULY YOUNG",
    subtitle:
      "Converting proven reach into owned fandom across the Dear Joshua cycle. Lead single July 17, EP August 21. Discovery is already solved. This plan builds the machine that keeps it.",
    partnership: "Truly Young × Crowd Control Digital",
    prepared: "Crowd Control Digital · Prepared for AWAL Partnership Review",
    date: "July 2026",
    backgroundImage: "/images/truly-young/truly-young.jpg",
  },

  approveCta: {
    label: "Approve This Plan",
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
      subtitle:
        "A capture-and-convert plan for the Dear Joshua cycle. The discovery engine is already proven. The job of this budget is to catch the audience the music generates and turn it into an owned fanbase before the next spike, not after it.",
      body: [
        "Truly Young has done something most developing artists never do: she has generated real, repeatable, zero-spend reach. 20.97M feature-inclusive lifetime streams, a verse on 'Doggy' at 18.18M, Camp Flog Gnaw, The Greek, and a Texas run, all organic. What she has not had yet is the infrastructure to keep the audience that reach produces. In July 2025 a single feature moment pushed her Spotify profile to roughly 296K monthly listeners. With nothing built to catch them, 87% leaked back out. She sits at 37K today.",
        "That is not a weakness in the artist. It is a missing machine. This plan builds it. The budget shown here is scoped to the Dear Joshua cycle: the lead single on July 17, the full EP on August 21, and the two music videos already in hand. It stands up the capture layer (pixel plus CRM), points paid and creator spend at the audience her music already reaches, and is engineered to convert the imminent 'Doggy' primary-artist reclassification into owned monthly listeners rather than another spike that drains away.",
        "This is a per-cycle budget, not an annual one. The Dear Joshua cycle authorizes this spend. The next release, the tour routing, and any international push authorize fresh budgets on the same structure.",
      ],
      supports: {
        heading: "What This Plan Supports",
        items: [
          "Lead single rollout (July 17) and the four-week runway into the EP",
          "Dear Joshua EP release (August 21), six tracks, two music videos in hand",
          "The 'Doggy' featured-to-primary reclassification and the stream-weight it routes to her profile",
          "The always-on capture and CRM layer that compounds into every cycle after this one",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Capture: stand up pixel plus Laylo CRM and stop the leak that cost 260K listeners in 2025",
          "Convert: turn feature-driven and UGC reach into owned followers, pre-saves, and monthly listeners",
          "Amplify: point paid social and creator spend at the exact audience her music already reaches",
          "Compound: build owned inventory (fan channels, CRM, pixel pools) that carries into the next release",
          "Optional scale: OOH, Connected TV, and three bespoke creative swings that take the plan to $50K",
        ],
      },
      footnote:
        "This is the digital execution spine for the Dear Joshua cycle. Music videos are produced and delivered separately; this plan runs paid and owned media behind them.",
    },

    // ===================================================================
    // 02. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis:
        "The discovery engine is proven. The conversion machine was missing. A single feature pushed 296K people to her profile with nothing built to catch them, and 87% leaked. The fans who stayed now convert at 20x the peak rate. Dear Joshua is the first owned moment to turn borrowed reach into an owned fanbase, and every dollar here builds the machine that keeps it.",
      hierarchy: [
        {
          label: "Capture (Foundation, Always-On)",
          description:
            "The compounding layer, and the one that was missing in 2025. Tracking pixel on every surface, Laylo email and SMS CRM, retargeting pools built from the 'Doggy' and feature audience. This runs continuously, regardless of release date. Without it, every other dollar leaks the way the 2025 spike did.",
        },
        {
          label: "Convert (Paid + Creator Amplifier)",
          description:
            "Where reach becomes owned. Paid social and creator seeding pointed at the audience her music already reaches on TikTok, with whitelisting so winners scale. The mix variants (pop, electronic, rock, alt) open four parallel lanes into the same song. Spend rises around the single and EP; the machine stays the same.",
        },
        {
          label: "Discovery (DSP)",
          description:
            "The lane she has never had. She currently holds zero editorial playlists. This layer builds the editorial and algorithmic reach, deploys Marquee and Showcase on proven winners, and executes the 'Doggy' reclassification that routes catalog stream-weight onto her owned profile.",
        },
        {
          label: "Credibility (PR + Story)",
          description:
            "The independent-artist story is the most fundable thing she has: 0 to 296K on her own, no ads, no major label. PR extends it once the fandom, paid, and DSP layers are producing something to point at. Pitched at the right moment, it scales every prior dollar.",
        },
      ],
      messaging: [
        "The capture layer is song-agnostic. It supports the single, the EP, and every release after.",
        "Continuous spend on capture. Episodic spend on the amplifiers, timed to July 17 and August 21.",
        "Position by cultural reach, not just owned monthly listeners. Her music already lives in Tier 1 rooms.",
        "Do not repeat the 2025 leak. The reclassification and the EP will create a second spike; this time it converts.",
      ],
      footnote:
        "Capture spend is non-negotiable and continuous. Amplifier spend is calibrated to the single and EP windows.",
    },

    // ===================================================================
    // 03. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "03",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro:
        "Targeting derived from current Chartmetric and platform signals (July 2026). Her listening footprint reads as touring-and-culture-driven discovery (LA, Chicago, New York) rather than editorial placement, which is exactly the profile that responds to paid capture and creator seeding. Splits refine after the first two weeks of pixel data off the single.",
      metrosLabel: "Priority Metros",
      metros: [
        { name: "Los Angeles, CA" },
        { name: "Chicago, IL" },
        { name: "New York, NY" },
        { name: "Dallas-Fort Worth, TX" },
        { name: "Houston, TX" },
        { name: "Austin, TX" },
        { name: "London, UK", tier: "secondary" },
        { name: "Sydney, AU", tier: "secondary" },
        { name: "Atlanta, GA", tier: "secondary" },
        { name: "Seattle, WA", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 58 },
        { bracket: "25-34", weight: 27 },
        { bracket: "35-44", weight: 10 },
        { bracket: "45+", weight: 5 },
      ],
      genderDistribution: { female: 60, male: 40 },
      similarArtists: [
        "Dominic Fike",
        "Kevin Abstract",
        "d4vd",
        "sombr",
        "BENEE",
        "The Marias",
        "Jean Dawson",
        "Role Model",
        "Wallice",
      ],
      genres: ["Alternative Pop", "Pop", "Alternative", "Crossover (electronic + rock edges)"],
      platformSignals: [
        {
          platform: "Spotify",
          note: "37,273 monthly listeners, 3,383 followers, a 9.1% follow rate that has climbed 20x from the viral peak. Profile hit ~296K listeners in July 2025 off the 'Doggy' feature, then settled to a compounding core. The retention curve is the conversion proof, and followers are still rising ~5% per month.",
        },
        {
          platform: "TikTok",
          note: "The engine. 13,690 posts already use her sounds and her top track video sits at 22.2M views, while her own channel is at 6.7K followers. The music travels far past the profile. This is the highest-leverage capture and whitelisting layer in the plan.",
        },
        {
          platform: "YouTube",
          note: "The consumption lane for the two Dear Joshua music videos. Runway for In-Stream and Shorts paid against MV view-velocity goals through the EP window.",
        },
        {
          platform: "Instagram",
          note: "The brand layer where the independent-artist story, BTS, and the Dear Joshua era compound. Feeds retargeting pools and creator collaboration.",
        },
      ],
      footnote:
        "Directional. Age and gender splits are modeled from lane and platform signals; geo and platform figures are Chartmetric as of July 2026. CCD recalibrates after the single delivers pixel data.",
    },

    // ===================================================================
    // 04. Where She Sits / Competitive Positioning
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Positioning",
      title: "Where She Sits",
      philosophy:
        "By owned monthly listeners she reads Tier 3. By cultural reach (feature streams, UGC, festival stages) she is already operating in Tier 1 and Tier 2 rooms. The entire opportunity is the distance between where her music lives and where her profile sits.",
      intro:
        "The comp set is the alt-pop and crossover lane she belongs to: artists who converted a viral or feature moment into an owned career. Monthly-listener figures are Chartmetric, July 2026. The tiers are not aspirational decoration, they are the ladder this plan climbs.",
      subBlocks: [
        {
          label: "A",
          title: "Tier 1 / Proof The Lane Scales",
          objective:
            "These artists prove the alt-pop crossover lane goes all the way to arena scale. Each one converted an early viral or feature moment into a durable owned audience, which is the exact motion Dear Joshua begins.",
          components: {
            heading: "The Ceiling",
            items: [
              "sombr, 56.4M monthly listeners: a 2025 breakout who owned the moment fast",
              "d4vd, 18.9M monthly listeners: viral single converted into a full owned catalog",
              "Role Model, 12.9M monthly listeners: buzz and touring converted into a headline audience",
            ],
          },
        },
        {
          label: "B",
          title: "Tier 2 / The 12 to 18 Month Target Band",
          objective:
            "The realistic target band once the 'Doggy' reclassification and the EP conversion machine are working. Crossover acts that turned attention into a mid-seven-figure owned audience.",
          components: {
            heading: "The Target",
            items: [
              "BENEE, 4.7M monthly listeners: a viral single ('Supalonely') converted into a lasting owned base",
              "Jean Dawson, 790K monthly listeners: genre-blending alt and rap crossover with deep credibility",
              "This is where the reclassification plus a converted EP cycle points her over the next year",
            ],
          },
        },
        {
          label: "C",
          title: "Tier 3 / Her Current Owned Band",
          objective:
            "Where her owned profile sits today, and the immediate peers she clears the moment the capture machine is live. Her reach already exceeds this tier; her profile has not caught up yet.",
          components: {
            heading: "The Starting Line",
            items: [
              "Wallice, 128K monthly listeners: emerging LA alt-pop, a near-term profile marker",
              "Truly Young, 37K monthly listeners today, with feature reach and UGC that belong two tiers up",
              "The gap between 37K owned and 296K proven is the single most fundable number in this deck",
            ],
          },
        },
      ],
      footnote:
        "Collaborators (Dominic Fike, Kevin Abstract, and the BLUSH roster) are intentionally excluded from the competitive set. They are the audience bridge, not the benchmark.",
    },

    // ===================================================================
    // 05. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "05",
      navLabel: "Structure",
      title: "Proposal Structure",
      intro:
        "Two ways to run the Dear Joshua cycle. The Core plan is the complete, self-sufficient machine at $30K all-in. The Expanded plan layers in Out-of-Home, Connected TV, and three bespoke creative swings, taking it to $50K all-in. Both carry a 15% CCD fee taken off the top, and no retainer. The full per-line math is in Section 13.",
      tiers: [
        {
          label: "Core Plan",
          budget: "$30,000",
          name: "Dear Joshua Core",
          goal:
            "The complete capture-and-convert machine for the cycle. Stands up pixel plus Laylo CRM, runs paid social and creator seeding against the single and EP, executes the DSP and reclassification push, and retargets the feature audience into owned follows and pre-saves. Everything needed to stop the leak and convert this cycle.",
          featured: true,
          deployable: "$25,500 to media + creator",
          includes: [
            "Capture, retargeting, and Laylo email plus SMS CRM (always-on)",
            "Paid Social across TikTok, Meta, and YouTube Shorts (single plus EP windows)",
            "Creator seeding and whitelisting against the sounds already trending",
            "DSP push: editorial pitching, Marquee and Showcase on winners, Discover Weekly and Release Radar",
            "The 'Doggy' primary-artist reclassification, engineered to route stream-weight onto her profile",
            "Weekly optimization, attribution, and reporting",
          ],
        },
        {
          label: "Expanded Plan",
          budget: "$50,000",
          name: "Dear Joshua Expanded",
          goal:
            "Everything in Core, plus the high-value scale layer: Interactive Out-of-Home that QR-drops into her web game, Connected TV brand presence, a timed 'Doggy' Platinum halo moment, and a Mix-Variant creator challenge. For the case where the cycle earns a bigger push.",
          deployable: "$42,500 to media + creator",
          includes: [
            "Everything in the Core plan",
            "Interactive OOH to game QR in LA plus one breakout market",
            "Connected TV: Hulu, Roku, Samsung TV+, YouTube TV",
            "'Doggy' Platinum halo: content, tastemaker PR, and a paid spike on the certification moment",
            "Mix-Variant creator challenge across the four edits per track",
          ],
        },
      ],
    },

    // ===================================================================
    // 06. Vertical 1 / Capture & Always-On Digital
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Capture",
      title: "Vertical 1 / Capture & Always-On Digital",
      philosophy:
        "The layer that was missing in 2025. Continuous, song-agnostic, and the foundation every other dollar relies on. This is the machine that catches the spike instead of watching it drain.",
      subBlocks: [
        {
          label: "A",
          title: "Pixel + Attribution Layer",
          objective:
            "Instrument every surface so no reach goes unmeasured or uncaptured. The 2025 spike leaked because nothing was tracking or retargeting it. That does not happen this cycle.",
          strategy:
            "Deploy the tracking pixel across her site, the web-game experience, pre-save flows, and every paid destination on day one. Build retargeting pools from the 'Doggy' and feature audience, TikTok engagers, and profile visitors, so paid spend compounds on warm audiences instead of buying cold reach twice.",
          components: {
            heading: "What It Does",
            items: [
              "Pixel on site, web game, pre-save, and paid destinations",
              "Retargeting pools from the 'Doggy' and BLUSH feature audience",
              "Same-day attribution across all paid channels",
              "Warm-audience compounding so spend is not wasted on cold reach twice",
            ],
          },
          kpis: [
            "Retargeting pool size (target 250K+ by EP week)",
            "Cost per follow and cost per pre-save vs. cold benchmarks",
            "Attributed conversion rate from reach to owned action",
          ],
        },
        {
          label: "B",
          title: "Laylo Email + SMS CRM",
          budget: "Inside Core budget",
          objective:
            "Convert casual and feature-driven audience into a retained fanbase she owns outside the algorithm. She has 20M+ streams of reach and no owned list to show for it. That changes now.",
          strategy:
            "Stand up Laylo as the email and SMS layer. Capture at every touchpoint: the web game, pre-save unlocks, drop alerts, and social DM funnels. Segment by city and engagement tier. Run release-timed flows around July 17 and August 21.",
          components: {
            heading: "Components",
            items: [
              "Email and SMS capture flows (site, web game, pre-save, social)",
              "Drop alerts and release-day flows for the single and EP",
              "Segmentation by city and engagement tier",
              "Pre-save and vault-unlock incentives that drive list growth",
            ],
          },
          kpis: [
            "Email list: 15K+ across the cycle",
            "SMS list: 6K+ across the cycle",
            "Release-day flow click-through: 15%+",
          ],
        },
        {
          label: "C",
          title: "Owned Content & Fan Engagement",
          objective:
            "Give the captured audience a reason to stay and a reason to post. Turn the independent-artist story into always-on content and social proof that creators, press, and partners can see.",
          tactics: [
            "Always-on short-form on her channel tied to the mix variants and BTS",
            "Pre-save unlocks, snippet drops, and vault teases for list growth",
            "Fan UGC prompts and duet bait timed to the single and EP",
            "Community rewards tied to pre-saves and first-week streaming",
          ],
        },
      ],
      footnote:
        "Capture runs every week regardless of the release calendar. This is the layer that compounds into the next cycle.",
    },

    // ===================================================================
    // 07. Vertical 2 / Paid Social & Creator
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Paid + Creator",
      title: "Vertical 2 / Paid Social & Creator",
      philosophy:
        "The amplifier that turns proven reach into owned action. Her music already trends on TikTok without her. This vertical points paid and creator spend directly at that motion and whitelists the winners.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social (TikTok, Meta, YouTube Shorts)",
          objective:
            "Scale winning creative against warm and lookalike audiences across the single and EP windows. Test into the single, scale what converts into the EP.",
          strategy:
            "Spark Ads on TikTok, Reels and Partnership Ads on Meta, Shorts on YouTube. Test-and-learn creative pipeline: baseline CPV and cost-per-follow on the single, then move budget behind winners and retarget the pools built in Vertical 1. The two music videos become paid creative assets, not just organic posts.",
          tactics: [
            "TikTok Spark Ads on the trending sounds and the single hook",
            "Meta Reels and Partnership Ads against retargeting and lookalikes",
            "YouTube Shorts and In-Stream behind the two music videos",
            "Creative refresh cadence driven by what the pixel says is converting",
          ],
          kpis: [
            "Cost per follow and cost per pre-save under target",
            "Blended cost per stream in the A-plus paid range",
            "MV view velocity in the release-day window",
          ],
        },
        {
          label: "B",
          title: "Creator Seeding + Whitelisting",
          objective:
            "Route the 13,690 posts already using her sounds into owned momentum, and acquire whitelisting rights up front so winners scale via paid without renegotiation.",
          strategy:
            "Micro and mid-tier creator seeding waves timed to the single and EP. Whitelisting and Spark authorization secured at brief, so any organic breakout can be amplified immediately. Concentrate on the lanes her sound already lives in: lip-sync, dance, culture, and DJ or sped-up edits.",
          components: {
            heading: "Components",
            items: [
              "Seeding wave one on the single (micro-tier), wave two on the EP (mid-tier)",
              "Whitelisting and Spark or Partnership Ad rights secured at brief",
              "Lane targeting: lip-sync, dance, culture, and sped-up or DJ edits",
              "Fast amplification path for any organic breakout",
            ],
          },
        },
        {
          label: "C",
          title: "Mix-Variant Lanes",
          objective:
            "One song, four ways in. Each track ships with a radio, sped-up or club, live-band, and stripped edit, opening four parallel discovery lanes into the same release.",
          components: {
            heading: "The Four Lanes",
            items: [
              "Pop (radio edit): hook-forward, the commercial center",
              "Electronic (sped-up or club): where TikTok sounds and dance playlists catch",
              "Rock (live-band cut): the alt and live-credibility angle",
              "Alt (stripped or slowed): the tastemaker and long-tail lane",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // 08. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy",
      philosophy:
        "The discovery lane she has never had. She currently holds zero editorial playlists despite 20M-plus streams of reach. This is where AWAL's infrastructure and the reclassification create the step-change.",
      intro:
        "Two moves define this vertical. First, the editorial and algorithmic reach she has never been given. Second, the 'Doggy' primary-artist reclassification, which is the single highest-leverage lever in the entire plan.",
      subBlocks: [
        {
          label: "A",
          title: "The 'Doggy' Reclassification",
          objective:
            "Move Truly from featured to primary artist on the 'Doggy' certification and credit, routing the track's stream-weight and its listener base onto her owned Spotify profile. This is in motion and is the imminent catalyst behind the monthly-listener step-up.",
          strategy:
            "Execute the credit and certification change with AWAL and the Geezer or BLUSH rights holders as fast as the paperwork allows, timed to compound with the EP. When it lands, the capture machine from Vertical 1 is already live to convert the routed audience into follows and retention, instead of leaking it the way 2025 did.",
          components: {
            heading: "Why It Matters",
            items: [
              "Routes 18.18M streams of proven weight toward her owned profile",
              "Targets a step-up toward 1M+ monthly listeners independent of the EP push",
              "The EP campaign then compounds on top of the reclassification, not beneath it",
              "Only converts if the capture layer is live first, which is why it is sequenced after Vertical 1",
            ],
          },
        },
        {
          label: "B",
          title: "Editorial + Algorithmic Reach",
          objective:
            "Build the playlist ecosystem she does not have. From zero editorial to a real editorial and algorithmic footprint across the single and EP.",
          strategy:
            "Pitch the single and EP into pop, alt-pop, and crossover editorial across Spotify, Apple, and Amazon through AWAL's relationships. Engineer Discover Weekly and Release Radar lift with the paid and Marquee push. Target the algorithmic playlists first, editorial as the credibility layer.",
          components: {
            heading: "Targets",
            items: [
              "Pop Rising, New Music Friday, Fresh Finds Pop, Lorem, and alt-pop editorial",
              "Discover Weekly and Release Radar boost via Marquee and paid velocity",
              "Apple and Amazon editorial through AWAL relationships",
              "Non-genre and crossover playlists as penetration proof",
            ],
          },
        },
        {
          label: "C",
          title: "DSP In-App + Catalog",
          objective:
            "Deploy conversion tools only on proven winners, and activate the catalog behind the release so the whole profile lifts, not just the new tracks.",
          components: {
            heading: "Components",
            items: [
              "Spotify Marquee and Showcase on winning singles (pay for conversion, not impressions)",
              "Spotify Canvas on the single, EP tracks, and top catalog",
              "Catalog activation around release weeks to lift the full profile",
              "Metadata and profile cleanup for algorithmic signaling",
            ],
          },
        },
      ],
      footnote:
        "DSP is the discovery layer that turns the rest of the plan into measurable streams and profile growth.",
    },

    // ===================================================================
    // 09. Vertical 4 / PR & Story
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "PR",
      title: "Vertical 4 / PR & Story",
      philosophy:
        "Amplification and credibility, not a top-of-funnel growth engine. PR works once the capture, paid, and DSP layers are producing something to point at. Her story is the most fundable asset she has.",
      subBlocks: [
        {
          label: "A",
          title: "The Story",
          objective:
            "Build the narrative around an independent artist who generated 20M-plus streams and a 296K listener spike on her own, with no ads and no major label, and is now shipping her first owned EP. It is true, it is documented in the data, and it is the angle press wants.",
          components: {
            heading: "The Beats",
            items: [
              "Independent-artist come-up: 0 to 296K on her own, no ad spend",
              "The feature-to-owned pivot: from 'Doggy' and BLUSH to her own EP",
              "Live proof: Camp Flog Gnaw, The Greek, the Texas run",
              "The first-owned-EP moment as the news hook",
            ],
          },
        },
        {
          label: "B",
          title: "Press Targets",
          tactics: [
            "Tier 1 tastemaker: Fader, Nylon, Paper, Pigeons and Planes",
            "Pop and culture: Billboard, Rolling Stone, Consequence, Ones To Watch",
            "Digital tastemaker: EARMILK, Lyrical Lemonade, Lseven, DORK",
            "Sync and brand: pitch the crossover cuts into TV, film, and brand placement",
          ],
        },
        {
          label: "C",
          title: "Timing",
          objective:
            "Pitch to the moments, not the calendar. The reclassification, the EP, and any first-week milestone are the earned news beats. Pitched early it burns relationships; pitched at the spike it scales every prior dollar.",
        },
      ],
      footnote:
        "PR is calibrated to story-readiness. The strongest beat is the independent-artist arc, and it lands hardest once the numbers are moving.",
    },

    // ===================================================================
    // 10. Suggested Additions (Optional, Core to Expanded)
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "Additions",
      title: "Suggested Additions (Optional)",
      philosophy:
        "Outside the $30K Core budget. These four layers take the plan from $30K to $50K all-in. Each is high-value, on-brand, and scoped separately. The 15% CCD fee is taken off the top of the total budget.",
      intro:
        "The first two (OOH and CTV) are the scale layer AWAL asked to see. The last two are bespoke creative swings built specifically around what only Truly can do: her existing web-game experience, the 'Doggy' Platinum moment, and the four-lane mix-variant system.",
      subBlocks: [
        {
          label: "A",
          title: "Interactive OOH to Game QR",
          budget: "$8,500",
          objective:
            "Billboards and wild-postings in LA plus one breakout market that QR-drop straight into her existing web-game experience. Bridges the IRL buy to an owned, trackable destination instead of a dead impression.",
          components: {
            heading: "How It Works",
            items: [
              "LA plus one breakout-market OOH placement tied to the EP",
              "QR routes directly into the Dear Joshua web game and pre-save gate",
              "Every scan is pixeled, retargeted, and captured into Laylo",
              "Turns a brand-awareness spend into a measurable capture channel",
            ],
          },
        },
        {
          label: "B",
          title: "Connected TV",
          budget: "$6,000",
          objective:
            "Brand-awareness presence on Hulu, Roku, Samsung TV+, and YouTube TV, where Gen Z actually watches. Cross-pollinates with the YouTube MV and Shorts spend around the EP.",
          components: {
            heading: "Placement",
            items: [
              "Hulu, Roku, Samsung TV+, YouTube TV",
              "Timed to the EP release and the focus-track music video",
              "Cross-pollination with YouTube Shorts and In-Stream",
            ],
          },
        },
        {
          label: "C",
          title: "'Doggy' Platinum Halo Moment",
          budget: "$1,900",
          objective:
            "A timed content, tastemaker-PR, and paid spike engineered around the 'Doggy' Platinum certification and the primary-artist reclassification. Turn an industry milestone into a public moment that routes attention to her profile.",
          components: {
            heading: "The Spike",
            items: [
              "Content stack staged for the certification announcement",
              "Tastemaker PR push on the independent-artist milestone",
              "Paid amplification behind the moment, retargeted into follows and pre-saves",
            ],
          },
        },
        {
          label: "D",
          title: "Mix-Variant Creator Challenge",
          budget: "$1,000",
          objective:
            "Turn the four edits per track into a duet-and-remix challenge. Sped-up and club edits fuel the TikTok sound, and the winners get whitelisted into paid.",
          components: {
            heading: "Mechanics",
            items: [
              "Duet and remix prompts across the pop, electronic, rock, and alt lanes",
              "Sped-up and club edits seeded to DJ and dance creators",
              "Winners whitelisted into Spark and Partnership Ads",
            ],
          },
        },
      ],
      footnote:
        "All four are optional and scoped separately. Together they move the plan from $30K Core to $50K Expanded. The 15% CCD fee comes off the top of the total budget.",
    },

    // ===================================================================
    // 11. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "11",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro:
        "How the Core media pool deploys across the Dear Joshua cycle. July stands up capture and launches the single. Early August scales winners and pre-saves the EP. Late August through September releases the EP and converts the audience into owned follows. Phase budgets are directional; CCD reallocates weekly.",
      totalBudget: "$25,500 to media + creator (Core)",
      phases: [
        {
          label: "Capture Build + Single Launch",
          window: "July 2026 / ~3 weeks",
          focus:
            "Stand up pixel and Laylo in week one. Build retargeting pools from the feature and 'Doggy' audience. Launch the single on July 17 with paid in test mode and creator seeding wave one. Goal: prove creative, capture the warm audience, and stop the leak before the EP.",
          budget: "~$9,000",
          tactics: [
            "Pixel plus Laylo CRM stand-up and retargeting pool build",
            "Single (July 17) paid launch: Spark Ads, Reels, Shorts in test mode",
            "Creator seeding wave one (micro-tier) on the trending sounds",
            "Pre-save flow live across bio, web game, and CRM",
          ],
        },
        {
          label: "EP Ramp + Convert",
          window: "Late July to mid-August / ~3 weeks",
          focus:
            "Scale winning single creative and retarget the captured pools. Announce the EP and open pre-saves. Creator seeding wave two (mid-tier). DSP editorial pitch and reclassification push. Goal: compound the single audience into the EP.",
          budget: "~$11,000",
          tactics: [
            "Paid Social scales behind proven creative, deep retargeting on warm pools",
            "EP pre-save push and Laylo drop-alert flows",
            "Creator seeding wave two plus whitelisting of winners",
            "DSP editorial pitch, Discover Weekly and Release Radar setup",
          ],
        },
        {
          label: "EP Release + Sustain",
          window: "Late August to September / ~3 weeks",
          focus:
            "Release the EP on August 21 with the focus-track video and a paid drop stack. Deploy Marquee and Showcase on winners. Retarget everything into follows and pre-saves so the spike converts. Goal: turn the release into owned monthly listeners, not another leak.",
          budget: "~$5,500",
          tactics: [
            "EP (August 21) release stack: paid behind the focus-track MV",
            "Marquee and Showcase on proven winners",
            "Full-funnel retargeting into follows, saves, and CRM capture",
            "Performance review and handoff into the next-cycle brief",
          ],
        },
      ],
      footnote:
        "Phase budgets are directional and sum to the Core media pool. CCD reallocates between line items weekly based on what the pixel says is converting. Expanded-plan layers (OOH, CTV, halo, challenge) flight alongside the EP window.",
    },

    // ===================================================================
    // 12. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "12",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro:
        "Week-by-week deployment across the cycle. Capture stands up in W1. The single lands July 17 (W2). The EP lands August 21 (W7). The final weeks convert the release into owned follows and hand off to the next cycle. Sprints run in one-week cycles and CCD reallocates weekly.",
      weeks: [
        { index: 1, label: "W1", dates: "Jul 7" },
        { index: 2, label: "W2", dates: "Jul 14", highlight: true, note: "SINGLE 7/17" },
        { index: 3, label: "W3", dates: "Jul 21" },
        { index: 4, label: "W4", dates: "Jul 28" },
        { index: 5, label: "W5", dates: "Aug 4" },
        { index: 6, label: "W6", dates: "Aug 11" },
        { index: 7, label: "W7", dates: "Aug 18", highlight: true, note: "EP 8/21" },
        { index: 8, label: "W8", dates: "Aug 25" },
        { index: 9, label: "W9", dates: "Sep 1" },
        { index: 10, label: "W10", dates: "Sep 8" },
      ],
      workstreams: [
        {
          name: "Capture + CRM",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "low" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "high", label: "SCALE" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "low" },
          ],
        },
        {
          name: "Creator",
          cells: [
            { weekIndex: 2, intensity: "high", label: "WAVE 1" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "WAVE 2" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
          ],
        },
        {
          name: "DSP",
          cells: [
            { weekIndex: 4, intensity: "medium", label: "PITCH" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high", label: "MARQUEE" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
          ],
        },
        {
          name: "Reclassification",
          cells: [
            { weekIndex: 1, intensity: "high", label: "FILE" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "LAND" },
            { weekIndex: 6, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Capture stand-up + reclassification filing",
          items: [
            "Deploy pixel across site, web game, pre-save, and paid destinations. Build the first retargeting pools from the feature and 'Doggy' audience.",
            "Stand up Laylo email and SMS. Import existing contacts, build the welcome and drop-alert flows.",
            "File the 'Doggy' primary-artist reclassification with AWAL and the rights holders. This is the highest-leverage action in the plan; start it day one.",
            "Lock single creative, ad-account access, and the creator wave-one shortlist.",
          ],
        },
        {
          weekIndex: 2,
          title: "Single launch (July 17)",
          items: [
            "Single drops July 17. Paid launches in test mode: Spark Ads, Reels, Shorts against warm pools and lookalikes.",
            "Creator seeding wave one goes live (micro-tier) on the trending sounds.",
            "Pre-save to stream conversion flows fire across bio, web game, and Laylo.",
            "Baseline cost-per-follow and cost-per-stream to calibrate the scale phase.",
          ],
        },
        {
          weekIndex: 3,
          title: "Single scale + capture compounding",
          items: [
            "Paid Social shifts from test to scale behind winning creative. Retargeting pools now include single engagers.",
            "First read on cost-per-follow and retention. Prune underperformers.",
            "Laylo second broadcast rewards early subscribers with a snippet or BTS.",
          ],
        },
        {
          weekIndex: 4,
          title: "EP announce + DSP pitch",
          items: [
            "Announce the EP, lock the August 21 date, open pre-saves.",
            "DSP editorial pitch goes out across Spotify, Apple, and Amazon through AWAL.",
            "Paid maintains scaled spend; refine audience stacks off pixel data.",
          ],
        },
        {
          weekIndex: 5,
          title: "Reclassification lands + creator wave two prep",
          items: [
            "Target window for the 'Doggy' reclassification to land and begin routing stream-weight to her profile.",
            "Capture layer converts the routed audience into follows and CRM, the step that leaked in 2025.",
            "Prep creator seeding wave two (mid-tier) for the EP window.",
          ],
        },
        {
          weekIndex: 6,
          title: "EP ramp",
          items: [
            "Creator seeding wave two goes live. Whitelist early winners into paid.",
            "DSP push intensifies: Discover Weekly and Release Radar setup, Canvas assets delivered.",
            "Pre-save push at full strength across all surfaces.",
          ],
        },
        {
          weekIndex: 7,
          title: "EP release (August 21)",
          items: [
            "EP drops August 21 with the focus-track music video. Paid drop stack behind the MV.",
            "Marquee and Showcase deploy on the proven winners from the single window.",
            "Capture at full intensity: every surface converting reach into follows, saves, and CRM.",
          ],
        },
        {
          weekIndex: 8,
          title: "EP convert",
          items: [
            "Full-funnel retargeting into follows and pre-saves. Deep pools from the release-week spike.",
            "Creator wave two sustains; boost top-performing posts.",
            "DSP: push catalog activation so the whole profile lifts, not just the EP.",
          ],
        },
        {
          weekIndex: 9,
          title: "Sustain",
          items: [
            "Paid steps to evergreen plus retargeting on the strongest creative.",
            "Laylo re-engagement broadcast targeting non-openers.",
            "Monitor monthly-listener retention against the 2025 leak benchmark.",
          ],
        },
        {
          weekIndex: 10,
          title: "Handoff",
          items: [
            "Performance review across all workstreams: cost-per-follow, retention, pool growth, reclassification impact.",
            "Recommendations file for the next release cycle.",
            "Owned inventory (pixel pools, CRM, fan channels) cycled to next-release content.",
          ],
        },
      ],
      footnote:
        "The reclassification landing window (W5) is a target, not a guarantee, since it depends on rights-holder and DSP paperwork. The capture layer is live before it so the routed audience converts whenever it lands.",
    },

    // ===================================================================
    // 13. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "13",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro:
        "Two tiers for the Dear Joshua cycle. Both carry a 15% CCD fee taken off the top of the budget, and no retainer. On the Core plan that is $4,500, leaving $25,500 to deploy. Each release cycle authorizes its own budget on the same structure.",
      ccdNote:
        "CCD is compensated at 15% of the total budget, taken off the top, with no monthly retainer. Music-video production sits outside this plan and is already handled.",
      tiers: [
        {
          label: "Core Plan",
          budget: "$30,000",
          name: "Dear Joshua Core",
          tagline:
            "All-in. The complete capture-and-convert machine for the single plus EP cycle. 15% media management, no retainer.",
          featured: true,
          deployable: "$25,500 to media + creator",
          feeBreakdown: {
            retainer: "$0",
            retainerDetail: "No retainer on this engagement",
            mediaManagement: "$4,500",
            mediaManagementDetail: "15% of $30K, taken off the top",
          },
          breakdown: [
            { vertical: "Capture, Retargeting + Laylo CRM", amount: "$5,500" },
            { vertical: "Paid Social + Creator Seeding", amount: "$14,000" },
            { vertical: "DSP In-App (Marquee/Showcase) + Programmatic", amount: "$6,000" },
            { vertical: "CCD Fee (15%, off the top)", amount: "$4,500" },
          ],
        },
        {
          label: "Expanded Plan",
          budget: "$50,000",
          name: "Dear Joshua Expanded",
          tagline:
            "Core plus the scale layer: Interactive OOH, Connected TV, the Platinum halo, and the Mix-Variant challenge. 15% media management, no retainer.",
          deployable: "$42,500 to media + creator",
          feeBreakdown: {
            retainer: "$0",
            retainerDetail: "No retainer on this engagement",
            mediaManagement: "$7,500",
            mediaManagementDetail: "15% of $50K, taken off the top",
          },
          breakdown: [
            { vertical: "Core media pool (Capture, Paid, Creator, DSP)", amount: "$25,500" },
            { vertical: "Interactive OOH to Game QR", amount: "$8,500" },
            { vertical: "Connected TV (Hulu/Roku/Samsung+/YT TV)", amount: "$6,000" },
            { vertical: "'Doggy' Platinum Halo (content + PR + paid)", amount: "$1,500" },
            { vertical: "Mix-Variant Creator Challenge", amount: "$1,000" },
            { vertical: "CCD Fee (15%, off the top)", amount: "$7,500" },
          ],
        },
      ],
      footnote:
        "The CCD fee comes off the top of each budget. Music-video production is out of scope and already handled. The next release, the tour, and any international push authorize fresh budgets on the same structure.",
    },
  ],
};
