'use client';
import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import Image from 'next/image';
import Link from '@/components/link';

import { globe, id, mn, vi } from '@/assets/images/flags';
import GlobeIcon from '@/assets/images/global/globe-1.svg';

const websites = [
  { title: 'Storepay Global', href: 'https://storepay.global', flag: globe },
  { title: 'Storepay Mongolia', href: 'https://storepay.mn', flag: mn },
  { title: 'Storepay Indonesia', href: 'https://storepay.id', flag: id },
  { title: 'Storepay Vietnam', href: 'https://storepay.vn', flag: vi },
];

const LocaleBtn = ({ isSpcPage }: { isSpcPage: boolean }) => {
  const items: MenuProps['items'] = websites.map((v, idx) => ({
    key: idx,
    label: (
      <Link type="button" className="font-global-regular flex items-center p-0.5" href={v.href}>
        <Image
          src={v.flag}
          width={20}
          className={`mr-1 object-contain ${v.title === 'Storepay Global' ? 'h-[15px]' : 'h-[15px]'}`}
          alt=""
        />{' '}
        &nbsp;
        {v.title}
      </Link>
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
