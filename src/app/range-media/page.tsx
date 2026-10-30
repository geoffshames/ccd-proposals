import type { Metadata } from "next";
import RangeMediaClient from "./client";

const TITLE = "Range Media Partners: Content Intelligence Proposal | Crowd Control Digital";
const DESC = "A Range-specific system for own-content and affinity-artist analysis, early spike alerts and organic vs paid seeding reads. V1 in two to three months.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/range-media" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/range-media",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/range-media/og-range-media.png", width: 1200, height: 630, alt: "Range Media Partners content intelligence proposal by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/range-media/og-range-media.png"] },
};

export default function RangeMediaPage() {
  return <RangeMediaClient />;
}
