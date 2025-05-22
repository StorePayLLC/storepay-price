'use client';

import React, { useState } from 'react';
import {Card, Form, Input, Select, Button, Avatar, Upload, Typography, Flex, Divider, Modal} from 'antd';
import { UserOutlined, EditOutlined, CreditCardOutlined, WalletOutlined, LockOutlined } from '@ant-design/icons';
import {useUser} from "@/utils/providers";
import LanguageSelector from "@/components/languageSelector";

const { Title, Text } = Typography;
const { Option } = Select;

const ProfilePage: React.FC = () => {
  const {user} = useUser();
  const [pinModalVisible, setPinModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handlePinChange = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log('PIN change:', values);
      // Handle PIN change logic here
      setPinModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('PIN change failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Title level={2} className="text-white mb-6">
        Profile Settings
      </Title>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Card className="bg-[#111] border border-gray-800 overflow-hidden">
            <Flex vertical align="center" className="py-4">
              <div className="relative">
                <Avatar 
                  size={100} 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                  className="border-2 border-blue-500"
                />
                <Upload className="absolute bottom-0 right-0">
                  <Button 
                    type="primary" 
                    shape="circle" 
                    icon={<EditOutlined />} 
                    size="small" 
                    className="bg-blue-600"
                  />
                </Upload>
              </div>
              <Title level={4} className="mt-4 mb-0 text-white">
                {user?.firstName}
              </Title>
              <Text type="secondary">{user?.citizenIdNumber}</Text>
            </Flex>

            <Divider className="my-3 border-gray-800" />

            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1a1a1a]">
                <CreditCardOutlined className="text-blue-500 text-xl" />
                <div>
                  <Text className="text-white block">Credit Card</Text>
                  <Text type="secondary" className="text-xs">Connected</Text>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1a1a1a]">
                <WalletOutlined className="text-purple-500 text-xl" />
                <div>
                  <Text className="text-white block">MetaMask</Text>
                  <Text type="secondary" className="text-xs">Connected</Text>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-2 rounded-lg bg-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <LockOutlined className="text-amber-500 text-xl" />
                  <div>
                    <Text className="text-white block">Security PIN</Text>
                    <Text type="secondary" className="text-xs">6-digit PIN</Text>
                  </div>
                </div>
                <Button 
                  type="link" 
                  onClick={() => setPinModalVisible(true)}
                  className="text-blue-500 hover:text-blue-400"
                >
                  Change
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Card className="bg-[#111] border border-gray-800">
            <Form layout="vertical" initialValues={user} onFinish={(values) => {
              console.log(values);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  label={<span className="text-gray-300">First name</span>}
                  className="mb-4"
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label={<span className="text-gray-300">Last name</span>}
                  className="mb-4"
                >
                  <Input
                    prefix={<UserOutlined />}
                    defaultValue={user?.lastName}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </Form.Item>

                <Form.Item 
                  label={<span className="text-gray-300">Email Address</span>} 
                  className="mb-4"
                >
                  <Input 
                    defaultValue={user?.email}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </Form.Item>

                <Form.Item 
                  label={<span className="text-gray-300">Time Zone</span>} 
                  className="mb-4"
                >
                  <Select 
                    defaultValue="et" 
                    className="w-full bg-[#1a1a1a] text-white"
                  >
                    <Option value="et">Eastern Time (UTC-5)</Option>
                    <Option value="pt">Pacific Time (UTC-8)</Option>
                    <Option value="utc">UTC (GMT)</Option>
                    <Option value="cet">Central European Time (UTC+1)</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span className="text-gray-300">Phone Number</span>} className="mb-4"
                >
                  <Input 
                    defaultValue="+1 (555) 123-4567" 
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </Form.Item>

                <Form.Item 
                  label={<span className="text-gray-300">Language</span>} 
                  className="mb-4"
                >
                  <LanguageSelector selected={user?.language} />
                </Form.Item>
              </div>

              <Flex justify="flex-end" gap={12} className="mt-6">
                <Button className="text-white border-gray-700 hover:border-gray-500">
                  Cancel
                </Button>
                <Button htmlType="submit" type="primary" className="bg-blue-600">
                  Save Changes
                </Button>
              </Flex>
            </Form>
          </Card>
        </div>
      </div>

      <Modal
        title={
          <Flex align="center" gap={2}>
            <LockOutlined className="text-blue-500" />
            <span>Change Security PIN</span>
          </Flex>
        }
        open={pinModalVisible}
        onCancel={() => {
          setPinModalVisible(false);
          form.resetFields();
        }}
        footer={[
          <Button 
            key="cancel" 
            onClick={() => {
              setPinModalVisible(false);
              form.resetFields();
            }}
          >
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            loading={loading} 
            onClick={handlePinChange}
            className="bg-blue-600"
          >
            Change PIN
          </Button>
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="currentPin"
            label={<span className="text-gray-300">Current PIN</span>}
            rules={[
              { required: true, message: 'Please enter your current PIN' },
              { len: 6, message: 'PIN must be 6 digits' },
              { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
            ]}
          >
            <Input.Password
              placeholder="Enter current PIN"
              maxLength={6}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              prefix={<LockOutlined className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            name="newPin"
            label={<span className="text-gray-300">New PIN</span>}
            rules={[
              { required: true, message: 'Please enter your new PIN' },
              { len: 6, message: 'PIN must be 6 digits' },
              { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
            ]}
          >
            <Input.Password
              placeholder="Enter new PIN"
              maxLength={6}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              prefix={<LockOutlined className="text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            name="confirmPin"
            label={<span className="text-gray-300">Confirm New PIN</span>}
            dependencies={['newPin']}
            rules={[
              { required: true, message: 'Please confirm your new PIN' },
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
              placeholder="Confirm new PIN"
              maxLength={6}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              prefix={<LockOutlined className="text-gray-400" />}
            />
          </Form.Item>

          <Text type="secondary">
            Your PIN is used to confirm important actions like bids and withdrawals.
          </Text>
        </Form>
      </Modal>
    </div>
  );
};

export default ProfilePage;