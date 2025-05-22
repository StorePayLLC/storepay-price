import { Metadata } from 'next';
import ProfileClient from './page.client';

export const metadata: Metadata = {
  title: 'Dashboard - Profile Settings',
  description: 'Manage your profile settings and preferences',
};

export default function Dashboard() {
  return <ProfileClient />;
}