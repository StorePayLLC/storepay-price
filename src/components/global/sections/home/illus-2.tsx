'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

import { Video } from '@/components/global/ui/video';

const Illus2 = () => {
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
          className="flex h-full flex-col items-center justify-center"
        >
          {/*<Illustration2 className="h-75 w-75 object-contain md:h-[420px] md:w-[734px]" />*/}
          <Video
            width="600px"
            height="600px"
            autoPlay={true}
            controls={false}
            path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/3_1.mp4"
            className="mx-auto h-75 w-full object-contain md:h-[600px] md:w-[600px]"
            loop={false}
          />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-center text-5xl font-bold text-black-2 md:text-6xl"
          >
            <Trans>
              <span className="text-primary">Financial inclusivity</span> through innovation
            </Trans>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-4 min-h-16 max-w-3xl text-center text-2xl font-light text-black-2"
          >
            {t`Worried about your credit score? Unlock Storepay services with our alternative credit scoring method.`}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Illus2;
