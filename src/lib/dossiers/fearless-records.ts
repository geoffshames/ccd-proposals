import type { DossierData } from "../dossier-context";

export const fearlessRecords: DossierData = {
  requireNda: true,
  clientLegalName: "Fearless Records (Concord Music Group, Inc.)",

  subject: {
    name: "Fearless Records",
    kind: "label",
    parentEntity: "Concord Music Group (post-merger: BMG-Concord, H2 2026)",
    coverage: "Pop-punk, post-hardcore, metalcore, alt-rock, hard-rock. 1994 to present.",
  },

  document: {
    number: "REACT-001 / 2026-Q3",
    classification: "CONFIDENTIAL — MUTUAL NDA REQUIRED",
    preparedBy: "Crowd Control Digital, LLC",
    preparedFor: "Fearless Records, Concord Music Group",
    date: "May 5, 2026",
  },

  brief: {
    headline: "78M monthly listeners. One Billions-Club asset. One sleeping IP. Zero outside execution capacity dedicated to the catalog.",
    body: "This dossier identifies the highest-upside reactivation work across the priority 30 Fearless Records artists, sized to a single 90-day pilot, with a defensible path to a multi-quarter retainer scoped against the full roster. The recommendation is grounded in Spotify's May 2026 monthly listener pull, Fearless's own catalog database, and the structural opening created by the April 2026 BMG-Concord merger close window.",
  },

  catalogMap: {
    heading: "Catalog Map / Priority 30",
    note: "Tiered against Spotify monthly listeners (May 2026). Reactivation read combines current trajectory, sync ceiling, anniversary windows, and TikTok-driven organic momentum. Chase Atlantic flagged 'do not touch' per active growth profile.",
    columns: ["Tier", "Artist", "Status", "Monthly Listeners", "Top Track", "Reactivation Read"],
    rows: [
      { tier: "S", name: "Chase Atlantic", status: "Current", monthlyListeners: 19600000, topTrack: "Swim", topTrackStreams: "650M+", reactivationRead: "Active growth. Don't touch — let it run." },
      { tier: "S", name: "Pierce The Veil", status: "Current", monthlyListeners: 9800000, topTrack: "King for a Day (feat. Kellin Quinn)", topTrackStreams: "1.1B+", reactivationRead: "TikTok already reactivated organically. Sync ceiling not hit. Movie / TV opportunity." },
      { tier: "S", name: "Plain White T's", status: "Current", monthlyListeners: 7500000, topTrack: "Hey There Delilah", topTrackStreams: "1.8B+", reactivationRead: "Billions Club anchor. Wedding / coming-of-age sync engine. Evergreen, uncapped." },
      { tier: "S", name: "I Prevail", status: "Current", monthlyListeners: 4400000, topTrack: "Hurricane", topTrackStreams: "280M+", reactivationRead: "Active rock radio + sports sync. 2x GRAMMY noms." },
      { tier: "S", name: "BOYS LIKE GIRLS", status: "Current (return)", monthlyListeners: 3800000, topTrack: "The Great Escape", topTrackStreams: "450M+", reactivationRead: "Y2K nostalgia wave alive. Vinyl + brand-fashion fits." },
      { tier: "A", name: "STARSET", status: "Current", monthlyListeners: 3100000, topTrack: "My Demons", topTrackStreams: "600M+", reactivationRead: "Cinematic / sci-fi rock = trailer + sci-fi sync gold. Underleveraged in film / TV." },
      { tier: "A", name: "The Pretty Reckless", status: "Current", monthlyListeners: 2500000, topTrack: "Death by Rock and Roll", topTrackStreams: "180M+", reactivationRead: "First female-fronted band with 5 #1 rock singles. Recent peak ~5M." },
      { tier: "A", name: "Ice Nine Kills", status: "Current", monthlyListeners: 2300000, topTrack: "A Grave Mistake", topTrackStreams: "210M+", reactivationRead: "Horror IP. Halloween distribution every year. Stranger Things-tier opportunity." },
      { tier: "A", name: "Wage War", status: "Current", monthlyListeners: 1700000, topTrack: "Stitch", topTrackStreams: "90M+", reactivationRead: "Active rock + sports / gaming sync. STIGMA cycle running." },
      { tier: "A", name: "Mayday Parade", status: "Current", monthlyListeners: 1700000, topTrack: "Miserable at Best", topTrackStreams: "320M+", reactivationRead: "Coming-of-age / emo nostalgia. Sad new album cycle." },
      { tier: "A", name: "Underoath", status: "Alumni", monthlyListeners: 1400000, topTrack: "Reinventing Your Exit", topTrackStreams: "85M+", reactivationRead: "Christian-rock + post-hardcore legacy crossover. They're Only Chasing Safety era." },
      { tier: "B", name: "Get Scared", status: "Alumni", monthlyListeners: 1300000, topTrack: "Built for Blame", topTrackStreams: "85M+", reactivationRead: "TikTok carrying this catalog quietly. Worth a layered drop." },
      { tier: "B", name: "Movements", status: "Current", monthlyListeners: 949000, topTrack: "Daylily", topTrackStreams: "180M+", reactivationRead: "Critical respect, slow-burn growth. Indie film / coming-of-age sync." },
      { tier: "B", name: "August Burns Red", status: "Alumni", monthlyListeners: 821000, topTrack: "Composure", topTrackStreams: "60M+", reactivationRead: "Pure metalcore catalog. Sports / extreme-sport sync window." },
      { tier: "B", name: "DON BROCO", status: "Current", monthlyListeners: 725000, topTrack: "T-Shirt Song", topTrackStreams: "70M+", reactivationRead: "UK alt-rock. T-Shirt Song already viral. Brand / sport sync." },
      { tier: "B", name: "Bloodywood", status: "Current", monthlyListeners: 518000, topTrack: "Aaj", topTrackStreams: "45M+", reactivationRead: "Indian folk-metal fusion. Global tour pull. Cultural sync moment." },
      { tier: "B", name: "Real Friends", status: "Alumni", monthlyListeners: 454000, topTrack: "I've Given Up On You", topTrackStreams: "120M+", reactivationRead: "Pop-punk legacy. Fan-loyal but limited new placement upside." },
      { tier: "B", name: "Tonight Alive", status: "Alumni", monthlyListeners: 447000, topTrack: "Lonely Girl", topTrackStreams: "65M+", reactivationRead: "Inactive band. Catalog only." },
      { tier: "B", name: "Chunk! No, Captain Chunk!", status: "Alumni", monthlyListeners: 418000, topTrack: "In Friends We Trust", topTrackStreams: "45M+", reactivationRead: "Inactive. Catalog only." },
      { tier: "B", name: "The Plot In You", status: "Current", monthlyListeners: 2580000, topTrack: "Face Me", topTrackStreams: "140M+", reactivationRead: "TikTok-activated. Heavy emotional catalog plays in dramatic film / TV cuts." },
      { tier: "C", name: "Motionless In White", status: "Alumni", monthlyListeners: 4050000, topTrack: "Another Life", topTrackStreams: "220M+", reactivationRead: "Industrial / horror sync overlap with INK. Catalog still streaming heavily." },
      { tier: "C", name: "Set It Off", status: "Alumni", monthlyListeners: 3170000, topTrack: "Dancing With the Devil", topTrackStreams: "140M+", reactivationRead: "Pop-rock crossover. Dancing With the Devil has TikTok history." },
      { tier: "C", name: "The Word Alive", status: "Alumni", monthlyListeners: 2060000, topTrack: "Misery", topTrackStreams: "95M+", reactivationRead: "Catalog-active, not actively releasing on Fearless." },
      { tier: "C", name: "Blessthefall", status: "Alumni", monthlyListeners: 976000, topTrack: "Hollow Bodies", topTrackStreams: "60M+", reactivationRead: "Catalog only. Hollow Bodies era is the asset." },
      { tier: "C", name: "Volumes", status: "Alumni", monthlyListeners: 328000, topTrack: "Erupt", topTrackStreams: "35M+", reactivationRead: "Niche djent." },
      { tier: "C", name: "Varials", status: "Current", monthlyListeners: 327000, topTrack: "Sinking", topTrackStreams: "15M+", reactivationRead: "Hardcore touring act. Live-driven, not sync-driven." },
      { tier: "C", name: "Grayscale", status: "Alumni", monthlyListeners: 280000, topTrack: "In Violet", topTrackStreams: "22M+", reactivationRead: "Pop-punk catalog. Limited active." },
      { tier: "C", name: "As It Is", status: "Alumni", monthlyListeners: 278000, topTrack: "The Stigma (Boys Don't Cry)", topTrackStreams: "28M+", reactivationRead: "Inactive. Catalog only." },
      { tier: "C", name: "At the Drive-In", status: "Alumni / Legacy", monthlyListeners: 259000, topTrack: "One Armed Scissor", topTrackStreams: "85M+", reactivationRead: "Cult catalog. Fearless owns In/Casino/Out + Vaya only. Sync-friendly." },
      { tier: "C", name: "Oceans Ate Alaska", status: "Alumni", monthlyListeners: 249000, topTrack: "Hikari", topTrackStreams: "18M+", reactivationRead: "Niche prog metalcore." },
    ],
    totals: [
      { label: "Combined Monthly Listeners", value: "78M+", detail: "Priority 30 active + alumni" },
      { label: "Cumulative Top-Track Streams", value: "7.3B+", detail: "Across the priority 30" },
      { label: "S-Tier Reach Concentration", value: "58%", detail: "5 artists carry the value" },
      { label: "Billions Club Anchors", value: "1", detail: "Hey There Delilah (1.8B+)" },
    ],
  },

  stateOfPlay: {
    heading: "State of Play",
    paragraphs: [
      "Fearless Records sits inside the most consequential indie music transaction of the decade. The April 28, 2026 announcement that Bertelsmann is buying Concord and merging it with BMG closes in H2 2026, creating the world's #4 music group on day one. Catalog volume per catalog manager doubles overnight. Outside execution capacity is no longer optional — it is the only way the top hundred under-leveraged titles get touched in 2026.",
      "Inside that volume, Fearless is one of the cleanest reactivation opportunities in the combined entity: a defined 30-artist roster, a clean modern-and-legacy bridge, no estate complications, and an unactivated IP asset (Punk Goes, 18 volumes, 3M+ albums sold) ready to run. The catalog spans two distinct discovery patterns simultaneously, organic Gen-Z TikTok pickup and millennial nostalgia revival, plus a deep genre-loyal hard-rock / metalcore base. Each requires a different motion.",
      "The current status quo: TikTok is doing reactivation work on at least four catalog tracks (Get Scared, The Plot In You, Set It Off, Motionless In White) without any owned-channel layer capturing the moment for retail or merch lift. The sync inbox is reactive. Punk Goes is dormant despite 25-year anniversary windows landing now. Hey There Delilah, a Billions Club asset, is not being run as a coming-of-age sync engine. None of these are problems of catalog quality. They are problems of execution capacity.",
      "Q3 2026 is the cleanest window before Q4 retail planning and DSP editorial pitching lock for the year. Catalog work that ships now rides the merger press wave. Catalog work that waits until Q1 2027 fights for attention against new-release glut.",
    ],
  },

  findings: [
    {
      code: "F-01",
      label: "S-Tier Concentration",
      finding: "Five artists carry 58% of the catalog's monthly listener volume. Chase Atlantic 19.6M, Pierce The Veil 9.8M, Plain White T's 7.5M, I Prevail 4.4M, BOYS LIKE GIRLS 3.8M. 45.1M monthly listeners between them.",
      soWhat: "Pilot capital focuses here, not the C-tier long tail. Chase Atlantic excluded per heat-map read.",
      source: "Streaming Snapshot, Tier Summary (May 2026)",
    },
    {
      code: "F-02",
      label: "Billions Club, Underleveraged",
      finding: "Plain White T's 'Hey There Delilah' sits in the Spotify Billions Club: 1.8B+ cumulative streams, 6x Platinum. Yet the catalog isn't being run as a coming-of-age sync engine. Wedding, prom, nostalgia, Gen-Z first-discovery placements compound annually.",
      soWhat: "One year of dedicated sync seeding here is uncapped. The asset already exists; the engine doesn't.",
      source: "RIAA + Spotify catalog data",
    },
    {
      code: "F-03",
      label: "Punk Goes Is a Sleeping IP",
      finding: "18 volumes. 3M+ albums sold. 20M+ singles. Zero pop-punk / emo IP at this scale operates outside Fearless. Currently dormant. The 25-year anniversary window opened in 2025 and is fungible across the next three years.",
      soWhat: "Anniversary boxes, vinyl variants, brand co-drops, creator re-intro — none of it is running. This is the highest-asymmetry play in the dossier.",
      source: "Fearless catalog database, Strategic Notes",
    },
    {
      code: "F-04",
      label: "Sync Ceiling Unhit on PTV / INK / STARSET",
      finding: "Pierce The Veil's 'King for a Day' was already TikTok-reactivated organically (proof the catalog has heat) but film / TV sync work has not followed. Ice Nine Kills' horror-themed metalcore is a built-in Halloween distribution engine. STARSET's Gold-certified 'My Demons' is sci-fi / trailer-cue gold, underserved.",
      soWhat: "Three brief packages, three target lists, one proactive sync motion. Not waiting for the call.",
      source: "Catalog Heat Map (rows 2, 8, 11)",
    },
    {
      code: "F-05",
      label: "TikTok Is Already Pulling Catalog Up Without You",
      finding: "Get Scared (1.3M monthly), The Plot In You (2.58M), Set It Off (3.17M), Motionless In White (4.05M) all overperform their current activity baseline because TikTok is doing reactivation work organically. Right now Fearless captures the streams. Nothing captures the moment for retail or merch lift.",
      soWhat: "Layering owned-channel + physical drop on top of organic TikTok momentum is the highest-ROI play in catalog work.",
      source: "Streaming Snapshot strategic notes",
    },
  ],

  thesis: {
    heading: "The Thesis",
    paragraphs: [
      "Catalog reactivation is a margin business, not a discovery business. The artist already exists. The recordings already exist. The audience already exists. The only thing missing is execution capacity dedicated to converting passive streams and dormant IP into active revenue lifts: vinyl margin, merch margin, sync fees, brand fees, pop-up retail uplift, anniversary box presale.",
      "Fearless is not a discovery problem. The Punk Goes IP doesn't need a relaunch story; it needs a 25-year box and a brand co-drop. Hey There Delilah doesn't need rediscovery; it needs a wedding-and-coming-of-age sync engine running 12 months a year. Pierce The Veil's 'King for a Day' doesn't need a viral moment; the moment already happened. It needs a brief package on a music supervisor's desk before the next slasher trailer cuts to picture.",
      "The pilot is shaped to prove this in a single quarter, against a deliberately small priority set, with the cleanest measurable outcomes. Five lead tracks. One Punk Goes anniversary program. Three sync brief packages. One pop-up activation. Three creator-amplification programs on top of organic TikTok momentum. If any one of these lands at the level of the comparables, the pilot fee is rounding error.",
    ],
    pullQuote: "Catalog reactivation is a margin business, not a discovery business. The artist exists. The audience exists. The only thing missing is dedicated execution capacity.",
  },

  plan: {
    heading: "90-Day Reactivation Roadmap",
    note: "Four phases plus an ongoing learning loop. Twelve weeks from kickoff to retainer recommendation.",
    weeks: 12,
    tracks: [
      {
        name: "Audit + Priority Lock",
        bars: [{ startWeek: 1, endWeek: 2, label: "Lock priority 5 + clearance Q&A" }],
      },
      {
        name: "Sync Briefs",
        bars: [
          { startWeek: 1, endWeek: 4, label: "Brief drafts: PTV / INK / STARSET / PWT" },
          { startWeek: 5, endWeek: 12, label: "Pitch + follow-up cadence" },
        ],
      },
      {
        name: "Vinyl + Merch",
        bars: [
          { startWeek: 3, endWeek: 5, label: "Vendor lock + variant production" },
          { startWeek: 6, endWeek: 9, label: "Drop wave 1 on sale" },
          { startWeek: 10, endWeek: 12, label: "Wave 2 / second variant" },
        ],
      },
      {
        name: "Punk Goes Program",
        bars: [
          { startWeek: 1, endWeek: 6, label: "Volume select + archival audit" },
          { startWeek: 7, endWeek: 10, label: "Re-introduction campaign" },
          { startWeek: 10, endWeek: 12, label: "Box presale opens" },
        ],
      },
      {
        name: "Pop-Up Activation",
        bars: [
          { startWeek: 3, endWeek: 5, label: "Venue + city lock" },
          { startWeek: 6, endWeek: 9, label: "Activation weekend" },
        ],
      },
      {
        name: "Creator Seeding",
        bars: [
          { startWeek: 4, endWeek: 5, label: "Seeding kits ship" },
          { startWeek: 5, endWeek: 12, label: "Hey There Delilah + 3 catalog tracks live" },
        ],
      },
      {
        name: "Owned Channels",
        bars: [
          { startWeek: 1, endWeek: 4, label: "Audit + setup" },
          { startWeek: 5, endWeek: 12, label: "Pre-save + drop-day flows" },
        ],
      },
      {
        name: "Reviews + Recommendation",
        bars: [
          { startWeek: 5, endWeek: 5, label: "Wk-30 review" },
          { startWeek: 9, endWeek: 9, label: "Wk-60 review" },
          { startWeek: 12, endWeek: 12, label: "Final report + retainer rec" },
        ],
      },
    ],
  },

  physicalDrops: {
    heading: "Physical Drops Menu",
    note: "Specs are starting points; final variants and unit counts confirmed at vendor lock (Week 3).",
    items: [
      {
        code: "PD-01",
        title: "Lead Vinyl Variant Drop",
        format: "180g LP, 3 variants",
        variants: "Standard black (5K), color splatter (1500), indie-coalition exclusive (1500)",
        vendor: "RTI / Furnace / Third Man (lead time dependent)",
        msrp: "$32 / $38 / $42",
        margin: "~65-72%",
        narrative: "Priority S-tier track, lead drop. Pre-save unlock, D2C plus indie coalition window. Bundle option with merch pulls AOV +30-50%.",
      },
      {
        code: "PD-02",
        title: "Punk Goes 25-Year Anniversary Vinyl Box",
        format: "Multi-LP retrospective box",
        variants: "Selected from 18 volumes; archival ephemera, foil sleeve, signed-edition tier",
        vendor: "GZ / Furnace (capacity for box-set runs)",
        msrp: "$120-180",
        margin: "~55-65%",
        narrative: "Pre-order funded. Manufacturing capital sits with Fearless. Comp benchmark: Run For Cover, Vagrant, Drive-Thru retrospective box programs converted at 12-18% of email list size.",
      },
      {
        code: "PD-03",
        title: "Limited Merch Capsule",
        format: "4-6 SKUs",
        variants: "Lyric-print zine, era-correct apparel, photo book, screen-printed poster",
        vendor: "Cotton Bureau / Knickerbocker / archival print partner",
        msrp: "$25-95",
        margin: "~50-65%",
        narrative: "Tied to the priority track or Punk Goes IP. Bundle pricing with vinyl. Y2K-coded apparel pieces speak directly to the BLG / PWT / Mayday Parade segment.",
      },
      {
        code: "PD-04",
        title: "Cassette / 7-inch Reissue (optional)",
        format: "Indie-store coalition exclusive",
        variants: "1 SKU, low unit count",
        vendor: "National Audio Co. / Furnace cassette program",
        msrp: "$18-22",
        margin: "~60-70%",
        narrative: "Tied to alumni catalog where TikTok reactivation is already running (Get Scared / Plot In You / Set It Off candidates). Low capital, high signal.",
      },
    ],
  },

  experiential: {
    heading: "Experiential Concepts",
    note: "Single proof-point activation in the pilot. Festival adjacency ranks first if timing aligns.",
    items: [
      {
        code: "EX-01",
        city: "Las Vegas",
        venueType: "When We Were Young festival adjacency",
        partnerCandidates: "Live Nation festival partnerships, on-site retail vendors, streetwear co-brand",
        format: "Friday-night listening + retail pop-up tied to the festival weekend",
        leadTime: "8-10 weeks pre-festival",
        productionBand: "$25-50K production, billable as passthrough",
        narrative: "Highest-density Y2K nostalgist concentration of the year. Vinyl drop, photo book, BLG / Mayday / PWT-coded merch capsule. Earned press from festival media. Direct retail uplift measurable same-night.",
      },
      {
        code: "EX-02",
        city: "Brooklyn",
        venueType: "Independent record store / listening room",
        partnerCandidates: "Rough Trade NYC, Generation Records, Music Hall of Williamsburg side room",
        format: "Single-evening listening installation with live screen-print station",
        leadTime: "5-6 weeks",
        productionBand: "$10-20K production",
        narrative: "Closer to home for the genre press base (Pitchfork, Loudwire, Brooklyn Vegan, Stereogum). Lower production cost, higher per-attendee press value.",
      },
      {
        code: "EX-03",
        city: "Los Angeles",
        venueType: "Pop-up record-store-in-a-store",
        partnerCandidates: "Amoeba Hollywood, Permanent Records Roadhouse, Gold-Diggers (East Hollywood)",
        format: "Friday-Sunday pop-up with PTV / INK / Mayday catalog programmed across the weekend",
        leadTime: "6-8 weeks",
        productionBand: "$15-30K production",
        narrative: "PTV homecoming geography. Highest sync-buyer concentration in the country. Music supervisor walk-throughs scheduled adjacent.",
      },
      {
        code: "EX-04",
        city: "London",
        venueType: "DON BROCO + Bloodywood UK alt-rock activation",
        partnerCandidates: "Sister Ray Soho, Rough Trade East, Banquet Records (Kingston)",
        format: "Weekend pop-up tied to UK touring window",
        leadTime: "10-12 weeks",
        productionBand: "$20-40K production",
        narrative: "International signal, low US capital exposure. UK fan-base for DON BROCO and Bloodywood disproportionately strong. Long-tail rights into European territory work follows.",
      },
    ],
  },

  syncBriefs: {
    heading: "Sync Briefs",
    note: "Three priority artists plus the Plain White T's evergreen engine. Each brief travels with a target list and a creative cue sheet for music supervisors.",
    items: [
      {
        artist: "Pierce The Veil",
        tracks: ["King for a Day (feat. Kellin Quinn)", "Bulletproof Love", "The Divine Zero"],
        angle: "Coming-of-age + cinematic sport / action",
        creativeCue: "King for a Day is already TikTok-warmed. The vocal trade-off scaffolds emotional climax cues in young-adult and sports drama. Bulletproof Love is the action-flick sequence cut. The Divine Zero is the trailer drop.",
        targets: ["Stranger Things-tier YA series", "Sports drama (HBO / Apple / FX)", "EA Sports / 2K / Riot soundtrack windows", "MCU / DC trailer cuts (mid-act needle drop)"],
        supervisorApproach: "Direct briefs to: Maggie Phillips, Susan Jacobs, Liza Richardson; gaming via EA Music + Riot Music. Cue sheet leads with the TikTok proof point and the unhit film / TV ceiling.",
      },
      {
        artist: "Ice Nine Kills",
        tracks: ["A Grave Mistake", "Welcome to Horrorwood", "Hip to Be Scared"],
        angle: "Horror IP + slasher franchise + Halloween distribution",
        creativeCue: "Catalog is built explicitly for the horror calendar. Track titles reference Psycho, American Psycho, Halloween, Friday the 13th. Annual September-October distribution window is built-in. Trailer cuts and end-credit stingers are the highest-margin placements.",
        targets: ["Blumhouse trailer cuts (annual)", "Dead by Daylight / Phasmophobia game soundtracks", "Stranger Things-adjacent slasher revivals", "MGM+ / Shudder horror anthology series"],
        supervisorApproach: "Direct line to Blumhouse music team; Behaviour Interactive for DBD; Shudder programming. Pitch annually in July ahead of the September push.",
      },
      {
        artist: "STARSET",
        tracks: ["My Demons", "Where the Skies End", "Telescope"],
        angle: "Sci-fi cinematic + trailer cue + cinematic ad",
        creativeCue: "My Demons is a Gold-certified anchor with obvious trailer-cue chassis: rising synth bed, half-time drop, anthemic chorus. STARSET's wider catalog supplies the entire sci-fi trailer toolkit. Underserved in film / TV despite 600M+ cumulative streams on the lead track.",
        targets: ["Marvel / DC / Apple TV+ sci-fi series trailers", "Cinematic ad campaigns (Apple, Nike, automotive)", "EA / Activision sci-fi shooter soundtracks", "Halo / Mass Effect tier IP placements"],
        supervisorApproach: "Trailer house briefs (Buddha Jones, MOCEAN, AV Squad). Cinematic ad agencies (Wieden+Kennedy, Mother). Pitch the catalog as a trailer-cue library, not a single track.",
      },
      {
        artist: "Plain White T's — Hey There Delilah",
        tracks: ["Hey There Delilah"],
        angle: "Wedding / prom / coming-of-age evergreen sync engine",
        creativeCue: "1.8B+ cumulative streams. Audience generational handoff is in motion (Gen-Z first-discovery via TikTok, millennial nostalgia at peak weddings-and-births bracket). The track lives in the cultural language of long-distance and first-love. Twelve months a year there is a wedding videographer, a YA series, a coming-of-age film, a prom-content TikTok creator, and a brand campaign that should be using this song.",
        targets: ["Wedding videographer creator coalition (top 50 accounts)", "YA streaming originals (Netflix, Hulu, Prime)", "Coming-of-age indie features", "Brand campaigns: Pinterest weddings, Hallmark, Etsy, mattress / DTC home"],
        supervisorApproach: "Programmatic outreach (this is a always-on engine, not a one-shot pitch). Creator seeding wave funded $5-10K/mo on top of inbound supervisor pitches.",
      },
    ],
  },

  comparablePlays: {
    heading: "Comparable Plays",
    note: "Five external benchmarks with the cleanest read across to the Fearless catalog. Sync mechanic, organic-creator response, festival-anchored Y2K revival, TikTok seeding-into-platinum, and active-artist halo.",
    items: [
      {
        title: "Kate Bush — 'Running Up That Hill'",
        year: "2022",
        what: "Stranger Things sync placement caught a 37-year-old recording in a single moment. Catalog team coordinated retail, DSP editorial, and merch in the same week.",
        result: "+27,000% streaming bump. Sub-$0.5M annual royalties to $2M+/month. #1 in 30+ countries.",
        takeaway: "The textbook sync-driven catalog reactivation. Sync is reactive in most catalog teams; CCD's brief packages flip it to proactive. Three Fearless tracks (PTV King for a Day, INK A Grave Mistake, STARSET My Demons) sit on the same kind of unhit ceiling.",
      },
      {
        title: "Fleetwood Mac — 'Dreams' (Doggface208 / Ocean Spray)",
        year: "2020",
        what: "Organic creator moment was met by the catalog team with same-week merch, a Mick Fleetwood TikTok, and a quick-turn vinyl variant.",
        result: "Album re-charted Billboard 200 at #7 (43 years post-release). Vinyl variant sold out same-week. Earned media value: industry-reported $8M+.",
        takeaway: "Catalog responded to the moment instead of watching streams compound passively. CCD's pop-up + drop infrastructure compresses lead times so when (not if) Fearless catches a TikTok moment, the upside isn't left on the table.",
      },
      {
        title: "Avril Lavigne / Y2K Pop-Punk — When We Were Young Festival",
        year: "2022-2025",
        what: "Live-festival-anchored Y2K pop-punk reactivation that compounded into vinyl reissues, brand fashion deals, and back-to-back tour cycles. Festival lineup itself became a discovery surface for catalog assets.",
        result: "Sk8er Boi sync placements (Nyad, multiple shows). Vinyl reissue programs across festival roster. Multiple artists hit highest streaming peaks 15-20 years post-release.",
        takeaway: "WWWY proves the buyer is there. Fearless owns more of the catalog that defined this era than any other label outside the majors. CCD turns festival timing into vinyl drops, pop-ups, and sync placements that compound around the festival window each year.",
      },
      {
        title: "Jelly Roll — Catalog Acceleration via TikTok Seeding",
        year: "2022-2024",
        what: "Different lane (country / hip-hop crossover) but the seeding mechanic is identical: layered creator drops, paid amplification on top of organic momentum, and owned-channel infrastructure capturing the listener post-discovery.",
        result: "Catalog moved from mid-tier to platinum in 18 months. Tour bumped to arenas. Multiple Billboard #1s.",
        takeaway: "Fearless has at least four catalog tracks (Get Scared 'Built for Blame', Set It Off 'Dancing With the Devil', The Plot In You 'Face Me', Motionless In White 'Another Life') mid-organic-reactivation right now. Layering paid + creator + owned-channel converts passive momentum to measurable revenue.",
      },
      {
        title: "Sleep Token — Active-Artist Halo Across Back Catalog",
        year: "2023-2024",
        what: "Active-cycle releases on Take Me Back to Eden lifted prior catalog (Sundowning, This Place Will Become Your Tomb) into S-tier streaming. Cross-album halo effect compounded for 18 months via creator + DSP + sync motion run on the prior catalog in parallel with the active cycle.",
        result: "Prior LPs added 40-60% to monthly listener counts during the active cycle. Vinyl reissues pulled forward. Sync placements landed on the older catalog, not just the active cycle.",
        takeaway: "Pierce The Veil's 'The Jaws of Life' (2023) was the active cycle. The prior catalog (Collide with the Sky, Misadventures) didn't get the systematic halo treatment. CCD proposes a halo program structure that pulls 2-3 prior LPs into the active cycle window.",
      },
    ],
  },

  math: {
    heading: "The Math",
    note: "Modeled outcomes per workstream over 90 days plus the 12-month tail. Conservative assumes one sync placement and a single-variant vinyl drop. Best assumes two sync placements and a Punk Goes box presale at upper-comp benchmark.",
    columns: ["Conservative", "Expected", "Best"],
    rows: [
      { lever: "Vinyl drop revenue (lead variant)", conservative: "$110K", expected: "$185K", best: "$295K" },
      { lever: "Punk Goes box presale", conservative: "$280K", expected: "$520K", best: "$870K" },
      { lever: "Merch capsule revenue", conservative: "$45K", expected: "$95K", best: "$160K" },
      { lever: "Sync placement fees (90-day)", conservative: "$50K", expected: "$220K", best: "$650K" },
      { lever: "Sync royalty tail (12-mo)", conservative: "$120K", expected: "$580K", best: "$2.4M" },
      { lever: "Streaming uplift on 5 lead tracks", conservative: "+8%", expected: "+18%", best: "+34%" },
      { lever: "Pop-up retail uplift (single weekend)", conservative: "$30K", expected: "$70K", best: "$140K" },
    ],
    totalRow: {
      label: "Total Modeled Lift (90-day + 12-mo tail)",
      conservative: "$635K",
      expected: "$1.67M",
      best: "$4.5M+",
    },
    assumptions: [
      "Vinyl margin assumed 65-72% gross. Punk Goes box assumed 55-65% gross.",
      "Sync 90-day fees benchmarked against comparable catalog placements in trailer / TV / brand windows.",
      "Sync royalty tail assumes one of the placements lands sustained programming, not a one-time use.",
      "Streaming uplift converts to royalties at the standard catalog blended rate. Streaming dollars not double-counted against sync.",
      "Conservative case excludes Punk Goes box if program slips past Q4. Best case assumes both PTV and INK syncs land.",
    ],
  },

  pilot: {
    heading: "Pilot Engagement",
    feeUsd: 45000,
    duration: "90 days, Q3 2026",
    paymentTerms: "Net 7 from invoice",
    paymentSchedule: [
      "50% greenlight ($22,500) — covers weeks 1-6",
      "25% mid-pilot ($11,250) — end of week 6",
      "25% close ($11,250) — end of week 12 with retainer recommendation",
    ],
    passthroughNote: "$25K recommended passthrough budget for creator amplification, paid social, and pop-up production. Billed to platforms / vendors directly with a 15% management uplift. Manufacturing capital (vinyl, merch, anniversary box) sits separately with Fearless and is not included.",
    nextStepsNote: "Pilot output at Week 12 is a defensible recommendation on a multi-quarter retainer scoped against the full 30-artist priority roster, sized against actual pilot performance, not against this dossier's models.",
  },

  signOff: {
    preparedBy: "Crowd Control Digital, LLC",
    contactName: "Geoff Shames",
    contactRole: "Co-Founder, Crowd Control Digital",
    contactEmail: "geoff@crowdcontroldigital.com",
    classification: "Confidential — Mutual NDA Required",
    date: "May 5, 2026",
    closing: "This dossier is issued under mutual NDA between Fearless Records (Concord Music Group, Inc.) and Crowd Control Digital, LLC. Modeled outcomes are directional and not guaranteed. The pilot fee is a fraction of one good outcome; the engagement is sized to prove that out in 90 days.",
  },
};
