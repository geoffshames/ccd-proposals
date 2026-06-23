import type { ProjectData } from "../project-context";

export const armenta: ProjectData = {
  accentColor: "#E31E24",
  language: "en",
  languageAlternates: [{ slug: "armenta-es", label: "Versión en Español", code: "ES" }],

  client: {
    name: "ARMENTA",
    logo: "",
    contactName: "Miguel Armenta",
    contactRole: "Artist — Street Mob Records / Warner Music Latina",
    contactEmail: "pumaarmenta@gmail.com",
    industry: "Music / Música Mexicana / Corridos Tumbados",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "ARMENTA : PÓRTATE BIEN CYCLE",
    tagline:
      "A 90-day full-service engagement that converts a hitmaker's composer catalog and collab graph into front-facing streaming growth as Armenta steps out as a headline artist on the Pórtate Bien cycle.",
    type: "Full-Service Marketing — Pórtate Bien Album Cycle",
    startDate: "July 1, 2026",
    endDate: "September 30, 2026",
    duration: "90 Days",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Armenta is one of the most decorated songwriters in música mexicana — 12 BMI Latin Awards, the pen behind 'Bebe Dame' and 'Ch y la Pizza,' a fixture in the Peso Pluma / Street Mob writers' room — now stepping out front on his debut album Pórtate Bien. The audience problem is specific: a backstage hitmaker has a massive collaborator graph and catalog credit, but front-facing fandom infrastructure that lags the artistry. CCD already runs this exact lane. We ran the influencer/creator campaign for 'PRC' (Peso Pluma × Natanael Cano) — Armenta's two closest collaborators — and we run corridos paid media every month for Los CT Records and JM Music. This 90-day engagement deploys full-stack paid media (YouTube In-Stream/Discovery, Meta, TikTok Spark Ads), CCD's proven corridos creator playbook, a Reels/TikTok content engine cut from album and collab assets, and release marketing for upcoming singles — all targeted at US Hispanic and bilingual markets (border/SoCal/TX) plus Mexico. Every channel pulls on one of five KPIs: monthly-listener growth from 5.1M, YouTube views, TikTok creations, playlist adds, and follower growth.",
    objectives: [
      "Grow Spotify monthly listeners from 5.1M by converting the collab graph — Peso Pluma, Tito Double P, Natanael Cano, Fuerza Regida, Edgardo Nuñez audiences — into Armenta's own listener base via similar-artist conquesting and paid amplification on the Pórtate Bien catalog",
      "Force YouTube view velocity on album tracks and upcoming collabs with In-Stream + Discovery advertising, the exact lane CCD runs for Los CT Records (Natanael Cano, Gabito Ballesteros) every month",
      "Run the corridos creator playbook — the PRC model — seeding TikTok and Reels creators across US Hispanic and bilingual markets to drive UGC volume and sound usage on Pórtate Bien tracks",
      "Build the content engine — a steady flow of Reels/TikTok cutdowns from album and collab assets that feed paid media and compound organic reach without waiting on label deliverables",
      "Capture front-facing audience — convert ticket-buyers, streamers, and engaged followers into an owned, artist-side audience layer that exists alongside the Warner / Street Mob stack and can be retargeted on Armenta's own cadence",
    ],
    subtitle:
      "Full-service paid media, the proven corridos creator playbook, a content engine, and release marketing — built for the Pórtate Bien album cycle.",
    imageCaption: "Full-Service Marketing — Pórtate Bien Cycle",
    stats: [
      {
        value: 3,
        label: "Paid Media Platforms",
        description:
          "Full-funnel paid media across YouTube In-Stream/Discovery, Meta, and TikTok Spark Ads — the same corridos paid stack CCD runs for Los CT Records and JM Music every month",
      },
      { value: 5, suffix: "M+", label: "Starting Monthly Listeners" },
      { value: 90, label: "Day Engagement" },
      { value: 5, label: "KPI Targets Tracked" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before scoping a single line item we audited Armenta's full footprint — the Street Mob / Warner context, the collaborator graph, and the corridos paid + creator landscape CCD already operates in daily. The finding is simple: Armenta has the rarest asset in música mexicana right now — a catalog of co-writes that are already streaming in the billions, attached to the genre's biggest names. The gap isn't talent or reach. It's the front-facing engine that turns a composer's collab graph into his own monthly listeners and his own captured audience.",
    insights: [
      {
        label: "The Composer-to-Artist Window",
        finding:
          "Armenta wrote or co-wrote 'Bebe Dame' (Fuerza Regida × Grupo Frontera) and 'Ch y la Pizza' (Natanael Cano), writes for Peso Pluma, and holds 12 BMI Latin Awards (2024–2026). He moves in the same corridos tumbados orbit as 'FIRST LOVE' (Oscar Ortiz × Edgardo Nuñez) — one of the genre's biggest recent hits at ~360M streams and RIAA 2× Platinum. He is sitting at ~5.1M Spotify monthly listeners with a debut album, Billboard 'Best New Music Latin,' and a 2026 Billboard 'Latin Artists to Watch' nod. The transition from backstage hitmaker to front-facing headliner happens once. The Pórtate Bien cycle is that window — and right now there is no coordinated paid amplification or creator engine pointed at converting his catalog credit into his own fandom.",
        source: "Spotify artist profile + Billboard 'Best New Music Latin' / 'Latin Artists to Watch 2026'; BMI Latin Spotlight",
      },
      {
        label: "The Collab Graph Is the Wedge",
        finding:
          "Most rising artists have to manufacture relevance. Armenta already has a collaborator graph most headliners would envy: Peso Pluma, Tito Double P (~24M monthly listeners), Natanael Cano, Fuerza Regida, Edgardo Nuñez, Calle 24, Chino Pacas, Manuel Turizo. 'london' (Peso Pluma + Tito Double P, 2026) is recent. Every one of those artists shares a near-identical audience with Armenta — which makes similar-artist conquesting on Spotify, YouTube, and Meta dramatically more efficient than a cold-start. We don't have to find his audience. We have to point his collaborators' audiences at his own catalog.",
        source: "Collaborator graph analysis — Spotify similar-artist data, May–June 2026",
      },
      {
        label: "Walled-Garden Data",
        finding:
          "The data is getting captured — but mostly by Warner Music Latina and Street Mob. The label group owns the streaming reports, pre-save data, and ticket-buyer records. That's a real asset, but it lives inside someone else's stack. The artist team can't segment it, can't run independent retargeting, can't activate it across TikTok / Meta / SMS on Armenta's own cadence. The audience exists — it's behind a wall that isn't yours. This engagement builds an artist-sovereign capture layer alongside the label stack, so front-facing fan growth compounds for Armenta directly, not just for the distributor.",
        source: "Label / distribution structure review — Street Mob Records / Warner Music Latina",
      },
      {
        label: "Corridos Is the Growth Lane",
        finding:
          "Corridos is the 3rd fastest-growing genre globally and roughly 90% independent — which means paid media and creator marketing are still under-deployed relative to the streaming demand. CCD runs this lane every month: YouTube instream/discovery for Los CT Records (Natanael Cano, Gabito Ballesteros, Dan Sanchez) and corridos paid media for JM Music (Drupys, Comando 14, Guerrilleros). The playbook is built, the creator network is live, and the US Hispanic + bilingual targeting is calibrated. Armenta drops into infrastructure that already works in his exact genre — not an experiment.",
        source: "CCD active corridos engagements — Los CT Records, JM Music (2026)",
      },
      {
        label: "CCD Is Already in the Camp",
        finding:
          "CCD ran the influencer / creator campaign for 'PRC' (Peso Pluma × Natanael Cano) — Armenta's two closest collaborators — on a real hit. CCD is also already in conversations within the Peso Pluma / Street Mob camp (a single-campaign scope: $20K media, 15% media fee). The relationship infrastructure, the creator relationships, and the genre fluency are not things we'd be building from zero. They exist. This engagement is an extension of a lane CCD already owns, with the artist who sits at the center of that exact collaborator network.",
        source: "CCD campaign history — PRC influencer campaign; Peso Pluma single-campaign scope",
      },
    ],
    marketContext:
      "Mid-2026 is the right moment. Corridos tumbados has gone fully global, the genre's biggest names are touring stadiums, and the audience is actively searching for the next front-facing artist out of the Street Mob / Peso Pluma orbit. Armenta has the catalog credibility, the debut album, the press cycle (Billboard Best New Music, Latin Artists to Watch), and the collaborator graph. What he doesn't have yet is the coordinated front-facing engine. That window — composer to headliner, on the back of a debut album with a live press cycle — does not stay open. We point the machine at it now or watch the moment pass to a less-credentialed artist with a better marketing operation.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Música mexicana's audience is young, mobile-first, deeply bilingual, and concentrated across the US-Mexico corridor and Mexico itself. It is the fastest-moving fandom in Latin music — and it rewards artists who show up native to TikTok and the corrido culture, not artists who market at it from a distance.",
    demographics:
      "16–34, slight male skew on corridos with a fast-growing female base on Armenta's reggaetón Mexa and bolero material. Largest markets: US Hispanic (SoCal, Texas, the border, Chicago, Phoenix), plus Mexico (CDMX, Guadalajara, Sinaloa, Tijuana). Bilingual EN/ES is the default, not the exception.",
    demographicCards: [
      { label: "Core Age", value: "16–28", detail: "18–24 peak save + UGC demo" },
      { label: "High-LTV Tier", value: "25–34", detail: "Tickets, vinyl, merch, superfan spend" },
      { label: "US Hispanic", value: "SoCal / TX / Border", detail: "+ Chicago, Phoenix, Vegas" },
      { label: "Mexico", value: "CDMX / GDL / Sinaloa", detail: "Home-market corrido culture" },
    ],
    personas: [
      {
        name: "The Corrido Native",
        ageRange: "18–26",
        description:
          "Lives in the corridos tumbados ecosystem — Peso Pluma, Natanael Cano, Fuerza Regida, Tito Double P on repeat. Already knows Armenta's name from the credits and the 'london' collab. Treats discovering the writer-turned-artist as insider knowledge they want to put their friends onto. High intent for tickets and merch.",
        traits: ["Genre Loyalist", "Credits Reader", "Ticket Buyer", "Early Adopter"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "16–22",
        description:
          "Found a Pórtate Bien track through a fancam edit, a corrido sped-up, or a dance/lip-sync trend. Doesn't yet know Armenta's catalog — they just know the song hits. Save-heavy on Spotify, follows on TikTok before any other platform, and is the most likely to push a track viral if the creative seeds it right.",
        traits: ["Sound-First", "Trend Engager", "Save-Heavy", "Algorithm Native"],
      },
      {
        name: "The Genre-Fluid Crossover",
        ageRange: "20–30",
        description:
          "Pulled in by Armenta's range — the indie rock, the boleros, the reggaetón Mexa, the Manuel Turizo collab. Not a hardcore corridos head; a broad Latin / bilingual music listener who follows the artistry across genres. Playlist-driven and the bridge audience that takes Armenta beyond the corridos core.",
        traits: ["Playlist Curator", "Cross-Genre", "Aesthetic-Driven", "Bilingual"],
      },
    ],
    psychographics: [
      "Credibility is currency — the corrido audience rewards the real thing, and 'the guy who actually wrote the hits' is the strongest authenticity signal there is in this genre",
      "Mobile-first and TikTok-native — discovery, fandom, and even ticket decisions happen inside the feed, not on a website",
      "Bilingual by default — content has to live in Spanish first and English second, not the other way around, to land with this audience",
      "Collab culture drives discovery — fans follow the feature graph; a co-sign from a bigger name is the single most reliable on-ramp to a new artist",
    ],
    painPoints: [
      "Backstage credit doesn't auto-convert — being on the credits of billion-stream songs does not mean those listeners follow you as an artist unless someone points them there",
      "Label-owned data means the artist team can't run independent retargeting, segmentation, or its own SMS/email cadence on the fans it's earning",
      "Corridos UGC moves fast and dies fast — without a real creator engine, even a strong track gets buried in the feed within two weeks",
      "English-first marketing falls flat — generic Latin-market campaigns that don't speak the corrido culture natively get ignored by the exact audience that matters most",
    ],
    purchaseTriggers: [
      "Viral TikTok / Reels moments — sped-up edits, dance and lip-sync trends, and fancam content that create urgency and FOMO across the corrido feed in the same 48-hour window",
      "Collab drops — a feature with a bigger name (Peso Pluma, Tito Double P, Manuel Turizo) is the highest-converting discovery moment in the genre and should be amplified hard the day it lands",
      "Live dates and tickets — corrido fandom converts to IRL fast; tour announcements and presales are prime owned-audience capture moments",
      "The first 14 days of a release decide its trajectory — paid amplification velocity in that window matters more than at any other point in the cycle",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "The discovery engine for corridos. Sound usage, sped-up edits, and dance/lip-sync trends drive Spotify saves at a rate no other platform touches. Spark Ads + a calibrated US Hispanic and Mexico creator program are non-negotiable for this audience.",
      },
      {
        name: "YouTube",
        description:
          "The scoreboard for música mexicana — official video view counts are how the genre keeps score. In-Stream + Discovery advertising on album tracks and collabs is the exact lane CCD runs monthly for Los CT Records (Natanael Cano, Gabito Ballesteros).",
      },
      {
        name: "Instagram Reels",
        description:
          "Where the bilingual US Hispanic audience and the crossover fan live. Reels cutdowns from album and collab assets, plus a creator program, extend reach beyond the corridos core into Armenta's reggaetón Mexa and bolero material.",
      },
      {
        name: "Spotify",
        description:
          "Where the campaign is judged. Monthly listeners and save rate are the lagging indicators every other channel feeds. Similar-artist conquesting against the collab graph (Peso Pluma, Tito Double P, Natanael Cano) is the lever we pull hardest.",
      },
    ],
    quotes: [
      { text: "Armenta wrote half the songs you have on repeat and you didn't even know it. Dude is the most underrated name in corridos.", source: "Fan sentiment, corridos community (paraphrased), 2026" },
      { text: "Pórtate Bien is genuinely one of the best debut albums in música mexicana this year — the range is insane.", source: "Billboard — Best New Music Latin, 2026" },
      { text: "From writing for Peso Pluma to his own album with this kind of buzz — the composer-to-artist jump rarely lands this clean.", source: "Industry sentiment, 2026" },
    ],
  },

  targets: [
    { metric: "Spotify Monthly Listeners", value: "+25–40%", context: "Directional 90-day target off the ~5.1M base via similar-artist conquesting against the collab graph + paid amplification on the Pórtate Bien catalog. Not a guarantee — a calibrated target based on CCD's corridos paid-media benchmarks." },
    { metric: "YouTube Views (Paid + Organic)", value: "Velocity push", context: "In-Stream + Discovery flighted on album tracks and upcoming collabs, the same architecture CCD runs monthly for Los CT Records. Targets efficient view velocity and channel growth through the cycle." },
    { metric: "TikTok Creations / UGC Volume", value: "Creator-seeded", context: "The PRC corridos creator playbook seeds US Hispanic + Mexico creators to drive sound usage and UGC; genuine fans sustain it. Volume target set in onboarding once sound-seeding scope is locked." },
    { metric: "Owned Audience Captured", value: "Artist-sovereign layer", context: "Pre-save, ticket, and engaged-follower capture into an artist-side audience that exists alongside the Warner / Street Mob stack and can be retargeted on Armenta's own cadence." },
  ],

  competitive: {
    summary:
      "Armenta launches into the most concentrated era música mexicana has ever had — but his competitive position is unusual, because most of the biggest names in the genre are his collaborators, not his rivals. The real comparison is not 'who is bigger,' it's 'who has converted a similar-sized audience into a front-facing, paid-amplified, creator-driven machine — and who hasn't.' Armenta has stronger catalog credibility than almost any artist at his listener tier, but a thinner front-facing marketing operation. That gap is the entire opportunity. Listener figures are directional, drawn from public Spotify / kworb data (2026); the named artists below are positioning comparables, NOT a claim that they are Armenta's rivals — several are active collaborators noted as such.",
    competitors: [
      { name: "Peso Pluma — Genre Anchor", strength: "Street Mob / Double P empire, global stadium tours, the artist who took corridos tumbados worldwide, massive owned audience and label infrastructure", gap: "COLLABORATOR, not competitor — Armenta writes for him and CCD is already in conversations within this camp. The strategic read: Armenta is the credibility play one tier down, and Peso's audience is the single most efficient conquesting target on the board." },
      { name: "Tito Double P — ~24M Monthly Listeners", strength: "Exploded off the Peso Pluma cosign into a headliner in his own right, proof the Street Mob orbit can mint front-facing stars fast", gap: "COLLABORATOR ('london,' 2026) and the clearest precedent for the exact move Armenta is making — Street Mob writer/affiliate to front-facing headliner. Tito's trajectory is the template; the difference is a coordinated paid + creator engine accelerating it." },
      { name: "Natanael Cano — Corridos Pioneer", strength: "Originated corridos tumbados, deep catalog, huge YouTube and streaming footprint, fiercely loyal base", gap: "COLLABORATOR — Armenta co-wrote 'Ch y la Pizza' and CCD runs YouTube paid media for Natanael via Los CT Records. His audience overlaps Armenta's almost completely, making him a prime conquesting and creator-seeding target rather than a rival." },
      { name: "Edgardo Nuñez — Peer Tier", strength: "Strong corridos catalog, presence in the same 'FIRST LOVE' orbit (RIAA 2× Platinum, ~360M streams), rising front-facing profile", gap: "COLLABORATOR and a same-tier peer — the shared corridos tumbados audience is a warm, high-intent retargeting pool. Re-activating that overlap on the Pórtate Bien cycle is low-hanging fruit." },
      { name: "Calle 24 / Chino Pacas — Next Wave", strength: "Younger corridos acts with strong TikTok-native momentum and aggressive creator presence in exactly the US Hispanic markets that matter", gap: "Collaborators of Armenta's and the clearest example of how fast a TikTok-forward creator engine moves the needle in this genre. They show what an aggressive creator playbook does — which is precisely what this engagement brings to Armenta's deeper catalog." },
    ],
  },

  timelineSubheading:
    "A focused 90-day engagement across the Pórtate Bien cycle — build, launch, and sustain. Each phase is calibrated to a different KPI, with the creator engine and paid media compounding across all three.",
  timelineImageCaption: "90 Days / 3 Phases / 1 Cycle",

  timeline: [
    {
      phase: "Build + Activate",
      week: "Days 1–30",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Stand up the paid media architecture — YouTube, Meta, TikTok ad accounts; pixel/CAPI tracking; conversion events; similar-artist conquesting audiences built off the collab graph (Peso Pluma, Tito Double P, Natanael Cano, Edgardo Nuñez)",
        "Launch the corridos creator playbook (PRC model) — brief and contract first wave of US Hispanic + Mexico creators, sound-seeding the lead Pórtate Bien tracks on TikTok + Reels",
        "Spin up the content engine — first batch of Reels/TikTok cutdowns from album and collab assets; establish the weekly production cadence",
        "Stand up the artist-sovereign capture layer — pre-save + SMS/email opt-in alongside the Warner / Street Mob stack; begin retargeting pool build",
      ],
    },
    {
      phase: "Push + Amplify",
      week: "Days 31–60",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Scale paid media on the best-performing tracks — YouTube In-Stream/Discovery for view velocity, Meta + TikTok Spark Ads for streams and audience capture across US Hispanic + bilingual + Mexico markets",
        "Second creator wave — concentrate on the tracks gaining sound traction; amplify any UGC moment hard within its 48-hour window",
        "Release marketing for the next single / collab in the cycle — coordinated paid surge timed to the drop, with creator seeding pre-loaded",
        "Mid-engagement read — what's driving monthly-listener growth, view velocity, and UGC; reallocate spend to winners; live pacing dashboard shared with the team",
      ],
    },
    {
      phase: "Sustain + Convert",
      week: "Days 61–90",
      date: "September 2026",
      status: "upcoming" as const,
      tasks: [
        "Sustain paid flighting — keep top creative in market, expand conquesting audiences, retarget engaged non-converters into saves and follows",
        "Third creator wave — sustain the strongest sounds, deepen the crossover into Armenta's reggaetón Mexa and bolero material to widen the base beyond the corridos core",
        "Convert the captured audience — activate the owned pre-save / SMS / email pool for the next moment (release, tour, or collab announcement)",
        "Full 90-day attribution analysis — channel-by-channel ROI, monthly-listener and follower growth, UGC volume, playlist adds, and a forward plan for the next cycle",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Channel-by-channel breakdown of the 90-day Pórtate Bien engagement — full-service paid media, the proven corridos creator playbook, a content engine, and release marketing, all targeted at US Hispanic + bilingual + Mexico markets.",

  deliverables: [
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        { name: "YouTube In-Stream / Discovery", quantity: "Always-on", description: "In-Stream (TrueView) for low-cost view velocity on album tracks and collabs, plus Discovery for channel growth and similar-artist conquesting — the exact lane CCD runs monthly for Los CT Records (Natanael Cano, Gabito Ballesteros)" },
        { name: "Meta Advertising", quantity: "Always-on", description: "IG + FB Feed/Stories/Reels traffic and conversion campaigns driving streams, saves, and follows; geo-split across US Hispanic (SoCal, TX, border, Chicago, Phoenix) + Mexico" },
        { name: "TikTok Spark Ads", quantity: "Always-on", description: "Spark Ads boosting top-performing organic and creator content; In-Feed creative driving sound usage and Spotify saves where corridos discovery actually happens" },
        { name: "Similar-Artist Conquesting", quantity: "Collab-graph", description: "Conquesting audiences built off Armenta's collaborator graph — Peso Pluma, Tito Double P, Natanael Cano, Fuerza Regida, Edgardo Nuñez, Calle 24, Chino Pacas — across YouTube, Meta, and TikTok" },
      ],
    },
    {
      category: "Creator & UGC",
      icon: "◆",
      items: [
        { name: "Corridos Creator Campaign (PRC Model)", quantity: "Multi-wave", description: "Paid creator activations across TikTok + Reels using CCD's proven corridos creator playbook — the same model CCD ran for 'PRC' (Peso Pluma × Natanael Cano); sound-seeding Pórtate Bien tracks across US Hispanic + Mexico creator tiers" },
        { name: "UGC Amplification", quantity: "Reactive", description: "Identify and hard-amplify any organic UGC moment — sped-up edits, dance/lip-sync trends, fancams — within its 48-hour window via Spark Ads and creator re-seeding" },
        { name: "Content Engine", quantity: "Weekly", description: "A steady flow of Reels/TikTok cutdowns produced from album and collab assets — feeds paid media and compounds organic reach without waiting on label deliverables" },
      ],
    },
    {
      category: "Release Marketing",
      icon: "■",
      items: [
        { name: "Single / Collab Launches", quantity: "Per drop", description: "Coordinated paid + creator surge timed to each upcoming single or collab in the Pórtate Bien cycle — pre-save capture, creator pre-seeding, and a release-day amplification push" },
        { name: "Playlist + Editorial Support", quantity: "Ongoing", description: "Pitch and paid support targeting playlist and editorial adds across Spotify, YouTube, and Apple — corridos, música mexicana, and broader bilingual discovery tiers" },
        { name: "Audience Capture Layer", quantity: "Artist-sovereign", description: "Pre-save + SMS/email opt-in built alongside the Warner / Street Mob stack — an artist-side owned audience the team can segment and retarget on Armenta's own cadence" },
      ],
    },
    {
      category: "Targeting & Audiences",
      icon: "▲",
      items: [
        { name: "US Hispanic + Bilingual", quantity: "Primary", description: "SoCal, Texas, the US-Mexico border, Chicago, Phoenix, Vegas — bilingual EN/ES creative as the default, Spanish-first, English second" },
        { name: "Mexico", quantity: "Home market", description: "CDMX, Guadalajara, Sinaloa, Tijuana — home-market corrido culture and the artist's own regional base in Los Mochis / Ahome and Tijuana" },
        { name: "Collab-Graph Lookalikes", quantity: "Conquesting", description: "Engaged audiences of Peso Pluma, Tito Double P, Natanael Cano, Edgardo Nuñez, Fuerza Regida, Manuel Turizo plus broader corridos / música mexicana genre lookalikes" },
      ],
    },
    {
      category: "Reporting + Intelligence",
      icon: "●",
      items: [
        { name: "Live Pacing Dashboard", quantity: "90 days", description: "Live dashboard tracking Spotify monthly listeners, save rate, YouTube view velocity, TikTok creations/UGC volume, follower growth, and paid efficiency — accessible to Armenta + team" },
        { name: "Bi-Weekly Performance Reviews", quantity: "6 reviews", description: "Per-channel deep dives — what's working, what's fatiguing, where to redeploy spend; written and shared with the team across the engagement" },
        { name: "Final Campaign Brief", quantity: "1 brief", description: "Post-cycle attribution, channel-by-channel ROI, monthly-listener / follower growth analysis, and a forward plan for the next release cycle" },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in the 90-day full-service engagement — and where the boundaries are. Pricing below is a DRAFT recommendation, not yet approved; numbers are built to be adjusted with the team.",
    included: [
      "Full paid media management across YouTube In-Stream/Discovery, Meta, and TikTok Spark Ads — strategy, creative direction, optimization, and reporting",
      "Corridos creator / influencer campaign using CCD's proven PRC playbook — sourcing, contracting, content review, and distribution across US Hispanic + Mexico creator tiers",
      "Content engine — weekly Reels/TikTok cutdowns produced from album and collab assets to feed paid and organic",
      "Release marketing for upcoming singles and collabs in the Pórtate Bien cycle — coordinated paid + creator surges timed to each drop",
      "Audience growth + artist-sovereign capture layer (pre-save, SMS/email) built alongside the Warner / Street Mob stack",
      "Similar-artist conquesting audiences built off Armenta's full collaborator graph across all paid platforms",
      "Live pacing dashboard, bi-weekly performance reviews, and a final campaign brief with a forward plan",
    ],
    excluded: [
      "Music video production, photo shoots, and styling — handled by the Warner / Street Mob creative teams (CCD coordinates, does not produce; available as an add-on, scoped and quoted separately)",
      "Music production, mixing, mastering, A&R (handled by Armenta + Street Mob)",
      "Graphic design and motion / animation beyond social cutdowns (available as an add-on — scoped and quoted separately)",
      "Touring and live event production (available as an add-on via TOUR CONTROL — scoped and quoted separately)",
      "OOH / DOOH activations (available as an add-on — scoped and quoted separately)",
      "Direct management of label-owned CRM / data platforms (CCD focuses on the artist-sovereign owned-stack layer)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      { name: "Management Retainer", description: "The committed monthly fee. Covers strategy, paid media management (YouTube In-Stream/Discovery, Meta, TikTok Spark Ads), and account management. That includes planning, builds, optimization, reporting, and the day-to-day running of the engagement. This is the only fixed, committed cost.", price: 5000, recurring: true },
    ],
    subtotal: 5000,
    discount: { label: "", percentage: 0, amount: 0 },
    variableCosts: [
      { name: "Paid Media (Ad Spend)", basis: "15% of ad spend", note: "Ad spend is funded by the client and billed directly to the platforms; CCD manages it for a 15% management fee. Example only: at $10,000/mo in ad spend, the management fee is $1,500/mo. Spend level is set collaboratively with the team and stays flexible." },
      { name: "Content Engine", basis: "Production at cost", note: "Reels/TikTok cutdowns and original content carry their own production costs, scoped and billed per deliverable. Monthly content budget TBD with the team. Not included in the retainer." },
      { name: "Creator / Influencer Campaign", basis: "Creator fees + 15% mgmt", note: "CCD's PRC corridos creator playbook. Creator fees are billed separately and managed at the same 15% rate. Scoped per campaign once the creator list is locked. Not included in the retainer." },
    ],
    variableCostsHeading: "Variable Costs (Billed On Top)",
    variableCostsNote: "These are additional to the committed retainer and scoped as we go. Specific content and creator budgets are set with the team and inserted here once defined.",
    total: 15000,
    totalLabel: "Committed Fee (90 Days)",
    paymentSchedule: [
      { milestone: "Month 1: Management Retainer", percentage: 33, amount: 5000, due: "Upon approval" },
      { milestone: "Month 2: Management Retainer", percentage: 33, amount: 5000, due: "August 1, 2026" },
      { milestone: "Month 3: Management Retainer", percentage: 34, amount: 5000, due: "September 1, 2026" },
    ],
    paymentTerms:
      "DRAFT pricing, not yet approved; built to be adjusted with the team. The committed cost is the $5,000/mo management retainer ($15,000 over the 90-day engagement). Paid media is billed at 15% of ad spend, with the ad spend funded by the client and billed to the platforms. The content engine carries its own production costs, and the creator campaign carries its own creator fees, each billed separately and scoped per deliverable. 7 days from invoice.",
    paymentLink: "#approve",
  },

  nextSteps: [
    { step: 1, title: "Approve / Let's Talk", description: "Hit Approve below (it pings the CCD team directly) or reply to Geoff to talk through scope and budget. Numbers are a draft — we'll calibrate them to your priorities and the cycle calendar." },
    { step: 2, title: "Onboarding Questionnaire", description: "Short intake — Spotify for Artists access, current ad accounts, Warner / Street Mob data bridge needs, the Pórtate Bien release/collab calendar, and team contacts." },
    { step: 3, title: "Build (Days 1–30)", description: "Stand up paid media accounts + tracking, build collab-graph conquesting audiences, launch the first corridos creator wave, and start the content engine." },
    { step: 4, title: "Push (Days 31–60)", description: "Scale paid on winning tracks, run the second creator wave, and execute release marketing for the next single/collab in the cycle. Pacing dashboard live." },
    { step: 5, title: "Sustain + Read (Days 61–90)", description: "Sustain the strongest channels, convert the captured audience, and deliver the full 90-day attribution analysis with a forward plan." },
  ],

  cta: {
    headline: "He wrote the hits. Now let's make him the headliner.",
    body: "Armenta has the catalog, the collab graph, and the album. The one missing piece is the front-facing engine that turns all of it into his own monthly listeners and his own audience. CCD already runs this exact lane — for his closest collaborators. Approve below or reply to start.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/armenta/hero1.jpg",
    heroBg: "/images/armenta/hero-bg.jpg",
    hero2: "/images/armenta/hero2.jpg",
    product: "/images/armenta/product.jpg",
    editorial: "/images/armenta/editorial.jpg",
    texture: "/images/armenta/texture.jpg",
    brutalist: "/images/armenta/brutalist.jpg",
    hero1Caption: "Full-Service Marketing — Pórtate Bien Cycle",
    brutalistCaption: "ARMENTA × Crowd Control Digital",
    ogImage: "/images/armenta/og-image.png",
  },

  caseStudies: [
    { client: "PRC", metric: "PESO × NATA", description: "CREATOR CAMPAIGN" },
    { client: "PESO PLUMA", metric: "700M+", description: "SPOTIFY STREAMS" },
    { client: "LOS CT RECORDS", metric: "NATANAEL CANO", description: "YOUTUBE PAID" },
    { client: "JM MUSIC", metric: "CORRIDOS", description: "PAID MEDIA" },
  ],
};
