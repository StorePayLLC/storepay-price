import { Metadata } from 'next';
import ResetPinClient from './page.client';

export const metadata: Metadata = {
  title: 'Reset PIN - SPC',
  description: 'Create a new security PIN',
};

export default function ResetPinPage() {
  return <ResetPinClient />;
}