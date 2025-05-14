import { Metadata } from 'next';
import ForgotPasswordClient from './page.client';

export const metadata: Metadata = {
  title: 'Forgot Password - SPC',
  description: 'Reset your SPC account password',
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}