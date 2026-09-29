import type { Metadata } from 'next';
import Proposal from './proposal';

const og = 'https://proposal.crowdcontroldigital.com/images/highest-intention/og-image.png?v=1';

export const metadata: Metadata = {
  title: 'Highest Intention | Crowd Control Digital Proposal',
  description: 'Audit, social teardown, sentiment analysis and a two-tier growth proposal for Highest Intention, prepared by Crowd Control Digital.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Highest Intention | Proposal by Crowd Control Digital',
    description: 'Audience growth and tour readiness proposal.',
    url: 'https://proposal.crowdcontroldigital.com/highest-intention',
    siteName: 'Crowd Control Digital',
    type: 'website',
    images: [{ url: og, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: [og] },
};

export default function Page() {
  return <Proposal />;
}
