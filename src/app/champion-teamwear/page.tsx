import type { Metadata } from "next";
import { ChampionTeamwearClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Champion Teamwear | Brand & Sentiment Decision Dossier",
  description:
    "A Champion Teamwear-specific brand, customer sentiment, competitive, and 90-day strategic diagnostic prepared by Crowd Control Digital.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Champion Teamwear | Brand & Sentiment Decision Dossier",
    description:
      "Good product-market permission. Inconsistent trust delivery. The evidence and the 90-day decision path.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/champion-teamwear",
  },
  twitter: {
    card: "summary_large_image",
    title: "Champion Teamwear | Brand & Sentiment Decision Dossier",
    description:
      "A Teamwear-specific diagnostic. Champion retail signals are treated only as halo, never as direct evidence.",
  },
};

export default function ChampionTeamwearPage() {
  return <ChampionTeamwearClient />;
}
