'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import culture1 from '@/assets/images/global/culture-1.png';
import culture2 from '@/assets/images/global/culture-2.png';
import culture3 from '@/assets/images/global/culture-3.png';
import culture4 from '@/assets/images/global/culture-4.png';
import culture5 from '@/assets/images/global/culture-5.png';
import culture6 from '@/assets/images/global/culture-6.png';

const cultures = () => [
  {
    id: 1,
    img: culture1,
    title: t`Innovative Mindset`,
    description: t`We strive to set trends, push boundaries, and encourage out-of-the-box thinking.`,
  },
  {
    id: 2,
    img: culture2,
    title: t`Inclusive Environment`,
    description: t`Diversity is our strength. Every voice is heard and valued.`,
  },
  {
    id: 3,
    img: culture3,
    title: t`Collaborative Spirit`,
    description: t`Teamwork is our way of life, fostering open communication and mutual support.`,
  },
  {
    id: 4,
    img: culture4,
    title: t`Growth and Development`,
    description: t`Continuous learning and career growth are priorities. We support your journey every step of the way.`,
  },
  {
    id: 5,
    img: culture5,
    title: t`Work-Life Balance`,
    description: t`Flexible schedules and a supportive atmosphere ensure you can recharge and enjoy life.`,
  },
  {
    id: 6,
    img: culture6,
    title: t`Fun Atmosphere`,
    description: t`We know how to have fun, with team-building activities and casual hangouts that build lasting friendships.`,
  },
];

const Culture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      className="py-30 md:py-70"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: hasAnimated || isMobile ? 1 : 0, y: hasAnimated ? 0 : 40 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center text-5xl font-bold text-black-2">{t`Our culture`}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-center text-3xl font-light text-black-2">
        {t`At Storepay, we cultivate a culture that thrives on innovation, inclusivity, and collaboration. Here’s what defines us`}
        :
      </p>
      <div className="custom-container mt-16 grid gap-8 px-10 sm:grid-cols-2 md:grid-cols-3">
        {cultures().map((v) => (
          <div key={v.id} className="mb-6 w-full text-center">
            <Image src={v.img} alt={v.title} className="w-full rounded-xl object-contain" width={474} height={308} />
            <h3 className="mt-4 text-3xl font-bold text-black-2">{v.title}</h3>
            <p className="mx-auto mt-2 max-w-[80%] font-light text-black-2">{v.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Culture;
