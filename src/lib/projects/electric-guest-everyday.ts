import type { ProjectData } from "../project-context";

export const electricGuestEveryday: ProjectData = {
  internal: true,
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
    summary: "",
    objectives: [],
  },

  discovery: {
    sectionNumber: "01",
    layout: "lede",
    heading: "What We Found",
    summary:
      "Before allocating a dollar we audited the track's existing streaming history, both artists' editorial footprints, the listener adjacency around La Reezy, and Electric Guest's own paid benchmarks across the 10K cycle. Five findings shaped this plan.",
    insights: [
      {
        label: "Track History",
        finding:
          "\"Everyday\" is track nine on 10K (Deluxe), released June 5. This is a feature version of a record that has been live for twelve weeks, so it starts with playlist context, catalog adjacency and an existing listener base rather than from zero. That is an advantage on retention and a constraint on novelty, and the plan is built for both.",
        source: "Spotify catalog audit",
      },
      {
        label: "The Asymmetry",
        finding:
          "Electric Guest sits at 1.25M monthly listeners and 374K followers. La Reezy sits at 128K and 39K. On raw reach the feature is a step down. On cultural position it is a step up: 2026 XXL Freshman, Camp Flog Gnaw, a Little Simz support run, and co-signs from Kendrick Lamar, Tyler, the Creator, J. Cole and Nas. What is being traded is credibility, not audience size, and the media plan follows the credibility.",
        source: "Spotify, XXL, Pitchfork, NME",
      },
      {
        label: "Assets, Not Budget",
        finding:
          "Across the whole 10K cycle the recurring blocker has been fresh artist content rather than spend. Produced assets have repeatedly stalled on availability and cost, including a photographer search that ran several weeks and returned one $3,000 quote. This flight is therefore built to run at full strength on the static art alone, with stills of the two artists together, and anything either of them can shoot on a phone, treated as upside rather than a dependency.",
        source: "10K campaign history",
      },
      {
        label: "Zero Overlap",
        finding:
          "The editorial surfaces do not overlap at all. Electric Guest sits on Feel-Good Indie Rock and Indie Rock Road Trip. La Reezy sits on Fresh Finds Hip-Hop, Mellow Bars, The Flow and Northern Bars. There is no shared listener pool to lean on, which is exactly why this is worth testing with funded spend rather than assuming it works.",
        source: "Spotify editorial placement audit",
      },
      {
        label: "The Target Cluster",
        finding:
          "La Reezy's listener adjacency resolves to a specific, targetable set rather than a vague genre guess: Chris Patrick at 257K monthly listeners and a fellow 2026 XXL Freshman, reggie at 153K, Ovrkast. at 146K, plus MARCO PLUS, SWAVAY and Kaicrewsade. This is the interest cluster the cold cell gets built against.",
        source: "Spotify related-artist mapping",
      },
    ],
    marketContext:
      "The release lands twelve weeks into the 10K (Deluxe) cycle with paid running flat and no fresh moment on the calendar. La Reezy plays Colours Hoxton in London on September 1 and Helios 37 in Cologne on September 7, four and ten days after release, on a run supporting Samara Cyn. That puts a live European window inside the flight, and it is the cheapest content and geo signal available anywhere in this campaign.",
  },

  mediaFlight: {
    sectionNumber: "02",
    layout: "ledger",
    heading: "The Media Flight",
    subheading:
      "Every dollar is working media and Crowd Control takes no fee. Four channels, one funded head-to-head, and a hard decision point on September 2 that moves the reserve into whatever is winning.",
    goal: { views: "$2,500", window: "4 Weeks", blendedCpv: "$0", totalBudget: "Sept 2" },
    goalLabels: {
      views: "Working Media",
      window: "Flight Window",
      blendedCpv: "Crowd Control Fee",
      totalBudget: "Decision Point",
    },
    cpvRowLabel: "Planning Cost",
    dialUnit: "",
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
        viewsPct: "50% of Meta spend",
        markets: "US, UK and Australia. Retargeting off the 10K cycle pixel plus a follower lookalike.",
        mix: "Dark posts, 9:16 and 1:1",
        rationale:
          "The known quantity, and that is precisely why it belongs in the test. This audience has delivered 3.5% to 4% CTR at $0.12 all cycle. Without a funded control running at the same time, there is nothing to judge the cold cell against.",
      },
      {
        key: "Meta / Cell B. La Reezy Adjacency",
        role: "The Test",
        featured: true,
        budget: "$600",
        budgetPct: "24% of budget",
        cpv: "~$0.12 to $0.18 / click",
        views: "~3,500 to 5,000 clicks",
        viewsPct: "50% of Meta spend",
        markets:
          "US, UK and Australia. Interest cluster built on Chris Patrick, reggie, Ovrkast., MARCO PLUS, SWAVAY and Kaicrewsade, plus a La Reezy engager lookalike.",
        mix: "Dark posts, feature-forward creative, 9:16 and 1:1",
        rationale:
          "The entire thesis, funded at parity with the control so the comparison holds. Cold audiences run more expensive by default, so this cell is judged on whether it stays close to the control's CTR, not on beating it.",
      },
      {
        key: "YouTube",
        role: "Volume Engine",
        budget: "$600",
        budgetPct: "24% of budget",
        cpv: "~$0.012 / view",
        views: "~50,000 views",
        viewsPct: "at the proven $0.01 benchmark",
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
        views: "Spark behind the organic winner",
        viewsPct: "kill date September 2",
        markets: "US led, spark-eligible organic first",
        mix: "Spark ads applied behind whatever posts organically best",
        rationale:
          "The only surface where a rap feature can break without spend behind it. Funded as a probe with a hard kill date, not dressed up as a channel. If nothing organic clears the bar by September 2, the money moves to YouTube.",
      },
      {
        key: "Spotify Release-Week Placement",
        role: "DSP Conversion",
        budget: "$250",
        budgetPct: "10% of budget",
        cpv: "~6.5% conversion",
        views: "374K follower reach",
        viewsPct: "release week only",
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
        views: "Moves behind the winning cell",
        viewsPct: "held until the read",
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
        views: "A directional read",
        split: "$800 Meta / $450 YouTube / $250 Spotify",
        note:
          "Both Meta cells drop to $400, which is under the threshold where a cold-audience read can be trusted. TikTok comes out entirely. Cheaper, and the answer gets considerably softer.",
      },
      {
        label: "As Scoped",
        budget: "$2,500",
        views: "The clean read",
        split: "$1,200 Meta / $600 YouTube / $300 TikTok / $250 Spotify / $150 held",
        note:
          "Enough to answer the crossover question with confidence and keep the catalog warm alongside it. It will not create a moment on its own, and this plan does not claim otherwise.",
        featured: true,
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
        "This budget is enough to answer one question properly. It is not enough to manufacture a moment around a track that has been live since June. Spread across five channels it would produce five numbers all too small to act on, which is why the plan concentrates on a single funded head-to-head and treats everything else as either a proven floor or a probe with a kill date. The output that matters here is not the stream count. It is knowing, by September 2, whether hip-hop-adjacent audiences convert for Electric Guest at a cost worth paying, because that answer is what sets the fall budget.",
    },
    pacingNote:
      "Creative runs on whatever exists. The floor is the single art cut to motion, verse cards pulled from La Reezy's lines, and audio-led shorts, which is a complete campaign on its own. A still of the two artists together becomes the lead creative in Cell B the day it lands, and any phone footage goes out organically first so the audience picks the paid creative before spend goes behind it. Pacing: campaigns build the week of August 18 and go live August 26 to warm delivery ahead of release, then run at full weight from release day. Both Meta cells hold at parity through September 2 with no optimisation between them. Spotify placement fires release week only. The September 2 review kills the losing cell, allocates the reserve, and decides TikTok's fate.",
  },

  timeline: [],
  deliverables: [],

  scope: {
    included: [],
    excluded: [],
  },

  quote: {
    sectionNumber: "03",
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

  nextStepsSectionNumber: "04",
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
    headline: "From Approval to September 2",
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
    brutalistCaption: "Release week / August 28 to September 12",
  },
};
