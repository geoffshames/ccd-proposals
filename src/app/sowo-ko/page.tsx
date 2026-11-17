import type { Metadata } from "next";
import SowoClient from "../sowo/client";
import { ko } from "@/lib/sowo/copy";

const TITLE = "SOWØ × Transparent Arts × Crowd Control Digital | From Ø to the wave";
const DESC = "SOWØ와 OD UNIVERSE를 위한 데뷔 성장 플랜: 비교 사례, KPI 역산, 유료 미디어, 유럽 우선 시장 전략 (2026년 12월 ~ EP).";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: TITLE,
  description: DESC,
  robots: { index: false, follow: false },
  alternates: { canonical: "/sowo-ko", languages: { en: "/sowo", ko: "/sowo-ko" } },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "/sowo-ko", siteName: "Crowd Control Digital", images: [{ url: "/sowo/opengraph-image?v=2", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/sowo/opengraph-image?v=2"] },
};

export default function SowoKoPage() {
  return <SowoClient c={ko} />;
}
