import type { Metadata } from "next";
import RodWaveClient from "./client";

const TITLE = "Rod Wave: Artist Audit | Crowd Control Digital";
const DESC =
  "Streaming, touring, merch, social, fan sentiment, content teardowns, the funnel and a plan, prepared for the incoming management team.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/rod-wave" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/rod-wave",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/rod-wave/og-rod-wave.png", width: 1200, height: 630, alt: "Rod Wave artist audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/rod-wave/og-rod-wave.png"] },
};

export default function RodWavePage() {
  return <RodWaveClient />;
}
