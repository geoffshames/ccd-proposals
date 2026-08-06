import type { Metadata } from "next";
import { CrownRipsClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "CrownRips — Experiential Launch Concepts | Crowd Control Digital",
  description:
    "Seven costed experiential activation concepts for the CrownRips launch. The pull is real.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "THE PULL IS REAL.",
    description:
      "Seven experiential launch concepts for CrownRips. Built by Crowd Control Digital.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/crownrips",
    images: [
      {
        url: "/images/crownrips/og-image.png",
        width: 1200,
        height: 630,
        alt: "THE PULL IS REAL. CrownRips experiential launch concepts.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE PULL IS REAL.",
    description:
      "Seven experiential launch concepts for CrownRips. Built by Crowd Control Digital.",
    images: ["/images/crownrips/og-image.png"],
  },
};

export default function CrownRipsPage() {
  return <CrownRipsClient />;
}
