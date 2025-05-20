'use client';

import { useState } from 'react';
import {Card, Form, Input, Button, Typography, Divider, notification} from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from '@/components/link';
import {loginWithPassword, useAuth} from "@/utils/providers";
import { useRouter } from '@/components/navigation';

const { Title, Text } = Typography;

export default function LoginClient() {
  const [loading, setLoading] = useState(false);
  const {login} = useAuth();
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    const username = /^\d+$/.test(values.username) ? `${values.username}` : values.username;

    loginWithPassword(username, values.password)
      .then((token) => {
        setLoading(false);
        if (token) {
          login().catch();
          return router.replace('/user');
          // const redirectUrl = cookies.get('redirect');
          // if (!redirectUrl) return router.replace('/');
          // window.location.href = redirectUrl;
          // cookies.remove('redirect');
        }
      })
      .catch((error) => {
        setLoading(false);
        // console.log('login error', error);
        notification.error({ message: error.message });
      });
  };

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-6">
        Welcome back
      </Title>

      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="username"
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
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item className="mb-2">
          <Link
            href="/auth/forgot-password"
            className="text-blue-500 hover:text-blue-400"
          >
            Forgot password?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600"
            loading={loading}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <Divider className="border-gray-800">
        <Text className="text-gray-500">or</Text>
      </Divider>

      <div className="text-center">
        <Text className="text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </Text>
      </div>
    </Card>
  );
}