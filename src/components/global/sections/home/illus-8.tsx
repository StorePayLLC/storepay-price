'use client';

import React from 'react';
import { Trans } from '@lingui/react/macro';

import { Reviews } from '@/components/global/sections/home';

const Illus8 = () => (
  <section className="bg-[#fafafa]">
    <div className="custom-container">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h2 className="mt-8 text-center text-3xl font-bold leading-[3.2rem] text-black-2 md:text-6xl md:leading-[4.5rem]">
          <Trans>Customer stories</Trans>
        </h2>
        <p className="illus-1__text mb-10 max-w-screen-lg text-center text-xl font-light text-neutral md:mb-20 md:text-2xl">
          <Trans>
            Explore firsthand accounts of how Storepay is revolutionizing shopping experiences and empowering financial freedom
            for our users
          </Trans>
          .
        </p>
        <Reviews />
      </div>
    </div>
    {/*<Footer />*/}
  </section>
);

export default Illus8;
