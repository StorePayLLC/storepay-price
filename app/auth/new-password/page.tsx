import { Metadata } from 'next';
import NewPasswordClient from './page.client';

export const metadata: Metadata = {
  title: 'Reset Password - SPC',
  description: 'Create a new password for your SPC account',
};

export default function NewPasswordPage() {
  return <NewPasswordClient />;
}