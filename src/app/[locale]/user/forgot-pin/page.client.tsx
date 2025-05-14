'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography, Flex } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function ForgotPinClient() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Handle forgot PIN logic here
      console.log('Forgot PIN:', values);
      router.push('/user/verify-pin-otp');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-[#111] border border-gray-800">
        <Title level={3} className="text-white text-center mb-2">
          Forgot PIN?
        </Title>
        <Text className="text-gray-400 text-center block mb-6">
          Enter your email address and we&apos;ll send you a code to reset your PIN.
        </Text>

        <Form
          name="forgotPin"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label={<span className="text-gray-400">Email address</span>}
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              placeholder="Enter your email"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600"
              loading={loading}
            >
              Send reset code
            </Button>
          </Form.Item>

          <div className="text-center">
            <Link href="/user" className="text-blue-500 hover:text-blue-400">
              Back to Profile
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}