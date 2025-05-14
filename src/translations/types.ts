import { I18n, Messages } from '@lingui/core';

import { AVAILABLE_LOCALES } from '@/config/internalization';

export type { I18n, Messages };

export type I18nPropsNamespace = {
  initialLocale: AVAILABLE_LOCALES;
  initialMessages: Messages;
};

export type ServerSideGeneratedI18nNamespace = {
  _i18nPropsNamespace: I18nPropsNamespace;
  locale: AVAILABLE_LOCALES;
};
