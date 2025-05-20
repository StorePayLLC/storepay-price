'use client';

import React, { useState } from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Link from '@/components/link';
import { usePathname } from 'next/navigation';

import LogoWhite from '@/assets/images/global/logo-white.svg';
import LogoBlack from '@/assets/images/global/storepay-horizontal.svg';
import { MenuItem } from '@/components/global/ui/header';
import IntBtn from '@/components/global/ui/header/int-btn';
import LocaleBtn from '@/components/global/ui/header/locale-btn';
import { isStorepayId } from '@/config/constants';

const Header = ({ menus, locale }: { menus: MenuItem[]; locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();
  const isSpcPage = pathname.includes('spc-token');
  const isGreetingPage = pathname.includes('greeting');
  if (isGreetingPage) return null;
  return (
    <header
      className={`backdrop-saturate-180 backdrop-blur-5 fixed top-0 z-50 block w-full border-b-[1px] backdrop-blur-sm ${isSpcPage ? 'border-[#fff]/20 bg-[#000]/50 text-white' : 'border-b-gray bg-white/90 text-black-2'} px-2 py-4 shadow-md md:hidden`}
    >
      <div className="container mx-auto flex items-center justify-between md:px-4">
        <Link href={`/`}>{isSpcPage ? <LogoWhite /> : <LogoBlack />}</Link>
        <div className="flex items-center space-x-4">
          {isStorepayId() ? <LocaleBtn isSpcPage={isSpcPage} /> : <IntBtn isSpcPage={isSpcPage} />}
          {isStorepayId() || (
            <button onClick={toggleMenu} className="text-black-2 md:hidden">
              {isMenuOpen ? (
                <CloseOutlined size={24} style={{ color: isSpcPage ? 'white' : 'black' }} />
              ) : (
                <MenuOutlined size={24} style={{ color: isSpcPage ? 'white' : 'black' }} />
              )}
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`fixed mt-4 block w-full ${isSpcPage ? 'border-[#fff]/20 bg-[#000]/80' : 'bg-white'} shadow-md md:hidden`}
        >
          <nav className="flex flex-col items-center py-4">
            {menus?.length > 0 &&
              menus.map((item, idx) => (
                <Link
                  key={idx}
                  onClick={toggleMenu}
                  href={item.href}
                  className="hover:text-yellow-300 py-2 transition duration-300 ease-in-out"
                >
                  {item.title}
                </Link>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
