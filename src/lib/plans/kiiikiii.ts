import type { StrategyPlanData } from "../plan-context";

export const kiiikiiiPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/kiiikiii/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "kiiikiii-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "U.S. Growth Plan",
    title: "KiiiKiii",
    subtitle: "Three workstreams to convert the audience KiiiKiii already has in the United States: first-party fan data, physical sales, and U.S. market lift.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/kiiikiii/kiiikiii-group.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. The Opportunity
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Opportunity",
      title: "The Opportunity",
      subtitle: "KiiiKiii crossed one million Spotify followers this week, and the United States is already its largest listening market. Neither of those has been built on yet.",
      body: [
        "KiiiKiii is at its highest point ever on the metrics that matter most in the U.S.: 4.18M Spotify monthly listeners, 696K of them American, and a follower count that passed one million in early September. \"404 (New Era)\" is still charting in Korea 219 days after release and has crossed ten million streams there. \"Pop Off Pop Off\" reached No. 1 on Spotify Korea within ten days and is still holding the daily top ten a month later. The audience is real, it is growing, and a large share of it is already in the market Starship wants to grow.",
        "What is not yet in place is the layer that converts that audience into something the label owns and can measure: a first-party fan list in the U.S., a physical sales operation aimed at U.S. charts, and sustained paid support in the market where the listeners already are. This document proposes three workstreams against exactly those three gaps, each with a test budget, a defined success metric, and a rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party fan data: a U.S. fan database the label owns outright, built inside Korean privacy law",
          "Physical sales: a U.S. chart strategy built on pre-orders and committed-fan math",
          "U.S. market lift: growth in Spotify followers, Instagram, and YouTube in the top market",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "Spotify follower growth, measured against a set baseline in a set window",
          "Instagram and YouTube growth concentrated in the United States",
          "A first-party fan list with a stated cost per fan and a size target",
          "Physical units moved through U.S. retail and direct-to-fan channels",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Listeners and Followers Since Debut",
          subtitle: "Followers have risen every single week since debut and crossed one million in September 2026. Each release cycle leaves the listener base higher than the one before it.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "2/26/25", y: 42075 }, { x: "3/12/25", y: 709813 }, { x: "3/26/25", y: 1394572 }, { x: "4/9/25", y: 1800939 }, { x: "4/23/25", y: 1773572 }, { x: "5/7/25", y: 1496555 }, { x: "5/21/25", y: 1394789 }, { x: "6/4/25", y: 1230975 }, { x: "6/18/25", y: 1041609 }, { x: "7/2/25", y: 997039 }, { x: "7/16/25", y: 957721 }, { x: "7/30/25", y: 812380 }, { x: "8/13/25", y: 865993 }, { x: "8/27/25", y: 1257338 }, { x: "9/10/25", y: 1381161 }, { x: "9/24/25", y: 1190848 }, { x: "10/8/25", y: 1058594 }, { x: "10/22/25", y: 926214 }, { x: "11/5/25", y: 820899 }, { x: "11/19/25", y: 893196 }, { x: "12/3/25", y: 927667 }, { x: "12/17/25", y: 857681 }, { x: "12/31/25", y: 831721 }, { x: "1/14/26", y: 841397 }, { x: "1/28/26", y: 914832 }, { x: "2/11/26", y: 2110587 }, { x: "2/25/26", y: 3209569 }, { x: "3/11/26", y: 3647896 }, { x: "3/25/26", y: 3723676 }, { x: "4/8/26", y: 3793821 }, { x: "4/22/26", y: 3819436 }, { x: "5/6/26", y: 3786215 }, { x: "5/20/26", y: 3686434 }, { x: "6/3/26", y: 3691572 }, { x: "6/17/26", y: 3687714 }, { x: "7/1/26", y: 3537890 }, { x: "7/15/26", y: 3346487 }, { x: "7/29/26", y: 3232246 }, { x: "8/12/26", y: 3234105 }, { x: "8/26/26", y: 3980695 }, { x: "8/31/26", y: 4137130 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "2/26/25", y: 16158 }, { x: "3/12/25", y: 59917 }, { x: "3/26/25", y: 84666 }, { x: "4/9/25", y: 109584 }, { x: "4/23/25", y: 125179 }, { x: "5/7/25", y: 141541 }, { x: "5/21/25", y: 154121 }, { x: "6/4/25", y: 165037 }, { x: "6/18/25", y: 176263 }, { x: "7/2/25", y: 185506 }, { x: "7/16/25", y: 194902 }, { x: "7/30/25", y: 204291 }, { x: "8/13/25", y: 219269 }, { x: "8/27/25", y: 233343 }, { x: "9/10/25", y: 243369 }, { x: "9/24/25", y: 254488 }, { x: "10/8/25", y: 264792 }, { x: "10/22/25", y: 274744 }, { x: "11/5/25", y: 284526 }, { x: "11/19/25", y: 295210 }, { x: "12/3/25", y: 307750 }, { x: "12/17/25", y: 322149 }, { x: "12/31/25", y: 335502 }, { x: "1/14/26", y: 350353 }, { x: "1/28/26", y: 375502 }, { x: "2/11/26", y: 414802 }, { x: "2/25/26", y: 452981 }, { x: "3/11/26", y: 494508 }, { x: "3/25/26", y: 538285 }, { x: "4/8/26", y: 582755 }, { x: "4/22/26", y: 624096 }, { x: "5/6/26", y: 664489 }, { x: "5/20/26", y: 700695 }, { x: "6/3/26", y: 736458 }, { x: "6/17/26", y: 771708 }, { x: "7/1/26", y: 805011 }, { x: "7/15/26", y: 839117 }, { x: "7/29/26", y: 876272 }, { x: "8/12/26", y: 918742 }, { x: "8/26/26", y: 976747 }, { x: "8/31/26", y: 993822 },
              ],
            },
          ],
          markers: [
            { x: "3/26/25", label: "DEBUT" },
            { x: "1/28/26", label: "404" },
            { x: "8/12/26", label: "POP OFF" },
          ],
          tall: true,
          source: "Chartmetric, weekly readings through Aug 31 2026",
        },
      ],
      footnote: "Data pulled September 3, 2026. Sources: Chartmetric, Spotify weekly and daily South Korea chart archives, and platform data.",
    },

    // ===================================================================
    // 02. Where KiiiKiii Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where KiiiKiii Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live consumption data pulled September 3, 2026: Chartmetric for audience metrics, the Spotify South Korea chart archives for stream-level detail. The comparison set is the girl-group class KiiiKiii is measured against commercially.",
      subBlocks: [
        {
          label: "A",
          title: "The Songs Hold Better Than the Category",
          objective: "KiiiKiii's hits do something the rest of the class does not: they grow after release week and stay.",
          strategy: "Most K-pop singles peak in week one and decline from there. \"404 (New Era)\" ran at 4.8 times its launch week by week four, was still at 1.8 times launch at week 24, and is charting in Korea 219 days later having crossed ten million streams there. Against the same chart source, the class's biggest recent hits retained between 16 and 63 percent of launch week at that age. \"Pop Off Pop Off\" is following the same shape: No. 1 on Spotify Korea by day nine, still top ten daily at day 23, and its week-over-week decline has flattened to under two percent. This is the single most valuable thing about the catalog, because it means audience acquired for a KiiiKiii song does not evaporate the following month.",
          charts: [
            {
              kind: "line",
              title: "Weekly Stream Retention vs Launch Week",
              subtitle: "Weekly South Korea streams indexed to each track's first full chart week, same chart source for all four.",
              unit: "x",
              series: [
                {
                  name: "404 (New Era)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 4.83 }, { x: "W8", y: 3.01 }, { x: "W12", y: 2.13 }, { x: "W16", y: 1.79 }, { x: "W20", y: 2.25 }, { x: "W24", y: 1.84 }, { x: "W31", y: 1.69 },
                  ],
                },
                {
                  name: "Comp A",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 1.21 }, { x: "W8", y: 0.85 }, { x: "W12", y: 0.75 }, { x: "W16", y: 0.71 }, { x: "W20", y: 0.65 }, { x: "W24", y: 0.63 }, { x: "W31", y: null },
                  ],
                },
                {
                  name: "Comp B",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.75 }, { x: "W8", y: 0.56 }, { x: "W12", y: 0.53 }, { x: "W16", y: 0.41 }, { x: "W20", y: 0.35 }, { x: "W24", y: null }, { x: "W31", y: null },
                  ],
                },
                {
                  name: "Comp C",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.68 }, { x: "W8", y: 0.38 }, { x: "W12", y: 0.34 }, { x: "W16", y: 0.23 }, { x: "W20", y: 0.2 }, { x: "W24", y: 0.16 }, { x: "W31", y: null },
                  ],
                },
              ],
              note: "Comps are the three highest-profile girl-group singles of the same period, unnamed here as a courtesy. Two left the chart before week 24.",
              source: "Spotify weekly South Korea chart archives, pulled Sep 3 2026",
              tall: true,
            },
            {
              kind: "bars",
              title: "404 (New Era): Weekly Korea Streams, 31 Weeks",
              subtitle: "Launch week 134K. Peak 647K in week four. Week 31 still at 227K, above launch, seven months on.",
              unit: "K",
              series: [
                {
                  name: "Weekly streams (K)",
                  points: [
                    { x: "W1", y: 134 }, { x: "W4", y: 647 }, { x: "W8", y: 404 }, { x: "W12", y: 286 }, { x: "W16", y: 240 }, { x: "W20", y: 301 }, { x: "W24", y: 246 }, { x: "W28", y: 245 }, { x: "W31", y: 227 },
                  ],
                },
              ],
              source: "Spotify weekly South Korea chart archive, Jan to Sep 2026",
            },
          ],
        },
        {
          label: "B",
          title: "One Million Followers, Four Million Listeners",
          objective: "The gap between listening and committing is the largest in the peer set, which makes it the largest available gain.",
          strategy: "KiiiKiii's Spotify follower-to-listener ratio is 0.239. Every group in the comparison set converts at a higher rate, and the mature acts sit above 1.0. Read positively: roughly 3.2 million people listened to KiiiKiii this month without taking the one free action that puts every future release in front of them automatically. Followers have grown every week since debut, so the mechanism works. It has simply never had dedicated support behind it. This is the cheapest, most durable growth available to the group, and it is the first metric the U.S. workstream is measured against.",
          charts: [
            {
              kind: "hbars",
              title: "Followers per Monthly Listener",
              subtitle: "Higher is a deeper committed base. Mature fandom acts sit above 1.0.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "KiiiKiii", y: 0.239 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "izna", y: 0.423 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "aespa", y: 1.052 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "IVE", y: 1.332 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              note: "At the peer median of roughly 0.42, KiiiKiii's current listener base would carry about 1.75M followers.",
              source: "Chartmetric, Sep 3 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The U.S. Is the Top Market and the Least Worked One",
          objective: "The largest audience is in the market with the least activity behind it, and a crossover window just opened and started to close.",
          strategy: "The United States is KiiiKiii's No. 1 listening market at 696K monthly listeners, ahead of Korea, and it grew again over the past week. There has been no U.S. paid campaign, no U.S. fan-data capture, no U.S. retail moment, and one U.S. live appearance. There is also a timing signal worth acting on: through the summer, \"Pop Off Pop Off\" held placements on general pop editorial playlists rather than only K-pop shelves, which is the hardest thing to earn and normally the signal that a Korean act can cross. Those placements have since rotated off and total playlist reach has fallen roughly 24 percent in a week. The window opened on its own. Nothing was built to hold it open, and that is what the third workstream exists to do.",
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Monthly Listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 696451 },
                    { x: "South Korea", y: 392734 },
                    { x: "Indonesia", y: 386086 },
                    { x: "Philippines", y: 334056 },
                    { x: "Malaysia", y: 332419 },
                    { x: "Taiwan", y: 223855 },
                    { x: "Australia", y: 140881 },
                    { x: "United Kingdom", y: 108243 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Sep 3 2026",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled Sep 3, 2026. Stream data: Spotify South Korea weekly and daily chart archives. Comparison set is the 2024 to 2026 girl-group class.",
    },

    // ===================================================================
    // 03. Proven Approach
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Track Record",
      title: "The Same Three Workstreams, Run Before",
      philosophy: "A current K-pop engagement, under NDA. The label and artist cannot be named, but every figure below is from that campaign's own reporting.",
      intro: "Crowd Control Digital runs an active U.S. campaign for a K-pop act on a major Korean label, entering at week seven of a single's release cycle with U.S. and Canada targeting only. The numbers below cover June 15 to September 2, 2026. They are included because two of the three workstreams proposed here are the same two that produced these results.",
      subBlocks: [
        {
          label: "A",
          title: "First-Party Fan Data, Built From Zero",
          objective: "A fan database the label owns, standing at nothing on day one.",
          strategy: "The engagement began with no email or SMS list of any kind. Eight weeks later the label owned 2,805 identified fans, of whom 1,467 came through a single paid acquisition flight at $1.97 per signup and a blended cost of $1.15 per fan across all sources. The list was then enriched against behavior: 1,092 identified as ticket buyers, 576 on recurring pre-save, 383 as merchandise buyers. That last part is the difference between a mailing list and a sales asset, because it tells the label which fans to talk to about a tour, a comeback, or an album.",
          charts: [
            {
              kind: "bars",
              title: "Fan List Growth From a Standing Start",
              subtitle: "Owned first-party fan records, reference campaign.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Day 1\nJun 2026", y: 0 },
                    { x: "Week 4\nAug 2026", y: 1338 },
                    { x: "Week 8\nSep 2026", y: 2805 },
                  ],
                },
              ],
              highlightX: ["Week 8\nSep 2026"],
              note: "$1.97 cost per signup on the paid flight; $1.15 blended across all capture sources.",
              source: "Reference campaign reporting, Jul 6 to Sep 3 2026",
            },
          ],
        },
        {
          label: "B",
          title: "U.S. Market Lift, Against the Trend",
          objective: "Move the United States up the market table while spending only in the United States.",
          strategy: "At the start of the engagement the U.S. was the artist's second market, behind Malaysia. Thirty days after the paid flights launched, the U.S. was first, and it held first place for the rest of the window. The more useful number is the comparison: over the same period the U.S. grew 13.3 percent while every other significant market declined between 31 and 42 percent as the release cycle aged. Media ran in the U.S. and Canada only, which is what makes the attribution clean.",
          charts: [
            {
              kind: "bars",
              title: "Market Growth Over the Campaign Window",
              subtitle: "Percent change in monthly listeners by market, June 15 to August 31, 2026. Paid media ran in North America only.",
              unit: "%",
              series: [
                {
                  name: "Change",
                  points: [
                    { x: "United States", y: 13.3 },
                    { x: "Indonesia", y: -32.8 },
                    { x: "South Korea", y: -31 },
                    { x: "Malaysia", y: -40.3 },
                    { x: "Japan", y: -41.6 },
                    { x: "Thailand", y: -41.6 },
                  ],
                },
              ],
              highlightX: ["United States"],
              note: "The U.S. was the only major market to grow. It moved from the No. 2 market to No. 1 within 30 days of launch.",
              source: "Reference campaign reporting, Jun 15 to Aug 31 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Media Efficiency",
          objective: "What the spend bought, and how the cost moved over ten weeks.",
          strategy: "Roughly $28,000 of working media returned 4.13 million impressions and 316,191 clicks at a 7.69 percent click-through rate and an $0.08 blended cost per click. The trend matters more than the total: cost per click on the primary flight fell from $0.114 in week one to $0.032 by week ten, a 72 percent reduction, because the account was rebuilt and optimized continuously rather than set and left. Creator and clipping work in the same engagement returned about 2.27 million views on $10,000, roughly four tenths of a cent per view.",
          charts: [
            {
              kind: "line",
              title: "Cost Per Click Over Ten Weeks",
              subtitle: "Primary traffic flight, reference campaign. Same creative strategy, continuously optimized.",
              series: [
                {
                  name: "Cost per click (USD)",
                  points: [
                    { x: "Wk 1", y: 0.114 }, { x: "Wk 2", y: 0.098 }, { x: "Wk 4", y: 0.071 }, { x: "Wk 6", y: 0.058 }, { x: "Wk 8", y: 0.044 }, { x: "Wk 10", y: 0.032 },
                  ],
                },
              ],
              note: "72 percent reduction. Best single day $0.030; best click-through rate 28.66 percent.",
              source: "Reference campaign reporting, Jun 22 to Aug 30 2026",
            },
          ],
        },
      ],
      footnote: "All figures from the reference engagement's own campaign reporting, June to September 2026. The artist and label are covered by a non-disclosure agreement and are not identified. Streaming outcomes are deliberately excluded from this section, for the reason set out in Workstream 3.",
    },

    // ===================================================================
    // 04. Workstream 1
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Fan Data",
      title: "Workstream 1 / First-Party Fan Data",
      philosophy: "Build a U.S. fan database Starship owns outright, inside what Korean privacy law allows.",
      intro: "Every other workstream gets more efficient once this exists, because the label stops renting access to its own audience.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "A U.S.-resident fan list with contact permission, behavioral enrichment, and direct commercial use.",
          strategy: "Capture runs on U.S. fans through U.S.-compliant channels: release drops, pre-save campaigns, ticket and retail moments, and paid acquisition units built specifically for signup rather than as an afterthought on a content ad. Records are enriched over time against real behavior, so the label can separate a casual follower from a repeat ticket buyer. The output is an asset Starship holds directly, usable for comeback announcements, tour on-sales, album pre-orders, and retail drops, and it does not depend on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "U.S. capture surfaces across social, pre-save, retail, and live moments",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: ticket buyers, repeat pre-savers, merchandise purchasers",
              "Segmented flows for comeback, on-sale, and pre-order moments",
              "Full data ownership and export on the label side at all times",
            ],
          },
          kpis: [
            "Cost per fan, held under a target agreed before launch",
            "List size at 90 days, with a stated floor",
            "Percentage of records enriched with at least one purchase behavior",
          ],
        },
        {
          label: "B",
          title: "Working Within Korean Privacy Law",
          objective: "Stay compliant by scoping capture to the U.S., where the mechanics are permitted and the audience already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on the label's existing fan platforms, which serve that market well. Capture is scoped to U.S. residents under U.S. rules, which is both fully compliant and aimed at the market this plan is about. The reference campaign was built the same way.",
          components: {
            heading: "Compliance Posture",
            items: [
              "U.S.-resident capture only, under U.S. consent standards",
              "No bundled consent, no signup as a condition of anything else",
              "Korean-market fans remain on existing label fan platforms",
              "Documented consent trail and opt-out on every surface",
            ],
          },
        },
      ],
      footnote: "Scoping to the U.S. is a deliberate compliance decision, not a limitation. The U.S. is the group's largest listening market.",
    },

    // ===================================================================
    // 05. Workstream 2
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Physical",
      title: "Workstream 2 / Physical Sales",
      philosophy: "One purchase counts as one chart unit. It takes one hundred paid streams to count as the same unit. That ratio is the whole reason this workstream exists.",
      intro: "U.S. charting is arithmetic, and the arithmetic is published. This section sets out exactly how a sale converts into chart position, what the entry points have actually been across 2026, and why physical is the highest-leverage lever available to a K-pop act specifically.",
      subBlocks: [
        {
          label: "A",
          title: "What One Sale Is Actually Worth",
          objective: "Establish the exchange rate between a sale and a stream, from the published formula.",
          strategy: "Luminate, the data provider behind the Billboard charts, publishes the song-equivalent formula outright. As of the first chart week of 2026 it is: one purchase counts as one unit, 100 premium streams count as one unit, 250 ad-supported streams count as one unit, and 400 programmed streams count as one unit. The ratios tightened in 2026, from 125 and 375 previously, which made streams count for slightly more and sales relatively less, but the headline has not changed: one sale is worth one hundred paid streams. That is the entire case for the physical workstream. Ten thousand units moved in a counting week is the chart equivalent of a million premium streams, and it is far easier to produce ten thousand committed purchases from a known fan list than a million incremental streams from strangers.",
          charts: [
            {
              kind: "bars",
              title: "Chart Units Produced by 10,000 Fan Actions",
              subtitle: "What the same number of fan actions is worth in chart units, under the published 2026 Luminate song-equivalent ratios.",
              series: [
                {
                  name: "Chart units",
                  points: [
                    { x: "10,000\npurchases", y: 10000 },
                    { x: "10,000 premium\nstreams", y: 100 },
                    { x: "10,000 ad-supported\nstreams", y: 40 },
                    { x: "10,000 programmed\nstreams", y: 25 },
                  ],
                },
              ],
              highlightX: ["10,000\npurchases"],
              note: "One purchase equals one unit. It takes 100 premium streams to produce the same single unit. This ratio is why K-pop charts on sales.",
              source: "Luminate, published song-equivalent weighting, effective week 1 of 2026",
            },
          ],
        },
        {
          label: "B",
          title: "What It Has Actually Taken to Chart",
          objective: "Replace rules of thumb with measured entry points from the chart itself.",
          strategy: "Billboard does not publish an entry threshold, and the cutoff moves every week with the strength of the field. Crowd Control Digital maintains its own record of it: the actual chart points earned by the songs sitting at ranks 1, 10, 25, 50, 75 and 100, captured from Luminate every week. Across 21 chart weeks from January to June 2026, entering the Hot 100 at No. 100 took a median of 34,853 points, and ranged from 29,087 in the softest week to 49,806 in the hardest. A concrete example from the week ending June 11: the song sitting at No. 100 got there on 3.64 million premium streams, 671,000 ad-supported streams, 86,500 in airplay audience and 880 sales, for 37,432 points. Read against the ratio above, ten thousand units would have been more than a quarter of that entire chart position on its own.",
          charts: [
            {
              kind: "hbars",
              title: "Median Chart Points Required, by Hot 100 Rank",
              subtitle: "Observed points earned by the song at each rank, median of 21 chart weeks, January to June 2026.",
              series: [
                {
                  name: "Chart points",
                  points: [
                    { x: "No. 1", y: 299949 },
                    { x: "No. 10", y: 146157 },
                    { x: "No. 25", y: 99732 },
                    { x: "No. 50", y: 62817 },
                    { x: "No. 75", y: 44643 },
                    { x: "No. 100", y: 34853 },
                  ],
                },
              ],
              highlightX: ["No. 100"],
              note: "The entry point is the realistic first target. Ranges across the same period: No. 100 ran 29,087 to 49,806, No. 25 ran 70,199 to 148,295.",
              source: "Crowd Control Digital chart dataset, Luminate weekly drill-ins, 21 weeks",
            },
            {
              kind: "line",
              title: "Hot 100 Entry Point, Week by Week",
              subtitle: "Points required to sit at No. 100, every chart week from January to June 2026. The target moves, which is why the counting week matters.",
              series: [
                {
                  name: "Points at No. 100",
                  points: [
                    { x: "1/15", y: 38603 }, { x: "1/22", y: 33305 }, { x: "1/29", y: 29087 }, { x: "2/5", y: 35215 }, { x: "2/12", y: 46524 }, { x: "2/19", y: 36484 }, { x: "2/26", y: 35862 }, { x: "3/5", y: 34999 }, { x: "3/12", y: 34332 }, { x: "3/19", y: 33012 }, { x: "3/26", y: 33859 }, { x: "4/2", y: 35330 }, { x: "4/9", y: 31079 }, { x: "4/16", y: 32883 }, { x: "4/23", y: 31309 }, { x: "4/30", y: 34515 }, { x: "5/7", y: 34853 }, { x: "5/14", y: 32203 }, { x: "5/21", y: 49806 }, { x: "5/28", y: 38227 }, { x: "6/11", y: 37432 },
                  ],
                },
              ],
              note: "A 71 percent spread between the easiest and hardest week of the period. Release timing is worth as much as several thousand units.",
              source: "Crowd Control Digital chart dataset, Luminate weekly drill-ins",
            },
          ],
        },
        {
          label: "C",
          title: "Why This Lever Works for K-Pop in Particular",
          objective: "Show that peers reaching U.S. charts are doing it on sales, and that the U.S. physical market is moving in the same direction.",
          strategy: "Every major K-pop chart success in the U.S. this year has been a sales story rather than a streaming story. KATSEYE reached No. 1 on the Billboard 200 in August 2026 on 170,000 units, of which 145,000 were pure album sales, spread across more than thirty CD and vinyl variants. BTS reached No. 1 in March on 643,000 units with 532,000 pure sales. BLACKPINK charted at No. 8 in March on 52,000 units with 41,000 pure sales. In each case roughly four out of five chart units came from people buying something. The market backdrop points the same way: U.S. CD sales grew 16 percent in the first half of 2026, and Luminate stated in its own midyear report that without K-pop that growth would have been 6.7 percent. K-pop fandom is the reason the U.S. physical market is growing, and KiiiKiii has not yet sold a single U.S.-exclusive unit into it.",
          charts: [
            {
              kind: "grouped",
              title: "How K-Pop Acts Actually Chart in the U.S.",
              subtitle: "First-week U.S. equivalent album units versus pure album sales, 2026 Billboard 200 entries.",
              series: [
                {
                  name: "Total units",
                  points: [
                    { x: "BTS\nNo. 1", y: 643000 },
                    { x: "Stray Kids\nNo. 1", y: 369000 },
                    { x: "KATSEYE\nNo. 1", y: 170000 },
                    { x: "BLACKPINK\nNo. 8", y: 52000 },
                  ],
                },
                {
                  name: "Pure sales",
                  points: [
                    { x: "BTS\nNo. 1", y: 532000 },
                    { x: "Stray Kids\nNo. 1", y: null },
                    { x: "KATSEYE\nNo. 1", y: 145000 },
                    { x: "BLACKPINK\nNo. 8", y: 41000 },
                  ],
                },
              ],
              note: "Pure sales are 79 to 85 percent of chart units for every act shown. Stray Kids' sales split was not published; its 369,000 units came with 17 physical and 8 digital variants.",
              source: "Billboard chart reporting on Luminate data, March to August 2026",
            },
          ],
        },
        {
          label: "D",
          title: "How It Gets Executed",
          objective: "Convert the owned fan list into units inside a single counting week.",
          strategy: "Pre-orders open to the first-party list before any public announcement, which rewards the list and gives an early read on demand while there is still time to act on it. A U.S.-exclusive version through the established U.S. K-pop retail network creates a reason to buy in-market rather than importing, and variant strategy is what every act in the chart above used to multiply units per fan. A retail or pop-up moment gives the campaign something to photograph and the press something to cover. Everything is timed to land inside one counting week, because a unit sold in the wrong week does nothing for a chart position.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the owned list first",
              "U.S.-exclusive version and variant strategy through U.S. K-pop retail",
              "Retail or pop-up moment tied to the on-sale",
              "All demand concentrated inside one counting week",
              "Direct-to-fan channel for margin on top of chart-eligible retail",
            ],
          },
          kpis: [
            "Pre-order units committed before public on-sale",
            "Total units in the counting week",
            "Percentage of units traced to the first-party list",
          ],
        },
      ],
      footnote: "Ratios: Luminate published song-equivalent weighting, effective week 1 of 2026. Threshold data: Crowd Control Digital's own chart dataset, built from Luminate weekly drill-ins across 21 chart weeks, January to June 2026. Peer figures: Billboard chart reporting on Luminate data. Album-chart and song-chart ratios differ; both are set out above in the terms that apply to each. Targets are set once a release date is confirmed, because the entry point moves with the competitive week.",
    },

    // ===================================================================
    // 06. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "U.S. Lift",
      title: "Workstream 3 / U.S. Market Lift",
      philosophy: "Grow the followed, subscribed, and engaged audience in the market where the listeners already are.",
      intro: "This workstream is measured on Spotify followers, Instagram, and YouTube growth in the United States. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 07 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media in the Top Market",
          objective: "Run the group's first dedicated U.S. paid program against an audience that is already listening.",
          strategy: "The catalog has already proven what converts: \"404 (New Era)\" is still pulling streams seven months on, and the current single reached No. 1 in Korea on its own momentum. Paid support runs U.S.-first against those proven tracks, laddering from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. targeted",
              "Fan-data capture units feeding Workstream 1",
              "Retargeting from video viewers, engagers, and profile visitors",
              "Weekly creative rotation sourced from organic winners",
              "Weekly reporting against a fixed baseline, with a scale-or-stop call at each checkpoint",
            ],
          },
          kpis: [
            "Spotify follower growth against baseline",
            "U.S. Instagram and YouTube growth against baseline",
            "Cost per follower and cost per fan captured",
          ],
        },
        {
          label: "B",
          title: "Content and Creator Work That Scales",
          objective: "Put paid weight behind the content formats the group's own data already proves, at volumes that actually register.",
          strategy: "An analysis of 113 KiiiKiii and competitor videos, with each video's real performance data attached, found a clear pattern: the group's most-produced format is its lowest-performing one, while member-focused posts, prop and gag formats, and stage footage consistently outperform. The same analysis found that identical posts routinely earn several times more on Instagram than on TikTok, and that almost none of the group's content points a viewer anywhere. None of that requires new production. It requires reallocating what is already being made, and putting media behind the formats that earn.",
          components: {
            heading: "What the Content Analysis Found",
            items: [
              "Member-focused posts outperform the account median by roughly two to one, and are 7 percent of output",
              "The most-produced format is roughly half of all posts and one seventh of top performers",
              "Identical posts earn up to five times more on Instagram than TikTok, with no version made for either",
              "One explicit call to action appeared across 68 analyzed posts",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Median Views by Content Format",
              subtitle: "KiiiKiii's own posts, TikTok medians in thousands.",
              unit: "K",
              series: [
                {
                  name: "Median views (K)",
                  points: [
                    { x: "Most-produced\nformat", y: 246 },
                    { x: "Account\nmedian", y: 590 },
                    { x: "Prop and gag\nposts", y: 939 },
                    { x: "Member-focused\nposts", y: 1220 },
                  ],
                },
              ],
              highlightX: ["Member-focused\nposts"],
              source: "Analysis of 113 videos with performance data attached, Aug 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Clipping and Seeding, Sized Honestly",
          objective: "Use creator volume where it works, and say clearly where it does not.",
          strategy: "Clipping works at scale and only at scale. One million impressions changes nothing measurable. One hundred million can move an act. At roughly a dollar CPM, fifty million impressions costs in the region of fifty thousand dollars, and that is the level at which the tactic is worth running at all. Crowd Control Digital built the back end for one of the largest clipping platforms in the market and buys at rates the agency market does not have access to. Content produced through clipping is also licensed back into paid, which lowers creative costs on everything else.",
          charts: [
            {
              kind: "bars",
              title: "Clipping: The Floor of Efficacy",
              subtitle: "Impressions delivered, and what each level realistically achieves.",
              series: [
                {
                  name: "Impressions",
                  points: [
                    { x: "No measurable\neffect  1M", y: 1000000 },
                    { x: "Threshold\n~50M", y: 50000000 },
                    { x: "Can move an act\n100M", y: 100000000 },
                  ],
                },
              ],
              highlightX: ["Can move an act\n100M"],
              note: "At roughly a $1 CPM, 50M impressions is on the order of $50,000. Below the threshold the spend buys noise, which is why we would rather not run it than run it small.",
              source: "Crowd Control Digital clipping benchmarks, 2026",
            },
          ],
        },
      ],
      footnote: "Content findings come from an analysis of 113 KiiiKiii and competitor videos with per-post performance data attached, completed August 2026.",
    },

    // ===================================================================
    // 07. How We Work
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "How We Work",
      title: "How We Work",
      thesis: "There is a floor of efficacy for everything. Every channel has a spend level below which the money buys noise, and we would rather tell you that before taking the budget than after spending it.",
      hierarchy: [
        {
          label: "Every Line Has a Worst, Expected, and Best Case",
          description: "Nothing is presented as a single number. Each workstream comes with three scenarios and the assumptions behind them, so the downside is visible before the budget is committed rather than explained afterward.",
        },
        {
          label: "Start Low Everywhere, Scale What Moves",
          description: "On a new engagement we deliberately start below capacity across every channel, read the results, and move budget toward what works. Scale-or-stop decisions happen on a set schedule against a set baseline, not on instinct at the end of a quarter.",
        },
        {
          label: "Streaming Is Worked, Not Promised",
          description: "We do not put a number on streaming lift, because nobody can predict it honestly. A recent test on another artist put real money behind a track and produced a movement smaller than that track's normal daily variance, which is to say unreadable. We report streaming weekly and we work it hard through the tactics above. We commit to followers, audience growth, fan data, and units, which are all measurable and attributable.",
        },
        {
          label: "Clear Division of Labor",
          description: "Crowd Control Digital runs numbers, media, data, and creative testing. Transparent Arts runs A&R, press, and relationships. Neither side sells the other's expertise, and both sides sit on the same weekly call.",
        },
      ],
      messaging: [
        "The audience is already there. This plan is about converting it, not creating it.",
        "Everything proposed here is measured against a baseline set before launch.",
        "The magic bullet is not telling anyone there is a magic bullet.",
      ],
      footnote: "Every recommendation in this document traces to consumption data pulled September 3, 2026, or to results from a live campaign run on the same three workstreams.",
    },

    // ===================================================================
    // 08. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm. Fan data capture stands up in week one because everything else feeds it. Paid begins small and scales only on evidence. Physical planning starts as soon as a release date is confirmed, and the first checkpoint at week four is a real scale-or-stop decision, not a status update.",
      weeks: [
        { index: 1, label: "W1", dates: "Week 1" },
        { index: 2, label: "W2", dates: "Week 2" },
        { index: 3, label: "W3", dates: "Week 3" },
        { index: 4, label: "W4", dates: "Week 4", highlight: true, note: "CHECKPOINT" },
        { index: 5, label: "W5", dates: "Week 5" },
        { index: 6, label: "W6", dates: "Week 6" },
        { index: 7, label: "W7", dates: "Week 7" },
        { index: 8, label: "W8", dates: "Week 8", highlight: true, note: "CHECKPOINT" },
        { index: 9, label: "W9", dates: "Week 9" },
        { index: 10, label: "W10", dates: "Week 10" },
        { index: 11, label: "W11", dates: "Week 11" },
        { index: 12, label: "W12", dates: "Week 12", highlight: true, note: "REVIEW" },
      ],
      workstreams: [
        {
          name: "Fan Data",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
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
          name: "U.S. Paid",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
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
          name: "Content Mix",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "REBAL" },
            { weekIndex: 3, intensity: "high" },
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
          name: "Physical",
          cells: [
            { weekIndex: 3, intensity: "low", label: "PLAN" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "RETAIL" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", label: "ONSALE" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Stand up fan data capture",
          items: [
            "Fan-data platform live: capture surfaces, consent flows, welcome sequence.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
            "Content audit delivered: which formats to increase, which to cut, no new production required.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "U.S. paid launches small against proven catalog, measuring cost per follower and cost per fan.",
            "Content mix rebalanced toward the formats the analysis identified.",
            "First capture campaign live, feeding the list.",
          ],
        },
        {
          weekIndex: 4,
          title: "Checkpoint: scale or stop",
          items: [
            "Full read on cost per fan and cost per follower against the targets agreed at kickoff.",
            "Budget moves to what is working. Anything below its floor of efficacy is stopped, not nursed.",
            "Physical planning opens once the release date is confirmed.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: mid-window review",
          items: [
            "List size, follower growth, and audience growth measured against the 90-day targets.",
            "Retail and pre-order plan locked for the counting week.",
            "Creative refreshed from the current organic winners.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by the label.",
            "Recommendations for the next release cycle, sized on what this window actually proved.",
          ],
        },
      ],
      footnote: "Timing assumes a confirmed release date for the physical workstream. Checkpoints are real decision points with the authority to stop a channel.",
    },
  ],
};
