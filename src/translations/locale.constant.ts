// import { supportedLocales } from '@/config/app-config.d';

export let currentLocal = '';

export const setLocale = (locale: string) => {
  currentLocal = locale;
};

export const getLocale = () => currentLocal;
