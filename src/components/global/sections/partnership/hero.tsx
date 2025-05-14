import Image from 'next/image';

import eco from '@/assets/images/global/eco.png';

const Hero = () => (
  <section className="custom-container flex flex-col items-center justify-center py-25 md:py-42.5">
    <h1 style={{ lineHeight: 1.3 }} className="max-w-4xl text-center text-4xl font-bold text-black-2 md:text-5xl">
      Join Storepay to drive growth with our Buy Now, Pay Later solutions
    </h1>
    <Image src={eco} alt="" className="mx-auto mt-20" width={758} height={483} />
  </section>
);

export default Hero;
