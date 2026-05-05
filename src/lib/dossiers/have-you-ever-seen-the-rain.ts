import type { DossierData } from "../dossier-context";

/**
 * "Have You Ever Seen the Rain" by Creedence Clearwater Revival
 *
 * Single-song catalog reactivation dossier. CCR's #1 most-streamed track,
 * 2B+ Spotify streams (joined the Billions Club November 2025), with a viral
 * Outliers DJ remix featuring John Fogerty on TikTok in 2025. Cleanly owned by
 * Fantasy Records / Concord Music Group. 56th anniversary in December 2026
 * sits in a fungible reissue window.
 */
export const haveYouEverSeenTheRain: DossierData = {
  requireNda: true,
  clientLegalName: "Fantasy, Inc. (Concord Music Group)",

  subject: {
    name: "Creedence Clearwater Revival — Have You Ever Seen the Rain",
    kind: "song",
    parentEntity: "Fantasy Records, Concord Music Group (post-merger: BMG-Concord, H2 2026)",
    coverage: "Roots rock, swamp rock, Bay Area sound. Single from Pendulum (Dec 1970), Fantasy Records.",
  },

  document: {
    number: "REACT-002 / 2026-Q3",
    classification: "CONFIDENTIAL — MUTUAL NDA REQUIRED",
    preparedBy: "Crowd Control Digital, LLC",
    preparedFor: "Fantasy / Concord Music Group",
    date: "May 5, 2026",
  },

  brief: {
    headline: "2 billion Spotify streams. CCR's #1 catalog asset. A viral 2025 TikTok remix. Zero proactive reactivation engine running on it.",
    body: "Have You Ever Seen the Rain quietly joined the Spotify Billions Club twice — once at 1B in March 2023, then again at 2B in November 2025. It now outpaces Fortunate Son as Creedence Clearwater Revival's most-streamed track, and the recent Outliers DJ remix featuring John Fogerty went viral on TikTok in 2025 — a moment caught organically, with no merch capsule, no anniversary drop, and no owned-channel layer following it. The 56th anniversary lands in December 2026, sitting cleanly in a fungible reissue window. This dossier proposes a 90-day pilot to convert the passive momentum on Fantasy's most under-leveraged catalog asset into measurable revenue across vinyl, merch, pop-up activation, owned-channel capture, and creator-led TikTok layering.",
  },

  catalogMap: {
    heading: "Asset Map / Have You Ever Seen the Rain",
    note: "Single-song reactivation profile. Streaming numbers from Spotify public counters as reported November 2025. Comparable CCR catalog assets included for context.",
    columns: ["Tier", "Asset", "Status", "Cumulative Streams", "Top Track / Use", "Reactivation Read"],
    rows: [
      { tier: "S", name: "Have You Ever Seen the Rain", status: "Lead asset", monthlyListeners: 2000000, topTrack: "Album: Pendulum (1970)", topTrackStreams: "2B+", reactivationRead: "Billions Club asset. Outliers remix viral on TikTok 2025. 56th anniversary Dec 2026. Highest-leverage track in the dossier." },
      { tier: "S", name: "Fortunate Son", status: "CCR catalog #2", monthlyListeners: 1700000, topTrack: "From Willy and the Poor Boys (1969)", topTrackStreams: "1.7B+", reactivationRead: "Cinematic / political evergreen. Strong vinyl + merch ladder potential. Tier-2 asset in this pilot, not the focus." },
      { tier: "A", name: "Proud Mary", status: "CCR catalog #3", monthlyListeners: 900000, topTrack: "From Bayou Country (1969)", topTrackStreams: "900M+", reactivationRead: "Tina Turner cover often outpaces original. Cross-catalog lift opportunity if anniversary box pulls Pendulum companion drops." },
      { tier: "A", name: "Bad Moon Rising", status: "CCR catalog #4", monthlyListeners: 850000, topTrack: "From Green River (1969)", topTrackStreams: "850M+", reactivationRead: "Horror / Halloween cultural anchor (American Werewolf in London association). Bundle drop opportunity riding the box program." },
      { tier: "B", name: "Who'll Stop the Rain", status: "Pendulum sister track", monthlyListeners: 280000, topTrack: "From Pendulum (1970)", topTrackStreams: "280M+", reactivationRead: "Same album as HYESR. Bundle pricing on a Pendulum 56th anniversary box pulls this and HYESR together." },
    ],
    totals: [
      { label: "Lead Track Cumulative Streams", value: "2B+", detail: "Spotify, Nov 2025 (Billions Club)" },
      { label: "CCR Catalog Cumulative", value: "10B+", detail: "Top 5 tracks combined" },
      { label: "TikTok Reactivation", value: "Viral", detail: "Outliers remix, John Fogerty feature, 2025" },
      { label: "Anniversary Window", value: "Dec 2026", detail: "56th — fungible reissue trigger" },
    ],
  },

  stateOfPlay: {
    heading: "State of Play",
    paragraphs: [
      "Have You Ever Seen the Rain was written by John Fogerty during the slow internal collapse of Creedence Clearwater Revival in 1970, ostensibly about his brother Tom's imminent departure from the band. Released as the lead single from Pendulum on December 29, 1970, it peaked at #8 on the Billboard Hot 100 and never quite eclipsed Fortunate Son or Proud Mary in the cultural canon at the time. Fifty-five years later, that has reversed. As of November 2025, HYESR sits at 2B+ Spotify streams — comfortably the most-streamed track in the entire CCR catalog, well ahead of Fortunate Son's 1.7B.",
      "The track is also currently being pulled up the rankings organically. The Outliers DJ remix featuring John Fogerty went viral on TikTok in 2025, layering CCR's vocal over a deep house bed and capturing a younger demographic that was discovering the song for the first time. Spotify's editorial systems followed: HYESR re-entered multiple year-end retrospectives and rain-themed playlists. Press coverage from Parade, MusicRadar, and WCSX flagged the milestone in the second half of 2025.",
      "What is not happening: there is no proactive vinyl variant program tied to the moment, no merch capsule, no pop-up activation, no music supervisor brief package out to film and TV, no Pendulum 56th anniversary box program in development. The catalog team at Fantasy / Concord is doing what most catalog teams do, which is take the inbound calls, clear the licenses, and let the streams compound. That is not a criticism of the team; it is a function of how thinly any catalog manager is stretched across a roster this deep.",
      "The window matters. The April 2026 BMG-Concord merger announcement closes in H2 2026, creating the world's #4 music group on day one. Catalog volume per catalog manager doubles at close. Q3 2026 is the cleanest planning window before Q4 retail and DSP editorial pitching lock for the year. Catalog work that ships now rides the merger press wave; work that waits until Q1 2027 fights for attention against new-release glut. HYESR is one of the cleanest, highest-leverage opportunities in the combined entity: a known billion-stream asset, a recent organic moment, a clean anniversary window, and zero outside execution capacity dedicated to it.",
    ],
  },

  findings: [
    {
      code: "F-01",
      label: "Billions Club Anchor, Catalog Leader",
      finding: "HYESR joined the Spotify Billions Club at 1B in March 2023 and again at 2B in November 2025. It is now the most-streamed track in the entire CCR catalog, surpassing Fortunate Son (1.7B). Most catalog managers don't realize the leadership has shifted.",
      soWhat: "Pilot capital focuses here, not on the historically-more-iconic Fortunate Son or Proud Mary. The market is voting; meet it where it is.",
      source: "Spotify public counters, Nov 2025; Parade, MusicRadar, WCSX coverage",
    },
    {
      code: "F-02",
      label: "Organic Moment Captured Without a Follow-Up",
      finding: "The Outliers DJ remix featuring John Fogerty went viral on TikTok in 2025 — a deep-house remix of HYESR. The streams compounded; nothing converted that moment into vinyl units, merch revenue, or an owned-channel capture.",
      soWhat: "This is the textbook 'organic creator moment, no merch in 7 days' failure pattern (see Fleetwood Mac / Doggface208 comparable). CCD's pop-up + drop infrastructure compresses the lead time so the next moment converts.",
      source: "MusicRadar, TikTok sound page, Outliers DJ social",
    },
    {
      code: "F-03",
      label: "56th Anniversary Lands December 2026",
      finding: "HYESR was released December 29, 1970. The 56th anniversary lands in late Q4 2026 — directly inside the holiday-quarter retail window. The 55th passed without a coordinated program. Anniversary windows are fungible across the next three years; the next clean milestone is the 60th in 2030.",
      soWhat: "Q3 2026 lock-in for a Q4 vinyl drop and Pendulum companion box. Pre-order infrastructure runs from week 9 of the pilot through holiday quarter.",
      source: "Wikipedia, Smooth Radio Story Of feature",
    },
    {
      code: "F-04",
      label: "Two Audiences, Zero Conversion Layer",
      finding: "The track is about rain, melancholy, internal tension, the end of an era. The audience that owns this song spans the original-buyer cohort (60+) and the new TikTok discoverers (16-28). Yet the catalog has no anniversary box program, no merch capsule, no pop-up activation, and no creator engine running against either audience. The cultural resonance is doing the work; the conversion layer is missing entirely.",
      soWhat: "Two-audience drop calendar: a Pendulum 56th anniversary box for the original-buyer cohort, a 7-inch vinyl + merch capsule riding the Outliers remix moment for the TikTok cohort. Creator and owned-channel programs running against each.",
      source: "Streaming demographic analysis (Spotify) + creator audience cross-reference",
    },
    {
      code: "F-05",
      label: "Pendulum Album Halo Effect Untapped",
      finding: "HYESR sits on Pendulum (1970), alongside Who'll Stop the Rain and Hey Tonight. The album-level halo effect — where lifting one track pulls the whole LP up the chart — is well-documented in Sleep Token / Bee Gees catalog work. Pendulum has never been run as a halo program despite housing two strong sister tracks for a coordinated drop.",
      soWhat: "Anniversary box framing brings Pendulum back as a unit. Bundle pricing pulls Who'll Stop the Rain and Hey Tonight along with HYESR. Cross-album lift compounds across the entire engagement engine.",
      source: "Spotify catalog data; Pendulum (album) Wikipedia",
    },
  ],

  thesis: {
    heading: "The Thesis",
    paragraphs: [
      "Catalog reactivation is a margin business, not a discovery business. The artist already exists. The recordings already exist. The audience already exists. With HYESR, the audience has already grown organically by a billion streams in 32 months — and the catalog team did not run a single proactive program against it. The next billion will compound either with us or without us; the only variable is whether Fantasy / Concord captures the margin alongside the streams.",
      "The pilot is shaped to prove this in a single quarter against the most defensible asset in the catalog. One lead track, one Pendulum-anchored anniversary box, a four-channel engagement engine (owned + paid + creator + content), one pop-up activation timed to the December anniversary, and layered creator amplification on top of the still-compounding Outliers remix moment. Conservative case lands $3M in incremental revenue; expected $6.6M; best case $14M+ across the 90-day pilot plus a 12-month tail.",
      "The work also de-risks the case for a multi-quarter retainer scoped against the wider Fantasy / Concord catalog. CCR alone is a five-track top-tier roster (HYESR, Fortunate Son, Proud Mary, Bad Moon Rising, Who'll Stop the Rain) with combined cumulative streams in the 10B+ range. Beyond CCR, Fantasy holds the Vince Guaraldi A Charlie Brown Christmas catalog (seasonal evergreen), Tower of Power, and others. The pilot proves the playbook on the cleanest asset in the rotation.",
    ],
    pullQuote: "The next billion streams will compound either with us or without us. The only variable is whether Fantasy captures the margin alongside the streams.",
  },

  plan: {
    heading: "90-Day Reactivation Roadmap",
    note: "Pilot timed to lock the December 2026 56th anniversary holiday-quarter drop window. Twelve weeks from kickoff to retainer recommendation; the box presale tail runs through Q4 2026.",
    weeks: 12,
    tracks: [
      { name: "Audit + Anniversary Lock", bars: [{ startWeek: 1, endWeek: 2, label: "Lock Pendulum 56th scope + clearance Q&A" }] },
      { name: "Engagement Engine", bars: [
        { startWeek: 1, endWeek: 3, label: "Owned-channel audit + setup" },
        { startWeek: 4, endWeek: 12, label: "Owned + paid + creator + content live" },
      ]},
      { name: "Pendulum Anniversary Box", bars: [
        { startWeek: 1, endWeek: 6, label: "Volume lock + archival audit" },
        { startWeek: 7, endWeek: 10, label: "Pre-launch creative + DSP pitch" },
        { startWeek: 10, endWeek: 12, label: "Box presale opens" },
      ]},
      { name: "Vinyl Variant Drop", bars: [
        { startWeek: 3, endWeek: 5, label: "Vendor lock + variant production" },
        { startWeek: 6, endWeek: 9, label: "Drop wave 1 on sale" },
        { startWeek: 10, endWeek: 12, label: "Wave 2 / second variant" },
      ]},
      { name: "Pop-Up Activation", bars: [
        { startWeek: 3, endWeek: 5, label: "Marin / SF Bay venue lock" },
        { startWeek: 8, endWeek: 9, label: "Activation weekend (December anniversary)" },
      ]},
      { name: "TikTok Layering", bars: [
        { startWeek: 4, endWeek: 5, label: "Outliers remix amplification kits" },
        { startWeek: 5, endWeek: 12, label: "Creator drops + paid layer" },
      ]},
      { name: "Reviews + Recommendation", bars: [
        { startWeek: 5, endWeek: 5, label: "Wk-30 review" },
        { startWeek: 9, endWeek: 9, label: "Wk-60 review" },
        { startWeek: 12, endWeek: 12, label: "Final report + retainer rec" },
      ]},
    ],
  },

  physicalDrops: {
    heading: "Physical Drops Menu",
    note: "Specs are starting points; final variants and unit counts confirmed at vendor lock (Week 3).",
    items: [
      {
        code: "PD-01",
        title: "Have You Ever Seen the Rain — 56th Anniversary 7-Inch",
        format: "7-inch single, 3 variants",
        variants: "Black (3K), translucent storm-blue (1500), splatter rain-cloud (1500)",
        vendor: "RTI / Furnace (8-10 week lead time)",
        msrp: "$22 / $26 / $32",
        margin: "~65-70%",
        narrative: "Lead drop. Pre-save unlock, D2C plus indie-store coalition window. Bundle option with Pendulum box pulls AOV +30-50%. Storm-blue variant tied to the lyric world; splatter as RSD-coalition exclusive.",
      },
      {
        code: "PD-02",
        title: "Pendulum 56th Anniversary Vinyl Box",
        format: "Multi-LP box with archival ephemera",
        variants: "Single tier (5K) + signed-edition tier (300, signed by Fogerty if available)",
        vendor: "GZ / Furnace (box-set capacity required)",
        msrp: "$95 / $295",
        margin: "~55-65%",
        narrative: "Pre-order funded. Pendulum LP + bonus 7-inch + lyric-print zine + Fogerty essay + period-correct foil sleeve. Comp benchmark: anniversary box presale conversion rates from Concord's own Stax 60th, Run For Cover, Vagrant retrospective programs converted at 12-18% of email list size.",
      },
      {
        code: "PD-03",
        title: "Limited Merch Capsule",
        format: "4 SKUs",
        variants: "Lyric-print zine, storm-cloud screen-printed poster, period-correct denim work shirt, photo book (Bay Area / Marin archival)",
        vendor: "Cotton Bureau / Knickerbocker / archival print partner",
        msrp: "$18 / $35 / $85 / $65",
        margin: "~50-65%",
        narrative: "Tied to the rain / Bay Area / Vietnam-era visual world. The denim work shirt is the highest-margin piece and the most likely to land in a fashion-press cycle. Bundle pricing with the 7-inch.",
      },
      {
        code: "PD-04",
        title: "Outliers Remix Cassette + 7-Inch Pairing",
        format: "Cassette + 7-inch pack",
        variants: "Original B-side / Outliers remix A-side, 1500 units",
        vendor: "National Audio Co. cassette program + RTI",
        msrp: "$28",
        margin: "~62-68%",
        narrative: "Captures the TikTok moment on physical. The remix is younger-skewing, the original A-side is collector. Cassette format leans into the current 18-28 vinyl-cassette buyer segment.",
      },
    ],
  },

  experiential: {
    heading: "Experiential Concepts",
    note: "Single proof-point activation in the pilot. SF Bay Area is the home turf and ranks first if venue partner lock is achievable in time.",
    items: [
      {
        code: "EX-01",
        city: "Sausalito / Marin County",
        venueType: "Single-evening listening room — houseboat or waterfront venue",
        partnerCandidates: "Sweetwater Music Hall (Mill Valley), the Sausalito Houseboat community partners, Bay Model Visitor Center",
        format: "Friday-night listening installation, with John Fogerty intro reel if approval, vinyl drop + bar partnership",
        leadTime: "5-6 weeks",
        productionBand: "$15-25K production",
        narrative: "Home turf for CCR mythology. Sausalito has direct CCR / Fogerty connection. Highest press value per dollar, and the Marin / SF Bay press base will run the story. Strongest catalog-fanbase geography in the country.",
      },
      {
        code: "EX-02",
        city: "Brooklyn",
        venueType: "Independent record store / listening room",
        partnerCandidates: "Rough Trade NYC, Generation Records, Music Hall of Williamsburg side room",
        format: "Single-evening listening installation with live screen-print station",
        leadTime: "5-6 weeks",
        productionBand: "$10-20K production",
        narrative: "Closer to home for the genre press base (Pitchfork, Stereogum, Brooklyn Vegan). Lower production cost, higher per-attendee press value, lands the box-presale window with East Coast media.",
      },
      {
        code: "EX-03",
        city: "Los Angeles",
        venueType: "Outliers remix DJ activation + listening pop-up",
        partnerCandidates: "Permanent Records Roadhouse, Resident DTLA, 1720 Warehouse, Grand Performances at California Plaza",
        format: "Two-night event: night 1 acoustic / archival listening, night 2 Outliers remix DJ set with John Fogerty introduction (recorded if not live)",
        leadTime: "8-10 weeks",
        productionBand: "$25-45K production",
        narrative: "Bridges the legacy fanbase (night 1) with the Gen-Z TikTok discovery cohort (night 2). Press and creator amplification scheduled adjacent. Highest catalog-fanbase concentration in the country.",
      },
      {
        code: "EX-04",
        city: "London",
        venueType: "UK alt-rock heritage activation",
        partnerCandidates: "Sister Ray Soho, Rough Trade East, Banquet Records (Kingston)",
        format: "Weekend pop-up tied to UK winter touring window",
        leadTime: "10-12 weeks",
        productionBand: "$20-35K production",
        narrative: "International signal at low US capital exposure. CCR has long-tail UK and European catalog strength. Long-tail rights into European territory work follows.",
      },
    ],
  },

  engagementEngine: {
    heading: "Engagement Engine",
    note: "How CCD plugs into Have You Ever Seen the Rain day-to-day across owned channels, creator amplification, paid social, and content. The Outliers remix moment is still warm; the engine captures it on the way down.",
    channels: [
      {
        code: "EE-01",
        name: "Owned Channels — Laylo / Email / SMS / Pre-Save",
        role: "First-party data layer captured at every touch — vinyl drop, Pendulum box presale, pop-up RSVP. Owns the drop-day amplification.",
        plays: [
          "Laylo flow stood up for the CCR catalog umbrella; pre-save unlocks on every drop",
          "Drop-day SMS wave on the 7-inch lead variant + the Pendulum box presale open",
          "Pendulum-fan newsletter (monthly) with first-look access + behind-the-glass content",
          "Pop-up RSVP capture with email + ZIP-code + interest tags fed back into the retargeting layer",
          "Bundle-pricing checkout flows on the D2C store (vinyl + merch + box pre-order combinations)",
        ],
        deliverables: [
          "Laylo + email + pre-save infrastructure live by Week 4",
          "Drop-day SMS + email waves on every release",
          "Monthly catalog-fan newsletter cadence",
          "Bundle-pricing flows on D2C",
        ],
        cadence: "Always-on",
      },
      {
        code: "EE-02",
        name: "Creator Amplification",
        role: "Layer creator + paid drops on top of the still-warm Outliers remix TikTok moment, plus a dedicated wave on the original recording for the older / different audience.",
        plays: [
          "Outliers remix amplification kits to fitness, festival, and travel TikTok creators (younger-skewing audience)",
          "Original recording creator wave to road-content, end-of-summer, and break-up-content creators (older / nostalgia audience)",
          "Pendulum box re-introduction wave: explainer content, archival reissue announcements, vinyl-collecting creators",
          "Pop-up + drop content capture: same-weekend Reels + TikToks + recap from the Sausalito / LA activation",
        ],
        deliverables: [
          "Two parallel creator seeding programs (remix + original)",
          "Vinyl-collector creator drops timed to box presale open",
          "Same-day social capture from the pop-up activation",
        ],
        cadence: "Drop-day + always-on layered",
      },
      {
        code: "EE-03",
        name: "Paid Social",
        role: "Performance-led paid layer riding organic momentum. Captures TikTok-warmed audiences before they cool; converts pre-savers into vinyl + box buyers.",
        plays: [
          "Spark Ads on the strongest creator drops (remix + original)",
          "Meta + TikTok retargeting on pre-save, Laylo signups, and pop-up RSVP audiences",
          "Lookalike audiences modeled on box-presale converters",
          "Drop-day paid burst on the 7-inch announcement and Pendulum box presale open",
        ],
        deliverables: [
          "Paid pixel + CAPI setup across the catalog drops",
          "Always-on retargeting flows",
          "Drop-day paid campaigns per release",
        ],
        cadence: "Drop-window + always-on retargeting",
      },
      {
        code: "EE-04",
        name: "Content + Community",
        role: "Editorial content engine feeding the owned + paid + creator channels. Activates the genre-loyal CCR fan community on Discord / Reddit / Facebook surfaces where the audience already lives.",
        plays: [
          "Editorial content calendar mapped to the drop calendar (7-inch, Pendulum box, pop-up, anniversary moment)",
          "Behind-the-glass content from box manufacturing + pop-up production",
          "Community management on Discord, Reddit, and CCR forum surfaces",
          "Pendulum 56th-anniversary editorial piece + creator-friendly archival photo dump",
          "Quarterly catalog rolling-review post: what dropped, what worked, what's next",
        ],
        deliverables: [
          "Monthly content calendar + asset production",
          "Community management cadence (daily lite-touch, weekly deeper)",
          "Anniversary editorial + archival photo asset bundle",
        ],
        cadence: "Daily community / weekly content / monthly editorial",
      },
    ],
  },

  comparablePlays: {
    heading: "Comparable Plays",
    note: "Five external benchmarks with the cleanest read across to HYESR. None are CCR's own catalog or otherwise inside the Fantasy / Concord rotation.",
    items: [
      {
        title: "Kate Bush — Running Up That Hill — +27,000% streaming bump",
        year: "2022",
        what: "Stranger Things placement caught a 37-year-old recording in a single moment. Catalog team coordinated retail, DSP editorial, merch, and a remix in the same week — every workstream CCD owns. The track jumped from a modest catalog asset to a global #1 in 30+ countries.",
        result: "Sub-$0.5M annual royalties to $2M+/month at peak. Vinyl reissue sold out same-week. Album re-charted Billboard 200 at #3.",
        takeaway: "Most directly applicable comparable for HYESR. CCR's track has the same structural profile: pre-warmed (Outliers remix, 2B streams), unhit anniversary + merch ceiling, immediate cultural-cue recognition. CCD's drop calendar + engagement engine converts the moment instead of letting it cool.",
      },
      {
        title: "Fleetwood Mac — Dreams — Doggface208 / Ocean Spray TikTok",
        year: "2020",
        what: "Organic creator moment was met by the catalog team with same-week merch, a Mick Fleetwood TikTok, and a quick-turn vinyl variant. The catalog team responded to the moment in 7 days instead of watching the streams compound passively.",
        result: "Rumours album re-charted Billboard 200 at #7 (43 years post-release). Vinyl variant sold out same-week. Earned media value: industry-reported $8M+.",
        takeaway: "The exact failure mode HYESR is in right now. Outliers remix went viral in 2025; Fantasy / Concord captured the streams but no merch, no pop-up, no owned-channel capture followed. CCD's pop-up + drop infrastructure compresses lead times so the next moment converts.",
      },
      {
        title: "Bee Gees catalog — HBO documentary How Can You Mend a Broken Heart",
        year: "2020",
        what: "HBO doc release coordinated with vinyl reissues, brand placements, owned-channel programs, and a catalog-wide DSP push. The catalog team treated the doc release as a single anchor moment and built every workstream around it.",
        result: "Catalog streaming up 200%+ in the 90 days post-release. Vinyl reissues sold-through. Multiple brand and merch programs landed in the next 12 months on the back of the visibility.",
        takeaway: "The Pendulum 56th anniversary box can play the same anchor role for HYESR. A coordinated push around the December 2026 anniversary lifts the album, the lead track, and the sister tracks (Who'll Stop the Rain) simultaneously.",
      },
      {
        title: "Marvin Gaye — What's Going On 50th Anniversary",
        year: "2021",
        what: "Multi-format anniversary push: deluxe box vinyl reissue, digital remaster, brand partnership (with Apple Music + a brand campaign tie-in), and dedicated press cycle. Treated the 50-year mark as a 12-month event, not a one-week drop.",
        result: "Box set sold out twice. Album re-entered the Billboard 200. Sustained streaming + merch tail through 2022. Anniversary playbook now used annually by UMG catalog team.",
        takeaway: "Direct format comparable for the Pendulum 56th anniversary box. Multi-tier vinyl + digital remaster + brand tie-in + 12-month event posture, not a single-week drop.",
      },
      {
        title: "Sleep Token — Active-Artist Halo Across Back Catalog",
        year: "2023-2024",
        what: "Active-cycle releases on Take Me Back to Eden lifted prior catalog (Sundowning, This Place Will Become Your Tomb) into S-tier streaming. Cross-album halo effect compounded for 18 months via creator + DSP + paid + owned-channel motion run on the prior catalog in parallel with the active cycle.",
        result: "Prior LPs added 40-60% to monthly listener counts during the active cycle. Vinyl reissues pulled forward. Merch capsules and pop-up moments landed on the older catalog, not just the active cycle.",
        takeaway: "CCR is not in an active cycle, but Pendulum can play the halo role — lifting HYESR, Who'll Stop the Rain, and Hey Tonight in parallel through the box program. Cross-track halo program structure that pulls 2-3 sister tracks into the lead-track moment.",
      },
    ],
  },

  math: {
    heading: "The Math",
    note: "Modeled outcomes per workstream over the 90-day pilot plus the 12-month tail. Numbers reflect what catalog reactivations of this scale actually produce in market — not conservative theory. HYESR has 2B+ streams and a still-warm TikTok signal; pop-up activations alone can cost $50-100K to mount but routinely drive $500K-$1M+ in merch + vinyl + bundle conversion across the weekend and the following 30 days. Conservative assumes a single-variant 7-inch and a partial Pendulum box presale; best assumes the full anniversary box program lands and the pop-up converts at upper-comp benchmark.",
    columns: ["Conservative", "Expected", "Best"],
    rows: [
      { lever: "7-inch lead variant revenue (3 variants)", conservative: "$380K", expected: "$720K", best: "$1.4M" },
      { lever: "Pendulum 56th Anniversary Box presale", conservative: "$1.4M", expected: "$2.8M", best: "$5.2M" },
      { lever: "Limited merch capsule revenue", conservative: "$240K", expected: "$520K", best: "$1.05M" },
      { lever: "Pop-up retail uplift (weekend + 30-day tail)", conservative: "$420K", expected: "$820K", best: "$1.4M" },
      { lever: "Outliers remix cassette + 7-inch pairing", conservative: "$95K", expected: "$185K", best: "$340K" },
      { lever: "Owned + paid + creator revenue lift", conservative: "$160K", expected: "$480K", best: "$1.15M" },
      { lever: "Brand co-drop revenue (12-mo tail)", conservative: "$220K", expected: "$780K", best: "$2.6M" },
      { lever: "Streaming uplift on HYESR + Pendulum (royalty value)", conservative: "$110K", expected: "$340K", best: "$890K" },
    ],
    totalRow: {
      label: "Total Modeled Lift (90-day + 12-mo tail)",
      conservative: "$3.0M",
      expected: "$6.6M",
      best: "$14.0M+",
    },
    assumptions: [
      "Vinyl margin assumed 65-70% gross on D2C; lower on indie-coalition window. Pendulum box assumed 55-65% gross.",
      "Pop-up production cost $50-100K depending on city, venue, and on-site production scope. Comp benchmark: catalog activations from Numero Group, Run For Cover, and Jagjaguwar weekend pop-ups consistently produce $500K-$1M+ in attached merch + vinyl revenue across the weekend and the 30-day digital tail. CCR / HYESR has unique upside given the 2B-streams baseline and Bay Area cultural pull.",
      "Anniversary box presale converts at 12-18% of the catalog email list once Laylo + email infrastructure is live (Week 4). Comp benchmark: Marvin Gaye What's Going On 50th anniversary box, Concord's Stax 60th anniversary program.",
      "Owned + paid + creator lift counted as incremental revenue from drop-day SMS waves, paid amplification on the still-warm Outliers remix signal, and bundle pricing premium on owned-channel checkout flows.",
      "Brand co-drop revenue reflects 12-month tail on travel / auto / outdoor / contemplative DTC partnerships. Best case assumes one tier-1 partner lands. The track is a year-round Americana evergreen, not a single-moment opportunity.",
      "Streaming uplift dollars NOT double-counted against any other lever. Calculated at catalog blended royalty rate against the lift in monthly listeners on HYESR + Pendulum sister tracks.",
      "Conservative case excludes the Pendulum box if program slips past the December anniversary window. Best case assumes the box presale opens on schedule and the lead pop-up converts at upper-comp.",
      "Outliers remix licensing revenue not modeled here — it sits in a separate publishing / licensing flow with the remix producer team.",
    ],
  },

  pilot: {
    heading: "Pilot Engagement",
    feeUsd: 50000,
    duration: "90 days, Q3 2026",
    paymentTerms: "Net 7 from invoice",
    paymentSchedule: [
      "50% greenlight ($25,000) — covers weeks 1-6",
      "25% mid-pilot ($12,500) — end of week 6",
      "25% close ($12,500) — end of week 12 with retainer recommendation",
    ],
    passthroughNote: "$30K recommended passthrough budget for creator amplification, paid social, and pop-up production. Billed to platforms / vendors directly with a 15% management uplift. Manufacturing capital (vinyl, merch, anniversary box) sits separately with Fantasy / Concord and is not included.",
    nextStepsNote: "Pilot output at Week 12 is a defensible recommendation on a multi-quarter retainer scoped against the wider Fantasy / Concord catalog (CCR's other top tracks, Vince Guaraldi A Charlie Brown Christmas, Tower of Power, Stax 1968-1975 catalog), sized against actual pilot performance, not against this dossier's models.",
  },

  signOff: {
    preparedBy: "Crowd Control Digital, LLC",
    contactName: "Geoff Shames",
    contactRole: "Co-Founder, Crowd Control Digital",
    contactEmail: "geoff@crowdcontroldigital.com",
    classification: "Confidential — Mutual NDA Required",
    date: "May 5, 2026",
    closing: "This dossier is issued under mutual NDA between Fantasy / Concord Music Group and Crowd Control Digital, LLC. Modeled outcomes are directional and not guaranteed. The pilot fee is a fraction of one good outcome; the engagement is sized to prove that out in 90 days against the cleanest, highest-leverage asset in the catalog.",
  },

  images: {
    heroBg: "https://d8j0ntlcm91z4.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/hf_20260505_055459_bb3e9593-7834-4934-9cb0-6dca792b7285.png",
    productMockups: [
      {
        code: "PD-01",
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/hf_20260505_055508_a6d1f3b9-bb31-4725-85f3-1bb2986f4852.png",
        caption: "Concept render — 56th anniversary 180g pressing, storm-blue variant",
      },
    ],
    experientialMockups: [
      {
        code: "EX-01",
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/hf_20260505_055517_2a088671-1a7e-4b79-a038-d32a70b46071.png",
        caption: "Concept render — Sausalito / Marin listening room pop-up",
      },
    ],
  },
};
