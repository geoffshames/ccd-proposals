/**
 * JOYN x CROWD CONTROL DIGITAL: customer acquisition proposal.
 * Built Nov 2, 2026 from the call with Jaqueline Mattos and Sam Neider.
 * Pricing set by Geoff Nov 2, 2026: $5,000 setup, 15% of managed spend.
 */

export const STRIPE = "https://buy.stripe.com/3cI8wO3PubeV8mZcfTa7C0m";

export const NAV = [
  { id: "heard", label: "What we heard" },
  { id: "research", label: "Research" },
  { id: "plan", label: "The plan" },
  { id: "creative", label: "Creative" },
  { id: "investment", label: "Investment" },
];

export const HERO = {
  kicker: "Proposal for JOYN, November 2026",
  title: ["JOYN", "CUSTOMERS"],
  line: "Speak to the pain pool owners already feel. Let one booking do the selling.",
  sub: "Prepared for Jaqueline and Sam.",
  body: "JOYN has the hard side of the marketplace handled: techs sign up the moment they hear same-day pay, and customers who try the app set it to recurring and stay. What it needs now is a steady flow of South Florida pool owners who have never heard of it. The plan: landing pages built around the complaints people already have about pool service, AI-made ads that test those complaints fast on Meta, and a first-clean offer measured against a control.",
  stats: [
    { v: 140, l: "New recurring customers, the first milestone" },
    { v: 4, l: "Landing pages, one per pain point" },
    { v: 2, l: "Weeks from kickoff to live ads" },
  ],
};

export const MARQUEE = ["Pool owners", "Pain-point pages", "AI ad creative", "First clean on us", "Meta", "Recurring service", "South Florida"];

/* 01 What we heard */

export const HEARD_THESIS = {
  big: "The techs are ready.",
  em: "The customers just haven't heard of JOYN yet.",
  body: "Customers book easily when Jaqueline recommends JOYN through Organized Pool Service, a name they already trust. The same people hesitate when JOYN reaches them cold. The product converts once it's in their hands, so the job is to borrow trust fast: talk about the problem they already have, prove the fix with a risk-free first booking, and let recurring service do the rest.",
};

export const GOALS = [
  { k: "Today", t: "About 100 customers", b: "Set to recurring and rarely cancel. Churn runs around 2%." },
  { k: "Supply", t: "A bench waiting", b: "Core techs plus a list of independents asking for more jobs than JOYN can give them." },
  { k: "Bottleneck", t: "Trust in a new name", b: "Pool owners don't know JOYN yet, and a new app feels like a risk until it's tried once." },
  { k: "The goal", t: "+140 recurring", b: "Add 140 recurring pool customers at a cost that pays back inside year one, and prove it in one chart." },
];

/* 02 Research */

export const RESEARCH_STATS = [
  { v: "1.5M", l: "Residential pools in Florida, the most of any state" },
  { v: "$11", l: "Platform profit per recurring weekly job" },
  { v: "~$570", l: "First-year value of one recurring customer" },
  { v: "2%", l: "Customer churn on recurring service" },
];

export const FINDINGS = [
  { k: "Finding 01", t: "The homepage sells everyone at once", b: "joynpro.com pitches trades in general, AI pricing, provider companies and technicians on one page. A pool owner with a green pool has to dig for their problem. Paid traffic should land on one message and one action." },
  { k: "Finding 02", t: "The pain is loud and repetitive", b: "Reviews, industry forums and local news repeat the same complaints: skipped weeks, pools turning green between visits, surprise chemical charges, and nobody answering the phone." },
  { k: "Finding 03", t: "JOYN already fixes each one", b: "Live tracking answers the no-show. The trusted backup tech answers the skipped week. A price locked before booking answers the surprise bill. The product is the proof." },
  { k: "Finding 04", t: "A free clean alone isn't enough", b: "PoolToday has offered on-demand Florida cleanings with a free first service since 2019. The offer still wins when it's paired with what only JOYN has: pro-only vetting, price lock and backup techs." },
];

export const COMPETITORS = [
  { n: "PoolToday", good: "On-demand cleanings on two hours' notice, flat zip-code pricing, free first service across Florida.", win: "Cleanings and weekly service only. No pro-only tier, no backup tech, no repairs or quotes network." },
  { n: "Angi", good: "Huge brand awareness and search presence. The default place homeowners start.", win: "A lead marketplace: submit a request, wait for callbacks and quotes. JOYN is book now, no waiting." },
  { n: "Thumbtack", good: "Deep pool-service listings in Miami, Fort Lauderdale and Palm Beach with reviews.", win: "Pros pay per lead, so the homeowner still runs a quote process and gets a range, not a locked price." },
  { n: "The local independent", good: "Personal relationship and often the lowest price on the street.", win: "Where the ghosting, skipped weeks and surprise bills come from. Every JOYN ad is a switch campaign." },
];

/* 03 The plan */

export const PLAN = [
  { n: "01", tag: "Research", t: "Complaint mining", b: "Scrape and rank every South Florida pool service complaint we can find in reviews, forums and social. The top four become the launch angles." },
  { n: "02", tag: "Landing pages", t: "One page per pain point", b: "Four pages (ghosting, surprise bills, pro-only, first clean on us), each matched to its ads with one job: download the app and book. Built to update as Sam's brand work lands." },
  { n: "03", tag: "Creative", t: "AI-made ads, launched wide", b: "12+ static and short video ads across the four angles, made with AI image and video tools in JOYN's brand. That's what lets us test a dozen ideas in week one instead of three." },
  { n: "04", tag: "Offer", t: "First clean, tested properly", b: "A free first clean when someone sets up weekly service, capped (for example the first 100) so the cost is known up front, and run against a no-offer control." },
  { n: "05", tag: "Paid media", t: "Meta, cut and scale weekly", b: "Facebook and Instagram across pool-dense South Florida zip codes. Losing angles get cut every week and budget moves to whatever produces recurring customers." },
  { n: "06", tag: "Reporting", t: "The one chart", b: "Weekly report on spend, installs, first bookings, recurring setups and cost per customer, plus a CAC against LTV view built for investor conversations." },
];

export const AI_NOTE =
  "The ad creative in this plan is made with AI. It looks the part, it's on brand, and it means we can launch with a dozen angles and replace losers every week without a shoot. Final copy, offers and product claims are approved by JOYN before anything runs.";

/* 04 Creative */

export const CREATIVE_INTRO =
  "Four example ads, one per launch angle, made with AI in JOYN's orange. Directional only; they show the angles we would test first.";

export const CREATIVE = [
  { img: "/images/joyn/ad-ghosted.jpg", k: "Angle 01", t: "Ghosted", b: "The most common complaint in the category: the tech who stops showing up and stops answering." },
  { img: "/images/joyn/ad-no-surprise.jpg", k: "Angle 02", t: "Price lock", b: "Surprise chemical bills against a price locked before booking." },
  { img: "/images/joyn/ad-first-clean.jpg", k: "Angle 03", t: "First clean on us", b: "A risk-free first booking tied to weekly service, tested against a control." },
  { img: "/images/joyn/ad-pro-only.jpg", k: "Angle 04", t: "Pro only", b: "For the homeowner who only lets vetted, insured companies on the property." },
];

/* 05 Targets */

export const TARGETS = [
  { v: "<$150", l: "Cost per recurring customer. Returns the spend more than three times in year one." },
  { v: "140", l: "New recurring customers. About four months at $5K a month; a winning offer pulls it in." },
  { v: "30%+", l: "Download to first booking. We fix any drop-off here before buying more installs." },
  { v: "3x+", l: "Year-one return on ad spend, before repairs and service calls are counted." },
];

/* 06 Timeline */

export const PHASES = [
  { w: "Week 1", t: "Research + setup", items: ["Complaint mining and the four launch angles", "Offer mechanics and redemption cap agreed", "Meta Business, pixel, Conversions API and app event tracking"] },
  { w: "Week 2", t: "Build", items: ["Four landing pages live", "12+ AI-made launch ads", "Full path tested from ad to first booking"] },
  { w: "Weeks 3 to 6", t: "Launch + learn", items: ["Meta live across South Florida", "Weekly creative refresh", "First-clean offer vs control read"] },
  { w: "Week 7 on", t: "Scale", items: ["Budget behind the winning angle and offer", "Retargeting and lookalikes from recurring customers", "Connected TV to homes with pools once the numbers hold"] },
];

/* 07 Investment */

export const PRICING_INTRO =
  "One setup fee to build the pages and the launch creative, then 15% of whatever ad spend we manage. Ad spend is paid straight to Meta on JOYN's card, so every dollar is visible.";

export const PRICING = [
  { k: "Setup", t: "Pages + creative", price: "$5,000", per: "one time", b: "Complaint research, four landing pages, offer and control paths, tracking setup, and 12+ AI-made launch ads.", bill: "Paid on approval" },
  { k: "Management", t: "Media management", price: "15%", per: "of spend", b: "Running the campaigns, weekly creative refreshes and the weekly report. $750 a month at the recommended budget, and it moves with spend.", bill: "Billed monthly" },
  { k: "Ad spend", t: "Meta budget", price: "$5,000", per: "/mo recommended", b: "Paid directly to Meta. Scales up or down together with results.", bill: "Paid to the platform" },
];

export const FINE_PRINT =
  "Offer redemptions (the cost of any free first cleans) are JOYN's cost and capped up front. JOYN owns the ad account, the pages' content and every customer. App changes, including installing tracking SDKs, sit with JOYN's developers. Website redesign, connected TV and other channels are quoted separately.";

/* Next */

export const NEXT = {
  email: "geoff@crowdcontroldigital.com",
  steps: [
    "Approve and pay the $5,000 setup",
    "Share Meta Business access, app store links and your CAC and LTV numbers",
    "Agree the first-clean offer, the cap and the terms",
    "Pages, creative and tracking built in two weeks, then ads go live",
  ],
};
