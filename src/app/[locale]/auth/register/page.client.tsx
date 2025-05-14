'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography, Divider } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function RegisterClient() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    // Handle registration logic here
    console.log('Register:', values);
    setLoading(false);
  };

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-6">
        Create an account
      </Title>

      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="name"
          label={<span className="text-gray-400">Full name</span>}
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter your name"
          />
        </Form.Item>

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

        <Form.Item
          name="password"
          label={<span className="text-gray-400">Password</span>}
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 8, message: 'Password must be at least 8 characters' },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Create a password"
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
            Create account
          </Button>
        </Form.Item>
      </Form>

      <Divider className="border-gray-800">
        <Text className="text-gray-500">or</Text>
      </Divider>

      <div className="text-center">
        <Text className="text-gray-400">
          Already have an account?{' '}
          <Link href="/src/app/app/%5Blocale%5D/auth/login" className="text-blue-500 hover:text-blue-400">
            Sign in
          </Link>
        </Text>
      </div>
    </Card>
  );
}