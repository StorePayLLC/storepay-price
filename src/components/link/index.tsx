'use client';

import React, { ComponentProps, forwardRef, ForwardRefRenderFunction, Ref } from 'react';
import NextLink from 'next/link';
import { UrlObject } from 'url';

import { availableLocales } from '@/config/internalization';
import { getLocale } from '@/translations/locale.constant';

const Link: ForwardRefRenderFunction<HTMLAnchorElement, ComponentProps<typeof NextLink>> = (
  { href, locale, children, ...props },
  ref: Ref<HTMLAnchorElement>,
) => {
  if (!href) return <a ref={ref} {...props} href={href} />;
  const localePathname = getLocalePathname(locale, href);
  return (
    <NextLink ref={ref} {...props} locale={locale} href={localePathname}>
      {children}
    </NextLink>
  );
};

export default forwardRef(Link);

function getLocalePathname(locale: string | false | undefined, href: UrlObject | string) {
  const pathname = typeof href === 'string' ? href : href.pathname;
  if (!pathname) return href;
  if (!pathname.startsWith('/')) return href;
  if (locale) return addOrReplaceLocale(pathname, locale);
  const currentLocale = getLocale();
  if (currentLocale) return addOrReplaceLocale(pathname, currentLocale);
  return href;
}

function addOrReplaceLocale(pathname: string, locale: string) {
  if (availableLocales.find((al) => pathname.startsWith(`/${al}`))) {
    // if (defaultLocale === locale) return pathname.replace(/^\/[a-z]{2}/, '');
    return pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
  }
  // if (defaultLocale === locale) return pathname;
  if (pathname.startsWith('/')) return `/${locale}${pathname}`;
  return pathname;
}
