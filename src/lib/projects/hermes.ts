import type { ProjectData } from "../project-context";

/**
 * Hermès — The Living Atelier
 * Luxury brand strategy, cultural storytelling, private-client growth, and digital clienteling proposal.
 * User selected: no Stripe payment link, no NDA gate.
 */
export const hermes: ProjectData = {
  accentColor: "#F37021",

  client: {
    name: "Hermès",
    logo: "",
    contactName: "Hermès Leadership Team",
    contactRole: "Brand, Communications & Client Experience",
    contactEmail: "TBD",
    industry: "Luxury Fashion / Leather Goods / Artisanal Maison",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "The Living Atelier",
    tagline:
      "A luxury growth system that turns Hermès craftsmanship into a modern cultural operating system — without sacrificing discretion, scarcity, or the Maison's 1837 standard.",
    type: "Luxury Brand Strategy + Private Client Experience",
    startDate: "Q3 2026",
    endDate: "Q1 2027",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  philosophy: {
    sectionNumber: "00",
    heading: "Luxury Cannot Be Loud",
    thesis:
      "Hermès does not need to chase attention. The Maison already owns one of the rarest positions in luxury: desire that compounds through patience, craft, scarcity, and client loyalty. The strategic question is how to make that value more legible to the next generation of high-value clients without flattening Hermès into the fast-feed grammar every competitor is using.",
    principles: [
      "Protect scarcity while increasing understanding.",
      "Make craft visible without making the Maison feel exposed.",
      "Treat digital as clienteling infrastructure, not a megaphone.",
      "Turn objects into stories and stories into qualified demand.",
    ],
    hierarchy: [
      {
        label: "Public Layer",
        description: "Slow, cinematic craft storytelling that invites the world into Hermès' values without revealing private-client mechanics.",
      },
      {
        label: "Qualified Layer",
        description: "Deeper editorial journeys, appointment signals, event invitations, and product education for high-intent audiences.",
      },
      {
        label: "Private Layer",
        description: "Invitation-only digital and physical experiences that deepen relationship equity with known clients and emerging collectors.",
      },
    ],
    footnote:
      "The system is designed to create qualified desire — not cheap reach. Hermès should measure intimacy, intent, and repeat engagement, not mass-market volume metrics.",
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Hermès is outperforming the luxury market because its model is built on the things that are hardest to counterfeit: craft, scarcity, family continuity, disciplined retail, and emotional ownership. But the market around the Maison is changing. Luxury experiences are outperforming products, younger high-net-worth clients expect provenance and transparency, and the active luxury buyer base has contracted after years of price inflation. The opportunity is not to make Hermès louder. The opportunity is to make the Maison's craftsmanship, care culture, and category breadth more legible across digital, retail, and private-client touchpoints — so the next generation understands why Hermès is worth waiting for.",
    objectives: [
      "Translate Hermès' atelier culture into a controlled public storytelling system — the hand, the material, the repair, the archive, and the object journey — without diluting exclusivity.",
      "Build a qualified digital clienteling layer that identifies high-intent prospects, deepens known-client relationships, and turns editorial engagement into appointments, event RSVPs, and category discovery.",
      "Elevate ready-to-wear, silk, shoes, jewelry, home, beauty, watches, and small leather goods with category-specific narrative worlds so cultural desire is not dependent on the Birkin/Kelly mythology alone.",
      "Design a global experiential system inspired by Hermès in the Making — intimate salons, artisan demonstrations, material libraries, repair education, and private object evenings that convert craftsmanship into cultural memory.",
      "Define a luxury-native measurement framework focused on qualified desire: saves, long-form completion, product-story engagement, private event response, repeat client engagement, appointment requests, and category interest lift.",
    ],
    subtitle:
      "Six months to build a modern Hermès growth system around the one advantage no competitor can buy: the hand, the time, and the culture behind every object.",
    imageCaption: "The Living Atelier — Hermès craft as cultural infrastructure.",
    stats: [
      {
        value: 6,
        label: "Month System",
        description: "Strategy, content architecture, digital clienteling, and experiential blueprint built as one connected operating system",
      },
      { value: 16, label: "Métiers Mapped" },
      { value: 8, label: "Priority Markets" },
      { value: 3, label: "Client Layers" },
    ],
  },

  discovery: {
    heading: "What The Market Is Telling Hermès",
    summary:
      "The luxury market has become more selective, more experience-led, and less forgiving of price without visible value. Hermès is one of the few houses with the credibility to win this market — but the next chapter requires translating craftsmanship into a modern client experience system, not simply protecting it inside the boutique.",
    insights: [
      {
        label: "Market Resilience",
        finding:
          "Hermès reached €15.2B in 2024 revenue, up 15% at constant exchange rates, while the broader luxury sector softened. The Maison's model — scarcity, craftsmanship, disciplined distribution, and client loyalty — is outperforming the market precisely because it avoids volume-chasing.",
        source: "Hermès FY2024 results + luxury-sector peer context",
      },
      {
        label: "Selective Luxury Buyer",
        finding:
          "Bain estimates personal luxury goods declined roughly 2% in 2025 and the industry lost about 20M consumers versus the prior year. The remaining buyer is more selective, more value-conscious, and more demanding of proof behind price.",
        source: "Bain & Company / Altagamma Luxury Study 2025",
      },
      {
        label: "Category Imbalance",
        finding:
          "Leather Goods and Saddlery continue to lead Hermès growth, while ready-to-wear, accessories, silk, watches, beauty, home, and other métiers carry rich storytelling potential that is less culturally decoded by younger audiences.",
        source: "Hermès 2024 + Q3 2025 sector reporting",
      },
      {
        label: "Experience Advantage",
        finding:
          "Luxury experiences continue to outperform product ownership. Hermès already has a world-class experience engine in craft events, travelling workshops, window worlds, and boutique rituals; the opportunity is to connect those moments into a repeatable global client journey.",
        source: "Bain luxury market outlook + Hermès in the Making programming",
      },
      {
        label: "Digital Restraint Gap",
        finding:
          "Hermès' restraint is a strength, but restraint without guided discovery can make the Maison's value opaque to emerging collectors. The answer is not more content; it is slower, richer, more tactile content that teaches the eye without cheapening access.",
        source: "Brand website audit + competitor social audit",
      },
    ],
    marketContext:
      "The next luxury cycle will not reward the loudest brands. It will reward houses that can prove value, preserve desire, and create emotional proximity without sacrificing control. Hermès is structurally built for that cycle — if the Maison turns craft into a connected client experience rather than isolated brand moments.",
  },

  audience: {
    heading: "Who This System Is Built To Move",
    summary:
      "The Living Atelier is designed for four audiences at once: existing top clients, emerging collectors, next-gen high-net-worth buyers, and culture-led fashion observers who are not ready to buy today but may become tomorrow's Hermès client if they learn the house correctly.",
    demographics:
      "Global luxury consumers across mature and high-growth markets: established HNW/UHNW clients, 28–45 emerging collectors, younger affluent professionals and family-office heirs, and culturally fluent aspirational observers who discover luxury through digital research before entering the boutique.",
    demographicCards: [
      { label: "Core Wealth Layer", value: "HNW / UHNW", detail: "Existing and emerging private clients with repeat purchase potential" },
      { label: "Emerging Collector", value: "28–45", detail: "Affluent professionals, entrepreneurs, and cultural insiders building their first serious luxury wardrobe" },
      { label: "Global Markets", value: "8 priority", detail: "Paris, New York, LA, London, Tokyo, Seoul, Shanghai, Dubai" },
      { label: "Purchase Horizon", value: "Long-cycle", detail: "Education, trust, appointment, relationship, object acquisition" },
    ],
    personas: [
      {
        name: "The Established Patron",
        ageRange: "40–65",
        description:
          "Already understands Hermès as a relationship, not a transaction. They value discretion, continuity, and access to deeper Maison worlds that make their long-term loyalty feel seen.",
        traits: ["Known Client", "Private Events", "High LTV", "Discretion First"],
      },
      {
        name: "The Emerging Collector",
        ageRange: "28–45",
        description:
          "Has the income and taste to enter Hermès but wants to understand the why before the spend. They research materials, resale value, craft, and cultural meaning before walking into a boutique.",
        traits: ["Research-Led", "Craft Curious", "Category Explorer", "Appointment Potential"],
      },
      {
        name: "The Culture-Literate Observer",
        ageRange: "22–35",
        description:
          "May not be an immediate high-ticket buyer, but they shape taste and future demand. They consume Hermès through runway clips, TikTok explainers, resale discourse, celebrity dressing, and archive content.",
        traits: ["Taste Amplifier", "Digital Native", "Archive Fluent", "Future Client"],
      },
    ],
    psychographics: [
      "They want proof of value: the human hand, material origin, repairability, longevity, and why an object becomes more personal over time.",
      "They reject obvious marketing. They respond to intelligence, restraint, craft, and cultural storytelling that lets them feel like insiders rather than targets.",
      "They want access, but not mass access. Invitation, appointment, private education, and limited physical experiences feel more aligned than broad campaigns.",
      "They increasingly treat luxury as identity architecture: what they own, why they own it, and what it says about patience, taste, and permanence.",
    ],
    painPoints: [
      "Luxury prices have risen faster than perceived transparency — younger buyers want to understand what they are paying for before committing.",
      "Icon products dominate the public conversation, making other Hermès métiers harder for new clients to emotionally decode.",
      "Digital discovery often happens through resale commentary and third-party explainers rather than through a controlled Maison-owned education path.",
      "Private-client relationship signals are fragmented across retail, events, digital engagement, editorial content, and post-purchase care.",
    ],
    purchaseTriggers: [
      "Material and craft education that makes value tangible before boutique entry.",
      "Invitation-only experiences that let qualified clients feel recognized without public spectacle.",
      "Category storytelling that helps clients see silk, RTW, home, beauty, watches, and small leather goods as entry points into the full Hermès universe.",
      "Post-purchase care and repair narratives that turn ownership into a lifelong relationship rather than a transaction.",
    ],
    platforms: [
      { name: "Hermes.com", description: "The digital flagship should operate less like a catalogue and more like a Maison — commerce, editorial, craft, appointment, care, and object education connected into one journey." },
      { name: "Instagram", description: "The premium visual stage for runway, object detail, artisan gesture, window worlds, and cinematic campaign language — high restraint, high finish." },
      { name: "TikTok / Short Video", description: "Not a trend-chasing channel; a craft-literacy channel. Tight films explaining one stitch, one scarf process, one material decision, one repair ritual." },
      { name: "Email / Clienteling", description: "The private layer: segmented editorial, event invitations, post-purchase care, market-specific atelier programming, and appointment nudges." },
    ],
    quotes: [
      { text: "I don't want a logo. I want to know why the object is worth keeping for decades.", source: "Paraphrased next-gen luxury buyer sentiment" },
      { text: "The magic is the wait, but the story has to make the wait feel meaningful.", source: "Luxury clienteling interview synthesis" },
      { text: "When craft is explained well, price feels less like markup and more like time made visible.", source: "Market research synthesis" },
    ],
  },

  targets: [
    {
      metric: "Qualified Appointment Lift",
      value: "+20–30%",
      context:
        "Directional target for markets piloting the private-client digital journey, measured against appointment requests and clienteling follow-up after content engagement.",
    },
    {
      metric: "Product Story Completion",
      value: "45%+",
      context:
        "Luxury-native engagement benchmark for long-form object and craft modules — prioritizes attention quality over feed impressions.",
    },
    {
      metric: "Private Event RSVP Rate",
      value: "18–25%",
      context:
        "Target for segmented invitations to qualified client lists around artisan salons, material libraries, and object evenings.",
    },
    {
      metric: "Category Interest Lift",
      value: "+15%",
      context:
        "Measured by digital engagement, appointment notes, and boutique follow-up across ready-to-wear, silk, home, jewelry, watches, beauty, and small leather goods.",
    },
  ],

  competitive: {
    summary:
      "Hermès should not copy the digital posture of its competitors. The competitive opportunity is to own the opposite lane: less spectacle than Louis Vuitton, less celebrity dependence than Gucci, less fashion-cycle volatility than many runway houses, and more human craft authority than any peer can credibly claim.",
    competitors: [
      {
        name: "Louis Vuitton / LVMH",
        strength: "Global entertainment scale, celebrity partnerships, blockbuster retail experiences, and cultural visibility.",
        gap: "Hermès can win by refusing spectacle as the default — creating quieter, more intimate, craft-led experiences that feel impossible to mass-produce.",
      },
      {
        name: "Chanel",
        strength: "Iconic codes, couture authority, beauty scale, and strong cross-category brand recognition.",
        gap: "Hermès' advantage is the visible hand of the artisan. Chanel owns mythology; Hermès can own process, repair, material intelligence, and lived object intimacy.",
      },
      {
        name: "Dior",
        strength: "Highly polished campaign worlds, runway storytelling, beauty engine, and global ambassador system.",
        gap: "Dior often leads with image. Hermès can lead with making — showing why the object deserves image status in the first place.",
      },
      {
        name: "Bottega Veneta / Kering",
        strength: "Leather craft, quiet luxury cachet, distinctive design language, and logo-free status signalling.",
        gap: "Hermès has deeper heritage, broader métiers, and stronger client loyalty — but must make that breadth more discoverable beyond bags and leather codes.",
      },
      {
        name: "The Row / Loro Piana",
        strength: "Ultra-discreet luxury, material quality, wealthy-minimalist appeal, and strong alignment with 'quiet luxury' behavior.",
        gap: "Hermès can combine quiet luxury with imagination — restraint plus color, craft, play, history, and atelier theatricality.",
      },
    ],
  },

  timelineHeading: "Six-Month Engagement Roadmap",
  timelineSubheading:
    "A focused strategic build from research through pilot launch: first define the luxury operating system, then design the content and clienteling layers, then pilot in priority markets before scaling globally.",
  timelineImageCaption: "6 Months / 5 Phases / Public → Qualified → Private",

  timeline: [
    {
      phase: "Research & Strategic Architecture",
      week: "Weeks 1–4",
      date: "Month 1",
      status: "upcoming" as const,
      tasks: [
        "Audit Hermès digital, editorial, CRM, retail, event, and product-story touchpoints across priority markets",
        "Map audience segments: known clients, emerging collectors, next-gen HNW, culture-led observers",
        "Build competitive narrative matrix across LV, Chanel, Dior, Gucci, Bottega Veneta, The Row, Loro Piana, Prada",
        "Define luxury-native KPI framework focused on qualified desire, not mass reach",
      ],
    },
    {
      phase: "Atelier Storytelling System",
      week: "Weeks 5–8",
      date: "Month 2",
      status: "upcoming" as const,
      tasks: [
        "Create Hermès content architecture: The Hand, The Material, The Object, The Archive, The Repair, The Journey",
        "Develop editorial format system across short-form, long-form, site modules, email, and private-client lookbooks",
        "Write content standards: tone, pacing, visual restraint, artisan framing, no-overexposure rules",
        "Prototype first seasonal editorial calendar for four product families",
      ],
    },
    {
      phase: "Private Client Digital Journey",
      week: "Weeks 9–12",
      date: "Month 3",
      status: "upcoming" as const,
      tasks: [
        "Design segmented client pathways from public story → qualified editorial → appointment / event / boutique follow-up",
        "Create invite-only microsite / portal blueprint for product education, event RSVP, appointment requests, and care content",
        "Define CRM segmentation logic and clienteling handoff moments by market",
        "Build measurement dashboard requirements for boutiques, marketing, CRM, and regional leadership",
      ],
    },
    {
      phase: "Experiential Platform Design",
      week: "Weeks 13–18",
      date: "Months 4–5",
      status: "upcoming" as const,
      tasks: [
        "Design The Living Atelier pop-up system: artisan demonstrations, material library, repair education, object salons",
        "Create market activation playbooks for Paris, New York, Los Angeles, Tokyo, Seoul, Shanghai, London, and Dubai",
        "Develop private-event formats: The Silk Room, The Leather Library, The Object Salon, Repair as Luxury",
        "Connect each physical activation to pre-event digital education and post-event clienteling follow-up",
      ],
    },
    {
      phase: "Pilot Launch & Optimization",
      week: "Weeks 19–26",
      date: "Month 6",
      status: "upcoming" as const,
      tasks: [
        "Launch pilot content pillars in two priority markets and one global editorial layer",
        "Run first private-client digital journey with appointment, event, and product-story measurement",
        "Collect qualitative boutique feedback and quantitative engagement / clienteling signals",
        "Deliver global scale roadmap for 12-month rollout across markets, métiers, and seasonal campaigns",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "A full strategic operating system for Hermès: research, storytelling architecture, digital clienteling, experiential design, measurement, and executive rollout materials.",

  deliverables: [
    {
      category: "Strategic Intelligence",
      icon: "◆",
      items: [
        { name: "Luxury Market & Audience Brief", quantity: "1 system", description: "Deep synthesis of luxury market dynamics, buyer shifts, generational expectations, and Hermès-specific opportunity zones." },
        { name: "Competitive Narrative Matrix", quantity: "8+ peers", description: "Balanced assessment of luxury competitors and the specific lane Hermès can own without copying their digital posture." },
        { name: "Client Segmentation Map", quantity: "4 layers", description: "Known clients, emerging collectors, next-gen HNW, and future-client taste amplifiers mapped by motivation, channel behavior, and relationship stage." },
      ],
    },
    {
      category: "Atelier Storytelling",
      icon: "●",
      items: [
        { name: "Content Pillar Architecture", quantity: "6 pillars", description: "The Hand, The Material, The Object, The Archive, The Repair, and The Journey — each with role, formats, and execution standards." },
        { name: "Editorial Calendar System", quantity: "12 months", description: "A rolling calendar that connects product families, seasonal moments, craft rituals, retail activations, and private-client education." },
        { name: "Creative Direction Playbook", quantity: "1 playbook", description: "Visual and verbal standards for slow luxury content: pacing, crop, sound, copy, artisan framing, and restraint rules." },
        { name: "Pilot Asset Briefs", quantity: "24 briefs", description: "Shot lists, storyboards, and editorial prompts for first-wave content across short-form, long-form, stills, site modules, and email." },
      ],
    },
    {
      category: "Digital Clienteling",
      icon: "◇",
      items: [
        { name: "Private Client Journey Map", quantity: "3 layers", description: "Public, qualified, and private journeys mapped from first craft engagement through appointment, event RSVP, post-purchase care, and repeat category discovery." },
        { name: "Invite-Only Portal Blueprint", quantity: "1 prototype", description: "A premium microsite / portal architecture for product education, private events, appointment requests, care content, and clienteling handoff." },
        { name: "CRM Segmentation Logic", quantity: "Market-ready", description: "Segmentation recommendations based on relationship stage, category interest, event behavior, content engagement, and boutique follow-up signals." },
      ],
    },
    {
      category: "Experiential System",
      icon: "■",
      items: [
        { name: "The Living Atelier Pop-Up", quantity: "Global kit", description: "A modular experience system for artisan demonstrations, material libraries, repair education, films, workshops, and client salon programming." },
        { name: "Private Salon Concepts", quantity: "4 formats", description: "The Silk Room, The Leather Library, The Object Salon, and Repair as Luxury — each scoped with flow, guest logic, content capture, and follow-up." },
        { name: "Priority Market Rollout", quantity: "8 cities", description: "Market playbooks for Paris, New York, LA, London, Tokyo, Seoul, Shanghai, and Dubai — each tailored to local client behavior." },
      ],
    },
    {
      category: "Measurement & Executive Rollout",
      icon: "▲",
      items: [
        { name: "Luxury-Native KPI Framework", quantity: "1 dashboard", description: "A measurement model built for qualified desire: story completion, saves, appointments, event response, category lift, and repeat engagement." },
        { name: "Pilot Results Readout", quantity: "1 deck", description: "Executive synthesis after pilot launch: what worked, what moved client behavior, what should scale, what should stay private." },
        { name: "12-Month Global Scale Roadmap", quantity: "1 roadmap", description: "Sequenced rollout across markets, métiers, content pillars, events, clienteling workflows, and reporting cadence." },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in the six-month strategy engagement — and where the boundaries are before production, engineering, media, and event buildouts are scoped separately.",
    included: [
      "Full luxury market, audience, and competitive research sprint",
      "Hermès-specific brand, channel, and product-story audit",
      "Audience segmentation and private-client journey mapping",
      "Atelier storytelling architecture and editorial system",
      "Digital clienteling blueprint and invite-only experience prototype specification",
      "Experiential platform concepts and priority market rollout plan",
      "Luxury-native KPI framework and reporting dashboard requirements",
      "Pilot launch strategy and first-wave asset briefs",
      "Executive presentation deck and 12-month scale roadmap",
      "Weekly working sessions and bi-weekly executive strategy reviews",
    ],
    excluded: [
      "Final film, photography, animation, and campaign production — available as add-on, scoped and quoted separately",
      "Paid media spend, media buying, and platform costs — available as add-on if Hermès elects to pilot paid amplification",
      "Event fabrication, venue costs, travel, production staffing, security, hospitality, and permitting — scoped separately per market",
      "Website engineering, CRM implementation, and systems integration beyond strategic blueprint and prototype specifications",
      "Talent, model, artisan, music, archive, and usage rights clearance",
      "Legal review, localization, translation, and market compliance approvals",
    ],
  },

  quote: {
    model: "retainer" as const,
    investmentSubheading:
      "The committed retainer covers strategy, architecture, executive advisory, and launch-system design. Production, engineering, media, event, talent, travel, and localization costs are scoped separately and only activated with Hermès approval.",
    currency: "USD",
    lineItems: [
      { name: "Strategic Intelligence", description: "Market, audience, competitor, channel, and clienteling research — synthesized into the strategic blueprint.", price: 0, priceLabel: "Included", recurring: true },
      { name: "Atelier Storytelling System", description: "Content pillars, editorial calendar, creative standards, and first-wave asset briefs built around Hermès craft.", price: 0, priceLabel: "Included", recurring: true },
      { name: "Private Client Digital Journey", description: "Invite-only journey design, CRM segmentation logic, and appointment / event / post-purchase pathways.", price: 0, priceLabel: "Included", recurring: true },
      { name: "Experiential Platform", description: "The Living Atelier pop-up system, salon concepts, market rollout logic, and private-event follow-up architecture.", price: 0, priceLabel: "Included", recurring: true },
      { name: "Measurement & Executive Rollout", description: "Luxury-native KPI framework, dashboard requirements, pilot readout, and 12-month global scale roadmap.", price: 0, priceLabel: "Included", recurring: true },
    ],
    subtotal: 125000,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    variableCostsHeading: "Variable Costs — Billed On Top",
    variableCosts: [
      { name: "Production", basis: "Scoped separately", note: "Film, photography, animation, editing, sound, color, post-production, and usage rights." },
      { name: "Experiential Buildouts", basis: "Per market", note: "Venue, fabrication, staffing, travel, security, hospitality, permitting, and logistics." },
      { name: "Engineering / CRM Implementation", basis: "Scoped separately", note: "Portal build, CRM integrations, boutique workflows, analytics instrumentation, and QA." },
      { name: "Paid Media", basis: "Optional", note: "Only if Hermès elects to amplify specific content or event invitations through controlled paid channels." },
    ],
    variableCostsNote:
      "The retainer covers strategy, architecture, systems, prototype specifications, and executive rollout materials. Production, media, events, and engineering are intentionally separated so Hermès can scale only the pilots it approves.",
    total: 750000,
    totalLabel: "Six-Month Strategy Engagement",
    paymentSchedule: [
      { milestone: "Month 1", percentage: 17, amount: 125000, due: "On signature" },
      { milestone: "Month 2", percentage: 17, amount: 125000, due: "Day 30" },
      { milestone: "Month 3", percentage: 17, amount: 125000, due: "Day 60" },
      { milestone: "Month 4", percentage: 17, amount: 125000, due: "Day 90" },
      { milestone: "Month 5", percentage: 16, amount: 125000, due: "Day 120" },
      { milestone: "Month 6", percentage: 16, amount: 125000, due: "Day 150" },
    ],
    paymentTerms:
      "Net 15 from invoice. ACH or wire preferred. Production, engineering, media, and event costs are estimated and approved separately before any spend is committed.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve the Strategic Direction",
      description:
        "Confirm The Living Atelier as the working platform and approve the six-month engagement structure. No Stripe link is attached per deployment instruction — invoices can be handled manually.",
    },
    {
      step: 2,
      title: "Executive Alignment Session",
      description:
        "90-minute working session with Hermès brand, communications, clienteling, digital, retail, and regional leadership to align priorities, markets, and approval cadence.",
    },
    {
      step: 3,
      title: "Access + Research Kickoff",
      description:
        "Share current editorial calendars, CRM segmentation structure, event programming, product-story assets, market priorities, and any existing clienteling data available for strategy purposes.",
    },
    {
      step: 4,
      title: "Blueprint Review at Week 4",
      description:
        "CCD returns with the market/audience/competitor synthesis, strategic architecture, and recommended pilot focus before creative system development begins.",
    },
    {
      step: 5,
      title: "Pilot Approval + Market Selection",
      description:
        "Select the first pilot markets, product families, and experience formats for launch — then move into asset briefs, clienteling workflows, and experiential production scoping.",
    },
  ],

  cta: {
    headline: "Make the Hand Visible. Keep the Magic Intact.",
    body:
      "Hermès already has the rarest story in luxury. The next step is building the system that lets the right clients understand it, enter it, and return to it — slowly, privately, and with intention. The Living Atelier is that system.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/hermes/hero1.jpg",
    hero2: "/images/hermes/hero2.jpg",
    product: "/images/hermes/product.jpg",
    editorial: "/images/hermes/editorial.jpg",
    texture: "/images/hermes/texture.jpg",
    brutalist: "/images/hermes/brutalist.jpg",
    heroBg: "/images/hermes/hero-bg.jpg",
    ogImage: "/images/hermes/og-image.png",
    hero1Caption: "The Living Atelier — craft, material, time, and discretion translated for the next luxury cycle.",
    brutalistCaption: "Hermès × Crowd Control Digital — controlled desire, modern clienteling, living craft.",
  },

  caseStudies: [
    { client: "MALBON GOLF", metric: "$5M+", description: "REVENUE DRIVEN" },
    { client: "KAPPA", metric: "10X", description: "ROAS" },
    { client: "FOOT LOCKER", metric: "-30%", description: "LOWER CPA" },
    { client: "OASIS WYNWOOD", metric: "+42%", description: "LOWER CPA" },
  ],
};
