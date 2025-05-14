'use client';
import { useRef } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';

const timelineData = () => [
  { year: '2019', description: t`Storepay LLC, Mongolia /founded our company/` },
  {
    year: '2020',
    description: t`Storepay Holding PTE, Singapore/ founded our Holding entity with broader possibilities of innovation/`,
  },
  { year: '2024', description: t`Storepay 4.0 - Long term credit product launch & Storepay Fintech Indonesia` },
  { year: '2025', description: t`Storepay Vietnam / In preparation for launch/` },
  { year: '2026', description: t`Storepay Thailand/ In preparation for launch/` },
];

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-32 md:py-50">
      <h2 className="mb-12 text-center text-4xl font-bold text-black-2 md:mb-20 md:text-5xl">What we've done so far</h2>
      <div className="space-y-11.5">
        {timelineData().map((item, index) => (
          <motion.div
            key={index}
            className="mx-auto flex max-w-xs items-start gap-5 md:max-w-sm md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="flex flex-col items-center pt-4">
              <div className="h-3.5 w-3.5 rounded-full bg-[#FF635B]" />
            </div>
            <div>
              <h3 className="mb-2 text-4xl font-bold text-primary md:text-5xl">{item.year}</h3>
              <p className="text-lg font-light text-[#393E46]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
