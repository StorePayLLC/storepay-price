'use client';
import { t } from '@lingui/core/macro';

import { Video } from '@/components/global/ui/video';

const DesktopVideoWidth = '480px';
const MobileVideoWidth = '320px';

const Hero = () => (
  <section className="hero-about flex flex-col items-center justify-center gap-10 py-30 md:h-screen md:gap-20 md:pt-20">
    <h1 className="hero__title mx-3 max-w-7xl text-center text-4xl font-bold text-black-2 md:mx-0 md:text-6xl">
      {t`We cultivate a culture that thrives on innovation, inclusivity, and collaboration.`}
    </h1>
    {/*<Image src={aboutHeroImage} className="mx-auto" width={400} alt="" />*/}
    <div className={`h-[${MobileVideoWidth}] md:h-[${DesktopVideoWidth}]`}>
      <Video
        width={window.screen.width < 768 ? MobileVideoWidth : DesktopVideoWidth}
        height={window.screen.width < 768 ? MobileVideoWidth : DesktopVideoWidth}
        autoPlay={true}
        controls={false}
        path="https://shoppy-cdn.s3.amazonaws.com/volume/about.mp4"
        className={`!w-[${MobileVideoWidth}] md:w-[${DesktopVideoWidth}]`}
      />
    </div>
  </section>
);

export default Hero;
