import { Metadata } from 'next';
import BidsClient from './page.client';

export const metadata: Metadata = {
  title: 'Bid History - SPC',
  description: 'View your bid history and status',
};

export default function BidsPage() {
  return <BidsClient />;
}