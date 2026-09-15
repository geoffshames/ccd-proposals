import type { ProjectData } from "../project-context";

export const allenStone: ProjectData = {
  accentColor: "#FD3737",

  client: {
    name: "Allen Stone",
    logo: "",
    contactName: "Nick Harvey",
    contactRole: "Marketing Director, Red Light Management",
    contactEmail: "Nick.Harvey@redlightmanagement.com",
    industry: "Music / Soul · R&B · Pop",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "SOUL, AMPLIFIED",
    tagline:
      "527K people follow Allen on Instagram. About 597K listen on Spotify in a month. The new record is the moment to close that gap: a release-anchored social and paid media system that points the attention his voice already earns straight at the album.",
    type: "Album Rollout: Social + Paid Media",
    startDate: "Nov 2026 (proposed)",
    endDate: "Flexes to ~6 weeks post-release",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Crowd Control Digital will run social strategy, day-to-day channel management, and paid media for Allen Stone's next album cycle: a six-month engagement anchored to the release date, working alongside Red Light and the ATO team. The audit points to one clear job. Allen's audience is bigger and more loyal on social than it is on streaming, and every one of his breakouts is the voice, live. CCD builds the system that connects the two: native, performance-first content on every platform every week, a retargeting layer that turns viewers into listeners, and release flights that put real spend behind the moments that are already working.",
    objectives: [
      "Turn followers into listeners: convert the 527K Instagram audience and the 2026 stadium and arena crowds into Spotify saves, follows, and monthly listeners, back past the 1M peak",
      "Make the voice the rollout: build every single and album beat around live, performance-first content, the format behind every Allen Stone breakout from the living room to Nu Deco",
      "Run platform-native, every week: restore TikTok and YouTube Shorts cadence with formats built for each platform instead of cross-posted Reels",
      "Put a paid engine under every beat: always-on retargeting plus single and album-week flights across Meta, TikTok, and YouTube, optimized to cost per listener and feeding the Text STONE list and vinyl pre-orders",
    ],
    subtitle:
      "Performance-first social and always-on paid media, anchored to the album, so the attention Allen already earns finally shows up in streams.",
    imageCaption: "Album Rollout: Social + Paid Media",
    stats: [
      {
        value: 597,
        suffix: "K",
        label: "Monthly Listeners Today",
        description:
          "Down from a 1.02M peak, with 527K Instagram followers already in hand. The fanbase is there; the streaming reach isn't. This cycle is built to close that gap.",
      },
      { value: 4, label: "Platforms Run Daily" },
      { value: 3, label: "Release Flights" },
      { value: 6, label: "Month Album Cycle" },
    ],
  },

  discovery: {
    heading: "What We Found",
    layout: "lede",
    summary:
      "Before proposing anything, we audited Allen's channels, site, fan-data stack, ad history, 2026 touring, and the modern-soul field. The headline is unusually clear: the fanbase is real, loyal, and bigger on social than on streaming, and the moments that break through are always the voice, live. The new record doesn't need a louder megaphone. It needs a system that points the attention he already earns at the album.",
    insights: [
      {
        label: "The Conversion Gap",
        finding:
          "Allen has 527K Instagram followers and roughly 597K Spotify monthly listeners: 0.88 followers for every listener. Across the modern-soul field that ratio sits between 0.05 and 0.09. Leon Bridges turns 1.07M Instagram followers into 14.9M listeners; Jalen Ngonda turns 343K into 4.2M. Allen is at about 59% of his 1.02M listener peak. That isn't a fanbase problem. It's a reach and conversion problem, and it's exactly what paid media and algorithm triggers are built to fix.",
        source: "Spotify / kworb listener data, Instagram profile audit (Sept 15, 2026)",
      },
      {
        label: "Live Is the Product",
        finding:
          "Every top asset is a live vocal performance. 'Unaware (Live From His Mother's Living Room)' has 17M YouTube views and 'Brown Eyed Lover' at Sound Emporium 9.2M. On TikTok, 'Sweet Little Rainbows' live hit 1.3M plays and the Nu Deco 'Give You Blue' clip (356K) is the best post of the past year. Ticket and promo posts, by comparison, land at 3K to 11K.",
        source: "YouTube, TikTok, and Instagram post-level audit",
      },
      {
        label: "Cadence Dipped Before the Album",
        finding:
          "TikTok saw 8 posts between May 8 and Aug 24, mostly Reels cross-posted with identical captions, and median plays of ~18K on a 366K following. YouTube Shorts have been dormant for about two years, with long-form uploads every two to three months. Completely understandable in a stadium-tour summer, but it's the stretch right before an album where cadence matters most.",
        source: "TikTok + YouTube channel audit",
      },
      {
        label: "The List Exists. The Funnel Doesn't.",
        finding:
          "The owned layer is further along than most artists: a Klaviyo email + SMS list on allenstone.com (Text STONE), presale passwords that worked for the Stapleton run, and 223K Bandsintown followers. The paid side is where it breaks. Meta's Ad Library shows 20 ads from Oct 2025 to Jul 2026, each a short single-goal burst (a single, one show, signed vinyl), with no always-on layer turning social attention into listeners or sign-ups.",
        source: "allenstone.com stack audit, Meta Ad Library",
      },
      {
        label: "A Stadium-Sized Warm Audience",
        finding:
          "In a year without an album, Allen played Chris Stapleton's All-American Road Show stadiums and opens five Teddy Swims arena dates Nov 1–8. The most common fan refrain from festivals and support slots: 'I had no idea who he was.' Those are the highest-intent new fans he'll ever meet, and with no TikTok pixel on the site and no always-on retargeting in the ad history, many of them walk out uncaptured.",
        source: "Tour routing (Pollstar, Climate Pledge Arena), Reddit, site tag audit",
      },
    ],
    marketContext:
      "The album is finished and still undated, which is the rare window where rollout strategy can shape the plan instead of reacting to it. Discovery has shifted toward pre-release: TikTok's Add to Music App drove 6B track saves in the past year and now supports album pre-saves, and Spotify Countdown Pages live a week or more before release pull roughly 2× the pre-saves. Soul vocals are having a short-form moment, and streaming outside the US grew nearly 3× faster than at home in the first half of 2026. Auckland and Sydney are already Allen's top two cities.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Allen's audience is loyal, musically literate, and multi-generational: fans who come back show after show, singers who study his runs, and a fresh wave of stadium and arena crowds who met him opening for others in 2026.",
    demographics:
      "Core roughly 28–50, musically literate, strongest on the US coasts and Denver, with an outsized Australia and New Zealand base.",
    demographicCards: [
      { label: "Core Age (est.)", value: "28–50", detail: "To confirm in Spotify for Artists + Meta insights" },
      { label: "Top Spotify Cities", value: "Auckland · Sydney", detail: "Then LA, Brisbane, and Chicago" },
      { label: "Live Strongholds", value: "LA · NYC · Seattle", detail: "Plus the Bay Area and Denver" },
      { label: "Tour Alerts", value: "223K", detail: "Bandsintown followers, plus 87K Songkick trackers" },
    ],
    personas: [
      {
        name: "The Day One",
        ageRange: "30–50",
        description:
          "Found Allen through the living-room 'Unaware' video or the Radius era and never left. Buys the ticket every time he comes through, and probably has a 'Consider Me' story.",
        traits: ["Repeat Ticket Buyer", "Vinyl Collector", "YouTube Live Sessions", "On the Text List"],
      },
      {
        name: "The Vocal Nerd",
        ageRange: "18–35",
        description:
          "Singers and musicians who watch his clips for the runs and post covers 'in the style of Allen Stone.' The most likely to duet, stitch, save, and share.",
        traits: ["Singer / Musician", "Duets & Stitches", "Saves Live Clips", "Shares Performances"],
      },
      {
        name: "The New Ear",
        ageRange: "22–55",
        description:
          "Heard him opening for Chris Stapleton or Teddy Swims, or caught a festival set, and loved it without knowing his name. High intent, not yet following.",
        traits: ["Arena / Festival Goer", "Country + Soul Crossover", "Shazam Moment", "Not Yet Following"],
      },
    ],
    psychographics: [
      "Musicianship over hype: they want to hear the voice do something undeniable",
      "Warmth and uplift: shows described as 'beautiful and uplifting,' with gospel roots that never preach",
      "Life-moment soundtrack: 'Consider Me' is his #1 song and a recurring live proposal moment",
      "Retro crossover: Stevie and Marvin comparisons, yacht-rock fans, jam and festival crowds",
    ],
    painPoints: [
      "'Why isn't this guy bigger?' Fans feel he's underrated and hard to discover",
      "A long wait for a full album: APART was 2021, with an EP and one-off singles since",
      "Great live moments get lost, with covers and clips pulled or never making it to streaming",
      "New fans at festivals and support slots leave without an easy way to follow up",
    ],
    purchaseTriggers: [
      "Seeing him live: repeat attendance is the norm, not the exception",
      "Live-session clips with a strong visual (Nu Deco, Placeholder Sessions, the living room)",
      "Personal direct-to-fan drops like signed vinyl and Allentine's video messages",
      "Presale passwords and early access through the Text STONE list",
    ],
    platforms: [
      {
        name: "Instagram",
        description:
          "527K followers and his strongest channel. The 2026 median Reel sits at 49.9K views; humor and live clips break out to 1M–8.8M.",
      },
      {
        name: "TikTok",
        description:
          "366K followers and 2.4M likes. Median ~18K plays per post; live sessions are the clips that consistently break out.",
      },
      {
        name: "YouTube",
        description:
          "368K subscribers and a deep live-session catalog ('Unaware' living room: 17M). Long-form every few months; Shorts dormant ~2 years.",
      },
      {
        name: "Spotify",
        description:
          "~597K monthly listeners and 448K followers, about 59% of his 1.02M peak. 'Consider Me' leads at 36.5M plays.",
      },
      {
        name: "Facebook",
        description:
          "354K followers. The older core fanbase, and the natural home for show, vinyl, and pre-order campaigns.",
      },
    ],
    quotes: [
      {
        text: "I wonder why this guy isn't getting enough recognition in the music industry.",
        source: "YouTube comment, 'Unaware' (Live From His Mother's Living Room)",
      },
      {
        text: "I had no idea who he was and I was loving it, loving it so much that I didn't take any videos.",
        source: "r/bottlerock",
      },
      {
        text: "4th time seeing Allen, 3rd time he's headlined. Always a beautiful and uplifting experience.",
        source: "r/roanoke",
      },
    ],
  },

  targets: [
    {
      metric: "Spotify Monthly Listeners",
      value: "1M+",
      context:
        "Reclaim the 1.02M peak by album week. Peers with smaller Instagram followings run 4M–19M listeners.",
    },
    {
      metric: "Instagram Reel Median",
      value: "2×",
      context:
        "The 2026 median Reel sits at 49.9K views. Performance-first content plus paid seeding should lift the floor toward 100K.",
    },
    {
      metric: "TikTok Median Plays",
      value: "3×",
      context:
        "From ~18K per post today, with weekly native posting replacing cross-posted Reels and Spark Ads behind the winners.",
    },
    {
      metric: "Cost per Spotify Conversion",
      value: "<$0.40",
      context:
        "Music benchmarks on Meta put under $0.30 as strong and $0.40–$0.50 as middling. We'll hold spend to the efficient end and cut what doesn't get there.",
    },
  ],

  competitive: {
    summary:
      "The modern-soul lane is having a real moment, and the artists winning on streaming aren't always the ones with the deepest fanbases. They're the ones with a system that turns attention into listeners. Allen's social following already rivals artists with 7× to 30× his listener count. Here's what the field is doing, and where Allen has the edge.",
    competitors: [
      {
        name: "Leon Bridges: 14.9M Monthly Listeners",
        strength:
          "A staged rollout for Happiness Anytime: two EP 'parts' ahead of the full album, choreographed videos, and signed colored vinyl.",
        gap:
          "Polished but distant on short-form, with mid-campaign TikToks landing at 1.8K–21K views on a 594K following. Allen's on-camera warmth and humor are an advantage that can't be copied.",
      },
      {
        name: "Myles Smith: 18.8M Monthly Listeners",
        strength:
          "Built 'Stargazing' in public on TikTok (hook snippet, demo, sound upload, then release) into a multi-platinum hit.",
        gap:
          "The virality came before the identity, and listeners have cooled well off the peak. Allen can run the same snippet-to-release funnel with a voice and persona fans already know.",
      },
      {
        name: "Stephen Sanchez: 18.1M Monthly Listeners",
        strength:
          "Covers and pre-release snippets on TikTok turned a retro-crooner sound into 'Until I Found You.'",
        gap:
          "The retro lane tends to reward one song more than an album. Allen's depth, with ten tracks past 4M Spotify plays, is built for album-length listening.",
      },
      {
        name: "Jalen Ngonda: 4.2M Monthly Listeners",
        strength:
          "Retro-soul credibility plus performance TikToks with on-screen lyrics, with pre-album clips reaching 2.2M–2.8M views.",
        gap:
          "Millions of views but only ~100K TikTok followers. Capture is the gap, and a paid retargeting layer is exactly what closes it for Allen.",
      },
      {
        name: "Thee Sacred Souls: 9.2M Monthly Listeners",
        strength:
          "A short Instagram clip grew into 'Can I Call You Rose?' (150M+ Spotify plays), carried by a tight community.",
        gap:
          "Low posting volume and no single frontman personality. Allen's charisma on camera is the rarer asset in this lane.",
      },
    ],
  },

  timelineSubheading:
    "A six-month cycle anchored to release day: a month of foundation, three months of singles and pre-release build, album week, and a sustain phase that bridges into touring. Dates lock once the release is set.",
  timelineImageCaption: "6 Months / 5 Phases / 1 Record",
  timeline: [
    {
      phase: "Foundation & Warm-Up",
      week: "Month 1",
      date: "Release −20 to −16 wks",
      status: "upcoming",
      tasks: [
        "Channel, ad account, Spotify for Artists, and Klaviyo access plus a full baseline audit",
        "TikTok pixel and Meta Conversions API installed; retargeting pools built from video viewers, site visitors, list lookalikes, and 2026 tour markets",
        "Content system signed off: performance-first pillars, native formats per platform, approvals flow with Red Light + ATO",
        "Catalog warm-up tests on proven winners ('Consider Me,' 'Sweet Little Rainbows,' 'Brown Eyed Lover') to find the cheapest cost per listener before new music lands",
      ],
    },
    {
      phase: "Single One & Album Reveal",
      week: "Months 2–3",
      date: "Release −16 to −8 wks",
      status: "upcoming",
      tasks: [
        "Snippet-to-release sequence on TikTok and Reels: hook tease, studio or demo moment, live take, official sound uploaded ahead of release",
        "Single-one paid flight across Meta, TikTok, and YouTube optimized to streams and saves, retargeting everyone who engaged with the teases",
        "Album announce support: Countdown Page and pre-save pushed with ATO, plus Text STONE sign-up drivers",
        "YouTube Shorts reactivated with a native version of every performance clip",
      ],
    },
    {
      phase: "Single Two & Pre-Order",
      week: "Month 4",
      date: "Release −8 to −1 wks",
      status: "upcoming",
      tasks: [
        "Single two built for participation: a duet and stitch vocal prompt aimed at the singer and musician community",
        "Vinyl and D2C pre-order campaigns to the Shopify store with pixel-optimized retargeting",
        "Geo-weighted flights in core markets: LA, Seattle/PNW, Denver, NYC, Chicago, plus Auckland, Sydney, and Brisbane",
        "Release-week content calendar locked with management and label",
      ],
    },
    {
      phase: "Album Week",
      week: "Month 5",
      date: "Release to +4 wks",
      status: "upcoming",
      tasks: [
        "Release-day surge across Meta, TikTok, and YouTube driving streams, saves, and follows",
        "Daily community management and reactive content through release week",
        "Focus-track readouts at 72 hours and day 10, shifting spend to the songs the algorithm picks up",
        "Live-session and listening moments sequenced across the first four weeks",
      ],
    },
    {
      phase: "Sustain & Tour Bridge",
      week: "Month 6",
      date: "+4 to +8 wks",
      status: "upcoming",
      tasks: [
        "Always-on album and catalog retargeting held at efficient spend",
        "Tour announce and on-sale campaign support (spend billed separately)",
        "Full-cycle report covering listeners, saves, cost per conversion, and growth by market",
        "Next-phase plan for deluxe, second-wave singles, and touring",
      ],
    },
  ],

  deliverablesSubheading:
    "Everything CCD runs across strategy, channel management, and paid media, sized to a $5K/mo retainer and anchored to the release.",
  deliverables: [
    {
      category: "Rollout Strategy",
      icon: "◆",
      items: [
        {
          name: "Album Rollout Playbook",
          quantity: "1",
          description:
            "Release-anchored plan covering single sequencing, content beats, paid flights, and market priorities. Built with Red Light + ATO and updated as dates lock.",
        },
        {
          name: "Content Pillars & Format System",
          quantity: "1",
          description:
            "Performance-first pillars (the voice live, the goofy dad, the Spokane world, the record) mapped to native formats for each platform.",
        },
        {
          name: "Monthly Content Calendars",
          quantity: "6",
          description:
            "Planned posts, release beats, and reactive slots, approved with management and label each month.",
        },
        {
          name: "Team Syncs",
          quantity: "Weekly",
          description:
            "Standing call with Red Light + ATO, with a daily line open during release weeks.",
        },
      ],
    },
    {
      category: "Social Management",
      icon: "●",
      items: [
        {
          name: "Channels Run Daily",
          quantity: "4",
          description:
            "Instagram, TikTok, YouTube (including Shorts), and Facebook: publishing, captions, scheduling, and link-in-bio updates.",
        },
        {
          name: "Platform-Native Posts",
          quantity: "20+/mo",
          description:
            "Every supplied asset versioned for its platform: TikTok-native hooks and captions, Shorts, Reels, and carousels. No identical cross-posts.",
        },
        {
          name: "Community Management",
          quantity: "Daily",
          description:
            "Comment engagement, duet and stitch replies, fan-content reposts, and DM triage.",
        },
        {
          name: "Release Social Kits",
          quantity: "3",
          description:
            "Single one, single two, and album week: posting sequences, captions, pinned posts, and profile updates ready to go.",
        },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Tracking & Audience Build",
          quantity: "1",
          description:
            "TikTok pixel, Meta Conversions API, and a retargeting architecture across video viewers, site visitors, list lookalikes, and tour markets.",
        },
        {
          name: "Release Flights",
          quantity: "3",
          description:
            "Single one, single two, and album week, optimized to streams, saves, and follows across Meta, TikTok, and YouTube.",
        },
        {
          name: "Always-On Retargeting",
          quantity: "6 mo",
          description:
            "A warm-audience layer that keeps turning social attention into listeners, sign-ups, and pre-orders between release beats.",
        },
        {
          name: "Performance Reports",
          quantity: "6",
          description:
            "Monthly readouts on listeners, saves, cost per conversion, and market growth, with weekly pacing notes in release weeks.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "What the retainer covers, and what stays with Red Light, ATO, or gets scoped as an add-on.",
    included: [
      "Release-anchored album rollout strategy, built alongside Red Light Management and ATO Records",
      "Day-to-day management of Instagram, TikTok, YouTube (including Shorts), and Facebook",
      "Content calendars, captions, and platform-native formatting and publishing of supplied assets",
      "Daily community management and reactive content during release windows",
      "Paid media strategy, build, and optimization across Meta, TikTok, and YouTube",
      "TikTok pixel, Meta Conversions API setup, and retargeting audience architecture",
      "Paid support for sign-ups to the existing Text STONE email/SMS list and D2C vinyl pre-orders",
      "Monthly performance reporting against agreed targets",
    ],
    excluded: [
      "Ad spend (billed directly to platforms, plus a 15% management fee)",
      "Original content production, shoots, and short-form editing beyond formatting (available as add-on, scoped and quoted separately)",
      "Creator seeding and fan-page amplification for singles (available as add-on, scoped per release)",
      "Email and SMS campaign writing or CRM management (available as add-on)",
      "Music video production, photography, and graphic design (available as add-on)",
      "Playlist pitching, PR, and radio promotion (handled by ATO and partners)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    investmentSubheading:
      "A flat $5,000/mo management retainer. Ad spend runs on top at a 15% management fee, billed directly to the platforms, so every media dollar stays visible and scalable.",
    lineItems: [
      {
        name: "Album Rollout Strategy",
        description:
          "Release-anchored playbook, content system, monthly calendars, and weekly syncs with Red Light + ATO.",
        price: 0,
        priceLabel: "Included",
        recurring: true,
      },
      {
        name: "Social Media Management",
        description:
          "Instagram, TikTok, YouTube (incl. Shorts), and Facebook: platform-native publishing, captions, and daily community management.",
        price: 0,
        priceLabel: "Included",
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Tracking setup, audience architecture, release flights, and always-on retargeting across Meta, TikTok, and YouTube. Ad spend billed separately at a 15% management fee.",
        price: 0,
        priceLabel: "Included",
        recurring: true,
      },
      {
        name: "Reporting & Optimization",
        description:
          "Monthly performance reports against targets, with weekly pacing notes during release weeks.",
        price: 0,
        priceLabel: "Included",
        recurring: true,
      },
    ],
    subtotal: 5000,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    variableCosts: [
      {
        name: "Ad Spend",
        basis: "Billed to platforms + 15%",
        note:
          "Media runs from ATO's or management's budget, paid directly to Meta, TikTok, and Google. CCD manages and optimizes every campaign at a 15% management fee on spend.",
      },
      {
        name: "Content Production & Editing",
        basis: "Scoped per shoot",
        note:
          "Live-session capture, shoot days, and short-form editing beyond platform formatting, quoted and approved before any work starts.",
      },
      {
        name: "Creator Seeding",
        basis: "Scoped per single",
        note:
          "Creator and fan-page amplification for key singles. Creator fees billed at cost plus 15%.",
      },
    ],
    variableCostsNote:
      "Recommended media plan is phased: ~$3K/mo in the foundation month, $6K–$8K/mo through the singles, and ~$15K in album month (roughly $45K across the cycle). Fully scalable, and every dollar is set with the team before it runs.",
    total: 30000,
    totalLabel: "Total Retainer (6 Months)",
    paymentSchedule: [
      { milestone: "Month 1", percentage: 16.67, amount: 5000, due: "Upon approval" },
      { milestone: "Month 2", percentage: 16.67, amount: 5000, due: "Start of Month 2" },
      { milestone: "Month 3", percentage: 16.67, amount: 5000, due: "Start of Month 3" },
      { milestone: "Month 4", percentage: 16.67, amount: 5000, due: "Start of Month 4" },
      { milestone: "Month 5 (Album)", percentage: 16.66, amount: 5000, due: "Start of Month 5" },
      { milestone: "Month 6", percentage: 16.66, amount: 5000, due: "Start of Month 6" },
    ],
    paymentTerms:
      "Retainer invoiced monthly in advance, net 15. Ad spend billed directly by the platforms; the 15% management fee is invoiced monthly in arrears.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Intro call with Red Light + ATO",
      description:
        "Walk through the audit, confirm the release window and single plan, and align on who owns what across management, label, and CCD.",
    },
    {
      step: 2,
      title: "Decide on the November arena run",
      description:
        "Allen opens five Teddy Swims arena shows Nov 1–8 (Denver, Salt Lake City, Seattle, Vancouver, Portland). If we're aligned by late October, Month 1 starts Nov 1 and those crowds go straight into the retargeting pools.",
    },
    {
      step: 3,
      title: "Approve scope and starting media budget",
      description:
        "Confirm the $5K/mo retainer, a starting ad budget, and whether spend runs from ATO or management.",
    },
    {
      step: 4,
      title: "Access and onboarding",
      description:
        "Channel, ad account, Spotify for Artists, and Klaviyo access. Onboarding questionnaire to follow after approval.",
    },
    {
      step: 5,
      title: "Foundation sprint",
      description:
        "Pixels and audiences built, content system signed off, and catalog warm-up tests live within the first 30 days.",
    },
  ],

  cta: {
    headline: "Let's get this voice the reach it's already earned.",
    body:
      "The record's done. Now it's about making sure the people who already love Allen, and the ones who heard him for the first time this year, actually find it. We'd love to build that with you.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/allen-stone/hero1.jpg",
    hero2: "/images/allen-stone/hero2.jpg",
    product: "/images/allen-stone/product.jpg",
    editorial: "/images/allen-stone/editorial.jpg",
    texture: "/images/allen-stone/texture.jpg",
    brutalist: "/images/allen-stone/brutalist.jpg",
    heroBg: "/images/allen-stone/hero-bg.jpg",
    ogImage: "/images/allen-stone/og-image.png",
    hero1Caption: "The voice, in the room",
    brutalistCaption: "Allen Stone × Crowd Control Digital",
  },
};
