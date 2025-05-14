'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import ArrowLong from '@/assets/images/global/arrow-long.svg';
import Bnpl from '@/assets/images/global/bnpl.svg';
import { isStorepayId } from '@/config/constants';

const Illus6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="bg-[#fafafa]" ref={ref}>
      <div className="custom-container h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          className="flex h-full flex-col items-center justify-center gap-6"
        >
          {/*<Image src={img} alt="" />*/}
          <Bnpl className="w-full md:w-[652px]" />
          {/*width="652" height="262"*/}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="mt-5 text-center text-4xl font-bold text-black-2 md:text-6xl"
          >
            <Trans>
              Redefining <span className="text-primary">BNPL</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="illus-1__text max-w-screen-lg text-center text-xl font-light text-black-2 md:text-2xl"
          >
            {t`Storepay transcends traditional retail boundaries by offering a flexible BNPL option for a wide range of essential expenses. Imagine splitting payments for daily needs, fuel, travel tickets, education, unexpected hospital or dental bills, and even significant purchases like cars or real estate. Discover the extensive network of places where Storepay is accepted. Explore with us, spend wisely and pay at your pace.`}
          </motion.p>
          {isStorepayId() || (
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              target="_blank"
              href="/en/global/our-products"
              className="flex items-center gap-4 rounded-3xl bg-black-2 px-5 py-3 text-sm font-light text-white"
            >
              <h3>{t`Find out more`}</h3>
              <ArrowLong />
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Illus6;
