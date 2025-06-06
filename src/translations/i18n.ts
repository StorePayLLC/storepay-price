import { i18n, Messages } from '@lingui/core';

import { AVAILABLE_LOCALES } from '@/config/internalization';

import { I18n } from './types';

export const globalI18n: I18n = i18n;

export const activateLocale = (i18nInstance: I18n, locale: AVAILABLE_LOCALES, messages: Messages) => {
  if (i18nInstance.locale === locale) return;

  i18nInstance.loadAndActivate({ locale, messages });
};
