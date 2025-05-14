'use client';

import React, { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { t } from '@lingui/core/macro';
import { Modal, Rate } from 'antd';
import { animate, motion, useMotionValue } from 'framer-motion';

import { isStorepayId } from '@/config/constants';
const isMobile = window.innerWidth < 768;

const Review = ({ review, setModal }: { review: any; setModal: (v: object) => void }) => {
  if (!review.show) return null;
  return (
    <motion.div className="review-item flex h-[313px] w-[280px] flex-col justify-between rounded-xl border-none bg-white px-5 py-8 drop-shadow-3">
      <div className="flex flex-col gap-3">
        <p>{review.date}</p>
        <Rate disabled defaultValue={review.rating} />
        {/*{isMobile ? (*/}
        {/*  <button onClick={() => setModal(review)} type="button" className="text-left">*/}
        {/*    <p className="line-clamp-8-custom font-light text-black-2">{review.text}</p>*/}
        {/*  </button>*/}
        {/*) : (*/}
        {/*  <Tooltip color="blue" title={review.text} placement="topLeft">*/}
        {/*    <p className="line-clamp-8-custom font-light text-black-2">{review.text}</p>*/}
        {/*  </Tooltip>*/}
        {/*)}*/}
        <button onClick={() => setModal(review)} type="button" className="text-left">
          <p className="line-clamp-8-custom font-light text-black-2">{review.text}</p>
        </button>
      </div>
    </motion.div>
  );
};

// Main Reviews component
const Reviews = () => {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 400;
  const MOBILE_DURATION = 50;

  const [modal, setModal] = useState<any>({});

  const [duration, setDuration] = useState(isMobile ? MOBILE_DURATION : FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 6 - 20;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setRerender(!rerender);
          setMustFinish(false);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div>
      <motion.div
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(SLOW_DURATION);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setDuration(isMobile ? MOBILE_DURATION : FAST_DURATION);
          setMustFinish(true);
        }}
        className="flex gap-5"
        ref={ref}
      >
        {[...reviews(), ...reviews(), ...reviews(), ...reviews()].map((_, index) => (
          <Review review={_} key={index} setModal={setModal} />
        ))}
      </motion.div>
      <Modal centered open={!isEmptyModal(modal)} footer={false} onCancel={() => setModal({})}>
        {!isEmptyModal(modal) && <p className="mr-4 text-lg font-light text-black-2">{modal.text}</p>}
      </Modal>
    </div>
  );
};

const reviews = () => [
  {
    id: 1,
    date: 'November 26, 2023',
    rating: 5,
    text: t`Thanks to Storepay, I'm able to survive this recession. I buy my baby's diapers, home supplies, and groceries using the Storepay app.`,
    show: true,
  },
  {
    id: 2,
    date: 'January 12, 2022',
    rating: 4.5,
    text: t`I promised my kids to take them to the beach and show them palm trees. I was unable to save up all the travel cost for five years. However, last winter, I discovered Storepay and travelled to Thailand with my two kids.`,
    show: true,
  },
  {
    id: 3,
    date: 'March 18, 2023',
    rating: 5,
    text: t`Before Storepay, I always bought cheap things and threw them after using them only a few times. But now, using Storepay, I buy what I want from my favorite brand whenever I want. I'm satisfied with the app 1000%.`,
    show: true,
  },
  {
    id: 4,
    date: 'September 14, 2023',
    rating: 4.5,
    text: "I used to order what I needed from abroad using online shops. Now with Storepay, I buy from local online stores to collect SPC, as I'm interested in digital assets.",
    show: !isStorepayId(),
  },
  {
    id: 5,
    date: 'June 28, 2022',
    rating: 5,
    text: t`Storepay App helps me to buy high cost items without any financial stress and burden.`,
    show: true,
  },
  {
    id: 6,
    date: 'Feb 14, 2023',
    rating: 5,
    text: 'Discover first-hand stories from users about how Storepay transformed their shopping experience and gave them financial freedom.',
    show: !isStorepayId(),
  },
  {
    id: 7,
    date: 'July 11, 2024',
    rating: 4.5,
    text: 'The Storepay app makes it easy for me to buy expensive items without feeling financially burdened.',
    show: !isStorepayId(),
  },
  {
    id: 8,
    date: 'May 8, 2024',
    rating: 5,
    text: t`I am very satisfied with the products and services provided by the Storepay Application.`,
    show: true,
  },
];

export const isEmptyModal = (obj: object) => Object.keys(obj).length === 0;

export default Reviews;
