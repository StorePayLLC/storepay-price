'use client';

import { ReactNode } from 'react';
import { I18nProvider } from '@lingui/react';

// import { supportedLocales } from '@/config/app-config.d';
import { setLocale } from '@/translations/locale.constant';

import { globalI18n } from './i18n';
import { ServerSideGeneratedI18nNamespace } from './types';
import useLoadTranslation from './useLoadTranslation';

interface AppWithTranslationProps {
  i18n: ServerSideGeneratedI18nNamespace;
  children: ReactNode;
}

const TranslationProvider = ({ i18n, children }: AppWithTranslationProps) => {
  const { locale } = i18n;
  // this is setting locale on client side
  setLocale(locale as string);
  const i18nPropsNamespace = i18n._i18nPropsNamespace;

  useLoadTranslation(i18nPropsNamespace, locale);

  return <I18nProvider i18n={globalI18n}>{children}</I18nProvider>;
};

export default TranslationProvider;
