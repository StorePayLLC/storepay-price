'use client';

import React from 'react';
import { t } from '@lingui/core/macro';
import { Card, Flex, Modal } from 'antd';
import { times } from 'lodash';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './stories.css';
import 'swiper/css/navigation';

import ArrowLong from '@/assets/images/global/arrow_long.svg';
import s1 from '@/assets/images/global/s1.png';
import s2 from '@/assets/images/global/s2.png';
import s3 from '@/assets/images/global/s3.png';
import v1 from '@/assets/images/global/v1.png';
import v2 from '@/assets/images/global/v2.png';
import v3 from '@/assets/images/global/v3.png';
import { isEmptyModal } from '@/components/global/sections/home/reviews';

const Stories = () => {
  const [modal, setModal] = React.useState<any>({});
  return (
    <section className="pb-20 pt-20 md:pb-30 md:pt-60">
      <h1 className="text-center text-4xl font-bold text-black-2 md:text-5xl">{t`Merchant Success Stories`}</h1>
      <p className="text-md mx-3 mt-6 max-w-4xl text-center font-light text-black-2 md:mx-auto md:text-xl">
        {t`Join Storepay to drive growth with our Buy Now, Pay Later (BNPL) solutions. Benefit from interest-free payments, seamless integration, and increased visibility. Boost sales, attract new customers, and enhance cash flow with our flexible payment options.`}
      </p>
      <div className="wrapper relative mb-5 mt-14 flex items-center">
        <Swiper
          spaceBetween={20}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.2 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          modules={[Navigation, Autoplay]}
        >
          {times(10, () => stories)
            .flat()
            .map((v, idx) => (
              <SwiperSlide key={idx} className="max-w-3xl py-7">
                <Card className="shrink-0 rounded-2xl border-none" styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                  <Flex justify="space-between" align="flex-start">
                    <Image
                      alt={v.name}
                      src={v.img}
                      className="h-full w-31 object-cover object-center md:w-70 md:object-contain"
                    />
                    <div className="p-4">
                      <Flex className="mb-2" gap={10}>
                        <Image alt={v.vendor.name} src={v.vendor.logo} width={40} height={40} className="h-10" unoptimized />
                        <div>
                          <h2 className="mb-0 text-sm font-bold text-black-2">{v.vendor.name}</h2>
                          <p className="mb-0 text-xs">{v.vendor.description}</p>
                        </div>
                      </Flex>
                      <h2 className="text-md text-black-2">{v.name}</h2>
                      <h4 className="mb-2 text-xs">{v.position}</h4>
                      <button onClick={() => setModal(v)} type="button" className="text-left">
                        <p className="line-clamp-6 text-sm italic text-black-2">"{v.description}"</p>
                      </button>
                    </div>
                  </Flex>
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="relative z-1 flex items-center justify-center gap-4">
        <div className="swiper-button-prev custom-swiper-button flex !h-10 !w-10 items-center justify-center rounded-full bg-white">
          <ArrowLong className="block !h-auto !w-auto rotate-180 scale-75 text-black-2" />
        </div>
        <div className="swiper-button-next custom-swiper-button flex !h-10 !w-10 items-center justify-center rounded-full bg-white">
          <ArrowLong className="block !h-auto !w-auto scale-75 text-black-2" />
        </div>
      </div>
      <Modal centered open={!isEmptyModal(modal)} footer={false} closable onCancel={() => setModal({})}>
        {!isEmptyModal(modal) && (
          <p className="text-md mr-5 text-justify font-light text-black-2 md:text-lg">{modal.description}</p>
        )}
      </Modal>
    </section>
  );
};

const stories = [
  {
    id: 1,
    img: s1,
    name: 'Enkh-khorvoo. D',
    position: 'Founder and CEO',
    description:
      'Partnering with Storepay and offering the Buy Now, Pay Later (BNPL) option has led to a remarkable 25% increase in our sales revenue. Storepay’s interest-free installment payments have made our products more accessible, encouraging higher spending.',
    vendor: { logo: v1, name: 'Beauty Secrets', description: 'Beauty and Cosmetic Brand' },
  },
  {
    id: 2,
    img: s2,
    name: 'Bayarsaikhan. I',
    position: 'Franchise Director',
    description:
      'The collaboration between Storepay and Dr. Auto Chain is growing, and our customers are delighted that Storepay users can quickly meet their financial needs with digital payment methods. Together, we have introduced new technological solutions, including blockchain-based tokens and innovative services, tailored to the needs of Storepay app users, providing them with greater value and savings. Good luck to the hardworking young team at Storepay, who are rapidly creating new financial opportunities in step with the rest of the world.',
    vendor: { logo: v2, name: 'Doctor Auto Chain LLC', description: 'Auto repair service' },
  },
  {
    id: 3,
    img: s3,
    name: 'Munkhbayar. O',
    position: 'Director of Store operation',
    description:
      "Storepay aligns seamlessly with the lifestyle of younger generations through its innovative, tech-based payment solutions. By offering interest-free installment options and cryptocurrency integration, Storepay not only enhances financial literacy but also fosters better financial discipline among younger users. We believe that Storepay empowers our customers with greater freedom to purchase lifestyle essentials and enrich their lives. This approach helps our customers invest in their happiness and well-being, allowing them to enjoy the things they love with ease. We are confident that Storepay's modern payment solutions are a key driver in creating joyful and financially empowered communities.",
    vendor: { logo: v3, name: 'Next Group', description: 'Home appliances and electronics' },
  },
  {
    id: 4,
    img: s1,
    name: 'Enkh-khorvoo. D',
    position: 'Founder and CEO',
    description:
      'Partnering with Storepay and offering the Buy Now, Pay Later (BNPL) option has led to a remarkable 25% increase in our sales revenue. Storepay’s interest-free installment payments have made our products more accessible, encouraging higher spending.',
    vendor: { logo: v1, name: 'Beauty Secrets', description: 'Beauty and Cosmetic Brand' },
  },
  {
    id: 5,
    img: s2,
    name: 'Bayarsaikhan. I',
    position: 'Franchise Director',
    description:
      'The collaboration between Storepay and Dr. Auto Chain is growing, and our customers are delighted that Storepay users can quickly meet their financial needs with digital payment methods. Together, we have introduced new technological solutions, including blockchain-based tokens and innovative services, tailored to the needs of Storepay app users, providing them with greater value and savings. Good luck to the hardworking young team at Storepay, who are rapidly creating new financial opportunities in step with the rest of the world.',
    vendor: { logo: v2, name: 'Doctor Auto Chain LLC', description: 'Auto repair service' },
  },
  {
    id: 6,
    img: s3,
    name: 'Munkhbayar. O',
    position: 'Director of Store operation',
    description:
      "Storepay aligns seamlessly with the lifestyle of younger generations through its innovative, tech-based payment solutions. By offering interest-free installment options and cryptocurrency integration, Storepay not only enhances financial literacy but also fosters better financial discipline among younger users. We believe that Storepay empowers our customers with greater freedom to purchase lifestyle essentials and enrich their lives. This approach helps our customers invest in their happiness and well-being, allowing them to enjoy the things they love with ease. We are confident that Storepay's modern payment solutions are a key driver in creating joyful and financially empowered communities.",
    vendor: { logo: v3, name: 'Next Group', description: 'Home appliances and electronics' },
  },
  {
    id: 8,
    img: s1,
    name: 'Enkh-khorvoo. D',
    position: 'Founder and CEO',
    description:
      'Partnering with Storepay and offering the Buy Now, Pay Later (BNPL) option has led to a remarkable 25% increase in our sales revenue. Storepay’s interest-free installment payments have made our products more accessible, encouraging higher spending.',
    vendor: { logo: v1, name: 'Beauty Secrets', description: 'Beauty and Cosmetic Brand' },
  },
  {
    id: 9,
    img: s2,
    name: 'Bayarsaikhan. I',
    position: 'Franchise Director',
    description:
      'The collaboration between Storepay and Dr. Auto Chain is growing, and our customers are delighted that Storepay users can quickly meet their financial needs with digital payment methods. Together, we have introduced new technological solutions, including blockchain-based tokens and innovative services, tailored to the needs of Storepay app users, providing them with greater value and savings. Good luck to the hardworking young team at Storepay, who are rapidly creating new financial opportunities in step with the rest of the world.',
    vendor: { logo: v2, name: 'Doctor Auto Chain LLC', description: 'Auto repair service' },
  },
  {
    id: 10,
    img: s3,
    name: 'Munkhbayar. O',
    position: 'Director of Store operation',
    description:
      "Storepay aligns seamlessly with the lifestyle of younger generations through its innovative, tech-based payment solutions. By offering interest-free installment options and cryptocurrency integration, Storepay not only enhances financial literacy but also fosters better financial discipline among younger users. We believe that Storepay empowers our customers with greater freedom to purchase lifestyle essentials and enrich their lives. This approach helps our customers invest in their happiness and well-being, allowing them to enjoy the things they love with ease. We are confident that Storepay's modern payment solutions are a key driver in creating joyful and financially empowered communities.",
    vendor: { logo: v3, name: 'Next Group', description: 'Home appliances and electronics' },
  },
];

export default Stories;
