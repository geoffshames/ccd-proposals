import type { ProjectData } from "@/lib/project-context";

export const miguelDamned: ProjectData = {
  accentColor: "#E03131",

  client: {
    name: "Miguel",
    logo: "",
    contactName: "Miguel + Team",
    contactRole: "Red Light Management / S1 / The Chamber Group",
    contactEmail: "libby.elming@redlightmanagement.com",
    industry: "Music / R&B",
  },

  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },

  project: {
    name: '"damned" Ignition Sprint',
    tagline:
      "A 30-day sprint to turn the live \"damned\" TikTok signal into a full catalog streaming run — the Sure Thing playbook, run on purpose this time.",
    type: "Catalog Streaming Acceleration",
    startDate: "June 2026",
    endDate: "July 2026",
    duration: "30 Days",
    status: "Awaiting Approval",
  },

  overview: {
    heading: "The Play",
    summary:
      "\"damned\" (Wildheart, 2015) is trending organically on TikTok right now — lyric-meaning videos, trend explainers, and lyric edits are circulating without a single dollar behind them. The last time a Miguel deep catalog record caught this exact kind of signal, \"Sure Thing\" went from sped-up TikTok sound to #11 on the Hot 100, #1 at Pop Airplay, and 21M+ global weekly streams — twelve years after release. That run happened on its own. This one doesn't have to. This sprint pours structured fuel on the trend while it's live: a clip and sound-seeding wave to multiply surface area, an engagement layer that pushes every post into algorithmic distribution, sped-up edits seeded as native sounds, and direct streaming support — all pointed at one record for 30 days.",
    subtitle:
      "Multiply the surfaces carrying the song, force velocity on every surface, and convert lyric-curiosity into streams.",
    imageCaption: "Catalog Streaming Acceleration",
    objectives: [
      "Pour structured fuel on the live \"damned\" trend before the window cools — trends have a half-life, and this one is in its ignition phase",
      "Seed sped-up edits as native sounds — the exact mechanic that carried \"Sure Thing\" to 4M+ clips and a second global chart run",
      "Convert short-form attention into streams with discovery-engineered comments that name the record and direct streaming support on-DSP",
      "Report stream lift weekly against baseline, benchmarked to the Sure Thing curve",
    ],
    stats: [
      {
        value: 3,
        label: "Scope Options",
        description: "Three ways in — same engine, increasing firepower",
      },
      { value: 100, suffix: "+", label: "Seeded Posts & Sounds" },
      { value: 30, label: "Day Sprint" },
      { value: 21, suffix: "M+", label: "Sure Thing Peak Weekly Streams" },
    ],
  },

  discovery: {
    heading: "Why Now",
    summary:
      "We didn't pick \"damned\" — the internet did. The research below is why we move this month, not next quarter.",
    insights: [
      {
        label: "Live Trend",
        finding:
          "\"damned\" lyric-discovery content is active on TikTok right now — trend explainers, \"what does 'damned at loving you' mean\" videos, and lyric edits posting as recently as this week. The trend exists; it just doesn't have infrastructure behind it yet.",
        source: "TikTok trend + search audit, June 2026",
      },
      {
        label: "The Precedent",
        finding:
          "\"Sure Thing\" (2011) caught the same signal in 2023: a sped-up edit soundtracked 4M+ clips and drove the record to #11 on the Hot 100, #1 Pop Airplay, #4 UK Singles, and 21.2M global weekly streams. Miguel's catalog has already proven it can do this — unprompted.",
        source: "Billboard / Variety, 2023",
      },
      {
        label: "Discovery Intent",
        finding:
          "The dominant trend behavior is lyric curiosity — people asking what the song means. That audience is one search away from the stream. Comments that name the record are the conversion mechanism, and we can manufacture thousands of them.",
        source: "TikTok comment + search behavior analysis",
      },
      {
        label: "Activation-Ready",
        finding:
          "The machinery is already standing: a full tour-footage asset bank, a dedicated posting pipeline on Miguel's own channels, and CCD's clipping network and fan-engagement platform live and operating on other artists today. Zero setup time.",
        source: "Existing Miguel engagement infrastructure",
      },
      {
        label: "Catalog Angle Confirmed",
        finding:
          "Catalog/rediscovery is already one of the three messaging angles in the active 30/60/90 — this sprint is the sharpest possible expression of that angle, focused on the one record the algorithm has pre-selected.",
        source: "Miguel 30/60/90 digital plan",
      },
    ],
    marketContext:
      "Catalog revivals are won or lost on timing. Every major sped-up-era resurgence — Sure Thing, Bloody Mary, Cruel Summer — followed the same arc: organic signal, sound adoption, velocity spike, DSP capture. The teams that moved during the signal phase owned the run. The teams that waited watched it happen to someone else's record.",
  },

  audience: {
    heading: "Who Carries This",
    summary:
      "Three audiences move a catalog record: the fans who never left, the trend participants who just found it, and the rediscoverers in between.",
    demographics:
      "Core 16–34, TikTok-first, US-led with Mexico and LATAM as fast-follow markets.",
    demographicCards: [
      { label: "Age Range", value: "16–34", detail: "16–24 trend engine, 25–34 stream volume" },
      { label: "Primary Platform", value: "TikTok", detail: "IG Reels + YouTube Shorts fast-follow" },
      { label: "Geo Focus", value: "US + MX", detail: "Paid leans into target markets at Option 03" },
      { label: "Discovery Mode", value: "Lyric-Led", detail: "Meaning-seeking → search → stream" },
    ],
    personas: [
      {
        name: "The Lyric-Trend Kid",
        ageRange: "16–24",
        description:
          "Found \"damned\" through a trend edit this month and has no idea it's a decade old. Engages with meaning-explainer content, uses trending sounds on their own posts, and streams whatever their For You page tells them to.",
        traits: ["Sound Adopter", "Trend Participant", "Comment Reader", "Playlist Saver"],
      },
      {
        name: "The Sure Thing Rediscoverer",
        ageRange: "20–30",
        description:
          "Came in through the 2023 Sure Thing run and never went deeper than the hits. \"damned\" is their gateway into Wildheart — one good edit converts them into a catalog listener.",
        traits: ["Catalog Curious", "Nostalgia Driven", "Reel Sharer", "Algorithm Fed"],
      },
      {
        name: "The Day One",
        ageRange: "28–40",
        description:
          "Owned Wildheart on release and has been waiting for the world to catch up. They validate the trend in comments, defend the deep cuts, and supply the \"this song is 10 years old\" energy that makes a revival feel earned.",
        traits: ["Original Fan", "Comment Validator", "Full-Album Streamer", "Show Goer"],
      },
    ],
    psychographics: [
      "Emotionally-led music discovery — the \"damned at loving you\" lyric hits as a relationship sentiment first, a song second",
      "Trend participation as identity — using the sound early signals taste",
      "Nostalgia economics — a 2015 record feeling new again is the content",
      "Meaning-seeking behavior — they want to understand the lyric, then own it",
    ],
    painPoints: [
      "They know \"Sure Thing\" and \"Adorn\" — the deep catalog is invisible to them until an edit surfaces it",
      "Trend sounds die fast when there's no fresh content supply to keep them on the feed",
      "Lyric curiosity dead-ends if nothing in the comments names the record",
    ],
    purchaseTriggers: [
      "A sped-up sound their favorite creator just used",
      "A comment thread that names the song and the album",
      "The \"this is 10 years old?!\" reveal moment",
      "Seeing the record show up on a playlist they already follow",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "The ignition platform. Trend explainers, lyric edits, and sped-up sounds — this is where the signal lives and where the clip wave concentrates.",
      },
      {
        name: "Instagram Reels",
        description:
          "The amplification platform. Edits cross-post here for the 25–34 audience, and paid leans in at Option 03 for target markets.",
      },
      {
        name: "YouTube Shorts",
        description:
          "The long-tail platform. Lyric videos and live-performance clips compound here and feed search behavior for months.",
      },
      {
        name: "Spotify / Apple Music",
        description:
          "The conversion layer. Streaming support and third-party playlisting capture the intent the short-form layer generates.",
      },
    ],
    quotes: [
      {
        text: "what does miguel mean when he says i'm damned at loving you",
        source: "TikTok search behavior, June 2026",
      },
      {
        text: "this song is about to blow up again the way sure thing did",
        source: "TikTok trend commentary (paraphrased)",
      },
    ],
  },

  targets: [
    {
      metric: '"damned" Weekly Streams',
      value: "+75%",
      context:
        "Off current baseline within 30 days. Sure Thing moved +14% week-over-week at 8M+ weekly streams — a pre-ignition deep cut moves much faster off a lower base.",
    },
    {
      metric: "Official Sound Creates",
      value: "2.5K+",
      context:
        "Combined creates across the original and seeded sped-up sounds. Sound adoption is the single strongest predictor of a catalog streaming run.",
    },
    {
      metric: "Seeded Surface Area",
      value: "100+",
      context:
        "Clips, edits, and creator posts carrying the record in 30 days — scaled by option tier (40+ at Ignite, 80+ at Takeover plus creator volume).",
    },
    {
      metric: "Playlist Placements",
      value: "75+",
      context:
        "Third-party playlist adds during the sprint window (Surge and Takeover), capturing DSP intent as short-form velocity builds.",
    },
  ],

  tiers: {
    heading: "Three Ways to Push the Record",
    subheading:
      "Same engine at three levels of firepower. Every option runs the full 30-day sprint focused exclusively on \"damned\" — pick the level, we ignite within 48 hours.",
    footnote:
      "All pricing is all-in for the 30-day sprint. Creator and paid media budgets are deployed at cost within the stated option. This sprint sits alongside the existing engagement — nothing here replaces current scope.",
    tiers: [
      {
        label: "Option 01",
        name: "Ignite",
        tagline: "The core engine — clips, sounds, engagement, and direct streaming support.",
        price: "$9,000",
        priceContext: "all-in · 30 days",
        includes: [
          "40+ clips and edits seeded across CCD's clip network — fan pages, edit pages, and R&B catalog accounts",
          "Sped-up \"damned\" edits produced and seeded as native sounds — the exact Sure Thing mechanic",
          "Engagement layer on every seeded post: first-hour saves, shares, and AI-generated discovery comments that name the record (every comment unique)",
          "$1,500 Strive.fm streaming campaign driving direct DSP streams alongside the social push",
          "Weekly stream-lift reporting vs. baseline, benchmarked against the Sure Thing curve",
        ],
      },
      {
        label: "Option 02",
        name: "Surge",
        tagline: "Adds real creators and playlist capture — the recommended path.",
        price: "$20,000",
        priceContext: "all-in · includes $7.5K LV8 creator budget (flexes $5–10K)",
        includes: [
          "Everything in Ignite",
          "LV8 creator seeding — the sped-up sound placed in real creators' hands with trend-native briefs ($5–10K starting budget)",
          "Third-party playlisting campaign — independent curator network adds across R&B, throwback, and mood playlists",
          "Official trend moment from Miguel's own channels, published through the existing posting pipeline",
          "Mid-sprint creative optimization — double down on winning formats and sounds in week 3",
        ],
        featured: true,
      },
      {
        label: "Option 03",
        name: "Takeover",
        tagline: "Maximum surface area plus paid amplification in target markets.",
        price: "$32,500",
        priceContext: "all-in · includes $7.5K cross-platform media budget",
        includes: [
          "Everything in Surge",
          "Double clipping volume — 80+ clips and edits across the network, sustained across all four weeks",
          "Paid social beyond TikTok — Meta / IG Reels and YouTube Shorts amplification leaning into target markets (US + MX/LATAM)",
          "Spark Ads behind the winning organic clips to force distribution at peak trend velocity",
          "Daily velocity reporting plus a full end-of-sprint readout with a scale-or-sustain recommendation",
        ],
      },
    ],
  },

  timelineHeading: "The 30-Day Arc",
  timelineSubheading:
    "Four weeks from asset bank to peak velocity — every phase compounds the last.",
  timelineImageCaption: "30 Days / 4 Waves / 1 Record",
  timeline: [
    {
      phase: "Load the Cannon",
      week: "Week 1",
      date: "Days 1–7",
      status: "upcoming",
      tasks: [
        "Edit bank built from tour footage + archival assets: clips, lyric edits, and sped-up versions",
        "Discovery-comment briefs generated per format — every comment names the record",
        "Baseline metrics locked: current streams, sound creates, trend velocity",
        "Strive.fm campaign live; creator briefs out (Surge+)",
      ],
    },
    {
      phase: "First Wave",
      week: "Week 2",
      date: "Days 8–14",
      status: "upcoming",
      tasks: [
        "Clip wave one ships across the network — original + sped-up sounds",
        "Engagement layer swarms every post in the first hour: saves, shares, discovery comments",
        "LV8 creator posts begin landing (Surge+)",
        "Playlisting campaign submissions in market (Surge+)",
      ],
    },
    {
      phase: "Double Down",
      week: "Week 3",
      date: "Days 15–21",
      status: "upcoming",
      tasks: [
        "Winning formats and sounds identified — wave two concentrates on what's converting",
        "Official trend moment publishes from Miguel's channels (Surge+)",
        "Paid amplification ignites behind top organic clips — TikTok Spark + Meta/YT in target markets (Takeover)",
        "Playlist adds compound as DSP velocity registers",
      ],
    },
    {
      phase: "Peak + Readout",
      week: "Week 4",
      date: "Days 22–30",
      status: "upcoming",
      tasks: [
        "Sustained seeding holds trend velocity through the window",
        "Full stream-lift readout vs. baseline and the Sure Thing curve",
        "Scale-or-sustain recommendation: extend the run, hand off to the 30/60/90, or both",
      ],
    },
  ],

  deliverablesSubheading:
    "Everything that ships in 30 days, organized by layer. Volumes scale by option tier.",
  deliverables: [
    {
      category: "Clipping & Sound Seeding",
      icon: "scissors",
      items: [
        {
          name: "Clip Network Wave",
          quantity: "40–80+",
          description:
            "Clips and edits from tour footage and archival assets, seeded across fan pages, edit pages, and R&B catalog accounts on TikTok, Reels, and Shorts.",
        },
        {
          name: "Sped-Up Edits",
          quantity: "2–3 versions",
          description:
            "Sped-up \"damned\" edits produced and seeded as native sounds — the mechanic that carried Sure Thing to 4M+ creates. Label coordination on an official sped-up release if adoption hits.",
        },
        {
          name: "Official Trend Brief",
          quantity: "1 (Surge+)",
          description:
            "A trend-native moment published from Miguel's own channels through the existing posting pipeline — the artist joining his own trend at peak velocity.",
        },
      ],
    },
    {
      category: "Engagement Layer",
      icon: "zap",
      items: [
        {
          name: "First-Hour Swarms",
          quantity: "Every post",
          description:
            "Saves, shares, and engagement on every seeded post within the first hour — the velocity signal that triggers algorithmic distribution.",
        },
        {
          name: "Discovery Comments",
          quantity: "1,000+",
          description:
            "AI-generated, per-user-unique comments engineered around discovery behavior — naming the record, answering the \"what song is this\" intent, never duplicated.",
        },
      ],
    },
    {
      category: "Streaming & Playlisting",
      icon: "play",
      items: [
        {
          name: "Strive.fm Campaign",
          quantity: "$1,500",
          description:
            "Direct DSP streaming support running parallel to the social push — bolstering stream velocity while short-form attention converts.",
        },
        {
          name: "Third-Party Playlisting",
          quantity: "75+ adds (Surge+)",
          description:
            "Independent curator campaign across R&B, throwback, and mood playlists — capturing DSP intent as the trend builds.",
        },
      ],
    },
    {
      category: "Creators & Paid",
      icon: "users",
      items: [
        {
          name: "LV8 Creator Seeding",
          quantity: "$5–10K (Surge+)",
          description:
            "The sped-up sound placed directly in real creators' hands with trend-native briefs — authentic adoption, not ads.",
        },
        {
          name: "Cross-Platform Paid",
          quantity: "$7.5K (Takeover)",
          description:
            "Meta / IG Reels + YouTube Shorts amplification in target markets (US + MX/LATAM), plus TikTok Spark Ads behind the winning organic clips.",
        },
      ],
    },
    {
      category: "Reporting",
      icon: "bar-chart",
      items: [
        {
          name: "Stream-Lift Reports",
          quantity: "Weekly",
          description:
            "Streams, sound creates, trend velocity, and playlist adds vs. baseline — benchmarked against the Sure Thing curve. Daily velocity reporting at Takeover.",
        },
        {
          name: "End-of-Sprint Readout",
          quantity: "1",
          description:
            "Full performance readout with a scale-or-sustain recommendation: extend the run, hand off to the existing 30/60/90, or both.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "This sprint does one thing: push \"damned.\" Here's exactly where the edges are.",
    included: [
      "30-day sprint focused exclusively on \"damned\" — no scope drift",
      "Clip production, sound seeding, and network distribution at tier volume",
      "Sped-up edit production and native sound seeding",
      "Engagement layer (first-hour swarms + discovery comments) on every seeded post",
      "Strive.fm streaming campaign management",
      "LV8 creator seeding and third-party playlisting (Surge and Takeover)",
      "Paid media management across TikTok, Meta, and YouTube (Takeover)",
      "Weekly reporting and end-of-sprint readout",
    ],
    excluded: [
      "Official sped-up master release — we produce and seed the edits; the label executes any official release (we coordinate)",
      "PR and press outreach (available as add-on — scoped and quoted separately)",
      "Music video or net-new content production beyond clips and edits (available as add-on)",
      "Fan-page network builds — separate workstream in the existing LATAM plan",
      "Broader catalog or release marketing — covered by the existing engagement",
    ],
  },

  nextSteps: [
    {
      step: 1,
      title: "Pick an Option",
      description:
        "Reply with Ignite, Surge, or Takeover. One line is all it takes — the trend doesn't wait for paperwork.",
    },
    {
      step: 2,
      title: "48-Hour Ignition",
      description:
        "Edit bank production starts immediately off the existing tour-footage drive. Baseline metrics lock on day one.",
    },
    {
      step: 3,
      title: "First Wave Ships",
      description:
        "Clips and sounds in market by end of week one, engagement layer live on every post, Strive.fm running.",
    },
    {
      step: 4,
      title: "Weekly Readouts",
      description:
        "Stream lift vs. baseline every week, benchmarked to the Sure Thing curve — with a scale-or-sustain call at day 30.",
    },
  ],

  cta: {
    headline: "The trend is already moving. The only question is whether we drive it.",
    body: "\"Sure Thing\" took twelve years and an accident. \"damned\" has the signal right now — and this time the infrastructure already exists. Pick an option and we're live in 48 hours.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/miguel-damned/hero1.png",
    hero2: "/images/miguel-damned/hero2.png",
    product: "/images/miguel-damned/product.png",
    editorial: "/images/miguel-damned/editorial.png",
    texture: "/images/miguel-damned/texture.png",
    brutalist: "/images/miguel-damned/brutalist.png",
    heroBg: "/images/miguel-damned/hero-bg.jpg",
    ogImage: "/images/miguel-damned/og-image.png",
    hero1Caption: "Catalog Streaming Acceleration",
    brutalistCaption: "Miguel × Crowd Control Digital",
  },
};
