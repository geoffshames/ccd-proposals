import type { Metadata } from "next";
import AllenStoneClient from "./client";

const TITLE = "Allen Stone × Crowd Control Digital: Soul, Amplified";
// PRICING (hidden for now): restore this description and og-image-pricing.png when pricing comes back.
// const DESC =
//   "A release-anchored social, paid, and email + SMS system for Allen Stone's next album. $5,000/mo for six months, plus 15% of managed spend.";
const DESC = "A release-anchored social, paid, and email + SMS system for Allen Stone's next album.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/allen-stone" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/allen-stone",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/allen-stone/og-image.png", width: 1200, height: 630, alt: "Allen Stone × Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/allen-stone/og-image.png"] },
};

export default function AllenStonePage() {
  return (
    <AllenStoneClient />
  );
}
