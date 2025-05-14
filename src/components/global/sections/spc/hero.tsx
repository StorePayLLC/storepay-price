'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import { SpcHero, SpcHeroText } from '@/assets/images/global/pages/spc';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 70 }}
      transition={{ duration: 0.7 }}
      className="custom-container flex h-auto flex-col items-center justify-center pt-40 sm:h-screen sm:pt-0"
      ref={ref}
    >
      <div className="relative mx-auto sm:w-full lg:w-[886px]">
        <Image src={SpcHero} alt="" className="h-full w-full object-contain" />
        <div className="absolute bottom-0 h-[60%] w-full bg-gradient-to-b from-transparent via-[#000] to-[#000] bg-no-repeat" />
      </div>
      <SpcHeroText className="mx-auto w-full scale-150 object-center sm:scale-100 md:w-full lg:h-[110px]" />
    </motion.section>
  );
};

export default Hero;
