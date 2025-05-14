'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

export default function ResetPinClient() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Handle PIN reset logic here
      console.log('Reset PIN:', values);
      router.push('/user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-[#111] border border-gray-800">
        <Title level={3} className="text-white text-center mb-2">
          Create new PIN
        </Title>
        <Text className="text-gray-400 text-center block mb-6">
          Your new PIN must be different from previously used PINs.
        </Text>

        <Form
          name="resetPin"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="newPin"
            label={<span className="text-gray-400">New PIN</span>}
            rules={[
              { required: true, message: 'Please enter your new PIN' },
              { len: 6, message: 'PIN must be 6 digits' },
              { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              placeholder="Enter new PIN"
              maxLength={6}
            />
          </Form.Item>

          <Form.Item
            name="confirmPin"
            label={<span className="text-gray-400">Confirm PIN</span>}
            dependencies={['newPin']}
            rules={[
              { required: true, message: 'Please confirm your PIN' },
              { len: 6, message: 'PIN must be 6 digits' },
              { pattern: /^\d+$/, message: 'PIN must contain only numbers' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPin') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('PINs do not match'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              placeholder="Confirm new PIN"
              maxLength={6}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600"
              loading={loading}
            >
              Reset PIN
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