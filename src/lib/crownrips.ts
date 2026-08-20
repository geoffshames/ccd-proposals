export type BudgetLine = { item: string; amount: number };

export type Concept = {
  id: string;
  number: string;
  name: string;
  hook: string;
  logline: string;
  image: string;
  imageAlt: string;
  scale: "FLAGSHIP" | "HERO" | "AMPLIFIER";
  format: string;
  window: string;
  markets: string;
  mechanic: string[];
  why: string;
  earned: string;
  proof: { claim: string; source: string };
  build: string[];
  budget: BudgetLine[];
  total: number;
  risk: string;
  totalLabel?: string;
  setList?: { tier: string; count: string; behaviour: string }[];
  clientSide?: string[];
  media?: {
    headline: string;
    rate: string;
    note: string;
    rows: { label: string; impressions: string; spend: string; tag?: string }[];
  };
};

export const concepts: Concept[] = [
  {
    id: "vault",
    number: "01",
    name: "THE LIVE VAULT",
    hook: "Every card you can pull is sitting in a bulletproof box downtown. Watch it empty.",
    logline:
      "A transparent armored vault in a public plaza holds the physical counterpart of every chase card in the CrownRips pool. When someone pulls a grail in the app, a robotic arm removes that exact card from the vault — live, on camera, in front of whoever is standing there. The vault visibly empties over 30 days.",
    image: "/images/crownrips/vault.jpg",
    imageAlt:
      "An armored glass vault cube in an empty urban plaza at dusk, filled with illuminated graded card slabs and a robotic arm reaching for one",
    scale: "FLAGSHIP",
    format: "Permanent installation + 24/7 livestream",
    window: "30 days",
    markets: "1 city (LA or Vegas)",
    mechanic: [
      "Build a 12×12 armored glass cube in a high-footfall plaza. Inside: every physical chase card backing the digital pool, racked and lit, visibly countable.",
      "Six cameras run a continuous public livestream. The stream is the ad — it never stops and it costs nothing per hour after build.",
      "A pull in the app triggers the arm. It retrieves that physical slab, drops it into a sealed shipping cell, and the winner's handle appears on the vault's exterior LED.",
      "The rack empties in real time. Anyone can walk up at any hour and count what's left.",
      "Final 48 hours: last-grail countdown, streamed, with the remaining cards spotlit alone in the box.",
    ],
    why:
      "This category's biggest problem is not awareness — it is belief. Every digital pack product gets the same comment under every post: it's rigged, the odds are fake, nobody actually wins. A vault answers that without ever arguing. You cannot fake an empty rack that ten thousand people walked past. It converts the single largest objection into the single largest spectacle, and it gives a digital product the one thing it structurally lacks: a physical, tactile, witnessable payoff.",
    earned:
      "A permanent 30-day set that generates footage continuously without a crew on site. Every grail pull is an automatic press beat with its own video. The scarcity clock creates a second and third news cycle as the rack thins out — the story gets better the longer it runs, which almost no stunt can claim.",
    proof: {
      claim:
        "Transparency-as-spectacle has a track record: the vintage-and-chase end of the card market is up while mass-printed sealed product loses traction, meaning proof of scarcity is what the audience is actually buying.",
      source: "Athlon Sports, 2026 Mid-Year Collectibles Report",
    },
    build: [
      "Ballistic-rated laminated glass, steel frame, seismic-anchored base",
      "6-axis industrial pick-and-place arm on a vertical gantry",
      "Exterior 4K LED ribbon for winner handles and remaining-count",
      "6× PTZ camera rig, redundant encoders, multi-platform simulcast",
      "24/7 licensed security detail and insured card float",
    ],
    budget: [
      { item: "Vault fabrication, ballistic glass, robotics + gantry", amount: 145000 },
      { item: "Site lease, permits, 24/7 security (30 days)", amount: 62000 },
      { item: "Broadcast rig, encoding, streaming infrastructure", amount: 48000 },
      { item: "Physical chase-card inventory float", amount: 60000 },
      { item: "Creator programming + press day", amount: 35000 },
      { item: "Content capture — hero film + 40 cutdowns", amount: 22000 },
      { item: "PR and earned media push", amount: 13000 },
    ],
    total: 385000,
    risk:
      "Longest build runway of the seven — 10 to 12 weeks from greenlight. Needs a site partner locked before fabrication starts.",
  },
  {
    id: "drop",
    number: "02",
    name: "THE DROP",
    hook: "Five hundred drones form the pack. One hundred of them break formation and land in your hands.",
    logline:
      "A 500-drone light show over an open field resolves into a single giant foil pack. It tears open. Then one hundred drones detach from the formation and descend — each carrying a sealed lot to one named, pre-registered person standing in the dark below.",
    image: "/images/crownrips/drop.jpg",
    imageAlt:
      "Hundreds of illuminated drones in formation above a night field, one descending toward a crowd with hands raised",
    scale: "HERO",
    format: "One-night mass gathering",
    window: "Single night + 3-week registration runway",
    markets: "1 field, national registration",
    mechanic: [
      "Three weeks out, registration opens in-app. Ripping digital packs earns entries. The field has a hard cap.",
      "Show night: 500 drones build a foil wrapper in the sky, then tear it open. That is the money shot and it is the poster.",
      "One hundred drones break formation and descend to one hundred GPS-tagged individuals — not a scatter, a delivery. Each person is found by name.",
      "One of the hundred lots contains the grand grail. Nobody knows which until they open it, on the field, in the dark, on camera.",
      "The crowd films the whole thing from underneath. Every attendee is a camera operator.",
    ],
    why:
      "Scattering product into a crowd produces a scrum, an injury risk, and footage that looks like a riot. Targeted delivery inverts it: instead of a hundred people fighting for product, a hundred people are individually found by a machine in front of thousands of witnesses. It reads as generous rather than chaotic, and it films infinitely better — you get both the god's-eye formation shot and the intimate one-to-one landing.",
    earned:
      "Drone shows are inherently shareable and the formation-into-tear sequence is a genuinely novel piece of choreography. Every one of the hundred recipients becomes a content node with a personal story. Aerial hero footage carries the campaign for months afterward as paid creative.",
    proof: {
      claim:
        "A 500-drone show runs roughly $100K–$150K in North America, which makes a formation of this scale a real line item rather than a fantasy.",
      source: "Creative Skies / Open Sky 2026 drone show pricing guides",
    },
    build: [
      "500-drone choreographed show with custom formation programming",
      "100 payload-rigged delivery drones with GPS-tagged recipient matching",
      "FAA waiver, licensed pilot team, airspace coordination",
      "In-app registration and live drop-tracker module",
      "Aerial and ground film unit, 4 cameras",
    ],
    budget: [
      { item: "500-drone light show — choreography, FAA waiver, pilots", amount: 135000 },
      { item: "100 delivery drones, payload rigging, operators", amount: 58000 },
      { item: "Site, staging, crowd ops, insurance", amount: 44000 },
      { item: "Registration + live drop-tracker app module", amount: 26000 },
      { item: "Prize inventory — 100 sealed lots + grand grail", amount: 25000 },
      { item: "Film crew — aerial and ground", amount: 14000 },
      { item: "PR and creator seeding", amount: 8000 },
    ],
    total: 310000,
    risk:
      "Single point of failure: weather. Budget assumes one contracted rain date. Airspace approval is the long pole — file early.",
  },
  {
    id: "chain",
    number: "03",
    name: "THE CHAIN",
    hook: "A real grail, set in diamonds, worn in public — and takeable.",
    logline:
      "Commission a jeweler to set an actual graded chase card into a custom iced-out pendant. It becomes the single grand prize. But it is never in a display case: it is worn, by a rotating cast of six holders, and whoever pulls the winning card in-app takes it off the current holder's neck, in person, on camera.",
    image: "/images/crownrips/chain.jpg",
    imageAlt:
      "Macro shot of a heavy diamond Cuban link chain with a crystal pendant housing a graded trading card slab",
    scale: "HERO",
    format: "Travelling trophy + handoff series",
    window: "8 weeks",
    markets: "6 cities",
    mechanic: [
      "One grail card. One pendant. No second copy, ever — the scarcity is real and provable.",
      "Six holders wear it for a week each: creators, an athlete, a breaker with real hobby credibility.",
      "Each week, a claim window opens in-app. Pull the trigger card and the chain is yours.",
      "The handoff happens in person, unannounced, filmed. The holder does not know when it is coming.",
      "If nobody claims it in a week, it moves to the next holder and the pot visibly ages.",
    ],
    why:
      "This is the cheapest route to genuine status currency. Jewelry is how this culture already signals a win — it is native, not imposed. The design move is making it takeable. A prize in a vitrine is an ad; a prize on someone's neck that a stranger can come and claim is a running storyline with a built-in cliffhanger every single week.",
    earned:
      "Jewelry photographs better than almost any other prize and travels natively on hobby, hip-hop, and streetwear accounts simultaneously. Six handoffs means six discrete content moments rather than one. The reveal-and-claim format is inherently clippable.",
    proof: {
      claim:
        "The grail economy is real and liquid at the top — a PSA 10 Bronze Trophy Pikachu No.3 sold for $1,769,000 in May 2026, and Logan Paul's Pikachu Illustrator moved for $16,492,000 in February 2026.",
      source: "Goldin Auctions / ComicBook.com collectibles reporting, 2026",
    },
    build: [
      "Acquisition of one graded chase card at the $75K–$110K tier",
      "Custom pendant — crystal slab housing, VVS pave setting, Cuban link",
      "Six-city handoff tour with armed courier and transit bonding",
      "Documentary unit capturing each claim",
      "Standalone claim mechanic inside the app",
    ],
    budget: [
      { item: "Grail card acquisition (graded chase card)", amount: 95000 },
      { item: "Jeweler commission — pendant, setting, chain", amount: 78000 },
      { item: "6-city handoff tour — travel, security, courier", amount: 36000 },
      { item: "Creator and athlete wear fees (6 holders)", amount: 30000 },
      { item: "Content capture per handoff", amount: 18000 },
      { item: "Insurance and transit bonding", amount: 8000 },
    ],
    total: 265000,
    risk:
      "Card acquisition price is market-exposed — lock the buy early. Setting a graded slab requires a jeweler who will not de-grade the asset.",
  },
  {
    id: "stash",
    number: "04",
    name: "THE STASH",
    hook: "The coordinates are inside the packs. Rip to find out where to dig.",
    logline:
      "An unbranded account posts photographs of physical stashes hidden across ten cities. The images alone are not enough — the coordinates are fragmented and distributed inside digital packs. You have to rip to get a piece of the map, and you have to trade with strangers to complete it.",
    image: "/images/crownrips/stash.jpg",
    imageAlt:
      "A weathered steel lockbox half-buried in sand beneath a pier at dawn with a faint red light glowing through the seam",
    scale: "AMPLIFIER",
    format: "Distributed ARG + physical hunt",
    window: "6 weeks, 3 waves",
    markets: "10 cities",
    mechanic: [
      "A burner account with no logo posts cryptic stash photography. It looks like a leak, not a campaign.",
      "Every digital rip yields a coordinate fragment. No single player can solve a location alone.",
      "Players are forced into Discord, Reddit, and group chats to assemble maps — the campaign builds its own community as a byproduct.",
      "Stashes escalate across three waves: sealed product, then graded singles, then one buried grail with a six-figure claim.",
      "A live map fills in as stashes are found, so non-participants can spectate the hunt in progress.",
    ],
    why:
      "This is the highest participation-per-dollar mechanic on the list, and it is the only one that makes ripping the product a required action rather than a reward. It also solves distribution for free: hunts of this kind get organized by the audience, in public, on platforms we do not have to buy. The @HiddenCash phenomenon proved a plain anonymous account can move a city; gating the clues behind the product is what turns that energy into usage.",
    earned:
      "Local news covers physical hunts reliably and repeatedly — ten cities means ten local markets running the story independently, three times each. UGC volume is the highest of any concept here because every searcher films their own attempt whether they win or not.",
    proof: {
      claim:
        "The community already gathers at this scale — The National drew 100,000+ attendees and is projected at 125,000–150,000 for 2026, with Pokémon crossover cited as a primary driver.",
      source: "Sports Collectors Digest / Athlon Sports, 2026",
    },
    build: [
      "Fragment-distribution logic built into the pack-opening engine",
      "Three-wave clue architecture and puzzle design",
      "Field placement crews across ten markets",
      "Anonymous account content production — photography and video",
      "Live find-map with moderation and anti-abuse controls",
    ],
    budget: [
      { item: "Prize inventory — 10 markets + buried grail", amount: 72000 },
      { item: "Clue design, ARG build, in-app fragment module", amount: 46000 },
      { item: "Field ops — placement crews, 10 markets, 3 waves", amount: 52000 },
      { item: "Anonymous account content production", amount: 28000 },
      { item: "Live tracking map + moderation", amount: 19000 },
      { item: "Location clearance and safety marshals", amount: 15000 },
      { item: "PR", amount: 8000 },
    ],
    total: 240000,
    risk:
      "Crowd safety at stash sites is the real exposure — every location needs clearance and a marshal. Do not hide anything anywhere people will damage property to reach it.",
  },
  {
    id: "claw",
    number: "05",
    name: "THE CLAW",
    hook: "A real claw machine on Venice Beach. Played from your couch in Ohio. Everyone watches you miss.",
    logline:
      "Three physical claw machines packed with sealed product and visible grails, installed in public. You do not need to be there — you queue from the app, take control of the actual claw over a live feed, and the whole internet watches your attempt in real time.",
    image: "/images/crownrips/claw.jpg",
    imageAlt:
      "A lone arcade claw machine on a beach boardwalk at night packed with foil card packs, chrome claw descending, red neon on the sand",
    scale: "AMPLIFIER",
    format: "Remote-play installation, 3 markets",
    window: "21 days per market",
    markets: "Venice Beach, Las Vegas, NYC",
    mechanic: [
      "Three machines sited in public — boardwalk, strip, sidewalk — not in a warehouse. Each stocked with sealed product and a visible top-tier grail at the back.",
      "Queue from anywhere in the US. Your turn is a 45-second live control window over a low-latency feed.",
      "The stream is always on and the queue is public — the anticipation of watching strangers fail is the content.",
      "Passersby play in person for free. The in-person crowd is the point: they are live witnesses that the machine, the product and the wins are real, and they appear in every frame of the stream.",
      "An automatic clip engine cuts every win and every near-miss for immediate distribution.",
    ],
    why:
      "Remote-play claw is a solved problem — Toreba, Clawee, Claw Toys and Claw Plus have all been running real machines under live remote control for years, which means we license a proven stack rather than engineer one. The novelty is not the remote control, it is the address. Every existing operator hides their machines in a climate-controlled warehouse; we put ours on a boardwalk. That gets us the one thing a warehouse cannot produce — a physical crowd standing around the machine, which is itself the proof that the machine is real. It is also the cheapest way on this list to manufacture the specific feeling the product sells: the near-miss.",
    earned:
      "Highest content-per-dollar of the seven. A permanent unmanned set producing streamable moments around the clock. Failure is as watchable as success, which means the content engine never runs dry.",
    proof: {
      claim:
        "Remote-controlled claw is commercially proven at scale — Toreba has run live remote machines with international prize fulfilment for years, and Clawpara launched Claw Plus on March 1, 2026 for worldwide remote operation of licensed-IP machines. The control stack is licensable, not experimental.",
      source: "Toreba service documentation; Clawpara / Claw Plus launch, March 2026",
    },
    build: [
      "Licensed white-label remote-claw platform — control loop, queue, session management, fulfilment",
      "3× machines in hardened outdoor enclosures — weather sealing, climate control, anti-tamper",
      "Hardwired fibre with redundant failover at each site (never cellular)",
      "Published claw-strength calibration, fixed for the run and independently verified",
      "Low-latency multi-angle streaming and automated highlight clip engine",
    ],
    budget: [
      { item: "Remote-claw platform licence + white-label integration", amount: 34000 },
      { item: "3× machines — hardened outdoor enclosure, climate seal, anti-tamper", amount: 52000 },
      { item: "Site connectivity — fibre install and redundant failover, 3 sites", amount: 28000 },
      { item: "Placement — 3 markets, 21 days each (permits, siting, power)", amount: 45000 },
      { item: "Prize inventory", amount: 30000 },
      { item: "On-site staffing, restock and security", amount: 22000 },
      { item: "Content capture and clip engine", amount: 12000 },
      { item: "PR", amount: 5000 },
    ],
    total: 228000,
    risk:
      "This is the one concept here where the mechanic argues with the strategy. Claw machines are notorious for adjustable claw strength, and rigging accusations are the single most common complaint levelled at every online claw platform — so a stunt built on 'the pull is real' is picking the one prize format the audience already assumes is fixed. It is survivable, but only if we publish the claw calibration up front, fix it for the full run, and let the in-person crowd verify it against the stream. If that commitment is not on the table, this is the wrong concept to run. Secondary: latency is the whole experience, so every site needs hardwired fibre, never cellular.",
  },
  {
    id: "national",
    number: "06",
    name: "THE FLOOR",
    hook: "Do not buy a booth at the biggest card show in America. Build the thing everyone leaves talking about.",
    logline:
      "At the National Sports Collectors Convention — 125,000 to 150,000 people, five days, half a million square feet — install a soundproofed glass rip room in the middle of the floor. Anyone can enter alone. Every pull inside is broadcast to a jumbotron the whole hall can see.",
    image: "/images/crownrips/national.jpg",
    imageAlt:
      "High wide view of a vast convention hall packed with collectors, one glowing red-lit glass booth in the center surrounded by a crowd",
    scale: "HERO",
    format: "Convention floor takeover",
    window: "5 days — July 29 to Aug 2",
    markets: "Rosemont, IL",
    mechanic: [
      "A sealed glass room on the show floor. One person at a time. Silent inside, cameras on all four walls.",
      "You rip in private. Your face and your pull go up on an exterior tower LED at full scale, live.",
      "The hall stops for big pulls. That reaction — hundreds of strangers turning at once — is the footage.",
      "Sign-ups require the app, so floor traffic converts directly into installs.",
      "Six creator appearances staggered across the five days keep the queue and the stream loaded.",
    ],
    why:
      "This is where the audience already physically is, at the exact moment they are most primed to buy. Every other brand on that floor is renting a table. A structure that hijacks the attention of the entire hall costs less than a national media buy and reaches a hundred percent qualified audience — nobody at the National needs to be told what a chase card is.",
    earned:
      "Hobby press covers the National exhaustively and is actively looking for the show's talking point. The jumbotron reaction shot is designed to be filmed by attendees rather than by us — the crowd distributes it.",
    proof: {
      claim:
        "The 46th National runs July 29–Aug 2, 2026 at the Donald E. Stephens Convention Center with 600+ dealers across 500,000 sq ft — the largest in the show's 46-year history.",
      source: "nsccshow.com and Athlon Sports, 2026",
    },
    build: [
      "Soundproofed glass rip room with 4-wall camera rig",
      "Premium island floor space and convention fees",
      "Exterior LED tower with live switching",
      "On-floor prize pool and inventory",
      "Creator appearance schedule across five days",
    ],
    budget: [
      { item: "Rip room build — soundproofing, glass, camera rig, LED", amount: 98000 },
      { item: "Premium island floor space + convention fees", amount: 55000 },
      { item: "Exterior LED tower and AV", amount: 32000 },
      { item: "On-floor prize and inventory pool", amount: 40000 },
      { item: "Creator appearances (6 across 5 days)", amount: 28000 },
      { item: "Staffing, travel, freight, install and strike", amount: 17000 },
      { item: "Content and PR", amount: 5000 },
    ],
    total: 275000,
    risk:
      "Hard immovable date. Premium island space at the National sells out far in advance — this concept has the earliest commitment deadline of the seven.",
  },
  {
    id: "oddsboard",
    number: "07",
    name: "THE ODDS BOARD",
    hook: "Put the real odds on the biggest screen in the world and leave them there.",
    logline:
      "A Times Square spectacular running one thing for fourteen days: live pull data. Real odds, real hit rate, every grail pulled anywhere in America the moment it happens, with the winner's city. No campaign line, no product shot. Just the numbers, in public, unedited.",
    image: "/images/crownrips/oddsboard.jpg",
    imageAlt:
      "A towering LED billboard in a neon city canyon at night showing an abstract grid of red data points, reflected in wet streets",
    scale: "AMPLIFIER",
    format: "Live-data OOH spectacular",
    window: "14 days",
    markets: "Times Square + national digital mirror",
    mechanic: [
      "One screen. One feed. Live odds and live results, updating continuously, with no advertising layer on top.",
      "Every grail pull nationwide interrupts the board: card, time, city. Then back to the numbers.",
      "A companion page mirrors the exact same feed, so anyone can audit the board against their own history.",
      "Winners get notified that they were on the screen in Times Square — those reaction videos are the campaign.",
      "The board keeps running whether the numbers flatter us or not. That is the entire point.",
    ],
    why:
      "Nobody in this category has ever published live odds, because live odds are only an asset if you are confident in them. Doing it turns a compliance-adjacent liability into the loudest possible statement of confidence, and it is the cheapest concept here to pair with a flagship. It also makes every other activation more credible by association — the vault proves it physically, the board proves it numerically.",
    earned:
      "Ad and marketing trades cover radical-transparency OOH reliably. The winner-notification reaction loop generates a continuous drip of organic content for the full fourteen days at no incremental cost.",
    proof: {
      claim:
        "Sweeps operators are already differentiating on prize-redemption transparency as a competitive lever — this takes the same instinct significantly further than anyone currently goes.",
      source: "SCCG Management, 2026 US sweepstakes market analysis",
    },
    build: [
      "14-day Times Square spectacular placement",
      "Live data pipeline from the pack engine to the board render layer",
      "Motion system designed for legibility at distance and in daylight",
      "Public companion audit page",
      "Winner notification and reaction capture loop",
    ],
    budget: [
      { item: "Times Square LED buy — 14 days, spectacular", amount: 92000 },
      { item: "Live data pipeline + render engine build", amount: 38000 },
      { item: "Creative production and motion system", amount: 24000 },
      { item: "Companion transparency page", amount: 16000 },
      { item: "On-site reaction capture", amount: 9000 },
      { item: "PR and press office", amount: 6000 },
    ],
    total: 185000,
    risk:
      "This only works if the numbers can stand in public, unedited, for fourteen straight days. That is a business decision before it is a creative one.",
  },
  {
    id: "chase",
    number: "08",
    name: "THE CHASE",
    hook: "New York’s rarest card is doing 30 in a bus lane.",
    logline:
      "Twenty-five cab-topper creatives, structured as a real card set with real rarity tiers. Each carries its own QR pointing at a web randomizer that rolls the odds on the spot — no app, no install, no account. Scan a taxi on a Manhattan sidewalk and you know inside two seconds whether you hit. Complete all twenty-five and you take The Chain.",
    image: "/images/crownrips/chase.jpg",
    imageAlt:
      "Rain-slicked Manhattan avenue at night, a line of yellow taxis with glowing red rooftop displays, people on the sidewalk running with phones raised",
    scale: "HERO",
    format: "Geo-fenced DOOH game across NYC taxi network",
    window: "3 weeks",
    markets: "Five boroughs",
    mechanic: [
      "The 25 creatives are a set list, not a rotation. Each carries its own QR resolving to its own URL on a web randomizer, and each has its own rarity — enforced in the media schedule, not in software. Commons run everywhere all flight; the Secret Rare runs in one neighbourhood for three short windows total.",
      "Scan and the randomizer validates before it rolls: is this creative scheduled live in this zone at this minute, is the device physically here, has it already claimed this card. Only then does it spin the odds for that card’s tier.",
      "The result lands on the street, in the browser, in about two seconds. No app, no install, no account to play — the download is the reward for winning, not the toll for entering.",
      "The 8-second flip is the difficulty setting. A single screen face cycles 450 slots an hour, so you cannot plan a scan — you react to one, from a moving vehicle, in traffic.",
      "A published drop calendar tells you the zone and the window but never the cab. You go to Dumbo at 7pm knowing the Ultra Rare is live somewhere in it, then you hunt.",
      "The Secret Rare windows are locked in the media schedule weeks out but announced to fans 60 minutes ahead by push. Media ops always knows; the city never does.",
      "Complete all 25 and the set unlocks the grail from concept 03 — the same chain, the same one-of-one, claimed by a New Yorker who scanned a taxi.",
    ],
    why:
      "The audience already thinks in rarity tiers — set completion is the exact behaviour Pokémon has trained into them for thirty years, and it is a far stronger engine than a sweepstakes entry. Mapping 25 creatives onto a set list turns a media buy into a collection mechanic people voluntarily grind. Putting the roll on web rather than behind an install is what makes it work at street level: nobody standing in the rain on Lafayette is downloading an app to find out whether they hit, but everybody will scan a code. And the scheduling constraint is the gift here, not the limitation — because the flight is locked weeks out, the randomizer knows exactly which creative was live in which zone at which minute, which is the only reason a fixed QR can be trusted at all. The taxi then does what no static board can: it moves, so the card genuinely has to be chased.",
    earned:
      "The footage is people running down a Manhattan sidewalk after a taxi, which is a scene rather than an ad. Drop windows create scheduled, repeatable, filmable convergences in a named neighbourhood — three weeks of appointment moments instead of one launch beat. Set-completion progress is inherently postable, so the collection does distribution for us.",
    proof: {
      claim:
        "At $10 CPM the 100M daily impression ceiling represents roughly $1,000,000 of inventory per day, so even a heavy three-week buy runs at a low single-digit percentage of network capacity — leaving deep headroom to concentrate delivery into short, high-intensity drop windows. And because every roll resolves through one server-side randomizer, that same feed is publishable: it is the exact data source concept 07 puts on the board.",
      source: "Derived from the quoted $10 CPM and 100M/day network capacity",
    },
    setList: [
      { tier: "COMMON", count: "13", behaviour: "Always live, five boroughs, full flight" },
      { tier: "RARE", count: "7", behaviour: "Dayparted by borough, schedule published weekly" },
      { tier: "ULTRA RARE", count: "4", behaviour: "90-minute windows, one neighbourhood, announced 24h ahead" },
      { tier: "SECRET RARE", count: "1", behaviour: "Three windows all flight, announced 60 minutes ahead" },
    ],
    media: {
      headline: "Media — billed separately",
      rate: "$10 CPM",
      note:
        "Cab-topper media is additive and billed at $10 CPM. Weight is fully dialable — the mechanic works at any of these levels, it only changes how saturated the city feels.",
      rows: [
        { label: "Light", impressions: "12.5M impressions", spend: "$125,000" },
        { label: "Recommended", impressions: "25M impressions", spend: "$250,000", tag: "RECOMMENDED" },
        { label: "Heavy", impressions: "37.5M impressions", spend: "$375,000" },
      ],
    },
    build: [
      "25 creative executions designed as a set list, built to read and scan inside 8 seconds at distance",
      "Rarity architecture and the geo + daypart media schedule that enforces it",
      "25 QR destinations mapped to the set list, plus the machine-readable flight schedule the randomizer validates every scan against",
      "Drop calendar design and the reveal cadence for Ultra and Secret Rare windows",
      "Drop-night content capture across three surge windows",
    ],
    clientSide: [
      "The web randomizer — the endpoint each QR resolves to, holding the odds table and rolling the outcome server-side",
      "Three-factor validation at that endpoint, executed before the roll — device geo inside the live zone, timestamp inside the scheduled window, one claim per card per device",
      "Result page and set progress — what you hit, what is still missing, when the next window opens",
      "Drop calendar surface and 60-minute push alerts for Secret Rare windows",
      "Prize pool and fulfilment — instant digital packs plus physical tier rewards",
    ],
    budget: [
      { item: "Creative production — 25 set designs, 8-second motion builds", amount: 10000 },
      { item: "Drop-night content capture (3 nights)", amount: 18000 },
    ],
    total: 28000,
    totalLabel: "CCD production — excl. media",
    risk:
      "Moving the roll to a web randomizer fixes the leak that fixed QR codes would otherwise create: a posted code now resolves to an endpoint that checks geo and schedule before it rolls, so a couch scan in Ohio returns nothing rather than a prize. That makes the randomizer the single point of failure for the entire game. If it is slow, down, or permissive during a Secret Rare window, the concept fails in public with a crowd watching — so it needs load headroom sized for a surge rather than for average traffic, and should be load-tested against peak before media is committed. Prize determination sits inside the CrownRips stack, governed by the same logic as sweeps compliance, so the odds table and the roll live alongside the existing prize infrastructure rather than beside the media. Secondary: scan rates on DOOH QR are low in absolute terms — judge this on depth of play per participant, not on scans as a proxy for reach.",
  },
];

export type Lane = {
  code: string;
  name: string;
  total: number;
  spend: string;
  picks: string[];
  rationale: string;
  note?: string;
};

export const lanes: Lane[] = [
  {
    code: "LANE A",
    name: "THE FLAGSHIP",
    total: 385000,
    spend: "$385,000",
    picks: ["THE LIVE VAULT"],
    rationale:
      "One idea, executed to award standard, running for thirty continuous days. Highest ceiling and the only concept here that gets a better story the longer it runs.",
  },
  {
    code: "LANE B",
    name: "THE SPREAD",
    total: 468000,
    spend: "$468,000",
    picks: ["THE CLAW", "THE STASH"],
    rationale:
      "Two mechanics across thirteen markets. Lower ceiling than the vault, far wider footprint, and the highest total participation of any combination on this page.",
  },
  {
    code: "LANE C",
    name: "THE FULL SEND",
    total: 495000,
    spend: "$495,000",
    picks: ["THE LIVE VAULT", "THE ODDS BOARD — regional"],
    rationale:
      "The flagship plus numerical proof. The vault proves it physically, the board proves it mathematically, and each makes the other harder to dismiss.",
    note:
      "Odds Board trimmed from the $185K Times Square spectacular to a $110K regional LED package across LA, Chicago and NYC to fit the ceiling.",
  },
];

export const platformIdea = {
  line: "THE PULL IS REAL.",
  body:
    "A digital rip has no wrapper, no weight, and nothing left in your hand afterward — and the community knows it. That absence is the product's only real vulnerability, and it is also the brief. Every concept below does one job: make a digital pull produce a physical, witnessable consequence in the real world.",
};

export const tension = [
  {
    label: "THE PROBLEM",
    title: "Digital rips have no payoff moment.",
    body:
      "The magic of opening a pack is tactile — the foil, the weight, the reveal in your hands. Strip that out and you are left with an animation. Every concept here rebuilds the physical payoff somewhere in the real world.",
  },
  {
    label: "THE OBJECTION",
    title: "The first comment is always 'this is rigged'.",
    body:
      "Any digital pack product inherits a default assumption of dishonesty. You cannot argue a community out of that. You can only show them something they can walk up to, count, and verify themselves.",
  },
  {
    label: "THE OPENING",
    title: "Nobody in sweeps has done anything physical.",
    body:
      "The category competes on bonus size and redemption speed. Its marketing is entirely performance and affiliate. There is no experiential incumbent to displace — the first brand to build something real owns the association outright.",
  },
];

export const facts = [
  { value: "$80–120M", label: "Monthly Pokémon GMV on Whatnot", source: "Underpriced, 2026" },
  { value: "125–150K", label: "Projected attendance, The National 2026", source: "Sports Collectors Digest" },
  { value: "$16.49M", label: "Pikachu Illustrator sale, Feb 2026", source: "Goldin Auctions" },
  { value: "40+", label: "US states Crown Coins operates in", source: "Operator disclosures, 2026" },
];

export const sources = [
  { title: "2026 Mid-Year Collectibles Report", publisher: "Athlon Sports", url: "https://athlonsports.com/collectibles/2026-mid-year-collectibles-report-sports-cards-tcg" },
  { title: "Selling Pokémon Cards on Whatnot — 2026 GMV data", publisher: "Underpriced", url: "https://www.underpriced.app/blog/selling-pokemon-cards-on-whatnot-guide-2026" },
  { title: "The National Sports Collectors Convention 2026", publisher: "NSCC", url: "https://www.nsccshow.com/what-to-expect" },
  { title: "What's New at the 46th National", publisher: "Athlon Sports", url: "https://athlonsports.com/collectibles/national-sports-collectors-convention-2026-whats-new" },
  { title: "Drone Show Cost in 2026 — US Pricing Guide", publisher: "Open Sky", url: "https://www.openskypro.com/blog/drone-show-cost/" },
  { title: "Drone Show Cost 2026 Pricing Guide", publisher: "Creative Skies", url: "https://www.creativeskies.com/blog/drone-show-cost-2026-pricing-guide/" },
  { title: "Custom Vending Machine Cost — 2026 Pricing", publisher: "VMFS USA", url: "https://vmfsusa.com/blogs/business/custom-vending-machine-cost-complete-pricing-guide" },
  { title: "Inside the 2026 US Sweepstakes Casino Surge", publisher: "SCCG Management", url: "https://sccgmanagement.com/sccg-news/2026/05/22/inside-the-2026-us-sweepstakes-casino-surge-how-operators-are-adapting-to-a-contracting-state-map/" },
  { title: "Rare Pokémon Cards Make Auction History", publisher: "ComicBook.com", url: "https://comicbook.com/collectibles/news/rare-pokemon-cards-make-auction-history-with-record-sales-and-first-time-appearances/" },
  { title: "Experiential Event Activations", publisher: "National Experiential", url: "https://www.nationalexperiential.com/experiential-event-activations" },
  { title: "Cannes Lions 2025 — Brand Experience & Activation winners", publisher: "Contagious", url: "https://www.contagious.com/en/article/news-and-views/cannes-lions-2025-brand-experience-activation-winners" },
  { title: "The Real Cost of Mobile Marketing Tours 2026", publisher: "Premier Staff", url: "https://premierstaff.com/blog/mobile-marketing-tours-2/" },
  { title: "Toreba — remote-controlled live claw machine service", publisher: "CyberStep", url: "https://www.toreba.net/en/service" },
  { title: "Claw Plus launches one-stop online claw machine platform", publisher: "Clawpara, March 2026", url: "https://markets.financialcontent.com/woonsocketcall/article/getnews-2026-3-4-claw-plus-introduces-one-stop-online-claw-machine-platform-featuring-popular-character-ip-prizes" },
];
