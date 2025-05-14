import { Metadata } from 'next';
import SecurityClient from './page.client';

export const metadata: Metadata = {
  title: 'Security Settings - SPC',
  description: 'Manage your account security settings',
};

export default function SecurityPage() {
  return <SecurityClient />;
}