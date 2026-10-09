import type { Metadata } from "next";
import DillonFrancisClient from "./client";

const TITLE = "Dillon Francis: Social Media and Content Audit | Crowd Control Digital";
const DESC =
  "A social media and content audit of Dillon Francis: artist and brand, every public post, a ten-artist peer benchmark, 6,262 fan comments, video AI, the funnel, a content direction and a social plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/dillon-francis" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/dillon-francis",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/dillon-francis/og-dillon-francis.png", width: 1200, height: 630, alt: "Dillon Francis social media and content audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/dillon-francis/og-dillon-francis.png"] },
};

export default function DillonFrancisPage() {
  return <DillonFrancisClient />;
}
