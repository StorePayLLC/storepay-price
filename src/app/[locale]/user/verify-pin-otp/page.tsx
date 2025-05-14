import { Metadata } from 'next';
import VerifyPinOTPClient from './page.client';

export const metadata: Metadata = {
  title: 'Verify OTP - SPC',
  description: 'Verify your PIN reset code',
};

export default function VerifyPinOTPPage() {
  return <VerifyPinOTPClient />;
}