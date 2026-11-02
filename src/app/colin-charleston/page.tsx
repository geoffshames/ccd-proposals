import type { Metadata } from "next";
import ColinClient from "./client";

const TITLE = "Colin x Crowd Control Digital: Charleston Lead Gen Proposal";
const DESC = "Phase 1: a new site and geo-targeted paid lead gen for buyers, sellers and people relocating to Charleston. Phase 2: Colin's own listings and data platform.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/colin-charleston" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/colin-charleston",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/colin-charleston/og-image.png", width: 1200, height: 630, alt: "Charleston lead gen proposal by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/colin-charleston/og-image.png"] },
};

export default function ColinPage() {
  return <ColinClient />;
}
