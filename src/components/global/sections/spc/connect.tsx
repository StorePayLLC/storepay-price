'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { Facebook, Instagram, Medium, Telegram, Twitter } from '@/assets/images/global/pages/spc';
import Link from '@/components/link';

const ConnectSection = () => {
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
      className="custom-container pb-20 text-center text-white sm:pb-40"
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 80 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl md:text-4xl">Connect with</h3>
      <h1 className="mt-4 text-4xl font-bold md:text-6xl">SPC Community</h1>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-0 md:gap-11">
        {communities.map((v) => (
          <Link href={v.link} key={v.id} target="_blank">
            <v.logo className="scale-75 md:scale-100" />
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

const communities = [
  { id: 1, title: 'telegram', logo: Telegram, link: 'https://t.me/storepayspc' },
  { id: 2, title: 'twitter', logo: Twitter, link: 'https://x.com/i/flow/login?redirect_after_login=%2FStorepay_SPCFIN' },
  { id: 3, title: 'facebook', logo: Facebook, link: 'https://www.facebook.com/storepay.mn' },
  { id: 4, title: 'instagram', logo: Instagram, link: 'https://www.instagram.com/storepay.mn/' },
  { id: 5, title: 'medium', logo: Medium, link: 'https://storepayspcfin.medium.com/' },
];

export default ConnectSection;
