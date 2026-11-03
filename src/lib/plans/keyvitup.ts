import type { StrategyPlanData } from "../plan-context";

export const keyvitupPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/keyvitup/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "keyvitup-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Audit & Growth Plan",
    title: "KEYVITUP",
    subtitle: "An audit of the first seven months, and three workstreams to build on the fans who stayed: first-party fan data, physical sales, and market lift in the U.S. and Southeast Asia.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "November 2026",
    backgroundImage: "/images/keyvitup/keyvitup-group.jpg",
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
      subtitle: "KEYVITUP has added Spotify followers every single day since its debut, through seven months without a new release. NA-GARI on November 9 puts that fandom back in front of the largest audience it will see this cycle.",
      body: [
        "KEYVITUP's debut did what a debut is supposed to do. The first EP sold 84,882 copies in its first week on Hanteo, the 83rd-best first week of any 2026 release by any artist, and monthly listeners reached 265,562 on May 9. The more important number came after. Listening fell back as the debut cycle ended, as it does for every rookie act, but Spotify followers never stopped climbing: from 8,336 in April to 34,652 today, with no down day in 203 daily readings. More than one in three people still listening each month has chosen to follow, the highest rate in KEYVITUP's 2026 debut class.",
        "The audience is also more international than the promotion has been. The launch peaks came from Indonesia, Malaysia and Taiwan, and the United States is now the group's No. 1 market. What is not yet in place is the layer that turns those fans into an audience iNKODE owns and can sell to directly. Transparent Arts and Crowd Control Digital propose three workstreams to build it, timed to open inside the NA-GARI cycle, run as one team, each with a test budget, a low, expected and high outcome, and a clear rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party fan data: an overseas fan database the label owns outright, built inside Korean privacy law",
          "Physical sales: a U.S. sales base built on pre-orders and committed-fan math, paced across two releases",
          "Market lift: growth in Spotify followers, Instagram and YouTube in the U.S. and Southeast Asia, where the listeners already are",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "A first-party fan list with a stated cost per fan and a size range",
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
          subtitle: "Every month-end reading since the debut is higher than the one before it, including the six months without a release.",
          series: [
            {
              name: "Followers",
              points: [
                { x: "Apr 26", y: 14861 }, { x: "May 26", y: 20249 }, { x: "Jun 26", y: 23198 }, { x: "Jul 26", y: 26183 }, { x: "Aug 26", y: 30142 }, { x: "Sep 26", y: 32799 }, { x: "Oct 26", y: 34652 },
              ],
            },
          ],
          tall: true,
          source: "Chartmetric, month-end readings through Oct 31 2026",
        },
      ],
      footnote: "Data pulled November 2, 2026. Sources: Chartmetric, Hanteo, Circle Chart, and platform data.",
    },

    // ===================================================================
    // 02. Where KEYVITUP Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where KEYVITUP Stands",
      philosophy: "Three findings from the data, and what each one opens up.",
      intro: "Everything below comes from live data pulled November 2, 2026: Chartmetric for audience metrics and Hanteo and Circle Chart for physical sales, compared against the boy groups that debuted alongside KEYVITUP in 2026.",
      subBlocks: [
        {
          label: "A",
          title: "The Fans Who Stayed Are Committed",
          objective: "Listening reset after the debut cycle. Commitment did not.",
          strategy: "Monthly listeners came down from the May peak as the debut cycle ended, which is the normal shape for a first release. Followers did the opposite. A follow on Spotify is the one free action that puts every future release in front of a listener automatically, and KEYVITUP has gained followers every day for seven months, adding about 1,850 in October alone with no new music out. Today 74 out of every 100 monthly listeners follow the group, more than double the rate of any act in its debut class. Part of that rate comes from a smaller listener base, and we say so plainly. The part that matters is that the committed core kept growing on its own, and NA-GARI is the first chance to put that core to work.",
          charts: [
            {
              kind: "grouped",
              title: "Monthly Listeners and Followers Since Debut",
              subtitle: "Month-end readings. Listening reset after the debut cycle; followers grew every month.",
              series: [
                {
                  name: "Monthly listeners",
                  color: "#8A8A8A",
                  points: [
                    { x: "Apr", y: 198619 }, { x: "May", y: 242953 }, { x: "Jun", y: 139421 }, { x: "Jul", y: 77715 }, { x: "Aug", y: 83749 }, { x: "Sep", y: 61777 }, { x: "Oct", y: 46559 },
                  ],
                },
                {
                  name: "Followers",
                  color: "#FD3737",
                  points: [
                    { x: "Apr", y: 14861 }, { x: "May", y: 20249 }, { x: "Jun", y: 23198 }, { x: "Jul", y: 26183 }, { x: "Aug", y: 30142 }, { x: "Sep", y: 32799 }, { x: "Oct", y: 34652 },
                  ],
                },
              ],
              source: "Chartmetric, month-end readings, Apr to Oct 2026",
            },
            {
              kind: "hbars",
              title: "Followers per Monthly Listener, 2026 Debut Class",
              subtitle: "Spotify followers divided by monthly listeners, November 2, 2026.",
              series: [
                {
                  name: "Followers per listener",
                  points: [
                    { x: "KEYVITUP", y: 0.744 },
                    { x: "MODYSSEY", y: 0.351 },
                    { x: "VAYONN", y: 0.3 },
                    { x: "hrtz.wav", y: 0.243 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "Groups with long-standing fandoms sit at or above 1.0. KEYVITUP is the closest of its class to that line.",
              source: "Chartmetric, Nov 2 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The Audience Is International, and the U.S. Now Leads",
          objective: "The launch audience arrived from Southeast Asia, and the largest current market is the United States.",
          strategy: "At the debut peak the biggest audiences were in Indonesia, at 140,221 monthly listeners, Malaysia at 102,330 and Taiwan at 31,994, each well above the Korean peak of 11,665. Those markets found the group on their own: none of them hosted an appearance, showcase or fan event during the debut cycle. Since the summer the United States has risen to No. 1, helped by KCON LA and the group's first North American fan meet. Southeast Asia is where the group can reach the most people per dollar. The U.S. is where a fan list, physical sales and a live moment are worth the most. This plan works both.",
          charts: [
            {
              kind: "hbars",
              title: "Peak Monthly Listeners by Market, Debut Cycle",
              subtitle: "Each market measured at its own peak, April to September 2026.",
              series: [
                {
                  name: "Peak listeners",
                  points: [
                    { x: "Indonesia", y: 140221 },
                    { x: "Malaysia", y: 102330 },
                    { x: "Taiwan", y: 31994 },
                    { x: "Thailand", y: 22477 },
                    { x: "United States", y: 18777 },
                    { x: "South Korea", y: 11665 },
                  ],
                },
              ],
              highlightX: ["Indonesia", "Malaysia"],
              source: "Chartmetric, market-level listener series, Apr to Sep 2026",
            },
            {
              kind: "hbars",
              title: "Top Markets Today",
              subtitle: "Monthly listeners by market, November 2, 2026.",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 9118 },
                    { x: "Indonesia", y: 5283 },
                    { x: "Malaysia", y: 4790 },
                    { x: "Philippines", y: 4581 },
                    { x: "Germany", y: 4118 },
                    { x: "Taiwan", y: 2093 },
                    { x: "Australia", y: 1726 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Nov 2 2026",
            },
          ],
        },
        {
          label: "C",
          title: "The Fans Already Buy",
          objective: "A debut first week that placed in the top hundred releases of the year.",
          strategy: "KEYVITUP's first EP moved 84,882 units in its first week on Hanteo and reached No. 5 on Circle's weekly album chart. That is a strong debut by any standard, and it shows the fandom will spend when it is given something to buy. What the group does not yet have is a way to point that buying power at the markets where its listeners live. There is no official store, no merchandise beyond album versions, no lightstick, and no U.S. sales history of any kind. NA-GARI and the release after it are the chance to build all of that from a demand that is already proven.",
          charts: [
            {
              kind: "bars",
              title: "First-Week Album Sales, 2026 Boy-Group Debuts",
              subtitle: "Hanteo first-week figures for 2026 boy-group debuts that placed in the year's first-week top 100.",
              series: [
                {
                  name: "First-week units",
                  points: [
                    { x: "MODYSSEY", y: 302064 },
                    { x: "FLARE U", y: 186825 },
                    { x: "VAYONN", y: 160872 },
                    { x: "NAZE", y: 130427 },
                    { x: "KEYVITUP", y: 84882 },
                    { x: "TUNEXX", y: 73865 },
                    { x: "hrtz.wav", y: 26622 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "84,882 placed 83rd across every 2026 release, by any artist at any career stage.",
              source: "Hanteo first-week sales, 2026",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled November 2, 2026. Market peaks are each market's own highest reading between April and September 2026. Physical: Hanteo first-week and Circle Chart weekly figures.",
    },

    // ===================================================================
    // 03. Content Audit
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Content",
      title: "Content Audit",
      philosophy: "123 videos, watched frame by frame, with each video's real performance attached.",
      intro: "We built a video library of 73 KEYVITUP posts across TikTok, YouTube and Instagram, including all three music videos, plus 50 posts from VAYONN, MODYSSEY, CORTIS, AHOF and IDID, chosen from a full count of 3,860 posts across nine accounts. Every video was analyzed for format, who is on screen, setting, language and calls to action, then joined to its performance. Four findings shape the plan.",
      subBlocks: [
        {
          label: "A",
          title: "The Full Group, On Location, Wins",
          objective: "The best-performing posts share a clear and repeatable shape.",
          strategy: "The top tenth of KEYVITUP's posts earned a median of 216,900 views. The bottom tenth earned 17,400. The difference is not length or hook, both of which we tested and found separate nothing. It is who is on screen and where. In the top band, 44 percent of posts show five or more members and half are shot away from the studio. In the bottom band, half are a single member and 71 percent are filmed in a practice room. The group already knows how to make the posts that travel. It makes fewer of them than the ones that do not.",
          charts: [
            {
              kind: "bars",
              title: "Median Views, Best and Weakest Posts",
              subtitle: "KEYVITUP's own posts, top tenth against bottom tenth by views.",
              series: [
                {
                  name: "Median views",
                  points: [
                    { x: "Bottom tenth", y: 17400 },
                    { x: "Top tenth", y: 216900 },
                  ],
                },
              ],
              highlightX: ["Top tenth"],
              note: "Top band: 44% five or more members, 50% on location. Bottom band: 50% one member, 71% in the studio.",
              source: "Analysis of 73 KEYVITUP posts with performance data attached, Sep 2026",
            },
          ],
        },
        {
          label: "B",
          title: "No Series, and Almost No Next Step",
          objective: "Nothing gives a viewer a reason to come back or a place to go.",
          strategy: "CORTIS runs eight named, repeatable content series. MODYSSEY runs two and VAYONN one. KEYVITUP runs none, so every post has to win attention from zero. And across all 73 posts there are two calls to action and no links, so even the posts that land send viewers nowhere they can join, buy or be reached again. Both are quick to fix, they cost nothing in media, and they make every dollar of paid support behind the content worth more.",
          charts: [
            {
              kind: "hbars",
              title: "Named, Repeatable Content Series",
              subtitle: "Recurring formats with a consistent title or setup, across each group's own accounts.",
              series: [
                {
                  name: "Series",
                  points: [
                    { x: "CORTIS", y: 8 },
                    { x: "MODYSSEY", y: 2 },
                    { x: "VAYONN", y: 1 },
                    { x: "KEYVITUP", y: 0 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              source: "Content analysis, Sep 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Instagram Is the More Efficient Platform",
          objective: "The same video earns more on Instagram, on a smaller following.",
          strategy: "On 33 occasions the group published the same cut to Instagram and TikTok on the same day. Instagram won 28 of them, by a median of 1.56 times, on a following roughly a fifth smaller. That makes Instagram the place to lead paid support, and the place where the group's best organic posts should be given more weight first.",
          components: {
            heading: "Supporting Findings",
            items: [
              "Personality-led posts are where VAYONN wins: 8 of its 11 best posts, against 0 of KEYVITUP's 9 best. Its per-post median is lower than KEYVITUP's, so the lesson is the lane, not the quality",
              "Campaign assets out-earn everyday posts by 2.9 times, and the stretch between the debut cycle and September ran 110 TikToks without one",
              "75 percent of the library lands without translation, mostly the dance content. The posts that need translation are the personality pieces, which is why subtitles in English and Bahasa come first",
              "One post in 73 speaks to an audience outside Korea, while the largest audiences sit in the U.S. and Southeast Asia",
            ],
          },
        },
      ],
      footnote: "Content analysis of 123 videos (73 KEYVITUP, 50 comparison) with per-post performance data attached, completed September 2026. Findings that did not hold up under testing, including video length and opening-hook style, are not claimed here.",
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
      intro: "A fandom needs somewhere to go. We checked every owned and partner surface, including the official links, smart link, fan platform, store and social bios, and compared them against what the label has already built for its other acts. The gaps below are the fastest wins in this document, because most of them cost nothing in media to close.",
      subBlocks: [
        {
          label: "A",
          title: "A Capture Page Exists and Is Not Collecting",
          objective: "The group's official smart link points fans to a sign-up page that no longer works.",
          strategy: "A fan sign-up campaign for KEYVITUP was set up on the distributor's fan-data platform and is named as the destination behind the group's official smart link. At our audit it loaded with no form fields at all and a message that the page no longer exists. The same address pattern for a labelmate loads a live sign-up form, so the system works. It is simply not switched on for this group. Every fan who has tapped that link since has been lost.",
          components: {
            heading: "What We Found",
            items: [
              "Official smart link routed to a dormant sign-up page with no fields",
              "No email or SMS capture on any other owned surface",
              "Two calls to action across 73 posts, and no links in any of them",
            ],
          },
        },
        {
          label: "B",
          title: "The Fandom Has a Name and Nowhere to Join",
          objective: "KEYPER exists. A home for it does not, yet.",
          strategy: "The fandom is named KEYPER. The group's official fan space on Mnet Plus was set up with membership, messaging, live shows, listening parties and translation all switched off, and its language options do not include Bahasa Indonesia, Malay or Thai, the languages of the group's largest launch markets. The label's established labelmate runs a full fan community, a fan-platform shop and a dedicated store. KEYVITUP has no store, no merchandise beyond album versions and no lightstick. None of this is a creative problem. It is infrastructure that has not been built yet.",
          components: {
            heading: "What We Found",
            items: [
              "Fan space live with membership, messaging and translation switched off",
              "No language support for the largest launch markets",
              "No official store, no merchandise beyond album versions, no lightstick",
              "A labelmate on the same label running all three",
            ],
          },
        },
      ],
      footnote: "Surface-by-surface audit completed September 2026, with controls run against a labelmate's equivalent surfaces. Platform settings can change; every item is re-checked in week one of the engagement.",
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
      philosophy: "Build an overseas fan database iNKODE owns outright, inside what Korean privacy law allows.",
      intro: "Every other workstream gets more efficient once this exists, because the label stops renting access to its own audience. KEYVITUP already reaches about 405,000 people across Instagram, TikTok and YouTube, and NA-GARI will bring more of them to the group's links in November than at any other point this cycle.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "An overseas fan list with contact permission, behavioral enrichment, and direct commercial use.",
          strategy: "The first step is routing. The official smart link and the group's highest-traffic assets currently send fans to destinations that capture nothing, so the opening weeks repoint that traffic to an owned destination that captures first and then forwards fans wherever they were going. That alone starts the list at no media cost, and timing it to the NA-GARI cycle catches the comeback traffic. Paid acquisition units built specifically for sign-up then scale it, and records are enriched over time against real behavior so the label can tell a casual follower from a repeat buyer. The output is an asset iNKODE holds directly, usable for comeback announcements, fan meets, album pre-orders and retail drops, without depending on any platform's algorithm or any agency's account access.",
          components: {
            heading: "Components",
            items: [
              "Official smart link and highest-traffic assets repointed to an owned capture destination in the first two weeks",
              "Capture surfaces across social, pre-save, retail and live moments, in English and Bahasa first",
              "Paid acquisition units built and measured on cost per fan, not impressions",
              "Behavioral enrichment: fan meet attendees, repeat pre-savers, album and merchandise buyers",
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
              title: "Fan List at 12 Months",
              subtitle: "Low, expected, and high outcomes. Expected is about 2.5 percent of the group's current social following.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Low", y: 4000 },
                    { x: "Expected", y: 10000 },
                    { x: "High", y: 18000 },
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
          objective: "Stay compliant by scoping capture to fans outside Korea, where the mechanics are permitted and most of the audience already is.",
          strategy: "Korea's personal-information rules are strict and specific: consent cannot be bundled with anything else, notices must be presented in Korean, and opt-out has to be available and easy. Phone-based capture in Korea is effectively unusable in practice because Korean numbers do not complete the double opt-in flows Western platforms require. The plan does not fight any of that. Korean fans stay where they already are, on the group's existing fan platform. Capture is scoped to fans outside Korea, led by the U.S., under each market's own consent standards, which is both compliant and aimed at the markets that make up nearly all of the group's listening.",
          components: {
            heading: "Compliance Posture",
            items: [
              "Overseas capture only, led by the U.S., under each market's consent standards",
              "No bundled consent, no sign-up as a condition of anything else",
              "Korean-market fans remain on the existing fan platform",
              "Documented consent trail and opt-out on every surface",
            ],
          },
        },
      ],
      footnote: "Scoping capture outside Korea is a deliberate compliance decision, not a limitation. South Korea is not among the group's top ten listening markets.",
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
      intro: "KEYVITUP's fans have already shown they buy, with a first week that placed in the top hundred releases of 2026. This workstream points that demand at the markets where the listeners live, and builds the group's first U.S. sales record.",
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
          strategy: "Pre-orders opened to the first-party list before any public announcement measure demand while there is still time to act on it, so supply can be sized to the first week rather than catching up after it. The product is a limited edition sold everywhere through a direct-to-fan store and the group's distribution, so fans in Korea, Southeast Asia and every other market can buy it too. It launches to the fan list first, and a run of signed copies is sold direct as a reward for the fans on that list. Everything is timed to land inside one counting week, and U.S. retail and a pop-up tied to the on-sale give the moment a physical presence.",
          components: {
            heading: "Components",
            items: [
              "Pre-order window opened to the owned fan list first",
              "A limited edition sold worldwide through a direct-to-fan store and the group's distribution",
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
                    { x: "Release 1\nGroundwork", y: 500 },
                    { x: "Release 2\nChart push", y: 2000 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Release 1\nGroundwork", y: 1200 },
                    { x: "Release 2\nChart push", y: 4000 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Release 1\nGroundwork", y: 2500 },
                    { x: "Release 2\nChart push", y: 7000 },
                  ],
                },
              ],
              note: "KEYVITUP has no U.S. album-chart history, so Release 1 is measured on the base it builds and sets the group's first U.S. sales baseline. Release 2 targets a first entry on Billboard's World Albums chart, with Top Album Sales as the high case. Final targets are set once a release date is confirmed, because every chart week has a different field.",
              source: "Crowd Control Digital and Transparent Arts planning ranges from 2026 Billboard chart results",
            },
          ],
        },
        {
          label: "C",
          title: "Two Releases, Not One",
          objective: "Build the U.S. base on the next release, then go for the chart on the one after.",
          strategy: "A chart result is strongest when it is built on a fan base that has already been reached and measured. The plan is therefore paced across two releases, in step with the group's release schedule. NA-GARI arrives before the engagement can be fully running, so its window is used to start the list and run direct sales to it. The next release is groundwork: it runs pre-orders to the list for the first time and sets a real U.S. sales baseline. The release after that takes everything the first one built and goes for the chart, with targets set from measured numbers rather than projections.",
          components: {
            heading: "How the Two Releases Divide the Work",
            items: [
              "NA-GARI window: start the list from comeback traffic and sell direct to it",
              "Release 1, groundwork: open pre-orders to the list for the first time, and measure U.S. units, conversion from list to purchase, and cost per fan",
              "Release 2, chart push: pre-orders open to a larger, proven list, the limited edition and signed copies are sized from Release 1 demand, and everything lands inside one counting week",
              "Release 2 targets a World Albums entry, with Top Album Sales as the high case",
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
          title: "Recommendations for iNKODE",
          objective: "Three product decisions that sit with the label, which would make every workstream here more effective.",
          strategy: "These are iNKODE's calls, not part of this engagement's scope. We include them because each one gives the fan list something to sell and gives committed fans a next step beyond the album.",
          components: {
            heading: "Recommendations",
            items: [
              "An official lightstick, announced and pre-sold against a live moment. It is one of the most reliable identity and revenue products in K-pop, and KEYPER does not have one yet",
              "A full fan community and store, matching what the label already runs for its established act, with language support for Indonesia, Malaysia and Thailand",
              "A version strategy set at the start of each release cycle, so supply meets first-week demand rather than catching up after it",
            ],
          },
        },
      ],
      footnote: "Ratios: Luminate published album-equivalent weighting, effective week 1 of 2026. The Hot 100 is a separate song chart with its own formula, and album purchases do not count toward it; this workstream targets the Billboard 200 and its component album charts. Sales history: Hanteo first-week and Circle Chart weekly figures. Product decisions, manufacturing and release timing remain with iNKODE.",
    },

    // ===================================================================
    // 08. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Market Lift",
      title: "Workstream 3 / Market Lift: U.S. and Southeast Asia",
      philosophy: "Grow the followed, subscribed, and engaged audience in the markets where the listeners already are.",
      intro: "This workstream is measured on Spotify followers, Instagram, YouTube and content performance, U.S.-first with Southeast Asia alongside. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 10 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Media Where the Fans Are",
          objective: "Run the group's first dedicated paid program against audiences that are already listening.",
          strategy: "Paid support runs in two lanes. The U.S. lane is the priority: it is the No. 1 market, and every follower and fan captured there is worth the most to the physical and live workstreams. The Southeast Asia lane covers Indonesia, Malaysia and the Philippines, where the launch audience came from and where the same budget buys several times the reach. Both ladder from follower and subscriber growth to fan-data capture, with retargeting pools built from video viewers and profile visitors. Instagram leads, because the group's own data shows it earns more from the same video. Creative rotates weekly from whatever is already performing organically rather than from bespoke ad builds, which is the approach that took cost per click down 72 percent on the reference campaign.",
          components: {
            heading: "Components",
            items: [
              "Follower and subscriber growth campaigns, U.S. first, Instagram first",
              "A Southeast Asia lane in Indonesia, Malaysia and the Philippines, run on the same rules",
              "Fan-data capture units feeding Workstream 1",
              "Retargeting from video viewers, engagers, and profile visitors",
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
          title: "Content That Already Works, Given More Weight",
          objective: "Put paid weight and a regular schedule behind the formats the audit proved.",
          strategy: "Section 03 found the shape of a winning KEYVITUP post: the full group, on location. This workstream turns that into two or three named series with a fixed slot, so viewers have a reason to come back, and adds a personality lane, with subtitles in English and Bahasa, built on the format that drives VAYONN's best posts. Every post gets a clear next step, pointing to the owned destination from Workstream 1. None of this requires a new production model. It requires a schedule, subtitles and a link.",
          components: {
            heading: "What Changes",
            items: [
              "Two or three named series built on the full-group, on-location format",
              "A personality lane, subtitled in English and Bahasa",
              "A campaign asset in every release window, in the lane that out-earns everyday posts 2.9 to 1",
              "Instagram first for paid weight, then TikTok",
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
          strategy: "Low is roughly where current trends land without new investment. Expected is what we plan against. High assumes every workstream scales after the 90-day checkpoints. The U.S. live moment follows the same logic: low is a fan meet of 300 to 500, expected is a sold-out showcase of around 1,000 in Los Angeles, and high is a two-city run adding New York, each sold to the fan list before general on-sale.",
          charts: [
            {
              kind: "grouped",
              title: "12-Month Growth Against Today's Baseline",
              subtitle: "Percent growth by metric. Baselines: 34,652 Spotify followers, 163,396 Instagram followers, 40,100 median views per TikTok post.",
              unit: "%",
              series: [
                {
                  name: "Low",
                  color: "#8A8A8A",
                  points: [
                    { x: "Spotify\nfollowers", y: 55 },
                    { x: "Instagram\nfollowers", y: 5 },
                    { x: "Median views\nper post", y: 25 },
                  ],
                },
                {
                  name: "Expected",
                  color: "#FD3737",
                  points: [
                    { x: "Spotify\nfollowers", y: 120 },
                    { x: "Instagram\nfollowers", y: 30 },
                    { x: "Median views\nper post", y: 100 },
                  ],
                },
                {
                  name: "High",
                  color: "#F2F2F2",
                  points: [
                    { x: "Spotify\nfollowers", y: 200 },
                    { x: "Instagram\nfollowers", y: 60 },
                    { x: "Median views\nper post", y: 200 },
                  ],
                },
              ],
              note: "Expected lands at about 76,000 Spotify followers, 212,000 on Instagram, and a median of about 80,000 views per post. Spotify's low case is the current trend of roughly 1,600 new followers a month.",
              source: "Crowd Control Digital projection from Chartmetric baselines, Nov 2 2026",
            },
          ],
        },
      ],
      footnote: "Content findings come from the analysis in Section 03. Market data: Chartmetric, November 2, 2026.",
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
      intro: "Each example below maps to one of the three workstreams. They were chosen because the mechanic is visible in the post itself, the result is on the public record where one exists, and the format is something KEYVITUP can run at its own cadence. Every teardown ends with how we would adapt it for KEYVITUP.",
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
            title: "Make every KEYVITUP fan meet and pre-order a sign-up",
            actions: [
              "Run fan meet tickets, pre-orders and signed-copy drops as registrations to the owned fan list, never as an open link",
              "Shoot the room or the moment with the full group, and keep the ask in the caption in two dated steps",
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
            title: "Run KEYVITUP's pre-order windows this way",
            actions: [
              "One worldwide pre-order link, with times in KST, WIB and ET for Korea, Indonesia and the U.S.",
              "A rotating member selfie for each day of the window, subtitled in Korean, English and Bahasa",
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
            title: "Build a KEYVITUP series on this exact grammar",
            actions: [
              "One setup, one reveal, under ten seconds, with NA-GARI as the sound. The reveal is the rest of the group arriving, the format the audit found wins.",
              "Use guests that U.S. and Southeast Asian audiences recognise, from creators to other artists, as the reveal rather than a set routine.",
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
          description: "This is a joint offering from Transparent Arts and Crowd Control Digital, contracted and reported as one team. Transparent Arts leads relationships, press, partnerships, and the U.S. industry surface. Crowd Control Digital leads numbers, media, data, and creative testing. iNKODE keeps A&R, the music, and every artist decision. Everyone sits on the same weekly call and works from the same report.",
        },
      ],
      messaging: [
        "The fandom is already growing. This plan is about building on it, not creating it.",
        "Everything proposed here is measured against a baseline set before launch.",
        "What works gets more budget. What does not is stopped early.",
      ],
      footnote: "Every recommendation in this document traces to data pulled November 2, 2026, to the content and infrastructure audits completed September 2026, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 11. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "11",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm, opened inside the NA-GARI cycle so the comeback traffic is captured rather than lost. The smart link and highest-traffic assets are fixed in the first two weeks because everything else feeds from them. Paid begins small and scales only on evidence. Physical planning for the next release starts once its date is confirmed, and the checkpoint at week four is a real scale-or-stop decision, not a status update.",
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
          name: "Paid: U.S. and SEA",
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
          title: "Fix the smart link and highest-traffic assets",
          items: [
            "The official smart link and highest-traffic assets repointed to an owned destination that captures fans before forwarding them, catching NA-GARI traffic.",
            "Baselines locked on every metric this plan is measured against, so week four has something to compare to.",
            "Content plan delivered, with the first named series and a subtitle standard in English and Bahasa.",
          ],
        },
        {
          weekIndex: 2,
          title: "Paid goes live in test mode",
          items: [
            "Paid launches small in the U.S. and Southeast Asia lanes, Instagram first, measuring cost per follower and cost per fan in each.",
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
      ccdNote: "The fee is a single retainer of $10,000 a month, plus 15 percent of the media the team manages. The retainer covers strategy, relationships and press, partnerships, data, the content plan, creative testing, and weekly reporting. Fixing the group's highest-traffic assets is included in the retainer and uses no media budget.",
      breakdownLabel: "Where the budget goes",
      deployableLabel: "Working media",
      tiers: [
        {
          label: "Foundation",
          budget: "$87,500",
          name: "90-Day Total",
          tagline: "Fan data and growth in the U.S. and Southeast Asia. Proves cost per fan and cost per follower before anything larger is committed.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$25,000" },
            { vertical: "Paid growth media, U.S. and SEA", amount: "$25,000" },
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
          tagline: "Adds clipping at about 50 million impressions around NA-GARI and pre-order support for the next release.",
          deployable: "$120,000",
          featured: true,
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$30,000" },
            { vertical: "Paid growth media, U.S. and SEA", amount: "$30,000" },
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
            { vertical: "Paid growth media, U.S. and SEA", amount: "$50,000" },
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
