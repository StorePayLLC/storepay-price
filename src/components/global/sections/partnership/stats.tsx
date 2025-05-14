'use client';

import { useEffect, useRef, useState } from 'react';
import { Trans } from '@lingui/react/macro';
import { motion, useInView } from 'framer-motion';

const Stat = ({ stat, label, isVisible }: { stat: string; label: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(stat.replace(/[^0-9]/g, ''), 10);
    const duration = 2; // duration in seconds
    const increment = target / (duration * 60); // assuming 60 frames per second

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(Math.floor(currentCount));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [stat, isVisible]);

  return (
    <div className="text-center">
      <motion.h1
        className="mb-4 text-6xl font-bold text-[#32C85A] md:text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {stat.includes('%') ? `${count}%` : stat.includes('$') ? `$${count}M+` : `${count}+`}
      </motion.h1>
      <p className="mx-auto max-w-75 text-lg font-light leading-6 text-white">{label}</p>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={ref} className="flex flex-col gap-14 bg-black-2 py-20 md:py-40">
      <h1 className="mx-auto max-w-xl text-center text-3xl font-bold text-white md:text-5xl">
        <Trans>Here is What Our Merchants are Saying</Trans>
      </h1>
      {stats.map((v) => (
        <Stat key={v.id} stat={v.stat} label={v.label} isVisible={hasAnimated} />
      ))}
    </section>
  );
};

const stats = [
  { id: 1, stat: '28%', label: 'Storepay increased customer acquisition by 28% for merchants.' },
  { id: 2, stat: '37%', label: 'Storepay increased sales by 37% for merchants.' },
  { id: 3, stat: '20%', label: 'Storepay increased average sales amount per user by 20% for merchants.' },
  { id: 4, stat: '63%', label: 'Repeat purchase rate were proven with Storepay merchants.' },
];

export default Stats;
