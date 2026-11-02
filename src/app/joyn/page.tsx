import type { Metadata } from "next";
import JoynClient from "./client";

const TITLE = "JOYN x Crowd Control Digital: Customer Acquisition Proposal";
const DESC = "Pain-point landing pages, AI-made Meta ads and a first-clean offer to bring South Florida pool owners onto JOYN.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/joyn" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/joyn",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/joyn/og-image.png", width: 1200, height: 630, alt: "JOYN customer acquisition proposal by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/joyn/og-image.png"] },
};

export default function JoynPage() {
  return <JoynClient />;
}
