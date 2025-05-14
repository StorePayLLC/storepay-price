'use client';
import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import ArrowLong from '@/assets/images/global/arrow-long.svg';
import { Video } from '@/components/global/ui/video';
import { isStorepayId } from '@/config/constants';

const Illus5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  if (isStorepayId()) return null;

  return (
    <section className="bg-[#fafafa]" ref={ref}>
      <div className="custom-container h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          className="flex h-full flex-col items-center justify-center gap-4"
        >
          <Video
            width="520px"
            height="260px"
            autoPlay={true}
            className="mx-auto"
            controls={false}
            path="https://shoppy-cdn.s3.amazonaws.com/volume/spc.mp4"
            loop={false}
          />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="text-center text-4xl font-bold text-black-2 md:text-6xl"
          >
            <Trans>
              With us, your financial integrity is not just respected - <span className="text-meta-7">It’s rewarded</span>
            </Trans>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="illus-1__text my-3 max-w-2xl text-center text-2xl font-light text-black-2"
          >
            <Trans>As a token of appreciation for your diligence, we offer rewards upon the completion of your repayments</Trans>
          </motion.p>
          {isStorepayId() || (
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              href="/en/global/spc-token"
              target="_blank"
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

export default Illus5;
