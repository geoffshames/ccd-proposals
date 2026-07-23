import type { Metadata } from "next";
import HellbillyHollowClient from "@/components/hellbilly-hollow/HellbillyHollowClient";

export const metadata: Metadata = {
  title: "Hellbilly Hollow × Crowd Control Digital — Creative Marketing Campaign",
  description: "16 creative marketing concepts designed to terrify, captivate, and make Hellbilly Hollow impossible to ignore.",
  openGraph: {
    title: "Hellbilly Hollow × Crowd Control Digital — Creative Marketing Campaign",
    description: "16 creative marketing concepts designed to terrify, captivate, and make Hellbilly Hollow impossible to ignore.",
    type: "website",
    url: "https://proposal.crowdcontroldigital.com/hellbilly-hollow",
    siteName: "Crowd Control Digital",
    images: [{
      url: "https://proposal.crowdcontroldigital.com/images/hellbilly-hollow/hero1.png",
      width: 1200,
      height: 630,
      alt: "Hellbilly Hollow Creative Marketing Campaign",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellbilly Hollow × Crowd Control Digital — Creative Marketing Campaign",
    description: "16 creative marketing concepts designed to terrify, captivate, and make Hellbilly Hollow impossible to ignore.",
    images: ["https://proposal.crowdcontroldigital.com/images/hellbilly-hollow/hero1.png"],
  },
};

export default function HellbillyHollowPage() {
  return <HellbillyHollowClient />;
}
