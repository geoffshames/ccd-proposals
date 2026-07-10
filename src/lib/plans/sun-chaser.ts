import type { StrategyPlanData } from "../plan-context";

export const sunChaserPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/sun-chaser/og-image.png",
  language: "en",

  cover: {
    label: "YouTube View Acquisition Plan / 20M View Goal",
    title: "SUN CHASER",
    subtitle:
      "Twenty million paid YouTube views. Fifty percent of spend in the Philippines and Southeast Asia. Fifty percent in the U.S. and Canada. One pilot-first Google Ads flight.",
    partnership: "Sun Chaser × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "July 2026",
    backgroundImage: "/images/sun-chaser/hero.jpg",
    logo: "/brand/CC-LOGO-2024-WHITE.png",
  },

  approveCta: {
    label: "Approve Flight",
    sentLabel: "Approved. Crowd Control has been notified.",
    caption: "Approval confirms the flight structure and authorizes campaign build-out",
  },

  sections: [
    {
      type: "overview",
      number: "01",
      navLabel: "Objective",
      title: "Objective & Media Math",
      subtitle:
        "Create visible proof of audience at global scale without letting lower-cost inventory erase the North American strategy.",
      body: [
        "Sun Chaser has a story with two natural centers of gravity: cultural pride and relevance in the Philippines, and identity, family, and reconnection for audiences living between cultures. The media plan turns that strength into a measurable launch signal by generating 20 million Google Ads-validated paid YouTube views across the official promoted assets, with the pilot as the primary destination.",
        "This is not one global campaign left to chase the cheapest available impression. It is two separately budgeted regional campaigns. Half of every approved media dollar stays in the Philippines and Southeast Asia. The other half stays in the United States and Canada. Google can optimize audiences, placements, and bids inside each pool, but it cannot move North American budget into cheaper Southeast Asian inventory.",
        "At the current planning assumptions—approximately $0.002 per view in the Philippines/SEA and $0.010 in the U.S./Canada—the 20 million-view model requires $66,667 in base media. That projects to roughly 16.67 million PH/SEA views and 3.33 million U.S./Canada views at a $0.00333 blended CPV. A $70,000 authorization ceiling holds $3,333 as an uncommitted delivery reserve, released only if needed to close the target.",
      ],
      supports: {
        heading: "What This Flight Supports",
        items: [
          "A buyer- and distributor-facing public signal that Sun Chaser can attract attention at scale",
          "Visible traction in the story's home market without sacrificing deliberate North American investment",
          "A market-by-market read on where Filipino-rooted fantasy animation travels most efficiently",
          "A reusable performance baseline for future episodes, trailers, and distribution announcements",
        ],
      },
      goals: {
        heading: "Success At The End Of The Flight",
        items: [
          "20 million campaign-attributed YouTube views across the promoted official assets",
          "50% of total spend delivered in PH/SEA and 50% in the U.S./Canada",
          "The pilot remains the primary asset and receives the majority of paid delivery",
          "A transparent final readout by region, market, format, device, placement, and view quality",
        ],
      },
      footnote:
        "The view and CPV figures are planning targets, not auction guarantees. Google Ads reporting is the campaign source of truth; YouTube may reconcile its public-facing counter on a different schedule.",
    },

    {
      type: "philosophy",
      number: "02",
      navLabel: "Thesis",
      title: "The Targeting Thesis",
      thesis:
        "Use the Philippines to prove cultural scale. Use the U.S. and Canada to prove the story travels. Protect both with equal spend.",
      hierarchy: [
        {
          label: "Home-Market Scale",
          description:
            "The Philippines and priority SEA markets provide the most efficient path to large-scale view volume. This is where Filipino mythology, family dynamics, and local visual language require the least explanation—and where cultural momentum can become immediately visible.",
        },
        {
          label: "Diaspora Relevance",
          description:
            "North America is not treated as a leftover expansion market. Half of the budget is ring-fenced for the U.S. and Canada, concentrating delivery in high-opportunity metros while using English-language viewing behavior, Filipino cultural context, animation, fantasy, and cast-adjacent entertainment signals.",
        },
        {
          label: "Quality Over Empty Reach",
          description:
            "The flight prioritizes mobile and desktop viewing, removes connected-TV delivery, excludes off-YouTube video partners, and actively manages placements, frequency, and invalid-traffic signals. A paid view should represent an actual viewer—not a background screen or a suspicious inventory pocket.",
        },
      ],
      messaging: [
        "50/50 means spend, not views. Lower PH/SEA CPVs are expected to produce approximately 83% of total view volume.",
        "The campaign reaches culturally relevant audiences through geography, content context, language signals, and broad entertainment interests—not ethnicity targeting.",
        "Adults 18+ are the addressable media audience, with parents, co-viewers, animation fans, and culturally curious young adults as priority cohorts.",
        "The pilot is the hero. Supporting assets are used only when they strengthen discovery without obscuring where the public view signal is accumulating.",
      ],
      footnote:
        "If the pilot is designated Made for Kids, personalized audience and remarketing layers remain off; eligible geography and contextual targeting carry the plan.",
    },

    {
      type: "audience",
      number: "03",
      navLabel: "Audience",
      title: "Where We Will Find The Audience",
      intro:
        "The North American strategy is diaspora-relevant without attempting to identify anyone by ethnicity. Geography and viewing context do the work: priority metros, Filipino cultural and entertainment environments, broad animation and fantasy interests, and adult co-viewers looking for family-scale storytelling.",
      metrosLabel: "Priority Geographic Clusters",
      metros: [
        { name: "Philippines / National", tier: "primary" },
        { name: "Metro Manila", tier: "primary" },
        { name: "Cebu", tier: "primary" },
        { name: "Davao", tier: "secondary" },
        { name: "Singapore", tier: "secondary" },
        { name: "Kuala Lumpur", tier: "secondary" },
        { name: "Los Angeles", tier: "primary" },
        { name: "San Francisco Bay Area", tier: "primary" },
        { name: "San Diego", tier: "primary" },
        { name: "Honolulu", tier: "primary" },
        { name: "New York / New Jersey", tier: "primary" },
        { name: "Toronto", tier: "primary" },
        { name: "Vancouver", tier: "primary" },
        { name: "Las Vegas", tier: "secondary" },
        { name: "Seattle / Tacoma", tier: "secondary" },
        { name: "Houston / Dallas", tier: "secondary" },
        { name: "Chicago", tier: "secondary" },
        { name: "Calgary / Edmonton", tier: "secondary" },
        { name: "Winnipeg", tier: "secondary" },
      ],
      genres: [
        "Filipino Mythology",
        "Family Animation",
        "Fantasy Adventure",
        "Supernatural",
        "Coming Of Age",
      ],
      platformSignals: [
        {
          platform: "YouTube Context",
          note:
            "Relevant animation, fantasy, mythology, Asian culture, Filipino entertainment, and family-viewing channels and videos.",
        },
        {
          platform: "Google Interests",
          note:
            "Broad predefined entertainment, animation, film, fantasy, anime, and family-content affinities—kept separate from contextual lanes so reach does not collapse.",
        },
        {
          platform: "Language Signals",
          note:
            "English and Filipino context informs creative and placement choices without over-restricting bilingual viewers whose device language is English.",
        },
        {
          platform: "Cast & Culture",
          note:
            "Context around Manny Jacinto, Liza Soberano, Charo Santos, Dingdong Dantes, and adjacent Filipino entertainment environments where eligible.",
        },
      ],
      footnote:
        "No audience is labeled or inferred as Filipino. We target permitted signals: location, content, language context, and broad interests.",
    },

    {
      type: "vertical",
      number: "04",
      navLabel: "Allocation",
      title: "Regional Investment & Campaign Architecture",
      philosophy:
        "Four market allocations roll up into two protected regional pools. Optimization can move dollars within a pool, never across the 50/50 line.",
      intro:
        "The starting allocation is 35% Philippines, 15% selected Southeast Asia, 40% United States, and 10% Canada. Those country weights can evolve with quality and CPV, but the two regional halves remain fixed throughout the flight.",
      subBlocks: [
        {
          label: "A",
          title: "Philippines / SEA",
          budget: "$33,333.50 / 50%",
          objective:
            "Build the majority of total view volume in culturally fluent markets while protecting quality and meaningful watch behavior.",
          strategy:
            "Begin with 35% of total spend in the Philippines and 15% across selected SEA markets, led by Singapore and Malaysia. Expand selectively only when a market clears view-rate, completion, placement-quality, and invalid-traffic checks—not simply because its CPV is low.",
          components: {
            heading: "Starting Allocation",
            items: [
              "Philippines: 35% of total campaign spend",
              "Selected SEA: 15% of total spend, led by Singapore and Malaysia",
              "Pilot-first skippable in-stream and in-feed delivery",
              "Mobile and desktop priority; connected TV excluded",
            ],
          },
          kpis: [
            "Planning CPV: approximately $0.002",
            "Modeled views: approximately 16.67 million",
            "View rate and 25% / 50% / 75% / 100% completion",
            "Market, placement, device, and invalid-traffic quality",
          ],
        },
        {
          label: "B",
          title: "United States / Canada",
          budget: "$33,333.50 / 50%",
          objective:
            "Create a deliberate North American proof point around a Filipino-rooted story—especially among adults who connect with animation, family legacy, and living between cultures.",
          strategy:
            "Begin with 40% of total spend in the U.S. and 10% in Canada. National reach remains available, but bids and contextual lanes emphasize priority metros and relevant viewing environments. The campaign does not infer ethnicity or tell viewers we know anything personal about their identity.",
          components: {
            heading: "Starting Allocation",
            items: [
              "United States: 40% of total campaign spend",
              "Canada: 10% of total campaign spend",
              "Metro emphasis plus broad national animation and fantasy reach",
              "Separate contextual and broad-interest lanes to protect scale",
            ],
          },
          kpis: [
            "Planning CPV: approximately $0.010",
            "Modeled views: approximately 3.33 million",
            "North American spend delivery held at 50%",
            "View quality, earned channel actions, and follow-on viewing",
          ],
        },
        {
          label: "C",
          title: "Asset & Inventory Rules",
          budget: "Pilot-First",
          objective:
            "Make sure the view signal accrues to official Sun Chaser assets while preserving enough format flexibility to learn.",
          strategy:
            "The 12-minute pilot is the primary promoted URL. Existing trailers or approved vertical cuts can support in-feed and Shorts discovery, but separate uploads accumulate their own public view counts. Any supporting asset therefore has an explicit role and capped share of spend.",
          components: {
            heading: "Guardrails",
            items: [
              "Google Ads-delivered YouTube inventory only",
              "Skippable in-stream and in-feed as the core formats",
              "Shorts used only when an approved vertical asset is available",
              "Google Video Partners and connected TV excluded",
              "Weekly placement exclusions, frequency review, and pacing controls",
              "Made for Kids designation confirmed before launch",
            ],
          },
          kpis: [
            "Google Ads-validated views and TrueView CPV",
            "Public YouTube view-count lift",
            "Average view duration and completion quartiles",
            "Earned subscribers, likes, shares, and follow-on views where eligible",
          ],
        },
      ],
      footnote:
        "The media plan is Google Ads and YouTube only. No Meta, TikTok, programmatic, influencer, PR, or off-platform traffic is included.",
    },

    {
      type: "flight",
      number: "05",
      navLabel: "Flight",
      title: "Eight-Week Media Flight",
      intro:
        "The flight begins with a one-week regional calibration, then scales in measured tranches. Every phase preserves the 50/50 regional spend split. If observed CPVs outperform the model, the campaign reaches 20 million before the base budget is exhausted; if they underperform, the reserve protects the close.",
      totalBudget: "$66,667 base / $70,000 maximum authorization",
      phases: [
        {
          label: "Signal Calibration",
          window: "Week 1",
          focus:
            "Establish regional CPV, view rate, completion, inventory quality, and delivery headroom before meaningful scale. Build the clean benchmark that governs every later tranche.",
          budget: "$6,667 / 2.0M modeled views",
          tactics: [
            "$3,333.50 PH/SEA and $3,333.50 U.S./Canada",
            "Launch separate regional campaigns with separate target CPVs",
            "Test contextual and broad-interest lanes independently",
            "Verify placement, device, network, and public-counter behavior",
          ],
        },
        {
          label: "Audience Proof",
          window: "Weeks 2–3",
          focus:
            "Remove weak placements, validate the strongest markets and contexts, and confirm that view efficiency is not coming at the expense of completion or credible audience behavior.",
          budget: "$13,333 / 4.0M modeled views",
          tactics: [
            "$6,666.50 per protected regional pool",
            "Consolidate toward the strongest markets inside each half",
            "Cap supporting assets and keep the pilot primary",
            "Deliver the first client readout with a revised view forecast",
          ],
        },
        {
          label: "Controlled Scale",
          window: "Weeks 4–6",
          focus:
            "Deploy the largest share of media behind proven signals. Increase budgets in controlled increments while maintaining quality checks and exact regional spend balance.",
          budget: "$33,334 / 10.0M modeled views",
          tactics: [
            "$16,667 PH/SEA and $16,667 U.S./Canada",
            "Scale target CPV bids only where delivery remains healthy",
            "Refresh exclusions and frequency controls twice weekly",
            "Monitor public view accumulation against Google Ads-validated views",
          ],
        },
        {
          label: "Delivery Close",
          window: "Weeks 7–8",
          focus:
            "Concentrate the final base-media tranche behind the best-performing combinations and close the remaining gap to 20 million. Release the reserve only when the live forecast shows it is necessary.",
          budget: "$13,333 base / 4.0M modeled views",
          tactics: [
            "$6,666.50 per protected regional pool",
            "Use up to $3,333 in reserve only with written approval",
            "Any reserve release is split 50/50 across the two regional pools",
            "Complete final QA, reconciliation, and market-by-market reporting",
          ],
        },
      ],
      footnote:
        "Phase budgets are directional deployment tranches. Total base media and the 50/50 regional split are fixed; within-region allocation changes only when performance data earns the move.",
    },

    {
      type: "pricing",
      number: "06",
      navLabel: "Budget",
      title: "Working Media Investment",
      intro:
        "The base model funds 20,000,100 projected views at the current planning CPVs. The additional $3,333 is not pre-committed spend; it is an authorization ceiling available only if auction conditions require it to complete the target.",
      breakdownLabel: "Budget Breakdown",
      deployableLabel: "Base Media To Google Ads",
      tiers: [
        {
          label: "Recommended Authorization",
          budget: "$70,000",
          name: "Maximum Google Ads Media",
          tagline:
            "$66,667 base media plus an optional $3,333 delivery reserve. Campaign spend stops when the approved target is reached or the ceiling is exhausted—whichever comes first.",
          deployable: "$66,667 base + reserve only if required",
          breakdown: [
            { vertical: "Philippines / SEA base media (50%)", amount: "$33,333.50" },
            { vertical: "U.S. / Canada base media (50%)", amount: "$33,333.50" },
            { vertical: "Uncommitted delivery reserve", amount: "Up to $3,333" },
            { vertical: "CCD strategy, setup, optimization & reporting", amount: "$0" },
          ],
          feeBreakdown: {
            retainer: "$0",
            retainerDetail: "Pro bono engagement",
            mediaManagement: "$0",
            mediaManagementDetail: "Standard 15% fee waived in full",
            mediaManagementLabel: "Media Management",
          },
          featured: true,
        },
      ],
      footnote:
        "Media is billed directly through Google Ads. Taxes, currency conversion, creative production, and third-party costs are outside this authorization.",
    },

    {
      type: "vertical",
      number: "07",
      navLabel: "Scope",
      title: "Execution, Reporting & Boundaries",
      philosophy:
        "CCD manages the entire Google Ads flight pro bono. Sun Chaser funds media; the standard 15% management fee is waived.",
      subBlocks: [
        {
          label: "A",
          title: "Campaign Operations",
          objective:
            "Launch, manage, and optimize the two-region YouTube view flight from setup through reconciliation.",
          components: {
            heading: "Included",
            items: [
              "Media strategy, forecasting, campaign architecture, and launch QA",
              "Geographic, contextual, broad-interest, format, and device setup",
              "Budget pacing, bid optimization, placement exclusions, and brand-safety review",
              "Pilot-first asset trafficking and supporting-asset caps",
              "Weekly performance reporting and forecast updates",
              "Final campaign readout with market-by-market recommendations",
            ],
          },
        },
        {
          label: "B",
          title: "Measurement",
          objective:
            "Separate scale from quality so the team can explain exactly what the campaign bought and where it worked.",
          components: {
            heading: "Reported Metrics",
            items: [
              "Views, spend, CPV, and view rate by region and market",
              "25%, 50%, 75%, and 100% video completion",
              "Average view duration, frequency, device, and placement quality",
              "Paid versus organic views in YouTube Studio",
              "Public counter reconciliation and earned channel actions where eligible",
              "Final benchmark for future episode and distribution campaigns",
            ],
          },
        },
        {
          label: "C",
          title: "Outside This Scope",
          objective:
            "Keep the engagement focused on one measurable job: acquiring YouTube views through Google Ads.",
          components: {
            heading: "Excluded",
            items: [
              "New animation, reshoots, cutdown editing, captioning, or translation production",
              "Organic channel management, SEO, community moderation, or social posting",
              "Paid social, influencer, PR, programmatic, display, or non-Google media",
              "Kickstarter traffic or conversion campaigns",
              "Rights clearances, music licensing, taxes, or currency-conversion costs",
              "Guaranteed public-counter timing or guaranteed auction CPVs",
            ],
          },
          linksHeading: "Campaign References",
          links: [
            {
              label: "Sun Chaser — Official Pilot",
              url: "https://www.youtube.com/watch?v=dz5cYKHLDBk",
            },
            {
              label: "Sun Chaser — Toon City Project Page",
              url: "https://www.tooncityanimation.com/projects/sun-chaser",
            },
          ],
        },
      ],
      footnote:
        "Launch dependencies: linked YouTube channel and Google Ads account, active billing, approved URLs and assets, rights confirmation, and the video's Made for Kids designation.",
    },
  ],
};
