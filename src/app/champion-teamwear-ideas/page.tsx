import type { Metadata } from "next";
import { ChampionTeamwearIdeasClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Champion Teamwear | Marketing Ideas",
  description:
    "Six marketing ideas for signing up more youth teams, clubs and schools, prepared for Champion Teamwear by Crowd Control Digital.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Champion Teamwear Marketing Ideas",
    description:
      "Six ideas for signing up more youth teams, clubs and schools, each built to win over the coach who approves the order and the kid who wears it.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/champion-teamwear-ideas",
    images: [
      {
        url: "/champion-teamwear-ideas/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Champion Teamwear marketing ideas by Crowd Control Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Champion Teamwear Marketing Ideas",
    description:
      "Six marketing ideas for Champion Teamwear from Crowd Control Digital.",
    images: ["/champion-teamwear-ideas/opengraph-image"],
  },
};

export default function ChampionTeamwearIdeasPage() {
  return <ChampionTeamwearIdeasClient />;
}
