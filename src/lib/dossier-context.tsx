"use client";

import { createContext, useContext, type ReactNode } from "react";

/**
 * DossierData — the shape of a Catalog Reactivation Dossier.
 *
 * Different from ProjectData (proposals). A dossier is an intelligence-style
 * strategy document, not a sales deck: cover -> brief -> catalog map -> state
 * of play -> findings -> thesis -> plan -> physical drops -> experiential ->
 * sync briefs -> comparable plays -> math -> pilot memo -> sign-off.
 */
export type DossierData = {
  /** Always true for catalog work. The deploy gates behind a mutual NDA. */
  requireNda?: boolean;
  /** Legal entity that signs the NDA (defaults to subject.name). */
  clientLegalName?: string;

  /** The asset under review. */
  subject: {
    name: string;
    /** Optional artist / owner / parent shown above the name on the cover. e.g. "Creedence Clearwater Revival" above "Have You Ever Seen the Rain". Omit for label dossiers where name is the parent. */
    parent?: string;
    kind: "label" | "song" | "album" | "catalog-bundle" | "estate";
    parentEntity: string;
    /** e.g. "Pop-punk, post-hardcore, metalcore (1994-now)" */
    coverage: string;
  };

  /** Document metadata that appears on the cover. */
  document: {
    number: string;
    classification: string;
    preparedBy: string;
    preparedFor: string;
    date: string;
  };

  /** One-paragraph executive read. */
  brief: {
    headline: string;
    body: string;
  };

  /** Heat-table of catalog assets (artists, songs, sub-catalogs). */
  catalogMap: {
    heading: string;
    note: string;
    columns: string[];
    rows: {
      tier: "S" | "A" | "B" | "C";
      name: string;
      status: string;
      monthlyListeners: number;
      topTrack: string;
      topTrackStreams?: string;
      reactivationRead: string;
    }[];
    totals: {
      label: string;
      value: string;
      detail: string;
    }[];
  };

  /** Editorial narrative on the catalog's current condition. */
  stateOfPlay: {
    heading: string;
    paragraphs: string[];
  };

  /** Numbered findings F-01, F-02... */
  findings: {
    code: string;
    label: string;
    finding: string;
    soWhat: string;
    source: string;
  }[];

  /** Editorial thesis paragraph(s). */
  thesis: {
    heading: string;
    paragraphs: string[];
    pullQuote?: string;
  };

  /** 90-day plan. Render as phase timeline if phases[] present; falls back to tracks (legacy gantt) otherwise. */
  plan: {
    heading: string;
    note: string;
    weeks: number;
    /** Preferred: phase-timeline layout. Each phase covers a contiguous week range with grouped activities. */
    phases?: {
      code: string;          // "P-01"
      name: string;          // "Audit + Priority Lock"
      startWeek: number;
      endWeek: number;
      dateLabel?: string;    // optional human label, e.g. "Q3 2026 — Month 1"
      activities: string[];  // 3-6 bullets describing what happens in this phase
    }[];
    /** Legacy: gantt-style. Kept for backward compatibility. */
    tracks?: {
      name: string;
      bars: { startWeek: number; endWeek: number; label: string }[];
    }[];
  };

  /** Physical drops menu - product cards. */
  physicalDrops: {
    heading: string;
    note: string;
    items: {
      code: string;
      title: string;
      format: string;
      variants: string;
      vendor: string;
      msrp: string;
      margin: string;
      narrative: string;
    }[];
  };

  /** Experiential / pop-up venue cards. */
  experiential: {
    heading: string;
    note: string;
    items: {
      code: string;
      city: string;
      venueType: string;
      partnerCandidates: string;
      format: string;
      leadTime: string;
      productionBand: string;
      narrative: string;
    }[];
  };

  /** Engagement engine: digital marketing, content strategy, creator + paid + owned channels. */
  engagementEngine: {
    heading: string;
    note: string;
    channels: {
      code: string;       // EE-01, EE-02 ...
      name: string;       // "Owned Channels — Laylo / Email / SMS"
      role: string;       // one-line role description
      plays: string[];    // 3-6 specific tactics
      deliverables: string[]; // 2-4 ship-this items
      cadence: string;    // monthly / drop-day / always-on
    }[];
  };

  /** Editorial comparable plays. */
  comparablePlays: {
    heading: string;
    note: string;
    items: {
      title: string;
      year: string;
      what: string;
      result: string;
      takeaway: string;
    }[];
  };

  /** Modeled outcomes - conservative / expected / best. */
  math: {
    heading: string;
    note: string;
    columns: ["Conservative", "Expected", "Best"];
    rows: {
      lever: string;
      conservative: string;
      expected: string;
      best: string;
    }[];
    totalRow: {
      label: string;
      conservative: string;
      expected: string;
      best: string;
    };
    assumptions: string[];
  };

  /** Engagement pilot memo - pared down. */
  pilot: {
    heading: string;
    feeUsd: number;
    duration: string;
    paymentTerms: string;
    paymentSchedule: string[];
    passthroughNote: string;
    nextStepsNote: string;
  };

  /** Sign-off block. */
  signOff: {
    preparedBy: string;
    contactName: string;
    contactRole: string;
    contactEmail: string;
    classification: string;
    date: string;
    closing: string;
  };

  /**
   * Optional imagery, generated via Higgsfield. All renders are era + atmosphere
   * — no public-figure faces, no copyrighted album art, no logos.
   */
  images?: {
    /** Cover hero background photo. Renders at low opacity behind the cover text. */
    heroBg?: string;
    /** Optional foreground hero on the Cover. */
    coverHero?: string;
    /** Vinyl / merch product mockups, keyed to PD-01..PD-04 codes. */
    productMockups?: { code: string; url: string; caption?: string }[];
    /** Pop-up / experiential venue concept renders, keyed to EX-01..EX-04 codes. */
    experientialMockups?: { code: string; url: string; caption?: string }[];
  };
};

const DossierContext = createContext<DossierData | null>(null);

export function DossierProvider({
  data,
  children,
}: {
  data: DossierData;
  children: ReactNode;
}) {
  return (
    <DossierContext.Provider value={data}>{children}</DossierContext.Provider>
  );
}

export function useDossier(): DossierData {
  const ctx = useContext(DossierContext);
  if (!ctx) throw new Error("useDossier must be used within DossierProvider");
  return ctx;
}
