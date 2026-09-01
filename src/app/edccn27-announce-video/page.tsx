import type { Metadata } from "next";
import ProposalExperience from "./client";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "EDC China 2027 60-Second Announce Video | Crowd Control",
  description:
    "Creative production proposal for the EDC China 2027 60-second announce video, prepared by Crowd Control.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "EDC China 2027 60-Second Announce Video",
    description:
      "Creative production proposal for the EDC China 2027 60-second announce video, prepared by Crowd Control.",
    type: "website",
    siteName: "Crowd Control",
    url: "https://proposal.crowdcontroldigital.com/edccn27-announce-video",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDC China 2027 60-Second Announce Video",
    description:
      "Creative production proposal for the EDC China 2027 60-second announce video, prepared by Crowd Control.",
  },
};

export default function ProposalPage() {
  return <ProposalExperience />;
}
