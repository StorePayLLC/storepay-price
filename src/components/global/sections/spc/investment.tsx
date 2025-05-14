'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import { Ascendix, Coinhub, Lbank, Mexc } from '@/assets/images/global/pages/spc';
import { Video } from '@/components/global/ui/video';
import Link from '@/components/link';

const investments = [
  { id: 1, title: 'mexc global', logo: Mexc, href: 'https://www.mexc.com/price/SPC' },
  { id: 2, title: 'ascendex', logo: Ascendix, href: 'https://ascendex.com/en/cashtrade-spottrading/usdt/spcfin' },
  { id: 3, title: 'lbank', logo: Lbank, href: 'https://www.lbank.com/trade/spcfin_usdt' },
  { id: 4, title: 'mexc', logo: Coinhub, href: 'https://www.coinhub.mn/trading/spcmnt' },
];

const InvestmentSection = () => {
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
      className="custom-container"
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 80 }}
      transition={{ duration: 1 }}
    >
      <Video
        width="606px"
        height="606px"
        autoPlay={true}
        controls={false}
        path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/6.mp4"
        className="mx-auto h-75 w-full object-contain md:h-[606px] md:w-[606px]"
      />
      <h2 className="mt-12 text-center text-4xl font-bold text-primary1 md:text-6xl">{t`Investments`}</h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-[#ABB1BA] md:text-3xl">
        <Trans>
          Users can trade SPC tokens on listed exchanges, offering them{' '}
          <span className="font-bold text-white">investment opportunities.</span>
        </Trans>
      </p>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-4 md:gap-7">
        {investments.map((item) => {
          const Logo = item.logo;
          return (
            <Link
              href={item.href}
              target="_blank"
              key={item.id}
              className="flex items-center justify-center rounded-[50px] bg-[#0E1012] px-5 py-4 md:px-18 md:py-9"
            >
              <Logo />
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

export default InvestmentSection;
