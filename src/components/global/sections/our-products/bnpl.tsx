'use client';

import { useState } from 'react';
import { t } from '@lingui/core/macro';
import Image from 'next/image';

import SpCard from '@/assets/images/global/sp-card.png';

const tabs = () => [
  {
    id: 1,
    title: t`Merchant portal`,
    description: t`Merchant partners can track their sales through Storepay BNPL. They can also download reports and view real-time purchases.`,
  },
  {
    id: 2,
    title: t`Merchant Loan`,
    description: t`Using this, merchant partners can take business loans instantly and with minimum requirements.`,
  },
  {
    id: 3,
    title: t`Invoice Financing`,
    description: t`It offers businesses the necessary investment for their supply needs from overseas through convenient, interest free installment payments.`,
  },
];

const Bnpl = () => {
  const [tab, setTab] = useState<number>(1);
  return (
    <section className="bg-gradient-to-r from-[#001E24] to-[#004246] py-30 text-white">
      <div className="custom-container text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{t`BNPL for Your Business`}</h1>
        <p className="mx-auto mt-9 max-w-5xl text-lg font-light md:text-2xl">
          {t`Unlock a future without traditional loan hassles and high fees-invest in your business effortlessly. Allow businesses to purchase supplies via installments without interest and collateral`}
        </p>
        <Image src={SpCard} alt="" className="mx-auto mt-15" width={492} height={304} />
        <div className="mt-15 flex justify-center gap-4">
          {tabs().map((item) => {
            const isActive = tab === item.id;
            return (
              <button
                type="button"
                style={{ borderBottomWidth: 2, borderStyle: 'solid', borderColor: isActive ? '#0055FF' : 'transparent' }}
                key={item.id}
                className={`text-md p-4 font-light md:text-lg ${isActive ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setTab(item.id)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-lg font-light text-white md:text-xl">
          {tabs().find((item) => item.id === tab)?.description}
        </p>
      </div>
    </section>
  );
};

export default Bnpl;
