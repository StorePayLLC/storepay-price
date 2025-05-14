'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

import { RoundVector, Tokens } from '@/assets/images/global/pages/spc';

const TokenSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 42;
    const duration = 2; // duration in seconds
    const increment = target / (duration * 60); // assuming 60 frames per second

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(Math.floor(currentCount));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <motion.section
      className="flex flex-col justify-between gap-11 md:gap-[112px]"
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 80 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-center text-4xl font-bold text-white md:text-7xl">{t`Tokenomics`}</h1>
      <div className="relative mx-auto flex w-[90%] items-center justify-center md:w-fit">
        <RoundVector className="mx-auto w-full md:h-[575px] md:w-[574px]" />
        <div className="absolute inset-0 m-auto block h-fit w-fit text-center text-white">
          <p className="mb-3 text-lg">Total Supply</p>
          <p className="mb-0 text-4xl font-bold md:text-5xl">160,126,704,0{count}</p>
        </div>
      </div>
      <Tokens className="mx-auto mt-10 w-full scale-150 md:mt-0 md:h-[441px] md:w-[1376px] md:scale-100" />
    </motion.section>
  );
};

export default TokenSection;
