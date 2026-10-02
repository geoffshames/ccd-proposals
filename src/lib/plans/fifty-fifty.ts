import type { StrategyPlanData } from "../plan-context";

export const fiftyFiftyPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/fifty-fifty/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "fifty-fifty-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "U.S. Growth Plan",
    title: "FIFTY FIFTY",
    subtitle: "Three workstreams to build on the fandom the current lineup has grown every month since its debut: first-party fan data, physical sales, and U.S. market lift.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "October 2026",
    backgroundImage: "/images/fifty-fifty/fifty-fifty-group.jpg",
    partnerLogos: [
      { src: "/brand/TA-LOGO-WHITE.png", alt: "Transparent Arts", height: 36 },
      { src: "/brand/CC-LOGO-2024-WHITE.png", alt: "Crowd Control Digital", height: 22 },
    ],
  },

  footerCredit: "Transparent Arts × Crowd Control Digital",

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY TRANSPARENT ARTS AND CROWD CONTROL DIGITAL",
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
      subtitle: "FIFTY FIFTY has added Spotify followers every month for 46 straight months, and the pace is accelerating. The United States is already its largest market by a wide margin.",
      body: [
        "The strongest number in FIFTY FIFTY's data is one that rarely gets talked about. Spotify followers have grown every single month for 46 consecutive months and now stand at 2.31 million. Over the last five quarters the daily rate of new followers has risen every time, from 496 a day in mid-2025 to 1,048 a day in the quarter just ended, while monthly listeners held steady around 6 million. The share of listeners who choose to follow is at an all-time high. Physical sales tell the same story: the current lineup's Day & Night moved 108,313 units with a confirmed first week of 100,121, the best result in the group's history. \"Gravity\", an album track from the lineup's first release, keeps climbing with no promotion behind it and now streams more each day than any FIFTY FIFTY song except the 2023 breakout.",
        "The audience is real, it is growing, and more of it lives in the United States than anywhere else: 1.31 million monthly listeners, more than eleven times the Korean figure. What is not yet in place is the layer that turns that audience into something the label owns and can sell to directly. Transparent Arts and Crowd Control Digital propose three workstreams to build it, run as one team, each with a test budget, a low, expected and high outcome, and a clear rule for when to scale and when to stop.",
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
          "A first-party U.S. fan list with a stated cost per fan and a size range",
          "Spotify follower and Instagram growth against a set baseline, in a low, expected and high band",
          "Physical units moved through U.S. retail and direct-to-fan channels",
          "A first U.S. live moment sized to sell out, sold to the fan list first",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Followers, Month by Month",
          subtitle: "Every month-end reading since June 2025 is higher than the one before it. The run is 46 months long.",
          series: [
            {
              name: "Followers",
              points: [
                { x: "Jun 25", y: 1924025 }, { x: "Jul 25", y: 1935897 }, { x: "Aug 25", y: 1951417 }, { x: "Sep 25", y: 1969659 }, { x: "Oct 25", y: 1989684 }, { x: "Nov 25", y: 2014157 }, { x: "Dec 25", y: 2045330 }, { x: "Jan 26", y: 2071980 }, { x: "Feb 26", y: 2095846 }, { x: "Mar 26", y: 2127650 }, { x: "Apr 26", y: 2155778 }, { x: "May 26", y: 2183658 }, { x: "Jun 26", y: 2215718 }, { x: "Jul 26", y: 2249532 }, { x: "Aug 26", y: 2282596 }, { x: "Sep 26", y: 2312107 },
              ],
            },
          ],
          tall: true,
          source: "Chartmetric, month-end readings through Sep 30 2026",
        },
      ],
      footnote: "Data pulled October 1, 2026. Sources: Chartmetric, Spotify streaming data via kworb, Circle Chart, Hanteo, and platform data.",
    },

    // ===================================================================
    // 02. Where FIFTY FIFTY Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where FIFTY FIFTY Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live data pulled October 1, 2026: Chartmetric for audience metrics, Spotify streaming data for track-level detail, and Circle Chart and Hanteo for physical sales.",
      subBlocks: [
        {
          label: "A",
          title: "The Fandom Is Growing Faster Every Quarter",
          objective: "The current lineup is converting listeners into committed fans at an accelerating rate.",
          strategy: "A follower on Spotify is the one free action that puts every future release in front of a listener automatically, which makes it the best single measure of commitment the platform offers. FIFTY FIFTY's daily follower gain has risen for five quarters in a row, from 496 a day in the third quarter of 2025 to 1,048 a day in the third quarter of 2026, on a listener base that held steady over the same period. That steadiness is the point. Growth that comes from a bigger audience can disappear when the audience shrinks. Growth that comes from more of the same audience choosing to commit is the kind that compounds, and it has had no dedicated support behind it yet.",
          charts: [
            {
              kind: "bars",
              title: "New Spotify Followers per Day, by Quarter",
              subtitle: "Five consecutive quarters of acceleration on a steady listener base.",
              series: [
                {
                  name: "Followers per day",
                  points: [
                    { x: "Q3 2025", y: 496 },
                    { x: "Q4 2025", y: 836 },
                    { x: "Q1 2026", y: 902 },
                    { x: "Q2 2026", y: 965 },
                    { x: "Q3 2026", y: 1048 },
                  ],
                },
              ],
              highlightX: ["Q3 2026"],
              source: "Chartmetric daily follower series, through Sep 30 2026",
            },
            {
              kind: "line",
              title: "Share of Listeners Who Follow",
              subtitle: "Followers divided by monthly listeners, month-end. A new high in September 2026.",
              series: [
                {
                  name: "Followers per monthly listener",
                  points: [
                    { x: "Sep 25", y: 0.311 }, { x: "Nov 25", y: 0.328 }, { x: "Jan 26", y: 0.342 }, { x: "Mar 26", y: 0.348 }, { x: "May 26", y: 0.335 }, { x: "Jul 26", y: 0.366 }, { x: "Sep 26", y: 0.381 },
                  ],
                },
              ],
              note: "Peers with long-standing fandoms sit above 1.0, which is the headroom this plan is built to capture.",
              source: "Chartmetric, through Sep 30 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Current Lineup's Songs Are Finding Their Own Audience",
          objective: "The newer catalog is being discovered and held without promotional support.",
          strategy: "\"Gravity\" was an album track on Love Tune, the current lineup's first release. Two years on it earns about 19,350 Spotify streams a day, more than any FIFTY FIFTY song except the 2023 breakout, and it is still rising month over month. \"Genie Magic\" is out-streaming the lead single of its own EP. Both are cases of listeners finding the music on their own, which is the clearest signal available that the current lineup's catalog travels when it is put in front of people. Physical sales confirm it from the other direction: Day & Night's confirmed first week of 100,121 is the best in the group's history, and Imperfect-I'mperfect has moved 88,247 units so far this year.",
          charts: [
            {
              kind: "grouped",
              title: "Album Sales by Release",
              subtitle: "Circle cumulative units per release. The current lineup's releases are the group's two strongest.",
              series: [
                {
                  name: "Circle cumulative",
                  points: [
                    { x: "The Beginning:\nCupid (2023)", y: 39373 },
                    { x: "Love Tune\n(2024)", y: 38455 },
                    { x: "Day & Night\n(2025)", y: 108313 },
                    { x: "Imperfect-\nI'mperfect (2026)", y: 88247 },
                  ],
                },
              ],
              highlightX: ["Day & Night\n(2025)"],
              note: "Imperfect-I'mperfect is 2026 to date. Day & Night's Hanteo first week was 100,121.",
              source: "Circle Chart and Hanteo, read Oct 1 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The U.S. Is the Top Market and the Least Worked One",
          objective: "The largest audience sits in the market with the least built around it.",
          strategy: "The United States is FIFTY FIFTY's No. 1 market on Spotify at 1.31 million monthly listeners, more than 11 times the Korean figure, and it is also the No. 1 market on Instagram, TikTok, and YouTube. Spotify's own editorial already treats the group as a pop act rather than only a K-pop one, which is the hardest placement to earn and the usual signal that an act can cross over. What the market does not yet have is a path for those fans to act. The group's highest-traffic digital assets are not currently pointing fans anywhere they can join, buy, or be reached again. That is quick to fix, it costs almost nothing, and it is the first thing we would do.",
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Monthly Listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 1305618 },
                    { x: "Indonesia", y: 674642 },
                    { x: "Philippines", y: 646487 },
                    { x: "Malaysia", y: 493056 },
                    { x: "Poland", y: 418789 },
                    { x: "Taiwan", y: 298079 },
                    { x: "Australia", y: 257398 },
                    { x: "South Korea", y: 113831 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Oct 1 2026",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled Oct 1, 2026. Stream data: Spotify streaming totals via kworb, updated Sep 30, 2026. Physical: Circle Chart cumulative and Hanteo first-week figures.",
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
      intro: "Crowd Control Digital, the media and data side of this partnership, runs an active U.S. campaign for a K-pop act on a major Korean label, entering at week seven of a single's release cycle with U.S. and Canada targeting only. The numbers below cover June 15 to September 2, 2026. They are included because two of the three workstreams proposed here are the same two that produced these results.",
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
      philosophy: "Build a U.S. fan database ATTRAKT owns outright, inside what Korean privacy law allows.",
      intro: "Every other workstream gets more efficient once this exists, because the label stops renting access to its own audience. It also starts from an unusually strong position: FIFTY FIFTY already reaches about 5.7 million people across Instagram, TikTok, and YouTube.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "A U.S.-resident fan list with contact permission, behavioral enrichment, and direct commercial use.",
          strategy: "The first step is routing. The group's highest-traffic assets currently send fans to destinations that do not capture anything, so the opening weeks repoint that traffic to an owned destination that captures first and then forwards fans wherever they were going. That alone starts the list at no media cost. Paid acquisition units built specifically for signup then scale it, and records are enriched over time against real behavior so the label can tell a casual follower from a repeat buyer. The output is an asset ATTRAKT holds directly, usable for comeback announcements, tour on-sales, album pre-orders, and retail drops, without depending on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "Highest-traffic assets repointed to an owned capture destination in the first two weeks",
              "U.S. capture surfaces across social, pre-save, retail, and live moments",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: ticket buyers, repeat pre-savers, merchandise purchasers",
              "Full data ownership and export on the label side at all times",
            ],
          },
          kpis: [
            "Cost per fan, held under a target agreed before launch",
            "List size at 90 days, with a stated floor",
            "Percentage of records enriched with at least one purchase behavior",
          ],
          charts: [
            {
              kind: "bars",
              title: "U.S. Fan List at 12 Months",
              subtitle: "Low, expected, and high outcomes. Expected is about 1.8 percent of the group's current social following.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Low", y: 40000 },
                    { x: "Expected", y: 100000 },
                    { x: "High", y: 160000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Low assumes routing alone with minimal paid support. High assumes sustained paid acquisition at the reference campaign's cost per fan and a U.S. live moment feeding the list.",
              source: "Crowd Control Digital projection from Chartmetric social following, Oct 2026, and reference campaign cost per fan",
            },
          ],
        },
        {
          label: "B",
          title: "Working Within Korean Privacy Law",
          objective: "Stay compliant by scoping capture to the U.S., where the mechanics are permitted and the audience already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on the group's existing fan platform, which serves that market well. Capture is scoped to U.S. residents under U.S. rules, which is both fully compliant and aimed at the market this plan is about.",
          components: {
            heading: "Compliance Posture",
            items: [
              "U.S.-resident capture only, under U.S. consent standards",
              "No bundled consent, no signup as a condition of anything else",
              "Korean-market fans remain on the existing fan platform",
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
      intro: "FIFTY FIFTY's fans have already shown they buy: the current lineup's two full releases are the best-selling in the group's history. This workstream points that demand at U.S. charts.",
      subBlocks: [
        {
          label: "A",
          title: "What One Sale Is Actually Worth",
          objective: "Establish the exchange rate between a sale and a stream, from the published formula.",
          strategy: "Luminate, the data provider behind the Billboard charts, publishes the song-equivalent formula outright. As of the first chart week of 2026, one purchase counts as one unit, 100 premium streams count as one unit, 250 ad-supported streams count as one unit, and 400 programmed streams count as one unit. One sale is worth one hundred paid streams. Ten thousand units moved in a counting week is the chart equivalent of a million premium streams, and it is far easier to produce ten thousand committed purchases from a known fan list than a million incremental streams from strangers. Every major K-pop chart result in the U.S. this year has followed the same pattern, with roughly four out of five chart units coming from people buying something.",
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
              note: "One purchase equals one unit. It takes 100 premium streams to produce the same single unit.",
              source: "Luminate, published song-equivalent weighting, effective week 1 of 2026",
            },
          ],
        },
        {
          label: "B",
          title: "How It Gets Executed",
          objective: "Convert the owned fan list into units inside a single counting week.",
          strategy: "The group's sales history shows demand arriving faster than supply: Day & Night's first week on Hanteo was nearly four times its first-week shipment on Circle, and the release only caught up months later on a new version. Pre-orders opened to the first-party list before any public announcement solve that directly, because they measure demand while there is still time to act on it. A U.S.-exclusive version through the established U.S. K-pop retail network gives fans a reason to buy in-market, and a retail or pop-up moment gives the campaign something to photograph and the press something to cover. Everything is timed to land inside one counting week.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the owned list first",
              "U.S.-exclusive version through U.S. K-pop retail",
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
          charts: [
            {
              kind: "bars",
              title: "Album Units, Next Full Release Cycle",
              subtitle: "Low, expected, and high outcomes against the 88,247 Imperfect-I'mperfect has moved so far.",
              series: [
                {
                  name: "Units",
                  points: [
                    { x: "Low", y: 100000 },
                    { x: "Expected", y: 130000 },
                    { x: "High", y: 175000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Low matches the group's best release to date. Expected and high assume pre-orders open to the list and a U.S.-exclusive version. Targets are confirmed once a release date is set, because chart entry points move with the competitive week.",
              source: "Crowd Control Digital projection from Circle Chart and Hanteo history",
            },
          ],
        },
        {
          label: "C",
          title: "Recommendations for ATTRAKT",
          objective: "Three product decisions that sit with the label, which would make every workstream here more effective.",
          strategy: "These are ATTRAKT's calls, not part of this engagement's scope. We include them because each one gives the fan list something to sell and gives committed fans a next step beyond the album.",
          components: {
            heading: "Recommendations",
            items: [
              "An official lightstick, announced and pre-sold against a live moment. It is one of the most reliable identity and revenue products in K-pop, and it gives the U.S. live moment a natural on-sale partner",
              "A paid membership tier that a U.S. fan can buy easily, with benefits built for overseas fans: early access to pre-orders, ticket pre-sales, and exclusive content",
              "A version strategy set at the start of each release cycle, so supply meets first-week demand rather than catching up after it",
            ],
          },
        },
      ],
      footnote: "Ratios: Luminate published song-equivalent weighting, effective week 1 of 2026. Sales history: Circle Chart cumulative and Hanteo first-week figures, read October 1, 2026.",
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
      intro: "This workstream is measured on Spotify followers, Instagram, YouTube, and content performance in the United States. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 07 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media in the Top Market",
          objective: "Run the group's first dedicated U.S. paid program against an audience that is already listening.",
          strategy: "Paid support runs U.S.-first, laddering from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Instagram leads, because the group's own data shows it is the most efficient platform: the same video consistently earns more views there than on TikTok, and Instagram returns about three times as many views per follower. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. targeted, Instagram first",
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
          title: "Content That Already Works, Given More Weight",
          objective: "Put paid weight behind the formats the group's own data already proves.",
          strategy: "An analysis of 105 FIFTY FIFTY and competitor videos, with each video's real performance data attached, found one format that stands well above the rest: gaming and esports content, where the members appear inside gaming culture alongside creators and pro players. It earns a median of 584,750 views, more than five times the account's other content, and it works for every member rather than depending on one. It is also the most natural fit for the U.S. audience. Today it is under four percent of what the group posts. None of this requires a new production model. It requires giving the format that already works a regular slot, putting media behind it, getting to the moment that matters faster, and adding a clear next step for viewers, since almost none of the group's posts currently point anywhere.",
          components: {
            heading: "What the Content Analysis Found",
            items: [
              "Gaming and esports content earns a median 584,750 views, more than five times other formats, and is 3.7 percent of output",
              "Appearing inside a partner's world outperforms bringing a guest into the group's own format by roughly 13 to 1",
              "Posts published to both Instagram and TikTok on the same day earned more on Instagram in most matched pairs, and Instagram returns about three times more views per follower",
              "Comparison acts reach the payoff inside the first three seconds twice as often: 6 of 15 videos for both KATSEYE and i-dle, 3 of 15 for FIFTY FIFTY",
              "KATSEYE, the clearest U.S. benchmark, opens all 15 analyzed videos on movement already underway, with little dialogue, so they need no translation to land",
              "Five of 1,006 recent TikTok posts point a viewer anywhere they could follow, join, or buy",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Median Views by Content Format",
              subtitle: "FIFTY FIFTY's own TikTok posts, 2026.",
              series: [
                {
                  name: "Median views",
                  points: [
                    { x: "Release\npromo", y: 66550 },
                    { x: "Event and\nfancon", y: 91200 },
                    { x: "Personality\nclips", y: 103200 },
                    { x: "Gaming and\nesports", y: 584750 },
                  ],
                },
              ],
              highlightX: ["Gaming and\nesports"],
              source: "Analysis of 105 videos with performance data attached, Sep 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Clipping and Seeding, Sized Honestly",
          objective: "Use creator volume where it works, and say clearly where it does not.",
          strategy: "Clipping works at scale and only at scale. A quarter of a million impressions changes nothing measurable. Twenty-five million can move an act, and at roughly a dollar CPM that is about twenty-five thousand dollars. The recommended plan below runs about twice that, which is where clipping starts to compound rather than just register. Crowd Control Digital built the back end for one of the largest clipping platforms in the market and buys at rates the agency market does not have access to, so the same budget delivers materially more volume here than it would anywhere else. Content produced through clipping is also licensed back into paid, which lowers creative costs across the rest of the plan.",
        },
        {
          label: "D",
          title: "What Twelve Months Could Look Like",
          objective: "Every growth target as a range, so the downside is visible before any budget is committed.",
          strategy: "Low is roughly where current trends land without new investment. Expected is what we plan against. High assumes every workstream scales after the 90-day checkpoints. The U.S. live moment follows the same logic: low is a single showcase of 1,000 to 1,500 capacity, expected is a sold-out headline show of around 2,500 in Los Angeles, and high is a two-city run adding New York, each sold to the fan list before general on-sale.",
          charts: [
            {
              kind: "grouped",
              title: "12-Month Growth Against Today's Baseline",
              subtitle: "Percent growth by metric. Baselines: 2.31M Spotify followers, 962K Instagram followers, 94,100 median views per post.",
              unit: "%",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Spotify\nfollowers", y: 15 },
                    { x: "Instagram\nfollowers", y: 20 },
                    { x: "Median views\nper post", y: 25 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Spotify\nfollowers", y: 21 },
                    { x: "Instagram\nfollowers", y: 40 },
                    { x: "Median views\nper post", y: 100 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Spotify\nfollowers", y: 30 },
                    { x: "Instagram\nfollowers", y: 66 },
                    { x: "Median views\nper post", y: 200 },
                  ],
                },
              ],
              note: "Expected lands at about 2.8M Spotify followers, 1.35M on Instagram, and a median of about 190,000 views per post. Spotify's low case is the current trend of roughly 1,000 new followers a day.",
              source: "Crowd Control Digital projection from Chartmetric baselines, Oct 1 2026",
            },
          ],
        },
      ],
      footnote: "Content findings come from an analysis of 105 FIFTY FIFTY and competitor videos with per-post performance data attached, completed September 2026, with the opening-seconds comparison added October 2026.",
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
          label: "Every Line Has a Low, Expected, and High Case",
          description: "Nothing is presented as a single number. Each workstream comes with three outcomes and the assumptions behind them, so the downside is visible before the budget is committed rather than explained afterward.",
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
          label: "One Team, Two Specialisms",
          description: "This is a joint offering from Transparent Arts and Crowd Control Digital, contracted and reported as one team. Transparent Arts leads relationships, press, partnerships, and the U.S. industry surface. Crowd Control Digital leads numbers, media, data, and creative testing. ATTRAKT keeps A&R, the music, and every artist decision. Everyone sits on the same weekly call and works from the same report.",
        },
      ],
      messaging: [
        "The fandom is already growing. This plan is about building on it, not creating it.",
        "Everything proposed here is measured against a baseline set before launch.",
        "The magic bullet is not telling anyone there is a magic bullet.",
      ],
      footnote: "Every recommendation in this document traces to data pulled October 1, 2026, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 08. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm. The highest-traffic assets are fixed in the first two weeks because everything else feeds from them. Paid begins small and scales only on evidence. Physical planning starts as soon as a release date is confirmed, and the checkpoint at week four is a real scale-or-stop decision, not a status update.",
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
            { weekIndex: 1, intensity: "high", label: "FIX" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
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
            { weekIndex: 1, intensity: "medium", label: "PLAN" },
            { weekIndex: 2, intensity: "high", label: "GAMING" },
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
          title: "Fix the highest-traffic assets",
          items: [
            "The group's highest-traffic digital assets repointed to an owned destination that captures fans before forwarding them.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
            "Content plan delivered, with a regular slot for the gaming and esports format.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "U.S. paid launches small, Instagram first, measuring cost per follower and cost per fan.",
            "Fan-data platform live: capture surfaces, consent flows, welcome sequence.",
            "First gaming and esports content in its new slot.",
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
            "List size, follower growth, and audience growth measured against the low, expected, and high bands.",
            "Retail and pre-order plan locked for the counting week.",
            "U.S. live moment scoped and sized against the list.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by the label.",
            "Recommendation for the next cycle's budget tier, sized on what this window actually proved.",
          ],
        },
      ],
      footnote: "Timing assumes a confirmed release date for the physical workstream. Checkpoints are real decision points with the authority to stop a channel.",
    },

    // ===================================================================
    // 09. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "09",
      navLabel: "Investment",
      title: "Investment",
      intro: "A 90-day pilot across all three workstreams, delivered jointly by Transparent Arts and Crowd Control Digital and offered at three budget levels. Each level shows exactly what goes to media and what goes to the team. The pilot sets the real cost per fan and cost per follower, and those numbers decide which band of the 12-month outcomes is within reach.",
      ccdNote: "The fee is one joint retainer of $10,000 a month covering both Transparent Arts and Crowd Control Digital, plus 15 percent of the media the team manages. The retainer covers strategy, relationships and press, partnerships, data, the content plan, creative testing, and weekly reporting. Fixing the group's highest-traffic assets is included in the retainer and uses no media budget.",
      breakdownLabel: "Where the budget goes",
      deployableLabel: "Working media",
      tiers: [
        {
          label: "Foundation",
          budget: "$87,500",
          name: "90-Day Total",
          tagline: "Fan data and U.S. growth only. Proves cost per fan and cost per follower before anything larger is committed.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$25,000" },
            { vertical: "U.S. paid growth media", amount: "$25,000" },
            { vertical: "Joint retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$7,500" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot, Transparent Arts and Crowd Control Digital.",
            retainerLabel: "Joint Retainer",
            mediaManagement: "$7,500",
            mediaManagementDetail: "15 percent of $50,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
        {
          label: "Recommended",
          budget: "$168,000",
          name: "90-Day Total",
          tagline: "Adds clipping at about 50 million impressions and pre-order support for the next release.",
          deployable: "$120,000",
          featured: true,
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$30,000" },
            { vertical: "U.S. paid growth media", amount: "$30,000" },
            { vertical: "Clipping, about 50M impressions", amount: "$50,000" },
            { vertical: "Pre-order and retail activation", amount: "$10,000" },
            { vertical: "Joint retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$18,000" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot, Transparent Arts and Crowd Control Digital.",
            retainerLabel: "Joint Retainer",
            mediaManagement: "$18,000",
            mediaManagementDetail: "15 percent of $120,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
        {
          label: "Accelerated",
          budget: "$283,000",
          name: "90-Day Total",
          tagline: "Doubles clipping again to about 100 million impressions and funds marketing for a U.S. live moment sold to the fan list first.",
          deployable: "$220,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$40,000" },
            { vertical: "U.S. paid growth media", amount: "$50,000" },
            { vertical: "Clipping, about 100M impressions", amount: "$100,000" },
            { vertical: "Pre-order, retail, and U.S. live marketing", amount: "$30,000" },
            { vertical: "Joint retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$33,000" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot, Transparent Arts and Crowd Control Digital.",
            retainerLabel: "Joint Retainer",
            mediaManagement: "$33,000",
            mediaManagementDetail: "15 percent of $220,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
      ],
      footnote: "All figures are for the 90-day pilot. Media is billed at cost. Each later release cycle is authorized as its own budget on the same structure, sized from what the pilot proved. Tour production, physical manufacturing, and talent costs sit with the label and are not included.",
    },
  ],
};
