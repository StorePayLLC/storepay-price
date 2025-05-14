'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import { Video } from '@/components/global/ui/video';

const Illus1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="illus-1 bg-[#fafafa] md:!pt-[10%]" ref={ref}>
      <div className="custom-container h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
          transition={{ duration: 1 }}
          className="flex h-full flex-col items-center justify-center"
        >
          <Video
            width="608px"
            height="608px"
            autoPlay={true}
            controls={false}
            path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/1.mp4"
            className="mx-auto h-75 w-full object-contain md:h-[550px] md:w-[608px]"
            loop={false}
          />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center text-5xl font-bold text-black-2 md:text-6xl"
          >
            <Trans>
              <span className="text-primary">Zero fees, interest- free</span> payments
            </Trans>
          </motion.h2>
          <motion.h2
            className="mt-8 text-center text-2xl font-light text-black-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t`It’s completely free to use, with no interest fee.`}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Illus1;
