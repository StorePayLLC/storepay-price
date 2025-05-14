import { i18n, Messages } from '@lingui/core';

import { AVAILABLE_LOCALES, DEFAULT_LOCALE, isAcceptedLocale } from '@/config/internalization';

export const loadTranslationMessagesOnServerSide = async (locale: AVAILABLE_LOCALES): Promise<Messages | null> => {
  const { messages } = await import(`./messages/${!isAcceptedLocale(locale) ? DEFAULT_LOCALE : locale}.po`);
  return messages;
};

const loaded: Record<string, boolean> = {};

export const ssrActivateLocale = async (locale: string) => {
  if (loaded[locale]) {
    i18n.activate(locale);
    return;
  }

  const messages = await loadTranslationMessagesOnServerSide(locale as AVAILABLE_LOCALES);
  if (messages) {
    i18n.loadAndActivate({ locale, messages });
    loaded[locale] = true;
  }
};
