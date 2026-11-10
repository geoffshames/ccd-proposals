import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import BeFirstClient from "./client";

const jp = Noto_Sans_JP({
  variable: "--font-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const TITLE = "BE:FIRST US Clipping Proposal | Crowd Control Digital";
const DESC =
  "A US short-form clipping program for BE:FIRST, prepared for BMSG: where the group stands, the US gap, this week's trend board, the moments calendar, how the program runs and a three-tier menu.";
const V = "2";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/be-first" },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: "/be-first",
    siteName: "Crowd Control Digital",
    images: [{ url: `/images/be-first/og.png?v=${V}`, width: 1200, height: 630, alt: "BE:FIRST US clipping proposal by Crowd Control Digital" }],
    videos: [{ url: `https://proposal.crowdcontroldigital.com/images/be-first/share.mp4?v=${V}`, width: 1280, height: 720, type: "video/mp4" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [`/images/be-first/og.png?v=${V}`] },
};

export default async function BeFirstPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const sp = await searchParams;
  const initial = sp.lang === "ja" ? "ja" : sp.lang === "en" ? "en" : null;
  return (
    <div className={jp.variable}>
      <BeFirstClient initialLang={initial} />
    </div>
  );
}
