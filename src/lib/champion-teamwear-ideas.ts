/* ------------------------------------------------------------------ */
/* Champion Teamwear — Marketing Ideas                                 */
/* Six ideas for signing up more youth teams, clubs and schools.       */
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

export type Basic = {
  code: string;
  title: string;
  body: string;
  channel: string;
  effort: "Low" | "Medium";
  start: string;
  owner: string;
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
  document: "Marketing ideas",
  issued: "September 13, 2026",
  classification: "Strategy document",
  contact: "geoff@crowdcontroldigital.com",
} as const;

export const ideasNav: readonly NavItem[] = [
  { id: "premise", label: "Premise" },
  { id: "ideas", label: "Ideas" },
  { id: "basics", label: "Basics" },
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
    "Signing up a team is never one decision. A coach, an AD or a booster approves the order, and the players have to actually want to wear it. The dealer that wins is the one that makes both of those easy, in the same week the decision gets made.",
} as const;

export const tensions: readonly Tension[] = [
  {
    label: "The approver",
    title: "Coaches, ADs and boosters buy certainty.",
    body:
      "Price, fit, delivery before the first game, easy reorders, and a person who picks up the phone. The dealer they already use keeps the order by default unless switching is clearly easier and safer.",
  },
  {
    label: "The athlete",
    title: "Players buy identity.",
    body:
      "The reveal, the look, and what the rival school showed up in. Players don't sign the PO, but they decide what the coach hears about for the next month.",
  },
  {
    label: "The moment",
    title: "The window is about two weeks.",
    body:
      "Tryouts end, the roster locks, and the order has to ship in time for game one. Whoever shows up that week with the look already mocked up and the deadline already handled gets the order.",
  },
];

export const facts: readonly Fact[] = [
  {
    value: "8.26M",
    label: "High-school athletes in 2024-25, the most ever",
    source: "NFHS participation survey",
  },
  {
    value: "$1,016",
    label: "What the average family spends per kid on their main sport, up 46% since 2019",
    source: "Aspen Institute Project Play",
  },
  {
    value: "100K+",
    label: "Team shops BSN says it opened last year",
    source: "BSN SPORTS",
  },
  {
    value: "492,799",
    label: "Girls' volleyball players in high school, the second-biggest girls' sport",
    source: "NFHS 2024-25",
  },
];

export const known = {
  eyebrow: "What we already know",
  note: "From the July audit",
  signals: [
    {
      code: "01",
      title: "Cheer, dance and gymnastics are the core you inherited.",
      body: "Traditional team sports are where you want to grow. That means protecting the core while going after a couple of sports properly, instead of all of them at once.",
    },
    {
      code: "02",
      title: "Your reps are the reason customers stay.",
      body: "Almost every good story we found was about a specific person. That's real, but right now it lives with the individual rep instead of in something the brand can scale.",
    },
    {
      code: "03",
      title: "The owned channels are quiet.",
      body: "Most of the conversation around teamwear is about price and turnaround. The stuff the kids care about, the reveal, the look, the pride, is barely there.",
    },
    {
      code: "04",
      title: "The website stays with your team.",
      body: "A new commerce platform is on the way and a catalog rebuild is in flight, and your team owns the site. Everything here is built to plug into it, not to rebuild it.",
    },
  ] satisfies readonly KnownSignal[],
} as const;

/* ------------------------------------------------------------------ */
/* 02 — The ideas                                                      */
/* ------------------------------------------------------------------ */

export const ideasIntro = {
  eyebrow: "The menu",
  note: "Six ideas / pick any one",
  body:
    "Each idea works on its own and can be greenlit on its own. Every one is built to win the coach and the kid at the same time, and every one gives us a number we can look at together at the end of a season. Scope and cost come after you tell us which ones have legs.",
} as const;

export const ideas: readonly Idea[] = [
  {
    id: "reveal",
    number: "01",
    name: "The Reveal Engine",
    scale: "FLAGSHIP",
    hook: "Every uniform delivery becomes a moment the whole school sees.",
    logline:
      "Every team order ships with a reveal kit: a simple video template, countdown assets, a first-look gallery and a share flow, so the team posts its reveal the day the box lands. Champion becomes the brand that's part of the moment instead of a name on the packing slip, and every reveal gets seen by the rival coaches, parents and players who make the next order.",
    image: "/champion-ideas/reveal.jpg",
    imageAlt:
      "A dark gymnasium with a spotlight on a rack of new red and black uniforms as a drape is pulled away, athletes filming on their phones",
    format: "Content kit attached to every order",
    window: "Six to eight weeks to build, then it runs on every order",
    wins: "Players first, then parents, then rival coaches",
    signal: "Reveals posted per 100 orders, and inquiries we can trace back to them",
    mechanic: [
      "Design the reveal format: a fifteen-second template built around the drape pull, the slow detail shot and the team going nuts, plus a countdown sticker set and a new-look-loading post for the team account.",
      "Drop a reveal kit into every team order. A QR card in the box opens a mobile page with the template, cleared audio and one-tap upload.",
      "Feature the best reveals every week on Champion's channels and in the coach newsletter. Programs compete for Reveal of the Week.",
      "Retarget everyone who watched a reveal within a few miles of that school with one message: your program's turn. It links to the free sizing samples and the rep locator.",
      "Every reveal in a territory gives the rep a call list: the neighboring programs in the same conference.",
    ],
    why:
      "The whole category talks to coaches about price and turnaround, and almost nobody talks to the kid. Reveal culture already exists, but the dealer disappears the moment the box ships. If Champion owns the reveal, the best moment of the order gets seen by exactly the people who approve the next one.",
    compounding:
      "Every reveal is a locally targeted ad Champion didn't pay for, posted by the most trusted source in the district: the team itself.",
    proof: {
      claim:
        "Uniform reveals are already a content genre. TikTok has dedicated discover pages for uniform reveal ideas and jersey reveal ideas, and NFL clubs run uniform reveals for high-school programs as community events.",
      source: "TikTok Discover / Las Vegas Raiders",
    },
    build: [
      "Reveal format and template library",
      "QR box card and mobile kit page",
      "Consent, rights and moderation flow",
      "Weekly feature slot on social and in the newsletter",
      "Local retargeting and rep alerts",
    ],
    clientSide: [
      "Add the card to the pack-out process",
      "Order data to trigger the kit",
      "Rep follow-up",
    ],
    watch:
      "Minors on camera. The kit needs a school or club-side consent step and a no-faces version of the template, and reveal timing can't get ahead of production dates.",
  },
  {
    id: "booster",
    number: "02",
    name: "The Booster Engine",
    scale: "ENGINE",
    hook: "Make every team store the program's easiest fundraiser.",
    logline:
      "Reposition the Champion team store as a fundraiser. The program picks a give-back percentage, spirit wear sells to parents, grandparents and fans all year, and a check goes back to the team. Fundraising is the loudest complaint in youth and school sports, so make the AD and the booster president the people who look smart for choosing Champion.",
    image: "/champion-ideas/booster.jpg",
    imageAlt:
      "Stacks of red and black spirit-wear hoodies on a folding table under stadium bleachers, a volunteer handing one to a fan",
    format: "Program, positioning and CRM",
    window: "Six weeks to launch, then a push every season",
    wins: "Athletic directors, booster clubs, club directors, parents",
    signal: "Stores opened, give-back paid out, reorders",
    mechanic: [
      "Add a simple give-back setting to every team store, plus a live raised-so-far counter the booster club can share.",
      "Launch Fund the Season: a ready-made kit with spirit-wear collections, a QR poster for the gym, a parent email and text template, and a season-opener push.",
      "Publish the check. Every payout becomes a post for social and the coach newsletter: the program, the photo, the amount.",
      "Seasonal drops for homecoming, senior night, playoffs and nationals refresh the store and give parents a reason to come back.",
      "Hand the booster relationship to the rep. A program that raised money with Champion is the warmest lead there is for its next uniform order.",
    ],
    why:
      "Coaches choose vendors; boosters fund them. Right now the fundraising story belongs to the competition. SquadLocker sells a 5, 10 or 15% fundraising markup, and BSN says it opened more than 100,000 team shops last year. Champion has the brand and the product to win this, but fundraising has to be the front door, not a line buried in the webtools.",
    compounding:
      "A booster president who raised real money with a Champion store tells every other booster president in the district.",
    proof: {
      claim:
        "Family spending on youth sports is up 46% since 2019, to $1,016 per kid on their main sport alone. Programs and parents are actively looking for ways to offset the cost of a season.",
      source: "Aspen Institute Project Play, 2025",
    },
    build: [
      "Give-back setting and the raised-so-far counter",
      "Fund the Season kit",
      "Payout stories for social and email",
      "Seasonal drop calendar",
      "Booster and parent segments in the CRM",
    ],
    clientSide: [
      "Payout operations and accounting",
      "Store margin rules",
      "Spirit-wear assortment",
    ],
    watch:
      "The margin math. The give-back has to come out of the price architecture, not the base margin, and payouts have to land faster than the competition's or the story dies.",
  },
  {
    id: "calendar",
    number: "03",
    name: "Own the Season Calendar",
    scale: "ENGINE",
    hook: "Be in the coach's inbox the week before the decision. Every season, every sport.",
    logline:
      "Build the email and SMS engine around the real ordering calendar: tryouts, camps, sizing, order deadlines, reveal week, playoffs, nationals. Cheer, dance and gymnastics first, then each traditional sport. The lead magnets are things coaches already want: the season ordering calendar, the free 60-day sizing samples, new design drops. Champion becomes the brand that remembers the deadline for them.",
    image: "/champion-ideas/calendar.jpg",
    imageAlt:
      "Sizing sample jerseys hung in size order with blank tags beside a wall calendar with red circled dates",
    format: "Email and SMS lifecycle plus a content calendar",
    window: "Live in thirty days, gets better every season",
    wins: "Coaches, club directors, athletic directors, boosters",
    signal: "List growth, quote requests around deadlines, reorders",
    mechanic: [
      "Map the ordering calendar for each sport and each buyer: when tryouts end, when rosters lock, when an order has to ship to make game one.",
      "Launch two lead magnets: a season ordering calendar in print and digital, and the 60-day sizing samples you already offer, both captured through the site and the rep locator.",
      "Build the flows: new-coach welcome, roster-lock reminder, a reorder nudge when last season's order gets old, and a your-samples-are-waiting sequence.",
      "Send a monthly coach newsletter: one design drop, one program story, one deadline.",
      "Give the reps every send, so the follow-up call lands the same day the email does.",
    ],
    why:
      "The July audit found the owned channels quiet and the web experience fragmented. In a category where a coach buys once or twice a year, the brand that shows up in the right week gets the order, and email is the only channel that can do that for every sport at once.",
    compounding:
      "A coach who forwards the ordering calendar to a colleague just handed you a lead for free.",
    proof: {
      claim:
        "High-school sports hit a record 8,260,891 participants in 2024-25. The buyer base is growing, and it turns over every year as coaches, seniors and programs change.",
      source: "NFHS 2024-25 participation survey",
    },
    build: [
      "Calendar mapping by sport and role",
      "Lead magnets and capture points",
      "Email and SMS flows with segmentation",
      "Monthly newsletter",
      "Rep alerts",
    ],
    clientSide: [
      "Customer and order history export",
      "Rep territories",
      "Product and deadline data",
    ],
    watch:
      "List hygiene and consent. School email domains filter hard, and SMS needs real opt-in and a real reason to text.",
  },
  {
    id: "beachhead",
    number: "04",
    name: "The Beachhead Play",
    scale: "PLAY",
    hook: "Win one traditional sport all the way before trying to win them all.",
    logline:
      "The core is cheer, dance and gymnastics; the goal is traditional team sports. Instead of spreading across every sport, pick one where the schools, the parents and the culture already overlap (our pick is girls' volleyball) and run the full playbook there for one season in a few states: reveals, booster stores, the calendar, referrals, and a targeted paid push.",
    image: "/champion-ideas/beachhead.jpg",
    imageAlt:
      "A high-school volleyball player in a black jersey with a red number rising at the net under gym lights",
    format: "One-season campaign in a few states",
    window: "One season, club spring through high-school fall",
    wins: "Volleyball coaches, club directors, players, parents",
    signal: "Programs signed in the test states versus the rest of the country",
    mechanic: [
      "Pick three states with dense club volleyball and big high-school participation. Texas, California and Ohio lead the country in total athletes.",
      "Build a volleyball capsule: sublimated jerseys, warm-ups, and the practice and travel pieces the sport actually wears, with mockups ready for the reps to send.",
      "Run paid to coaches and parents in those states, timed to club tryouts and high-school preseason. The creative is reveal content from the first pilot teams.",
      "Sponsor two or three regional club tournaments with a sizing and reveal setup that generates content and store sign-ups.",
      "Read the results at the end of the season: cost per program signed, reorder intent, share of the sport's conversation. Then pick the second sport.",
    ],
    why:
      "Volleyball is the second-biggest girls' sport, it shares gyms, coaches and parents with the cheer and dance core, and it's a visual sport: sublimation, matching warm-ups, team pride. Those are the strengths Champion already has. Winning it proves the traditional-sports plan with real numbers instead of a hunch.",
    compounding:
      "Volleyball clubs travel. A team in a Champion kit at a regional tournament gets seen by every other club in the bracket.",
    proof: {
      claim:
        "Girls' volleyball had 492,799 high-school players in 2024-25, second among girls' sports. Texas (879,403), California (852,575) and Ohio (335,808) lead all states in total participation.",
      source: "NFHS 2024-25 participation survey",
    },
    build: [
      "Beachhead selection model",
      "Sport capsule and pre-built mockups",
      "Paid media plan and creative",
      "Tournament activation plan",
      "Measurement plan",
    ],
    clientSide: [
      "Capsule availability and turnaround",
      "Rep coverage in the test states",
      "Tournament budget",
    ],
    watch:
      "Girls' flag football grew 60% last year and nearly 1,000 schools added it. Worth scoring as the alternate before locking in volleyball.",
  },
  {
    id: "schools",
    number: "05",
    name: "Champion Schools",
    scale: "FLAGSHIP",
    hook: "Land in one sport. Expand to the whole building.",
    logline:
      "A whole-school partnership. One agreement covers every team's uniforms, the spirit store, PE and staff gear, with a school-wide give-back and one point of contact. Get in through the sport Champion already wins, then use Bring Your Rival (idea 06) to move district by district.",
    image: "/champion-ideas/schools.jpg",
    imageAlt:
      "A rolling rack holding one matching red and black uniform from every sport in a school hallway of dark lockers",
    format: "Partnership program plus a referral mechanic",
    window: "Pilot with ten to twenty schools in season one",
    wins: "Athletic directors, principals, district athletics",
    signal: "Single-sport accounts that become whole-school accounts, and programs that came in through a referral",
    mechanic: [
      "Define the Champion Schools package: uniforms across sports, a spirit store with give-back, PE and staff gear, guaranteed delivery before game one, and one rep.",
      "Start with existing cheer and dance customers. You already trust us for one team; here's the whole-school offer.",
      "Run Bring Your Rival inside the program, so every school you sign helps sign the next one in the district.",
      "Give the AD a visible win: a school-wide reveal day, the school's crest in the design library, and a partner page they can send parents to.",
      "Expand by district. Once two schools in a district are in, pitch the district athletics office directly.",
    ],
    why:
      "The audit found service equity that lives in individual reps and relationships. A whole-school program turns that into a system: fewer, bigger relationships, more lifetime value per account, and a reason for ADs to consolidate vendors. Competitors sell partnership as a multi-brand catalog. Champion can sell one brand, one look, one phone call.",
    compounding:
      "Rivalry is the best referral channel in high-school sports. Schools notice what the school across town is wearing.",
    proof: {
      claim:
        "There are roughly 24,000 public secondary schools in the U.S., and competitors already sell whole-program partnerships: BSN markets multi-brand school partnerships and says it opened more than 100,000 team shops last year.",
      source: "NCES Fast Facts / BSN SPORTS",
    },
    build: [
      "Program design and sales story",
      "Referral mechanics and leaderboard",
      "Partner page template",
      "District playbook",
      "Scorecard",
    ],
    clientSide: [
      "Contract terms and delivery guarantees",
      "Rep incentives",
      "Capacity planning for multi-sport orders",
    ],
    watch:
      "Capacity. A whole-school program promises delivery before game one across every sport, and the site currently warns about longer processing times. Fix that story before selling this one.",
  },
  {
    id: "rival",
    number: "06",
    name: "Bring Your Rival",
    scale: "ENGINE",
    hook: "Every school you sign helps you sign the school across town.",
    logline:
      "A referral program built on the one thing every program already has: a rival. A coach or AD who brings in another program earns credit toward their next order, the new program gets a first-order perk, and a public leaderboard by conference keeps score. It runs on the customers you already have, costs nothing until it works, and turns every reveal, every booster check and every rep visit into an ask.",
    image: "/champion-ideas/rival.jpg",
    imageAlt:
      "Two rival jerseys, one black and one white, both with red numbers, hanging side by side on a chain-link fence under stadium lights",
    format: "Referral program with a public leaderboard",
    window: "Four weeks to launch, then always on",
    wins: "Coaches and ADs, through their own network",
    signal: "Referrals submitted, referrals that became orders, and what a referred program costs versus a paid one",
    mechanic: [
      "Set the deal. The referring program earns store credit or a cut of the new program's first order, and the new program gets a first-order perk like free numbering or a coach's kit.",
      "Give every coach a personal referral link and a printed card. Reps carry them, the reveal kit includes one, and every booster payout email has one.",
      "Publish a leaderboard by conference and by state showing which programs have brought in the most schools. Coaches are competitive. Use it.",
      "Time the ask to the reveal. The week a team's new uniforms drop is the week rival coaches are asking who made them.",
      "Reps close the loop. Every referral becomes a warm call within 48 hours, with the referring coach named in the first sentence.",
    ],
    why:
      "A cold email to a coach is a stranger asking for a meeting. A referral from the coach across town is a peer saying it worked. High-school sports already runs on rivalry and word of mouth, and the dealer conversation happens in the same hallways, conferences and group chats coaches already share. Right now nobody is giving programs a reason to have that conversation about Champion.",
    compounding:
      "Every program signed through a referral becomes a referrer. The program pays for itself from the second order on.",
    proof: {
      claim:
        "In a three-year study of roughly 10,000 customers, referred customers were worth at least 16% more than comparable non-referred customers, and the retention gap held over time.",
      source: "Schmitt, Skiera and Van den Bulte, Journal of Marketing, 2011",
    },
    build: [
      "Program rules and credit mechanics",
      "Referral links, printed cards and tracking",
      "Leaderboard page by conference and state",
      "The ask, written into the reveal kit, booster emails and rep scripts",
      "Reporting on referrals through to orders",
    ],
    clientSide: [
      "Credit policy and margin rules",
      "Rep follow-up inside 48 hours",
      "Order data to close the loop",
    ],
    watch:
      "Keep it clean. Credit goes to the program, never to a coach personally, so nothing looks like a kickback to a public-school employee. Gift and procurement rules vary by state and district, so check before launch.",
  },
];

/* ------------------------------------------------------------------ */
/* 03 — The basics                                                     */
/* ------------------------------------------------------------------ */

export const basicsIntro = {
  eyebrow: "The basics",
  note: "Traditional B2B / easy to start",
  body:
    "None of this is clever, and that's the point. These are the standard ways a team dealer fills the pipeline, most of them cheap, most of them startable this month, and most of them run by the sales team with us behind them. They sit underneath whichever big ideas you pick.",
  closing:
    "Most of these need a list, a calendar and someone to own the follow-up. That's the real work, and it's the first thing we'd set up.",
} as const;

export const basics: readonly Basic[] = [
  {
    code: "01",
    title: "Build the list",
    body:
      "A clean prospect list of every high-school athletic department, club director and cheer or dance gym in the target states, with the coach's name, the sport and when they order. Reps work it by ordering deadline, not alphabetically.",
    channel: "Outbound",
    effort: "Low",
    start: "This month",
    owner: "Crowd Control builds it, reps work it",
  },
  {
    code: "02",
    title: "Mail the catalog",
    body:
      "The catalog we're building is a sales piece, not just a reference. Print a run for the top couple of thousand programs and get it on the AD's desk a month before their ordering window, with the rep's name and number on the back cover.",
    channel: "Direct mail",
    effort: "Low",
    start: "When the catalog ships",
    owner: "Together",
  },
  {
    code: "03",
    title: "Free samples, on purpose",
    body:
      "You already offer free 60-day sizing samples. Turn that into the offer: put it on the homepage, in the ads, in every outbound email, and make the sample box itself a sales piece with a sport sell sheet and the rep's card inside.",
    channel: "Offer",
    effort: "Low",
    start: "This month",
    owner: "Champion Teamwear",
  },
  {
    code: "04",
    title: "A rep email cadence",
    body:
      "A five-touch sequence every rep sends new prospects: intro, samples offer, a program story, the ordering deadline, then a call ask. Written once, personalized per sport, tracked in the CRM so nobody falls through.",
    channel: "Outbound",
    effort: "Low",
    start: "This month",
    owner: "Crowd Control writes it, reps send it",
  },
  {
    code: "05",
    title: "Search ads on buying keywords",
    body:
      "Coaches Google \"custom volleyball uniforms\" and \"team spirit wear store\" when they're ready to buy. Own those terms and the Champion brand terms, send the click to the right sport page on the site, and retarget everyone who visits.",
    channel: "Paid search",
    effort: "Low",
    start: "Next 30 days",
    owner: "Crowd Control",
  },
  {
    code: "06",
    title: "Target the job title",
    body:
      "LinkedIn and Meta both let you reach athletic directors, coaches and club owners by title and location. Small budget, tight geography, timed to each sport's ordering season, with samples as the hook.",
    channel: "Paid social",
    effort: "Low",
    start: "Next 30 days",
    owner: "Crowd Control",
  },
  {
    code: "07",
    title: "Show up where coaches meet",
    body:
      "State athletic director associations, the NIAAA national conference, the AVCA convention for volleyball, cheer and dance coach clinics. A booth with samples, the catalog and a sign-up sheet does more than a month of cold email.",
    channel: "Events",
    effort: "Medium",
    start: "Next season",
    owner: "Reps on the floor, Crowd Control on materials",
  },
  {
    code: "08",
    title: "Program spotlights",
    body:
      "Short case studies from current cheer, dance and gymnastics customers: the program, the order, a photo, and what the coach actually said. One a month on the site, in the newsletter, and printed for the reps.",
    channel: "Content",
    effort: "Low",
    start: "This month",
    owner: "Crowd Control",
  },
  {
    code: "09",
    title: "Ask for the review",
    body:
      "After every delivered order, a one-tap request for a Google review and a team photo. The reviews show up when the next coach searches, and the photos become content.",
    channel: "Reputation",
    effort: "Low",
    start: "This month",
    owner: "Champion ops, Crowd Control sets it up",
  },
  {
    code: "10",
    title: "An early-order incentive",
    body:
      "A clear deadline and a reason to hit it: order by the date and get free numbering, a coach's polo, or priority production. Coaches respond to deadlines more than they respond to discounts.",
    channel: "Offer",
    effort: "Low",
    start: "Next season",
    owner: "Champion Teamwear",
  },
  {
    code: "11",
    title: "Win back lapsed programs",
    body:
      "Every program that ordered two or three seasons ago and stopped gets a rep call and a we'd-love-you-back offer. It's the cheapest new customer there is, and the order history tells you exactly what to pitch.",
    channel: "Outbound",
    effort: "Low",
    start: "This month",
    owner: "Reps, with Crowd Control pulling the list",
  },
  {
    code: "12",
    title: "Be the official partner",
    body:
      "Sponsor a state cheer championship, a club volleyball league or a regional tournament series as the official uniform partner. Logo on the bracket, samples at the event, and a code for every team in it.",
    channel: "Sponsorship",
    effort: "Medium",
    start: "Next season",
    owner: "Champion Teamwear",
  },
];

/* ------------------------------------------------------------------ */
/* 04 — Sequence                                                       */
/* ------------------------------------------------------------------ */

export const sequenceIntro = {
  eyebrow: "How we'd sequence it",
  note: "Three ways to run the next twelve months",
  body:
    "The ideas stack in a particular order. These are the three combinations we'd actually recommend, and the trade-off each one makes. The basics run underneath all three.",
} as const;

export const plays: readonly Play[] = [
  {
    code: "Play A",
    name: "Quick wins before tryouts",
    horizon: "First ninety days",
    picks: ["03 Own the Season Calendar", "02 The Booster Engine", "06 Bring Your Rival", "01 The Reveal Engine"],
    rationale:
      "Everything here runs on product, channels and customers you already have. The calendar and the booster stores go live before cheer and dance tryout season, Bring Your Rival turns current programs into the sales team, and the reveal kit is in every box by the first spring deliveries.",
    tradeoff:
      "Fast results, mostly inside the core you already own. It proves the system without proving the expansion.",
  },
  {
    code: "Play B",
    name: "The beachhead season",
    horizon: "One full season",
    picks: ["04 The Beachhead Play", "01 The Reveal Engine", "06 Bring Your Rival"],
    rationale:
      "Volleyball runs the whole playbook in three states: reveal content as the creative, booster stores for the parents, and Bring Your Rival to move club to club. By the end of the season there's a real cost per program signed.",
    tradeoff:
      "More to set up before the first read, but it answers the question leadership actually has: can Champion win a traditional sport?",
  },
  {
    code: "Play C",
    name: "The whole-school year",
    horizon: "Twelve months",
    picks: ["05 Champion Schools", "06 Bring Your Rival", "03 Own the Season Calendar"],
    rationale:
      "Champion Schools turns existing cheer and dance accounts into whole-school relationships, Bring Your Rival moves it district by district, and the calendar keeps every account warm between orders.",
    tradeoff:
      "Slowest to show a number and the most dependent on operations, but it's the version that keeps paying for years.",
  },
];

/* ------------------------------------------------------------------ */
/* 05 — Sources                                                        */
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
    title: "Referral programs and customer value",
    publisher: "Journal of Marketing (Schmitt, Skiera, Van den Bulte)",
    url: "https://journals.sagepub.com/doi/10.1509/jm.75.1.46",
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
    "Pick the ones worth a real conversation. We'll come back with scope, sequencing and a season plan for each, sized to fit alongside the catalog work already underway.",
  primaryLabel: "Tell us which ones",
  primaryHref:
    "mailto:geoff@crowdcontroldigital.com?subject=Champion%20Teamwear%20marketing%20ideas&body=Ideas%20we%20want%20to%20explore%3A%20",
  firstSteps: [
    "Rank the six ideas on Monday's call and pick an opening play.",
    "Confirm the ordering calendar for cheer, dance and gymnastics with the sales team.",
    "Decide the first traditional sport: volleyball or flag football.",
    "Scope the chosen ideas alongside the catalog build so both ship on one timeline.",
  ],
} as const;

export const disclaimer =
  "This is a strategy document. The ideas are directional and will be scoped and quoted once priorities are set. Concept imagery is AI-generated for illustration and doesn't show an existing program, product or partnership. Third-party brands and organizations are mentioned as market context only, with no endorsement or partnership implied. Market figures come from the sources listed above.";
