'use client';

import React from 'react';
import { Layout } from 'antd';
import UserState from "@/app/[locale]/user/components/userState";
import MerchantProvider from "@/utils/providers/MerchantProvider";
import MerchantSideBar from "@/app/[locale]/merchant/components/sidebar";
import MerchantState from "@/app/[locale]/merchant/components/merchantState";

const { Content } = Layout;

export default function UserLayout({children}:{children: React.ReactNode}) {

  return (
    <MerchantProvider>
      <Layout className="min-h-screen">
        <Layout>

          <MerchantSideBar />
          <Content className="bg-[#1a1a1a] p-6">
            <MerchantState />
            {children}
          </Content>
        </Layout>
      </Layout>
    </MerchantProvider>
  );
}