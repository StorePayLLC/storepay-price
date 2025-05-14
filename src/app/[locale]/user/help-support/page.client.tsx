'use client';
import React, { useState } from 'react';
import { Card, Typography, Input, Button, Collapse, Divider, Flex, Form } from 'antd';
import { 
  SearchOutlined, 
  MessageOutlined, 
  QuestionCircleOutlined,
  DownOutlined 
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;
const { TextArea } = Input;

const faqs = [
  {
    key: '1',
    question: 'How does the bidding system work?',
    answer: 'Our bidding system allows you to place bids using SPC cryptocurrency on products from Shopify stores. When you place a bid, the funds are held in escrow until the seller accepts or rejects your offer. If accepted, the product is yours and the transaction is completed. If rejected, your funds are returned to your wallet.'
  },
  {
    key: '2',
    question: 'How do I add funds to my wallet?',
    answer: 'To add funds to your wallet, navigate to the Wallet section and click "Add Funds". You can transfer ETH from your external wallet or connect your bank account to purchase crypto directly. All transactions are secure and encrypted.'
  },
  {
    key: '3',
    question: 'What happens if my bid expires?',
    answer: 'If your bid expires before the seller responds, the funds will be automatically returned to your wallet. You can then place a new bid if you\'re still interested in the product.'
  },
  {
    key: '4',
    question: 'How long does it take for funds to appear in my wallet?',
    answer: 'Deposits typically appear in your wallet within 15-30 minutes, depending on network congestion. Withdrawals may take 1-2 business days to process, especially when transferring to a bank account.'
  },
  {
    key: '5',
    question: 'Is my personal information secure?',
    answer: 'Yes, we use industry-standard encryption and security protocols to protect your personal and financial information. We also offer two-factor authentication for an additional layer of security.'
  }
];

const HelpSupportClient: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  
  const filteredFaqs = searchValue 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchValue.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchValue.toLowerCase())
      )
    : faqs;

  return (
    <div className="max-w-3xl mx-auto">
      <Title level={2} className="text-white mb-6">
        Help & Support
      </Title>

      <Card className="bg-[#111] border border-gray-800 mb-6">
        <Flex vertical align="center" className="py-6">
          <QuestionCircleOutlined className="text-4xl text-blue-500 mb-4" />
          <Title level={3} className="text-white mb-3">
            How can we help you?
          </Title>
          <Text type="secondary" className="text-center mb-6 max-w-lg">
            Search our FAQs for quick answers or contact our support team for more assistance.
          </Text>
          <Input 
            size="large" 
            placeholder="Search for help..." 
            prefix={<SearchOutlined />} 
            className="max-w-md bg-[#1a1a1a] border-gray-700"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Flex>
      </Card>

      <Title level={4} className="text-white mb-4">
        Frequently Asked Questions
      </Title>

      <Card className="bg-[#111] border border-gray-800 mb-6">
        {filteredFaqs.length === 0 ? (
          <div className="py-6 text-center">
            <Text type="secondary">No results found for "{searchValue}"</Text>
          </div>
        ) : (
          <Collapse 
            bordered={false} 
            expandIcon={({ isActive }) => (
              <DownOutlined rotate={isActive ? 180 : 0} className="text-gray-400" />
            )}
            className="bg-transparent border-0"
          >
            {filteredFaqs.map((faq) => (
              <Panel 
                key={faq.key} 
                header={
                  <Text className="text-white font-medium">{faq.question}</Text>
                } 
                className="bg-[#1a1a1a] mb-3 rounded-lg border border-gray-800 overflow-hidden"
              >
                <Paragraph className="text-gray-300">
                  {faq.answer}
                </Paragraph>
              </Panel>
            ))}
          </Collapse>
        )}
      </Card>

      <Title level={4} className="text-white mb-4">
        Contact Support
      </Title>

      <Card className="bg-[#111] border border-gray-800">
        <Form layout="vertical">
          <Form.Item 
            label={<span className="text-gray-300">Subject</span>} 
            className="mb-4"
          >
            <Input 
              placeholder="e.g., Issue with a bid" 
              className="bg-[#1a1a1a] border-gray-700 text-white"
              size="large"
            />
          </Form.Item>
          
          <Form.Item 
            label={<span className="text-gray-300">Message</span>} 
            className="mb-4"
          >
            <TextArea 
              rows={4} 
              placeholder="Describe your issue in detail..." 
              className="bg-[#1a1a1a] border-gray-700 text-white"
              size="large"
            />
          </Form.Item>
          
          <Form.Item 
            label={<span className="text-gray-300">Email address</span>} 
            className="mb-6"
          >
            <Input 
              placeholder="Where should we send our reply?" 
              className="bg-[#1a1a1a] border-gray-700 text-white"
              size="large"
            />
          </Form.Item>
          
          <Button type="primary" icon={<MessageOutlined />} className="bg-blue-600" size="large">
            Send Message
          </Button>
        </Form>
      </Card>

      <Card className="bg-[#111] border border-gray-800 mt-6">
        <Title level={5} className="text-white mb-3">
          Other Ways to Get Help
        </Title>
        <Flex wrap="wrap" gap={16}>
          <div className="w-full md:w-[calc(50%-8px)] p-4 bg-[#1a1a1a] rounded-lg border border-gray-800">
            <Text className="text-white font-medium block mb-1">
              Live Chat Support
            </Text>
            <Text type="secondary" className="mb-3 block">
              Available Monday-Friday, 9am-5pm ET
            </Text>
            <Button type="primary" ghost className="border-blue-500 text-blue-500">
              Start Chat
            </Button>
          </div>
          
          <div className="w-full md:w-[calc(50%-8px)] p-4 bg-[#1a1a1a] rounded-lg border border-gray-800">
            <Text className="text-white font-medium block mb-1">
              Community Forum
            </Text>
            <Text type="secondary" className="mb-3 block">
              Connect with other users and share tips
            </Text>
            <Button type="primary" ghost className="border-blue-500 text-blue-500">
              Visit Forum
            </Button>
          </div>
        </Flex>
      </Card>
    </div>
  );
};

export default HelpSupportClient;