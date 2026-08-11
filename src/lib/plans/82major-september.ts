import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorSeptember: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major-september/og-image.png",
  language: "en",
  languageAlternates: [],

  cover: {
    label: "September Release Campaign",
    title: "82MAJOR",
    subtitle: "The comeback campaign for HEAT, September 1. Built on the infrastructure the SIGN cycle proved, aimed at the U.S. market that became the group's largest, and sequenced into the Q4 tour window.",
    partnership: "GREAT M Entertainment × Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "August 2026",
    backgroundImage: "/images/82major-september/82major-group.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview / Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Objective",
      subtitle: "A digital campaign for the September 1 comeback, priced at three levels, built from the measured unit costs the SIGN cycle produced.",
      body: [
        "This plan funds the digital campaign for the September release, lead single HEAT, out September 1 at 6:00 PM KST. The cycle runs roughly 12 weeks, from pre-release build through the Q4 U.S. tour window.",
        "The strategic case is that the SIGN cycle already answered the hard question. Section 02 sets out what every lane returned, measured rather than estimated, and every number in this plan traces back to it. It proved 82MAJOR converts the audience it reaches, at a cost per action that most K-pop campaigns do not hit. Spotify followers moved from 149,716 at campaign start to 161,196 today, an all-time high, while the fandom conversion ratio recovered to 0.46, the strongest reading of the campaign. The United States went from a secondary market to the group's largest Spotify market at 70,205 monthly listeners, up roughly 27 percent across the window, while worldwide listeners declined on the normal post-release curve. Los Angeles is now a top-ten city for the group. Eight months ago the top five cities were all in Southeast Asia with no Western city on the board.",
        "SIGN was a campaign run against a record that was already out, with no pre-release window, no pre-save mechanic, and creative that had to be tested live. HEAT gives back all three. The single biggest efficiency gain available in this cycle is simply having three weeks before release day to validate creative, warm audiences, and build a pre-save base, so release week scales what already works instead of discovering it.",
        "Budgets here are scoped to this cycle only. The Q4 tour window and the 1H 2027 releases each authorize fresh budgets on the same structure. The infrastructure this campaign runs on, the fan channel network, the CRM lane, the warmed paid audiences, and the tested creative library, carries forward into all of them at marginal cost.",
      ],
      supports: {
        heading: "What This Plan Supports",
        items: [
          "HEAT single release, September 1 (the campaign priced in this document)",
          "Full-record support across the September release, not lead single only",
          "Q4 U.S. tour window amplification (own budget, authorized with routing)",
          "Data and fandom acquisition feeding the 1H 2027 album cycle",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Beat the SIGN release-week peak on U.S. daily streams, with a pre-warmed audience instead of a cold start",
          "Grow the owned base: Spotify followers past 175K and a materially larger CRM list by end of cycle",
          "Hold the fandom conversion ratio above 0.40 through the release-week listener spike",
          "Diversify playlist reach so no single placement carries the majority of it",
          "Deliver a tested creative library and warmed audiences the tour window and the 2027 album inherit",
        ],
      },
      footnote: "Release date confirmed publicly as September 1, 6:00 PM KST. The Kakao experiential add-on described in Section 10 sits outside the CCD ceiling. Against a ~$70,000 overall ceiling, Core plus a $15,000 experiential add-on lands at $45,000 and either $50,000 build plus the same add-on lands at $65,000, so every configuration in this document fits with headroom remaining.",
    },

    // ===================================================================
    // 02. What The SIGN Cycle Proved
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Evidence",
      title: "What The SIGN Cycle Proved",
      philosophy: "Every figure in this section is measured, not modelled, and every recommendation in this document is traceable back to one of them. The SIGN campaign was the first time this group's audience was bought against at scale in the United States, which means the September plan does not have to guess at what a dollar buys. It already knows.",
      intro: "The campaign has run since June 15 with roughly $13,400 of paid media across TikTok and Meta, a $5,000 creator and clipping round, and an always-on fan channel network. What follows is what each of those lanes returned, what the streaming and fandom data did underneath them, and what that evidence says about how the September budget should be shaped.",
      subBlocks: [
        {
          label: "A",
          title: "The Conversion Machine Works",
          objective: "82MAJOR keeps the audience it reaches. This is the metric the entire strategy rests on, and it improved every month of the campaign.",
          strategy: "The fandom conversion ratio (Spotify followers divided by monthly listeners) measures whether reach turns into a relationship or evaporates. It fell to 0.23 at the release listener spike, which is normal: a release pulls in casual listeners faster than it converts fans. It has since recovered to 0.46, above the 0.44 pre-campaign baseline, while followers hit an all-time high. That combination, followers climbing while the ratio climbs, is the signature of a campaign converting rather than renting.",
          components: {
            heading: "Measured Across The Campaign Window",
            items: [
              "Spotify followers 149,716 to 161,196, an all-time high, up 7.7 percent and rising every week",
              "Fandom conversion ratio 0.23 at the release trough, 0.44 pre-campaign baseline, 0.46 today",
              "U.S. monthly listeners 55,421 to 70,205, up roughly 27 percent, now the group's largest market ahead of Indonesia at 38,547",
              "Los Angeles entered the global top ten cities, the first Western city ever to do so. Eight months ago the top five were all Southeast Asian",
              "Worldwide monthly listeners 469,822 to 349,510 across the same window, the normal post-release curve",
            ],
          },
          kpis: [
            "Followers 161,196, all-time high",
            "Conversion ratio 0.46",
            "U.S. listeners 70,205, #1 market",
          ],
          timeline: "Implication for September: the CRM and pre-save lane is the mechanism behind this number, and it runs in every tier. It is not the lane to cut.",
        },
        {
          label: "B",
          title: "Paid Social Found Its Floor On Both Platforms",
          objective: "Roughly $13,400 of paid media, all U.S. and Canada, across a TikTok traffic flight, a TikTok conversion flight, and a Meta Instagram conversion flight. The unit costs below are what the September paid budget buys.",
          strategy: "The optimization target is the second click, the deliberate tap through the pivot page to a DSP, rather than the ad click. TikTok traffic delivers the cheapest volume and Meta delivers the higher engagement rate and the retargetable pool. Both improved as the campaign learned: Meta weekly cost per click fell from $0.114 to $0.078 with clicks up 47 percent on flat spend after the conversion event was swapped.",
          components: {
            heading: "Platform By Platform, Campaign To Date",
            items: [
              "TikTok traffic flight: $7,509 spend, 1,597,106 impressions, 94,556 clicks, 5.92 percent CTR, $0.08 per click, $4.70 CPM, 869,187 reach",
              "TikTok conversion flight: $2,527 spend, 407,250 impressions, 490 conversions at $5.16, $6.21 CPM",
              "Meta Instagram conversion flight: $3,361 spend, 462,872 impressions, 268,934 reach, 6.42 percent CTR, $0.113 per click, $0.111 per landing-page view, $7.26 CPM",
              "Blended across both platforms: roughly $13,400 spend, 2.47M impressions, 131,615 clicks, about $0.10 per click and a $5.43 CPM",
              "Meta engagement alongside the clicks: 34,129 reactions, 1,330 saves, 197,832 video views",
            ],
          },
          kpis: ["$0.08 TikTok CPC", "6.42% Meta CTR", "$5.43 blended CPM"],
          timeline: "Implication for September: this is the most efficient reach the account buys and the only lane that also builds a retargetable audience. Every additional dollar here has a known return.",
        },
        {
          label: "C",
          title: "Creator And Clipping Bought The Cheapest Reach",
          objective: "A $5,000 creator and clipping commitment returned roughly 2.09 million views, the strongest cost per view recorded on this account.",
          strategy: "Culture-first edits carried the round. The top single edit reached 337,560 views by attaching the song to a show with independent search demand, and one creator's posts on that theme hit 8 to 9 percent engagement. The lesson is not that clipping is reliable, it is that clipping is cheap enough that a small number of outliers pays for the whole round. The plan therefore budgets for volume rather than for a blended average.",
          components: {
            heading: "What The Rounds Returned",
            items: [
              "Roughly 2.09M views on $5,000, about $0.0024 per view, a $2.39 CPM",
              "A later edits round delivered roughly 1.5M views at about a $3.33 CPM and 1.27 percent engagement",
              "Concentration is real: roughly a third to 40 percent of views came from about five posts",
              "Two creators picked the song up organically, unpaid, which is the campaign stirring movement it did not buy",
            ],
          },
          kpis: ["$0.0024 per view", "2.09M views on $5K", "$2.39 CPM"],
          timeline: "Implication for September: size the round for enough shots on goal rather than for an average, and put paid behind organic winners through partner codes at no creator cost.",
        },
        {
          label: "D",
          title: "The Fan Channel Network, Measured Honestly",
          objective: "The always-on fan channel network is the one lane whose measured return does not currently justify its cost, and the September budget should be set with that on the table rather than around it.",
          strategy: "Two accounts have been running since mid-June at $4,000 per month across the network, roughly $6,800 committed to date. Every figure below was pulled directly from TikTok, so unlike the creator numbers it is platform-measured rather than vendor-reported. The pages are executing the brief: 63 posts, daily cadence, culture-first creative. The reach simply is not arriving at a cost that competes with the other lanes.",
          components: {
            heading: "Pulled Directly From TikTok",
            items: [
              "@82de.fan: 68 followers, 33 posts, roughly 27,300 total views, median post 725 views, best post 4,546",
              "@82major.lyrics: 46 followers, 30 posts, roughly 8,800 total views, median post 180 views, best post 1,353",
              "Network total: 114 followers and roughly 38,200 views across 63 posts",
              "At roughly $6,800 committed, that is about $0.18 per view, a $178 CPM, and roughly $60 per follower",
              "For scale, the official 82MAJOR TikTok carries 1.7M followers and 36.6M likes",
            ],
          },
          kpis: ["114 followers", "~38,200 views", "$0.18 per view"],
          timeline: "Implication for September: this is the $12,000 line the Media-Weighted build reallocates. The counterargument is real and stated in the next block.",
        },
        {
          label: "E",
          title: "Cost Per Outcome, Side By Side",
          objective: "The same question asked of every lane: what did a dollar buy? This comparison is the single clearest input into how the September budget should be shaped.",
          components: {
            heading: "Effective CPM By Lane, Campaign To Date",
            items: [
              "Creator and clipping network: $2.39 CPM (vendor-reported views)",
              "TikTok paid traffic: $4.70 CPM (platform-reported)",
              "Blended paid social across TikTok and Meta: $5.43 CPM (platform-reported)",
              "Meta Instagram conversion flight: $7.26 CPM (platform-reported)",
              "Fan channel network: roughly $178 CPM (platform-measured)",
              "The fan channel network is running at roughly 33 times the blended paid CPM and roughly 74 times the clipping CPM",
            ],
          },
          strategy: "Three honest caveats travel with this comparison. First, the creator and clipping view counts are vendor-reported off their own dashboards and are not independently audited, while the fan channel and paid figures are platform-measured, so the cheapest lane carries the weakest verification. Second, paid social delivers a click and a retargetable audience rather than only a view, so its CPM understates what it returns. Third, fan channels are an owned asset that in principle compounds, where paid and clipping rent reach that stops the day spend stops. That compounding case is the strongest argument for keeping them. At 114 followers after roughly two months, it has not started compounding yet.",
          kpis: ["Clipping $2.39", "Blended paid $5.43", "Fan channels ~$178"],
        },
        {
          label: "F",
          title: "Decay Stopped Above The Prior Two Releases",
          objective: "SIGN is now behaving like catalog rather than a decaying single, and it is doing so at a higher absolute floor than either release before it.",
          strategy: "The brief was to keep SIGN alive into September. That was satisfied before the playlist floor-support lane had even started serving. The decline flattened while U.S. streams continued to rise, which is the signature of a single-region campaign holding a globally decaying track. It is also the cleanest attribution the campaign has: the region that was bought grew, the regions that were not decayed.",
          components: {
            heading: "The Retention Picture",
            items: [
              "SIGN retained 22.6 percent of its peak at week 12, against a mid-tier K-pop benchmark of 5 to 10 percent",
              "On absolute daily streams SIGN leads both prior releases at every week of the curve",
              "U.S. streams rising while worldwide listeners fell roughly 26 percent across the same window",
              "One editorial placement drove roughly 89 percent of playlist reach at one point, which is the campaign's clearest structural risk",
            ],
          },
          kpis: ["22.6% W12 retention", "2-4x the category norm", "Flat, not declining"],
          timeline: "Implication for September: the playlist concentration finding is why the DSP section builds multiple independent reach lanes rather than chasing one anchor placement.",
        },
        {
          label: "G",
          title: "What The Evidence Says About The September Build",
          objective: "Reading all six findings together, four conclusions shape every number in this proposal.",
          components: {
            heading: "From Evidence To Plan",
            items: [
              "Fund the lanes with known unit costs. Paid social and the creator round are the only two lanes with measured, repeatable costs per outcome, which is why they carry the majority of deployable spend in every tier.",
              "Protect the CRM and conversion lane. The conversion ratio is the thesis metric and it improved throughout. Pre-save mechanics, absent on SIGN because the record was already out, are the single largest new lever available in September.",
              "Diversify DSP reach deliberately. A campaign one playlist decision away from losing most of its reach is a campaign with an unpriced risk in it.",
              "Put the fan channel question on the table rather than around it. The Media-Weighted build exists because the measured return does not currently justify the line, and the decision belongs to the people reading this, not buried in a budget.",
            ],
          },
        },
      ],
      footnote: "Streaming, audience, and fan channel figures pulled 2026-08-10 from Chartmetric and directly from TikTok. Paid figures are platform-reported from the TikTok and Meta ad accounts for the campaign window. Creator and clipping view counts are vendor-reported off the vendor's own dashboards and are not independently verified, so that lane's cost per view should be read as a planning benchmark rather than an audited rate.",
    },

    // ===================================================================
    // 03. Core Strategy + Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "03",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "SIGN proved the machine converts. HEAT is the first release where that machine gets a running start. The entire gain available this cycle comes from moving work that happened after release day to before it: test the creative, warm the audience, and build the pre-save base, so release week scales instead of learns.",
      hierarchy: [
        {
          label: "Pre-Release Advantage (The Unlock)",
          description: "SIGN was worked cold on a record already in market. HEAT has a three-week runway against a published asset calendar. That window is spent validating ad creative in dark tests, building a pre-save flow in the CRM, and warming the paid audiences that release week will retarget. Release week then deploys proven creative against an audience that already knows the record is coming. This is the single largest efficiency gain in the plan and it costs almost nothing extra to capture.",
        },
        {
          label: "Fandom (Foundation, Always-On)",
          description: "The compounding layer. The fan channel network, the CRM lane, and the engagement mechanics run continuously through the cycle and carry into the tour window and the 2027 album. This is where the conversion ratio comes from, and the conversion ratio is the thesis. Every paid dollar aims at moving someone into the owned base, not just at a stream.",
        },
        {
          label: "Digital (Amplifier)",
          description: "Paid social and the creator and clipping network, concentrated on the U.S. where the audience has actually moved. The dark-ads loop is unchanged from SIGN: find winners quietly, then hand winners to the official channels so the group posts what is already proven. Culture-first creative earned the cheapest reach on the account and remains the brief.",
        },
        {
          label: "DSP + PR (Discovery & Credibility)",
          description: "Editorial and playlist work runs through Kakao's distribution relationships, with CCD supplying pitch packets, metadata quality control, and measurement. The clear lesson from SIGN is diversification: at one point a single editorial placement drove roughly 89 percent of playlist reach, which is a fragile position no campaign should re-enter.",
        },
      ],
      messaging: [
        "Move the work forward. Everything SIGN had to learn during release week, HEAT learns before it.",
        "Spend where the audience already moved. The U.S. is now the largest market, so it is where the concentration goes.",
        "Own the audience, do not rent it. Paid drives to the CRM and the follow, not only to the play.",
        "Per-cycle budgets, one structure. The tour window and the 2027 album authorize fresh spend into the same machine.",
      ],
      footnote: "Foundational spend builds owned infrastructure that survives the cycle. Amplifier spend is calibrated to the release calendar and reallocated weekly against live performance.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro: "The United States is now 82MAJOR's largest Spotify market at 70,205 monthly listeners, ahead of Indonesia (38,547), the Philippines (34,274), and Malaysia (33,820). That is a change this campaign created: at the start of the SIGN window the U.S. sat at 55,421. Los Angeles has entered the group's global top ten cities, the first Western city to do so. The targeting below is where the September paid and creator lanes concentrate.",
      metrosLabel: "Priority Metros",
      metros: [
        { name: "Los Angeles, CA" },
        { name: "New York, NY" },
        { name: "Chicago, IL" },
        { name: "Dallas, TX" },
        { name: "Atlanta, GA" },
        { name: "Houston, TX", tier: "secondary" },
        { name: "Seattle, WA", tier: "secondary" },
        { name: "Phoenix, AZ", tier: "secondary" },
        { name: "San Francisco, CA", tier: "secondary" },
        { name: "Washington, DC", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 54 },
        { bracket: "25-34", weight: 30 },
        { bracket: "35-44", weight: 12 },
        { bracket: "45+", weight: 4 },
      ],
      genderDistribution: { female: 72, male: 28 },
      personas: [
        {
          name: "Core Fandom",
          label: "The conversion base",
          priority: "primary",
          profile: "Already following 82MAJOR or an adjacent fifth-generation act. This is the audience the SIGN campaign converted, and it is why followers hit an all-time high while worldwide listeners declined. Release week starts here.",
          psychographics: [
            "Identity-invested in the group, not just the song",
            "Participates rather than consumes: streams, saves, comments, buys physicals",
            "Discovers through fan edits and short-form before official channels",
          ],
          motivations: ["Access to the members", "Being early on a release", "Belonging to the fandom"],
          behaviors: [
            "Pre-saves when the mechanic exists, which SIGN could not offer",
            "Responds to reply-first CRM rather than broadcast-heavy messaging",
            "Amplifies fan-origin content more reliably than artist-pushed content",
          ],
          platforms: [
            { name: "TikTok", role: "Primary discovery and participation surface" },
            { name: "Instagram", role: "Fandom identity and member-level content" },
            { name: "Spotify", role: "Conversion target, follow and save" },
            { name: "X", role: "Real-time fandom coordination" },
          ],
          triggers: ["Pre-save prompts", "Member-level and pair edits", "Release-week drop to the owned list"],
          conversionGoal: "Move into the owned CRM list and follow on Spotify, not just play the record.",
        },
        {
          name: "Genre-Adjacent Discovery",
          label: "The cheapest reach available",
          priority: "primary",
          profile: "Listens to melodic R&B and hip-hop and does not necessarily identify as a K-pop listener. Reached through culture-first edits attached to shows, films, and trending audio. Converts on the song first and finds the group second. The best-performing edit of the last cycle came from exactly here.",
          psychographics: [
            "Song-led rather than artist-led",
            "Follows trending culture, not release calendars",
            "Low tolerance for content that reads as promotion",
          ],
          motivations: ["The hook", "The edit's source material", "Discovery that feels organic"],
          behaviors: [
            "Engages with edits attached to independently trending topics",
            "Converts at the second click when the pivot is frictionless",
            "Rarely follows on first exposure, so retargeting carries the conversion",
          ],
          platforms: [
            { name: "TikTok", role: "Where culture-first edits earn the reach" },
            { name: "YouTube Shorts", role: "Secondary edit surface" },
            { name: "Instagram Reels", role: "Retargeting and second-exposure surface" },
          ],
          barriers: ["Perceives K-pop as a closed fandom", "Skips anything that opens as an advertisement"],
          triggers: ["Trending show and film edits", "Sped-up and remix formats", "Audio that lands before the visual context"],
          conversionGoal: "Second click to DSP, then retarget into a follow.",
        },
        {
          name: "Millennial Halo",
          label: "The live-conversion audience",
          priority: "secondary",
          profile: "Passive K-pop listener, playlist-led rather than fandom-led. Lowest engagement rate of the three, and the highest ticket-buying intent as the Q4 tour window approaches.",
          psychographics: [
            "Playlist-native listening behaviour",
            "Responds to production and vocal craft framing over concept framing",
            "Buys experiences more readily than merchandise",
          ],
          motivations: ["A record that holds up on repeat", "Live music as an event", "Editorial validation"],
          behaviors: [
            "Adds to personal playlists rather than following the artist",
            "Converts on tour announcements more than on release announcements",
          ],
          platforms: [
            { name: "Spotify", role: "Editorial and algorithmic discovery" },
            { name: "Instagram", role: "Tour and event conversion" },
            { name: "YouTube", role: "Full-length and performance content" },
          ],
          triggers: ["Editorial placement", "Tour routing announcements", "Performance and live-vocal assets"],
          conversionGoal: "Add to owned playlists now, convert to ticket intent in the Q4 window.",
        },
      ],
      similarArtists: [
        "TWS",
        "BOYNEXTDOOR",
        "RIIZE",
        "ZEROBASEONE",
        "NCT WISH",
        "ATEEZ",
        "Stray Kids",
        "KATSEYE",
      ],
      genres: ["K-Pop", "K-R&B", "Hip-Hop", "Melodic R&B"],
      platformSignals: [
        { platform: "Spotify", note: "U.S. is now the #1 market at 70,205 monthly listeners, up from 55,421 at campaign start. Followers at an all-time high of 161,196 with a fandom conversion ratio of 0.46, the strongest reading of the campaign. Los Angeles has entered the global top ten cities." },
        { platform: "TikTok", note: "Primary discovery engine and the source of the cheapest reach on the account. Culture-first edits attached to independently trending topics outperformed group-forward creative by a wide margin in the SIGN cycle." },
        { platform: "Meta", note: "Instagram conversion flight optimizing to the second click reached roughly $0.07 in the U.S. Retargeting pools built during the SIGN flight already exist and carry into September at no new cost." },
        { platform: "Shazam", note: "IRL discovery proxy. Worth watching in tour markets during the Q4 window as the leading indicator for routing decisions in 2027." },
      ],
      footnote: "Streaming and geographic figures from Chartmetric, pulled August 6, 2026. Age and gender splits are directional, derived from platform audience reporting across the SIGN campaign flight, and recalibrate after the pre-release test phase.",
    },

    // ===================================================================
    // 05. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "05",
      navLabel: "Budget",
      title: "Campaign Budget / September Release",
      intro: "Three all-in digital levels for the September cycle, roughly 12 weeks. CCD retainer and media management sit inside the budget, not on top. All three cover the full record, not the lead single alone. The Kakao experiential add-on described in Section 10 sits outside these numbers. The two $50,000 builds are the same money aimed differently: one keeps the always-on fan channel layer, the other retires it and moves that weight into the two lanes with the hardest proven costs behind them.",
      tiers: [
        {
          label: "Digital / Tier 1",
          budget: "$30,000",
          name: "Core",
          goal: "Run the proven SIGN machine against HEAT with a genuine pre-release window. Paid social and the creator round funded at roughly the levels that produced the SIGN results, the fan channel network held at daily cadence through release, and the CRM lane driving pre-saves. This is the level that protects the release without extending it.",
          includes: [
            "Paid social (Meta + TikTok), U.S. concentrated, dark-test into release week",
            "One creator and clipping round on culture-first edits, sized to the round that returned $0.0024 per view",
            "Fan channel network at daily cadence for two months, covering pre-release through release plus four weeks",
            "CRM lane: pre-save flow, release-day drop, broadcast mechanics",
            "DSP editorial coordination with Kakao: pitch packets, metadata QC, release-week follow-ups",
            "Full-record watch matrix from day one, so organic B-side heat gets budget in days",
            "Weekly reporting through the live dashboard as single source of truth",
          ],
        },
        {
          label: "Digital / Tier 2A",
          budget: "$50,000",
          name: "Full, Always-On",
          goal: "Everything in Core at roughly 1.9x the deployable weight, with the fan channel network held at full cadence across the whole cycle and Strive added for streaming floor support. This is the build that keeps the owned always-on layer growing through the release.",
          includes: [
            "Everything in Core, at roughly 1.9x deployable media",
            "Fan channel network at daily cadence across the full cycle, three months rather than two",
            "Paid social and the creator round both scaled above Core",
            "Strive playlist network added for streaming floor support through the decay window",
            "Retargeting pools from the SIGN flight activated against the pre-save and release push",
            "Creative library built and validated pre-release, carried into the tour window",
          ],
        },
        {
          label: "Digital / Tier 2B",
          budget: "$50,000",
          name: "Full, Media-Weighted",
          goal: "The same $50,000 with the fan channel network retired for this cycle and its $12,000 moved into paid social and the creator round. Paid social rises from $12,000 to $20,000 and the creator round from $7,000 to $11,000, concentrating the budget in the two lanes with measured costs behind them: a $0.07 second click and $0.0024 per view.",
          includes: [
            "No fan channel network for this cycle, which frees $12,000",
            "Paid social at $20,000, roughly 67 percent above the always-on build",
            "Creator and clipping round at $11,000, roughly 57 percent above the always-on build",
            "Strive playlist network for streaming floor support through the decay window",
            "CRM lane, DSP coordination, watch matrix, and reporting all unchanged from Core",
            "Fan channels can be restarted at $4,000 per month whenever the label wants them back",
          ],
        },
      ],
    },

    // ===================================================================
    // 06. Vertical 1: Fandom & Always-On Digital
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Fandom",
      title: "Vertical 1 / Fandom & Always-On Digital",
      philosophy: "The conversion ratio is the thesis metric, and it is the one number that improved every month of the SIGN cycle. This vertical is what produces it. Everything here compounds: it does not reset when the release cycle ends.",
      subBlocks: [
        {
          label: "A",
          title: "CRM Lane: Pre-Save, Drop, Broadcast",
          objective: "SIGN had no pre-save mechanic because the record was already out. HEAT gets the full flow, and the CRM list becomes the asset the tour window and the 2027 album inherit.",
          strategy: "The pre-release window runs a pre-save flow across the fan channels and the group's own socials, capturing phone and email into the owned list. Release day fires a drop broadcast to that list. Through the cycle the lane runs reply-first and broadcast-light, which is what kept engagement healthy rather than training people to ignore it.",
          components: {
            heading: "Mechanics",
            items: [
              "Pre-save flow live from the start of the teaser calendar, driving to the owned list",
              "Release-day drop broadcast, with a follow-up sequence across release week",
              "Pre-approved reply bank so inbound gets answered quickly without an approval loop per message",
              "Signup moments engineered into the fan channel content and the Q4 tour stops",
            ],
          },
          kpis: [
            "Owned list size at end of cycle",
            "Pre-save to release-day play conversion",
            "Reply rate and list retention through the cycle",
          ],
        },
        {
          label: "B",
          title: "U.S. Fan Channel Network",
          objective: "Always-on short-form distribution the group does not have to publish itself, tuned to the creative guardrail that produced the cheapest reach in the SIGN cycle.",
          strategy: "The channels run culture-first: trending sounds, trending content, shows and films, with the group woven in. Rival-group content stays off the network. During the September cycle the channels become the primary bed for HEAT edits and the testing ground that feeds paid creative.",
          components: {
            heading: "Operating Model",
            items: [
              "Minimum daily posting cadence across the network through the cycle",
              "Creative guardrail: trending sounds and trending culture, no rival-group edits",
              "Approvals through the shared working sheet, not per-post label sign-off",
              "Winning organic posts promoted into paid, which is where the cheapest second clicks came from",
            ],
          },
          kpis: ["Network follower growth", "Views per post and engagement rate", "Organic-to-paid winner conversion rate"],
        },
        {
          label: "C",
          title: "Engagement Mechanics",
          objective: "Convert passive reach into participation, which is what moves the conversion ratio rather than just the stream count.",
          tactics: [
            "Release-week participation prompt tied to the record's concept, seeded through the fan channels",
            "Group amplification of fan-origin content rather than artist-pushed choreography, which sustains longer",
            "Comment and reply activity concentrated in the first 48 hours of release week",
            "Follow and save prompts carried in paid creative, not only listen prompts",
          ],
        },
      ],
      footnote: "The CRM lane is operational inside the CCD retainer and runs in every tier. The fan channel network is a monthly engagement at $4,000 per month across the network, so its line scales with duration: two months at Core, three at Full Always-On, and none at Full Media-Weighted, where that $12,000 moves into paid social and the creator round instead. It can be restarted at $4,000 per month at any point in the cycle.",
    },

    // ===================================================================
    // 07. Vertical 2: Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Digital",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "This is the amplifier, and it is the lane with the hardest numbers behind it. The SIGN flight found a $0.07 U.S. second click and a $0.0024 cost per view. The September plan spends against those known rates rather than against estimates.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social: Test Before, Scale After",
          objective: "Use the pre-release window to validate creative in dark tests, so release week deploys proven assets against warmed audiences instead of discovering what works while the news cycle burns.",
          strategy: "Pre-release runs low-spend dark tests across hook, caption, and format variants, optimizing to the second click. Release week scales the winners hard against pre-save audiences, SIGN-flight retargeting pools, and lookalikes built off the high-intent clickers the last campaign produced. Post-release the flight sustains rather than spikes, holding the streaming floor through the decay window.",
          components: {
            heading: "Structure",
            items: [
              "Optimization target is the second click to DSP, not the ad click",
              "Dark creative testing from the start of the teaser calendar",
              "Retargeting against the SIGN high-intent click pool, which already exists and cost nothing new",
              "Sustained post-release delivery rather than a release-week-only spike",
              "Weekly reallocation across creative and audience based on live cost per second click",
            ],
          },
          kpis: ["U.S. cost per second click at or below $0.07", "Blended cost per second click", "Click-through rate on lead creative"],
        },
        {
          label: "B",
          title: "Creator & Clipping Network",
          objective: "Buy the cheapest reach available to the account, on culture-first creative, with enough volume that concentration works in the campaign's favour rather than against it.",
          strategy: "Briefs go out on trending shows, films, and audio with HEAT as the bed, matching the pattern that produced the top-performing edits in the SIGN cycle. Volume is budgeted with the expectation that a small number of posts carry most of the reach, so the round is sized for enough shots rather than for a blended average.",
          components: {
            heading: "Approach",
            items: [
              "Culture-first briefs: trending shows, films, and audio, group woven in",
              "Round sized for volume, because roughly five posts carried a third or more of the last round",
              "Paid boost behind organic winners through creator partner codes, which adds reach at no creator cost",
              "Organic creator pickup treated as a campaign signal and reported as lift, not as leakage",
            ],
          },
          kpis: ["Cost per view against the $0.0024 benchmark", "Engagement rate", "Number of posts above 250K views"],
        },
        {
          label: "C",
          title: "Creative Direction",
          objective: "Give the paid and creator lanes assets that already match what wins, rather than adapting album assets after the fact.",
          components: {
            heading: "What The Campaign Needs",
            items: [
              "Vertical-native cutdowns of the MV and performance assets, hook in the first three seconds",
              "Member-level and pair edits, which consistently outperform group-wide cuts in short form",
              "A callback asset connecting HEAT to SIGN, which the record already sets up and fans will recognise",
              "Square and static support for the feed and retargeting placements",
            ],
          },
        },
      ],
      footnote: "Paid social and the creator round are the two largest deployable lines in both tiers. Both are reallocated weekly against live cost per second click.",
    },

    // ===================================================================
    // 08. Vertical 3: DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy",
      philosophy: "The clearest structural risk the SIGN cycle exposed was reach concentration. At one point a single editorial placement carried roughly 89 percent of playlist reach. A campaign should never be one playlist decision away from losing its floor.",
      subBlocks: [
        {
          label: "A",
          title: "Editorial & Playlist Positioning",
          objective: "Build multiple reach lanes into the release rather than depending on one anchor placement.",
          strategy: "Editorial runs through Kakao's distribution relationships. CCD supplies the pitch packet, metadata quality control, and the measurement layer, and works the release toward several independent lanes: editorial, algorithmic, and user-generated playlist placement, so the loss of any one does not collapse reach.",
          components: {
            heading: "CCD Contribution",
            items: [
              "Pitch packet built on campaign data, delivered ahead of the release-week window",
              "Metadata and credit quality control before distribution locks",
              "Algorithmic signal support: save rate, playlist adds, and completion prompts carried in paid creative",
              "Catalog bridge from SIGN, which is now behaving as catalog and can feed the new release",
            ],
          },
          kpis: ["Number of independent reach lanes at release week", "Share of playlist reach from the single largest placement", "Save rate and add-to-playlist rate"],
        },
        {
          label: "B",
          title: "Strive: Streaming Floor Support",
          objective: "Hold the daily floor through the post-release decay window, which is when most campaigns quietly lose the gains they paid for.",
          strategy: "Strive runs in both $50,000 builds as floor support, billed on monthly insertion across the cycle. It is a self-operated playlist network using Spotify as the stream source, not a Spotify partnership. Strive reports its attributed daily streams separately from total streams, which gives a clean isolated view of what it contributed rather than a blended number.",
          components: {
            heading: "Reporting Discipline",
            items: [
              "Attributed streams reported separately from total streams, so the contribution is never blended into the headline",
              "Volume is a delivery range subject to available inventory, not a guaranteed stream count. Any monthly figure quoted onward should carry that caveat with it",
              "Layered onto the live dashboard alongside the paid and organic lanes",
            ],
          },
        },
        {
          label: "C",
          title: "Measurement",
          objective: "Report what can be proven and label what cannot.",
          components: {
            heading: "Standing Method",
            items: [
              "Campaign reporting and analytics reporting stay separate",
              "U.S.-only campaign against a global catalog, so U.S. growth against worldwide decay is the honest attribution frame",
              "Peak-versus-peak comparison across release cycles rather than raw totals",
              "Where a causal claim cannot be supported, the dashboard states the contribution and stops there",
            ],
          },
        },
      ],
      footnote: "DSP editorial carries no budget line in either tier. It runs through Kakao's distribution relationships identically in both packages, with CCD supplying strategy, assets, and measurement inside the retainer.",
    },

    // ===================================================================
    // 09. Vertical 4: PR
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "PR",
      title: "Vertical 4 / PR & Media",
      philosophy: "PR rides momentum rather than creating it. The role in this cycle is to convert the release moment and the Q4 tour routing into coverage that compounds the paid and organic work already running.",
      subBlocks: [
        {
          label: "A",
          title: "The Story The September Cycle Has",
          objective: "Give press a real angle rather than a release announcement.",
          components: {
            heading: "Available Angles",
            items: [
              "A group whose largest market became the United States inside a single campaign cycle",
              "Self-producing act with full writing and composing credits, returning with a bolder concept direction",
              "The callback from HEAT to SIGN as a deliberate through-line across two releases",
              "Q4 U.S. tour routing as the IRL proof point behind the streaming growth",
            ],
          },
        },
        {
          label: "B",
          title: "Channels & Timing",
          objective: "Concentrate coverage where it supports release week and the tour window rather than spreading it thin.",
          tactics: [
            "Release-week pitching into U.S. K-pop and music verticals, coordinated with the asset calendar",
            "Interview and feature offers evaluated against the record rather than against inventory availability",
            "City-based interviews during the tour window, clipped and geo-targeted in near-real time",
            "November East Coast press window aligned with the tour routing",
          ],
        },
        {
          label: "C",
          title: "Ownership",
          objective: "Keep the lane clean between the teams already working it.",
          strategy: "PR is led on the Kakao side with CCD supplying campaign data, clip assets, and geo-amplification behind placements that land. CCD does not duplicate outreach; it makes the coverage travel further once it exists.",
        },
      ],
      footnote: "PR is not a budget line in either digital tier. CCD's contribution is asset support, clipping, and paid amplification behind earned coverage.",
    },

    // ===================================================================
    // 10. Handled by Kakao
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "Kakao",
      title: "Handled by Kakao",
      philosophy: "These workstreams sit outside the CCD digital ceiling. They are mapped here so the full September picture reads in one place and the ceiling arithmetic in Section 10 is complete.",
      subBlocks: [
        {
          label: "A",
          title: "Experiential Add-On",
          budget: "$10,000 to $15,000",
          objective: "An experiential activation specced on the Kakao side, sitting on top of the digital campaign and outside the CCD budget.",
          strategy: "CCD's role is capture rather than production: every experiential moment should feed the owned list and the content pipeline. An activation that produces no signup mechanic and no clippable asset is worth materially less to the campaign than the same activation with both built in.",
          components: {
            heading: "CCD Asks Of Any Activation",
            items: [
              "A signup or capture mechanic built into the moment, feeding the CRM lane",
              "Vertical-native capture, so the activation produces paid-usable creative",
              "Timing coordinated with release week or the tour routing rather than standalone",
            ],
          },
        },
        {
          label: "B",
          title: "A&R And Features",
          objective: "Feature and A&R conversations continue on the Kakao and label side and are not funded by this campaign.",
          strategy: "Feature economics were mapped in earlier planning and remain available as an accelerator on a future cycle. Nothing in the September plan depends on a feature landing.",
        },
      ],
      footnote: "None of the workstreams in this section are funded by the digital tiers in Section 05. They are included so the overall ceiling can be assessed against the full picture.",
    },

    // ===================================================================
    // 11. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "11",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "Phasing shown at the Full Always-On tier. Full Media-Weighted runs the same three phases on the same $50,000 with the fan channel line removed and roughly $12,000 more sitting in paid social and creators, which weights Phases 2 and 3 more heavily. Core runs the same shape at roughly half the deployable weight, with Strive removed. Phase budgets are directional. CCD reallocates weekly against live cost per second click, which is how the SIGN flight got from $0.114 to $0.078 per click on flat spend.",
      totalBudget: "$50,000",
      phases: [
        {
          label: "Phase 1 / Pre-Release Build",
          window: "Aug 10 to Aug 31, ~3 weeks",
          focus: "The window SIGN never had. Dark-test creative against the teaser calendar, stand up the pre-save flow, and warm the audiences release week will retarget. Spend is deliberately light because the objective is learning and list-building, not reach.",
          budget: "~$11,000",
          tactics: [
            "Dark creative tests across hook, caption, and format variants, optimizing to the second click",
            "Pre-save flow live across fan channels and owned socials",
            "Fan channel network flipped to HEAT teaser content on the label asset calendar",
            "Retargeting pools rebuilt from the SIGN high-intent click audience",
            "Creator briefs issued so posting is ready for release week, allowing for the ramp time creators need",
          ],
        },
        {
          label: "Phase 2 / Release Week + Scale",
          window: "Sep 1 to Sep 21, ~3 weeks",
          focus: "Deploy the proven creative hard. This is where the pre-release work pays: release week scales validated assets against warmed audiences rather than testing into a cold market. Creator posting concentrates here, with paid boost behind whatever breaks.",
          budget: "~$22,000",
          tactics: [
            "Winning creative scaled across Meta and TikTok from day one",
            "Release-day CRM drop, followed by a release-week sequence",
            "Creator and clipping round posting concentrated in the first two weeks",
            "Paid boost behind organic winners through partner codes",
            "Full-record watch matrix live, so a B-side that moves gets budget within days",
          ],
        },
        {
          label: "Phase 3 / Sustain + Tour Window",
          window: "Sep 22 to Oct 26, ~5 weeks",
          focus: "Hold the floor through the decay window and hand the campaign to the Q4 tour routing. This is the phase most campaigns underfund, and it is where the SIGN cycle produced its most defensible result by keeping a decaying track flat.",
          budget: "~$17,000",
          tactics: [
            "Sustained paid delivery rather than a post-release cliff",
            "Playlist network lane serving as streaming floor support, reported separately",
            "Per-market paid pushes timed to tour routing as dates confirm",
            "City interviews clipped and geo-targeted in near-real time",
            "Signup capture at tour stops feeding the owned list",
          ],
        },
      ],
      footnote: "Phase budgets sum to the $50,000 total. They are directional with one exception: where the fan channel network runs it bills at a fixed $4,000 per month and cannot be reallocated, so roughly $4,000 of each month sits outside the weekly optimization. On the Media-Weighted build that constraint disappears and the full deployable is live to weekly reallocation. Everything else moves in both. Weekly reallocation across creative, audience, and lane is the mechanism that produced the cost improvements in the SIGN flight, and it requires the latitude to move money between these phases.",
    },

    // ===================================================================
    // 12. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "12",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve weeks from build to the tour window, anchored to the September 1 release. The teaser calendar in the first three weeks follows the label asset schedule. Week 4 is release week. The final four weeks carry into Q4 tour routing, which authorizes its own budget as dates confirm.",
      weeks: [
        { index: 1, label: "W1", dates: "Aug 10" },
        { index: 2, label: "W2", dates: "Aug 17" },
        { index: 3, label: "W3", dates: "Aug 24" },
        { index: 4, label: "W4", dates: "Aug 31", highlight: true, note: "RELEASE SEP 1" },
        { index: 5, label: "W5", dates: "Sep 7" },
        { index: 6, label: "W6", dates: "Sep 14" },
        { index: 7, label: "W7", dates: "Sep 21" },
        { index: 8, label: "W8", dates: "Sep 28" },
        { index: 9, label: "W9", dates: "Oct 5" },
        { index: 10, label: "W10", dates: "Oct 12" },
        { index: 11, label: "W11", dates: "Oct 19" },
        { index: 12, label: "W12", dates: "Oct 26" },
      ],
      workstreams: [
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 1, intensity: "low", label: "TEST" },
            { weekIndex: 2, intensity: "low", label: "TEST" },
            { weekIndex: 3, intensity: "medium", label: "RAMP" },
            { weekIndex: 4, intensity: "high", label: "LAUNCH" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high", label: "SCALE" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium", label: "TOUR" },
            { weekIndex: 10, intensity: "medium", label: "TOUR" },
            { weekIndex: 11, intensity: "medium", label: "TOUR" },
            { weekIndex: 12, intensity: "low", label: "WRAP" },
          ],
        },
        {
          name: "Creator + Clipping",
          cells: [
            { weekIndex: 1, intensity: "low", label: "BRIEF" },
            { weekIndex: 2, intensity: "low", label: "BRIEF" },
            { weekIndex: 3, intensity: "medium", label: "SEED" },
            { weekIndex: 4, intensity: "high", label: "POST" },
            { weekIndex: 5, intensity: "high", label: "POST" },
            { weekIndex: 6, intensity: "medium", label: "BOOST" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "low" },
            { weekIndex: 9, intensity: "medium", label: "TOUR" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "low" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "Fan Channels",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "FLIP" },
            { weekIndex: 2, intensity: "medium", label: "DAILY" },
            { weekIndex: 3, intensity: "high", label: "DAILY" },
            { weekIndex: 4, intensity: "high", label: "DAILY" },
            { weekIndex: 5, intensity: "high", label: "DAILY" },
            { weekIndex: 6, intensity: "high", label: "DAILY" },
            { weekIndex: 7, intensity: "medium", label: "DAILY" },
            { weekIndex: 8, intensity: "medium", label: "DAILY" },
            { weekIndex: 9, intensity: "medium", label: "DAILY" },
            { weekIndex: 10, intensity: "medium", label: "DAILY" },
            { weekIndex: 11, intensity: "medium", label: "DAILY" },
            { weekIndex: 12, intensity: "medium", label: "DAILY" },
          ],
        },
        {
          name: "CRM Lane",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "BUILD" },
            { weekIndex: 2, intensity: "high", label: "PRESAVE" },
            { weekIndex: 3, intensity: "high", label: "PRESAVE" },
            { weekIndex: 4, intensity: "high", label: "DROP" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "low" },
            { weekIndex: 9, intensity: "medium", label: "TOUR" },
            { weekIndex: 10, intensity: "medium", label: "TOUR" },
            { weekIndex: 11, intensity: "medium", label: "TOUR" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "DSP + Playlist",
          cells: [
            { weekIndex: 1, intensity: "low", label: "PITCH" },
            { weekIndex: 2, intensity: "medium", label: "PITCH" },
            { weekIndex: 3, intensity: "medium", label: "PITCH" },
            { weekIndex: 4, intensity: "high", label: "ADDS" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium", label: "FLOOR" },
            { weekIndex: 7, intensity: "medium", label: "FLOOR" },
            { weekIndex: 8, intensity: "medium", label: "FLOOR" },
            { weekIndex: 9, intensity: "medium", label: "FLOOR" },
            { weekIndex: 10, intensity: "medium", label: "FLOOR" },
            { weekIndex: 11, intensity: "low", label: "FLOOR" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "PR",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "low", label: "PITCH" },
            { weekIndex: 3, intensity: "medium", label: "PITCH" },
            { weekIndex: 4, intensity: "high", label: "PRESS" },
            { weekIndex: 5, intensity: "medium", label: "PRESS" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "low" },
            { weekIndex: 9, intensity: "medium", label: "TOUR" },
            { weekIndex: 10, intensity: "medium", label: "TOUR" },
            { weekIndex: 11, intensity: "high", label: "PRESS" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "Reporting",
          cells: [
            { weekIndex: 1, intensity: "low", label: "WEEKLY" },
            { weekIndex: 2, intensity: "low", label: "WEEKLY" },
            { weekIndex: 3, intensity: "low", label: "WEEKLY" },
            { weekIndex: 4, intensity: "medium", label: "DAILY" },
            { weekIndex: 5, intensity: "medium", label: "DAILY" },
            { weekIndex: 6, intensity: "low", label: "WEEKLY" },
            { weekIndex: 7, intensity: "low", label: "WEEKLY" },
            { weekIndex: 8, intensity: "low", label: "WEEKLY" },
            { weekIndex: 9, intensity: "low", label: "WEEKLY" },
            { weekIndex: 10, intensity: "low", label: "WEEKLY" },
            { weekIndex: 11, intensity: "low", label: "WEEKLY" },
            { weekIndex: 12, intensity: "medium", label: "WRAP" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Build and creative test opens",
          items: [
            "Campaign structure stood up, pixels and conversion events verified against the release assets",
            "Dark creative tests open at low spend, optimizing to the second click",
            "Fan channel network flips to teaser content on the label asset calendar",
            "Pre-save flow built and staged for the CRM lane",
            "Creator briefs drafted against culture-first themes, allowing for creator ramp time",
          ],
        },
        {
          weekIndex: 3,
          title: "Warm the audience, lock the winners",
          items: [
            "Creative winners identified from the dark tests and locked for release week",
            "Pre-save push at full weight across fan channels and owned socials",
            "Retargeting pools rebuilt and sized off the SIGN high-intent click audience",
            "DSP pitch packet delivered ahead of the release-week window",
            "Creator posting scheduled to land from release day forward",
          ],
        },
        {
          weekIndex: 4,
          title: "Release week",
          items: [
            "Proven creative scaled hard from day one across Meta and TikTok",
            "Release-day CRM drop to the owned list, followed by a release-week sequence",
            "Creator and clipping posting concentrated across the week",
            "Full-record watch matrix live, monitoring every track for organic movement",
            "Daily reporting cadence through the week rather than weekly",
          ],
        },
        {
          weekIndex: 5,
          title: "Scale and read the record",
          items: [
            "Paid scaling against the best-performing creative and audience combinations",
            "Paid boost applied behind organic winners through creator partner codes",
            "Any B-side showing organic movement gets budget within days, not weeks",
            "Playlist reach assessed for concentration risk, with additional lanes worked if one placement dominates",
          ],
        },
        {
          weekIndex: 9,
          title: "Tour window opens",
          items: [
            "Per-market paid pushes timed to tour routing as dates confirm",
            "City interviews clipped and geo-targeted in near-real time",
            "Signup capture built into every tour stop, feeding the owned list",
            "Tour content pipeline feeding the fan channel network and paid creative rotation",
          ],
        },
      ],
      footnote: "The grid shows the Full Always-On tier. At Core the fan channel row ends after week 8 and Strive does not run. At Full Media-Weighted the fan channel row does not run at all, and the paid and creator rows carry proportionally more weight from week 4 onward. Weeks 9 through 12 assume Q4 routing lands in that window. Tour-specific spend authorizes its own budget once dates confirm; what is shown here is the campaign work that continues through it.",
    },

    // ===================================================================
    // 13. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "13",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro: "All three levels are all-in for the September cycle, roughly 12 weeks. The CCD retainer and media management fee are line items inside the budget, not additions to it. Everything below the fee lines is deployable to media, creators, and channels. The two $50,000 builds carry identical totals, identical fees, and identical deployable; they differ only in where that deployable goes. Optional lanes at the bottom sit outside every tier and are contracted separately.",
      tiers: [
        {
          label: "Digital / Tier 1",
          budget: "$30,000",
          name: "Core",
          tagline: "Protect the release. Proven spend levels, with a real pre-launch window.",
          deployable: "$19,600",
          feeBreakdown: {
            retainer: "$7,500",
            retainerDetail: "Cycle retainer, ~12 weeks",
            mediaManagement: "$2,900",
            mediaManagementLabel: "Media Management",
            mediaManagementDetail: "15% on ~$19,600 managed media",
          },
          breakdown: [
            { vertical: "CCD Cycle Retainer", amount: "$7,500" },
            { vertical: "Media Management (15%)", amount: "$2,900" },
            { vertical: "Paid Social (Meta + TikTok)", amount: "$6,600" },
            { vertical: "Creator + Clipping Round", amount: "$5,000" },
            { vertical: "Fan Channel Network (2 mo at $4,000/mo)", amount: "$8,000" },
          ],
        },
        {
          label: "Digital / Tier 2A",
          budget: "$50,000",
          name: "Full, Always-On",
          tagline: "Keep the owned layer growing. Fan channels at full cadence across the cycle.",
          deployable: "$37,000",
          feeBreakdown: {
            retainer: "$7,500",
            retainerDetail: "Cycle retainer, ~12 weeks",
            mediaManagement: "$5,500",
            mediaManagementLabel: "Media Management",
            mediaManagementDetail: "15% on ~$37,000 managed media",
          },
          breakdown: [
            { vertical: "CCD Cycle Retainer", amount: "$7,500" },
            { vertical: "Media Management (15%)", amount: "$5,500" },
            { vertical: "Paid Social (Meta + TikTok)", amount: "$12,000" },
            { vertical: "Creator + Clipping Round", amount: "$7,000" },
            { vertical: "Fan Channel Network (3 mo at $4,000/mo)", amount: "$12,000" },
            { vertical: "Strive Playlist Network", amount: "$6,000" },
          ],
        },
        {
          label: "Digital / Tier 2B",
          budget: "$50,000",
          name: "Full, Media-Weighted",
          tagline: "Same money, no fan channels. $12,000 moved into paid and creators.",
          deployable: "$37,000",
          feeBreakdown: {
            retainer: "$7,500",
            retainerDetail: "Cycle retainer, ~12 weeks",
            mediaManagement: "$5,500",
            mediaManagementLabel: "Media Management",
            mediaManagementDetail: "15% on ~$37,000 managed media",
          },
          breakdown: [
            { vertical: "CCD Cycle Retainer", amount: "$7,500" },
            { vertical: "Media Management (15%)", amount: "$5,500" },
            { vertical: "Paid Social (Meta + TikTok)", amount: "$20,000" },
            { vertical: "Creator + Clipping Round", amount: "$11,000" },
            { vertical: "Strive Playlist Network", amount: "$6,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "Experiential Add-On",
          subtitle: "Kakao-Side Activation",
          budget: "$10,000 to $15,000",
          description: "Sits outside the CCD budget and is not funded by either digital tier. CCD asks that any activation carries a capture mechanic and produces vertical-native, paid-usable creative.",
        },
      ],
      footnote: "The fan channel network bills monthly at $4,000 per month, so its line scales with how many months it runs: two at Core, three at Full Always-On, none at Full Media-Weighted. It is the one fixed, non-reallocatable cost in the plan, which is why removing it frees the most flexible $12,000 in the budget. Strive bills on monthly insertion and its volume is a delivery range subject to inventory, not a guaranteed stream count. Budgets are scoped to the September release cycle. The Q4 tour window and the 1H 2027 releases each authorize fresh budgets on this same structure, and inherit the infrastructure, warmed audiences, and tested creative this campaign produces.",
    },
  ],
};
