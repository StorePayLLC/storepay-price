import './benefits.scss';

import CheckMark from '@/assets/images/global/check-mark.svg';

const benefits = [
  {
    title: 'Increase in checkout and basket conversion',
    text: 'Storepay payment option increases sales revenue by 37% and reduces cart abandonment rate.',
  },
  {
    title: 'Increase in brand awareness',
    text: 'Streamline purchase returns with Storepay, where we efficiently manage customer return requests, easing the burden on merchants. Approximately 3%-6% of merchant-related contacts are return inquiries.',
  },
  { title: 'Increase in average purchase value', text: 'Storepay helps to increase average sales value by 20%.' },
  {
    title: 'Improved customer loyalty',
    text: 'Flexible installment options and convenient payment methods incentivize users to increase their shopping frequency.',
  },
  {
    title: 'Improved customer satisfaction',
    text: 'With Storepay, users appreciate the reduced financial burden, leading to higher satisfaction and retention rates.',
  },
  {
    title: 'New customer referrals',
    text: 'Through strategic brand promotion and enhanced visibility on our marketing channels and via the Storepay app, merchants can acquire new users more swiftly and efficiently.',
  },
  {
    title: 'Reduced burden on customer support',
    text: 'Handle high volumes of customer support efficiently, with Storepay managing an average of 15,000 calls and requests monthly, 90% of which are merchant-related.',
  },
  {
    title: 'Improved efficiency in managing returns',
    text: 'Streamline purchase returns with Storepay, where we efficiently manage customer return requests, easing the burden on merchants. Approximately 3%-6%of merchant-related contacts are return inquiries.',
  },
];

const Benefits = () => (
  <section className="custom-container pb-30 pt-17 md:px-30 md:pb-59">
    <h1 className="mb-10 text-center text-3xl font-bold text-black-2 md:mb-18 md:text-5xl">Merchant Benefits</h1>
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {benefits.map((v) => (
        <div key={v.title} className="flip-card">
          <div className="flip-card-inner flex flex-col justify-between rounded-xl bg-white px-10 py-8 text-center">
            <div className="flip-card-front">
              <CheckMark className="mx-auto" />
              <p className="text-md mb-0 mt-4 font-bold text-black-2 md:text-xl">{v.title}</p>
            </div>
            <div className="flip-card-back flex items-center justify-center bg-white px-10 py-8 text-center">
              <p className="md:text-md text-sm font-light text-black-2">{v.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
