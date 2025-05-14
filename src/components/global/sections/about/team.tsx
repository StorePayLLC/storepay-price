'use client';
import { useRef } from 'react';
import { t } from '@lingui/core/macro';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import Albert from '@/assets/images/global/Albert_Momdjian.png';
import Cecilia from '@/assets/images/global/Cecilia_Barradas.png';
import Gilles from '@/assets/images/global/Gilles_de_Dumans.png';
import Khangal from '@/assets/images/global/Khangal.png';
import Tsatsral from '@/assets/images/global/Tsatsal_Ganbold.png';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section ref={ref}>
      <h2
        style={{ lineHeight: 1.2 }}
        className="mx-4 max-w-5xl text-center text-3xl font-bold text-black-2 md:mx-auto md:text-5xl"
      >
        {t`Meet the core members of our team that started this amazing journey`}
      </h2>
      <div className="mx-auto mt-15 flex w-fit flex-col gap-16 md:mt-25 md:gap-24">
        {teamMembers().map((v, index) => (
          <motion.div
            key={v.id}
            className="max-w-3xl items-center gap-10 md:flex"
            initial={{ opacity: isInView || isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: isInView || isMobile ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <Image src={v.img} alt={v.fullName} className="mx-auto object-contain" width={240} height={300} />
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-lg font-light md:text-xl">{v.position}</h3>
              <p className="text-xl font-bold text-black-2 md:text-2xl">{v.fullName}</p>
              <p className="mt-4 px-4 text-sm font-light text-black-2 md:mt-6 md:px-0 md:text-base">{v.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const teamMembers = () => [
  {
    id: 1,
    fullName: 'Khangal Nergui',
    img: Khangal,
    position: 'Founder & CEO',
    description: t`12+ years of entrepreneurial experience founding different innovative businesses such as Sole - a sports magazine and Mobile Advertising LLC. Khangal obtained his master’s degree from Queensland University of Technology, Australia.`,
  },
  {
    id: 2,
    fullName: 'Gilles de Dumans',
    img: Gilles,
    position: 'Board member, Storepay Holding Singapore',
    description: t`35+ years’ experience as an investment banker at Crédit Agricole CIB, Deutsche Bank, Credit Suisse First Boston France, Bankers Trust and JP Morgan. Senior Advisor of Amundi Group CEO and advisory board founder and member of Amundi South Asia and Amundi North Asia. Gilles holds a master’s in finance from Sciences Po Paris.`,
  },
  {
    id: 3,
    fullName: 'Albert Momdjian',
    img: Albert,
    position: 'Board member, Storepay Holding Singapore',
    description: t`25+ years of experience in investment banking in several financial institutions such as UBS AG, HSBC, Credit Suisse, Merrill Lynch and Crédit Agricole-CIB. Master's in international finance, with Honors from the University of Paris Dauphine France.`,
  },
  {
    id: 4,
    fullName: 'Cecilia Barradas',
    img: Cecilia,
    position: 'Secretary of the Board, Storepay Holding Singapore',
    description: t`9+ years’ experience in investment analysis and project manager in North and Southeast Asia. Active involvement in sustainable investing and the circular economy. Double master's degree in international Economic Development and Economic History from Sciences Po Paris and the London School of Economics.`,
  },
  {
    id: 5,
    fullName: 'Tsatsal Ganbold',
    img: Tsatsral,
    position: 'International Expansion Lead',
    description: t`5+ years of experience in the SaaS, Fintech, and Blockchain industries. Tsatsal worked as a Business Developer at AND Global and Nordic Blockchain Association. Holds MSc from Copenhagen Business School.`,
  },
];

export default Team;
