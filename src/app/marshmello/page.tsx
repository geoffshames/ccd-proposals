import type { Metadata } from "next";
import MarshmelloClient from "./client";

const TITLE = "Marshmello: Social Media and Content Audit | Crowd Control Digital";
const DESC =
  "A social media and content audit of Marshmello: artist and brand, every public post, a ten-artist peer benchmark, 6,459 fan comments, video AI, the funnel, a content direction and a social plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/marshmello" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/marshmello",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/marshmello/og-marshmello.png", width: 1200, height: 630, alt: "Marshmello social media and content audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/marshmello/og-marshmello.png"] },
};

export default function MarshmelloPage() {
  return <MarshmelloClient />;
}
