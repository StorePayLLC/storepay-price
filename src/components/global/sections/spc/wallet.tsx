'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { Video } from '@/components/global/ui/video';

const WalletSection = () => {
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
      <Video
        width="650px"
        height="650px"
        autoPlay={true}
        controls={false}
        path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/5_1.mp4"
        className="mx-auto h-75 w-full object-contain md:h-[650px] md:w-[650px]"
      />
      <h2 className="mt-12 text-center text-4xl font-bold text-white md:text-6xl">
        <span className="text-primary1">Wallet-to-Wallet</span> Transfer
      </h2>
      <p className="text-md mx-3 mt-6 max-w-5xl text-center text-xl text-[#ABB1BA] md:mx-auto md:text-3xl">
        We offer <span className="font-bold text-white">free wallet-to-wallet</span> transfers, facilitating easy and cost-free
        transactions.
      </p>
    </motion.section>
  );
};

export default WalletSection;
