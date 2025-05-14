'use client';

import { t } from '@lingui/core/macro';

import { Video } from '@/components/global/ui/video';

const Hero = () => (
  <section className="flex h-screen w-full flex-col items-center justify-center bg-[#000000]">
    <h1 style={{ lineHeight: 1.3 }} className="mb-20 mt-[10%] max-w-6xl text-center text-4xl font-bold text-white md:text-6xl">
      {t`Storepay offers you flexible, interest-free installment payments`}
    </h1>
    <Video
      autoPlay={true}
      loop={false}
      controls={false}
      path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/7.mp4"
      className="mx-auto w-full object-contain md:h-[50%] md:w-[50%]"
    />
  </section>
);

export default Hero;
