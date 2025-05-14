'use client';

import { t } from '@lingui/core/macro';
import Image from 'next/image';

import team from '@/assets/images/global/about-team.jpg';

const Join = () => (
  <section className="join custom-container pb-20 text-center md:pb-40">
    <Image alt="storepay team" src={team} className="mb-16 w-full rounded-xl" width={1376} height={412} />
    <h2 className="text-3xl font-bold text-black-2 md:text-5xl">{t`Join our family by sending your CV at`}: </h2>
    <a href="mailto:hr@storepay.id" className="mt-4 block text-3xl font-bold text-primary md:text-5xl">
      hr@storepay.id
    </a>
    <p className="mx-auto my-16 max-w-4xl text-2xl font-light text-black-2">
      {t`Join Storepay and be part of a culture that’s redefining what it means to work and thrive in the digital age.`}
    </p>
  </section>
);

export default Join;
