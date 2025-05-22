import { Metadata } from 'next';
import HelpSupportClient from './page.client';

export const metadata: Metadata = {
  title: 'Help & Support - SPC',
  description: 'Get help and support for your account',
};

export default function HelpSupportPage() {
  return <HelpSupportClient />;
}