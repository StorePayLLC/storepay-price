import { Help1, Help2, Help3 } from '@/assets/images/global/pages/help';

const features = [
  {
    title: 'Instant 24/7 support',
    description: 'Our AI assistant speaks any language of your choice and solves over 300,000 customer issues every week.',
    icon: Help1,
  },
  {
    title: 'Chat with an agent',
    description: 'We are available 24/7 to support you via live chat.',
    icon: Help2,
  },
  {
    title: 'Get a call',
    description: "Need to talk to us? We're just a phone call away.",
    icon: Help3,
  },
];

export default function HowItWorks() {
  return (
    <section className="md:py-16">
      <h1 className="mb-4 text-center text-4xl font-bold text-black-2 md:mb-16 md:text-6xl">How it works</h1>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Icon className="object-contain" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
