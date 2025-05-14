'use client';

import { t } from '@lingui/core/macro';

import PartnersSwiper from './partners-swiper';

const Partners = () => (
  <section className="mb-30 md:mb-59">
    <h1 className="mb-8 text-center text-3xl font-bold text-black-2 md:text-5xl">{t`Become our Merchant Partner`}</h1>
    <p className="text-md mx-3 max-w-5xl text-center font-light text-black-2 md:mx-auto md:text-xl">
      {t`Join Storepay to drive growth with our Buy Now, Pay Later (BNPL) solutions. Benefit from interest-free payments, seamless integration, and increased visibility. Boost sales, attract new customers, and enhance cash flow with our flexible payment options.`}
    </p>
    <PartnersSwiper />
  </section>
);

export default Partners;
