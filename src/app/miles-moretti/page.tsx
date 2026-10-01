import type { Metadata } from "next";
import MilesMorettiClient from "./client";

const TITLE = "Miles Moretti: Creator Audit | Crowd Control Digital";
const DESC = "Internal creator audit. Not for distribution.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/miles-moretti" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/miles-moretti",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/miles-moretti/og-image.png", width: 1200, height: 630, alt: "Crowd Control Digital: internal creator audit" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/miles-moretti/og-image.png"] },
};

export default function MilesMorettiPage() {
  return <MilesMorettiClient />;
}
