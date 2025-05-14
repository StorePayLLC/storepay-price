'use client';

import { useMemo } from 'react';
import { i18n } from '@lingui/core';
import { usePathname as useNextPathname } from 'next/navigation';

import { hasPathnamePrefixed, unlocalizePathname } from '@/translations/middleware/shared/utils';

/**
 * Returns the pathname without a potential locale prefix.
 *
 * @example
 * ```tsx
 * 'use client';
 *
 * import {usePathname} from 'next-intl/client';
 *
 * // When the user is on `/en`, this will be `/`
 * const pathname = usePathname();
 * ```
 */
export function usePathname(): string {
  // The types aren't entirely correct here. Outside of Next.js
  // `useParams` can be called, but the return type is `null`.
  const pathname = useNextPathname() as ReturnType<typeof useNextPathname> | null;

  const locale = i18n.locale;

  return useMemo(() => {
    if (!pathname) return pathname as ReturnType<typeof useNextPathname>;

    const isPathnamePrefixed = hasPathnamePrefixed(locale, pathname);
    return isPathnamePrefixed ? unlocalizePathname(pathname, locale) : pathname;
  }, [locale, pathname]);
}
