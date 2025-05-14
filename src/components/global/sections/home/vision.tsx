'use client';

import { useEffect, useRef, useState } from 'react';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import VisionIcon from '@/assets/images/global/pages/home/vision.svg';
import { isStorepayId } from '@/config/constants';

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  if (!isStorepayId()) return null;
  return (
    <section className="bg-[#00005E] text-center text-2xl font-bold text-white lg:text-5xl" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
        transition={{ duration: 1 }}
      >
        <VisionIcon className="mx-auto" />
        <motion.h2
          className="my-6 lg:my-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
        >
          <Trans>
            Our <span className="text-[#FF635B]">Vision</span>
          </Trans>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto max-w-7xl px-2 text-white"
        >
          <Trans>
            To become a leading provider of accessible financial solutions in Southeast Asia, empowering individuals to enhance
            their everyday lives with confidence.
          </Trans>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Vision;
