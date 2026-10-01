import type { Metadata } from "next";
import LoversAndFriendsClient from "./client";

const TITLE = "Lovers & Friends: Digital Audit | Crowd Control Digital";
const DESC =
  "A digital audit of Lovers & Friends: track record, market position, social benchmark against ten peer festivals, 19,635-item sentiment analysis, search demand, video AI and a relaunch plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/lovers-and-friends" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/lovers-and-friends",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/lovers-and-friends/og-image.png", width: 1200, height: 630, alt: "Lovers & Friends digital audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/lovers-and-friends/og-image.png"] },
};

export default function LoversAndFriendsPage() {
  return <LoversAndFriendsClient />;
}
