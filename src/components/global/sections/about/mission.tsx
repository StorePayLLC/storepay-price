import SVector from '@/assets/images/global/s-vector.svg';

const Mission = () => (
  <section className="vision bg-[#1D1F23]">
    <div className="custom-container">
      <div className="vision__content flex flex-col items-center justify-center gap-5 px-4 py-28 md:gap-10 md:px-44">
        <SVector />
        <h2 className="vision__title text-4xl font-bold text-white">
          Our <span className="text-primary">Mission</span>
        </h2>
        <p className="vision__text text-center text-3xl font-bold leading-snug text-white md:text-5xl">
          <span className="text-[#ABB1BA]">To deliver innovative financial services that </span> revolutionize the industry,
          offering premium solutions <span className="text-[#ABB1BA]">tailored to your needs.</span>
        </p>
      </div>
    </div>
  </section>
);

export default Mission;
