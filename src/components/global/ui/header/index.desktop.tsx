'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import LogoWhite from '@/assets/images/global/logo-white.svg';
import LogoBlack from '@/assets/images/global/storepay-horizontal.svg';
import { MenuItem } from '@/components/global/ui/header';
import { usePathname } from '@/components/navigation';
import { isStorepayId } from '@/config/constants';

import IntBtn from './int-btn';
import LocaleBtn from './locale-btn';

const HeaderDesktop = ({ menus, locale }: { menus: MenuItem[]; locale: string }) => {
  const menu = isStorepayId() ? [] : menus;
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isSpcPage = pathname.includes('spc-token');
  const isGreetingPage = pathname.includes('greeting');
  const isWelcome = pathname === `/global`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isGreetingPage || isWelcome) return null;

  return (
    <header
      className={`header backdrop-saturate-180 backdrop-blur-5 fixed left-0 top-0 z-10 hidden w-full border-b-[1px] ${isSpcPage ? 'border-[#fff]/20 bg-[#000]/50 text-white' : 'border-b-gray bg-white/90 text-black-2'} backdrop-blur-sm md:block`}
    >
      <div className="mx-8">
        <div className={`flex items-center justify-between transition-all ${isScrolled ? 'h-13' : 'h-17'}`}>
          <Link href={`/${locale}/global/home`} className="flex h-full items-center">
            {isSpcPage ? <LogoWhite /> : <LogoBlack />}
          </Link>
          <div className="flex h-full gap-7">
            {menu?.map((v) => {
              const isSelected = v.href === pathname;
              return (
                <Link
                  className={`relative flex h-full items-center text-sm font-[500] transition-all after:absolute after:bottom-0 after:left-1/2 after:mb-[-1px] after:h-[3px] after:-translate-x-1/2 after:transform after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isSelected ? 'after:w-full' : 'after:w-0'}`}
                  key={v.title}
                  href={v.href}
                >
                  {v.title}
                </Link>
              );
            })}
          </div>
          <div className="flex min-w-[120px] justify-end">
            {isStorepayId() ? <LocaleBtn isSpcPage={isSpcPage} /> : <IntBtn isSpcPage={isSpcPage} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
