'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import Link from '@/components/link';

const { Title, Text } = Typography;

export default function NewPasswordClient() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    // Handle new password logic here
    console.log('New password:', values);
    setLoading(false);
  };

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-2">
        Create new password
      </Title>
      <Text className="text-gray-400 text-center block mb-6">
        Your new password must be different from previously used passwords.
      </Text>

      <Form
        name="newPassword"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="password"
          label={<span className="text-gray-400">New password</span>}
          rules={[
            { required: true, message: 'Please enter your new password' },
            { min: 8, message: 'Password must be at least 8 characters' },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter new password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={<span className="text-gray-400">Confirm password</span>}
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Confirm new password"
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
            Reset password
          </Button>
        </Form.Item>

        <div className="text-center">
          <Link href="/auth/login" className="text-blue-500 hover:text-blue-400">
            Back to sign in
          </Link>
        </div>
      </Form>
    </Card>
  );
}