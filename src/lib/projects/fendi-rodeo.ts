import type { ProjectData } from "../project-context";

/**
 * Fendi × Installazioni US — Rodeo Drive flagship refurbishment.
 * NDA-gated. Built as an example proposal for a contractor friend
 * to show the proposal-dashboard structure adapted to a build-out bid.
 */
export const fendiRodeo: ProjectData = {
  requireNda: true,
  clientLegalName: "Fendi North America, Inc.",
  accentColor: "#C9A961",

  client: {
    name: "FENDI",
    logo: "",
    contactName: "Director, Store Development — Americas",
    contactRole: "LVMH Fashion Group / Fendi Retail",
    contactEmail: "store-development@fendi.com",
    industry: "Luxury Retail / Flagship Boutiques / LVMH Maison",
  },
  studio: {
    name: "Installazioni US",
    role: "Prepared By: Managing Principal, Installazioni US",
    email: "info@installazioni.us",
  },
  project: {
    name: "RODEO DRIVE FLAGSHIP — REFURBISHMENT",
    tagline:
      "A full interior refit of the Beverly Hills flagship — delivered on the Italian standard, executed inside a Beverly Hills permit envelope, on a holiday-blackout schedule, with a single accountable principal on the Rodeo sidewalk every working day.",
    type: "General Contracting + Italian Millwork Coordination",
    startDate: "June 8, 2026",
    endDate: "October 12, 2026",
    duration: "18 Weeks",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Mandate",
    summary:
      "This is the full interior refit of the Fendi flagship at 201 North Rodeo Drive — approximately 6,500 square feet across two floors plus a regrade of the Rodeo and Wilshire-facing storefront glazing. Installazioni US holds the GMP, the schedule, and the permit posture. Our Italian parent firm fabricates and installs the millwork, marble, and bespoke elements off the Maison's drawings — which means the casework, polished plaster, travertine, and brushed-brass program lands on Rodeo Drive at the same finish level it would land on Avenue Montaigne or Via Montenapoleone, without the four-month transatlantic coordination tail. The work is sequenced around two non-negotiables: (1) Beverly Hills construction-noise and street-frontage protocols, and (2) the LVMH calendar — substantial completion before the November holiday window so visual merchandising and the global re-opening can land on the planned date.",
    objectives: [
      "Deliver a flawless flagship reset at the LVMH global retail standard — finish quality, lighting calibration, and acoustic envelope all matched against the Maison's current European reference stores",
      "Coordinate the Italian millwork, Carrara and travertine stone program, and bespoke MEP in-house through our Treviso-based parent firm — eliminating the typical three-party fabricator → freight → US-installer telephone chain that costs luxury retail projects 4–8 weeks and one or two finish-quality regressions",
      "Maintain operational continuity with Beverly Hills and the Rodeo Drive BID — full storefront barricade graphics, scheduled deliveries through the alley, off-hours noisy work, and zero impact to neighboring tenants (Bottega Veneta to the south, Loro Piana across)",
      "Hold the GMP — a fixed-price posture with a transparent change-order protocol, so the Maison's store development team can forecast spend cleanly through Q3 close",
      "Hand off a punch-list-clean, fully commissioned store to the visual merchandising team on the published date, with all warranties, O&M manuals, and the Italian sub network on-call for the first 90 days post-opening",
    ],
    subtitle:
      "One accountable principal. Italian-fabricated finish program. Beverly Hills permit-and-protocol fluency. GMP held at 5.45M USD inclusive of Italian fabrication, freight, install, and a 6% contingency carried under our line.",
    imageCaption: "Reference: Fendi Avenue Montaigne (Paris) — the finish standard the Rodeo refit is benchmarked against.",
    stats: [
      { value: 6500, suffix: " sqft", label: "Total Area", description: "Two floors plus storefront regrade — ground retail, mezzanine VIP suite, and the Rodeo + Wilshire glazing program" },
      { value: 18, label: "Week Schedule", description: "GMP-baseline schedule from permit-issue to substantial completion, with November VM handoff buffer baked in" },
      { value: 5.45, suffix: "M", label: "GMP (USD)", description: "Fixed-price guaranteed maximum — Italian fabrication, freight, install, all subs, and 6% contingency carried under our line" },
      { value: 0, label: "OSHA Recordables", description: "Zero-incident track record across our last 14 luxury retail projects in California" },
    ],
  },

  discovery: {
    heading: "What The Walkthrough And The Drawings Confirmed",
    summary:
      "Before pricing this GMP, our principal walked the existing store with the Maison's store development team, pulled the as-built MEP set from the City of Beverly Hills permit archive, and reconciled the Italian architect-of-record drawings against the local code envelope. The findings below are the specific risk lines we've absorbed into our number — not exposures the Maison is going to eat as change orders.",
    insights: [
      {
        label: "Beverly Hills Permit Window",
        finding:
          "The City of Beverly Hills runs a tighter plan-check than any other municipality in luxury retail's Western US footprint — average first-round comments on a tenant improvement of this scope land at 4–6 weeks, and Rodeo Drive frontage triggers a Cultural Heritage and Architectural Commission courtesy review on any storefront glazing modification. We've pre-walked our drawings with the City's senior plan checker and the BID's design liaison so the issued permit lands on Week 3, not Week 8. This single risk line is what kills the schedule on every other GC's bid.",
        source: "Pre-application meeting with City of Beverly Hills Community Development, May 2026",
      },
      {
        label: "Italian Fabrication Lead Time",
        finding:
          "The Maison's interiors program — the brushed-brass case lines, the travertine pedestals, the polished-plaster wall system, the leather-clad fitting room cabinetry — is typically fabricated in Treviso and Pesaro. Standard transatlantic lead time on this scope is 14–18 weeks; on a Beverly Hills retrofit with HVAC penetrations and seismic clip detailing, the field-condition revision cycle adds another 3–5. Because Installazioni US is the US delivery arm of the Treviso shop, our shop drawings, prototype reviews, and fabrication slots are already booked against this project. Lead time on our line: 9 weeks, parallel to demolition and MEP rough-in. Net schedule recovery: 6–9 weeks vs. an outside GC routing through a separate Italian fabricator.",
        source: "Treviso fabrication-floor capacity calendar + project-specific lead-time letter, May 2026",
      },
      {
        label: "Existing MEP — Underbuilt for the New Lighting Load",
        finding:
          "The 2018-vintage panel and the existing HVAC tonnage will not carry the new lighting program without a service upgrade. The Maison's lighting designer specs roughly 4,200 W of theatrical and accent lighting for the ground floor alone — the existing panel is sitting at 78% utilization on a stress test we ran during the walkthrough. We've priced a 400A subpanel addition, two new 7.5-ton VRF heads, and a complete branch-circuit recook on this floor. This work has to happen in Phase 2 to clear the way for the millwork install in Phase 4, and the long-lead VRF equipment is on order against this proposal pending GMP signature.",
        source: "On-site electrical load calc + as-built panel schedule review, May 2026",
      },
      {
        label: "Storefront Glazing — Cultural Heritage Review",
        finding:
          "Any change to the Rodeo Drive frontage glazing — including the brass-framed entry portal the Maison has on its design intent drawings — triggers an Architectural Commission courtesy review. We've included two scheduled commission appearances and a Plan B finish package in our price, so the schedule does not move if the first appearance comes back with material-finish notes. This is the single most common slip line on Rodeo Drive retrofits and we've absorbed it.",
        source: "City of Beverly Hills Cultural Heritage Commission protocols + Rodeo Drive frontage history",
      },
      {
        label: "Adjacent Tenants & The Rodeo Drive BID",
        finding:
          "Bottega Veneta, Loro Piana, and David Yurman all sit within demising-wall transmission of this work. The Rodeo Drive BID's noise protocol on Rodeo-frontage construction is stricter than the underlying City code — concrete saw-cutting and any percussive demolition is restricted to 7am–9am and after 6pm Mon–Thu, no work Fri 4pm onward through Sun on holiday weekends. Our schedule is built against the BID protocol, not the City baseline. Outside GCs price against the City and lose 10–14 working days when the BID lands on them in Week 2.",
        source: "Rodeo Drive Business Improvement District construction MOU + adjacent-tenant briefing",
      },
    ],
    marketContext:
      "Luxury-retail GMP buildouts on Rodeo Drive are running 850–1,150 USD per square foot for full Maison-level finish programs in 2026, per recent comparable bids we've seen from peer projects. Our 5.45M GMP at approximately 838 USD per square foot is at the disciplined end of that band — achievable specifically because the Italian fabrication, freight, and install consolidate inside one entity rather than getting marked up at three separate handoffs.",
  },

  audience: {
    heading: "Who's On This Job",
    summary:
      "Installazioni US runs lean by design. The Maison gets one accountable principal on the sidewalk, one project executive in the trailer, and a tightly held subcontractor bench — every name below has built luxury retail in Beverly Hills, Costa Mesa, or San Francisco in the last 36 months.",
    demographics: "Project team — single principal accountability with senior PE and APM in-trailer full time.",
    demographicCards: [
      { label: "Principal in Charge", value: "Sidewalk daily", detail: "Single-throat accountability — the same principal who walks the punch-list also signs the GMP" },
      { label: "Project Executive", value: "Full time on-site", detail: "Senior PE with three Rodeo Drive flagships in their last five years" },
      { label: "Italian Liaison", value: "Treviso ↔ BH", detail: "Bilingual lead bridging the fabrication shop, the Maison's architect of record, and the field" },
      { label: "Superintendent", value: "Two shifts", detail: "Day and second-shift supers carrying the BID-protocol schedule without burning the crew" },
    ],
    psychographics: [
      "We work for the Maison, not the architect of record — the AOR's drawings are the law, but our communication is direct to the store development team and the regional VP",
      "We carry our own contingency under our line — no surprise change orders for conditions a competent GC should have priced",
      "We protect the neighbors — Bottega, Loro Piana, and Yurman get a courtesy briefing before every noisy phase",
      "We hand off clean — punch-list closes before VM walks the door, not after",
    ],
    painPoints: [
      "GMP slippage from Italian fabrication delays — solved by holding fabrication inside our own entity",
      "Beverly Hills plan-check surprises — solved by pre-app meetings and the Plan B finish package",
      "BID noise-protocol misses — solved by sequencing percussive work into the protocol's allowed windows from Day One",
      "Punch-list drag past VM — solved by a dedicated punch crew running parallel to commissioning in Phase 5",
    ],
  },

  targets: [
    {
      metric: "Schedule Variance vs. GMP Baseline",
      value: "≤ 5%",
      context: "Tracked weekly against the published critical-path schedule — Maison receives a pacing report every Friday with any drift flagged before it can compound",
    },
    {
      metric: "Cost Variance vs. GMP",
      value: "≤ 3%",
      context: "All change orders routed through our PE for the Maison's pre-approval — historical performance on luxury retail GMPs is 1.8% net variance carried inside contingency",
    },
    {
      metric: "Punch List Close-Out",
      value: "< 14 days",
      context: "From substantial completion to fully closed punch — Maison-grade boutiques cannot tolerate a punch tail dragging into the VM install or first month of trade",
    },
    {
      metric: "OSHA Recordable Incidents",
      value: "0",
      context: "Maintained across our last 14 luxury retail projects in California — every sub on this job carries an EMR under 0.85",
    },
  ],

  competitive: {
    summary:
      "Three categories of GC will bid this job. We are explicit about what each does well and where we sit against them — the Maison should pick the team whose strengths match the actual risk profile of a Rodeo Drive flagship on an 18-week clock.",
    competitors: [
      {
        name: "Institutional Generalists (Plant, Hathaway Dinwiddie)",
        gap: "Built for ground-up scale and corporate fit-outs — overhead and PM cadence aren't tuned for an 18-week luxury retrofit. Italian fabrication routing through a sub-vendor adds 4–6 weeks and one finish-quality regression on every comparable project.",
        strength: "Bonding capacity, institutional process",
      },
      {
        name: "Cultural / Museum Builders (MATT Construction, Bernards)",
        gap: "Strong on bespoke detailing and complex finishes, but a thinner luxury-retail bench — less BID-protocol fluency and slower on Italian-spec millwork because they don't carry an Italian fabrication arm.",
        strength: "Detail craft, complex finishes",
      },
      {
        name: "Regional Luxury Build-Out Shops",
        gap: "Right size, right speed, but every one of them outsources Italian millwork to a separate fabricator — which means the Maison eats the freight markup, the field-revision tail, and any quality-control gap between fabrication shop and field installer.",
        strength: "Speed, retail fluency, lower overhead",
      },
      {
        name: "Installazioni US",
        gap: "Single integrated entity — Italian fabrication, freight, US install, GMP holder. The Maison gets one principal, one schedule, one contingency, and one warranty letter covering everything from the marble to the VRF to the brass-framed portal.",
        strength: "Italian integration + Beverly Hills permit-and-protocol fluency",
      },
    ],
  },

  timelineHeading: "Eighteen-Week Schedule",
  timelineSubheading:
    "Five phases, sequenced against the City of Beverly Hills permit calendar, the Italian fabrication slot, the Rodeo BID noise protocol, and the LVMH November holiday window. Every phase ends on a published gate the Maison signs before the next phase starts.",
  timelineImageCaption: "Demolition Week 1 — Wilshire-facing storefront barricaded with Maison-approved brand graphics.",

  timeline: [
    {
      phase: "Pre-Construction & Permitting",
      week: "Weeks 1–3",
      date: "June 8 – June 28, 2026",
      status: "upcoming" as const,
      tasks: [
        "GMP execution, insurance + bonding posted, AOR coordination kickoff with Maison store development",
        "Permit submittal to City of Beverly Hills — all trades, all envelopes — with the pre-app courtesy file already on the plan checker's desk",
        "Cultural Heritage Commission courtesy review for the Rodeo Drive storefront glazing modification — Plan A and Plan B finish packages presented",
        "Italian fabrication shop drawings released — millwork, marble, polished plaster, brass program — Treviso slot locked",
        "Long-lead orders placed: VRF equipment (12-week lead), brass framing system (8-week lead), specialty lighting (6-week lead)",
        "Storefront barricade installed with Maison-approved graphics, alley delivery protocol confirmed with BID and adjacent tenants",
      ],
    },
    {
      phase: "Demolition, Site Logistics & Abatement",
      week: "Weeks 4–5",
      date: "June 29 – July 12, 2026",
      status: "upcoming" as const,
      tasks: [
        "Selective demolition of existing fixtures, finishes, MEP terminations — protected demo around all retained structural and historic elements",
        "Hazmat assessment + abatement on any pre-1990 envelope material exposed during demo (priced under our line, not a contingent CO)",
        "Floor preparation, slab leveling, and seismic anchor mapping for the new millwork load points",
        "Off-hours noisy work scheduled to BID protocol — concrete saw-cutting and percussive demo only in 7–9am and post-6pm windows",
        "Adjacent-tenant courtesy briefing delivered to Bottega, Loro Piana, and Yurman before each percussive day",
      ],
    },
    {
      phase: "MEP / Structural / Envelope",
      week: "Weeks 6–9",
      date: "July 13 – August 9, 2026",
      status: "upcoming" as const,
      tasks: [
        "400A subpanel addition + complete branch-circuit recook for the new lighting program",
        "Two new 7.5-ton VRF heads installed, ductwork rerun, controls integration with the Maison's BMS spec",
        "Plumbing rough-in for the new staff lounge and refurbished VIP suite powder room",
        "Storefront glazing replacement — brass-framed portal install, structural sealant cure window respected",
        "Acoustic envelope upgrade — STC-rated assemblies on the demising walls to Bottega and Loro Piana",
        "Phase 3 close-out gate: rough-in inspection passed, photo-documented as-builts handed to AOR",
      ],
    },
    {
      phase: "Architectural Finishes & Italian Millwork",
      week: "Weeks 10–15",
      date: "August 10 – September 20, 2026",
      status: "upcoming" as const,
      tasks: [
        "First Treviso freight container lands at the alley loading dock Week 10 — millwork, marble pedestals, and the brass case-line system",
        "Polished-plaster wall system applied by the Maison's reference applicator, color-matched against Avenue Montaigne reference panels",
        "Travertine and Carrara stone install — pedestal floors, fitting-room thresholds, the central plinth on the ground floor",
        "Custom millwork installed across both floors — case lines, fitting rooms, VIP suite cabinetry, leather-clad accent walls",
        "Brushed-brass case-line and shelving program seated and aligned to Maison tolerances",
        "Walnut flooring laid on the ground floor, custom rug install on the mezzanine",
        "Mid-phase Maison walkthrough Week 13 — finish-quality review against European reference, any deltas captured under our line",
      ],
    },
    {
      phase: "FF&E, Lighting Calibration & Closeout",
      week: "Weeks 16–18",
      date: "September 21 – October 12, 2026",
      status: "upcoming" as const,
      tasks: [
        "Specialty lighting install + scene programming with the Maison's lighting designer — color temperature, intensity, and theatrical scenes calibrated against the European reference",
        "RFID inventory infrastructure live, security and AV systems commissioned, BMS integration verified",
        "Furniture, fixtures, and equipment install — fitting-room benches, VIP seating, fragile decor and art pieces handled per the Maison's white-glove install spec",
        "Final cleaning, polish, and pre-VM walkthrough — the store is presented to visual merchandising in turnkey condition",
        "Substantial completion certificate, punch list issued, dedicated punch crew running parallel to first VM week",
        "Final close-out: O&M manuals, warranty letters, Italian sub on-call confirmation, training to facilities team — all delivered before the global re-opening",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Five deliverable categories, each one a discrete scope with its own GMP line and its own warranty. The Maison can read this section as the trade-package summary that sits behind the GMP — every dollar above ties to a deliverable below.",

  deliverables: [
    {
      category: "Pre-Construction & Permitting",
      icon: "●",
      items: [
        { name: "Constructability Review + Value Engineering", quantity: "Pre-GMP", description: "Walkthrough, drawing reconciliation, and finish-substitution VE report — delivered before GMP signature, no charge against the project" },
        { name: "City of Beverly Hills Permit Package", quantity: "Full envelope", description: "All trades, all submittals, all responses to plan-check comments — including the Cultural Heritage Commission courtesy filing for the Rodeo storefront" },
        { name: "Long-Lead Procurement Schedule", quantity: "Locked", description: "VRF equipment, brass framing, specialty lighting, Italian fabrication slots — all booked against signed GMP, indemnified under our line" },
        { name: "Site Logistics Plan + BID MOU", quantity: "1 plan", description: "Barricade graphics, alley delivery protocol, noise-window schedule, adjacent-tenant courtesy plan — coordinated with the Rodeo Drive BID and the City" },
      ],
    },
    {
      category: "Demolition, Site Logistics & Abatement",
      icon: "▶",
      items: [
        { name: "Selective Demolition", quantity: "6,500 sqft", description: "Existing fixtures, finishes, and MEP terminations removed under protected-demo protocol — retained structural and historic elements untouched" },
        { name: "Hazmat Assessment + Abatement", quantity: "If found", description: "Priced and absorbed under our GMP — not a contingent change order. Sample testing pre-demo, certified abatement crew on-call, clearance documentation filed with the City" },
        { name: "Slab Prep + Seismic Mapping", quantity: "Both floors", description: "Floor leveling, slab moisture testing, and seismic-anchor layout for the new millwork load points and the brass case-line system" },
        { name: "Storefront Barricade & Adjacent-Tenant Coordination", quantity: "Full duration", description: "Maison-approved graphic barricade, courtesy briefings to Bottega, Loro Piana, and Yurman before every percussive phase" },
      ],
    },
    {
      category: "MEP / Structural / Envelope",
      icon: "◆",
      items: [
        { name: "Electrical Service Upgrade", quantity: "400A added", description: "New subpanel, complete branch-circuit recook tuned to the new lighting program load — sized for 25% headroom on the calculated peak" },
        { name: "VRF Climate System", quantity: "2 × 7.5-ton heads", description: "New VRF heads, ductwork rerun, controls integration with the Maison's BMS spec — the existing system was undersized for the new lighting load" },
        { name: "Plumbing Refurbishment", quantity: "Staff + VIP", description: "New staff lounge plumbing rough-in, VIP suite powder-room refurbishment to Maison spec" },
        { name: "Storefront Glazing Replacement", quantity: "Rodeo + Wilshire", description: "Brass-framed entry portal install, glazing replacement, structural sealant cure window built into the schedule" },
        { name: "Acoustic Envelope Upgrade", quantity: "Demising walls", description: "STC-rated assemblies on the walls shared with Bottega and Loro Piana — protects neighbor experience, protects the Maison's own customer experience post-opening" },
      ],
    },
    {
      category: "Architectural Finishes & Italian Millwork",
      icon: "■",
      items: [
        { name: "Italian Custom Millwork", quantity: "Treviso-fabricated", description: "Case lines, fitting rooms, VIP cabinetry, leather-clad accent walls — fabricated by our parent firm in Treviso, freighted as a single consolidated container, installed by the same crew that fabricated it" },
        { name: "Stone Program — Carrara + Travertine", quantity: "Per drawings", description: "Pedestal floors, fitting-room thresholds, the central plinth — sourced from the Maison's specified quarries, fabricated to Maison-approved templates" },
        { name: "Polished-Plaster Wall System", quantity: "Reference-matched", description: "Applied by the Maison's reference Italian applicator, color-matched against Avenue Montaigne reference panels — verified at the Week 13 walkthrough" },
        { name: "Brushed-Brass Case-Line Program", quantity: "Both floors", description: "Brass framing, brackets, and trim seated to Maison tolerances — finish-protected through the balance of the install with custom soft-edge covers" },
        { name: "Walnut Flooring + Mezzanine Rug Install", quantity: "Both floors", description: "Walnut hardwood on the ground floor, custom rug seated on the mezzanine — both protected with breathable Maison-spec covering until VM walks the door" },
      ],
    },
    {
      category: "FF&E, Lighting Calibration & Closeout",
      icon: "◇",
      items: [
        { name: "Specialty Lighting Install + Scene Programming", quantity: "Full system", description: "Theatrical and accent lighting installed and calibrated with the Maison's lighting designer — color temperature, intensity, and scene programming verified against European reference stores" },
        { name: "RFID, Security + AV Commissioning", quantity: "Full integration", description: "RFID inventory infrastructure live, security and AV systems commissioned, BMS integration verified end-to-end" },
        { name: "FF&E White-Glove Install", quantity: "Full inventory", description: "Fitting-room benches, VIP seating, fragile decor and art pieces handled per the Maison's white-glove install spec — every piece placed by named installers, photographed for the closeout binder" },
        { name: "Punch-List Close & Close-Out Binder", quantity: "< 14 days", description: "Dedicated punch crew running parallel to first VM week, full O&M manuals, warranty letters, and Italian sub on-call confirmation delivered before global re-opening" },
        { name: "First-90-Day Post-Opening Support", quantity: "On-call", description: "Italian sub network on-call for the first 90 days post-opening — any finish, fixture, or MEP issue handled inside 48 hours, no charge above the GMP" },
      ],
    },
  ],

  scope: {
    subheading:
      "This is what's in our 5.45M GMP and what isn't. Anything below 'Excluded' is the Maison's scope or sits with another consultant — not a hidden change-order line.",
    included: [
      "All general conditions, supervision, and project management for the 18-week schedule",
      "Full demolition, hazmat assessment and abatement (if found), site logistics, and barricade graphics",
      "Complete MEP package — 400A electrical service upgrade, two new VRF heads, plumbing refurbishment, BMS integration",
      "Storefront glazing replacement and brass-framed entry portal — Rodeo and Wilshire frontages",
      "Italian custom millwork, stone program (Carrara + travertine), polished-plaster wall system, brushed-brass case lines, walnut flooring",
      "Specialty lighting install and scene programming with the Maison's lighting designer",
      "RFID inventory, security, and AV commissioning",
      "FF&E white-glove install and final cleaning",
      "All required permits, plan-check responses, Cultural Heritage Commission courtesy review, and BID coordination",
      "All freight, customs, and logistics on the Italian fabrication container",
      "6% contingency carried under our line — change orders draw from this pool first, not from the Maison's reserve",
      "First 90 days of post-opening on-call support — Italian sub network responsive inside 48 hours",
    ],
    excluded: [
      "Architectural and interior design fees — sit with the Maison's architect of record and the European interior design office",
      "Maison-supplied fixtures and merchandise — visual merchandising owns receipt and installation of all goods on the sales floor",
      "Permit fees and impact fees paid directly to the City of Beverly Hills — passed through at cost, not marked up",
      "Utility-company connection fees on the upgraded electrical service — passed through at cost",
      "Any structural seismic upgrade outside the millwork load-point work (no current indicator one is required)",
      "Cleaning, security, and operations after the global re-opening — Maison's facilities and ops teams own that line",
    ],
  },

  quote: {
    model: "project",
    currency: "USD",
    lineItems: [
      {
        name: "Pre-Construction & Permitting",
        description: "Permit envelope, Cultural Heritage Commission filing, long-lead procurement, site logistics plan, BID coordination",
        price: 245000,
      },
      {
        name: "Demolition, Site Logistics & Abatement",
        description: "Selective demolition, hazmat (if found), slab prep, seismic mapping, barricade graphics, adjacent-tenant coordination",
        price: 380000,
      },
      {
        name: "MEP / Structural / Envelope",
        description: "400A service upgrade, 2× VRF heads, plumbing refurbishment, storefront glazing replacement, acoustic envelope upgrade",
        price: 1185000,
      },
      {
        name: "Architectural Finishes & Italian Millwork",
        description: "Italian custom millwork (Treviso-fabricated), Carrara + travertine stone program, polished-plaster wall system, brushed-brass case lines, walnut flooring + mezzanine rug",
        price: 2640000,
      },
      {
        name: "FF&E, Lighting Calibration & Closeout",
        description: "Specialty lighting install + scene programming, RFID + security + AV commissioning, FF&E white-glove install, punch-list close, first-90-day post-opening support",
        price: 690000,
      },
      {
        name: "Contingency (6% — carried under GC line)",
        description: "Change orders draw from this pool first; any unspent contingency is credited back to the Maison at close-out",
        price: 310000,
      },
    ],
    subtotal: 5450000,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    total: 5450000,
    paymentSchedule: [
      {
        milestone: "GMP Execution + Mobilization",
        percentage: 15,
        amount: 817500,
        due: "Upon GMP signature",
      },
      {
        milestone: "MEP Rough-In Approval",
        percentage: 25,
        amount: 1362500,
        due: "End of Week 9",
      },
      {
        milestone: "Finishes + Italian Millwork Start",
        percentage: 25,
        amount: 1362500,
        due: "End of Week 11",
      },
      {
        milestone: "Substantial Completion",
        percentage: 25,
        amount: 1362500,
        due: "End of Week 18",
      },
      {
        milestone: "Punch List Close + Retention Release",
        percentage: 10,
        amount: 545000,
        due: "Within 14 days of Substantial Completion",
      },
    ],
    paymentTerms: "Net 15 from Maison-approved invoice. AIA G702/G703 billing format. 10% retention released at punch-list close.",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Mutual NDA Executed",
      description:
        "Our standard mutual NDA covers the Maison's interior design intent, finish samples, store-development calendar, and any pricing in this proposal. Already executed by virtue of the gate on this page — counter-signed copy returned to the Maison's store development team within 24 hours.",
    },
    {
      step: 2,
      title: "GMP Walk-Through With Store Development",
      description:
        "60-minute on-site walk-through with the Maison's Director of Store Development Americas and our Principal in Charge — every line in this GMP read against the actual conditions. We expect to leave the meeting with an executable GMP, not a redline tail.",
    },
    {
      step: 3,
      title: "GMP Execution + Long-Lead Release",
      description:
        "On signature, we release the long-lead orders (VRF, brass, lighting) and lock the Treviso fabrication slot. Permit package goes to the City of Beverly Hills the same week. Storefront barricade with Maison graphics installed inside 14 days of signature.",
    },
    {
      step: 4,
      title: "Weekly Pacing Report + Bi-Weekly Walk",
      description:
        "Every Friday: written pacing report against the published critical-path schedule. Every other Wednesday: on-site walk with store development. Mid-phase Maison finish-quality walkthrough Week 13. No surprises, ever.",
    },
    {
      step: 5,
      title: "Substantial Completion → VM Handoff → Re-Opening",
      description:
        "Week 18 substantial completion, punch-list close inside 14 days, VM walks a turnkey store, global re-opening lands on the published date. Italian sub network on-call for the first 90 days.",
    },
  ],

  cta: {
    headline: "One principal. One schedule. One GMP. One Italian fabrication line.",
    body:
      "We've built this for the Maison because the Maison shouldn't have to manage three handoffs between fabricator, freight broker, and field installer to land a Rodeo Drive flagship on time. Sign the GMP, and the next conversation is the Friday pacing report. Reach out directly to our principal when you're ready.",
    email: "info@installazioni.us",
  },

  images: {
    hero1: "/images/fendi-rodeo/hero1.png",
    heroBg: "/images/fendi-rodeo/hero1.png",
    hero2: "/images/fendi-rodeo/hero2.png",
    product: "/images/fendi-rodeo/product.png",
    editorial: "/images/fendi-rodeo/editorial.png",
    texture: "/images/fendi-rodeo/texture.png",
    brutalist: "/images/fendi-rodeo/brutalist.png",
    hero1Caption: "Reference: European flagship finish standard — the bar this Rodeo Drive refit is built against.",
    brutalistCaption: "Storefront design intent — Rodeo Drive frontage, brass-framed entry portal.",
    ogImage: "/images/fendi-rodeo/og-image.png",
  },
};
