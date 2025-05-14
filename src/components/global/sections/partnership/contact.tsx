'use client';

import { useEffect, useState } from 'react';
import { t } from '@lingui/core/macro';
import Image from 'next/image';

import promoBanner from '@/assets/images/global/promo-banner.jpg';

import ContactModal from './contact.modal';

export type ModalState = {
  id?: number;
  href?: string;
  title?: string;
  phone?: string;
  email?: string;
  location?: string;
};

export const contactLinks = () => [
  {
    id: 1,
    href: '',
    title: t`Storepay Mongolia`,
    phone: '+(976) 7611-0111',
    email: 'info@storepay.mn',
    location: '20F, NM Tower, Mahatma Gandhi Street 31/1, Khoroo-15, Khan-Uul District, Ulaanbaatar, Mongolia',
  },
  {
    id: 2,
    href: '',
    title: t`Storepay Indonesia`,
    phone: '021-27899882',
    email: 'info@storepay.id , partnership@storepay.id',
    location:
      'Sovereign Plaza 8th Floor Unit A Jl. TB. Simatupang Kav. 36, Cilandak, Jakarta Selatan, DKI Jakarta 12430, Indonesia',
  },
  { id: 3, href: '', title: t`Storepay Vietnam`, phone: '', email: '', location: '' },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  const [hash, setHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.substring(1)); // Remove the '#' character
    };

    // Set the initial hash value
    handleHashChange();

    // Add event listener for hash change
    window.addEventListener('hashchange', handleHashChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (hash === 'contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
    }
  }, [hash]);

  return (
    <>
      <section className="custom-container flex flex-col items-center justify-center py-20 md:py-42.5" id="contact">
        <Image alt="" src={promoBanner} width={1376} height={642} className="mx-auto" />
        <h2 className="my-16 max-w-5xl text-center text-4xl font-bold text-black-2 md:text-6xl">{t`Partner with us and elevate your business today`}</h2>
        <h4 className="mb-6 text-center text-2xl font-light text-black-2">{t`Contact our team`}</h4>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contactLinks().map((v) => (
            <button
              type="button"
              onClick={() => setIsModalOpen(v)}
              key={v.id}
              className="flex items-center justify-center rounded-3xl px-11 py-3 font-light text-black-2"
              style={{ border: '1px solid black' }}
            >
              {v.title}
            </button>
          ))}
        </div>
      </section>
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Contact;
