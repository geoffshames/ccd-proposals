import type { Metadata } from "next";
import PonziProspectusClient from "@/components/ponzi-bot/PonziProspectusClient";

const TITLE = "Ponzi Bot × Crowd Control Digital — Ponzi Takes Wall Street";
const DESC =
  "Caution tape around the New York Stock Exchange. A $100K launch stunt + social PR campaign engineered so the internet does the advertising.";
const OG = "https://proposal.crowdcontroldigital.com/images/ponzi-bot/og-image.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "https://proposal.crowdcontroldigital.com/ponzi-bot",
    siteName: "Crowd Control Digital",
    images: [{ url: OG, width: 1200, height: 630, alt: "Ponzi Takes Wall Street" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [OG],
  },
};

export default function PonziBotPage() {
  return <PonziProspectusClient />;
}
