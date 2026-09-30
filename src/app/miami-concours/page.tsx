import type { Metadata } from "next";
import MiamiConcoursClient from "./client";

const TITLE = "Miami Concours: Digital Audit | Crowd Control Digital";
const DESC =
  "A digital audit of Miami Concours ahead of the tenth edition: website, social, sentiment, video AI, search demand, competition, and a paid media plan for February 2027.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/miami-concours" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/miami-concours",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/miami-concours/og-image.png", width: 1200, height: 630, alt: "Miami Concours digital audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/miami-concours/og-image.png"] },
};

export default function MiamiConcoursPage() {
  return <MiamiConcoursClient />;
}
