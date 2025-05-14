import React from 'react';
import { Card, Typography, Switch, Button, List, Divider, Flex, Modal } from 'antd';
import { 
  LockOutlined, 
  KeyOutlined, 
  ExclamationCircleOutlined,
  SafetyOutlined,
  DesktopOutlined,
  MobileOutlined 
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { confirm } = Modal;

const loginHistory = [
  {
    id: 1,
    device: 'Chrome on Windows',
    location: 'Los Angeles, USA',
    time: 'Just now',
    current: true,
  },
  {
    id: 2,
    device: 'Safari on iPhone',
    location: 'New York, USA',
    time: 'Yesterday',
    current: false,
  },
  {
    id: 3,
    device: 'Firefox on MacOS',
    location: 'Seattle, USA',
    time: '3 days ago',
    current: false,
  },
];

const SecurityPage: React.FC = () => {
  const showPasswordModal = () => {
    confirm({
      title: 'Change Password',
      icon: <KeyOutlined />,
      content: (
        <div className="py-3">
          <Paragraph>
            You'll be logged out of all devices after changing your password.
          </Paragraph>
        </div>
      ),
      okText: 'Continue',
      cancelText: 'Cancel',
      okButtonProps: {
        className: 'bg-blue-600',
      },
    });
  };

  const showLogoutDeviceModal = (deviceName: string) => {
    confirm({
      title: 'Sign Out Device',
      icon: <ExclamationCircleOutlined className="text-yellow-500" />,
      content: (
        <div className="py-3">
          <Paragraph>
            Are you sure you want to sign out from {deviceName}?
          </Paragraph>
        </div>
      ),
      okText: 'Sign Out',
      cancelText: 'Cancel',
      okButtonProps: {
        danger: true,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Title level={2} className="text-white mb-6">
        Security Settings
      </Title>

      <Card className="bg-[#111] border border-gray-800 mb-6">
        <Flex align="center" justify="space-between" className="mb-4">
          <Flex align="center" gap={12}>
            <SafetyOutlined className="text-2xl text-blue-500" />
            <div>
              <Title level={4} className="text-white m-0">
                Two-Factor Authentication
              </Title>
              <Text type="secondary">
                Secure your account with 2FA authentication. When enabled, you'll be required to enter both your password and an authentication code.
              </Text>
            </div>
          </Flex>
          <div>
            <Tag color="success" className="rounded-full px-3 py-1">Enabled</Tag>
          </div>
        </Flex>
        <Button type="link" className="text-blue-500 p-0">
          Manage 2FA settings
        </Button>
      </Card>

      <Card className="bg-[#111] border border-gray-800 mb-6">
        <Flex align="center" justify="space-between" className="mb-4">
          <Flex align="center" gap={12}>
            <KeyOutlined className="text-2xl text-purple-500" />
            <div>
              <Title level={4} className="text-white m-0">
                Password
              </Title>
              <Text type="secondary">
                Change your password regularly to keep your account secure. Your password should be at least 8 characters long.
              </Text>
            </div>
          </Flex>
          <Button 
            type="primary"
            onClick={showPasswordModal}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Update
          </Button>
        </Flex>
        <Button type="link" className="text-blue-500 p-0">
          Change password
        </Button>
      </Card>

      <Card className="bg-[#111] border border-gray-800">
        <Title level={4} className="text-white mb-4">
          Login History
        </Title>
        <List
          dataSource={loginHistory}
          renderItem={(item) => (
            <List.Item 
              actions={[
                !item.current && 
                <Button 
                  danger 
                  type="text" 
                  onClick={() => showLogoutDeviceModal(item.device)}
                >
                  Sign out
                </Button>
              ]}
              className="border-b border-gray-800 last:border-0"
            >
              <Flex align="center" gap={12}>
                {item.device.includes('Windows') || item.device.includes('MacOS') ? (
                  <DesktopOutlined className="text-xl text-gray-400" />
                ) : (
                  <MobileOutlined className="text-xl text-gray-400" />
                )}
                <div>
                  <Text className="text-white block">
                    {item.device}
                    {item.current && (
                      <Tag color="processing" className="ml-2 rounded-full px-2">
                        Current
                      </Tag>
                    )}
                  </Text>
                  <Text type="secondary" className="text-sm">
                    {item.location} • {item.time}
                  </Text>
                </div>
              </Flex>
            </List.Item>
          )}
        />
        <Divider className="border-gray-800 my-4" />
        <Button type="primary" danger className="mt-2">
          Sign out of all devices
        </Button>
      </Card>
    </div>
  );
};

// Add missing Tag component
const Tag = ({ children, color, className }: any) => {
  const colorMap: Record<string, string> = {
    success: 'bg-green-800 text-green-300',
    error: 'bg-red-800 text-red-300',
    processing: 'bg-blue-800 text-blue-300',
    default: 'bg-gray-700 text-gray-300',
  };

  return (
    <span className={`${colorMap[color] || colorMap.default} ${className}`}>
      {children}
    </span>
  );
};

export default SecurityPage;