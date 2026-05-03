import type { ProjectData } from "../project-context";

/**
 * Internal test proposal for verifying the NDA gate in production.
 * Visit /nda-test on the live site to see the NDA flow end-to-end.
 * Safe to keep around — it's not linked from anywhere.
 */
export const ndaTest: ProjectData = {
  requireNda: true,
  clientLegalName: "NDA Test Co.",
  accentColor: "#FD3737",

  client: {
    name: "NDA Test",
    logo: "",
    contactName: "Test User",
    contactRole: "Tester",
    contactEmail: "geoff@crowdcontroldigital.com",
    industry: "Internal QA",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "NDA Gate Verification",
    tagline: "If you can read this, the NDA gate let you through.",
    type: "Internal QA",
    startDate: "May 1, 2026",
    endDate: "May 31, 2026",
    duration: "1 Month",
    status: "Awaiting Approval" as const,
  },

  overview: {
    summary: "This is a test proposal used to verify the NDA gate works end-to-end. After signing, you should see this page.",
    objectives: ["Verify gate renders", "Verify signature persists", "Verify PDF + emails fire"],
  },

  timeline: [
    {
      phase: "Test phase",
      week: "Week 1",
      date: "May 2026",
      status: "in-progress" as const,
      tasks: ["Verify NDA gate"],
    },
  ],

  deliverables: [
    {
      category: "QA",
      icon: "Check",
      items: [{ name: "NDA gate verification", quantity: "1", description: "End-to-end test" }],
    },
  ],

  scope: {
    included: ["NDA gate functionality"],
    excluded: ["Anything else"],
  },

  quote: {
    currency: "USD",
    lineItems: [{ name: "Test", description: "Test line", price: 0 }],
    subtotal: 0,
    discount: { label: "—", percentage: 0, amount: 0 },
    total: 0,
    paymentSchedule: [{ milestone: "Test", percentage: 100, amount: 0, due: "On approval" }],
    paymentTerms: "—",
    paymentLink: "#",
  },

  nextSteps: [{ step: 1, title: "Verify the gate", description: "You're seeing this page — that means it works." }],

  cta: {
    headline: "NDA gate verified.",
    body: "If you got here through the gate flow, the NDA system is working.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "",
    hero2: "",
    product: "",
    editorial: "",
    texture: "",
    brutalist: "",
  },
};
