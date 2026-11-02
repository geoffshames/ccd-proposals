/**
 * COLIN x CROWD CONTROL DIGITAL: phased lead gen proposal for a new Charleston agent.
 * Built Nov 2, 2026 from the call with Sam Neider and Pantelis.
 * All prices are CCD-proposed figures for Geoff to confirm before this goes out.
 */

export const PASSWORD = "CHARLESTON";

export const NAV = [
  { id: "heard", label: "What we heard" },
  { id: "phase1", label: "Phase 1" },
  { id: "phase2", label: "Phase 2" },
  { id: "timeline", label: "Timeline" },
  { id: "investment", label: "Investment" },
];

export const HERO = {
  kicker: "Proposal for Colin, November 2026",
  title: ["CHARLESTON", "LEADS"],
  line: "Paid lead gen first. Your own platform once the volume is there.",
  sub: "Prepared for Colin and Sam.",
  body: "Colin is new to Charleston and needs real buyers and sellers on the phone while he builds his book. Phase 1 is a new site on a new domain plus paid ads aimed at people moving to, buying in and selling in the Lowcountry. Phase 2 starts once the leads prove out: Colin's own listings, data and outreach system, built for him and owned by him.",
  stats: [
    { v: 2, d: 0, l: "Phases, the second earned by the first" },
    { v: 3, d: 0, l: "Audiences: relocating, buying, selling" },
    { v: 30, d: 0, l: "Days from brand files to live ads" },
  ],
};

export const MARQUEE = ["Relocating to Charleston", "Buyers", "Sellers", "Geo-targeted ads", "Qualified leads", "Owned platform"];

/* 01 What we heard */

export const HEARD_THESIS = {
  big: "He doesn't need IDX yet.",
  em: "He needs people to talk to.",
  body: "Most agents in town have IDX listings built into their sites, so it feels like the thing to copy. But buyers search homes on the big portals and the broker's site, not on a new agent's domain, and IDX only matters once there is traffic to show it to. Right now almost every early visitor will come from paid ads. So the fastest win is simple: a sharp site, geo-targeted ads, and leads that are worth the call.",
};

export const GOALS = [
  { k: "Pain 01", t: "Too many dead leads", b: "Colin spends hours calling contacts in a CRM to find out who is actually a lead. Most aren't." },
  { k: "Pain 02", t: "Manual sorting", b: "Peeling through data by hand eats the time he should spend with clients." },
  { k: "Pain 03", t: "New to the market", b: "No local book of business yet, so he has to lean on paid and organic to get in front of people." },
  { k: "The fix", t: "Straight lead gen", b: "A site built to convert, ads aimed at the right people, and a short qualifier on every form so the leads that reach him are worth calling." },
];

/* 02 Phase 1 */

export const PHASE1 = [
  { n: "01", tag: "Website", t: "New site and domain", b: "A fast, mobile-first site on a new domain, rebuilt from Colin's brand files. Pages for buyers, sellers and people relocating to Charleston, each with a clear form, click to call and click to text." },
  { n: "02", tag: "Paid media", t: "Geo-targeted lead ads", b: "Meta (Facebook and Instagram) and Google Search, aimed at three audiences: people moving to Charleston from feeder markets, local homeowners thinking about selling, and active buyers." },
  { n: "03", tag: "Qualifying", t: "Leads worth the call", b: "Every form asks the few questions that matter: timeline, price range, buying or selling, pre-approved or not. Hot leads get an instant text and email reply and land on Colin's phone right away." },
  { n: "04", tag: "Setup", t: "Accounts done for you", b: "Meta Business account, ad accounts, pixel, Conversions API, Google tags and call tracking. Nobody on your side has to figure any of it out." },
  { n: "05", tag: "Offers", t: "Reasons to raise a hand", b: "A free home value report for sellers, a Charleston relocation guide for movers, and new listing alerts for buyers. Each one trades something useful for a phone number." },
  { n: "06", tag: "Reporting", t: "Weekly lead report", b: "Leads by audience, cost per lead, cost per qualified lead and what we changed that week. A 90-day review decides when Phase 2 starts." },
];

export const HOUSING_NOTE =
  "Real estate ads run under Meta's Housing special ad category, which limits targeting by age, gender and ZIP code and sets a minimum radius. We build for those rules from day one, with offers and creative doing the targeting work, so the account stays clean.";

/* 03 Phase 2 */

export const PHASE2 = [
  { k: "Listings", t: "Colin's own listings feed", b: "MLS listings pulled onto his own domain, so the site becomes a real search destination once there is traffic to send to it." },
  { k: "New movers", t: "Public record outreach", b: "Recent home sales and new owner records pulled from public data, turned into outreach lists for people who just moved to the area." },
  { k: "Search", t: "Neighborhood pages", b: "Local SEO pages for the neighborhoods Colin works, so organic traffic starts to take some weight off paid." },
  { k: "Follow up", t: "CRM and nurture", b: "Automated follow up by text and email for leads that aren't ready yet, so nobody falls through the cracks." },
  { k: "Optional", t: "AI voice qualifier", b: "An AI assistant that answers or calls new leads, asks the qualifying questions and books the hot ones straight onto Colin's calendar." },
  { k: "Ownership", t: "His system, not a SaaS seat", b: "Built as Colin's own instance, so he owns the data and the code and it can grow with him." },
];

export const PHASE2_TRIGGER =
  "Phase 2 starts once Phase 1 is bringing in steady qualified leads, judged at the 90-day review. If paid is working, we build on it. If it isn't, we fix Phase 1 before spending on anything bigger.";

/* 04 Timeline */

export const PHASES = [
  { w: "Week 1", t: "Kickoff", items: ["Brand files and logos in", "Domain bought and connected", "Ad accounts, pixel and tracking set up"] },
  { w: "Weeks 2 to 3", t: "Build", items: ["Site and landing pages built", "Offers and forms written", "First ads and creative made"] },
  { w: "Week 4", t: "Launch", items: ["Ads live across all three audiences", "Leads routed to Colin's phone", "First weekly report"] },
  { w: "Weeks 5 to 12", t: "Optimize", items: ["Weekly tuning of audiences, creative and offers", "Lead quality reviewed with Colin", "90-day review and Phase 2 go or no-go"] },
];

/* 05 Investment */

export const PRICING_INTRO =
  "Phase 1 is a one-time setup plus a monthly management fee for a three month initial term. Ad spend is separate and paid straight to Meta and Google, so every dollar is visible. Phase 2 is quoted once we know what Phase 1 shows.";

export const PRICING = [
  { k: "Phase 1", t: "Setup", price: "$2,500", per: "one time", b: "New site and domain, landing pages, ad accounts, tracking, offers and the first round of creative.", bill: "Invoiced at kickoff" },
  { k: "Phase 1", t: "Management", price: "$1,500", per: "/mo", b: "Running and tuning the ads, weekly lead report, site updates and a monthly check-in. Three month initial term, then month to month.", bill: "Billed monthly in advance" },
  { k: "Ad spend", t: "Media", price: "$1,500", per: "/mo to start", b: "Our recommended starting budget, paid directly to Meta and Google. Management covers up to $3,000 a month in spend; above that it's 15% of spend.", bill: "Paid to the platforms" },
];

export const PHASE2_PRICE = {
  t: "Phase 2: Colin's own platform",
  price: "$6,000 to $12,000",
  b: "One-time build, depending on which pieces he wants first, plus roughly $500 a month for data and hosting. Scoped and quoted after the 90-day review.",
};

export const FINE_PRINT =
  "Domain, hosting and any third-party tools are billed at cost. Colin owns the domain, the ad accounts and every lead. No long-term contract after the first three months.";

/* Next */

export const NEXT = {
  email: "geoff@crowdcontroldigital.com",
  steps: [
    "Send Colin's logos and brand files",
    "Confirm the Phase 1 scope and the starting ad budget",
    "Sign the agreement and pay the setup invoice",
    "We buy the domain and have ads live in about four weeks",
  ],
};
