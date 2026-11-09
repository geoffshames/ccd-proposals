import type { StrategyPlanData } from "../plan-context";

export const triplesPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/triples/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "triples-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Audit & Growth Plan",
    title: "tripleS",
    subtitle: "An audit of the fandom tripleS has built, and three workstreams to grow its reach to match it: U.S. fan data, physical sales in the U.S., and discovery in the U.S. and Southeast Asia.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "November 2026",
    backgroundImage: "/images/triples/triples-group.jpg",
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
      subtitle: "tripleS has added Spotify followers every single day for almost three years. The audience that commits keeps growing. The audience that discovers the group has not kept pace, and that gap is what this plan is built to close.",
      body: [
        "Few groups in K-pop have built commitment the way tripleS has. First-week album sales have climbed with almost every full-group release, from 211,609 for ASSEMBLE24 to 518,253 for LOVE&POP pt.1. Spotify followers have risen from 318,198 in January 2024 to 954,364 today, with no down day in 1,038 consecutive daily readings. For every 100 people who listen in a month, 92 now follow, which puts tripleS within reach of the 1.0 line that only long-established fandoms cross. COSMO gives the company something almost no label has: a direct, owned relationship with its most committed fans.",
        "Reach is the part that has not kept up. Monthly listeners have stayed close to one million for most of the last three years. Each full-group comeback lifts them to between 1.3 and 1.4 million, and then they settle back. Over the last twelve months followers grew 42 percent and listeners grew 17 percent. The largest market is now the United States, and the ANDLESS tour puts all 24 members in front of six North American cities this month. Transparent Arts and Crowd Control Digital propose three workstreams to turn that moment into lasting reach: opened on the tour, aimed at the LOVE&POP pt.3 album in January, run as one team, each with a test budget, a low, expected and high outcome, and a clear rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "U.S. fan data: a list of U.S. fans that MODHAUS owns, built from the tour and the pt.3 pre-order, and routed into COSMO",
          "Physical sales: U.S. album units for LOVE&POP pt.3, concentrated inside one counting week",
          "Discovery: Spotify follower, Instagram and YouTube growth in the U.S. and Southeast Asia, where the listeners already are",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "A U.S. fan list with a stated cost per fan and a size range",
          "Spotify follower and Instagram growth against a set baseline, in a low, expected and high band",
          "U.S. physical units for LOVE&POP pt.3 through retail and direct-to-fan channels",
          "The next North American tour routed and sized from the list, and sold to it first",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Followers Since January 2024",
          subtitle: "Every reading is higher than the one before it. 1,038 consecutive daily readings without a single down day.",
          series: [
            {
              name: "Followers",
              points: [
                { x: "Jan 24", y: 318198 }, { x: "Apr 24", y: 355869 }, { x: "Jul 24", y: 429759 }, { x: "Oct 24", y: 475498 }, { x: "Jan 25", y: 530260 }, { x: "Apr 25", y: 568920 }, { x: "Jul 25", y: 625997 }, { x: "Oct 25", y: 668395 }, { x: "Jan 26", y: 736901 }, { x: "Apr 26", y: 804494 }, { x: "Jul 26", y: 875138 }, { x: "Oct 26", y: 948652 },
              ],
            },
          ],
          tall: true,
          source: "Chartmetric, month-end readings, Jan 2024 to Oct 2026",
        },
      ],
      footnote: "Data pulled November 9, 2026. Sources: Chartmetric, Circle Chart, platform data, and public company reporting.",
    },

    // ===================================================================
    // 02. Where tripleS Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where tripleS Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live data pulled November 9, 2026: Chartmetric for audience metrics and Circle Chart for album sales, compared against the girl groups whose audiences overlap most with tripleS.",
      subBlocks: [
        {
          label: "A",
          title: "Commitment Grows Faster Than Reach",
          objective: "Each comeback brings new listeners. Fewer of them stay as listeners than stay as followers.",
          strategy: "A follow on Spotify is the one free action that puts every future release in front of a listener automatically, and tripleS earns more of them every day. Listening moves differently. Every full-group comeback since 2024 has lifted monthly listeners to between 1.3 and 1.4 million, below the 1.88 million peak of the Girls Never Die era, before they settle near one million again. Between comebacks the base is rising, from 883,198 a year ago to 1,035,467 today. It is rising far more slowly than the fandom underneath it. The conversion machine works. What it needs is more people coming in at the top.",
          charts: [
            {
              kind: "grouped",
              title: "Monthly Listeners and Followers, Every Six Months",
              subtitle: "Month-end readings. Listening peaks with each comeback and settles back. Followers rise every time.",
              series: [
                {
                  name: "Monthly listeners",
                  color: "#8A8A8A",
                  points: [
                    { x: "Jan 24", y: 868406 }, { x: "Jun 24", y: 1877145 }, { x: "Dec 24", y: 1095891 }, { x: "Jun 25", y: 1318358 }, { x: "Dec 25", y: 1324440 }, { x: "Jun 26", y: 1376888 }, { x: "Oct 26", y: 1043440 },
                  ],
                },
                {
                  name: "Followers",
                  color: "#FD3737",
                  points: [
                    { x: "Jan 24", y: 318198 }, { x: "Jun 24", y: 408210 }, { x: "Dec 24", y: 512979 }, { x: "Jun 25", y: 611608 }, { x: "Dec 25", y: 711367 }, { x: "Jun 26", y: 848596 }, { x: "Oct 26", y: 948652 },
                  ],
                },
              ],
              source: "Chartmetric, month-end readings, Jan 2024 to Oct 2026",
            },
            {
              kind: "bars",
              title: "Twelve-Month Growth by Metric",
              subtitle: "Percent change, November 8, 2025 to November 8, 2026. Both readings fall between comebacks.",
              unit: "%",
              series: [
                {
                  name: "Growth",
                  points: [
                    { x: "Spotify\nfollowers", y: 42.1 },
                    { x: "YouTube\nviews", y: 38 },
                    { x: "TikTok\nfollowers", y: 35.6 },
                    { x: "Instagram\nfollowers", y: 23.1 },
                    { x: "Spotify\nlisteners", y: 17.2 },
                  ],
                },
              ],
              highlightX: ["Spotify\nlisteners"],
              note: "Every measure of commitment grew faster than monthly listening.",
              source: "Chartmetric, Nov 8 2025 and Nov 8 2026",
            },
          ],
        },
        {
          label: "B",
          title: "Sales of a Top-Tier Group, Reach of a Mid-Tier One",
          objective: "tripleS sells more albums than groups with three times its listeners.",
          strategy: "Among the girl groups whose audiences overlap most with tripleS, it has one of the smaller listener bases and one of the strongest fandoms. Its 0.92 followers per listener sits alongside groups with long histories, while its album sales have grown with every full-group release. A group that converts this well and sells this well is not short of fans who care. It is short of people who have heard it. That is the most fixable kind of gap, because the hard part is already done.",
          charts: [
            {
              kind: "bars",
              title: "Full-Group Album Sales on Circle Chart",
              subtitle: "Total Circle Chart sales by release. LOVE&POP pt.1 is the career high.",
              series: [
                {
                  name: "Albums sold",
                  points: [
                    { x: "ASSEMBLE24\nMay 2024", y: 211609 },
                    { x: "Performante\nOct 2024", y: 337203 },
                    { x: "ASSEMBLE25\nMay 2025", y: 461413 },
                    { x: "LOVE&POP pt.1\nJun 2026", y: 518253 },
                  ],
                },
              ],
              highlightX: ["LOVE&POP pt.1\nJun 2026"],
              note: "Albums sold rose 2.4 times across these four releases. Peak monthly listeners in each release window stayed between 1.3 and 1.9 million.",
              source: "Circle Chart album sales",
            },
            {
              kind: "hbars",
              title: "Monthly Listeners, Overlapping Girl Groups",
              subtitle: "Spotify monthly listeners, November 2026. Followers per listener in brackets.",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "IVE (1.17)", y: 6786851 },
                    { x: "NMIXX (1.21)", y: 4059256 },
                    { x: "KiiiKiii (0.32)", y: 3711496 },
                    { x: "KISS OF LIFE (0.86)", y: 3516098 },
                    { x: "fromis_9 (0.99)", y: 1795017 },
                    { x: "izna (0.47)", y: 1515576 },
                    { x: "STAYC (1.88)", y: 1212496 },
                    { x: "tripleS (0.92)", y: 1035467 },
                  ],
                },
              ],
              highlightX: ["tripleS (0.92)"],
              source: "Chartmetric, related-artist set, Nov 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The U.S. Is the No. 1 Market, and It Is Spread Thin",
          objective: "More Americans listen to tripleS than anyone else, and almost none of them are concentrated in one city.",
          strategy: "The United States leads with 154,028 monthly listeners, peaking at 207,351 in the LOVE&POP pt.1 window, ahead of Malaysia, Indonesia and the Philippines. Yet Los Angeles is the only U.S. city in the group's top ten, and the top cities are Taipei, Seoul, Singapore and Kuala Lumpur. A national audience with no hometown is exactly the shape paid social reaches efficiently, and exactly the shape a tour can only touch six nights at a time. Southeast Asia is where the same budget reaches the most people. The U.S. is where a fan list, physical sales and the next tour are worth the most. This plan works both.",
          charts: [
            {
              kind: "hbars",
              title: "Top Markets Today",
              subtitle: "Monthly listeners by market, November 9, 2026.",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 154028 },
                    { x: "Malaysia", y: 104892 },
                    { x: "Indonesia", y: 95530 },
                    { x: "Philippines", y: 65741 },
                    { x: "South Korea", y: 63551 },
                    { x: "Australia", y: 49999 },
                    { x: "Taiwan", y: 43070 },
                    { x: "Japan", y: 29608 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Nov 9 2026",
            },
            {
              kind: "hbars",
              title: "Top Cities Today",
              subtitle: "Monthly listeners by city. One U.S. city in the top ten.",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "Taipei", y: 21002 },
                    { x: "Seoul", y: 20111 },
                    { x: "Singapore", y: 16736 },
                    { x: "Kuala Lumpur", y: 14414 },
                    { x: "Jakarta", y: 13298 },
                    { x: "Bangkok", y: 11416 },
                    { x: "Tokyo", y: 10350 },
                    { x: "Sydney", y: 9473 },
                    { x: "Los Angeles", y: 8838 },
                    { x: "Bandung", y: 8029 },
                  ],
                },
              ],
              highlightX: ["Los Angeles"],
              source: "Chartmetric, Nov 2026",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled November 9, 2026. Comparison set: the girl groups Chartmetric lists as most related to tripleS. Album sales: Circle Chart.",
    },

    // ===================================================================
    // 03. Content Audit
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Content",
      title: "Content Audit",
      philosophy: "The same pattern as the streaming data: a fandom that engages deeply, and a reach that stays inside it.",
      intro: "We pulled the group's 20 most recent TikTok posts, published October 27 to November 7, 2026, during the ANDLESS cycle and the run-up to the North American tour, with each post's public performance attached, alongside platform-level growth from Chartmetric. Three findings shape the plan.",
      subBlocks: [
        {
          label: "A",
          title: "Engagement of a Core, Reach of a Core",
          objective: "The people who see a tripleS post love it. Not many people see it.",
          strategy: "Across the 20 posts, likes ran at 24 percent of plays and saves at 2.3 percent, rates most accounts never see. The median post reached 42,912 plays on an account with 2.9 million followers, about 1.5 percent of the following. That is what a post looks like when it is shown almost entirely to people who already care: a strong response, and very little travel beyond the fandom. The answer is not different content. It is distribution behind the posts that already land, aimed at people outside the core.",
          charts: [
            {
              kind: "bars",
              title: "Plays per Post, Last 20 TikToks",
              subtitle: "Median post against the best post, October 27 to November 7, 2026.",
              series: [
                {
                  name: "Plays",
                  points: [
                    { x: "Median post", y: 42912 },
                    { x: "Best post", y: 185872 },
                  ],
                },
              ],
              highlightX: ["Best post"],
              note: "The best post was a six-second, single-member dance clip, at 4.3 times the median. Likes ran at 24% of plays across all 20 posts.",
              source: "TikTok public metrics, 20 posts, Oct 27 to Nov 7 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Tour Is Barely in the Feed",
          objective: "Two weeks before the first North American show, one post in twenty mentions it.",
          strategy: "The ANDLESS North American dates were announced on July 21. In the 20 posts leading into the Toronto opener, one refers to the tour, as a question, with no dates, no cities and no ticket information. None of the 20 carries a link. A tour is the single largest piece of first-party demand a group creates in a market, and right now the feed treats it as background. That is a fast fix, and it is the first thing this plan does.",
          components: {
            heading: "What We Found",
            items: [
              "1 of 20 posts mentions the North American tour, without dates or tickets",
              "0 of 20 posts carry a link or a call to action",
              "The three weakest posts were all from one brand partnership, at about a third of the median",
              "Captions are mostly Korean hashtags, while the largest market is the U.S.",
            ],
          },
        },
        {
          label: "C",
          title: "Twenty-Four Members Need a Front Door",
          objective: "The scale that makes tripleS unique is also the hardest thing for a new listener to enter.",
          strategy: "Most posts feature one or two members, tagged by name in Korean and English. To a fan, that is the joy of the group. To someone who has just heard one song, it is 24 faces, several sub-units and no obvious place to start. The groups that convert discovery best give new viewers an easy way in. For tripleS that means a short, English-first series that introduces members and units, and a clear next step on every post that travels outside the fandom.",
          components: {
            heading: "Supporting Findings",
            items: [
              "YouTube views grew 38 percent in a year while subscribers grew 3 percent: people watch, but few stay",
              "TikTok followers grew 36 percent in a year, from 2.1 million to 2.85 million",
              "Instagram reached 1.1 million followers, growing 23 percent in a year",
            ],
          },
        },
      ],
      footnote: "Post-level analysis of the 20 most recent TikTok posts with public metrics as of November 9, 2026. Platform growth: Chartmetric, November 8, 2025 to November 8, 2026. A full frame-by-frame video library, built the same way as for our other K-pop engagements, is part of week one.",
    },

    // ===================================================================
    // 04. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Every surface a new fan can land on, checked one by one: where it sends them, and what it keeps.",
      intro: "A fandom needs somewhere to go, and a new listener needs a way in. We checked the group's highest-traffic surfaces and what MODHAUS has already built. The strongest asset in this document is already in place. The gaps sit in front of it.",
      subBlocks: [
        {
          label: "A",
          title: "Four Million Followers, No Links",
          objective: "The group's two largest social accounts send fans nowhere.",
          strategy: "The official Instagram account has 1.1 million followers and no link on its profile. The official TikTok account has 2.9 million followers and a bio that gives a release date and nothing else. Neither points to tickets, pre-orders, a store, streaming or COSMO. Every person who discovers the group through a post and taps the profile reaches a dead end at exactly the moment they are most interested.",
          components: {
            heading: "What We Found",
            items: [
              "Instagram: 1.1 million followers, no profile link",
              "TikTok: 2.9 million followers, a release date in the bio, no link",
              "No ticket, pre-order or COSMO link on either profile during a tour month",
            ],
          },
        },
        {
          label: "B",
          title: "COSMO Is the Asset. The On-Ramp Is Missing",
          objective: "MODHAUS already owns its most committed fans. It does not yet have a way to catch the casual ones.",
          strategy: "COSMO has about 660,000 cumulative users, 22 million digital photocards issued, and roughly 80 percent of its revenue from outside Korea. That is a first-party relationship most labels would pay heavily for, and nothing in this plan replaces it. The gap is the step before it. A listener in Ohio who likes one song is not ready to download an app and buy an Objekt. They are ready to give an email for a presale, a pre-order or a tour date. Today there is nowhere for them to do that, so the casual U.S. audience, the largest audience the group has, is never captured and never invited into COSMO.",
          components: {
            heading: "What We Found",
            items: [
              "COSMO: about 660,000 users and roughly 80 percent overseas revenue",
              "No email or SMS capture on any social surface we checked",
              "No light-touch step between hearing a song and joining COSMO",
            ],
          },
        },
      ],
      footnote: "Surface-by-surface check completed November 9, 2026. COSMO figures from public company reporting. Platform settings can change; every item is re-checked in week one of the engagement.",
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
      footnote: "All figures from the reference engagement's own campaign reporting, June to September 2026. The artist and label are covered by a non-disclosure agreement and are not identified. Streaming outcomes are deliberately excluded from this section, for the reason set out in Workstream 3.",
    },

    // ===================================================================
    // 06. Workstream 1
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Fan Data",
      title: "Workstream 1 / U.S. Fan Data",
      philosophy: "Catch the casual U.S. fan before they drift, then invite them into COSMO.",
      intro: "COSMO already holds the fans who are all in. This workstream builds the layer in front of it: a list of U.S. fans MODHAUS owns outright, built from the tour, the pt.3 pre-order and the group's own social traffic. tripleS reaches about seven million followers across Instagram, TikTok and YouTube, and 154,028 Americans listen every month.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "A U.S. fan list with contact permission, behavioral enrichment, and a direct path into COSMO.",
          strategy: "The first step is routing. The group's highest-traffic profiles currently send fans nowhere, so the opening week adds an owned destination that captures first and then forwards fans to tickets, pre-orders, streaming or COSMO. That starts the list at no media cost, and timing it to the back half of the ANDLESS tour catches the Chicago, Fort Worth, Los Angeles and Vancouver audiences. Paid acquisition units built specifically for sign-up then scale it, and records are enriched over time against real behavior so MODHAUS can tell a casual listener from a ticket buyer, a pre-order buyer or a new COSMO member. The output is an asset MODHAUS holds directly, usable for tour routing, presales, album pre-orders and COSMO onboarding, without depending on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "Owned capture destination behind the Instagram, TikTok and YouTube profiles in week one",
              "Capture surfaces across social, pre-save, pre-order and the remaining tour dates, in English first",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: ticket buyers, pre-order buyers, repeat pre-savers, COSMO sign-ups",
              "A welcome path that introduces the members and units and points to COSMO",
              "Full data ownership and export on the MODHAUS side at all times",
            ],
          },
          kpis: [
            "Cost per fan, held under a target agreed before launch",
            "List size at 90 days, with a stated floor",
            "Share of list members who go on to join COSMO",
          ],
          charts: [
            {
              kind: "bars",
              title: "U.S.-Led Fan List at 12 Months",
              subtitle: "Low, expected, and high outcomes. Expected is about a quarter of the group's current U.S. monthly listeners.",
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
              note: "Low assumes routing alone with minimal paid support. High assumes sustained paid acquisition at the reference campaign's cost per fan and a second North American run feeding the list.",
              source: "Crowd Control Digital projection from Chartmetric audience data, Nov 2026, and reference campaign cost per fan",
            },
          ],
        },
        {
          label: "B",
          title: "Working Within Korean Privacy Law",
          objective: "Stay compliant by scoping capture to fans outside Korea, where the mechanics are permitted and most of the audience already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on COSMO and the group's existing channels. Capture is scoped to fans outside Korea, led by the U.S., under each market's own consent standards, which is both compliant and aimed at the markets that make up most of the group's listening.",
          components: {
            heading: "Compliance Posture",
            items: [
              "Overseas capture only, led by the U.S., under each market's consent standards",
              "No bundled consent, no sign-up as a condition of anything else",
              "Korean-market fans remain on COSMO and existing channels",
              "Documented consent trail and opt-out on every surface",
            ],
          },
        },
      ],
      footnote: "Scoping capture outside Korea is a deliberate compliance decision, not a limitation. South Korea is the group's fifth-largest listening market.",
    },

    // ===================================================================
    // 07. Workstream 2
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Physical",
      title: "Workstream 2 / Physical Sales",
      philosophy: "One album sale counts as one chart unit. It takes a thousand premium streams to count as the same unit. A fandom that buys half a million albums in Korea is already built for this.",
      intro: "tripleS fans have shown, release after release, that they buy. This workstream points that buying power at the United States for LOVE&POP pt.3, the studio album planned for January 2027, and concentrates it inside one counting week.",
      subBlocks: [
        {
          label: "A",
          title: "What One Album Sale Is Worth",
          objective: "Establish the exchange rate between a sale and a stream on the chart an album actually competes on.",
          strategy: "A studio album competes on the Billboard 200 and its component charts, which count album-equivalent units. Luminate, the data provider behind the Billboard charts, publishes the formula: as of the first chart week of 2026, one album purchase counts as one unit, ten track downloads count as one unit, 1,000 premium streams count as one unit, and 2,500 ad-supported streams count as one unit. A few thousand album sales in a release week do what millions of streams would, and it is far easier to produce committed purchases from a known fan list than millions of incremental streams from strangers. For a group whose fans buy as readily as tripleS fans do, this is the most efficient chart lever there is.",
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
          objective: "Convert the U.S. fan list and the tour audience into U.S. units inside a single counting week.",
          strategy: "Pre-orders opened to the fan list before any public announcement measure demand while there is still time to act on it, so U.S. supply can be sized to the first week rather than catching up after it. A U.S. edition is sold through a direct-to-fan store and the group's distribution, launched to the list first, with a run of signed copies sold direct as a reward for fans on that list and a COSMO tie-in that gives every U.S. buyer a reason to join. Everything is timed to land inside one counting week, and U.S. retail and a pop-up tied to the on-sale give the moment a physical presence.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the U.S. fan list first",
              "A U.S. edition sold through a direct-to-fan store and the group's distribution",
              "Signed copies sold direct as a reward for fans on the list",
              "A COSMO tie-in for every U.S. buyer",
              "U.S. retail and a pop-up moment tied to the on-sale",
              "All U.S. demand concentrated inside one counting week",
            ],
          },
          kpis: [
            "Pre-order units committed before public on-sale",
            "U.S. units in the counting week",
            "Percentage of units traced to the fan list",
          ],
          charts: [
            {
              kind: "bars",
              title: "U.S. Album Units, LOVE&POP pt.3 Counting Week",
              subtitle: "Low, expected and high planning ranges for U.S. units in the release week.",
              series: [
                {
                  name: "U.S. units",
                  points: [
                    { x: "Low", y: 4000 },
                    { x: "Expected", y: 10000 },
                    { x: "High", y: 20000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Expected is sized for a Billboard 200 entry in a typical January chart week, with Top Album Sales and World Albums as the floor. Final targets are set once the release date is confirmed, because every chart week has a different field.",
              source: "Crowd Control Digital and Transparent Arts planning ranges from 2026 Billboard chart results",
            },
          ],
        },
        {
          label: "C",
          title: "The Tour Builds It, the Album Cashes It",
          objective: "Use November to build the U.S. base and January to go for the chart.",
          strategy: "A chart result is strongest when it is built on fans who have already been reached and measured. The tour window is used to start the list from the remaining North American dates and from the social traffic around them. December runs pre-orders to that list for the first time and measures conversion. The counting week takes everything the first two months built and concentrates it, with targets set from measured numbers rather than projections. The Japan full-length planned for the same season runs on its own track and is not part of this workstream.",
          components: {
            heading: "How the Window Divides the Work",
            items: [
              "Tour window: start the list from the remaining dates and the social traffic around them",
              "December: open pt.3 pre-orders to the list first, and measure conversion from list to purchase",
              "Counting week: U.S. edition, signed copies and retail all land inside one week",
              "Target: a Billboard 200 entry, with Top Album Sales and World Albums as the floor",
            ],
          },
          kpis: [
            "Fan list size before pre-orders open",
            "Pre-order conversion rate from the list",
            "U.S. units in the counting week against the targets set in December",
          ],
        },
        {
          label: "D",
          title: "Recommendations for MODHAUS",
          objective: "Three decisions that sit with the label, which would make every workstream here more effective.",
          strategy: "These are MODHAUS's calls, not part of this engagement's scope. We include them because each one gives new fans a way in and gives the fan list something to act on.",
          components: {
            heading: "Recommendations",
            items: [
              "Links on every official profile, pointing to one owned destination that changes with the campaign: tour, pre-order, COSMO",
              "A short English-first series that introduces the 24 members and the units, built as the front door for new listeners",
              "A U.S. edition and shipping strategy set at the start of the pt.3 cycle, so supply meets first-week demand rather than catching up after it",
            ],
          },
        },
      ],
      footnote: "Ratios: Luminate published album-equivalent weighting, effective week 1 of 2026. The Hot 100 is a separate song chart with its own formula, and album purchases do not count toward it; this workstream targets the Billboard 200 and its component album charts. Sales history: Circle Chart. Product decisions, manufacturing and release timing remain with MODHAUS.",
    },

    // ===================================================================
    // 08. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Discovery",
      title: "Workstream 3 / Discovery: U.S. and Southeast Asia",
      philosophy: "Put the posts that already land in front of people outside the fandom, in the markets where the listeners already are.",
      intro: "This workstream is measured on Spotify followers, Instagram, YouTube and content performance, U.S.-first with Southeast Asia alongside. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 10 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media Where the Fans Are",
          objective: "Run a dedicated discovery program against audiences that look like the fans tripleS already has.",
          strategy: "Paid support runs in two lanes. The U.S. lane is the priority: it is the No. 1 market, its audience is national rather than concentrated in a few cities, and every follower and fan captured there is worth the most to the physical and touring workstreams. The Southeast Asia lane covers Malaysia, Indonesia and the Philippines, three of the group's four largest markets, where the same budget buys several times the reach. Both ladder from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. first",
              "A Southeast Asia lane in Malaysia, Indonesia and the Philippines, run on the same rules",
              "Fan-data capture units feeding Workstream 1",
              "Retargeting from video viewers, engagers and profile visitors",
              "Weekly reporting against a fixed baseline, with a scale-or-stop call at each checkpoint",
            ],
          },
          kpis: [
            "Spotify follower growth against baseline",
            "Instagram and YouTube growth in the U.S. and Southeast Asia against baseline",
            "Cost per follower and cost per fan captured, by lane",
          ],
        },
        {
          label: "B",
          title: "Content Built for People Who Have Not Met tripleS Yet",
          objective: "Keep everything the fandom loves, and add the pieces a newcomer needs.",
          strategy: "Section 03 found posts that land hard inside the fandom and rarely travel beyond it. This workstream adds a front door: an English-first introduction series for the members and units, English captions on the posts chosen for paid weight, and a clear next step on every post, pointing to the owned destination from Workstream 1. During the tour and the pt.3 cycle, every release-window post carries dates, cities or a pre-order. None of this requires a new production model. It requires a schedule, captions and a link.",
          components: {
            heading: "What Changes",
            items: [
              "An English-first series introducing the members and units",
              "English captions on every post that gets paid weight",
              "Tour dates and pre-order details in every release-window post",
              "Short, high-energy member clips, the format behind the best recent post, as the lead paid format",
              "A next step on every post, pointing to the owned destination",
            ],
          },
        },
        {
          label: "C",
          title: "Clipping and Seeding, Sized Honestly",
          objective: "Use creator volume where it works, and say clearly where it does not.",
          strategy: "Clipping works at scale and only at scale. A quarter of a million impressions changes nothing measurable. Twenty-five million can move an act, and at roughly a dollar CPM that is about twenty-five thousand dollars. The recommended plan below runs about twice that, which is where clipping starts to compound rather than just register. For tripleS the raw material is unusually deep: 24 members, years of stages and variety content, and a live tour in progress. Crowd Control Digital built the back end for one of the largest clipping platforms in the market and buys at rates the agency market does not have access to, so the same budget delivers materially more volume here than it would anywhere else. Content produced through clipping is also licensed back into paid, which lowers creative costs across the rest of the plan.",
        },
        {
          label: "D",
          title: "What Twelve Months Could Look Like",
          objective: "Every growth target as a range, so the downside is visible before any budget is committed.",
          strategy: "Low is roughly where current trends land without new investment. Expected is what we plan against. High assumes every workstream scales after the 90-day checkpoints. The next North American tour follows the same logic: routed from where the list is densest, sized from list demand, and sold to the list before general on-sale.",
          charts: [
            {
              kind: "grouped",
              title: "12-Month Growth Against Today's Baseline",
              subtitle: "Percent growth by metric. Baselines: 954,364 Spotify followers, 1.10 million Instagram followers, 42,912 median plays per TikTok post.",
              unit: "%",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Spotify\nfollowers", y: 30 },
                    { x: "Instagram\nfollowers", y: 20 },
                    { x: "Median plays\nper post", y: 10 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Spotify\nfollowers", y: 50 },
                    { x: "Instagram\nfollowers", y: 35 },
                    { x: "Median plays\nper post", y: 50 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Spotify\nfollowers", y: 75 },
                    { x: "Instagram\nfollowers", y: 55 },
                    { x: "Median plays\nper post", y: 100 },
                  ],
                },
              ],
              note: "Expected lands at about 1.43 million Spotify followers, 1.49 million on Instagram, and a median of about 64,000 plays per post. Spotify's low case is close to the current trend of roughly 24,000 new followers a month.",
              source: "Crowd Control Digital projection from Chartmetric baselines, Nov 2026",
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
      intro: "Each example below maps to one of the three workstreams. They were chosen because the mechanic is visible in the post itself, the result is on the public record where one exists, and the format is something tripleS can run at its own cadence. Every teardown ends with how we would adapt it for tripleS.",
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
            title: "Make the next tripleS tour a sign-up from day one",
            actions: [
              "Shoot the members in the empty theatre before each ANDLESS show, and put the next city and date in the caption",
              "Run the next North American presale as a registration to the owned fan list, never as an open link",
              "Give registered fans something first: early access, a list-only date, or a COSMO Objekt",
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
            title: "Run the pt.3 pre-order window this way",
            actions: [
              "One pre-order link, with times in KST and ET, pinned to every profile for the whole window",
              "A different member each day for 24 days, subtitled in Korean and English, which only tripleS can do",
              "Open the window to the fan list a day early, then go public",
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
          tag: "Workstream 3 / Discovery",
          stats: [
            { label: "Plays", value: "33.3M" },
            { label: "Likes", value: "6.27M" },
            { label: "Shares", value: "153K" },
            { label: "Length", value: "8 sec" },
          ],
          format: "Eight seconds, three locked phone shots, warm practical light, no on-screen text and no call to action. The new single plays underneath. A relatable caption does all the framing.",
          beats: [
            { t: "0-2s", d: "Solo shot in a distinctive outfit in front of a lit wood stove, looking straight at the lens. Instantly recognizable, instantly on-brand." },
            { t: "2s", d: "Cut to a second person in an armchair: the reveal. Fans recognized him immediately." },
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
            title: "Build a tripleS series on this exact grammar",
            actions: [
              "One member, one setup, then the reveal: more members keep arriving until the frame cannot hold them. Twenty-four is the punchline no other group has.",
              "Use guests that U.S. and Southeast Asian audiences recognize, from creators to other artists, as the reveal.",
              "Write captions as relatable feelings in English, and save promotional copy for the release-date end cards.",
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
          description: "This is a joint offering from Transparent Arts and Crowd Control Digital, contracted and reported as one team. Transparent Arts leads relationships, press, partnerships, and the U.S. industry surface. Crowd Control Digital leads numbers, media, data, and creative testing. MODHAUS keeps A&R, the music, COSMO, and every artist decision. Everyone sits on the same weekly call and works from the same report.",
        },
      ],
      messaging: [
        "The fandom is already world class. This plan is about widening the way in, not creating demand.",
        "Everything proposed here is measured against a baseline set before launch.",
        "What works gets more budget. What does not is stopped early.",
      ],
      footnote: "Every recommendation in this document traces to data pulled November 9, 2026, to the content and infrastructure checks completed the same day, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 11. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "11",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm, opened during the North American tour so its audience is captured rather than lost, and built toward the LOVE&POP pt.3 counting week. Profile routing is fixed in the first week because everything else feeds from it. Paid begins small and scales only on evidence. The checkpoint at week four is a real scale-or-stop decision, not a status update.",
      weeks: [
        { index: 1, label: "W1", dates: "Week 1", note: "TOUR" },
        { index: 2, label: "W2", dates: "Week 2" },
        { index: 3, label: "W3", dates: "Week 3" },
        { index: 4, label: "W4", dates: "Week 4", highlight: true, note: "CHECKPOINT" },
        { index: 5, label: "W5", dates: "Week 5" },
        { index: 6, label: "W6", dates: "Week 6" },
        { index: 7, label: "W7", dates: "Week 7" },
        { index: 8, label: "W8", dates: "Week 8", highlight: true, note: "CHECKPOINT" },
        { index: 9, label: "W9", dates: "Week 9" },
        { index: 10, label: "W10", dates: "Week 10", highlight: true, note: "PT.3 (TBC)" },
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
          name: "Paid: U.S. and SEA",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "TOUR" },
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "LAUNCH" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Content Mix",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "PLAN" },
            { weekIndex: 2, intensity: "high", label: "SERIES" },
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
            { weekIndex: 2, intensity: "low", label: "PLAN" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium", label: "SIZE" },
            { weekIndex: 5, intensity: "high", label: "PREORD" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", label: "RETAIL" },
            { weekIndex: 10, intensity: "high", label: "WEEK" },
            { weekIndex: 11, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Fix the profiles and catch the tour",
          items: [
            "Instagram, TikTok and YouTube profiles routed to an owned destination that captures fans before forwarding them to tickets, streaming or COSMO.",
            "Capture live for the remaining North American dates, with tour content carrying the next city and date.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "Paid launches small in the U.S. and Southeast Asia lanes, measuring cost per follower and cost per fan in each.",
            "Fan-data platform live: capture surfaces, consent flows, and a welcome path that introduces the members and points to COSMO.",
            "First episodes of the English-first introduction series.",
          ],
        },
        {
          weekIndex: 4,
          title: "Checkpoint: scale or stop",
          items: [
            "Full read on cost per fan and cost per follower against the targets agreed at kickoff, lane by lane.",
            "Budget moves to what is working. Anything below its floor of efficacy is stopped, not nursed.",
            "U.S. edition, signed-copy run and retail plan sized against the list for the pt.3 counting week.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: pre-order read",
          items: [
            "List size, follower growth and audience growth measured against the low, expected and high bands.",
            "Pre-order conversion from the list measured; counting-week targets set from it.",
            "Retail, pop-up and paid weight locked for release week.",
          ],
        },
        {
          weekIndex: 10,
          title: "LOVE&POP pt.3 counting week",
          items: [
            "Every U.S. channel concentrated inside one week: list, retail, direct-to-fan and paid.",
            "Daily reporting on units and on new fans captured from release traffic.",
            "Release traffic routed through the owned destination so the new audience is kept.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by MODHAUS.",
            "Next North American routing proposal drawn from where the list is densest, and the budget tier to fund the next cycle.",
          ],
        },
      ],
      footnote: "Week 1 assumes kickoff during the North American tour. The pt.3 counting week is shown at week 10 for planning and moves with the confirmed release date. Checkpoints are real decision points with the authority to stop a channel.",
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
      ccdNote: "The fee is a single retainer of $10,000 a month, plus 15 percent of the media the team manages. The retainer covers strategy, relationships and press, partnerships, data, the content plan, creative testing, and weekly reporting. Fixing the group's profile routing is included in the retainer and uses no media budget.",
      breakdownLabel: "Where the budget goes",
      deployableLabel: "Working media",
      tiers: [
        {
          label: "Foundation",
          budget: "$87,500",
          name: "90-Day Total",
          tagline: "U.S. fan data and discovery in the U.S. and Southeast Asia. Proves cost per fan and cost per follower before the pt.3 counting week.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$25,000" },
            { vertical: "Paid discovery media, U.S. and SEA", amount: "$25,000" },
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
          tagline: "Adds clipping at about 50 million impressions across the tour and pt.3, and pre-order and retail support for the counting week.",
          deployable: "$120,000",
          featured: true,
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$30,000" },
            { vertical: "Paid discovery media, U.S. and SEA", amount: "$30,000" },
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
          tagline: "Doubles clipping again to about 100 million impressions and funds U.S. retail, a pop-up and live marketing around the pt.3 release.",
          deployable: "$220,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$40,000" },
            { vertical: "Paid discovery media, U.S. and SEA", amount: "$50,000" },
            { vertical: "Clipping, about 100M impressions", amount: "$100,000" },
            { vertical: "Pre-order, retail, pop-up and live marketing", amount: "$30,000" },
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
      footnote: "All figures are for the 90-day pilot. Media is billed at cost. Each later release cycle is authorized as its own budget on the same structure, sized from what the pilot proved. Tour production, physical manufacturing, and talent costs sit with the label and are not included. Cover photograph: K-POPIT, CC BY 4.0.",
    },
  ],
};
