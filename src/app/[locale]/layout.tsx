import React from 'react';
import { i18n as i18nGlobal } from '@lingui/core';
import HolyLoader from 'holy-loader';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import '../globals.css';

import { AVAILABLE_LOCALES, availableLocales, defaultLocale, ISOLang } from '@/config/internalization';
import { setLocale } from '@/translations/locale.constant';
import { serverSideTranslations } from '@/translations/serverSideTranslations';
import TranslationProvider from '@/translations/TranslationProvider';
import { DevInspector } from '@/utils/dev/dev-inspector';
import { AntProvider, ApolloWrapper, AuthProvider, ThemeProvider } from '@/utils/providers';
import UserProvider from '@/utils/providers/UserProvider';
import '@ant-design/v5-patch-for-react-19';

const mainFont = Manrope({ subsets: ['cyrillic-ext'], display: 'swap', variable: '--font-manrope' });
// deploy
export const metadata: Metadata = {
  title: 'StorePay Global',
  description: 'Next gen BNPL solution',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
};

export interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: ISOLang }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;

  let { locale } = params;
  const { children } = props;

  locale = availableLocales.includes(locale) ? locale : defaultLocale;
  // const antLocale = (await import(`antd/locale/${languages[locale].antd}`)).default;
  // this sets locale on server side
  setLocale(locale as AVAILABLE_LOCALES);
  const i18n = await serverSideTranslations(locale as AVAILABLE_LOCALES);
  i18nGlobal.loadAndActivate({
    locale,
    messages: i18n._i18nPropsNamespace.initialMessages,
  });
  return (
    <html lang={locale} suppressHydrationWarning>
    <body className={`${mainFont.variable}`}>
    <HolyLoader />
    <ThemeProvider>
      <TranslationProvider i18n={i18n}>
        <ApolloWrapper>
          <AuthProvider>
            <AntProvider>
              <UserProvider>{children}</UserProvider>
            </AntProvider>
            {/*{!!process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID && (*/}
            {/*  <OneSignalScript*/}
            {/*    appId={process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID}*/}
            {/*    safariWebId={process.env.NEXT_PUBLIC_ONE_SIGNAL_SAF_ID!}*/}
            {/*  />*/}
            {/*)}*/}
          </AuthProvider>
        </ApolloWrapper>
      </TranslationProvider>
      <DevInspector />
    </ThemeProvider>
    </body>
    </html>
  );
}

export function generateStaticParams() {
  return availableLocales.map((locale) => ({ params: { locale } }));
}
