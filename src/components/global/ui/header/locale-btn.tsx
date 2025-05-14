'use client';
import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import cookies from 'js-cookie';

import GlobeIcon from '@/assets/images/global/globe-1.svg';
import { isStorepayId } from '@/config/constants';
import { availableLocales, languages, languagesIndo } from '@/config/internalization';

const LocaleBtn = ({ isSpcPage }: { isSpcPage: boolean }) => {
  const items: MenuProps['items'] = Object.entries(isStorepayId() ? languagesIndo : languages).map(([key, { name, flag }]) => ({
    key,
    label: (
      <button
        type="button"
        onClick={() => {
          const pathname = window.location.pathname;

          cookies.set('NEXT_LOCALE', key);
          if (availableLocales.find((loc) => pathname.startsWith(`/${loc}`))) {
            window.location.pathname = pathname.replace(/^\/[a-z]{2}/, `/${key}`);
          } else {
            window.location.pathname = `/${key}${pathname}`;
          }
        }}
      >
        {flag} {name}
      </button>
    ),
  }));

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
      <div>
        <GlobeIcon className="cursor-pointer" style={{ width: 22, height: 22, color: isSpcPage ? 'white' : 'black' }} />
      </div>
    </Dropdown>
  );
};

export default LocaleBtn;
