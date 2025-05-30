'use client';
import { useMemo } from 'react';
import { i18n } from '@lingui/core';
import { useRouter as useNextRouter } from 'next/navigation';

import { localizeHref } from '@/translations/middleware/shared/utils';

type IntlNavigateOptions = {
  locale?: string;
};

/**
 * Returns a wrapped instance of `useRouter` from `next/navigation` that
 * will automatically localize the `href` parameters it receives.
 */
export function useRouter() {
  const router = useNextRouter();
  const locale = i18n.locale;

  return useMemo(() => {
    function localize(href: string, nextLocale?: string) {
      return localizeHref(href, nextLocale || locale, locale, window.location.pathname);
    }

    return {
      ...router,
      push(href: string, options?: Parameters<typeof router.push>[1] & IntlNavigateOptions) {
        const { locale: nextLocale, ...rest } = options || {};
        const args: [href: string, options?: Parameters<typeof router.push>[1]] = [localize(href, nextLocale)];
        if (Object.keys(rest).length > 0) {
          args.push(rest);
        }
        return router.push(...args);
      },

      replace(href: string, options?: Parameters<typeof router.replace>[1] & IntlNavigateOptions) {
        const { locale: nextLocale, ...rest } = options || {};
        const args: [href: string, options?: Parameters<typeof router.replace>[1]] = [localize(href, nextLocale)];
        if (Object.keys(rest).length > 0) {
          args.push(rest);
        }
        return router.replace(...args);
      },

      prefetch(href: string, options?: Parameters<typeof router.prefetch>[1] & IntlNavigateOptions) {
        const { locale: nextLocale, ...rest } = options || {};
        const args: [href: string, options?: Parameters<typeof router.prefetch>[1]] = [localize(href, nextLocale)];
        if (Object.keys(rest).length > 0) {
          // @ts-expect-error TypeScript thinks `rest` can be an empty object
          args.push(rest);
        }
        return router.prefetch(...args);
      },
    };
  }, [locale, router]);
}
