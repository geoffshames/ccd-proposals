import type { Metadata } from "next";
import DopeAsUsualClient from "./client";

const TITLE = "Dope As Usual x Crowd Control Digital: Podcast Growth Proposal";
const DESC = "A growth plan for the Dope As Usual podcast: clipping, the catalog, email and SMS, social consulting, sponsorship and platform partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/dope-as-usual" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/dope-as-usual",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/dope-as-usual/og-image.png", width: 1200, height: 630, alt: "Dope As Usual podcast growth proposal by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/dope-as-usual/og-image.png"] },
};

export default function DopeAsUsualPage() {
  return <DopeAsUsualClient />;
}
