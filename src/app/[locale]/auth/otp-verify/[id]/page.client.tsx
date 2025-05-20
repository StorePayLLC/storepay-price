'use client';

import { Card, Typography } from 'antd';
import OTPVerification from '@/components/OTPVerification';
import {useParams} from "next/navigation";

const { Title, Text } = Typography;

export default function OTPVerifyClient() {
  const params = useParams();

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-2">
        Enter verification code
      </Title>
      <Text className="text-gray-400 text-center block mb-6">
        We&apos;ve sent a 6-digit code to your email. Enter it below to continue.
      </Text>

      <OTPVerification
        id={params.id as string}
        backLink="/auth/login"
        backText="Back to sign in"
        href={`/auth/new-password/${params.id}`}
      />
    </Card>
  );
}