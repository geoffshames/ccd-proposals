import type { StrategyPlanData } from "../plan-context";

export const markTuanPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/mark-tuan/og-image.png",
  language: "en",

  cover: {
    label: "Brand Audit & Southeast Asia Launch Plan",
    title: "Mark Tuan",
    subtitle: "An audit of where Mark Tuan stands across Southeast Asia, and the launch plan for \"Night Light\" featuring MILLI that turns Thailand from his largest market into his first owned one.",
    partnership: "Transparent Arts × Crowd Control Digital",
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
      subtitle: "Thailand found Mark Tuan before his own infrastructure did. This document measures that gap in detail, then closes it around one release.",
      body: [
        "Thailand is Mark Tuan's largest Spotify market at 55,244 monthly listeners, ahead of the United States. It is 47.9% of his TikTok audience and 21.3% of his Instagram audience. He holds the largest Thai listener base of any GOT7 soloist and more Thai listeners than Jackson Wang, whose overall audience is nearly four times his size. The last twelve months added a Thai management partnership, a headline slot at the ICONSIAM Amazing Thailand Countdown, a Thai media tour, and two nights at IMPACT Arena where he performed a Thai-language cover and spoke Thai from the stage. The market has already chosen him.",
        "What has not been built is anything that holds that attention between releases. His Spotify follower base moved 7.8% in eighteen months while monthly listeners swung between 282,423 and 937,006. Every release era decays at close to 4% a week and the floor it settles on has fallen with each cycle. He sits in five Spotify editorial playlists with a combined reach of 33,087; MILLI sits in nineteen with a reach of 2.5 million. \"Night Light\" featuring MILLI is the right record for exactly this gap: a Thai verse from Thailand's most decorated rapper, on a song shaped for the short-form formats that already work for him. The audit half of this document sizes the opportunity. The plan half spends $15,000 to $20,000 against it, Thailand first, with a test-then-scale rule on every line.",
      ],
      supports: {
        heading: "What This Document Covers",
        items: [
          "Market position against sixteen regional and K-pop soloist peers, tiered on live consumption data",
          "Consumption and decay analysis: era-by-era listener curves, the falling floor, the collaboration pattern in his catalog, playlists and markets",
          "Southeast Asia audience profile across Spotify, TikTok, Instagram and YouTube",
          "Video intelligence: a frame-level analysis of 162 Mark Tuan, MILLI and peer videos with performance data joined",
          "Infrastructure audit: fan data, CRM, pixels, smart links, Thailand-side files, live business, editorial position",
          "The launch plan: four execution verticals, partner-led workstreams, a phased media flight, a ten-week timeline and two budget tiers",
        ],
      },
      goals: {
        heading: "Campaign Targets (Ten-Week Window, Expected Case)",
        items: [
          "Thailand Spotify monthly listeners: 55K to 150K at cycle peak, the first time a release is promoted to the market that already listens most",
          "Spotify followers: +25K against a base that has added 46K in eighteen months, because capture is built into every asset for the first time",
          "Owned audience: 12K+ Thai and Southeast Asian contacts captured through the pre-save, the CRM and the campaign surfaces",
          "Creator volume: 5,000+ videos on the official sound across TikTok in Thailand and the region during the window",
          "Editorial: a Thai or regional editorial placement that holds past the standard one-week New Music Friday cycle, which no prior release has done",
          "Retention: the post-cycle listener floor lands above 350K, versus 282K before the current single",
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
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify platform data, iTunes and Hanteo published tallies, platform audience statistics, live-site inspection of every owned surface, and a dedicated Mark Tuan video intelligence store.",
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
                  note: "Proof of what Thai identity plus global infrastructure produces. Thailand is only 2.8% of her listening because the rest of the world arrived; every documented Thai spike around her came from naming something specifically Thai.",
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
                  note: "The architect of the Thai rap crossover lane. His Mirror Mirror with MILLI and Changbin is the largest Thai-Korean collaboration on record and the direct precedent for this release.",
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
                  reference: "MAGICMAN 2 tour opened with two sold-out IMPACT Arena nights, Oct 2025",
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
                  reference: "Thailand is market No. 1 at 55,244 listeners; Silhouette reached iTunes No. 1 in Thailand, Malaysia and the Philippines",
                  note: "The subject of this document: the largest Thai listener base of the five GOT7 soloists, the largest social footprint in the tier (13.3M Instagram, 3.1M TikTok), and a catalog whose biggest tracks are collaborations. That combination is the plan.",
                },
                {
                  name: "BamBam",
                  monthlyListeners: "216K Monthly Listeners",
                  instagram: "734K Spotify Followers",
                  reference: "Thailand is 22.5% of his listening; Thailand's most-endorsed K-pop idol",
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
                  note: "Thailand is 18.5% of his listening. The pattern holds across the group: Thailand first, then Malaysia, then the U.S.",
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
          strategy: "The Thai-native lane (Ink Waruntorn, F.HERO, Jeff Satur, MILLI, PP KRIT) draws 38% to 94% of its listening from Thailand and owns the market's editorial, press and brand economy. The global K-pop soloist lane (LISA, Jay Park, Jackson Wang, Eric Nam) draws 3% or less from Thailand and indexes the U.S., Malaysia and Indonesia first. The GOT7 soloists are the exception in K-pop: Thailand is the No. 1 market for all five, and Mark Tuan holds the largest Thai base of the five at 55,244. He has a global soloist's social footprint (13.3M Instagram, second only to Jackson Wang and BamBam in the set) attached to a Thai-first listening pattern that no other artist in his lane has. That is the asset this plan promotes to, and the MILLI feature is the bridge into the Thai-native lane's audience and editorial system.",
          components: {
            heading: "What the Tiering Says",
            items: [
              "The Thai ceiling is real and far away: Jeff Satur draws 1.03M Thai listeners and F.HERO 1.24M from the same 72-million-person market Mark Tuan draws 55K from. Thailand is under-worked, not saturated",
              "Every GOT7 soloist converts fandom into day-one iTunes No. 1s across Southeast Asia; none has converted that into streaming retention. The gap is structural to the group, and the first soloist to close it wins the lane",
              "The set's growth stories (Eric Nam +14%, Ink Waruntorn +11%, PP KRIT +12% in 90 days) all post at two to three times Mark Tuan's cadence and put their own face and voice on camera",
              "MILLI is the only artist in the set live on New Music Friday in seven Southeast Asian markets this week. The feature is an editorial asset before a single ad runs",
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
          strategy: "Indexed to the day of release, the Silhouette EP lifted listeners 2.38x by day 30 and peaked at 937,006 on day 32. High As You lifted 1.52x, hold still 1.17x. The current single, Alone, released July 31 into the lowest floor of the entire window and has lifted 1.43x by day 30 with the curve still rising, which makes it the strongest single-track launch since 2025 and puts it on pace to clear High As You. The lesson is consistent: peaks land three to five weeks after release, so the sustain window is where a campaign earns its money. The plan holds spend for weeks two through six rather than exhausting it on release day.",
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
          strategy: "Across the three completed release eras since 2025, monthly listeners decayed at an average of 3.88% per week from peak to trough. The Silhouette era is the sharpest case: a 937,006 peak followed by twenty consecutive weeks of decline at 4.69% a week down to 353,784. The floor is falling with it. After the 2025 singles the audience settled at roughly 400K to 423K; after Silhouette it settled at a 307K average with an absolute low of 282,423 on July 31, 2026. Each era has ended lower than the one before, which is the pattern Chartmetric's trend flag is reading. Nothing in the music explains it. The audience that arrives is never asked to follow, join, or come back, so it does not.",
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
              note: "Target: the post-Night Light floor lands above 350K, the first era to raise the floor instead of lowering it.",
              source: "Chartmetric daily listener series",
            },
          ],
        },
        {
          label: "D",
          title: "The Collaboration Pattern in the Catalog",
          objective: "Read what the catalog says about where Mark Tuan's ceiling lifts.",
          strategy: "His largest track by streams is a feature on someone else's property: SUPERPOWER with KISS OF LIFE for VALORANT at 30.0M. His seventh is another, Never Gonna Come Down with BIBI for the Shang-Chi soundtrack at 11.1M. One in a Million with Sanjoy sits second at 16.6M. Every solo single since 2023 has landed between 0.9M (Alone, five weeks old) and 7.6M (High As You). The catalog is unambiguous: attached to a partner with its own audience, he reaches an audience he cannot reach alone. MILLI's catalog says the same thing from the other side. Nine of her ten biggest tracks are collaborations, and her largest, Mirror Mirror with F.HERO and Changbin of Stray Kids, has 80.8M streams across 14,950 playlists. It is a Thai rapper on a record with a K-pop idol. Night Light is the mirror image of that record, and Mind Games, her 2022 track with Jackson Wang at 7.6M, is the honest floor for what a GOT7-member feature does without a market plan behind it.",
          charts: [
            {
              kind: "bars",
              title: "Mark Tuan Catalog: Top Tracks by Spotify Streams",
              subtitle: "In millions. The two biggest tracks and the seventh are collaborations; every solo single since 2023 sits below them.",
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
                    { x: "High As You", y: 7.6 },
                    { x: "Your World", y: 7.4 },
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
          strategy: "Thailand leads at 55,244 monthly listeners, followed by Malaysia at 42,111 and the United States at 40,546. Five Southeast Asian markets account for at least 38.3% of all listening, and Bangkok alone holds 27,827 listeners, 4.5 times the next city. Editorial has never matched that demand. He currently sits in five Spotify editorial playlists with a combined 33,087 followers, four of them songwriter-credit lists with fewer than 150 followers each, and holds no live editorial in any Southeast Asian market. The Silhouette EP earned a same-week New Music Friday placement across Thailand, the Philippines, Indonesia, Malaysia, Singapore, Vietnam, Korea, Taiwan and Hong Kong on November 6, 2025; every one of those placements ended on November 13. Only the Thai discovery playlists held longer: Viral Hits Thailand carried Sunsets and Cigarettes for twelve weeks. MILLI, by contrast, holds nineteen editorial placements with 2.5 million in reach and is live on New Music Friday in seven of these markets this week. The feature brings an editorial pipeline the record would not otherwise have.",
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
        question: "Mark Tuan's short-form audience is half Thai and his median post out-earns most of his peers. Why does none of it convert, and what has to change for a Thai-language feature to land in the market it was made for?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "79 TikTok posts (@marktuan, Oct 2023 to Aug 31, 2026, the full catalog) and 80 Instagram reels with complete engagement data. From these, the union of his top 40 by views and 25 most recent formed the analyzed set. MILLI's top 15 and each peer's top 15 by views complete the store.",
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
          detail: "Full-catalog medians across 79 TikTok posts and 80 reels. Engagement rate 22.7% on TikTok, the second-highest in the set",
        },
        {
          label: "Peer top-post medians",
          value: "5.3M to 10.3M",
          detail: "MILLI 10.3M, Jeff Satur 7.0M, Jackson Wang 6.9M, Eric Nam 5.3M on their analyzed TikTok posts",
        },
        {
          label: "Posting rate",
          value: "1.0 posts/week",
          detail: "TikTok, last 90 days. MILLI and 4EVE post 3.3 a week; Eric Nam 2.6",
        },
      ],
      mixColumnLabel: "Mark Tuan today",
      mixHeading: "Posting Grammar vs the Winning Grammar",
      mixIntro: "Reach is not the problem: his median post beats most of the set and his engagement rate is near the top of it. The rows below compare how the videos are built against what the regional winners do, because the campaign has to put a Thai-speaking feature artist into a format that has never let a guest speak.",
      mixRows: [
        {
          metric: "Guest voice in collaboration videos",
          lolaAmour: "0 audible guest voices across 26 collaboration posts",
          benchmark: "MILLI opens 9 of 15 videos speaking to camera; BamBam answers interview questions on camera",
          read: "behind",
          note: "The single is a feature. The current collaboration template mutes the feature artist.",
        },
        {
          metric: "Lift from putting a guest in frame",
          lolaAmour: "Collab median 3.20M vs solo 2.82M on Instagram; on TikTok collab 2.40M trails solo 2.70M",
          benchmark: "A collaboration should out-earn solo output",
          read: "neutral",
          note: "Guests are spent for a 13% lift on one platform and none on the other. The format, not the guest list, is the ceiling.",
        },
        {
          metric: "Quotable on-screen call to action",
          lolaAmour: "2 of 62 videos, one of them a brand instruction",
          benchmark: "MILLI opens a post with the ticket URL on screen; Jeff Satur and Jackson Wang carry release titles and dates in frame",
          read: "behind",
          note: "23% of captions carry an ask; 3% of videos do. The ask lives where retention is lowest.",
        },
        {
          metric: "Thai or Southeast Asian marker on screen",
          lolaAmour: "3 of 62 videos; zero Thai script, zero Bangkok, zero Thai venue",
          benchmark: "Jeff Satur, MILLI and 4EVE run Thai-script text and Thai locations natively",
          read: "behind",
          note: "His largest audience has never seen itself in his best-performing work.",
        },
        {
          metric: "TikTok posting cadence",
          lolaAmour: "1.0 posts per week over 90 days",
          benchmark: "MILLI and 4EVE 3.3 per week; Eric Nam 2.6",
          read: "behind",
          note: "Roughly one third of the regional cadence, including during the current release window.",
        },
        {
          metric: "Silent hard-cut outfit-switch format",
          lolaAmour: "9 to 11 seconds, 4 to 6 looks, a cut every 2 to 3 seconds. 10% of output, 33% of the top decile, lane median 4.9M",
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
      findingsIntro: "Each card carries the verdict, the evidence with real posts and their numbers, the counter-case where one exists, and the pivot for the Night Light campaign. Open any card for the example posts behind it.",
      findings: [
        {
          id: "guest-appears-never-speaks",
          title: "Twenty-six videos put another artist in frame. Not one lets them make a sound.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Every collaboration post in the corpus is built the same way: side-by-side synchronized dance in a studio or hallway, the guest mirroring Mark rather than interacting with him. Across 26 collaboration videos the video pass found zero audible guest voices. The collaborator is present as a body, never as a voice or a personality. For a release whose feature artist is Thailand's most recognizable rapping voice, that template would waste the asset.",
          evidence: [
            "26 collaboration videos, 0 audible guest voices; 24 carry the explicit read of no guest speech",
            "The BamBam post (5.2M views) opens with a brief spoken exchange and then becomes parallel dance with no further dialogue",
            "The Butterbear post (3.4M) is side-by-side synchronized dance with a silent mascot; the Yugyeom post (2.1M on Instagram) is a mirrored studio dance with no dialogue",
            "Collaboration buys almost no lift: collab median 3.20M against solo 2.82M on Instagram, and on TikTok collab posts trail solo posts (2.40M vs 2.70M)",
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
          summary: "Captions carry an ask on 23% of posts, clustered around release weeks. The videos themselves carry almost none: two verbatim on-screen calls to action in 62, one a pre-save end card on a VALORANT asset and one a brand instruction for Samsung. Nothing in the video layer mentions streaming, the re:mark community, tickets or a destination. Reach is generated inside the frame and the ask is left outside it.",
          evidence: [
            "59 of 62 videos contain no explicit call to action in the frame; 60 of 62 under the strictest reading",
            "The only pre-save call to action in the corpus is a VALORANT end card at seconds 11 to 13 of a 5.7M-view post",
            "The re:mark launch post exists in the catalog and its ask lives only in the caption",
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
              "Localize the card: Thai first with English underneath on every Southeast Asia cut",
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
            "A 2.7M-view post opens with the ticket URL on screen; she posts 3.3 times a week on TikTok against his 1.0",
          ],
          counterEvidence: [
            "Her Instagram median on the analyzed posts is 907K, third-lowest in the set, and her outliers are several years old. The grammar is not a guaranteed reach machine; it is the right register for a Thai launch",
          ],
          examples: [
            { platform: "tiktok", id: "7050508554293349659", label: "Close-up open, face and hands, direct to lens", stat: "39.2M views" },
            { platform: "tiktok", id: "7527875237539597576", label: "Sharp choreography with backup dancers, off-stage", stat: "10.3M views" },
            { platform: "instagram", id: "Dae0N7uT97O", label: "Ticket URL stated up front inside the post", stat: "2.7M views" },
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
            title: "Put Mark's voice in the Thai campaign",
            actions: [
              "Shoot one direct-address asset in which Mark introduces Night Light and MILLI in his own voice, with Thai subtitles; he has never done this and every regional peer does it routinely",
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
      philosophy: "A 13-million-follower artist whose No. 1 market has never been asked for an email address. This section is the itemized gap, verified surface by surface on September 3, 2026.",
      intro: "Everything below is what a release converts through. The audit opened every owned surface, read the page code for pixels and integrations, and checked the Thailand-side partners' surfaces as well. Each item is stated as found; each gap is an opportunity the consumption data has already earned.",
      subBlocks: [
        {
          label: "A",
          title: "Fan Data and CRM Stack",
          objective: "Map where fan relationships live today and verify, not assume, where owned capture is missing.",
          strategy: "The fan community home is re:mark on b.stage, launched October 3, 2025 through Transparent Arts, with four tiers from free to $40 a year, and it is the bio destination on TikTok and YouTube. Around it the capture layer is thin. The official site carries a single email field with a consent checkbox and no name, country or phone, and no marketing platform behind it. The Silhouette EP campaign page captured email and country; the Alone smart link, five weeks old, is DSP buttons only with no capture of any kind. There is no SMS or phone capture on any surface. The official site carries Google Analytics only, with no Meta or TikTok pixel, so no paid campaign to date has been able to build audiences from site traffic. The 8.5-million-follower X account has no bio and no link. The audience is enormous and the number of people the team can reach directly, outside a platform algorithm, is not known.",
          components: {
            heading: "Verified Current State (Sep 3, 2026)",
            items: [
              "re:mark on b.stage: four tiers, live campaigns, TikTok and YouTube bio destination. Member count not public",
              "marktuan.com: email field plus consent only, no marketing platform connected, no Meta or TikTok pixel, Google Analytics only",
              "Alone smart link (Feature.fm): DSP buttons only, no email, no pre-save gate, no follow gate. The Silhouette campaign page had email and country capture",
              "No SMS or phone capture anywhere; no YouTube Memberships; no Spotify Countdown page, merch module or concert listings",
              "X (8.5M followers): no bio text, no link. Shopify store: customer accounts and a Meta pixel, no newsletter block, four of eight front-page items sold out",
            ],
          },
        },
        {
          label: "B",
          title: "Thailand-Side Files",
          objective: "Identify who holds the Thai fan data the last twelve months generated.",
          strategy: "Every Thai transaction to date has landed in a partner's database. Tickets for the IMPACT Arena fancon sold exclusively through ThaiTicketMajor with a queue system and one order per account, so the ticket buyer file sits with the ticketer. The fancon merch store run by the Thai partner requires account registration to purchase, so the Thai merch buyer file sits with the partner, and fan support runs through a LINE account rather than email. The Thai partner's artist page carries socials, releases and a media archive but no capture. None of this is a fault in the partnership, which delivered a countdown headline, a media tour and two arena nights inside eight months. It means the campaign has to build the shared capture layer deliberately, so the next Thai moment feeds a list the artist team can also use.",
          components: {
            heading: "What the Campaign Adds",
            items: [
              "A co-owned capture point on every Thai activation: opt-in at ticket and merch checkout, QR capture at events, a shared LINE or email destination",
              "One Thai-facing landing page for the release with Thai-first copy and capture, replacing the DSP-only smart link",
              "A data-sharing arrangement between the artist team and the Thai partner so both sides can reach the fans they jointly created",
            ],
          },
        },
        {
          label: "C",
          title: "Live Business",
          objective: "Size the live footprint, because it is the clearest proof of Thai demand and the least-captured asset.",
          strategy: "The Silhouette fancon played two nights at IMPACT Arena on February 28 and March 1, 2026, priced from 2,900 to 8,500 baht with a photo-op benefit ladder at every tier, after a Thai media tour, a countdown headline at ICONSIAM on December 31 and a Shopee fansign in November. It was the only Southeast Asian stop on a run that otherwise played China, Korea, Taiwan and Macau; Manila, Jakarta, Kuala Lumpur and Singapore were not visited, despite the Silhouette EP reaching iTunes No. 1 in Malaysia and the Philippines and top three in Indonesia, Vietnam and Singapore. GOT7 as a group met 85,000 fans across two sold-out nights at Rajamangala National Stadium in May 2025, the first stadium show of the group's career, in Bangkok. No live dates are currently announced anywhere, the events page has not been updated since January, and the concert listing services show nothing upcoming. MILLI's own Asia tour plays Bangkok on October 3 with Manila still to be announced.",
          kpis: [
            "One Southeast Asian live moment tied to the single inside the campaign window, a guest appearance or a fan event, announced through the owned list first",
            "Every future Thai and Southeast Asian date listed on the artist's own surfaces and the concert services, with capture at the point of sale",
          ],
        },
        {
          label: "D",
          title: "DSP Editorial Position",
          objective: "Read the editorial record honestly, because it decides how the DSP vertical is built.",
          strategy: "Five current Spotify editorial placements with a combined reach of 33,087, four of them songwriter-credit playlists with fewer than 150 followers each; the one with reach is a 2021 film-soundtrack playlist. No live editorial in any Southeast Asian market. The Silhouette EP proved the pitch can land: a same-week New Music Friday placement across nine markets on November 6, 2025, all of which ended on November 13, the standard one-week cycle. The Thai discovery playlists were the exception: Viral Hits Thailand held Sunsets and Cigarettes for twelve weeks. Alone reached one Thai editorial playlist in August and held it for two days. Spotify's display advertising products cannot target Thailand, Malaysia or Vietnam at all, only Indonesia, the Philippines and Singapore, so Thailand's DSP push has to run through editorial, the feature artist's pipeline and off-platform media.",
          components: {
            heading: "Editorial Facts That Shape the Plan",
            items: [
              "Zero live Southeast Asian editorial today; the largest placement ever held was K-Pop ON! (6.1M followers) for SUPERPOWER in 2024",
              "Nine-market New Music Friday sweep in November 2025 held exactly one week; Viral Hits Thailand held twelve",
              "MILLI holds 19 editorial placements with 2.5M reach and is live on New Music Friday in seven regional markets this week",
              "Spotify Marquee and Showcase are unavailable in Thailand, Malaysia and Vietnam; available in Indonesia, the Philippines and Singapore where he clears the 5,000-listener minimum",
            ],
          },
        },
        {
          label: "E",
          title: "Brand and Partnership Equity",
          objective: "Read the commercial validation already banked in Thailand, because it prices the brand and opens a co-funding path.",
          strategy: "The Thai brand record is deep and current: global ambassador for Thailand's largest beauty retailer since March 2023, a Shopee Thailand fansign in November 2025, the ICONSIAM Amazing Thailand Countdown headline on December 31, 2025 in front of a five-day audience of 1.8 million with national broadcast coverage, a one-million-baht flood relief donation, and a February 2026 Thai media tour across the country's biggest variety and interview shows. Globally the fashion and consumer relationships (Saint Laurent, Calvin Klein, Samsung) continue. In Thailand, brand tie-ins are a normal release asset rather than a stretch goal: most Thai artist deals now include one, and MILLI's most recent release was a brand-commissioned track and music video. The campaign is built to run on its own budget and to accept a Thai brand partner on top of it if one arrives.",
          components: {
            heading: "Equity Already in Place",
            items: [
              "Beauty retail ambassadorship (Thailand's largest), e-commerce fansign, a national countdown headline, a media tour and a fan-concert run, all inside twelve months",
              "A Thai management partner with broadcast and retail relationships, and a co-organizer relationship for live events",
              "A feature artist who is the country's most decorated rapper, an honorary cultural-diplomacy appointee and a current brand presenter",
            ],
          },
        },
      ],
      footnote: "Infrastructure facts verified against live sites, page code, archived captures, platform notices, ticketing and merch listings, and published coverage, September 3, 2026.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "Mark Tuan does not need Thailand to discover him. It already has. Every dollar in this plan either puts the record in front of the Thai audience that follows him but does not yet stream him, or captures that audience into something the team owns before the cycle ends. Nothing here asks the song to be something it is not. The plan is built to the record's actual shape.",
      hierarchy: [
        {
          label: "Launch Creative and the Short-Form Engine (Foundation)",
          description: "The asset system built from the video intelligence findings and the song map: MILLI on camera with a voice, Thai script in frame, Mark speaking in his own voice for the first time, the outfit-switch format at its proven spec, and an end card on every release asset. Cadence rises to three posts a week for the window. This is what the paid budget amplifies, so it comes first.",
        },
        {
          label: "Paid Media, Thailand First (Amplifier)",
          description: "TikTok, Meta and YouTube spend concentrated on Thailand, where the audience is already 48% of his TikTok following and media costs run a fraction of Western rates, with a Southeast Asia ring around it. Every line starts in test mode and scales on data.",
        },
        {
          label: "Conversion Infrastructure (Foundation)",
          description: "A gated pre-save with capture, pixels on every owned surface, a CRM chosen for the market, and a co-owned capture layer on Thai activations. The layer this artist has never had, built once and kept after the campaign.",
        },
        {
          label: "DSP and Press (Amplifier)",
          description: "Editorial pitched through the distributor's regional teams and the feature artist's live pipeline, Thai and regional press on the story the last twelve months already wrote, and a live tie-in where the calendar allows.",
        },
      ],
      messaging: [
        "Audit before prescription: every recommendation in the verticals traces to a measured gap in sections 02 through 06.",
        "Streams are not promised. Every target carries a worst, expected and best case, and streaming is the one variable this plan reports on rather than guarantees.",
        "Test, then scale: every paid line opens at a fraction of its budget and earns the rest on data inside the first week.",
        "Thailand is promoted like the No. 1 market it already is, not like a future expansion.",
        "Budgets are per cycle. The next release authorizes a fresh budget on the same structure, with the infrastructure already in place.",
      ],
      footnote: "Foundational workstreams outlive the campaign. Amplifier intensity follows the release calendar.",
    },

    // ===================================================================
    // 08. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "08",
      navLabel: "Structure",
      title: "Proposal Structure",
      intro: "Two media budgets for the Night Light cycle, both Thailand first. Every dollar shown deploys to market, creators or infrastructure; the Crowd Control Digital campaign fee is billed separately and is shown in the pricing section. Both tiers run the same ten-week window and the same four verticals; the Expanded tier adds the Southeast Asia ring, a larger creator wave with paid usage rights, Spotify display advertising in the three markets where it is available, and a second content day.",
      tiers: [
        {
          label: "Foundation",
          budget: "$15,000",
          name: "Thailand-First Launch",
          goal: "Put Night Light in front of the Thai audience that already follows Mark Tuan, seed the MILLI entrance across Thai creators, and stand up the capture layer so the audience that arrives is kept.",
          includes: [
            "Thailand paid media across TikTok, Meta and YouTube, test-then-scale",
            "Thai creator seeding wave: 20 nano and micro creators across two waves",
            "Light Southeast Asia ring: retargeting and lookalike reach in Malaysia, the Philippines, Indonesia and Singapore",
            "Conversion infrastructure: gated pre-save, pixels, CRM setup, co-owned capture on Thai activations",
            "Localization: Thai-script title cards, subtitles and end cards on every regional cut",
            "DSP editorial pitching and Thai and regional press (operational, no hard cost)",
          ],
        },
        {
          label: "Expanded",
          budget: "$20,000",
          name: "Thailand Plus the Southeast Asia Ring",
          goal: "Everything in Foundation at higher intensity, plus a full paid presence in the four ring markets, a 35-creator wave with paid usage rights, Spotify display advertising in Indonesia, the Philippines and Singapore, and a second content capture day.",
          featured: true,
          includes: [
            "Thailand paid media at full weight across TikTok, Meta and YouTube",
            "Creator wave of 35 across Thailand and the Philippines with Spark Ads usage rights on the winners",
            "Southeast Asia ring paid media including Spotify Marquee in Indonesia, the Philippines and Singapore",
            "Conversion infrastructure, with the CRM carried through the full window",
            "Localization plus a second content day for direct-address and process assets",
            "DSP editorial pitching and regional press (operational, no hard cost)",
          ],
        },
      ],
    },

    // ===================================================================
    // 09. Vertical 1 / Launch Creative & Short-Form Engine
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Creative",
      title: "Vertical 1 / Launch Creative & Short-Form Engine",
      philosophy: "The foundation. Everything the paid budget amplifies is built here, from the record's actual shape and the six video intelligence findings.",
      intro: "Night Light is a 2:34 mid-tempo pop-R&B record at roughly 96 BPM. Mark sings in English throughout; MILLI's verse lands at 1:32 to 1:52, mostly in Thai, and she returns with ad-libs on the bridge and the final chorus. The hook first lands at 0:50. It is not a hard-drop dance record; it is a transition record, and the beat switch into MILLI's entrance is the moment a Thai creator will use.",
      subBlocks: [
        {
          label: "A",
          title: "The Night Light Asset System",
          budget: "Inside the localization and content lines",
          objective: "Build the release assets to the findings, so the campaign launches with formats the data says work and the feature artist is used as a voice.",
          strategy: "Two sound cuts carry the campaign: the hook cut at 0:51 to 1:01 as the global clip, and the MILLI entrance at 1:32 to 1:42 as the Thai anchor clip, where the beat switch, the language switch and the energy shift all land inside ten seconds. Around those two cuts sits a ten-asset package, each one tied to a finding: a two-hander in which MILLI raps to camera in Thai and Mark responds, a direct-address introduction in Mark's own voice with Thai subtitles, a process cut from the session or the shoot, the outfit-switch format at its proven spec set to the hook, a transition video built on the beat switch, a Bangkok-shot asset with Thai signage and a Butterbear cameo, Thai-script title and end cards on every regional cut, Instagram-first variants of the winners, and the music video and lyric video for YouTube, where Thailand's video-first market lives.",
          components: {
            heading: "The Ten Assets",
            items: [
              "Two-hander: MILLI on camera, in Thai, with Mark reacting rather than mirroring. The first collaboration post in the catalog with a guest voice",
              "Direct address: Mark introduces the record and MILLI in his own voice, Thai subtitles burned in",
              "Process cut: session or shoot footage paired with the finished performance in a split screen",
              "Outfit switch to the hook: 9 to 11 seconds, four to six looks, a hard cut every 2 to 3 seconds, question in the caption",
              "Transition video on the beat switch into MILLI's verse, the template Thai creators will copy",
              "Bangkok-shot asset with identifiable Thai signage, a Thai venue or Thai food, and a Butterbear cameo",
              "Two official sound cuts: the hook (0:51 to 1:01) and the MILLI entrance (1:32 to 1:42)",
              "Thai-first end card and title card templates applied to every Southeast Asia cut",
              "Instagram-first variants of the three strongest TikTok assets",
              "Music video and lyric video on YouTube, with the MILLI verse cut as a Short",
            ],
          },
          kpis: [
            "All ten assets delivered before release week, with the two-hander and the transition video in hand by R-2 for creator briefing",
            "Release-asset lane median above the account median for the first time (currently 412K vs 2.7M on TikTok)",
            "Every regional cut carries Thai script and an on-screen ask",
          ],
        },
        {
          label: "B",
          title: "Cadence and Platform Management",
          objective: "Run the launch window at the regional cadence and manage Instagram as its own surface instead of a mirror.",
          strategy: "Three posts a week on TikTok from R-2 through R+6, using MILLI's cadence as the floor; the account currently runs at one. Instagram receives the strongest assets as twins, plus one Instagram-first test a week, because identical edits have out-earned their TikTok originals in 25 of 31 verified pairs and won three of the four pairs in the current release window. YouTube Shorts carries the MILLI verse and the process cut. The X account gains a bio and a link pointing at the capture page. Every release asset closes on the end card; the challenge and outfit lanes stay clean and carry the ask in the caption and the pinned comment.",
          kpis: [
            "TikTok cadence: 3 posts a week for eight weeks, 24 posts against a current pace of 8",
            "Instagram: every TikTok winner backfilled within 48 hours; one Instagram-first test per week",
            "TikTok followers: 3.06M to 3.4M by the end of the window (expected case)",
          ],
        },
        {
          label: "C",
          title: "Thai Creator Seeding Wave",
          budget: "$4,000 Foundation / $5,500 Expanded",
          objective: "Seed the MILLI entrance and the hook into Thai creator ecosystems at the tier where Thai rates make volume affordable.",
          strategy: "Thai nano and micro creators cost roughly $60 to $610 per TikTok video, which makes a real wave affordable inside this budget. Foundation runs 20 creators in two waves: release week on the MILLI-entrance transition, and week three on the hook and outfit-switch formats once the data shows which is traveling. Expanded runs 35 creators, adds five Philippine creators through the existing SB19 relationship, and buys Spark Ads usage rights on the winners so paid can amplify proven creator posts rather than untested ones. Creators are briefed on the template, not the script: the transition on the beat switch, the Thai text treatment, and the sound cut, so the outputs read native rather than sponsored. A second, unpaid wave is expected from the format itself if the first wave lands, which is how his previous sounds reached 28K to 47K creator videos over time.",
          tactics: [
            "Wave 1 (release week): the MILLI-entrance transition template across dance, comedy and lifestyle creators in Bangkok, Chiang Mai and Khon Kaen",
            "Wave 2 (R+2): the hook and outfit-switch formats on the creators whose first posts over-indexed, plus the Philippine lane on Expanded",
            "Spark Ads rights on the top five creator posts (Expanded), so paid runs on proven creative",
            "Weekly creator readout: videos on the sound, views, and which template is traveling",
          ],
          kpis: [
            "Creator videos on the official sound during the window: 1,000 worst, 5,000 expected, 15,000 best",
            "Creator-post median above 50K views in Thailand; at least three creator posts above 1M",
            "Cost per creator video at or below $200 blended",
          ],
        },
      ],
      footnote: "Sound-cut timestamps refer to the mix supplied on September 3, 2026 and shift with any final edit. Creator rates from published Thai agency rate cards, 2025, in Thai baht converted at 32 to 33 per U.S. dollar.",
    },

    // ===================================================================
    // 10. Vertical 2 / Paid Media, Thailand First
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "Paid",
      title: "Vertical 2 / Paid Media, Thailand First",
      philosophy: "The amplifier. Thailand's media costs are a fraction of Western rates and the audience is already following him; paid exists to move that audience from following to listening and to build the retargeting pools the capture layer converts.",
      intro: "Benchmarks used below are published 2025 to 2026 Thai and Southeast Asian rates: TikTok CPM roughly $0.60 to $1.60 in Thailand, Meta CPM $2.50 to $4.00 (Instagram 20 to 40% above Facebook), YouTube in-stream around $0.004 per view. Every line opens in test mode at roughly 30% of its budget in the first week and earns the balance on data.",
      subBlocks: [
        {
          label: "A",
          title: "Thailand Core Flight",
          budget: "$7,000 Foundation / $8,000 Expanded",
          objective: "Run the first dedicated paid program in the market that already listens most.",
          strategy: "Three channels, weighted to where the audience and the cost meet. TikTok carries the largest share, running Spark Ads on the organic winners and the top creator posts rather than bespoke ad creative, against fans of MILLI, BamBam, Jackson Wang, Jeff Satur and the Thai pop and hip-hop interest stack, with Thailand's 18-to-34 female core as the seed. Meta runs Instagram Reels and Facebook video on the same assets, because Instagram is where his identical posts systematically out-earn TikTok and where 2.84M Thai followers already sit. YouTube carries the music video and the MILLI-verse cut as in-stream ads at a per-view cost that makes a 375K-view flight cost roughly $1,500. Objectives ladder from video views in week one to engagement and pre-save clicks from week two, with retargeting pools built from viewers, engagers and landing-page visitors.",
          components: {
            heading: "Components",
            items: [
              "TikTok Spark Ads on organic and creator winners: roughly $3,000 to $3,500, an estimated 2 to 5 million Thai impressions at published rates",
              "Meta Reels and video: roughly $2,500 to $3,000, an estimated 700K to 1.2M impressions with Thai interest and lookalike stacks",
              "YouTube in-stream on the music video and the MILLI cut: roughly $1,500, an estimated 300K to 400K completed views",
              "Retargeting architecture across video viewers, engagers and landing-page visitors from week one",
            ],
          },
          kpis: [
            "Thailand Spotify monthly listeners at cycle peak: 90K worst, 150K expected, 250K best (from 55K)",
            "Pre-save and stream clicks at or below $0.28 per action, the Southeast Asia benchmark",
            "Retargeting pool of 500K+ Thai users by R+2",
          ],
        },
        {
          label: "B",
          title: "The Southeast Asia Ring",
          budget: "$1,000 Foundation / $3,000 Expanded",
          objective: "Extend the record to the four markets where the audience already ranks second through sixth, at the intensity each tier can afford.",
          strategy: "Malaysia, the Philippines, Indonesia and Singapore hold 99K of his monthly listeners between them and returned iTunes No. 1 or top-three placements for the last EP. Foundation runs a light ring: lookalike and retargeting reach on TikTok and Meta for followers and engagers in those markets. Expanded runs a full ring and adds Spotify Marquee in Indonesia, the Philippines and Singapore, the three regional markets where the product is available and where he clears the 5,000-listener minimum, inside the first 18 days after release. Malaysia and Vietnam run on TikTok, Meta and YouTube only. The Philippines gets the SB19 relationship as its creative angle.",
          components: {
            heading: "Components",
            items: [
              "Foundation: TikTok and Meta retargeting and lookalike reach across the four ring markets",
              "Expanded: full ring flights on TikTok, Meta and YouTube, weighted to Malaysia and the Philippines",
              "Expanded: Spotify Marquee in Indonesia, the Philippines and Singapore in the first 18 days",
              "Philippines creative built on the SB19 collaboration; Indonesia and Malaysia on the MILLI-entrance transition",
            ],
          },
        },
        {
          label: "C",
          title: "Measurement and the Scale Rule",
          objective: "Report what the money did every week, and move it toward what works.",
          strategy: "Every paid line opens at roughly 30% of budget for its first seven days, baselining cost per view, cost per engagement and cost per click by market and by asset. Winners scale; lines that miss their benchmark by more than 50% are cut and the budget moves. Streaming is reported weekly and is the one number this plan does not guarantee, because paid reach converts to streams through the platforms' own recommendation systems and no agency controls that. What the plan does commit to is the target ranges below, each with a worst, expected and best case, and a written weekly readout on all of them.",
          kpis: [
            "Total Spotify monthly listeners at cycle peak: 550K worst, 750K expected, 1.0M best (from 404K)",
            "Spotify followers added in the window: 10K worst, 25K expected, 50K best",
            "Owned contacts captured: 5K worst, 12K expected, 25K best",
            "Post-cycle listener floor: above 350K (versus 282K before the current single)",
          ],
        },
      ],
      footnote: "Impression and view estimates are calculated from published Thai and Southeast Asian rate benchmarks and will be replaced with live account data after the first week of delivery. Spotify Marquee availability per market as published by Spotify, September 2026.",
    },

    // ===================================================================
    // 11. Vertical 3 / Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "Conversion",
      title: "Vertical 3 / Conversion Infrastructure",
      philosophy: "The foundation the audit found missing. Built once during this cycle and kept for every release after it.",
      subBlocks: [
        {
          label: "A",
          title: "A Pre-Save That Captures",
          objective: "Replace the DSP-only smart link with a landing page that keeps the audience it converts.",
          strategy: "The distributor's pre-save tooling already sits in the stack; the campaign uses it as a gated page rather than a button list. Every visitor is asked for an email and a country, the Spotify pre-save carries a follow gate, and the copy runs Thai first with English underneath on the Thai-facing version. Every bio link across Instagram, TikTok, X, YouTube and Facebook points at this page from R-3 onward, including the X account that currently carries no link at all. The Silhouette cycle proved the mechanic works on this audience; the campaign makes it the default.",
          components: {
            heading: "Components",
            items: [
              "Gated pre-save page with email, country and Spotify follow gate, Thai-first and English versions",
              "All bio links and the smart-link domain routed to the page for the full window",
              "Post-release, the same page becomes the stream page with capture intact",
            ],
          },
          kpis: [
            "Pre-save conversions at or below $0.28 each on paid traffic",
            "Capture rate above 25% of pre-save page visitors",
          ],
        },
        {
          label: "B",
          title: "A CRM for the Cycle",
          objective: "Choose and stand up the direct-response layer that turns captured contacts into a reachable audience, alongside the re:mark community.",
          strategy: "The team should select a CRM before R-3 and run it through the cycle. Two options fit this campaign. A LINE Official Account is the native Thai choice: LINE is the country's dominant messaging platform, the Thai partner already runs fan support on it, and LINE's own ad products deliver remarketing reach at the lowest cost in the market. Laylo is the global drop-based choice: email and SMS where carriers support it, release-day drops, and the same tool the artist team can use for every market at once. The two are not exclusive; Thailand can run on LINE while the rest of the world runs on email. Whichever is chosen, re:mark remains the membership home, and the CRM is the direct-response asset that reaches the wider audience the community does not.",
          components: {
            heading: "Components",
            items: [
              "CRM selection and setup by R-3: LINE Official Account, Laylo, or both, with segments for Thailand, the Southeast Asia ring and global",
              "Release-day drop, a MILLI-verse content unlock in week two, and a live-moment first-access drop",
              "re:mark promoted as the destination for the deepest-intent fans captured by the CRM",
            ],
          },
          kpis: [
            "Owned contacts by R+6: 5K worst, 12K expected, 25K best",
            "Release-day drop open or read rate above 40%",
          ],
        },
        {
          label: "C",
          title: "Pixels and Link Hygiene",
          objective: "Make every owned surface measurable and every link productive.",
          strategy: "Meta and TikTok pixels on the official site and the landing page before any paid runs, so the campaign builds audiences from every visit and reports conversions honestly. A Spotify Countdown page for the release, YouTube Memberships switched on, the events page refreshed, the concert listing services updated, a newsletter block on the store, and a bio link on X. None of these cost media dollars; all of them are absent today.",
          components: {
            heading: "Checklist",
            items: [
              "Meta and TikTok pixels live on marktuan.com and the landing page by R-3",
              "Spotify Countdown page and Canvas for Night Light",
              "YouTube Memberships on; events page and concert listings current",
              "X bio and link; store newsletter block",
            ],
          },
        },
        {
          label: "D",
          title: "Co-Owned Capture on Thai Activations",
          objective: "Make the next Thai live or retail moment feed a list the artist team can use.",
          strategy: "The last twelve months of Thai activity produced buyer files at the ticketer and the Thai partner's store, and none in the artist team's hands. The campaign agrees a simple shared mechanic with the Thai partner: an opt-in at ticket and merch checkout, a QR capture at any event or fansign, and a shared destination (the LINE account or the landing page). The partner keeps its file; the artist team gains one. Applied to the next Bangkok moment, this single change turns the live business into the list-building engine it has never been.",
        },
      ],
      footnote: "Infrastructure built in this vertical persists after the campaign and is the layer every future cycle compounds on.",
    },

    // ===================================================================
    // 12. Vertical 4 / DSP & Press
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "DSP + Press",
      title: "Vertical 4 / DSP & Press",
      philosophy: "The amplifier that costs no media dollars. The feature brings an editorial pipeline the record would not otherwise have, and the last twelve months already wrote the press story.",
      subBlocks: [
        {
          label: "A",
          title: "Editorial Program",
          objective: "Hold a Southeast Asian editorial placement past the standard one-week cycle for the first time.",
          strategy: "The pitch runs through the distributor's Southeast Asia editorial teams with the feature as the story: Thailand's most decorated rapper, four months from a Korean cultural-diplomacy appointment, on a record whose artist counts Thailand as his No. 1 market. Targets are the placements the last EP reached and lost after a week (New Music Friday in Thailand, the Philippines, Indonesia, Malaysia, Singapore and Vietnam), the Thai discovery lists that held for twelve weeks (Viral Hits Thailand), the Thai pop shelf (Hot Hits Thailand, Thai Pop, Trending Thai Pop, RADAR Thailand), the regional list (Southeast Asia Hit List), the K-pop shelf where his largest placement ever sat (K-Pop ON!), and the Korean hip-hop lane where MILLI is live today (TrenChill K-Hip Hop, K-R&B Now). Apple Music Thailand editorial and JOOX, which still holds a quarter of Thai audio streaming, are pitched in parallel. The sustain-window data from section 03 sets the timing: the week-two-through-six follow-up pitch carries the consumption proof the launch pitch cannot.",
          components: {
            heading: "Components",
            items: [
              "Launch pitch packet with the feature story, the Thai consumption data and the creator plan, submitted through the distributor before R-3",
              "Week-two follow-up with live Thai consumption and creator data, aimed at the discovery lists that hold",
              "MILLI's team briefed to include the record in her own editorial and press conversations",
              "Apple Music, YouTube Music and JOOX Thailand pitched alongside Spotify",
            ],
          },
          kpis: [
            "New Music Friday in Thailand plus at least three ring markets in release week",
            "One Thai or regional discovery placement held for four weeks or more",
          ],
        },
        {
          label: "B",
          title: "Thai and Regional Press",
          objective: "Move the story from the K-pop wire into Thai general entertainment and regional music press.",
          strategy: "The narrative assets are already banked: two nights at IMPACT Arena with a Thai-language cover, the ICONSIAM countdown headline, a national media tour, a million-baht flood donation, and now a record with MILLI. Thai general press (Sanook, Thairath, Kapook) and Thai lifestyle press (GQ Thailand, Time Out Bangkok, Vogue Thailand) carry the story to the mainstream; regional music press (Bandwagon Asia, LiFTED, Billboard Philippines) carries it to the ring, with the SB19 relationship as the Philippine angle; Thai radio (EFM 94.0, Green Wave 106.5) and the variety shows visited in February carry the sound. The Thai partner runs point on Thai media; Crowd Control Digital supplies the story, the data and the assets.",
          tactics: [
            "Thai general and lifestyle press: Sanook, Thairath, Kapook, GQ Thailand, Time Out Bangkok, Vogue Thailand",
            "Regional music press: Bandwagon Asia, LiFTED, Billboard Philippines, GMA and Philstar entertainment",
            "Thai radio and variety: EFM 94.0, Green Wave 106.5, a return visit to one February show with MILLI",
            "K-pop press floor maintained: Soompi, allkpop and the fan wire",
          ],
        },
        {
          label: "C",
          title: "Live Tie-In",
          objective: "Attach the record to a live Thai moment inside the window.",
          strategy: "MILLI headlines Bangkok on October 3 with Manila still to be announced. If the release lands before October 3, a guest appearance at her Bangkok show is the single most valuable live moment available to the campaign, announced to the owned list first and shot for the process and two-hander assets. If the release lands later, the next Bangkok moment on either artist's calendar carries the same plan. Either way the live moment is built with capture at the door.",
        },
      ],
      footnote: "DSP and press are operational workstreams inside the campaign fee; they carry no media cost. Outreach follows story-readiness and the release date.",
    },

    // ===================================================================
    // 13. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "13",
      navLabel: "Partners",
      title: "Partner-Led Workstreams",
      philosophy: "Workstreams the artist team and its partners own directly. Crowd Control Digital coordinates and amplifies; the partners run point.",
      intro: "The plan is built to slot into the infrastructure already around the artist, not to duplicate it. Management and U.S. coordination run through Transparent Arts; music and creative direction stay with the artist and his label; Thailand activation stays with the Thai partner; the feature artist's channels stay with her team; distribution and DSP tooling stay with the distributor.",
      subBlocks: [
        {
          label: "A",
          title: "Transparent Arts and DNA Records",
          objective: "Management, release timing, music, music video and creative direction remain with the artist team; the plan is built to the record as delivered.",
          strategy: "The release date, the final mix, the music video and the artist's calendar set the campaign clock. Crowd Control Digital supplies the asset briefs, the shoot list for the ten-asset system, the paid and creator programs and the weekly readout; the artist team approves creative and owns the artist's channels.",
        },
        {
          label: "B",
          title: "The Thai Partner",
          objective: "Thai media, brand partnerships, events and Thai-language communications stay with the Thai management partner.",
          strategy: "The partner runs the Thai press and variety outreach, any brand tie-in, and any live or retail moment in Thailand; the plan supplies the story, the data and the assets, and adds the co-owned capture mechanic to every activation.",
        },
        {
          label: "C",
          title: "MILLI's Team",
          objective: "The feature artist's channels, editorial conversations, press and tour moments remain with her team.",
          strategy: "The campaign asks for four things: her participation in the two-hander and transition assets, the record in her own posting cadence during release week, the record in her editorial and press conversations, and a guest moment on her tour if the calendar allows. Everything else is offered, not required.",
        },
        {
          label: "D",
          title: "The Distributor",
          objective: "Editorial pitching, pre-save tooling, DSP marketing products and delivery stay with the distributor.",
          strategy: "The distributor's regional teams submit the editorial pitch, the pre-save page runs on its tooling, and Spotify Marquee in Indonesia, the Philippines and Singapore runs through its campaign access on the Expanded tier. Crowd Control Digital writes the pitch packet and the follow-up and supplies the consumption data.",
        },
      ],
      footnote: "Crowd Control Digital provides strategy, coordination, execution and reporting in its four verticals; partners execute and approve partner-side workstreams.",
    },

    // ===================================================================
    // 14. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "14",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "How the budget deploys across a ten-week window keyed to release week (R). Pre-release stands up the infrastructure, the assets and the creator briefings and warms the audience. Release week turns everything on at test weight. The sustain phase, where every previous era actually peaked, carries the largest share and scales what the first week proved. Phase figures show Foundation first and Expanded second.",
      totalBudget: "$15,000 Foundation / $20,000 Expanded, all to market",
      phases: [
        {
          label: "Pre-Release",
          window: "R-3 to R-1 / 3 weeks",
          focus: "Infrastructure first: pixels, the gated pre-save page, the CRM and the co-owned capture mechanic go live. Assets are produced to the ten-asset spec and localized. Creators are briefed and contracted. Paid warms the Thai audience on the teaser and the pre-save at test weight and starts building retargeting pools. Editorial pitch submitted.",
          budget: "$3,000 / $4,500",
          tactics: [
            "Conversion infrastructure setup: $1,500 / $1,500",
            "Localization, Thai-script cards and subtitles; second content day on Expanded: $1,000 / $2,000",
            "Paid warm-up on the teaser and pre-save, Thailand only: $500 / $1,000",
          ],
        },
        {
          label: "Release Week",
          window: "R / 1 week",
          focus: "Thailand paid opens across TikTok, Meta and YouTube on the release assets at 30% weight and scales inside the week on data. Creator wave one drops the MILLI-entrance transition. The release-day CRM drop goes out. New Music Friday push across Thailand and the ring; Marquee opens in Indonesia, the Philippines and Singapore on Expanded.",
          budget: "$5,500 / $7,500",
          tactics: [
            "Thailand paid media, test then scale: $3,000 / $3,500",
            "Creator wave one, 10 / 18 creators: $2,000 / $2,750",
            "Southeast Asia ring, including Marquee on Expanded: $500 / $1,250",
          ],
        },
        {
          label: "Sustain",
          window: "R+1 to R+6 / 6 weeks",
          focus: "The window where every previous era peaked. Paid scales on the winning assets and audiences, Spark Ads run on the top creator posts, creator wave two drops the hook and outfit-switch formats, the week-two editorial follow-up carries live consumption data, the MILLI-verse unlock goes to the list, and the live tie-in lands if the calendar allows. Weekly readouts drive reallocation.",
          budget: "$6,500 / $8,000",
          tactics: [
            "Thailand paid media at scale, weighted to weeks two through six: $3,500 / $3,500",
            "Creator wave two, 10 / 17 creators, plus Spark rights on Expanded: $2,000 / $2,750",
            "Southeast Asia ring: $500 / $1,750",
            "Additional localization and asset refreshes: $500 / $0",
          ],
        },
      ],
      footnote: "Phase budgets are directional; Crowd Control Digital reallocates between line items inside the tier based on weekly performance signals. Calendar dates lock when the release date does.",
    },

    // ===================================================================
    // 15. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "15",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "A ten-week window keyed to release week. Infrastructure and assets are built in the three weeks before release; paid and creators launch in release week at test weight; the sustain phase runs six weeks because that is where this artist's eras have always peaked. Calendar dates lock when the release date does. If the release lands before October 3, MILLI's Bangkok show falls inside the window as a live moment.",
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
          name: "Infrastructure",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium", label: "LIVE" },
            { weekIndex: 4, intensity: "high", label: "DROP" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium", label: "UNLOCK" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
          ],
        },
        {
          name: "Creative & Cadence",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BRIEF" },
            { weekIndex: 2, intensity: "high", label: "SHOOT" },
            { weekIndex: 3, intensity: "high", label: "TEASE" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "medium" },
          ],
        },
        {
          name: "Creator Seeding",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "BRIEF" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "WAVE 1" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high", label: "WAVE 2" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "low" },
          ],
        },
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
          name: "DSP & Press",
          cells: [
            { weekIndex: 1, intensity: "high", label: "PITCH" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "NMF" },
            { weekIndex: 5, intensity: "high", label: "FOLLOW-UP" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
          ],
        },
        {
          name: "Partner Moments",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "ALIGN" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "MILLI POSTS" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "LIVE (TBD)" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "REVIEW" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Foundation build",
          items: [
            "Pixels installed on the site and the landing page; gated pre-save page built in Thai and English; CRM selected and stood up; co-owned capture mechanic agreed with the Thai partner.",
            "Asset briefs and shoot list for the ten-asset system delivered; MILLI's participation in the two-hander and transition assets confirmed.",
            "Editorial pitch packet submitted through the distributor; Thai and regional press list locked with the Thai partner.",
            "Partner alignment call: release date, asset calendar, MILLI's posting commitments, live-moment options.",
          ],
        },
        {
          weekIndex: 2,
          title: "Shoot and creator briefing",
          items: [
            "Content day: two-hander, direct address, process cut, outfit switch and the Bangkok-shot asset captured; second content day on Expanded.",
            "Creator wave one contracted and briefed on the MILLI-entrance transition template and the Thai text treatment.",
            "Bio links across every platform switched to the pre-save page, including X.",
          ],
        },
        {
          weekIndex: 3,
          title: "Tease and warm",
          items: [
            "Teaser assets post at the three-a-week cadence; paid warm-up runs on the teaser and pre-save in Thailand at test weight, building retargeting pools.",
            "Localized cuts delivered: Thai-script title and end cards on every regional asset.",
            "Pre-save capture readout: conversion rate and cost per pre-save baselined.",
          ],
        },
        {
          weekIndex: 4,
          title: "Release week",
          items: [
            "Thailand paid opens across TikTok, Meta and YouTube at 30% weight on the release assets; scales inside the week on cost per view and click.",
            "Creator wave one drops; the MILLI-entrance sound cut goes live as the official creator sound.",
            "Release-day CRM drop; MILLI posts the record on her own channels; New Music Friday push across Thailand and the ring; Marquee opens in Indonesia, the Philippines and Singapore on Expanded.",
          ],
        },
        {
          weekIndex: 5,
          title: "Scale on data",
          items: [
            "Paid scales on the winning assets and audiences; Spark Ads open on the top creator posts on Expanded; ring flights open at full weight on Expanded.",
            "Week-two editorial follow-up carries live Thai consumption and creator data to the discovery lists.",
            "First full-funnel readout: Thai listeners, followers, captures, creator videos, cost per action against the worst, expected and best cases.",
          ],
        },
        {
          weekIndex: 6,
          title: "Wave two",
          items: [
            "Creator wave two drops the hook and outfit-switch formats on the creators whose first posts over-indexed; Philippine lane opens on Expanded.",
            "MILLI-verse content unlock goes to the CRM list.",
            "Instagram-first tests begin on the strongest TikTok assets.",
          ],
        },
        {
          weekIndex: 8,
          title: "Peak window",
          items: [
            "The week this artist's eras have historically peaked: paid held at full weight, creative refreshed from the winners, retargeting pools converted to pre-save and follow actions.",
            "Live tie-in executes if the calendar allowed it, announced to the list first and shot for content.",
            "Mid-window review against every target range; reallocation across lines inside the tier.",
          ],
        },
        {
          weekIndex: 10,
          title: "Close-out and next cycle",
          items: [
            "Full-window readout: Thai and total listeners, followers, list size, creator volume, editorial holds, press, cost per action, and the post-cycle floor against the 350K target.",
            "Infrastructure transitions to always-on posture: the list, the pixels and the CRM keep compounding between cycles.",
            "Next-cycle recommendation delivered, including the live-moment and brand-partner opportunities the window surfaced.",
          ],
        },
      ],
      footnote: "Sprints run in one-week cycles with written weekly readouts. Live moments follow both artists' calendars. The next release authorizes a fresh campaign window on this same structure.",
    },

    // ===================================================================
    // 16. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "16",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro: "Two tiers for the Night Light cycle. The media budget deploys entirely to market, creators and infrastructure. The Crowd Control Digital campaign fee covers strategy, paid media management across every platform and market, creator program management, infrastructure build, DSP pitch writing, press coordination and the weekly readout, and is billed separately from the media budget.",
      ccdNote: "The campaign fee is shown alongside each tier and billed separately. Every dollar in the media budget reaches the market.",
      breakdownLabel: "Media Budget by Line",
      deployableLabel: "Total Including Campaign Fee",
      tiers: [
        {
          label: "Foundation",
          budget: "$15,000",
          name: "Thailand-First Launch",
          tagline: "Ten weeks. Thailand paid across three channels, a 20-creator Thai wave, a light Southeast Asia ring, and the capture layer built for the first time.",
          deployable: "$18,000",
          feeBreakdown: {
            retainer: "$3,000",
            retainerDetail: "Flat campaign fee, ten-week window, billed separately",
            mediaManagementLabel: "Media Budget",
            mediaManagement: "$15,000",
            mediaManagementDetail: "Deploys entirely to market, creators and infrastructure",
          },
          breakdown: [
            { vertical: "Thailand paid media (TikTok, Meta, YouTube)", amount: "$7,000" },
            { vertical: "Thai creator seeding wave (20 creators)", amount: "$4,000" },
            { vertical: "Southeast Asia ring (retargeting and lookalike)", amount: "$1,000" },
            { vertical: "Conversion infrastructure (pre-save, pixels, CRM)", amount: "$1,500" },
            { vertical: "Localization (Thai cards, subtitles, edits)", amount: "$1,500" },
          ],
        },
        {
          label: "Expanded",
          budget: "$20,000",
          name: "Thailand Plus the Southeast Asia Ring",
          tagline: "Ten weeks. Thailand paid at full weight, a 35-creator wave with usage rights, a full ring including Spotify Marquee in three markets, and a second content day.",
          featured: true,
          deployable: "$24,000",
          feeBreakdown: {
            retainer: "$4,000",
            retainerDetail: "Flat campaign fee, ten-week window, billed separately",
            mediaManagementLabel: "Media Budget",
            mediaManagement: "$20,000",
            mediaManagementDetail: "Deploys entirely to market, creators and infrastructure",
          },
          breakdown: [
            { vertical: "Thailand paid media (TikTok, Meta, YouTube)", amount: "$8,000" },
            { vertical: "Creator wave (35 creators, Spark Ads rights)", amount: "$5,500" },
            { vertical: "Southeast Asia ring (incl. Marquee ID, PH, SG)", amount: "$3,000" },
            { vertical: "Conversion infrastructure (pre-save, pixels, CRM)", amount: "$1,500" },
            { vertical: "Localization plus second content day", amount: "$2,000" },
          ],
        },
      ],
      footnote: "Each release cycle gets its own authorization. The next single triggers a fresh budget call on this structure with the infrastructure already in place. Third-party tool subscriptions (CRM, pre-save tooling) are included in the infrastructure line for the campaign window.",
    },
  ],
};
