'use client';

import React, { useState } from 'react';
import { Card, Button, Typography, Tag, Flex, List, Avatar, Modal, Form, Input } from 'antd';
import {
  SwapOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  WalletOutlined,
  BankOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const activeBids = [
  {
    id: 1,
    name: 'Gaming Monitor',
    store: 'Electronics Hub',
    amount: '0.8',
    expiresIn: '6h 30m',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    store: 'Tech Store',
    amount: '0.4',
    expiresIn: '12h 45m',
  },
];

const recentTransactions = [
  {
    id: 1,
    type: 'send',
    to: '0x1234...5678',
    amount: '0.5',
    date: '2024-03-15',
  },
  {
    id: 2,
    type: 'receive',
    from: '0x8765...4321',
    amount: '1.2',
    date: '2024-03-14',
  },
  {
    id: 3,
    type: 'bid',
    product: 'Wireless Headphones',
    store: 'Tech Store',
    amount: '0.3',
    date: '2024-03-12',
  },
];

const WalletClient: React.FC = () => {
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [withdrawForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const balance = 2.5437; // ETH balance

  const handleWithdraw = async () => {
    try {
      setLoading(true);
      const values = await withdrawForm.validateFields();
      console.log('Withdraw:', values);
      // Handle withdrawal logic here
      setWithdrawModalVisible(false);
      withdrawForm.resetFields();
    } catch (error) {
      console.error('Withdrawal failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <Title level={2} className="text-white m-0">
          Wallet
        </Title>
        <Flex gap={12}>
          <Button 
            type="primary" 
            icon={<ArrowUpOutlined />} 
            className="bg-blue-600" 
            size="large"
            onClick={() => setWithdrawModalVisible(true)}
          >
            Withdraw
          </Button>
          <Button 
            icon={<SwapOutlined />} 
            className="border-gray-700 text-white" 
            size="large"
          >
            Swap
          </Button>
        </Flex>
      </Flex>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-[#111827] border border-gray-800">
          <Flex justify="space-between" align="start">
            <div>
              <Text className="text-gray-400">ETH Balance</Text>
              <Title level={2} className="text-emerald-400 mt-1 mb-2">
                2.5437 ETH
              </Title>
              <Text className="text-gray-400">≈ $4,832.51 USD</Text>
            </div>
            <Flex gap={8}>
              <Button 
                type="text" 
                shape="circle" 
                icon={<ArrowUpOutlined />} 
                className="text-white bg-[#1e293b] hover:bg-[#273549]"
                size="large"
                onClick={() => setWithdrawModalVisible(true)}
              />
              <Button 
                type="text" 
                shape="circle" 
                icon={<ArrowDownOutlined />} 
                className="text-white bg-[#1e293b] hover:bg-[#273549]"
                size="large"
              />
            </Flex>
          </Flex>
        </Card>

        <Card className="bg-[#2d1e2f] border border-gray-800">
          <Flex justify="space-between" align="start">
            <div>
              <Text className="text-gray-400">Active Bids</Text>
              <Title level={2} className="text-red-400 mt-1 mb-2">
                3 Bids
              </Title>
              <Text className="text-gray-400">Total Value: 1.2 ETH</Text>
            </div>
          </Flex>
        </Card>
      </div>

      <Title level={4} className="text-white mt-8 mb-4">
        Active Bids
      </Title>
      
      <div className="space-y-4 mb-8">
        {activeBids.map((bid) => (
          <Card key={bid.id} className="bg-[#111] border border-gray-800">
            <Flex justify="space-between" align="center">
              <div>
                <Title level={5} className="text-white m-0">
                  {bid.name}
                </Title>
                <Text type="secondary">{bid.store}</Text>
              </div>
              <Flex vertical align="end">
                <Text className="text-emerald-400 font-semibold text-lg">
                  {bid.amount} ETH
                </Text>
                <Text type="secondary">Expires in {bid.expiresIn}</Text>
              </Flex>
            </Flex>
          </Card>
        ))}
      </div>

      <Title level={4} className="text-white mt-8 mb-4">
        Recent Transactions
      </Title>
      
      <List
        className="mb-6"
        dataSource={recentTransactions}
        renderItem={(item) => (
          <List.Item className="px-4 py-3 bg-[#111] border border-gray-800 rounded-lg mb-3">
            <Flex align="center" className="w-full" justify="space-between">
              <Flex align="center" gap={12}>
                {item.type === 'send' && (
                  <Avatar className="bg-red-500 flex items-center justify-center">
                    <ArrowUpOutlined />
                  </Avatar>
                )}
                {item.type === 'receive' && (
                  <Avatar className="bg-green-500 flex items-center justify-center">
                    <ArrowDownOutlined />
                  </Avatar>
                )}
                {item.type === 'bid' && (
                  <Avatar className="bg-blue-500 flex items-center justify-center">
                    <WalletOutlined />
                  </Avatar>
                )}
                
                <div>
                  <Text className="text-white font-medium block">
                    {item.type === 'send' 
                      ? 'Send' 
                      : item.type === 'receive' 
                        ? 'Receive' 
                        : 'Bid'}
                  </Text>
                  <Text type="secondary" className="text-xs">
                    {item.type === 'send' 
                      ? `To: ${item.to}` 
                      : item.type === 'receive' 
                        ? `From: ${item.from}` 
                        : `${item.product} - ${item.store}`}
                  </Text>
                </div>
              </Flex>

              <Flex vertical align="end">
                <Text 
                  className={`font-semibold ${
                    item.type === 'receive' 
                      ? 'text-green-400' 
                      : 'text-amber-400'
                  }`}
                >
                  {item.type === 'receive' ? '+' : ''}{item.amount} ETH
                </Text>
                <Text type="secondary" className="text-xs">
                  {item.date}
                </Text>
              </Flex>
            </Flex>
          </List.Item>
        )}
      />

      <Modal
        title={
          <Flex align="center" gap={2}>
            <BankOutlined className="text-blue-500" />
            <span>Withdraw Funds</span>
          </Flex>
        }
        open={withdrawModalVisible}
        onCancel={() => {
          setWithdrawModalVisible(false);
          withdrawForm.resetFields();
        }}
        footer={[
          <Button 
            key="cancel" 
            onClick={() => {
              setWithdrawModalVisible(false);
              withdrawForm.resetFields();
            }}
            size="large"
          >
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            loading={loading} 
            onClick={handleWithdraw}
            className="bg-blue-600"
            size="large"
          >
            Withdraw
          </Button>
        ]}
      >
        <div className="mb-6 p-4 bg-[#1a1a1a] rounded-lg">
          <Text className="text-gray-400 block mb-1">Available Balance</Text>
          <Text className="text-2xl text-white">{balance} ETH</Text>
          <Text className="text-gray-400 block mt-1">≈ $4,832.51 USD</Text>
        </div>

        <Form form={withdrawForm} layout="vertical">
          <Form.Item
            name="amount"
            label={<span className="text-gray-300">Amount (ETH)</span>}
            rules={[
              { required: true, message: 'Please enter amount' },
              { 
                pattern: /^\d*\.?\d*$/, 
                message: 'Please enter a valid number' 
              },
              {
                validator: (_, value) => {
                  if (value && value > balance) {
                    return Promise.reject('Insufficient balance');
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input
              size="large"
              placeholder="0.00"
              className="bg-[#1a1a1a] border-gray-700 text-white"
              suffix="ETH"
            />
          </Form.Item>

          <Form.Item
            name="address"
            label={<span className="text-gray-300">Withdrawal Address</span>}
            rules={[{ required: true, message: 'Please enter withdrawal address' }]}
          >
            <Input
              size="large"
              placeholder="Enter wallet address"
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </Form.Item>

          <Text type="secondary">
            Withdrawals typically take 15-30 minutes to process. A small network fee may apply.
          </Text>
        </Form>
      </Modal>
    </div>
  );
};

export default WalletClient;