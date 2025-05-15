'use client';

import { Layout, Button, Typography, Collapse } from 'antd';
import Link from '@/components/link';
import Image from 'next/image';

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const features = [
  {
    title: 'Quick Sign-Up',
    description: 'Getting started with SPC Price is simple: just link your wallet and set your preferences in a few clicks.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
    color: 'text-cyan-400'
  },
  {
    title: 'Make Your Offer at Checkout',
    description: 'At checkout, enter the amount you\'re willing to pay — it\'s your chance to bid smarter and save.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg',
    color: 'text-green-400'
  },
  {
    title: 'Merchant Reviews & Responds',
    description: 'They set a minimum threshold, but the rest is up to your negotiation. You\'ll get notified once your bid is accepted.',
    image: 'https://images.pexels.com/photos/7567476/pexels-photo-7567476.jpeg',
    color: 'text-pink-500'
  },
  {
    title: 'Pay & Receive at Your Price',
    description: 'Your SPC is securely processed, and the purchase is completed just like any other checkout.',
    image: 'https://images.pexels.com/photos/7567481/pexels-photo-7567481.jpeg',
    color: 'text-yellow-400'
  }
];

const faqs = [
  {
    key: 1,
    question: 'How does SPC Price work?',
    answer: 'SPC Price allows you to make offers on products at checkout. Merchants can accept or counter your offer, creating a dynamic pricing system.'
  },
  {
    key: 2,
    question: 'Do I need to pay upfront when making an offer?',
    answer: 'No, you only pay once your offer is accepted by the merchant.'
  },
  {
    key: 3,
    question: 'Can I cancel or change my bid?',
    answer: 'Yes, you can modify or cancel your bid before it\'s accepted by the merchant.'
  }
];

export default function Home() {
  return (
    <Layout className="min-h-screen bg-[#0a0a0a]">
      <Header className="bg-[#121212] flex items-center justify-between px-6 border-b border-gray-800 fixed w-full z-50">
        <Link href="/" className="text-xl font-bold text-white hover:text-white">
          SPC
        </Link>
        <div className="space-x-6">
          <Link href="/about">
            <Button type="link" className="text-gray-300 hover:text-white">
              About us
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button type="link" className="text-gray-300 hover:text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button type="primary" className="bg-blue-600">
              Sign up
            </Button>
          </Link>
        </div>
      </Header>

      <Content className="pt-16">
        {/* Hero Section */}
        <div className="text-center py-32 px-4">
          <Title level={1} className="text-white text-5xl mb-4">
            SPC Unlocks a -<br />New Way to Pay
          </Title>
          <Text className="text-gray-400 text-lg block mb-8">
            You Name the Price, We Make It Happen
          </Text>
          <div className="space-x-4">
            <Link href="/auth/register">
              <Button type="primary" size="large" className="bg-blue-600">
                Buyer
              </Button>
            </Link>
            <Link href="/merchant">
              <Button size="large" className="border-gray-700 text-white">
                Seller
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-24">
            {features.map((feature, index) => (
              <div key={index} className={`${index % 2 ? 'md:mt-12' : 'md:mb-12'}`}>
                <div className="mb-6">
                  <Title level={3} className={`${feature.color} mb-4`}>
                    {feature.title}
                  </Title>
                  <Paragraph className="text-gray-400">
                    {feature.description}
                  </Paragraph>
                </div>
                <div className="relative h-64 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Title level={2} className="text-white text-center mb-12">
            FAQ
          </Title>
          <Collapse 
            className="bg-[#1a1a1a] border-gray-800"
            expandIconPosition="end"
            items={faqs}
          >
          </Collapse>
        </div>

        {/* CTA Section */}
        <div className="text-center py-24 px-4">
          <Title level={2} className="text-white mb-8">
            Sign up today.
          </Title>
          <div className="space-x-4">
            <Link href="/auth/register">
              <Button type="primary" size="large" className="bg-blue-600">
                Get Started
              </Button>
            </Link>
            <Link href="/merchant">
              <Button size="large" className="border-gray-700 text-white">
                For Sellers
              </Button>
            </Link>
          </div>
        </div>
      </Content>
    </Layout>
  );
}