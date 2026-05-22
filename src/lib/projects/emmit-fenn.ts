import type { ProjectData } from "../project-context";

export const emmitFenn: ProjectData = {
  requireNda: false,
  accentColor: "#FD3737",

  client: {
    name: "Emmit Fenn",
    logo: "",
    contactName: "Emmit Fenn",
    contactRole: "Artist / Composer",
    contactEmail: "",
    industry: "Music / Indie Electronica / Immersive Live Experience",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "THE LIGHT WE LEAVE BEHIND",
    tagline:
      "Emmit Fenn turned a 3.1M-listener streaming audience into a hidden, invite-only ritual run twice in Los Angeles. This is the six-month build to turn that experience into a fully branded, fan-data-routed touring IP the world will travel for.",
    type: "Experiential Brand Build + Touring Infrastructure",
    startDate: "June 1, 2026",
    endDate: "November 30, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Build",
    subtitle: "Brand the experience. Build the engine. Take it on tour.",
    imageCaption: "The Light We Leave Behind / Water Edition",
    summary:
      "Emmit Fenn has quietly built two businesses. The first is a 3.1M-monthly-listener streaming catalog. The second, far rarer, is The Light We Leave Behind: an invite-only immersive water, sound and light performance run twice in Los Angeles, a meditative experience that sits between a classical concert, a sound bath, and an art installation. The instinct is already right. The event site captures name, email, phone and postal code, fires a Meta Pixel, and asks fans to share the link to bring the experience to their city. What is missing is the infrastructure to turn that instinct into a touring brand. Over six months, Crowd Control Digital will brand the experience as a transferable IP, build the owned demand engine (Laylo email and SMS, a postal-code demand heatmap, pixel retargeting), bridge the streaming audience into premium ticket buyers, and route the first markets on real demand data. The goal is simple: stop running a beautiful one-off, and start operating a touring brand the world will travel for.",
    objectives: [
      "Productize The Light We Leave Behind into a transferable, branded touring IP: a full identity system plus an experience bible (staging, lighting and water spec, run of show, sensory standards) so every city replicates the LA magic instead of reinventing it.",
      "Stand up the owned demand engine on top of what Emmit already started: Laylo email and SMS flows, a postal-code demand heatmap, and Meta-pixel retargeting, so the tour routes to proven demand instead of guesswork.",
      "Bridge the 3.1M streaming audience into premium experience buyers with a content and funnel system that turns passive listeners into RSVPs, ticket buyers, and members.",
      "Capture experience-economy margin with tiered and premium ticketing, a membership layer, and ritual-object merch, then scale market by market on data, not hope.",
    ],
    stats: [
      { value: 3.1, suffix: "M", label: "Streaming Audience to Activate", description: "Converting a 3.1M monthly Spotify audience into owned fans and experience buyers." },
      { value: 6, label: "Tour Markets Routed by Data" },
      { value: 25, suffix: "K+", label: "Owned Fans Captured" },
      { value: 6, label: "Month Build + Launch" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing anything, we audited Emmit's streaming footprint, the event site, the competitive immersive lane, and the market. Four findings shaped this plan.",
    insights: [
      {
        label: "Walled-Garden Reach",
        finding:
          "3.1M monthly Spotify listeners and roughly 300K followers, but that audience lives on DSP and platform rails. It is reach Emmit can see but cannot directly route a tour to. The owned layer is the unlock.",
        source: "Spotify / Music Metrics Vault",
      },
      {
        label: "Capture Started, Engine Missing",
        finding:
          "The event site already collects email, phone and postal code, runs a Meta Pixel, and prompts fans to share to bring it to their city. The instinct is right, but it is a guestlist, not an activation engine: no flows, no segmentation, no retargeting, no membership.",
        source: "thelightweleavebehind.com audit",
      },
      {
        label: "A Proven, Repeatable Format",
        finding:
          "The experience has run twice in LA, invite-only, and occupies real white space between a concert, a sound bath, and an art installation. It is ready to be productized into a tourable brand.",
        source: "Event recaps and press",
      },
      {
        label: "Market Timing",
        finding:
          "Immersive music and concert experiences are the fastest-growing live segment (over 30% projected CAGR), and audiences increasingly pay a premium for sensory, meaningful experiences over spectacle.",
        source: "Live music and immersive entertainment market reports",
      },
    ],
    marketContext:
      "Global live music revenue is projected to top $35B in 2026, 68% of millennials now spend more on experiences than goods, and Gen Z concertgoers have spent $2,100+ on shows in two years. The window for an artist-led, asset-light, tourable immersive brand is open now, before the fixed-installation giants (Meow Wolf, teamLab, Submersive) define the category for everyone.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Emmit's audience is not a casual streaming crowd. They are deep listeners who want meaning, calm, and beauty, and who will pay for an experience that gives them all three.",
    demographics:
      "18 to 34, design- and wellness-literate, concentrated in Los Angeles but national, with a mindset that values experiences over things.",
    demographicCards: [
      { label: "Age Range", value: "18 to 34", detail: "24 to 32 core" },
      { label: "Top Market", value: "Los Angeles", detail: "#1 listener city" },
      { label: "Streaming Reach", value: "3.1M / mo", detail: "~300K Spotify followers" },
      { label: "Mindset", value: "Experience over spectacle", detail: "Pays for meaning" },
    ],
    personas: [
      {
        name: "The Deep Listener",
        ageRange: "24 to 34",
        description:
          "Has had Emmit on late-night and focus playlists for years. Treats his music as a private sanctuary and craves a live setting that honors that intimacy.",
        traits: ["Long-time fan", "Playlist loyalist", "Seeks intimacy", "Will travel"],
      },
      {
        name: "The Wellness Seeker",
        ageRange: "25 to 40",
        description:
          "Already spends on sound baths, breathwork, and design-led wellness. Sees the experience as restorative, not just a concert, and buys premium for genuine state change.",
        traits: ["Wellness spender", "Premium buyer", "Calm over chaos", "Refers friends"],
      },
      {
        name: "The Culture Curator",
        ageRange: "21 to 32",
        description:
          "Lives for rare, beautiful, share-worthy moments. The invite-only scarcity and the visual world are catnip, and their recap content is the tour's best advertising.",
        traits: ["Tastemaker", "Content creator", "FOMO-driven", "High social reach"],
      },
    ],
    psychographics: [
      "Crave meaning, calm, and beauty over volume and spectacle",
      "Value craft, intimacy, and design literacy",
      "Spend on experiences and state change rather than things",
      "Want agency: they will actively pull the experience to their city",
    ],
    painPoints: [
      "Festivals and clubs are loud, crowded, and transactional",
      "Streaming is passive; no live space matches the feeling of the music",
      "Few experiences feel genuinely restorative and beautiful at once",
      "When something special does exist, it is invite-only and impossible to get into",
    ],
    purchaseTriggers: [
      "Scarcity and invite-only access that signals this is rare",
      "Recap content that creates FOMO and proves the experience is real",
      "Trusted word-of-mouth from someone who attended",
      "The agency to request it in their city, then being told it is coming",
    ],
    platforms: [
      { name: "TikTok", description: "182K followers. Recap and behind-the-experience content is the discovery and FOMO engine." },
      { name: "Instagram", description: "64K followers. Home for the visual world, invite drops, and the waitlist CTA." },
      { name: "Spotify", description: "3.1M monthly listeners. The top of funnel to convert into owned fans and ticket buyers." },
      { name: "Email / SMS (Laylo)", description: "The owned channel to be built. City-segmented invites, presales, and member drops." },
    ],
    quotes: [
      {
        text: "It sits somewhere between a classical concert, a sound bath, and an art installation. You do not watch it so much as sit inside it.",
        source: "Press and attendee descriptions, LA Water Edition",
      },
      {
        text: "I walked in wound up and left like I had actually been somewhere. I want my whole city to feel this.",
        source: "Paraphrased attendee sentiment, recap content",
      },
    ],
  },

  targets: [
    { metric: "Owned Fans Captured", value: "25K+", context: "Email and SMS subscribers built in six months from streamer conversion and event capture. An audience Emmit owns outright." },
    { metric: "Cost per RSVP", value: "< $3", context: "Paid demand-routing efficiency using pixel data and lookalikes off the existing audience." },
    { metric: "Tour Markets Routed", value: "6", context: "Cities validated by demand data and taken to on-sale during the engagement." },
    { metric: "Target Sell-Through", value: "90%+", context: "On intimate, scarcity-driven rooms, demand is concentrated by design." },
  ],

  competitive: {
    summary:
      "The immersive lane is hot but bifurcated. On one side, touring artists run beautiful immersive shows with no productized IP or fan-data routing. On the other, fixed mega-installations own the experience-economy brand but are capital-heavy and artist-less. The white space is an artist-led, asset-light, tourable experience brand routed by owned data. Nobody owns it yet.",
    competitors: [
      {
        name: "Olafur Arnalds (19-City Immersive Tour)",
        strength: "Established immersive concert hybrid with multi-night stands across Europe and North America.",
        gap: "Concert-hall and institutional. Not a transferable branded experience with fan-data routing or an owned demand engine.",
      },
      {
        name: "Jon Hopkins (Ambient / NASA Immersive)",
        strength: "Critical credibility and serious AV and ambient pedigree.",
        gap: "Festival and one-off oriented. No repeatable, ownable experience format to scale city by city.",
      },
      {
        name: "Nils Frahm (Sold-Out Immersive Piano)",
        strength: "Purist live reputation and a devoted neoclassical following.",
        gap: "Artist-as-venue with no scalable experiential brand or capture layer underneath it.",
      },
      {
        name: "Meow Wolf / teamLab (Experience-Economy Giants)",
        strength: "Category-defining immersive brands with blockbuster reach.",
        gap: "Capital-heavy fixed installations, not artist-led and not tourable. Emmit can be the artist-led, asset-light version that travels.",
      },
    ],
  },

  timelineHeading: "Project Roadmap",
  timelineSubheading:
    "A focused six-month build, from branding the experience and standing up the engine, through to routing and launching the first tour markets on real demand data.",
  timelineImageCaption: "6 Months / 4 Phases / 1 Touring Brand",
  deliverablesSubheading:
    "The brand, the infrastructure, the demand engine, and the content system that turn one LA experience into a tour.",

  timeline: [
    {
      phase: "Brand & Experience System",
      week: "Weeks 1-4",
      date: "June 2026",
      status: "upcoming",
      tasks: [
        "Lock the IP: name architecture, positioning, and brand identity for The Light We Leave Behind",
        "Build the experience bible: staging, lighting and water spec, run of show, sensory standards",
        "Design the asset kit: logo, type, color, motion, and applied templates",
        "Evolve the invite-only site into a tour hub with per-city waitlists",
      ],
    },
    {
      phase: "Infrastructure & Demand Engine",
      week: "Weeks 5-10",
      date: "June - July 2026",
      status: "upcoming",
      tasks: [
        "Stand up Laylo email and SMS with automated flows and city segments",
        "Unify RSVP, postal-code, and pixel data into a routable demand heatmap",
        "Set up tiered and premium ticketing plus a membership layer",
        "Build the pixel-based retargeting funnel from streamer and social to RSVP to buyer",
      ],
    },
    {
      phase: "Audience Activation",
      week: "Weeks 11-18",
      date: "August - September 2026",
      status: "upcoming",
      tasks: [
        "Launch the content engine: recap films and vertical edits that sell the next city",
        "Run paid demand-routing campaigns to grow city waitlists",
        "Convert streaming listeners into owned email and SMS subscribers",
        "Test creative and offers to lower cost per RSVP ahead of on-sales",
      ],
    },
    {
      phase: "Tour Routing & Launch",
      week: "Weeks 19-26",
      date: "October - November 2026",
      status: "upcoming",
      tasks: [
        "Select first markets from demand data and confirm venues with Emmit's team",
        "Roll out per-market on-sales with presales to the owned list",
        "Scale paid media around each on-sale and optimize to ticket sales",
        "Run the recap loop so each city sells the next",
      ],
    },
  ],

  deliverables: [
    {
      category: "Brand & Creative",
      icon: "◆",
      items: [
        { name: "Experience Brand System", quantity: "1 system", description: "Full visual identity for The Light We Leave Behind: logo, typography, color, and motion, applied across web, ticketing, and on-site." },
        { name: "The Experience Bible", quantity: "1 playbook", description: "The productized blueprint (staging, lighting and water spec, run of show, sensory standards) so any city replicates the LA experience faithfully." },
        { name: "Tour Hub Site Refresh", quantity: "1 build", description: "Evolve the invite-only landing page into a tour hub with per-city waitlists and capture wired into the CRM." },
      ],
    },
    {
      category: "Owned Infrastructure",
      icon: "database",
      items: [
        { name: "Laylo Email & SMS Engine", quantity: "Full build", description: "Fan messaging on Laylo with automated flows, city-segmented broadcasts, and presale and member drops." },
        { name: "Demand Heatmap & CRM", quantity: "1 system", description: "Unify RSVP, postal-code, and pixel data into a single routable demand map that tells us where to tour next." },
        { name: "Ticketing & Membership", quantity: "Setup", description: "Tiered and premium ticketing plus a membership layer to capture experience-economy margin." },
      ],
    },
    {
      category: "Paid Media & Demand Routing",
      icon: "target",
      items: [
        { name: "Demand-Routing Campaigns", quantity: "Ongoing", description: "Meta, TikTok, and YouTube campaigns by market, optimized to RSVPs and ticket sales. Ad spend billed separately at a 15% management fee." },
        { name: "Retargeting Funnel", quantity: "1 funnel", description: "Pixel-based funnel that moves streamers and social audiences from awareness to RSVP to ticket buyer." },
      ],
    },
    {
      category: "Content & Social",
      icon: "▶",
      items: [
        { name: "Recap Content System", quantity: "Per event", description: "Recap films and vertical edits engineered as the FOMO loop that sells the next city." },
        { name: "Social Growth Program", quantity: "Ongoing", description: "TikTok, Instagram, and YouTube cadence that translates the experience to screen and grows the top of funnel. Creator fees, if used, billed separately at a 15% management fee." },
      ],
    },
  ],

  scope: {
    subheading: "Everything included in the six-month build, and where the boundaries are.",
    included: [
      "Full brand identity and experience bible for The Light We Leave Behind",
      "Tour hub site refresh with per-city waitlist capture",
      "Laylo email and SMS build: flows, segmentation, and ongoing operation",
      "Unified demand heatmap (RSVP, postal code, pixel) and CRM setup",
      "Tiered and premium ticketing plus membership architecture",
      "Paid demand-routing campaign management across Meta, TikTok, and YouTube",
      "Pixel-based retargeting funnel from streamer and social to buyer",
      "Recap content system, vertical social edits, and tour market routing strategy",
    ],
    excluded: [
      "Live event production, staging, AV, and the water and lighting build (handled by Emmit's production team and promoters; CCD advises, available as an add-on, scoped separately)",
      "Ad spend and creator fees (billed separately at a 15% management fee)",
      "Music production, recording, and mixing",
      "Original video production beyond recap edits (full music videos and branded films available as an add-on, scoped and quoted separately)",
      "Talent booking, travel, venue costs, and tour logistics",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      { name: "Brand & Content Direction", description: "Stewardship of the experience brand plus content and recap creative direction across the run.", price: 2500, recurring: true },
      { name: "Owned Infrastructure & Fan CRM (Laylo)", description: "Laylo email and SMS operations, demand heatmap maintenance, and ticketing and membership ops.", price: 2000, recurring: true },
      { name: "Paid Media & Demand Routing", description: "Campaign strategy, creative direction, and management across Meta, TikTok, and YouTube. Ad spend billed separately at a 15% management fee.", price: 2000, recurring: true },
      { name: "Tour Strategy & Market Routing", description: "Market selection from demand data, on-sale rollout, and pacing intelligence per city.", price: 1000, recurring: true },
    ],
    subtotal: 7500,
    setupFee: {
      label: "Onboarding & Creative Fee (one-time)",
      amount: 10000,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Media Budget",
      amount: 8000,
      note: "Recommended demand-routing spend across Meta, TikTok, and YouTube, billed directly to platforms plus a 15% management fee. Scales up as tour markets are confirmed.",
    },
    total: 55000,
    paymentSchedule: [
      { milestone: "Month 1 (June) includes the $10K Onboarding & Creative Fee", percentage: 31.82, amount: 17500, due: "Upon approval" },
      { milestone: "Month 2 (July)", percentage: 13.64, amount: 7500, due: "July 1, 2026" },
      { milestone: "Month 3 (August)", percentage: 13.64, amount: 7500, due: "August 1, 2026" },
      { milestone: "Month 4 (September)", percentage: 13.64, amount: 7500, due: "September 1, 2026" },
      { milestone: "Month 5 (October)", percentage: 13.64, amount: 7500, due: "October 1, 2026" },
      { milestone: "Month 6 (November)", percentage: 13.62, amount: 7500, due: "November 1, 2026" },
    ],
    paymentTerms: "7 days from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    { step: 1, title: "Approve & Onboard", description: "Counter-sign and we begin immediately with the brand and experience system." },
    { step: 2, title: "Onboarding Questionnaire", description: "We collect current spend, list size and platform (Laylo), ticketing setup, market wishlist, and access credentials." },
    { step: 3, title: "Discovery & Brand Sprint", description: "A kickoff workshop to lock the IP, positioning, and the experience bible." },
    { step: 4, title: "Infrastructure Stand-Up", description: "We build Laylo, the demand heatmap, ticketing and membership, and the retargeting funnel." },
    { step: 5, title: "Route the First Markets", description: "We select cities from real demand data and take them to on-sale." },
  ],

  cta: {
    headline: "Let's take the light on the road.",
    body: "You have already proven the experience works and that people will line up for it. The next step is the infrastructure to make it travel. Let's brand it, build the engine, and route the first cities together.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/emmit-fenn/hero1.png",
    hero2: "/images/emmit-fenn/hero2.png",
    product: "/images/emmit-fenn/product.png",
    editorial: "/images/emmit-fenn/editorial.png",
    texture: "/images/emmit-fenn/texture.png",
    brutalist: "/images/emmit-fenn/brutalist.png",
    heroBg: "/images/emmit-fenn/hero-bg.jpg",
    ogImage: "/images/emmit-fenn/og-image.png",
    hero1Caption: "An immersive water, sound and light performance",
    brutalistCaption: "From a hidden experience to a touring brand",
  },
};
