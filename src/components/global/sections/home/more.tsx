'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

const More = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="more relative h-[80vh] bg-black-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 bg-transparent text-3xl font-bold md:gap-10 lg:text-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          className="text-center text-7xl font-bold text-white md:text-8xl"
          style={{ lineHeight: 1.3 }}
        >{t`More for you`}</motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="min-h-24 max-w-sm text-center text-2xl font-light leading-10 text-white md:max-w-5xl md:text-4xl md:leading-[3rem]"
        >
          {t`Flexible payment plans and thousands of brands and millions of products that are tailor made just for your needs`}
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default More;
