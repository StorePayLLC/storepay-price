import { Metadata } from 'next';
import KYCClient from './page.client';

export const metadata: Metadata = {
  title: 'KYC Verification - SPC',
  description: 'Complete your KYC verification',
};

export default function KYCPage() {
  return <KYCClient />;
}