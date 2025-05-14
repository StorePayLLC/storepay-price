export const availableLocales = ['en', 'mn', 'zh', 'ru', 'id', 'vi'] as const;
export type ISOLang = (typeof availableLocales)[number];

export enum AVAILABLE_LOCALES {
  en = 'en',
  mn = 'mn',
  zh = 'zh',
  ru = 'ru',
  id = 'id',
  vi = 'vi',
}

export const DEFAULT_LOCALE = AVAILABLE_LOCALES.mn;

export const defaultLocale = AVAILABLE_LOCALES.mn;

export function isAcceptedLocale(locale: unknown): locale is AVAILABLE_LOCALES {
  if (typeof locale !== 'string') return false;
  return locale in AVAILABLE_LOCALES;
}

export function selectFirstAcceptedLocale(...mayBeLocales: Array<unknown>): AVAILABLE_LOCALES {
  for (const mayBeLocale of mayBeLocales) {
    if (isAcceptedLocale(mayBeLocale)) {
      return mayBeLocale;
    }
  }
  return DEFAULT_LOCALE;
}

export const languages: ILanguage = {
  zh: { name: '简体中文', flag: '🇨🇳', unicode: '1f1e8-1f1f3', antd: 'zh_CN' },
  en: { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8', antd: 'en_US' },
  ru: { name: 'Русский', flag: '🇷🇺', unicode: '1f1f7-1f1fa', antd: 'ru_RU' },
  mn: { name: 'Монгол', flag: '🇲🇳', unicode: '1f1f2-1f1f3', antd: 'mn_MN' },
  id: { name: 'Bahasa Indonesia', flag: '🇮🇩', unicode: '1f1ee-1f1e9', antd: 'id_ID' },
  vi: { name: 'Vietnamese', flag: '🇻🇳', unicode: '1f1fb-1f1f3', antd: 'vi_VN' },
};

export const languagesIndo = {
  en: { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8', antd: 'en_US' },
  id: { name: 'Bahasa Indonesia', flag: '🇮🇩', unicode: '1f1ee-1f1e9', antd: 'id_ID' },
};

export type ILanguage = Record<ISOLang, { name: string; flag: string; unicode: string; antd: string }>;
