import React from 'react';
import { Card, Typography, Switch, List, Divider, Flex } from 'antd';
import { 
  BellOutlined, 
  DollarOutlined, 
  SafetyOutlined,
  MailOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;

const notificationSettings = [
  {
    id: 'bid-updates',
    title: 'Bid Updates',
    description: 'Get notified about your bid status changes',
    icon: <BellOutlined className="text-xl text-blue-500" />,
    enabled: true,
  },
  {
    id: 'price-alerts',
    title: 'Price Alerts',
    description: 'Receive notifications about price changes',
    icon: <DollarOutlined className="text-xl text-green-500" />,
    enabled: true,
  },
  {
    id: 'security-alerts',
    title: 'Security Alerts',
    description: 'Get important security notifications',
    icon: <SafetyOutlined className="text-xl text-amber-500" />,
    enabled: true,
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Receive our weekly newsletter',
    icon: <MailOutlined className="text-xl text-purple-500" />,
    enabled: false,
  },
];

const NotificationsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Title level={2} className="text-white mb-6">
        Notification Preferences
      </Title>

      <Card className="bg-[#111] border border-gray-800">
        <List
          dataSource={notificationSettings}
          renderItem={(item) => (
            <List.Item
              className="py-4 border-b border-gray-800 last:border-0"
            >
              <Flex align="center" justify="space-between" className="w-full">
                <Flex align="center" gap={12}>
                  {item.icon}
                  <div>
                    <Text className="text-white font-medium block">
                      {item.title}
                    </Text>
                    <Text type="secondary">
                      {item.description}
                    </Text>
                  </div>
                </Flex>
                <Switch 
                  defaultChecked={item.enabled} 
                  className="bg-gray-700"
                />
              </Flex>
            </List.Item>
          )}
        />
      </Card>

      <Card className="bg-[#111] border border-gray-800 mt-6">
        <Title level={4} className="text-white mb-4">
          Email Notification Frequency
        </Title>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-white block">Instant</Text>
              <Text type="secondary">Receive emails as events happen</Text>
            </div>
            <input 
              type="radio" 
              name="frequency" 
              defaultChecked 
              className="accent-blue-500 h-4 w-4" 
            />
          </div>
          <Divider className="border-gray-800 my-3" />
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-white block">Daily Digest</Text>
              <Text type="secondary">Receive a summary once per day</Text>
            </div>
            <input 
              type="radio" 
              name="frequency" 
              className="accent-blue-500 h-4 w-4" 
            />
          </div>
          <Divider className="border-gray-800 my-3" />
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-white block">Weekly Digest</Text>
              <Text type="secondary">Receive a summary once per week</Text>
            </div>
            <input 
              type="radio" 
              name="frequency" 
              className="accent-blue-500 h-4 w-4" 
            />
          </div>
        </div>
      </Card>

      <Card className="bg-[#111] border border-gray-800 mt-6">
        <Title level={4} className="text-white mb-4">
          Mobile Push Notifications
        </Title>
        <Flex justify="space-between" align="center">
          <div>
            <Text className="text-white block">Enable Push Notifications</Text>
            <Text type="secondary">Receive notifications on your mobile device</Text>
          </div>
          <Switch defaultChecked className="bg-gray-700" />
        </Flex>
      </Card>
    </div>
  );
};

export default NotificationsPage;