import type { StrategyPlanData } from "../plan-context";

export const kiiikiiiPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/kiiikiii/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "kiiikiii-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Brand Audit & Growth Strategy",
    title: "KiiiKiii",
    subtitle: "A consumption-first audit of where KiiiKiii stands against its class, and the conversion strategy that turns general-public heat into owned fandom.",
    partnership: "Starship Entertainment × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "August 2026",
    backgroundImage: "/images/kiiikiii/kiiikiii-group.jpg",
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
      subtitle: "The general public found KiiiKiii before their fandom did. This document audits that gap in detail, then closes it.",
      body: [
        "Eighteen months after debut, KiiiKiii has the consumption profile of a group a tier above its infrastructure. \"404 (New Era)\" reached No. 1 on Melon through a 16-day climb and became Billboard's top-ranked K-pop song of 2026 at the year's midpoint. \"Pop Off Pop Off\" is repeating the same pattern now: No. 1 on Spotify Korea within ten days of release, all six album tracks charting, and Spotify monthly listeners at an all-time high of 3.96M and still climbing at the date of this audit. Critics, editorial playlists, and the Korean general public have all arrived.",
        "What has not yet been built is the layer that captures that attention and converts it: the CRM, the U.S. owned-channel network, the membership and retail moments, the member-level content franchises, and the live footprint that peers at comparable heat already operate. The audit half of this document measures that gap precisely, across streaming, social, video intelligence, and infrastructure. The strategy half prescribes the conversion machine, scoped to run alongside the current Pop Off Pop Off cycle and to compound into every release after it.",
      ],
      supports: {
        heading: "What This Document Covers",
        items: [
          "Market position against the 2024-2026 girl group class, tiered on live consumption data",
          "Consumption analysis: streaming trajectory, fandom-conversion ratio, physical-digital divergence, playlist ecosystem",
          "Video intelligence: a frame-level analysis of 113 KiiiKiii and competitor videos with performance data joined",
          "Infrastructure audit: fan platform stack, live business, retail, Japan groundwork, brand pipeline",
          "The conversion strategy: four execution verticals, Starship-led workstreams, and a 12-week timeline",
        ],
      },
      goals: {
        heading: "12-Month Targets",
        items: [
          "Spotify monthly listeners: 3.96M to 8M+ during active cycles, entering the tier the group's consumption already points at",
          "Fandom conversion: follower-to-listener ratio from 0.246 to 0.40+, the range where peers monetize reliably",
          "Physicals: first-week sales back above 150K on the next full cycle, recovering over half the debut peak",
          "Short form: TikTok from 2.2M to 5M followers with per-post medians up 3x on a rebalanced format mix",
          "A first sold-out U.S. showcase moment and a first U.S. retail drop, converting the group's largest listener market",
          "Japan: formal debut supported digitally, converting groundwork already in place",
        ],
      },
      footnote: "All data in this document was pulled August 26, 2026 unless dated otherwise. Sources: Chartmetric, Hanteo and Circle published tallies, platform data, and a dedicated KiiiKiii video intelligence store.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Positioning is only defensible when it is tiered on live consumption, not reputation. Eleven artists, one metric spine, three tiers.",
      intro: "The comparison set below spans the groups KiiiKiii is measured against commercially and creatively: the direct 2024-2025 rookie class, the established fourth-generation acts, and the global-format outlier. Spotify monthly listeners (Chartmetric, Aug 2026) is the spine; the notes carry what each peer does well and what KiiiKiii can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          featureTiersHeading: "The Comparison Set, Tiered by Monthly Listeners",
          featureTiers: [
            {
              label: "Tier 1 / Global Engines",
              artists: [
                {
                  name: "KATSEYE",
                  monthlyListeners: "38.5M Monthly Listeners",
                  instagram: "12.5M Spotify Followers",
                  reference: "WILD, Billboard 200 No. 1, Aug 2026",
                  note: "The category's U.S. ceiling-setter: pop radio top 10, a Grammy Best New Artist nomination, and sold-out arena touring. Proof that a girl group in this class can be a U.S. mainstream act, and proof of how much infrastructure that takes.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "21.5M Monthly Listeners",
                  instagram: "7.6M Spotify Followers",
                  reference: "MAMIHLAPINATAPAI, career-high 412K first week, Apr 2026",
                  note: "The short-form-native benchmark: one challenge franchise, rotated relentlessly, with a stable 400K physical floor and a Japan-first international build. Their U.S. streaming pull has cooled since 2024, which keeps the U.S. lane open.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "20.6M Monthly Listeners",
                  instagram: "11.1M Spotify Followers",
                  reference: "SPAGHETTI, Billboard Hot 100 No. 50, Nov 2025",
                  note: "The Western-streaming bet of the set: English-forward singles, five straight Billboard 200 top 10s, and a 34-show world tour with a full U.S. arena leg. The model for converting performance identity into U.S. touring revenue.",
                },
              ],
            },
            {
              label: "Tier 2 / Fandom Scale",
              artists: [
                {
                  name: "NewJeans",
                  monthlyListeners: "13.8M Monthly Listeners",
                  instagram: "13.4M Spotify Followers",
                  reference: "Catalog holding 13M+ listeners with no release since 2024",
                  note: "Dormant but instructive: catalog strength this durable is what a defined sonic identity buys. Their reactivation window is a competitive variable for late 2026.",
                },
                {
                  name: "aespa",
                  monthlyListeners: "11.4M Monthly Listeners",
                  instagram: "11.8M Spotify Followers",
                  reference: "Established fourth-generation pillar",
                  note: "A ratio above 1.0: more followers than monthly listeners, the signature of a mature fandom act. This is what the far end of the conversion curve looks like.",
                },
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "8.1M Monthly Listeners",
                  instagram: "2.4M Spotify Followers",
                  reference: "Lemon Tang, 592K first week, Jun 2026",
                  note: "The direct rival. Debuted the same season, swept the 2025 rookie titles, and is the only group in the set growing physicals and digital simultaneously. Zero U.S. infrastructure so far, which is the flank KiiiKiii can still win.",
                },
                {
                  name: "BABYMONSTER",
                  monthlyListeners: "7.8M Monthly Listeners",
                  instagram: "8.7M Spotify Followers",
                  reference: "CHOOM, ~750K first week, May 2026",
                  note: "The Asia physical monster: dome-scale touring and the biggest first weeks in the class, with the U.S. still secondary. Their model is fandom-first; KiiiKiii's is the inverse.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "5.8M Monthly Listeners",
                  instagram: "7.6M Spotify Followers",
                  reference: "Six Perfect All-Kills through 2026; No. 1 girl group brand reputation",
                  note: "The in-house precedent: general-public digital hits first, fandom physicals second, member-level brand equity third, touring fourth. KiiiKiii is two steps into the same sequence.",
                },
              ],
            },
            {
              label: "Tier 3 / Contenders",
              artists: [
                {
                  name: "MEOVV",
                  monthlyListeners: "5.0M Monthly Listeners",
                  instagram: "2.0M Spotify Followers",
                  reference: "BITE NOW, Jun 2026",
                  note: "High-design branding at pre-breakout scale. Currently ahead of KiiiKiii on raw listeners; behind on charts, awards, and cultural footprint.",
                },
                {
                  name: "KiiiKiii",
                  monthlyListeners: "3.96M Monthly Listeners",
                  instagram: "973K Spotify Followers",
                  reference: "404 (New Era), Melon No. 1 and Billboard's top K-pop song of 2026 at midyear",
                  note: "The subject of this document: top of Tier 3 on listeners, top of Tier 1 on 2026 song impact, bottom of the whole set on conversion ratio. That spread is the strategy.",
                },
                {
                  name: "izna",
                  monthlyListeners: "1.5M Monthly Listeners",
                  instagram: "652K Spotify Followers",
                  reference: "SET THE TEMPO, Jun 2026",
                  note: "Survival-show group with a U.S. distribution partnership in place. A reminder that structural U.S. bets are being made around this class right now.",
                },
              ],
            },
          ],
        },
        {
          label: "B",
          title: "How the Set Splits",
          objective: "Two lanes run through this class, and KiiiKiii currently sits between them.",
          strategy: "The set divides into a U.S.-streaming lane (KATSEYE far ahead, LE SSERAFIM established, ILLIT cooling) and a Korea-and-Asia physical lane where Hearts2Hearts is the fastest riser and BABYMONSTER the scale leader. KiiiKiii's consumption pattern, digital-first with the general public leading, matches the U.S.-streaming lane; its promo footprint to date has stayed almost entirely in the Korea lane. The U.S. is already the group's largest listener market without ever having been promoted to. That mismatch is the single largest untapped asset in this audit.",
          components: {
            heading: "What the Tiering Says",
            items: [
              "The listener gap to Tier 2 is one strong cycle wide: KiiiKiii added 728K monthly listeners in the 16 days after Pop Off Pop Off released",
              "The conversion gap is the real distance: every group above KiiiKiii converts listeners to followers at a higher rate",
              "Hearts2Hearts holds the rookie crown and 6x the first-week sales, but has no U.S. presence; KiiiKiii has already played a U.S. main stage",
              "The current bar for a winning rookie cycle in this market: a 400-600K first week plus a Circle Digital top 10. KiiiKiii clears the digital bar and not yet the physical one",
            ],
          },
        },
      ],
      footnote: "Listener and follower figures: Chartmetric, pulled Aug 26, 2026. Sales figures: Hanteo and Circle published tallies. Tier labels describe consumption scale, not quality.",
    },

    // ===================================================================
    // 03. Consumption Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption Analysis",
      philosophy: "One metric explains this group: the follower-to-listener ratio. The funnel is full. The capture layer is not.",
      intro: "KiiiKiii's Spotify follower-to-monthly-listener ratio is 0.246: for every four people listening this month, fewer than one has committed to following. That is the lowest ratio in the entire eleven-artist comparison set, at the exact moment monthly listeners sit at an all-time high. Read together with the physical-sales curve and the playlist ecosystem, it describes a group whose discovery engine works exceptionally and whose conversion machinery has not been built yet.",
      subBlocks: [
        {
          label: "A",
          title: "The Conversion Ratio",
          objective: "Measure fandom capture against the peer set, and against KiiiKiii's own history.",
          strategy: "The ratio has climbed steadily since the debut cycle (0.058 in April 2025 to 0.246 today) and Spotify followers have never declined in a single month: 28K at debut to 973K now. The machinery underneath is healthy; it has simply never been fed by dedicated conversion infrastructure. Peers show what the number looks like when it is: Hearts2Hearts 0.301, ILLIT 0.351, LE SSERAFIM 0.538, and mature fandom acts above 1.0.",
          components: {
            heading: "Ratio Trajectory (Chartmetric, Aug 2026)",
            items: [
              "Apr 2025, debut cycle: 1.67M listeners, 97K followers, ratio 0.058",
              "Jan 2026, pre-404: 830K listeners, 337K followers, ratio 0.405 (listeners decayed between cycles; followers kept compounding)",
              "Mar 2026, 404 era: 3.41M listeners, 464K followers, ratio 0.136 (discovery wave arrives faster than capture)",
              "Aug 26, 2026, Pop Off era: 3.96M listeners, 973K followers, ratio 0.246 and climbing",
              "The pattern: each hit floods the funnel, then conversion slowly catches up. The strategy's job is to collapse that lag",
            ],
          },
          kpis: [
            "Target ratio: 0.40+ within 12 months, roughly 3M followers against 8M active-cycle listeners",
          ],
        },
        {
          label: "B",
          title: "Two Sleeper Climbs Prove the Engine",
          objective: "Document the consumption pattern that now defines this group: slow entry, general-public adoption, sustained climb.",
          strategy: "\"404 (New Era)\" entered Circle Digital at No. 47 and reached Melon TOP100 No. 1 on day 16, took Circle Digital's monthly No. 1 for February, spent 8 consecutive weeks on Billboard Global Excl. US, and became the group's first Billboard Global 200 entry. \"Pop Off Pop Off\" is repeating the shape at a faster clip: Bugs No. 1 on day one, all six album tracks into Melon HOT100, No. 1 on Spotify Korea by day 10 on 450K+ daily streams, and the MV to No. 1 on YouTube's worldwide trending music chart. Monthly listeners rose 22.7% in the 16 days after release with no plateau at the date of this pull. This is not challenge-dependent virality; it is general-public song adoption, the rarest and most durable consumption pattern in the market.",
          components: {
            heading: "Catalog Depth (All-Time Spotify Streams)",
            items: [
              "404 (New Era): 76.9M, released Jan 2026",
              "I DO ME: 40.4M, the debut single",
              "Delulu: 23.2M, plus a 21.4M track film, a B-side ecosystem behaving like singles",
              "DANCING ALONE: 17.6M; BTG: 13.3M; UNDERDOGS: 5.9M",
              "Pop Off Pop Off: 5.4M in its first 16 days, popularity 75 and rising",
            ],
          },
        },
        {
          label: "C",
          title: "The Physical-Digital Divergence",
          objective: "Name the gap precisely: the audience grew while the buying fandom shrank, then began recovering.",
          strategy: "First-week physicals ran 206,712 (Uncut Gem, Mar 2025), 41,125 (Delulu Pack, Jan 2026), 81,881 (WhyKiiiKiii, Aug 2026) per Hanteo. Cumulative Circle totals: roughly 210K, 122K, 93K. Digital moved in the opposite direction the entire time, and WhyKiiiKiii's doubling of the prior first week came from sustained demand across the week rather than day-one fandom bulk. The read is structural, not creative: album-buying in this market is manufactured by fandom infrastructure (memberships, versions, fansigns, retail moments, lightstick-era touring), and that machinery is exactly what has not yet been stood up around this group. The audience that streams a No. 1 song has never been given the products, moments, and owned channels that turn listeners into buyers.",
          kpis: [
            "Target: 150K+ first week on the next full cycle, driven by conversion infrastructure rather than by asking the current fandom to buy more copies",
          ],
        },
        {
          label: "D",
          title: "Playlist Ecosystem and the Crossover Signal",
          objective: "Read where DSP editorial has already placed this group, because it is ahead of the promo footprint.",
          strategy: "66 current track placements across 33 Spotify playlists with 10.3M total reach. The composition is the finding: alongside the expected K-pop shelves (KimBops! 1.1M, K-Pop Rising 884K, Hot Hits Korea 944K), KiiiKiii holds non-K-pop editorial placements including It's a Hit! (2.2M followers), poses (625K), Stargirl vibes (469K), and market editorial in Taiwan and Indonesia. Editors are already treating Pop Off Pop Off as a pop record, not a K-pop-shelf record. The DSP vertical in this plan exists to press that advantage deliberately.",
          components: {
            heading: "Geographic Footprint (Top Markets, Chartmetric)",
            items: [
              "United States: 677K monthly listeners, the group's largest market, never directly promoted to",
              "Indonesia 376K, South Korea 357K, Philippines 325K, Malaysia 323K: a Southeast Asian block that mirrors the touring map of the class's Asia lane",
              "Top cities: Seoul, Taipei, Singapore, Kuala Lumpur, Jakarta, Bangkok, Tokyo, Sydney, Los Angeles",
              "Cross-platform 90-day growth: roughly +18% on every social platform, against 27-48% for the two fastest-growing comps: healthy, but not yet compounding at winner rate",
            ],
          },
        },
      ],
      footnote: "Streaming and playlist data: Chartmetric, pulled Aug 26, 2026. Chart histories: Circle, Melon, and Billboard published charts. Sales: Hanteo and Circle published tallies.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro: "The audience profile below is built from Chartmetric platform data and the group's Instagram audience statistics (updated Aug 25, 2026). It sets the initial paid targeting and the U.S. fan-page network's content posture; splits refine once pixel data accumulates in the first weeks of paid activity.",
      thesis: "A young, female-majority, meme-native pop audience that discovered KiiiKiii through a song, not a fandom pipeline. Target it like a pop act with a K-pop toolkit, not the reverse.",
      metros: [
        { name: "Los Angeles, CA" },
        { name: "New York, NY" },
        { name: "San Francisco Bay Area" },
        { name: "Chicago, IL" },
        { name: "Dallas-Fort Worth, TX" },
        { name: "Seattle, WA", tier: "secondary" },
        { name: "Atlanta, GA", tier: "secondary" },
        { name: "Houston, TX", tier: "secondary" },
        { name: "Washington, DC", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 11 },
        { bracket: "18-24", weight: 49 },
        { bracket: "25-34", weight: 36 },
        { bracket: "35+", weight: 4 },
      ],
      genderDistribution: { female: 74, male: 26 },
      similarArtists: [
        "ILLIT",
        "Hearts2Hearts",
        "LE SSERAFIM",
        "KATSEYE",
        "IVE",
        "aespa",
        "NewJeans",
        "BABYMONSTER",
        "MEOVV",
        "izna",
      ],
      genres: ["K-Pop", "Korean Pop", "Dance-Pop", "Pop"],
      platformSignals: [
        {
          platform: "Spotify",
          note: "3.96M monthly listeners at an all-time high; U.S. is market No. 1 at 677K. Follower-to-listener ratio 0.246 is the audit's headline gap. Non-K-pop editorial placements signal pop-lane crossover permission.",
        },
        {
          platform: "TikTok",
          note: "2.2M followers, the most under-indexed channel relative to the comp set (peers run 8-16M). Per-post reach trails Instagram; the video intelligence section details exactly why and what to change.",
        },
        {
          platform: "Instagram",
          note: "1.58M followers with a 5.4% engagement rate and 83K average likes per post. Audience: 73.7% female, 48.7% aged 18-24, top countries Korea 26%, Japan 16%, Indonesia 9.5%, U.S. 8.1%. The quiet overperformer: identical content consistently earns more here than on TikTok.",
        },
        {
          platform: "YouTube",
          note: "546K subscribers, 309M total views. Monthly views peaked at +41M in March 2026 during the 404 run; the channel converts eras into views but has not yet converted views into subscribers at fandom rate.",
        },
      ],
      footnote: "Age and gender: Instagram audience statistics via Chartmetric, Aug 25, 2026. U.S. metro list: Los Angeles is the one U.S. city in the group's global top 10 today; remaining metros are standard U.S. K-pop demand centers, to be validated against pixel data in the first paid flight.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Content",
      title: "Video Intelligence / 113 Videos, Frame by Frame",
      intro: "Crowd Control Digital indexed 113 videos into a dedicated KiiiKiii intelligence store on TwelveLabs video AI: 68 of the group's own recent posts across TikTok and Instagram, plus the top 15 posts from each of Hearts2Hearts, ILLIT, and LE SSERAFIM. Every frame, overlay, and format became queryable, with each video's real performance data joined on. The findings below were cross-checked against an independent statistical pass; where the two disagreed, the page says so.",
      clientQuestion: {
        attribution: "The question this analysis answers",
        question: "KiiiKiii posts more than almost anyone in its class. Why does the median post reach a fraction of what peers reach, and what actually moves the number?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "58 TikTok posts (@kiiikiii_official, Apr 22 to Aug 26, 2026) and 10 Instagram reels (@kiiikiii.official, Aug 10 to 25), selected as the union of the account's top performers and its most recent posts, with full engagement data. Competitor sets: the top 15 posts by views from each comparison group's TikTok.",
        },
        {
          label: "Video intelligence",
          value: "All 113 videos indexed as watchable video into a dedicated KiiiKiii knowledge store, 39.1 minutes of footage, making hooks, on-screen text, props, staging, and recurring formats queryable across the whole corpus at once.",
        },
        {
          label: "Performance join",
          value: "Every video carries its own platform metrics: views, likes, comments, shares, engagement rate, and within-account percentile. Content findings are read against outcomes, not in isolation.",
        },
        {
          label: "Adversarial cross-check",
          value: "Conclusions from the video pass were tested against an independent statistics-only pass over the same accounts. One prior claim was overturned in the process and is reported honestly below.",
        },
        {
          label: "Honest limits",
          value: "Member-level claims are grounded in captions and official tags, not facial identification. Competitor corpora are their top posts, so competitor medians are a winners' benchmark, not an account average. Format counts are analytical reads, not hand-coded tallies.",
        },
      ],
      corpusStats: [
        {
          label: "Videos analyzed",
          value: "113",
          detail: "68 owned + 45 competitor, 39.1 minutes, performance data joined on every item",
        },
        {
          label: "Owned median views",
          value: "590K TikTok / 959K Instagram",
          detail: "Across the analyzed corpus. Identical posts routinely earn more on Instagram",
        },
        {
          label: "Competitor top-post medians",
          value: "3.2M to 5.3M",
          detail: "Hearts2Hearts 3.16M, LE SSERAFIM 3.21M, ILLIT 5.30M across their top-15 sets",
        },
        {
          label: "August posting rate",
          value: "15.2 posts/week",
          detail: "Comeback-cycle volume. The mix, not the volume, is what the findings target",
        },
      ],
      mixColumnLabel: "KiiiKiii today",
      mixHeading: "Posting Mix vs the Winning Grammar",
      mixIntro: "Cadence is not the problem: KiiiKiii out-posts every group in the set. The rows below compare what the volume is spent on against what the corpus says actually earns reach.",
      mixRows: [
        {
          metric: "Guest-collab share of output",
          lolaAmour: "37% of the analyzed corpus; half of all August posts",
          benchmark: "Hearts2Hearts 0 of 15 top posts; ILLIT ~27%; LE SSERAFIM ~7%",
          read: "behind",
          note: "The signature format is also the most over-supplied one. Template guest posts median 246K, well under the account's own median.",
        },
        {
          metric: "Member-solo share of output",
          lolaAmour: "5 of 68 posts (7%)",
          benchmark: "Hearts2Hearts: 73% of their top posts are member-solo formats",
          read: "behind",
          note: "The set's fastest riser runs on a member-solo engine KiiiKiii has not built, despite proven demand (see finding 3).",
        },
        {
          metric: "Format mix vs what wins",
          lolaAmour: "Camera-facing challenge clips are ~50% of posts but only ~14% of the top decile",
          benchmark: "Top decile skews to stage spectacle, release assets, gags, and template-breaking guests",
          read: "behind",
          note: "The account's own data already shows which lanes over-earn; the mix has not caught up to it.",
        },
        {
          metric: "Conversion asks",
          lolaAmour: "1 explicit call to action in 68 posts, in a bottom-half post",
          benchmark: "LE SSERAFIM closes dance clips with a 1-2 second title-and-date end card",
          read: "behind",
          note: "Reach is never pointed anywhere. With the U.S. as Spotify market No. 1, this is the cheapest fix in the audit.",
        },
        {
          metric: "Instagram strategy",
          lolaAmour: "All 10 analyzed reels are exact TikTok twins, same edit, same text",
          benchmark: "Mirroring is standard practice; the gap is that IG twins repeatedly out-earn TikTok originals, sometimes 4-5x",
          read: "neutral",
          note: "Free reach, currently unmanaged. The winners that never crossed over are sitting inventory.",
        },
        {
          metric: "English access layer",
          lolaAmour: "Captions run non-Korean; overlays appear on 10-20% of posts, in English when present",
          benchmark: "Peers are similarly sparse; LE SSERAFIM runs the heaviest stylized text layer",
          read: "inline",
          note: "Access is not the blocker it is for most K-pop accounts. The gap is what the text is used for, not its language.",
        },
      ],
      mixFootnote: "Owned mix measured on the 68-video analyzed corpus and the full August posting window. Competitor columns describe each group's top-15 set and are a winners' benchmark by construction.",
      findingsHeading: "Six Findings, Cross-Checked",
      findingsIntro: "Each card carries the verdict, the evidence with real posts and their numbers, the counter-case where one exists, and the pivot. Open any card for the example posts behind it.",
      findings: [
        {
          id: "payload-not-hook",
          title: "The first three seconds are not the problem. The payload behind them is.",
          verdict: "partial",
          confidence: "High",
          summary: "Winners and losers open with the same grammar: a face close to camera, motion already running, high energy. What separates the top 20% is what happens next: winners escalate into spectacle, novelty, or a gag; losers stay at posed-cute baseline for their full runtime.",
          evidence: [
            "Top performers open visually dense: a masked face thrown at the lens with floating props and broadcast-date text (1.66M views), a leopard-mask close-up crowded with props from frame one (1.21M)",
            "Bottom-half posts open the same way winners do: a duo or trio already centered, making synchronized cute gestures, and then never escalate (109K on a posing clip)",
            "On-screen text in the opening seconds is rare in both groups, so text is not the separator either",
            "The account's biggest post in the corpus is pure escalation: a fire-stage fancam at 4.96M",
          ],
          counterEvidence: [
            "Openers are not literally identical: top posts tend to open louder and more stylized. The finding is that opener quality alone does not rescue a baseline payload",
          ],
          examples: [
            { platform: "tiktok", id: "7669727756359372040", label: "Fire-stage fancam, the corpus ceiling", stat: "4.96M views" },
            { platform: "tiktok", id: "7665599279779581204", label: "Masked-face teaser, dense from frame one", stat: "1.66M views" },
            { platform: "tiktok", id: "7676438110787390740", label: "Posed-cute baseline, the floor pattern", stat: "109K views" },
          ],
          pivot: {
            title: "Escalate the payload, not the opener",
            actions: [
              "Keep the face-first opening grammar; it is house style and it works",
              "No post ships at posed-cute baseline unless it carries a second idea: a prop gag, a transformation, a spectacle beat",
              "Storyboard every post around one question: what is the frame-one image a scroller has never seen from this group",
            ],
          },
        },
        {
          id: "guest-conveyor",
          title: "The guest-collab conveyor flatlines. Only template-breakers pop.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Twenty-five of 68 owned posts are \"Pop Off Pop Off with [guest]\" bits shot on one template: static camera, practice room, guest and member square to the lens. Their TikTok median is 246K, less than half the account median. Every guest post that broke out broke the template first.",
          evidence: [
            "Lee Know of Stray Kids (1.91M): attitude-first opener, corridor staging so the dance travels toward camera, harder choreography",
            "Jiwoo of Hearts2Hearts (1.80M): the camera pushes in and reframes, giving each performer a mini solo spotlight instead of one locked-off two-shot",
            "A costumed character bit (1.12M) that happens to use the Pop Off format: the costume is the hook, not the guest",
            "The corpus floor is template guest posts: 72K, 78K, and 106K on three of them",
          ],
          counterEvidence: [
            "Guest bits carry the corpus's highest engagement rates (up to 38.5%), so they deepen existing fandom even when reach flatlines. The verdict is about rationing, not deletion",
          ],
          examples: [
            { platform: "tiktok", id: "7675340320241945877", label: "Template-breaker: staging and attitude", stat: "1.91M views" },
            { platform: "tiktok", id: "7671258530099318037", label: "Template-breaker: camera reframes, solo spotlights", stat: "1.80M views" },
            { platform: "tiktok", id: "7676345354169634068", label: "Template guest post at the corpus floor", stat: "72K views" },
          ],
          pivot: {
            title: "Ration the conveyor",
            actions: [
              "Cap template guest bits at 2-3 per week; the current rate is roughly double that",
              "Every guest post must add one break: staging depth, a camera move, a character gag, or a guest-as-personality beat",
              "Spend the biggest guests on broken templates; the plain template earns the same 246K median regardless of who stands in it",
            ],
          },
        },
        {
          id: "member-franchise",
          title: "A proven solo anchor exists. The franchise around her does not.",
          verdict: "partial",
          confidence: "Medium",
          summary: "Only 5 of 68 posts are single-member posts, and they punch far above their weight: three are fronted by Jiyu, including the second-biggest post in the corpus at 4.47M. No recurring member-solo series exists to harvest that demand, and two members have no solo caption presence at all.",
          evidence: [
            "The Jiyu solo tagged post at 4.47M is the largest non-stage post in the analyzed corpus",
            "Two further Jiyu solos (1.09M and 963K) both clear the account median",
            "Kya (1.31M) and Haum (1.22M) solos also clear it: the demand is not one member deep",
            "The set's fastest-rising comp runs member-solo as its core engine: 11 of Hearts2Hearts' top 15 posts are solo formats with one clean setup and one styling or transformation payoff",
          ],
          counterEvidence: [
            "Five posts is a thin base, and member-level reads here are caption-grounded rather than face-verified, so treat the ranking as directional",
          ],
          examples: [
            { platform: "tiktok", id: "7632264277952335124", label: "Jiyu solo, second-biggest post in the corpus", stat: "4.47M views" },
            { platform: "tiktok", id: "7655285768209845520", label: "Haum solo clearing the account median", stat: "1.22M views" },
            { platform: "tiktok", id: "7631537583415201045", label: "Kya solo clearing the account median", stat: "1.31M views" },
          ],
          pivot: {
            title: "Name the franchise and rotate all five",
            actions: [
              "Stand up a weekly member-solo slot with a repeatable grammar: one member, one setup, one payoff",
              "Lead with the proven anchors, and use the slot to build the two members with no solo presence yet",
              "This is also the fastest route to member-level brand equity, the asset the in-house precedent monetized hardest",
            ],
          },
        },
        {
          id: "cta-desert",
          title: "One call to action in 68 posts. Reach is never pointed anywhere.",
          verdict: "confirmed",
          confidence: "High",
          summary: "The owned corpus asks for nothing: one explicit call to action total, and it sits in a bottom-half post. The group's winners carry none. With the U.S. as the largest Spotify market, on-platform reach currently converts to exactly nothing by design.",
          evidence: [
            "The single call to action in the corpus is a tour-announcement card (198K views), text from start to finish",
            "The top-20% set contains no explicit ask of any kind: no follow, no stream, no album, no membership",
            "The comparison set is also ask-light, with one meaningful exception: LE SSERAFIM ends dance clips on a 1-2 second title-and-date slate, promo embedded inside entertainment",
          ],
          counterEvidence: [
            "Ask-free content is genre-normal and peers win without follow-asks, so the fix is release-moment slates, not influencer-style pleading",
          ],
          examples: [
            { platform: "tiktok", id: "7678271262971514132", label: "The one call to action in the corpus", stat: "198K views" },
            { platform: "instagram", id: "Db2pT2CxiGz", label: "MV asset, no ask attached", stat: "1.63M views" },
          ],
          pivot: {
            title: "Adopt the end-card, skip the pleading",
            actions: [
              "Put a 1-2 second title-and-date slate on release assets and teasers only; keep gag and challenge lanes clean",
              "Test stream and pre-save slates on English-text release assets aimed at the U.S. audience",
              "Route link-in-bio and pinned comments to the CRM capture flows in Vertical 1, so converted attention lands somewhere owned",
            ],
          },
        },
        {
          id: "format-monoculture",
          title: "Half the output is challenge clips. The top decile is spectacle, release assets, and gags.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Camera-facing challenge content is roughly half of all posts but about one in seven of the top decile. Stage spectacle and release assets are 16% of posts and over half the decile. The gag lane is tiny and efficient. The account's own outcomes already describe the right mix; the output has not caught up.",
          evidence: [
            "The number-one post is one of only two stage clips in the corpus: 4.96M",
            "Release assets over-earn consistently: a broadcast teaser at 1.66M, the MV cut at 1.63M on Instagram and 1.21M on TikTok",
            "The gag lane is two posts and both landed: an LED-sneakers prop bit at 1.02M TikTok plus 1.07M Instagram, and a 9-second gag at 856K",
            "The all-five flagship version of the challenge itself hit 3.09M, showing the format works at full ensemble scale even as the filler tier around it sits at 100-300K",
          ],
          counterEvidence: [
            "The challenge monoculture is also the campaign delivery vehicle, so the pivot is reallocation inside 15 posts a week, not a format ban",
          ],
          examples: [
            { platform: "tiktok", id: "7671582730341059858", label: "All-five flagship challenge, the format at its best", stat: "3.09M views" },
            { platform: "tiktok", id: "7676376147285806357", label: "LED-sneakers gag, the efficient lane", stat: "1.02M views" },
            { platform: "instagram", id: "DcSwF4mBFf4", label: "The same gag out-earning its TikTok twin", stat: "1.07M views" },
          ],
          pivot: {
            title: "Rebalance toward the decile",
            actions: [
              "Weekly mix: one spectacle or stage-grade post, two to three gag or prop bits, guest bits rationed per finding 2",
              "Cut the posed-cute filler tier entirely; it is volume without yield",
              "Volume stays at current levels: this is reallocation, not more production",
            ],
          },
        },
        {
          id: "ig-mirror",
          title: "Instagram is a pure mirror of TikTok, and it out-earns TikTok anyway.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Every analyzed Instagram reel is an exact TikTok twin: same take, same length, same text. Yet Instagram's median (959K) beats TikTok's (590K) on far lower volume, and individual twins out-earn their TikTok originals by 4-5x. The platform where the group wins hardest is the one receiving zero dedicated strategy.",
          evidence: [
            "Verified identical edits across sampled pairs: same setup, same length, no platform-specific versioning anywhere in the analyzed set",
            "A guest trio bit did 1.53M on Instagram against 307K on TikTok; a variety-legend guest bit did 1.01M against 246K",
            "The gag lane crossed over at parity or better on every pair",
            "Instagram audience engagement runs 5.4% with 83K average likes per post, on a follower base a quarter the size of peers'",
          ],
          counterEvidence: [
            "Ten reels over a 15-day window is a small sample, and Instagram engagement rates per post run lower than TikTok's, so Instagram buys reach while TikTok buys depth. The group needs both",
          ],
          examples: [
            { platform: "instagram", id: "DcVATdtBT9h", label: "Guest trio bit, 5x its TikTok twin", stat: "1.53M views" },
            { platform: "tiktok", id: "7676700800927796500", label: "The same post on TikTok", stat: "307K views" },
          ],
          pivot: {
            title: "Manage the mirror instead of letting it run",
            actions: [
              "Keep mirroring as the baseline; it is free reach",
              "Backfill Instagram with the proven TikTok winners that never crossed over",
              "Test one Instagram-first format per week, starting with guest bits, which systematically over-index there",
            ],
          },
        },
      ],
      footnote: "Analysis completed August 26, 2026 by Crowd Control Digital using TwelveLabs video intelligence over a dedicated KiiiKiii knowledge store with per-post performance data joined, cross-checked against an independent statistical pass. Example posts embed from the live platforms. One prior observational claim, that all recent posts were campaign-tagged, was overturned by this analysis: 42% of the August window is non-campaign content, and that lane contains the account's best self-generated performers. Findings re-baseline against first-party analytics once account access begins.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Consumption is tier-two. The conversion stack underneath it is a tier below. This section is the itemized gap.",
      intro: "Everything below is what a fandom monetizes through. Peers at comparable heat operate most of this list; KiiiKiii operates almost none of it. Each item is an opportunity already earned by the consumption data, not a bet.",
      subBlocks: [
        {
          label: "A",
          title: "Fan Platform and CRM Stack",
          objective: "Map where fan relationships live today and where owned capture is missing.",
          strategy: "KiiiKiii is native to Berriz, Kakao Entertainment's global fan platform, with group and member profiles from debut day, fan-club-only lives, and Berriz Shop. The TiiiKiii paid membership opened in March 2026. In August 2026 the group joined Weverse solely to house its new Japan official fan club, with a members-first lottery for the announced Japan fan concert. What the stack lacks is a direct-response layer: no drop-based email and SMS capture, no owned U.S. fan-data asset, and no bridge between viral reach moments and a list the team controls. The strategy layers that on without disturbing the platforms already in place.",
          components: {
            heading: "Current State",
            items: [
              "Berriz: group + member profiles since debut day, memberships, shop",
              "TiiiKiii paid membership: opened March 2026, used for concert verification",
              "Weverse: Japan official fan club opened August 2026",
              "No drop CRM, no email and SMS capture, no U.S.-owned fan data",
            ],
          },
        },
        {
          label: "B",
          title: "Live Business",
          objective: "Size the live footprint honestly, because it is the audit's starkest number.",
          strategy: "The first fan concert, KiiiKiii FesTiiiVAL (Seoul, May 2026), sold roughly 2,470 tickets across two nights at a single 121,000 KRW price point, plus streaming passes. It remains the group's only headline live product; no tour is announced. The contrast: the direct rookie rival has already played Olympic Hall and run U.S. showcase dates in New York and Los Angeles, and the group's own U.S. debut, a festival main stage at the Rose Bowl in August 2026 with national press coverage, proved U.S. demand exists at scale. A Japan edition of FesTiiiVAL is confirmed. The live lane is not failing; it is simply unbuilt, and the U.S. is the logical next brick.",
          kpis: [
            "Target: one U.S. showcase or fan-meet moment inside the next 12 months, sized to sell out (1,800 to 2,300 capacity), converting festival proof into a headline proof point",
          ],
        },
        {
          label: "C",
          title: "Retail and Physical Product",
          objective: "Identify why the physical line underperforms an audience this large.",
          strategy: "Three EPs in, the merchandising apparatus that manufactures K-pop physical volume is thin: no full official lightstick 17 months after debut (an acrylic stick shipped as fan-concert merch), no U.S.-exclusive album versions, and no U.S. retail moment, while multi-version stock runs through standard Korean channels. Peers converted soft markets with exactly these tools: merch-format albums, retail pop-ups with exclusive versions, and lightstick-era touring. The U.S. K-pop retail network that powers those moments is mature and actively looking for artists with proven streaming demand, which the consumption section documents in detail.",
          components: {
            heading: "Gaps With Established Peer Playbooks",
            items: [
              "Full lightstick release, the anchor of live and fandom identity, still pending",
              "No U.S.-exclusive versions or U.S. retail drops to date",
              "No pop-up or experiential retail moment in any market yet",
              "Membership-to-purchase mechanics not yet wired to a CRM",
            ],
          },
        },
        {
          label: "D",
          title: "Japan Groundwork",
          objective: "Document the quiet build already in place, because it is further along than the market realizes.",
          strategy: "Without a formal Japan debut, the group has accumulated: the only K-pop girl group slot at a Tokyo Dome festival event in 2025, the first K-pop act ever booked to Tokyo Idol Festival's in-person edition (July 2026), a Japanese fashion-brand modeling deal, a major-label Japan artist page, a Weverse Japan fan club, and a confirmed Japan fan-concert edition. Japan is also the group's second-largest Instagram audience at 16%. The groundwork is done; what remains is the formal debut moment and the digital amplification around it.",
        },
        {
          label: "E",
          title: "Brand and IP Pipeline",
          objective: "Read the commercial validation already flowing, because it prices the brand's trajectory.",
          strategy: "The endorsement cadence has climbed steadily in weight class: a first-ever bank ambassadorship at debut, fast-food and fashion campaigns through 2025, then in 2026 a New Era collection keyed to the group's own hit, Pandora, a Coach ambassadorship, and a two-year Seoul district ambassadorship. On the IP side, a 53-episode web novel starring the members ran on Korea's largest story platform with a produced OST and audiobook, and the group took a major short-form platform's rising-artist award in 2025. Commercial partners are already pricing KiiiKiii as a rising mainstream brand; the fandom infrastructure this plan builds is what lets the group capture that value rather than just validate it.",
        },
      ],
      footnote: "Infrastructure facts verified against platform notices, ticketing listings, and published coverage, August 2026.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "The discovery engine already works: two sleeper-climb hits prove it. Every dollar in this plan either widens that discovery or converts it into fandom the team owns. Nothing here asks the music to change. The strategy builds the machine the songs have already earned.",
      hierarchy: [
        {
          label: "Conversion Infrastructure (Foundation, Always-On)",
          description: "The compounding layer this group specifically lacks: drop CRM with email and SMS, a U.S. fan-page network, membership and retail moments, member franchises. Runs every week regardless of release calendar. Without this layer, every future hit floods a funnel that still does not capture.",
        },
        {
          label: "Short-Form Engine (Amplifier)",
          description: "The rebalanced content system from the video intelligence findings: spectacle and gag lanes up, guest conveyor rationed, member-solo franchise live, Instagram managed instead of mirrored. Reach rises on reallocation, not more production.",
        },
        {
          label: "DSP Compounding (Amplifier)",
          description: "Defend and extend the sleeper-climb pattern: pop-editorial expansion beyond the K-pop shelf, release-window sustain mechanics, and catalog activation around the breakthrough hit. The discovery layer where this group already over-performs its tier.",
        },
        {
          label: "PR and Cultural Moments (Amplifier)",
          description: "Credibility extension on top of the layers below. The press already crowned the song; the narrative job now is converting critical heat into mainstream U.S. moments and awards-season positioning. Pitched at the right moment, it scales every prior dollar.",
        },
      ],
      messaging: [
        "Audit before prescription: every recommendation in the verticals traces to a measured gap in sections 02 through 06.",
        "The infrastructure is song-agnostic. It supports the current cycle, the next comeback, the Japan debut, and every release after.",
        "Continuous spend on the foundation; episodic spend on the amplifiers, calibrated to release windows.",
        "The U.S. is promoted like the No. 1 market it already is, not like a future expansion.",
      ],
      footnote: "Foundational workstreams run every month. Amplifier intensity follows the release calendar.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Fandom",
      title: "Vertical 1 / Fandom & Conversion Infrastructure",
      philosophy: "The foundation. Everything in this vertical exists to close one number: a 0.246 conversion ratio at an all-time listener high.",
      subBlocks: [
        {
          label: "A",
          title: "Drop CRM: Email + SMS",
          objective: "Build the owned-audience layer that turns viral moments into a list the team controls, complementing Berriz rather than competing with it.",
          strategy: "Stand up a drop-based CRM as the U.S. and global capture layer: release-window drops, content unlocks, first-access mechanics for retail and live moments. Capture runs at every touchpoint: link-in-bio and pinned comments (wired in the short-form engine), festival and pop-up foot traffic, and pre-save campaigns. Segment by geography, engagement tier, and purchase behavior; run retention flows timed to the release calendar. Berriz remains the fan-community home; the CRM is the direct-response asset that K-pop platform stacks do not provide.",
          components: {
            heading: "Components",
            items: [
              "Drop campaigns for every release moment, with phone-number capture prioritized",
              "Welcome and retention flows segmented by market, with the U.S. list as the priority asset",
              "First-access mechanics: retail drops, showcase tickets, membership moments route through the list first",
              "Capture surfaces wired across social, streaming pre-saves, and live activations",
            ],
          },
          kpis: [
            "U.S.-led email list: 25K+ within 6 months",
            "SMS list: 10K+ within 6 months",
            "Release-day flow click-through: 15%+",
          ],
        },
        {
          label: "B",
          title: "U.S. HQ Fan-Page Network",
          objective: "Build a dedicated U.S.-focused fan ecosystem that turns U.S. interest, already the largest listener bloc, into U.S.-owned audience.",
          strategy: "Operate a network of U.S.-positioned fan channels with localized edits, English-first framing, and a posting cadence tuned to U.S. hours. The video intelligence findings feed the network's content mix directly: member-focus edits, gag-lane clips, and stage spectacle over template repetition. The network coordinates with retail and live moments so its audience compounds into the CRM, and it carries the platform lesson from the audit: manage Instagram deliberately, where identical content already out-earns TikTok.",
          components: {
            heading: "What the Network Does",
            items: [
              "Repurposes official content with English subtitles and U.S.-native edits",
              "Runs member-spotlight and era-lore content on a U.S. cadence",
              "Amplifies UGC waves during release windows and sleeper-climb weeks",
              "Feeds captured attention to the CRM and retail moments",
            ],
          },
          kpis: [
            "Network follower growth and engagement rates per channel",
            "Referral traffic into CRM capture flows",
            "Share of U.S. listener growth during active windows",
          ],
        },
        {
          label: "C",
          title: "Membership, Retail, and Product Moments",
          objective: "Give the audience the fandom products and moments it has never been offered, sequenced with Starship's product calendar.",
          strategy: "Coordinate the fandom-infrastructure moments the audit flagged: support the lightstick launch as a full campaign moment when Starship schedules it, build a first U.S. retail drop with an exclusive version through the established U.S. K-pop retail network, and wire membership benefits into the CRM so every purchase deepens the owned relationship. Two eras of proof (the debut record and the current recovery) say the buying audience exists; it has been under-served, not absent.",
          components: {
            heading: "Components",
            items: [
              "First U.S. retail drop: exclusive version, pop-up moment, CRM-first access",
              "Lightstick-era campaign support: content, drops, and live tie-in when scheduled",
              "Membership growth mechanics tied to first-access and exclusive content",
              "Fan engagement mechanics native to this fandom's meme identity: challenges, unlocks, member-curated rewards",
            ],
          },
        },
      ],
      footnote: "Foundation workstreams run every month regardless of release calendar. This is the layer that compounds.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Digital",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "The amplifier, rebuilt around what the video intelligence proved: reallocation beats volume, and the U.S. gets targeted like the top market it is.",
      subBlocks: [
        {
          label: "A",
          title: "Short-Form Engine Rebalance",
          objective: "Execute the six video intelligence pivots as one operating system for the group's owned channels.",
          strategy: "The account already posts at winning volume; the plan reallocates it. Weekly mix: one spectacle or stage-grade post, two to three gag or prop bits, guest bits rationed to 2-3 with a required template break, a named weekly member-solo franchise rotating all five members, and release-asset end cards carrying the only explicit asks. Instagram gets managed as its own surface: proven TikTok winners backfilled, one Instagram-first test per week. Every pivot traces to a measured finding in section 05.",
          kpis: [
            "TikTok median views: 3x within 6 months on the rebalanced mix",
            "TikTok followers: 2.2M to 5M within 12 months",
            "Member-solo franchise: live within 3 weeks, all five members in rotation within 8",
          ],
        },
        {
          label: "B",
          title: "Paid Social: The U.S. Flight",
          objective: "Run the group's first dedicated U.S. paid program against an audience the organic data has already qualified.",
          strategy: "Launch U.S.-targeted paid on the catalog's proven converters: the breakthrough hit and the current single, plus the gag-lane and spectacle creatives the corpus says over-earn. Objectives ladder from streaming conversion (save and playlist-add optimized) to audience building (CRM capture and follower growth) with retargeting pools built from video viewers, profile visitors, and fan-page traffic. Creative rotates weekly from the short-form engine's winners; audience splits start from the section 04 targeting stack and recalibrate on pixel data.",
          components: {
            heading: "Components",
            items: [
              "Streaming-conversion campaigns on the hit catalog, U.S.-first with save-through mechanics",
              "Audience-building campaigns feeding the CRM and owned channels",
              "Retargeting architecture across video viewers, engagers, and fan-page traffic",
              "Weekly creative rotation sourced from organic winners, not bespoke ad creative",
            ],
          },
        },
        {
          label: "C",
          title: "Creator and Influencer Program",
          objective: "Seed the sounds and formats that already work organically into U.S. creator ecosystems, without buying saturated generic challenge volume.",
          strategy: "The group's consumption pattern is song-led, so creator spend follows the songs: U.S. dance and pop-culture creators on the current single's shuffle choreography, meme-native creators on the gag and delulu-adjacent lanes where the brand already lives, and fan-edit amplification during sleeper-climb windows when the algorithm is already leaning in. Structured as waves tied to release moments rather than always-on background spend.",
          tactics: [
            "Tastemaker wave at release: 10-15 mid-tier U.S. creators across dance and commentary lanes",
            "Meme-lane seeding on the formats the corpus proved: props, gags, character bits",
            "Sleeper-climb amplification: a second creator wave triggered by chart momentum, not the calendar",
            "Selective boosting of top organic creator posts into paid",
          ],
        },
      ],
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy",
      philosophy: "The discovery layer where KiiiKiii already punches above its tier. The job is to press the advantage editors have already signaled.",
      intro: "Non-K-pop editorial placement is normally the hardest unlock in a K-pop DSP strategy. KiiiKiii already has it: general-pop and aesthetic playlists carry the current single today. This vertical turns an organic signal into a deliberate program.",
      subBlocks: [
        {
          label: "A",
          title: "Pop-Editorial Expansion",
          objective: "Position KiiiKiii to pop editors as a pop act with K-pop infrastructure, extending placements beyond the K-pop shelf.",
          strategy: "Build cycle-specific pitch packets around the documented crossover proof: the non-K-pop editorial placements already held, the U.S.-first listener base, and the sleeper-climb consumption pattern editors read as durability. Develop named editorial relationships at each major DSP, with one platform championed per cycle for a full-cycle program. Anchor the K-pop shelf placements as the floor, not the ceiling.",
          components: {
            heading: "Components",
            items: [
              "Pop-editor positioning with the crossover evidence packet",
              "K-pop editorial anchors maintained and grown each cycle",
              "Pre-release tools run properly every cycle: Countdown pages, pre-saves wired to CRM capture",
              "Metadata and pitch hygiene across the catalog",
            ],
          },
        },
        {
          label: "B",
          title: "Sleeper-Climb Defense",
          objective: "Institutionalize the weeks-2-through-6 sustain window where this group's hits are actually made.",
          strategy: "Both hits broke after release week, which means the sustain window, not release day, is where spend and effort concentrate. Run listening-party moments with fan hosts during climb weeks, time UGC and creator waves to chart momentum triggers, and hold paid streaming support in reserve for the climb rather than exhausting it at release. The pattern is now twice-proven; the plan operationalizes it.",
          tactics: [
            "Stationhead-style listening parties hosted with fan accounts during climb weeks",
            "Momentum-triggered creator and UGC waves (chart position, daily-stream thresholds)",
            "Paid streaming support weighted to weeks 2-6, not week 1",
            "Weekly chart and consumption reporting so triggers fire on data, not vibes",
          ],
        },
        {
          label: "C",
          title: "Catalog Activation",
          objective: "Work the breakthrough hit as the permanent front door it has become, and lift the B-side ecosystem behind it.",
          strategy: "The breakthrough hit remains a top-30 domestic streamer seven months after release, which makes it the group's Love Dive: the track new listeners enter through. Keep it dressed (Canvas video, clip refreshes, playlist placements) and route its listeners deeper: B-side ecosystem playlisting, the OST and collaboration catalog, and era-lore content that converts a song listener into a group follower. Catalog behavior is already present in the streaming data; activation makes it compound.",
        },
        {
          label: "D",
          title: "Platform Development Programs",
          objective: "Land the artist-development flags that signal rising status to U.S. editorial and partners.",
          examples: [
            "Spotify RADAR and equivalent rising-artist programs",
            "DSP-branded live-session formats, where the group's stage-spectacle advantage reads natively",
            "YouTube and short-form platform artist programs, extending the rising-artist award already won",
          ],
        },
      ],
      footnote: "DSP is the discovery layer that turns the rest of the strategy into measurable streams.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Cultural Moments
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "PR",
      title: "Vertical 4 / PR & Cultural Moments",
      philosophy: "The press already crowned the song. The PR job is converting critical heat into mainstream moments, on the calendar where they compound.",
      subBlocks: [
        {
          label: "A",
          title: "The Narrative",
          objective: "One story, told consistently: the group the general public found first, now arriving everywhere else.",
          components: {
            heading: "Narrative Assets Already Banked",
            items: [
              "Billboard's top-ranked K-pop song of 2026 at midyear, off a 16-day sleeper climb to No. 1",
              "A U.S. festival main-stage debut at the Rose Bowl with national coverage",
              "A rookie-year sweep of 13 trophies and year-one profiles in major Western music press",
              "Top-10 girl group brand reputation in Korea every month of 2026, ahead of the group's sales tier",
            ],
          },
        },
        {
          label: "B",
          title: "U.S. Press Program",
          objective: "Move coverage from K-pop verticals into mainstream music and culture press on the strength of the crossover story.",
          tactics: [
            "Tier 1 narrative shapers: Billboard, Rolling Stone, The Fader, NME, Paper",
            "Youth and culture lane: Teen Vogue, Nylon, i-D, Dazed",
            "K-pop press floor maintained: Soompi, allkpop, and the fan-wire ecosystem",
            "Member-level profiles seeded as the member franchises build equity",
          ],
        },
        {
          label: "C",
          title: "Cultural and Live Moments",
          objective: "Convert festival proof into a headline U.S. moment inside 12 months.",
          strategy: "Sequence: festival slot (done), U.S. press cycle around the next release, then a first U.S. showcase or fan-meet sized to sell out, announced through the CRM first so the owned list gets the win. Each moment is a story the press program amplifies and the paid program retargets.",
        },
        {
          label: "D",
          title: "Awards-Season Positioning",
          objective: "Support the year-end campaign where the breakthrough hit competes in song categories, not rookie categories.",
          strategy: "The hit's chart record and Billboard's midyear ranking position it for song-of-the-year conversations across the Korean year-end circuit. PR, fan mobilization through the CRM and fan-page network, and content moments align to the voting and broadcast calendar in Q4.",
        },
      ],
      footnote: "Tier labels are directional, not chronological. Outreach follows story-readiness.",
    },

    // ===================================================================
    // 12. Starship-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Starship",
      title: "Starship-Led Workstreams",
      philosophy: "Workstreams Starship and Kakao own directly. Crowd Control Digital coordinates and amplifies; the label runs point.",
      intro: "The plan is built to slot into the infrastructure Starship already operates, not to duplicate it. Each workstream below stays label-led, with the CCD verticals wired to amplify it.",
      subBlocks: [
        {
          label: "A",
          title: "Berriz, Membership, and Product Calendar",
          objective: "Platform, membership, lightstick, and album products remain Starship-scheduled; the plan wires its CRM, retail, and content moments to that calendar.",
          strategy: "CCD's conversion infrastructure treats Berriz as the fandom home and routes deepest-intent fans toward it, while the drop CRM handles direct-response capture the platform stack does not cover. Product moments (lightstick, versions, membership pushes) get full campaign support across the verticals whenever Starship schedules them.",
        },
        {
          label: "B",
          title: "Japan Debut",
          objective: "The formal Japan debut, label partner selection, and release timing are Starship-led; the plan amplifies the groundwork digitally.",
          strategy: "Japan is the group's second-largest social audience and the site of its most distinctive live groundwork. When the debut is scheduled, the fan-page network extends to a Japan lane, the CRM segments Japan natively, and the paid program adds Japan flights. Until then, the Japan fan-club and fan-concert moments get content and drop support.",
        },
        {
          label: "C",
          title: "Brand Partnerships",
          objective: "Endorsement deal flow stays with Starship; the plan maximizes each partnership's audience value.",
          strategy: "Each brand moment becomes a content and capture opportunity: partnership announcements routed through owned channels with CRM hooks, member-level campaigns feeding the member franchises, and U.S.-relevant partners amplified into the U.S. press program. The rising deal cadence is itself a narrative asset the PR vertical uses.",
        },
        {
          label: "D",
          title: "A&R and Release Calendar",
          objective: "Music, comeback timing, and creative direction are entirely Starship's. The plan is deliberately song-agnostic.",
          strategy: "Every workstream in this document runs regardless of what the next single sounds like. The infrastructure compounds across eras; release windows set the amplifier calendar, and each new cycle authorizes its own campaign plan on the same foundation.",
        },
      ],
      footnote: "Crowd Control Digital provides strategy, coordination, and execution in its verticals; Starship Entertainment executes and approves label-side workstreams.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "A 12-week deployment window starting September 7, running the Pop Off Pop Off sustain phase into year-end awards season. The CRM stands up first as the always-on capture layer; the fan-page network and short-form rebalance launch inside two weeks; paid begins in test mode and scales on data. The U.S. retail moment lands mid-window pending retail partner scheduling, and Q4 closes on awards positioning and next-cycle planning. Future release cycles authorize fresh campaign windows on this same structure.",
      weeks: [
        { index: 1, label: "W1", dates: "Sep 7" },
        { index: 2, label: "W2", dates: "Sep 14" },
        { index: 3, label: "W3", dates: "Sep 21" },
        { index: 4, label: "W4", dates: "Sep 28" },
        { index: 5, label: "W5", dates: "Oct 5" },
        { index: 6, label: "W6", dates: "Oct 12", note: "RETAIL (TBD)" },
        { index: 7, label: "W7", dates: "Oct 19" },
        { index: 8, label: "W8", dates: "Oct 26" },
        { index: 9, label: "W9", dates: "Nov 2" },
        { index: 10, label: "W10", dates: "Nov 9" },
        { index: 11, label: "W11", dates: "Nov 16", highlight: true, note: "AWARDS SZN" },
        { index: 12, label: "W12", dates: "Nov 23" },
      ],
      workstreams: [
        {
          name: "Drop CRM",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "DROP" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "U.S. Fan Pages",
          cells: [
            { weekIndex: 2, intensity: "high", label: "LAUNCH" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Short-Form Engine",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "REBAL" },
            { weekIndex: 3, intensity: "high", label: "SOLO" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "SCALE" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "DSP Program",
          cells: [
            { weekIndex: 1, intensity: "high", label: "SUSTAIN" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "PR Program",
          cells: [
            { weekIndex: 1, intensity: "medium" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "PUSH" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "AWARDS" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Foundation build + sustain window",
          items: [
            "Drop CRM stands up: capture flows, welcome sequence, first drop templated. Link-in-bio and pinned-comment routing goes live on owned channels.",
            "DSP sustain program runs at full intensity while Pop Off Pop Off is still climbing: listening-party moment scheduled, momentum triggers defined, weekly chart reporting begins.",
            "Short-form audit week: lock the rebalanced weekly mix, the member-franchise format, and the end-card templates with the Starship content team.",
            "U.S. fan-page operators briefed; content sourcing and cadence locked for the W2 launch.",
          ],
        },
        {
          weekIndex: 2,
          title: "Fan pages launch + paid test",
          items: [
            "U.S. fan-page network goes live with launch content across Instagram and TikTok.",
            "Paid social launches in test mode: proven organic winners against the section 04 targeting stack, baselining CPV and cost per capture.",
            "Short-form rebalance ships: guest conveyor rationed, gag and spectacle lanes scheduled.",
            "First CRM drop: era content unlock to seed list growth.",
          ],
        },
        {
          weekIndex: 3,
          title: "Member franchise launches",
          items: [
            "The weekly member-solo franchise debuts, leading with the proven anchors.",
            "Paid social reads week-one data; creative rotation begins.",
            "Pop-editorial pitch packet finalized with the crossover evidence; DSP relationship meetings scheduled.",
            "PR: U.S. press outreach opens on the crossover narrative.",
          ],
        },
        {
          weekIndex: 4,
          title: "Paid scales",
          items: [
            "Paid social moves to scale on the winning creative and audiences; retargeting pools activate.",
            "Fan-page network at full cadence; first weekly readout on engagement and referral capture.",
            "Member franchise completes its first full five-member rotation cycle planning.",
            "CRM: second drop, segmented by market.",
          ],
        },
        {
          weekIndex: 5,
          title: "Press push + retail prep",
          items: [
            "PR push week: crossover-story placements timed ahead of the retail moment.",
            "U.S. retail drop locked with the retail partner: exclusive version, date, and pop-up scope.",
            "Paid social sustains; Instagram-first format tests begin.",
            "DSP: sustain program transitions to catalog-activation focus as the single's climb matures.",
          ],
        },
        {
          weekIndex: 6,
          title: "U.S. retail moment (window)",
          items: [
            "First U.S. retail drop executes in its scheduled window: CRM-first access, fan-page amplification, paid retargeting against engaged audiences.",
            "Retail moment doubles as a capture event: every purchase and RSVP lands in the CRM.",
            "PR coverage of the retail moment feeds the U.S. narrative.",
          ],
        },
        {
          weekIndex: 8,
          title: "Mid-window review",
          items: [
            "Full-funnel readout: ratio movement, list growth, paid efficiency, short-form medians against the 3x target trajectory.",
            "Creative learnings fold back into the weekly mix and paid rotation.",
            "Awards-season calendar locked: voting windows, broadcast dates, fan-mobilization plan.",
          ],
        },
        {
          weekIndex: 9,
          title: "Awards season opens",
          items: [
            "Awards positioning begins: fan mobilization through CRM and fan pages, PR alignment to the year-end circuit.",
            "Content moments support the campaign: era retrospectives, member franchises carrying the story.",
            "Paid social sustains at maintenance; budget held for awards-window amplification.",
          ],
        },
        {
          weekIndex: 11,
          title: "Awards window",
          items: [
            "Peak awards-season week: coordinated fan mobilization, live-moment amplification, press coverage.",
            "CRM drops timed to broadcast moments.",
            "Paid amplification of key performances and wins.",
          ],
        },
        {
          weekIndex: 12,
          title: "Close-out + next cycle",
          items: [
            "Full-window performance review across every workstream: ratio, lists, medians, retail, press, awards outcomes.",
            "Next-cycle recommendations delivered, including the comeback campaign plan and Japan-debut support scoping.",
            "Infrastructure transitions to always-on posture between cycles: the foundation keeps compounding.",
          ],
        },
      ],
      footnote: "Sprints run in one-week cycles with weekly readouts. The retail window and any Japan moments follow partner scheduling. The next comeback authorizes a fresh campaign window on this same structure.",
    },
  ],
};
