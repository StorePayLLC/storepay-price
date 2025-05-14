'use client';

import Image from 'next/image';

import about1 from '@/assets/images/global/about-1.jpg';
import about2 from '@/assets/images/global/about-2.jpg';
import about3 from '@/assets/images/global/about-3.jpg';
import about4 from '@/assets/images/global/about-4.jpg';
import SVector from '@/assets/images/global/s-vector.svg';

const values = [
  {
    title: 'Driven by Excellence',
    img: about1,
    text: 'We’re a dynamic team of achievers, driven by our shared vision. We push boundaries and deliver high performance, all while fostering a vibrant and supportive work environment.',
  },
  {
    title: 'Equality for All',
    img: about2,
    text: 'At Storepay, diversity is our strength. Every voice matter, and every idea is valued, regardless of background. We champion inclusivity, where your success is measured by your contributions, not by labels.',
  },
  {
    title: 'Always Learning',
    img: about3,
    text: 'Curiosity fuels our growth. We thrive on continuous improvement, embracing challenges that keep us agile and innovative. Our commitment to learning ensures we stay ahead, delivering cutting-edge solutions for our community.',
  },
  {
    title: 'User-First Approach',
    img: about4,
    text: "Your experience is our priority. With state-of-the-art technology and a focus on user needs, we simplify your shopping journey and enhance your quality of life. We're dedicated to making every interaction seamless, intuitive, and rewarding.",
  },
];

const Values = () => (
  <section className="vision bg-[#393E46]">
    <div className="custom-container">
      <div className="vision__content flex flex-col items-center justify-center gap-10 py-28 md:px-4 xl:px-30">
        <SVector />
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-[#32C85A]">Values</span>
        </h2>
        <p className="vision__text mb-0 text-justify text-xl font-light text-[#ABB1BA] lg:text-3xl">
          Storepay offers you <span className="font-bold text-white">flexible, interest-free installment payments</span> combined
          with seamless and convenient payment options. Additionally, our integration of cryptocurrency provides a modern
          financial solution providing higher purchase limits and longer Installment periods, all with{' '}
          <span className="font-bold text-white">no hidden fees—empowering</span> you to make purchases with ease and confidence.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 2xl:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-xl">
              <div className="relative w-full">
                <Image
                  src={value.img}
                  className="h-[400px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-125 md:h-auto"
                  alt={value.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-2/70"></div>
              </div>
              <h3
                className="absolute bottom-5 left-4 z-1 max-w-27 translate-y-0 text-left text-xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-30 md:group-hover:-translate-y-37.5"
                dangerouslySetInnerHTML={{ __html: value.title }}
              />
              <p className="absolute bottom-5 left-0 z-1 w-full px-4 text-left text-sm font-light text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Values;
