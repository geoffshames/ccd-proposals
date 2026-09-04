import type { Metadata } from "next";
import EpikHighClient from "./client";
import copy from "@/lib/epik-high/en.json";
export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Epik High | New music. Next night. | Crowd Control Digital",
  description: "A connected EPIKASE SONG BATTLE release and Epik High 3.0 tour campaign. $10,000 and $15,000 investment options from Crowd Control Digital.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/epik-high", languages: { en: "/epik-high", ko: "/epik-high-ko" } },
  openGraph: { title: "Epik High × Crowd Control Digital", description: "New music. Next night. Release + tour campaign proposal.", type: "website", url: "/epik-high", images: [{ url: "/epik-high/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/epik-high/opengraph-image"] },
};
export default function EpikHighPage() { return <EpikHighClient copy={copy} />; }
