import type { StrategyPlanData } from "../plan-context";

export const markTuanPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/mark-tuan/og-image.png",
  partSwitch: {
    currentCode: "AUDIT",
    slug: "mark-tuan-plan",
    code: "PLAN",
    label: "the Southeast Asia launch plan",
    eyebrow: "Part Two",
    endTitle: "The Southeast Asia Launch Plan",
    endBlurb: "What Crowd Control Digital runs against these findings: paid media concentrated on Thailand, a Thai creator wave on two sound cuts, and the creative direction and reporting that sit inside the fee. Priced two ways.",
    endCta: "Read the launch plan",
  },

  cover: {
    label: "Part One / Brand Audit",
    title: "Mark Tuan",
    subtitle: "Where Mark Tuan actually stands across Southeast Asia, measured across streaming, consumption, audience, video and infrastructure. The launch plan for \"Night Light\" featuring MILLI sits in Part Two.",
    partnership: "Transparent Arts \u00d7 Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/mark-tuan/mark-tuan-hero.jpg",
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
      subtitle: "Thailand found Mark Tuan before his own infrastructure did. Part One measures that gap across five dimensions. Part Two closes it around one release.",
      body: [
        "Thailand is Mark Tuan's largest Spotify market at 55,244 monthly listeners, ahead of the United States. It is 47.9% of his TikTok audience and 21.3% of his Instagram audience. He holds the largest Thai listener base of any GOT7 soloist and more Thai listeners than Jackson Wang, whose overall audience is nearly four times his size. The last twelve months added a Thai management partnership, a performance slot on the ICONSIAM Amazing Thailand Countdown's Global Phenomenon Stage, a Thai media tour, and two nights at IMPACT Arena where he performed a Thai-language cover and spoke Thai from the stage. The market has already chosen him.",
        "What has not been built is anything that holds that attention between releases. His Spotify follower base moved 7.8% in eighteen months while monthly listeners swung between 282,423 and 937,006. Release eras decay at 2.7% to 4.7% a week, averaging 3.88%, and each 2026 era has settled on a lower floor than the one before it. He sits in five Spotify editorial playlists with a combined reach of 33,087; MILLI sits in nineteen with a reach of 2.5 million. \"Night Light\" featuring MILLI is the right record for exactly this gap: a Thai verse from the artist who topped the 2026 LiFTED 50 and reached the Show Me The Money 12 final, on a song shaped for the short-form formats that already work for him. This document sizes that opportunity across market position, consumption, audience, video and infrastructure. The launch plan built on it, priced at $15,000 to $20,000 of media and creator spend, is in Part Two.",
      ],
      supports: {
        heading: "What Part One Covers",
        items: [
          "Market position against sixteen regional and K-pop soloist peers, tiered on live consumption data",
          "Consumption and decay analysis: era-by-era listener curves, the floor between releases, the collaboration pattern in his catalog, playlists and markets",
          "Southeast Asia audience profile across Spotify, TikTok, Instagram and YouTube",
          "Video intelligence: a frame-level analysis of 162 Mark Tuan, MILLI and peer videos with performance data joined",
          "Infrastructure audit: fan data, capture surfaces, pixels, smart links, live footprint and editorial position",
        ],
      },
      goals: {
        heading: "What the Audit Found",
        items: [
          "Thailand is his No. 1 Spotify market at 55,244 listeners, ahead of the U.S., and 47.9% of his TikTok audience. It has never been promoted to",
          "Followers moved 7.8% in eighteen months while listeners swung 282,423 to 937,006. The audience each release brings in does not stay",
          "His two biggest tracks and his seventh are collaborations, all ahead of every solo single since 2025",
          "Five Spotify editorial placements reaching 33,087 people, against MILLI's nineteen reaching 2.5 million",
          "Across 162 analyzed videos: no collaboration post lets a guest speak, two carry an on-screen ask, and none of his best work contains a Thai marker",
          "The capture surface that existed on the last EP was not carried forward to the current single",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "18 Months of Spotify Consumption",
          subtitle: "Weekly monthly-listener and follower readings since March 2025. Listeners rise and fall with each release; followers barely move.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "3/5/25", y: 403099 }, { x: "3/12/25", y: 386177 }, { x: "3/19/25", y: 374025 }, { x: "3/26/25", y: 364203 }, { x: "4/2/25", y: 354101 }, { x: "4/9/25", y: 357535 }, { x: "4/16/25", y: 360475 }, { x: "4/23/25", y: 364457 }, { x: "4/30/25", y: 369342 }, { x: "5/7/25", y: 374869 }, { x: "5/14/25", y: 373035 }, { x: "5/21/25", y: 363247 }, { x: "5/28/25", y: 351321 }, { x: "6/4/25", y: 366101 }, { x: "6/11/25", y: 433510 }, { x: "6/18/25", y: 487601 }, { x: "6/25/25", y: 517618 }, { x: "7/2/25", y: 525159 }, { x: "7/9/25", y: 486415 }, { x: "7/16/25", y: 456657 }, { x: "7/23/25", y: 433428 }, { x: "7/30/25", y: 422676 }, { x: "8/6/25", y: 408500 }, { x: "8/13/25", y: 406838 }, { x: "8/20/25", y: 425644 }, { x: "8/27/25", y: 454687 }, { x: "9/3/25", y: 471540 }, { x: "9/10/25", y: 473457 }, { x: "9/17/25", y: 475700 }, { x: "9/24/25", y: 456218 }, { x: "10/1/25", y: 429917 }, { x: "10/8/25", y: 422537 }, { x: "10/15/25", y: 404778 }, { x: "10/22/25", y: 403844 }, { x: "10/29/25", y: 402760 }, { x: "11/5/25", y: 394883 }, { x: "11/12/25", y: 468640 }, { x: "11/19/25", y: 636710 }, { x: "11/26/25", y: 759542 }, { x: "12/3/25", y: 892691 }, { x: "12/10/25", y: 925459 }, { x: "12/17/25", y: 857889 }, { x: "12/24/25", y: 769615 }, { x: "12/31/25", y: 676381 }, { x: "1/7/26", y: 617005 }, { x: "1/14/26", y: 597656 }, { x: "1/21/26", y: 588953 }, { x: "1/28/26", y: 582809 }, { x: "2/4/26", y: 561083 }, { x: "2/11/26", y: 541297 }, { x: "2/18/26", y: 511043 }, { x: "2/25/26", y: 482510 }, { x: "3/4/26", y: 451042 }, { x: "3/11/26", y: 420328 }, { x: "3/18/26", y: 403448 }, { x: "3/25/26", y: 389550 }, { x: "4/1/26", y: 375284 }, { x: "4/8/26", y: 362518 }, { x: "4/15/26", y: 368370 }, { x: "4/22/26", y: 362183 }, { x: "4/29/26", y: 354452 }, { x: "5/6/26", y: 347836 }, { x: "5/13/26", y: 379203 }, { x: "5/20/26", y: 393841 }, { x: "5/27/26", y: 399532 }, { x: "6/3/26", y: 400401 }, { x: "6/10/26", y: 352941 }, { x: "6/17/26", y: 330032 }, { x: "6/24/26", y: 316432 }, { x: "7/1/26", y: 315879 }, { x: "7/8/26", y: 310139 }, { x: "7/15/26", y: 301746 }, { x: "7/22/26", y: 294202 }, { x: "7/29/26", y: 283616 }, { x: "8/5/26", y: 305047 }, { x: "8/12/26", y: 335649 }, { x: "8/19/26", y: 368918 }, { x: "8/26/26", y: 392700 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "3/5/25", y: 586783 }, { x: "3/12/25", y: 586743 }, { x: "3/19/25", y: 586703 }, { x: "3/26/25", y: 586838 }, { x: "4/2/25", y: 586500 }, { x: "4/9/25", y: 586329 }, { x: "4/16/25", y: 586224 }, { x: "4/23/25", y: 585999 }, { x: "4/30/25", y: 585897 }, { x: "5/7/25", y: 585992 }, { x: "5/14/25", y: 586542 }, { x: "5/21/25", y: 588928 }, { x: "5/28/25", y: 593637 }, { x: "6/4/25", y: 599086 }, { x: "6/11/25", y: 602669 }, { x: "6/18/25", y: 604129 }, { x: "6/25/25", y: 604605 }, { x: "7/2/25", y: 604257 }, { x: "7/9/25", y: 603893 }, { x: "7/16/25", y: 603901 }, { x: "7/23/25", y: 604451 }, { x: "7/30/25", y: 604550 }, { x: "8/6/25", y: 604621 }, { x: "8/13/25", y: 605195 }, { x: "8/20/25", y: 606529 }, { x: "8/27/25", y: 607221 }, { x: "9/3/25", y: 607843 }, { x: "9/10/25", y: 608947 }, { x: "9/17/25", y: 610876 }, { x: "9/24/25", y: 612066 }, { x: "10/1/25", y: 612398 }, { x: "10/8/25", y: 613014 }, { x: "10/15/25", y: 614325 }, { x: "10/22/25", y: 615344 }, { x: "10/29/25", y: 615694 }, { x: "11/5/25", y: 616392 }, { x: "11/12/25", y: 617417 }, { x: "11/19/25", y: 618183 }, { x: "11/26/25", y: 618849 }, { x: "12/3/25", y: 620147 }, { x: "12/10/25", y: 620873 }, { x: "12/17/25", y: 620955 }, { x: "12/24/25", y: 621032 }, { x: "12/31/25", y: 621240 }, { x: "1/7/26", y: 621459 }, { x: "1/14/26", y: 621395 }, { x: "1/21/26", y: 621482 }, { x: "1/28/26", y: 621615 }, { x: "2/4/26", y: 621687 }, { x: "2/11/26", y: 621804 }, { x: "2/18/26", y: 621734 }, { x: "2/25/26", y: 621858 }, { x: "3/4/26", y: 622167 }, { x: "3/11/26", y: 622654 }, { x: "3/18/26", y: 623036 }, { x: "3/25/26", y: 623491 }, { x: "4/1/26", y: 623915 }, { x: "4/8/26", y: 624265 }, { x: "4/15/26", y: 624511 }, { x: "4/22/26", y: 624809 }, { x: "4/29/26", y: 624991 }, { x: "5/6/26", y: 625339 }, { x: "5/13/26", y: 625805 }, { x: "5/20/26", y: 626219 }, { x: "5/27/26", y: 626482 }, { x: "6/3/26", y: 626905 }, { x: "6/10/26", y: 627259 }, { x: "6/17/26", y: 627500 }, { x: "6/24/26", y: 627845 }, { x: "7/1/26", y: 628027 }, { x: "7/8/26", y: 628195 }, { x: "7/15/26", y: 628372 }, { x: "7/22/26", y: 628555 }, { x: "7/29/26", y: 629368 }, { x: "8/5/26", y: 630630 }, { x: "8/12/26", y: 631415 }, { x: "8/19/26", y: 632155 }, { x: "8/26/26", y: 632406 },
              ],
            },
          ],
          markers: [
            { x: "6/4/25", label: "HIGH AS YOU" },
            { x: "8/20/25", label: "HOLD STILL" },
            { x: "11/12/25", label: "SILHOUETTE" },
            { x: "8/5/26", label: "ALONE" },
          ],
          tall: true,
          source: "Chartmetric, weekly readings, Mar 5 2025 to Aug 26 2026",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify platform data, iTunes reporting by fan chart tracking where attributed, Hanteo published tallies, platform audience statistics, live-site inspection of every owned surface, and a dedicated Mark Tuan video intelligence store. The launch plan built on these findings is in Part Two.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Positioning is only defensible when it is tiered on live consumption, not reputation. Sixteen artists, one metric spine, three tiers, and one column that decides the whole plan: Thailand.",
      intro: "The comparison set covers the three groups Mark Tuan is measured against commercially: the Thai-native engines who own the anchor market, the K-pop and Asian-American crossover soloists who share his lane globally, and the GOT7 soloists who share his fandom. Spotify monthly listeners (Chartmetric, Sep 2026) is the spine; the Thailand column is where the plan is decided.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          featureTiersHeading: "The Comparison Set, Tiered by Monthly Listeners",
          featureTiers: [
            {
              label: "Tier 1 / Regional Engines",
              artists: [
                {
                  name: "LISA",
                  monthlyListeners: "12.9M Monthly Listeners",
                  instagram: "16.2M Spotify Followers",
                  reference: "Amazing Thailand Ambassador; the Thai-born ceiling for the whole region",
                  note: "Proof of what Thai identity plus global infrastructure produces. Thailand is only 2.8% of her listening because the rest of the world arrived; the documented Thai commerce spike around her came from naming her home province on camera.",
                },
                {
                  name: "Jay Park",
                  monthlyListeners: "4.8M Monthly Listeners",
                  instagram: "2.5M Spotify Followers",
                  reference: "Career trend: growth. Malaysia and the U.S. lead his markets",
                  note: "The Asian-American soloist benchmark for scale. Thailand is 3.6% of his base, which shows how unusual Mark Tuan's Thai skew is for an artist in this lane.",
                },
                {
                  name: "Ink Waruntorn",
                  monthlyListeners: "1.8M Monthly Listeners",
                  instagram: "1.3M Spotify Followers",
                  reference: "1.70M Thai monthly listeners; +11.5% in 90 days",
                  note: "The size of the Thai pop audience when it is fully served: 94% of her listening is domestic. The ceiling Mark Tuan's 55K Thai listeners are measured against.",
                },
                {
                  name: "F.HERO",
                  monthlyListeners: "1.6M Monthly Listeners",
                  instagram: "1.0M Spotify Followers",
                  reference: "Founder of MILLI's label; 16 weeks at Official Thailand Chart No. 1 in 2025",
                  note: "The architect of the Thai rap crossover lane. His Mirror Mirror with MILLI and Changbin is the highest-view Thai-Korean crossover on record and the direct precedent for this release.",
                },
              ],
            },
            {
              label: "Tier 2 / Crossover Peers",
              artists: [
                {
                  name: "Jackson Wang",
                  monthlyListeners: "1.56M Monthly Listeners",
                  instagram: "4.3M Spotify Followers",
                  reference: "MAGICMAN 2 opened its Asia leg with two sold-out IMPACT Arena nights, Oct 2025",
                  note: "The GOT7 solo ceiling. Bangkok is his tour launch city, yet Thailand is only 2.9% of his listening and his 44,605 Thai listeners sit below Mark Tuan's 55,244. He also holds the only prior GOT7-member record with MILLI.",
                },
                {
                  name: "Jeff Satur",
                  monthlyListeners: "1.50M Monthly Listeners",
                  instagram: "1.8M Spotify Followers",
                  reference: "Official Thailand Chart's No. 1 local artist and No. 1 local song of 2024",
                  note: "The Thai crossover model: 1.03M Thai listeners, sung direct-to-camera short form, brand integrations in the feed. He shared the ICONSIAM countdown stage with Mark Tuan in December 2025.",
                },
                {
                  name: "MILLI",
                  monthlyListeners: "1.38M Monthly Listeners",
                  instagram: "503K Spotify Followers",
                  reference: "19 Spotify editorial placements, 2.5M editorial reach; No. 1 on the 2026 LiFTED 50",
                  note: "The feature artist. 522K Thai listeners, 6.7M TikTok followers (73.6% Thai), a live Korea crossover with 61K Korean listeners, and an honorary diplomacy role from the Korean Embassy in Thailand. She brings the editorial pipeline this record needs.",
                },
                {
                  name: "Eric Nam",
                  monthlyListeners: "879K Monthly Listeners",
                  instagram: "2.1M Spotify Followers",
                  reference: "+14.2% listeners in 90 days; posts 2.6 times a week on TikTok",
                  note: "The Asian-American independent soloist who converts a smaller audience into a growing one through cadence and direct address. The operating model, not the audience, is the comparison.",
                },
              ],
            },
            {
              label: "Tier 3 / GOT7 Soloists and Contenders",
              artists: [
                {
                  name: "PP KRIT",
                  monthlyListeners: "566K Monthly Listeners",
                  instagram: "431K Spotify Followers",
                  reference: "486K Thai listeners; appeared in a Mark Tuan post in August 2026",
                  note: "A Thai actor-singer operating at Mark Tuan's scale with 86% of his listening at home. Shows what a Thailand-first audience at this tier looks like.",
                },
                {
                  name: "Mark Tuan",
                  monthlyListeners: "404K Monthly Listeners",
                  instagram: "633K Spotify Followers",
                  reference: "Thailand is market No. 1 at 55,244 listeners; Silhouette reported at iTunes No. 1 in Thailand, Malaysia and the Philippines",
                  note: "The subject of this document: the largest Thai listener base of the five GOT7 soloists, an outsized social footprint for his streaming tier (13.3M Instagram, 3.1M TikTok, 8.5M X), and a catalog whose biggest tracks are collaborations. That combination is the plan.",
                },
                {
                  name: "BamBam",
                  monthlyListeners: "216K Monthly Listeners",
                  instagram: "734K Spotify Followers",
                  reference: "Thailand is 22.5% of his listening; a top brand endorser in Thailand since 2017",
                  note: "The reason the GOT7 frame already exists in Thai media. He appeared on stage with Mark Tuan at IMPACT Arena in March 2026 and their joint TikTok did 5.2M views.",
                },
                {
                  name: "JAY B",
                  monthlyListeners: "211K Monthly Listeners",
                  instagram: "683K Spotify Followers",
                  reference: "Two solo releases at iTunes No. 1 in 36 and 41 regions including Thailand",
                  note: "Fandom converts to day-one purchases across Southeast Asia for every GOT7 soloist. It has not converted to streaming retention for any of them.",
                },
                {
                  name: "YUGYEOM",
                  monthlyListeners: "121K Monthly Listeners",
                  instagram: "470K Spotify Followers",
                  reference: "Appeared in the Alone dance collaboration, Aug 2026",
                  note: "Thailand is 18.5% of his listening. Thailand ranks first for all five GOT7 soloists, with Malaysia and the U.S. trading second and third between them.",
                },
              ],
            },
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "LISA", y: 12886928 },
                    { x: "Jay Park", y: 4771263 },
                    { x: "Ink Waruntorn", y: 1812294 },
                    { x: "F.HERO", y: 1615782 },
                    { x: "Jackson Wang", y: 1561728 },
                    { x: "Jeff Satur", y: 1497753 },
                    { x: "MILLI", y: 1384073 },
                    { x: "Eric Nam", y: 878944 },
                    { x: "PP KRIT", y: 565738 },
                    { x: "Mark Tuan", y: 404145 },
                    { x: "BamBam", y: 216294 },
                    { x: "JAY B", y: 210919 },
                    { x: "YUGYEOM", y: 120578 },
                  ],
                },
              ],
              highlightX: ["Mark Tuan"],
              source: "Chartmetric, Sep 3 2026",
            },
            {
              kind: "hbars",
              title: "Thailand Monthly Listeners by Artist",
              subtitle: "The column the plan is built on. Mark Tuan draws more Thai listeners than Jackson Wang, Eric Nam and every other GOT7 soloist; the Thai-native peers show how far the market goes.",
              series: [
                {
                  name: "Thailand listeners",
                  points: [
                    { x: "Ink Waruntorn", y: 1703833 },
                    { x: "F.HERO", y: 1241810 },
                    { x: "Jeff Satur", y: 1028680 },
                    { x: "MILLI", y: 521810 },
                    { x: "PP KRIT", y: 486432 },
                    { x: "LISA", y: 364794 },
                    { x: "Jay Park", y: 170451 },
                    { x: "Mark Tuan", y: 55244 },
                    { x: "BamBam", y: 48761 },
                    { x: "Jackson Wang", y: 44605 },
                    { x: "Eric Nam", y: 30354 },
                    { x: "JAY B", y: 27170 },
                    { x: "YUGYEOM", y: 22331 },
                  ],
                },
              ],
              highlightX: ["Mark Tuan"],
              source: "Chartmetric, where people listen, Sep 2 2026",
            },
            {
              kind: "hbars",
              title: "Thailand's Share of Each Artist's Listening",
              subtitle: "Thailand is the No. 1 market for every GOT7 soloist and for none of the global K-pop soloists. Mark Tuan carries a Thai skew that his lane does not.",
              unit: "%",
              series: [
                {
                  name: "Thailand share",
                  points: [
                    { x: "Jeff Satur", y: 68.7 },
                    { x: "MILLI", y: 37.7 },
                    { x: "BamBam", y: 22.5 },
                    { x: "YUGYEOM", y: 18.5 },
                    { x: "Mark Tuan", y: 13.7 },
                    { x: "JAY B", y: 12.9 },
                    { x: "Jay Park", y: 3.6 },
                    { x: "Eric Nam", y: 3.5 },
                    { x: "Jackson Wang", y: 2.9 },
                    { x: "LISA", y: 2.8 },
                  ],
                },
              ],
              highlightX: ["Mark Tuan"],
              source: "Chartmetric, Sep 2026. Thailand listeners divided by total monthly listeners",
            },
          ],
        },
        {
          label: "B",
          title: "How the Set Splits",
          objective: "Two lanes run through this set, and Mark Tuan sits between them with the strengths of both.",
          strategy: "The Thai-native lane (Ink Waruntorn, F.HERO, Jeff Satur, MILLI, PP KRIT) draws 38% to 94% of its listening from Thailand and owns the market's editorial, press and brand economy. The global K-pop soloist lane (LISA, Jay Park, Jackson Wang, Eric Nam) draws under 4% from Thailand and indexes the U.S., Malaysia and Indonesia first. The GOT7 soloists are the exception in K-pop: Thailand is the No. 1 market for all five, and Mark Tuan holds the largest Thai base of the five at 55,244. He carries a social footprint several tiers above his streaming base (13.3M Instagram, 3.1M TikTok, 8.5M X) attached to a Thai-first listening pattern that no other artist in his lane has. That is the asset Part Two promotes to, and the MILLI feature is the bridge into the Thai-native lane's audience and editorial system.",
          components: {
            heading: "What the Tiering Says",
            items: [
              "The Thai ceiling is real and far away: Jeff Satur draws 1.03M Thai listeners and F.HERO 1.24M from the same 72-million-person market Mark Tuan draws 55K from. Thailand is under-worked, not saturated",
              "GOT7 soloists convert fandom into iTunes country peaks across Southeast Asia; none has converted that into streaming retention. The gap is structural to the group, and the first soloist to close it wins the lane",
              "The set's growth stories run on cadence and direct address: Eric Nam is up 14.2% in 90 days and posts 2.6 times a week on TikTok against Mark Tuan's 1.0, with Ink Waruntorn up 11.5% and PP KRIT up 12.3% over the same window",
              "MILLI is live on New Music Friday in five Southeast Asian markets this week plus Taiwan and Hong Kong. The feature is an editorial asset before a single ad runs",
            ],
          },
        },
      ],
      footnote: "Listener and follower figures: Chartmetric, pulled Sep 3, 2026; country readings dated Sep 2, 2026. Chartmetric reports each artist's top ten countries only, so market shares are floors. Tier labels describe consumption scale, not quality.",
    },

    // ===================================================================
    // 03. Consumption & Decay Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption & Decay Analysis",
      philosophy: "Every release lifts him and every release lets go. The listeners arrive; nothing holds them. The plan is built to change the shape of the curve, not just the height of the peak.",
      intro: "This section reads Mark Tuan's Spotify consumption at four depths: the follower-to-listener ratio over eighteen months, era-by-era launch curves and decay rates, the falling floor between releases, and the collaboration pattern inside his catalog. Listener and follower series come from Chartmetric daily data; catalog totals from Spotify track data.",
      subBlocks: [
        {
          label: "A",
          title: "Followers and Listeners Have Decoupled",
          objective: "Measure how much of the audience that arrives with each release stays.",
          strategy: "The follower-to-listener ratio runs from 0.74 at the Silhouette peak to 2.23 at the July 2026 floor, a three-fold swing in eight months. Read correctly, that is not fandom conversion moving; it is listening collapsing between releases against a follower base that barely moves. Followers rose from 586,637 to 632,618 over eighteen months (+7.8%, a near-straight line) while monthly listeners swung between 282,423 and 937,006. Marketing spend on this artist has only ever moved the listener line, and the listener line has always reverted. The plan's conversion vertical exists to make the follower line move for the first time.",
          charts: [
            {
              kind: "line",
              title: "Followers per Monthly Listener, by Month",
              subtitle: "A high reading here means listening has fallen back to the committed core; a low reading means a release is pulling in listeners the core has not absorbed.",
              unit: "",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "3/25", y: 1.643 }, { x: "4/25", y: 1.586 }, { x: "5/25", y: 1.719 }, { x: "6/25", y: 1.143 }, { x: "7/25", y: 1.433 }, { x: "8/25", y: 1.304 }, { x: "9/25", y: 1.41 }, { x: "10/25", y: 1.529 }, { x: "11/25", y: 0.739 }, { x: "12/25", y: 0.918 }, { x: "1/26", y: 1.095 }, { x: "2/26", y: 1.31 }, { x: "3/26", y: 1.658 }, { x: "4/26", y: 1.767 }, { x: "5/26", y: 1.57 }, { x: "6/26", y: 1.986 }, { x: "7/26", y: 2.23 }, { x: "8/26", y: 1.567 },
                  ],
                },
              ],
              markers: [
                { x: "11/25", label: "SILHOUETTE" },
                { x: "7/26", label: "FLOOR" },
              ],
              note: "Target for this cycle: followers +25K, so the ratio settles lower at a higher listener count rather than snapping back.",
              source: "Chartmetric month-end readings, Mar 2025 to Aug 2026",
            },
          ],
        },
        {
          label: "B",
          title: "Launch Curves, Era Over Era",
          objective: "Compare how each release lifted monthly listeners from its own starting point, on identical data.",
          strategy: "Indexed to the day of release, the Silhouette EP lifted listeners 2.38x by day 30 and peaked at 937,006 on day 32. High As You lifted 1.52x, hold still 1.17x. The current single, Alone, released July 31 into the lowest floor of the entire window and has lifted 1.43x by day 30 with the curve still rising, which is the strongest single launch since High As You and is not yet finished. The lesson is consistent: peaks land three to five weeks after release, so the sustain window is where a campaign earns its money. The plan holds spend for weeks two through six rather than exhausting it on release day.",
          charts: [
            {
              kind: "line",
              title: "Listener Lift by Day Since Release",
              subtitle: "Spotify monthly listeners indexed to each release day. Every era peaks a month out; the question is how high and how long it holds.",
              unit: "x",
              series: [
                {
                  name: "Silhouette (EP)",
                  points: [
                    { x: "D0", y: 1.0 }, { x: "D3", y: 1.1 }, { x: "D6", y: 1.23 }, { x: "D9", y: 1.47 }, { x: "D12", y: 1.62 }, { x: "D15", y: 1.75 }, { x: "D18", y: 1.91 }, { x: "D21", y: 2.04 }, { x: "D24", y: 2.19 }, { x: "D27", y: 2.32 }, { x: "D30", y: 2.38 }, { x: "D33", y: 2.36 }, { x: "D36", y: 2.3 }, { x: "D39", y: 2.22 }, { x: "D42", y: 2.11 }, { x: "D45", y: 2.03 },
                  ],
                },
                {
                  name: "High As You",
                  points: [
                    { x: "D0", y: 1.0 }, { x: "D3", y: 1.02 }, { x: "D6", y: 1.07 }, { x: "D9", y: 1.15 }, { x: "D12", y: 1.25 }, { x: "D15", y: 1.34 }, { x: "D18", y: 1.39 }, { x: "D21", y: 1.45 }, { x: "D24", y: 1.48 }, { x: "D27", y: 1.5 }, { x: "D30", y: 1.52 }, { x: "D33", y: 1.51 }, { x: "D36", y: 1.48 }, { x: "D39", y: 1.44 }, { x: "D42", y: 1.38 }, { x: "D45", y: 1.33 },
                  ],
                },
                {
                  name: "Alone",
                  points: [
                    { x: "D0", y: 1.0 }, { x: "D3", y: 1.03 }, { x: "D6", y: 1.09 }, { x: "D9", y: 1.15 }, { x: "D12", y: 1.19 }, { x: "D15", y: 1.26 }, { x: "D18", y: 1.29 }, { x: "D21", y: 1.35 }, { x: "D24", y: 1.37 }, { x: "D27", y: 1.4 }, { x: "D30", y: 1.43 }, { x: "D33", y: null }, { x: "D36", y: null }, { x: "D39", y: null }, { x: "D42", y: null }, { x: "D45", y: null },
                  ],
                },
                {
                  name: "hold still",
                  points: [
                    { x: "D0", y: 1.0 }, { x: "D3", y: 1.01 }, { x: "D6", y: 1.05 }, { x: "D9", y: 1.08 }, { x: "D12", y: 1.12 }, { x: "D15", y: 1.14 }, { x: "D18", y: 1.15 }, { x: "D21", y: 1.16 }, { x: "D24", y: 1.16 }, { x: "D27", y: 1.16 }, { x: "D30", y: 1.17 }, { x: "D33", y: 1.17 }, { x: "D36", y: 1.15 }, { x: "D39", y: 1.13 }, { x: "D42", y: 1.11 }, { x: "D45", y: 1.08 },
                  ],
                },
              ],
              note: "Alone data runs through Aug 31, day 31 since release; its peak is not yet in.",
              source: "Chartmetric daily listener series, indexed by Crowd Control Digital",
              tall: true,
            },
          ],
        },
        {
          label: "C",
          title: "Decay Rate and the Falling Floor",
          objective: "Measure what each era leaves behind once the promotional wave passes.",
          strategy: "Across the three completed release eras since 2025, monthly listeners decayed at an average of 3.88% per week from peak to trough. The Silhouette era is the sharpest case: a 937,006 peak followed by twenty consecutive weeks of decline at 4.69% a week down to 353,784. The floor is falling with it. After the 2025 singles the audience settled at roughly 400K to 423K; after Silhouette it settled at a 307K average with an absolute low of 282,423 on July 31, 2026. Each 2026 era has ended lower than the one before, which is the pattern Chartmetric's trend flag is reading. The audience that arrives is never asked to follow, join, or come back, so it does not.",
          charts: [
            {
              kind: "bars",
              title: "Average Weekly Listener Decay by Era",
              subtitle: "Percent of monthly listeners lost per week from each era's peak to its trough.",
              unit: "%",
              series: [
                {
                  name: "Weekly decay rate",
                  points: [
                    { x: "High As You\nJun-Aug 2025", y: 4.24 },
                    { x: "hold still\nSep-Nov 2025", y: 2.7 },
                    { x: "Silhouette\nDec 2025-Apr 2026", y: 4.69 },
                    { x: "Spring lift\nJun-Jul 2026", y: 4.2 },
                  ],
                },
              ],
              highlightX: ["Silhouette\nDec 2025-Apr 2026"],
              note: "Silhouette bled for twenty straight weeks, the longest and steepest decline in the window.",
              source: "Chartmetric daily listener series, computed peak to trough per window",
            },
            {
              kind: "bars",
              title: "The Listener Floor, Era Over Era",
              subtitle: "Lowest monthly-listener reading between releases. Each 2026 floor landed below the one before it.",
              series: [
                {
                  name: "Floor",
                  points: [
                    { x: "Pre-High As You\nMay 2025", y: 349671 },
                    { x: "Post-High As You\nAug 2025", y: 406082 },
                    { x: "Post-hold still\nNov 2025", y: 393847 },
                    { x: "Post-Silhouette\nJul 2026", y: 282423 },
                  ],
                },
              ],
              highlightX: ["Post-Silhouette\nJul 2026"],
              note: "The floor is the number Part Two asks to be judged on: above 350K after this cycle, against a floor that has fallen three eras running.",
              source: "Chartmetric daily listener series",
            },
          ],
        },
        {
          label: "D",
          title: "The Collaboration Pattern in the Catalog",
          objective: "Read what the catalog says about where Mark Tuan's ceiling lifts.",
          strategy: "His largest track by streams is a feature on someone else's property: SUPERPOWER with KISS OF LIFE for VALORANT at 30.0M. His seventh is another, Never Gonna Come Down with BIBI for the Shang-Chi soundtrack at 11.1M. One in a Million with Sanjoy sits second at 16.6M. Every solo single since 2025 has landed between 0.9M (Alone, five weeks old) and 7.6M (High As You). The catalog is unambiguous: attached to a partner with its own audience, he reaches an audience he cannot reach alone. MILLI's catalog says the same thing from the other side. Nine of her ten biggest tracks are collaborations, and her largest, Mirror Mirror with F.HERO and Changbin of Stray Kids, has 80.8M streams across 14,950 playlists. It is a Thai rapper on a record with a K-pop idol. Night Light is the mirror image of that record, and Mind Games, her 2022 track with Jackson Wang at 7.6M, is the honest floor for what a GOT7-member feature does without a market plan behind it.",
          charts: [
            {
              kind: "bars",
              title: "Mark Tuan Catalog: Top Tracks by Spotify Streams",
              subtitle: "In millions. The two biggest tracks and the seventh are collaborations; every solo single since 2025 sits below them.",
              unit: "M",
              series: [
                {
                  name: "Streams (M)",
                  points: [
                    { x: "SUPERPOWER\nw/ KISS OF LIFE", y: 30.0 },
                    { x: "One in a Million\nw/ Sanjoy", y: 16.6 },
                    { x: "last breath", y: 15.4 },
                    { x: "Carry Me Out", y: 12.8 },
                    { x: "my life", y: 12.7 },
                    { x: "far away", y: 12.6 },
                    { x: "Never Gonna\nCome Down w/ BIBI", y: 11.1 },
                    { x: "imysm", y: 10.4 },
                    { x: "lonely", y: 8.7 },
                    { x: "High As You", y: 7.6 },
                  ],
                },
              ],
              highlightX: ["SUPERPOWER\nw/ KISS OF LIFE", "One in a Million\nw/ Sanjoy", "Never Gonna\nCome Down w/ BIBI"],
              note: "Several 2021-2022 tracks carry a second catalog entry from the album pressing that is not summed here, so career totals per song run higher.",
              source: "Chartmetric track data, Sep 3 2026",
            },
            {
              kind: "bars",
              title: "MILLI's Collaboration Scale",
              subtitle: "In millions. Her K-pop collaboration is her biggest record by a wide margin; her previous GOT7-member feature is the floor.",
              unit: "M",
              series: [
                {
                  name: "Streams (M)",
                  points: [
                    { x: "Mirror Mirror\nF.HERO, Changbin", y: 80.8 },
                    { x: "Just Being Friendly\nTilly Birds", y: 75.5 },
                    { x: "The Weekend Remix\nBIBI, 88rising", y: 24.4 },
                    { x: "SSAK\nfeat. Loco", y: 15.4 },
                    { x: "Mind Games\nJackson Wang", y: 7.6 },
                  ],
                },
              ],
              highlightX: ["Mirror Mirror\nF.HERO, Changbin", "Mind Games\nJackson Wang"],
              source: "Chartmetric track data, Sep 3 2026",
            },
          ],
        },
        {
          label: "E",
          title: "Markets, Cities, Editorial",
          objective: "Read where the consumption lives, and how much editorial support has ever held.",
          strategy: "Thailand leads at 55,244 monthly listeners, followed by Malaysia at 42,111 and the United States at 40,546. Five Southeast Asian markets account for at least 38.3% of all listening, and Bangkok alone holds 27,827 listeners, 4.5 times the next city. Editorial has never matched that demand. He currently sits in five Spotify editorial playlists with a combined 33,087 followers, four of them songwriter-credit lists with fewer than 150 followers each, and holds no live editorial in any Southeast Asian market. The Silhouette EP earned a same-week New Music Friday placement across Thailand, the Philippines, Indonesia, Malaysia, Singapore, Vietnam, Korea, Taiwan and Hong Kong on November 6, 2025; every one of those placements ended on November 13. The discovery playlists held longer: Viral Hits Thailand carried Sunsets and Cigarettes for twelve weeks, and Thai and Vietnamese lists held it for three to eleven. MILLI, by contrast, holds nineteen editorial placements with 2.5 million in reach and is live on New Music Friday in seven of these markets this week. The feature brings an editorial pipeline the record would not otherwise have.",
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Monthly Listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "Thailand", y: 55244 },
                    { x: "Malaysia", y: 42111 },
                    { x: "United States", y: 40546 },
                    { x: "Indonesia", y: 26171 },
                    { x: "Philippines", y: 23635 },
                    { x: "Brazil", y: 18650 },
                    { x: "Australia", y: 11061 },
                    { x: "Poland", y: 10758 },
                    { x: "Singapore", y: 7452 },
                  ],
                },
              ],
              highlightX: ["Thailand", "Malaysia", "Indonesia", "Philippines", "Singapore"],
              note: "Top cities: Bangkok 27,827, Singapore 6,210, Kuala Lumpur 4,624, Taipei 4,003, Jakarta 2,201, Quezon City 1,892. India (31K, last read July 30) omitted pending a fresh reading.",
              source: "Chartmetric, Sep 2 2026",
            },
            {
              kind: "bars",
              title: "Spotify Editorial Reach: Mark Tuan vs MILLI",
              subtitle: "Combined followers of current editorial placements. Five playlists at 33K against nineteen at 2.5M.",
              series: [
                {
                  name: "Editorial reach",
                  points: [
                    { x: "Mark Tuan\n5 playlists", y: 33087 },
                    { x: "MILLI\n19 playlists", y: 2526505 },
                  ],
                },
              ],
              highlightX: ["Mark Tuan\n5 playlists"],
              note: "MILLI's current placements include New Music Friday in the Philippines, Thailand, Malaysia, Singapore and Vietnam plus five Korean hip-hop and R&B editorials.",
              source: "Chartmetric playlist data, Sep 3 2026",
            },
          ],
        },
      ],
      footnote: "Listener and follower series: Chartmetric daily data through Aug 31, 2026. Catalog totals: Spotify track data via Chartmetric. Editorial placements: Chartmetric playlist tracking, current and past. All pulled Sep 3, 2026.",
    },

    // ===================================================================
    // 04. Southeast Asia Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "Southeast Asia Audience & Targeting",
      intro: "The profile below is built from Chartmetric platform data and Mark Tuan's TikTok, Instagram and YouTube audience statistics (updated Sep 1 to 3, 2026). It sets the initial paid targeting and the content posture for the campaign; splits refine once pixel data accumulates in the first week of paid activity.",
      thesis: "A young, female, Thai-led audience that already follows Mark Tuan on TikTok and Instagram at far higher rates than it streams him. The gap to close is between following and listening, which is a conversion problem, not an awareness problem.",
      metrosLabel: "Priority Markets",
      metros: [
        { name: "Bangkok" },
        { name: "Kuala Lumpur" },
        { name: "Singapore" },
        { name: "Jakarta" },
        { name: "Metro Manila" },
        { name: "Chiang Mai", tier: "secondary" },
        { name: "Khon Kaen", tier: "secondary" },
        { name: "Ho Chi Minh City", tier: "secondary" },
        { name: "Cebu City", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 9 },
        { bracket: "18-24", weight: 61 },
        { bracket: "25-34", weight: 26 },
        { bracket: "35+", weight: 4 },
      ],
      genderDistribution: { female: 83, male: 17 },
      similarArtists: [
        "MILLI",
        "BamBam",
        "Jackson Wang",
        "Jeff Satur",
        "JAY B",
        "Yugyeom",
        "Eric Nam",
        "DPR IAN",
        "PP Krit",
        "4EVE",
      ],
      genres: ["Pop", "R&B", "K-Pop", "T-Pop", "Thai Hip-Hop"],
      platformSignals: [
        {
          platform: "Spotify",
          note: "404K monthly listeners. Thailand is market No. 1 at 55,244, Malaysia No. 2 at 42,111; Southeast Asia is at least 38% of listening. Followers 633K, a committed core that has grown 7.8% in eighteen months while listening swung three-fold.",
        },
        {
          platform: "TikTok",
          note: "3.06M followers, 47.9% in Thailand (1.48M), then the U.S. 8.7%, Philippines 6.6%, Indonesia 5.2%. Engagement rate 6.5%, the highest of his platforms, and the only channel still growing (+9.2% over twelve months). Audience 82.5% female, 61% aged 18 to 24. The campaign's primary channel.",
        },
        {
          platform: "Instagram",
          note: "13.3M followers with Thailand 21.3% (2.84M), Indonesia 13.4%, U.S. 7.5%, Philippines 6.7%. Southeast Asia is 48% of the listed audience. Engagement 1.9% and followers down 3.9% over twelve months, but identical posts have out-earned their TikTok twins in 25 of 31 verified pairs.",
        },
        {
          platform: "YouTube",
          note: "3.01M subscribers, Thailand 21.2%, U.S. 15.3%, Philippines 10.0%. Audience skews older (72% aged 25 to 34). The Alone music video reached 735K views in its first month. Thailand is a video-first music market, so YouTube carries the music video and the long-form assets here.",
        },
      ],
      footnote: "Age and gender: TikTok audience statistics via Chartmetric; Instagram runs 78% female with the same 18-to-24 core. Priority markets are ranked by Spotify listeners and social audience share; Vietnam and Cebu are expansion markets validated against pixel data in the first paid flight.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Content",
      title: "Video Intelligence / 162 Videos, Frame by Frame",
      intro: "Crowd Control Digital indexed 162 videos into a dedicated Mark Tuan intelligence store on TwelveLabs video AI: 62 of his own posts across TikTok and Instagram (his top 40 by views plus his 25 most recent), the top 15 posts from MILLI, and the top posts from BamBam, Jackson Wang, Jeff Satur, Eric Nam, 4EVE and JAY B. Every frame, spoken word, on-screen text and format became queryable, with each video's real performance data joined on. The findings were cross-checked against an independent statistics-only pass over the same accounts; where the two disagreed, the page says so.",
      clientQuestion: {
        attribution: "The question this analysis answers",
        question: "Half of Mark Tuan's TikTok audience is Thai and his per-post median beats most of his peers. Why does none of it convert, and what has to change for a Thai-language feature to land in the market it was made for?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "79 TikTok posts (@marktuan, Oct 2023 to Aug 31, 2026, the full catalog) and 80 Instagram reels; eleven pre-2023 reels carry no public view count and are excluded from medians. From these, the union of his top 40 by views and 25 most recent formed the analyzed set. MILLI's top 15 and each peer's top 15 by views complete the store, ten for JAY B, whose TikTok account no longer exists.",
        },
        {
          label: "Video intelligence",
          value: "All 162 videos indexed as watchable video into a dedicated Mark Tuan knowledge store, 78.4 minutes of footage, so hooks, speech, on-screen text and its language, collaborators, locations and recurring formats can be queried across the whole corpus at once.",
        },
        {
          label: "Performance join",
          value: "Every video carries its own platform metrics: views, likes, comments, shares, engagement rate and within-account percentile. Content findings are read against outcomes, not in isolation.",
        },
        {
          label: "Adversarial cross-check",
          value: "Conclusions from the video pass were tested against an independent statistics-only pass over the same accounts. Two caption-based reads were overturned in the process and are reported below.",
        },
        {
          label: "Honest limits",
          value: "Collaborator identification leans on captions and official tags rather than facial recognition. Peer corpora are their top posts, so peer medians are a winners' benchmark, not an account average. TikTok rounds view counts above 100K and Instagram does not expose saves.",
        },
      ],
      corpusStats: [
        {
          label: "Videos analyzed",
          value: "162",
          detail: "62 owned, 15 MILLI, 85 peer. 78.4 minutes, performance data joined on every item",
        },
        {
          label: "Owned median views",
          value: "1.1M TikTok / 2.0M Instagram",
          detail: "Full-catalog medians. Measured account against account, that is second of seven on both platforms",
        },
        {
          label: "Engagement rate",
          value: "22.7% TikTok",
          detail: "Median across his full TikTok catalog, second-highest in the set behind BamBam",
        },
        {
          label: "Posting rate",
          value: "1.0 posts/week",
          detail: "TikTok, last 90 days. MILLI and 4EVE post 3.3 a week; Eric Nam 2.6",
        },
      ],
      mixColumnLabel: "Mark Tuan today",
      mixHeading: "Posting Grammar vs the Winning Grammar",
      mixIntro: "Reach is not the problem: measured account against account his median post is second in the set and his engagement rate is near the top of it. The rows below compare how the videos are built against what the regional winners do, because the campaign has to put a Thai-speaking feature artist into a format that has never let a guest speak.",
      mixRows: [
        {
          metric: "Guest voice in collaboration videos",
          subject: "0 audible guest voices across 26 collaboration posts",
          benchmark: "MILLI opens 9 of 15 videos speaking to camera; BamBam answers interview questions on camera",
          read: "behind",
          note: "The single is a feature. The current collaboration template mutes the feature artist.",
        },
        {
          metric: "Lift from putting a guest in frame",
          subject: "Collab median 3.20M vs solo 2.82M across the analyzed corpus; on TikTok specifically collab 2.40M trails solo 2.70M",
          benchmark: "A collaboration should out-earn solo output",
          read: "neutral",
          note: "Guests are spent for a 13% lift across the corpus and none on TikTok. The format, not the guest list, is the ceiling.",
        },
        {
          metric: "Quotable on-screen call to action",
          subject: "2 of 62 videos, one of them a brand instruction",
          benchmark: "MILLI opens a post with the ticket URL on screen; Jeff Satur and Jackson Wang carry release titles and dates in frame",
          read: "behind",
          note: "23% of captions carry an ask; 3% of videos do. The ask lives where retention is lowest.",
        },
        {
          metric: "Thai or Southeast Asian marker on screen",
          subject: "3 of 62 videos; zero Thai script, zero Bangkok, zero Thai venue",
          benchmark: "Jeff Satur, MILLI and 4EVE run Thai-script text and Thai locations natively",
          read: "behind",
          note: "His largest audience has never seen itself in his best-performing work.",
        },
        {
          metric: "TikTok posting cadence",
          subject: "1.0 posts per week over 90 days",
          benchmark: "MILLI and 4EVE 3.3 per week; Eric Nam 2.6",
          read: "behind",
          note: "Roughly one third of the regional cadence, including during the current release window.",
        },
        {
          metric: "Silent hard-cut outfit-switch format",
          subject: "9 to 11 seconds, 4 to 6 looks, a cut every 2 to 3 seconds. 10% of output, 33% of the top decile, lane median 4.9M",
          benchmark: "No peer in the set runs this format at this rhythm",
          read: "ahead",
          note: "His highest-leverage owned format. Protect the spec and point it at the new record.",
        },
      ],
      mixFootnote: "Owned rows measured on the 62-video analyzed corpus and the full 159-post catalog. Peer columns describe each account's top-15 set and are a winners' benchmark by construction.",
      charts: [
        {
          kind: "grouped",
          title: "Format Share: Output vs Top Decile",
          subtitle: "What the account posts against what actually reaches the top 10% of the corpus.",
          unit: "%",
          series: [
            {
              name: "Share of output",
              points: [
                { x: "Collab / guest", y: 35.5 },
                { x: "Interactive / fit", y: 9.7 },
                { x: "Brand", y: 14.5 },
                { x: "Release asset", y: 16.1 },
                { x: "Other", y: 22.6 },
              ],
            },
            {
              name: "Share of top decile",
              points: [
                { x: "Collab / guest", y: 16.7 },
                { x: "Interactive / fit", y: 33.3 },
                { x: "Brand", y: 50.0 },
                { x: "Release asset", y: 0 },
                { x: "Other", y: 0 },
              ],
            },
          ],
          note: "Release assets are 16% of output and none of the top decile. The record itself has never been the thing that travels.",
          source: "Mark Tuan video intelligence corpus, Sep 2026",
        },
        {
          kind: "bars",
          title: "Median Views by Content Lane",
          subtitle: "TikTok medians in thousands across the analyzed corpus.",
          unit: "K",
          series: [
            {
              name: "Median views (K)",
              points: [
                { x: "Release\nasset", y: 412.5 },
                { x: "Other", y: 2800 },
                { x: "Collab /\nguest", y: 3300 },
                { x: "Interactive /\nfit", y: 4250 },
                { x: "Brand", y: 8600 },
              ],
            },
          ],
          highlightX: ["Release\nasset"],
          note: "The lane the campaign most needs to work is the one that currently earns the least.",
          source: "Mark Tuan video intelligence corpus, performance join, Sep 2026",
        },
        {
          kind: "bars",
          title: "What Mark Does On Camera",
          subtitle: "All 62 owned videos classified by the video pass. Speaking to camera is the rarest behavior in the catalog.",
          series: [
            {
              name: "Videos",
              points: [
                { x: "Lip-syncs\nto music", y: 34 },
                { x: "Dances,\nno speech", y: 11 },
                { x: "Silent,\nnot dancing", y: 7 },
                { x: "Other", y: 7 },
                { x: "Speaks\nto camera", y: 3 },
              ],
            },
          ],
          highlightX: ["Speaks\nto camera"],
          source: "Mark Tuan video intelligence corpus, Sep 2026",
        },
        {
          kind: "bars",
          title: "TikTok Posting Cadence, Last 90 Days",
          subtitle: "Posts per week. The regional growth accounts run at three times his rate.",
          series: [
            {
              name: "Posts per week",
              points: [
                { x: "MILLI", y: 3.27 },
                { x: "4EVE", y: 3.27 },
                { x: "Eric Nam", y: 2.64 },
                { x: "BamBam", y: 1.17 },
                { x: "Mark Tuan", y: 1.01 },
                { x: "Jeff Satur", y: 0.47 },
              ],
            },
          ],
          highlightX: ["Mark Tuan"],
          source: "Platform data, Jun 5 to Sep 3 2026",
        },
        {
          kind: "grouped",
          title: "Same Post, Two Platforms: The Alone Cycle",
          subtitle: "Identical edits published to both platforms in the current release window, views in thousands.",
          unit: "K",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "Moon teaser", y: 2700 },
                { x: "Alone w/ Yugyeom", y: 1500 },
                { x: "Alone w/ SB19", y: 458 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "Moon teaser", y: 1154 },
                { x: "Alone w/ Yugyeom", y: 2106 },
                { x: "Alone w/ SB19", y: 1604 },
              ],
            },
          ],
          note: "Across 31 verified identical pairs in the full catalog, Instagram wins 25 at a median 2.1x. TikTok owns the outliers; Instagram owns the median.",
          source: "Platform metrics, verified identical edits, Aug 2026",
        },
      ],
      findingsHeading: "Six Findings, Cross-Checked",
      findingsIntro: "Each card carries the verdict, the evidence with real posts and their numbers, the counter-case where one exists, and what it means for the Night Light campaign. Open any card for the example posts behind it.",
      findings: [
        {
          id: "guest-appears-never-speaks",
          title: "Twenty-six videos put another artist in frame. Not one lets them make a sound.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Every collaboration post in the corpus is built the same way: side-by-side synchronized dance in a studio or hallway, the guest mirroring Mark rather than interacting with him. Across 26 collaboration videos the video pass found zero audible guest voices. The collaborator is present as a body, never as a voice or a personality. For a release whose feature artist is one of Thailand's most recognizable rapping voices, that template would waste the asset.",
          evidence: [
            "26 collaboration videos, 0 audible guest voices; 24 carry the explicit read of no guest speech",
            "The BamBam post (5.2M views) opens with a brief spoken exchange and then becomes parallel dance with no further dialogue",
            "The Butterbear post (3.4M) is side-by-side synchronized dance with a silent mascot; the Yugyeom post (2.1M on Instagram) is a mirrored studio dance with no dialogue",
            "Collaboration buys almost no lift: collab median 3.20M against solo 2.82M across the analyzed corpus, and on TikTok collab posts trail solo posts (2.40M vs 2.70M)",
          ],
          counterEvidence: [
            "The largest post in the corpus, the High As You group dance with GOT7 members at 34.2M, shows the parallel-dance format can produce an outlier when the guest roster carries the clip on identity alone",
          ],
          examples: [
            { platform: "tiktok", id: "7624145738808708365", label: "With BamBam: a spoken opening, then silent side-by-side dance", stat: "5.2M views" },
            { platform: "tiktok", id: "7581130601244167438", label: "With Butterbear: parallel dance, mascot silent", stat: "3.4M views" },
            { platform: "instagram", id: "DbuYlpGRv11", label: "Alone with Yugyeom: mirrored studio dance, no dialogue", stat: "2.1M views" },
          ],
          pivot: {
            title: "Give MILLI a line, not a mark",
            actions: [
              "Build at least three Night Light assets in which MILLI speaks or raps on camera in Thai with Mark responding; her voice is what Thailand recognizes",
              "Shoot a two-hander where the artists react to each other rather than face front in parallel, so the clip has a relationship in it, not a formation",
              "Keep one synchronized-dance cut for the challenge lane and treat it as the follower asset, not the anchor",
            ],
          },
        },
        {
          id: "the-ask-lives-in-the-caption",
          title: "Across 62 videos there are two quotable calls to action on screen, and neither points at the fan community.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Captions carry an ask on 23% of posts, clustered around release weeks. The videos themselves carry almost none: two verbatim on-screen calls to action in 62, one a pre-save end card on a VALORANT asset and one a brand instruction. Nothing in the video layer mentions streaming, the fan community, tickets or a destination. Reach is generated inside the frame and the ask is left outside it.",
          evidence: [
            "59 of 62 videos contain no explicit call to action in the frame; 60 of 62 under the strictest reading",
            "The only pre-save call to action in the corpus is a VALORANT end card at seconds 11 to 13 of a 5.7M-view post",
            "The fan-community launch post exists in the catalog and its ask lives only in the caption",
            "Explicitly checked and absent across all 62: streaming prompts, community prompts, ticket instructions and URLs",
          ],
          counterEvidence: [
            "Captions do carry the ask during release weeks (35 of 159 posts across the full catalog), so the campaign is not silent, it is silent in the frame where attention actually is",
          ],
          examples: [
            { platform: "instagram", id: "C9ddrAPyCrv", label: "The one pre-save end card in 62 videos", stat: "5.7M views" },
            { platform: "tiktok", id: "7667797488765635854", label: "Two days out from Alone: pre-save in caption only, nothing on screen", stat: "446K views" },
            { platform: "instagram", id: "DbXLOjmy8S4", label: "Alone MV teaser: pre-save in bio, no on-screen ask", stat: "1.3M views" },
          ],
          pivot: {
            title: "Put the ask in the frame",
            actions: [
              "Every Night Light asset ships with a burned-in end card carrying the pre-save or stream line and the destination, readable in two seconds",
              "Run the card Thai first with English underneath on every Southeast Asia cut",
              "Place one mid-roll ask at roughly 60% of clip length on release assets so the prompt lands before the drop-off point",
            ],
          },
        },
        {
          id: "thailand-out-of-frame",
          title: "The catalog's best work contains no Bangkok, no Thai script and no Thai venue. His largest audience has never seen itself on screen.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Thailand is 48% of his TikTok audience and his No. 1 streaming market, and the visual record gives the campaign almost nothing to build on. Across the 62 analyzed videos the video pass found Southeast Asian elements in three, and on a targeted sweep for Thai markers confirmed exactly one: a Thai mascot. Zero Thai-script signage, zero Bangkok exteriors, zero Thai venues, zero Thai on-screen text. The only Southeast Asian landmark in the corpus is in Kuala Lumpur.",
          evidence: [
            "3 of 62 videos carry any identifiable Thai or Southeast Asian element; 59 carry none",
            "A targeted sweep of all 62 for tuk-tuks, Bangkok streets or skyline, Thai-script signage, Thai retail interiors and Thai-language stage banners returned one match: the Butterbear mascot (3.4M views)",
            "The single Southeast Asian location in the corpus is the Petronas Towers behind Mark in a 4.6M-view Kuala Lumpur post",
            "On-screen text across 62 videos: 42 carry none, 19 English only, 1 Korean, 0 Thai",
          ],
          counterEvidence: [
            "The full 159-post catalog holds 15 Thailand-adjacent posts, including EVEANDBOY, ICONSIAM, Bangkok tour footage and a tuk-tuk clip at 1.9M views. Most sit outside his top-performing work, which is the point: the Thai surface exists, it has never been built into the assets that travel",
          ],
          examples: [
            { platform: "tiktok", id: "7581130601244167438", label: "Butterbear: the only confirmed Thai marker in 62 videos", stat: "3.4M views" },
            { platform: "instagram", id: "C3b0Kx5O2hE", label: "Kuala Lumpur, the one Southeast Asian location in the corpus", stat: "4.6M views" },
            { platform: "tiktok", id: "7589479174461525262", label: "The tuk-tuk post, outside the analyzed set", stat: "1.9M views" },
          ],
          pivot: {
            title: "Shoot Thailand into the frame, do not just tag it",
            actions: [
              "Build the Night Light asset package around identifiably Thai settings and props so the market sees itself: street signage, a Bangkok exterior, Thai food, a recognizable venue",
              "Bring Butterbear back; it is the one Thai cultural marker that has ever appeared in his video work and it delivered 3.4M",
              "Ship a Thai-script title card on every Southeast Asia cut; the catalog currently has none, so this alone changes the surface",
            ],
          },
        },
        {
          id: "prompt-not-the-driver",
          title: "The on-screen question is not what makes the outfit-switch format work. The cut rhythm is.",
          verdict: "refuted",
          confidence: "High",
          summary: "The caption-based read credited a question (which look do you like) for the format's success. The video pass shows five of the seven candidate posts contain no on-screen prompt, no numbering and no spoken invitation. They are silent outfit sequences with a hard cut every two to three seconds. The two clips that do carry an on-screen prompt are the two weakest in the set. What performs is the rhythm, and the interaction has always lived in the caption and the comments.",
          evidence: [
            "The 12.0M-view Instagram post runs four outfits with hard cuts at roughly 2, 5 and 7 seconds and asks nothing on screen; the caption carries the question",
            "The 7.5M TikTok captioned with a numbered choice shows no numbering anywhere in the video",
            "The 7.0M fit-check runs six outfits in eleven seconds, all hard cuts, no prompt, no speech",
            "The one true on-screen this-or-that (four text cards, 23 seconds) did 358K, the second-lowest post in the owned corpus",
          ],
          counterEvidence: [
            "The interactive and fit lane is genuinely his strongest: 10% of output, 33% of the top decile, median 4.9M. The format works; the finding is about which mechanic inside it does the work",
          ],
          examples: [
            { platform: "instagram", id: "CyHw7TLLEMO", label: "Four looks, ten seconds, hard cuts, no prompt on screen", stat: "12.0M views" },
            { platform: "tiktok", id: "7523056824841489719", label: "Six looks in eleven seconds, all hard cuts", stat: "7.0M views" },
            { platform: "tiktok", id: "7676305139220761870", label: "The one on-screen this-or-that, 23 seconds of text cards", stat: "358K views" },
          ],
          pivot: {
            title: "Keep the cut, move the ask",
            actions: [
              "Build the Night Light outfit-switch asset to the proven spec: 9 to 11 seconds, four to six looks, a hard cut every 2 to 3 seconds, no prompt cluttering the frame",
              "Put the question in the caption and the pinned comment, in Thai and English, where it has always actually lived",
              "Do not extend to text cards; the one clip built that way is the weakest in the corpus",
            ],
          },
        },
        {
          id: "milli-leads-with-her-face",
          title: "MILLI opens nine of fifteen videos on her own face and voice, off-stage, at three times his cadence.",
          verdict: "partial",
          confidence: "Medium",
          summary: "The caption data suggested MILLI's feed was stage footage. The video pass shows fourteen of her fifteen clips are off-stage: rooms, studios, an elevator, a street, travel interiors. What she does is open in close-up, address the camera directly, and carry the clip on facial and physical energy, with Thai script on screen and the commercial ask inside the post. That is exactly the register Mark's catalog lacks, and it is available to the campaign because she is on the record.",
          evidence: [
            "14 of 15 MILLI clips are off-stage; 9 of 15 open with immediate face-to-camera presentation, gesture, speech or dance",
            "Her two largest posts (39.2M and 31.5M) both open in close-up, looking at the lens and gesturing",
            "Thai script on screen in 2 of 15, including a Thailand tour announcement; Mark's corpus has none",
            "A 2.7M-view post opens with a URL on screen; she posts 3.3 times a week on TikTok against his 1.0",
          ],
          counterEvidence: [
            "Her Instagram median on the analyzed posts is 907K, third-lowest in the set, and her outliers are several years old. The grammar is not a guaranteed reach machine; it is the right register for a Thai launch",
          ],
          examples: [
            { platform: "tiktok", id: "7050508554293349659", label: "Close-up open, face and hands, direct to lens", stat: "39.2M views" },
            { platform: "tiktok", id: "7527875237539597576", label: "Sharp choreography with backup dancers, off-stage", stat: "10.3M views" },
            { platform: "instagram", id: "Dae0N7uT97O", label: "The ask stated up front inside the post", stat: "2.7M views" },
          ],
          pivot: {
            title: "Let MILLI set the grammar for the Southeast Asia cuts",
            actions: [
              "Open at least half the Night Light Southeast Asia assets on a face in close-up within the first second, hers or Mark's, rather than on a wide shot or a title card",
              "Adopt her Thai-script text treatment directly; it is the format the market already reads",
              "Match her posting pressure in the launch window: three posts a week during Night Light, using her cadence as the floor",
            ],
          },
        },
        {
          id: "the-voice-is-missing",
          title: "Mark speaks on camera in three of 62 videos. Every regional peer sells with a voice, a face or a process in frame.",
          verdict: "confirmed",
          confidence: "Medium",
          summary: "Across 62 owned videos the video pass found 3 in which Mark speaks to camera, 34 lip-syncs, 11 dance clips without speech and 7 silent posts. The regional peers do the opposite: Jeff Satur sings straight down the lens holding a microphone, Jackson Wang builds process films that show the work behind the polish, BamBam runs live-stage footage and on-camera interviews. None of those three formats exists anywhere in Mark's corpus, and a feature announcement is the moment they are built for.",
          evidence: [
            "3 of 62 owned videos feature Mark speaking in his own voice; 34 are lip-syncs",
            "Jeff Satur's recurring format is sung direct address to camera; his analyzed TikTok median is 7.0M",
            "Jackson Wang pairs polished footage with behind-the-scenes footage in a split screen on a 5.0M-view post; Mark's corpus contains no behind-the-scenes or process footage",
            "BamBam's on-camera talking post did 1.8M and his live-stage clips sit alongside brand integrations with Thai captions",
          ],
          counterEvidence: [
            "Speaking is not proven to lift Mark's own numbers: his three talking clips median 1.5M against a lip-sync median of 2.8M, and one of the three is a branded event recap. The recommendation rests on peer behavior and campaign logic, not on a measured lift in his data",
          ],
          examples: [
            { platform: "tiktok", id: "7532103813533076743", label: "Jeff Satur: sung direct address to camera", stat: "19.6M views" },
            { platform: "tiktok", id: "7655028549958503710", label: "Jackson Wang: process film, polished and behind-the-scenes together", stat: "15.2M views" },
            { platform: "instagram", id: "Dazieqct14-", label: "BamBam: Thai-caption brand integration in use", stat: "5.8M views" },
          ],
          pivot: {
            title: "Put Mark's voice on the record announcement",
            actions: [
              "Shoot one direct-address asset in which Mark introduces Night Light and MILLI in his own voice with Thai subtitles; the catalog has never carried a record introduced this way and every regional peer does it routinely",
              "Add a process cut from the session or the shoot in the split-screen grammar rather than a polished-only edit",
              "Reserve the lip-sync template for the challenge lane; it is 55% of his output and it should not also carry the announcement",
            ],
          },
        },
      ],
      footnote: "Analysis completed September 3, 2026 by Crowd Control Digital using TwelveLabs video intelligence over a dedicated Mark Tuan knowledge store with per-post performance data joined, cross-checked against an independent statistical pass. Example posts embed from the live platforms. Findings re-baseline against first-party analytics once account access begins.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "A 13-million-follower artist whose No. 1 market has never been asked for anything. This section is the itemized gap, verified surface by surface on September 3, 2026.",
      intro: "Everything below is what a release converts through. The audit opened every owned surface and read the page code for pixels and integrations. Each item is stated as found. Nothing in this section is a Crowd Control Digital line item; it is the map the plan in Part Two runs on and the short list of fixes the artist team can make at no cost.",
      subBlocks: [
        {
          label: "A",
          title: "Fan Data and Capture Surfaces",
          objective: "Map where fan relationships live today and verify, not assume, where owned capture is missing.",
          strategy: "The fan community home is a b.stage community launched October 3, 2025, with four tiers from free to $40 a year, and it is the bio destination on TikTok and YouTube. Around it the capture layer has gone backwards. The official site carries a single email field with a consent checkbox and no name, country or phone, and no marketing platform behind it. The Silhouette EP campaign page captured email and country through the distributor's forms host during a cycle in which Thailand was among the strongest markets. The Alone smart link, five weeks old, is DSP buttons only with no capture of any kind. That is a regression, not an absence: the mechanic existed one cycle ago and was not carried forward. There is no SMS or phone capture on any surface. The official site carries analytics only, with no Meta or TikTok pixel, so no paid campaign to date has been able to build audiences or measure conversions from site traffic. The X account with 8.5 million followers carries no bio and no link.",
          components: {
            heading: "Verified Current State (Sep 3, 2026)",
            items: [
              "Fan community on b.stage: four tiers, live campaigns, TikTok and YouTube bio destination. Member count not public",
              "marktuan.com: email field plus consent only, no marketing platform connected, no Meta or TikTok pixel, analytics only",
              "Alone smart link: DSP buttons only, no email, no pre-save gate, no follow gate. The Silhouette campaign page had email and country capture",
              "No SMS or phone capture anywhere; no YouTube Memberships; no Spotify Countdown page, merch module or concert listings",
              "X (8.5M followers): no bio text, no link. Shopify store: customer accounts and a Meta pixel, no newsletter block, four of eight front-page items sold out",
            ],
          },
        },
        {
          label: "B",
          title: "Southeast Asia Proof and Where the Records Live",
          objective: "Read the demand the last twelve months proved, and note where the resulting records sit.",
          strategy: "The Thai record is deep and recent: a partnership with a Thai agency in August 2025, an e-commerce fansign in November, a performance slot on the ICONSIAM Amazing Thailand Countdown's Global Phenomenon Stage on December 31 in front of a five-day audience of 1.8 million with national broadcast coverage, a one-million-baht flood relief donation, a February 2026 media tour across the country's biggest variety and interview shows, and two nights at IMPACT Arena on February 28 and March 1 priced from 2,900 to 8,500 baht with a photo-op ladder from the 4,900 baht tier up, where he performed a Thai-language cover and spoke Thai from the stage. The Silhouette EP is reported by fan chart tracking at iTunes No. 1 in Thailand, Malaysia and the Philippines and top three across the rest of the region. Bangkok was the only Southeast Asian stop on that run; Manila, Jakarta, Kuala Lumpur and Singapore were not visited. Ticketing ran through a single national ticketer and the Thai merch store required account registration to purchase, so the transaction records from that year sit with those platforms rather than in a list the artist team can address.",
          components: {
            heading: "What the Record Proves",
            items: [
              "Thai demand is established at arena scale and at retail, inside twelve months, without a paid campaign behind it",
              "The regional demand is broader than the routing: iTunes reporting put the last EP at or near the top across Malaysia, the Philippines, Indonesia, Vietnam and Singapore, none of which were visited",
              "The audience that bought tickets and merch is reachable today only through the platforms that sold to them",
            ],
          },
        },
        {
          label: "C",
          title: "DSP Editorial Position",
          objective: "Read the editorial record honestly, because it sets what the campaign can and cannot lean on.",
          strategy: "Five current Spotify editorial placements with a combined reach of 33,087, four of them songwriter-credit playlists with fewer than 150 followers each; the one with reach is a 2021 film-soundtrack playlist. No live editorial in any Southeast Asian market. The Silhouette EP proved the pitch can land: a same-week New Music Friday placement across nine markets on November 6 and 7, 2025, all of which ended on November 13, the standard one-week cycle. The discovery playlists held longer, and only in this region: Viral Hits Thailand carried Sunsets and Cigarettes for twelve weeks, with Thai and Vietnamese lists holding it for three to eleven. Alone reached one Thai editorial playlist in August and held it for two days. Spotify's display advertising products are unavailable in Thailand, Malaysia and Vietnam, so Thailand's DSP push has to run through editorial, the feature artist's pipeline and off-platform media.",
          components: {
            heading: "Editorial Facts That Shape the Plan",
            items: [
              "Zero live Southeast Asian editorial today; the largest placement ever held was K-Pop ON! (6.1M followers) for SUPERPOWER in 2024",
              "The nine-market New Music Friday sweep in November 2025 held one week; the Thai discovery lists held three to twelve",
              "MILLI holds 19 editorial placements with 2.5M reach and is live on New Music Friday in five Southeast Asian markets this week plus Taiwan and Hong Kong",
              "Spotify Marquee and Showcase cannot run in Thailand, Malaysia or Vietnam; among this campaign's markets they run in Indonesia, the Philippines and Singapore, where he clears the 5,000-listener minimum",
            ],
          },
        },
        {
          label: "D",
          title: "Brand and Partnership Equity",
          objective: "Read the commercial validation already banked, because it prices the brand.",
          strategy: "The Thai brand record is current: global ambassador for Thailand's largest beauty retailer since March 2023, an e-commerce fansign in November 2025, and the countdown performance in December. Globally the fashion and consumer relationships continue. In Thailand, brand tie-ins are a normal release asset rather than a stretch goal, and MILLI's most recent release was a brand-commissioned track and music video. The campaign is built to run on its own budget and to accept a Thai brand partner on top of it if one arrives.",
          components: {
            heading: "Equity Already in Place",
            items: [
              "Beauty retail ambassadorship (Thailand's largest), an e-commerce fansign, a countdown performance, a media tour and a fan-concert run, all inside twelve months",
              "A feature artist who topped the 2026 LiFTED 50, reached the Show Me The Money 12 final, holds an honorary cultural-diplomacy appointment from the Korean Embassy in Thailand, and is a current brand presenter",
            ],
          },
        },
      ],
      footnote: "Infrastructure facts verified against live sites, page code, archived captures, platform notices and published coverage, September 3, 2026. iTunes country peaks are reported by fan chart tracking rather than by a published industry chart and are attributed as such. This is the last section of Part One; the launch plan built on these findings is in Part Two.",
    },
  ],
};
