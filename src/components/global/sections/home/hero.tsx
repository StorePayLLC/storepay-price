'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

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
    <section className="hero relative h-[100vh]" ref={ref}>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black-2/55 to-transparent" />
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/294177/0x0xwebp/home-banner.jpg"
          className="h-full w-full object-cover object-top md:object-center"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 text-3xl font-bold md:gap-10 lg:text-5xl"
      >
        <motion.h1
          className="colorful text-center text-5xl font-bold text-white md:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          style={{ lineHeight: 1.3 }}
        >
          {t`Live fully, spend smartly`}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-4xl font-bold text-white md:text-8xl"
        >
          {t`with Storepay`}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
