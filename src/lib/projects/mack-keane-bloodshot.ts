import type { ProjectData } from "../project-context";

export const mackKeaneBloodshot: ProjectData = {
  accentColor: "#E0452F",

  client: {
    name: "Mack Keane",
    logo: "",
    contactName: "Daniel Cagan",
    contactRole: "Management / Always Thursday",
    contactEmail: "dc@alwaysthursday.co",
    industry: "Music / R&B / Neo-Soul",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Bloodshot: The Engagement Flight",
    tagline:
      "The last $380 bought 14,000 views and almost nothing else. The next $400 goes exclusively to placements where a real person can actually like, comment, and subscribe — backed by verified-human engagement that teaches YouTube who this video is for.",
    type: "YouTube Ads + SWRM Engagement Campaign",
    startDate: "June 15, 2026",
    endDate: "July 9, 2026",
    duration: "3-Week Flight",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "One video, one budget, one job: real engagement. We rebuild the YouTube campaign around the single mechanic that worked in the last flight — in-feed placements where viewers choose to click — and kill everything that inflated views without producing a single fan. Layered on top, a SWRM campaign puts verified real users into the video's comment section and engagement signals at the exact moments the flight is delivering new viewers, so YouTube's algorithm reads Bloodshot as a video worth recommending. The whole flight is timed to wrap as the Wide Eyed Tour opens in Philadelphia on July 9, handing the artist team retargeting audiences built from people who actually engaged.",
    objectives: [
      "Put 100% of media spend into in-feed (discovery) placements — the only campaign type in the previous flight that produced subscribers (37 subs from 723 views, a 5.1% conversion)",
      "Eliminate empty reach: no PMax, no in-stream interruptions, no TV-screen delivery, no cheap-geo arbitrage — US + Canada only, weighted toward Wide Eyed Tour markets",
      "Target the audiences the video was made for: custom segments built on Daniel Caesar, Frank Ocean, SZA, Jorja Smith, and Giveon listeners, plus live-session YouTube culture (COLORS, Tiny Desk viewers)",
      "Use SWRM verified-human engagement pulses to triple comment velocity and compound the algorithm signal while paid traffic is flowing",
      "Hand off engaged-viewer retargeting audiences the week the tour opens — so the next dollar spent (tour or otherwise) starts from real fans, not cold reach",
    ],
    subtitle:
      "Engagement-only media buying plus verified-human engagement seeding — every dollar accountable to actions, not impressions.",
    imageCaption: "Bloodshot (In A Field) — one take, golden hour",
    stats: [
      {
        value: 100,
        suffix: "%",
        label: "Engagement-Optimized Spend",
        description:
          "Every placement is one a viewer chose to click — in-feed only, TV screens excluded, US + Canada core",
      },
      { value: 150, suffix: "+", label: "New Subscribers Targeted" },
      { value: 3, suffix: "×", label: "Comment Velocity Goal" },
      { value: 11, label: "Tour Markets Weighted" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before recommending anything, we pulled the full performance report from the previous flight, ran AI video analysis on Bloodshot (In A Field), and audited the video's organic engagement. The data tells one clean story: the music converts — the media buying didn't let it.",
    insights: [
      {
        label: "Empty Views, By Design",
        finding:
          "Of the 14,362 views the previous flight bought, 9,748 came from 'Premium' in-stream campaigns that produced exactly 0 subscribers, and 3,253 views were delivered on TV screens — a placement where liking, commenting, and subscribing is physically impossible. High view rate, zero fan creation.",
        source: "Previous campaign performance report (May 28 – Jun 9)",
      },
      {
        label: "Geo Arbitrage",
        finding:
          "3,711 views were bought in Australia at low CPVs — and converted into exactly 1 subscriber. Cheap views from markets with no tour routing and no fan-development path are how a report looks good while the channel stays flat.",
        source: "Previous campaign performance report",
      },
      {
        label: "The One Thing That Worked",
        finding:
          "The small in-feed 'Sub Growth' campaign was the only engine producing fans: 723 views from 273 deliberate clicks, converting 37 subscribers — a 5.1% subscriber rate. The 'General Users' audience converted even harder: 23 subscribers from 777 views. Engagement came from people who chose to watch. This flight scales that mechanic and nothing else.",
        source: "Previous campaign performance report",
      },
      {
        label: "The Organic Comments Prove the Music Converts",
        finding:
          "The video's 50 organic comments are remarkably high-intent: 'One of my favorite artists right now,' 'need this version on spotify!!!,' 'His voice has the same timbre as Frank Ocean,' 'sooo excited to see this live.' When a real listener reaches this video, they engage. The previous flight simply never delivered real listeners.",
        source: "YouTube comment analysis",
      },
      {
        label: "The Video Is Built for Engagement",
        finding:
          "Frame-by-frame AI analysis identified the falsetto climax at 2:45–2:56 ('Am I when it's said and done') as the single strongest comment trigger in the video, and 0:42–0:54 ('What am I running from?') as the ideal 15-second cold-viewer hook. These timestamps drive the ad thumbnails, headlines, and the SWRM comment direction — nothing is generic.",
        source: "TwelveLabs video AI analysis",
      },
    ],
    marketContext:
      "The timing does half the work. Wide Eyed dropped May 8 to real critical momentum — Spotify Artists to Watch 2026, a COLORS performance, collaborations with Kaytranada and Terrace Martin — and the first headline tour opens July 9 in Philadelphia. A three-week engagement flight landing in exactly this window does double duty: it builds the YouTube signal while awareness compounds in the 11 markets where Mack is about to play. Engagement bought now is tour demand in July.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "The previous flight's own data plus the video's organic engagement tell us precisely who converts: 18–34 live-session R&B heads who found Mack through adjacent artists, watch performance content on mobile, and comment when a vocal moment earns it.",
    demographics:
      "Core 18–34 (the 25–34 bracket alone drove 38.8% of prior views), near-even gender split, US + Canada core, 63% mobile.",
    demographicCards: [
      {
        label: "Age Range",
        value: "18–34 core",
        detail: "25–34 drove 38.8% of prior-flight views",
      },
      {
        label: "Gender",
        value: "42% M / 40% F",
        detail: "Genuinely balanced — target both, segment neither out",
      },
      {
        label: "Geography",
        value: "US + Canada",
        detail: "Weighted to the 11 Wide Eyed Tour markets",
      },
      {
        label: "Device",
        value: "63% mobile",
        detail: "Where engagement physically happens — TV screens excluded",
      },
    ],
    personas: [
      {
        name: "The Day One",
        ageRange: "22–30",
        description:
          "Already in the comments — they found Mack through Intersections, ESTA., or the DESTIN CONRAD tour and treat being early as identity. They don't need convincing; they need prompts and a visible, active comment section to rally around. Highest conversion to tour tickets.",
        traits: ["Loyal Commenter", "Tour-Bound", "Playlist Adder", "Word-of-Mouth Engine"],
      },
      {
        name: "The Adjacent-Artist Fan",
        ageRange: "18–34",
        description:
          "Deep in Daniel Caesar, Frank Ocean, SZA, Giveon, and Jorja Smith rotations but hasn't met Mack yet. The organic comments already make the connection for us ('same timbre as Frank Ocean'). In-feed targeting puts Bloodshot directly into their browse and search surfaces — where they click by choice.",
        traits: ["Genre-Loyal", "High Intent", "Algorithm-Led Discovery", "Live-Version Collector"],
      },
      {
        name: "The Live-Session Seeker",
        ageRange: "20–35",
        description:
          "Lives in the COLORS / Tiny Desk / Mahogany rabbit hole and rates artists by what they sound like without the studio. A one-take, golden-hour field performance is precisely their format — 'this should be the standard for every concert' is already in the comments. They subscribe when the vocals are real.",
        traits: ["Session Binger", "Quality-First", "Comment-Prone", "Share-Prone"],
      },
    ],
    psychographics: [
      "Vocal craft over polish — this audience rewards raw, unprocessed performance; the one-take field format is a feature, not a constraint",
      "Discovery pride — being early on an ascending artist is social currency; 'we just here before anyone notices' is verbatim from the comments",
      "Live-performance video culture — they treat YouTube sessions as the proof-of-artist test, and they engage (comment, save, share) more than passive music consumers",
      "Emotional lyricism — identity, doubt, and catharsis lyrics ('What am I running from?') are exactly what this segment screenshots and quotes",
    ],
    painPoints: [
      "Their feeds are flooded with overproduced, algorithm-bait content — authentic live vocals are scarce and they actively hunt for them",
      "They keep finding great live versions that never make it to streaming — 'need this version on spotify!!!' is the top-liked comment behavior pattern",
      "New-artist discovery on YouTube is buried under interruption ads they skip on principle — in-feed recommendations are how they actually find music",
    ],
    purchaseTriggers: [
      "A vocal climax clip that demands reaction — the 2:45 falsetto run is engineered for 'did he just hit that note?!' comments",
      "An active, visible comment community — engagement begets engagement; nobody comments in an empty room",
      "Tour proximity — a date in their city within 30 days converts passive listeners into ticket buyers",
      "Live-session format trust — COLORS and Spotify Artists to Watch credentials lower the discovery barrier",
    ],
    platforms: [
      {
        name: "YouTube",
        description:
          "The flight's entire arena. 8.2K subscribers against 1M+ adjacent-artist live-session viewership — the gap is the opportunity. Live-performance culture engages here like nowhere else.",
      },
      {
        name: "Spotify",
        description:
          "Where engagement converts to consumption — Artists to Watch 2026, Wide Eyed out now. YouTube engagement feeds the algorithmic pipeline.",
      },
      {
        name: "Instagram",
        description:
          "Mack's core social presence (@mackkeane) — where engaged YouTube viewers go to deepen the relationship after discovery.",
      },
      {
        name: "TikTok",
        description:
          "Snippet-driven discovery layer — the comments confirm viewers arrive from snippets ('been waiting on this vid since he dropped the snippet').",
      },
    ],
    quotes: [
      {
        text: "His voice has the same timbre as Frank Ocean",
        source: "YouTube comment — Bloodshot (In A Field)",
      },
      {
        text: "need this version on spotify!!!",
        source: "Top-liked YouTube comment — Bloodshot (In A Field)",
      },
      {
        text: "Mack saving music… we just here before anyone notices",
        source: "YouTube comment — Bloodshot (In A Field)",
      },
    ],
  },

  targets: [
    {
      metric: "New Subscribers",
      value: "150+",
      context:
        "The prior flight's in-feed campaign converted at 5.1% subscribers-per-view. This flight puts the full $300 behind that exact mechanic.",
    },
    {
      metric: "Comment Velocity",
      value: "3×",
      context:
        "From 50 comments to 150+ — SWRM verified-human pulses plus in-feed viewers who clicked by choice, prompted by the video's strongest moments.",
    },
    {
      metric: "Cost Per Subscriber",
      value: "<$2.50",
      context:
        "The previous flight paid an effective $6.55 per subscriber ($380 / 58 subs) while optimizing for views. Optimizing for engagement cuts that by more than half.",
    },
    {
      metric: "Tour-Market Weighting",
      value: "11 markets",
      context:
        "Geo bids weighted to Wide Eyed Tour stops so engagement compounds into ticket demand before the July 9 Philadelphia opener.",
    },
  ],

  timelineHeading: "Flight Plan",
  timelineSubheading:
    "Three weeks from rebuild to wrap — timed so peak engagement lands the week the Wide Eyed Tour opens in Philadelphia on July 9.",
  timelineImageCaption: "3 Weeks / 3 Phases / $400",
  deliverablesSubheading:
    "Two workstreams, one target: every deliverable below exists to produce likes, comments, saves, and subscribers — never raw view count.",

  timeline: [
    {
      phase: "Rebuild & Setup",
      week: "Week 1",
      date: "Jun 15 – Jun 19",
      status: "upcoming" as const,
      tasks: [
        "Google Ads + YouTube channel access and audit of the paused label campaigns",
        "Build thumbnail and headline variants around the TwelveLabs-identified moments (0:42 hook / 2:45 falsetto climax) — the full video runs as-is",
        "Build 4 custom audience segments: comp-artist listeners, live-session culture, engaged-viewer remarketing, tour-market geo",
        "Write SWRM comment direction brief grounded in the video's actual moments and the existing thread's voice",
      ],
    },
    {
      phase: "The Flight",
      week: "Weeks 2–3",
      date: "Jun 20 – Jul 3",
      status: "upcoming" as const,
      tasks: [
        "In-feed campaigns live — US + Canada, mobile-first, TV screens excluded",
        "SWRM engagement pulses 1 and 2 timed to paid-traffic peaks for comment velocity",
        "Twice-weekly optimization passes: shift budget toward segments producing subscribers and comments, not views",
        "Progressive geo-weighting toward the 11 Wide Eyed Tour markets",
      ],
    },
    {
      phase: "Tour Handoff",
      week: "Week 4",
      date: "Jul 4 – Jul 9",
      status: "upcoming" as const,
      tasks: [
        "Final SWRM pulse as tour-week attention peaks",
        "Package engaged-viewer retargeting audiences (25%+ watchers, engagers, new subscribers)",
        "Wrap report: engagement economics vs. the previous flight, side by side",
        "Recommendation for the next dollar — tour support, next video, or owned-fan capture",
      ],
    },
  ],

  deliverables: [
    {
      category: "YouTube Ads",
      icon: "▶",
      items: [
        {
          name: "Campaign Architecture Rebuild",
          quantity: "1 build",
          description:
            "In-feed (discovery) placements only — the format that produced a 5.1% subscriber rate in the prior flight. No PMax, no in-stream interruptions, no TV-screen delivery.",
        },
        {
          name: "Custom Audience Segments",
          quantity: "4 segments",
          description:
            "Daniel Caesar / Frank Ocean / SZA / Giveon / Jorja Smith listener segments, live-session culture (COLORS, Tiny Desk viewers), engaged-viewer remarketing, and tour-market geo layers.",
        },
        {
          name: "Thumbnail + Headline Variants",
          quantity: "3 sets",
          description:
            "The full video runs untouched — testing happens on the packaging. Thumbnail and headline variants built around the AI-identified peak moments (the 0:42 hook, the 2:45 falsetto climax) to win the in-feed click.",
        },
        {
          name: "Optimization Passes",
          quantity: "2× weekly",
          description:
            "Budget shifts toward whatever is producing subscribers and comments per dollar — measured on engagement economics, never CPV.",
        },
      ],
    },
    {
      category: "SWRM Engagement",
      icon: "◆",
      items: [
        {
          name: "SWRM Verified-Engagement Campaign",
          quantity: "1 campaign",
          description:
            "Verified real users — never bots, never click farms — watch, like, comment, and save the video. Fully managed end to end on the SWRM platform.",
        },
        {
          name: "Comment Direction Brief",
          quantity: "1 brief",
          description:
            "SWRMER comments grounded in what actually happens in the video — the falsetto run, the one-take format, the field setting — matched to the existing thread's organic voice.",
        },
        {
          name: "Engagement Pulses",
          quantity: "3 pulses",
          description:
            "Timed bursts synchronized with paid-traffic peaks, so comment velocity and watch signals compound the algorithm's read on the video while new viewers arrive.",
        },
      ],
    },
    {
      category: "Measurement",
      icon: "□",
      items: [
        {
          name: "Live Performance Dashboard",
          quantity: "1 dashboard",
          description:
            "Engagement-first reporting: subscribers, comments, likes, saves, and cost-per-engaged-action — with the previous flight's numbers alongside for honest comparison.",
        },
        {
          name: "Wrap Report + Retargeting Handoff",
          quantity: "1 report",
          description:
            "Delivered before the July 9 tour opener: full engagement economics plus packaged retargeting audiences built from everyone who engaged during the flight.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything in this flight — and the boundaries, so every dollar of the $400 stays accountable.",
    included: [
      "YouTube Ads campaign rebuild, in-feed engagement placements only",
      "4 custom audience segments + comp-artist and tour-market targeting",
      "Thumbnail + headline variants built on the TwelveLabs-identified peak moments",
      "SWRM verified-human engagement campaign with 3 timed pulses",
      "Comment direction brief matched to the video's organic thread voice",
      "Twice-weekly optimization passes on engagement economics",
      "Live dashboard + wrap report with prior-flight comparison",
      "Engaged-viewer retargeting audience handoff for the tour window",
    ],
    excluded: [
      "Meta / Instagram advertising (handled separately — available as add-on)",
      "TikTok, Spotify Marquee, or other platform campaigns (available as add-on)",
      "Video editing or new creative production — the full video runs as-is (available as add-on)",
      "Email / SMS fan capture build via Laylo (available as add-on — the natural next step for owning the audience this flight creates)",
      "Tour ticketing campaigns (available as add-on — the retargeting audiences from this flight are built to feed it)",
    ],
  },

  quote: {
    model: "project",
    currency: "USD",
    lineItems: [
      {
        name: "YouTube Ads Media Spend",
        description:
          "100% billed to platform, zero markup — in-feed engagement placements, US + Canada, tour-market weighted. Management included.",
        price: 300,
      },
      {
        name: "SWRM Engagement Campaign",
        description:
          "Fully managed: campaign setup, comment direction brief, 3 timed pulses, verified-human payouts. SWRM is a Crowd Control platform — management is built into the campaign.",
        price: 100,
      },
    ],
    subtotal: 400,
    discount: {
      label: "CCD management fee — waived for this flight",
      percentage: 0,
      amount: 0,
    },
    total: 400,
    paymentSchedule: [
      {
        milestone: "Full Flight Budget",
        percentage: 100,
        amount: 400,
        due: "Upon approval",
      },
    ],
    paymentTerms: "Due on approval — flight launches within 12–24 hours of access",
    paymentLink: "https://buy.stripe.com/9B6aEWfycgzf6eRfs5a7C0g",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve the Flight",
      description:
        "Reply to confirm the $300 / $100 split and the June 15 start. The whole plan is built to wrap before Philadelphia on July 9.",
    },
    {
      step: 2,
      title: "Grant Google Ads Access",
      description:
        "Invite geoff@crowdcontroldigital.com to the Google Ads account and link the YouTube channel — same drill as the Meta Business portfolio, far less painful.",
    },
    {
      step: 3,
      title: "12–24 Hour Build",
      description:
        "Audiences built, thumbnail and headline variants staged, SWRM brief written — live within 12–24 hours of access.",
    },
    {
      step: 4,
      title: "Watch the Dashboard",
      description:
        "Engagement-first reporting from day one, with the previous flight's numbers side by side. No heartburn this time.",
    },
    {
      step: 5,
      title: "Tour-Week Handoff",
      description:
        "Wrap report and retargeting audiences delivered before the July 9 opener — so the next decision is made on real fan data.",
    },
  ],

  cta: {
    headline: "Let's make the next $400 count.",
    body: "The last flight proved the music converts when real listeners reach it. This one is built so they do — every placement clickable, every engagement human, every dollar accountable. Approve and we're live within 24 hours.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/mack-keane-bloodshot/hero1.jpg",
    hero2: "/images/mack-keane-bloodshot/hero2.jpg",
    product: "/images/mack-keane-bloodshot/product.jpg",
    editorial: "/images/mack-keane-bloodshot/editorial.jpg",
    texture: "/images/mack-keane-bloodshot/texture.jpg",
    brutalist: "/images/mack-keane-bloodshot/brutalist.jpg",
    heroBg: "/images/mack-keane-bloodshot/hero-bg.jpg",
    ogImage: "/images/mack-keane-bloodshot/og-image.png",
    hero1Caption: "Bloodshot (In A Field) — one take, golden hour",
    brutalistCaption: "Mack Keane × Crowd Control Digital",
  },
};
