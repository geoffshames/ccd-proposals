import type { ProjectData } from "@/lib/project-context";

export const kurtDeimerSilentLucidity: ProjectData = {
    accentColor: "#FD3737",

    client: {
          name: "Kurt Deimer",
          logo: "",
          contactName: "Kurt Deimer + Regime Music Group",
          contactRole: "Regime Music Group / Bald Man LLC",
          contactEmail: "",
          industry: "Music / Hard Rock",
    },

    studio: {
          name: "Crowd Control Digital",
          role: "Prepared By: Geoff Shames / Co-Founder",
          email: "geoff@crowdcontroldigital.com",
    },

    project: {
          name: '"Silent Lucidity" Streaming Stoke',
          tagline:
                  "A 30-day flight on Kurt's proven record: 150K real US and Canada streams, a Meta and YouTube story push, weekly lift readouts. Timed to the Hellbilly Hollow announce, the CD drop, and the Nugent run. Recommended: $3,450 all-in.",
          type: "Consumption Recovery + Media Flight",
          startDate: "July 2026",
          endDate: "August 2026",
          duration: "30 Days",
          status: "Awaiting Approval",
    },

    discovery: {
          heading: "The Song, and Where It Stands",
          summary:
                  "Pulled from the Chartmetric API and live platform data, July 14, 2026. Four facts tell the whole story.",
          insights: [
            {
                      label: "The Song",
                      finding:
                                  "\"Silent Lucidity\" (feat. Geoff Tate) is Kurt's number one track: 93.9K Spotify streams since the April 10 single. It outran \"In Deep\" (52.4K), which had Top 40 Active Rock radio and a six-month head start. The catalog has already voted on where the next dollar goes.",
                      source: "Spotify + Chartmetric, July 14, 2026",
            },
            {
                      label: "The Ramp, Then the Bleed",
                      finding:
                                  "The single and album ran monthly listeners from 5.1K (April 4) to a 37.5K peak (May 13). Half of that is gone: roughly 19K today, dropping 200 to 300 a day, with zero Spotify playlist placements of any kind holding it up.",
                      source: "Chartmetric daily listener series",
            },
            {
                      label: "The Mismatch",
                      finding:
                                  "Only ~24 percent of listeners are in the US, while the tour, CDs, and film all monetize in the US. Platform-wise: Instagram healthy (63.4K, +2.4%/mo), Facebook big but flat (149.8K), YouTube growing (18.4K subs, official Tate video live), TikTok dead (11.3K, +6 followers in a month).",
                      source: "Chartmetric geo + social series",
            },
            {
                      label: "The Equity",
                      finding:
                                  "The original holds 111M Spotify streams and Queensryche still pulls 962K monthly listeners. Kurt's version carries the original voice, Geoff Tate himself, and the rock press already validated it (Ultimate Classic Rock, KNAC, BraveWords). Bought-and-paid-for recognition, currently unspent.",
                      source: "Spotify + April 2026 press run",
            },
                ],
          marketContext:
                  "Regime's stated KPI is monthly active audience and authentic streams, not charts. These 30 days exist to rebuild that base on the one record with proven pull, and to walk into the next cycle, and Grogtober, with DSP promo-tool eligibility already banked.",
    },

    overview: {
          heading: "The Play",
          summary:
                  "Put real-listener streaming support behind \"Silent Lucidity\" at the monthly cap, aim a Meta and YouTube flight at the 35-to-64 classic rock demo the song was built for, and land all of it across the three weeks when the film announce, the CD drop, and the Nugent dates are already pulling attention. One record, 30 days, weekly readouts.",
          subtitle:
                  "Stop the decay, re-weight the audience to US and Canada, bank the base the next cycle starts from.",
          imageCaption: "Consumption Recovery + Media Flight",
          objectives: [
                  "150K real US and Canada streams on the proven record, reversing the post-album decay curve",
                  "Monthly actives rebuilt past DSP promo-tool eligibility ahead of the next cycle",
                  "100K+ warm video viewers banked before the Hellbilly Hollow announce opens July 21",
                  "Listener map re-weighted to the US and Canada, where the tour, the CDs, and the film monetize",
                ],
          stats: [
            {
                      value: 94,
                      suffix: "K",
                      label: "Silent Lucidity Streams",
                      description: "Kurt's number one track, in under 100 days, zero playlist support",
            },
            {
                      value: 50,
                      suffix: "%",
                      label: "Of Peak Audience Lost",
                      description: "37.5K monthly actives May 13, roughly 19K today",
            },
            {
                      value: 111,
                      suffix: "M",
                      label: "Streams on the Original",
                      description: "The recognition equity this version inherits",
            },
            { value: 30, label: "Day Flight" },
                ],
    },

    targets: [
      {
              metric: "Real-Listener Streams",
              value: "150K+",
              context: "US and Canada, at the 150K per-song monthly cap. Real riders, no bots.",
      },
      {
              metric: "Monthly Active Audience",
              value: "100K+",
              context: "From ~19K today. Regime's KPI, and the eligibility line for next-cycle promo tools. Directional, not guaranteed.",
      },
      {
              metric: "Warm Audience Banked",
              value: "100K+",
              context: "Video viewers and engagers, handed to the film announce and CD push for cheap retargeting.",
      },
      {
              metric: "Save Rate",
              value: "8%+",
              context: "On flight-driven listeners, plus follower lift to widen Release Radar for the next drop.",
      },
        ],

    mediaFlight: {
          heading: "The Flight + The Number",
          subheading:
                  "Three channels, one record, 30 days. Even numbers on purpose: pick a media level, add 15 percent, done.",
          goal: { views: "150K+", window: "30 Days", blendedCpv: "$3,000", totalBudget: "$3,450" },
          goalLabels: {
                  views: "Streams Target",
                  blendedCpv: "Recommended Media",
                  totalBudget: "All-In With 15% Fee",
                  window: "Flight Window",
          },
          cpvRowLabel: "Planning rate",
          dialUnit: "streams",
          dialSubheading:
                  "The Strive line never changes; the dial is how hard the story layer runs. Media at cost, plus the 15 percent fee, shown exactly.",
          tracks: [
            {
                      key: "Strive.fm Rideshare Flight",
                      role: "Volume + Actives",
                      budget: "$1,800",
                      budgetPct: "fixed across all three options",
                      cpv: "$0.012 / stream, all-in",
                      views: "150K",
                      viewsPct: "streams · monthly cap for one song",
                      markets: "US + Canada, geo-distributed, in-car Spotify rotation",
                      mix: "Real listeners, no bots. Song is live and ingest-ready; ~1 week queue latency, summer queue filling.",
                      rationale:
                                  "The one channel that buys authentic streams and monthly actives at a fixed, known rate, and it re-weights the listener map to the US and Canada in a single move. Running across four CCD rosters this quarter; the rate and cap are proven, not projected.",
            },
            {
                      key: "Meta Flight (FB + IG)",
                      role: "Story + Retargeting",
                      budget: "$900",
                      budgetPct: "$30/day avg · announce-week surge",
                      cpv: "≤ $0.60 / click (planning)",
                      views: "1,500+",
                      viewsPct: "streaming clicks · 100K+ video views banked",
                      markets: "US + CA, ages 35–64, weighted to the Nugent belt + Cincinnati",
                      mix: "MV cutdowns with Tate in frame one; Queensryche, Tate, Nugent + classic rock stacks; executed with James Wright under CCD strategy.",
                      rationale:
                                  "The cheapest place on the internet to reach a 35-to-64 rock audience. Drives streams now and banks the warm pool the film announce and CD push retarget next month. Every dollar does two jobs.",
            },
            {
                      key: "YouTube Trickle",
                      role: "Demo-Native Discovery",
                      budget: "$300",
                      budgetPct: "$10/day, always-on",
                      cpv: "$0.01–0.03 / view (planning)",
                      views: "10–30K",
                      viewsPct: "views on the official video",
                      markets: "US + CA, Queensryche + classic rock viewers",
                      mix: "In-feed discovery on the official April 10 video, plus remarketing pre-roll.",
                      rationale:
                                  "This demo treats YouTube like a jukebox. A small always-on line keeps the official version winning its own search results, and every view deepens the remarketing pool.",
            },
                ],
          dial: [
            {
                      label: "Floor",
                      budget: "$2,760 all-in",
                      views: "150K",
                      split: "$2,400 media ($1,800 Strive + $600 Meta) + $360 fee",
                      note: "The original frame. Full streams number, thinner story layer, smaller warm pool handed to the film.",
            },
            {
                      label: "Recommended",
                      budget: "$3,450 all-in",
                      views: "150K+",
                      split: "$3,000 media ($1,800 Strive + $900 Meta + $300 YouTube) + $450 fee",
                      note: "The full architecture: streams at cap, the Tate story funded with an announce-week surge, YouTube always-on, six-figure warm pool banked.",
                      featured: true,
            },
            {
                      label: "Stretch",
                      budget: "$4,140 all-in",
                      views: "150K++",
                      split: "$3,600 media ($1,800 Strive + $1,500 Meta + $300 YouTube) + $540 fee",
                      note: "Same streams cap, Meta at $50/day flat. The pick if the film announce is the real priority and this flight is its runway.",
            },
                ],
          exclusions: [
                  "TikTok OFF: 11.3K followers, +6 last month, wrong demo",
                  "No chart play: charts are next-cycle by design",
                  "No playlist pitching or placement services: not something CCD offers",
                  "No bot inventory anywhere",
                  "Tour ticket media stays in the tour lane",
                ],
          caveat: {
                  heading: "The Fee, In the Open",
                  body:
                            "CCD's 15 percent agency fee applies to all managed spend on this flight, Strive included. Every option above shows media at cost plus the fee as its own line, so the media number and the management number never blur.",
          },
          pacingNote:
                  "Timing is the argument: approved this week, the flight runs roughly July 20 through August 19, landing the full 150K across the Hellbilly Hollow announce (July 21 to 27), CDs arriving, the August 1 D2C push, and the Nugent Midwest belt. Strive carries about a week of queue latency and the summer queue is filling, so the approval date is effectively the start date.",
    },

    timelineHeading: "The 30-Day Arc",
    timelineSubheading: "One week to load, three weeks live, compounding into the announce window.",
    timelineImageCaption: "30 Days / 3 Channels / 1 Record",
    timeline: [
      {
              phase: "Lock + Load",
              week: "Week 1",
              date: "Days 1–7",
              status: "upcoming",
              tasks: [
                        "Strive queue locked day one; baseline locked (streams, actives, geo, saves)",
                        "Creative bank cut from the official video: Tate in frame one",
                        "Audiences built with James Wright; owned playlists re-racked with the record up top",
                      ],
      },
      {
              phase: "Ignition",
              week: "Week 2",
              date: "Days 8–14",
              status: "upcoming",
              tasks: [
                        "Strive live: US + Canada rotation at cap pace",
                        "Meta live at $30/day; YouTube in-feed always-on",
                        "In-market weighting rides the Nugent dates",
                      ],
      },
      {
              phase: "Surge",
              week: "Week 3",
              date: "Days 15–21",
              status: "upcoming",
              tasks: [
                        "Meta surges as Hellbilly Hollow goes public (July 21 to 27)",
                        "Winners scaled, losers cut; save and follow prompts on warm audiences",
                        "Weekly lift readouts one and two delivered",
                      ],
      },
      {
              phase: "Peak + Readout",
              week: "Week 4",
              date: "Days 22–30",
              status: "upcoming",
              tasks: [
                        "Full readout vs. baseline: streams, actives, geo, saves, costs, pool sizes",
                        "Warm audiences handed to the film announce and CD D2C push",
                        "Scale-or-sustain call: next focus track, Marquee/Showcase check, Grogtober runway",
                      ],
      },
        ],

    deliverablesSubheading: "",
    deliverables: [],

    scope: {
          subheading: "This flight does one thing: rebuild consumption on \"Silent Lucidity.\" The edges, exactly.",
          included: [
                  "Strive.fm queue lock, geo configuration, pacing, and attribution hygiene (Strive volume always reported as its own line)",
                  "Meta strategy, creative bank (9 to 12 cutdowns and statics), audiences, and pacing, executed with James Wright",
                  "YouTube in-feed and remarketing flight on the official video",
                  "Pixeled smart link, retargeting pool construction, owned-playlist re-rack",
                  "Weekly lift reports and the day-30 readout with the next-cycle recommendation",
                ],
          excluded: [
                  "Playlist pitching and placement of any kind: not services CCD offers, on this flight or ever",
                  "Hellbilly Hollow film media: separate budget, owed by Regime; this flight hands it the warm audiences",
                  "Tour ticket advertising and radio/PR (Deborah owns press)",
                  "New video or content production: the official video is the asset; cutdowns included, shoots are not",
                ],
    },

    nextSteps: [
      {
              step: 1,
              title: "Pick the Dial",
              description: "One line back approves it: $2,760 floor, $3,450 recommended, or $4,140 stretch, all-in.",
      },
      {
              step: 2,
              title: "Queue Locks Same Day",
              description: "Strive slot reserved on approval; creative and audiences build while it clears.",
      },
      {
              step: 3,
              title: "Live Inside a Week",
              description: "All three channels ignite together, timed to the announce window and the tour belt.",
      },
      {
              step: 4,
              title: "Readouts Every Week",
              description: "Lift vs. baseline weekly, and a day-30 scale-or-sustain call with the next-cycle plan.",
      },
        ],

    cta: {
          headline: "The audience already showed up once. This time we keep them.",
          body: "A Grog Is Born proved 37,000 people will listen when this record is in front of them. The only thing that ended was the push. Green-light a dial option and the queue locks today. Valid for 30 days.",
          email: "geoff@crowdcontroldigital.com",
    },

    images: {
          hero1: "/images/kurt-deimer-silent-lucidity/hero1.png",
          hero2: "/images/kurt-deimer-silent-lucidity/hero2.png",
          product: "/images/kurt-deimer-silent-lucidity/product.png",
          editorial: "/images/kurt-deimer-silent-lucidity/editorial.png",
          texture: "/images/kurt-deimer-silent-lucidity/texture.png",
          brutalist: "",
          heroBg: "/images/kurt-deimer-silent-lucidity/hero-bg.jpg",
          ogImage: "/images/kurt-deimer-silent-lucidity/og-image.png",
          hero1Caption: "Consumption Recovery + Media Flight",
          brutalistCaption: "Kurt Deimer × Crowd Control Digital",
    },
};
