'use client';

import { t } from '@lingui/core/macro';

const Story = () => (
  <section className="custom-container pb-30 md:pb-54">
    <h2 className="mb-8 text-center text-5xl font-bold text-black-2 md:mb-16 md:text-6xl">{t`Our story`}</h2>
    <p className="mt-6 text-justify text-xl font-light text-black-2 md:text-3xl">
      {t`Founded in 2019, Storepay embarked on a mission to revolutionize the financial industry with flexible, inclusive, and rewarding financial solutions. In 2020, we established our holding company in Singapore, marking a milestone in our commitment to innovation and global growth.`}
      <br /> <br />
      {t`As we continue to expand, our focus remains on delivering cutting-edge financial solutions that promote flexibility and inclusivity. Join us on our journey as we redefine the future of shopping and financial services across Southeast Asia and beyond.`}
    </p>
  </section>
);

export default Story;
