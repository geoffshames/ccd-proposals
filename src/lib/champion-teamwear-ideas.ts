/* ------------------------------------------------------------------ */
/* Champion Teamwear — Growth Ideas                                    */
/* Six ways to sign up more youth teams, clubs and schools.            */
/* Strategy document. No pricing. Prepared by Crowd Control Digital.   */
/* ------------------------------------------------------------------ */

export type NavItem = { id: string; label: string };

export type Tension = { label: string; title: string; body: string };

export type Fact = { value: string; label: string; source: string };

export type KnownSignal = { code: string; title: string; body: string };

export type IdeaScale = "FLAGSHIP" | "ENGINE" | "PLAY";

export type Idea = {
  id: string;
  number: string;
  name: string;
  scale: IdeaScale;
  hook: string;
  logline: string;
  image: string;
  imageAlt: string;
  format: string;
  window: string;
  wins: string;
  signal: string;
  mechanic: readonly string[];
  why: string;
  compounding: string;
  proof: { claim: string; source: string };
  build: readonly string[];
  clientSide: readonly string[];
  watch: string;
};

export type Play = {
  code: string;
  name: string;
  horizon: string;
  picks: readonly string[];
  rationale: string;
  tradeoff: string;
};

export type Source = { title: string; publisher: string; url: string };

export const ideasMeta = {
  slug: "champion-teamwear-ideas",
  client: "Champion Teamwear",
  preparedBy: "Crowd Control Digital",
  document: "Growth ideas",
  issued: "September 13, 2026",
  classification: "Strategy document",
  contact: "geoff@crowdcontroldigital.com",
} as const;

export const ideasNav: readonly NavItem[] = [
  { id: "premise", label: "Premise" },
  { id: "ideas", label: "Ideas" },
  { id: "sequence", label: "Sequence" },
  { id: "sources", label: "Sources" },
  { id: "contact", label: "Contact" },
];

export const marqueeWords = [
  "Coach",
  "Athletic director",
  "Booster club",
  "Parent",
  "Athlete",
  "One decision",
] as const;

/* ------------------------------------------------------------------ */
/* 01 — The premise                                                    */
/* ------------------------------------------------------------------ */

export const premise = {
  eyebrow: "The premise",
  note: "Two buyers / one order",
  body:
    "Signing up a team is never one decision. Someone approves the order, and someone else has to want to wear it. The dealer who wins is the one who makes both easy at the same time, in the week the decision actually gets made.",
} as const;

export const tensions: readonly Tension[] = [
  {
    label: "The approver",
    title: "Coaches, ADs and boosters buy certainty.",
    body:
      "Price, fit, game-date delivery, reorders and a person who answers the phone. The incumbent dealer keeps the order by default unless switching becomes obviously safer and easier.",
  },
  {
    label: "The athlete",
    title: "Players buy identity.",
    body:
      "The reveal, the look, the pride of the roster and what the rival school is wearing. Athletes rarely sign the PO, but they decide what the coach hears in the hallway for a month.",
  },
  {
    label: "The moment",
    title: "The order goes to whoever removes the most friction.",
    body:
      "Tryouts end, rosters lock, and the order has to ship in time for game one. The brand that shows up that week with the look already built and the deadline already handled wins.",
  },
];

export const facts: readonly Fact[] = [
  {
    value: "8.26M",
    label: "High-school athletes in 2024-25, an all-time record",
    source: "NFHS participation survey",
  },
  {
    value: "$1,016",
    label: "Average family spend per child on their primary sport, up 46% since 2019",
    source: "Aspen Institute Project Play",
  },
  {
    value: "100K+",
    label: "Team shops the category leader says it opened in the last year",
    source: "BSN SPORTS",
  },
  {
    value: "492,799",
    label: "Girls' volleyball participants, the second-largest girls' sport",
    source: "NFHS 2024-25",
  },
];

export const known = {
  eyebrow: "What we already know",
  note: "From the July diagnostic",
  signals: [
    {
      code: "01",
      title: "Cheer, dance and gymnastics are the inherited core.",
      body: "Traditional team sports are the expansion ambition. Growth planning should protect the core and pick a small number of beachheads.",
    },
    {
      code: "02",
      title: "Service and rep relationships are real equity.",
      body: "Customers connect good experiences to a specific person. That equity lives in individuals today, not in a system the brand can scale.",
    },
    {
      code: "03",
      title: "The owned channels are underbuilt.",
      body: "Teamwear conversation is led by price and turnaround. Athlete aspiration, reveal culture and youth-facing storytelling are barely visible.",
    },
    {
      code: "04",
      title: "The commerce experience is mid-transition.",
      body: "Legacy hosts, a new commerce stack and a catalog rebuild in flight. Anything we launch has to be modular enough to survive the migration.",
    },
  ] satisfies readonly KnownSignal[],
} as const;

/* ------------------------------------------------------------------ */
/* 02 — The ideas                                                      */
/* ------------------------------------------------------------------ */

export const ideasIntro = {
  eyebrow: "The menu",
  note: "Six ideas / greenlight one at a time",
  body:
    "Each idea stands alone and can be greenlit independently. Every one is built to win the approver and the athlete together, and every one produces a number we can read at the end of a season. Scope and investment are quoted separately once the ideas with legs are chosen.",
} as const;

export const ideas: readonly Idea[] = [
  {
    id: "reveal",
    number: "01",
    name: "The Reveal Engine",
    scale: "FLAGSHIP",
    hook: "Every uniform delivery becomes a moment the whole school watches.",
    logline:
      "Every team order ships with a Reveal Kit: a templated reveal-video format, countdown assets, a first-look gallery and a share flow, so the team posts the reveal the day the box lands. Champion becomes the brand that ships the moment, not just the box, and every reveal is seen by the rival coaches, parents and athletes who approve the next order.",
    image: "/champion-ideas/reveal.jpg",
    imageAlt:
      "A dark gymnasium with a spotlight on a rack of new red and black uniforms as a drape is pulled away, athletes filming on their phones",
    format: "Product-attached content system",
    window: "Six to eight weeks to build, then every order",
    wins: "Athletes, then parents, then rival coaches",
    signal: "Reveals posted per 100 orders / inquiries traced to reveals",
    mechanic: [
      "Design the Champion reveal format: a fifteen-second template built around the drape pull, the slow detail pass and the team reaction, plus a countdown sticker set and a pre-reveal post for the team account.",
      "Add a Reveal Kit to every team order. A QR insert in the box opens a mobile page with the template, cleared audio and a one-tap upload.",
      "Feature the best reveals every week on Champion's own channels and in the coach newsletter. Programs compete for Reveal of the Week.",
      "Retarget everyone who watched a reveal inside that school's radius with a simple message: your program's turn. The destination is the Look Builder.",
      "Every reveal in a territory triggers an outreach list for the rep: the neighboring programs in the same conference.",
    ],
    why:
      "The category talks to coaches about price and turnaround. Almost nobody talks to the kid. Reveal culture already exists, and the dealer disappears the moment the box ships. Owning the reveal turns the emotional peak of the order into a distribution event, and puts Champion's work in front of exactly the people who approve the next order.",
    compounding:
      "Every reveal is a locally targeted ad Champion did not pay for, delivered by the most trusted source in the district: the team itself.",
    proof: {
      claim:
        "Uniform reveals are an established content genre. TikTok maintains dedicated discover pages for uniform reveal ideas and jersey reveal ideas, and NFL clubs stage uniform reveals for high-school programs as community activations.",
      source: "TikTok Discover / Las Vegas Raiders",
    },
    build: [
      "Reveal format and template library",
      "QR box insert and mobile kit page",
      "UGC rights, consent and moderation flow",
      "Weekly feature slot across social and CRM",
      "Geo-retargeting layer and rep alerts",
    ],
    clientSide: [
      "Insert added to the pack-out process",
      "Order data feeds the kit trigger",
      "Rep notification and follow-up",
    ],
    watch:
      "Minors on camera. The kit needs a school or club-side consent flow and a no-faces template option, and reveal timing can never outrun production dates.",
  },
  {
    id: "builder",
    number: "02",
    name: "Build My Look in 60 Seconds",
    scale: "ENGINE",
    hook: "Upload a logo. Pick your colors. See your team in Champion before you talk to anyone.",
    logline:
      "Relaunch the Coach's Assistant as an AI-powered look builder. A coach drops in a logo and school colors and gets instant, photoreal mockups on real Champion garments across every sport they run, then turns any look into a live team store or a rep-ready quote. The tool is the top of the funnel, the demo and the lead form at once.",
    image: "/champion-ideas/builder.jpg",
    imageAlt:
      "A coach's hands over a tablet on a locker-room bench showing a glowing uniform mockup beside a real red and black jersey",
    format: "Web tool and lead engine on the new commerce stack",
    window: "Prototype in four to six weeks, ships with the platform",
    wins: "Coaches, club directors, athletic directors",
    signal: "Looks built / stores opened / quotes requested",
    mechanic: [
      "The coach lands on one page: upload a logo, pick two colors, choose the sports the program runs.",
      "A generative mockup engine renders the school's look across a curated set of Champion garments in seconds: jersey, warm-up, hoodie, cheer shell. Photoreal, on-body, share-ready.",
      "Every look is savable and shareable. Send to my AD. Send to the boosters. Post to the team. Each share captures the next contact in the program.",
      "Two exits: open my team store for self-serve spirit wear, or get a rep quote for custom uniforms. The tool routes by order type.",
      "Looks become CRM. An abandoned build triggers a rep follow-up with the coach's own mockups attached.",
    ],
    why:
      "The order starts with a mental image, and today that image gets made by whoever the coach already knows. Putting the picture in the coach's hands in the first minute, in Champion garments, in their colors, collapses the sales cycle and gives the technology mandate a customer-facing proof point.",
    compounding:
      "Every share is a warm introduction to the next decision-maker in the program, with the product already visualized.",
    proof: {
      claim:
        "Merchants that add 3D and visual product content see conversion lifts of up to 94% on Shopify, and 80% of shoppers in 3D Cloud's 2025 study said visual models increased their purchase confidence.",
      source: "Shopify via DesignRush / 3D Cloud",
    },
    build: [
      "Look-builder experience and generative render pipeline",
      "Garment template library and decoration rules",
      "Share and capture flows",
      "CRM and rep routing",
      "Integration spec for the new commerce stack",
    ],
    clientSide: [
      "Product templates and decoration constraints",
      "Pricing logic for quotes",
      "Rep territory mapping",
    ],
    watch:
      "Render accuracy. Mockups have to match what production can actually decorate, with guardrails on colors, placements and licensed-logo use.",
  },
  {
    id: "booster",
    number: "03",
    name: "The Booster Engine",
    scale: "ENGINE",
    hook: "Turn every team store into the program's easiest fundraiser.",
    logline:
      "Reposition the Champion team store as a fundraising engine. The program sets a give-back percentage, spirit wear sells to parents, grandparents and fans all year, and the check goes back to the team. Fundraising is the loudest pain in youth and school sports. Make the athletic director and the booster president the people who look good for choosing Champion.",
    image: "/champion-ideas/booster.jpg",
    imageAlt:
      "Stacks of red and black spirit-wear hoodies on a folding table under stadium bleachers, a volunteer handing one to a fan",
    format: "Program, positioning and CRM",
    window: "Six weeks to launch, then seasonal pushes",
    wins: "Athletic directors, booster clubs, club directors, parents",
    signal: "Stores opened / give-back paid out / reorder rate",
    mechanic: [
      "Add a simple give-back setting to every team store, plus a live raised-so-far counter the booster club can share.",
      "Launch Fund the Season: a turnkey kit with pre-built spirit-wear collections, a QR poster for the gym, a parent email and text template and a season-opener push.",
      "Publish the check. Every payout becomes a story for social and the coach newsletter: the program, the photo, the amount.",
      "Seasonal drops for homecoming, senior night, playoffs and nationals refresh the store and re-trigger the parent list.",
      "Route the booster relationship into the uniform sale. A program that raised money with Champion is the warmest lead for its next uniform order.",
    ],
    why:
      "Coaches choose vendors; boosters fund them. Today the fundraising story belongs to competitors. SquadLocker markets a 5, 10 or 15% fundraising markup and BSN claims more than 100,000 team shops opened in a year. Champion has the brand and the product to win this, but fundraising has to be the front door, not a footnote in the webtools.",
    compounding:
      "A booster president who raised real money with a Champion store tells every other booster president in the district.",
    proof: {
      claim:
        "Family spending on youth sports has risen 46% since 2019 to $1,016 per child on the primary sport alone. Programs and parents are actively looking for ways to offset the cost of a season.",
      source: "Aspen Institute Project Play, 2025",
    },
    build: [
      "Give-back logic and the raised-so-far counter",
      "Fund the Season kit",
      "Payout storytelling system",
      "Seasonal drop calendar",
      "Booster and parent CRM segments",
    ],
    clientSide: [
      "Payout operations and accounting",
      "Store margin rules",
      "Spirit-wear assortment",
    ],
    watch:
      "Margin math. The give-back has to come from price architecture, not the base, and payout speed has to beat competitors or the story dies.",
  },
  {
    id: "calendar",
    number: "04",
    name: "Own the Season Calendar",
    scale: "ENGINE",
    hook: "Be in the coach's inbox the week before the decision. Every season, every sport.",
    logline:
      "Build the always-on CRM engine around the real ordering calendar: tryouts, camps, sizing, order deadlines, reveal week, playoffs, nationals. Cheer, dance and gymnastics first, then each traditional sport. The lead magnets are things coaches already want: the season ordering calendar, the free sixty-day sizing samples, design drops. Champion becomes the brand that remembers the deadline for them.",
    image: "/champion-ideas/calendar.jpg",
    imageAlt:
      "Sizing sample jerseys hung in size order with blank tags beside a wall calendar with red circled dates",
    format: "Email and SMS lifecycle plus content calendar",
    window: "Live in thirty days, compounds every season",
    wins: "Coaches, club directors, athletic directors, boosters",
    signal: "List growth / deadline-driven quote requests / reorder rate",
    mechanic: [
      "Map the ordering calendar per sport and per buyer role: when tryouts end, when rosters lock, when the order has to ship to make game one.",
      "Launch two lead magnets: the Season Ordering Calendar in print and digital, and the sixty-day sizing samples the business already offers, both captured through the Look Builder and the rep locator.",
      "Build the lifecycle: new-coach welcome, roster-lock reminder, reorder nudge when last season's order ages, and a your-samples-are-waiting sequence.",
      "Ship a monthly coach newsletter with one design drop, one program story and one deadline.",
      "Feed every send to the reps so the follow-up call lands the day the email does.",
    ],
    why:
      "The July diagnostic found the owned channels underbuilt and the digital experience fragmented. In a category where a coach buys once or twice a year, the brand that shows up in the right week wins the order, and CRM is the only channel that can do that for every sport at once.",
    compounding:
      "A coach who forwards the ordering calendar to a colleague has just recruited a lead for free.",
    proof: {
      claim:
        "High-school athletics reached a record 8,260,891 participants in 2024-25. The buyer base is growing and turning over every year as coaches, seniors and programs change.",
      source: "NFHS 2024-25 participation survey",
    },
    build: [
      "Calendar mapping by sport and role",
      "Lead magnets and capture points",
      "Email and SMS flows with segmentation",
      "Monthly newsletter system",
      "Rep-alert integration",
    ],
    clientSide: [
      "Customer and order history export",
      "Rep territories",
      "Product and deadline data",
    ],
    watch:
      "List hygiene and consent. School email domains filter aggressively, and SMS needs explicit opt-in and a real reason to text.",
  },
  {
    id: "beachhead",
    number: "05",
    name: "The Beachhead Play",
    scale: "PLAY",
    hook: "Win one traditional sport completely before trying to win them all.",
    logline:
      "Champion's inherited core is cheer, dance and gymnastics; the ambition is traditional team sports. Instead of spreading across every sport, pick one beachhead where the schools, the parents and the culture already overlap, girls' volleyball, and run the full playbook there for one season inside a small set of states: reveal, look builder, booster stores, calendar and a targeted paid push.",
    image: "/champion-ideas/beachhead.jpg",
    imageAlt:
      "A high-school volleyball player in a black jersey with a red number rising at the net under gym lights",
    format: "Focused season campaign",
    window: "One season, club spring through high-school fall",
    wins: "Volleyball coaches, club directors, players, parents",
    signal: "Programs signed in the beachhead states versus control",
    mechanic: [
      "Choose three states with dense club volleyball and heavy high-school participation. Texas, California and Ohio lead the country in total athletes.",
      "Build a volleyball capsule: sublimated jerseys, warm-ups and the practice and travel pieces the sport actually wears, pre-loaded in the Look Builder.",
      "Run paid media to coaches and parents in those states, timed to club tryouts and high-school preseason. The creative is reveal content from pilot teams.",
      "Sponsor two or three regional club tournaments with a sizing and reveal presence that generates content and store sign-ups.",
      "Read the signal at season end: cost per program signed, reorder intent and share of the sport's conversation. Then choose the second sport.",
    ],
    why:
      "Volleyball is the second-largest girls' sport, shares gyms, coaches and parents with the cheer and dance core, and is visually driven: sublimation, matching warm-ups, team pride. Those are the strengths Champion already has. Winning it proves the traditional-sports thesis with real numbers instead of assumptions.",
    compounding:
      "Volleyball clubs travel. A team in a Champion kit at a regional tournament is seen by every other club in the bracket.",
    proof: {
      claim:
        "Girls' volleyball had 492,799 high-school participants in 2024-25, second among girls' sports. Texas (879,403), California (852,575) and Ohio (335,808) lead all states in total participation.",
      source: "NFHS 2024-25 participation survey",
    },
    build: [
      "Beachhead selection model",
      "Sport capsule and pre-built mockups",
      "Paid media plan and creative",
      "Tournament activation plan",
      "Measurement framework",
    ],
    clientSide: [
      "Capsule availability and turnaround",
      "Rep coverage in the chosen states",
      "Tournament budget",
    ],
    watch:
      "Girls' flag football grew 60% last year and nearly 1,000 schools added it. Score it as the alternate beachhead before locking volleyball.",
  },
  {
    id: "schools",
    number: "06",
    name: "Champion Schools",
    scale: "FLAGSHIP",
    hook: "Land in one sport. Expand to the whole building.",
    logline:
      "A whole-school partnership program. One agreement covers every team's uniforms, the spirit store, PE and staff apparel, with a school-wide give-back and a single point of contact. Enter through the sport Champion already wins, then use a Bring Your Rival referral mechanic, where a coach or AD who refers another program earns credit toward the next order, to move district by district.",
    image: "/champion-ideas/schools.jpg",
    imageAlt:
      "A rolling rack holding one matching red and black uniform from every sport in a school hallway of dark lockers",
    format: "Partnership program and referral mechanic",
    window: "Pilot with ten to twenty schools in season one",
    wins: "Athletic directors, principals, district athletics",
    signal: "Single-sport accounts converted to whole-school / referral-sourced programs",
    mechanic: [
      "Define the Champion Schools package: uniforms across sports, a spirit store with give-back, PE and staff gear, guaranteed game-date delivery and one rep.",
      "Start with existing cheer and dance customers. You already trust us for one team; here is the whole-school offer.",
      "Bring Your Rival. Every referral that becomes a program earns store credit for the referring school, with a leaderboard by conference.",
      "Give the AD a visible win: a school-wide reveal day, the school's crest in the design library and a partner page they can point parents to.",
      "Expand by district. Once two schools in a district are in, pitch the district athletics office directly.",
    ],
    why:
      "The audit found service equity that lives in individual reps and relationships. A whole-school program turns that into a system: fewer, larger relationships, higher lifetime value per account and a reason for athletic directors to consolidate vendors. Competitors sell partnership as a multi-brand catalog. Champion can sell one brand, one look, one call.",
    compounding:
      "Rivalry is the best referral channel in high-school sports. Schools notice what the school across town is wearing.",
    proof: {
      claim:
        "There are roughly 24,000 public secondary schools in the United States, and competitors already sell whole-program partnerships: BSN markets multi-brand school partnerships and claims more than 100,000 team shops opened in the last year.",
      source: "NCES Fast Facts / BSN SPORTS",
    },
    build: [
      "Program design and sales narrative",
      "Referral mechanics and leaderboard",
      "Partner page template",
      "District playbook",
      "Scorecard",
    ],
    clientSide: [
      "Contract terms and delivery guarantees",
      "Rep incentive alignment",
      "Capacity planning for multi-sport orders",
    ],
    watch:
      "Capacity. A whole-school program promises game-date certainty across sports, and the site currently warns of longer processing times. Fix that story before selling this one.",
  },
];

/* ------------------------------------------------------------------ */
/* 03 — Sequence                                                       */
/* ------------------------------------------------------------------ */

export const sequenceIntro = {
  eyebrow: "How we would sequence it",
  note: "Three ways to run the next twelve months",
  body:
    "The ideas compound in a particular order. These are the three combinations we would actually recommend, and the trade-off each one makes.",
} as const;

export const plays: readonly Play[] = [
  {
    code: "Play A",
    name: "Quick wins before tryouts",
    horizon: "First ninety days",
    picks: ["04 Own the Season Calendar", "03 The Booster Engine", "01 The Reveal Engine"],
    rationale:
      "Everything here runs on product and channels that already exist. The calendar and the booster stores are live before cheer and dance tryout season, and the Reveal Kit is in every box by the first spring deliveries.",
    tradeoff:
      "Fast signal, mostly inside the inherited core. It proves the system without proving the expansion.",
  },
  {
    code: "Play B",
    name: "The beachhead season",
    horizon: "One full season",
    picks: ["02 Build My Look", "05 The Beachhead Play", "01 The Reveal Engine"],
    rationale:
      "The Look Builder prototype ships first, then the volleyball beachhead runs the whole playbook in three states with reveal content as the creative. By season end there is a real cost per program signed.",
    tradeoff:
      "A bigger build before the first read, but it answers the question leadership actually has: can Champion win a traditional sport?",
  },
  {
    code: "Play C",
    name: "The platform year",
    horizon: "Twelve months",
    picks: ["06 Champion Schools", "02 Build My Look", "04 Own the Season Calendar"],
    rationale:
      "Champion Schools converts existing cheer and dance accounts into whole-school relationships while the Look Builder ships with the new commerce platform and the calendar keeps every account warm between orders.",
    tradeoff:
      "The slowest to show a number and the most dependent on operations, but it is the version that compounds for years.",
  },
];

/* ------------------------------------------------------------------ */
/* 04 — Sources                                                        */
/* ------------------------------------------------------------------ */

export const sources: readonly Source[] = [
  {
    title: "Participation in high school sports hits record high with sizable increase in 2024-25",
    publisher: "NFHS",
    url: "https://nfhs.org/stories/participation-in-high-school-sports-hits-record-high-with-sizable-increase-in-2024-25",
  },
  {
    title: "High school sports participation reaches record 8.3 million athletes as girls' programs drive growth",
    publisher: "Youth Sports Business Report",
    url: "https://youthsportsbusinessreport.com/high-school-sports-participation-reaches-record-8-3-million-athletes-as-girls-programs-drive-growth-via-nfhs/",
  },
  {
    title: "Family spending on youth sports rises 46% over five years",
    publisher: "Aspen Institute Project Play",
    url: "https://projectplay.org/news/2025/2/24/project-play-survey-family-spending-on-youth-sports-rises-46-over-five-years",
  },
  {
    title: "My Team Shop for coaches and players",
    publisher: "BSN SPORTS",
    url: "https://www.bsnsports.com/solutions/team-shop/",
  },
  {
    title: "Fundraising with SquadLocker",
    publisher: "SquadLocker",
    url: "https://www.squadlocker.com/squad-blog/fundraising-with-squadlocker",
  },
  {
    title: "3D product configurators: conversion and returns data",
    publisher: "DesignRush",
    url: "https://www.designrush.com/agency/ecommerce/trends/3d-product-configurators",
  },
  {
    title: "Uniform reveal ideas",
    publisher: "TikTok Discover",
    url: "https://www.tiktok.com/discover/uniform-reveal-ideas",
  },
  {
    title: "Raiders host uniform reveal for Canyon Springs High School",
    publisher: "Las Vegas Raiders",
    url: "https://www.raiders.com/video/watch-raiders-host-uniform-reveal-canyon-springs-high-school-2021",
  },
  {
    title: "Fast facts: educational institutions",
    publisher: "National Center for Education Statistics",
    url: "https://nces.ed.gov/fastfacts/display.asp?id=84",
  },
  {
    title: "Champion Teamwear: online team stores, Coach's Assistant, sizing samples",
    publisher: "championteamwear.com",
    url: "https://championteamwear.com/",
  },
  {
    title: "Custom uniforms, apparel and equipment for club select teams",
    publisher: "BSN SPORTS Club Direct",
    url: "https://www.bsnsports.com/programs/club-direct/",
  },
  {
    title: "Ames Watson takes the helm of Champion's collegiate, licensed and teamwear businesses",
    publisher: "PR Newswire",
    url: "https://www.prnewswire.com/news-releases/ames-watson-takes-the-helm-of-champions-collegiate-licensed-and-teamwear-businesses-following-acquisition-by-authentic-brands-group-302264749.html",
  },
];

/* ------------------------------------------------------------------ */
/* Closing                                                             */
/* ------------------------------------------------------------------ */

export const closing = {
  eyebrow: "Next step",
  body:
    "Tell us which ideas have legs. We will come back with scope, sequencing and a season plan for each one, sized to the catalog work already in motion.",
  primaryLabel: "Pick the ideas with legs",
  primaryHref:
    "mailto:geoff@crowdcontroldigital.com?subject=Champion%20Teamwear%20growth%20ideas&body=Ideas%20we%20want%20to%20explore%3A%20",
  firstSteps: [
    "Rank the six ideas on Monday's call and pick the opening play.",
    "Confirm the ordering calendar for cheer, dance and gymnastics with the sales team.",
    "Decide the beachhead sport: volleyball or flag football.",
    "Scope the chosen ideas alongside the catalog build so both ship on one timeline.",
  ],
} as const;

export const disclaimer =
  "This is a strategy document. Ideas are directional and will be scoped, sequenced and quoted separately once priorities are chosen. All concept imagery is AI-generated for illustration and does not depict an existing program, product or partnership. Third-party brands, platforms and organizations are referenced as market context only and imply no endorsement, license or partnership. Market figures are drawn from the published sources listed on this page.";
