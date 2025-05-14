import { Metadata } from 'next';
import OTPVerifyClient from './page.client';

export const metadata: Metadata = {
  title: 'Verify OTP - SPC',
  description: 'Verify your email with OTP',
};

export default function OTPVerifyPage() {
  return <OTPVerifyClient />;
}