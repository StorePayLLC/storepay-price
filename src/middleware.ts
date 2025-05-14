import { NextRequest, NextResponse } from 'next/server';

import { userTokenField } from '@/config/constants';
import { AVAILABLE_LOCALES, availableLocales, defaultLocale } from '@/config/internalization';

// Step 1: Use the incoming request

export default async function middleware(request: NextRequest) {
  // const { device } = userAgent(request);
  // const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  // if (request.nextUrl.pathname !== `/${defaultLocale}` && !request.nextUrl.pathname.startsWith(`/${defaultLocale}/`)) {
  //   request.nextUrl.searchParams.set('viewport', viewport);
  // }
  let userLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (!userLocale || !availableLocales.includes(userLocale as AVAILABLE_LOCALES)) {
    userLocale = defaultLocale;
  }
  request.headers.set('x-pathname', request.nextUrl.pathname);
  const userToken = await getUserToken(request);

  const pathname = stripLocale(request.nextUrl.pathname);

  if (protectedRoutes.test(pathname) && !userToken) {
    const res = NextResponse.redirect(new URL(`/${userLocale}/auth/login`, request.url));
    res.cookies.set('redirect', `/${userLocale}${pathname}`);
    return res;
  }

  // const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  //
  // // Step 2: Create and call the next-intl middleware
  // const handleI18nRouting = createIntlMiddleware({
  //   locales: availableLocales,
  //   defaultLocale,
  //   // localeDetection: !cookieLocale,
  //   // localePrefix: 'as-needed',
  // });
  // const response = handleI18nRouting(request);
  //
  // if (!cookieLocale) {
  //   // if (request.geo?.country && availableLocales.includes(request.geo.country.toLowerCase() as AVAILABLE_LOCALES)) {
  //   //   response.cookies.set('NEXT_LOCALE', request.geo.country.toLowerCase());
  //   // } else {
  //   response.cookies.set('NEXT_LOCALE', defaultLocale);
  //   // }
  // }
  // // Step 3: Alter the response
  // response.headers.set('x-default-locale', defaultLocale);
  // // response.headers.set('x-pathname', request.nextUrl.pathname);
  const response = NextResponse.next();

  if (userToken) {
    response.cookies.set(userTokenField, userToken);
  }

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|sitemap|_next/|assets|.*\\.ico|.*\\.txt|.*\\.js|.*\\.xml|.*\\.svg|.*\\.png).*)',
  ],
};

const protectedRoutes = /^\/(backoffice|merchant|user)/;

function stripLocale(pathname: string) {
  const [, locale, ...parts] = pathname.split('/');
  if (availableLocales.includes(locale as AVAILABLE_LOCALES)) return `/${parts.join('/')}`;

  return pathname;
}

async function getUserToken(request: NextRequest): Promise<string | undefined> {
  const currentUserToken = request.cookies.get(userTokenField)?.value;
  if (currentUserToken) return currentUserToken;
  return undefined;
}
