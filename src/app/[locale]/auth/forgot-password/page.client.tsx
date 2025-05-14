'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function ForgotPasswordClient() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    // Handle forgot password logic here
    console.log('Forgot password:', values);
    setLoading(false);
  };

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-2">
        Forgot password?
      </Title>
      <Text className="text-gray-400 text-center block mb-6">
        Enter your email address and we&apos;ll send you a code to reset your
        password.
      </Text>

      <Form
        name="forgotPassword"
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
            size="large"
            prefix={<MailOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600"
            loading={loading}
          >
            Send reset code
          </Button>
        </Form.Item>

        <div className="text-center">
          <Link href="/src/app/app/%5Blocale%5D/auth/login" className="text-blue-500 hover:text-blue-400">
            Back to sign in
          </Link>
        </div>
      </Form>
    </Card>
  );
}