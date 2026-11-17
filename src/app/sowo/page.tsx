import type { Metadata } from "next";
import SowoClient from "./client";
import { en } from "@/lib/sowo/copy";

const TITLE = "SOWØ × Crowd Control Digital | From Ø to the wave";
const DESC = "A debut growth plan for SOWØ and OD UNIVERSE: comparables, KPI math, paid media and a Europe-first market plan from Dec 2026 to the EP.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/sowo", languages: { en: "/sowo", ko: "/sowo-ko" } },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "/sowo", siteName: "Crowd Control Digital", images: [{ url: "/sowo/opengraph-image?v=1", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/sowo/opengraph-image?v=1"] },
};

export default function SowoPage() {
  return <SowoClient c={en} />;
}
