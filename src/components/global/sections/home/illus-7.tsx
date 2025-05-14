'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import img from '@/assets/images/global/coin_3d.png';
import { isStorepayId } from '@/config/constants';

const Illus7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  if (isStorepayId())
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
            className="text-center text-6xl font-bold text-white md:text-9xl"
          >{t`Who we are`}</motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="min-h-24 max-w-sm text-center text-xl font-light text-white md:max-w-5xl md:text-4xl md:leading-[3rem]"
          >
            {t`We offer a Buy Now, Pay Later (BNPL) fintech service through our mobile app. The app allows users to split their payments at our partner merchants with no interest and absolutely no hidden fees. Our holding company is based in Singapore, and we currently operate in Mongolia and Vietnam, with an exciting launch in Indonesia coming soon.`}
          </motion.h2>
        </motion.div>
      </section>
    );

  return (
    <section className="bg-black-2" ref={ref}>
      <div className="custom-container h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          className="flex h-full flex-col items-center justify-center gap-4"
        >
          <Image src={img} alt="" />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="mt-8 max-w-4xl text-center text-4xl font-bold leading-[2.8rem] text-white md:text-6xl md:leading-[4.5rem]"
          >
            <Trans>
              Empowering Equal Financial Opportunities with <span className="text-primary">SPC</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="max-w-screen-lg text-center text-xl font-light text-neutral md:text-2xl"
          >
            {t`In our commitment to foster financial inclusivity and equality, we've introduced SPC, our native token, as a cornerstone of our service. SPC is more than just a digital currency; it's a key to unlocking more of Storepay’s premium features.`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Illus7;
