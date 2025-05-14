'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import { Reward } from '@/assets/images/global/pages/spc';

const RewardSection = () => {
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
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 80 }}
      transition={{ duration: 1 }}
    >
      <Image src={Reward} alt="" width={356} height={356} className="mx-auto h-50 w-50 md:h-[356px] md:w-[356px]" />
      <h2 className="mt-12 text-center text-4xl font-bold text-white md:text-6xl">
        <span className="text-primary1">Reward</span> system
      </h2>
      <p className="text-md mx-auto mt-6 max-w-5xl text-center text-xl text-[#ABB1BA] md:text-3xl">
        Users who repay their installment plans on time will receive SPC tokens equivalent to{' '}
        <span className="font-bold text-white">0.5%</span> of their purchase amount.
      </p>
    </motion.section>
  );
};

export default RewardSection;
