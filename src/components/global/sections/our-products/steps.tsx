'use client';

import { useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './steps.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowFat from '@/assets/images/global/arrow-fat.svg';
import { Video } from '@/components/global/ui/video';

const steps = () => [
  {
    title: t`Download the Storepay app`,
    image: '/ph.png',
    description: t`Simply search “Storepay” on your mobile device and join the hassle-free burden free savvy family.`,
    video: 'https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/how/Download.mp4',
  },
  {
    title: t`Sign Up as a User`,
    image: '/ph.png',
    description: t`Just enter your personal details and get your balance approved within just 3 minutes. It has never been this easy, isn't it?`,
    video: 'https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/how/Account.mp4',
  },
  {
    title: t`Pay with Storepay`,
    image: '/ph.png',
    description: t`Unlock your key to hop on the journey of interest free payment from now on. You never have to worry about being constrained to your bank account balance again.`,
    video: 'https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/how/Payment.mp4',
  },
  {
    title: t`Earn as you pay`,
    image: '/ph.png',
    description: t`Earn SPC token instantly to your digital account within the App after every single successful payment for your purchase.`,
    video: 'https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/how/Bonus.mp4',
  },
];

export default function StepsSection() {
  const swiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f7f8f8] py-22 md:py-34">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 text-center text-4xl font-bold text-black-2 md:text-5xl">{t`How it works`}</h2>
        <h3 className="mb-16 text-center text-2xl text-black-2 md:text-3xl">{t`Using Storepay is simple and straightforward`}</h3>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 h-fit md:order-1">
              <Swiper
                ref={swiperRef}
                onSlideChange={(swiper) => {
                  setActiveStep(swiper.activeIndex);
                }}
                tabIndex={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
              >
                {steps().map((step, index) => (
                  <SwiperSlide className="h-fit" key={index}>
                    {/*<Image src={step.image} alt={step.title} width={492} height={304} />*/}
                    <Video
                      width="492px"
                      height="304px"
                      autoPlay={true}
                      controls={false}
                      path={step.video}
                      className="z-1 mx-auto w-full object-contain md:h-[304px] md:w-[492px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="order-1 space-y-8 md:order-2">
              <div>
                <h3 className="mb-4 text-center text-3xl font-bold text-black-2">{steps()[activeStep].title}</h3>
                <p className="text-gray-600 min-h-[66px] text-center text-lg leading-[22px] text-black-2">
                  {steps()[activeStep].description}
                </p>
              </div>
              <div className="relative z-1 flex items-center justify-center gap-4">
                <div className="swiper-button-prev custom-swiper-button flex !h-10 !w-10 items-center justify-center rounded-full">
                  <ArrowFat className="block !h-auto !w-auto text-black-2" />
                </div>
                <span className="block min-w-13 rounded-full bg-white px-2 py-2 text-center text-2xl font-normal text-black-2 md:text-3xl">
                  {activeStep + 1}
                </span>
                <div className="swiper-button-next custom-swiper-button flex !h-10 !w-10 items-center justify-center rounded-full">
                  <ArrowFat className="block !h-auto !w-auto rotate-180 text-black-2" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {steps().map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full ${activeStep === index ? 'h-2.5 w-2.5 bg-black-2' : 'h-1.5 w-1.5 bg-[#D5D8DC]'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
