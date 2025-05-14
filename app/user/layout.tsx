'use client';

import { useState } from 'react';
import { Layout, Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserOutlined,
  WalletOutlined,
  HistoryOutlined,
  BellOutlined,
  SafetyOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider, Content, Header } = Layout;

const menuItems = [
  {
    key: '/user',
    icon: <SettingOutlined />,
    label: 'Profile Settings',
  },
  {
    key: '/user/wallet',
    icon: <WalletOutlined />,
    label: 'Wallet',
  },
  {
    key: '/user/bids',
    icon: <HistoryOutlined />,
    label: 'Bid History',
  },
  {
    key: '/user/notifications',
    icon: <BellOutlined />,
    label: 'Notifications',
  },
  {
    key: '/user/security',
    icon: <SafetyOutlined />,
    label: 'Security',
  },
  {
    key: '/user/help-support',
    icon: <QuestionCircleOutlined />,
    label: 'Help & Support',
  },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Header className="bg-[#121212] flex items-center justify-between px-6 border-b border-gray-800">
        <Link href="/" className="text-xl font-bold text-white hover:text-white">
          SPC
        </Link>
        <div className="space-x-6">
          <Button type="link" href="/about" className="text-gray-300 hover:text-white">
            About us
          </Button>
          <Button type="link" href="/login" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button type="primary" href="/signup" className="bg-blue-600">
            Sign up
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="bg-[#0d0d0d] border-r border-gray-800"
          width={250}
          theme="dark"
        >
          <div className="flex flex-col h-full py-4">
            <div className="flex-grow">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.key}
                  className={`flex items-center px-6 py-3 my-1 mx-2 rounded-lg transition-all ${
                    pathname === item.key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                  }`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
            <Link
              href="/auth/login"
              className="flex items-center px-6 py-3 my-1 mx-2 rounded-lg transition-all text-red-400 hover:bg-[#1a1a1a] hover:text-red-300"
            >
              <span className="text-xl mr-3"><LogoutOutlined /></span>
              {!collapsed && <span>Logout</span>}
            </Link>
          </div>
        </Sider>
        <Content className="bg-[#1a1a1a] p-6">{children}</Content>
      </Layout>
    </Layout>
  );
}