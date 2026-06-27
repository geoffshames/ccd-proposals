import { Metadata } from "next";
import { CreatorsClient } from "./client";

export const metadata: Metadata = {
  title: "82MAJOR — SIGN · Creator Campaign",
  description:
    "82MAJOR “Sign” creator campaign. Ten U.S. TikTok dancers activated to recreate the viral Sign dance. Prepared by Crowd Control Digital.",
  openGraph: {
    title: "82MAJOR — SIGN · Creator Campaign",
    description:
      "Ten U.S. TikTok dancers activated to recreate 82MAJOR's viral Sign dance. Prepared by Crowd Control Digital.",
    images: [
      {
        url: "/images/82major/og-image.png",
        width: 1200,
        height: 630,
        alt: "82MAJOR — SIGN Creator Campaign · Crowd Control Digital",
      },
    ],
  },
};

export default function Page() {
  return <CreatorsClient />;
}
