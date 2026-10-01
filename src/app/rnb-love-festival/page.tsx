import type { Metadata } from "next";
import LoversAndFriendsClient from "../lovers-and-friends/client";

const TITLE = "R&B Love Festival: Digital Audit | Crowd Control Digital";
const DESC =
  "A digital audit of R&B Love Festival, formerly Lovers & Friends: track record, market position, social benchmark against ten peer festivals, 19,635-item sentiment analysis, search demand, video AI and a relaunch plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/rnb-love-festival" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/rnb-love-festival",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/lovers-and-friends/og-rnb-love.png", width: 1200, height: 630, alt: "R&B Love Festival digital audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/lovers-and-friends/og-rnb-love.png"] },
};

export default function RnbLoveFestivalPage() {
  return <LoversAndFriendsClient />;
}
