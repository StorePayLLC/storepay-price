'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import { Cube } from '@/components/global/sections/home/cube';
import { Video } from '@/components/global/ui/video';

const words = () => [
  { word: t`Accessibility`, color: '#007BFF' },
  { word: t`Security`, color: '#28A745' },
  { word: t`Sustainability`, color: '#FF5733' },
  { word: t`Responsibility`, color: '#B8860B' },
];

const Illus3 = () => {
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
          className="flex h-full flex-col items-center justify-center gap-5"
        >
          <Video
            width="550px"
            height="550px"
            autoPlay={true}
            controls={false}
            path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/4.mp4"
            className="mx-auto h-75 w-full object-contain md:h-[550px] md:w-[550px]"
            loop={false}
          />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="text-center text-5xl font-bold text-black-2 md:text-6xl"
          >
            <Trans>
              <span className="text-primary">Revolutionizing</span> Everyday Finance
            </Trans>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 4 }}
            className="mt-0 min-h-16 max-w-3xl text-center text-2xl font-light text-black-2"
          >
            <h2>{t`We're dedicated to bringing the benefits of digital finance to everyone. Join us in shaping a future where technology meets accessibility, security, and sustainability in finance.`}</h2>
          </motion.div>
          <div className="flex items-center justify-center">
            <Cube words={words()} />
          </div>
          <p className="text-center text-2xl font-light text-black-2">{t`in finance`}.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Illus3;
