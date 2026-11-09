import type { StrategyPlanData } from "../plan-context";

export const artmsPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/artms/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "artms-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Audit & Growth Plan",
    title: "ARTMS",
    subtitle: "An audit of two and a half years of fandom growth, and three workstreams to turn it into an owned audience: first-party fan data, physical sales, and market lift in the U.S. and Latin America.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "November 2026",
    backgroundImage: "/images/artms/artms-group.jpg",
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
      subtitle: "ARTMS has added Spotify followers every single day for nearly three years, and the United States is now its largest market by a wide margin. The fandom is built. The next step is owning it.",
      body: [
        "Few groups in K-pop have a fandom as steady as ARTMS's. Spotify followers have risen every day since January 2024, 1,038 daily readings without a single down day, and doubled in under two years, from 154,650 at the end of 2024 to 307,217. More than eight in ten monthly listeners now follow the group. The fans travel, too: four world tours since 2024, more than forty North American dates, runs through Latin America and Europe, and an album, Club Icarus, that reached No. 3 on Apple Music's U.S. album chart and charted in 124 countries.",
        "The audience is overwhelmingly outside Korea. The U.S. leads every platform, and Brazil, Mexico and Chile together rival it. MODHAUS has already built something most labels do not have, a fan platform in COSMO that fans pay to use. What is not yet in place is the web, tour and retail layer that catches the far larger audience that never opens the app, and turns it into fans the label can reach directly. Transparent Arts and Crowd Control Digital propose three workstreams to build that layer, run as one team, each with a test budget, a low, expected and high outcome, and a clear rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party fan data: an overseas fan list the label owns outright, fed by every link, tour and retail moment, and pointed back into COSMO",
          "Physical sales: a U.S. sales base built on pre-orders and committed-fan math, paced across two releases",
          "Market lift: growth in Spotify followers, Instagram and YouTube in the U.S. and Latin America, where the audience already is",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "A first-party fan list with a stated cost per fan and a size range",
          "Spotify follower and Instagram growth against a set baseline, in a low, expected and high band",
          "Physical units moved through U.S. retail and direct-to-fan channels",
          "The next North American tour sold to the fan list first, through a registered presale",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Followers, Quarter by Quarter",
          subtitle: "Every reading since January 2024 is higher than the one before it, through release cycles and the gaps between them.",
          series: [
            {
              name: "Followers",
              points: [
                { x: "Jun 24", y: 110450 }, { x: "Sep 24", y: 136804 }, { x: "Dec 24", y: 154650 }, { x: "Mar 25", y: 168814 }, { x: "Jun 25", y: 190954 }, { x: "Sep 25", y: 210944 }, { x: "Dec 25", y: 231030 }, { x: "Mar 26", y: 252371 }, { x: "Jun 26", y: 271537 }, { x: "Sep 26", y: 298741 }, { x: "Oct 26", y: 305665 },
              ],
            },
          ],
          tall: true,
          source: "Chartmetric, quarter-end readings through Oct 31 2026",
        },
      ],
      footnote: "Data pulled November 9, 2026. Sources: Chartmetric, Hanteo, Circle Chart, Billboard, Apple Music and platform data. Cover photo: David Lee, ARTMS in Tacoma, April 2025, CC BY 2.0.",
    },

    // ===================================================================
    // 02. Where ARTMS Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where ARTMS Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live data pulled November 9, 2026: Chartmetric for audience metrics, Hanteo and Circle Chart for physical sales, and Billboard and Apple Music for chart history, compared against girl groups at and above ARTMS's scale.",
      subBlocks: [
        {
          label: "A",
          title: "The Fandom Compounds Between Releases",
          objective: "Listening rises and settles with each release. Commitment only goes one way.",
          strategy: "Monthly listeners move with the release calendar: up to 582,485 at the end of August around Hyper-Ego, back to 370,945 by the end of October. Followers do not move with anything. A follow on Spotify is the one free action that puts every future release in front of a listener automatically, and ARTMS has added roughly 7,500 a month through 2026, including the months with no new music. The share of listeners who follow has climbed from fewer than two in ten at debut to 81 in 100 today, in the same band as the most loyal fandoms in its peer set and twice the rate of the groups whose audience arrived through one breakout song. The core grows on its own. What it does not yet do is register anywhere the label can reach it directly.",
          charts: [
            {
              kind: "grouped",
              title: "Monthly Listeners and Followers, 2026",
              subtitle: "Month-end readings. Listening spiked with the summer release and settled; followers grew every month.",
              series: [
                {
                  name: "Monthly listeners",
                  color: "#8A8A8A",
                  points: [
                    { x: "Jan", y: 296958 }, { x: "Feb", y: 285659 }, { x: "Mar", y: 295109 }, { x: "Apr", y: 298539 }, { x: "May", y: 318041 }, { x: "Jun", y: 324852 }, { x: "Jul", y: 333727 }, { x: "Aug", y: 582485 }, { x: "Sep", y: 452830 }, { x: "Oct", y: 370945 },
                  ],
                },
                {
                  name: "Followers",
                  color: "#FD3737",
                  points: [
                    { x: "Jan", y: 239007 }, { x: "Feb", y: 244547 }, { x: "Mar", y: 252371 }, { x: "Apr", y: 259364 }, { x: "May", y: 265662 }, { x: "Jun", y: 271537 }, { x: "Jul", y: 280035 }, { x: "Aug", y: 293460 }, { x: "Sep", y: 298741 }, { x: "Oct", y: 305665 },
                  ],
                },
              ],
              source: "Chartmetric, month-end readings, Jan to Oct 2026",
            },
            {
              kind: "hbars",
              title: "Followers per Monthly Listener, Girl-Group Peers",
              subtitle: "Spotify followers divided by monthly listeners, November 9, 2026.",
              series: [
                {
                  name: "Followers per listener",
                  points: [
                    { x: "Billlie", y: 1.996 },
                    { x: "tripleS", y: 0.922 },
                    { x: "KISS OF LIFE", y: 0.873 },
                    { x: "QWER", y: 0.828 },
                    { x: "H1-KEY", y: 0.826 },
                    { x: "ARTMS", y: 0.811 },
                    { x: "ILLIT", y: 0.441 },
                    { x: "Hearts2Hearts", y: 0.404 },
                    { x: "FIFTY FIFTY", y: 0.403 },
                  ],
                },
              ],
              highlightX: ["ARTMS"],
              note: "ARTMS sits with the long-running, fandom-led groups, not the groups whose audience arrived through one breakout song. At debut the rate was 0.19.",
              source: "Chartmetric, Nov 9 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Audience Lives Outside Korea, and the U.S. Leads",
          objective: "The United States is the No. 1 market on every platform, and Latin America is the second engine.",
          strategy: "The U.S. reached 186,459 monthly listeners on September 16, during the North American leg of the tour, more than nine times Korea's peak of 19,877. It accounts for about a fifth of the group's followers on Instagram, TikTok and YouTube alike. Latin America is the quieter story, and on Instagram the bigger one: Mexico, Brazil, Chile and Colombia together make up 27 percent of followers, more than the U.S., and Brazil alone is 15 percent of TikTok. Southeast Asia, where the debut first broke, still contributes heavily through Indonesia and the Philippines. Korea ranks outside the top five on Instagram and TikTok, and seventh among Spotify listening markets. The U.S. is where a fan list, physical sales and a tour presale are worth the most. Latin America is where the same budget buys the most growth. This plan works both.",
          charts: [
            {
              kind: "hbars",
              title: "Peak Monthly Listeners by Market, 2024 to 2026",
              subtitle: "Each market measured at its own peak since January 2024.",
              series: [
                {
                  name: "Peak listeners",
                  points: [
                    { x: "United States", y: 186459 },
                    { x: "Indonesia", y: 98095 },
                    { x: "Philippines", y: 65175 },
                    { x: "Germany", y: 49282 },
                    { x: "Brazil", y: 42921 },
                    { x: "Malaysia", y: 40248 },
                    { x: "Poland", y: 36560 },
                    { x: "South Korea", y: 19877 },
                  ],
                },
              ],
              highlightX: ["United States"],
              note: "Country-level listener figures are Chartmetric estimates.",
              source: "Chartmetric, market-level listener series, Jan 2024 to Nov 2026",
            },
            {
              kind: "hbars",
              title: "Where the Instagram Followers Are",
              subtitle: "Share of Instagram followers by country, November 2026. Latin America combined is the largest block.",
              unit: "%",
              series: [
                {
                  name: "Share of followers",
                  points: [
                    { x: "Latin America", y: 26.9 },
                    { x: "United States", y: 21.2 },
                    { x: "Indonesia", y: 11.5 },
                    { x: "Japan", y: 7.7 },
                    { x: "South Korea", y: 5.8 },
                    { x: "Philippines", y: 3.9 },
                  ],
                },
              ],
              highlightX: ["Latin America", "United States"],
              note: "Latin America here is Mexico, Brazil, Chile and Colombia combined. On TikTok the U.S. is 22.5 percent of followers and Brazil 14.5 percent. On YouTube the U.S. is 20.7 percent.",
              source: "Chartmetric audience data, Nov 8 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The Fans Already Buy, and Already Show Up",
          objective: "Two six-figure first weeks, a Billboard track record and four world tours, without a U.S. sales channel of the group's own.",
          strategy: "Club Icarus moved 123,480 units in its first week on Hanteo, the best in the group's history, after DALL's 121,356. DALL entered Billboard's World Albums chart at No. 7 and Top Album Sales at No. 30, and Club Icarus reached No. 3 on Apple Music's U.S. album chart. On the road, ARTMS has played more than forty North American dates since 2024, plus São Paulo, Mexico City, Santiago, Buenos Aires and Bogotá. That is real, proven spending power. Today it is pointed at a Korean-language store with no U.S. pricing, U.S. retail exclusives run through partners, and tour on-sales open to the general public with no list behind them. Each release and each tour starts from zero. The next two can start from a list.",
          charts: [
            {
              kind: "bars",
              title: "Cumulative Album Sales by Release",
              subtitle: "Circle Chart cumulative totals, November 2026.",
              series: [
                {
                  name: "Units",
                  points: [
                    { x: "DALL\nMay 2024", y: 112605 },
                    { x: "Burn\nApr 2025", y: 29142 },
                    { x: "Club Icarus\nJun 2025", y: 152572 },
                    { x: "Hyper-Ego\nAug 2026", y: 75949 },
                  ],
                },
              ],
              highlightX: ["Club Icarus\nJun 2025"],
              note: "Burn is a single album. Sales vary release to release with no owned list to anchor demand, which is the gap Workstream 2 closes.",
              source: "Circle Chart, cumulative album totals",
            },
            {
              kind: "hbars",
              title: "North American Tour Dates by Tour",
              subtitle: "Headline dates in the U.S. and Canada.",
              series: [
                {
                  name: "Dates",
                  points: [
                    { x: "Moonshot 2024", y: 12 },
                    { x: "Lunar Theory 2025", y: 11 },
                    { x: "Club Icarus 2025-26", y: 11 },
                    { x: "Blue Blood 2026", y: 10 },
                  ],
                },
              ],
              note: "44 North American headline dates in under two and a half years, each a room full of fans who bought a ticket and left no record the label can use.",
              source: "Published tour routing, 2024 to 2026",
            },
          ],
        },
      ],
    },

    // ===================================================================
    // 03. Content Audit
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Content",
      title: "Content Audit",
      philosophy: "Twelve months of posts, more than 1,100 across three platforms, with each post's real performance attached.",
      intro: "We pulled every ARTMS post on TikTok and Instagram from the last twelve months, 401 TikToks and 481 Instagram posts, plus 257 YouTube videos and Shorts, and compared them with recent posts from tripleS, KISS OF LIFE and QWER. Each post was coded for format, who is on screen, setting, audio, caption language and calls to action, then measured against the posts around it in time, so a release spike does not flatter the results. Four findings shape the plan.",
      subBlocks: [
        {
          label: "A",
          title: "Close, Short and Small Beats Stage Footage",
          objective: "The best posts and the weakest posts look nothing alike.",
          strategy: "The top tenth of ARTMS TikToks earned a median of 377,500 views. The bottom tenth earned 13,100. Tour and concert recaps make up none of the top tenth and more than half of the bottom tenth, most of them horizontal stage footage dropped into a vertical frame. The top tenth is the opposite: tight, vertical, selfie-style framing, a median of 17 seconds against 34, and small line-ups. Duos make up 23 percent of the top tenth and none of the bottom, and three- and four-member sub-unit posts run at well over twice the account's usual reach. The group already makes the posts that travel. It makes more of the ones that do not, particularly on the road.",
          charts: [
            {
              kind: "bars",
              title: "Median TikTok Views, Best and Weakest Posts",
              subtitle: "ARTMS's own TikToks, top tenth against bottom tenth by views, last 12 months.",
              series: [
                {
                  name: "Median views",
                  points: [
                    { x: "Bottom tenth", y: 13100 },
                    { x: "All posts", y: 41000 },
                    { x: "Top tenth", y: 377500 },
                  ],
                },
              ],
              highlightX: ["Top tenth"],
              note: "Tour recaps: 0% of the top tenth, 56% of the bottom tenth. Duos: 23% of the top tenth, 0% of the bottom.",
              source: "Analysis of 393 ARTMS TikToks with performance data attached, Nov 2026",
            },
            {
              kind: "hbars",
              title: "Performance by Format",
              subtitle: "Views relative to the posts around each one in time. 1.0 is the account's usual reach.",
              series: [
                {
                  name: "Relative reach",
                  points: [
                    { x: "Sub-unit (3 to 4)", y: 2.39 },
                    { x: "Trending outside audio", y: 1.21 },
                    { x: "Duo", y: 1.19 },
                    { x: "Solo member", y: 0.92 },
                    { x: "Tour and concert recap", y: 0.74 },
                  ],
                },
              ],
              highlightX: ["Sub-unit (3 to 4)"],
              source: "Analysis of 393 ARTMS TikToks, Nov 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Trend Lane Is Underused",
          objective: "Peers build reach on trending audio. ARTMS mostly does not.",
          strategy: "Posts set to trending outside audio run 21 percent above the account's usual reach, yet they make up only 19 percent of ARTMS TikToks. KISS OF LIFE puts 60 percent of its TikToks on trending audio, tripleS 47 percent and QWER 42 percent. It is the cheapest reach available on the platform, and it is where ARTMS's strongest format, the short duo or sub-unit post, naturally lives. The group already has the series that work, too: \"Choose your Stunner\" ran at nearly three times the account's usual reach. The opportunity is more of both, not a new production model.",
          charts: [
            {
              kind: "hbars",
              title: "Share of TikToks on Trending Outside Audio",
              subtitle: "Recent posts on each group's official account.",
              unit: "%",
              series: [
                {
                  name: "Share of posts",
                  points: [
                    { x: "KISS OF LIFE", y: 60 },
                    { x: "tripleS", y: 47 },
                    { x: "QWER", y: 42 },
                    { x: "ARTMS", y: 19 },
                  ],
                },
              ],
              highlightX: ["ARTMS"],
              source: "Content analysis, last 60 posts per peer and 12 months of ARTMS posts, Nov 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Instagram Is the More Efficient Platform",
          objective: "The same video earns more on Instagram, on a smaller following.",
          strategy: "323 ARTMS TikToks have a matching Instagram reel posted within a day and a half. Instagram won 301 of them, by a median of 2.87 times the views on a following about a quarter smaller, close to four times per follower. Tour recaps, the weakest TikTok format, do nearly five times better on Instagram. That makes Instagram the place to lead paid support and the home for the road content, while TikTok gets the short, trend-led cuts it rewards.",
          components: {
            heading: "Supporting Findings",
            items: [
              "Creator partners carry further than the group's own account: reels owned by third-party creators featuring ARTMS earned a median of 249,731 views, against 101,887 for ARTMS's own reels",
              "Guest swaps work when the guest is well known to the audience, a median of 410,600 views, against 36,200 for the rest. Collaboration as a category gives no lift on its own",
              "Release windows add volume, not reach: around the Born Stunner video, posting rose almost fivefold while the median fell from 68,500 to 51,400",
              "8 of 393 TikToks carry any call to action, and 43 percent of captions are in Korean only, against 17 to 27 percent for peers. None of 882 captions is in Spanish, Portuguese or Indonesian, the languages of three of the group's top five follower markets",
            ],
          },
        },
      ],
      footnote: "Content analysis of 1,139 ARTMS posts and about 330 comparison posts with per-post performance data attached, completed November 2026. Findings that did not hold up under testing, including posting hour, shorter-is-better and a general collaboration lift, are not claimed here.",
    },

    // ===================================================================
    // 04. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Every surface a fan can land on, checked one by one: where it sends them, and what it keeps.",
      intro: "A fandom needs somewhere to go. We checked every owned and partner surface, including the official website, link hub, smart links, store, fan platform and social bios. MODHAUS starts from a stronger position than most labels, because COSMO already holds a paying, signed-in core. The gaps below sit around it, on the surfaces most fans actually touch, and most of them cost nothing in media to close.",
      subBlocks: [
        {
          label: "A",
          title: "COSMO Holds the Core. The Web Holds Nothing.",
          objective: "The app captures the most committed fans. Every other surface lets fans pass through unrecorded.",
          strategy: "COSMO signs fans in by email, and its users vote on title tracks and units with real stakes, which is a stronger fan relationship than most labels will ever build. But only the most committed fans download an app and buy Objekts. ARTMS reaches about 2.5 million people across Instagram, TikTok, YouTube and X, and none of the surfaces those people land on keeps anything. The official website has no sign-up, no store link and no working app link. The release smart links list streaming services and capture no contact. The link hub carries about thirty links with no sign-up among them. The fans one step outside the app, the ticket buyers, the album buyers and the casual followers, are the audience this plan is built to catch, and every surface we add points them toward COSMO as the next step.",
          components: {
            heading: "What We Found",
            items: [
              "No email or SMS sign-up on the website, link hub, smart links or store",
              "Release smart links that list streaming services and capture nothing",
              "8 calls to action across 393 TikToks, and no post pointing to a link in bio",
              "First-party data held only inside COSMO, by its most committed users",
            ],
          },
        },
        {
          label: "B",
          title: "The Hub Needs Maintenance, and the Store Needs a U.S. Door",
          objective: "The surfaces that do exist send overseas fans to the wrong place, or nowhere.",
          strategy: "At our audit the official link hub carried a malformed Instagram link and an app link with a typo in its label, filed past-date Seoul ticket links under the current album heading, and had no links for two cities on the current European leg. The official store is Korean-language only, with no U.S. pricing and no stated international shipping, for a group whose largest market is the United States. And the 2026 North American tour went on sale to the general public with no fan presale, which means 10 cities' worth of the most committed buyers left no record. None of this is a creative problem. It is plumbing, and it is quick to fix.",
          components: {
            heading: "What We Found",
            items: [
              "Link hub with a malformed Instagram link, a mislabeled app link and stale ticket links",
              "Korean-language store with no U.S. pricing or stated international shipping",
              "U.S. retail exclusives run through partners, with no direct-to-fan relationship",
              "2026 North American on-sale with no registered fan presale",
            ],
          },
        },
      ],
      footnote: "Surface-by-surface audit completed November 2026. Platform settings and link destinations can change; every item is re-checked in week one of the engagement.",
    },

    // ===================================================================
    // 05. Track Record
    // ===================================================================
    {
      type: "vertical",
      number: "05",
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
      footnote: "All figures from the reference engagement's own campaign reporting, June to September 2026. The artist and label are covered by a non-disclosure agreement and are not identified. Streaming outcomes are deliberately excluded from this section, for the reason set out in Section 10.",
    },

    // ===================================================================
    // 06. Workstream 1
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Fan Data",
      title: "Workstream 1 / First-Party Fan Data",
      philosophy: "Build an overseas fan list MODHAUS owns outright, catch the fans who never open the app, and hand them to COSMO.",
      intro: "Every other workstream gets more efficient once this exists, because the label stops starting each release and each tour from zero. ARTMS reaches about 2.5 million people across Instagram, TikTok, YouTube and X, and plays to tens of thousands of ticket buyers on every North American run. Almost none of them are on a list today.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "An overseas fan list with contact permission, behavioral enrichment, a direct line to COSMO, and direct commercial use.",
          strategy: "The first step is routing. The website, link hub, release smart links and highest-traffic posts currently send fans to destinations that capture nothing, so the opening weeks repoint that traffic to an owned destination that captures first and then forwards fans wherever they were going, with COSMO offered as the next step. That alone starts the list at no media cost. The second step is the tour. The next North American on-sale runs as a registered presale, so every fan who wants early access joins the list to get it, the mechanic artists from Jorja Smith to major K-pop acts now use. Paid acquisition units built specifically for sign-up then scale it, and records are enriched over time against real behavior, so the label can tell a casual follower from a repeat ticket and album buyer. The output is an asset MODHAUS holds directly, usable for comebacks, tours, pre-orders and retail drops, without depending on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "Website, link hub, smart links and highest-traffic posts repointed to an owned capture destination in the first two weeks, with COSMO as the next step",
              "Registered presale for the next North American tour, so the most committed buyers join the list first",
              "Capture surfaces across social, pre-save, retail and live moments, in English, Spanish and Portuguese first",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: ticket buyers, repeat pre-savers, album and merchandise buyers, COSMO users",
              "Full data ownership and export on the label side at all times",
            ],
          },
          kpis: [
            "Cost per fan, held under a target agreed before launch",
            "List size at 90 days, with a stated floor",
            "Share of list members who go on to join COSMO, and share enriched with at least one purchase",
          ],
          charts: [
            {
              kind: "bars",
              title: "Fan List at 12 Months",
              subtitle: "Low, expected, and high outcomes. Expected is about 1.6 percent of the group's current social following.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Low", y: 15000 },
                    { x: "Expected", y: 40000 },
                    { x: "High", y: 75000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Low assumes routing alone with minimal paid support. High assumes sustained paid acquisition at the reference campaign's cost per fan and a full North American tour sold through a registered presale.",
              source: "Crowd Control Digital projection from Chartmetric social following, Nov 2026, and reference campaign cost per fan",
            },
          ],
        },
        {
          label: "B",
          title: "Working Within Korean Privacy Law",
          objective: "Stay compliant by scoping capture to fans outside Korea, where the mechanics are permitted and most of the audience already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on COSMO and the label's existing channels. Capture is scoped to fans outside Korea, led by the U.S., under each market's own consent standards, which is both compliant and aimed at the markets that make up nearly all of the group's listening.",
          components: {
            heading: "Compliance Posture",
            items: [
              "Overseas capture only, led by the U.S., under each market's consent standards",
              "No bundled consent, no sign-up as a condition of anything else",
              "Korean-market fans remain on COSMO and the existing channels",
              "Documented consent trail and opt-out on every surface",
            ],
          },
        },
      ],
      footnote: "Scoping capture outside Korea is a deliberate compliance decision, not a limitation. South Korea ranks seventh among the group's Spotify listening markets and outside the top five on Instagram and TikTok.",
    },

    // ===================================================================
    // 07. Workstream 2
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Physical",
      title: "Workstream 2 / Physical Sales",
      philosophy: "One album sale counts as one chart unit. It takes a thousand premium streams to count as the same unit. That ratio is the whole reason this workstream exists.",
      intro: "ARTMS's fans have already shown they buy, with two six-figure first weeks and a Billboard World Albums top ten. This workstream points that demand at the market where the most listeners live, and builds a U.S. sales base the group can grow release over release.",
      subBlocks: [
        {
          label: "A",
          title: "What One Album Sale Is Worth",
          objective: "Establish the exchange rate between a sale and a stream on the chart an album actually competes on.",
          strategy: "An EP or album competes on the Billboard 200 and its component charts, which count album-equivalent units. Luminate, the data provider behind the Billboard charts, publishes the formula: as of the first chart week of 2026, one album purchase counts as one unit, ten track downloads count as one unit, 1,000 premium streams count as one unit, and 2,500 ad-supported streams count as one unit. A few thousand album sales in a release week do what millions of streams would, and it is far easier to produce committed purchases from a known fan list than millions of incremental streams from strangers. Every K-pop chart result in the U.S. this year has followed the same pattern, with most chart units coming from people buying something.",
          charts: [
            {
              kind: "bars",
              title: "Billboard 200 Units Produced by 10,000 Fan Actions",
              subtitle: "What the same number of fan actions is worth on the album chart, under Luminate's published 2026 album-equivalent ratios.",
              series: [
                {
                  name: "Chart units",
                  points: [
                    { x: "10,000 album\npurchases", y: 10000 },
                    { x: "10,000 track\ndownloads", y: 1000 },
                    { x: "10,000 premium\nstreams", y: 10 },
                    { x: "10,000 ad-supported\nstreams", y: 4 },
                  ],
                },
              ],
              highlightX: ["10,000 album\npurchases"],
              note: "One album sale equals one unit. It takes 1,000 premium streams, or 2,500 ad-supported streams, to produce the same unit. Programmed streams do not count toward album charts at all.",
              source: "Luminate, published album-equivalent weighting, effective week 1 of 2026",
            },
          ],
        },
        {
          label: "B",
          title: "How It Gets Executed",
          objective: "Convert the owned fan list into U.S. units inside a single counting week, without leaving any fan out.",
          strategy: "Pre-orders opened to the first-party list before any public announcement measure demand while there is still time to act on it, so supply can be sized to the first week rather than catching up after it. The product is a limited edition sold everywhere through a direct-to-fan store with U.S. pricing and the group's distribution, so fans in Korea, Latin America and every other market can buy it too. It launches to the fan list first, with COSMO-linked extras for fans who hold Objekts, and a run of signed copies is sold direct as a reward for the fans on the list. Everything is timed to land inside one counting week, and U.S. retail and a pop-up tied to the on-sale give the moment a physical presence.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the owned fan list first",
              "A limited edition sold worldwide through a direct-to-fan store with U.S. pricing, alongside the group's distribution",
              "Signed copies and COSMO-linked extras as rewards for fans on the list",
              "U.S. retail and a pop-up moment tied to the on-sale",
              "All U.S. demand concentrated inside one counting week",
            ],
          },
          kpis: [
            "Pre-order units committed before public on-sale",
            "U.S. units in the counting week, measured release by release",
            "Percentage of units traced to the first-party list",
          ],
          charts: [
            {
              kind: "grouped",
              title: "U.S. Album Units, Release Week, Across Two Releases",
              subtitle: "The first release with this plan builds the base. The second goes for the chart.",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Release 1\nGroundwork", y: 3000 },
                    { x: "Release 2\nChart push", y: 6000 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Release 1\nGroundwork", y: 6000 },
                    { x: "Release 2\nChart push", y: 12000 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Release 1\nGroundwork", y: 10000 },
                    { x: "Release 2\nChart push", y: 20000 },
                  ],
                },
              ],
              note: "ARTMS has charted on World Albums, Heatseekers and Top Album Sales, but never on the Billboard 200. Release 1 sets a measured U.S. sales baseline from the list. Release 2 targets the Top Album Sales top ten, with a first Billboard 200 entry as the high case. Final targets are set once a release date is confirmed, because every chart week has a different field.",
              source: "Crowd Control Digital and Transparent Arts planning ranges from 2026 Billboard chart results",
            },
          ],
        },
        {
          label: "C",
          title: "Two Releases, Not One",
          objective: "Build the U.S. base on the next release, then go for the chart on the one after.",
          strategy: "A chart result is strongest when it is built on a fan base that has already been reached and measured. The plan is therefore paced across two releases, in step with the group's release schedule. The weeks before the next release are used to build the list from the website, tour and social traffic that already exists. The next release is groundwork: it runs pre-orders to the list for the first time and sets a real U.S. sales baseline. The release after that takes everything the first one built and goes for the chart, with targets set from measured numbers rather than projections.",
          components: {
            heading: "How the Two Releases Divide the Work",
            items: [
              "Before the next release: build the list from routing, tour traffic and paid acquisition",
              "Release 1, groundwork: open pre-orders to the list for the first time, and measure U.S. units, conversion from list to purchase, and cost per fan",
              "Release 2, chart push: pre-orders open to a larger, proven list, the limited edition and signed copies are sized from Release 1 demand, and everything lands inside one counting week",
              "Release 2 targets the Top Album Sales top ten, with a first Billboard 200 entry as the high case",
            ],
          },
          kpis: [
            "Release 1: fan list size and pre-order conversion rate",
            "Release 1: a measured U.S. sales baseline",
            "Release 2: U.S. units in the counting week against the targets set from Release 1",
          ],
        },
        {
          label: "D",
          title: "Recommendations for MODHAUS",
          objective: "Three product decisions that sit with the label, which would make every workstream here more effective.",
          strategy: "These are MODHAUS's calls, not part of this engagement's scope. We include them because each one gives the fan list something to sell and gives committed fans a clearer next step.",
          components: {
            heading: "Recommendations",
            items: [
              "A global storefront in English with U.S. pricing and stated international shipping, alongside the existing Korean store",
              "Spanish and Portuguese support in COSMO and on the store, for the Latin American fans who make up more than a quarter of the Instagram following",
              "A version strategy set at the start of each release cycle, so supply meets first-week demand rather than catching up after it",
            ],
          },
        },
      ],
      footnote: "Ratios: Luminate published album-equivalent weighting, effective week 1 of 2026. The Hot 100 is a separate song chart with its own formula, and album purchases do not count toward it; this workstream targets the Billboard 200 and its component album charts. Sales history: Hanteo first-week, Circle Chart cumulative and Billboard chart figures. Product decisions, manufacturing and release timing remain with MODHAUS.",
    },

    // ===================================================================
    // 08. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Market Lift",
      title: "Workstream 3 / Market Lift: U.S. and Latin America",
      philosophy: "Grow the followed, subscribed, and engaged audience in the markets where the fans already are.",
      intro: "This workstream is measured on Spotify followers, Instagram, YouTube and content performance, U.S.-first with Latin America alongside. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 10 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media Where the Fans Are",
          objective: "Run a dedicated, always-on paid program against audiences that are already listening.",
          strategy: "Paid support runs in two lanes. The U.S. lane is the priority: it is the No. 1 market on every platform, and every follower and fan captured there is worth the most to the physical and touring workstreams. The Latin America lane covers Brazil, Mexico and Chile, where the group has headlined and where the same budget buys several times the reach. Both ladder from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Instagram leads, because the group's own data shows it earns close to four times more per follower from the same video. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. first, Instagram first",
              "A Latin America lane in Brazil, Mexico and Chile, run on the same rules, in Spanish and Portuguese",
              "Fan-data capture units feeding Workstream 1",
              "Retargeting from video viewers, engagers, and profile visitors",
              "Weekly reporting against a fixed baseline, with a scale-or-stop call at each checkpoint",
            ],
          },
          kpis: [
            "Spotify follower growth against baseline",
            "Instagram and YouTube growth in the U.S. and Latin America against baseline",
            "Cost per follower and cost per fan captured, by lane",
          ],
        },
        {
          label: "B",
          title: "Content That Already Works, Given More Weight",
          objective: "Put paid weight and a regular schedule behind the formats the audit proved.",
          strategy: "Section 03 found the shape of a winning ARTMS post: short, close, vertical, and two to four members rather than one. This workstream gives that shape a fixed slot, puts more of it on trending audio, and moves road content to vertical, member-led cuts instead of stage recaps. It brings in creator partners, whose reels already carry ARTMS about two and a half times further than the group's own, and recognizable guests for the swap formats that work. Captions go bilingual, Korean plus English, which already runs ahead on TikTok, with Spanish and Portuguese for the Latin America lane, and every post gets a clear next step pointing to the owned destination from Workstream 1. None of this needs a new production model. It needs a schedule, a framing rule, subtitles and a link.",
          components: {
            heading: "What Changes",
            items: [
              "A fixed slot for duo and sub-unit posts, under 25 seconds, much of it on trending audio",
              "Road content cut vertical and member-led, with recaps moved to Instagram",
              "Creator partners in the U.S. and Latin America, and recognizable guests for swap formats",
              "Bilingual captions on every post, with Spanish and Portuguese for the Latin America lane",
              "A next step on every post, pointing to the owned destination",
            ],
          },
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
          strategy: "Low is roughly where current trends land without new investment. Expected is what we plan against. High assumes every workstream scales after the 90-day checkpoints. The next North American tour follows the same logic: low is a registered presale that sells the first tier of every date to the list, expected is a list-led on-sale that fills the current room size in every city, and high is a step back up to the larger rooms of the group's first U.S. tour.",
          charts: [
            {
              kind: "grouped",
              title: "12-Month Growth Against Today's Baseline",
              subtitle: "Percent growth by metric. Baselines: 307,217 Spotify followers, 527,849 Instagram followers, 41,000 median views per TikTok post.",
              unit: "%",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Spotify\nfollowers", y: 28 },
                    { x: "Instagram\nfollowers", y: 12 },
                    { x: "Median views\nper post", y: 10 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Spotify\nfollowers", y: 45 },
                    { x: "Instagram\nfollowers", y: 30 },
                    { x: "Median views\nper post", y: 60 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Spotify\nfollowers", y: 70 },
                    { x: "Instagram\nfollowers", y: 50 },
                    { x: "Median views\nper post", y: 120 },
                  ],
                },
              ],
              note: "Expected lands at about 445,000 Spotify followers, 686,000 on Instagram, and a median of about 66,000 views per post. Spotify's low case is the 2026 trend of roughly 7,500 new followers a month.",
              source: "Crowd Control Digital projection from Chartmetric baselines, Nov 9 2026",
            },
          ],
        },
      ],
      footnote: "Content findings come from the analysis in Section 03. Market data: Chartmetric, November 9, 2026.",
    },

    // ===================================================================
    // 09. Creative Examples
    // ===================================================================
    {
      type: "showcase",
      number: "09",
      navLabel: "Examples",
      title: "Creative Examples",
      philosophy: "Three recent posts from other artists, one for each workstream, taken apart frame by frame.",
      intro: "Each example below maps to one of the three workstreams. They were chosen because the mechanic is visible in the post itself, the result is on the public record where one exists, and the format is something ARTMS can run at its own cadence. Every teardown ends with how we would adapt it for ARTMS.",
      items: [
        {
          platform: "tiktok",
          platformLabel: "TikTok",
          id: "7670950993403645206",
          url: "https://www.tiktok.com/@jorjasmith/video/7670950993403645206",
          poster: "/images/fifty-fifty/examples/jorja-smith.jpg",
          artist: "Jorja Smith",
          title: "North American tour presale, \"Pre-sale is now live\"",
          date: "Aug 6, 2026",
          tag: "Workstream 1 / Fan Data",
          stats: [
            { label: "Views", value: "334K" },
            { label: "Likes", value: "38.9K" },
            { label: "Vs. her median", value: "1.7x" },
            { label: "Length", value: "12 sec" },
          ],
          format: "A twelve-second, camcorder-style clip shot inside an empty, ornate theatre, the kind of room the tour plays. There is no on-screen text and no call to action in the video. The ask lives entirely in the caption: the presale for the November North American tour is live now, and general on-sale opens tomorrow at 10am local time.",
          beats: [
            { t: "0-1.5s", d: "In the theatre lobby beside framed posters, she waves straight into the lens. A personal greeting comes before anything else." },
            { t: "2-3s", d: "A wide shot of her alone in the stalls of an empty, gilded auditorium. The room fans are being invited into." },
            { t: "4-11s", d: "Tight, moody close-ups with a home-video texture. It reads as intimate, not promotional." },
            { t: "Caption", d: "Urgency in two dated steps: presale live today, general sale tomorrow at 10am local." },
          ],
          mechanics: [
            "The video sells the feeling of being in the room, and the caption carries the logistics, so the post never reads as an ad.",
            "Two dated steps reward the fans who act first, which is exactly the behavior an owned list is built to capture.",
            "Her artist presales run on registration: fans sign up with the artist to receive a unique access code, so every presale buyer is a fan she can reach again.",
            "It ran at 1.7 times her usual reach, so the ask did not cost the post its audience.",
          ],
          outcome: "Her artist presale for the tour's UK, Europe and Australia leg ran on fan registration through Laylo's RealFan system, which issues each registered fan a unique code tied to that fan.",
          outcomeSource: "Laylo, August 27, 2026",
          adapt: {
            title: "Sell the next ARTMS North American tour this way",
            actions: [
              "Run the presale as a registration to the owned fan list, never as an open link, so every early buyer becomes a fan the label can reach again",
              "Shoot a close, vertical member selfie in the kind of room the tour plays, and keep the ask in the caption in two dated steps",
              "Give registered fans something first: early access, a list-only date, or a COSMO Objekt tied to the show",
            ],
          },
        },
        {
          platform: "tiktok",
          platformLabel: "TikTok",
          id: "7691993146787450132",
          url: "https://www.tiktok.com/@twice_tiktok_official/video/7691993146787450132",
          poster: "/images/fifty-fifty/examples/twice.jpg",
          artist: "TWICE",
          title: "Special live vinyl pre-order, \"Don't forget to pre-save & pre-order!\"",
          date: "Oct 2, 2026",
          tag: "Workstream 2 / Physical",
          stats: [
            { label: "Views", value: "677K" },
            { label: "Likes", value: "157K" },
            { label: "Shares", value: "3.3K" },
            { label: "Posts in window", value: "8" },
          ],
          format: "A seven-second front-camera selfie from one member in front of the world tour's own poster, subtitled in Korean and English. The caption carries one worldwide pre-save and pre-order link, and the release time in both Korea and U.S. Eastern time. It is one of eight near-daily posts for the same vinyl between October 1 and October 15.",
          beats: [
            { t: "0-0.5s", d: "A member's face fills the frame, greeting the fandom by name." },
            { t: "1-2.5s", d: "Subtitle in Korean and English: don't forget to pre-save." },
            { t: "2.5-7s", d: "The second line, please listen to our live concert album again and again, with a hand sign to camera." },
            { t: "Caption", d: "One global link, the release date, and the time given as 1PM KST and 0AM ET." },
          ],
          mechanics: [
            "Bilingual subtitles mean the same post works in Seoul and in the U.S. without a second version.",
            "Giving the release time in both KST and ET tells overseas fans the product is for them too, without a market-exclusive edition.",
            "A light, repeatable format, one member and one line, makes a daily cadence affordable across a whole pre-order window.",
            "Honest read: each post ran close to the account's usual reach. The value is the steady cadence pointing at one worldwide link, not a single breakout.",
          ],
          adapt: {
            title: "Run ARTMS's pre-order windows this way",
            actions: [
              "One worldwide pre-order link, with times in KST, ET and São Paulo time",
              "A rotating close, vertical selfie from a different pair of members each day, subtitled in Korean, English, Spanish and Portuguese",
              "Open the window to the fan list and COSMO holders a day early, then go public",
            ],
          },
        },
        {
          platform: "tiktok",
          platformLabel: "TikTok",
          id: "7672513827467955470",
          url: "https://www.tiktok.com/@sabrinacarpenter/video/7672513827467955470",
          poster: "/images/kiiikiii/examples/sabrina-carpenter.jpg",
          artist: "Sabrina Carpenter",
          title: "\"when it's time for the debrief\"",
          date: "Aug 10, 2026",
          tag: "Workstream 3 / U.S. Lift",
          stats: [
            { label: "Plays", value: "33.3M" },
            { label: "Likes", value: "6.27M" },
            { label: "Shares", value: "153K" },
            { label: "Length", value: "8 sec" },
          ],
          format: "Eight seconds, three locked phone shots, warm practical light, no on-screen text and no call to action. The new single plays underneath. A relatable caption does all the framing.",
          beats: [
            { t: "0-2s", d: "Solo shot in a distinctive outfit in front of a lit wood stove, looking straight at the lens. Instantly recognizable, instantly on-brand." },
            { t: "2s", d: "Cut to a second person in an armchair: the reveal. Fans recognised him immediately." },
            { t: "5s", d: "The payoff: both in frame, cheek to cheek, a playful lean-in." },
            { t: "6-8s", d: "A line of the song lands as both look into the lens. Ends." },
          ],
          mechanics: [
            "A reveal at two seconds and a payoff at five keeps almost everyone watching to the end, which is what distribution rewards.",
            "The caption is a feeling people share, not a promotion, so it gets sent to friends. Shares ran at nearly half a percent of plays.",
            "The song is the soundtrack, not the subject. Promotion happens without a single word of promotion.",
            "Fans read the guest as a reunion with a former TV co-star, and that recognition is what drove the comments and shares.",
          ],
          outcome: "33.3 million plays and 153,000 shares, with likes at nearly 19 percent of plays, on a post with no promotional copy at all.",
          outcomeSource: "TikTok public metrics, October 2026",
          adapt: {
            title: "Build an ARTMS series on this exact grammar",
            actions: [
              "One member, one reveal, under ten seconds. The reveal is a second member or a sub-unit arriving, the duo and sub-unit shape the audit found wins.",
              "Use guests that U.S. and Latin American audiences recognize, from creators to other artists, as the reveal rather than a set routine.",
              "Write captions as relatable feelings in English, with a Korean line, and save promotional copy for the release-date end cards.",
            ],
          },
        },
      ],
      footnote: "Public posts by third-party artists, shown as examples of format and mechanics, not as work by Transparent Arts or Crowd Control Digital. Metrics are the platforms' public counts as of October 2026. Results are as reported by the sources named on each example.",
    },

    // ===================================================================
    // 10. How We Work
    // ===================================================================
    {
      type: "philosophy",
      number: "10",
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
          description: "This is a joint offering from Transparent Arts and Crowd Control Digital, contracted and reported as one team. Transparent Arts leads relationships, press, partnerships, and the U.S. industry surface. Crowd Control Digital leads numbers, media, data, and creative testing. MODHAUS keeps A&R, the music, COSMO and every artist decision. Everyone sits on the same weekly call and works from the same report.",
        },
      ],
      messaging: [
        "The fandom is already growing. This plan is about owning it, not creating it.",
        "Everything proposed here is measured against a baseline set before launch.",
        "What works gets more budget. What does not is stopped early.",
      ],
      footnote: "Every recommendation in this document traces to data pulled November 9, 2026, to the content and infrastructure audits completed November 2026, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 11. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "11",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm. The website, link hub, smart links and highest-traffic posts are fixed in the first two weeks because everything else feeds from them, and the traffic from the current European tour leg is caught rather than lost. Paid begins small and scales only on evidence. Physical planning for the next release starts once its date is confirmed, the next North American presale is scoped against the list, and the checkpoint at week four is a real scale-or-stop decision, not a status update.",
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
            { weekIndex: 9, intensity: "high", label: "PRESALE" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Paid: U.S. and LatAm",
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
            { weekIndex: 2, intensity: "high", label: "SLOTS" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high", label: "CREATORS" },
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
            { weekIndex: 3, intensity: "low", label: "STORE" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "low", label: "PLAN" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", label: "SIZE" },
            { weekIndex: 9, intensity: "high", label: "RETAIL" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high", label: "PREORD" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Fix the website, link hub and smart links",
          items: [
            "The website, link hub, release smart links and highest-traffic posts repointed to an owned destination that captures fans before forwarding them, with COSMO offered as the next step.",
            "Link hub repaired: broken and stale links fixed, current tour dates complete.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "Paid launches small in the U.S. and Latin America lanes, Instagram first, measuring cost per follower and cost per fan in each.",
            "Fan-data platform live: capture surfaces, consent flows, welcome sequence in English, Spanish and Portuguese.",
            "Fixed slots open for duo and sub-unit posts, with bilingual captions as the standard.",
          ],
        },
        {
          weekIndex: 4,
          title: "Checkpoint: scale or stop",
          items: [
            "Full read on cost per fan and cost per follower against the targets agreed at kickoff, lane by lane.",
            "Budget moves to what is working. Anything below its floor of efficacy is stopped, not nursed.",
            "Physical planning opens once the next release date is confirmed, including the U.S.-priced storefront.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: mid-window review",
          items: [
            "List size, follower growth, and audience growth measured against the low, expected, and high bands.",
            "Limited edition and signed-copy run sized against the list; retail and pre-order plan locked for the counting week.",
            "Registered presale for the next North American tour scoped and sized against the list.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by the label, with COSMO conversion reported.",
            "Targets for the next release, set from what this window measured, along with the budget tier to fund it.",
          ],
        },
      ],
      footnote: "Timing assumes a confirmed date for the next release for the physical workstream, and confirmed routing for the next North American tour for the presale. Checkpoints are real decision points with the authority to stop a channel.",
    },

    // ===================================================================
    // 12. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "12",
      navLabel: "Investment",
      title: "Investment",
      intro: "A 90-day pilot across all three workstreams, delivered by Transparent Arts and Crowd Control Digital and offered at three budget levels. Each level shows exactly what goes to media and what goes to the team. The pilot sets the real cost per fan and cost per follower, and those numbers decide which band of the 12-month outcomes is within reach.",
      ccdNote: "The fee is a single retainer of $10,000 a month, plus 15 percent of the media the team manages. The retainer covers strategy, relationships and press, partnerships, data, the content plan, creative testing, and weekly reporting. Fixing the website, link hub and smart links is included in the retainer and uses no media budget.",
      breakdownLabel: "Where the budget goes",
      deployableLabel: "Working media",
      tiers: [
        {
          label: "Foundation",
          budget: "$87,500",
          name: "90-Day Total",
          tagline: "Fan data and growth in the U.S. and Latin America. Proves cost per fan and cost per follower before anything larger is committed.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$25,000" },
            { vertical: "Paid growth media, U.S. and Latin America", amount: "$25,000" },
            { vertical: "Retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$7,500" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot.",
            retainerLabel: "Retainer",
            mediaManagement: "$7,500",
            mediaManagementDetail: "15 percent of $50,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
        {
          label: "Recommended",
          budget: "$168,000",
          name: "90-Day Total",
          tagline: "Adds clipping at about 50 million impressions around the next release and pre-order support for it.",
          deployable: "$120,000",
          featured: true,
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$30,000" },
            { vertical: "Paid growth media, U.S. and Latin America", amount: "$30,000" },
            { vertical: "Clipping, about 50M impressions", amount: "$50,000" },
            { vertical: "Pre-order and retail activation", amount: "$10,000" },
            { vertical: "Retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$18,000" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot.",
            retainerLabel: "Retainer",
            mediaManagement: "$18,000",
            mediaManagementDetail: "15 percent of $120,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
        {
          label: "Accelerated",
          budget: "$283,000",
          name: "90-Day Total",
          tagline: "Doubles clipping again to about 100 million impressions and funds marketing for the next North American tour, sold to the fan list first.",
          deployable: "$220,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$40,000" },
            { vertical: "Paid growth media, U.S. and Latin America", amount: "$50,000" },
            { vertical: "Clipping, about 100M impressions", amount: "$100,000" },
            { vertical: "Pre-order, retail, and North American tour marketing", amount: "$30,000" },
            { vertical: "Retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$33,000" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day pilot.",
            retainerLabel: "Retainer",
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
