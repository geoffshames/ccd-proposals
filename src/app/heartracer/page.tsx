import type { Metadata } from 'next';
import Proposal from './proposal';

export const metadata: Metadata = {
  title: 'Heartracer — Nighttime Fever | Crowd Control Digital',
  description: 'A three-month audience development proposal for Nighttime Fever. Strategy, creative direction and paid media by Crowd Control Digital.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Heartracer — Give the record a life beyond release day.', description: 'Nighttime Fever. A proposal by Crowd Control Digital.', images: [{ url: 'https://proposal.crowdcontroldigital.com/images/heartracer/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://proposal.crowdcontroldigital.com/images/heartracer/og-image.png'] },
};

export default function Page() { return <Proposal />; }
