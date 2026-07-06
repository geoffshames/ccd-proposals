import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorRoadmap: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major-roadmap/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "82major-roadmap-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "LATAM Expansion + Roadmap",
    title: "82MAJOR",
    subtitle: "Trophy Español LATAM campaign, the September comeback, and the roadmap through the 1H 2027 releases. Localized. Concentrated. Compounding.",
    partnership: "GREAT M Entertainment × Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "July 2026",
    backgroundImage: "/images/82major-roadmap/82major-group.jpg",
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
      subtitle: "A LATAM launch plan for Trophy Español, built on the infrastructure the SIGN campaign proved, sequenced into the September comeback, the Q4 U.S. tour window, and the early-2027 releases.",
      body: [
        "Prepared at the request of GREAT M Entertainment. This plan covers the Spanish-language version of TROPHY as a dedicated LATAM campaign, presented at two budget levels ($20,000 and $40,000, all-in), and places that campaign inside the full release arc: the September EP, the October-November U.S. tour window, the January single, and the February EP.",
        "The strategic case is simple. The SIGN cycle proved that 82MAJOR converts the audience it reaches: Spotify followers grew from roughly 136K to 154K across the campaign while paid and organic discovery ran. Latin America is the largest audience 82MAJOR has never spent a dollar against. The group's five core LATAM markets (Brazil, Mexico, Chile, Peru, Colombia) already hold roughly the same monthly listener volume as South Korea, entirely organically. Trophy Español is the key that turns that latent audience into an owned one, at media costs a fraction of U.S. rates.",
        "The budget shown here is scoped to the Trophy Español cycle (~12 weeks). The September EP, the tour window, and the 1H 2027 releases each authorize fresh budgets on the same structure. The LATAM infrastructure this campaign stands up (Spanish-language fan channels, LATAM CRM lane, warmed paid audiences) carries across every one of those cycles.",
      ],
      supports: {
        heading: "What This Plan Supports",
        items: [
          "Trophy Español launch and LATAM market entry",
          "September EP comeback (the post-SIGN cycle)",
          "October-November U.S. tour window amplification",
          "January single and February EP (1H 2027 arc)",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "LATAM listener growth: from ~36.5K monthly listeners across the LATAM-5 toward 75K+ within two cycles",
          "Owned LATAM fandom: Spanish-language fan channels and a LATAM CRM lane that compound across releases",
          "Catalog leverage: Trophy Español extends a track that still streams organically nine months after release",
          "A repeatable structure: every future release drops into the same LATAM machine at marginal cost",
        ],
      },
      footnote: "Release vehicle for Trophy Español (standalone single ahead of the EP, or EP track) is flexible in this plan. The campaign grid anchors to the locked release date; both scenarios are covered in the Media Flight and Timeline sections.",
    },

    // ===================================================================
    // 02. Core Strategy + Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "82MAJOR's conversion machine works: what the group reaches, it keeps. The next dollar should buy reach where reach is cheapest and the audience already exists. A Spanish-language record, aimed at the LATAM markets already listening, is the highest-leverage discovery play available to this group right now.",
      hierarchy: [
        {
          label: "Localization (The Unlock)",
          description: "The Spanish version is not a novelty asset. It is the signal LATAM audiences and LATAM editorial reward: this group is speaking to us. Spanish-language vocal delivery, Spanish captions and lyric assets, and an ES-native content lane turn 82MAJOR from a group LATAM fans import into a group that shows up for them. Industry direction confirms the lane: the biggest K-pop companies are building Latin-facing groups and Spanish-language releases as a core strategy, not a side bet.",
        },
        {
          label: "Fandom (Foundation, Always-On)",
          description: "The same compounding layer the U.S. campaign runs, stood up in Spanish: LATAM-facing fan channels, a Spanish CRM lane on the existing Laylo stack, and fan engagement mechanics tuned to the most participatory fan culture in global K-pop. Built once, carried across every future cycle.",
        },
        {
          label: "Digital (Amplifier)",
          description: "Paid social and creators, concentrated where density is highest (Mexico City, Santiago) and costs are lowest. LATAM CPMs run at a fraction of U.S. rates, so every paid dollar buys multiples of the reach. The dark-ads testing loop from the SIGN campaign applies unchanged: find winners quietly, then hand winners to the official channels.",
        },
        {
          label: "DSP + PR (Discovery & Credibility)",
          description: "Editorial and playlist infrastructure aimed at LATAM markets, where K-pop editorial support is strong and a localized record is the qualifying asset. PR rides on top of momentum, not ahead of it: Spanish-language music media and creator-reactors amplify once the record is moving.",
        },
      ],
      messaging: [
        "The LATAM infrastructure is song-agnostic. It launches on Trophy Español and serves the September EP, the tour window, and every 2027 release.",
        "Concentration beats coverage. Two cities first (Mexico City, Santiago), five markets total, Brazil added at the expanded tier.",
        "Per-cycle budgets, one structure. Each release window authorizes fresh spend into the same machine.",
        "Every recommendation is benchmarked: where 82MAJOR's LATAM share sits today, where peer groups sit, and what closes the gap.",
      ],
      footnote: "Foundational LATAM spend builds owned infrastructure. Amplifier spend is calibrated to the release calendar.",
    },

    // ===================================================================
    // 03. The LATAM Opportunity
    // ===================================================================
    {
      type: "audience",
      number: "03",
      navLabel: "LATAM",
      title: "The LATAM Opportunity",
      intro: "82MAJOR's five core LATAM markets hold ~36.5K monthly listeners today (Chartmetric, July 2026), roughly equal to South Korea, built with zero LATAM marketing. The gap is the opportunity: LATAM is ~7% of 82MAJOR's listening geography versus ~11% for ATEEZ, ~12% for KATSEYE, and ~24% for Stray Kids, for whom Mexico is the #2 country in the world. Latin America is also the fastest-growing recorded-music region globally (+17.1% in 2025), with Brazil and Mexico now top-10 world markets. These splits set initial paid targeting and the LATAM channel network's content posture.",
      metrosLabel: "Priority Metros",
      metros: [
        { name: "Mexico City, MX" },
        { name: "Santiago, CL" },
        { name: "Lima, PE" },
        { name: "Bogotá, CO" },
        { name: "São Paulo, BR" },
        { name: "Monterrey, MX", tier: "secondary" },
        { name: "Guadalajara, MX", tier: "secondary" },
        { name: "Rio de Janeiro, BR", tier: "secondary" },
        { name: "Buenos Aires, AR", tier: "secondary" },
        { name: "Medellín, CO", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 52 },
        { bracket: "25-34", weight: 30 },
        { bracket: "35-44", weight: 13 },
        { bracket: "45+", weight: 5 },
      ],
      genderDistribution: { female: 70, male: 30 },
      similarArtists: [
        "Stray Kids",
        "ATEEZ",
        "TWICE",
        "KATSEYE",
        "NCT 127",
        "ENHYPEN",
        "BOYNEXTDOOR",
        "RIIZE",
        "ZEROBASEONE",
        "XG",
      ],
      genres: [
        "K-Pop",
        "K-R&B",
        "Pop en Español",
        "Latin Pop",
      ],
      platformSignals: [
        { platform: "Spotify", note: "LATAM-5 (BR, MX, CL, PE, CO) ~36.5K monthly listeners, ≈ South Korea volume, fully organic. Santiago is the #1 LATAM listening city, ahead of São Paulo and Mexico City. TROPHY still streams meaningfully nine months post-release: the strongest localization candidate in the catalog." },
        { platform: "TikTok", note: "LATAM CPMs typically run $1-3 versus $10-20 in the U.S. Mexico, Brazil, and Chile carry some of the most active K-pop dance-cover and fan-edit communities in the world. Primary discovery engine for this campaign." },
        { platform: "YouTube", note: "LATAM is a YouTube-first music region. Spanish lyric video and MV cutdowns are core assets, and low-cost in-stream media extends the paid envelope further than any U.S. equivalent." },
        { platform: "Shazam", note: "IRL discovery proxy. LATAM city-level Shazam growth during the campaign is the leading indicator for a future LATAM live routing decision." },
      ],
      footnote: "Directional targeting from Chartmetric and platform data, July 2026. Splits recalibrate after the paid test phase. Growth goal: LATAM-5 monthly listeners from ~36.5K toward 75K+ within two cycles (tier-dependent pace).",
    },

    // ===================================================================
    // 04. Campaign Structure
    // ===================================================================
    {
      type: "structure",
      number: "04",
      navLabel: "Structure",
      title: "Campaign Structure",
      intro: "Two all-in budget levels for the Trophy Español cycle (~12 weeks). CCD retainer and media management sit inside the budget, not on top. Foundation concentrates entirely on Spanish-speaking LATAM (Mexico, Chile, Peru, Colombia). Expansion adds Brazil with Portuguese-captioned creative, a larger creator program, and LATAM music PR. DSP editorial runs through Kakao's distribution relationships identically in both packages. The September EP and each subsequent release authorize fresh budgets on the same structure.",
      tiers: [
        {
          label: "Tier 1",
          budget: "$20,000",
          name: "LATAM Foundation",
          goal: "Launch Trophy Español into Spanish-speaking LATAM with concentrated paid media (Mexico City + Santiago first), a micro-creator round, Spanish-language fan channels, and a LATAM CRM lane. Prove the market response and build the warmed audiences the September EP lands on.",
          includes: [
            "Paid Social LATAM (TikTok + Meta), concentrated on MX + CL, extending to PE + CO",
            "8-10 LATAM micro-creators (dance cover, fan-edit, reaction lanes)",
            "Spanish-language fan channel network + Laylo ES lane",
            "DSP editorial coordination with Kakao: pitch packets, ES metadata, release-week follow-ups",
            "Dark-ads testing loop with winner handoff to official channels",
            "CCD strategic oversight, weekly reporting via the live dashboard",
          ],
        },
        {
          label: "Tier 2",
          budget: "$40,000",
          name: "LATAM Expansion",
          goal: "Everything in Foundation, at roughly 2.6x the deployable media weight, plus Brazil. Adds mid-tier creators, Spanish-language music PR and reactor seeding, and YouTube in-stream. Built to make Trophy Español a genuine LATAM moment, not a test.",
          featured: true,
          includes: [
            "Everything in LATAM Foundation",
            "Brazil added: Portuguese-captioned creative + BR creator seeding",
            "2-3 mid-tier LATAM creators on top of the micro round",
            "Spanish-language music PR + YouTube reactor program",
            "YouTube in-stream against the ES lyric video and MV assets",
          ],
        },
      ],
    },

    // ===================================================================
    // 05. Vertical 1: LATAM Fandom & Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Fandom",
      title: "Vertical 1 / LATAM Fandom & Infrastructure",
      philosophy: "The compounding foundation, stood up in Spanish. LATAM K-pop fandom is the most participatory in the world; the infrastructure exists to capture it, not rent it.",
      subBlocks: [
        {
          label: "A",
          title: "Spanish-Language Fan Channel Network",
          objective: "Extend the fan-channel model from the U.S. campaign into an ES-native lane: TikTok + Instagram channels posting Spanish-captioned edits, translated lyric content, and LATAM-specific fan moments, so LATAM interest lands on channels the artist team controls.",
          strategy: "Launch dedicated Spanish-language channels alongside the existing network (the reserved Trophy-branded handle activates here). Content mix: Spanish-subtitled performance edits, ES lyric visualizers, member-focus cuts, and LATAM fan-culture participation formats (dance cover duets, fan-art features). Human-translated Spanish only; machine-translated captions read instantly as inauthentic to this audience.",
          components: {
            heading: "What The Network Does",
            items: [
              "Repurposes existing content with Spanish subtitles and LATAM-native framing",
              "Publishes ES lyric and pronunciation content around Trophy Español",
              "Runs LATAM fan participation formats (covers, duets, fan-art, streaming parties)",
              "Captures LATAM fans onto owned channels ahead of the September EP",
              "Feeds top-performing themes into the paid creative rotation",
            ],
          },
          kpis: [
            "Follower growth on the ES channel network",
            "Engagement rate versus the U.S. channel baseline",
            "Share of comments in Spanish on official posts (localization pull-through)",
            "UGC volume on the campaign sounds",
          ],
        },
        {
          label: "B",
          title: "Laylo ES: The LATAM CRM Lane",
          objective: "Add a Spanish-language lane to the existing Laylo CRM so LATAM fans get drop alerts, broadcasts, and release mechanics in their language from day one.",
          strategy: "Spanish welcome flow, Spanish broadcast templates, and LATAM-timed sends on the existing stack. The voicemail funnel format extends naturally: a Spanish-language tease line for Trophy Español gives LATAM fans a call-in moment and captures numbers into the ES lane. Segment by country and city for tour-routing intelligence later.",
          components: {
            heading: "Components",
            items: [
              "Spanish welcome flow + broadcast templates on the existing Laylo stack",
              "ES drop alert for the Trophy Español release moment",
              "Country and city segmentation (MX, CL, PE, CO, BR) for future routing decisions",
              "Voicemail tease funnel in Spanish (call-in, number capture, auto-text signup)",
              "Pre-approved ES reply set so the label can safely engage inbound",
            ],
          },
          kpis: [
            "LATAM subscriber base: 3K+ within the cycle",
            "ES broadcast open rate at or above the U.S. lane baseline",
            "Release-day click-through on the ES drop alert",
          ],
        },
        {
          label: "C",
          title: "LATAM Fan Engagement Mechanics",
          objective: "Convert the region's participatory fan culture into visible momentum: streaming parties, cover challenges, and fan-project energy that editorial, creators, and press can see.",
          tactics: [
            "Release-week streaming parties hosted with LATAM fan bases (Stationhead + Spotify group sessions)",
            "Spanish lyric challenge and dance cover challenge seeded through the creator round",
            "Fan-project recognition: official reposts of LATAM fan projects to reward organization",
            "Giveaways weighted to LATAM (signed items, video call slots) to signal the region matters",
            "Localized CTAs everywhere: add-to-playlist and follow prompts in Spanish",
          ],
        },
      ],
      footnote: "Built once, carried forward: the ES network and CRM lane serve the September EP, the tour window, and every 2027 release.",
    },

    // ===================================================================
    // 06. Vertical 2: LATAM Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Digital",
      title: "Vertical 2 / LATAM Digital Marketing",
      philosophy: "The amplifier, aimed where reach is cheapest. LATAM CPMs give this campaign a structural advantage: the same dollar buys multiples of the impressions it buys in the U.S.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social: Concentrated Geo Strategy",
          objective: "Turn the CPM advantage into listener growth by concentrating spend in the two highest-density cities first (Mexico City, Santiago), then widening to national MX, CL, PE, CO (and BR at the Expansion tier) as creative winners emerge.",
          strategy: "TikTok and Meta lead. Phase one runs the dark-ads testing loop against city-level audiences: multiple Spanish-captioned creatives, low daily budgets, second-click optimization to filter for real intent (the same conversion discipline the SIGN campaign runs). Winners scale to national audiences and lookalikes built from LATAM engagement. Official channels post the proven winners organically, converting the audience paid media cannot reach.",
          components: {
            heading: "Components",
            items: [
              "City-concentrated test phase: Mexico City + Santiago interest and lookalike stacks",
              "Spanish-first creative: ES captions, ES lyric moments, chorus-forward cutdowns",
              "Second-click conversion optimization to filter low-intent traffic",
              "Retargeting pools from ES channel engagement and pivot-link traffic",
              "Expansion tier: Brazil ad sets with Portuguese captions, YouTube in-stream on the ES assets",
            ],
          },
          kpis: [
            "Cost per high-intent click versus U.S. campaign baseline",
            "LATAM monthly listener growth against the 75K+ two-cycle goal",
            "Spotify follower adds from LATAM-5 markets",
            "CPM delta captured versus U.S. equivalent spend",
          ],
        },
        {
          label: "B",
          title: "LATAM Creator Program",
          objective: "Put Trophy Español inside the LATAM creator ecosystems where K-pop discovery actually happens: dance cover crews, fan-edit accounts, and reaction creators in MX, CL, PE, CO (+ BR at Expansion).",
          strategy: "Foundation runs 8-10 micro-creators (high-credibility, community-native, low cost per post). Expansion adds 2-3 mid-tier creators for reach spikes and a Brazil seeding wave. All briefs are challenge-forward: the Spanish chorus is the hook, the dance point is the format. Winners get boosted with paid spend behind the creator's own post.",
          components: {
            heading: "Program Design",
            items: [
              "Micro round: dance cover + fan-edit creators embedded in LATAM K-pop communities",
              "Mid-tier round (Expansion): broader-reach creators for the release-week spike",
              "Challenge brief built on the Spanish chorus and a repeatable dance point",
              "Paid boost on winning creator posts (credit and momentum accrue to the campaign)",
              "Second creator wave held for the September EP week to re-fire the network",
            ],
          },
          kpis: [
            "Creator post views and engagement versus brief benchmarks",
            "UGC copycat volume on the campaign sound",
            "Follower and listener lift attributable to creator windows",
          ],
        },
        {
          label: "C",
          title: "Content Narrative: The Spanish-Language Story",
          objective: "Frame Trophy Español as commitment, not translation. The narrative writes itself: a self-producing group re-cut one of its defining tracks in Spanish for the fans who showed up unpaid.",
          tactics: [
            "Members-learning-Spanish content: pronunciation practice, lyric meaning, direct-to-camera messages to LATAM fans",
            "Behind-the-recording content from the Spanish vocal sessions",
            "Fan-reply formats: members reacting to LATAM fan covers and projects",
            "Release narrative anchored on the group's real organic LATAM growth (the fans made this happen)",
          ],
        },
      ],
      footnote: "The dark-ads loop, second-click optimization, and winner-to-organic handoff carry over from the live U.S. campaign unchanged. The machine is already running; this points it at a cheaper market.",
    },

    // ===================================================================
    // 07. Vertical 3: DSP Strategy LATAM
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy LATAM",
      philosophy: "The discovery layer, led through Kakao's distribution relationships and identical in both packages. A Spanish-language release is the qualifying asset LATAM editorial teams need to support a K-pop act beyond the global K-pop bucket.",
      subBlocks: [
        {
          label: "A",
          title: "Editorial & Playlist Positioning",
          objective: "Use Trophy Español to open LATAM editorial lanes that a Korean-language release cannot: Spanish-language and LATAM-local playlists alongside the global K-pop ecosystem.",
          strategy: "Editorial outreach runs through Kakao's distribution relationships. CCD builds the localized pitch packets per market: the LATAM organic-growth story, the Spanish-language asset, and the campaign commitment behind it. Priority order follows listener density: Mexico, Chile, Peru, Colombia, then Brazil. Correct Spanish-language metadata and credits at delivery so the record is eligible for ES editorial consideration from day one.",
          components: {
            heading: "Components",
            items: [
              "Spotify LATAM editorial pitching (K-pop verticals + ES pop and viral lanes)",
              "YouTube Music and Apple Music LATAM playlist pitching",
              "Deezer coordination for Brazil (outsized share in BR)",
              "ES metadata, credits, and lyric delivery verified before release",
              "iTunes LATAM chart pushes timed to release week for citable market wins",
            ],
          },
          kpis: [
            "LATAM editorial adds within release month",
            "Playlist reach diversification (no single placement carrying the record)",
            "iTunes chart peaks in MX / CL / PE for the PR layer",
          ],
        },
        {
          label: "B",
          title: "Catalog Bridge & Algorithmic Signal",
          objective: "Use the Spanish version to re-activate the original TROPHY and the catalog behind it. Localized versions routinely lift the parent track as listeners explore backward.",
          tactics: [
            "Trophy Español and TROPHY cross-linked in packaging, playlists, and canvas assets",
            "Curated ES-titled artist playlist featuring both versions plus the melodic catalog lane",
            "Algorithmic priming: LATAM saves and add-to-playlist CTAs to strengthen radio and autoplay signals in-region",
            "Shazam and search monitoring in LATAM cities as the IRL discovery read",
          ],
        },
        {
          label: "C",
          title: "Measurement",
          objective: "One source of truth. LATAM performance reports inside the same live dashboard the U.S. campaign already ships, with LATAM-5 splits visible weekly.",
          components: {
            heading: "Reported Weekly",
            items: [
              "LATAM-5 monthly listeners and follower adds (Chartmetric)",
              "Trophy Español streams by market + parent-track lift",
              "Paid performance by city and country against the U.S. cost baseline",
              "ES channel network growth and Laylo ES list size",
              "Playlist adds and editorial status by DSP and market",
            ],
          },
        },
      ],
      footnote: "DSP editorial runs through Kakao's distribution relationships and is identical in both packages. CCD supplies the pitch materials, metadata QC, catalog bridge, and measurement within the retainer.",
    },

    // ===================================================================
    // 08. Vertical 4: PR & Media LATAM
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "PR",
      title: "Vertical 4 / PR & Media LATAM",
      philosophy: "Amplification once the record is moving. Spanish-language music media rewards the localization story, and LATAM reactor culture is a distribution channel in its own right.",
      subBlocks: [
        {
          label: "A",
          title: "The Story LATAM Media Gets",
          components: {
            heading: "Narrative Anchors",
            items: [
              "A self-producing K-pop group recorded a Spanish version for a region that found them organically",
              "The organic numbers: LATAM listener volume equal to the group's home market before any marketing",
              "The commitment signal: dedicated Spanish channels, Spanish CRM, LATAM-first creative",
              "The bigger arc: LATAM as the group's next pillar region heading into the 2027 releases",
            ],
          },
        },
        {
          label: "B",
          title: "Channels & Targets",
          tactics: [
            "Spanish-language music and K-culture press (LATAM editions of major music outlets, regional K-pop media)",
            "YouTube reactor program: seeded first-listen and MV reaction placements across MX, CL, PE, CO",
            "LATAM entertainment and pop-culture podcasts and shows as momentum builds",
            "Phoner and video interviews with LATAM outlets during the September comeback press window",
          ],
        },
        {
          label: "C",
          title: "Scope By Tier",
          objective: "At Foundation, PR is operational: story assets prepared, inbound handled, reactors seeded organically. At Expansion, PR is funded: paid reactor placements, wider outreach, and coordinated release-week coverage.",
        },
      ],
      footnote: "PR spend concentrates in the Expansion tier. Under Foundation, the story assets exist and the wins get amplified, but outreach rides on organic momentum.",
    },

    // ===================================================================
    // 09. September Comeback: The Post-SIGN Plan
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "September",
      title: "The September Comeback / Post-SIGN Plan",
      philosophy: "The LATAM campaign is not a detour from the September EP. It is the warm audience the EP lands on. This section is the short-term plan for the comeback cycle, shaped by what the SIGN campaign proved.",
      intro: "The September EP authorizes its own budget on the structure this document establishes. What follows is the strategic shape of that cycle so the LATAM campaign, the EP, and the Q4 tour window read as one continuous plan.",
      subBlocks: [
        {
          label: "A",
          title: "What Carries Forward From SIGN",
          components: {
            heading: "The Proven Playbook",
            items: [
              "Dark-ads testing loop with winner handoff to official channels",
              "Fan channel network (U.S. + the new ES lane) at full cadence into release week",
              "Laylo broadcasts and drop mechanics in both languages",
              "Micro-creator rounds with paid boost behind winners",
              "Live dashboard reporting as the single source of truth across all vendors",
            ],
          },
        },
        {
          label: "B",
          title: "What Changes For The EP",
          components: {
            heading: "Upgrades From SIGN Learnings",
            items: [
              "Pre-save mechanics return: a real pre-release window with Laylo-driven pre-save flows in EN and ES",
              "Creative tested before release day: ad creative and captions validated in the pre-save window so release week scales, not tests",
              "Playlist reach diversified: the EP campaign builds multiple editorial and algorithmic lanes rather than depending on a single anchor placement",
              "Full-EP watch matrix: every track monitored from day one so organic B-side heat gets budget within days, not weeks",
            ],
          },
        },
        {
          label: "C",
          title: "Q4 Tour Window Amplification (Oct-Nov)",
          objective: "Use the planned Q4 U.S. routing as the campaign's IRL engine. On the 2025 tour, dormant catalog tracks spiked to multiples of their baseline weekly streams during tour weeks; the Q4 window should be engineered for that effect at EP scale.",
          tactics: [
            "Per-market paid pushes timed to each tour city, retargeting ticket-page and venue-geo audiences",
            "City-based radio and press interviews clipped and geo-targeted in near-real time",
            "Venue capture: Laylo signup moments at every stop feeding the CRM in both languages",
            "Tour content pipeline feeding the fan channel network and the EP's paid creative rotation",
            "November East Coast press window coordinated with the tour routing",
          ],
        },
        {
          label: "D",
          title: "LATAM Through The Comeback",
          objective: "The ES infrastructure keeps running through the EP cycle: comeback creative localizes day-one, the ES pre-save flow runs in parallel, and warmed LATAM paid audiences get the EP the moment it drops.",
        },
      ],
      footnote: "Budget for the September cycle is authorized separately once the EP configuration locks. The structure, vendors, and infrastructure are already in place from this campaign.",
    },

    // ===================================================================
    // 10. The 2027 Horizon
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "2027",
      title: "The 2027 Horizon / January Single + February EP",
      philosophy: "The long-term plan is the same structure, compounding. Every cycle inherits the infrastructure, the warmed audiences, and the learnings of the one before it.",
      subBlocks: [
        {
          label: "A",
          title: "January Single: The Setup",
          objective: "The January single launches into the strongest position the group has ever had: U.S. and LATAM fan infrastructure at full strength, a Q4 tour's worth of captured audience, and a December song camp feeding the release.",
          components: {
            heading: "What Feeds The January Cycle",
            items: [
              "December LA song camp output and the new record built with an A-list R&B producer session",
              "Tour-window audience capture from Q4 (retargeting pools + CRM lists in EN and ES)",
              "Feature strategy advancing up the established ladder as monthly listeners grow",
              "LATAM lane fully operational: the single localizes or ships with ES-facing creative from day one",
            ],
          },
        },
        {
          label: "B",
          title: "February EP: The Compounding Checkpoint",
          objective: "The February EP is where the structure proves itself: every vertical operating simultaneously across two regions, against the trajectory goal of moving 82MAJOR from the top of tier three toward the 1M+ monthly listener band.",
          components: {
            heading: "The Checkpoint Metrics",
            items: [
              "Global monthly listeners trajectory against the tier-two goal",
              "LATAM-5 share of listening geography versus the 11-24% peer band",
              "Owned audience: combined EN + ES CRM size and engagement",
              "First-week performance against the prior EP as the fandom-depth read",
            ],
          },
        },
        {
          label: "C",
          title: "The LATAM Live Option",
          objective: "If the Trophy Español cycle validates (listener growth, ES CRM size, Shazam city signals), a 2027 LATAM fan-meeting or tour leg becomes the highest-leverage conversion play available. The peer groups holding 20%+ LATAM share built it through live presence; the data from this campaign tells us exactly which cities justify routing.",
        },
      ],
      footnote: "Each 2027 release authorizes its own budget on this structure. The infrastructure investment happens once, in this cycle.",
    },

    // ===================================================================
    // 11. Handled by Kakao / Great M
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "Label",
      title: "Handled by Kakao / Great M",
      philosophy: "Workstreams the label and Kakao own directly. CCD coordinates timing and advises, but relationships, talent, and masters decisions run through the label side.",
      subBlocks: [
        {
          label: "A",
          title: "Spanish-Language Vocal Production",
          objective: "The recording itself: Spanish lyric adaptation, diction coaching, and vocal production for Trophy Español through the network already engaged on the label side. Asset delivery date is the single dependency that anchors the campaign grid.",
          components: {
            heading: "CCD Supports With",
            items: [
              "Fan-side review of the Spanish lyric adaptation (native-speaker read for singability and meme risk)",
              "Release-vehicle guidance: standalone pre-EP single versus EP track, with campaign implications of each",
              "Asset checklist: ES lyric video, visualizer, cover variant, and caption pack specs",
            ],
          },
        },
        {
          label: "B",
          title: "U.S. Radio (Ongoing)",
          objective: "The U.S. pop radio program continues on its own approved track and its own budget. LATAM radio stays out of scope this cycle: paid social reaches the same LATAM audience at a fraction of the cost, and radio in-region becomes relevant alongside a future live routing decision.",
        },
        {
          label: "C",
          title: "A&R / Features",
          objective: "The established feature-artist ladder continues for the U.S. singles. For LATAM specifically, one option worth a label-side conversation: a Latin artist feature or remix on Trophy Español would convert the record from localization into collaboration, with a partner fanbase attached. CCD can build the candidate list with streaming and audience-overlap data on request; the conversation, economics, and sign-off sit with the label and Kakao.",
        },
        {
          label: "D",
          title: "Release Logistics & Metadata",
          objective: "Distribution mechanics that make the LATAM campaign eligible to work: Spanish-language metadata and credits at delivery, lyric delivery to DSPs for ES lyric display, and release-date lock early enough to anchor the pre-save window and the campaign grid.",
        },
      ],
      footnote: "These workstreams sit outside the $20,000 / $40,000 campaign budgets. CCD provides strategy and coordination; the label and Kakao execute.",
    },

    // ===================================================================
    // 12. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "12",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "How the deployable budget moves across the ~12-week cycle at each tier. Phase one localizes assets and stands up the ES infrastructure while paid runs in test mode. Phase two is the release window at full scale. Phase three sustains, bridges into the September EP, and hands the warmed LATAM audiences to the comeback campaign. If Trophy Español ships as an EP track rather than a standalone single, phase two slides to the EP week and phase one extends; the structure holds either way.",
      totalBudget: "$10,900 (Foundation) / $28,300 (Expansion) to media + creators",
      phases: [
        {
          label: "Localize + Seed",
          window: "Weeks 1-3",
          focus: "ES asset pack finalized (captions, lyric assets, cutdowns). Spanish fan channels and Laylo ES lane live. Creator briefs out. Paid social launches in test mode against Mexico City + Santiago stacks using existing TROPHY content, building retargeting pools before the record drops.",
          budget: "~$2,500 / ~$6,000",
          tactics: [
            "Paid test phase: ES-captioned creatives, city-level audiences, second-click optimization",
            "ES fan channel network launch + first Laylo ES broadcast",
            "Creator round briefed and scheduled against release week",
            "DSP pitch packets delivered per market; ES metadata verified",
          ],
        },
        {
          label: "Launch + Scale",
          window: "Weeks 4-8",
          focus: "Trophy Español release window. Paid scales onto proven creative across MX, CL, PE, CO (+ BR at Expansion). Creator wave one live with paid boost behind winners. Streaming parties, ES drop alert, and playlist pushes fire in release week. Expansion adds reactor placements and YouTube in-stream.",
          budget: "~$5,500 / ~$15,000",
          tactics: [
            "Full-funnel paid scale: awareness + engagement + retargeting on winners",
            "Creator wave one + boosted winner posts",
            "Release-week: streaming parties, iTunes LATAM chart pushes, editorial follow-ups",
            "Expansion: BR ad sets, mid-tier creators, reactor program, in-stream flight",
          ],
        },
        {
          label: "Sustain + EP Bridge",
          window: "Weeks 9-12",
          focus: "Spend steps down to evergreen + retargeting. Second creator wave held for the September EP week. LATAM pre-save flow opens for the EP. Campaign learnings, warmed audiences, and the ES infrastructure hand off to the comeback cycle.",
          budget: "~$2,900 / ~$7,300",
          tactics: [
            "Evergreen + retargeting on top creatives; catalog cross-link push",
            "Second creator wave timed to the EP week",
            "Laylo ES: EP pre-save broadcast + re-engagement sends",
            "Handoff report: creative winners, audience pools, market reads for the EP campaign brief",
          ],
        },
      ],
      footnote: "Phase budgets are directional; CCD reallocates between line items inside the budget on weekly performance signals, disclosed on the dashboard.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve-week deployment grid for the Trophy Español cycle, running into the September EP and the Q4 tour window. Dates below assume an early-August start; the grid anchors to the locked release date and slides accordingly. W4 marks the flexible Trophy Español release slot (standalone scenario); W6-7 mark the September EP window; W10+ marks the tour run-in.",
      weeks: [
        { index: 1, label: "W1", dates: "Aug 3" },
        { index: 2, label: "W2", dates: "Aug 10" },
        { index: 3, label: "W3", dates: "Aug 17" },
        { index: 4, label: "W4", dates: "Aug 24", highlight: true, note: "TROPHY ES (FLEX)" },
        { index: 5, label: "W5", dates: "Aug 31" },
        { index: 6, label: "W6", dates: "Sep 7", highlight: true, note: "EP WINDOW (TBD)" },
        { index: 7, label: "W7", dates: "Sep 14" },
        { index: 8, label: "W8", dates: "Sep 21" },
        { index: 9, label: "W9", dates: "Sep 28" },
        { index: 10, label: "W10", dates: "Oct 5", note: "TOUR RUN-IN" },
        { index: 11, label: "W11", dates: "Oct 12" },
        { index: 12, label: "W12", dates: "Oct 19" },
      ],
      workstreams: [
        {
          name: "ES Assets & Localization",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "low" },
          ],
        },
        {
          name: "ES Fan Channels + Laylo ES",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "BUILD" },
            { weekIndex: 2, intensity: "high", label: "LAUNCH" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Paid Social LATAM",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "SCALE" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "LATAM Creators",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "SEEDING" },
            { weekIndex: 4, intensity: "high", label: "WAVE 1" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "WAVE 2" },
            { weekIndex: 8, intensity: "medium" },
          ],
        },
        {
          name: "DSP & Editorial",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "PITCH" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "PUSH" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "low" },
          ],
        },
      ],
      weekBreakdowns: [
        { weekIndex: 1, title: "Localization + infrastructure build", items: [
          "ES asset pack production: captions, lyric assets, chorus-forward cutdowns from existing masters.",
          "Spanish fan channels prepped (including the reserved Trophy-branded handle); Laylo ES welcome flow built.",
          "DSP pitch packets out per market; ES metadata and lyric delivery verified with distribution.",
          "Creator shortlist locked; briefs translated and scheduled.",
        ] },
        { weekIndex: 2, title: "ES lane live + paid test", items: [
          "ES fan channel network launches; first Laylo ES broadcast.",
          "Paid social live in test mode: ES creatives against Mexico City + Santiago stacks, second-click optimization from day one.",
          "Voicemail tease funnel live in Spanish.",
        ] },
        { weekIndex: 3, title: "Creator seeding + creative reads", items: [
          "Creator round receives assets; posting scheduled against the release slot.",
          "First paid creative reads: winners identified, losers pruned, city-level cost baselines logged.",
          "Streaming party plan locked with LATAM fan bases.",
        ] },
        { weekIndex: 4, title: "Release window opens (flex)", items: [
          "Standalone scenario: Trophy Español drops. ES drop alert fires, streaming parties run, creator wave one posts, paid scales onto winners.",
          "EP-track scenario: this week runs as extended test + pre-save open, and the release mechanics below slide to the EP week.",
          "iTunes LATAM chart pushes and editorial follow-ups in release week.",
        ] },
        { weekIndex: 5, title: "Scale week", items: [
          "Paid at full scale across MX, CL, PE, CO (+ BR at Expansion).",
          "Boost budget behind winning creator posts; official channels post proven winners.",
          "Expansion: reactor placements and YouTube in-stream live.",
        ] },
        { weekIndex: 6, title: "September EP window opens", items: [
          "EP comeback week (date TBD): LATAM lane fires day-one localized creative for the EP.",
          "ES + EN pre-save conversion flows complete; warmed LATAM audiences retargeted with EP creative.",
          "Editorial follow-ups across LATAM DSP contacts with the EP story.",
        ] },
        { weekIndex: 7, title: "EP week two + creator wave two", items: [
          "Second creator wave posts against the EP moment.",
          "Full-EP watch matrix live: every track monitored for organic heat, budget follows within days.",
          "Trophy Español sustained as the LATAM entry point inside the EP campaign.",
        ] },
        { weekIndex: 8, title: "Compound + diversify", items: [
          "Playlist reach diversification push: multiple editorial and algorithmic lanes on the EP.",
          "Paid rotation refreshed from fan-channel and creator winners.",
          "Laylo ES re-engagement broadcast to non-openers.",
        ] },
        { weekIndex: 9, title: "Sustain", items: [
          "Spend steps to evergreen + retargeting; catalog cross-link push (Trophy Español to TROPHY to the melodic lane).",
          "Market reads compiled: city-level cost, listener growth, Shazam signals.",
        ] },
        { weekIndex: 10, title: "Tour run-in", items: [
          "Q4 tour window opens: per-market paid pushes in tour cities layered onto the EP campaign.",
          "Tour content pipeline feeds all channels; venue Laylo capture live in both languages.",
        ] },
        { weekIndex: 11, title: "Tour amplification", items: [
          "City-based interviews clipped and geo-targeted in near-real time.",
          "Catalog activation monitoring: tour-week stream lifts tracked against the 2025 baseline effect.",
        ] },
        { weekIndex: 12, title: "Handoff + next cycle", items: [
          "Cycle report: LATAM growth versus goals, creative winners, audience pools, cost baselines.",
          "Recommendations delivered for the remaining tour window, the January single, and the February EP cycles.",
          "LATAM live-routing read: which cities the data justifies for a 2027 LATAM leg conversation.",
        ] },
      ],
      footnote: "Sprints run in one-week cycles. The grid anchors to the locked Trophy Español release date and the final EP date; CCD reallocates weekly across workstreams either way.",
    },

    // ===================================================================
    // 14. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "14",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro: "Two all-in options for the Trophy Español cycle (~12 weeks). CCD fees sit inside the budget, not on top: a $7,500 cycle retainer plus media management at 15% of managed spend. Everything else deploys to media, creators, and LATAM infrastructure. The September EP, the tour window, and each 2027 release authorize fresh budgets on the same structure.",
      ccdNote: "CCD fees are inside the budget ceiling. The deployable figure below is what reaches media, creators, and infrastructure after all fees.",
      tiers: [
        {
          label: "Tier 1",
          budget: "$20,000",
          name: "LATAM Foundation",
          tagline: "All-in. Spanish-speaking LATAM (MX, CL, PE, CO). Concentrated paid + micro-creators + ES infrastructure.",
          deployable: "$10,900",
          feeBreakdown: {
            retainer: "$7,500",
            retainerDetail: "CCD cycle retainer (~12 weeks): strategy, execution, vendor management, weekly dashboard reporting",
            mediaManagement: "$1,600",
            mediaManagementDetail: "Media management at 15% of managed spend",
          },
          breakdown: [
            { vertical: "Paid Social LATAM (TikTok + Meta)", amount: "$6,600" },
            { vertical: "LATAM Creator Program (8-10 micro)", amount: "$3,300" },
            { vertical: "ES Fan Channels + Laylo ES", amount: "$1,000" },
            { vertical: "CCD Retainer", amount: "$7,500" },
            { vertical: "Media Management (15%)", amount: "$1,600" },
          ],
        },
        {
          label: "Tier 2",
          budget: "$40,000",
          name: "LATAM Expansion",
          tagline: "All-in. Adds Brazil, mid-tier creators, funded PR + reactors, YouTube in-stream, and 2.6x the deployable media weight.",
          featured: true,
          deployable: "$28,300",
          feeBreakdown: {
            retainer: "$7,500",
            retainerDetail: "CCD cycle retainer (~12 weeks): strategy, execution, vendor management, weekly dashboard reporting",
            mediaManagement: "$4,200",
            mediaManagementDetail: "Media management at 15% of managed spend",
          },
          breakdown: [
            { vertical: "Paid Social LATAM (TikTok + Meta + YouTube)", amount: "$16,000" },
            { vertical: "LATAM Creator Program (micro + mid-tier + BR)", amount: "$8,000" },
            { vertical: "LATAM PR + Reactor Program", amount: "$2,800" },
            { vertical: "ES/PT Fan Channels + Laylo ES", amount: "$1,500" },
            { vertical: "CCD Retainer", amount: "$7,500" },
            { vertical: "Media Management (15%)", amount: "$4,200" },
          ],
        },
      ],
      footnote: "Each release cycle gets its own authorization: the September EP triggers a fresh budget call on this structure informed by Trophy Español performance; the tour window and the 1H 2027 releases do the same. The LATAM infrastructure built in this cycle carries forward at no rebuild cost.",
    },
  ],
};
