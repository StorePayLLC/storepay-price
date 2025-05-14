import { Metadata } from 'next';
import LoginClient from './page.client';

export const metadata: Metadata = {
  title: 'Sign in - SPC',
  description: 'Sign in to your SPC account',
};

export default function LoginPage() {
  return <LoginClient />;
}