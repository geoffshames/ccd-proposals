import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorPlanStrategy: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "82major-strategy-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "U.S. Growth Strategy",
    title: "82MAJOR",
    subtitle: "A long-term U.S. expansion framework through 1H 2027. Fandom-first. Song-agnostic. Scalable.",
    partnership: "Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "May 2026",
    backgroundImage: "/images/82major/82major-group.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview / Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Objective",
      subtitle: "A scalable U.S. expansion strategy that builds fandom infrastructure first and amplifies through digital, experiential, and PR around release windows.",
      body: [
        "This deck frames a long-term U.S. growth framework for 82MAJOR. It supports the current SIGN promotional cycle, the September comeback rollout, the November U.S. tour, and the longer arc of fandom plus audience growth through 1H 2027.",
        "This is the strategic framework that governs how budget is allocated across verticals and how it scales from one release cycle to the next. The framework is scoped to the current SIGN single cycle. The September comeback authorizes a fresh authorization on the same structure; the same applies to the November tour and any subsequent release window. Recommended spend allocation, scalable U.S. market-building, and a non-negotiable foundational layer that runs across every cycle.",
      ],
      supports: {
        heading: "What This Strategy Supports",
        items: [
          "Current SIGN single promotional push",
          "September comeback rollout (7th mini)",
          "November U.S. tour (return run)",
          "Long-term fandom growth through 1H 2027 and beyond",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Fandom growth: U.S.-owned channels and CRM that compound across cycles",
          "Digital marketing: discovery-layer acquisition calibrated to the conversion ratio already in place",
          "PR amplification: credibility and narrative extension on top of the layers below it",
          "DSP and partnership opportunities: editorial relationships and platform integrations",
          "Optional add-ons: A&R / features strategy and a separate radio plan",
        ],
      },
      footnote: "This deck is the strategic spine. The campaign-by-campaign creative and tactical plans sit beneath it.",
    },

    // ===================================================================
    // 02. Core Strategy + Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "Fandom drives everything. PR does not break artists on its own. Strong fandom plus engagement creates moments worth reporting. IRL activations drive digital conversation. Digital momentum strengthens media and partnership opportunities.",
      hierarchy: [
        {
          label: "Fandom (Foundation, Always-On)",
          description: "The compounding layer. U.S. fan-page network, CRM with email and SMS via Laylo, owned-audience capture, fan engagement mechanics. Runs every week regardless of release calendar. Non-negotiable foundational spend. Without this layer, every other dollar leaks.",
        },
        {
          label: "Digital (Amplifier)",
          description: "Where reach happens. Platform strategy, narrative positioning, creator participation, paid amplification, DSP and editorial partnerships. Calibrated to the fandom layer below it. Spend rises during release windows; the team stays the same.",
        },
        {
          label: "PR (Amplifier)",
          description: "Credibility and narrative extension. Not a top-of-funnel growth engine. PR works when fandom, digital, and IRL are already producing something to point at. Pitched too early, it burns relationships. Pitched at the right moment, it scales every prior dollar.",
        },
      ],
      messaging: [
        "The fandom and digital infrastructure is song-agnostic. It supports SIGN, the September comeback, and every release after.",
        "Continuous spend on the foundation. Episodic spend on the amplifiers, calibrated to release windows and tour dates.",
        "Twelve-month minimum horizon. No campaign-by-campaign re-buildouts.",
        "Tier framing over impressionistic ranking. Every recommendation references where 82MAJOR sits versus tier-one peers and what closing that gap requires.",
      ],
      footnote: "Foundational spend is non-negotiable. Amplifier spend is calibrated to the calendar.",
    },

    // ===================================================================
    // ===================================================================
    // 03. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "03",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro: "Tentative U.S.-market targeting based on current Chartmetric and platform signals. These splits set the initial paid-media targeting and the fan-page network's content posture. Numbers will refine after the June account-warm-up phase, with the warmed audiences feeding back into the September comeback campaign brief.",
      metros: [
        { name: "Los Angeles, CA" },
        { name: "Chicago, IL" },
        { name: "Dallas-Fort Worth, TX" },
        { name: "Atlanta, GA" },
        { name: "Seattle, WA" },
        { name: "San Francisco Bay Area" },
        { name: "Houston, TX", tier: "secondary" },
        { name: "New York, NY", tier: "secondary" },
        { name: "Washington, DC", tier: "secondary" },
        { name: "Boston, MA", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 55 },
        { bracket: "25-34", weight: 28 },
        { bracket: "35-44", weight: 12 },
        { bracket: "45+", weight: 5 },
      ],
      genderDistribution: { female: 65, male: 35 },
      similarArtists: [
        "TWS",
        "BOYNEXTDOOR",
        "RIIZE",
        "ZEROBASEONE",
        "NCT WISH",
        "ATEEZ",
        "ENHYPEN",
        "Stray Kids",
        "P1Harmony",
        "DPR IAN",
        "Beenzino",
        "BIG Naughty",
      ],
      genres: [
        "K-Pop",
        "K-Hip-Hop",
        "K-R&B",
        "Korean Pop",
      ],
      platformSignals: [
        { platform: "Spotify", note: "309K monthly listeners. Follower-to-listener ratio of 0.439 (healthy fandom conversion). Top U.S. tracks: Sure Thing, Stuck, ON." },
        { platform: "TikTok", note: "Most under-built channel. Highest-leverage discovery layer for paid + organic creator activation." },
        { platform: "YouTube", note: "Strong MV consumption lane; runway for In-Stream + In-Feed paid against MV view-velocity goals." },
        { platform: "Instagram", note: "Active fan-page activity; brand layer where K-pop retailer drops, fan signs, OOH receipts compound." },
      ],
      footnote: "Tentative. Splits derived from Chartmetric + platform data as of May 2026. CCD recalibrates after the June warm-up phase delivers pixel data.",
    },

    // 04. Vertical 1: Fandom / Always-On Digital
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Fandom",
      title: "Vertical 1 / Fandom & Always-On Digital",
      philosophy: "The compounding foundation. Continuous spend. Song-agnostic. The layer every other dollar relies on.",
      subBlocks: [
        {
          label: "A",
          title: "U.S.-Centric HQ Fan Pages",
          timeline: "3-6 month minimum; warm-up starts ~1 month pre-campaign",
          objective: "Build a dedicated U.S.-focused fandom ecosystem that lives outside the Korean fan-channel default and turns U.S. interest into U.S.-owned audience.",
          strategy: "Partner with agencies like Beautiful Digital or INFINITIZE to run a network of U.S.-positioned channels. Repurpose Korean content with subtitles and localization. Create U.S.-specific edits. Provide shot lists and content requests in advance so the channels operate as an extension of the artist team, not a fan-account guess.",
          components: {
            heading: "What The Network Does",
            items: [
              "Repurposes Korean content with English subtitles and U.S. edits",
              "Produces U.S.-first cuts (live clip moments, member spotlights, tour footage)",
              "Builds authentic fandom engagement on a U.S. cadence",
              "Captures U.S. fans onto channels CCD and the artist team control",
              "Coordinates with K-pop retailers and partner ecosystems on activations",
            ],
          },
          kpis: [
            "Incremental follower growth",
            "Engagement growth (saves, shares, comments)",
            "Fan participation rates",
            "UGC amplification",
            "Community retention",
          ],
        },
        {
          label: "B",
          title: "Email CRM + SMS Strategy",
          objective: "Convert casual audience into a retained fandom ecosystem that the artist team owns outside platform algorithms.",
          strategy: "Stand up Laylo as the U.S. CRM, email, and SMS platform. Capture email and SMS at every touchpoint (K-pop retailer drops, tour stops, content unlocks, social DM funnels). Segment by city, engagement tier, and purchase history. Run retention flows tied to release windows.",
          components: {
            heading: "Components",
            items: [
              "Email capture flows (web, social, tour)",
              "Laylo email + SMS stack (drop alerts, ticketing, tour comms)",
              "Fan segmentation by city, tier, behavior",
              "Retention campaigns timed to release windows",
              "Fan incentives that drive list growth (pre-save unlocks, photocard offers)",
            ],
          },
          kpis: [
            "Email list: 10K+ within 6 months",
            "SMS list: 5K+ within 6 months",
            "Open rate: 40%+ (Laylo industry average for active fandoms)",
            "Click-through on release-day flows: 15%+",
          ],
        },
        {
          label: "C",
          title: "Fan Engagement Mechanics",
          objective: "Create viral fandom perception, 'this group does more for their fans' sentiment, and public social proof that creators, press, and partners can see.",
          tactics: [
            "Contests (UGC challenges, photo contests, lyric challenges)",
            "Giveaways (signed photocards, tour tickets, member-curated bundles)",
            "Exclusive content unlocks (early MV access, behind-the-scenes cuts)",
            "Fan rewards tied to streaming, pre-saves, purchases",
            "VIP engagement (top-tier fan recognition, member shoutouts)",
            "Participation campaigns (member-led challenges, dance covers)",
          ],
        },
      ],
      footnote: "Foundation runs every month regardless of release calendar. This is the layer that compounds.",
    },

    // ===================================================================
    // 05. Vertical 2: Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Digital",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "High-level spend allocation across paid, organic, and creator. The amplifier that turns the fandom foundation into reach. (DSP strategy is broken out as its own vertical below.)",
      subBlocks: [
        {
          label: "A",
          title: "Content Narrative + Song Positioning",
          objective: "Resolve the brand-vs-listener gap. The brand markets hip-hop. The audience consumes melodic B-sides. The narrative architecture should treat both as members' own work, not as a creative reset.",
          components: {
            heading: "Components",
            items: [
              "Title-track positioning (hip-hop frame)",
              "B-side positioning (melodic frame)",
              "Production-credit content (members-as-producers, the underused asset)",
              "Viral storytelling (anchored to real catalog moments, not invented ones)",
              "UGC campaigns coordinated with title-track and B-side cycles",
            ],
          },
        },
        {
          label: "B",
          title: "TikTok Amplification + Creator Participation",
          objective: "Move TikTok from the platform 82MAJOR is most under-built on to the discovery engine that turns U.S. tour-converts and K-hip-hop crossover fans into followers and streamers.",
          tactics: [
            "Tastemaker creator activations (8-15 per release window)",
            "Flighthouse-style amplification on title-track moments",
            "Organic creator participation around B-side cuts",
            "Paid creator support (sponsored posts, dance challenges)",
            "Trend co-option timed to release windows",
          ],
        },
        {
          label: "C",
          title: "Influencer Marketing",
          components: {
            heading: "Components",
            items: [
              "Tastemaker tier (mid-influence, high-credibility creators)",
              "Flighthouse-style amplification (mass-distribution networks)",
              "Organic plus paid creator support",
              "Korean hip-hop crossover creators (the credibility-unlock layer)",
              "U.S. dance and styling creators tied to release aesthetics",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // ===================================================================
    // 06. Vertical 3: DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy",
      philosophy: "The discovery layer. Where 82MAJOR's healthy follower-to-listener ratio gets the reach it has been missing.",
      intro: "82MAJOR converts what reaches it. The bottleneck is editorial and platform reach, not fan motivation. This vertical exists because closing that gap requires its own dedicated relationships, calendar, and content output.",
      subBlocks: [
        {
          label: "A",
          title: "Playlist Pitching & Editorial Lane",
          objective: "Land 82MAJOR on the playlists that matter, in the lanes that match the music. Pitch Anglo Pop Editors at major DSPs rather than letting the group default into the K-pop bucket.",
          strategy: "One major DSP commits as the cycle champion. Spotify, Apple, or YouTube Music takes 82MAJOR through a full 360 in that cycle. The other two run baseline playlist and editorial.",
          components: {
            heading: "Components",
            items: [
              "Playlist pitching across Spotify, Apple Music, YouTube Music, Tidal, Amazon Music",
              "Anglo Pop Editor positioning (not K-pop bucket)",
              "Spotify Equal Asia / Apple Music K-Hits anchor placements",
              "Editorial relationship development (one named contact per DSP)",
              "Cycle-specific pitch packets with localized U.S. context",
            ],
          },
        },
        {
          label: "B",
          title: "Live Performance Programs",
          objective: "Showcase 82MAJOR's performance identity to U.S. audiences through DSP-branded live content. The members-as-producers angle reads natively in these formats.",
          examples: [
            "Spotify Outside (flexible location)",
            "VEVO DSCVR (films in LA / NY)",
            "Amazon Music City Sessions (livestreams to Twitch for amplification)",
            "Amazon Music Presents (LA-based)",
            "Spotify Singles / Amazon Music Original (American song cover format)",
          ],
        },
        {
          label: "C",
          title: "Artist-to-Watch Programs",
          objective: "Land on the flagship development programs that signal 'rising' to U.S. editorial and label-services partners.",
          examples: [
            "Spotify RADAR",
            "Amazon Music Breakthrough",
            "Apple Up Next (program status TBD)",
            "YouTube On The Rise",
            "VEVO DSCVR Artists To Watch",
            "TIDAL Rising",
            "Pandora development tracks",
          ],
        },
        {
          label: "D",
          title: "Catalog Activation & Stationhead",
          objective: "Re-activate the dormant streaming catalog (Sure Thing, Stuck, ON) during release weeks. Use Stationhead listening parties to convert fan-army energy into measurable stream lifts.",
          components: {
            heading: "Components",
            items: [
              "Spotify Canvas video on top-10 catalog tracks",
              "Stationhead release-week listening parties with fan-account hosts",
              "Curated U.S. fan playlists tied to release narratives",
              "Cross-platform listening party amplification (YouTube, Discord)",
              "Metadata cleanup for streaming algorithm signaling",
            ],
          },
        },
      ],
      footnote: "DSP is the discovery layer that turns the rest of the strategy into measurable streams.",
    },

    // 07. Vertical 4: PR
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "PR",
      title: "Vertical 4 / PR",
      philosophy: "Amplification, narrative extension, credibility. Not a primary growth engine. PR is most effective when supported by strong fandom engagement, digital momentum, experiential moments, and streaming traction.",
      subBlocks: [
        {
          label: "A",
          title: "Focus Areas",
          components: {
            heading: "Where PR Works",
            items: [
              "Media narrative around the U.S. growth story",
              "Cultural-momentum framing (the group's tier ascent)",
              "Fan-engagement success as the news beat",
              "Firsts and milestones (first U.S. tour, chart benchmarks, fandom milestones)",
              "Long-term artist profile-building over a 12-month horizon",
            ],
          },
        },
        {
          label: "B",
          title: "Editorial Support",
          components: {
            heading: "What Kakao Pitches",
            items: [
              "Interviews (artist and member-level)",
              "Long-form profile features",
              "Campaign and release announcements",
              "Tour coverage in U.S. publications",
              "Tentpole moments (comeback, tour, milestones)",
            ],
          },
        },
        {
          label: "C",
          title: "Press Targets",
          tactics: [
            "Tier 1 (narrative shapers): Billboard, Rolling Stone, Pitchfork, Pigeons & Planes, SPIN, NYT",
            "Tier 2 (pop-culture / youth media): Teen Vogue, Paper, Nylon, HYPEBAE, i-D",
            "Tier 3 (digital tastemakers): EARMILK, Consequence, NME, DORK, The Line of Best Fit",
            "Tier 4 (K-pop and music blogs): Soompi, Allkpop, KPOPWORLD, Just Jared",
            "Hip-hop press lane: Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea",
          ],
        },
        {
          label: "D",
          title: "End-to-End Media Relations",
          components: {
            heading: "Operational Scope",
            items: [
              "Tentpole moments and events",
              "In-market promo and logistical support",
              "Press junket coordination at U.S. tour cities",
              "Risk monitoring (crisis management at additional fee)",
            ],
          },
        },
      ],
      footnote: "Tier labels are directional, not chronological. Outreach is guided by story-readiness, not hierarchy.",
    },

    // 08. Handled by Kakao
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Kakao",
      title: "Handled by Kakao",
      philosophy: "Workstreams Kakao owns directly. CCD coordinates and informs, but Kakao runs point on relationships, talent, and the radio plan.",
      intro: "Radio is approved on its own track. A&R / Features Strategy sits with the Kakao team end-to-end; the SIGN feature artist candidates below are CCD's recommendation, but the conversation, deal flow, and sign-offs run through Kakao.",
      subBlocks: [
        {
          label: "A",
          title: "Radio Strategy",
                    timeline: "Phase 1 / 2-3 months",
          objective: "Build the song at pop radio, move it up the chart, and more importantly introduce the group to pop radio so they can compete on a bigger scale. Approved by Kakao on its own track.",
          strategy: "Service wide to pop radio. There are over 200 pop stations across the country including Sirius. Lean on the stations that already support Asian pop and put an emphasis on those to start airplay and content. Look for spikes, test spins, and identify champions willing to lead the way. Hyper-focus on the iHeartradio show KPOP w JOJO since he has already started to support; make sure he continues to do so and use that lever with other iHeart stations.",
          components: {
            heading: "Key Radio Station Zooms",
            items: [
              "KMVQ San Francisco",
              "WILD 94.9 San Francisco",
              "KISS Chicago",
              "Q99 Atlanta",
              "Z100 New York",
              "KISS Boston",
              "KLUC Las Vegas",
              "KALV Phoenix",
              "Additional stations as time permits",
            ],
          },
          tactics: [
            "Artist engagement with any radio social posts that debut or support the song (retweets, IG Stories, reposts)",
            "Most Requested Live 'Ask Anything Chat' (3-week promotion): fans tweet questions, the artist films answers, the final edited video posts across MRL socials and YouTube",
            "MRL is the biggest, most important pop radio syndicated show, currently on 100+ pop radio stations",
            "Service merch to key radio programmers and content creators",
          ],
          examples: [
            "Past Ask Anything Chat artists: Jackson Wang, (G)I-DLE, P1Harmony, LISA, NMIXX, JO1",
          ],
          linksHeading: "Reference",
          links: [
            { label: "askanythingchat.com. Most Requested Live", url: "https://askanythingchat.com" },
          ],
        },
        {
          label: "B",
          title: "A&R / Features Strategy",
          objective: "Position 82MAJOR as a globally scalable performance-driven boy group by strategically pairing each single with feature artists that expand DSP reach outside core K-pop audiences, create viral and social crossover moments, strengthen editorial playlist positioning, add credibility within Western pop, dance, hip-hop, and alt spaces, support sync, remix, and festival opportunities, and build long-term association with tastemaker acts.",
          strategy: "SIGN sonically leans into 90s-inspired R&B textures with restrained percussion, dreamy melodies, and emotionally controlled vocal delivery. The song is atmospheric, minimal, and mature, a departure from the group's more aggressive performance records. Feature pairing should match that mood: alt-R&B credibility, fashion / tastemaker positioning, and cultural reach outside the K-pop lane.",
          components: {
            heading: "Strategic Goals",
            items: [
              "Expand DSP reach outside core K-pop audiences",
              "Create viral and social crossover moments",
              "Strengthen editorial playlist positioning",
              "Add credibility within Western pop, dance, hip-hop, and alt spaces",
              "Support sync, remix, and festival opportunities",
              "Build long-term artist association with tastemaker and culturally relevant acts",
            ],
          },
          featureTiersHeading: "SIGN - Feature Artist Candidates",
          featureTiers: [
            {
              label: "Tier 1",
              artists: [
                {
                  name: "TOMMY RICHMAN",
                  monthlyListeners: "12.3M Monthly Listeners",
                  instagram: "334K IG Followers",
                  reference: "Changes - Tommy Richman",
                  referenceUrl: "https://open.spotify.com/track/32VOsoPR0N9dEZNbogPIeZ",
                  note: "One of the biggest breakout artists of the past year with massive streaming momentum. Retro-inspired vocals and groove-heavy production fit the 90s influence of SIGN. Strong cultural buzz and broad crossover appeal beyond traditional pop audiences.",
                },
                {
                  name: "BAKAR",
                  monthlyListeners: "9.3M Monthly Listeners",
                  instagram: "341K IG Followers",
                  reference: "Don't Wanna - Justin Bieber, Bakar",
                  referenceUrl: "https://open.spotify.com/track/5hplO2Sk1SaZgSaR05m6Nn",
                  note: "Recently featured on Justin Bieber's SWAG project, adding major cultural visibility. Seamlessly blends indie, alternative, and R&B influences that align with SIGN's mood. Strong fashion, tastemaker, and international touring credibility outside traditional pop lanes.",
                },
              ],
            },
            {
              label: "Tier 2",
              artists: [
                {
                  name: "AMBER MARK",
                  monthlyListeners: "2.8M Monthly Listeners",
                  instagram: "389K IG Followers",
                  reference: "Sweet Serotonin - Amber Mark",
                  referenceUrl: "https://open.spotify.com/track/0RLl3obXeC2HsCQcI1EglP",
                  note: "Recently opened for Sabrina Carpenter, significantly increasing mainstream exposure. Blends soulful R&B with alternative pop in a way that matches SIGN's mature atmosphere. Strong fashion-forward branding and DSP playlist appeal.",
                },
                {
                  name: "charlieonafriday",
                  monthlyListeners: "2.1M Monthly Listeners",
                  instagram: "814K IG Followers",
                  reference: "That's What I Get - charlieonafriday",
                  referenceUrl: "https://open.spotify.com/track/0koOtMGSYQSbaUpSCoL9Kh",
                  note: "Strong Gen Z fan engagement and consistent streaming performance. Emotional pop songwriting aligns well with SIGN's melodic intimacy. Large social footprint gives strong short-form and crossover potential.",
                },
              ],
            },
            {
              label: "Tier 3",
              artists: [
                {
                  name: "DESTIN CONRAD",
                  monthlyListeners: "1.1M Monthly Listeners",
                  instagram: "418K IG Followers",
                  reference: "Bad - DESTIN CONRAD",
                  referenceUrl: "https://open.spotify.com/track/5ld2rB0d5nG8RTQRRmkxNa",
                  note: "One of the strongest emerging names in modern male R&B right now. Smooth vocal tone and emotionally controlled delivery fit SIGN naturally. Strong touring momentum and growing credibility within alt-R&B spaces.",
                },
              ],
            },
          ],
        },
      ],
      footnote: "CCD provides strategy and coordination; Kakao executes.",
    },

    // ===================================================================
    // ===================================================================
  ],
};
