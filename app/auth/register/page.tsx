import { Metadata } from 'next';
import RegisterClient from './page.client';

export const metadata: Metadata = {
  title: 'Create Account - SPC',
  description: 'Create your SPC account',
};

export default function RegisterPage() {
  return <RegisterClient />;
}