import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

import { DomainConfig, MiddlewareConfigWithDefaults } from './NextIntlMiddlewareConfig';
import { COOKIE_LOCALE_NAME } from './shared/constants';
import { AllLocales } from './shared/types';
import { getHost, getLocaleFromPathname, isLocaleSupportedOnDomain } from './utils';

function findDomainFromHost<Locales extends AllLocales>(requestHeaders: Headers, domains: Array<DomainConfig<Locales>>) {
  let host = getHost(requestHeaders);

  // Remove port (easier for local development)
  host = host?.replace(/:\d+$/, '');

  if (host && domains) {
    return domains.find((cur) => cur.domain === host);
  }

  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAcceptLanguageLocale<Locales extends AllLocales>(requestHeaders: Headers, locales: Locales, defaultLocale: string) {
  let locale;
  // TODO: implement geoip based locale detection
  // const geoipLocale = getGeoipLocale(requestHeaders);
  // console.log({ acceptLanguage: requestHeaders.get('accept-language') });
  try {
    // locale = match(languages, locales as unknown as Array<string>, defaultLocale);
  } catch (e) {
    // Invalid language
  }

  return locale;
}

function resolveLocaleFromPrefix<Locales extends AllLocales>(
  { defaultLocale, localeDetection, locales }: MiddlewareConfigWithDefaults<Locales>,
  requestHeaders: Headers,
  requestCookies: RequestCookies,
  pathname: string,
) {
  let locale;

  // Prio 1: Use route prefix
  if (pathname) {
    const pathLocale = getLocaleFromPathname(pathname);
    if (locales.includes(pathLocale)) {
      locale = pathLocale;
    }
  }

  // Prio 2: Use existing cookie
  if (!locale && localeDetection && requestCookies) {
    if (requestCookies.has(COOKIE_LOCALE_NAME)) {
      const value = requestCookies.get(COOKIE_LOCALE_NAME)?.value;
      if (value && locales.includes(value)) {
        locale = value;
      }
    }
  }

  // Prio 3: Use the `accept-language` header
  if (!locale && localeDetection && requestHeaders) {
    locale = getAcceptLanguageLocale(requestHeaders, locales, defaultLocale);
  }

  // Prio 4: Use default locale
  if (!locale) {
    locale = defaultLocale;
  }

  return locale;
}

function resolveLocaleFromDomain<Locales extends AllLocales>(
  config: MiddlewareConfigWithDefaults<Locales>,
  requestHeaders: Headers,
  requestCookies: RequestCookies,
  pathname: string,
) {
  const { domains } = config;

  const localeFromPrefixStrategy = resolveLocaleFromPrefix(config, requestHeaders, requestCookies, pathname);

  // Prio 1: Use a domain
  if (domains) {
    const domain = findDomainFromHost(requestHeaders, domains);
    const hasLocalePrefix = pathname && pathname.startsWith(`/${localeFromPrefixStrategy}`);

    if (domain) {
      return {
        locale:
          isLocaleSupportedOnDomain<Locales>(localeFromPrefixStrategy, domain) || hasLocalePrefix
            ? localeFromPrefixStrategy
            : domain.defaultLocale,
        domain,
      };
    }
  }

  // Prio 2: Use prefix strategy
  return { locale: localeFromPrefixStrategy };
}

export default function resolveLocale<Locales extends AllLocales>(
  config: MiddlewareConfigWithDefaults<Locales>,
  requestHeaders: Headers,
  requestCookies: RequestCookies,
  pathname: string,
): { locale: Locales[number]; domain?: DomainConfig<Locales> } {
  if (config.domains) {
    return resolveLocaleFromDomain(config, requestHeaders, requestCookies, pathname);
  } else {
    return {
      locale: resolveLocaleFromPrefix(config, requestHeaders, requestCookies, pathname),
    };
  }
}
