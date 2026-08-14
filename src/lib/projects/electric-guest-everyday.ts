import type { ProjectData } from "../project-context";

export const electricGuestEveryday: ProjectData = {
  requireNda: false,
  accentColor: "#FD3737",

  client: {
    name: "Electric Guest",
    logo: "",
    contactName: "Gabe Lister",
    contactRole: "Independent Co.",
    contactEmail: "",
    industry: "Music / Alternative / Hip-Hop Crossover",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "EVERYDAY (FEAT. LA REEZY)",
    tagline:
      "A $2,500 release flight for Electric Guest's \"Everyday\" featuring La Reezy, out August 28. Every dollar is working media with no Crowd Control fee. The goal is a clean, funded answer to one question: do hip-hop-adjacent audiences convert for Electric Guest, and at what cost.",
    type: "Release Flight + Content Strategy",
    startDate: "August 18, 2026",
    endDate: "September 12, 2026",
    duration: "4 Weeks",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Flight",
    subtitle: "Two weeks in, two weeks out, one question answered.",
    imageCaption: "Everyday (feat. La Reezy) / August 28",
    summary:
      "\"Everyday\" is track nine on 10K (Deluxe), live since June 5. This release gives it a second life with a verse from La Reezy, a 2026 XXL Freshman out of New Orleans. The two audiences do not currently touch: Electric Guest lives on Feel-Good Indie Rock and Indie Rock Road Trip, La Reezy lives on Fresh Finds Hip-Hop, Mellow Bars and The Flow. That gap is the whole opportunity and the whole risk, which is why this budget is built around a single funded head-to-head rather than spread thin across five channels. Crowd Control runs the flight at no fee. The full $2,500 goes to platforms and DSP placement across Meta, YouTube, TikTok and Spotify, with a reserve held back until a hard decision point on September 2. Alongside the paid, the content plan ships in three tiers so the campaign runs at full strength on static art alone and gets better the moment either artist hands over anything more.",
    objectives: [
      "Test the crossover with real money instead of a hunch. Two Meta cells funded at parity, one against Electric Guest's own audience and one against La Reezy's adjacency cluster, with the action pre-committed before the data lands.",
      "Protect the 10K long tail. This is an album cut getting a second release moment, so every dollar spent on it should also feed catalog discovery and the Spotify follow and save behaviour built up since June.",
      "Ship a content system that survives the asset reality. Three tiers, floor to upside, built so nothing in the plan is blocked waiting on a shoot that may not happen.",
      "Come out of it with a number nobody currently has: what share of \"Everyday\" listeners have never streamed 10K. That is the crossover metric, it is readable in Spotify for Artists, and it decides where the fall budget goes.",
    ],
    stats: [
      {
        value: 100,
        suffix: "%",
        label: "Of Budget Is Working Media",
        description: "No Crowd Control fee on this flight. All $2,500 goes to platforms and DSP placement.",
      },
      { value: 4, label: "Channels Live" },
      { value: 3, label: "Content Tiers" },
      { value: 2, label: "Meta Cells At Parity" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before allocating a dollar we audited the track's existing streaming history, both artists' editorial footprints, the listener adjacency around La Reezy, and Electric Guest's own paid benchmarks across the 10K cycle. Five findings shaped this plan.",
    insights: [
      {
        label: "The Track Already Has History",
        finding:
          "\"Everyday\" is track nine on 10K (Deluxe), released June 5. This is a feature version of a record that has been live for twelve weeks, so it starts with playlist context, catalog adjacency and an existing listener base rather than from zero. That is an advantage on retention and a constraint on novelty, and the plan is built for both.",
        source: "Spotify catalog audit",
      },
      {
        label: "The Asymmetry Runs Backwards",
        finding:
          "Electric Guest sits at 1.25M monthly listeners and 374K followers. La Reezy sits at 128K and 39K. On raw reach the feature is a step down. On cultural position it is a step up: 2026 XXL Freshman, Camp Flog Gnaw, a Little Simz support run at the Hollywood Palladium, and public co-signs from Kendrick Lamar, Tyler, the Creator, J. Cole and Nas. What is being traded here is credibility, not audience size, and the media plan should follow the credibility.",
        source: "Spotify, XXL, Pitchfork, NME",
      },
      {
        label: "Two Audiences That Never Touch",
        finding:
          "The editorial surfaces do not overlap at all. Electric Guest sits on Feel-Good Indie Rock and Indie Rock Road Trip. La Reezy sits on Fresh Finds Hip-Hop, Mellow Bars, The Flow and Northern Bars. There is no shared listener pool to lean on, which is exactly why this is worth testing with funded spend rather than assuming it works.",
        source: "Spotify editorial placement audit",
      },
      {
        label: "The Target Cluster Is Mappable",
        finding:
          "La Reezy's listener adjacency resolves to a specific, targetable set rather than a vague genre guess: Chris Patrick at 257K monthly listeners and a fellow 2026 XXL Freshman, reggie at 153K, Ovrkast. at 146K, plus MARCO PLUS, SWAVAY and Kaicrewsade. This is the interest cluster the cold cell gets built against.",
        source: "Spotify related-artist mapping",
      },
      {
        label: "The Constraint Is Assets, Not Budget",
        finding:
          "Across the whole 10K cycle the recurring blocker has been fresh artist content rather than spend, and the account has separately proved that deliberately raw phone footage outperforms produced assets here. The content plan is therefore tiered and built to run at full strength on static art, with everything else treated as upside rather than a dependency.",
        source: "10K campaign history",
      },
    ],
    marketContext:
      "The release lands twelve weeks into the 10K (Deluxe) cycle with paid running flat and no fresh moment on the calendar. La Reezy plays Colours Hoxton in London on September 1 and Helios 37 in Cologne on September 7, four and ten days after release, on a run supporting Samara Cyn. That puts a live European window inside the flight, and it is the cheapest content and geo signal available anywhere in this campaign.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Two separate rooms. This flight is designed to work one hard and open the other, and to tell the difference between them.",
    demographics:
      "Electric Guest's core sits 25 to 45, US, UK and Australia led, indie and alt-pop native. La Reezy's sits 18 to 28, US led, alternative hip-hop native. Today there is effectively no overlap between them.",
    demographicCards: [
      { label: "Electric Guest", value: "1.25M monthly", detail: "374K Spotify followers" },
      { label: "La Reezy", value: "128K monthly", detail: "39K Spotify followers" },
      { label: "Core Geo", value: "US, UK, AU", detail: "Canada and Mexico tested and cut" },
      { label: "Overlap Today", value: "Effectively none", detail: "No shared editorial playlists" },
    ],
    personas: [
      {
        name: "The 10K Holdover",
        ageRange: "25-40",
        description:
          "Came in on ETR or the deluxe and has been streaming steadily since June. Knows the album, follows the band, and has not been given a reason to come back in six weeks.",
        traits: ["Album Streamer", "Spotify Follower", "Low Social Engagement", "Cheap To Retarget"],
      },
      {
        name: "The Fresh Finds Regular",
        ageRange: "18-28",
        description:
          "Lives in Mellow Bars, Fresh Finds Hip-Hop and The Flow. Follows La Reezy, Ovrkast. and Chris Patrick, and has never knowingly heard an Electric Guest song. Will click a rap feature and judge it inside four seconds.",
        traits: ["Playlist Native", "Feature Chaser", "Comment Heavy", "Cold To EG"],
      },
      {
        name: "The Catalog Lurker",
        ageRange: "28-45",
        description:
          "Knows \"This Head I Hold\" and \"Oh Devil\" from the 2012 to 2017 run and has not checked in since. Sits in the retargeting pool as a lapsed high-intent listener who needs a reason, not an introduction.",
        traits: ["Nostalgia Trigger", "Lapsed Listener", "High Save Rate", "Low CPM"],
      },
    ],
    psychographics: [
      "The hip-hop side buys the feature before the song. Who is on it is what decides whether the four-second scroll stops.",
      "The Electric Guest side buys the band, not the single. Catalog affinity is why they press play, which means a feature needs framing rather than a hard sell.",
      "Both sides read polish as advertising. Raw reads as real, and this account has now confirmed that three separate times.",
      "Verse-level lyricism is La Reezy's entire proposition. His audience engages with words, which makes text-forward creative unusually cheap and unusually effective here.",
    ],
    painPoints: [
      "Electric Guest has gone six weeks without a fresh moment while paid runs flat.",
      "A feature version of an album track reads as a repackage unless the collaboration is made legible fast.",
      "Neither fanbase has been given a reason to care about the other.",
      "The content pipeline has stalled on artist availability more than once this cycle.",
    ],
    purchaseTriggers: [
      "Both artists visibly in one frame. This is the single asset that makes the collaboration legible in one scroll.",
      "The verse itself, pulled out and shown as text over the audio.",
      "A cross-post from La Reezy's own accounts, which is free reach into the exact audience the cold cell is paying for.",
      "Live proof from the London and Cologne dates, which fall inside the flight window.",
    ],
    platforms: [
      {
        name: "Instagram and Meta",
        description:
          "Where the head-to-head runs. Electric Guest's own pool has delivered a 3.5% to 4% blended CTR at $0.12 CPC across this cycle, which gives the cold cell a real benchmark to be judged against rather than a guess.",
      },
      {
        name: "YouTube",
        description:
          "The cheapest proven unit on this account at roughly $0.01 per view and a 58% to 75% view rate. The visual has carried consistently on this platform across the entire 10K campaign.",
      },
      {
        name: "TikTok",
        description:
          "The only surface where a rap feature can break without spend behind it. Funded here as a probe with a real kill condition rather than dressed up as a channel.",
      },
      {
        name: "Spotify",
        description:
          "374K existing Electric Guest followers, plus a documented follow-without-stream gap from the deluxe cycle that release-week placement is pointed directly at.",
      },
    ],
    quotes: [
      {
        text: "I always envisioned rapping as being an activist. A rap-tivist, actually.",
        source: "La Reezy, Okayplayer, February 2026",
      },
      {
        text: "La Reezy makes hip-hop full of heart and humanity.",
        source: "NME Radar, April 2026",
      },
      {
        text: "Backed by co-signs from Kendrick Lamar, Tyler, the Creator, J. Cole, Nas, Jon Batiste, and more, he is emerging as a defining voice in the next era of hip-hop.",
        source: "La Reezy, Spotify artist biography",
      },
    ],
  },

  targets: [
    {
      metric: "Crossover Share",
      value: "25%+",
      context:
        "Share of \"Everyday\" listeners in the flight window with no prior 10K stream. This is the north star and the number that sets the fall budget.",
    },
    {
      metric: "Cold Cell CTR",
      value: "3.5%+",
      context:
        "The La Reezy adjacency cell has to hold close to the benchmark Electric Guest's own audience already delivers on this account, or it fails honestly and we say so.",
    },
    {
      metric: "YouTube Cost Per View",
      value: "$0.012 or under",
      context:
        "The account has run at roughly $0.01 with a 58% to 75% view rate across the 10K cycle. A colder, rap-adjacent audience should cost slightly more, not multiples more.",
    },
    {
      metric: "Net New Spotify Followers",
      value: "+3,000",
      context:
        "Followers, not streams. Streams end with the flight. Followers carry into whatever comes next in the cycle.",
    },
  ],

  mediaFlight: {
    heading: "The Media Flight",
    subheading:
      "Every dollar is working media and Crowd Control takes no fee. Four channels, one funded head-to-head, and a hard decision point on September 2 that moves the reserve into whatever is winning.",
    goal: { views: "~10,000", window: "4 Weeks", blendedCpv: "$0.12", totalBudget: "$2,500" },
    goalLabels: {
      views: "Planned Meta Clicks",
      window: "Flight Window",
      blendedCpv: "Planning CPC",
      totalBudget: "Working Media",
    },
    cpvRowLabel: "Planning Cost",
    dialUnit: "outcome",
    dialSubheading:
      "What each budget level actually buys. The recommendation is the level where the crossover read is trustworthy.",
    tracks: [
      {
        key: "Meta / Cell A. Electric Guest Pool",
        role: "The Control",
        budget: "$600",
        budgetPct: "24% of budget",
        cpv: "~$0.12 / click",
        views: "~5,000 clicks",
        viewsPct: "50% of Meta",
        markets: "US, UK and Australia. Retargeting off the 10K cycle pixel plus a follower lookalike.",
        mix: "Dark posts, 9:16 and 1:1",
        rationale:
          "The known quantity, and that is precisely why it belongs in the test. This audience has delivered 3.5% to 4% CTR at $0.12 all cycle. Without a funded control running at the same time, there is nothing to judge the cold cell against.",
      },
      {
        key: "Meta / Cell B. La Reezy Adjacency",
        role: "The Test",
        budget: "$600",
        budgetPct: "24% of budget",
        cpv: "~$0.12 to $0.18 / click",
        views: "~3,500 to 5,000 clicks",
        viewsPct: "50% of Meta",
        markets:
          "US, UK and Australia. Interest cluster built on Chris Patrick, reggie, Ovrkast., MARCO PLUS, SWAVAY and Kaicrewsade, plus a La Reezy engager lookalike.",
        mix: "Dark posts, feature-forward creative, 9:16 and 1:1",
        rationale:
          "The entire thesis, funded at parity with the control so the read is honest. Cold audiences run more expensive by default, so this cell is judged on whether it holds close to the control's CTR, not on beating it.",
      },
      {
        key: "YouTube",
        role: "Volume Engine",
        budget: "$600",
        budgetPct: "24% of budget",
        cpv: "~$0.012 / view",
        views: "~50,000 views",
        viewsPct: "Cheapest unit on the account",
        markets: "US, UK and Australia. In-feed and Shorts led.",
        mix: "Motion-from-static or visualizer, plus the verse cut",
        rationale:
          "The most reliable line in the plan. Across the entire 10K cycle this account has run at roughly $0.01 per view with a 58% to 75% view rate, which means the visual carries here even in weeks when nothing else moves.",
      },
      {
        key: "TikTok",
        role: "Probe",
        budget: "$300",
        budgetPct: "12% of budget",
        cpv: "Judged on watch-through",
        views: "Break or die",
        viewsPct: "Kill date September 2",
        markets: "US led, spark-eligible organic first",
        mix: "Spark ads applied behind whatever posts organically best",
        rationale:
          "The only surface where a rap feature can move without spend behind it. Funded honestly as a probe with a hard kill date rather than presented as a channel. If nothing organic clears the bar by September 2, the money moves to YouTube.",
      },
      {
        key: "Spotify Release-Week Placement",
        role: "DSP Conversion",
        budget: "$250",
        budgetPct: "10% of budget",
        cpv: "~6.5% conversion",
        views: "374K follower pool",
        viewsPct: "Release week only",
        markets: "US, UK and Australia",
        mix: "Full-screen sponsored recommendation",
        rationale:
          "Proven on this exact artist at 6.5% conversion and 9.1% intent during the deluxe cycle. It reaches people who already know Electric Guest, so it serves the catalog and retention objective rather than the crossover one, and it is the highest-certainty spend in the plan.",
      },
      {
        key: "Reserve",
        role: "Held",
        budget: "$150",
        budgetPct: "6% of budget",
        cpv: "Allocated September 2",
        views: "Winner takes it",
        viewsPct: "Unallocated at launch",
        markets: "Follows the data",
        mix: "Whichever cell wins",
        rationale:
          "Deliberately unspent until the September 2 read. Committing the action in advance, and holding money back to fund it, is what keeps a test from turning into a story told after the fact.",
      },
    ],
    dial: [
      {
        label: "Lean",
        budget: "$1,500",
        views: "Directional only",
        split: "$800 Meta / $450 YouTube / $250 Spotify",
        note:
          "Both Meta cells drop to $400, which is under the threshold where a cold-audience read can be trusted. TikTok comes out entirely. Cheaper, and the answer gets considerably softer.",
      },
      {
        label: "As Scoped",
        budget: "$2,500",
        views: "A clean read",
        split: "$1,200 Meta / $600 YouTube / $300 TikTok / $250 Spotify / $150 held",
        note:
          "Enough to answer the crossover question with confidence and keep the catalog warm alongside it. It will not create a moment on its own, and this plan does not claim otherwise.",
        featured: true,
      },
      {
        label: "Stretch",
        budget: "$5,000",
        views: "A read plus real reach",
        split: "$2,400 Meta / $1,200 YouTube / $600 TikTok / $500 Spotify / $300 creator seeding",
        note:
          "Doubles both cells so the crossover read holds at segment level rather than in aggregate, funds TikTok past probe stage, and adds a hip-hop creator seeding line. This is the version that could make the release a moment rather than a measurement.",
      },
    ],
    exclusions: [
      "Canada excluded. Tested this cycle, ate spend, produced no streaming lift.",
      "Mexico excluded. Dedicated breakout campaign killed in June on CTR cost.",
      "No traffic-objective campaigns. Conversion and pixel-based only.",
      "No cross-cell optimisation before September 2. Optimising a test while it runs destroys the read.",
      "No cheap-region volume padding. Geo held to US, UK and Australia.",
    ],
    caveat: {
      heading: "What $2,500 Buys, And What It Does Not",
      body:
        "This budget is enough to answer one question properly. It is not enough to manufacture a moment around a track that has been live since June. Spread across five channels it would produce five numbers all too small to act on, which is why the plan concentrates on a single funded head-to-head and treats everything else as either a proven floor or an honest probe. The output that matters here is not the stream count. It is knowing, by September 2, whether hip-hop-adjacent audiences convert for Electric Guest at a cost worth paying, because that answer is what sets the fall budget.",
    },
    pacingNote:
      "Pacing: campaigns build the week of August 18 and go live August 26 to warm delivery ahead of release, then run at full weight from release day. Both Meta cells hold at parity through September 2 with no optimisation between them. Spotify placement fires release week only. The September 2 review kills the losing cell, allocates the reserve, and decides TikTok's fate.",
  },

  competitive: {
    summary:
      "This is not a field of rivals. It is the lane the cold cell buys into. These are the artists La Reezy's listeners already follow, with their real monthly listener counts, and together they form the interest cluster Cell B gets built against. The gap column is what Electric Guest brings to that room that none of them do.",
    competitors: [
      {
        name: "Chris Patrick, 257.2K Monthly Listeners",
        strength:
          "Fellow 2026 XXL Freshman with a Scary Movie 6 soundtrack placement and a PARTYNEXTDOOR support date. Appears directly in La Reezy's related-artist set.",
        gap: "Pure hip-hop positioning with no alt or indie crossover. An Electric Guest feature reaches his audience through a door none of his peers are currently using.",
      },
      {
        name: "reggie, 152.8K Monthly Listeners",
        strength:
          "Thundercat and Jay Electronica features, a 15.7M-stream lead record, and deep credibility across the alternative hip-hop lane.",
        gap: "Already proves this audience will follow a rapper into left-field production. That is precisely the behaviour this release is betting on.",
      },
      {
        name: "Ovrkast., 146K Monthly Listeners",
        strength:
          "Oakland producer and rapper with Drake, Earl Sweatshirt and MAVI placements, and an 8.7M-stream catalog record.",
        gap: "Shares Mellow Bars and Fresh Finds Hip-Hop with La Reezy, the two editorial surfaces most likely to carry a feature version of this track.",
      },
      {
        name: "Kaicrewsade, 51.1K Monthly Listeners",
        strength:
          "Chicago, with Jazz Rap and Alternative Hip-Hop placements, a Noname support date, and a listing inside La Reezy's own related artists.",
        gap: "The smaller, cheaper end of the cluster. Useful as the low-cost edge of Cell B's targeting and a fast early signal on whether the lane responds at all.",
      },
    ],
  },

  timelineHeading: "Flight Plan",
  timelineSubheading:
    "Four weeks from build to report, structured around a single decision point on September 2.",
  timelineImageCaption: "4 Weeks / 4 Channels / 1 Decision",
  deliverablesSubheading:
    "What Crowd Control builds and runs. The flight table above is the money and the math. This is the machine that spends it.",

  timeline: [
    {
      phase: "Build",
      week: "Aug 18-25",
      date: "August 18-25",
      status: "upcoming" as const,
      tasks: [
        "Meta structure built with both cells at parity, pixel and conversion events confirmed against the existing 10K setup",
        "Cell B interest cluster assembled from the La Reezy adjacency map, plus an engager lookalike",
        "Creative cut to whichever asset tier is confirmed, delivered 9:16 and 1:1 across every unit",
        "La Reezy team alignment on cross-posting, tagging and shared assets",
        "Laylo capture and pre-save routing live",
      ],
    },
    {
      phase: "Pre-Release",
      week: "Aug 26-27",
      date: "August 26-27",
      status: "upcoming" as const,
      tasks: [
        "Ads live at partial weight to warm delivery ahead of release day",
        "Announce post on both artist accounts, cross-tagged",
        "Verse-forward organic teases posted unboosted to identify the winning creative before spend goes behind it",
        "YouTube flight opens with bidding set to avoid the delivery wall hit earlier in this cycle",
      ],
    },
    {
      phase: "Release Week",
      week: "Aug 28 - Sept 2",
      date: "August 28 - September 2",
      status: "upcoming" as const,
      tasks: [
        "Full weight across all four channels from release day",
        "Spotify release-week placement fires against the existing follower base",
        "TikTok spark spend applied to whatever organic post performs best",
        "Daily reads on both Meta cells with no cross-cell optimisation, protecting the integrity of the test",
        "September 2 decision: losing cell killed, reserve allocated, TikTok kept or cut",
      ],
    },
    {
      phase: "Sustain and Report",
      week: "Sept 3-12",
      date: "September 3-12",
      status: "upcoming" as const,
      tasks: [
        "Remaining budget concentrated behind the winning cell",
        "London on September 1 and Cologne on September 7 captured for content and read as a UK and DE geo signal",
        "Spotify reactivation ad against listeners who followed without streaming",
        "Crossover report delivered with the fall recommendation attached",
      ],
    },
  ],

  deliverables: [
    {
      category: "Paid Media",
      icon: "target",
      items: [
        {
          name: "Meta Crossover Test",
          quantity: "2 cells",
          description:
            "Electric Guest retargeting and lookalike against a La Reezy adjacency cold audience, funded at parity and run as a genuine head-to-head with the action pre-committed.",
        },
        {
          name: "YouTube Flight",
          quantity: "1 campaign",
          description:
            "In-feed and Shorts against the account's proven $0.01 per view and 58% to 75% view-rate benchmark.",
        },
        {
          name: "TikTok Spark Probe",
          quantity: "1 campaign",
          description:
            "Spend applied behind the best-performing organic post, with a hard kill date of September 2 and the budget reallocated if it does not clear.",
        },
        {
          name: "Spotify Release-Week Placement",
          quantity: "1 placement",
          description:
            "Full-screen sponsored recommendation against the 374K existing follower base, timed to release week.",
        },
      ],
    },
    {
      category: "Content. Tier One, Static Art Only",
      icon: "creative",
      items: [
        {
          name: "Motion-From-Static Cutdowns",
          quantity: "6 assets",
          description:
            "The single art animated with parallax and grain, audio-led, delivered 9:16 and 1:1. The workhorse across Meta and YouTube, and a complete campaign on its own.",
        },
        {
          name: "Verse Cards",
          quantity: "8 assets",
          description:
            "La Reezy's verse pulled as text over the audio. His audience engages with words, which makes this the cheapest high-performing unit available on this release.",
        },
        {
          name: "Audio-Led Shorts",
          quantity: "3 assets",
          description:
            "Waveform and caption treatment for TikTok and Reels, built to work with the sound on and with it off.",
        },
        {
          name: "Spotify Canvas",
          quantity: "1 asset",
          description:
            "Looping Canvas cut from the art, plus resolution of the Spotify for Publishers upload path flagged earlier in the cycle.",
        },
      ],
    },
    {
      category: "Content. Tier Two, Plus Stills",
      icon: "palette",
      items: [
        {
          name: "Two-Artist Lead Creative",
          quantity: "4 assets",
          description:
            "Both artists in one frame. This is the most valuable single asset in the campaign because it makes the collaboration legible in one scroll-second, and it becomes the lead creative in the cold cell.",
        },
        {
          name: "Split-Frame Carousel",
          quantity: "2 assets",
          description:
            "Electric Guest on one side, La Reezy on the other, meeting in the middle. Built for the feed rather than the ad account.",
        },
        {
          name: "Cross-Post Pack",
          quantity: "1 pack",
          description:
            "Assets sized and captioned for La Reezy's own accounts. Free reach into precisely the audience the cold cell is paying to buy.",
        },
      ],
    },
    {
      category: "Content. Tier Three, Plus Phone Video",
      icon: "play",
      items: [
        {
          name: "Raw Collaboration Clip",
          quantity: "30-60 sec",
          description:
            "One phone, one take, both artists in frame. Deliberately unpolished, which this account has now confirmed three separate times outperforms produced footage.",
        },
        {
          name: "Verse-Origin Cut",
          quantity: "1 asset",
          description:
            "La Reezy in his own words on why he got on an Electric Guest record. The crossover narrative delivered to his own audience by the person it belongs to.",
        },
        {
          name: "Organic-First Test Loop",
          quantity: "Ongoing",
          description:
            "Every video posts unboosted first and whatever the audience picks becomes the paid creative. This is the method that produced the best-performing dark post on the roster this quarter.",
        },
      ],
    },
    {
      category: "Measurement",
      icon: "bar-chart",
      items: [
        {
          name: "Crossover Report",
          quantity: "1 report",
          description:
            "Share of \"Everyday\" listeners with no prior 10K stream, split by cell, with the cost of reaching each one.",
        },
        {
          name: "September 2 Decision Memo",
          quantity: "1 memo",
          description:
            "The pre-committed call on which cell survives, where the reserve goes, and whether TikTok continues.",
        },
        {
          name: "Fall Recommendation",
          quantity: "1 recommendation",
          description:
            "What the result means for budget allocation across the rest of the Electric Guest cycle.",
        },
      ],
    },
  ],

  scope: {
    subheading: "Everything covered by this flight, and where the lines sit.",
    included: [
      "Paid media strategy, build and daily management across Meta, YouTube, TikTok and Spotify",
      "Audience construction, including the La Reezy adjacency cluster and all lookalike modelling",
      "Creative cutdowns and resizing from supplied assets across every placement and ratio",
      "Content strategy and the tiered production plan, with a dated ask list for the artist side",
      "Laylo capture setup and pre-save routing",
      "Daily performance monitoring through release week",
      "September 2 decision memo and the end-of-flight crossover report",
      "Coordination with the La Reezy team on cross-posting and shared assets",
    ],
    excluded: [
      "PR, press outreach and label-side editorial pitching, which sit with Independent Co.",
      "Original photography and videography (available as an add-on, scoped and quoted separately)",
      "Music video production and animation (available as an add-on, scoped and quoted separately)",
      "Influencer and creator seeding fees",
      "Radio, sync and physical product",
      "Master and publishing clearance",
    ],
  },

  quote: {
    model: "project" as const,
    investmentSubheading:
      "There is no Crowd Control fee on this flight. The full $2,500 is working media and DSP placement, billed to the platforms.",
    currency: "USD",
    lineItems: [
      {
        name: "Meta. Cell A, Electric Guest Pool",
        description: "Retargeting and follower lookalike. The funded control in the crossover test.",
        price: 600,
      },
      {
        name: "Meta. Cell B, La Reezy Adjacency",
        description:
          "Cold hip-hop-adjacent interest cluster and engager lookalike. The test itself, funded at parity with the control.",
        price: 600,
      },
      {
        name: "YouTube",
        description: "In-feed and Shorts against the account's proven $0.01 per view benchmark.",
        price: 600,
      },
      {
        name: "TikTok Probe",
        description: "Spark spend behind the best organic post, with a hard kill date of September 2.",
        price: 300,
      },
      {
        name: "Spotify Release-Week Placement",
        description: "Full-screen sponsored recommendation against the existing 374K follower base.",
        price: 250,
      },
      {
        name: "Reserve",
        description: "Held unallocated until the September 2 read, then moved behind the winning cell.",
        price: 150,
      },
    ],
    subtotal: 2500,
    discount: { label: "Crowd Control Management Fee", percentage: 0, amount: 0 },
    total: 2500,
    totalLabel: "Total Working Media",
    paymentSchedule: [
      {
        milestone: "Full media budget on approval",
        percentage: 100,
        amount: 2500,
        due: "Before the August 26 launch",
      },
    ],
    paymentTerms:
      "Billed to the platforms and DSP tools directly. No Crowd Control management fee applies to this flight.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve the flight",
      description:
        "Sign off on the $2,500 split so campaigns can be built the week of August 18 and live by August 26.",
    },
    {
      step: 2,
      title: "Confirm the asset tier",
      description:
        "Tell us which of the three content tiers is real. Static art alone is a complete plan. Anything beyond it is upside we will put to work.",
    },
    {
      step: 3,
      title: "Lock the La Reezy side",
      description:
        "Cross-posting agreement, tagging, and whatever assets his team can share. His accounts are free reach into the audience we are otherwise paying to reach.",
    },
    {
      step: 4,
      title: "Confirm platform access",
      description:
        "Meta and Spotify for Artists access on the Electric Guest side, so the pixel pool and follower data are live before build starts.",
    },
    {
      step: 5,
      title: "Hold September 2",
      description:
        "Thirty minutes on the read. The decision on which cell survives is already committed, so the call is about what the result means for the fall.",
    },
  ],

  cta: {
    headline: "Answer the question this release is actually asking",
    body:
      "Electric Guest has spent twelve weeks proving 10K works on its own audience. \"Everyday\" is the first real chance to find out whether it works on somebody else's. Approve the flight and there will be an answer by September 2.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/electric-guest-everyday/hero1.jpg",
    hero2: "/images/electric-guest-everyday/hero2.jpg",
    product: "/images/electric-guest-everyday/product.jpg",
    editorial: "/images/electric-guest-everyday/editorial.jpg",
    texture: "/images/electric-guest-everyday/texture.jpg",
    brutalist: "/images/electric-guest-everyday/brutalist.jpg",
    heroBg: "/images/electric-guest-everyday/hero-bg.jpg",
    ogImage: "/images/electric-guest-everyday/og-image.png",
    hero1Caption: "Everyday (feat. La Reezy) / Out August 28",
    brutalistCaption: "Two audiences, one crossing point",
  },
};
