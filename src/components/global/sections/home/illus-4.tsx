'use client';

import { useEffect, useRef, useState } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { Modal } from 'antd';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

import ArrowLong from '@/assets/images/global/arrow-long.svg';
import AppStore from '@/assets/images/global/pages/home/appstore.svg';
import mockup from '@/assets/images/global/pages/home/phone-mockup.png';
import PlayStore from '@/assets/images/global/pages/home/playstore.svg';
import FooterQr from '@/assets/images/global/qr-code-1.svg';
import { Video } from '@/components/global/ui/video';

const Illus4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <>
      <section className="bg-[#fafafa]" ref={ref}>
        <div className="custom-container h-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="flex h-full flex-col items-center justify-center gap-5 md:gap-4"
          >
            {/*<Illustration4 className="h-75 w-75 object-contain md:h-[550px] md:w-[672px]" />*/}
            <Video
              width="600px"
              height="600px"
              autoPlay={true}
              controls={false}
              path="https://shoppy-cdn.s3.amazonaws.com/volume/comporessed/2.mp4"
              className="mx-auto h-75 w-full object-contain md:h-[600px] md:w-[600px]"
              loop={false}
            />
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
              transition={{ duration: 1 }}
              className="max-w-2xl text-center text-4xl font-bold text-black-2 md:text-6xl"
            >
              <Trans>
                The <span className="text-primary">easiest way</span> to stay within your budget
              </Trans>
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="my-4 min-h-16 max-w-3xl text-center text-xl font-light text-black-2 md:text-2xl"
            >
              {t`Enjoy financial freedom without letting a large expense ruin your budget. Welcome to smarter financial management.`}
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex items-center gap-4 rounded-3xl bg-black-2 px-5 py-3 text-sm font-light text-white"
            >
              <h3>Get Storepay App</h3>
              <ArrowLong />
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Modal
        open={isModalOpen}
        closable
        centered
        footer={false}
        styles={{ content: { paddingBottom: 0, paddingTop: isMobile ? 32 : 45, borderRadius: '1rem' } }}
        onCancel={() => setIsModalOpen(false)}
        width={944}
      >
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-start">
          <div className="z-10 -mt-17 flex basis-3/5 flex-col justify-between pb-4 pt-2 md:mt-0 md:pb-20">
            <div className="relative w-full">
              {/*<Image*/}
              {/*  src={QRcode}*/}
              {/*  alt=""*/}
              {/*  className="z-10 mx-auto block"*/}
              {/*  width={isMobile ? 140 : 167}*/}
              {/*  height={isMobile ? 140 : 167}*/}
              {/*/>*/}
              <FooterQr className="z-10 mx-auto block h-[150px] w-[150px]" />
              {isMobile && <div className="absolute bottom-0 -z-1 h-[75%] w-full bg-white" />}
            </div>
            <h1 className="mb-2 mt-4 text-center text-2xl font-semibold text-black-2 md:mb-6 md:text-4xl">
              Get the <br /> Storepay app now
            </h1>
            <div className="flex scale-75 justify-center gap-4 md:scale-100">
              <a target="_blank" href="https://apps.apple.com/mn/app/storepay/id1470947761">
                <AppStore />
              </a>
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.storepay&pcampaignid=web_share">
                <PlayStore />
              </a>
            </div>
          </div>
          <div className="relative">
            <Image src={mockup} alt="" className="md:mr-10" width={289} height={442} />
            {isMobile && <div className="absolute inset-0 bottom-0 bg-gradient-to-b from-white/5 to-white/100"></div>}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Illus4;
