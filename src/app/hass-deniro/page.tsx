import type { Metadata } from "next";
import HassDeniroClient from "./client";

const TITLE = "Hass DeNiro x Crowd Control Digital: Personal Brand Proposal";
const DESC = "A site, an executive presence, a reintroduction moment and press, so the work behind the shows is on the record.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/hass-deniro" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/hass-deniro",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/hass-deniro/og-image.png", width: 1200, height: 630, alt: "Hass DeNiro personal brand proposal by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/hass-deniro/og-image.png"] },
};

export default function HassDeniroPage() {
  return <HassDeniroClient />;
}
