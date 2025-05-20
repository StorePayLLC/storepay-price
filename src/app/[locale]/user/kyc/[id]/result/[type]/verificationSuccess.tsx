'use client';

import { Button, Typography, Flex } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import {useRouter} from "@/components/navigation";
import {useParams} from "next/navigation";

const { Title, Text } = Typography;

export default function VerificationSuccess() {
  const router = useRouter();
  const params = useParams();
  return (
    <Flex vertical align="center" className="py-12">
      <CheckCircleFilled className="text-6xl text-green-500 mb-6" />

      <Title level={3} className="text-white text-center mb-2">
        Face Verification Successful
      </Title>

      <Text className="text-gray-400 text-center block mb-8 max-w-md">
        Your face has been successfully verified and matched with your ID. Please continue to the next step to complete your verification.
      </Text>

      <Button
        type="primary"
        size="large"
        onClick={() => router.push(`/user/kyc/${params.id}/information`)}
        className="bg-blue-600"
      >
        Continue
      </Button>
    </Flex>
  );
}