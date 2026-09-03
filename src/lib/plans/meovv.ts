import type { StrategyPlanData } from "../plan-context";

export const meovvPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/meovv/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "meovv-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Brand Audit & Growth Strategy",
    title: "MEOVV",
    subtitle: "An audit of a fandom that has already formed, and the business that has not yet been built around it.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/meovv/meovv-group.jpg",
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
      subtitle: "Two years in, MEOVV has built the hardest thing to build and the easiest thing to monetize. It has not yet built the place to monetize it.",
      body: [
        "MEOVV converts attention into commitment better than any act of comparable scale in its debut class. The Spotify follower-to-listener ratio, the cleanest available measure of how much of a passing audience actually signs up, sits at 0.408 against 4.95M monthly listeners. KiiiKiii runs 0.239 at a similar listener count. Hearts2Hearts runs 0.313 at 60% more listeners. KATSEYE, at nearly eight times the scale, runs 0.337. Two smaller acts in the set do convert faster, ALLDAY PROJECT at 0.468 and izna at 0.423, at 39% and 31% of MEOVV's listener scale. The ratio has climbed almost every month since debut, from 0.066 in September 2024, and across 720 daily transitions the follower count has not fallen once.",
        "The commitment is real and it is priced in everywhere a fan is allowed to spend. The lightstick sold out. The paid membership sold out. First-week physical sales rose from 255,005 to 301,725 between the two EPs, a group record. What does not exist is the surface that turns any of that into a repeatable business: no concert and no fan meeting in 727 days, no ticketed headline show anywhere, an official site that is still a holding page two years in, a US store that no owned surface links to, and the single email capture that does exist running on the distributor's consent rather than the artist's. This audit measures each of those gaps precisely, then prescribes the capture layer that closes them.",
      ],
      supports: {
        heading: "What This Document Covers",
        items: [
          "Market position against the 2024-2026 girl group class, tiered on live consumption and conversion data",
          "Consumption analysis: catalog concentration, launch behavior, the shrinking release halo, and where the streams actually come from",
          "Content intelligence: 362 owned posts and 566 competitor posts, classified and read against their own performance",
          "Infrastructure audit: every owned surface checked one by one for the ability to reach a fan directly",
          "The capture strategy: four execution verticals, partner-led workstreams, and a 12-week timeline",
        ],
      },
      goals: {
        heading: "12-Month Targets",
        items: [
          "A first ticketed MEOVV headline show, and a first fan concert in the markets that already carry the listening",
          "A first-party audience list the artist controls, sized against the 2.02M Spotify followers who have already opted in once",
          "Fandom conversion: ratio from 0.408 toward 0.60+, the band the class's established acts occupy",
          "Spotify monthly listeners from 4.95M to 8M+ during active cycles, with the release halo restored above 1.5x",
          "Short form: median post from 633K toward 1.5M on a rebalanced mix and a daily cadence",
          "Physicals: first week above 350K on the next cycle, with a US retail lane that is linked from owned channels",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "24 Months of Spotify Consumption",
          subtitle: "Weekly monthly-listener and follower readings since debut. Listeners cycle with releases. Followers have not declined across any of 720 daily transitions.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "9/9/24", y: 217960 }, { x: "9/16/24", y: 703629 }, { x: "9/23/24", y: 1246800 }, { x: "9/30/24", y: 1788362 }, { x: "10/7/24", y: 2152165 }, { x: "10/14/24", y: 2381651 }, { x: "10/21/24", y: 2556147 }, { x: "10/28/24", y: 2689598 }, { x: "11/4/24", y: 2785452 }, { x: "11/11/24", y: 2799307 }, { x: "11/18/24", y: 2733450 }, { x: "11/25/24", y: 2853628 }, { x: "12/2/24", y: 3213184 }, { x: "12/9/24", y: 3502815 }, { x: "12/16/24", y: 3718219 }, { x: "12/23/24", y: 3752618 }, { x: "12/30/24", y: 3492139 }, { x: "1/6/25", y: 3239925 }, { x: "1/13/25", y: 2970267 }, { x: "1/20/25", y: 2786585 }, { x: "1/27/25", y: 2686839 }, { x: "2/3/25", y: 2616836 }, { x: "2/10/25", y: 2604065 }, { x: "2/17/25", y: 2591788 }, { x: "2/24/25", y: 2527331 }, { x: "3/3/25", y: 2447443 }, { x: "3/10/25", y: 2335767 }, { x: "3/17/25", y: 2188725 }, { x: "3/24/25", y: 2073510 }, { x: "3/31/25", y: 1938500 }, { x: "4/7/25", y: 1799442 }, { x: "4/14/25", y: 1732838 }, { x: "4/21/25", y: 1698155 }, { x: "4/28/25", y: 1701621 }, { x: "5/5/25", y: 2108743 }, { x: "5/12/25", y: 2951543 }, { x: "5/19/25", y: 3755810 }, { x: "5/26/25", y: 4453188 }, { x: "6/2/25", y: 4781282 }, { x: "6/9/25", y: 4838678 }, { x: "6/16/25", y: 4644113 }, { x: "6/23/25", y: 4393306 }, { x: "6/30/25", y: 4246440 }, { x: "7/7/25", y: 4265915 }, { x: "7/14/25", y: 4226303 }, { x: "7/21/25", y: 4204865 }, { x: "7/28/25", y: 4101026 }, { x: "8/4/25", y: 3955719 }, { x: "8/11/25", y: 3947955 }, { x: "8/18/25", y: 3862807 }, { x: "8/25/25", y: 3841736 }, { x: "9/1/25", y: 3778893 }, { x: "9/8/25", y: 3651072 }, { x: "9/15/25", y: 3552052 }, { x: "9/22/25", y: 3421607 }, { x: "9/29/25", y: 3287516 }, { x: "10/6/25", y: 3157628 }, { x: "10/13/25", y: 3099075 }, { x: "10/20/25", y: 3354231 }, { x: "10/27/25", y: 3752196 }, { x: "11/3/25", y: 4052434 }, { x: "11/10/25", y: 4238706 }, { x: "11/17/25", y: 4172693 }, { x: "11/24/25", y: 3920454 }, { x: "12/1/25", y: 3708486 }, { x: "12/8/25", y: 3580688 }, { x: "12/15/25", y: 3547125 }, { x: "12/22/25", y: 3484897 }, { x: "12/29/25", y: 3480882 }, { x: "1/5/26", y: 3477998 }, { x: "1/12/26", y: 3544918 }, { x: "1/19/26", y: 3558542 }, { x: "1/26/26", y: 3543818 }, { x: "2/2/26", y: 3478561 }, { x: "2/9/26", y: 3358846 }, { x: "2/16/26", y: 3268647 }, { x: "2/23/26", y: 3161923 }, { x: "3/2/26", y: 3142815 }, { x: "3/9/26", y: 3132952 }, { x: "3/16/26", y: 3063034 }, { x: "3/23/26", y: 2989645 }, { x: "3/30/26", y: 2885506 }, { x: "4/6/26", y: 2780579 }, { x: "4/13/26", y: 2754423 }, { x: "4/20/26", y: 2712239 }, { x: "4/27/26", y: 2699172 }, { x: "5/4/26", y: 2731190 }, { x: "5/11/26", y: 2802043 }, { x: "5/18/26", y: 2911772 }, { x: "5/25/26", y: 2995123 }, { x: "6/1/26", y: 3069585 }, { x: "6/8/26", y: 3431564 }, { x: "6/15/26", y: 4182476 }, { x: "6/22/26", y: 4656649 }, { x: "6/29/26", y: 4992457 }, { x: "7/6/26", y: 5137923 }, { x: "7/13/26", y: 5010947 }, { x: "7/20/26", y: 5024583 }, { x: "7/27/26", y: 5072081 }, { x: "8/3/26", y: 5165601 }, { x: "8/10/26", y: 5079926 }, { x: "8/17/26", y: 5025037 }, { x: "8/24/26", y: 5001928 }, { x: "8/31/26", y: 4950004 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "9/9/24", y: 43583 }, { x: "9/16/24", y: 79114 }, { x: "9/23/24", y: 99757 }, { x: "9/30/24", y: 118605 }, { x: "10/7/24", y: 137976 }, { x: "10/14/24", y: 155863 }, { x: "10/21/24", y: 171639 }, { x: "10/28/24", y: 189642 }, { x: "11/4/24", y: 205610 }, { x: "11/11/24", y: 221268 }, { x: "11/18/24", y: 236447 }, { x: "11/25/24", y: 265961 }, { x: "12/2/24", y: 294413 }, { x: "12/9/24", y: 319521 }, { x: "12/16/24", y: 342590 }, { x: "12/23/24", y: 362055 }, { x: "12/30/24", y: 377528 }, { x: "1/6/25", y: 395121 }, { x: "1/13/25", y: 410394 }, { x: "1/20/25", y: 422660 }, { x: "1/27/25", y: 437383 }, { x: "2/3/25", y: 451049 }, { x: "2/10/25", y: 463407 }, { x: "2/17/25", y: 476326 }, { x: "2/24/25", y: 488515 }, { x: "3/3/25", y: 501008 }, { x: "3/10/25", y: 513340 }, { x: "3/17/25", y: 523928 }, { x: "3/24/25", y: 534585 }, { x: "3/31/25", y: 544298 }, { x: "4/7/25", y: 553761 }, { x: "4/14/25", y: 563469 }, { x: "4/21/25", y: 574064 }, { x: "4/28/25", y: 584954 }, { x: "5/5/25", y: 610014 }, { x: "5/12/25", y: 638119 }, { x: "5/19/25", y: 666732 }, { x: "5/26/25", y: 689779 }, { x: "6/2/25", y: 711276 }, { x: "6/9/25", y: 733364 }, { x: "6/16/25", y: 753453 }, { x: "6/23/25", y: 773323 }, { x: "6/30/25", y: 791726 }, { x: "7/7/25", y: 808778 }, { x: "7/14/25", y: 824768 }, { x: "7/21/25", y: 844887 }, { x: "7/28/25", y: 859010 }, { x: "8/4/25", y: 879914 }, { x: "8/11/25", y: 898088 }, { x: "8/18/25", y: 916174 }, { x: "8/25/25", y: 934617 }, { x: "9/1/25", y: 954197 }, { x: "9/8/25", y: 966176 }, { x: "9/15/25", y: 981474 }, { x: "9/22/25", y: 996776 }, { x: "9/29/25", y: 1010428 }, { x: "10/6/25", y: 1024611 }, { x: "10/13/25", y: 1039793 }, { x: "10/20/25", y: 1061486 }, { x: "10/27/25", y: 1080022 }, { x: "11/3/25", y: 1101064 }, { x: "11/10/25", y: 1117317 }, { x: "11/17/25", y: 1134492 }, { x: "11/24/25", y: 1152681 }, { x: "12/1/25", y: 1171144 }, { x: "12/8/25", y: 1199614 }, { x: "12/15/25", y: 1221932 }, { x: "12/22/25", y: 1240862 }, { x: "12/29/25", y: 1264004 }, { x: "1/5/26", y: 1286658 }, { x: "1/12/26", y: 1307846 }, { x: "1/19/26", y: 1327744 }, { x: "1/26/26", y: 1348556 }, { x: "2/2/26", y: 1365914 }, { x: "2/9/26", y: 1383645 }, { x: "2/16/26", y: 1401025 }, { x: "2/23/26", y: 1418293 }, { x: "3/2/26", y: 1436776 }, { x: "3/9/26", y: 1454020 }, { x: "3/16/26", y: 1470644 }, { x: "3/23/26", y: 1492383 }, { x: "3/30/26", y: 1509501 }, { x: "4/6/26", y: 1527681 }, { x: "4/13/26", y: 1545054 }, { x: "4/20/26", y: 1563292 }, { x: "4/27/26", y: 1580013 }, { x: "5/4/26", y: 1594893 }, { x: "5/11/26", y: 1612150 }, { x: "5/18/26", y: 1630484 }, { x: "5/25/26", y: 1650307 }, { x: "6/1/26", y: 1668898 }, { x: "6/8/26", y: 1695468 }, { x: "6/15/26", y: 1716862 }, { x: "6/22/26", y: 1743919 }, { x: "6/29/26", y: 1767850 }, { x: "7/6/26", y: 1788916 }, { x: "7/13/26", y: 1816682 }, { x: "7/20/26", y: 1844407 }, { x: "7/27/26", y: 1875007 }, { x: "8/3/26", y: 1900159 }, { x: "8/10/26", y: 1926364 }, { x: "8/17/26", y: 1956112 }, { x: "8/24/26", y: 1986390 }, { x: "8/31/26", y: 2018947 },
              ],
            },
          ],
          markers: [
            { x: "9/9/24", label: "MEOW" },
            { x: "4/28/25", label: "HANDS UP" },
            { x: "10/13/25", label: "BURNING UP" },
            { x: "6/1/26", label: "BITE NOW" },
          ],
          tall: true,
          source: "Chartmetric, weekly readings, Sep 9 2024 to Aug 31 2026",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify daily and weekly chart archives, Hanteo and Circle published tallies, platform data, and a dedicated analysis of 1,129 short-form posts.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Two numbers place an act: how many people listen, and how many of them stay. MEOVV sits mid-table on the first and near the top of its class on the second.",
      intro: "The comparison set spans the acts MEOVV is measured against commercially and creatively: the 2024-2026 debut class it competes with directly, the established fourth-generation groups that set the ceiling, and the global-format outlier. Spotify monthly listeners and the follower-to-listener ratio (Chartmetric, September 2026) are the spine. The notes carry what each peer does well and what MEOVV can take from the contrast.",
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
                  monthlyListeners: "37.7M Monthly Listeners",
                  instagram: "Ratio 0.337",
                  reference: "4.67B career Spotify streams",
                  note: "The category's US ceiling-setter and the only peer whose posting schedule is timed to American hours rather than Korean ones. Proof that a group in this class can be a US mainstream act, and proof of how much infrastructure that takes.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "21.4M Monthly Listeners",
                  instagram: "Ratio 0.359",
                  reference: "2.97B career Spotify streams",
                  note: "The class benchmark for sustained release behavior. Their 2026 title track was still running at 1.04x its launch week twelve weeks out, a curve MEOVV has produced once and not repeated.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "20.4M Monthly Listeners",
                  instagram: "Ratio 0.547",
                  reference: "Established fourth-generation act",
                  note: "Scale and conversion together. The ratio band MEOVV should be aiming at over the next twelve months, reached with a full touring and retail apparatus behind it.",
                },
              ],
            },
            {
              label: "Tier 2 / The Contested Middle",
              artists: [
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "7.96M Monthly Listeners",
                  instagram: "Ratio 0.313",
                  reference: "699M career Spotify streams",
                  note: "Debuted after MEOVV and has already passed them on career streams. Posts on 96% of days against MEOVV's 33%. The clearest evidence in the set that cadence compounds.",
                },
                {
                  name: "BABYMONSTER",
                  monthlyListeners: "7.69M Monthly Listeners",
                  instagram: "Ratio 1.141",
                  reference: "YG lineage, world tour completed",
                  note: "The nearest structural comparison inside the same corporate family, and the one that converted a similar audience into a touring business. The ratio above 1.0 is what a live cycle does to a fanbase.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "5.76M Monthly Listeners",
                  instagram: "Ratio 1.332",
                  reference: "Arena-scale touring act",
                  note: "16% more monthly listeners than MEOVV and 3.8x the followers. The entire difference is years of ticketed shows converting listeners into a committed base.",
                },
                {
                  name: "MEOVV",
                  monthlyListeners: "4.95M Monthly Listeners",
                  instagram: "Ratio 0.408",
                  reference: "480M career Spotify streams",
                  note: "The highest conversion rate of any act above 2M listeners in the debut class, on a ratio that has climbed almost every month since debut. The listener number is mid-table; the commitment behind it is not.",
                },
                {
                  name: "KISS OF LIFE",
                  monthlyListeners: "4.39M Monthly Listeners",
                  instagram: "Ratio 0.671",
                  reference: "Fourth-generation, touring",
                  note: "Almost identical listener scale to MEOVV with 64% higher conversion, built on a live schedule and a fan-event cadence MEOVV has not started.",
                },
                {
                  name: "KiiiKiii",
                  monthlyListeners: "4.18M Monthly Listeners",
                  instagram: "Ratio 0.239",
                  reference: "225M career Spotify streams",
                  note: "The inverse case. Comparable listeners on less than half the catalog and the weakest conversion in the set, driven by a general-public hit rather than a fandom. MEOVV holds what KiiiKiii is missing.",
                },
              ],
            },
            {
              label: "Tier 3 / The Rookie Field",
              artists: [
                {
                  name: "ALLDAY PROJECT",
                  monthlyListeners: "1.94M Monthly Listeners",
                  instagram: "Ratio 0.468",
                  reference: "2025 debut",
                  note: "The fastest-converting act in the set at 0.468, reached at 39% of MEOVV's listener scale and inside a shorter window. Worth watching as the class's next conversion benchmark.",
                },
                {
                  name: "izna",
                  monthlyListeners: "1.56M Monthly Listeners",
                  instagram: "Ratio 0.423",
                  reference: "Survival-show origin",
                  note: "A survival-show fanbase converts efficiently by construction. Useful as the floor on what conversion alone is worth without listener scale behind it.",
                },
              ],
            },
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              subtitle: "MEOVV sits in the middle of the contested band, ahead of KISS OF LIFE, KiiiKiii and NMIXX, behind Hearts2Hearts, BABYMONSTER and IVE.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "KATSEYE", y: 37714478 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "LE SSERAFIM", y: 20445854 },
                    { x: "NewJeans", y: 13713434 },
                    { x: "aespa", y: 11249284 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "BABYMONSTER", y: 7685700 },
                    { x: "IVE", y: 5758044 },
                    { x: "MEOVV", y: 4962135 },
                    { x: "KISS OF LIFE", y: 4386542 },
                    { x: "KiiiKiii", y: 4179465 },
                    { x: "NMIXX", y: 4115271 },
                    { x: "ALLDAY PROJECT", y: 1940889 },
                    { x: "izna", y: 1559098 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              source: "Chartmetric, Sep 3 2026",
            },
            {
              kind: "hbars",
              title: "Fandom Conversion: Followers per Monthly Listener",
              subtitle: "MEOVV converts better than any act near its scale. The two acts above it that debuted alongside it are a third its size; everything else above it is older, larger and touring.",
              unit: "followers per listener",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "IVE", y: 1.332 },
                    { x: "NMIXX", y: 1.154 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "aespa", y: 1.052 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "KISS OF LIFE", y: 0.671 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "ALLDAY PROJECT", y: 0.468 },
                    { x: "izna", y: 0.423 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KiiiKiii", y: 0.239 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              note: "Ratios above 1.0 belong to established acts with years of touring behind them. Inside the 2024-2026 debut class, MEOVV leads every group with more than 2M monthly listeners. ALLDAY PROJECT and izna convert faster at 1.94M and 1.56M listeners respectively.",
              source: "Chartmetric, Sep 3 2026",
            },
          ],
        },
        {
          label: "B",
          title: "How the Set Splits",
          strategy: "The set divides on one line: whether the act has a live business. Every group converting above 0.5 has toured. Every group converting below 0.4 has not, or has only just started. MEOVV is the highest-converting act on the wrong side of that line, which is the most favorable place in the entire map to be, because the gap is a build rather than a rescue.",
          components: {
            heading: "What the tiering says",
            items: [
              "Listener scale is a function of catalog size and release frequency. MEOVV has 14 tracks. KATSEYE has 38 and ILLIT 64. The listener gap is substantially a catalog gap and closes with output.",
              "Conversion is a function of what a fan is offered after they listen. MEOVV leads every act above 2M listeners in its class here with almost nothing on offer, which is the strongest available evidence that the demand is genuine rather than campaign-driven.",
              "Hearts2Hearts debuted after MEOVV and passed them on career streams. The difference is not creative quality. It is that they post on 96% of days and MEOVV posts on 33%.",
              "KiiiKiii is running higher daily streams today (1.15M) than MEOVV (1.04M) off less than half the catalog. Neither act is being out-produced creatively; MEOVV is being out-published.",
            ],
          },
        },
      ],
      footnote: "Monthly listeners and follower counts: Chartmetric, September 3, 2026. Career stream totals: Spotify catalog aggregates, September 2026. Ratio is Spotify followers divided by Spotify monthly listeners on the same date.",
    },

    // ===================================================================
    // 03. Consumption & Conversion Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption & Conversion Analysis",
      philosophy: "The streaming business is healthy in ways that do not show up on any chart, and fragile in one way that does. Both facts change what the next twelve months should be spent on.",
      intro: "This section reads the catalog from four angles: how conversion has moved over 24 months, where the 480M career streams actually come from, how each release behaves after launch, and what the audience picks when left alone. Sources are Chartmetric daily series and Spotify daily and weekly chart archives. Where chart coverage has gaps, they are treated as gaps and labeled, never as zeros.",
      subBlocks: [
        {
          label: "A",
          title: "Conversion Has Climbed Every Cycle",
          strategy: "The follower-to-listener ratio measures how much of a passing audience commits. MEOVV's has risen from 0.066 at debut to 0.408, and the pattern is the same on every cycle: a release floods in new listeners and the ratio dips mechanically, then climbs higher than it was before as those listeners convert. The April 2026 reading of 0.584, taken in a quiet window between eras, is what the base converts to when no new traffic is arriving.",
          components: {
            heading: "What the curve proves",
            items: [
              "Followers have not declined across any of 720 daily transitions. Not one down day in two years, and the result holds when interpolated readings are excluded.",
              "Each inter-era peak is higher than the last: 0.339 (Apr 2025), 0.584 (Apr 2026). The base is not just growing, it is committing at an increasing rate.",
              "The dips are release effects, not churn. June 2026 fell to 0.348 because listeners arrived faster than they signed up, which is the correct problem to have.",
              "At 2.02M Spotify followers on 4.95M listeners, MEOVV holds twice KiiiKiii's follower count at a comparable listener scale, and more followers than KiiiKiii and ALLDAY PROJECT hold between them.",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "Follower-to-Listener Ratio by Month",
              subtitle: "Every release dips the ratio and every recovery ends higher. The trend line is the fandom forming in public.",
              unit: "followers per listener",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "9/24", y: 0.066 }, { x: "10/24", y: 0.071 }, { x: "11/24", y: 0.093 }, { x: "12/24", y: 0.11 }, { x: "1/25", y: 0.169 }, { x: "2/25", y: 0.201 }, { x: "3/25", y: 0.281 }, { x: "4/25", y: 0.339 }, { x: "5/25", y: 0.149 }, { x: "6/25", y: 0.186 }, { x: "7/25", y: 0.218 }, { x: "8/25", y: 0.25 }, { x: "9/25", y: 0.311 }, { x: "10/25", y: 0.278 }, { x: "11/25", y: 0.313 }, { x: "12/25", y: 0.365 }, { x: "1/26", y: 0.388 }, { x: "2/26", y: 0.456 }, { x: "3/26", y: 0.526 }, { x: "4/26", y: 0.584 }, { x: "5/26", y: 0.544 }, { x: "6/26", y: 0.348 }, { x: "7/26", y: 0.366 }, { x: "8/26", y: 0.408 },
                  ],
                },
              ],
              markers: [
                { x: "4/25", label: "HANDS UP" },
                { x: "10/25", label: "BURNING UP" },
                { x: "6/26", label: "BITE NOW" },
              ],
              source: "Chartmetric daily series, month-end readings, Sep 2024 to Aug 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Audience Picks a Different Single",
          strategy: "The BITE NOW EP now supplies 52.7% of all daily streaming, three months after release. Inside that, the audience has chosen a track the campaign did not. \"Hit 'Em,\" a B-side, runs 261,977 streams a day against the title track \"DDI RO RI\" at 196,280, a 33.5% gap that is widening. On cumulative totals the two are 501,091 streams apart and closing at that rate, so the B-side overtakes the single it was released alongside within days of this document. \"Hit 'Em\" is also outrunning \"HANDS UP,\" the biggest song in the catalog, by 81%.",
          components: {
            heading: "What this changes",
            items: [
              "The next cycle's title-track selection should be tested against streaming behavior, not chosen ahead of it. The audience has now demonstrated a preference twice.",
              "\"Hit 'Em\" is carrying the account's short-form performance as well, appearing in the top-decile posts repeatedly. Content and DSP are agreeing with each other and disagreeing with the plan.",
              "A B-side running as the de facto single with no video budget, no promo cycle and no radio behind it is an argument for reallocating the next release's spend toward whichever track the first two weeks of data pick.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Daily Spotify Streams by Track",
              subtitle: "The B-side leads the catalog. The two BITE NOW singles together supply 43.9% of all daily volume.",
              unit: "streams per day",
              series: [
                {
                  name: "Daily streams",
                  points: [
                    { x: "Hit 'Em", y: 261977 },
                    { x: "DDI RO RI", y: 196280 },
                    { x: "HANDS UP", y: 144386 },
                    { x: "BURNING UP", y: 105339 },
                    { x: "MEOW", y: 88038 },
                    { x: "IN MY HANDS", y: 56146 },
                    { x: "BODY", y: 48647 },
                    { x: "TOXIC", y: 37329 },
                    { x: "DROP TOP", y: 35101 },
                  ],
                },
              ],
              highlightX: ["Hit 'Em"],
              note: "Five catalog tracks below 20,000 daily streams are omitted for legibility. They account for 6.7% of daily volume between them.",
              source: "Spotify catalog aggregates, Aug 31 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The Release Halo Is Shrinking",
          strategy: "A release is worth more than its own streams if it pulls the back catalog up with it. On the HANDS UP cycle the entire existing catalog went to 2.28x within nineteen days, with MEOW up 92%, TOXIC up 165% and BODY up 177%. BURNING UP moved it 1.12x. BITE NOW, the biggest commercial release to date, moved it 1.07x. Artist-level daily streams did rise to 1.04M across the EP, but roughly 95% of that lift is the new tracks themselves rather than catalog reactivation.",
          components: {
            heading: "Why the halo matters more than the launch",
            items: [
              "Catalog reactivation is the compounding part of a release. A 2.28x halo makes every future release worth more; a 1.07x halo means each cycle starts close to flat.",
              "The mechanism that produced the 2025 halo was a song that spread on its own for nineteen days after release. Nothing in the 2026 cycle was given that runway.",
              "Restoring the halo is cheaper than manufacturing a new hit: it means pointing the release moment at the catalog rather than only at the new single.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Back-Catalog Lift by Release Cycle",
              subtitle: "How much the existing catalog rose during each release window. The trend is the finding.",
              unit: "multiple of pre-release catalog rate",
              series: [
                {
                  name: "Catalog lift",
                  points: [
                    { x: "HANDS UP (Apr 2025)", y: 2.28 },
                    { x: "BURNING UP (Oct 2025)", y: 1.12 },
                    { x: "BITE NOW (Jun 2026)", y: 1.07 },
                  ],
                },
              ],
              highlightX: ["HANDS UP (Apr 2025)"],
              source: "Spotify catalog aggregates. Release windows differ in length, so the multiples are directional rather than strictly like-for-like.",
            },
            {
              kind: "line",
              title: "Weekly Streams as a Multiple of Launch Week",
              subtitle: "A song above 1.0 after launch is still spreading. HANDS UP did it once. Peers are doing it now.",
              unit: "multiple of week 1",
              series: [
                {
                  name: "MEOVV / HANDS UP",
                  points: [
                    { x: "Wk 1", y: 1.0 }, { x: "Wk 4", y: 1.18 }, { x: "Wk 8", y: 0.55 }, { x: "Wk 12", y: 0.55 },
                  ],
                },
                {
                  name: "ILLIT / It's Me",
                  points: [
                    { x: "Wk 1", y: 1.0 }, { x: "Wk 4", y: 1.1 }, { x: "Wk 8", y: 1.08 }, { x: "Wk 12", y: 1.04 },
                  ],
                },
                {
                  name: "KiiiKiii / 404",
                  points: [
                    { x: "Wk 1", y: 1.0 }, { x: "Wk 4", y: 1.51 }, { x: "Wk 8", y: 1.41 }, { x: "Wk 12", y: 0.95 },
                  ],
                },
                {
                  name: "KATSEYE / PINKY UP",
                  points: [
                    { x: "Wk 1", y: 1.0 }, { x: "Wk 4", y: 0.62 }, { x: "Wk 8", y: 0.48 }, { x: "Wk 12", y: 0.39 },
                  ],
                },
              ],
              note: "HANDS UP peaked at 827,555 streams a day on day 19 and ran week 4 at 1.18x its launch week. It is the only MEOVV song to date that grew after launch.",
              source: "Spotify catalog archives, weekly reconstruction. Intervals wider than 30 days are interpolated and treated as directional.",
            },
          ],
        },
        {
          label: "D",
          title: "This Act Does Not Run on Charts",
          strategy: "As of September 1, 2026, MEOVV appears on zero Spotify daily charts anywhere in the world, and has done since a single Taiwan entry on August 14. On the same days the catalog is streaming 1.04M times daily. Across the group's entire history, charted territory streams account for 29.4M of 480.4M career streams, or 6.11%. Almost 94% of everything MEOVV has ever streamed happened outside any chart.",
          components: {
            heading: "The operational reading",
            items: [
              "Chart position is not a useful KPI for this act and should not be used to judge a campaign's performance. Streams, followers and first-party signups should.",
              "Where MEOVV does chart, it charts well and it charts long: HANDS UP reached No. 3 on the Korean Spotify daily chart on two separate occasions, spent 225 days on that chart and 21 days inside the top ten, and reached No. 7 in Taiwan across 201 days. The Korean audience is real and the chart record proves it.",
              "MEOVV has never charted in Indonesia, the Philippines, Thailand, the United States or Australia, despite those five markets carrying roughly 2.0M monthly listeners between them. The listening is happening entirely off-chart in exactly the territories with no promotional presence.",
              "An act that grows without chart support grows through discovery surfaces and social. That is the machine worth funding, because it is the one that already works.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Monthly Listeners by Market",
              subtitle: "Malaysia leads, the United States is second, and five of the top eight markets have no MEOVV live or promotional footprint of any kind.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "Malaysia", y: 778210 },
                    { x: "United States", y: 687252 },
                    { x: "Indonesia", y: 488423 },
                    { x: "Philippines", y: 383868 },
                    { x: "Australia", y: 254581 },
                    { x: "Taiwan", y: 197482 },
                    { x: "Japan", y: 162268 },
                    { x: "Thailand", y: 147888 },
                    { x: "United Kingdom", y: 126761 },
                    { x: "Poland", y: 126149 },
                    { x: "Singapore", y: 106382 },
                  ],
                },
              ],
              highlightX: ["Malaysia", "United States"],
              note: "Spotify under-represents Korea, where domestic listening runs through Melon, Genie and FLO. The Korean audience is measured on the domestic charts instead, where HANDS UP reached No. 3 and held 225 days.",
              source: "Chartmetric, Sep 3 2026",
            },
            {
              kind: "bars",
              title: "Career Spotify Streams vs the Class",
              subtitle: "MEOVV holds 2.1x KiiiKiii's career catalog and is currently being outrun by them on daily volume.",
              unit: "career streams",
              series: [
                {
                  name: "Career streams",
                  points: [
                    { x: "KATSEYE", y: 4669738668 },
                    { x: "ILLIT", y: 2971011552 },
                    { x: "Hearts2Hearts", y: 698941244 },
                    { x: "MEOVV", y: 480365748 },
                    { x: "KiiiKiii", y: 224958442 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              source: "Spotify catalog aggregates, Aug 31 2026 for MEOVV, Sep 2 2026 for peers",
            },
          ],
        },
      ],
      footnote: "Methodology: daily stream figures are observed point measurements. Weekly retention multiples are reconstructed from cumulative catalog totals and are interpolated between observations; intervals wider than 30 days are labeled directional. Chart-territory stream totals cover only the periods a song was on a national daily chart and therefore understate true volume, which is the point being made in block D.",
    },

    // ===================================================================
    // 04. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "Audience & Targeting",
      intro: "The profile below is built from Chartmetric platform data and MEOVV's Instagram audience statistics, pulled September 3, 2026. It sets the initial paid targeting, the owned-channel posting clock, and the market order for the live build. Splits refine once pixel data accumulates in the first weeks of paid activity.",
      thesis: "A young, heavily female, Asia-Pacific-centered audience with a large and completely unserved American second market. Target the Asia-Pacific base as the core and the United States as the expansion, and stop treating them as the same audience on the same schedule.",
      metrosLabel: "Priority Markets",
      metros: [
        { name: "Kuala Lumpur" },
        { name: "Taipei" },
        { name: "Bangkok" },
        { name: "Singapore" },
        { name: "Jakarta" },
        { name: "Manila / Quezon City", tier: "secondary" },
        { name: "Los Angeles", tier: "secondary" },
        { name: "Sydney", tier: "secondary" },
        { name: "Tokyo", tier: "secondary" },
        { name: "Seoul", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 12 },
        { bracket: "18-24", weight: 51 },
        { bracket: "25-34", weight: 33 },
        { bracket: "35+", weight: 4 },
      ],
      genderDistribution: { female: 72, male: 28 },
      similarArtists: [
        "KiiiKiii",
        "Hearts2Hearts",
        "ILLIT",
        "KATSEYE",
        "BABYMONSTER",
        "ALLDAY PROJECT",
        "KISS OF LIFE",
        "izna",
      ],
      genres: ["K-Pop", "East Asia Pop", "Dance-Pop", "Pop"],
      psychographics: [
        {
          label: "What this audience already does",
          items: [
            "Follows on Spotify at a higher rate than any peer that debuted alongside them, without being asked to",
            "Buys physical product in rising volume across two release cycles, with no US-linked purchase path",
            "Sold out both the lightstick and the paid membership, the only two commitment products ever offered",
            "Finds and elevates album tracks the campaign did not push, twice",
          ],
        },
        {
          label: "What it has never been offered",
          items: [
            "A ticket to anything, anywhere, in two years",
            "Any way to reach the group directly that is not a pop-up on a store no owned channel links to",
            "A merchandise line, a lightstick or a membership reachable from a United States address without a reseller",
            "A reason to return to any owned surface between comebacks",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "Consumption is Asia-Pacific-weighted and the posting clock already matches it",
          platforms: ["TikTok", "Instagram"],
          implication: "Posts land between 6pm and 8pm Korean time, which is early evening across Malaysia, Indonesia, the Philippines and Australia. This is working and should be kept.",
        },
        {
          behavior: "The United States is market No. 2 at 687K listeners and is served at 2am to 4am Pacific",
          platforms: ["TikTok", "Instagram", "YouTube"],
          implication: "A second daily posting slot on US hours is the single cheapest reach gain available. KATSEYE, the class's US leader, schedules on Pacific time and nothing else in the set does.",
        },
        {
          behavior: "Identical posts earn roughly 1.6x more on Instagram than TikTok across 119 matched pairs",
          platforms: ["Instagram"],
          implication: "Instagram is treated as a mirror of TikTok. It is outperforming as the mirror, which means it is being under-resourced as a primary channel.",
        },
        {
          behavior: "Five of the top eight listening markets have no live or promotional footprint",
          platforms: ["Spotify"],
          implication: "Malaysia, Indonesia, the Philippines, Thailand and Australia carry roughly 2.05M monthly listeners between them and have never received a show, a fan event or a retail moment.",
        },
      ],
      platformSignals: [
        {
          platform: "Spotify",
          note: "4.95M monthly listeners against 2.02M followers, a 0.408 ratio that leads every act above 2M listeners in the debut class. Malaysia is market No. 1 at 778K and the United States is No. 2 at 687K. Zero chart placements worldwide, and 94% of career streams earned off-chart.",
        },
        {
          platform: "TikTok",
          note: "3.2M followers, 811 videos, 149.5M likes. Median post 633K views. The account goes dark for roughly half the calendar and then publishes in batches of up to ten, against peers who post near-daily.",
        },
        {
          platform: "Instagram",
          note: "3.12M followers. Median reel 1.15M views, roughly 1.8x the TikTok median on largely the same content and an almost identical follower base. Audience is 72.2% female, with 83% aged 18 to 34 and 12.5% aged 13 to 17.",
        },
        {
          platform: "YouTube",
          note: "1.57M subscribers, 794M channel views, 29.9M monthly views. The catalog's video library is substantial and is the surface most likely to carry a US-hours release moment.",
        },
      ],
      footnote: "Age and gender: Instagram audience statistics via Chartmetric, September 3, 2026. Markets are drawn from the current Spotify top-ten listening cities, with Los Angeles carried up as the United States entry point and Bandung folded into the Indonesian market. Seoul is included as a priority market on the strength of the domestic chart record rather than Spotify share, since Korean listening runs primarily through domestic platforms.",
    },

    // ===================================================================
    // 05. Content Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Content",
      title: "Content Intelligence / 1,129 Posts, Read Against Their Own Results",
      intro: "Crowd Control Digital classified 1,129 short-form posts and read every one against its own performance: 362 MEOVV TikTok posts and 200 Instagram reels, plus 567 recent posts from KATSEYE, ILLIT, Hearts2Hearts and KiiiKiii computed the same way so the numbers are comparable. Two hypotheses were tested and failed, and both are reported below alongside the six that held.",
      clientQuestion: {
        attribution: "The question this analysis answers",
        question: "MEOVV's median post reaches a fraction of what the class reaches. How much of that is audience size, and how much is a fixable operating pattern?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "362 TikTok posts from @meovv_official covering May 28, 2025 to September 3, 2026, and 200 Instagram reels from @meovv covering March 21 to September 3, 2026, each with full engagement data. Competitor sets are the most recent 150 TikTok posts from each of KATSEYE, ILLIT, Hearts2Hearts and KiiiKiii, of which 567 carried usable view data.",
        },
        {
          label: "Classification",
          value: "Every post assigned a content lane by a priority cascade over caption text, hashtags, mentions and duration. Posts matching no rule are reported as unclassified rather than forced into a lane, which is 23.2% of the TikTok corpus.",
        },
        {
          label: "Performance join",
          value: "Every post carries its own platform metrics: views, likes, comments, shares, saves and within-account percentile. Findings are read against outcomes rather than in isolation, and all central tendencies are medians.",
        },
        {
          label: "Hypotheses tested and rejected",
          value: "Two prior assumptions failed against the data and are not used anywhere in this document: that caption language predicts performance, and that MEOVV lacks a Korean domestic audience. Both are addressed directly below.",
        },
        {
          label: "Honest limits",
          value: "Member-level claims rest on official tags rather than facial identification, and per-member sample sizes are 10 to 19 posts. Competitor corpora are recent-window samples, not full histories. YouTube Shorts could not be enumerated and is excluded.",
        },
      ],
      corpusStats: [
        {
          label: "Posts analyzed",
          value: "1,129",
          detail: "362 MEOVV TikTok, 200 MEOVV Instagram, 567 competitor, all performance-joined",
        },
        {
          label: "MEOVV median post",
          value: "633K TikTok / 1.15M Instagram",
          detail: "Instagram earns roughly 1.8x on a follower base within 3% of TikTok's",
        },
        {
          label: "Class median post",
          value: "321K to 7.5M",
          detail: "KiiiKiii 321K, Hearts2Hearts 1.81M, ILLIT 3.75M, KATSEYE 7.52M",
        },
        {
          label: "Days with any post",
          value: "53%",
          detail: "Against Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74% over comparable recent windows",
        },
      ],
      mixColumnLabel: "MEOVV today",
      benchmarkColumnLabel: "The class",
      mixHeading: "Operating Pattern vs the Class",
      mixIntro: "Normalized for follower count, MEOVV's reach per post is mid-table and unremarkable. The gaps below are not audience-size effects. They are operating choices that can be changed inside a quarter.",
      mixRows: [
        {
          metric: "Publishing cadence",
          subject: "Active on 53% of days, 2.37 posts per active day, up to 10 in one day",
          benchmark: "Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74% of days active",
          read: "behind",
          note: "MEOVV is dark two days in three and then publishes in batches. Every group in the set maintains near-daily presence, and the one that debuted after MEOVV has already passed them on career streams.",
        },
        {
          metric: "Release and promo assets",
          subject: "13.5% of output, median 314K views, indexes 0.41x into the top decile",
          benchmark: "Instagram shows the identical pattern: 12.5% of output at a 0.40x index",
          read: "behind",
          note: "The second-largest deliberate category on the account is also the worst-performing lane of any scale, on both platforms independently.",
        },
        {
          metric: "Conversion asks",
          subject: "47 of 362 posts carry any ask, and only 3 of the top 36 posts do",
          benchmark: "KATSEYE runs an ask on 13% of posts; ILLIT and KiiiKiii on none of their recent 150",
          read: "behind",
          note: "Nearly every ask is the same pre-order template, attached to the lowest-reach asset type. A four-million-view post has nowhere to send anyone.",
        },
        {
          metric: "Repeatable formats",
          subject: "Every recurring tag is a release cycle: DDIRORI 102 posts, BITENOW 78, BURNINGUP 45",
          benchmark: "ILLIT runs two named series across 76 posts; KiiiKiii runs one across 90",
          read: "behind",
          note: "Campaign tags expire when the campaign does. There is nothing on the account a viewer can subscribe to between comebacks.",
        },
        {
          metric: "Platform allocation",
          subject: "119 matched pairs; Instagram wins 95 of them at a median 1.58x",
          benchmark: "Mirroring is standard practice across the class",
          read: "neutral",
          note: "Follower bases are within 3% of each other, so this is close to a controlled test. The better-performing platform is the one being treated as secondary.",
        },
        {
          metric: "Posting clock",
          subject: "Modal window 6pm to 8pm Korean time, 37% of posts",
          benchmark: "KATSEYE concentrates 61% of posts on US Pacific morning hours",
          read: "inline",
          note: "The slot is well matched to Malaysia, Indonesia, the Philippines and Australia. It reaches the United States, market No. 2, at 2am to 4am Pacific.",
        },
        {
          metric: "Hashtag load",
          subject: "5.5 hashtags per post, 97.5% carrying mirrored Korean and Latin pairs",
          benchmark: "KATSEYE 1.4 per post",
          read: "neutral",
          note: "Largely mechanical duplication. Low cost to fix, low expected gain, listed for completeness rather than as a priority.",
        },
      ],
      mixFootnote: "All medians computed within each account's own corpus over the stated window. Top decile is the top 10% by view count within each corpus.",
      charts: [
        {
          kind: "bars",
          title: "Median Views by Content Lane",
          subtitle: "The account's own data already names its best and worst lanes. Release and promo assets sit at half the corpus median.",
          unit: "median views",
          series: [
            {
              name: "Median views",
              points: [
                { x: "Performance", y: 2868988 },
                { x: "Multi-member", y: 848918 },
                { x: "Challenge", y: 818156 },
                { x: "Brand collab", y: 782817 },
                { x: "Member solo", y: 729389 },
                { x: "Candid", y: 505012 },
                { x: "Release asset", y: 314464 },
                { x: "Fan event", y: 147622 },
              ],
            },
          ],
          highlightX: ["Performance video", "Release / promo"],
          note: "Corpus median is 633,163. Performance video is a four-post sample and is reported as a signal to test, not a proven lane.",
          source: "362 TikTok posts, May 2025 to Sep 2026",
        },
        {
          kind: "grouped",
          title: "Same Post, Two Platforms",
          subtitle: "Across 119 posts published to both channels within 48 hours, Instagram wins 80% of the time.",
          unit: "median views",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "Matched pairs", y: 545246 },
                { x: "Full corpus", y: 633163 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "Matched pairs", y: 1000568 },
                { x: "Full corpus", y: 1152012 },
              ],
            },
          ],
          note: "TikTok 3.17M followers, Instagram 3.12M followers. Same content, same window, near-identical audience size.",
          source: "Caption-similarity matching at 0.80 threshold, 48-hour window",
        },
        {
          kind: "bars",
          title: "Reach per Follower Across the Class",
          subtitle: "Normalized for audience size, MEOVV is mid-table. The reach gap to KATSEYE is largely a follower gap. The cadence gap is not.",
          unit: "median views per follower",
          series: [
            {
              name: "Views per follower",
              points: [
                { x: "KATSEYE", y: 0.36 },
                { x: "ILLIT", y: 0.291 },
                { x: "Hearts2Hearts", y: 0.228 },
                { x: "MEOVV", y: 0.2 },
                { x: "KiiiKiii", y: 0.146 },
              ],
            },
          ],
          highlightX: ["MEOVV"],
          source: "Most recent 150 TikTok posts per competitor, 362 for MEOVV",
        },
        {
          kind: "grouped",
          title: "Output vs Results After the Comeback",
          subtitle: "Publishing volume rose two and a half times at the June 2026 comeback. Median reach moved 14%.",
          unit: "indexed",
          series: [
            {
              name: "Posts per month",
              points: [
                { x: "Before Jun 2026", y: 22.4 },
                { x: "From Jun 2026", y: 56.1 },
              ],
            },
          ],
          note: "Median views over the same split: 596,990 before, 678,182 after. Top-decile median moved 3.17M to 3.35M. The pre-comeback rate is stated excluding a 114-day window the data provider could not serve. More posting did not produce proportionally more reach; the mix did not change with the volume.",
          source: "362 TikTok posts, split at Jun 1 2026",
        },
      ],
      findingsHeading: "Eight Findings",
      findingsIntro: "Six held under scrutiny and two failed. Both failures are reported first, because a strategy built on either of them would have been wrong.",
      findings: [
        {
          id: "f1",
          title: "Caption language does not predict performance. This was tested and rejected.",
          verdict: "refuted",
          confidence: "High. n=362 TikTok, n=200 Instagram.",
          summary: "The working hypothesis was that MEOVV writes for a Korean audience while a global one listens, and that English or bilingual posts would therefore out-perform Korean-only ones. The data says otherwise. English-only captions are already 53.6% of the TikTok corpus, and they are the lowest-performing language class, not the highest.",
          evidence: [
            "TikTok medians by caption language: bilingual 774K (n=35), emoji or tag only 741K (n=81), Korean-only 698K (n=52), English-only 578K (n=194)",
            "Controlling for release boilerplate, which is written in English, collapses the spread to 11% across all four classes against an interquartile range of roughly 4x within each",
            "Instagram independently shows the same weak pattern: a 23% spread across four classes at sample sizes of 25 to 78",
          ],
          counterEvidence: [
            "Posts using Latin-only hashtags do show a higher median at 827K, but n=8 and the mean is carried by a single 42.9M-view outlier",
          ],
          pivot: {
            title: "Do not translate. Redistribute.",
            actions: [
              "Leave caption language as it is. There is no gain available here and effort spent on it is effort not spent on cadence and capture.",
              "The access problem is not language, it is timing and reachability. Both are addressed in findings 5 and 6.",
            ],
          },
        },
        {
          id: "f2",
          title: "MEOVV has a real Korean audience. The Spotify geography is a platform artifact, not a verdict.",
          verdict: "refuted",
          confidence: "High. Verified against national daily chart archives.",
          summary: "South Korea does not appear in MEOVV's top eleven Spotify markets, which invited the conclusion that the group has no domestic base. That conclusion is wrong. Korean listening runs through domestic platforms rather than Spotify, and on the Korean chart record MEOVV performs well.",
          evidence: [
            "HANDS UP reached No. 3 on the Korean Spotify daily chart on two separate occasions, held 225 days on that chart and 21 days inside the top ten",
            "MEOW reached No. 8 in Korea across 132 days on chart; six further tracks have charted domestically",
            "Korea is MEOVV's second-strongest chart territory by cumulative charted streams, behind Taiwan",
          ],
          pivot: {
            title: "Treat Korea as a held market, not a lost one",
            actions: [
              "No corrective domestic strategy is required and none is proposed in this document.",
              "The expansion argument rests on the markets that carry listening with no footprint, not on a Korean weakness that does not exist.",
            ],
          },
        },
        {
          id: "f3",
          title: "The account is dark two days out of three, then publishes ten posts at once.",
          verdict: "confirmed",
          confidence: "High. n=362 against 567 competitor posts.",
          summary: "MEOVV posts on 53% of days over the same recent window in which the peer set posts on 74% to 93%. Every peer is on their audience's feed near-daily. The batching pattern means each post competes against the group's own posts for the same audience on the same day, then leaves a two-day silence.",
          evidence: [
            "Active-day share over each account's most recent window: Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74%, MEOVV 53%",
            "MEOVV publishes 2.37 posts per active day with a single-day maximum of 10; KATSEYE publishes 1.49 per active day with a maximum of 6",
            "Hearts2Hearts debuted after MEOVV, posts on 96% of days, and has already passed them on career Spotify streams",
          ],
          examples: [
            { platform: "tiktok", id: "7678711963534249236", label: "Aug 28 batch, post 1 of 3 that day", stat: "2.34M views" },
            { platform: "tiktok", id: "7678711277841091861", label: "Aug 28 batch, post 2 of 3 that day", stat: "316K views" },
          ],
          pivot: {
            title: "Move to a daily floor and spread the batches",
            actions: [
              "Set a one-post-per-day minimum across TikTok and Instagram and hold it between comebacks, not only during them.",
              "Break existing batch days into a queue. The material already exists; it is being spent three at a time.",
              "Add a second daily slot on US Pacific hours, which finding 6 sizes.",
            ],
          },
        },
        {
          id: "f4",
          title: "Instagram earns 1.58x TikTok on the same posts, and is resourced as the secondary channel.",
          verdict: "confirmed",
          confidence: "High. 119 matched pairs.",
          summary: "Across 119 posts published to both platforms inside 48 hours, Instagram won 95 of them, with a median view ratio of 1.58x. The two follower bases are within 3% of each other, which makes this close to a controlled experiment. Across the full corpora the gap is wider still, at 1.82x.",
          evidence: [
            "Matched-pair medians: TikTok 545,246, Instagram 1,000,568",
            "Instagram wins 95 of 119 pairs, or 80%",
            "Full-corpus medians: TikTok 633,163 across 362 posts, Instagram 1,152,012 across 200",
          ],
          counterEvidence: [
            "Instagram's corpus covers a shorter and more recent window, March to September 2026, which overlaps the comeback and may flatter it",
          ],
          pivot: {
            title: "Promote Instagram to primary",
            actions: [
              "Publish to Instagram first and TikTok second, rather than treating Instagram as the mirror.",
              "Format for Instagram natively rather than reposting a TikTok-shaped cut, and extend the Instagram corpus back through the 2025 releases to confirm the effect holds outside the comeback window.",
            ],
          },
        },
        {
          id: "f5",
          title: "The only posts carrying an ask are the worst-performing posts on the account.",
          verdict: "confirmed",
          confidence: "High. 47 asks identified across 362 posts.",
          summary: "13% of TikTok posts contain any explicit ask, and only 3 of the top 36 posts do. Almost every ask is the same pre-order template bolted to a release asset, and release assets are the account's lowest-reach lane at 314K median against a 633K corpus median. A four-million-view post points nowhere at all.",
          evidence: [
            "47 of 362 TikTok posts carry an ask; 3 of the top decile's 36 posts do; Instagram runs 19 of 200 and 1 of 20",
            "Release and promo assets are 13.5% of output, median 314,464, indexing 0.41x into the top decile",
            "The four worst-performing asks all route to a Korean-market livestream app or a pre-order page, and three of them are static graphics with no motion at all",
          ],
          examples: [
            { platform: "tiktok", id: "7642251178654321941", label: "Signed-album pre-order", stat: "117K views", note: "Ask attached to the lowest-reach lane" },
            { platform: "tiktok", id: "7562391447236955399", label: "Fan-app live week announcement", stat: "77K views", note: "Bottom of the corpus" },
            { platform: "tiktok", id: "7608150631328632072", label: "The account's biggest post ever", stat: "42.9M views", note: "No ask of any kind" },
          ],
          pivot: {
            title: "Put the ask on the reach, not on the announcement",
            actions: [
              "Adopt a one-second end card on high-reach posts carrying a single destination, rather than a caption paragraph on low-reach ones.",
              "Point that destination at a first-party capture page, per vertical one, so reach compounds into a list instead of evaporating.",
              "Stop publishing static graphics as posts. Four of the six worst-performing posts on the account are motionless cards.",
            ],
          },
        },
        {
          id: "f6",
          title: "The posting clock serves four of the top five markets and misses the fifth.",
          verdict: "partial",
          confidence: "Medium-high. Based on posting-hour distribution across 362 posts.",
          summary: "MEOVV's modal posting window is 6pm to 8pm Korean time, carrying 37% of output. That is early evening in Malaysia, Indonesia, the Philippines and Australia, which is correct and should be kept. It is 2am to 4am Pacific, which is where 687K monthly listeners live. KATSEYE is the only act in the set that schedules for American hours, and it is the only act in the set with an American business.",
          evidence: [
            "MEOVV's top three posting hours are 09, 10 and 11 UTC, carrying 36% of posts",
            "KATSEYE's top three are 15, 16 and 19 UTC, carrying 61% of posts, which is 8am to 12pm Pacific",
            "The Korean evening slot lands 5pm to 7pm in Malaysia and the Philippines, 4pm to 6pm in Indonesia and 7pm to 9pm in Australia",
          ],
          pivot: {
            title: "Keep the Asia-Pacific slot and add a US one",
            actions: [
              "Add a second daily publish at 8am to 11am Pacific, drawing from the same content pool rather than requiring new material.",
              "Measure the US slot on follower growth and profile visits from US geography rather than on raw views, which the Asia-Pacific slot will continue to dominate.",
            ],
          },
        },
        {
          id: "f7",
          title: "There is nothing on the account a viewer can subscribe to between comebacks.",
          verdict: "confirmed",
          confidence: "High. Tag frequency across 362 owned and 567 competitor posts.",
          summary: "Every recurring hashtag on the MEOVV account is a release cycle that expires with the campaign. Peers run named, repeatable series that persist across eras and give a viewer a reason to return when there is no single to promote.",
          evidence: [
            "MEOVV's recurring non-boilerplate tags are all campaigns: DDIRORI 102 posts, BITENOW 78, BURNINGUP 45",
            "ILLIT sustains two named recurring formats across 76 posts alongside per-member tags; KiiiKiii runs one across 90",
            "Posts carrying no member tag at all, 165 of them, median 479,323 against the 633,163 corpus median. Tagging a member is worth more than which member is tagged.",
          ],
          examples: [
            { platform: "tiktok", id: "7650125447795068181", label: "Performance video, the highest-indexing lane", stat: "5.26M views" },
            { platform: "tiktok", id: "7541403331151826194", label: "Member-solo post", stat: "5.01M views" },
          ],
          pivot: {
            title: "Build two named franchises and run them weekly",
            actions: [
              "Commission one performance-led series and one member-led series with fixed names, fixed slots and fixed formats, running independent of the release calendar.",
              "Rotate all five members through the member franchise rather than concentrating it. Solo-tagged sample sizes of 10 to 19 posts are too thin to justify favoring one member, and the reliable signal is simply that tagged posts beat untagged ones.",
            ],
          },
        },
        {
          id: "f8",
          title: "The biggest post in the account's history has never been followed up.",
          verdict: "confirmed",
          confidence: "High. Single-post outlier, verified.",
          summary: "A February 2026 post did 42.9 million views. The second-biggest post on the account did 7.8 million. The gap is 5.5x, and nothing in the 362-post corpus resembles a follow-up. The post was an English-language internet-culture format with four hashtags and no Korean tags, made outside any campaign window.",
          evidence: [
            "Post 1 of 362 by views: 42,881,800. Post 2: 7,824,059. The top post alone is 18% of all views in the analyzed corpus.",
            "It carries no release tie, no ask and no campaign hashtag",
            "The next four highest posts are all release-day assets from a single day in June 2026, meaning the account's reach history is one accident and one release",
          ],
          examples: [
            { platform: "tiktok", id: "7608150631328632072", label: "The 42.9M-view outlier", date: "Feb 18 2026", stat: "42.9M views", note: "5.5x the account's second-biggest post" },
            { platform: "tiktok", id: "7647112873163885845", label: "Cross-fandom collaboration", stat: "4.86M views" },
            { platform: "tiktok", id: "7563597916540128519", label: "Peer-group collaboration", stat: "4.01M views" },
          ],
          pivot: {
            title: "Treat internet-culture formats as a standing lane",
            actions: [
              "Give one member-facing slot per week to a non-campaign internet format, chosen from what is live that week rather than planned a quarter out.",
              "Accept a low hit rate. The lane's expected value is set by its ceiling, and the ceiling here is 42.9 million against a 633 thousand median.",
              "Cross-fandom collaboration is the reliable version of the same effect and already sits in the top ten. Schedule it rather than waiting for it.",
            ],
          },
        },
      ],
      footnote: "Corpus and method: 362 TikTok posts and 200 Instagram reels from MEOVV's official accounts, plus 567 competitor posts with usable view data, all engagement-joined. YouTube Shorts could not be enumerated by the data provider and is excluded from every figure. TikTok coverage is 45% of the account's 811 lifetime videos, weighted toward the most recent period, with a gap between October 2025 and February 2026 that the provider could not serve from either pagination direction.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Every owned surface was checked directly rather than assumed. The question asked of each one was simple: can MEOVV reach a fan through it without a platform in the middle, and can a fan spend money through it.",
      intro: "This is the section that explains the gap between the conversion rate in section 03 and the business results underneath it. Six surfaces were audited on September 3, 2026 by loading each one in a browser and inspecting the live document, which is how the capture unit in block B was found: it renders after load and does not appear in the page source.",
      subBlocks: [
        {
          label: "A",
          title: "The Official Site Is a Holding Page",
          strategy: "MEOVV does run an official website, at the Korean domain, and it is a single holding page. It carries a copyright line, six social icons and nothing else: no store link, no release information, no capture, and no second page. Every path on the domain serves the same shell. Its own share image is named for the placeholder it is. The one owned front door that exists sends every visitor straight back out to a platform.",
          components: {
            heading: "What was found",
            items: [
              "The official site is operated by the label, carries Korean and English locale tags, and renders one line of text: the copyright notice.",
              "Six outbound links: YouTube, Instagram, X, TikTok, Facebook and Threads. No link to either store, to the fan app, or to a release.",
              "Fourteen candidate paths were requested (shop, store, news, notice, members, join, music, media, contact, newsletter and others). All fourteen return the same holding shell, so there is no second page to reach.",
              "Zero forms and zero email inputs anywhere on the domain.",
              "The exact-match .com is separately held by a domain reseller and serves a parking page, monetizing search traffic on the group's name.",
            ],
          },
        },
        {
          label: "B",
          title: "The Email List Exists and It Is Not MEOVV's",
          strategy: "Email capture does run, in exactly one place: a pop-up on the US store. It is worth reading closely, because of the three consent boxes it presents, only one is MEOVV. The other two are the distributor and its parent. The consent language states that mail is sent by or on behalf of the distribution company, at the distribution company's address. So a list is being built on MEOVV's traffic, inside someone else's system, under someone else's consent. Every other owned surface captures nothing.",
          components: {
            heading: "Surface-by-surface verification",
            items: [
              "The capture is a pop-up unit on the US store collecting an email address and a country, with three separate opt-in checkboxes: MEOVV, the distributor's label group, and its parent company.",
              "The consent copy names the distribution company as sender, at its California address, with its privacy policy governing. The resulting list is held there, not by the artist or the label.",
              "An enterprise email platform runs alongside it with site-tracking and cart-recovery scripts live, so the sending infrastructure, the contract and the integration all already exist.",
              "Because the unit is a pop-up rather than a permanent element, it is absent from the page body: a scan of the store's static markup returns zero email fields. The capture is real, and it is easy to miss.",
              "No email or SMS capture exists on the official site, the fan app funnel, any link hub, any streaming link page, or any social bio destination.",
              "The streaming link pages carry a retargeting pixel and an analytics tag, which is advertising data, not owned data. It cannot be exported, mailed, or taken to another platform.",
            ],
          },
        },
        {
          label: "C",
          title: "The Store Nobody Links To",
          strategy: "Two stores exist and neither is reachable from where the audience is. The US storefront, operated by the global label partner, is not linked from a single bio on any platform. Every social bio points either to a streaming link or to the Korean label shop. The US store also sells only CDs: ten products, all of them albums, no apparel, no accessories, no lightstick.",
          components: {
            heading: "The commerce gap",
            items: [
              "Instagram's four bio link slots hold two release links, a social directory and a mood board. None is a store.",
              "The official site does not link either store, so the one owned page that exists points at no commerce at all.",
              "TikTok, X and YouTube bios each hold a single streaming link and nothing else.",
              "The social directory hub lists ten destinations. The US store is not among them; the Korean shop is.",
              "The US store's full product catalog is ten items, 100% CDs. There is no repeat-purchase reason to return between album cycles.",
              "The lightstick is sold only on the Korean shop, so a US fan buying the group's core fan product goes to a Korean site or a reseller.",
              "US retail placement has been achieved before: the first EP ran exclusive versions through two national US retailers. The lane exists and has not been carried forward.",
            ],
          },
        },
        {
          label: "D",
          title: "Membership and Fan Platform",
          strategy: "MEOVV does not use the industry-standard fan platforms. The label built its own app, launched a paid membership in September 2025, sold it out, and has spent 2026 dismantling the paywall around it. Adoption sits at a small fraction of the social audience.",
          components: {
            heading: "What the app data shows",
            items: [
              "The membership is currently sold out on the label store, priced at roughly $21 for a twelve-month term.",
              "App installs sit in the 100,000-plus band against a combined 7.9M followers across Instagram, TikTok and YouTube, which is under 2% of the social audience at the most generous reading.",
              "Two 2026 releases removed paywalls: a free trial for new subscribers in June, then live chat and posting opened to all users in August.",
              "The app does collect email addresses, but they sit inside a Korean-market application and are not available to a US label or marketing partner.",
              "Fan-app promotion is the worst-performing content on the account, at a 86K median against a 633K corpus median. The audience is not following the group into the app.",
            ],
          },
        },
        {
          label: "E",
          title: "The Live Business Does Not Exist",
          strategy: "In 727 days since debut MEOVV has never held a concert, never held a fan meeting, and never headlined a ticketed show anywhere in the world. Both major live databases list zero upcoming events and an off-tour status. Every stage the group has played has been a festival, an awards show, a college festival, a brand activation or a multi-artist convention where someone else sold the ticket.",
          components: {
            heading: "The record",
            items: [
              "Two label showcases, both press events in Seoul, in two years.",
              "Three US appearances, all at the same multi-artist convention across 2025 and 2026, on stages ticketed by the event rather than by the group.",
              "Zero live appearances in Malaysia, Indonesia, the Philippines, Thailand or Australia, which together carry roughly 2.05M monthly listeners.",
              "One pop-up store in Singapore in 2025 is the entire Southeast Asian physical footprint, against a parent label that has held a Thailand joint venture since 2023.",
              "Roughly 25,000 fans are tracking the group on live-event platforms waiting to be notified of a date that has never come.",
              "The group has said publicly that an arena show for its fandom is what it is working toward, which makes the absence a scheduling and infrastructure question rather than an appetite question.",
            ],
          },
        },
        {
          label: "F",
          title: "What the Gap Adds Up To",
          strategy: "7.9M followers across three platforms, and a further 2.02M committed enough to follow on a streaming service where following does nothing for them. Almost none of those relationships is reachable except through a platform, and the one channel that could reach them directly sits on a store no owned surface links to, collecting into the distributor's list rather than the artist's. Two commitment products have ever been offered and both sold out. The audit's conclusion is that demand has been proven repeatedly and the apparatus to meet it has not been built.",
          components: {
            heading: "Ranked by cost to close",
            items: [
              "Stand up a list in MEOVV's own name. The store pop-up proves the audience opts in, but that list is the distributor's and the artist will not hold it.",
              "Point at least one bio link on each platform at a first-party page that captures before it converts.",
              "Turn the official site from a holding page into the destination that capture sits on.",
              "Extend the US store beyond CDs and carry the lightstick and merchandise on it.",
              "Announce a first ticketed date in a market that already carries the listening.",
              "Rebuild the membership proposition around access to that live business rather than around app features.",
            ],
          },
        },
      ],
      footnote: "Every surface in this section was verified directly on September 3, 2026 by loading the page in a browser, inspecting the live document rather than the static markup, and querying the relevant public APIs. Capture findings rest on the rendered form fields, their consent copy and their list identifiers. Absence claims rest on the same inspection plus live-event database queries returning zero upcoming events. Follower counts are platform-reported on the same date.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Strategy",
      title: "Core Strategy & Philosophy",
      thesis: "MEOVV does not have a demand problem. It has a capture problem. Every fan the group has earned is currently held by a platform, and every one of them has said yes to the only two things they have ever been offered.",
      hierarchy: [
        {
          label: "1. Capture",
          description: "Convert platform followers into first-party contacts the group actually owns. A list is already being built on MEOVV's traffic today, under the distributor's name, on a store nothing links to, and the artist does not hold it. Standing up an artist-side list and pointing owned traffic at it is the fastest and cheapest move on the board. Everything downstream depends on it.",
        },
        {
          label: "2. Live",
          description: "Give the fandom something to buy a ticket to. Two years of proven demand, a sold-out lightstick, a sold-out membership and 25,000 people subscribed to event alerts that have never fired. Start in the markets that already carry the listening rather than the ones that carry the reputation.",
        },
        {
          label: "3. Content system",
          description: "Replace burst publishing with a daily floor and two named franchises that run between comebacks. The reach the account already generates is spent on announcements; redirect it toward the capture layer and hold presence when there is nothing to promote.",
        },
        {
          label: "4. Catalog",
          description: "Restore the release halo. The 2025 cycle pulled the back catalog to 2.28x and the 2026 cycle managed 1.07x. Point release moments at the whole catalog, and let the first two weeks of streaming data pick the track that gets the spend.",
        },
      ],
      messaging: [
        "The conversion rate is the asset. It leads every act of comparable scale in the debut class, it has risen almost every month for two years, and it was earned with almost nothing on offer. Protect it before optimizing anything else.",
        "Charts are not the scoreboard for this act. 94% of everything MEOVV has ever streamed happened outside any chart, and the group is currently doing over a million streams a day while charting nowhere on earth.",
        "The audience has picked its own singles twice. Build the release process to listen to that rather than to overrule it.",
        "Nothing in this plan requires a creative reset. The creative is producing 42-million-view outliers and a conversion rate ahead of every act near its scale. What is missing is the business that should sit underneath it.",
      ],
      footnote: "The four verticals that follow execute against this hierarchy in order. Capture comes first because every other workstream compounds through it.",
    },

    // ===================================================================
    // 08. Vertical 1 / Owned-Audience Capture
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Capture",
      title: "Vertical 1 / Owned-Audience Capture",
      philosophy: "Build the layer that lets MEOVV reach a fan directly. This vertical is first because the audit found the tooling already bought, installed and running with nothing in front of it.",
      intro: "The objective is a first-party audience the group controls: email addresses and phone numbers held by MEOVV rather than rented from a platform, segmented by market, and usable for a ticket on-sale, a retail drop or a release without paying for reach a second time.",
      subBlocks: [
        {
          label: "A",
          title: "Stand Up a List MEOVV Actually Holds",
          objective: "A first-party audience the artist controls and can mail on its own schedule, live inside the first four weeks.",
          strategy: "Capture already runs on the US store, but it is not MEOVV's. Two of its three consent boxes belong to the distributor and its parent, the mail goes out under their name and their privacy policy, and in practice an artist does not get direct access to that list. Treat it as what it is: proof the audience will opt in, and a channel that will keep running regardless. The work is to stand up a separate artist-held list on a dedicated fan-CRM platform, running alongside it and fed by every owned channel, so MEOVV holds an audience it can reach without asking anyone.",
          components: {
            heading: "Build",
            items: [
              "A dedicated fan-CRM platform, Laylo or an equivalent, holding the artist-side list independent of the distributor's",
              "A capture unit in MEOVV's own name wherever owned traffic lands, sitting alongside the distributor's store pop-up rather than replacing it",
              "A standalone first-party landing page as the single destination every bio link and end card points at",
              "SMS capture alongside email for the markets where it is legally clean, kept separate from the email flow by consent type",
              "A welcome sequence in English, triggered on signup, that routes new contacts by market",
              "Segmentation from the first record: market, acquisition source, purchase history, and whether the contact came from a release moment or a live moment",
            ],
          },
          kpis: [
            "Artist-held contacts captured, reported weekly, and the share of total capture they represent",
            "Capture rate per thousand profile visits, by platform and by bio slot",
            "Share of contacts from outside Korea, targeting the top five listening markets",
            "Deliverability and opt-out rate held inside industry norms from the first send",
          ],
        },
        {
          label: "B",
          title: "Finish the Front Door",
          objective: "Turn the official site from a holding page into the destination a campaign can drive to and a fan can return to.",
          strategy: "The domain and the site already exist and the label already operates them, which removes the hardest part. What sits there today is a placeholder: a copyright line and six links back out to platforms. Building it out is the cheapest owned-media gain available. The page does not need to be large, and a release hub, a store link, a tour module and the capture unit is the whole requirement in phase one.",
          components: {
            heading: "Build",
            items: [
              "A real home page behind the domain the label already holds, replacing the holding shell",
              "Acquisition of the exact-match .com, which currently monetizes the group's search traffic for a reseller",
              "A tour module that can hold an announcement, so the first date has a home before it is booked",
              "Store routing that sends US traffic to the US storefront and everyone else to the label shop, which nothing does today",
              "Consistent bio-link architecture across all four platforms, with at least one slot permanently held by the owned page",
            ],
          },
          kpis: [
            "Owned-site sessions and returning-visitor share, against a holding-page baseline of effectively zero",
            "Share of total bio-link clicks landing on an owned property rather than a third-party link page",
            "Store sessions attributable to owned channels",
          ],
        },
        {
          label: "C",
          title: "Extend What a Fan Can Buy",
          objective: "Give the audience more than one product and more than one reason to come back.",
          strategy: "Two commitment products have been offered in two years and both sold out. The US storefront carries ten items and all of them are CDs, which means there is nothing to buy between album cycles. The demand signal here is unambiguous and the shelf is close to empty.",
          components: {
            heading: "Build",
            items: [
              "A merchandise line on the US storefront, carrying the lightstick and apparel rather than albums alone",
              "A restock of the sold-out lightstick and membership, with waitlist capture on both while they are out of stock",
              "A US retail moment on the next cycle, building on the national retail exclusives the first EP already ran",
              "A membership proposition rebuilt around access to the live business in vertical two, rather than around app features",
            ],
          },
          kpis: [
            "Store revenue and orders, split US and international",
            "Repeat-purchase rate, which is currently structurally impossible",
            "Waitlist signups captured against out-of-stock inventory",
            "Membership renewals once the live proposition is attached",
          ],
        },
      ],
      footnote: "This vertical is sequenced first because every subsequent workstream compounds through it. A ticket on-sale, a retail drop and a release are all materially cheaper to run against an owned list than against paid reach.",
    },

    // ===================================================================
    // 09. Vertical 2 / The Live Business
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Live",
      title: "Vertical 2 / The Live Business",
      philosophy: "The single largest unmonetized asset in the audit. Two years of demand with nothing to buy a ticket to, in markets that have never seen the group.",
      intro: "Every act in the comparison set converting above 0.5 followers per listener has a touring history. Every act below 0.4 does not. MEOVV is the highest-converting group on the wrong side of that line, which means the ceiling on the conversion metric is currently set by the absence of a live business rather than by the strength of the fanbase.",
      subBlocks: [
        {
          label: "A",
          title: "Route to Where the Listening Already Is",
          objective: "A first ticketed MEOVV headline date, in a market that has already demonstrated demand.",
          strategy: "Southeast Asia carries roughly 1.9M monthly listeners across Malaysia, Indonesia, the Philippines, Thailand and Singapore, and has received one pop-up store in two years. Kuala Lumpur is the group's largest listening city in the world. These markets are lower-cost to enter than the United States, closer to the existing promotional footprint, and sit inside a region where the parent label has held a joint venture since 2023.",
          components: {
            heading: "The routing case",
            items: [
              "Kuala Lumpur is MEOVV's No. 1 city at 117,536 listeners; Malaysia is the No. 1 country at 778,210",
              "Taipei, Bangkok, Singapore and Jakarta follow, and the group has an established fansign and pop-up history in Taipei",
              "Australia carries 254,581 listeners with no footprint of any kind, and Sydney is a top-ten city",
              "Los Angeles is the largest US city at 41,635, and the group has played the same LA convention three times without ever selling a ticket in its own name",
            ],
          },
          tactics: [
            "Phase one: a fan-concert-scale ticketed date in Kuala Lumpur or Taipei, sized to sell out rather than to impress",
            "Phase two: a Southeast Asia run adding Bangkok, Singapore, Jakarta and Manila",
            "Phase three: a first US date routed against pixel and first-party data accumulated in phases one and two, not against assumption",
            "Presales gated behind the first-party list and the membership, which is what gives both a reason to exist",
          ],
          kpis: [
            "First on-sale sell-through rate and time to sell out",
            "Share of tickets sold to the first-party list versus general on-sale",
            "Follower-to-listener ratio movement in each toured market against untoured control markets",
            "Membership conversion rate on presale access",
          ],
        },
        {
          label: "B",
          title: "Convert the Waiting List That Already Exists",
          objective: "Capture the demand that is currently sitting in third-party event platforms.",
          strategy: "Roughly 25,000 people have registered on live-event platforms to be notified when MEOVV announces a date. That is a warm, self-identified audience with purchase intent, held entirely by third parties, that has never received a single notification. It is the highest-intent segment available and it costs nothing to reach.",
          components: {
            heading: "Build",
            items: [
              "Claim and complete the group's profiles on both major live-event platforms",
              "Run the first announcement through them simultaneously with the owned list",
              "Capture into the first-party list at every stage of the ticket funnel, including from people who do not complete a purchase",
              "Build a market-level demand map from registration geography before routing phase two",
            ],
          },
          kpis: [
            "Event-platform trackers converted into first-party contacts",
            "Announcement-to-purchase conversion rate by market",
            "Registration density by city, used as the routing input for the following phase",
          ],
        },
        {
          label: "C",
          title: "Make the Live Business the Reason to Join",
          objective: "Give the membership and the fandom identity a function.",
          strategy: "The membership sold out and is now being progressively opened for free, which is the pattern of a product that has not found its job. Presale access, ticket priority and member-only live moments give it one. The fandom name, the lightstick and the app all become instruments of a live business rather than standalone products.",
          components: {
            heading: "Build",
            items: [
              "Membership presale windows and ticket priority as the headline member benefit",
              "Member-only soundcheck, fansign or livestream attached to each date",
              "Lightstick availability tied to on-sale in each market, including a US-shippable path",
              "Post-show capture at every date, converting attendees into contacts on the night",
            ],
          },
          kpis: [
            "Membership signups per on-sale",
            "Renewal rate against the pre-live baseline",
            "Attendee-to-contact capture rate per show",
          ],
        },
      ],
      footnote: "Market ordering is set by current Spotify monthly listeners by city and country, Chartmetric, September 3, 2026. No touring commitment is implied by this document; the routing above is the analytic case for where a first date should land.",
    },

    // ===================================================================
    // 10. Vertical 3 / Content System
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "System",
      title: "Vertical 3 / Content System",
      philosophy: "The creative is not the problem. A 42.9-million-view post and a conversion rate ahead of every act near its scale are not signs of weak content. The problem is that the account publishes in bursts, spends its reach on announcements, and offers nothing to follow between comebacks.",
      intro: "This vertical converts the eight findings in section 05 into an operating system: a cadence floor, two named franchises, a second daily slot on US hours, and an end-card standard that points reach at the capture layer built in vertical one.",
      subBlocks: [
        {
          label: "A",
          title: "A Daily Floor Instead of Batches",
          objective: "Move from 53% of days active to daily presence across TikTok and Instagram.",
          strategy: "Peers post on 74% to 93% of days. MEOVV posts on 53%, in batches of up to ten, then goes dark. Batching makes the group's posts compete against each other on the same day for the same audience, then surrenders the two days after. The material to fix this already exists; it is being spent three at a time.",
          components: {
            heading: "Operating changes",
            items: [
              "One post per day minimum on each of TikTok and Instagram, held between comebacks and not only during them",
              "Existing batch days broken into a scheduled queue rather than published together",
              "Instagram published first and TikTok second, reversing the current default",
              "A second daily slot at 8am to 11am US Pacific, drawn from the same content pool",
            ],
          },
          kpis: [
            "Share of days with at least one post, from 53% toward 85%+",
            "Median views per post, from 633K toward 1.5M",
            "Follower growth rate by platform, and US-geography profile visits on the new slot",
          ],
        },
        {
          label: "B",
          title: "Two Franchises That Outlive the Campaign",
          objective: "Give a viewer something to subscribe to when there is no single to promote.",
          strategy: "Every recurring tag on the account is a release cycle that expires: 102 posts on one campaign, 78 on another, 45 on a third. Peers run named series that persist across eras. The lane data says which two franchises to build: performance content indexes highest into the top decile on both platforms, and posts tagged to any member beat untagged posts by 70%.",
          components: {
            heading: "Build",
            items: [
              "One performance-led franchise with a fixed name, a fixed weekly slot and a fixed format",
              "One member-led franchise rotating all five members rather than concentrating on one, since per-member samples are too thin to justify favoring any",
              "An internet-culture slot once a week, chosen from what is live that week rather than planned a quarter ahead",
              "Cross-fandom collaboration scheduled rather than opportunistic; it already appears in the account's top ten",
            ],
          },
          kpis: [
            "Franchise post median against the account median",
            "Return-viewer rate on franchise content",
            "Share of monthly output that is non-campaign, which is currently near zero between cycles",
          ],
        },
        {
          label: "C",
          title: "Point the Reach Somewhere",
          objective: "Convert the account's existing reach into first-party contacts.",
          strategy: "13% of posts carry any ask, only 3 of the top 36 posts do, and nearly every ask is a pre-order template attached to the account's lowest-reach lane. The fix is not more asks. It is moving the ask off the announcement and onto the reach, and pointing it at a page that captures rather than a page that only sells.",
          components: {
            heading: "Standards",
            items: [
              "A one-second end card on high-reach posts carrying a single destination, replacing caption paragraphs on low-reach ones",
              "That destination is the owned capture page from vertical one, not a streaming link",
              "Static graphics retired as a post format; four of the six worst posts on the account are motionless cards",
              "Release and promo assets cut as a share of output, with the announcement job moved to stories and pinned posts",
            ],
          },
          kpis: [
            "Contacts captured per million views, reported weekly",
            "Click-through rate on end-carded posts versus caption asks",
            "Release-asset share of output, from 13.5% downward, with median reach held",
          ],
        },
      ],
      footnote: "Every recommendation in this vertical is derived from the account's own performance data in section 05 rather than from general platform practice. Sample-size limits are stated in that section and carried forward here.",
    },

    // ===================================================================
    // 11. Vertical 4 / DSP & Catalog
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "DSP",
      title: "Vertical 4 / DSP & Catalog",
      philosophy: "An act doing over a million streams a day while charting nowhere on earth is not a chart problem to solve. It is a discovery engine to fund.",
      intro: "94% of MEOVV's 480M career streams were earned outside any national chart. The catalog is small at 14 tracks, concentrated in the newest release, and its release halo has fallen from 2.28x to 1.07x across three cycles. This vertical protects what works and restores what has slipped.",
      subBlocks: [
        {
          label: "A",
          title: "Let the Data Pick the Single",
          objective: "Stop overruling an audience that has now chosen correctly twice.",
          strategy: "The B-side is outrunning the title track by 33.5% daily and is about to pass it on cumulative streams. It is also outrunning the biggest song in the catalog by 81%, with no video budget, no promotional cycle and no radio behind it. The same track carries the account's top-decile short-form performance. Content and streaming are agreeing with each other and disagreeing with the campaign plan.",
          components: {
            heading: "Process changes",
            items: [
              "A fourteen-day post-release read on every future release, with budget held back to redirect toward whichever track the data selects",
              "Short-form and paid weighting reallocated to the winning track rather than fixed to the title track at planning time",
              "A video or performance asset commissioned for the winner after the fact rather than only for the pre-selected single",
            ],
          },
          kpis: [
            "Daily stream share held by the campaign's intended focus track versus the audience's pick",
            "Cost per thousand streams on redirected spend versus the original plan",
          ],
        },
        {
          label: "B",
          title: "Restore the Release Halo",
          objective: "Make each release worth more than its own streams again.",
          strategy: "The 2025 cycle pulled the entire back catalog to 2.28x within nineteen days, with individual older tracks up 92% to 177%. The 2026 cycle managed 1.07x. The mechanism that produced the first result was a song given room to spread for nineteen days after release; the difference is not catalog size, since the catalog was smaller then.",
          components: {
            heading: "Build",
            items: [
              "Release moments pointed at the full catalog through playlist sequencing, not only at the new single",
              "Catalog tracks worked into the short-form franchises between cycles, where they currently disappear",
              "Editorial and algorithmic pitching framed around the discovery behavior that already drives 94% of streams",
              "The Japan single and the international-format tracks worked as separate market entries rather than left as catalog",
            ],
          },
          kpis: [
            "Back-catalog lift multiple per release cycle, from 1.07x back toward 2.0x+",
            "Weekly stream retention at weeks 4, 8 and 12 as a multiple of launch week",
            "Share of daily streams coming from tracks older than twelve months",
          ],
        },
        {
          label: "C",
          title: "Grow the Catalog",
          objective: "Close the listener gap that is substantially a catalog gap.",
          strategy: "MEOVV has 14 tracks. The two acts above it in the tier map have 38 and 64. Monthly listeners are a function of how much catalog is available to discover, and MEOVV's listener number is depressed by having less of it, not by converting worse. On conversion it outperforms every act near its scale.",
          components: {
            heading: "The case",
            items: [
              "MEOVV averages 34.3M career streams per track. The two acts above it in the tier map average more, on catalogs three to four times larger, which is the scale the release rate has to close",
              "The nearest comparison group passed MEOVV on career streams while debuting later, on higher release frequency",
              "A group currently doing over a million streams a day off 14 tracks has the clearest possible argument for more of them",
            ],
          },
          kpis: [
            "Tracks released per twelve months against the class median",
            "Monthly listeners during active cycles, from 4.96M toward 8M+",
          ],
        },
      ],
      footnote: "Stream figures are Spotify catalog aggregates as of August 31, 2026 for MEOVV and September 2, 2026 for peers. Chart data covers national Spotify daily charts across 74 live territories, checked September 1, 2026.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Partners",
      title: "Partner-Led Workstreams",
      philosophy: "This document scopes what a performance-marketing partner executes. Several of the highest-value moves in it are owned elsewhere, and they are named here so the sequencing is clear rather than assumed.",
      intro: "MEOVV is served by a label, a global distribution partner and a regional joint venture, each of which already holds capabilities this plan depends on. Nothing below is proposed as new headcount.",
      subBlocks: [
        {
          label: "A",
          title: "Held by the Label",
          strategy: "Release scheduling, A&R and title-track selection, physical product and packaging, the fan application and membership product, domestic promotion and broadcast, and artist scheduling against the live routing in vertical two. The catalog-growth argument in vertical four is a label decision, not a marketing one.",
          components: {
            heading: "Dependencies this plan carries",
            items: [
              "Availability windows for a first ticketed date, which sets the entire vertical-two timeline",
              "Membership product changes needed to attach presale and ticket priority",
              "Approval to restock the sold-out lightstick and extend the merchandise line",
              "Willingness to redirect release spend on a fourteen-day post-release read",
            ],
          },
        },
        {
          label: "B",
          title: "Held by the Global Distribution Partner",
          strategy: "The US storefront, its email service provider, and US retail relationships are all operated on the distribution side. Two of the fastest fixes in this audit sit here: switching on capture against the ESP already installed, and extending the store beyond CDs.",
          components: {
            heading: "Dependencies this plan carries",
            items: [
              "Store access to add a capture unit against the existing ESP",
              "Product expansion on the US storefront, and a US-shippable lightstick path",
              "US retail placement on the next cycle, building on the national exclusives the first EP already ran",
              "Confirmation of the current distribution arrangement before any US retail plan is committed",
            ],
          },
        },
        {
          label: "C",
          title: "Held by Transparent Arts",
          strategy: "US and regional go-to-market, promoter and venue relationships, retail and pop-up execution, press and relationship management in the markets the live routing targets, and on-the-ground management where MEOVV currently has no presence.",
          components: {
            heading: "Where this matters most",
            items: [
              "Promoter introductions in Southeast Asia and Australia, where the group has no live history at all",
              "Retail and pop-up execution in the markets vertical two routes through",
              "Press and partner relationships in the United States, where the listening exists and the footprint does not",
            ],
          },
        },
        {
          label: "D",
          title: "Held by Crowd Control Digital",
          strategy: "Paid media across all markets, the first-party capture build and its ongoing operation, the content system and its measurement, the video and performance analysis that produced this audit, and the reporting layer that ties every workstream back to first-party contacts, ticket sales and streams.",
          components: {
            heading: "What we operate",
            items: [
              "Capture infrastructure, segmentation and lifecycle messaging",
              "Paid social and DSP-facing media in every market on the routing plan",
              "Content measurement, franchise performance and the fourteen-day post-release read",
              "A single reporting surface across streaming, social, commerce and ticketing",
            ],
          },
        },
      ],
      footnote: "Division of responsibility is proposed rather than agreed. Commercial terms are scoped separately and do not appear in this document.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve weeks, sequenced so the capture layer is live before anything is pointed at it. Week dates are indicative and shift to the label's release and availability calendar. The first four weeks are deliberately unglamorous: they are the configuration work that every later week compounds through.",
      weeks: [
        { index: 1, label: "W1", dates: "Sep 14" },
        { index: 2, label: "W2", dates: "Sep 21" },
        { index: 3, label: "W3", dates: "Sep 28" },
        { index: 4, label: "W4", dates: "Oct 5", highlight: true, note: "Capture live" },
        { index: 5, label: "W5", dates: "Oct 12" },
        { index: 6, label: "W6", dates: "Oct 19" },
        { index: 7, label: "W7", dates: "Oct 26" },
        { index: 8, label: "W8", dates: "Nov 2", highlight: true, note: "Franchises running" },
        { index: 9, label: "W9", dates: "Nov 9" },
        { index: 10, label: "W10", dates: "Nov 16" },
        { index: 11, label: "W11", dates: "Nov 23" },
        { index: 12, label: "W12", dates: "Nov 30", highlight: true, note: "First on-sale ready" },
      ],
      workstreams: [
        {
          name: "Owned-Audience Capture",
          cells: [
            { weekIndex: 1, intensity: "high", label: "Audit access" },
            { weekIndex: 2, intensity: "high", label: "Build units" },
            { weekIndex: 3, intensity: "high", label: "Landing page" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "Capture live" },
            { weekIndex: 5, intensity: "medium", label: "Welcome flow" },
            { weekIndex: 6, intensity: "medium", label: "Welcome flow" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", label: "SMS layer" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "medium", label: "Segmentation" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "Presale-ready" },
          ],
        },
        {
          name: "Live Business Build",
          cells: [
            { weekIndex: 1, intensity: "low", label: "Demand map" },
            { weekIndex: 2, intensity: "medium", label: "Claim profiles" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium", label: "Market shortlist" },
            { weekIndex: 5, intensity: "high", label: "Promoter intros" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high", milestone: true, label: "Market selected" },
            { weekIndex: 8, intensity: "medium", label: "Venue and date" },
            { weekIndex: 9, intensity: "high", label: "Ticketing setup" },
            { weekIndex: 10, intensity: "high", label: "Membership tie-in" },
            { weekIndex: 11, intensity: "high", label: "Announce build" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "On-sale plan" },
          ],
        },
        {
          name: "Content System",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "Queue audit" },
            { weekIndex: 2, intensity: "high", label: "Daily floor" },
            { weekIndex: 3, intensity: "high", label: "US slot on" },
            { weekIndex: 4, intensity: "high", label: "End-card standard" },
            { weekIndex: 5, intensity: "high", label: "Franchise 1 build" },
            { weekIndex: 6, intensity: "high", label: "Franchise 1 live" },
            { weekIndex: 7, intensity: "high", label: "Franchise 2 build" },
            { weekIndex: 8, intensity: "high", milestone: true, label: "Both running" },
            { weekIndex: 9, intensity: "medium", label: "IG-first switch" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium", label: "Mix rebalance" },
            { weekIndex: 12, intensity: "high", label: "Announce assets" },
          ],
        },
        {
          name: "DSP & Catalog",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "medium", label: "Baseline set" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 4, intensity: "medium", label: "Playlist mapping" },
            { weekIndex: 5, intensity: "medium", label: "Catalog into content" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "Halo plan" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium", label: "14-day read process" },
            { weekIndex: 10, intensity: "low" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium", label: "Next-cycle brief" },
          ],
        },
        {
          name: "Measurement & Reporting",
          cells: [
            { weekIndex: 1, intensity: "high", label: "Baselines locked" },
            { weekIndex: 2, intensity: "medium", label: "Tracking build" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "Dashboard live" },
            { weekIndex: 5, intensity: "low" },
            { weekIndex: 6, intensity: "medium", label: "First read-out" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "medium", label: "Mid-point review" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "low" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "Quarter review" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Access, baselines and the demand map",
          items: [
            "Obtain access to the US storefront, its email service provider, and every social and link-management account",
            "Lock baselines on every metric this plan is measured against, including a zero baseline on first-party contacts",
            "Build the market demand map from listening geography and live-event registration density",
            "Audit the existing content queue to establish what a daily floor can be filled with immediately",
          ],
        },
        {
          weekIndex: 2,
          title: "Capture build and the cadence switch",
          items: [
            "Build the capture units against the ESP already installed on the store, with consent handling by market",
            "Move to a one-post-per-day floor across TikTok and Instagram, breaking existing batches into a queue",
            "Claim and complete the group's profiles on both major live-event platforms",
            "Stand up tracking so capture, content and commerce report into one place from the start",
          ],
        },
        {
          weekIndex: 4,
          title: "Capture goes live",
          items: [
            "First-party capture live on the store and the landing page, with the welcome sequence triggering",
            "End-card standard applied to all new high-reach posts, pointing at the capture page",
            "Bio links rewired across all four platforms so at least one slot on each holds an owned destination",
            "Reporting dashboard live and reporting weekly against the week-one baselines",
          ],
        },
        {
          weekIndex: 7,
          title: "Market selection",
          items: [
            "First live market selected on demand data rather than convenience, with promoter conversations underway",
            "Second content franchise in build, first franchise running with two weeks of performance data",
            "Release halo plan agreed with the label ahead of the next cycle",
            "Capture volume and source mix reviewed; underperforming acquisition slots reallocated",
          ],
        },
        {
          weekIndex: 8,
          title: "Both franchises running",
          items: [
            "Both named franchises live on fixed weekly slots, with medians measured against the account baseline",
            "Venue and date under discussion for the first ticketed show",
            "SMS layer added alongside email in the markets where consent is clean",
            "Mid-point review against every KPI, with the content mix rebalanced on the evidence",
          ],
        },
        {
          weekIndex: 12,
          title: "On-sale ready",
          items: [
            "First-party list sized, segmented by market and ready to carry a presale",
            "Membership presale mechanics built and tested end to end",
            "Announcement assets produced and scheduled across owned channels and the live-event platforms",
            "Quarter review: conversion ratio movement, contacts captured, median post reach, and the release-halo plan for the next cycle",
          ],
        },
      ],
      footnote: "Dates are indicative and move to the label's release and artist-availability calendar. The sequencing does not: capture is built before reach is pointed at it, and the live market is selected on demand data before any commitment is made.",
    },
  ],
};
