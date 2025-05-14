import { Metadata } from 'next';
import WalletClient from './page.client';

export const metadata: Metadata = {
  title: 'Wallet - SPC',
  description: 'Manage your crypto wallet and transactions',
};

export default function WalletPage() {
  return <WalletClient />;
}