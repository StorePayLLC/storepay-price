import { Metadata } from 'next';
import ForgotPinClient from './page.client';

export const metadata: Metadata = {
  title: 'Forgot PIN - SPC',
  description: 'Reset your security PIN',
};

export default function ForgotPinPage() {
  return <ForgotPinClient />;
}