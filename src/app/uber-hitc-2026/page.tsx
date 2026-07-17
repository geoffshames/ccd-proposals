import type { Metadata } from "next";
import { UberHitcClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Uber × Head In The Clouds 2026 | Paid Media Proposal",
  description:
    "A paid social campaign and partnership activation plan for Uber around Head In The Clouds Los Angeles 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "The First Stage Is The Ride",
    description: "Uber × Head In The Clouds 2026. Built by Crowd Control Digital.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/uber-hitc-2026",
    images: [
      {
        url: "/uber-hitc-2026/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The First Stage Is The Ride. Uber × Head In The Clouds 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The First Stage Is The Ride",
    description: "Uber × Head In The Clouds 2026. Built by Crowd Control Digital.",
    images: ["/uber-hitc-2026/opengraph-image"],
  },
};

export default function UberHitcPage() {
  return <UberHitcClient />;
}
