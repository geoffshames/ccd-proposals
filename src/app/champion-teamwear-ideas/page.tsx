import type { Metadata } from "next";
import { ChampionTeamwearIdeasClient } from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Champion Teamwear | Six Growth Ideas for Youth Teams and Schools",
  description:
    "Six ways to sign up more youth teams, clubs and schools, prepared for Champion Teamwear by Crowd Control Digital.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Make Champion the easy yes.",
    description:
      "Six growth ideas for Champion Teamwear, each built to win the person who approves the order and the athlete who wears it.",
    type: "website",
    siteName: "Crowd Control Digital",
    url: "https://proposal.crowdcontroldigital.com/champion-teamwear-ideas",
    images: [
      {
        url: "/champion-teamwear-ideas/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Champion Teamwear growth ideas by Crowd Control Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make Champion the easy yes.",
    description:
      "Six growth ideas for Champion Teamwear from Crowd Control Digital.",
    images: ["/champion-teamwear-ideas/opengraph-image"],
  },
};

export default function ChampionTeamwearIdeasPage() {
  return <ChampionTeamwearIdeasClient />;
}
