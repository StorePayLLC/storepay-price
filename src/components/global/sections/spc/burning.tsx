'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

import { ButtonOutlined } from '@/components/global/ui';

const Burning = () => {
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
      className="custom-container text-center"
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 80 }}
      transition={{ duration: 1 }}
    >
      <h1
        style={{ lineHeight: 1.3 }}
        className="bg-gradient-to-b from-[#CC3028] to-[#FF635B] bg-clip-text text-4xl font-bold leading-[100px] text-transparent md:text-7xl"
      >
        Burning Mechanism
      </h1>
      <p className="mx-auto mt-6 max-w-6xl text-xl text-[#ABB1BA] md:text-3xl">
        Every 15 days, 1% of the installment purchase value in SPC tokens, sourced from the payment pool and, if necessary, the
        secondary market, is systematically burned to decrease supply and potentially enhance the token's value.
      </p>
      <p className="mb-6 mt-16 text-xl text-[#ABB1BA] md:text-3xl">To read more about the burn rule</p>
      <ButtonOutlined
        title={t`Burn rule`}
        href="https://storepayspcfin.medium.com/new-burn-rule-of-storepay-coin-spc-b49a484e7a03"
      />
    </motion.section>
  );
};

export default Burning;
