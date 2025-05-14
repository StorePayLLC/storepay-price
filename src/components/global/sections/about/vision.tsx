import SVector from '@/assets/images/global/s-vector.svg';

const Vision = () => (
  <section className="vision bg-[#003399]">
    <div className="custom-container">
      <div className="vision__content flex flex-col items-center justify-center gap-5 px-4 py-20 md:gap-10 md:px-44 md:py-28">
        <SVector />
        <h2 className="vision__title text-4xl font-bold text-white">
          Our <span className="text-meta-7">Vision</span>
        </h2>
        <p className="vision__text text-center text-3xl font-bold leading-snug text-white md:text-5xl">
          <span className="text-[#ABB1BA]">To be a global leader in providing accessible financial solutions that</span> enhances
          your everyday living with confidence.
        </p>
      </div>
    </div>
  </section>
);

export default Vision;
