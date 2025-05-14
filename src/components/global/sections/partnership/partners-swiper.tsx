'use client';
import React, { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';

import { Parters1, Partners2, Partners3, PartnersLong } from '@/assets/images/global/pages/partners';

const PartnersSwiper = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const isDesktop = width > 768;

  const desktopImages = [PartnersLong, PartnersLong, PartnersLong, PartnersLong, PartnersLong, PartnersLong];
  const mobileImages = [Parters1, Partners2, Partners3, Parters1, Partners2, Partners3];

  useEffect(() => {
    let controls;
    let finalPosition = isDesktop ? -width / 2 - 20 : -width;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 35,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, width, isDesktop]);

  const image = isDesktop ? desktopImages : mobileImages;

  return (
    <div>
      <motion.div style={{ x: xTranslation }} className="mt-10 flex gap-5 md:mt-16" ref={ref}>
        {image.map((_, idx) => (
          <Image alt="" src={_} key={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersSwiper;
