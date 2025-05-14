'use client';

import { Card, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import OTPVerification from '@/components/OTPVerification';

const { Title, Text } = Typography;

export default function OTPVerifyClient() {
  const router = useRouter();

  const handleSubmit = async (code: string) => {
    // Handle OTP verification logic here
    console.log('Verify OTP:', code);
    router.push('/auth/new-password');
  };

  const handleResend = async () => {
    // Handle resend logic here
    console.log('Resend OTP');
  };

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-2">
        Enter verification code
      </Title>
      <Text className="text-gray-400 text-center block mb-6">
        We&apos;ve sent a 6-digit code to your email. Enter it below to continue.
      </Text>

      <OTPVerification
        onSubmit={handleSubmit}
        onResend={handleResend}
        backLink="/auth/login"
        backText="Back to sign in"
      />
    </Card>
  );
}