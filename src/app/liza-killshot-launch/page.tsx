import type { Metadata } from "next";
import KillshotLaunchClient from "./client";
import { A } from "@/lib/liza-killshot-launch/content";

const TITLE = "KILLSHOT: The Launch Plan | Crowd Control Digital";
const DESC = "Liza Soberano's KILLSHOT: the single, the video and the film as three connected moments. Prepared by Crowd Control Digital.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/liza-killshot-launch" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/liza-killshot-launch",
    siteName: "Crowd Control Digital",
    images: [{ url: A.og, width: 1200, height: 630, alt: "KILLSHOT launch plan by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [A.og] },
};

export default function KillshotLaunchPage() {
  return <KillshotLaunchClient />;
}
