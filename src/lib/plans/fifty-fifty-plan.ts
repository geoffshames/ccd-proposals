import type { StrategyPlanData } from "../plan-context";

export const fiftyFiftyExecutionPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/fifty-fifty/og-plan.png",
  language: "en",
  languageAlternates: [{ slug: "fifty-fifty-plan-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "U.S. Execution Plan",
    title: "FIFTY FIFTY",
    subtitle: "The 90-day program for the February EP: fan data, U.S. growth, physical sales and Top 40 radio, with every dollar, date and target set out line by line.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "November 2026",
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
    // 01. Plan Overview
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Plan Overview",
      subtitle: "An $87,500 core program over 90 days, from early December through the February EP release, with a separate $100,000 Top 40 radio campaign running alongside it.",
      body: [
        "This document turns the U.S. growth plan into an execution schedule. It covers the first release cycle only: the February EP, four songs led by two new tracks built for radio, with a physical album and two photobooks. Work starts the week of December 7, 2026, so that the fan list, the paid accounts and the content rhythm are already running before the first single reaches U.S. listeners. The release week is penciled for the week of February 8 and moves to whatever date ATTRAKT confirms.",
        "The core program is $87,500: a $30,000 team retainer across three months, $50,000 of working media billed at cost, and a $7,500 management fee at 15 percent of that media. It funds three workstreams run as one team. First-party fan data builds a U.S. fan list ATTRAKT owns. U.S. growth puts paid weight behind the content formats the group's own data proves. Release and physical concentrates U.S. demand for the EP inside one chart counting week. Top 40 radio is the fourth workstream, budgeted separately at $100,000 for an initial three-month campaign and led by Transparent Arts through an independent promoter network covering 69 stations.",
        "Every line has a target, and every target has a low, expected and high case. Two checkpoints inside the window decide where money moves next. This cycle is groundwork for the chart push on the following release: it sets the real U.S. cost per fan, the U.S. sales baseline for the current lineup, and the radio footprint the next single can build on.",
      ],
      supports: {
        heading: "What This Cycle Delivers",
        items: [
          "A U.S. fan list of about 15,000 identified fans by early March, owned and exportable by ATTRAKT",
          "Spotify followers, Instagram and YouTube growth against baselines locked in the first week",
          "Pre-orders opened to the fan list before public on-sale, with U.S. units concentrated in one counting week",
          "Top 40 adds and weekly spins across 69 stations, tracked weekly from the add date",
          "A measured U.S. cost per fan, cost per follower and sales baseline to size the next release",
        ],
      },
      goals: {
        heading: "What Is Funded Where",
        items: [
          "Core program, $87,500: fan data, U.S. growth, release and physical, team fees",
          "U.S. radio, $100,000: Top 40 promotion, station coverage and radio campaign management",
          "With the label: music, A&R, manufacturing, release timing, artist travel and every artist decision",
        ],
      },
      charts: [
        {
          kind: "hbars",
          title: "Where the $87,500 Core Program Goes",
          subtitle: "$50,000 of the core budget is working media in market.",
          series: [
            {
              name: "USD",
              points: [
                { x: "Team retainer", y: 30000 },
                { x: "Fan capture media", y: 25000 },
                { x: "U.S. growth media", y: 25000 },
                { x: "Media management", y: 7500 },
              ],
            },
          ],
          highlightX: ["Fan capture media", "U.S. growth media"],
          source: "Transparent Arts and Crowd Control Digital program budget, November 2026",
        },
      ],
      footnote: "All dates assume a February release week. The schedule shifts as one block when ATTRAKT confirms the date. Each later release cycle is authorized as its own budget on the same structure, sized from what this cycle measures.",
    },

    // ===================================================================
    // 02. Program Structure
    // ===================================================================
    {
      type: "structure",
      number: "02",
      navLabel: "Structure",
      title: "Program Structure",
      intro: "Two budgets, one team and one weekly report. The core program and the radio campaign are approved and invoiced separately so each can be scaled on its own results.",
      tiers: [
        {
          label: "Core Program",
          budget: "$87,500",
          name: "90 Days, Dec 7 to Mar 6",
          goal: "Build the U.S. fan list, grow the U.S. audience and convert it into EP units in one counting week.",
          includes: [
            "First-party fan data: capture stack, routing fix and paid acquisition",
            "U.S. paid growth on Instagram, TikTok and YouTube",
            "February EP release window: pre-save, pre-order and counting-week media",
            "Most of the media held for the weeks the single is out",
            "Strategy, content plan, creative testing, media management, live dashboard and weekly reporting",
          ],
          deployable: "$50,000 working media",
        },
        {
          label: "U.S. Radio",
          budget: "$100,000",
          name: "3 Months From Pre-Launch",
          goal: "Secure Top 40 adds and weekly spins for the lead single and build the station relationships the next single inherits.",
          includes: [
            "Radio strategy, station targeting and the add schedule",
            "Promotion to program directors, music directors and DJs at 69 stations",
            "Mix-show promotion and radio remixes",
            "Add and spin tracking with weekly reporting",
            "Artist promotion: interviews, acoustic sessions, station visits and custom station IDs",
          ],
          deployable: "$75,000 station promotion",
        },
      ],
    },

    // ===================================================================
    // 03. U.S. Audience
    // ===================================================================
    {
      type: "audience",
      number: "03",
      navLabel: "Audience",
      title: "U.S. Audience and Targeting",
      intro: "Who the program reaches, drawn from FIFTY FIFTY's own audience data on Instagram, TikTok, YouTube and Spotify. The United States is the group's largest market on every one of the four platforms.",
      thesis: "The follower base is young and female, but the people who engage are older and more male than the people who follow, and they share a taste for collecting, gaming and animation. The program targets all three lanes instead of only the obvious one.",
      metrosLabel: "Top U.S. Metros by Instagram Followers",
      metros: [
        { name: "Los Angeles", tier: "primary" },
        { name: "New York City", tier: "primary" },
        { name: "Chicago", tier: "secondary" },
        { name: "San Francisco", tier: "secondary" },
        { name: "Houston", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 9.2 },
        { bracket: "18-24", weight: 49.3 },
        { bracket: "25-34", weight: 37.9 },
        { bracket: "35-44", weight: 3.1 },
        { bracket: "45+", weight: 0.4 },
      ],
      genderDistribution: { female: 78.2, male: 21.8 },
      personas: [
        {
          name: "Core K-pop Fans",
          label: "Segment 1",
          priority: "primary",
          profile: "Women 18 to 24, the center of the fanbase: 49 percent of Instagram followers and 67 percent of TikTok followers. They follow the members individually, post and share daily, and respond to member-led content and anything collectible.",
          psychographics: ["Member loyalty over group loyalty", "Collects photocards, albums and versions", "Shares fan edits and challenges"],
          behaviors: ["TikTok-first discovery, Instagram for following", "Buys multiple album versions", "Joins pre-orders and fan drops early"],
          platforms: [
            { name: "Instagram", role: "Follow and capture" },
            { name: "TikTok", role: "Discovery and sound use" },
          ],
          triggers: ["Daily rotating member content in the pre-order window", "First access to pre-orders and signed copies"],
          conversionGoal: "Join the fan list, then pre-order the EP",
        },
        {
          name: "Millennial K-pop Listeners",
          label: "Segment 2",
          priority: "primary",
          profile: "Listeners 25 to 34 who found the group through Cupid and stayed with it: 38 percent of Instagram followers and 64 percent of YouTube subscribers. This is the age band with the most to spend on a physical album.",
          psychographics: ["Came in through Cupid, stayed for the group", "Nostalgic for the 2023 breakout", "Buys albums as keepsakes, not as versions"],
          behaviors: ["Discovers on YouTube and Spotify playlists", "Follows the artist on Spotify when a new song lands", "Shazams songs heard in stores, cars and on radio"],
          platforms: [
            { name: "YouTube", role: "Music video and Shorts reach" },
            { name: "Instagram", role: "Follow and pre-order" },
            { name: "Spotify", role: "Follow and pre-save" },
          ],
          triggers: ["A new song from the group behind Cupid", "Hearing the single on Top 40 radio"],
          conversionGoal: "Follow on Spotify, then buy the EP",
        },
        {
          name: "Gaming and Animation Crossover",
          label: "Segment 3",
          priority: "secondary",
          profile: "The engaged audience is 59 percent male on Instagram, against 22 percent of followers, and over-indexes on Pokemon (2.3x), Nintendo (1.4x) and Marvel (1.4x). Gaming and esports content earns more than five times the group's other formats. This lane is large, under-served and cheap to reach.",
          psychographics: ["Gaming, anime and fandom culture", "Follows creators and streamers more than artists", "Engages heavily, follows less"],
          behaviors: ["Watches long-form and Shorts on YouTube", "Likes and comments more than it shares"],
          platforms: [
            { name: "YouTube", role: "Gaming-adjacent placements" },
            { name: "TikTok", role: "Gaming-format content" },
          ],
          triggers: ["Members inside a game, a stream or a creator's world"],
          conversionGoal: "Follow and subscribe, then join the list",
        },
        {
          name: "People Who Know the Song, Not the Group",
          label: "Segment 4",
          priority: "expansion",
          profile: "Cupid has been used in millions of TikTok videos, most of them pets, food and everyday moments rather than dance. Many of those viewers know the song and have never followed the group. They are reached through retargeting and the single's sound, not through K-pop interests.",
          behaviors: ["Uses the song as a mood under everyday content", "Has watched or engaged with a FIFTY FIFTY video without following"],
          platforms: [
            { name: "TikTok", role: "Sound-led retargeting" },
            { name: "Instagram", role: "Video-viewer retargeting" },
          ],
          triggers: ["The new single's sound appearing in the same kind of content"],
          conversionGoal: "Follow, then stream the new single",
        },
      ],
      psychographics: [
        { label: "Collecting and keepsakes", items: ["Polaroid 4.5x affinity", "Pokemon 2.3x", "Strong fit for photobooks, photocards and signed copies"] },
        { label: "Entertainment and fandom", items: ["Walt Disney 1.8x", "Marvel 1.4x", "Netflix 1.4x", "Nintendo 1.4x"] },
        { label: "Interests above the platform average", items: ["Music 1.7x", "Art and design 1.3x", "Film and television 1.2x", "Pets 1.1x"] },
      ],
      behaviorSignals: [
        { behavior: "The same video earns more on Instagram than on TikTok in most matched pairs", platforms: ["Instagram", "TikTok"], implication: "Instagram leads paid follow and capture" },
        { behavior: "Engagers skew male and older than followers", platforms: ["Instagram"], implication: "Retarget engagers as their own audience instead of folding them into the core" },
        { behavior: "Nostalgia now drives about 21 percent of YouTube comments, and the share of non-English comments has nearly doubled, led by Spanish and Portuguese", platforms: ["YouTube"], implication: "Lead with the new single plus the Cupid connection, and add Spanish copy tests in Phase 3" },
      ],
      similarArtists: ["KATSEYE", "ILLIT", "LE SSERAFIM", "IVE", "NewJeans", "TWICE"],
      genres: ["K-pop"],
      platformSignals: [
        { platform: "Spotify", note: "1.31M U.S. monthly listeners, 21 percent of the total and the No. 1 market" },
        { platform: "TikTok", note: "422,000 U.S. followers, 17 percent of 2.5M and the No. 1 market" },
        { platform: "YouTube", note: "301,000 U.S. subscribers, 13 percent of 2.25M and the No. 1 market" },
        { platform: "Instagram", note: "282,000 U.S. followers, 29 percent of 972,000 and the No. 1 market" },
      ],
      footnote: "Source: Chartmetric audience data, November 2026. Age, gender and affinity figures cover each platform's full follower base, not only U.S. followers. Affinity is the audience's likelihood against the platform average.",
    },

    // ===================================================================
    // 04. Targeting Matrix
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Targeting",
      title: "Targeting Matrix",
      philosophy: "Five audiences, each with its own platform, objective, creative and share of the $50,000. The matrix cuts across the fan-data capture and U.S. paid growth lines.",
      intro: "Shares are starting points. The team moves budget between rows at each checkpoint based on cost per fan and cost per follower. All prospecting is U.S. only, and fans already on the list are excluded from prospecting so no money is spent finding them twice.",
      subBlocks: [
        {
          label: "A",
          title: "Core K-pop Fans",
          budget: "$17,500 (35%)",
          objective: "Build the fan list and grow Instagram and TikTok followers among women 18 to 24.",
          components: {
            heading: "Targeting",
            items: [
              "Audience: U.S. women 18 to 24, K-pop interest stacks, lookalikes of the first list signups and of top engagers",
              "Platforms: Instagram 60 percent, TikTok 40 percent",
              "Creative: rotating member content, challenges and behind-the-scenes, each with a join or pre-order step",
              "Phasing: tests in December, steady in January, largest share in the release window",
            ],
          },
          kpis: ["Cost per fan captured", "Cost per follower", "Pre-order rate from list members"],
        },
        {
          label: "B",
          title: "Millennial K-pop Listeners",
          budget: "$12,500 (25%)",
          objective: "Turn Cupid-era listeners into Spotify followers and EP buyers.",
          components: {
            heading: "Targeting",
            items: [
              "Audience: U.S. adults 25 to 34, K-pop interests and fans of comparable K-pop acts",
              "Platforms: YouTube 50 percent, Instagram 50 percent",
              "Creative: the new single, framed as the next song from the group behind Cupid, then the physical album and photobooks",
              "Phasing: light before release, concentrated on release week and the counting week",
            ],
          },
          kpis: ["Spotify follows and pre-saves from paid", "Cost per subscriber on YouTube", "EP purchases traced to this audience"],
        },
        {
          label: "C",
          title: "Gaming and Animation Crossover",
          budget: "$7,500 (15%)",
          objective: "Reach the male-skewing, gaming-adjacent audience that already engages more than it follows.",
          components: {
            heading: "Targeting",
            items: [
              "Audience: U.S. 18 to 34, gaming, esports, anime and Pokemon interests, no gender restriction",
              "Platforms: YouTube 60 percent, TikTok 40 percent",
              "Creative: the gaming and esports format, members inside a game or a creator's world",
              "Phasing: small test in December, scaled only if cost per follower clears the target",
            ],
          },
          kpis: ["Cost per follower and subscriber", "View-through rate on gaming content"],
        },
        {
          label: "D",
          title: "Warm Retargeting",
          budget: "$7,500 (15%)",
          objective: "Convert people who have already watched, visited or engaged into list signups and pre-orders.",
          components: {
            heading: "Targeting",
            items: [
              "Audience: video viewers at 50 percent or more, profile visitors, engagers and capture-page visitors from the last 180 days, plus users of the Cupid sound where available",
              "Platforms: Instagram, TikTok and YouTube, weighted to whichever pool is largest",
              "Creative: the clearest offer of the moment, first access, pre-order, signed-copy draw",
              "Phasing: pools built in December and January, spent mostly in the release window",
            ],
          },
          kpis: ["Signup and pre-order conversion rate", "Cost per pre-order"],
        },
        {
          label: "E",
          title: "Radio Markets",
          budget: "$5,000 (10%)",
          objective: "Back up every station add with paid reach in that market.",
          components: {
            heading: "Targeting",
            items: [
              "Audience: 18 to 34 inside the listening area of each station that adds the single",
              "Platforms: Instagram and YouTube",
              "Creative: the single plus station interviews, IDs and acoustic clips",
              "Phasing: release window only, switched on market by market as adds come in",
            ],
          },
          kpis: ["Shazam lookups and list signups by market", "Cost per follower in radio markets"],
        },
      ],
      footnote: "Exclusions on every prospecting row: residents of Korea, existing list members and current followers where the platform allows it.",
    },

    // ===================================================================
    // 05. Workstream 1: Fan Data
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Fan Data",
      title: "Workstream 1 / First-Party Fan Data",
      philosophy: "Every other workstream gets cheaper once the label can reach its own fans directly. This one starts first and runs every week of the window.",
      intro: "Budget: $25,000 of capture media inside the core program, plus setup and management covered by the retainer. The target is about 15,000 identified U.S. fans by early March, built inside U.S. consent rules.",
      subBlocks: [
        {
          label: "A",
          title: "Weeks 1 and 2: Fix the Routing",
          objective: "Point the group's highest-traffic assets at a destination that captures fans before sending them on.",
          strategy: "Five of the group's last 1,006 TikTok posts point a viewer anywhere they can follow, join or buy. The first two weeks fix that at zero media cost. Every owned link surface is repointed to a single FIFTY FIFTY U.S. destination that captures an email or phone number first and then forwards the fan to wherever they were going: the new single, the pre-order, the store or the video. From this point on, every organic spike the group earns adds to a list ATTRAKT owns.",
          components: {
            heading: "Surfaces Repointed in Week 1",
            items: [
              "Instagram, TikTok, YouTube and X profile links",
              "YouTube descriptions and pinned comments on the top 25 videos by current traffic, Cupid versions first",
              "Linktree or equivalent replaced by the owned capture destination",
              "Pinned posts on every account carrying the join link through the release",
              "Short QR code and URL for physical album inserts, photobooks and any U.S. retail display",
            ],
          },
          timeline: "Week of Dec 7 to week of Dec 14",
        },
        {
          label: "B",
          title: "The Capture Stack",
          objective: "One owned system for email, SMS and Instagram DMs, with a reason to join at every step.",
          strategy: "The stack captures email and U.S. SMS, plus Instagram DM opt-ins through comment-to-DM automation, which reaches fans on the platform where the group is most efficient. Each signup gets a reason to join that matches the moment: early access to the single in December, first access to pre-orders in January, a signed-copy draw for list members only at release. Every record is tagged by source and later by behavior, so the label can tell a casual follower from a repeat buyer.",
          components: {
            heading: "Build List",
            items: [
              "Capture platform configured for email, U.S. SMS and Instagram DM opt-in",
              "Bilingual signup pages in English and Korean, consent language in both",
              "Welcome sequence: three messages over ten days, member content first, ask second",
              "Comment-to-DM keyword flows on Instagram for the single, the pre-order and the release",
              "Source tags on every record: organic link, paid unit, DM keyword, QR insert, radio market",
              "Behavior tags: pre-saved, pre-ordered, bought direct, opened the last three sends",
            ],
          },
          kpis: [
            "Identified U.S. fans on file, reported weekly",
            "Cost per fan on paid capture, target under $2.00",
            "Share of records with at least one purchase or pre-save behavior",
          ],
        },
        {
          label: "C",
          title: "Paid Acquisition",
          budget: "$25,000 across the window",
          objective: "Scale the list with ad units built for signup, measured on cost per fan, not reach.",
          strategy: "Capture units run U.S.-only on Instagram first, then TikTok, with lookalikes seeded from the first organic signups. The December test is deliberately small because holiday advertising pushes costs to their yearly high. January stays lean while the routing and organic signups do the work, and more than half of the capture budget is held for the weeks the single is out, when the reason to join is strongest. The reference K-pop campaign we run today acquired fans at $1.97 per paid signup and $1.15 blended across all sources.",
          charts: [
            {
              kind: "bars",
              title: "U.S. Fan List by Early March",
              subtitle: "Low, expected and high outcomes for the 90-day window.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Low", y: 8000 },
                    { x: "Expected", y: 15000 },
                    { x: "High", y: 25000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Low assumes paid capture alone at about $2.00 per fan. Expected adds routing and pre-order demand. High assumes a strong single and radio-market signups on top.",
              source: "Crowd Control Digital projection from reference campaign cost per fan",
            },
          ],
        },
        {
          label: "D",
          title: "Inside Korean Privacy Rules",
          objective: "Capture where it is permitted and the audience already is, and leave Korean fans where they are served well.",
          strategy: "Paid capture is scoped to U.S. residents under U.S. consent standards. Consent is never bundled with anything else and opt-out is on every message. Fans in Korea stay on the group's existing fan platform. Instagram DM opt-in gives fans outside the U.S. a way to stay close to the group without phone-based capture, which Korean numbers do not complete in practice.",
        },
      ],
      footnote: "The fan list is held in an account ATTRAKT owns, with full export available at any time.",
    },

    // ===================================================================
    // 06. Workstream 2: U.S. Growth and Content
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "U.S. Growth",
      title: "Workstream 2 / U.S. Growth and Content",
      philosophy: "Put paid weight behind the formats the group's own data proves, in the market where the listeners already are.",
      intro: "Budget: $25,000 of U.S. paid growth media inside the core program, most of it spent once the single is out. Measured on Spotify followers, Instagram and YouTube growth, and median views per post.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Growth Structure",
          budget: "$25,000 across the window",
          objective: "Grow followed, subscribed and engaged U.S. fans at a cost per follower set from the December test.",
          strategy: "Instagram leads because the same FIFTY FIFTY video earns more there than on TikTok in most matched pairs, and Instagram returns about three times as many views per follower. The December test splits a small budget across all three platforms for two weeks to read cost per follower, per subscriber and per stream-click on real data. From the first checkpoint, budget moves to whichever platform is cheapest per outcome, and anything below its floor of efficacy is stopped.",
          components: {
            heading: "Campaign Build",
            items: [
              "Instagram: follower growth on Reels, plus retargeting of video viewers and profile visitors",
              "TikTok: Spark Ads on the group's own top organic posts, U.S. only",
              "YouTube: in-feed and Shorts placements driving subscribers and the official audio",
              "Spotify follow and pre-save destinations through the capture link, so every click can also become a fan record",
              "Starting split 50 percent Instagram, 25 percent TikTok, 25 percent YouTube, rebalanced at each checkpoint",
            ],
          },
          kpis: [
            "Cost per follower and cost per subscriber by platform",
            "Spotify follower net adds per day against the 1,048 a day baseline",
            "U.S. Instagram and YouTube growth against week 1 baselines",
          ],
        },
        {
          label: "B",
          title: "The Content Plan",
          objective: "Change the mix toward what already works. No new production model is needed.",
          strategy: "The content plan is delivered in week 1 and refreshed every two weeks. It rebalances what the group already makes rather than asking for new shoots. Gaming and esports content earns a median of 584,750 views, more than five times the account's other formats, and is under four percent of output today, so it gets a standing weekly slot. Comparison acts reach the payoff inside the first three seconds twice as often as FIFTY FIFTY does, so every edit opens on movement already underway.",
          components: {
            heading: "Weekly Rhythm",
            items: [
              "One gaming or esports post a week, with the members inside a creator's or player's world rather than hosting guests",
              "Same-day posting on Instagram and TikTok, timed for both KST and EST",
              "Bilingual English and Korean captions on every post",
              "A rotating member post each day of the pre-order window, so every member's fans have a day to rally behind",
              "Every post carries a next step: follow, join, pre-save or pre-order",
              "Creative for paid sourced weekly from the best organic performers",
            ],
          },
        },
      ],
      footnote: "Content findings come from an analysis of 105 FIFTY FIFTY and competitor videos with per-post performance data attached.",
    },

    // ===================================================================
    // 07. Workstream 3: Release and Physical
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "EP Release",
      title: "Workstream 3 / February EP Release and Physical",
      philosophy: "One album sale counts as one chart unit. It takes 1,000 premium streams to equal it. The release plan is built around that ratio.",
      intro: "Funded from the two core media lines: about $10,000 of the U.S. paid growth budget and the release-week share of capture media are reserved for this window. This EP is the groundwork release: it sets the U.S. sales baseline for the current lineup and runs the pre-order mechanics for the first time.",
      subBlocks: [
        {
          label: "A",
          title: "The Release Sequence",
          objective: "Move fans from discovery to pre-save to pre-order to purchase in the order the chart rewards.",
          strategy: "The first single is used to grow the list. The pre-order opens to the list before any public announcement, which measures demand while there is still time to adjust supply. Public pre-order follows. Release week concentrates every U.S. purchase inside a single Billboard counting week, which runs Friday to Thursday, so the release date and the paid calendar are set together.",
          components: {
            heading: "Sequence",
            items: [
              "Single teaser and pre-save, with the capture link as the destination",
              "Pre-order opened to the fan list 48 hours before public on-sale",
              "Public pre-order with the rotating member daily posts",
              "Release week: list sends on day one and day four, paid concentrated on the counting week",
              "Post-release: a signed-copy draw for list buyers and a thank-you send that asks for the next action",
            ],
          },
          timeline: "Pre-save from mid-January, list pre-order late January, release week of Feb 8 (to be confirmed)",
        },
        {
          label: "B",
          title: "Pre-Order and Retail",
          objective: "Make the EP easy to buy in the U.S. and make every U.S. sale count.",
          strategy: "Pre-orders run through ATTRAKT's direct-to-fan store and its distributor so fans in every market can buy. U.S. units are protected by shipping and reporting rules agreed with the distributor in advance, since only eligible sales count toward U.S. charts. Store promotion runs inside the U.S. paid growth line.",
          components: {
            heading: "Decisions Needed From ATTRAKT by Dec 18",
            items: [
              "The U.S. SKUs: standard versions, the photobook versions and whether a limited edition such as a vinyl joins this release",
              "Signed-copy allocation for the U.S. direct store",
              "Distributor contact for U.S. retail and chart reporting",
              "Pre-order open date and price points",
            ],
          },
        },
        {
          label: "C",
          title: "Release-Window Media",
          budget: "About $10,000 of U.S. paid growth",
          objective: "Concentrate paid weight where it converts: pre-save, pre-order and the counting week.",
          strategy: "Release-window media runs in two bursts. The first drives pre-saves and list pre-orders from retargeting pools built in December and January. The second runs the counting week itself, aimed at fans who have engaged but not yet bought, plus geo-weighted support in the markets where radio stations add the single.",
          charts: [
            {
              kind: "bars",
              title: "U.S. Album Units, February EP Release Week",
              subtitle: "Low, expected and high outcomes for the groundwork release.",
              series: [
                {
                  name: "U.S. units",
                  points: [
                    { x: "Low", y: 1500 },
                    { x: "Expected", y: 3000 },
                    { x: "High", y: 5000 },
                  ],
                },
              ],
              highlightX: ["Expected"],
              note: "Expected puts the EP on Billboard's Top Album Sales chart. The Billboard 200 is the target for the following release, built on the list and the baseline this one creates.",
              source: "Crowd Control Digital and Transparent Arts planning ranges from 2026 Billboard chart results",
            },
          ],
        },
      ],
      footnote: "Chart math follows Luminate's published album-equivalent weighting, effective week 1 of 2026. Manufacturing, versions and release timing remain with ATTRAKT.",
    },

    // ===================================================================
    // 08. Workstream 4: U.S. Radio
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Radio",
      title: "Workstream 4 / U.S. Top 40 Radio",
      philosophy: "Radio keeps a song in front of people long after the streaming curve flattens. The lead single is built for it, so it gets a full Top 40 campaign from day one.",
      intro: "Budget: $100,000 for an initial three-month campaign, separate from the core program. Led by Transparent Arts through an independent promoter network, with Crowd Control Digital tying every station market back to the fan list and the paid plan.",
      subBlocks: [
        {
          label: "A",
          title: "Campaign Scope",
          objective: "Secure adds to rotation and weekly spins for the lead single at Top 40 stations nationwide.",
          strategy: "The campaign runs in four parts. Pre-launch sets the radio strategy, prepares the promotional assets, identifies target stations and sets the add schedule against the release. Promotion works program directors, music directors and DJs station by station to secure adds and build weekly spins. Tracking reports adds and spins every week and moves effort to the stations that respond. Artist promotion turns airplay into relationships through interviews, acoustic performances, station visits, custom station IDs and supporting social content, with the two English-speaking members leading on air.",
          components: {
            heading: "Four Parts",
            items: [
              "Pre-launch: radio strategy, promotional assets, station targeting and the add schedule",
              "Radio promotion: program directors, music directors and DJs nationwide",
              "Tracking and reporting: station adds, weekly spin counts and strategy adjustments",
              "Artist promotion: interviews, acoustic sessions, station visits, custom station IDs and social content",
            ],
          },
          timeline: "Pre-launch from mid-January, add date in release week, promotion through mid-April",
        },
        {
          label: "B",
          title: "Phase 1: Promoter and Station Network",
          budget: "$68,000",
          objective: "Coverage across 69 stations, each priced against a committed add to rotation or a set number of weekly spins.",
          strategy: "Phase 1 is the full promoter roster, engaged together so the single reaches every target station inside the same add window. Thirteen independent promoters cover 41 stations at about $1,000 to $1,200 per station. Cumulus Media covers a further 28 stations. National promotion, the All Access trade blast and Suraci's mix-show and remix work sit alongside the station lines.",
          components: {
            heading: "Phase 1 Line Items",
            items: [
              "All Access trade email blast: $500",
              "Danny Cooper: $3,000",
              "Tommy Nappi: $6,000",
              "Jeff Deane, 10 stations: $12,000",
              "Greg Lawley, 6 stations: $7,000",
              "Chuck Field, 6 stations: $7,000",
              "Joe Hecht, 4 stations: $6,000",
              "Joanne Grande, 3 stations: $4,000",
              "Paula Tuggey, 2 stations: $3,000",
              "Steve Zap, 2 stations: $2,000",
              "Bill Rusch, 2 stations: $2,000",
              "Jason McFadden, 2 stations: $2,000",
              "Andy Arnold, 1 station: $1,000",
              "Gary Triozzi, 1 station: $1,000",
              "Ralph Carrol, 1 station: $1,000",
              "Rick Salvador, 1 station: $1,000",
              "Cumulus Media, 28 stations: $3,000",
              "Suraci, mix-show promotion and remixes: $6,500",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Stations Covered by Promoter",
              subtitle: "69 stations in Phase 1.",
              series: [
                {
                  name: "Stations",
                  points: [
                    { x: "Cumulus Media", y: 28 },
                    { x: "Jeff Deane", y: 10 },
                    { x: "Greg Lawley", y: 6 },
                    { x: "Chuck Field", y: 6 },
                    { x: "Joe Hecht", y: 4 },
                    { x: "Joanne Grande", y: 3 },
                    { x: "Paula Tuggey", y: 2 },
                    { x: "Steve Zap", y: 2 },
                    { x: "Bill Rusch", y: 2 },
                    { x: "Jason McFadden", y: 2 },
                    { x: "Andy Arnold", y: 1 },
                    { x: "Gary Triozzi", y: 1 },
                    { x: "Ralph Carrol", y: 1 },
                    { x: "Rick Salvador", y: 1 },
                  ],
                },
              ],
              highlightX: ["Cumulus Media"],
              source: "Transparent Arts radio plan, November 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Full Campaign Budget",
          budget: "$100,000",
          objective: "Phase 1 coverage, follow-through in months two and three, and campaign management for the full run.",
          strategy: "$68,000 funds the Phase 1 network above. $7,000 funds months two and three: follow-up promotion to the stations that add, continued mix-show rotation and promotion to stations that come in late. $25,000 covers radio strategy, campaign management and reporting for the full three months: the add schedule, coordination across every promoter, artist promotion scheduling, spin tracking and the weekly radio report. $60,000 is needed at the start of pre-launch to secure the roster, with the remaining $40,000 due at the week six review.",
          components: {
            heading: "Budget",
            items: [
              "Phase 1 promoter and station network: $68,000",
              "Months two and three, follow-through and late adds: $7,000",
              "Radio strategy, campaign management and reporting, three months: $25,000",
              "Total: $100,000",
            ],
          },
        },
        {
          label: "D",
          title: "How Radio Connects to the Rest of the Plan",
          objective: "Make every radio market feed the fan list and the release week.",
          strategy: "Each station that adds the single becomes a target market for the paid plan. U.S. growth and release-window media are weighted toward those markets in the weeks after an add, and capture units in those markets carry a radio-specific reason to join. Station interviews and IDs are cut into short-form posts. Shazam activity is tracked by market as the earliest read on whether airplay is turning into discovery.",
          kpis: [
            "Station adds against the add schedule",
            "Weekly spins and audience reached",
            "Mediabase Top 40 and Billboard Pop Airplay chart positions",
            "Shazam lookups and fan-list signups in radio markets",
          ],
        },
      ],
      footnote: "Artist travel, accommodation and promotional dinners for station visits are budgeted separately. If the single gains traction, a second budget can extend station coverage and sustain momentum, approved on the same structure.",
    },

    // ===================================================================
    // 09. Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "09",
      navLabel: "Flight",
      title: "Core Program Media Flight",
      intro: "The $50,000 of working media in three phases. December and January stay lean: they test, build the list and set up the release. More than 70 percent of the media is spent in the release window, when the single is out and every dollar can turn into a stream, a follow, a signup or a sale.",
      totalBudget: "$50,000",
      phases: [
        {
          label: "Phase 1 / Foundation and Test",
          window: "Dec 7 to Jan 3 / 4 weeks",
          focus: "Routing fixed, capture stack live, baselines locked. Small tests on all three platforms to read real cost per fan and cost per follower before anything scales.",
          budget: "$5,000",
          tactics: [
            "Fan-data capture test units: $2,500",
            "U.S. paid growth test across Instagram, TikTok and YouTube: $2,500",
          ],
        },
        {
          label: "Phase 2 / Pre-Release Setup",
          window: "Jan 4 to Feb 7 / 5 weeks",
          focus: "Kept lean on purpose. Scale only what cleared its target at the first checkpoint, build the retargeting pools the release will use, and open pre-save and the list pre-order.",
          budget: "$10,000",
          tactics: [
            "Fan-data capture, pre-save and list pre-order: $5,000",
            "U.S. paid growth on the winning platforms, including pre-order store promotion: $5,000",
          ],
        },
        {
          label: "Phase 3 / Release Window",
          window: "Feb 8 to Mar 6 / 4 weeks",
          focus: "The single is out and most of the budget goes live. Paid and capture concentrate on the counting week, then hold the new listeners. Paid weighted toward radio markets after each add.",
          budget: "$35,000",
          tactics: [
            "Fan-data capture with a release-week reason to join: $17,500",
            "U.S. paid growth, counting-week push and retargeting of new listeners: $10,000",
            "U.S. paid growth, always-on and radio-market weighted: $7,500",
          ],
        },
      ],
      footnote: "Phase budgets are directional. The team reallocates weekly between lines and phases based on results, inside the $50,000 total. We expect to recommend additional spend around the February EP release once December and January show what is working. Any recommendation comes with the data behind it and goes to ATTRAKT for approval before anything is spent.",
    },

    // ===================================================================
    // 10. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "10",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Thirteen weeks from December 7 to March 6. Release week is penciled for the week of February 8 and the grid shifts with the confirmed date. Weeks five and nine are checkpoints with the authority to move or stop budget.",
      weeks: [
        { index: 1, label: "W1", dates: "Dec 7" },
        { index: 2, label: "W2", dates: "Dec 14" },
        { index: 3, label: "W3", dates: "Dec 21" },
        { index: 4, label: "W4", dates: "Dec 28" },
        { index: 5, label: "W5", dates: "Jan 4", highlight: true, note: "CHECKPOINT" },
        { index: 6, label: "W6", dates: "Jan 11" },
        { index: 7, label: "W7", dates: "Jan 18" },
        { index: 8, label: "W8", dates: "Jan 25" },
        { index: 9, label: "W9", dates: "Feb 1", highlight: true, note: "CHECKPOINT" },
        { index: 10, label: "W10", dates: "Feb 8", highlight: true, note: "RELEASE (TBD)" },
        { index: 11, label: "W11", dates: "Feb 15" },
        { index: 12, label: "W12", dates: "Feb 22" },
        { index: 13, label: "W13", dates: "Mar 1", highlight: true, note: "REVIEW" },
      ],
      workstreams: [
        {
          name: "Fan Data",
          cells: [
            { weekIndex: 1, intensity: "high", label: "FIX" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "medium", label: "TEST" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "PREORD" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "LAUNCH" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
            { weekIndex: 13, intensity: "medium", label: "EXPORT" },
          ],
        },
        {
          name: "U.S. Paid",
          cells: [
            { weekIndex: 2, intensity: "low", label: "TEST" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 5, intensity: "low", label: "SCALE" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "medium" },
          ],
        },
        {
          name: "Content",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "PLAN" },
            { weekIndex: 2, intensity: "high", label: "GAMING" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high", label: "TEASER" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "MEMBER" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "RELEASE" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "medium" },
          ],
        },
        {
          name: "Physical",
          cells: [
            { weekIndex: 2, intensity: "low", label: "SKUS" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "RETAIL" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "high", label: "LIST" },
            { weekIndex: 9, intensity: "high", label: "PUBLIC" },
            { weekIndex: 10, intensity: "high", label: "COUNT" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low", label: "SIGNED" },
          ],
        },
        {
          name: "Radio",
          cells: [
            { weekIndex: 6, intensity: "medium", label: "PREP" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "high", label: "SERVICE" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "ADDS" },
            { weekIndex: 11, intensity: "high", label: "PROMO" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Kickoff and routing fix",
          items: [
            "Kickoff call with ATTRAKT, account access confirmed, live dashboard set up.",
            "Every owned link surface repointed to the capture destination.",
            "Baselines locked: Spotify followers, U.S. Instagram and YouTube, median views per post.",
            "Content plan delivered with the weekly gaming slot.",
          ],
        },
        {
          weekIndex: 2,
          title: "Capture stack live and paid tests begin",
          items: [
            "Email, SMS and Instagram DM capture live with bilingual signup pages and the welcome sequence.",
            "Small paid tests start on Instagram, TikTok and YouTube.",
            "U.S. SKU and pre-order decisions confirmed with ATTRAKT.",
          ],
        },
        {
          weekIndex: 4,
          title: "Holiday hold",
          items: [
            "Spend held low through the holiday week, when ad costs peak and attention drops.",
            "Organic content and capture keep running.",
            "Test results compiled for the first checkpoint.",
          ],
        },
        {
          weekIndex: 5,
          title: "Checkpoint 1: scale or stop",
          items: [
            "Cost per fan and cost per follower read against targets, by platform.",
            "Budget moved to what cleared its target. Anything below its floor is stopped.",
            "Release date and single delivery confirmed. U.S. retail plan opened with the distributor.",
          ],
        },
        {
          weekIndex: 6,
          title: "Single teaser and radio pre-launch",
          items: [
            "Single teaser and pre-save live, with the capture link as the destination.",
            "Radio pre-launch begins: station targeting, assets and the add schedule. $60,000 radio start payment.",
          ],
        },
        {
          weekIndex: 8,
          title: "Pre-order opens to the list",
          items: [
            "List members get 48 hours of first access to the EP pre-order.",
            "Rotating daily member posts begin and run through release.",
            "Single serviced to radio ahead of the add date.",
          ],
        },
        {
          weekIndex: 9,
          title: "Checkpoint 2: release lock",
          items: [
            "Public pre-order live. Pre-order units read against the release-week targets.",
            "Counting-week media plan locked against the confirmed release date.",
            "Recommendation on additional release-window spend, sized from cost per fan and pre-order data, for ATTRAKT to approve.",
            "Radio add schedule confirmed station by station.",
          ],
        },
        {
          weekIndex: 10,
          title: "Release week",
          items: [
            "EP out. Most of the media budget goes live: list sends on day one and day four, paid concentrated on the counting week.",
            "Radio add date: Phase 1 stations add the single.",
            "Paid weighted toward the markets of each station that adds.",
          ],
        },
        {
          weekIndex: 11,
          title: "Hold the new listeners",
          items: [
            "Retargeting of release-week listeners into follows and list signups.",
            "Station interviews, IDs and acoustic sessions scheduled and cut for social.",
            "Radio week six review and the remaining $40,000 radio payment.",
          ],
        },
        {
          weekIndex: 13,
          title: "Cycle review",
          items: [
            "Full report against every target, with attribution stated plainly.",
            "Fan list exported to ATTRAKT, enriched and tagged.",
            "U.S. sales baseline and cost per fan used to size the next release and the chart push, with the budget to fund it.",
            "Radio continues through mid-April on its own three-month run.",
          ],
        },
      ],
      footnote: "Release week, single delivery and radio add dates are planning dates until ATTRAKT confirms them. The radio campaign runs three months from pre-launch and continues past this window.",
    },

    // ===================================================================
    // 11. Targets
    // ===================================================================
    {
      type: "targets",
      number: "11",
      navLabel: "Targets",
      title: "90-Day Targets",
      intro: "What this cycle is measured on. Baselines are locked in week 1 and every target is reported weekly on the live dashboard.",
      targets: [
        {
          metric: "U.S. fan list",
          baseline: "No owned U.S. list",
          target: "15,000 identified fans (low 8,000, high 25,000)",
          window: "By Mar 6",
          measurement: "Records on file in the label-owned capture account",
          featured: true,
        },
        {
          metric: "Cost per fan, paid capture",
          baseline: "Set by the December test",
          target: "Under $2.00",
          window: "From checkpoint 1",
          measurement: "Capture media spend divided by paid signups",
        },
        {
          metric: "Spotify followers",
          baseline: "About 1,048 net adds a day",
          target: "115,000 net adds (low 90,000, high 140,000)",
          window: "90 days",
          measurement: "Chartmetric daily follower series",
          featured: true,
        },
        {
          metric: "Instagram followers",
          baseline: "962,000",
          target: "+45,000 (low +15,000, high +80,000)",
          window: "90 days",
          measurement: "Platform analytics, U.S. share reported separately",
        },
        {
          metric: "Median views per post",
          baseline: "94,100",
          target: "125,000 (high 150,000)",
          window: "Final four weeks",
          measurement: "Median across Instagram and TikTok posts in the window",
        },
        {
          metric: "U.S. album units, release week",
          baseline: "No U.S. baseline for the current lineup",
          target: "3,000 (low 1,500, high 5,000)",
          window: "Counting week",
          measurement: "Luminate U.S. album sales",
          featured: true,
        },
        {
          metric: "Radio station adds",
          baseline: "69 stations targeted",
          target: "Adds across the Phase 1 network, reported against the add schedule",
          window: "From the add date",
          measurement: "Mediabase station reports",
        },
        {
          metric: "Weekly radio spins",
          baseline: "Set at the add date",
          target: "Week over week growth through month two",
          window: "Three-month radio run",
          measurement: "Mediabase spin counts and Pop Airplay chart position",
        },
      ],
      measurementPrinciples: [
        "Every target has a low, expected and high case agreed before launch.",
        "Streaming is worked and reported weekly, not promised.",
        "Attribution is stated plainly, including what cannot be attributed.",
      ],
      footnote: "Targets for the next release, including the Billboard 200 push, are set from what this cycle measures.",
    },

    // ===================================================================
    // 12. Inputs and Reporting
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Working Together",
      title: "Inputs, Roles and Reporting",
      philosophy: "One team, one weekly call, one report.",
      subBlocks: [
        {
          label: "A",
          title: "What We Need From ATTRAKT",
          objective: "The inputs that keep the schedule on time, with the date each one is needed.",
          components: {
            heading: "Inputs and Dates",
            items: [
              "Admin or advertiser access to Instagram, TikTok, YouTube and Spotify for Artists: by Dec 4",
              "Approval of the link-surface changes and the capture destination copy: by Dec 7",
              "U.S. SKUs, photobook versions, signed-copy allocation and pre-order dates: by Dec 18",
              "Distributor contact for U.S. retail and chart reporting: by Dec 18",
              "Confirmed release date and lead single title: by Jan 4",
              "Final master, clean edit and radio edit of the lead single for radio servicing: by Jan 11",
              "Teaser, artwork and member content for the pre-order window: by Jan 18",
              "Interview and session availability for the two English-speaking members in the release window",
            ],
          },
        },
        {
          label: "B",
          title: "Roles",
          objective: "Who leads what.",
          components: {
            items: [
              "Transparent Arts: relationships, U.S. radio, press, partnerships and the industry surface",
              "Crowd Control Digital: fan data, paid media, content plan, creative testing, data and reporting",
              "ATTRAKT: music, A&R, manufacturing, release timing, artist schedules and every artist decision",
            ],
          },
        },
        {
          label: "C",
          title: "Reporting and Checkpoints",
          objective: "What ATTRAKT sees, and when.",
          components: {
            items: [
              "A live dashboard updated daily: fan list, cost per fan, followers, spend by line and radio adds and spins",
              "A weekly call with a written summary in English and Korean",
              "Checkpoint reviews in weeks five and nine with a scale-or-stop decision on every line",
              "A full cycle review in week thirteen, with the plan and budget for the next release",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // 13. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "13",
      navLabel: "Investment",
      title: "Investment",
      intro: "Two budgets for the February cycle: the core program and the U.S. radio campaign. Each shows exactly what goes in market and what goes to the team.",
      ccdNote: "The team fee is a retainer of $10,000 a month for three months plus 15 percent of the media the team manages. The retainer covers strategy, the capture build, the content plan, creative testing, the live dashboard and weekly reporting. The $50,000 of core program media is billed at cost. Fixing the group's link surfaces is part of the retainer and uses no media budget.",
      breakdownLabel: "Where the budget goes",
      deployableLabel: "In market",
      tiers: [
        {
          label: "Core Program",
          budget: "$87,500",
          name: "90 Days, Dec 7 to Mar 6",
          tagline: "Fan data and U.S. growth, built around the February EP release window.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "Fan-data capture media", amount: "$25,000" },
            { vertical: "U.S. paid growth media", amount: "$25,000" },
            { vertical: "Retainer, 3 months", amount: "$30,000" },
            { vertical: "Media management, 15%", amount: "$7,500" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "$10,000 per month for the 90-day program.",
            retainerLabel: "Retainer",
            mediaManagement: "$7,500",
            mediaManagementDetail: "15 percent of $50,000 in managed media.",
            mediaManagementLabel: "Managed media fee",
          },
        },
        {
          label: "U.S. Radio",
          budget: "$100,000",
          name: "3 Months From Pre-Launch",
          tagline: "Top 40 promotion across 69 stations, with campaign management and weekly reporting.",
          deployable: "$75,000",
          breakdown: [
            { vertical: "Phase 1 promoter and station network", amount: "$68,000" },
            { vertical: "Months two and three, follow-through", amount: "$7,000" },
            { vertical: "Radio strategy, management and reporting", amount: "$25,000" },
          ],
        },
      ],
      footnote: "Core program total: $87,500. Radio total: $100,000, with $60,000 due at pre-launch and $40,000 at the week six review. Combined February cycle: $187,500. Manufacturing, artist travel, accommodation and promotional dinners sit outside both budgets. Each later release cycle is authorized as its own budget on the same structure. We expect to recommend additional spend around the February EP release once December and January show what is working. Any recommendation comes with the data behind it and goes to ATTRAKT for approval before anything is spent.",
    },
  ],
};
