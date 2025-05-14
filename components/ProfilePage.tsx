import React from 'react';
import { Card, Form, Input, Select, Button, Avatar, Upload, Typography, Flex, Divider } from 'antd';
import { UserOutlined, EditOutlined, CreditCardOutlined, WalletOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const ProfilePage: React.FC = () => {
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
                John Doe
              </Title>
              <Text type="secondary">Member since March 2024</Text>
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
            </div>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Card className="bg-[#111] border border-gray-800">
            <Form layout="vertical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item 
                  label={<span className="text-gray-300">Display Name</span>} 
                  className="mb-4"
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    defaultValue="John Doe" 
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </Form.Item>

                <Form.Item 
                  label={<span className="text-gray-300">Preferred Currency</span>} 
                  className="mb-4"
                >
                  <Select 
                    defaultValue="usd" 
                    className="w-full bg-[#1a1a1a] text-white"
                  >
                    <Option value="usd">USD - US Dollar</Option>
                    <Option value="eur">EUR - Euro</Option>
                    <Option value="gbp">GBP - British Pound</Option>
                    <Option value="jpy">JPY - Japanese Yen</Option>
                  </Select>
                </Form.Item>

                <Form.Item 
                  label={<span className="text-gray-300">Email Address</span>} 
                  className="mb-4"
                >
                  <Input 
                    defaultValue="john.doe@example.com" 
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
                  label={<span className="text-gray-300">Phone Number</span>} 
                  className="mb-4"
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
                  <Select 
                    defaultValue="en" 
                    className="w-full bg-[#1a1a1a] text-white"
                  >
                    <Option value="en">English</Option>
                    <Option value="es">Spanish</Option>
                    <Option value="fr">French</Option>
                    <Option value="de">German</Option>
                  </Select>
                </Form.Item>
              </div>

              <Divider className="my-4 border-gray-800" />

              <Title level={5} className="text-white mb-4">
                Connected Accounts
              </Title>

              <Flex justify="flex-end" gap={12} className="mt-6">
                <Button className="text-white border-gray-700 hover:border-gray-500">
                  Cancel
                </Button>
                <Button type="primary" className="bg-blue-600">
                  Save Changes
                </Button>
              </Flex>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;