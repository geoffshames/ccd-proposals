import type { ProjectData } from "@/lib/project-context";

export const joyn: ProjectData = {
  accentColor: "#FD3737",

  client: {
    name: "JOYN",
    logo: "",
    contactName: "Jaqueline Mattos",
    contactRole: "Founder",
    contactEmail: "jaqueline@joynpro.com",
    industry: "On-Demand Home Services Marketplace",
  },

  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },

  project: {
    name: "Customer Acquisition Launch",
    tagline:
      "Pain-point landing pages, a fast-iterating Meta creative engine, and a first-clean offer built to put JOYN in front of South Florida pool owners and turn installs into recurring weekly service.",
    type: "Growth Marketing + Paid Acquisition",
    startDate: "November 16, 2026",
    endDate: "Ongoing",
    duration: "2-Week Build, Then Ongoing",
    status: "Awaiting Approval",
  },

  overview: {
    heading: "The Strategy",
    summary:
      "JOYN has already solved the hard side of the marketplace. Technicians sign up the moment they hear same-day pay and more money per stop, and the customers who try the app set it to recurring and stay. What JOYN needs now is a steady flow of pool owners who have never heard of it. The plan is simple and fast: find every complaint South Florida pool owners have about their current service, build a landing page and a set of ads around each one, put real money behind them on Meta, and let the numbers decide which story and which offer win. Every page and ad says one thing end to end, so the customer who clicks because their pool guy ghosted them lands on a page about exactly that.",
    subtitle:
      "Speak to the pain they already feel, prove the fix in one booking, and let recurring service do the rest.",
    imageCaption: "Growth Marketing + Paid Acquisition",
    objectives: [
      "Add 140 recurring pool customers to the platform, at a cost per customer that pays back inside the first year",
      "Build pain-point landing pages that match each ad angle, so the funnel speaks to one problem from first click to booking",
      "Run a rapid Meta creative engine: launch wide, cut losers weekly, and scale the angle that converts",
      "Test the first-clean offer against a no-offer control so JOYN knows exactly what an incentive is worth",
      "Produce the one chart investors want: cost to acquire a customer against what that customer is worth",
    ],
    stats: [
      { value: 140, label: "New Recurring Customers", description: "The first growth milestone, sized to the tech bench JOYN already has ready to take jobs" },
      { value: 4, label: "Pain-Point Landing Pages" },
      { value: 12, suffix: "+", label: "Launch Ads" },
      { value: 5, suffix: "K/mo", label: "Recommended Meta Spend" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "We audited JOYN's site and app positioning, mapped the companies already competing for South Florida pool owners, and pulled the complaints those owners repeat about pool service. Five findings shaped this plan.",
    insights: [
      {
        label: "Trust Is The Bottleneck",
        finding:
          "Customers book easily when the recommendation comes from Organized Pool Service, a name they already know. The same customer hesitates when JOYN reaches them cold. The product converts once it is in their hands; the job of marketing is to borrow trust fast, through proof, a risk-free first booking, and a familiar local name where it helps.",
        source: "JOYN discovery call, November 2026",
      },
      {
        label: "The Homepage Sells Everyone At Once",
        finding:
          "joynpro.com leads with a broad trades message, an AI pricing explainer, a provider-company pitch, and a technician pitch on the same page. A pool owner with a green pool has to work to find their problem. Dedicated pages per pain point let paid traffic land on one message and one action: download and book.",
        source: "joynpro.com audit, November 2026",
      },
      {
        label: "The Pain Is Loud And Repetitive",
        finding:
          "The same complaints show up again and again across reviews, industry forums, and local news: the tech skipped a week, the pool turned green between visits, the bill had charges nobody approved, and nobody answers the phone. Each of these maps directly to something JOYN already does: live tracking, a trusted backup tech, and a price locked before booking.",
        source: "Review platforms, pool industry complaint guides, local news coverage",
      },
      {
        label: "Florida Is The Densest Pool Market In America",
        finding:
          "Florida has roughly 1.5 million residential pools, more than any other state, and Miami ranks among the U.S. cities with the highest share of homes with a pool. Pools run 12 months a year here, so there is no off-season to wait out and a tight geo can still hold a lot of demand.",
        source: "Angi residential pool data via House Digest",
      },
      {
        label: "A Free Clean Alone Is Not A Moat",
        finding:
          "PoolToday has offered on-demand cleanings with a free first service across Florida since 2019. The first-clean offer is still worth testing, but it wins when it is paired with what only JOYN has: a pro-only tier for vetted, insured companies, a price locked before booking, and a backup tech when the regular one cannot make it.",
        source: "PoolToday launch coverage (WPTV, AQUA Magazine)",
      },
    ],
    marketContext:
      "Pool owners do not shop for service until something goes wrong. That makes the complaint itself the best targeting signal there is, and Meta is the fastest place to test which complaint moves people. Once a winning angle and a reliable cost per customer exist, the same story can scale into household-level connected TV aimed only at homes with pools.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "South Florida homeowners with a pool and a reason to switch. We are not selling the idea of an app; we are selling relief from a specific bad experience.",
    demographics:
      "Homeowners 30 to 65 in Miami-Dade, Broward, and Palm Beach with a residential pool, skewing 40+.",
    demographicCards: [
      { label: "Age Range", value: "30-65", detail: "40-60 is the decision core" },
      { label: "Housing", value: "Pool Owners", detail: "Single-family, owner-occupied" },
      { label: "Geography", value: "South Florida", detail: "Miami-Dade, Broward, Palm Beach" },
      { label: "Trigger State", value: "Service Failure", detail: "A skipped week, a green pool, a surprise bill" },
    ],
    personas: [
      {
        name: "The Ghosted Homeowner",
        ageRange: "35-60",
        description:
          "Their current pool guy skipped a week, then another, and stopped answering texts. They are not loyal to anyone; they just want someone reliable who shows up and tells them when.",
        traits: ["Fed Up", "Ready To Switch", "Wants Reliability", "Texts Over Calls"],
      },
      {
        name: "The Pro-Only Buyer",
        ageRange: "50-70",
        description:
          "Will not let anyone onto the property who is not licensed, insured, and highly rated. Price matters less than knowing exactly who is coming and that a real company stands behind them.",
        traits: ["Risk-Averse", "Vetting Matters", "High LTV", "Referral Engine"],
      },
      {
        name: "The New Pool Owner",
        ageRange: "30-45",
        description:
          "Just bought a home with a pool and has no idea what service should cost. Hates calling around for quotes and wants to see a price, tap a button, and be done.",
        traits: ["App-Native", "Price-Curious", "Convenience First", "No Existing Vendor"],
      },
    ],
    psychographics: [
      "They want control: who is coming, when, and what it will cost, before anyone shows up",
      "Convenience wins over loyalty: if booking takes one tap, they will try it",
      "Trust is borrowed: reviews, vetting badges, and a familiar local name lower the bar to the first booking",
      "Once it works, they set it and forget it; recurring service is the default behavior, not the exception",
    ],
    painPoints: [
      "No-shows and skipped weeks, often with no warning and no reply to texts",
      "Surprise bills for chemicals, stabilizer, and extras nobody approved",
      "Waiting days for quotes and callbacks when something breaks",
      "No way to tell a vetted company from a guy with a truck",
    ],
    purchaseTriggers: [
      "The pool turns green or cloudy after a missed visit",
      "A bill arrives higher than expected",
      "Moving into a home with a pool and no service in place",
      "A risk-free first booking that makes trying something new cost nothing",
    ],
    platforms: [
      {
        name: "Facebook",
        description:
          "The primary decision surface for 40+ South Florida homeowners, including neighborhood and HOA groups where pool service recommendations get traded every week.",
      },
      {
        name: "Instagram",
        description:
          "Reels and Stories for the 30-45 segment: fast before-and-after proof, the app in action, and the offer in one swipe.",
      },
      {
        name: "Connected TV",
        description:
          "A later-stage channel: household-level targeting that reaches only homes with pools, with a scan-to-download first-clean offer on screen.",
      },
    ],
    quotes: [
      {
        text: "My pool guy didn't show up for three weeks and never told me.",
        source: "Recurring pool owner complaint, paraphrased sentiment",
      },
      {
        text: "Every month there's some extra chemical charge I never agreed to.",
        source: "Pool service reviews, paraphrased sentiment",
      },
      {
        text: "I just want someone licensed and insured who actually answers.",
        source: "Homeowner recommendation threads, paraphrased sentiment",
      },
    ],
  },

  targets: [
    {
      metric: "Cost Per Recurring Customer",
      value: "<$150",
      context:
        "A recurring weekly customer is worth roughly $11 a week to JOYN, about $570 a year at a 2% churn rate. Holding acquisition under $150 returns the spend more than three times over in year one.",
    },
    {
      metric: "New Recurring Customers",
      value: "140",
      context:
        "At $5,000 a month and a sub-$150 cost per customer, this is roughly a four-month run. A winning first-clean offer is the lever that pulls it in faster.",
    },
    {
      metric: "Download-To-Booking Rate",
      value: "30%+",
      context:
        "Installs are a means, not the goal. We optimize toward first bookings and recurring setups, and fix any drop-off between download and booking first.",
    },
    {
      metric: "Year-One Return On Spend",
      value: "3x+",
      context:
        "The headline number for investors: what each acquisition dollar returns in first-year platform profit, before repairs and service calls are counted.",
    },
  ],

  competitive: {
    summary:
      "South Florida pool owners have plenty of ways to find a pool company and almost no way to book one instantly with a locked price. The lead-gen giants make them wait for quotes, the independents make them chase, and the one on-demand player only does cleanings. JOYN's lane is instant booking with vetting and price certainty built in.",
    competitors: [
      {
        name: "PoolToday: On-Demand Cleanings Across Florida",
        strength:
          "Same core promise: book a cleaning with as little as two hours' notice, flat pricing by zip code, and a free first service, live in more than 100 cities.",
        gap: "Cleanings and weekly maintenance only, with no pro-only tier, no backup tech, and no network for repairs and quotes. JOYN wins by leading with vetting and reliability, not just the free clean.",
      },
      {
        name: "Angi",
        strength:
          "Enormous brand awareness and search presence; the default place homeowners start looking.",
        gap: "A lead marketplace: homeowners submit a request, then wait for pros to call back and quote. JOYN's message is the opposite: no waiting, no quotes, book now.",
      },
      {
        name: "Thumbtack",
        strength:
          "Deep pool-service listings in Miami, Fort Lauderdale, and Palm Beach with reviews and pricing estimates.",
        gap: "Pros pay per lead, so the homeowner still runs a quote process and gets a range, not a locked price. JOYN locks the price before the tech is assigned.",
      },
      {
        name: "The Local Independent",
        strength:
          "Personal relationship and often the lowest price on the street; most South Florida pools are serviced this way today.",
        gap: "This is where the ghosting, skipped weeks, and surprise bills come from. Every ad JOYN runs is, in effect, a switch campaign against this experience.",
      },
    ],
  },

  creativeExamples: {
    sectionNumber: "06",
    heading: "Example Creative",
    subheading:
      "Four directional ads, one per launch angle, generated with AI in JOYN's orange. Launch creative is produced the same way, which is what lets us test a dozen ideas in week one instead of three.",
    footnote:
      "Examples only. These are directional and illustrate the angles we would test; final copy, offers, and product claims are confirmed with JOYN before anything runs.",
    items: [
      {
        image: "/images/joyn/ad-ghosted.jpg",
        angle: "The Ghosting Angle",
        description: "Speaks to the most common complaint in the category: the tech who stops showing up and stops answering.",
      },
      {
        image: "/images/joyn/ad-no-surprise.jpg",
        angle: "The Price-Lock Angle",
        description: "Surprise chemical bills against a price locked before booking. Proof, not promises.",
      },
      {
        image: "/images/joyn/ad-first-clean.jpg",
        angle: "The First-Clean Offer",
        description: "A risk-free first booking tied to weekly service, tested against a no-offer control.",
      },
      {
        image: "/images/joyn/ad-pro-only.jpg",
        angle: "The Pro-Only Angle",
        description: "For the homeowner who only lets vetted, insured companies on the property.",
      },
    ],
  },

  timelineHeading: "The Launch Plan",
  timelineSubheading:
    "Two weeks to build the pages, the creative, and the tracking, then a weekly test-and-scale loop on Meta until the cost per customer is proven and the 140 are in.",
  timelineImageCaption: "2 Weeks To Launch / 4 Angles / 1 Funnel",
  timeline: [
    {
      phase: "Pain Mining + Offer Design",
      week: "Week 1",
      date: "Nov 16 - Nov 20",
      status: "upcoming",
      tasks: [
        "Scrape and categorize South Florida pool service complaints from reviews, forums, and social to rank the strongest angles",
        "Lock the four launch angles and the first-clean offer mechanics, including a cap such as the first 100 recurring signups",
        "Meta Business Manager, pixel, Conversions API, and app event tracking set up so installs, first bookings, and recurring setups are measured",
        "Align with Sam on brand direction so pages and ads match where the visual identity is heading",
      ],
    },
    {
      phase: "Build",
      week: "Week 2",
      date: "Nov 23 - Nov 27",
      status: "upcoming",
      tasks: [
        "Four pain-point landing pages built and live, each matched to one ad angle with a single download-and-book action",
        "Launch creative set: 12+ AI-generated static and short video ads across the four angles",
        "Offer page and terms for the first-clean test, plus a no-offer control path",
        "QA the full path from ad to page to app store to first booking",
      ],
    },
    {
      phase: "Launch + Learn",
      week: "Weeks 3-6",
      date: "Nov 30 - Dec 25",
      status: "upcoming",
      tasks: [
        "Meta campaigns live across South Florida, geo-focused on pool-dense zip codes",
        "Weekly creative refresh: cut the losing angles, iterate on the winners",
        "Offer read: first-clean versus control on cost per recurring customer",
        "Weekly report on spend, installs, bookings, recurring setups, and cost per customer",
      ],
      ongoing: true,
    },
    {
      phase: "Scale",
      week: "Week 7+",
      date: "Ongoing",
      status: "upcoming",
      tasks: [
        "Scale budget behind the winning angle and offer while holding the cost-per-customer target",
        "Retargeting and lookalikes seeded from recurring customers",
        "CAC and LTV readout formatted for the investor deck",
        "Household-level connected TV test aimed at homes with pools once the economics are proven",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "One setup sprint to build the funnel and the creative, then ongoing media management to run it.",
  deliverables: [
    {
      category: "Landing Pages",
      icon: "pages",
      items: [
        {
          name: "Pain-Point Landing Pages",
          quantity: "4 pages",
          description:
            "One page per ad angle (ghosting, surprise bills, pro-only, first-clean offer), each with one job: download the app and book. Built to mirror any brand refinements as they land.",
        },
        {
          name: "Offer + Control Paths",
          quantity: "2 paths",
          description: "A first-clean offer path and a no-offer control, so the value of the incentive is measured, not guessed.",
        },
        {
          name: "Tracking Setup",
          quantity: "Full build",
          description:
            "Meta pixel, Conversions API, and app event wiring so every ad is graded on bookings and recurring setups, not just clicks.",
        },
      ],
    },
    {
      category: "Ad Creative",
      icon: "creative",
      items: [
        {
          name: "AI-Generated Launch Creative",
          quantity: "12+ ads",
          description:
            "Static and short video ads across four angles, produced with AI image and video tools in JOYN's brand. This is how we launch wide and iterate weekly at startup speed.",
        },
        {
          name: "Complaint Research",
          quantity: "1 report",
          description: "Ranked list of the South Florida pool service complaints that become the hooks and headlines.",
        },
      ],
    },
    {
      category: "Media Management",
      icon: "meta",
      items: [
        {
          name: "Meta Campaign Management",
          quantity: "Ongoing",
          description:
            "Campaign builds, daily optimization, weekly creative refreshes, and budget moved toward the angle and offer that produce recurring customers.",
        },
        {
          name: "Weekly Reporting",
          quantity: "Weekly",
          description: "Spend, installs, first bookings, recurring setups, and cost per customer, plus a CAC and LTV view built for investor conversations.",
        },
      ],
    },
  ],

  scope: {
    subheading: "Everything included in the engagement, and where the boundaries are.",
    included: [
      "Complaint research and angle development for South Florida pool owners",
      "Four pain-point landing pages, hosted and built to update as the brand evolves",
      "12+ launch ads produced with AI image and video tools, in JOYN's brand",
      "First-clean offer design with a no-offer control test",
      "Meta pixel, Conversions API, and app event tracking setup",
      "Ongoing Meta campaign management and weekly creative refreshes",
      "Weekly reporting with a CAC and LTV view for investor conversations",
    ],
    excluded: [
      "Ad spend itself (billed directly to JOYN's card on Meta)",
      "The cost of any first-clean offer redemptions",
      "Full website redesign (available as add-on, scoped and quoted separately)",
      "Brand strategy and visual identity (handled with Sam)",
      "App development and in-app changes, including SDK installs by JOYN's developers",
      "Connected TV, Google, and other channels (available as add-on once Meta economics are proven)",
    ],
  },

  quote: {
    model: "project",
    currency: "USD",
    investmentSubheading:
      "One setup fee to build the funnel and the launch creative, then 15% of whatever ad spend we manage. Ad spend is billed directly to Meta on JOYN's card.",
    lineItems: [
      {
        name: "Launch Setup: Landing Pages + Ad Creative",
        description:
          "Complaint research, four pain-point landing pages, offer and control paths, tracking setup, and 12+ AI-generated launch ads across four angles.",
        price: 5000,
      },
    ],
    subtotal: 5000,
    discount: { label: "", percentage: 0, amount: 0 },
    mediaBudget: {
      label: "Recommended Meta Spend",
      amount: 5000,
      note: "Funded by JOYN and billed directly by Meta. Scales up or down together with results.",
    },
    variableCosts: [
      {
        name: "Media Management",
        basis: "15% of managed spend",
        note: "$750/mo at the recommended $5,000/mo. Covers campaign management, weekly creative refreshes, and reporting. Adjusts automatically with spend.",
      },
    ],
    variableCostsHeading: "Ongoing (Billed Monthly)",
    total: 5000,
    totalLabel: "Setup (One-Time)",
    paymentSchedule: [
      { milestone: "Launch Setup", percentage: 100, amount: 5000, due: "Upon approval" },
    ],
    paymentTerms:
      "The $5,000 setup fee is due on approval and starts the two-week build. Media management is billed monthly at 15% of the prior month's managed ad spend, due 7 days from invoice. Ad spend is paid directly to Meta.",
    paymentLink: "https://buy.stripe.com/3cI8wO3PubeV8mZcfTa7C0m",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve + Pay Setup",
      description: "Hit Approve below to lock the start date, or reply to Geoff with questions.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake: Meta Business Manager access, app store links, app event tracking status with your developers, and your CAC and LTV numbers.",
    },
    {
      step: 3,
      title: "Lock The Offer",
      description: "Agree on the first-clean offer, the redemption cap, and the terms before anything goes live.",
    },
    {
      step: 4,
      title: "Two-Week Build",
      description: "Landing pages, launch creative, and tracking built and reviewed with you.",
    },
    {
      step: 5,
      title: "Go Live",
      description: "Meta campaigns launch across South Florida, with weekly reports from the first full week.",
    },
  ],

  cta: {
    headline: "The techs are ready. Let's bring the customers.",
    body:
      "JOYN already has a product customers love once they try it and a bench of technicians asking for more jobs. This plan puts the app in front of the pool owners who need it most and proves what a customer costs. Approve below to start the build, or reply to Geoff to talk it through.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/joyn/hero1.jpg",
    hero2: "/images/joyn/hero2.jpg",
    product: "/images/joyn/product.jpg",
    editorial: "/images/joyn/editorial.jpg",
    texture: "/images/joyn/texture.jpg",
    brutalist: "/images/joyn/brutalist.jpg",
    heroBg: "/images/joyn/hero-bg.jpg",
    ogImage: "/images/joyn/og-image.png",
    hero1Caption: "Growth Marketing + Paid Acquisition",
    brutalistCaption: "JOYN × Crowd Control Digital",
  },

  caseStudies: [],
};
