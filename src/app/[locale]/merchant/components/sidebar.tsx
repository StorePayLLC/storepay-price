'use client';

import React, { useState } from 'react';
import {Layout, Button, Select} from 'antd';
import Link from '@/components/link';
import { usePathname } from 'next/navigation';
import {
  WalletOutlined,
  HistoryOutlined,
  BellOutlined,
  SafetyOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import {useAuth, useMerchant, useUser} from "@/utils/providers";

const { Sider } = Layout;

const menuItems = [
  {
    key: '/merchant',
    icon: <SettingOutlined />,
    label: 'Profile Settings',
  },
  {
    key: '/merchant/wallet',
    icon: <WalletOutlined />,
    label: 'Wallet',
  },
  {
    key: '/merchant/bids',
    icon: <HistoryOutlined />,
    label: 'Bid History',
  },
  {
    key: '/merchant/notifications',
    icon: <BellOutlined />,
    label: 'Notifications',
  },
  {
    key: '/merchant/security',
    icon: <SafetyOutlined />,
    label: 'Security',
  },
  {
    key: '/merchant/help-support',
    icon: <QuestionCircleOutlined />,
    label: 'Help & Support',
  },
  {
    key: '/merchant/tokens',
    icon: <QuestionCircleOutlined />,
    label: 'Dev space',
  },
];

export default function MerchantSideBar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const {logout} = useAuth();
  const {merchant, merchants, changeCurrent} = useMerchant();

  if (merchants.length === 0) return null;

  return (
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
          {merchants && merchants?.length > 1 && (
            <Select
              className="w-full"
              value={merchant?.id}
              onChange={(value) => changeCurrent(value)}
              options={merchants?.map((item) => {
                return {value: item!.id, label: `${item!.number}-${item!.name}`};
              })}></Select>
          )}
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
        <Button type="text" danger icon={<LogoutOutlined />} onClick={() => logout()}>
          Log out
        </Button>
      </div>
    </Sider>
  );
}