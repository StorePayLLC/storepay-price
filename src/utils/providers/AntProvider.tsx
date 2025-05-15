'use client';
import { type PropsWithChildren } from 'react';
import { ConfigProvider, App as AntdApp, theme } from 'antd';
import { Locale } from 'antd/lib/locale';

export const AntProvider = ({ children, locale }: PropsWithChildren<{ locale?: Locale }>) => {

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#4B8BF4',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          colorInfo: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
};
