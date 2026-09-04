import type { Metadata } from "next";
import EpikHighClient from "../epik-high/client";
import copy from "@/lib/epik-high/ko.json";
export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "Epik High | 음원 + 투어 캠페인 제안 | Crowd Control Digital",
  description: "EPIKASE SONG BATTLE 음원과 Epik High 3.0 투어를 연결하는 캠페인. $10,000 및 $15,000 투자 옵션.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/epik-high-ko", languages: { en: "/epik-high", ko: "/epik-high-ko" } },
  openGraph: { title: "Epik High × Crowd Control Digital", description: "음원 + 투어 캠페인 제안", type: "website", url: "/epik-high-ko", images: [{url:"/epik-high/opengraph-image",width:1200,height:630}] },
  twitter: { card: "summary_large_image", images: ["/epik-high/opengraph-image"] },
};
export default function EpikHighKoreanPage() { return <EpikHighClient copy={copy} locale="ko"/>; }
