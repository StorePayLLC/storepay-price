'use client';

import { t } from '@lingui/core/macro';

import { Video } from '@/components/global/ui/video';

const Info = () => (
  <section className="flex flex-col justify-around gap-45 bg-[#f9f9f9] py-30 md:py-42.5">
    <div className="text-center">
      <h1 className="mx-auto max-w-5xl text-4xl font-bold text-black-2 md:text-5xl">
        {t`Pay at your own pace with Storepay at your favorite store`}
      </h1>
      <p className="mx-auto mt-6 max-w-3xl text-xl font-light text-black-2">
        {t`With Storepay, you choose exactly when and how much you want to pay. We offer flexible payment methods that fit your budget.`}
      </p>
      {/*<Image alt="" src={InfoImage} className="mx-auto mt-17" />*/}
      <Video
        width="1028px"
        height="357px"
        autoPlay={true}
        className="mx-auto mt-17"
        controls={false}
        path="https://shoppy-cdn.s3.amazonaws.com/volume/conditions.mp4"
      />
    </div>
  </section>
);

export default Info;
