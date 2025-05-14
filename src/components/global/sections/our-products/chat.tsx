'use client';

import { t } from '@lingui/core/macro';
import { times } from 'lodash';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLong from '@/assets/images/global/arrow_long.svg';
import { qmark as Qmark } from '@/assets/images/global/pages/products';

const fadedClass =
  window.screen.width > 728
    ? 'before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-[30%] before:bg-gradient-to-r before:from-[#F8F9F9] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:block after:h-full after:w-[30%] after:bg-gradient-to-l after:from-[#F8F9F9] after:to-transparent'
    : '';

const Chat = () => (
  <section className="flex flex-col justify-around bg-[#f9f9f9] pt-22 md:pt-42.5">
    <div className="text-center">
      <h1 className="mx-4 text-4xl font-bold text-black-2 md:mx-0 md:text-5xl">{t`Here’s what you will see on the checkout`}</h1>
      <p className="mx-4 mt-6 max-w-3xl text-xl font-light text-black-2 md:mx-auto">
        {t`To deliver innovative financial services that revolutionize the industry, offering premium solutions tailored to your needs.`}
      </p>
    </div>
    <Qmark size={50} className="mx-auto mt-12 block" />
    {/*<Image src={Qmark} alt="" className="" width={40} height={40} />*/}
    <div className={`wrapper custom-container relative mb-5 mt-4 flex items-center ${fadedClass}`}>
      <Swiper
        spaceBetween={20}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
      >
        {times(10, () => qas())
          .flat()
          .map((v, idx) => (
            <SwiperSlide key={idx} className="max-w-3xl py-4 md:py-7">
              <div className="text-center">
                <div className="mx-auto mb-3 w-fit rounded-2xl bg-primary px-4 py-3 text-white">
                  <p>{v.question}</p>
                </div>
                <div className="max-w-3xl rounded-2xl bg-white p-2 text-black-2 md:p-5" style={{ border: '1px solid #D5D8DC' }}>
                  <p className="text-md font-bold md:text-xl">{v.answer}</p>
                </div>
              </div>
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
  </section>
);

const qas = () => [
  {
    id: 1,
    question: t`Is Storepay interest free?`,
    answer: t`With Storepay, buy the things you want today and pay over time for free.`,
  },
  {
    id: 2,
    question: t`Is there any rewards?`,
    answer: t`Get rewards as SPC token every time you complete your repayments.`,
  },
  {
    id: 3,
    question: t`Can I buy multiple things?`,
    answer: t`Buy multiple things and pay all at the same time within your Storepay purchase limit.`,
  },
  {
    id: 4,
    question: t`Does it impact my credit score?`,
    answer: t`No impact on your credit score.`,
  },
  {
    id: 5,
    question: t`How long does it take to make payment with Storepay?`,
    answer: t`Payment in-store or online all takes under 1 minute.`,
  },
];

export default Chat;
