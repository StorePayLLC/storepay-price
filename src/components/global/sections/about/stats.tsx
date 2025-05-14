'use client';
import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

const Stat = ({ stat, label, isVisible }: { stat: string; label: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(stat.replace(/[^0-9]/g, ''), 10);
    const duration = 1.4; // duration in seconds
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
      <p className="font-global-thin mx-auto max-w-90 text-lg leading-6 text-white md:font-light">{label}</p>
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
    <section ref={ref} className="flex flex-col gap-14 bg-[#1D1F23] py-28">
      {stats().map((v) => (
        <Stat key={v.id} stat={v.stat} label={v.label} isVisible={hasAnimated} />
      ))}
    </section>
  );
};

const stats = () => [
  { id: 1, stat: '28%', label: t`Storepay increased customer acquisition by 28% for merchant partners` },
  { id: 2, stat: '37%', label: t`Increase in merchant partners sales compared to pre-Storepay` },
  { id: 3, stat: '$8M+', label: t`In total customer savings` },
  { id: 4, stat: '1,1M+', label: t`Number of purchases powered by Storepay` },
  { id: 5, stat: '5,000+', label: t`Merchant partners` },
];

export default Stats;
