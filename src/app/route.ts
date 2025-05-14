import { NextRequest, NextResponse } from 'next/server';

import { AVAILABLE_LOCALES, availableLocales, defaultLocale } from '@/config/internalization';

export async function GET(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  let appendUrl = '/global';
  if (hostname.includes('merchant')) {
    appendUrl = '/merchant-web';
  } else if (hostname.includes('backoffice') || hostname.includes('spadministrator')) {
    appendUrl = '/backoffice';
  }
  const userLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (userLocale && availableLocales.includes(userLocale as AVAILABLE_LOCALES)) {
    return NextResponse.redirect(new URL(`/${userLocale}${appendUrl}`, request.url));
  } else {
    const response = NextResponse.redirect(new URL(`${defaultLocale}${appendUrl}`, request.url));
    response.cookies.set('NEXT_LOCALE', defaultLocale);
    return response;
  }
}
