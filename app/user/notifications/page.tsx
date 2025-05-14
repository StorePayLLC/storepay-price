import { Metadata } from 'next';
import NotificationsClient from './page.client';

export const metadata: Metadata = {
  title: 'Notifications - SPC',
  description: 'Manage your notification preferences',
};

export default function NotificationsPage() {
  return <NotificationsClient />;
}