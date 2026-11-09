import type { StrategyPlanData } from "../plan-context";

export const idnttPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/idntt/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "idntt-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Audit & Growth Plan",
    title: "idntt",
    subtitle: "An audit of the first fifteen months, and three workstreams for the full 24-member era: first-party fan data, U.S. physical sales, and market lift in the U.S. and Latin America.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "November 2026",
    backgroundImage: "/images/idntt/idntt-hero.jpg",
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
      subtitle: "idntt has sold more in every first week than the one before it, and its Spotify following has grown every month since debut. With the 24-member lineup now complete, the first full-group release is the largest audience moment the group has had.",
      body: [
        "In fifteen months idntt has built one of the strongest physical fandoms of its generation. Three EPs, three No. 1s on Circle's weekly album chart, and a first week that has risen each time: about 336,000 for unevermet, 431,377 for yesweare and 568,005 for itsnotover. Two music show wins followed for \"Kids Return\". Spotify followers have risen in every one of the fifteen months since debut, from 6,089 in August 2025 to 157,419 today, and roughly four of every five people who listen in a month now follow the group. The fans also vote, spend and show up: the final four members were chosen by fans in a vote that ran from October 19 to November 5.",
        "The audience is also more international than the touring calendar. Indonesia was the group's largest market during the debut cycle, Colombia and Peru made up a Latin American launch audience nobody had planned for, and the United States peaked at 103,218 monthly listeners in August and is now the No. 1 market, with no U.S. dates yet. What is not in place is the layer that turns a viewer outside Korea into a fan MODHAUS can reach directly and sell to. Transparent Arts and Crowd Control Digital propose three workstreams to build it, timed to the full-lineup era, run as one team, each with a test budget, a low, expected and high outcome, and a clear rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party fan data: a global front door into the idntt fandom, built as an owned overseas fan list that feeds COSMO",
          "Physical sales: a U.S. sales base built on pre-orders and committed-fan math, paced across two releases",
          "Market lift: growth in Spotify followers, Instagram, TikTok and YouTube in the U.S. and Latin America, where the listening and the touring already are",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "A first-party overseas fan list with a stated cost per fan and a size range",
          "Spotify follower, Instagram and TikTok growth against a set baseline, in a low, expected and high band",
          "Physical units moved through U.S. retail and direct-to-fan channels",
          "A first U.S. live moment sized to sell out, sold to the fan list first",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Followers, Month by Month",
          subtitle: "Every month-end reading since the debut is higher than the one before it.",
          series: [
            {
              name: "Followers",
              points: [
                { x: "Aug 25", y: 19682 }, { x: "Sep 25", y: 27179 }, { x: "Oct 25", y: 32380 }, { x: "Nov 25", y: 35686 }, { x: "Dec 25", y: 40129 }, { x: "Jan 26", y: 53412 }, { x: "Feb 26", y: 60183 }, { x: "Mar 26", y: 66392 }, { x: "Apr 26", y: 72255 }, { x: "May 26", y: 77314 }, { x: "Jun 26", y: 81316 }, { x: "Jul 26", y: 104990 }, { x: "Aug 26", y: 135285 }, { x: "Sep 26", y: 150083 }, { x: "Oct 26", y: 155637 },
              ],
            },
          ],
          tall: true,
          source: "Chartmetric, month-end readings through Oct 31 2026",
        },
      ],
      footnote: "Data pulled November 9, 2026. Sources: Chartmetric, Hanteo, Circle Chart, and platform data.",
    },

    // ===================================================================
    // 02. Where idntt Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where idntt Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live data pulled November 9, 2026: Chartmetric for audience metrics and Hanteo and Circle Chart for physical sales, compared against the boy groups Chartmetric places closest to idntt.",
      subBlocks: [
        {
          label: "A",
          title: "Every Release Has Sold More Than the Last",
          objective: "A physical fandom that is still compounding, three releases in.",
          strategy: "Most groups peak on their debut and spend the next releases defending it. idntt has done the opposite. Each EP has opened bigger than the one before, each has reached No. 1 on Circle's weekly album chart, and itsnotover's 568,005 in its first week is a career high reached eleven months after debut. Unit launches add new members, new faces and new reasons to buy, and the fandom has met every one of them. That is the strongest possible base for a U.S. sales program: the demand is proven, and the open question is only where it gets pointed.",
          charts: [
            {
              kind: "bars",
              title: "First-Week Album Sales by Release",
              subtitle: "Hanteo first-week figures for each idntt EP.",
              series: [
                {
                  name: "First-week units",
                  points: [
                    { x: "unevermet\nAug 2025", y: 336000 },
                    { x: "yesweare\nJan 2026", y: 431377 },
                    { x: "itsnotover\nJul 2026", y: 568005 },
                  ],
                },
              ],
              highlightX: ["itsnotover\nJul 2026"],
              note: "All three EPs reached No. 1 on Circle's weekly album chart. The unevermet figure is rounded as reported at the time.",
              source: "Hanteo first-week sales; Circle Chart weekly album chart",
            },
          ],
        },
        {
          label: "B",
          title: "The Fans Who Listen Choose to Follow",
          objective: "Listening rises and falls with each release. Commitment only goes up.",
          strategy: "Monthly listeners move in waves, peaking at 426,156 in September 2025, again near 394,000 in January with yesweare, and again in the summer with itsnotover, then settling between releases. Followers have not moved in waves. They have risen every month, through every quiet stretch, and today stand at 157,419 against 199,124 monthly listeners. A follow is the one free action that puts every future release in front of a listener automatically, and 79 of every 100 idntt listeners have taken it, ahead of most of the groups Chartmetric places alongside idntt. The full-lineup release is the first chance to put that committed base to work in the markets where it lives.",
          charts: [
            {
              kind: "grouped",
              title: "Monthly Listeners and Followers Since Debut",
              subtitle: "Month-end readings. Listening moves with each release; followers grew every month.",
              series: [
                {
                  name: "Monthly listeners",
                  color: "#8A8A8A",
                  points: [
                    { x: "Aug 25", y: 274468 }, { x: "Oct 25", y: 195555 }, { x: "Dec 25", y: 154055 }, { x: "Jan 26", y: 393658 }, { x: "Mar 26", y: 214194 }, { x: "May 26", y: 168660 }, { x: "Jul 26", y: 235180 }, { x: "Aug 26", y: 252492 }, { x: "Oct 26", y: 205396 },
                  ],
                },
                {
                  name: "Followers",
                  color: "#FD3737",
                  points: [
                    { x: "Aug 25", y: 19682 }, { x: "Oct 25", y: 32380 }, { x: "Dec 25", y: 40129 }, { x: "Jan 26", y: 53412 }, { x: "Mar 26", y: 66392 }, { x: "May 26", y: 77314 }, { x: "Jul 26", y: 104990 }, { x: "Aug 26", y: 135285 }, { x: "Oct 26", y: 155637 },
                  ],
                },
              ],
              source: "Chartmetric, month-end readings, Aug 2025 to Oct 2026",
            },
            {
              kind: "hbars",
              title: "Followers per Monthly Listener, Comparable Boy Groups",
              subtitle: "Spotify followers divided by monthly listeners, November 9, 2026.",
              series: [
                {
                  name: "Followers per listener",
                  points: [
                    { x: "IDID", y: 1.414 },
                    { x: "idntt", y: 0.791 },
                    { x: "ALPHA DRIVE ONE", y: 0.665 },
                    { x: "NEXZ", y: 0.6 },
                    { x: "CLOSE YOUR EYES", y: 0.352 },
                    { x: "FLARE U", y: 0.352 },
                    { x: "MODYSSEY", y: 0.348 },
                  ],
                },
              ],
              highlightX: ["idntt"],
              note: "Groups with long-standing fandoms sit at or above 1.0. idntt sits second in this set and is closing on that line.",
              source: "Chartmetric, Nov 9 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The U.S. Is Now the No. 1 Market",
          objective: "The largest current audience is in a market idntt has not yet played.",
          strategy: "At the debut peak the biggest audience by far was Indonesia, at 279,148 monthly listeners, followed by Malaysia at 89,354. Latin America arrived on its own as well: Colombia reached 78,461 and Peru 28,636 in the same window, before either had any activity aimed at it. Since then the United States has risen to the top. It peaked at 103,218 monthly listeners in August 2026 and leads every market today, ahead of Indonesia, Malaysia and the Philippines, while the group's live dates so far have been in Korea, Japan, Macau, Mexico and Chile. The U.S. is where a fan list, physical sales and a first live moment are worth the most, and this plan is built to meet the audience that is already there.",
          charts: [
            {
              kind: "hbars",
              title: "Peak Monthly Listeners by Market",
              subtitle: "Each market measured at its own peak, August 2025 to November 2026.",
              series: [
                {
                  name: "Peak listeners",
                  points: [
                    { x: "Indonesia", y: 279148 },
                    { x: "United States", y: 103218 },
                    { x: "Malaysia", y: 89354 },
                    { x: "Colombia", y: 78461 },
                    { x: "Thailand", y: 41451 },
                    { x: "Taiwan", y: 38012 },
                    { x: "Philippines", y: 34333 },
                    { x: "Peru", y: 28636 },
                  ],
                },
              ],
              highlightX: ["United States", "Colombia", "Peru"],
              source: "Chartmetric, market-level listener series, Aug 2025 to Nov 2026",
            },
            {
              kind: "hbars",
              title: "Top Markets Today",
              subtitle: "Monthly listeners by market, November 9, 2026.",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 36911 },
                    { x: "Indonesia", y: 20370 },
                    { x: "Malaysia", y: 18974 },
                    { x: "Philippines", y: 16851 },
                    { x: "Taiwan", y: 11360 },
                    { x: "Australia", y: 9312 },
                    { x: "Poland", y: 7683 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Nov 9 2026",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled November 9, 2026. Market peaks are each market's own highest reading since debut. Physical: Hanteo first-week and Circle Chart weekly figures. Comparison set drawn from Chartmetric's related artists for idntt.",
    },

    // ===================================================================
    // 03. Content Audit
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Content",
      title: "Content Audit",
      philosophy: "The last 60 TikToks, each one with its real performance attached.",
      intro: "We pulled every idntt TikTok posted between October 17 and November 9, 2026, sixty posts at roughly two and a half a day, alongside current follower and engagement data for Instagram and YouTube and recent posts from tripleS and CORTIS for comparison. Each post was classed by format, who is on screen, setting and language, then joined to its views. Three findings shape the plan.",
      subBlocks: [
        {
          label: "A",
          title: "Arrival Posts Travel Furthest",
          objective: "The single best post in the window is a greeting to a new market.",
          strategy: "The median idntt TikTok in this window earned 33,993 views. \"¡Hola, México!\", the group's arrival greeting from Mexico City, earned 2,405,171, about 71 times the median. A Mexico montage and a Chile greeting each cleared 130,000, and a Latin-flavored solo dance cleared 735,000. When idntt speaks directly to a market in its own language, that market answers. The format costs nothing to make and only exists because the group traveled, which is the strongest content argument for a first U.S. moment, timed so the arrival post lands in front of an audience that has been built in advance.",
          charts: [
            {
              kind: "hbars",
              title: "Views, Top Posts Against the Median",
              subtitle: "idntt TikTok, October 17 to November 9, 2026.",
              series: [
                {
                  name: "Views",
                  points: [
                    { x: "\"¡Hola, México!\" arrival", y: 2405171 },
                    { x: "\"NEON\" duo dance", y: 989584 },
                    { x: "Latin-flavored solo dance", y: 735919 },
                    { x: "\"NEON\" duo dance, second pair", y: 286610 },
                    { x: "Duo skit", y: 258185 },
                    { x: "Median post", y: 33993 },
                  ],
                },
              ],
              highlightX: ["\"¡Hola, México!\" arrival"],
              source: "TikTok public view counts, 60 posts, Oct 17 to Nov 9 2026",
            },
          ],
        },
        {
          label: "B",
          title: "With 24 Members, the Pair Is the Unit That Wins",
          objective: "The posts that break out feature two members, not one and not twenty.",
          strategy: "Three of the five best posts after the Mexico greeting feature a pair: two \"NEON\" dance duos and a two-person skit, between 258,000 and 990,000 views each. The weakest posts in the window are event recaps, such as the Objekt trading cafe at 14,836 views and an offline pop-up at 15,409, and single-member clips at around 18,000. A roster of 24 gives idntt as many possible pairings as any group in K-pop, and a named, repeatable duo series is the cheapest way to introduce a large lineup to new audiences two faces at a time.",
          components: {
            heading: "What We Found",
            items: [
              "Top band: market greetings and member pairs, 120,000 to 2.4 million views",
              "Bottom band: event recaps and solo clips, 14,000 to 20,000 views",
              "Recurring series exist, such as #find_id and the Linda Mía challenge with other artists, but none is yet built around a fixed pairing format",
            ],
          },
        },
        {
          label: "C",
          title: "Reach Has Not Kept Pace With the Following",
          objective: "The audience is large. The share of it each post reaches is small.",
          strategy: "idntt has grown from about 32,000 TikTok followers at debut to 875,235 today, alongside 536,853 on Instagram and 872,000 YouTube subscribers, about 2.3 million followers across the three. The median TikTok post reaches the equivalent of about 4 percent of the TikTok following. Instagram has edged down from 561,045 in January while TikTok grew, and the profiles offer no next step beyond streaming. The content already earns attention. Paid support behind the formats that work, a schedule built on them, and a next step on every post are what turn that attention into followers, fans on file and buyers.",
          components: {
            heading: "Supporting Findings",
            items: [
              "Median TikTok views of 33,993 on 875,235 followers, about 4 percent, against tripleS at about 42,900 on 2.8 million",
              "Instagram down from 561,045 followers in January to 536,853 today, while TikTok grew",
              "No sign-up or store link on any profile, so a post that lands has nowhere to send the viewer",
            ],
          },
        },
      ],
      footnote: "Content analysis of 60 idntt TikTok posts with public view counts, October 17 to November 9, 2026. Posts less than a day old at the time of the pull are excluded from the weakest-post comparison. Follower counts: Chartmetric and platform data, November 9, 2026.",
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
      intro: "A fandom needs a way in. We checked every owned and partner surface, including social bios, the official site, the fan platform and ticketing, and asked one question of each: if a new fan arrives here today, where does it send them, and does MODHAUS get to keep them? The answer is that idntt has the deepest fan platform in its class and no front door to it.",
      subBlocks: [
        {
          label: "A",
          title: "COSMO Is the Strongest Fan Platform in the Class",
          objective: "MODHAUS already owns the deep end of the fandom.",
          strategy: "COSMO, the MODHAUS fan app, is a rare asset: fans collect digital Objekts and use them to vote on title tracks, units, setlists and members, which makes participation measurable and paid. Across MODHAUS artists it had more than 350,000 cumulative users and 150,000 monthly active users by August 2025, and the vote that completed the idntt lineup ran from October 19 to November 5. No agency can build what COSMO already is. The opportunity is that COSMO is where committed fans end up, and nothing yet carries a new overseas fan from a TikTok or a Spotify follow to that point.",
          components: {
            heading: "What Is Working",
            items: [
              "An owned fan platform with paid, measurable participation",
              "A fandom name, Denju, chosen by fan vote",
              "Fan voting that already shapes the lineup, the music and the shows",
            ],
          },
        },
        {
          label: "B",
          title: "No Front Door for the Overseas Fan",
          objective: "About 2.3 million social followers, and no way for a new one to be reached again.",
          strategy: "At our audit, the Instagram profile carried no link. The TikTok bio linked only to streaming for \"Linda Mía\". The official site showed a feed and a music video, with no sign-up, no store and no language option. Tickets for overseas events are sold through local ticketing partners, so the buyer data from every show outside Korea sits with the partner. We found no official lightstick and no global store. An overseas fan who is not yet on COSMO has nowhere to leave a name.",
          components: {
            heading: "What We Found",
            items: [
              "No link on Instagram; the TikTok bio links to streaming only",
              "No email or SMS sign-up on the official site or any social surface",
              "Overseas ticket-buyer data held by local ticketing partners",
              "No official lightstick or global store found",
            ],
          },
        },
      ],
      footnote: "Surface-by-surface audit completed November 9, 2026. COSMO figures are MODHAUS-wide, as reported in August 2025. Platform settings can change; every item is re-checked in week one of the engagement.",
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
      title: "Workstream 1 / First-Party Fan Data",
      philosophy: "Build the front door: an overseas fan list MODHAUS owns outright, which hands committed fans on to COSMO.",
      intro: "Every other workstream gets more efficient once this exists, because the label stops relying on platforms and ticketing partners to reach its own audience. idntt already reaches about 2.3 million people across TikTok, Instagram and YouTube, and the first full-lineup release will bring more of them to the group's profiles than at any point so far.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "An overseas fan list with contact permission, behavioral enrichment, and a direct path into COSMO.",
          strategy: "The first step is routing. Social bios and the highest-traffic posts currently send fans either nowhere or straight to streaming, so the opening weeks add an owned destination that captures first and then forwards fans to streaming, pre-orders, tickets or COSMO. That alone starts the list at no media cost, and timing it to the full-lineup announcement catches the biggest traffic of the cycle. Paid acquisition units built specifically for sign-up then scale it, and records are enriched over time against real behavior, so the label can tell a casual viewer from a ticket buyer or a repeat album buyer. COSMO stays the home of the committed fan. The list is how a new fan in Los Angeles, Jakarta or Bogotá gets there, and how MODHAUS reaches them for a show, a pre-order or a drop without depending on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "Owned capture destination on every social bio and the highest-traffic posts in the first two weeks",
              "Capture surfaces across social, pre-save, retail and live moments, in English and Spanish first, then Bahasa",
              "A guided path from the list into COSMO, so new fans land where the deepest participation happens",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: show attendees, repeat pre-savers, album and merchandise buyers",
              "Full data ownership and export on the label side at all times",
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
              title: "Fan List at 12 Months",
              subtitle: "Low, expected, and high outcomes. Expected is about 1.3 percent of the group's current social following.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Low", y: 12000 },
                    { x: "Expected", y: 30000 },
                    { x: "High", y: 55000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Low assumes routing alone with minimal paid support. High assumes sustained paid acquisition at the reference campaign's cost per fan and a U.S. live moment feeding the list.",
              source: "Crowd Control Digital projection from Chartmetric social following, Nov 2026, and reference campaign cost per fan",
            },
          ],
        },
        {
          label: "B",
          title: "Working Within Korean Privacy Law",
          objective: "Stay compliant by scoping capture to fans outside Korea, where the mechanics are permitted and most of the listening already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on COSMO. Capture is scoped to fans outside Korea, led by the U.S., under each market's own consent standards, which is both compliant and aimed at the markets that make up nearly all of the group's Spotify listening.",
          components: {
            heading: "Compliance Posture",
            items: [
              "Overseas capture only, led by the U.S., under each market's consent standards",
              "No bundled consent, no sign-up as a condition of anything else",
              "Korean-market fans remain on COSMO",
              "Documented consent trail and opt-out on every surface",
            ],
          },
        },
      ],
      footnote: "Scoping capture outside Korea is a deliberate compliance decision, not a limitation. South Korea is not among the group's top ten Spotify listening markets.",
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
      intro: "idntt's fans have proven three times that they buy, with first weeks of 336,000, 431,377 and 568,005. This workstream points that demand at the market where the most listeners now live, and builds the group's first dedicated U.S. sales program.",
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
          strategy: "Pre-orders opened to the first-party list before any public announcement measure demand while there is still time to act on it, so supply can be sized to the first week rather than catching up after it. The product is a limited edition sold everywhere through a direct-to-fan store and the group's distribution, so fans in Korea, Latin America, Southeast Asia and every other market can buy it too. It launches to the fan list first, and a run of signed copies is sold direct as a reward for the fans on that list. With 24 members, member-specific versions and Objekt inclusions give overseas buyers the same reasons to collect that Korean buyers already have. Everything is timed to land inside one counting week, and U.S. retail and a pop-up tied to the on-sale give the moment a physical presence.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the owned fan list first",
              "A limited edition sold worldwide through a direct-to-fan store and the group's distribution",
              "Member and unit versions, with COSMO Objekt inclusions, for overseas buyers",
              "Signed copies sold direct as a reward for fans on the list",
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
              note: "Release 1 sets idntt's measured U.S. sales baseline. Release 2 targets the top ten of Billboard's Top Album Sales chart, with a Billboard 200 entry as the high case. Final targets are set once a release date is confirmed, because every chart week has a different field.",
              source: "Crowd Control Digital and Transparent Arts planning ranges from 2026 Billboard chart results",
            },
          ],
        },
        {
          label: "C",
          title: "Two Releases, Not One",
          objective: "Build the U.S. base on the next release, then go for the chart on the one after.",
          strategy: "A chart result is strongest when it is built on a fan base that has already been reached and measured. The plan is therefore paced across two releases, in step with the group's release schedule. The full-lineup announcement and the Latin America dates are used to start the list. The first full-lineup release is groundwork: it runs pre-orders to the list for the first time and sets a real U.S. sales baseline. The release after that takes everything the first one built and goes for the chart, with targets set from measured numbers rather than projections.",
          components: {
            heading: "How the Two Releases Divide the Work",
            items: [
              "Full-lineup announcement: start the list from the biggest traffic of the cycle",
              "Release 1, groundwork: open pre-orders to the list for the first time, and measure U.S. units, conversion from list to purchase, and cost per fan",
              "Release 2, chart push: pre-orders open to a larger, proven list, the limited edition and signed copies are sized from Release 1 demand, and everything lands inside one counting week",
              "Release 2 targets the Top Album Sales top ten, with a Billboard 200 entry as the high case",
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
          strategy: "These are MODHAUS's calls, not part of this engagement's scope. We include them because each one gives the fan list something to sell and gives committed fans a next step beyond the album.",
          components: {
            heading: "Recommendations",
            items: [
              "An official lightstick, announced and pre-sold against the first full-lineup tour. It is one of the most reliable identity and revenue products in K-pop",
              "A global store with English and Spanish support, linked from every social bio and carrying Objekt-linked merchandise",
              "A version strategy set at the start of each release cycle, so overseas supply meets first-week demand rather than catching up after it",
            ],
          },
        },
      ],
      footnote: "Ratios: Luminate published album-equivalent weighting, effective week 1 of 2026. The Hot 100 is a separate song chart with its own formula, and album purchases do not count toward it; this workstream targets the Billboard 200 and its component album charts. Sales history: Hanteo first-week and Circle Chart weekly figures. Product decisions, manufacturing and release timing remain with MODHAUS.",
    },

    // ===================================================================
    // 08. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Market Lift",
      title: "Workstream 3 / Market Lift: U.S. and Latin America",
      philosophy: "Grow the followed, subscribed, and engaged audience in the markets where the listeners already are.",
      intro: "This workstream is measured on Spotify followers, Instagram, TikTok, YouTube and content performance, U.S.-first with Latin America alongside and Southeast Asia as an efficiency lane. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 10 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media Where the Fans Are",
          objective: "Run the group's first dedicated paid program against audiences that are already listening.",
          strategy: "Paid support runs in three lanes. The U.S. lane is the priority: it is the No. 1 market, it peaked above 100,000 monthly listeners in August, and every follower and fan captured there is worth the most to the physical and live workstreams. The Latin America lane builds on the November dates in Mexico City and Santiago and the Colombia and Peru audience that arrived on its own at debut, so the touring investment keeps paying after the group flies home. A Southeast Asia lane in Indonesia, Malaysia and the Philippines, the group's largest debut audience, runs on retargeting and buys several times the reach for the same budget. All three ladder from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. first",
              "A Latin America lane built around the touring calendar and \"Linda Mía\"",
              "A Southeast Asia retargeting lane in Indonesia, Malaysia and the Philippines",
              "Fan-data capture units feeding Workstream 1",
              "Weekly reporting against a fixed baseline, with a scale-or-stop call at each checkpoint",
            ],
          },
          kpis: [
            "Spotify follower growth against baseline",
            "Instagram, TikTok and YouTube growth in the U.S. and Latin America against baseline",
            "Cost per follower and cost per fan captured, by lane",
          ],
        },
        {
          label: "B",
          title: "Content That Already Works, Given More Weight",
          objective: "Put paid weight and a regular schedule behind the formats the audit proved.",
          strategy: "Section 03 found two formats that travel: a direct greeting to a market, and a pair of members. This workstream turns the second into a named duo series with a fixed slot, rotating through the 24-member lineup so new audiences meet the group two faces at a time, and plans the first into every market moment, starting with a U.S. arrival. English and Spanish subtitles become standard. Every post gets a clear next step, pointing to the owned destination from Workstream 1. None of this requires a new production model. It requires a schedule, subtitles and a link.",
          components: {
            heading: "What Changes",
            items: [
              "A named duo series on a fixed slot, rotating through the lineup",
              "Market greetings planned into every trip and every release, in the market's own language",
              "English and Spanish subtitles as a standard",
              "Paid weight behind the top organic posts within 48 hours of posting",
              "A next step on every post, pointing to the owned destination",
            ],
          },
        },
        {
          label: "C",
          title: "Clipping and Seeding, Sized Honestly",
          objective: "Use creator volume where it works, and say clearly where it does not.",
          strategy: "Clipping works at scale and only at scale. A quarter of a million impressions changes nothing measurable. Twenty-five million can move an act, and at roughly a dollar CPM that is about twenty-five thousand dollars. The recommended plan below runs about twice that, which is where clipping starts to compound rather than just register. With 24 members, idntt has more distinct faces for creators to clip than any group in its class, which suits a volume approach. Crowd Control Digital built the back end for one of the largest clipping platforms in the market and buys at rates the agency market does not have access to, so the same budget delivers materially more volume here than it would anywhere else. Content produced through clipping is also licensed back into paid, which lowers creative costs across the rest of the plan.",
        },
        {
          label: "D",
          title: "What Twelve Months Could Look Like",
          objective: "Every growth target as a range, so the downside is visible before any budget is committed.",
          strategy: "Low is roughly where current trends land without new investment. Expected is what we plan against. High assumes every workstream scales after the 90-day checkpoints. The U.S. live moment follows the same logic: low is a fan meet of about 1,000, expected is a sold-out showcase of around 2,500 in Los Angeles, and high is a two-city run adding New York, each sold to the fan list before general on-sale.",
          charts: [
            {
              kind: "grouped",
              title: "12-Month Growth Against Today's Baseline",
              subtitle: "Percent growth by metric. Baselines: 157,419 Spotify followers, 536,853 Instagram followers, 33,993 median views per TikTok post.",
              unit: "%",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Spotify\nfollowers", y: 35 },
                    { x: "Instagram\nfollowers", y: 0 },
                    { x: "Median views\nper post", y: 25 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Spotify\nfollowers", y: 90 },
                    { x: "Instagram\nfollowers", y: 15 },
                    { x: "Median views\nper post", y: 100 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Spotify\nfollowers", y: 150 },
                    { x: "Instagram\nfollowers", y: 30 },
                    { x: "Median views\nper post", y: 200 },
                  ],
                },
              ],
              note: "Expected lands at about 299,000 Spotify followers, 617,000 on Instagram, and a median of about 68,000 views per TikTok post. Spotify's low case is close to the current trend of roughly 5,000 new followers a month.",
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
      intro: "Each example below maps to one of the three workstreams. They were chosen because the mechanic is visible in the post itself, the result is on the public record where one exists, and the format is something idntt can run at its own cadence. Every teardown ends with how we would adapt it for idntt.",
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
            title: "Make every idntt fan meet and pre-order a sign-up",
            actions: [
              "Run fan meet tickets, pre-orders and signed-copy drops as registrations to the owned fan list, never as an open link",
              "Shoot the room or the moment with a pair or unit, and keep the ask in the caption in two dated steps",
              "Give registered fans something first: early access, a list-only date, or a signed copy",
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
            title: "Run idntt's pre-order windows this way",
            actions: [
              "One worldwide pre-order link, with times in KST, ET and Mexico City time for Korea, the U.S. and Latin America",
              "A rotating member selfie for each day of the window, subtitled in Korean, English and Spanish",
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
            title: "Build an idntt series on this exact grammar",
            actions: [
              "One setup, one reveal, under ten seconds, with the new single as the sound. The reveal is a second member arriving, the pair format the audit found wins.",
              "Use guests that U.S. and Latin American audiences recognize, from creators to other artists, as the reveal rather than a set routine.",
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
          description: "This is a joint offering from Transparent Arts and Crowd Control Digital, contracted and reported as one team. Transparent Arts leads relationships, press, partnerships, and the U.S. industry surface. Crowd Control Digital leads numbers, media, data, and creative testing. MODHAUS keeps A&R, the music, and every artist decision. Everyone sits on the same weekly call and works from the same report.",
        },
      ],
      messaging: [
        "The fandom is already growing. This plan is about building on it, not creating it.",
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
      intro: "A test-first rhythm, opened around the full-lineup announcement so the biggest traffic of the cycle is captured rather than lost. The front door on social bios and the highest-traffic posts is built in the first two weeks because everything else feeds from them. Paid begins small and scales only on evidence. Physical planning for the next release starts once its date is confirmed, and the checkpoint at week four is a real scale-or-stop decision, not a status update.",
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
          name: "Paid: U.S. and LATAM",
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
            { weekIndex: 1, intensity: "medium", label: "DIRECT" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "low" },
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
          title: "Open the front door",
          items: [
            "An owned capture destination added to every social bio and the highest-traffic posts, forwarding fans on to streaming, tickets or COSMO.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
            "Content plan delivered, with the first duo series and a subtitle standard in English and Spanish.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "Paid launches small in the U.S., Latin America and Southeast Asia lanes, measuring cost per follower and cost per fan in each.",
            "Fan-data platform live: capture surfaces, consent flows, welcome sequence.",
            "First episodes of the new series in their fixed slot.",
          ],
        },
        {
          weekIndex: 4,
          title: "Checkpoint: scale or stop",
          items: [
            "Full read on cost per fan and cost per follower against the targets agreed at kickoff, lane by lane.",
            "Budget moves to what is working. Anything below its floor of efficacy is stopped, not nursed.",
            "Physical planning opens once the next release date is confirmed.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: mid-window review",
          items: [
            "List size, follower growth, and audience growth measured against the low, expected, and high bands.",
            "Limited edition and signed-copy run sized against the list; retail and pre-order plan locked for the counting week.",
            "U.S. live moment scoped and sized against the list.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by the label.",
            "Targets for the next release, set from what this window measured, along with the budget tier to fund it.",
          ],
        },
      ],
      footnote: "Timing assumes a confirmed date for the next release for the physical workstream. Checkpoints are real decision points with the authority to stop a channel.",
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
      ccdNote: "The fee is a single retainer of $10,000 a month, plus 15 percent of the media the team manages. The retainer covers strategy, relationships and press, partnerships, data, the content plan, creative testing, and weekly reporting. Building the front door on the group's highest-traffic surfaces is included in the retainer and uses no media budget.",
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
            { vertical: "Paid growth media, U.S. and LATAM", amount: "$25,000" },
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
          tagline: "Adds clipping at about 50 million impressions around the full-lineup release and pre-order support for the next release.",
          deployable: "$120,000",
          featured: true,
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$30,000" },
            { vertical: "Paid growth media, U.S. and LATAM", amount: "$30,000" },
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
          tagline: "Doubles clipping again to about 100 million impressions and funds marketing for a U.S. live moment sold to the fan list first.",
          deployable: "$220,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$40,000" },
            { vertical: "Paid growth media, U.S. and LATAM", amount: "$50,000" },
            { vertical: "Clipping, about 100M impressions", amount: "$100,000" },
            { vertical: "Pre-order, retail, and U.S. live marketing", amount: "$30,000" },
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
