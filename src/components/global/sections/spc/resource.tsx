'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import { Bscscan, Certik, CoinGecko, CoinMarketCap, Whitepaper } from '@/assets/images/global/pages/spc';
import { Video } from '@/components/global/ui/video';
import Link from '@/components/link';

const ResourceSection = () => {
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
        width="784px"
        height="390px"
        autoPlay={true}
        controls={false}
        path="https://shoppy-cdn.s3.amazonaws.com/volume/spc-hero.mp4"
        className="mx-auto"
      />
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-5">
        {spcs.map((item) => {
          const Logo = item.logo;
          return (
            <Link
              href={item.href}
              target="_blank"
              key={item.id}
              style={{ border: '1px solid #1D1F23' }}
              className="mx-5 flex w-full items-center justify-center gap-4 rounded-[50px] bg-[#0E1012] px-14 py-5 sm:w-fit md:mx-0"
            >
              <Logo />
              <p className="text-xl text-white">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

const spcs = [
  {
    id: 1,
    title: 'Download Whitepaper',
    logo: Whitepaper,
    href: 'https://storepay.global/wp-content/uploads/2022/09/220928_SPC_Whitepaper_Eng.pdf',
  },
  { id: 2, title: 'View BscScan', logo: Bscscan, href: 'https://bscscan.com/token/0x1eaffd6b9ef0f45d663f3fbf402226c98609600e' },
  { id: 3, title: 'CertiK Audit', logo: Certik, href: 'https://skynet.certik.com/projects/storepay-coin' },
  { id: 4, title: 'CoinMarketCap', logo: CoinMarketCap, href: 'https://coinmarketcap.com/currencies/storepay/' },
  { id: 5, title: 'CoinGecko', logo: CoinGecko, href: 'https://www.coingecko.com/en/coins/storepay' },
];

export default ResourceSection;
