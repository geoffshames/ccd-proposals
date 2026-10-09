import type { Metadata } from "next";
import AudienClient from "./client";

const TITLE = "AUDIEN: Brand Direction and Social Audit | Crowd Control Digital";
const DESC =
  "A brand direction and social audit of AUDIEN: brand eras and identity, every public post, a ten-artist peer benchmark, 5,034 fan comments, video AI, the funnel, a brand direction and a social plan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/audien" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/audien",
    siteName: "Crowd Control Digital",
    images: [{ url: "/images/audien/og-audien.png", width: 1200, height: 630, alt: "AUDIEN brand direction and social audit by Crowd Control Digital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/images/audien/og-audien.png"] },
};

export default function AudienPage() {
  return <AudienClient />;
}
