'use client';

import { useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import Image from 'next/image';

import IconFb from '@/assets/images/global/icon-fb.svg';
import IconIg from '@/assets/images/global/icon-ig.svg';
import IconMed from '@/assets/images/global/icon-medium.svg';
import IconTelegram from '@/assets/images/global/icon-telegram.svg';
import IconTwitter from '@/assets/images/global/icon-x.svg';
import AppStore from '@/assets/images/global/pages/home/appstore.svg';
import PlayStore from '@/assets/images/global/pages/home/playstore.svg';
import FooterQr from '@/assets/images/global/qr-code-1.svg';
import { contactLinks, ModalState } from '@/components/global/sections/partnership/contact';
import ContactModal from '@/components/global/sections/partnership/contact.modal';
import Link from '@/components/link';
import { usePathname } from '@/components/navigation';
import { isStorepayId } from '@/config/constants';

const socials = [
  { id: 1, icon: IconFb, link: 'https://www.facebook.com/storepay.mn' },
  { id: 2, icon: IconIg, link: 'https://www.instagram.com/storepay.mn/' },
  { id: 3, icon: IconTwitter, link: 'https://x.com/i/flow/login?redirect_after_login=%2FStorepay_SPCFIN' },
  { id: 4, icon: IconMed, link: 'https://storepayspcfin.medium.com/' },
  { id: 5, icon: IconTelegram, link: 'https://t.me/storepayspc' },
  // { id: 6, icon: IconDiscord, link: 'https://www.telegram.com/storepay' },
  // { id: 7, icon: IconViber, link: 'https://www.telegram.com/storepay' },
];

const Footer = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const isGreetingPage = pathname.includes('greeting');
  const isWelcome = pathname === `/global`;
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  const footerMenu = () => [
    { title: t`About us`, href: `/global/about-us`, show: true },
    { title: t`Our products`, href: `/global/our-products`, show: true },
    { title: t`Partnership`, href: `/global/partnership`, show: true },
    { title: t`SPC Token`, href: `/global/spc-token`, show: !isStorepayId() },
    { title: t`Press`, href: `/global/press`, show: true },
    { title: t`Contact us`, href: `/global/partnership#contact`, show: true },
    { title: t`Help`, href: `/global/help`, show: true },
    { title: t`Privacy & Terms`, href: `/global/privacy`, show: true },
  ];

  if (isGreetingPage || isWelcome) return null;

  return (
    <footer className="bg-black-2 py-14 text-white md:py-8" style={{ scrollSnapAlign: 'start' }}>
      {/* App Download Section */}
      <div className="mb-8 border-b-[1px] border-b-darkgray">
        {/*<p className="mb-7 text-center text-xs text-[#d3d3d3]">*/}
        {/*  *SPC akan tersedia kemudian setelah mendapat persetujuan dari regulator*/}
        {/*</p>*/}
        <div className="container mx-auto mb-8 px-4">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <h2 className="w-[350px] text-center text-4xl font-bold leading-10 md:text-left">{t`Get the Storepay app now`}</h2>
            <div className="rounded-lg bg-white p-1.5">
              <FooterQr className="h-[114px] w-[113px]" />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://apps.apple.com/mn/app/storepay/id1470947761"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                {/*<Image src={appstore} alt="Download on App Store" width={180} height={60} />*/}
                <AppStore style={{ border: '1px solid #202020', borderRadius: 12 }} />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.storepay&pcampaignid=web_share"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                {/*<Image src={playstore} alt="Get it on Google Play" width={180} height={60} />*/}
                <PlayStore style={{ border: '1px solid #202020', borderRadius: 12 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto mb-12 flex justify-center px-4">
        <Link href={`/${locale}/global/home`}>
          <Image src="/logo.svg" alt="Storepay" width={160} height={40} className="h-10 w-auto" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="container mx-auto mb-12 px-4">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerMenu()
            .filter((v) => v.show)
            .map((item) => (
              <li key={item.title}>
                <Link
                  href={isStorepayId() ? '' : item.href}
                  onClick={() => {
                    if (isStorepayId() && item.title === t`Contact us`) setIsModalOpen(contactLinks()[1]);
                  }}
                  className="text-gray-300 font-light transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mb-8 border-b-[1px] border-b-darkgray">
        <div className="container mx-auto mb-8 px-4">
          <div className="flex justify-center gap-6">
            {socials.map((platform) => {
              const Icon = platform.icon;
              return (
                <Link
                  key={platform.id}
                  href={platform.link}
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <span className="sr-only">{platform.link}</span>
                  <Icon alt="" width={24} height={24} className="h-8 w-8" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* Copyright */}
      <div className="text-gray-400 container mx-auto px-4 text-center">
        <p className="font-light text-gray-second">
          <Trans>Copyright © {new Date().getFullYear()} Storepay All Rights Reserved.</Trans>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
