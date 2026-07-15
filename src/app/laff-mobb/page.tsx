import type { Metadata } from "next";
import { LaffMobbClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "FKD UP! | Laff Mobb Studios × Crowd Control Digital",
  description:
    "Comedy culture is back, and it is FKD UP. A cultural comedy movement built for brand partners, from Laff Mobb Studios and Crowd Control Digital.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "FKD UP! | Laff Mobb Studios",
    description:
      "Not a film. A movement. The cultural comedy ecosystem for the audience Hollywood forgot, and where a brand plugs in.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/laff-mobb",
    images: [
      {
        url: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/mcJtmTI2Jm0WTYY4VLdbI.png",
        width: 1200,
        height: 630,
        alt: "FKD UP! / Laff Mobb Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FKD UP! | Laff Mobb Studios",
    description:
      "A cultural comedy movement built for brand partners. 50+ college markets, Regal + Improv, a Q4 2026 theatrical.",
  },
};

export default function LaffMobbPage() {
  return <LaffMobbClient />;
}
