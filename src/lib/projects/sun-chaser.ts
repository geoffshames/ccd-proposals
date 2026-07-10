import type { ProjectData } from "../project-context";

export const sunChaser: ProjectData = {
  accentColor: "#F5A524",

  client: {
    name: "Sun Chaser",
    logo: "",
    contactName: "Bernard",
    contactRole: "Sun Chaser / Toon City Animation",
    contactEmail: "",
    industry: "Animation / Film",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "The YouTube Views Flight",
    tagline:
      "20M real YouTube views on the trailer, bought through Google Ads alone, split evenly between the Philippine homeland and the Filipino diaspora in the US and Canada. A view count a distributor can see.",
    type: "YouTube Media Flight, Google Ads Only",
    startDate: "On Approval",
    endDate: "~4 Weeks From Launch",
    duration: "2-4 Week Flight",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Play",
    summary:
      "Sun Chaser is a fantasy adventure rooted in Filipino mythology, and Toon City is taking it to broadcasters, distributors, and international partners. In that room, the trailer's view count is not vanity, it is proof of demand. This flight manufactures that proof: roughly 20M real, reportable YouTube views, bought through Google Ads and nothing else, split 50/50 between the homeland that already loves the story and the diaspora that funds and greenlights it. The Kickstarter is winding down, which sharpens the job. This is about distribution-grade optics and a launch audience, not backers.",
    objectives: [
      "Put ~20M real, reportable YouTube views on the Sun Chaser trailer through Google Ads alone, turning the view count into a credibility asset for the broadcaster and distributor conversations Toon City is already in.",
      "Split the flight 50/50 by budget between the Philippine homeland and the Filipino diaspora in the US and Canada, so the number is big and it lands on the audience that actually funds and greenlights.",
      "Buy only views that meet YouTube's 30-second standard, with CTV screens and bot-adjacent inventory excluded, so every view is a real human who could become a launch-day viewer.",
      "Walk away with a first-party remarketing audience of everyone who watched, ready to retarget with 'now streaming' the day Sun Chaser lands a home.",
    ],
    subtitle:
      "Optics a buyer can see, built on real viewers, not bots. Google Ads only. No paid social, no Kickstarter dependency.",
    imageCaption: "Sun Chaser: a fantasy rooted in Filipino myth",
    stats: [
      {
        value: 20,
        suffix: "M",
        label: "YouTube Views Targeted",
        description: "Real, reportable views via Google Ads, weighted across the homeland and the diaspora",
      },
      { value: 50, suffix: "/50", label: "Homeland / Diaspora Budget" },
      { value: 5, suffix: "M+", label: "Filipino Diaspora (US + Canada)" },
      { value: 100, suffix: "%", label: "Google Ads / YouTube Only" },
    ],
  },

  discovery: {
    heading: "The Read",
    summary:
      "Before recommending a number, we pulled Sun Chaser's own audience data, CCD's live YouTube-views cost history, and the hard demographics of the Filipino diaspora. Four facts set the whole flight, and one risk shapes how we build it.",
    insights: [
      {
        label: "Views Are The Sales Asset",
        finding:
          "Toon City is pitching broadcasters, distributors, and international partners. In that room, a trailer sitting at 20M views is proof of demand that de-risks the acquisition. The view count is not decoration, it is the number a buyer screenshots and takes into their greenlight meeting.",
        source: "Toon City distribution posture",
      },
      {
        label: "The 4x CPV Split",
        finding:
          "In Southeast Asia we have driven YouTube views for as little as $0.002 each. In the US and Canada the same view runs closer to $0.01. That 4-to-5x gap is the single fact that shapes everything: cheap volume lives in the homeland, expensive credibility lives in the diaspora.",
        source: "CCD YouTube-Views Playbook, live CPV history",
      },
      {
        label: "The Diaspora Is The Money",
        finding:
          "4.4M Filipino-Americans and 957K Filipino-Canadians, roughly 5.4M people, concentrated in exactly the metros where a US or Canada distribution deal is decided and monetized: LA, the Bay Area, San Diego, New York, Honolulu, Seattle, Chicago, plus Toronto, Vancouver, Winnipeg, and Calgary. US audiences also over-index on spend.",
        source: "US Census 2020, StatCan 2021",
      },
      {
        label: "The Homeland Is The Fanbase",
        finding:
          "Sun Chaser's own following already skews about 43% Philippines. Filipino myth (aswang, duwende, manananggal) is bedtime-story canon there, not exotica. SEA views are not junk geo-arbitrage, they are the show's real audience, bought at a fraction of Western cost.",
        source: "Sun Chaser Instagram audience",
      },
      {
        label: "We Have Hit The Policy Wall Before",
        finding:
          "A prior CCD YouTube push had two of three campaigns frozen mid-flight on an opaque 'Improper Content' flag. This flight is built flag-resilient from day one: budget spread across multiple campaigns, a rep-escalation path, and playlisting held in reserve as a fallback lever.",
        source: "CCD campaign history, 2026",
      },
    ],
    marketContext:
      "Winding down the Kickstarter actually clarifies the assignment. This flight is not chasing backers, it is manufacturing distribution-grade optics and a launch-day audience. It runs fast, in a 2-4 week window, because heat compounds when a buyer is watching the number climb.",
  },

  audience: {
    heading: "Two Audiences, One Story",
    summary:
      "The flight deliberately serves two audiences at once: the homeland base that makes the number big and cheap, and the diaspora that makes it valuable. Weighted 50/50 by budget, on purpose.",
    demographics:
      "Philippines-led organic base (~43% of following) plus a ~5.4M-person Filipino diaspora across the US and Canada, concentrated in a dozen major metros.",
    demographicCards: [
      { label: "Homeland", value: "~43%", detail: "Philippines is Sun Chaser's #1 organic market" },
      { label: "US Diaspora", value: "4.4M", detail: "CA, HI, TX, NV, WA, IL, NY, NJ" },
      { label: "Canada Diaspora", value: "957K", detail: "Toronto, Vancouver, Winnipeg, Calgary" },
      { label: "Star Pull", value: "Liza Soberano", detail: "Voice cast, a top-tier draw for the diaspora" },
    ],
    personas: [
      {
        name: "The Homeland Kid & Family",
        ageRange: "6-16 + parents",
        description:
          "In the Philippines, Filipino myth is bedtime-story canon, not exotica. A fantasy adventure built from it is instantly theirs. Reached cheaply and at scale on mobile in-stream, this is where the raw view count gets built.",
        traits: ["Myth-Native", "Mobile-First", "Family Co-View", "High Volume"],
      },
      {
        name: "The Diaspora Parent",
        ageRange: "30-50",
        description:
          "Fil-Am and Fil-Can parents hungry for content that reflects their kids back to them. Representation plus nostalgia is the trigger. They share it, they back it, and they show up on launch day. This is the wallet and the word of mouth.",
        traits: ["Representation-Driven", "Shares To Family", "Spends", "Launch-Day Loyal"],
      },
      {
        name: "The Diaspora Gen-Z",
        ageRange: "13-24",
        description:
          "Second-generation viewers who found Filipino identity through TikTok and who follow the voice cast, Liza Soberano chief among them. Reached through cultural affinity, cast fandom, and Shorts.",
        traits: ["Identity-Curious", "Cast-Fan", "Shorts-Native", "Culture Amplifier"],
      },
    ],
    psychographics: [
      "Representation matters. Seeing Filipino myth and Filipino faces on a real production is the whole draw for the diaspora.",
      "Myth is heritage, not novelty. In the homeland the world of Sun Chaser is already familiar and beloved.",
      "The voice cast is a fandom on-ramp. Liza Soberano brings her own audience straight to the trailer.",
      "A climbing view count reads as legitimacy. 'This is real, this is happening' is what a big number says to a fan and to a buyer.",
    ],
    painPoints: [
      "The trailer's view count does not yet match the story's ambition, so buyers see a small number next to a big pitch.",
      "Filipino animation is under-served on Western platforms, so organic discovery in the diaspora is slow and thin.",
      "Diaspora audiences rarely get homeland-rooted content served to them in-feed. They have to go looking for it.",
    ],
    purchaseTriggers: [
      "Representation plus nostalgia: content that reflects a Filipino family back to itself.",
      "Voice-cast fandom, with Liza Soberano as the single biggest draw for the diaspora.",
      "Family co-viewing: a kids-pointed adventure parents watch alongside their children.",
      "Social proof of a climbing view count that signals the project is real and moving.",
    ],
    platforms: [
      { name: "YouTube", description: "The arena for this flight. Every dollar of media runs here, on the trailer." },
      { name: "Instagram", description: "Where the trailer audience already lives, about 43% Philippines. The organic base the paid flight amplifies." },
      { name: "TikTok", description: "Diaspora Gen-Z discovery and voice-cast fandom. A cultural amplifier, not a paid channel in this flight." },
      { name: "Facebook", description: "Older diaspora and family sharing, and still enormous in the Philippines itself." },
    ],
  },

  targets: [
    {
      metric: "YouTube Views",
      value: "20M",
      context:
        "Real, reportable views bought through Google Ads, weighted 50/50 by budget across the homeland and the diaspora.",
    },
    {
      metric: "Blended CPV",
      value: "~$0.004",
      context:
        "About $0.0025 in SEA and $0.010 in the US and Canada, blended across the 50/50 budget split. The 5-7 day test locks the real number.",
    },
    {
      metric: "Diaspora Reach",
      value: "~4M views",
      context:
        "Roughly a full single-pass sweep of the reachable Filipino diaspora in the US and Canada at the recommended budget.",
    },
    {
      metric: "First-Party Audience",
      value: "Every Viewer",
      context:
        "A remarketing pool of everyone who watched, packaged for a 'now streaming' push the day Sun Chaser lands a home.",
    },
  ],

  mediaFlight: {
    heading: "The Media Flight",
    subheading:
      "One goal, two tracks, one platform. Every dollar is Google Ads on YouTube. The homeland track manufactures the view count cheaply; the diaspora track buys the credibility and the launch audience where the buyers and the money are.",
    goal: { views: "20M", window: "2-4 Weeks", blendedCpv: "~$0.004", totalBudget: "$80,000" },
    tracks: [
      {
        key: "Philippines / SEA",
        role: "Volume Engine",
        budget: "$40,000",
        budgetPct: "50% of budget",
        cpv: "~$0.0025 / view",
        views: "16M",
        viewsPct: "~80% of views",
        markets:
          "Philippines primary. Indonesia, Vietnam, Thailand, and Malaysia as volume overflow to hold daily pace.",
        mix: "In-stream skippable led, In-feed and Shorts layered",
        rationale:
          "The show's #1 organic audience and the cheapest credible views on the platform. This is where the 20M headline gets built, on real fans of Filipino myth, not throwaway geo.",
      },
      {
        key: "US / Canada Diaspora",
        role: "Value Engine",
        budget: "$40,000",
        budgetPct: "50% of budget",
        cpv: "~$0.010 / view",
        views: "4M",
        viewsPct: "~20% of views",
        markets:
          "US and Canada, geo-concentrated on Filipino metros. Cultural and language affinity, voice-cast fandom (Liza Soberano), and 'has children' family filters.",
        mix: "In-stream and In-feed, Shorts for Gen-Z diaspora",
        rationale:
          "Four to five times pricier per view, but this is the audience that funds, greenlights, and shows up on launch day, and it seeds the remarketing pool for a 'now streaming' push.",
      },
    ],
    dial: [
      {
        label: "Lean",
        budget: "$50,000",
        views: "12.5M",
        split: "10M SEA / 2.5M US-CA",
        note: "Proves the model and still clears an eight-figure view count. Good if the number is directional rather than a hard target.",
      },
      {
        label: "Recommended",
        budget: "$80,000",
        views: "20M",
        split: "16M SEA / 4M US-CA",
        note: "Clears the 20M optics number and sweeps the reachable diaspora once. The balance of heat and credibility.",
        featured: true,
      },
      {
        label: "Diaspora-Weighted",
        budget: "$125,000",
        views: "20M",
        split: "10M SEA / 10M US-CA",
        note: "A true 50/50 by views, not budget. Roughly doubles diaspora frequency, but each extra diaspora view costs ~4x and CPV rises as the ~5.4M pool saturates.",
      },
    ],
    exclusions: [
      "CTV placement OFF",
      "WiFi-only mobile OFF (cellular required)",
      "Bot-adjacent inventory filtered",
      "Frequency caps enforced",
      "Policy-safe creative review pre-launch",
    ],
    caveat: {
      heading: "What 50/50 Actually Means",
      body:
        "The split is 50/50 by budget, and that is deliberate. Because a US or Canada view costs about 4x a Southeast Asia view, an even-money split lands at roughly 80/20 by raw view count. That is the honest tradeoff: an even commitment of dollars to the diaspora, funded to sweep the reachable ~5.4M pool once, without overpaying to force half the raw views into the most expensive geo. If the goal is instead for the diaspora to carry a true half of the views, that is the Diaspora-Weighted tier (~$125K), and we will run it, eyes open on the cost.",
    },
    pacingNote:
      "Pacing: a 5-7 day test runs both tracks at minimum spend to lock the real cost per view in each region, then budget scales to hit 20M by the end of the window, weighted toward whichever track delivers. Views scale near-linearly (within ~10%) once the test sets the number. All figures use conservative planning CPVs. CCD's own history suggests in-stream skippable often beats them, so 20M may land under $80K.",
  },

  timelineHeading: "Flight Plan",
  timelineSubheading:
    "A fast 2-4 week flight: test to lock the cost, scale to the number, hand off a launch audience.",
  timelineImageCaption: "2-4 Weeks / 2 Tracks / 20M Views",
  deliverablesSubheading:
    "What CCD builds and runs. The flight table above is the money and the math; this is the machine that delivers it.",

  timeline: [
    {
      phase: "Test & Calibrate",
      week: "Days 1-6",
      date: "Days 1-6",
      status: "upcoming" as const,
      tasks: [
        "Google Ads and YouTube channel access; the trailer or sizzle confirmed as the hosted asset",
        "Both tracks live at minimum spend to establish the real cost per view in SEA and the US/Canada diaspora",
        "Exclusions set: CTV off, WiFi-only mobile off, frequency caps, policy-safe creative review",
        "Multi-campaign structure built so a single policy flag cannot freeze the whole flight",
      ],
    },
    {
      phase: "Scale To 20M",
      week: "Weeks 1-3",
      date: "Weeks 1-3",
      status: "upcoming" as const,
      tasks: [
        "Budget scales to plan, weighted toward the track and unit type delivering the best real CPV",
        "Diaspora track tightens onto the strongest Filipino metros, affinity, and voice-cast fandom",
        "Progressive geo and placement optimization; mid-flight report with the paid-vs-organic split",
        "Rep-escalation path live; playlisting held in reserve as the fallback lever to finish the number",
      ],
    },
    {
      phase: "Finish & Hand Off",
      week: "Weeks 3-4",
      date: "Weeks 3-4",
      status: "upcoming" as const,
      tasks: [
        "Flight finishes to roughly 20M views",
        "First-party remarketing audience packaged from everyone who watched",
        "Wrap report: views by geo, device, and placement, plus the YouTube Studio paid-vs-organic breakdown",
        "Recommendation for the launch-window retarget ('now streaming') once Sun Chaser has a home",
      ],
    },
  ],

  deliverables: [
    {
      category: "Campaign Architecture",
      icon: "▶",
      items: [
        {
          name: "Two-Track Build",
          quantity: "2 tracks",
          description:
            "Separate PH/SEA and US/CA diaspora campaign sets, each with its own budget, targeting, and reporting, so the 50/50 posture is real and measurable.",
        },
        {
          name: "Unit-Type Mix",
          quantity: "3 formats",
          description:
            "In-stream skippable for cheap 30-second views, in-feed for the click-through engagement middle ground, and Shorts for the mobile and Gen-Z diaspora layer.",
        },
        {
          name: "Audience & Geo Targeting",
          quantity: "Full build",
          description:
            "Filipino-metro geo, cultural and language affinity, voice-cast fandom (Liza Soberano), and 'has children' family filters on the diaspora side.",
        },
      ],
    },
    {
      category: "Policy Safeguards",
      icon: "◆",
      items: [
        {
          name: "Flag-Resilient Structure",
          quantity: "Standing",
          description:
            "Budget spread across multiple campaigns so one opaque 'Improper Content' flag cannot halt delivery, learned from a prior CCD push that got frozen mid-flight.",
        },
        {
          name: "Rep Escalation Path",
          quantity: "On call",
          description:
            "A direct line to a Google and YouTube rep for manual review if a campaign gets flagged, so a stall does not cost days.",
        },
        {
          name: "Playlisting Fallback",
          quantity: "In reserve",
          description:
            "YT playlisting at about $0.01-0.02 per view held as the worst-case lever to finish the number if paid delivery stalls.",
        },
      ],
    },
    {
      category: "Measurement",
      icon: "□",
      items: [
        {
          name: "Live Dashboard",
          quantity: "1 dashboard",
          description:
            "Google Ads (geo, device, time, placement, source) plus the YouTube Studio paid-vs-organic split on the channel. Fully transparent.",
        },
        {
          name: "Mid-Flight + Wrap Reports",
          quantity: "2 reports",
          description:
            "A calibration read after the test and a full wrap at the end, with the real CPV and the complete view breakdown.",
        },
        {
          name: "First-Party Audience Handoff",
          quantity: "1 audience",
          description:
            "Every viewer packaged into a remarketing pool for the launch-day 'now streaming' retarget once Sun Chaser has a home.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "This is a YouTube views flight on Google Ads. Nothing else. Clear boundaries so every dollar chases the one number.",
    included: [
      "YouTube views via Google Ads, two tracks (PH/SEA and US/CA diaspora)",
      "In-stream, in-feed, and Shorts campaign build and management",
      "Filipino-metro geo, cultural affinity, and voice-cast targeting",
      "CTV, WiFi-only, and bot-adjacent exclusions",
      "Flag-resilient multi-campaign structure and rep escalation",
      "5-7 day CPV test, then scale to roughly 20M",
      "Live dashboard, mid-flight and wrap reporting",
      "First-party remarketing audience handoff",
    ],
    excluded: [
      "Meta, Instagram, or any paid social. This flight is Google Ads only",
      "Kickstarter conversion or crowdfunding campaigns (the Kickstarter is winding down)",
      "TikTok and other platform ad buys (available as add-on)",
      "Creative production, trailer edits, or new cut-downs (available as add-on)",
      "Streaming, DSP, or ticketing campaigns (available as add-on)",
    ],
  },

  quote: {
    model: "project",
    investmentSubheading:
      "This one is a favor, not an invoice. The only cost is the media itself, billed by Google straight to the ad account. CCD's standard 15% management fee is waived. Budget flexes to the tier you pick in the flight above; the number below is the recommended plan.",
    currency: "USD",
    lineItems: [
      {
        name: "Philippines / SEA Track",
        description:
          "About 16M views at ~$0.0025 CPV. In-stream led, in-feed and Shorts layered. Billed to platform.",
        price: 40000,
      },
      {
        name: "US / Canada Diaspora Track",
        description:
          "About 4M views at ~$0.010 CPV. Filipino-metro geo, cultural affinity, and voice-cast targeting. Billed to platform.",
        price: 40000,
      },
      {
        name: "CCD Management",
        description: "Normally 15% of spend. Waived. Bernard and family.",
        price: 0,
        priceLabel: "Waived",
      },
    ],
    subtotal: 80000,
    discount: { label: "CCD management fee", percentage: 0, amount: 0 },
    total: 80000,
    totalLabel: "Total Media Spend",
    paymentSchedule: [
      {
        milestone: "Fund the Google Ads account",
        percentage: 100,
        amount: 80000,
        due: "Before launch",
      },
    ],
    paymentTerms:
      "Media is billed by Google directly to the ad account. No CCD fee. Launch within 24-48 hours of access.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Pick The Budget Tier",
      description:
        "Lean, Recommended, or Diaspora-Weighted from the flight. The Recommended $80K plan clears 20M at the 50/50 split.",
    },
    {
      step: 2,
      title: "Grant Google Ads + Channel Access",
      description:
        "Invite geoff@crowdcontroldigital.com to the Google Ads account and link the YouTube channel.",
    },
    {
      step: 3,
      title: "Confirm The Asset",
      description:
        "Lock the trailer or sizzle as the hosted video. Two cuts is even better; it makes the flight more flag-resilient.",
    },
    {
      step: 4,
      title: "24-48 Hour Build",
      description:
        "Both tracks built, audiences and exclusions set, policy-safe review done, live within a day or two of access.",
    },
    {
      step: 5,
      title: "Test, Scale, Hand Off",
      description:
        "5-7 day test to lock CPV, scale to 20M, wrap with a report and a launch-ready remarketing audience.",
    },
  ],

  cta: {
    headline: "Let's put a real number on the board.",
    body: "Sun Chaser deserves a view count that matches the pitch. Two tracks, one platform, real viewers, in two to four weeks, so the next distributor conversation opens with proof instead of a promise. Say go and we are live within 48 hours.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/sun-chaser/hero1.jpg",
    hero2: "/images/sun-chaser/hero2.jpg",
    product: "/images/sun-chaser/product.jpg",
    editorial: "/images/sun-chaser/editorial.jpg",
    texture: "/images/sun-chaser/texture.jpg",
    brutalist: "/images/sun-chaser/brutalist.jpg",
    heroBg: "/images/sun-chaser/hero-bg.jpg",
    ogImage: "/images/sun-chaser/og-image.png",
    hero1Caption: "Sun Chaser: a fantasy rooted in Filipino myth",
    brutalistCaption: "Sun Chaser × Crowd Control Digital",
  },
};
