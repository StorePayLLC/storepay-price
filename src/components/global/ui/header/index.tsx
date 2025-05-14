import React from 'react';
import { t } from '@lingui/core/macro';

import DesktopHeader from './index.desktop';
import MobileHeader from './index.mobile';

export type MenuItem = { title: string; href: string };

const Header = ({ locale }: { locale: string }) => {
  const menus = () => [
    { title: t`About Us`, href: `/${locale}/global/about-us` },
    { title: t`Our products`, href: `/${locale}/global/our-products` },
    { title: t`Partnership`, href: `/${locale}/global/partnership` },
    { title: t`SPC Token`, href: `/${locale}/global/spc-token` },
    { title: t`Press`, href: `/${locale}/global/press` },
  ];

  return (
    <>
      <DesktopHeader menus={menus()} locale={locale} />
      <MobileHeader menus={menus()} locale={locale} />
    </>
  );
};

export default Header;
