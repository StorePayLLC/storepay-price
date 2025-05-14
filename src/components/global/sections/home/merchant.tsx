'use client';
import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import merchant from '@/assets/images/global/pages/home/merchant.jpg';
import Whatsup from '@/assets/images/global/pages/home/whatsup.svg';
import Link from '@/components/link';
import { isStorepayId } from '@/config/constants';

const Merchant = () => {
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
    <section className="bg-white text-center text-black-2" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mx-3 text-xl font-semibold md:mx-0 md:text-3xl">{t`Want to grow your sales and customer base?`}</h2>
        <h1 className="mb-8 mt-4 text-3xl font-bold md:mb-12 md:mt-8 md:text-6xl">{t`Become our merchant!`}</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 60 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative"
      >
        <Image src={merchant} alt="" className="mx-auto block w-full max-w-6xl px-3" />
        <h2 className="text-md absolute bottom-3 left-0 right-0 mx-auto max-w-sm font-thin text-white sm:max-w-none md:bottom-7 md:text-3xl">
          {t`Contact us today to join our network.`} <br /> <span className="font-bold">partnership@storepay.id</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <h1 className="mt-10 text-2xl font-bold text-black-2 md:mt-20 md:text-5xl">{t`Follow Us and Sign Up Early!`}</h1>
        <p className="mb-6 mt-5 text-xl font-light text-black-2 md:mt-12 md:text-3xl">{t`Exclusive rewards and special offers await early sign-ups. Don’t miss out!`}</p>
        <Link
          href="https://wa.me/6281779900099"
          className="mx-auto flex w-fit items-center gap-3 rounded-[30px] bg-[#32C85A] px-10 py-3 text-white"
        >
          <Whatsup className="" />
          <span>Whats app</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Merchant;
