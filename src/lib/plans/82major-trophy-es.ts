import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorTrophyEs: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major-trophy-es/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "82major-trophy-es-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "TROPHY (Spanish Ver.) Campaign",
    title: "82MAJOR",
    subtitle: "An eight-week Spanish-language campaign for TROPHY (Spanish Ver.) across Spanish-speaking Latin America, Spain, and Spanish-speaking fans in the United States. $30,000 all-in, built on the audience the record found on its own.",
    partnership: "GREAT M Entertainment × Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "September 2026",
    backgroundImage: "/images/82major-trophy-es/82major-group.jpg",
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
      subtitle: "A lean, eight-week campaign that puts the first money behind a Spanish-language record that is already being bought in Spain and streamed across Latin America with nothing behind it.",
      body: [
        "TROPHY (Spanish Ver.) released September 1 on the HEAT single album. In the two weeks since, with paid media running behind Like Fire in the United States only, the group's Spanish-speaking markets moved on their own. Mexico grew its Spotify monthly listeners 43.6 percent, Peru 45.2 percent, and Chile 24.9 percent between September 5 and September 14, against 37.5 percent in the United States, the one market that had a budget behind it, and 27.9 percent worldwide. Spain bought the record: on release day TROPHY (Spanish Ver.) reached number four on the iTunes Spain Top Songs chart and number two on its K-pop chart, while Like Fire reached number three and number one. Spain is the only country where the Spanish version charted at all.",
        "The third market is already inside the group's largest one. The United States is 82MAJOR's number one Spotify market at 83,304 monthly listeners, and the cities carrying it, Los Angeles, New York, Chicago, Dallas, and Houston, are also the largest Spanish-speaking metros in the country. A Spanish-language version of a song the U.S. audience already knows is the cheapest bridge available into that audience's Spanish-speaking half, and it can be bought with language targeting inside the paid audiences the SIGN and HEAT campaigns already warmed.",
        "This plan is deliberately lean. The CCD fee is 15 percent on managed spend and nothing else, so $26,100 of a $30,000 authorization deploys into media, creators, and edits. The campaign runs eight weeks, from September 28 through November 22, so it rides the Spain chart signal while it is warm, builds Latin America through the Mexico City weekend of October 30 to November 1, and hands warmed Spanish-speaking audiences to the Q4 U.S. tour window before holiday advertising costs rise. Weight goes where the behavior already is: half to Spanish-speaking Latin America, a quarter to Spain, a quarter to Spanish-speaking fans in the United States.",
        "One honest framing sits under everything below. Spain is a purchase signal, not yet a streaming base. Spain does not appear among the group's tracked Spotify markets, which means it sits under roughly 4,100 monthly listeners, and Argentina is off that board too. Latin America is the reverse: no chart entries, but a real streaming base of roughly 26,000 monthly listeners across Mexico, Colombia, Chile, and Peru, about the size of South Korea and Australia combined for this group. The plan treats each market as what it is.",
      ],
      supports: {
        heading: "What This Plan Supports",
        items: [
          "TROPHY (Spanish Ver.), out September 1 on the HEAT single album (the campaign priced in this document)",
          "Spanish-speaking Latin America: Mexico, Chile, Peru, Colombia, and Argentina, concentrated in Mexico City, Santiago, Lima, and Bogotá",
          "Spain, where the record charted on release day with no spend behind it",
          "Spanish-speaking fans in the United States, reached with language targeting inside the paid audiences already built",
          "The Q4 U.S. tour window and the 1H 2027 releases, which inherit the Spanish-language audiences and creative this campaign builds (own budgets, authorized separately)",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Put Spain on the group's Spotify top-market board for the first time, which means crossing roughly 4,100 monthly listeners there",
          "Grow Spanish-speaking Latin America by 40 percent or more from the September 14 baseline of roughly 26,000 monthly listeners across Mexico, Colombia, Chile, and Peru",
          "Earn TROPHY (Spanish Ver.) its first editorial placement in a Spanish-speaking market, with Spanish-market streams attributed to the Spanish version",
          "Convert reach into Spotify follows and saves in all three markets, and point every new fan to the group's Laylo so the tour window and the 2027 album inherit them",
          "Buy Spanish-language creator and edit reach at a blended cost per thousand in line with the creator and clipping results of the last two cycles",
        ],
      },
      charts: [
        {
          kind: "hbars",
          title: "Two Weeks After HEAT: Monthly-Listener Growth by Market",
          subtitle: "Spotify monthly listeners, September 5 to September 14, 2026. Paid media ran in the United States only. Every Spanish-speaking market below grew on zero spend, and two of them outgrew the paid market.",
          unit: "%",
          series: [
            {
              name: "Growth, Sep 5 to Sep 14",
              points: [
                { x: "Peru", y: 45.2 },
                { x: "Mexico", y: 43.6 },
                { x: "United States (paid)", y: 37.5 },
                { x: "Worldwide", y: 27.9 },
                { x: "Chile", y: 24.9 },
              ],
            },
          ],
          source: "Chartmetric, pulled September 14, 2026",
        },
      ],
      footnote: "Streaming and geographic figures are from Chartmetric, pulled September 14, 2026. iTunes chart positions are from the iTunes Spain Top Songs and K-pop charts, September 1 to 2, 2026. Monthly listeners are a rolling 28-day measure, so release-week streams entered the count from September 9. Budgets here are scoped to this campaign only; the Q4 tour window and the 1H 2027 releases each authorize fresh budgets on the same structure.",
    },

    // ===================================================================
    // 02. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "The Spanish version found its audience without a dollar behind it. This campaign's job is to make sure that audience finds the group, and stays.",
      hierarchy: [
        {
          label: "Signal-Led Allocation",
          description: "Money follows measured behavior, not assumptions about where a Spanish version should work. Latin America streamed, so it gets half the budget and the paid engine. Spain bought, so it gets amplification aimed at converting a purchase spike into a streaming base. The United States already contains the group's largest Spanish-speaking audience, so it gets a language-targeted bridge inside audiences that already exist rather than a cold build.",
        },
        {
          label: "Native-Language Creative",
          description: "Every creator, edit, caption, and reply in this campaign is written and performed by Spanish speakers from the market it runs in. The lesson from the last year of K-pop's Latin push is that audiences reward records that respect the language and punish ones that treat it as a costume. A native Spanish vocal is the asset; the creative around it has to match.",
        },
        {
          label: "Paid Social as the Engine",
          description: "Latin America and Spain are the cheapest reach the group can buy anywhere, with impression costs a fraction of the United States. Paid social carries the campaign, tested dark, optimized to the second click into Spotify, and reallocated weekly across the three markets against live cost per outcome, exactly as the SIGN and HEAT flights were run.",
        },
        {
          label: "Owned Capture",
          description: "Reach that does not convert to a follow, a save, or a signup disappears when the flight ends. Every creative in this campaign carries a follow or save prompt, and every surface points fans to the group's Laylo, the owned channel that already exists, so the audience survives the campaign and is waiting for the tour window and the 2027 album.",
        },
      ],
      messaging: [
        "Lead with the song, not the translation. The record is a K-R&B melody that already works in English; the Spanish vocal is the way in, not the headline.",
        "Spain and Latin America are addressed as their own markets with their own creators, never as one Spanish-speaking block.",
        "In the United States, Spanish-language creative runs alongside English creative to the same warmed audiences, so nothing reads as a separate or lesser campaign.",
      ],
      footnote: "Sequencing follows the signal. Spain runs first because its release-day chart position is the freshest signal and decays fastest. Latin America scales from week three once creative is validated and creators are posting. The United States builds through the back half as the tour window approaches.",
    },

    // ===================================================================
    // 03. Three-Market Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "03",
      navLabel: "Audience",
      title: "Three-Market Audience & Targeting",
      intro: "Three markets, three different jobs. Spanish-speaking Latin America is a streaming base that grew on its own and needs scale. Spain is a purchase signal that needs converting into streams. Spanish-speaking fans in the United States are already inside the group's largest market and need a Spanish-language door into it. The targeting below is where the paid and creator lanes concentrate.",
      thesis: "Roughly 26,000 monthly listeners across Mexico, Colombia, Chile, and Peru make Spanish-speaking Latin America bigger than South Korea and Australia combined for this group. Spain, by contrast, produced a top-five iTunes debut from a base too small to register on the streaming board. The United States holds both: the group's largest Spotify audience and the largest Spanish-speaking metros in the country, in the same five cities.",
      metrosLabel: "Priority Metros, Three Markets",
      metros: [
        { name: "Mexico City, MX" },
        { name: "Santiago, CL" },
        { name: "Lima, PE" },
        { name: "Bogotá, CO" },
        { name: "Madrid, ES" },
        { name: "Barcelona, ES" },
        { name: "Los Angeles, CA" },
        { name: "Houston, TX" },
        { name: "Dallas, TX" },
        { name: "Guadalajara, MX", tier: "secondary" },
        { name: "Monterrey, MX", tier: "secondary" },
        { name: "Buenos Aires, AR", tier: "secondary" },
        { name: "Valencia, ES", tier: "secondary" },
        { name: "Chicago, IL", tier: "secondary" },
        { name: "New York, NY", tier: "secondary" },
        { name: "Miami, FL", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 50 },
        { bracket: "25-34", weight: 30 },
        { bracket: "35-44", weight: 14 },
        { bracket: "45+", weight: 6 },
      ],
      genderDistribution: { female: 74, male: 26 },
      personas: [
        {
          name: "Latin America: The Streaming Core",
          label: "Half the budget",
          priority: "primary",
          profile: "Already streaming the group in Mexico City, Santiago, Lima, and Bogotá, all four of which sit inside the group's global top fifty cities. Mexico alone has 14 million K-pop listeners on Spotify and is the fifth-largest K-pop market on the platform, the only Spanish-speaking country in the top ten, with roughly seven in ten of those listeners under thirty. This audience grew 25 to 45 percent in the two weeks after HEAT with nothing behind it.",
          psychographics: [
            "Fandom-native: streams, saves, and defends the group in Spanish-language fan communities",
            "Lives on TikTok first and YouTube second, with Spotify as the conversion surface",
            "Responds to member-level content and to the group speaking Spanish, even a few words",
          ],
          motivations: ["A K-pop record in their own language", "Being early on a Latin push before it is obvious", "Proof the group sees the region"],
          behaviors: [
            "Converts on the second click when the pivot is frictionless",
            "Reshares fan-origin edits more than official content",
            "Streams on ad-supported tiers, so YouTube and YouTube Music carry real weight",
          ],
          platforms: [
            { name: "TikTok", role: "Primary discovery and participation surface, cheapest reach in the campaign" },
            { name: "YouTube", role: "Secondary reach and a streaming surface in its own right" },
            { name: "Instagram", role: "Retargeting and member-level content" },
            { name: "Spotify", role: "Conversion target, follow and save" },
          ],
          barriers: ["Assumes the group will never come to the region", "Skips creative that reads as a translated ad"],
          triggers: ["Native Spanish creators reacting to the vocal", "Edits attached to Latin American culture, not to K-pop alone", "Any signal the group is looking at the region"],
          conversionGoal: "Follow and save on Spotify, then land on the group's Laylo.",
        },
        {
          name: "Spain: The High-Intent Buyer",
          label: "A quarter of the budget",
          priority: "primary",
          profile: "Bought TROPHY (Spanish Ver.) and Like Fire on release day, sending both into the iTunes Spain top five with no promotion. Spain hosted the largest K-pop concert in its history in July 2025 and a Music Bank stadium show in Barcelona this month, so the fandom infrastructure is real. The streaming base is not yet: Spain sits under the group's tracked-market threshold on Spotify. This audience is small, committed, and convertible.",
          psychographics: [
            "Purchase-first fandom behavior: buys the download, buys the physical, then streams",
            "Organized through Spanish-language fan accounts and Madrid and Barcelona fan events",
            "Judges Spanish-language releases on the quality of the Spanish",
          ],
          motivations: ["A version that is genuinely theirs", "Fandom recognition for charting the record", "A reason to believe a Spain date is possible"],
          behaviors: [
            "Coordinates buying and streaming pushes through fan accounts",
            "Consumes on ad-supported streaming tiers more than Latin America or the United States",
            "Follows the group's Spanish-language content and amplifies it to the wider fandom",
          ],
          platforms: [
            { name: "TikTok", role: "Discovery and creator surface" },
            { name: "Instagram", role: "Fan-account coordination and retargeting" },
            { name: "Spotify", role: "The conversion job: from purchase to sustained streaming" },
          ],
          barriers: ["Base too small to sustain streams without a prompt", "No tour or promo history in Spain to anchor to"],
          triggers: ["Acknowledgement of the Spain chart result from the group", "Spanish creators from Spain, not dubbed Latin American content", "Fan-event moments in Madrid and Barcelona"],
          conversionGoal: "Turn a release-day purchase spike into a streaming base that registers on the board.",
        },
        {
          name: "United States: The Bilingual Bridge",
          label: "A quarter of the budget",
          priority: "primary",
          profile: "Spanish-speaking fans already inside the group's largest Spotify market. Los Angeles, New York, Chicago, Dallas, and Houston carry the U.S. base and are the five largest Spanish-speaking metros in the country. Spanish-language listening is 9.5 percent of all U.S. on-demand audio streams and rising. This audience does not need to be found; it needs a Spanish-language reason to engage with a group it already streams in English.",
          psychographics: [
            "Bilingual and bicultural: switches between English and Spanish content in the same session",
            "Sees a Spanish version as the group speaking to them specifically",
            "Already warm from the SIGN and HEAT flights, so the first exposure is not the first touch",
          ],
          motivations: ["Recognition inside a fandom that reads as English-first", "Content to share with Spanish-speaking family and friends", "Ticket intent as the Q4 tour approaches"],
          behaviors: [
            "Engages with Spanish-language creators based in the United States, not only in Latin America",
            "Signs up to the group's Laylo at the account's best U.S. cost per lead when the ask is bilingual",
            "Buys tickets, which makes this the audience the tour window inherits",
          ],
          platforms: [
            { name: "Meta", role: "Language-targeted conversion inside existing warmed audiences" },
            { name: "TikTok", role: "Spanish-language creator reach in U.S. Hispanic metros" },
            { name: "Spotify", role: "Follow and save, attributed to the Spanish version" },
          ],
          barriers: ["Higher impression costs than the other two markets", "Creative that reads as Latin American rather than U.S. Latino"],
          triggers: ["Spanish-language creators from Los Angeles, Houston, and Dallas", "Bilingual captions on the group's own posts", "Tour-window content in the back half of the campaign"],
          conversionGoal: "Spotify follow and a Laylo signup, ready for tour-window conversion.",
        },
      ],
      behaviorSignals: [
        {
          behavior: "Spanish-speaking Latin America grew 25 to 45 percent in the two weeks after HEAT with no spend, matching or beating the paid U.S. market",
          platforms: ["Spotify"],
          implication: "The region converts on the record alone; paid is scale, not ignition.",
        },
        {
          behavior: "Spain sent both new tracks into the iTunes top five on release day and fell out within ten days",
          platforms: ["iTunes", "Apple Music"],
          implication: "A purchase spike with no follow-through is the shape of an unprompted fandom; a sustained prompt is what turns it into streams.",
        },
        {
          behavior: "The group's five largest U.S. cities are the five largest Spanish-speaking metros in the country",
          platforms: ["Spotify", "Meta"],
          implication: "U.S. Spanish-language targeting overlaps the existing paid footprint, so it inherits warmed audiences rather than starting cold.",
        },
      ],
      barriers: [
        { barrier: "Spanish-language creative that reads as a translation of the English campaign", response: "Every creator and edit is native to its market; the group's own Spanish moments are the seed asset." },
        { barrier: "The Spanish version's streams being counted against the original on the platform side", response: "A metadata and song-grouping check runs with the distributor in week one so Spanish-market streams attribute to the Spanish version." },
        { barrier: "Q4 advertising cost inflation across the region", response: "The flight ends November 22, ahead of the Black Friday and holiday cost peak, and Buen Fin week in Mexico is planned at reduced weight." },
      ],
      triggers: [
        { trigger: "The Mexico City weekend of October 30 to November 1", implication: "The Formula 1 Grand Prix and the Día de Muertos parade concentrate the country's attention in one city for three days; paid and edits concentrate with it." },
        { trigger: "K-pop's largest act touring Bogotá, Lima, and Santiago in the campaign's first three weeks", implication: "Regional K-pop attention peaks while the creators and clipping lanes are live; edits ride the moment without borrowing anyone's name." },
        { trigger: "The Q4 U.S. tour window opening as the campaign closes", implication: "Warmed Spanish-speaking U.S. audiences hand directly to tour marketing." },
      ],
      similarArtists: ["KATSEYE", "NMIXX", "P1Harmony", "Stray Kids", "ATEEZ", "TWS", "BOYNEXTDOOR", "RIIZE"],
      genres: ["K-Pop", "K-R&B", "Melodic R&B", "Latin Pop"],
      platformSignals: [
        { platform: "Spotify", note: "Mexico 10,755 monthly listeners, Chile 4,403, Peru 4,168, Colombia 6,925 at its last reading (July 30). Santiago, Mexico City, Lima, and Bogotá are all inside the group's global top fifty cities. Spain and Argentina sit below the tracked-market threshold. United States 83,304, the group's number one market." },
        { platform: "iTunes", note: "TROPHY (Spanish Ver.) peaked at number four on iTunes Spain Top Songs and number two on its K-pop chart on September 1; Like Fire peaked at number three and number one. No Latin American iTunes chart entry for the Spanish version, which is consistent with a region that streams rather than buys." },
        { platform: "TikTok", note: "The group's largest platform at 1.67 million followers. Mexico is one of TikTok's largest markets worldwide, and nearly two-thirds of Chile's TikTok base is between eighteen and twenty-four. Spanish-language creator reach here is the cheapest reach in the campaign." },
        { platform: "Meta", note: "The SIGN and HEAT conversion flights built retargeting pools in the group's five largest U.S. cities. Adding Spanish as a language filter inside those pools is the U.S. build. Impression costs in Mexico, Colombia, Peru, Argentina, and Chile run a fraction of the United States." },
      ],
      footnote: "Streaming and geographic figures from Chartmetric, pulled September 14, 2026. Age and gender splits are directional, built from platform audience reporting across the SIGN and HEAT flights and Spotify's published Mexico K-pop audience profile, and recalibrate after the week-one creative tests. Spotify Mexico figures are from Spotify's August 2025 market report. U.S. Spanish-language streaming share is from Luminate, Q1 2026.",
    },

    // ===================================================================
    // 04. Budget Structure
    // ===================================================================
    {
      type: "structure",
      number: "04",
      navLabel: "Budget",
      title: "Campaign Budget / TROPHY (Spanish Ver.)",
      intro: "One all-in budget for an eight-week campaign. There is no retainer on this campaign. The CCD fee is 15 percent on managed spend and sits inside the $30,000, not on top of it, so $26,100 deploys into media, creators, and edits. The market weighting follows the September data: half to Spanish-speaking Latin America, a quarter to Spain, a quarter to Spanish-speaking fans in the United States. Paid social is broken out by market so each is planned and judged on its own impression costs. The creator budget is also split by market because a creator from Mexico City, one from Madrid, and one from Houston are three different buys. The full line-by-line sheet is in Section 11.",
      tiers: [
        {
          label: "Spanish Version Campaign",
          budget: "$30,000",
          name: "All-In, 8 Weeks",
          featured: true,
          goal: "Fund a paid engine in the group's cheapest markets, put native Spanish creators and edits around the record in all three, capture every listener it reaches into a follow and a save, point new fans to the group's Laylo, and hand the result to the tour window. Sized to be approved as a single decision and to end before holiday advertising costs rise.",
          includes: [
            "Paid social, Spanish-speaking Latin America $8,000: TikTok and Meta, concentrated in Mexico City, Santiago, Lima, and Bogotá",
            "Paid social, Spain $3,500: amplification aimed at converting the release-day purchase spike into a streaming base",
            "Paid social, United States Spanish-language $4,500: language-targeted conversion inside the warmed audiences from the SIGN and HEAT flights",
            "Spanish-language creator program $7,100 across the three markets, native speakers only, briefed culture-first, with paid boost behind whatever breaks",
            "Spanish-language clipping network $3,000, edits cut for Latin American and Spanish culture, timed to the Mexico City weekend",
            "CCD fee $3,900, 15 percent on managed spend, no retainer line",
            "Inside the fee: Laylo pointing and Spanish reply support on the group's existing channel, DSP pitch packets and metadata check with the distributor, weekly dashboard reporting in English and Korean",
          ],
        },
      ],
    },

    // ===================================================================
    // 05. Vertical 1: Paid Social, Three Markets
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Paid",
      title: "Vertical 1 / Paid Social, Three Markets",
      philosophy: "Paid social is the engine of this campaign because the two markets that carry most of it are the cheapest reach the group can buy anywhere. The lane is run the way the SIGN and HEAT flights were run: creative tested dark, optimized to the second click into Spotify, and reallocated weekly against live cost per outcome across markets, platforms, and creative. The three market lines below are starting allocations, not fixed ones.",
      subBlocks: [
        {
          label: "A",
          title: "Spanish-Speaking Latin America",
          budget: "$8,000 / TikTok and Meta",
          objective: "Scale a base that is already growing on its own. Mexico, Chile, Peru, Colombia, and Argentina, concentrated in Mexico City, Santiago, Lima, and Bogotá, with country-level coverage behind the cities.",
          strategy: "TikTok carries reach because it is the region's discovery surface and its cheapest. Meta carries retargeting and the second click, using the same conversion structure that returned the account's best cost per action in the United States. Impression costs in these five countries run roughly $3.70 to $5.20 on Meta and lower on TikTok, against $15 to $23 in the United States, so this line buys several times the reach of the U.S. line for less money.",
          components: {
            heading: "Build",
            items: [
              "TikTok: Spanish-language creator and edit assets promoted through partner codes, targeted on K-pop hashtag and creator interactions plus music interests, geo-concentrated on the four priority cities",
              "Meta: Instagram-first conversion flight on Spanish-language creative, optimized to the pivot click with Laylo signup as the secondary conversion, retargeting every video viewer",
              "Argentina enters at low weight from week three once the first two weeks show which creative travels",
            ],
          },
          kpis: [
            "Cost per pivot click and cost per Spotify follow by country",
            "Monthly-listener growth in Mexico, Chile, Peru, and Colombia against the September 14 baseline",
          ],
          timeline: "Live from week one at test weight, full weight from week three, concentrated on Mexico City in week five.",
        },
        {
          label: "B",
          title: "Spain",
          budget: "$3,500 / TikTok and Meta",
          objective: "Convert a release-day purchase spike into a streaming base that registers on the group's top-market board. The signal is fresh and decays fast, so Spain runs first.",
          strategy: "Spain is the most expensive of the three markets after the United States, at roughly $5.80 per thousand on Meta, and the base is small, so the line is sized to amplify rather than to build from zero. Creative acknowledges the chart result directly: the fandom that put the record in the top five gets to see that it was noticed. Spanish creators from Spain, not Latin American content re-run in Spain, carry the reach, and paid retargets every engaged viewer to a Spotify follow and save.",
          components: {
            heading: "Build",
            items: [
              "TikTok reach behind Spain-native creator content in weeks one and two, when the chart signal is warmest",
              "Meta retargeting of every engaged viewer to follow and save, with Madrid and Barcelona geo-weighted",
              "Fan-account amplification handled organically through the community lane, no spend",
              "Catalan-language variant tested in Catalonia if week-one Barcelona results warrant it",
            ],
          },
          kpis: [
            "Spain crossing the tracked-market threshold on Spotify, roughly 4,100 monthly listeners",
            "Follow and save rate on Spanish-language creative against the account's U.S. baseline",
            "Cost per follow in Spain against Latin America",
          ],
          timeline: "Heaviest in weeks one and two, then held at maintenance weight through week six.",
        },
        {
          label: "C",
          title: "United States, Spanish-Language",
          budget: "$4,500 / Meta and TikTok",
          objective: "Give the group's largest market a Spanish-language door. Language-targeted conversion inside the paid audiences the SIGN and HEAT flights already built, concentrated on Los Angeles, Houston, Dallas, Chicago, New York, and Miami.",
          strategy: "This is the one market where the audience is already warm, so the line is a conversion build rather than a reach build. Meta's language targeting layered on the existing retargeting pools puts Spanish-language creative in front of the Spanish-speaking share of an audience that has already engaged with the group. U.S. impression costs are the highest in the campaign, which is why this line is weighted to the back half, when the tour window gives the audience a reason to convert beyond the record.",
          components: {
            heading: "Build",
            items: [
              "Meta: Spanish-language conversion flight inside the existing SIGN and HEAT retargeting pools, language filter on, optimized to Laylo signup and follow",
              "TikTok: U.S.-based Spanish-language creators from the priority metros, promoted through partner codes",
              "Bilingual creative alongside Spanish-only, so nothing reads as a separate campaign",
              "Weighted to weeks five through eight, timed to the Q4 tour window",
            ],
          },
          kpis: [
            "Cost per Laylo signup from Spanish-language creative against the account's best U.S. cost per lead",
            "Follow and save rate on Spanish-language creative inside the warmed pools",
            "Share of U.S. Spanish-language engagement attributable to the priority metros",
          ],
          timeline: "Test weight in weeks one to four, full weight in weeks five to eight.",
        },
        {
          label: "D",
          title: "How the Lane Is Run",
          objective: "The same operating model that moved the SIGN traffic flight from $0.114 per click in week one to $0.094 by week three.",
          tactics: [
            "Every asset tested dark before it scales, with hook, caption, and language variants judged on the second click into Spotify rather than the first click on the ad",
            "Weekly reallocation across the three market lines, across platforms inside each market, and across creative, against live cost per outcome",
            "No unit counts committed in advance: views, followers, and signups are reported as outputs of a cost-per-thousand buy, with per-unit cost as the quality signal",
            "Q4 cost inflation managed by ending the flight November 22 and running Buen Fin week in Mexico at reduced weight",
            "Reporting through the campaign dashboard in English and Korean, refreshed daily, with a weekly written read",
          ],
        },
      ],
      footnote: "Impression-cost figures are 2026 market benchmarks used for planning, not commitments; live costs replace them from week one. The three market lines total $16,000 and reallocate against each other weekly.",
    },

    // ===================================================================
    // 06. Vertical 2: Spanish-Language Creators & Clipping
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Creators",
      title: "Vertical 2 / Spanish-Language Creators & Clipping",
      philosophy: "Creator and edit reach is what made the last two cycles efficient, and the edits format in particular returned the account's best cost per thousand. In a Spanish-language campaign the creative rule is absolute: native speakers from the market the content runs in. The one clear lesson from K-pop's Latin push over the past year is that audiences reward records that respect the language and reject creative that treats it as decoration.",
      subBlocks: [
        {
          label: "A",
          title: "Spanish-Language Creator Program",
          budget: "$7,100 / Latin America $3,100, Spain $2,000, United States $2,000",
          objective: "Put the Spanish vocal in the mouths and feeds of Spanish-speaking creators in all three markets, briefed on culture first and the group second, with paid boost behind whatever breaks.",
          strategy: "Three rosters, not one. Mexico City, Santiago, Lima, and Bogotá creators for Latin America; creators from Spain for Spain; U.S.-based Spanish-language creators from Los Angeles, Houston, and Dallas for the United States. The program is bought on cost per thousand, so creator counts are an output rather than a promise, and the roster tilts micro because that is where the cost per view has been best across both prior cycles. Every post carries partner-code rights so paid can scale the winners in the same market they came from. Briefs are issued in week one to allow for the ramp time creators need, with posting concentrated in weeks three through five.",
          components: {
            heading: "Brief",
            items: [
              "Reaction and first-listen formats built around the Spanish vocal, the format that most directly rewards a native-language release",
              "Dance and transition formats on the hook, usable across all three markets",
              "Culture-first formats that attach the record to what is trending in each market, not to K-pop alone",
              "Every creator briefed on the group's own Spanish-language moments so the content reads as a conversation, not a placement",
              "Partner-code rights on every post so paid can boost winners in market",
            ],
          },
          kpis: [
            "Blended cost per thousand across the program, reported by market",
            "Share of posts that earn paid boost, the quality signal",
            "Pivot clicks and follows attributed to creator traffic",
          ],
          timeline: "Briefs out week one, drafts and approvals week two, posting concentrated weeks three to five, second wave from the winners in weeks six and seven.",
        },
        {
          label: "B",
          title: "Spanish-Language Clipping Network",
          budget: "$3,000 / Latin America $2,000, Spain $1,000",
          objective: "Run the edits format, the best cost per thousand on the account, in Spanish. Edits attach the song to Latin American and Spanish culture and post at volume across a network of Spanish-language edit accounts.",
          strategy: "The clipping network pays on posting volume and reach, which is why it produced a sub-$3 cost per thousand last cycle. The Spanish-language version of it cuts edits for the culture it runs in: the Formula 1 driver edits already cut this month work for Mexico City in week five, Día de Muertos and Latin American film and series edits carry the region, and Spain gets its own set built around the moments Spanish fans are already sharing. Winners get paid boost from the paid lane.",
          components: {
            heading: "Build",
            items: [
              "Spanish-language edit accounts across Latin America and Spain, paid on posting volume and reach",
              "Edit sets cut per market: Mexico City weekend, Latin American film and series, Spanish fan moments",
              "Captions and on-screen text in the Spanish of the market, never machine-translated",
              "Winners flagged within 48 hours and boosted through the paid lane in the same market",
            ],
          },
          kpis: [
            "Blended cost per thousand against the account's edits benchmark from the last two cycles",
            "Posting volume and reach by market, reported weekly",
            "Winners boosted and their downstream pivot clicks",
          ],
          timeline: "Edits live from week two, heaviest in weeks four through six around the Mexico City weekend.",
        },
        {
          label: "C",
          title: "The Mexico City Weekend",
          objective: "October 30 to November 1 concentrates the country's attention in one city for three days: the Formula 1 Grand Prix and the Día de Muertos parade, which drew more than a million people down Reforma in prior years. The campaign concentrates with it.",
          strategy: "Week five is built around Mexico City. The Latin America paid line tightens its geo to the city for the weekend, the Formula 1 driver edits already in hand go out timed to the race, and the creator roster's Mexico City posts land in the same window. Nothing here depends on an official tie-in; it is a timing play on a moment the whole country is already watching. If the Formula 1 programming conversation on the Kakao side lands, it slots into this week.",
          tactics: [
            "Latin America paid geo-tightened to Mexico City from Thursday to Sunday of the race weekend",
            "Formula 1 driver edits released across the clipping network timed to practice, qualifying, and the race",
            "Mexico City creators posting across the weekend, with Día de Muertos formats alongside the race formats",
            "Follow and save prompts and the Laylo link carried on every asset that weekend",
          ],
        },
      ],
      footnote: "Creator and edit figures are targets and outputs, not committed deliverables; both lanes are bought on cost per thousand, so post and creator counts are reported as results with per-unit cost as the quality signal. Rosters are built at kickoff from native speakers in each market and approved on the label's usual creator-draft process, which stays in place. The creator and clipping network operates as a white-labeled partner lane under CCD management.",
    },

    // ===================================================================
    // 07. Vertical 3: Fandom & Owned Capture
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Fandom",
      title: "Vertical 3 / Fandom & Owned Capture",
      philosophy: "The conversion ratio is the thesis metric of this account, and it recovered from 0.32 to 0.47 across the SIGN cycle because reach was captured into follows and signups rather than left as impressions. This campaign runs the same machine for Spanish-speaking fans without building anything new: follow and save prompts on every asset, the group's existing Laylo as the one place every new fan is pointed, and organic community mechanics that cost nothing but attention.",
      subBlocks: [
        {
          label: "A",
          title: "Laylo as the Capture Point",
          timeline: "Inside the CCD fee; Laylo message credits pass through at cost",
          objective: "The group's Laylo already runs as the owned channel, with a working signup and voicemail funnel and a list the tour window and the 2027 album will be talking to. This campaign does not stand up a separate Spanish-language list. It points every Spanish-speaking fan it reaches to the same Laylo, so new fans land where the group is already talking to its audience.",
          strategy: "The Laylo link travels on every paid and creator asset in all three markets, in Spanish, as the one signup ask. Fans who join receive the same drops as everyone else on the existing cadence, and inbound that arrives in Spanish is answered from a small pre-approved Spanish reply bank rather than left waiting on translation. International fans are captured email-first because international SMS costs several times a U.S. text; U.S. numbers get SMS as they do today. Two moments in the window get a Laylo push on the existing cadence: the Mexico City weekend and the tour-window handoff.",
          components: {
            heading: "Mechanics",
            items: [
              "Laylo link carried on every paid and creator asset from week one, with the ask written in Spanish",
              "Small pre-approved Spanish reply bank so inbound in Spanish is answered quickly, no separate flow",
              "Email-first capture for Latin America and Spain, SMS for U.S. numbers, sends captioned in Korean for the label as today",
              "Two Laylo pushes on the existing cadence: the Mexico City weekend and the tour-window handoff",
            ],
          },
          kpis: [
            "Laylo signups attributed to the campaign, by market",
            "Cost per signup by market against the account's best U.S. cost per lead",
            "Reply rate on Spanish-language inbound",
          ],
        },
        {
          label: "B",
          title: "Follow and Save on Every Asset",
          objective: "Make the algorithm work for the Spanish version. Follows and saves in Spanish-speaking markets feed Spotify's personalized surfaces there, which is where a record with no editorial placement earns its next listeners.",
          tactics: [
            "Follow and save prompts carried in every paid creative and every creator brief, not only listen prompts",
            "Second-click optimization to Spotify with the Spanish version as the landing track, so the follow attaches to the right song",
            "Retargeting pools of engaged viewers converted to follows in week two onward",
            "Weekly read on Spanish-market follows against listeners, the ratio that tells us whether reach is converting",
          ],
        },
        {
          label: "C",
          title: "Community Mechanics",
          objective: "Convert passive reach into participation at no media cost. Spanish-speaking fandom is organized through fan accounts and translation accounts, and it amplifies what it feels seen by.",
          tactics: [
            "Spanish-language comment and reply activity on the group's own posts concentrated in weeks one and two and the Mexico City weekend",
            "Fan-account and translation-account outreach in Spain and Latin America with the campaign's creator and edit content, organic only",
            "A participation prompt built on the Spanish hook, seeded through the creator roster and the clipping network",
            "Acknowledgement of the Spain chart result surfaced through the group's channels, in coordination with the label",
          ],
        },
      ],
      footnote: "Laylo is the group's existing owned channel and the pointing, reply bank, and reporting run inside the CCD fee; Laylo message credits pass through at cost with no CCD markup, billed on usage at the platform's published rates, and international capture runs email-first to keep that cost low. No separate Spanish-language list is created. Spanish-language fan channels owned and run on the group's behalf are not funded in this campaign; they remain available as a separately priced label-side option at $2,500 per month and are listed in Section 11.",
    },

    // ===================================================================
    // 08. Handled by Kakao / Great M
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Kakao",
      title: "Handled by Kakao / Great M",
      philosophy: "Four workstreams the label and Kakao own end to end. CCD supplies strategy, materials, and coordination inside the fee; none of these carry a CCD budget line. Two of them, the metadata check and the Spanish-language assets, materially change what the paid budget can do, so they are asked for in week one.",
      subBlocks: [
        {
          label: "A",
          title: "Radio Promotion",
          objective: "Radio on TROPHY (Spanish Ver.) is already in motion on the Kakao side and stays there. CCD aligns paid weight to any airplay markets and dates Kakao shares, so paid and radio land in the same cities in the same weeks.",
          tactics: [
            "Airplay markets and add dates shared with CCD as they confirm",
            "Paid social geo-weight shifted toward airplay cities in the relevant weeks",
            "Radio moments clipped into the clipping network where usable",
          ],
        },
        {
          label: "B",
          title: "DSP Editorial and the Metadata Check",
          objective: "Editorial runs through Kakao's distribution relationships. CCD supplies the pitch packets. One item is urgent: the Spanish version's Spotify stream count currently reads identically to the original's, which suggests the two are grouped as one song on the platform side. If so, Spanish-market streams are not attributing to the Spanish version, and that needs a distributor-side check in week one.",
          components: {
            heading: "Materials CCD Supplies",
            items: [
              "Pitch packets for the country editions of New Music Friday in Mexico, Chile, Peru, Colombia, Argentina, and Spain, and for the flagship K-pop editorial playlists on Spotify and Apple Music",
              "A one-page campaign summary with the Spain chart result and the Latin America growth figures for the distributor's editorial conversations",
              "Spanish-language metadata review: title, language flag, lyrics, and credits, so the version is discoverable in Spanish search",
              "Song-grouping check with the distributor so streams in Spanish-speaking markets attribute to the Spanish version",
            ],
          },
          kpis: [
            "Metadata and grouping check confirmed in week one",
            "First editorial placement for the Spanish version in a Spanish-speaking market",
            "Spanish-version stream share in each target market, once attribution is confirmed",
          ],
        },
        {
          label: "C",
          title: "Spanish-Language Assets From the Group",
          objective: "The group speaking Spanish, even briefly, is the single most efficient asset this campaign can have. It is the seed for every creator brief and the thing Spanish-speaking fandom shares first.",
          components: {
            heading: "Asked For in Week One",
            items: [
              "Short member clips in Spanish: a greeting to fans in Mexico, Chile, Peru, Colombia, Argentina, and Spain, and a thank-you for the Spain chart result",
              "Spanish captions on the group's official posts about the Spanish version during the eight-week window",
              "A decision on the reserved Spanish-version handle, so the campaign can point to an owned surface if the label wants one",
            ],
          },
        },
        {
          label: "D",
          title: "Formula 1 Programming Conversation",
          objective: "A conversation about programming the Spanish version around the Mexico City Grand Prix is in motion on the Kakao side. It is not budgeted or assumed in this plan. If it lands, it slots into week five, where the campaign is already concentrated on Mexico City.",
          tactics: [
            "CCD supplies the campaign timing, the driver-edit set, and the paid geo plan so any placement is amplified rather than left to stand alone",
            "No paid dependency on the outcome: week five runs as planned either way",
          ],
        },
      ],
      footnote: "Kakao and Great M own execution of all four workstreams; CCD provides strategy, materials, and coordination inside the fee. Radio budgets sit entirely outside the CCD ceiling. Spanish-language fan channels, if the label wants owned surfaces in Spanish, are a separately priced option listed in Section 11 and are not part of this campaign.",
    },

    // ===================================================================
    // 09. Proposed Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "09",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro: "Three phases across eight weeks, September 28 to November 22. Phase budgets are deployable dollars and sum to $26,100; the CCD fee is taken pro rata as spend deploys. Figures are directional. CCD reallocates weekly against live cost per outcome across the three markets, which is the mechanism that improved cost per click week over week on both prior flights.",
      totalBudget: "$26,100 deployable of $30,000",
      phases: [
        {
          label: "Phase 1 / Ignite",
          window: "Sep 28 to Oct 11, 2 weeks",
          focus: "Spain first, while the chart signal is warm: Spain-native creator content with paid reach behind it and retargeting to follow and save. Latin America and the United States open at test weight, learning which Spanish-language creative travels. Creator briefs go out, the Laylo link and Spanish reply bank go live, and the metadata and song-grouping check runs with the distributor so every stream from here attributes to the Spanish version.",
          budget: "~$7,500",
          tactics: [
            "Spain paid at full weight on Spain-native creator content, Madrid and Barcelona geo-weighted",
            "Latin America and U.S. dark tests across hook, caption, and language variants, optimized to the second click",
            "Creator rosters confirmed and briefed in all three markets; clipping network stood up",
            "Laylo link on every asset and a Spanish reply bank live",
            "Week-one asks to the label: Spanish member clips, Spanish captions, metadata check",
          ],
        },
        {
          label: "Phase 2 / Scale",
          window: "Oct 12 to Nov 8, 4 weeks",
          focus: "Latin America at full weight on validated creative, with creator posting concentrated in the first three weeks of the phase and the clipping network running underneath. Week five is the Mexico City weekend: paid geo tightens to the city, the Formula 1 driver edits go out timed to the race, and the Mexico City creators post across Día de Muertos. The U.S. Spanish-language line ramps from week five as the tour window approaches.",
          budget: "~$13,100",
          tactics: [
            "Latin America paid scaled across TikTok and Meta on the week-two winners",
            "Creator round posting in all three markets, paid boost behind whatever breaks through partner codes",
            "Clipping network at full volume, edit sets cut per market",
            "Mexico City weekend concentration, October 30 to November 1, with the Laylo link on every asset",
            "U.S. Spanish-language conversion flight opened inside the warmed pools from week five",
          ],
        },
        {
          label: "Phase 3 / Sustain + Handoff",
          window: "Nov 9 to Nov 22, 2 weeks",
          focus: "Hold the floors in Latin America and Spain, convert engaged viewers to follows, saves, and Laylo signups, and hand warmed Spanish-speaking U.S. audiences to the Q4 tour window. The flight closes before the Black Friday and holiday cost peak; Buen Fin week in Mexico runs at reduced weight.",
          budget: "~$5,500",
          tactics: [
            "Retargeting-weighted delivery to follow, save, and signup across all three markets",
            "U.S. Spanish-language line at full weight with tour-window creative",
            "Second creator wave from the winners, no new briefs",
            "Tour-window handoff through the group's Laylo",
            "Final read: Spanish-market listeners, follows, signups, and cost per outcome by market, in English and Korean",
          ],
        },
      ],
      footnote: "Phase budgets sum to the $26,100 deployable and are directional. The three paid market lines reallocate against each other weekly, and money moves between phases as live cost per outcome dictates. Creator and clipping budgets are committed to their posting windows. No unit counts are committed in advance; views, posts, followers, and signups are reported as outputs of a cost-per-thousand buy with per-unit cost as the quality signal.",
    },

    // ===================================================================
    // 10. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "10",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Eight weeks from September 28 to November 22. Spain runs first, Latin America scales from week three, week five is built around the Mexico City weekend, and the United States carries the back half into the Q4 tour window. Start date assumes approval and funding in the week of September 15; the grid shifts with it.",
      weeks: [
        { index: 1, label: "W1", dates: "Sep 28" },
        { index: 2, label: "W2", dates: "Oct 5" },
        { index: 3, label: "W3", dates: "Oct 12" },
        { index: 4, label: "W4", dates: "Oct 19" },
        { index: 5, label: "W5", dates: "Oct 26", highlight: true, note: "CDMX WEEKEND" },
        { index: 6, label: "W6", dates: "Nov 2" },
        { index: 7, label: "W7", dates: "Nov 9", note: "BUEN FIN" },
        { index: 8, label: "W8", dates: "Nov 16", note: "TOUR WINDOW" },
      ],
      workstreams: [
        {
          name: "Paid: Latin America",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "TEST" },
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "high", label: "SCALE" },
            { weekIndex: 4, intensity: "high", label: "SCALE" },
            { weekIndex: 5, intensity: "high", label: "CDMX" },
            { weekIndex: 6, intensity: "high", label: "SCALE" },
            { weekIndex: 7, intensity: "medium", label: "HOLD" },
            { weekIndex: 8, intensity: "medium", label: "HANDOFF" },
          ],
        },
        {
          name: "Paid: Spain",
          cells: [
            { weekIndex: 1, intensity: "high", label: "LAUNCH" },
            { weekIndex: 2, intensity: "high", label: "SCALE" },
            { weekIndex: 3, intensity: "medium", label: "HOLD" },
            { weekIndex: 4, intensity: "medium", label: "HOLD" },
            { weekIndex: 5, intensity: "low", label: "HOLD" },
            { weekIndex: 6, intensity: "low", label: "HOLD" },
            { weekIndex: 7, intensity: "low", label: "HOLD" },
            { weekIndex: 8, intensity: "low", label: "HANDOFF" },
          ],
        },
        {
          name: "Paid: U.S. Spanish",
          cells: [
            { weekIndex: 1, intensity: "low", label: "TEST" },
            { weekIndex: 2, intensity: "low", label: "TEST" },
            { weekIndex: 3, intensity: "low", label: "TEST" },
            { weekIndex: 4, intensity: "medium", label: "BUILD" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high", label: "SCALE" },
            { weekIndex: 7, intensity: "high", label: "SCALE" },
            { weekIndex: 8, intensity: "high", label: "HANDOFF" },
          ],
        },
        {
          name: "Creator Program",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "BRIEF" },
            { weekIndex: 2, intensity: "medium", label: "DRAFTS" },
            { weekIndex: 3, intensity: "high", label: "POST" },
            { weekIndex: 4, intensity: "high", label: "POST" },
            { weekIndex: 5, intensity: "high", label: "POST" },
            { weekIndex: 6, intensity: "medium", label: "WAVE 2" },
            { weekIndex: 7, intensity: "medium", label: "WAVE 2" },
            { weekIndex: 8, intensity: "low", label: "WRAP" },
          ],
        },
        {
          name: "Clipping Network",
          cells: [
            { weekIndex: 1, intensity: "low", label: "SETUP" },
            { weekIndex: 2, intensity: "medium", label: "LIVE" },
            { weekIndex: 3, intensity: "medium", label: "CLIP" },
            { weekIndex: 4, intensity: "high", label: "CLIP" },
            { weekIndex: 5, intensity: "high", label: "CDMX" },
            { weekIndex: 6, intensity: "high", label: "CLIP" },
            { weekIndex: 7, intensity: "medium", label: "CLIP" },
            { weekIndex: 8, intensity: "low", label: "WRAP" },
          ],
        },
        {
          name: "Laylo",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "SETUP" },
            { weekIndex: 2, intensity: "medium", label: "LIVE" },
            { weekIndex: 3, intensity: "medium", label: "REPLY" },
            { weekIndex: 4, intensity: "medium", label: "REPLY" },
            { weekIndex: 5, intensity: "high", label: "PUSH" },
            { weekIndex: 6, intensity: "medium", label: "REPLY" },
            { weekIndex: 7, intensity: "medium", label: "REPLY" },
            { weekIndex: 8, intensity: "high", label: "HANDOFF" },
          ],
        },
        {
          name: "Kakao / Label",
          cells: [
            { weekIndex: 1, intensity: "high", label: "ASKS" },
            { weekIndex: 2, intensity: "medium", label: "PITCH" },
            { weekIndex: 3, intensity: "medium", label: "PITCH" },
            { weekIndex: 4, intensity: "low", label: "RADIO" },
            { weekIndex: 5, intensity: "medium", label: "CDMX" },
            { weekIndex: 6, intensity: "low", label: "RADIO" },
            { weekIndex: 7, intensity: "low", label: "RADIO" },
            { weekIndex: 8, intensity: "low", label: "TOUR" },
          ],
        },
        {
          name: "Reporting",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 2, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 3, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 4, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 5, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 6, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 7, intensity: "medium", label: "WEEKLY" },
            { weekIndex: 8, intensity: "high", label: "FINAL" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Spain launch, tests open, asks to the label",
          items: [
            "Spain paid live at full weight on Spain-native creator content, retargeting to follow and save",
            "Latin America and U.S. dark tests open across hook, caption, and language variants",
            "Creator rosters confirmed and briefed in all three markets",
            "Laylo link set up for every asset and a Spanish reply bank built",
            "Week-one asks delivered: Spanish member clips, Spanish captions, metadata and song-grouping check, radio markets and dates",
          ],
        },
        {
          weekIndex: 2,
          title: "Spain scales, creators in draft, clipping live",
          items: [
            "Spain paid scaled on the week-one winners, Madrid and Barcelona geo-weighted",
            "Creator drafts in and through the label's usual approval process",
            "Clipping network live with the first Latin America edit set",
            "Laylo link live from every paid and creator asset",
            "Week-two read decides which creative carries Latin America into scale",
          ],
        },
        {
          weekIndex: 3,
          title: "Latin America to full weight, creators posting",
          items: [
            "Latin America paid at full weight across TikTok and Meta",
            "Creator posting begins in all three markets; winners boosted through partner codes within 48 hours",
            "DSP pitch packets with the distributor for the country editions of New Music Friday and the K-pop editorial playlists",
            "Argentina enters the Latin America line at low weight",
            "Spain held at maintenance weight",
          ],
        },
        {
          weekIndex: 4,
          title: "Creators at peak, Mexico City build",
          items: [
            "Creator posting at peak; second boost round on the winners",
            "Clipping network at full volume; Formula 1 driver edits and Día de Muertos sets staged for week five",
            "U.S. Spanish-language line moves from test to build inside the warmed pools",
            "Paid geo plan for the Mexico City weekend locked",
            "Laylo copy for the Mexico City weekend drafted and captioned in Korean for the label",
          ],
        },
        {
          weekIndex: 5,
          title: "The Mexico City weekend",
          items: [
            "Latin America paid geo-tightened to Mexico City from Thursday to Sunday of the race weekend, October 30 to November 1",
            "Formula 1 driver edits released across the clipping network timed to practice, qualifying, and the race",
            "Mexico City creators posting across the weekend, Día de Muertos formats alongside the race formats",
            "Laylo push around the weekend, on the existing send cadence",
            "U.S. Spanish-language line opens at full weight",
          ],
        },
        {
          weekIndex: 6,
          title: "Scale holds, second creator wave",
          items: [
            "Latin America paid back to country-level weight on the post-weekend winners",
            "Second creator wave from the winners, no new briefs",
            "Clipping network continues at full volume",
            "U.S. Spanish-language line at full weight with follow and signup optimization",
            "Mid-campaign read delivered in English and Korean",
          ],
        },
        {
          weekIndex: 7,
          title: "Sustain, Buen Fin at reduced weight",
          items: [
            "Latin America paid moves to hold weight; Mexico runs at reduced weight through Buen Fin",
            "Retargeting-weighted delivery to follow, save, and signup in all three markets",
            "U.S. Spanish-language line carries tour-window creative",
            "Clipping network winds down to the winners",
            "Final-read framework agreed with the label",
          ],
        },
        {
          weekIndex: 8,
          title: "Handoff to the tour window",
          items: [
            "Tour-window handoff through the group's Laylo",
            "Warmed Spanish-speaking U.S. audiences handed to tour marketing",
            "Flight closes November 22, ahead of the Black Friday and holiday cost peak",
            "Final read: Spanish-market listeners against the September 14 baseline, Spain against the tracked-market threshold, follows, signups, and cost per outcome by market",
            "Recommendation on what the 1H 2027 releases inherit and what a second Spanish-language cycle would fund",
          ],
        },
      ],
      footnote: "Dates assume approval and funding in the week of September 15 and a September 28 start; the grid shifts week for week with the actual start. The Mexico City weekend is fixed to the calendar and does not move. Kakao and Great M own the radio, DSP, and asset workstreams in the Kakao row; CCD coordinates them inside the fee.",
    },

    // ===================================================================
    // 11. Final Pricing
    // ===================================================================
    {
      type: "pricing",
      number: "11",
      navLabel: "Pricing",
      title: "Final Pricing",
      intro: "One all-in budget for eight weeks. There is no retainer on this campaign. The CCD fee is 15 percent on managed spend, a line item inside the $30,000 rather than an addition to it, and everything beneath it deploys into media, creators, and edits. Paid social is broken out by market so each is planned and judged on its own impression costs, and the creator budget is split by market inside a single line. The arithmetic is set out beneath the table.",
      breakdownLabel: "Breakdown By Lane",
      deployableLabel: "Deployable Net of CCD Fee",
      tiers: [
        {
          label: "Spanish Version Campaign",
          budget: "$30,000",
          name: "All-In, 8 Weeks",
          tagline: "Half to Spanish-speaking Latin America, a quarter to Spain, a quarter to Spanish-speaking fans in the United States.",
          featured: true,
          deployable: "$26,100",
          feeBreakdown: {
            retainer: "$0",
            retainerDetail: "No cycle retainer on this campaign",
            mediaManagement: "$3,900",
            mediaManagementLabel: "CCD Fee",
            mediaManagementDetail: "15% on ~$26,100 managed spend",
          },
          breakdown: [
            { vertical: "CCD Fee (15% on managed spend)", amount: "$3,900" },
            { vertical: "Paid Social: Latin America", amount: "$8,000" },
            { vertical: "Paid Social: Spain", amount: "$3,500" },
            { vertical: "Paid Social: U.S. Spanish-Language", amount: "$4,500" },
            { vertical: "Spanish-Language Creator Program", amount: "$7,100" },
            { vertical: "Spanish-Language Clipping Network", amount: "$3,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "Spanish-Language Fan Channels",
          subtitle: "Label-Side Option",
          budget: "$2,500 per month",
          description: "Owned Spanish-language fan channels run on the group's behalf. Not funded in this campaign and not recommended for an eight-week window; available as a separately priced option if the label wants owned Spanish-language surfaces as an objective in its own right.",
        },
      ],
      footnote: "THE ARITHMETIC. $30,000 authorized. The CCD fee is 15 percent on managed spend and there is no retainer: $3,900 on $26,100 of deployable spend, which together sum to $30,000. By market, the deployable splits Latin America $13,100 (paid $8,000, creators $3,100, clipping $2,000), Spain $6,500 (paid $3,500, creators $2,000, clipping $1,000), and the United States $6,500 (paid $4,500, creators $2,000), which is 50, 25, and 25 percent. The three paid lines are starting allocations that reallocate weekly against live cost per outcome. The creator and clipping lines are bought on cost per thousand, so post and creator counts are reported as outputs rather than committed as deliverables. Laylo pointing and Spanish reply support, DSP pitch packets, the metadata check, and daily dashboard reporting in English and Korean run inside the fee; Laylo message credits pass through at cost with no CCD markup. Radio sits entirely outside this budget on the Kakao side. This budget is scoped to the TROPHY (Spanish Ver.) campaign only. The Q4 tour window and the 1H 2027 releases each authorize fresh budgets on this same structure and inherit the Spanish-language audiences and creative this campaign produces.",
    },
  ],
};
