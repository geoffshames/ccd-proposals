import type { StrategyPlanData } from "../plan-context";

export const fiftyFiftyPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/fifty-fifty/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "fifty-fifty-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Brand Audit & Growth Strategy",
    title: "FIFTY FIFTY",
    subtitle: "A fandom-first audit of what FIFTY FIFTY has quietly rebuilt, and the conversion strategy that turns it into a business.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/fifty-fifty/fifty-fifty-group.jpg",
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
      subtitle: "The fandom has been rebuilding for four straight quarters. Almost nothing in the business is built to receive it.",
      body: [
        "There is a number in FIFTY FIFTY's data that does not appear in the press coverage, and it is the reason for this document. Spotify followers have not posted a down month in forty-five months. Not one. Follower acquisition bottomed at 496 a day in Q3 2025 and has risen every quarter since, to 1,079 a day now, the highest rate in almost two years, while listener volume held flat. The follower-to-listener ratio set its all-time high five days before this audit was written. Physical shipments went from 39,373 on the Cupid-era release to 108,313 on Day & Night, with a confirmed Hanteo first week of 100,121. The listener floor between eras fell 24.3 percent, then 4.3 percent, and then rose 1.5 percent. It stopped falling.",
        "Every one of those lines describes the same thing: a real fandom accumulating underneath a catalog that the market still meets through one 2023 record. The audit half of this document measures both sides of that gap precisely, across consumption, catalog behavior, the U.S. audience, a frame-level read of 105 videos, and every owned surface a fan could convert on. The strategy half builds the missing layer. None of it depends on landing another global hit, which is the point: the fandom that is already arriving has nowhere to go, and that is a solvable problem on a known timeline.",
      ],
      supports: {
        heading: "What This Document Covers",
        items: [
          "Market position against a thirteen-act comp set spanning K-pop peers, viral-hit survivors, and groups that rebuilt after a lineup change",
          "Consumption and catalog analysis: concentration, decay, the listener floor, and the follower curve that runs against all of it",
          "U.S. audience and targeting, built on the fact that the United States is the number one market on every platform measured",
          "Video intelligence: a frame-level analysis of 105 FIFTY FIFTY and competitor videos with real performance data joined to every one",
          "Infrastructure audit: forty-one owned surfaces checked one by one for whether a fan can join a list, buy a product, or convert at all",
          "The conversion strategy: four execution verticals, partner-led workstreams, and a twelve-week timeline",
        ],
      },
      goals: {
        heading: "12-Month Targets",
        items: [
          "First-party data: from effectively zero captured fans to a 100K+ U.S. list, the asset that makes every other line cheaper",
          "Physicals: from 88,247 to 150K+ on the next full cycle, on pre-orders rather than post-release catch-up",
          "Fandom conversion: hold the follower curve above 1,000 net adds a day through a full release cycle",
          "Short form: median per-post views up 3x on a rebalanced mix, on fewer posts rather than more",
          "U.S.: convert the largest listener market into a first sold-out headline showcase and a first retail moment",
          "Instagram: from 956K to 2M+, on the platform the data says is already the most efficient one",
        ],
      },
      charts: [
        {
          kind: "line",
          title: "The Divergence: Listeners and Followers, 45 Months",
          subtitle: "Both series indexed to 100 at July 2023, so the two shapes can be read against each other.",
          unit: "index, Jul 2023 = 100",
          series: [
            {
              name: "Spotify monthly listeners",
              color: "#8A8A8A",
              points: [
                  { x: "2023-07", y: 100.0 },
                  { x: "2023-10", y: 52.8 },
                  { x: "2024-01", y: 46.9 },
                  { x: "2024-04", y: 31.4 },
                  { x: "2024-07", y: 26.3 },
                  { x: "2024-10", y: 26.8 },
                  { x: "2025-01", y: 21.5 },
                  { x: "2025-04", y: 20.4 },
                  { x: "2025-07", y: 20.5 },
                  { x: "2025-10", y: 18.9 },
                  { x: "2026-01", y: 18.6 },
                  { x: "2026-04", y: 19.4 },
                  { x: "2026-08", y: 18.9 },
              ],
            },
            {
              name: "Spotify followers",
              color: "#FD3737",
              points: [
                  { x: "2023-07", y: 100.0 },
                  { x: "2023-10", y: 124.8 },
                  { x: "2024-01", y: 138.6 },
                  { x: "2024-04", y: 147.1 },
                  { x: "2024-07", y: 153.8 },
                  { x: "2024-10", y: 162.0 },
                  { x: "2025-01", y: 172.6 },
                  { x: "2025-04", y: 177.1 },
                  { x: "2025-07", y: 182.1 },
                  { x: "2025-10", y: 187.2 },
                  { x: "2026-01", y: 194.9 },
                  { x: "2026-04", y: 202.8 },
                  { x: "2026-08", y: 214.7 },
              ],
            },
          ],
          markers: [{ x: "2024-10", label: "Current lineup" }],
          note: "Indexed because the two series are thirty times apart in absolute size, and on a single linear axis the follower line would read as a flat rule along the bottom. In absolute terms listeners went from 32.46M to 6.13M while followers went from 1.06M to 2.28M. Listeners settled at 18.9 percent of their July 2023 level. Followers are at 214.7 percent of theirs and still climbing.",
          source: "Chartmetric daily series, artist 9966037, n=1,364 points, pulled 2026-09-03",
        },
      ],
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Consumption and fandom are two separate businesses. FIFTY FIFTY is mid-table on one and near the bottom on the other, and the gap between them is the entire opportunity.",
      intro: "Thirteen acts, chosen rather than listed, spanning three questions. The K-pop peers say what a girl group at this scale should be converting. The viral-hit survivors say what an audience acquired the way FIFTY FIFTY's was is worth years later. The rebuild cases say what is actually achievable after a lineup change. Spotify monthly listeners is the tiering spine, pulled 2026-09-03.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          strategy: "Tiers are cut at 20M and 10M monthly listeners. Both cut points were taken from the gap distribution rather than imposed on it, and the two rejected cuts are named in the source notes so the reasoning is checkable.",
          featureTiersHeading: "The Comparison Set, Tiered by Monthly Listeners",
          featureTiers: [
            {
              label: "Tier 1 / Global Consumption Scale, 20M+",
              artists: [
                {
                  name: "KATSEYE",
                  monthlyListeners: "37.7M Monthly Listeners",
                  instagram: "12.7M Spotify Followers",
                  reference: "WILD, Aug 2026",
                  note: "A Korean-system girl group operating as a U.S. pop act, and the direct competitor for the exact audience Cupid won. Largest U.S. listener base in the set by a factor of six. The honest benchmark for whether a K-pop girl group can hold America.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "21.4M Monthly Listeners",
                  instagram: "7.7M Spotify Followers",
                  reference: "Mamihlapinatapai, Apr 2026",
                  note: "The closest active analogue on the axis that matters. Broke on a viral record, carries a Western streaming footprint ahead of its fandom, and posts a ratio within 4 percent of FIFTY FIFTY's. This is what the same profile looks like at 3.5x the scale.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "20.4M Monthly Listeners",
                  instagram: "11.2M Spotify Followers",
                  reference: "PUREFLOW pt.1, May 2026",
                  note: "Fourth generation at genuine scale, and a documented lineup removal eleven weeks after debut that the group recovered from completely. Proof that a lineup change is survivable at the top of the market.",
                },
                {
                  name: "Glass Animals",
                  monthlyListeners: "24.6M Monthly Listeners",
                  instagram: "4.9M Spotify Followers",
                  reference: "Heat Waves, delayed viral climb",
                  note: "The ceiling case for how long a virally-acquired audience persists without a fandom under it. Still carrying 24.6M listeners years later on a ratio of 0.197.",
                },
              ],
            },
            {
              label: "Tier 2 / 10M to 20M",
              artists: [
                {
                  name: "NewJeans",
                  monthlyListeners: "13.7M Monthly Listeners",
                  instagram: "13.4M Spotify Followers",
                  reference: "Supernatural, Jun 2024",
                  note: "The cost of a dispute that does not resolve. No new music in twenty-seven months, and the ratio of 0.981 is what a fandom looks like when it stays loyal through inactivity. Read as a warning, not a target.",
                },
                {
                  name: "Little Mix",
                  monthlyListeners: "14.4M Monthly Listeners",
                  instagram: "12.4M Spotify Followers",
                  reference: "Sweet Melody, UK No. 1, 2021",
                  note: "The only Western precedent for a girl group continuing after a departure and getting bigger. Took a UK No. 1 and Best British Group as a three-piece. On hiatus since 2022, so the current numbers are a decay curve and that is itself instructive.",
                },
                {
                  name: "CKay",
                  monthlyListeners: "11.2M Monthly Listeners",
                  instagram: "2.2M Spotify Followers",
                  reference: "Love Nwantiti",
                  note: "Broken globally by sped-up TikTok audio into Western DSPs from outside the Anglo market, which is mechanically the same acquisition path Cupid took. The closest non-K-pop analogue to how this audience was actually built.",
                },
              ],
            },
            {
              label: "Tier 3 / Under 10M, where FIFTY FIFTY sits",
              artists: [
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "7.96M Monthly Listeners",
                  instagram: "2.5M Spotify Followers",
                  reference: "Lemon Tang, Jun 2026",
                  note: "Debuted 2025, so this is what a well-resourced new girl group looks like from zero in the current market. Shipped 618,994 in release week. Relaunched FIFTY FIFTY is competing as a rookie whether it wants to or not, and this is the rookie bar.",
                },
                {
                  name: "i-dle",
                  monthlyListeners: "7.03M Monthly Listeners",
                  instagram: "11.8M Spotify Followers",
                  reference: "We Made, Jul 2026",
                  note: "The best case in the rebuild set. Lost a member to a public controversy, kept label and catalog, and grew release-week album sales roughly eightfold. Ratio of 1.672 on fewer listeners than FIFTY FIFTY. The ceiling for what a rebuild achieves.",
                },
                {
                  name: "FIFTY FIFTY",
                  monthlyListeners: "6.15M Monthly Listeners",
                  instagram: "2.29M Spotify Followers",
                  reference: "Imperfect-I'mperfect, Jun 2026",
                  note: "Number one U.S. market share of any Korean-system act in the set except KATSEYE, at 21.5 percent. Mid-table on consumption, near the bottom on conversion. The distance between those two positions is what this document is about.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "5.76M Monthly Listeners",
                  instagram: "7.7M Spotify Followers",
                  reference: "REVIVE+, Feb 2026",
                  note: "The single most important row here. IVE has fewer monthly listeners than FIFTY FIFTY and ships 13.6 times as many albums. It is the control that proves consumption and fandom are separate businesses, and that the second one is the one that pays.",
                },
                {
                  name: "ARTMS",
                  monthlyListeners: "0.59M Monthly Listeners",
                  instagram: "0.29M Spotify Followers",
                  reference: "Hyper-Ego, Aug 2026",
                  note: "The closest legal parallel in K-pop, and the sharpest number in the set. ARTMS shipped 69,498 in release week against FIFTY FIFTY's 70,650, on one tenth of the reach.",
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
                    { x: "KATSEYE", y: 37714478 },
                    { x: "Glass Animals", y: 24578064 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "LE SSERAFIM", y: 20445854 },
                    { x: "Little Mix", y: 14395254 },
                    { x: "NewJeans", y: 13713434 },
                    { x: "CKay", y: 11211558 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "PSY", y: 7323394 },
                    { x: "i-dle", y: 7030049 },
                    { x: "FIFTY FIFTY", y: 6151601 },
                    { x: "IVE", y: 5758044 },
                    { x: "ARTMS", y: 589277 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "Read this chart and the next one together. On volume FIFTY FIFTY sits above IVE and just below i-dle. On what that volume is worth, the order inverts completely.",
              source: "Chartmetric, pulled 2026-09-03",
            },
            {
              kind: "hbars",
              title: "Fandom Conversion: Followers per Monthly Listener",
              subtitle: "FIFTY FIFTY at 0.372 sits in the viral-survivor band, not the K-pop fandom band. Every Korean act in the set is above it, several by a factor of four.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "Glass Animals", y: 0.197 },
                    { x: "CKay", y: 0.2 },
                    { x: "PSY", y: 0.272 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "FIFTY FIFTY", y: 0.372 },
                    { x: "ARTMS", y: 0.499 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "Little Mix", y: 0.863 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "IVE", y: 1.332 },
                    { x: "i-dle", y: 1.672 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "The three acts below FIFTY FIFTY are all Western viral-hit survivors. That is the company this ratio currently keeps, and the ratio is nonetheless at its own all-time high, which is the encouraging half of the reading.",
              source: "Chartmetric, pulled 2026-09-03",
            },
          ],
        },
        {
          label: "B",
          title: "The Number That Reframes the Set",
          strategy: "Album shipments per thousand monthly listeners is the cleanest available proxy for what a unit of reach is actually worth. It removes scale from the comparison entirely and asks only how well an act converts attention into a paid transaction.",
          components: {
            heading: "What a Thousand Listeners Is Worth, by Act",
            items: [
              "IVE converts at 166.5 albums per thousand monthly listeners, on fewer listeners than FIFTY FIFTY",
              "ARTMS converts at 117.9, i-dle at 79.1, Hearts2Hearts at 77.8, LE SSERAFIM at 30.5, ILLIT at 20.6",
              "FIFTY FIFTY converts at 11.5, which is 14.5x below IVE and roughly half of ILLIT, the act whose streaming profile it most resembles",
              "ARTMS shipped 69,498 in release week against FIFTY FIFTY's 70,650, on one tenth of the monthly listeners. Everything FIFTY FIFTY has that ARTMS does not is currently worth 1,152 albums",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Album Shipments per 1,000 Monthly Listeners",
              subtitle: "The conversion gap in one number. Korean physical business only, so the three Western acts are excluded rather than estimated.",
              series: [
                {
                  name: "Albums per 1k monthly listeners",
                  points: [
                    { x: "IVE", y: 166.5 },
                    { x: "ARTMS", y: 117.9 },
                    { x: "i-dle", y: 79.1 },
                    { x: "Hearts2Hearts", y: 77.8 },
                    { x: "NewJeans", y: 71.4 },
                    { x: "LE SSERAFIM", y: 30.5 },
                    { x: "ILLIT", y: 20.6 },
                    { x: "FIFTY FIFTY", y: 11.5 },
                    { x: "KATSEYE", y: 3.2 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "KATSEYE at 3.2 is not a failure, it is a different business: a U.S.-facing act whose economics run through touring and brand rather than Korean physicals. NewJeans divides a June 2024 shipment by a September 2026 listener count and is directional only.",
              source: "Circle Chart release-week shipments and Chartmetric listeners, both pulled 2026-09-03",
            },
          ],
        },
        {
          label: "C",
          title: "How the Set Splits",
          strategy: "Three readings come out of the table, and each one points at a different part of the plan.",
          components: {
            heading: "What the Comparison Establishes",
            items: [
              "FIFTY FIFTY's consumption is healthier than its tier placement suggests: 1.07x IVE on monthly listeners and 1.52x IVE on U.S. listeners specifically",
              "Its conversion sits with Western viral survivors rather than with Korean acts, which means the fix is structural rather than creative",
              "The U.S. share of listening, 21.5 percent, is the second highest of any Korean-system act in the set behind only KATSEYE. That is an asset nobody is currently spending against",
              "The rebuild precedents say the album business recovers first and the mass market recovers slowly or not at all. Plan for the first and treat the second as upside",
            ],
          },
        },
      ],
      footnote: "Comp set selection, the two rejected tier cut points, and the per-act rationale are documented in full in the research appendix. Geographic footprint was tested as a differentiator and discarded: FIFTY FIFTY, ILLIT, IVE and i-dle return near-identical Southeast Asia and Latin America city profiles, and no U.S. city appears in the top ten for any act in the set including KATSEYE. The footprint is shared. The conversion rate is not.",
    },

    // ===================================================================
    // 03. Consumption & Catalog Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption & Catalog Analysis",
      philosophy: "One line in this dataset compounds. Everything else is flat or slowly amortizing. The whole strategy follows from protecting and feeding the line that compounds.",
      intro: "Built from kworb Spotify chart archives and a 1,364-point Chartmetric daily series covering 2022-11-30 to 2026-08-31. Chart-coverage gaps are treated as gaps throughout and never as zero-stream weeks, because averaging a chart exit as a zero manufactures a collapse that did not happen.",
      subBlocks: [
        {
          label: "A",
          title: "Fandom Conversion, Month by Month",
          strategy: "The ratio has two distinct phases, and only the second one is evidence of anything. Through early 2025 it climbed because the denominator was collapsing as passive catalog listeners churned out. From March 2025 the denominator stabilized around 6.1M to 6.8M and the ratio kept climbing anyway, which means the numerator started doing the work.",
          components: {
            heading: "What the Ratio Says Now",
            items: [
              "37.15 percent on current snapshot fields, 37.26 percent at the last full month-end, and an all-time daily maximum of 37.30 percent set on 2026-08-29",
              "Twelve-month move from 31.93 to 37.26 percent, up 5.33 points, a 16.7 percent relative gain",
              "Followers added roughly 329,000 in twelve months against flat listeners",
              "Above roughly 20 percent an act reads as fandom-driven rather than playlist-driven. FIFTY FIFTY is now near double that threshold",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "Follower-to-Listener Ratio by Month",
              subtitle: "Forty-five months. The all-time high was set five days before this audit.",
              unit: "ratio",
              series: [
                {
                  name: "Followers per monthly listener",
                  color: "#FD3737",
                  points: [
                    { x: "2023-07", y: 0.033 },
                    { x: "2023-10", y: 0.077 },
                    { x: "2024-01", y: 0.097 },
                    { x: "2024-04", y: 0.153 },
                    { x: "2024-07", y: 0.191 },
                    { x: "2024-10", y: 0.198 },
                    { x: "2025-01", y: 0.263 },
                    { x: "2025-04", y: 0.285 },
                    { x: "2025-07", y: 0.291 },
                    { x: "2025-10", y: 0.324 },
                    { x: "2026-01", y: 0.342 },
                    { x: "2026-04", y: 0.343 },
                    { x: "2026-08", y: 0.373 },
                  ],
                },
              ],
              markers: [{ x: "2025-04", label: "Denominator stabilizes" }],
              note: "Everything left of the marker is decay arithmetic. Everything right of it is fan accumulation on a flat listener base, and that is the part that matters.",
              source: "Chartmetric daily series, artist 9966037, pulled 2026-09-03",
            },
            {
              kind: "bars",
              title: "Spotify Follower Net Adds per Day, by Quarter",
              subtitle: "The only compounding line in the dataset. Four consecutive quarters of acceleration on flat listener volume.",
              unit: "followers/day",
              series: [
                {
                  name: "Net adds per day",
                  points: [
                    { x: "Q3 2024", y: 725 },
                    { x: "Q4 2024", y: 1294 },
                    { x: "Q1 2025", y: 802 },
                    { x: "Q2 2025", y: 583 },
                    { x: "Q3 2025", y: 496 },
                    { x: "Q4 2025", y: 836 },
                    { x: "Q1 2026", y: 902 },
                    { x: "Q2 2026", y: 965 },
                    { x: "Q3 2026", y: 1079 },
                  ],
                },
              ],
              highlightX: ["Q3 2025", "Q3 2026"],
              note: "Net adds are a first difference, so this cannot be inflated by a shrinking listener denominator the way the ratio can. Acquisition bottomed at 496 a day in Q3 2025 and has risen every quarter since to 1,079, the highest rate since Q4 2024. Q3 2026 is a partial quarter.",
              source: "Chartmetric daily follower series, pulled 2026-09-03",
            },
          ],
        },
        {
          label: "B",
          title: "Catalog Concentration",
          strategy: "The catalog is heavily weighted toward one 2023 record. That is the honest starting position. The more useful reading is the second column: what the current lineup's output earns today relative to how much of the catalog it represents.",
          components: {
            heading: "The Two Columns That Matter",
            items: [
              "The Cupid franchise across eight versions is 84.22 percent of all-time streams and 74.90 percent of current daily",
              "Original-lineup non-Cupid material across seven tracks is 9.96 percent of all-time and 6.29 percent of current daily",
              "Post-lineup-change output across forty tracks is 5.82 percent of all-time streams but 18.81 percent of current daily, which is 3.2x its catalog weight",
              "Two album cuts are actively compounding: Gravity is running at 119 percent of its own lifetime daily average and is the largest non-Cupid earner at 18,108 a day, and Genie Magic at 110 percent out-streams its own EP's lead single",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "Share of Catalog vs Share of What It Earns Today",
              subtitle: "Current-lineup output is a small share of the catalog and a much larger share of current daily streams.",
              unit: "% share",
              series: [
                {
                  name: "Share of all-time streams",
                  color: "#8A8A8A",
                  points: [
                    { x: "Cupid franchise", y: 84.22 },
                    { x: "Original, non-Cupid", y: 9.96 },
                    { x: "Current lineup", y: 5.82 },
                  ],
                },
                {
                  name: "Share of current daily",
                  color: "#FD3737",
                  points: [
                    { x: "Cupid franchise", y: 74.9 },
                    { x: "Original, non-Cupid", y: 6.29 },
                    { x: "Current lineup", y: 18.81 },
                  ],
                },
              ],
              note: "Forty tracks carrying 5.82 percent of the catalog are producing 18.81 percent of daily streams. The current lineup's material is not being consumed at the rate its catalog share implies, it is being consumed well above it. The gap is a discovery and promotion problem, not a quality one.",
              source: "kworb.net songs page, 55 tracks, pulled 2026-09-02. Track totals reconcile to kworb's stated artist totals to within 0.01 percent.",
            },
          ],
        },
        {
          label: "C",
          title: "The Listener Floor",
          strategy: "The floor is the trough monthly-listener level between releases. It is the most honest measure of what an act keeps rather than what it rents, because it strips out every release spike. A rising floor means fan capture is working.",
          components: {
            heading: "Floor Behavior, Era over Era",
            items: [
              "Aug 2024 floor 8.34M, Apr 2025 floor 6.31M, a 24.3 percent fall",
              "Dec 2025 floor 6.04M, a 4.3 percent fall, the decline flattening hard",
              "Aug 2026 floor 6.12M, a 1.5 percent rise, the first increase in the series",
              "Inter-era compound weekly decay decelerated in step: 2.49 percent, then 1.51 percent, then 0.57 percent",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "The Listener Floor, Era over Era",
              subtitle: "The trough between releases stopped falling and turned up.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Floor",
                  points: [
                    { x: "Aug 2024", y: 8335862 },
                    { x: "Apr 2025", y: 6306990 },
                    { x: "Dec 2025", y: 6035209 },
                    { x: "Aug 2026", y: 6123844 },
                  ],
                },
              ],
              highlightX: ["Aug 2026"],
              note: "Read alongside the decay rates, which went 2.49 percent to 1.51 percent to 0.57 percent per week between eras. The audience is leaving more slowly with every cycle, and in the most recent window it stopped leaving.",
              source: "Chartmetric monthly listeners, 30-day rolling mean per inter-release trough, pulled 2026-09-03",
            },
            {
              kind: "bars",
              title: "Compound Weekly Listener Decay Between Releases",
              unit: "% per week",
              series: [
                {
                  name: "Weekly decay",
                  points: [
                    { x: "Era 1 to 2", y: 2.49 },
                    { x: "Era 2 to 3", y: 1.51 },
                    { x: "Era 3 to 4", y: 0.57 },
                  ],
                },
              ],
              source: "Chartmetric daily series, pulled 2026-09-03",
            },
          ],
        },
        {
          label: "D",
          title: "Physical Sales, The Line Trending the Right Way",
          strategy: "Physicals are the one part of this business that has grown through the lineup change, and they have grown without a hit to support them. That is the clearest available proof that a real fandom exists and will transact.",
          components: {
            heading: "What the Physical Arc Shows",
            items: [
              "Circle cumulative went 39,373 on The Beginning: Cupid, 38,455 on Love Tune, 108,313 on Day & Night, and 88,247 on Imperfect-I'mperfect to date",
              "Day & Night's confirmed Hanteo first week was 100,121, with day one above 46,000",
              "That Hanteo first week exceeded Circle's entire release-week shipment of 26,359 by nearly four times, and Circle only caught up in late July on a version re-release",
              "The gap between demand and shipment is a supply and version-timing problem, which is the most fixable category of problem in this document",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "Album Shipments by Release",
              subtitle: "Circle cumulative per release, with the current lineup's two full releases at the right.",
              unit: "units",
              series: [
                {
                  name: "Circle cumulative",
                  color: "#FD3737",
                  points: [
                    { x: "The Beginning: Cupid", y: 39373 },
                    { x: "Love Tune", y: 38455 },
                    { x: "Day & Night", y: 108313 },
                    { x: "Imperfect-I'mperfect", y: 88247 },
                  ],
                },
                {
                  name: "Release-week shipment",
                  color: "#8A8A8A",
                  points: [
                    { x: "The Beginning: Cupid", y: 14069 },
                    { x: "Love Tune", y: 14525 },
                    { x: "Day & Night", y: 26359 },
                    { x: "Imperfect-I'mperfect", y: 70650 },
                  ],
                },
              ],
              note: "The two bars converging on the right is the story. Release-week shipment went from 19 percent of eventual cumulative on Day & Night to 80 percent on Imperfect-I'mperfect, meaning supply is finally arriving when demand does. Imperfect's cumulative is 2026 to date and will grow.",
              source: "Circle Chart, read live 2026-09-03. Day & Night sums two version lines. Hanteo first weeks confirmed via Soompi.",
            },
          ],
        },
        {
          label: "E",
          title: "Markets and Catalog Scale",
          strategy: "The geographic picture is the single most under-exploited fact in this audit. FIFTY FIFTY is an American act by consumption and a Korean act by promotion, and nothing in the current operation is built around the first half of that sentence.",
          components: {
            heading: "Where the Listening Actually Is",
            items: [
              "The United States is the number one market on Spotify at 1,319,600 listeners, 21.45 percent of global",
              "South Korea ranks eighteenth at 115,029 listeners, 1.87 percent. The U.S. is 11.5x the home market",
              "The U.S. is also number one on Instagram at 27.99 percent of followers, on TikTok at 17.00 percent, and on YouTube at 17.27 percent",
              "Southeast Asia carries the next four positions: Indonesia 682,061, the Philippines 653,540, Malaysia 497,717, and Taiwan 292,381",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Spotify Monthly Listeners",
              subtitle: "Korea is eighteenth. The market that funds a K-pop act's domestic promotion is not the market that listens to this one.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 1319600 },
                    { x: "Indonesia", y: 682061 },
                    { x: "Philippines", y: 653540 },
                    { x: "Malaysia", y: 497717 },
                    { x: "Germany", y: 449011 },
                    { x: "Poland", y: 422723 },
                    { x: "Taiwan", y: 292381 },
                    { x: "Australia", y: 260388 },
                    { x: "Brazil", y: 224759 },
                    { x: "Mexico", y: 216504 },
                    { x: "United Kingdom", y: 215039 },
                    { x: "Japan", y: 157054 },
                    { x: "South Korea", y: 115029 },
                  ],
                },
              ],
              highlightX: ["United States", "South Korea"],
              note: "Country-level rows carry Chartmetric's own estimate flag and should be read as proportions rather than exact counts. The proportions are not close enough for the ranking to be in doubt.",
              source: "Chartmetric where-people-listen, pulled 2026-09-03",
            },
          ],
        },
      ],
      footnote: "Method note carried from the research: 230 of 1,364 listener points are flagged by Chartmetric as interpolated, clustered in 2025 and absent from 2023, so the 2023 era is fully measured and the 2025 trough is directional. Chart-coverage gaps are marked as gaps throughout and never zero-filled.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro: "The United States is FIFTY FIFTY's largest market on all four platforms measured, and it is the market with the least built around it. This section defines who is actually there and what would reach them.",
      thesis: "The audience splits cleanly in two, and the split is visible in the engagement data rather than the follower data. America is where the scale is and it behaves passively. Asia is where the intensity is and it behaves loudly. A plan that reads only follower counts will mistake the quiet market for the small one.",
      metrosLabel: "Priority U.S. Metros",
      metros: [
        { name: "Los Angeles", tier: "primary" },
        { name: "New York", tier: "primary" },
        { name: "Chicago", tier: "primary" },
        { name: "Dallas", tier: "primary" },
        { name: "Atlanta", tier: "secondary" },
        { name: "Houston", tier: "secondary" },
        { name: "Seattle", tier: "secondary" },
        { name: "San Francisco Bay Area", tier: "secondary" },
        { name: "Washington DC", tier: "secondary" },
        { name: "Honolulu", tier: "secondary" },
      ],
      genderDistribution: { female: 77, male: 23 },
      psychographics: [
        {
          label: "The Passive Majority, United States",
          items: [
            "1,319,600 Spotify monthly listeners, 21.45 percent of global and rank one of twenty-three countries",
            "Rank one on Instagram at 27.99 percent of followers, TikTok at 17.00 percent, YouTube at 17.27 percent",
            "Acquired predominantly through a 2023 crossover moment and retained through passive catalog play",
            "Reachable, addressable and almost entirely uncaptured, because no owned surface currently asks them for anything",
          ],
        },
        {
          label: "The Active Minority, Asia",
          items: [
            "Instagram followers skew 77 percent female, but the accounts that actually like posts run 59.6 percent male and 66.3 percent Asian, led by Indonesia and Korea",
            "On YouTube, Korea is 6.9 percent of subscribers and 47.5 percent of comment volume",
            "Indonesia, the Philippines, Malaysia and Taiwan together carry more Spotify listeners than the United States",
            "This is the group that shows up for fancons, buys versions, and drives the comment sections",
          ],
        },
        {
          label: "What Spotify Already Believes",
          items: [
            "Half of current Spotify editorial reach is non-K-pop: BILLIONS CLUB at 949,966 followers, This is Sabrina Carpenter at 778,007, skincare at 98,873",
            "That is 1,826,846 in general-pop reach against 1,762,781 on the K-pop side, and 96 percent of the K-pop side is a single drama-soundtrack placement",
            "Spotify is not programming this act as K-pop, it is programming it as pop",
            "The pitch to editorial should follow the platform's own read rather than fighting it",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "The most-used FIFTY FIFTY asset on TikTok is a third-party sped-up upload the label does not control",
          platforms: ["TikTok"],
          implication: "That upload carries 14,311,597 videos against the official version's 3,002,121, roughly 4.8x, and still drives 112,129 Spotify streams a week. Reclaiming or partnering around that audio is a free distribution asset sitting in plain sight.",
        },
        {
          behavior: "Instagram delivers 3.2x more views per follower than TikTok on identical creative",
          platforms: ["Instagram", "TikTok"],
          implication: "The platform currently treated as secondary is the more efficient one. U.S. paid and organic weight should follow the efficiency, not the follower count.",
        },
        {
          behavior: "Every bio link across 5.6M followers resolves to the same third-party smart link with no capture field",
          platforms: ["Instagram", "TikTok", "YouTube"],
          implication: "The single largest addressable audience in the business currently has no path into a list the label owns.",
        },
      ],
      barriers: [
        {
          barrier: "A U.S. fan who wants to buy has to find a store that nothing links to",
          response: "Point every bio link and every video end card at an owned destination that captures first, then sells.",
        },
        {
          barrier: "A U.S. fan who wants to join has nothing to join. No membership, no list, no SMS",
          response: "Stand up a U.S.-legal first-party capture layer, which Korean data law permits for U.S. residents on U.S. surfaces.",
        },
        {
          barrier: "A U.S. fan who wants to attend has had one theatre run since 2024 and no announced dates",
          response: "Build a single anchor U.S. moment and sell it to the list, rather than announcing to an audience that cannot be reached directly.",
        },
        {
          barrier: "A U.S. fan searching the obvious handle finds an empty channel",
          response: "Recover or redirect the squatted handle, and align naming across every platform.",
        },
      ],
      triggers: [
        {
          trigger: "Gaming and esports crossover content",
          implication: "The highest-performing lane in the entire account by a factor of five, and the one most native to U.S. platform culture.",
        },
        {
          trigger: "A recognisable guest the audience already follows",
          implication: "Guest-led posts that travel into another fandom outperform guest-led posts that import a guest into a FIFTY FIFTY format by 13.6x.",
        },
        {
          trigger: "Physical product with a genuine reason to buy more than one",
          implication: "Confirmed demand of 100,121 in a single Hanteo week exists with almost no U.S. retail infrastructure behind it.",
        },
      ],
      similarArtists: ["ILLIT", "KATSEYE", "Hearts2Hearts", "i-dle", "IVE", "LE SSERAFIM"],
      genres: ["K-pop", "Pop", "Dance", "East Asia pop"],
      platformSignals: [
        { platform: "Spotify", note: "6,151,601 monthly listeners, 2,285,356 followers, U.S. rank one at 21.45 percent" },
        { platform: "TikTok", note: "2,422,487 followers, 49,169,006 likes, U.S. rank one at 17.00 percent" },
        { platform: "Instagram", note: "955,707 followers and the highest views-per-follower of any owned platform" },
        { platform: "YouTube", note: "2,230,000 subscribers, 1,249,962,723 channel views, 24,919,966 monthly video views" },
      ],
      footnote: "Spotify age and gender demographics are not exposed at the current Chartmetric API tier and are recorded as unavailable rather than estimated. The gender split shown is Instagram follower data. U.S. metro priorities are drawn from platform-level country share and standard K-pop U.S. touring geography, not from Spotify city data, because no U.S. city appears in the top ten for any act in the comp set including those with far larger U.S. bases.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Video AI",
      title: "Video Intelligence / 105 Videos, Frame by Frame",
      intro: "Every FIFTY FIFTY and competitor video in this section was ingested into a persistent video-AI knowledge store, analysed frame by frame, and joined to its real performance data. Selection ran against a full enumeration of 5,460 posts rather than a sample. The findings below are what survived cross-checking, including one that overturned our own starting assumption.",
      methodology: [
        { label: "Corpus", value: "105 videos, 60 FIFTY FIFTY and 45 competitor" },
        { label: "Enumerated", value: "5,460 posts across six accounts before selection" },
        { label: "Competitor set", value: "KATSEYE, i-dle, Hearts2Hearts, 15 each" },
        { label: "Eras covered", value: "Original lineup and current lineup, both stratified" },
        { label: "Performance join", value: "Views, likes, comments, shares and engagement rate on every item" },
        { label: "Cross-check", value: "Independent caption scan of all 1,006 owned TikTok posts" },
      ],
      corpusStats: [
        { label: "Videos analysed", value: "105", detail: "60 owned, 45 competitor, zero ingest failures" },
        { label: "Posts with any CTA", value: "3 of 60", detail: "0.5 percent across the full 1,006-post caption scan" },
        { label: "Best-performing lane", value: "584,750", detail: "Median views on gaming and esports content, 2026" },
        { label: "Share of output it represents", value: "3.7%", detail: "Ten posts out of 272 in 2026" },
      ],
      mixColumnLabel: "FIFTY FIFTY",
      benchmarkColumnLabel: "Comp set",
      mixHeading: "Output Against the Comp Set",
      mixIntro: "Posting volume is comparable across the set. Output per post is not, and that is the useful part: whatever is wrong here, it is not effort.",
      mixRows: [
        {
          metric: "Posts in 2026",
          subject: "272",
          benchmark: "280 to 551",
          read: "inline",
          note: "KATSEYE 280, i-dle 356, Hearts2Hearts 551. Volume is not the differentiator.",
        },
        {
          metric: "Median views per post, 2026",
          subject: "94,100",
          benchmark: "431,000 to 7,900,000",
          read: "behind",
          note: "i-dle 4.6x, Hearts2Hearts 28.7x, KATSEYE 84.0x.",
        },
        {
          metric: "Posts carrying any call to action",
          subject: "0.5%",
          benchmark: "standard practice",
          read: "behind",
          note: "Five of 1,006 owned TikTok posts. Zero point to the store, Weverse, a link in bio, or a pre-save.",
        },
        {
          metric: "Views per follower, Instagram",
          subject: "0.186",
          benchmark: "TikTok 0.058",
          read: "ahead",
          note: "The platform being treated as secondary is 3.2x more efficient per follower.",
        },
        {
          metric: "Engagement rate, TikTok",
          subject: "10.7%",
          benchmark: "Instagram 8.4%",
          read: "ahead",
          note: "TikTok delivers depth, Instagram delivers reach. Both are usable, for different jobs.",
        },
        {
          metric: "Share of output in the best-performing lane",
          subject: "3.7%",
          benchmark: "n/a",
          read: "behind",
          note: "The gaming lane out-performs everything else by 5.7x and is under-produced against its own results.",
        },
      ],
      mixFootnote: "Competitor medians are 2026 posts only, pulled 2026-09-03. The comparison is context rather than a target: KATSEYE operates at a different budget and distribution tier and is included as the ceiling, not the benchmark.",
      charts: [
        {
          kind: "bars",
          title: "Median Views by Content Lane, 2026",
          subtitle: "Ten gaming posts out-perform two hundred and seventeen personality posts by 5.7x.",
          unit: "median views",
          series: [
            {
              name: "Median views",
              points: [
                { x: "Gaming and esports", y: 584750 },
                { x: "Personality", y: 103200 },
                { x: "Event and fancon", y: 91200 },
                { x: "Release promo", y: 66550 },
              ],
            },
          ],
          highlightX: ["Gaming and esports"],
          note: "Share of output runs almost exactly inverse to performance: gaming 3.7 percent, personality 79.8 percent, fancon 4.0 percent, release promo 12.5 percent. The worst-performing lane is the one selling the product.",
          source: "272 owned TikTok posts, 2026, performance-joined 2026-09-03",
          tall: true,
        },
        {
          kind: "bars",
          title: "Direction of Travel in the Gaming Lane",
          subtitle: "Going into someone else's world beats importing them into yours, by 13.6x.",
          unit: "median views",
          series: [
            {
              name: "Median views",
              points: [
                { x: "FIFTY FIFTY goes into gaming culture", y: 707850 },
                { x: "Gaming guests brought into the challenge format", y: 52200 },
              ],
            },
          ],
          highlightX: ["FIFTY FIFTY goes into gaming culture"],
          note: "Eight posts against four. Small n, and the gap is large enough and consistent enough to act on as a test rather than dismiss.",
          source: "Owned TikTok corpus, performance-joined 2026-09-03",
          tall: true,
        },
        {
          kind: "grouped",
          title: "Volume Went Up, Reach Went Down",
          subtitle: "Age-matched windows, so this is not older posts having longer to accumulate.",
          series: [
            {
              name: "Median views",
              color: "#FD3737",
              points: [
                { x: "Original lineup, 2022-11 to 2023-06", y: 834800 },
                { x: "Relaunch, 2024-09 to 2025-06", y: 157100 },
                { x: "Current, 2026", y: 94100 },
              ],
            },
            {
              name: "Posts per month, x1000 for scale",
              color: "#8A8A8A",
              points: [
                { x: "Original lineup, 2022-11 to 2023-06", y: 9900 },
                { x: "Relaunch, 2024-09 to 2025-06", y: 32900 },
                { x: "Current, 2026", y: 34000 },
              ],
            },
          ],
          note: "The account tripled its posting rate and lost roughly five times its per-post reach. Posts-per-month is scaled by one thousand so both series read on one axis. This is a fewer-and-bigger problem, not a volume problem.",
          source: "1,006 owned TikTok posts enumerated 2026-09-03",
          tall: true,
        },
        {
          kind: "grouped",
          title: "Same Asset, Two Platforms",
          subtitle: "Nineteen same-day cross-posted pairs. The identical video does better on Instagram.",
          unit: "views",
          series: [
            {
              name: "Instagram",
              color: "#FD3737",
              points: [
                { x: "FC Bayern challenge", y: 2304569 },
                { x: "TenZ collaboration", y: 1432469 },
                { x: "Waiting room", y: 177673 },
              ],
            },
            {
              name: "TikTok",
              color: "#8A8A8A",
              points: [
                { x: "FC Bayern challenge", y: 108100 },
                { x: "TenZ collaboration", y: 573100 },
                { x: "Waiting room", y: 521700 },
              ],
            },
          ],
          note: "Median TikTok-to-Instagram ratio across all nineteen pairs is 0.75x. Two pairs ran the other way, and the waiting-room post is shown as one of them so the exception is visible rather than hidden.",
          source: "19 same-day cross-post pairs identified across a 60-reel Instagram sample",
          tall: true,
        },
      ],
      findingsHeading: "Findings",
      findingsIntro: "Eight findings, each with the numbers behind it and the posts that ground it. Where a finding is single-source it says so, and where the corpus contradicted our own starting hypothesis it says that too.",
      findings: [
        {
          id: "no-conversion-path",
          title: "There is no conversion path in the content. Five posts in 1,006 ask for anything.",
          verdict: "confirmed",
          confidence: "High, two independent sources agree",
          summary: "The video AI found three calls to action across sixty analysed videos, and only two of those pointed anywhere a fan could actually convert. An independent caption scan of all 1,006 owned TikTok posts found five, or 0.5 percent, carrying any conversion language at all. Zero point to the store. Zero point to Weverse. Zero point to a link in bio. Zero point to a pre-save.",
          evidence: [
            "3 of 60 analysed videos carry a CTA of any kind, and 2 of those are fancon ticket mentions",
            "5 of 1,006 owned TikTok posts, 0.5 percent, carry conversion language in the caption",
            "Both CTA-bearing videos in the analysed set sit in the underperforming stratum, at 91,900 and 91,200 views",
            "The two sources were derived independently and agree, which is why this is the highest-confidence finding in the section",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7677513885024308498",
              label: "Athena Valorant post",
              date: "2026-08-24",
              stat: "2,042,890 views",
              note: "The single biggest post of the year points nowhere.",
            },
            {
              platform: "tiktok",
              id: "7674654244569402644",
              label: "we so bad",
              date: "2026-08-17",
              stat: "965,828 views",
              note: "Second biggest. No CTA, no link, no destination.",
            },
          ],
          pivot: {
            title: "Put a destination on the reach that already exists",
            actions: [
              "Standardise a two-second end card on every post above a set view threshold, pointing at one owned destination",
              "Move every bio link to an owned page that captures an email before it forwards to the DSP or the store",
              "Treat the top ten posts of any month as paid-media inventory and retarget everyone who watched them",
              "Set a floor of one conversion-bearing post per week, measured, rather than a campaign-by-campaign decision",
            ],
          },
        },
        {
          id: "gaming-format-effect",
          title: "The gaming lane is a format effect, not a member effect.",
          verdict: "confirmed",
          confidence: "High, the isolation test is clean",
          summary: "Gaming and esports content is the best-performing lane in the account by a wide margin, and the obvious explanation, that one member happens to be a gamer, does not hold. Holding the member constant and varying the content type produces a 3.29x gap. Holding the content type constant and varying the member produces 1.23x. The lane is the driver and the member is the access route into it.",
          evidence: [
            "Athena-tagged gaming posts median 344,300 against Athena-tagged non-gaming posts at 104,550, a 3.29x format effect",
            "Athena-tagged non-gaming 104,550 against other-member non-gaming 84,700, a 1.23x member effect",
            "Gaming and esports median 584,750 across 2026 against 94,100 for the account as a whole",
            "The lane represents 3.7 percent of output while producing the top of the performance distribution",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7674211603474091284",
              label: "Valorant highlights",
              date: "2026-08-15",
              stat: "596,155 views",
            },
            {
              platform: "tiktok",
              id: "7674081606616763668",
              label: "TenZ collaboration",
              date: "2026-08-15",
              stat: "573,059 views",
            },
          ],
          pivot: {
            title: "Build the lane as a franchise, not as an accident",
            actions: [
              "Name and schedule a recurring gaming property with a fixed slot rather than posting into it opportunistically",
              "Rotate all four members through it, since the data says the format carries the result and not the person",
              "Target the U.S. and the esports audience specifically, where this content is culturally native and the listener base is largest",
              "Treat esports partnerships as a distribution channel with its own audience, not as a one-off content collaboration",
            ],
          },
        },
        {
          id: "direction-of-travel",
          title: "Going into another world outperforms importing that world into yours, by 13.6x.",
          verdict: "confirmed",
          confidence: "Medium to high, small n and a very large gap",
          summary: "The gaming posts split into two mechanically different kinds. When FIFTY FIFTY travels into gaming culture, appearing in its spaces and on its terms, the median is 707,850. When a gaming figure is brought into a FIFTY FIFTY challenge format, the median is 52,200. Same lane, same members, same period, 13.6x apart.",
          evidence: [
            "FIFTY FIFTY going into gaming culture, 8 posts, median 707,850 views",
            "Gaming guests brought into the challenge format, 4 posts, median 52,200 views",
            "The pattern is consistent across every pair in the set rather than driven by a single outlier",
            "Small n on both sides, so this is stated as a strong signal to test rather than a settled law",
          ],
          pivot: {
            title: "Send the group out rather than booking guests in",
            actions: [
              "Reverse the default on collaborations: pitch to appear inside the partner's format, not to host them in ours",
              "Budget for travel and appearance rather than for studio-based guest shoots",
              "Apply the same principle outside gaming, wherever an adjacent fandom has its own native format",
              "Measure every collaboration on views earned in the partner's audience, not on the post that runs on our channel",
            ],
          },
        },
        {
          id: "personality-not-the-driver",
          title: "Personality content is not the growth lever. It is already the whole account.",
          verdict: "refuted",
          confidence: "High, this overturned our own starting hypothesis",
          summary: "We went into this analysis expecting to find that personality and member-led content dramatically outperforms release promotion, and that the prescription would be to make more of it. The corpus refuted that. Personality content beats release promo by 1.55x, which is real but modest, and it already represents 79.8 percent of output. There is no headroom in doing more of what the account almost entirely already does.",
          evidence: [
            "2026 medians: gaming 584,750, personality 103,200, event and fancon 91,200, release promo 66,550",
            "Personality is 217 of 272 posts in 2026, 79.8 percent of everything published",
            "Gaming beats personality by 5.7x, while personality beats release promo by only 1.55x",
            "The genuine finding is not that personality wins, it is that release promo loses and that the smallest lane wins biggest",
          ],
          counterEvidence: [
            "In the original era the mix ran the other way: release promo out-pulled personality, 1,100,000 against 588,900, and made up 31.6 percent of output",
            "Release promo has since fallen to 12.5 percent of output and become the worst-performing category, which is a change in how it is made rather than a law about the format",
          ],
          pivot: {
            title: "Fix release promotion instead of making more personality clips",
            actions: [
              "Rebuild release promo as event content with the production tier the original era used, rather than as another plain-room clip",
              "Concentrate release assets into fewer, larger moments tied to the pre-order window",
              "Move the gaming lane from 3.7 percent to a planned 15 to 20 percent of output",
              "Hold total volume flat or reduce it, and redirect the freed capacity rather than adding to the schedule",
            ],
          },
        },
        {
          id: "volume-not-the-lever",
          title: "The account tripled its posting rate and lost five times its per-post reach.",
          verdict: "confirmed",
          confidence: "High, age-matched windows",
          summary: "Comparing like-for-like time windows so that older posts do not benefit from longer accumulation, the original lineup posted 9.9 times a month at a median of 834,800 views. The relaunch window posted 32.9 times a month at 157,100. 2026 is posting 34 times a month at 94,100. More output has not produced more reach, and the per-year trend confirms it is not an accumulation artefact.",
          evidence: [
            "Original lineup, 2022-11 to 2023-06: 79 posts, 9.9 per month, median 834,800",
            "Relaunch, 2024-09 to 2025-06: 329 posts, 32.9 per month, median 157,100",
            "Current, 2026: 272 posts, 34.0 per month, median 94,100",
            "Median views by year run 186,400, 1,300,000, 192,700, 103,600, 94,100, so the trend is still down in the most recent period",
          ],
          counterEvidence: [
            "The original-era comparison sits inside a global viral moment that no volume decision could reproduce, so the 5.3x should not be read as purely self-inflicted",
            "The video AI describes the original era as label-produced and higher production tier, and the current era as low-stakes clips in plain rooms, which points at production investment rather than post count alone",
          ],
          pivot: {
            title: "Fewer, bigger, and produced",
            actions: [
              "Cut planned output by roughly a third and move the saved capacity into production value on what remains",
              "Set a minimum production tier for anything tied to a release",
              "Protect two tentpole shoots per cycle rather than spreading the same budget across thirty clips",
              "Measure the account on median views per post, not on posts published",
            ],
          },
        },
        {
          id: "instagram-outperforms",
          title: "Instagram beats TikTok on the identical asset, and by 3.2x per follower.",
          verdict: "confirmed",
          confidence: "High on the metric, medium on asset matching",
          summary: "Nineteen same-day cross-posted pairs were identified. The median TikTok-to-Instagram view ratio on the same video is 0.75x, meaning the same asset reliably does better on Instagram. Per follower the gap is much wider: Instagram returns 0.186 views per follower against TikTok's 0.058, despite having 40 percent of the follower count.",
          evidence: [
            "Median TikTok to Instagram view ratio on identical same-day assets: 0.75x",
            "Views per follower: Instagram 0.186 on 956K followers, TikTok 0.058 on 2.4M followers",
            "The FC Bayern challenge post did 2,304,569 on Instagram against 108,100 on TikTok, a 21x divergence on identical creative",
            "Engagement rate runs the other way, 10.7 percent on TikTok against 8.4 percent on Instagram, so TikTok delivers depth and Instagram delivers reach",
          ],
          counterEvidence: [
            "Asset identity was matched on caption and same-day posting rather than confirmed visually, because that cross-check query did not run",
            "Two of the nineteen pairs ran the other way, including the waiting-room post at 177,673 on Instagram against 521,700 on TikTok",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7679357400234691858",
              label: "Waiting room, the counter-example",
              date: "2026-08-29",
              stat: "521,679 on TikTok vs 177,673 on Instagram",
              note: "Shown because it runs against the finding.",
            },
          ],
          pivot: {
            title: "Reweight toward the platform that is already winning",
            actions: [
              "Treat Instagram as a primary channel for reach and TikTok as primary for community depth",
              "Stop reading a TikTok miss as a failed creative until the Instagram number is in",
              "Put U.S. paid weight behind Instagram first, where the audience is largest and the organic efficiency is highest",
              "Grow Instagram deliberately toward 2M, since it is the smallest owned platform and the most efficient one",
            ],
          },
        },
        {
          id: "hooks-not-the-differentiator",
          title: "Hook craft does not separate the winners from the losers here.",
          verdict: "partial",
          confidence: "Low, single source and not cross-checked",
          summary: "The video AI read the top-decile posts and the bottom-half posts in two separate passes and returned structurally near-identical openings. Both sets open on a person already in frame doing a gesture or the start of choreography, with no readable on-screen text in the first three seconds, no stated promise, and no information gap. Its summary of the bottom half applies almost word for word to the top decile.",
          evidence: [
            "No readable opening text in 14 of 20 top-decile posts and 11 of 16 bottom-half posts",
            "Neither set front-loads a payoff or states a promise in the opening three seconds",
            "What separates the winners in this corpus is subject matter and platform, not opening craft",
          ],
          counterEvidence: [
            "This is single-source and could not be cross-checked. The intended second source returned no transcripts for the owned sample, so there is no independent read on what is spoken or when",
            "It should be treated as a hypothesis to test rather than a settled finding, and it is the one finding here we would not act on without a test",
          ],
          pivot: {
            title: "Test it before spending against it",
            actions: [
              "Run a controlled hook test on twenty posts in a single lane before committing to any hook-led prescription",
              "In the meantime prioritise subject matter and platform weighting, which are evidenced, over opening craft, which is not",
              "Re-run the comparison against the competitor set once the video store's full query battery completes",
            ],
          },
        },
        {
          id: "peer-challenge-overhead",
          title: "The peer-artist challenge format is the largest recoverable block of capacity in the account.",
          verdict: "confirmed",
          confidence: "High, large n on both sides",
          summary: "Peer-collaboration challenge posts featuring other Korean artists account for 103 posts and 13.7 percent of output since 2025. They median 106,100 views against 98,450 for everything else, a difference of 7.8 percent. Each one requires scheduling, travel and label coordination, and returns almost exactly what the account would have earned anyway.",
          evidence: [
            "Peer-collab challenge posts: 103 posts, median 106,100 views",
            "Everything else: 648 posts, median 98,450 views",
            "A 7.8 percent median difference for a format with the highest coordination cost per unit in the account",
            "The same coordination effort spent on the gaming lane returns 584,750",
          ],
          pivot: {
            title: "Redirect the capacity rather than cutting it",
            actions: [
              "Reduce peer-artist challenge output substantially and hold a small number of genuinely high-reach partners",
              "Move the freed scheduling and coordination capacity into the gaming lane and into release-moment production",
              "Apply the direction-of-travel rule to any collaboration that survives the cut",
            ],
          },
        },
      ],
      footnote: "Corpus built 2026-09-03 in a persistent video knowledge store, 105 items, zero ingest failures. Two limitations are stated rather than worked around: four of twelve planned queries did not run against the store before its daily request quota was reached, which is why the competitor content comparison is measured on performance data rather than read from video; and the video AI's face and name attribution proved unreliable on this corpus, so all member-level analysis here is derived from caption tags rather than from face recognition.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Forty-one owned surfaces were checked one at a time, in the page source rather than the rendered page, against a single question: when a fan wants to give this group money or an email address, what happens.",
      intro: "The headline is better than it looks. This is not an act with no infrastructure. The store works, ships internationally, and is correctly wired into YouTube and Spotify. Weverse is live and active. A working email capture form already exists. The problem is that almost none of the audience is ever pointed at any of it, which makes this a routing problem rather than a build problem.",
      subBlocks: [
        {
          label: "A",
          title: "What Already Works",
          strategy: "Four pieces of the conversion machine are built and functioning. They are simply starved of traffic.",
          components: {
            heading: "Verified Present and Working",
            items: [
              "Official store at fiftyfifty.rosecityworks.com, a Shopify property carrying six CD SKUs between 22.98 and 29.98 dollars, all in stock, shipping to the United States and internationally",
              "A live Klaviyo email capture with a working join form, already installed on the store",
              "Weverse is active with an artist post dated 2026-09-02, ships to the United States in dollars, and carries a notice updated 2026-07-20",
              "The store is correctly wired to the YouTube Store tab and to the Spotify artist merch module, so two major surfaces already resolve to commerce",
              "Real United States retail exists: Amazon with Prime eligibility, Walmart including a Walmart-exclusive edition, plus KTOWN4U, Music Plaza and Choice Music LA",
            ],
          },
        },
        {
          label: "B",
          title: "The Routing Gap",
          strategy: "This is the single biggest finding in the audit and the cheapest one to fix. The capture layer exists. The audience never reaches it.",
          components: {
            heading: "Where 5.6M Followers Currently Go",
            items: [
              "The Instagram, TikTok and YouTube bio links all resolve to the same third-party smart link, which carries no email field and no SMS option",
              "That smart link is not an owned asset, so the traffic across all three platforms lands somewhere the label does not control and cannot re-market from",
              "The one working email form sits on a store that none of those bios link to",
              "The result is that roughly 5.6 million followers have no path into a first-party list, while the infrastructure to capture them is already paid for and running",
            ],
          },
          kpis: [
            "Bio link destinations owned and capturing: currently 0 of 3",
            "First-party list size: effectively 0 against an addressable base of 5.6M",
            "Time to fix: days, not quarters",
          ],
        },
        {
          label: "C",
          title: "The Highest-Traffic Broken Link in the Business",
          strategy: "One asset deserves its own line because of the traffic it carries and how long it has been pointed at nothing.",
          components: {
            heading: "The Cupid Video End Point",
            items: [
              "The Cupid music video carries 248 million views and still directs fans to a link page built in November 2022",
              "Its album pre-order destination resolves to a retail page reading out of stock, for a release dated 2023-03-21",
              "Its label link redirects to an error page on a third-party development host",
              "This is the highest-traffic owned surface in the catalog and every path off it is dead",
            ],
          },
          kpis: [
            "248,000,000 views behind a 2022 link page",
            "Three destinations checked, three broken",
            "Replacement is a description edit and a new landing page",
          ],
        },
        {
          label: "D",
          title: "What Does Not Exist Yet",
          strategy: "Four absences were verified rather than assumed, each one checked on multiple surfaces before being recorded.",
          components: {
            heading: "Verified Absent",
            items: [
              "No lightstick, confirmed across four separate commerce surfaces on pages that render twenty or more competing groups' official lightsticks, roughly three years and ten months into the group's activity",
              "No paid membership tier. The only fan club is a free forum with 6,002 members, notices last dated February 2023, and an artist board still carrying posts from members who departed in 2023",
              "No SMS or messaging capture of any kind on any surface",
              "No dedicated artist website. The label page for the group is a heading, one image last modified in August 2024, and a back button, carrying no analytics and no capture tags",
            ],
          },
          kpis: [
            "Lightstick: absent at 3 years 10 months active",
            "Paid membership: absent, free forum showing 4 visits on the day checked",
            "Owned web property: absent",
          ],
        },
        {
          label: "E",
          title: "Live Business and Retail Position",
          strategy: "The live footprint is the thinnest part of the operation, and it is thin in a way that maps directly onto the missing list. You cannot sell tickets efficiently to an audience you cannot contact.",
          components: {
            heading: "Current Position",
            items: [
              "One headline touring run to date, eight United States theatres across November and December 2024, roughly 13,700 in gross capacity",
              "The first fan meeting came three years after debut, in a 360-seat room",
              "The 2026 Asia fancon tour was cut mid-flight, with one market cancelled and another postponed",
              "Japan shows four touchpoints in four years, three of them inside other organisations' events",
              "No presence at one major United States retailer whose competitors carry sixteen exclusive editions from other groups on the same search",
            ],
          },
          kpis: [
            "United States headline dates since debut: 8",
            "Largest confirmed own-room capacity: theatre scale",
            "Announced 2026 United States dates: none",
          ],
        },
      ],
      footnote: "Forty-one surfaces were checked on 2026-09-03, each recorded with its URL and the evidence for its status. Two items are recorded as unverified rather than asserted: the ticketing platform of record, because two aggregators blocked access, and whether a paid Weverse membership tier exists behind login, because verifying it would have required creating an account. The absence of a historical email signup was confirmed through archive records, which means there is no dormant list sitting anywhere. The list is built from zero, and that is cleaner than inheriting one.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Strategy",
      title: "Core Strategy & Philosophy",
      thesis: "FIFTY FIFTY does not have an audience problem. It has a routing problem. Six million people listen every month, five and a half million follow, and almost none of them have ever been asked for anything.",
      hierarchy: [
        {
          label: "1. Capture",
          description: "Turn existing reach into an owned list. Every bio link, every video end card, every retail touch points at a destination the label controls, and that destination captures before it forwards. This is first because nothing else compounds without it, and because it is the only line in the plan that makes every other line cheaper.",
        },
        {
          label: "2. Convert",
          description: "Sell to the list rather than to the algorithm. Physicals, membership, and live all become direct-response businesses once there is a list to sell to. The demand is already proven at 100,121 in a single confirmed first week with almost no United States retail infrastructure behind it.",
        },
        {
          label: "3. Concentrate",
          description: "Fewer, bigger, better-produced. The account tripled its output and lost five times its per-post reach, so volume is not the lever. Capacity moves out of the formats that return nothing and into the lane that returns 5.7x and into release moments that deserve real production.",
        },
        {
          label: "4. Claim the United States",
          description: "The largest listener market on every platform has never been treated as the primary market. Editorial already programs this act as pop rather than K-pop, which is the platform telling us where the opening is. Follow it.",
        },
      ],
      messaging: [
        "The fandom is already rebuilding. Four straight quarters of accelerating follower acquisition on flat listener volume is not a story anyone is telling, and it is the most important fact in the business.",
        "Nothing in this plan requires another global hit. Every target is reachable by capturing and converting the audience that already exists.",
        "The United States is the home market by consumption. It should be treated as the home market by operation.",
        "Physicals are the proof of life. They grew through the lineup change, without a hit, and they are the clearest evidence that a real fandom exists and will transact.",
        "Every promise in this document carries a worst, expected and best case, a test spend, and a scale-or-stop rule. Streaming lift is deliberately not promised, because it cannot be forecast honestly.",
      ],
      footnote: "The order of the four principles is the order of execution. Capture is first because a captured fan can be sold to repeatedly at near-zero marginal cost, and because every subsequent line in this plan gets cheaper once it exists.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Vertical 1",
      title: "Vertical 1 / Fandom & Conversion Infrastructure",
      philosophy: "Build the layer that turns a listener into a contactable fan. Everything else in this plan gets cheaper the moment it exists.",
      intro: "This vertical is first because it is the constraint. FIFTY FIFTY currently reaches roughly 5.6 million followers and can contact none of them directly. The fix is largely routing rather than construction, which makes it fast, and it compounds from the day it ships.",
      subBlocks: [
        {
          label: "A",
          title: "First-Party Capture, United States",
          objective: "Convert existing reach into an owned, contactable list of United States fans.",
          strategy: "Korean data law constrains what can be collected from Korean residents: signups cannot be bundled with anything, notices must be in Korean, opt-outs are mandatory, and phone capture is effectively closed because double opt-in does not complete on Korean numbers. None of that applies to United States residents on United States surfaces. The list is built United States first, deliberately and legally, and Korean fans continue to be served through the existing fan platform.",
          components: {
            heading: "Build",
            items: [
              "One owned landing destination that captures an email before forwarding to the DSP, the store or Weverse",
              "Every bio link on Instagram, TikTok and YouTube repointed to it, replacing the third-party smart link",
              "The existing Klaviyo instance extended from store-only to the full audience, so no new vendor and no new spend on tooling",
              "SMS added for United States numbers only, with the Korean-number limitation documented rather than discovered later",
              "A rebuilt destination behind the Cupid video's 248 million views, replacing a 2022 link page whose every path is now dead",
            ],
          },
          kpis: [
            "100K+ captured United States fans in twelve months",
            "Bio-link destinations owned and capturing: 3 of 3 within the first month",
            "Email capture rate on landing traffic above 15 percent",
            "Cost per captured fan tracked from week one and used to set the paid budget",
          ],
          timeline: "Weeks 1 to 4 for routing and the landing layer, then continuous",
        },
        {
          label: "B",
          title: "Membership and the Missing Product Ladder",
          objective: "Give the most committed fans something to buy that is not a CD.",
          strategy: "There is currently one rung on the ladder: a physical album. Below it there is nothing free and structured, and above it there is nothing premium. Both ends are revenue and both ends are retention.",
          components: {
            heading: "Build",
            items: [
              "A paid membership tier with a defined benefit set, priced for the United States market and purchasable by a United States fan without friction",
              "A lightstick, which is absent nearly four years into the group's activity while competitors on the same retail pages all carry one",
              "Retirement or replacement of the dormant free forum, which currently shows a members-only board still carrying posts from the previous lineup",
              "A defined product ladder from free list to membership to physical to premium edition, so there is always a next purchase",
            ],
          },
          kpis: [
            "Membership live and selling within the first cycle",
            "Lightstick announced and pre-selling against a live moment",
            "Attach rate from list to membership above 5 percent",
          ],
          timeline: "Weeks 4 to 12, sequenced behind the list",
        },
        {
          label: "C",
          title: "Physical Sales as a Direct-Response Business",
          objective: "Move physicals from post-release catch-up to pre-order demand capture.",
          strategy: "The demand is proven. A confirmed 100,121 first week exists on Day & Night, and it exceeded that release's entire release-week shipment by nearly four times, with supply only catching up months later on a version re-release. That is a forecasting and timing problem, and it is worth real money to fix.",
          components: {
            heading: "Execute",
            items: [
              "Pre-order windows opened to the list first, before general announcement, so demand is measured before supply is committed",
              "United States retail expanded to the one major retailer currently absent, alongside the exclusive-edition mechanic competitors already use there",
              "Version strategy planned at the start of a cycle rather than deployed as a mid-cycle recovery",
              "Signed and numbered editions sold direct at full margin to the captured list",
            ],
          },
          kpis: [
            "150K+ on the next full cycle, against 88,247 on the most recent",
            "Release-week shipment above 80 percent of eventual cumulative, holding the gain already made",
            "Direct-to-fan share of total units above 15 percent",
          ],
          timeline: "Aligned to the next release cycle",
        },
      ],
      footnote: "The physical targets here assume the current release cadence and no change in creative direction. They are demand-capture targets, not a forecast of new audience.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Vertical 2",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "Spend against what the data already says works, on the platform the data says is already winning, and stop spending against what returns nothing.",
      intro: "The video intelligence section produced four instructions that can be acted on immediately. This vertical turns them into an operating plan and a paid structure.",
      subBlocks: [
        {
          label: "A",
          title: "The Content Rebalance",
          objective: "Move capacity out of formats returning nothing and into the lane returning 5.7x.",
          strategy: "The account publishes 34 times a month at a median of 94,100 views. The gaming and esports lane is 3.7 percent of that output and medians 584,750. Release promotion is 12.5 percent of output and medians 66,550, making the lane that sells the product the worst-performing lane in the account.",
          components: {
            heading: "The Reallocation",
            items: [
              "Gaming and esports from 3.7 percent of output to a planned 15 to 20 percent, built as a named recurring franchise with a fixed slot",
              "Peer-artist challenge posts reduced substantially, releasing the highest-coordination-cost block in the account",
              "Release promotion rebuilt at the production tier the original era used, concentrated into fewer and larger moments",
              "Total output held flat or reduced by roughly a third, with the saved capacity moved into production value",
              "All four members rotated through the gaming lane, since the evidence says the format carries the result rather than the member",
            ],
          },
          kpis: [
            "Median views per post up 3x on a rebalanced mix",
            "Gaming lane at 15 percent or more of output by week 12",
            "Release promo median above the account median, reversing the current position",
          ],
        },
        {
          label: "B",
          title: "Platform Weighting",
          objective: "Follow the efficiency rather than the follower count.",
          strategy: "Instagram returns 0.186 views per follower against TikTok's 0.058 on 40 percent of the follower base, and the identical asset performs better on Instagram in the majority of same-day pairs tested. The platform being treated as secondary is the more efficient one.",
          components: {
            heading: "Execute",
            items: [
              "Instagram treated as the primary reach channel, with United States paid weight behind it first",
              "TikTok held as the primary community and depth channel, where engagement rate is higher",
              "A TikTok miss no longer read as a failed creative until the Instagram number is in",
              "Instagram grown deliberately toward 2M, since it is the smallest owned platform and the most efficient one",
            ],
          },
          kpis: [
            "Instagram from 956K to 2M+ followers",
            "Views per follower maintained above 0.15 on Instagram at scale",
            "Paid efficiency reported per platform rather than blended",
          ],
        },
        {
          label: "C",
          title: "Paid Media Structure",
          objective: "Buy conversion, not impressions.",
          strategy: "Every line starts small, gets measured against a defined floor of efficacy, and scales only on evidence. There is a minimum spend below which each channel buys noise rather than results, and starting below it is the most common way this budget gets wasted.",
          components: {
            heading: "Structure",
            items: [
              "Retargeting against the top ten organic posts each month, treating high-reach organic as paid inventory",
              "Prospecting into the United States and the esports audience specifically, where the listener base is largest and the content is native",
              "Conversion campaigns pointed at list capture first, then at pre-order and membership",
              "Worst, expected and best case stated on every line, with a test spend and an explicit scale-or-stop rule",
            ],
          },
          kpis: [
            "Cost per captured fan established in week one and improved quarterly",
            "Cost per pre-order tracked as the primary commerce metric",
            "No channel funded below its floor of efficacy",
          ],
        },
      ],
      footnote: "Streaming lift is deliberately excluded from the targets in this vertical. Paid media reliably moves views, followers, list signups and units, and the relationship between spend and streams is not forecastable at this scale with any honesty.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "Vertical 3",
      title: "Vertical 3 / DSP Strategy",
      philosophy: "Spotify already programs this act as pop rather than K-pop. The strategy is to follow the platform's own read rather than fight it.",
      intro: "Two things are happening at DSP simultaneously. Editorial support contracted sharply in the last quarter, and what support remains is disproportionately general-pop rather than K-pop. The first is urgent. The second is an opening.",
      subBlocks: [
        {
          label: "A",
          title: "Rebuilding Editorial Support",
          objective: "Recover the placements lost in the last ninety days and stabilise the algorithmic surfaces.",
          strategy: "Thirty-four editorial placements representing 13,673,665 in combined follower reach came off in the ninety days to 2026-09-01, and every algorithmic and personalised surface switched off inside a nine-week window. That timing lines up with the 2026 releases, which were otherwise compounding.",
          components: {
            heading: "Execute",
            items: [
              "A full editorial reset conversation with the distribution partner, treating the removals as the priority item rather than a background note",
              "Pitch built around the general-pop framing the platform already applies, not the K-pop framing the promotion currently uses",
              "The two compounding album cuts identified in the catalog analysis worked deliberately, since the algorithm is already selecting them without support",
              "Release-day surface planning built into the cycle rather than requested after the fact",
            ],
          },
          kpis: [
            "Algorithmic and personalised placements back above zero within one cycle",
            "Editorial reach recovered toward the pre-contraction level",
            "At least one general-pop editorial placement held through a full cycle",
          ],
        },
        {
          label: "B",
          title: "The Pop Lane",
          objective: "Pitch into the lane the platform has already put this act in.",
          strategy: "Of the six genuine current editorial placements, three are general-pop rather than K-pop, and the general-pop side carries slightly more combined reach than the K-pop side. Ninety-six percent of the K-pop side sits in a single drama-soundtrack placement, which means the K-pop programming is narrower than it appears.",
          components: {
            heading: "Execute",
            items: [
              "Editorial pitching led with the pop and crossover profile rather than the K-pop category",
              "The catalog positioned against Western pop comparison points rather than only against Korean peers",
              "Sync and playlist targets that sit outside the K-pop ecosystem, where the audience already is",
              "Southeast Asian editorial worked as a distinct priority, since four of the top seven markets sit there",
            ],
          },
          kpis: [
            "Non-K-pop editorial reach as a tracked, growing line",
            "Placement mix reported by lane rather than as a single total",
          ],
        },
        {
          label: "C",
          title: "The Uncontrolled Audio Asset",
          objective: "Recover or partner around the most-used FIFTY FIFTY sound on TikTok.",
          strategy: "A third-party sped-up upload of the catalog's biggest record carries 14,311,597 TikTok videos against the official version's 3,002,121, roughly 4.8 times as many, and still drives measurable weekly streams. It is the single largest distribution asset associated with the act and the label does not control it.",
          components: {
            heading: "Execute",
            items: [
              "Establish the rights position on the third-party upload and pursue consolidation or claim through the distributor",
              "In parallel, ensure an official sped-up version exists and is correctly credited so new creates route to an owned asset",
              "Track creates against both assets so the recovery is measurable rather than assumed",
            ],
          },
          kpis: [
            "Share of total creates sitting on an owned audio asset, tracked monthly",
            "Rights position established and documented within the first cycle",
          ],
        },
      ],
      footnote: "Streaming outcomes are not guaranteed anywhere in this plan. Editorial and algorithmic placement are influenceable and reportable, and the stream volume that follows from them is not something any partner can honestly forecast.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Cultural Moments
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "Vertical 4",
      title: "Vertical 4 / PR & Cultural Moments",
      philosophy: "The press has moved on. The audience has not. The job is to give the press a reason that is about now rather than about 2023.",
      intro: "Coverage has thinned to release notices while the underlying audience metrics improved for four consecutive quarters. That gap is the story, and nobody has told it.",
      subBlocks: [
        {
          label: "A",
          title: "The Story Nobody Is Telling",
          objective: "Reframe the narrative from what happened in 2023 to what is happening now.",
          strategy: "Every available data point supports a rebuild story that has not been written: forty-five months without a down month in followers, four consecutive quarters of accelerating acquisition, physicals up nearly threefold through a lineup change, and a listener floor that stopped falling. This is a documented comeback and it is currently invisible.",
          components: {
            heading: "Execute",
            items: [
              "A data-led narrative built on the follower and physical curves, pitched to music-business press rather than to K-pop fan media alone",
              "Member-level profiles that establish the current lineup on its own terms rather than in reference to the previous one",
              "The gaming and esports lane worked as a genuine cultural angle, since it is the group's most distinctive current territory",
              "United States outlets prioritised, since the United States is the largest market and the least-covered one",
            ],
          },
          kpis: [
            "Coverage in United States music-business press within the first cycle",
            "At least one feature built on the rebuild data rather than on a release",
          ],
        },
        {
          label: "B",
          title: "A United States Anchor Moment",
          objective: "Create one live moment large enough to sell to the list and to the press.",
          strategy: "There have been eight United States headline dates since debut and none announced for 2026, against a United States listener base of 1.32 million. One well-built anchor moment, sold to a captured list first, is worth more than a broad routing exercise and is the natural proof point for everything in Vertical 1.",
          components: {
            heading: "Execute",
            items: [
              "A single United States headline showcase in the strongest metro, sized to sell out rather than to look big",
              "Pre-sale to the captured list before general on-sale, which both sells the room and proves the list's value",
              "Retail and content built around the date so it carries commercial weight beyond ticket revenue",
              "Ticketing structured so the buyer data sits with the label rather than only with the promoter",
            ],
          },
          kpis: [
            "One sold-out United States headline date",
            "Pre-sale share of total tickets above 40 percent",
            "Buyer data captured and merged into the first-party list",
          ],
        },
        {
          label: "C",
          title: "Brand and Partnership Territory",
          objective: "Convert the gaming lane from content into commercial partnership.",
          strategy: "The esports and gaming crossover is already the highest-performing content in the account and is culturally native to the largest market. It is also the only territory where this group has a distinctive position rather than a contested one.",
          components: {
            heading: "Execute",
            items: [
              "Approach esports organisations and endemic gaming brands as partners rather than as one-off content guests",
              "Structure partnerships around the direction-of-travel finding, appearing inside the partner's format rather than hosting them",
              "Use partner audiences as a distribution channel with measurable reach, not as a branding exercise",
            ],
          },
          kpis: [
            "At least one structured gaming or esports partnership per cycle",
            "Partner-side reach measured and reported separately from owned reach",
          ],
        },
      ],
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Partners",
      title: "Partner-Led Workstreams",
      philosophy: "A clear line between what the label and its partners already run well, and what this engagement adds.",
      intro: "Several of the workstreams that matter here sit with the label and its existing partners, and should stay there. This section states the division plainly so that nothing is assumed and nothing is duplicated.",
      subBlocks: [
        {
          label: "A",
          title: "Label-Led",
          strategy: "These remain with ATTRAKT and its existing partners, with Crowd Control Digital supporting on data and measurement rather than on execution.",
          components: {
            heading: "Retained by the Label",
            items: [
              "A&R, release planning and the creative direction of the music itself",
              "Korean domestic promotion, broadcast and music-show strategy",
              "Korean fan-platform operation, which is the correct home for Korean-resident fan data given the applicable data law",
              "Physical manufacturing, version planning and Korean distribution relationships",
              "Artist scheduling, talent management and all member-facing decisions",
            ],
          },
        },
        {
          label: "B",
          title: "Partner-Led",
          strategy: "Transparent Arts leads on relationships, positioning and the United States industry surface.",
          components: {
            heading: "Led by Transparent Arts",
            items: [
              "United States industry relationships and introductions",
              "Press positioning and editorial relationships in the United States market",
              "Partnership and brand conversations, including the gaming and esports territory",
              "Live and showcase relationships for the United States anchor moment",
            ],
          },
        },
        {
          label: "C",
          title: "Crowd Control Digital",
          strategy: "Numbers and spend. Everything in this document that is measurable, buildable and reportable.",
          components: {
            heading: "Executed by Crowd Control Digital",
            items: [
              "First-party capture infrastructure, list build and lifecycle marketing",
              "Paid media across all platforms, structured with test spends and scale-or-stop rules",
              "Content strategy, the format rebalance, and ongoing video intelligence against a persistent corpus",
              "DSP and editorial strategy support, working alongside the distribution partner",
              "All measurement, reporting and the quarterly re-forecast",
            ],
          },
        },
      ],
      footnote: "Commercial terms are deliberately not covered in this document. This is a strategy artifact, and scope and fees would be agreed separately once the direction is confirmed.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve weeks, sequenced so that the capture layer ships first and everything downstream inherits it. Weeks 1 to 4 build the missing infrastructure and cost the least. Weeks 5 to 8 turn it on. Weeks 9 to 12 convert against a release moment and set the operating rhythm.",
      weeks: [
        { index: 1, label: "W1", dates: "Week 1", highlight: true, note: "Audit handover and routing fixes begin" },
        { index: 2, label: "W2", dates: "Week 2" },
        { index: 3, label: "W3", dates: "Week 3" },
        { index: 4, label: "W4", dates: "Week 4", highlight: true, note: "Capture layer live on all surfaces" },
        { index: 5, label: "W5", dates: "Week 5" },
        { index: 6, label: "W6", dates: "Week 6" },
        { index: 7, label: "W7", dates: "Week 7" },
        { index: 8, label: "W8", dates: "Week 8", highlight: true, note: "First read on cost per captured fan" },
        { index: 9, label: "W9", dates: "Week 9" },
        { index: 10, label: "W10", dates: "Week 10" },
        { index: 11, label: "W11", dates: "Week 11" },
        { index: 12, label: "W12", dates: "Week 12", highlight: true, note: "Cycle review and re-forecast" },
      ],
      workstreams: [
        {
          name: "First-Party Capture",
          cells: [
            { weekIndex: 1, intensity: "high", milestone: true, label: "Links repointed" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high", label: "Landing live" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "Capture live" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", milestone: true, label: "First 10K in" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Content Rebalance",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "Mix audit" },
            { weekIndex: 2, intensity: "high", label: "Gaming lane set" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "New mix live" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "Tentpole shoot" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Paid Media",
          cells: [
            { weekIndex: 1, intensity: "low", label: "Account setup" },
            { weekIndex: 2, intensity: "low" },
            { weekIndex: 3, intensity: "medium", label: "Test flights" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", milestone: true, label: "Capture live" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", milestone: true, label: "Scale or stop" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "DSP & Editorial",
          cells: [
            { weekIndex: 1, intensity: "high", milestone: true, label: "Placement reset" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium", label: "Pop-lane pitch" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "Audio claim" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "Release push" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Physical & Product",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "medium", label: "Retail review" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "Versions set" },
            { weekIndex: 6, intensity: "high", milestone: true, label: "Membership live" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "Lightstick go" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "Pre-order opens" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "PR & Live",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "low" },
            { weekIndex: 3, intensity: "medium", label: "Narrative built" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "Press outreach" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", milestone: true, label: "US date live" },
            { weekIndex: 11, intensity: "high", label: "List pre-sale" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Weeks 1 to 2 / Stop the leak",
          items: [
            "Repoint every bio link on Instagram, TikTok and YouTube away from the third-party smart link",
            "Replace the destination behind the Cupid video's 248 million views, where all three current paths are dead",
            "Open the editorial conversation on the 34 removed placements, treated as the priority item",
            "Audit the current content mix against the lane medians and define the gaming franchise",
            "Resolve or redirect the squatted platform handle",
          ],
        },
        {
          weekIndex: 3,
          title: "Weeks 3 to 4 / Build the capture layer",
          items: [
            "Owned landing destination live, capturing email before forwarding to DSP, store or Weverse",
            "Existing Klaviyo instance extended from store-only to full audience",
            "United States SMS capture added, with the Korean-number limitation documented up front",
            "The rebalanced content mix goes live, with gaming moving toward 15 percent of output",
            "Paid test flights begin at deliberately small spend to establish baseline costs",
          ],
        },
        {
          weekIndex: 5,
          title: "Weeks 5 to 8 / Turn it on and measure",
          items: [
            "Capture campaigns scale on Instagram first, following the efficiency finding rather than follower count",
            "Retargeting live against the top ten organic posts of each month",
            "Membership tier live and selling, with a defined benefit set purchasable from the United States",
            "First honest read on cost per captured fan, which sets the budget for everything after it",
            "Scale-or-stop decision taken on every paid line against its stated floor",
          ],
        },
        {
          weekIndex: 9,
          title: "Weeks 9 to 12 / Convert against a moment",
          items: [
            "Pre-order opens to the captured list before general announcement, measuring demand before committing supply",
            "Tentpole shoot delivers release assets at the production tier the original era used",
            "United States headline date announced and pre-sold to the list first",
            "Full cycle review: capture cost, conversion rate, per-post medians, physical run rate",
            "Re-forecast the next twelve weeks on measured numbers rather than on this document's assumptions",
          ],
        },
      ],
      footnote: "Every dated item here is executable without a new release. The release-dependent lines sit in weeks 9 to 12 and would move with the actual release calendar once it is confirmed.",
    },
  ],
};
