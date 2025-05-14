import React from 'react';
import { Card, Button, Typography, Tag, Flex, List, Avatar, Tooltip } from 'antd';
import {
  PlusOutlined,
  SwapOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  WalletOutlined,
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

const WalletPage: React.FC = () => {
  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <Title level={2} className="text-white m-0">
          Wallet
        </Title>
        <Flex gap={12}>
          <Button type="primary" icon={<PlusOutlined />} className="bg-blue-600">
            Add Funds
          </Button>
          <Button icon={<SwapOutlined />} className="border-gray-700 text-white">
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
              />
              <Button 
                type="text" 
                shape="circle" 
                icon={<ArrowDownOutlined />} 
                className="text-white bg-[#1e293b] hover:bg-[#273549]" 
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
    </div>
  );
};

export default WalletPage;