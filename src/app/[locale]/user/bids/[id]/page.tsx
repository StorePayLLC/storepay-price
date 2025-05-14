import { Metadata } from 'next';
import BidDetailClient from './page.client';

export const metadata: Metadata = {
  title: 'Bid Details - SPC',
  description: 'View bid details and status',
};

export default function BidDetailPage() {
  return <BidDetailClient />;
}