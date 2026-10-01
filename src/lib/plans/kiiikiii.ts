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
    date: "October 2026",
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
      subtitle: "KiiiKiii now has more than 1.09 million Spotify followers, and the United States is its largest listening market. That is a strong base to build a U.S. campaign on.",
      body: [
        "KiiiKiii reached a career-high 4.41M Spotify monthly listeners in September and sits at 3.97M today, with the U.S. as its largest market. Followers grew 9 percent in the last month alone, to 1.09 million. \"404 (New Era)\" is still charting in Korea 252 days after release and has passed ten million streams there. \"Pop Off Pop Off\" reached No. 1 on Spotify Korea within ten days, peaked at No. 3 on the weekly chart, and is still in the top 20 seven weeks in. It also won Best Song of the Year at the SPOTV K-Pop Awards in September. The audience is real, it is growing, and a large share of it is already in the market Starship wants to grow.",
        "The opportunity is to give that audience a direct line to the label and a reason to act: a U.S. fan list the label owns, a physical release plan ready for the next U.S. chart week, and sustained paid support in the market where the listeners already are. This document proposes three workstreams to do that. Each has a test budget, a defined success metric, and a rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party fan data: a U.S. fan database the label owns outright, built inside Korean privacy law",
          "Physical sales: a U.S. chart plan built during the campaign and ready to run for the next release",
          "U.S. market lift: growth in Spotify followers, Instagram, and YouTube in the top market",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "Spotify follower growth, measured against a set baseline in a set window",
          "Instagram and YouTube growth concentrated in the United States",
          "A first-party fan list with a stated cost per fan and a size target",
          "A release-ready U.S. physical plan, with pre-order demand measured against the owned fan list",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Listeners and Followers Since Debut",
          subtitle: "Followers have risen every single week since debut and passed 1.09 million by October 2026. Each release cycle leaves the listener base higher than the one before it.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "2/26/25", y: 42075 }, { x: "3/12/25", y: 709813 }, { x: "3/26/25", y: 1394572 }, { x: "4/9/25", y: 1800939 }, { x: "4/23/25", y: 1773572 }, { x: "5/7/25", y: 1496555 }, { x: "5/21/25", y: 1394789 }, { x: "6/4/25", y: 1230975 }, { x: "6/18/25", y: 1041609 }, { x: "7/2/25", y: 997039 }, { x: "7/16/25", y: 957721 }, { x: "7/30/25", y: 812380 }, { x: "8/13/25", y: 865993 }, { x: "8/27/25", y: 1257338 }, { x: "9/10/25", y: 1381161 }, { x: "9/24/25", y: 1190848 }, { x: "10/8/25", y: 1058594 }, { x: "10/22/25", y: 926214 }, { x: "11/5/25", y: 820899 }, { x: "11/19/25", y: 893196 }, { x: "12/3/25", y: 927667 }, { x: "12/17/25", y: 857681 }, { x: "12/31/25", y: 831721 }, { x: "1/14/26", y: 841397 }, { x: "1/28/26", y: 914832 }, { x: "2/11/26", y: 2110587 }, { x: "2/25/26", y: 3209569 }, { x: "3/11/26", y: 3647896 }, { x: "3/25/26", y: 3723676 }, { x: "4/8/26", y: 3793821 }, { x: "4/22/26", y: 3819436 }, { x: "5/6/26", y: 3786215 }, { x: "5/20/26", y: 3686434 }, { x: "6/3/26", y: 3691572 }, { x: "6/17/26", y: 3687714 }, { x: "7/1/26", y: 3537890 }, { x: "7/15/26", y: 3346487 }, { x: "7/29/26", y: 3232246 }, { x: "8/12/26", y: 3234105 }, { x: "8/26/26", y: 3980695 }, { x: "8/31/26", y: 4137130 }, { x: "10/1/26", y: 3971878 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "2/26/25", y: 16158 }, { x: "3/12/25", y: 59917 }, { x: "3/26/25", y: 84666 }, { x: "4/9/25", y: 109584 }, { x: "4/23/25", y: 125179 }, { x: "5/7/25", y: 141541 }, { x: "5/21/25", y: 154121 }, { x: "6/4/25", y: 165037 }, { x: "6/18/25", y: 176263 }, { x: "7/2/25", y: 185506 }, { x: "7/16/25", y: 194902 }, { x: "7/30/25", y: 204291 }, { x: "8/13/25", y: 219269 }, { x: "8/27/25", y: 233343 }, { x: "9/10/25", y: 243369 }, { x: "9/24/25", y: 254488 }, { x: "10/8/25", y: 264792 }, { x: "10/22/25", y: 274744 }, { x: "11/5/25", y: 284526 }, { x: "11/19/25", y: 295210 }, { x: "12/3/25", y: 307750 }, { x: "12/17/25", y: 322149 }, { x: "12/31/25", y: 335502 }, { x: "1/14/26", y: 350353 }, { x: "1/28/26", y: 375502 }, { x: "2/11/26", y: 414802 }, { x: "2/25/26", y: 452981 }, { x: "3/11/26", y: 494508 }, { x: "3/25/26", y: 538285 }, { x: "4/8/26", y: 582755 }, { x: "4/22/26", y: 624096 }, { x: "5/6/26", y: 664489 }, { x: "5/20/26", y: 700695 }, { x: "6/3/26", y: 736458 }, { x: "6/17/26", y: 771708 }, { x: "7/1/26", y: 805011 }, { x: "7/15/26", y: 839117 }, { x: "7/29/26", y: 876272 }, { x: "8/12/26", y: 918742 }, { x: "8/26/26", y: 976747 }, { x: "8/31/26", y: 993822 }, { x: "10/1/26", y: 1094240 },
              ],
            },
          ],
          markers: [
            { x: "3/26/25", label: "DEBUT" },
            { x: "1/28/26", label: "404" },
            { x: "8/12/26", label: "POP OFF" },
          ],
          tall: true,
          source: "Chartmetric weekly readings through Aug 31 2026; Spotify, Oct 1 2026",
        },
      ],
      footnote: "Data refreshed October 1, 2026 unless dated otherwise. Sources: Chartmetric, Spotify, Spotify weekly and daily South Korea chart archives, and platform data.",
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
      intro: "Everything below comes from live consumption data refreshed October 1, 2026: Spotify and Chartmetric for audience metrics, the Spotify South Korea chart archives for stream-level detail. The comparison set is the girl-group class KiiiKiii is measured against commercially.",
      subBlocks: [
        {
          label: "A",
          title: "The Songs Hold Better Than the Category",
          objective: "KiiiKiii's hits do something the rest of the class does not: they grow after release week and stay.",
          strategy: "Most K-pop singles peak in week one and decline from there. \"404 (New Era)\" ran at 4.8 times its launch week by week four, was still at 1.8 times launch at week 24, and in week 35 is still pulling 232K streams a week in Korea, having passed ten million there. Against the same chart source, the class's biggest recent hits retained between 16 and 63 percent of launch week at that age. \"Pop Off Pop Off\" is following the same shape: No. 1 on Spotify Korea by day nine, a No. 3 weekly peak, and still in the weekly top 20 seven weeks in with 302K streams that week. This is the single most valuable thing about the catalog, because it means audience acquired for a KiiiKiii song does not evaporate the following month.",
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
                    { x: "W1", y: 1.0 }, { x: "W4", y: 4.83 }, { x: "W8", y: 3.01 }, { x: "W12", y: 2.13 }, { x: "W16", y: 1.79 }, { x: "W20", y: 2.25 }, { x: "W24", y: 1.84 }, { x: "W35", y: 1.73 },
                  ],
                },
                {
                  name: "Comp A",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 1.21 }, { x: "W8", y: 0.85 }, { x: "W12", y: 0.75 }, { x: "W16", y: 0.71 }, { x: "W20", y: 0.65 }, { x: "W24", y: 0.63 }, { x: "W35", y: null },
                  ],
                },
                {
                  name: "Comp B",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.75 }, { x: "W8", y: 0.56 }, { x: "W12", y: 0.53 }, { x: "W16", y: 0.41 }, { x: "W20", y: 0.35 }, { x: "W24", y: null }, { x: "W35", y: null },
                  ],
                },
                {
                  name: "Comp C",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.68 }, { x: "W8", y: 0.38 }, { x: "W12", y: 0.34 }, { x: "W16", y: 0.23 }, { x: "W20", y: 0.2 }, { x: "W24", y: 0.16 }, { x: "W35", y: null },
                  ],
                },
              ],
              note: "Comps are the three highest-profile girl-group singles of the same period, unnamed here as a courtesy. Two left the chart before week 24.",
              source: "Spotify weekly South Korea chart archives, pulled Oct 1 2026",
              tall: true,
            },
            {
              kind: "bars",
              title: "404 (New Era): Weekly Korea Streams, 35 Weeks",
              subtitle: "Launch week 134K. Peak 647K in week four. Week 35 still at 232K, well above launch, eight months on.",
              unit: "K",
              series: [
                {
                  name: "Weekly streams (K)",
                  points: [
                    { x: "W1", y: 134 }, { x: "W4", y: 647 }, { x: "W8", y: 404 }, { x: "W12", y: 286 }, { x: "W16", y: 240 }, { x: "W20", y: 301 }, { x: "W24", y: 246 }, { x: "W28", y: 245 }, { x: "W31", y: 227 }, { x: "W35", y: 232 },
                  ],
                },
              ],
              source: "Spotify weekly South Korea chart archive, Jan to Sep 2026",
            },
          ],
        },
        {
          label: "B",
          title: "1.09 Million Followers, Four Million Listeners",
          objective: "The gap between listening and committing is the single largest available gain, and it is already starting to close.",
          strategy: "KiiiKiii's Spotify follower-to-listener ratio is 0.275, up from 0.239 a month ago, because followers grew 9 percent while listeners eased off the September peak. That movement is the good news: the conversion is happening on its own. The headroom is the bigger news: roughly 2.9 million people listened to KiiiKiii this month without yet taking the one free action that puts every future release in front of them automatically, and every group in the comparison set converts at a higher rate. A follower is the cheapest, most durable growth available to the group, and it is the first metric the U.S. workstream is measured against.",
          charts: [
            {
              kind: "hbars",
              title: "Followers per Monthly Listener",
              subtitle: "Higher is a deeper committed base. Mature fandom acts sit above 1.0.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "KiiiKiii", y: 0.275 },
                    { x: "Hearts2Hearts", y: 0.352 },
                    { x: "KATSEYE", y: 0.396 },
                    { x: "ILLIT", y: 0.41 },
                    { x: "MEOVV", y: 0.421 },
                    { x: "izna", y: 0.459 },
                    { x: "LE SSERAFIM", y: 0.585 },
                    { x: "NewJeans", y: 1.002 },
                    { x: "aespa", y: 1.091 },
                    { x: "BABYMONSTER", y: 1.241 },
                    { x: "IVE", y: 1.34 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              note: "At ILLIT's 0.41, KiiiKiii's current listener base would carry about 1.63M followers, roughly 540,000 more than today.",
              source: "Spotify, Oct 1 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The U.S. Is the Top Market, and It Grew On Its Own",
          objective: "The largest audience is in the U.S., and almost all of the growth there so far has been organic, which means every lever added from here is upside.",
          strategy: "The United States is KiiiKiii's No. 1 listening market, nearly twice the size of Korea. It got there organically: a strong festival debut at the Rose Bowl in August, and editorial support that keeps finding the music. \"Pop Off Pop Off\" has been placed on general pop playlists, not just K-pop shelves, which is the hardest placement to earn and the usual signal that a Korean act can cross over. It is back on Stargirl vibes this week at No. 4. Dedicated U.S. paid support, U.S. fan capture, and a U.S. retail moment have not been layered on top of that yet, so this is a market that has already proven demand and still has every major growth lever available.",
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
              source: "Chartmetric market breakdown, Sep 3 2026 (latest available)",
            },
          ],
        },
      ],
      footnote: "Audience data: Spotify, Oct 1, 2026; market breakdown from Chartmetric, Sep 3, 2026. Stream data: Spotify South Korea weekly and daily chart archives. Comparison set is the 2024 to 2026 girl-group class.",
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
      intro: "Every other workstream gets more efficient once this exists, because the label gains a direct line to its U.S. audience that no platform sits between.",
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
      philosophy: "Built during the campaign, ready for the release that needs to chart. On the Billboard 200, one album sale counts the same as one thousand paid streams.",
      intro: "Physical is the one lever that cannot be switched on in the week it is needed. Variants, U.S. retail allocation, pre-order flows and the fan list that converts into units all take months to put in place. So this workstream runs in the background of the campaign: while Workstreams 1 and 3 grow the U.S. audience, we build the physical plan and have it queued, sized and ready for the next KiiiKiii release Starship wants on a U.S. chart.",
      subBlocks: [
        {
          label: "A",
          title: "What One Album Sale Is Worth",
          objective: "Establish the exchange rate between a sale and a stream on the chart an EP actually competes on.",
          strategy: "An EP competes on the Billboard 200, which counts album-equivalent units. Luminate, the data provider behind the Billboard charts, publishes the formula: as of the first chart week of 2026, one album purchase counts as one unit, ten track downloads count as one unit, 1,000 premium streams count as one unit, and 2,500 ad-supported streams count as one unit. So 10,000 album sales in a release week carry the same chart weight as ten million premium streams. For an act whose U.S. audience is real but young, that is the most efficient route onto the chart by a wide margin, and it is the route every K-pop act in section C took.",
          charts: [
            {
              kind: "bars",
              title: "Billboard 200 Units Produced by 10,000 Fan Actions",
              subtitle: "What the same number of fan actions is worth on the album chart, under Luminate's published 2026 album-equivalent ratios.",
              series: [
                {
                  name: "Album units",
                  points: [
                    { x: "10,000\nalbum purchases", y: 10000 },
                    { x: "10,000\ntrack downloads", y: 1000 },
                    { x: "10,000 premium\nstreams", y: 10 },
                    { x: "10,000 ad-supported\nstreams", y: 4 },
                  ],
                },
              ],
              highlightX: ["10,000\nalbum purchases"],
              note: "One album sale equals one unit. It takes 1,000 premium streams, or 2,500 ad-supported streams, to produce the same unit. Programmed streams do not count toward album charts at all.",
              source: "Luminate, published album-equivalent weighting, effective week 1 of 2026",
            },
          ],
        },
        {
          label: "B",
          title: "What It Takes to Chart in 2026",
          objective: "Set realistic targets from what K-pop releases have actually needed this year.",
          strategy: "Billboard does not publish a cutoff, so the targets below are built from this year's reported results. Around 8,000 to 12,000 mostly physical U.S. sales has been enough to enter the Billboard 200 for K-pop releases with modest U.S. streaming. 26,000 sales took a K-pop act to No. 16. The top 10 has cost 33,000 to 41,000 units across 2026, and K-pop acts that reached it did so on roughly 34,000 pure sales. On the sales-only Top Album Sales chart, about 8,000 copies has been a top 10 week. One detail matters for planning: several K-pop releases this year made the Top Album Sales top 10 and still missed the Billboard 200, because the sales landed without enough units behind them. That is exactly why the first-party list and the U.S. streaming base are built first. KiiiKiii has not yet appeared on a U.S. Billboard chart, which makes a first Billboard 200 entry a clear, attainable headline for the next release.",
          charts: [
            {
              kind: "hbars",
              title: "U.S. First-Week Sales and Billboard 200 Rank, 2026",
              subtitle: "Pure album sales in the release week for K-pop releases, with the Billboard 200 position each reached.",
              series: [
                {
                  name: "Pure U.S. sales",
                  points: [
                    { x: "ENHYPEN  No. 1", y: 92000 },
                    { x: "BLACKPINK  No. 8", y: 41000 },
                    { x: "aespa  No. 9", y: 34500 },
                    { x: "LE SSERAFIM  No. 10", y: 34000 },
                    { x: "BOYNEXTDOOR  No. 16", y: 26000 },
                    { x: "PLAVE  No. 145", y: 12000 },
                    { x: "ILLIT  No. 171", y: 8000 },
                  ],
                },
              ],
              highlightX: ["PLAVE  No. 145", "ILLIT  No. 171"],
              note: "Entry range highlighted. ILLIT's figure is from July 2025, under the previous ratios. KATSEYE (145,000) and BTS (532,000) are left off this chart for scale.",
              source: "Billboard chart reporting on Luminate data, July 2025 to September 2026",
            },
            {
              kind: "bars",
              title: "Proposed Targets for the Next KiiiKiii Release",
              subtitle: "U.S. release-week units, by outcome. The first target is a debut on the Billboard 200.",
              series: [
                {
                  name: "U.S. units",
                  points: [
                    { x: "Top Album Sales\ntop 10", y: 8000 },
                    { x: "Billboard 200\nentry", y: 12000 },
                    { x: "Billboard 200\ntop 20", y: 26000 },
                    { x: "Billboard 200\ntop 10", y: 35000 },
                  ],
                },
              ],
              highlightX: ["Billboard 200\nentry"],
              note: "Planning ranges drawn from the 2026 results above. Final targets are set once a release date is confirmed, because every chart week has a different field.",
              source: "Crowd Control Digital analysis of 2026 Billboard results",
            },
          ],
        },
        {
          label: "C",
          title: "Why This Works for K-Pop in Particular",
          objective: "Peers reaching U.S. charts are doing it on sales, and the U.S. physical market is growing because of K-pop.",
          strategy: "K-pop's U.S. chart success this year has been driven by sales. ENHYPEN reached No. 1 on the Billboard 200 in September on 98,000 units, 92,000 of them pure sales. KATSEYE reached No. 1 in August on 170,000 units with 145,000 sales, spread across more than thirty CD and vinyl variants. LE SSERAFIM and aespa both reached the top 10 in June with roughly 34,000 sales each. Across these releases, about four out of five chart units came from people buying the album. The market is moving the same way: U.S. CD sales grew 16 percent in the first half of 2026, and Luminate's midyear report says that without K-pop the growth would have been 6.7 percent. A first U.S.-exclusive KiiiKiii release would arrive into a market that is actively growing around exactly this kind of fan.",
          charts: [
            {
              kind: "grouped",
              title: "How K-Pop Acts Chart on the Billboard 200",
              subtitle: "First-week U.S. album-equivalent units versus pure album sales, 2026.",
              series: [
                {
                  name: "Total units",
                  points: [
                    { x: "KATSEYE\nNo. 1", y: 170000 },
                    { x: "ENHYPEN\nNo. 1", y: 98000 },
                    { x: "BLACKPINK\nNo. 8", y: 52000 },
                    { x: "aespa\nNo. 9", y: 41000 },
                    { x: "LE SSERAFIM\nNo. 10", y: 41000 },
                  ],
                },
                {
                  name: "Pure sales",
                  points: [
                    { x: "KATSEYE\nNo. 1", y: 145000 },
                    { x: "ENHYPEN\nNo. 1", y: 92000 },
                    { x: "BLACKPINK\nNo. 8", y: 41000 },
                    { x: "aespa\nNo. 9", y: 34500 },
                    { x: "LE SSERAFIM\nNo. 10", y: 34000 },
                  ],
                },
              ],
              note: "Pure sales account for 79 to 94 percent of chart units for every act shown.",
              source: "Billboard chart reporting on Luminate data, March to September 2026",
            },
          ],
        },
        {
          label: "D",
          title: "Prepared During the Campaign, Ready for the Release",
          objective: "Have the full physical plan built and queued before the release date is announced.",
          strategy: "During the campaign we build every piece of the physical plan that takes lead time, so that when Starship confirms the next release that needs to chart, the plan is ready to run rather than ready to start. That means sizing the target from the owned fan list and the U.S. streaming base, recommending the variant mix and a U.S.-exclusive version, lining up U.S. K-pop retail allocation and a retail or pop-up moment, and building the pre-order flow so it opens to the fan list first. When the date lands, everything points at one counting week, because sales spread across several weeks do far less for a chart position than the same sales in one.",
          components: {
            heading: "What Is Ready Before the Release Date",
            items: [
              "A unit target sized from the owned U.S. fan list and streaming base",
              "Variant and U.S.-exclusive version recommendations for the label's product team",
              "U.S. K-pop retail allocation and a retail or pop-up moment, scoped and costed",
              "A pre-order flow that opens to the fan list first and reads demand early",
              "A counting-week plan that concentrates paid, content and fan activity on one week",
            ],
          },
          kpis: [
            "Release-ready plan delivered by the end of the first 90 days",
            "Pre-order units committed before public on-sale",
            "Total U.S. units in the counting week, against the agreed target",
          ],
        },
      ],
      footnote: "Ratios: Luminate published album-equivalent weighting, effective week 1 of 2026. The Hot 100 is a separate song chart with its own formula, and album purchases do not count toward it; this workstream targets the Billboard 200 and Top Album Sales, which is where an EP competes. Peer figures: Billboard chart reporting on Luminate data. Product decisions, manufacturing and release timing remain with Starship; Crowd Control Digital plans and executes the U.S. marketing around them.",
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
          strategy: "The catalog has already proven what converts: \"404 (New Era)\" is still pulling streams eight months on, and the current single reached No. 1 in Korea on its own momentum. Paid support runs U.S.-first against those proven tracks, laddering from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
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
          strategy: "KiiiKiii's own data already shows which formats win. An analysis of 113 KiiiKiii and competitor videos, each with its real performance data attached, found that member-focused posts, prop and gag formats, and stage footage consistently beat the account average, and that the same post often earns several times more on Instagram than on TikTok. That is a strong position to start from: the winning formats are already being made, so the job is to make more of them and put media behind them, not to invent a new content strategy. A short release-date end card on key assets turns that reach into followers and pre-saves.",
          components: {
            heading: "Where We Would Put Media",
            items: [
              "Member-focused posts: roughly twice the account median, so the first place to add volume and spend",
              "Prop, gag and stage formats: proven over-performers, ready to scale",
              "Instagram as a lead platform: identical posts have earned up to five times their TikTok views",
              "Release-date end cards on key assets, so strong reach points fans to follow, pre-save and pre-order",
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
                    { x: "Guest challenge\nposts", y: 246 },
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
          strategy: "Clipping works at scale and only at scale. A quarter of a million impressions changes nothing measurable. Twenty-five million can move an act, and at roughly a dollar CPM that is about twenty-five thousand dollars, which is a sensible place to start. Crowd Control Digital built the back end for one of the largest clipping platforms in the market and buys at rates the agency market does not have access to, so the same budget delivers materially more volume here than it would anywhere else. Content produced through clipping is also licensed back into paid, which lowers creative costs across the rest of the plan.",
          charts: [
            {
              kind: "bars",
              title: "Clipping: The Floor of Efficacy",
              subtitle: "Impressions delivered, and what each level realistically achieves.",
              series: [
                {
                  name: "Impressions",
                  points: [
                    { x: "No measurable\neffect  250K", y: 250000 },
                    { x: "Minimum viable\n~12.5M", y: 12500000 },
                    { x: "Starting budget\n25M", y: 25000000 },
                  ],
                },
              ],
              highlightX: ["Starting budget\n25M"],
              note: "At roughly a $1 CPM, 25M impressions is about $25,000, which is a realistic entry point rather than a minimum commitment. Below the floor the spend buys noise, which is why we would rather not run it than run it small.",
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
          description: "We do not put a number on streaming lift, because nobody can predict it honestly. We report streaming weekly and work it hard through the tactics above. What we commit to is followers, audience growth, fan data, and units, which are all measurable and attributable.",
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
      footnote: "Every recommendation in this document traces to consumption data refreshed October 1, 2026, to published Luminate methodology, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 08. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm. Fan data capture stands up in week one because everything else feeds it. Paid begins small and scales only on evidence. The physical plan is built in parallel across the window, so it is ready to run the moment the next release date is set. The first checkpoint at week four is a real scale-or-stop decision, not a status update.",
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
            { weekIndex: 3, intensity: "low", label: "SIZE" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "RETAIL" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", label: "PREORD" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high", label: "READY" },
            { weekIndex: 12, intensity: "high" },
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
            "Physical: U.S. unit target sized from the first four weeks of list growth and streaming data.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: mid-window review",
          items: [
            "List size, follower growth, and audience growth measured against the 90-day targets.",
            "Physical: retail allocation scoped and the pre-order flow built against the owned list.",
            "Creative refreshed from the current organic winners.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by the label.",
            "Physical plan delivered release-ready: unit target, variant and U.S.-exclusive recommendation, retail plan, pre-order flow, counting-week plan.",
            "Recommendations for the next release cycle, sized on what this window actually proved.",
          ],
        },
      ],
      footnote: "The physical plan runs whenever Starship sets the next release date, inside or after this window. Checkpoints are real decision points with the authority to stop a channel.",
    },

    // ===================================================================
    // 09. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "09",
      navLabel: "Investment",
      title: "Investment",
      intro: "A monthly retainer for strategy, execution and reporting across all three workstreams, with working media billed separately at cost plus management. The first 90 days are the test window: media starts deliberately small, and the week-four and week-eight checkpoints decide where it scales. Starship approves every dollar of working media before it is committed.",
      breakdownLabel: "Commercial Structure",
      deployableLabel: "Term",
      tiers: [
        {
          label: "Retainer",
          budget: "$5,000 / month",
          name: "Three-Workstream U.S. Retainer",
          tagline: "Strategy, campaign execution, fan-data build, physical planning, creative direction, weekly reporting, and a weekly call with Starship and Transparent Arts.",
          featured: true,
          deployable: "90-day initial window, then month to month",
          breakdown: [
            { vertical: "Monthly retainer", amount: "$5,000" },
            { vertical: "Initial window", amount: "90 days / $15,000" },
            { vertical: "Working media and creators", amount: "Starship-approved" },
            { vertical: "Management on working media", amount: "15% of spend" },
            { vertical: "Physical product and manufacturing", amount: "Label-side" },
          ],
        },
        {
          label: "Illustrative 90 Days",
          budget: "$84,000",
          name: "Recommended Starting Budget",
          tagline: "One way to fund the first window. Media lines are starting points that move at each checkpoint toward whatever is working.",
          deployable: "$60,000 working media in market",
          breakdown: [
            { vertical: "Retainer, 3 months", amount: "$15,000" },
            { vertical: "U.S. paid social (followers, audience, retargeting)", amount: "$25,000" },
            { vertical: "Clipping and creator seeding", amount: "$25,000" },
            { vertical: "Fan-data acquisition", amount: "$10,000" },
            { vertical: "Management, 15% of $60,000", amount: "$9,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "Lighter Start",
          subtitle: "Same structure, smaller pool",
          budget: "$43,750",
          description: "Retainer for 90 days ($15,000) plus $25,000 of working media split between U.S. paid and fan-data acquisition, and $3,750 management. Clipping is added at the first checkpoint if the early read supports it.",
        },
        {
          name: "Release-Week Physical Push",
          subtitle: "When the next release date is set",
          budget: "Scoped",
          description: "Paid, creator and fan-list activity concentrated on the counting week, budgeted against the unit target in the release-ready plan. Billed as working media at cost plus 15%.",
        },
      ],
      footnote: "Working media is approved by Starship before commitment and billed at cost plus 15%. Product, manufacturing and retail costs for physical releases sit with the label. Term and notice details are set in the statement of work.",
    },
  ],
};
