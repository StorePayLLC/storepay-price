'use client';
import { type PropsWithChildren, useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, notification } from 'antd';
import { Locale } from 'antd/lib/locale';
import { useServerInsertedHTML } from 'next/navigation';
import { useTheme } from 'next-themes';

import { darkTheme, lightTheme } from '@/config/theme';

notification.config({
  closable: true,
  duration: 8,
  showProgress: true,
});

export const AntProvider = ({ children, locale }: PropsWithChildren<{ locale?: Locale }>) => {
  const [cache] = useState(() => createCache());
  useServerInsertedHTML(() => <style dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />);
  const { resolvedTheme } = useTheme();

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider prefixCls="sp" theme={resolvedTheme === 'dark' ? darkTheme : lightTheme} locale={locale}>
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};
