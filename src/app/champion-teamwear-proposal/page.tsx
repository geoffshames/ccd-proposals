import type { Metadata } from "next";
import { ChampionTeamwearProposalClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Champion Teamwear | Confidential Growth Partnership Proposal",
  description:
    "A strategy-first growth partnership for Champion Teamwear, prepared by Crowd Control Digital.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Build the Teamwear Growth System",
    description:
      "Champion Teamwear and Crowd Control Digital. Brand, growth, channel, and activation strategy for the next phase.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/champion-teamwear-proposal",
    images: [
      {
        url: "/champion-teamwear-proposal/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Champion Teamwear growth partnership proposal by Crowd Control Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build the Teamwear Growth System",
    description:
      "A confidential growth partnership proposal for Champion Teamwear.",
    images: ["/champion-teamwear-proposal/opengraph-image"],
  },
};

export default function ChampionTeamwearProposalPage() {
  return <ChampionTeamwearProposalClient />;
}
