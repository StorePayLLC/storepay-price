'use client';

import React, { useState } from 'react';
import { Card, Typography, Tag, Button, Select, DatePicker, Flex, Empty } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useRouter } from '@/components/navigation';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

interface Bid {
  id: number;
  productName: string;
  amount: string;
  date: string;
  status: 'accepted' | 'pending' | 'rejected' | 'expired';
  store: string;
}

const bids: Bid[] = [
  {
    id: 1,
    productName: 'Product Name #1',
    amount: '0.5 ETH',
    date: '2024-03-20',
    status: 'accepted',
    store: 'Tech Store'
  },
  {
    id: 2,
    productName: 'Product Name #2',
    amount: '0.5 ETH',
    date: '2024-03-18',
    status: 'accepted',
    store: 'Electronics Hub'
  },
  {
    id: 3,
    productName: 'Product Name #3',
    amount: '0.5 ETH',
    date: '2024-03-15',
    status: 'accepted',
    store: 'Gaming Gear'
  },
  {
    id: 4,
    productName: 'Gaming Monitor',
    amount: '0.8 ETH',
    date: '2024-03-10',
    status: 'pending',
    store: 'Electronics Hub'
  },
  {
    id: 5,
    productName: 'Wireless Headphones',
    amount: '0.3 ETH',
    date: '2024-03-05',
    status: 'rejected',
    store: 'Audio Store'
  },
  {
    id: 6,
    productName: 'Mechanical Keyboard',
    amount: '0.4 ETH',
    date: '2024-02-28',
    status: 'expired',
    store: 'Tech Store'
  }
];

const BidsClient: React.FC = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const filteredBids = filter === 'all' 
    ? bids 
    : bids.filter(bid => bid.status === filter);

  const getStatusTag = (status: string) => {
    switch (status) {
      case 'accepted':
        return <Tag color="success" className="rounded-full px-3 py-1">Accepted</Tag>;
      case 'pending':
        return <Tag color="processing" className="rounded-full px-3 py-1">Pending</Tag>;
      case 'rejected':
        return <Tag color="error" className="rounded-full px-3 py-1">Rejected</Tag>;
      case 'expired':
        return <Tag color="default" className="rounded-full px-3 py-1">Expired</Tag>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <Title level={2} className="text-white m-0">
          Bid History
        </Title>
        <Button 
          icon={<FilterOutlined />} 
          onClick={() => setShowFilters(!showFilters)}
          className="border-gray-700 text-white"
        >
          Filters
        </Button>
      </Flex>

      {showFilters && (
        <Card className="bg-[#111] border border-gray-800 mb-6">
          <Flex gap={16} wrap="wrap">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Text className="text-gray-400 block mb-2">Status</Text>
              <Select 
                value={filter} 
                onChange={setFilter} 
                className="w-full md:w-40 bg-[#1a1a1a]"
              >
                <Option value="all">All Bids</Option>
                <Option value="accepted">Accepted</Option>
                <Option value="pending">Pending</Option>
                <Option value="rejected">Rejected</Option>
                <Option value="expired">Expired</Option>
              </Select>
            </div>
            
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Text className="text-gray-400 block mb-2">Store</Text>
              <Select 
                defaultValue="all" 
                className="w-full md:w-48 bg-[#1a1a1a]"
              >
                <Option value="all">All Stores</Option>
                <Option value="tech">Tech Store</Option>
                <Option value="electronics">Electronics Hub</Option>
                <Option value="gaming">Gaming Gear</Option>
                <Option value="audio">Audio Store</Option>
              </Select>
            </div>
            
            <div className="w-full md:w-auto">
              <Text className="text-gray-400 block mb-2">Date Range</Text>
              <RangePicker className="w-full md:w-auto bg-[#1a1a1a] border-gray-700" />
            </div>
          </Flex>
        </Card>
      )}

      {filteredBids.length === 0 ? (
        <Card className="bg-[#111] border border-gray-800 py-12">
          <Empty 
            description={<Text className="text-gray-400">No bid history found</Text>} 
            image={Empty.PRESENTED_IMAGE_SIMPLE} 
          />
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredBids.map((bid) => (
            <Card 
              key={bid.id} 
              className="bg-[#111] border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors"
              onClick={() => router.push(`/user/bids/${bid.id}`)}
            >
              <Flex justify="space-between" align="center" className="w-full">
                <div>
                  <Title level={5} className="text-white m-0">
                    {bid.productName}
                  </Title>
                  <Flex align="center" gap={6}>
                    <Text type="secondary">{bid.store}</Text>
                    <Text type="secondary">•</Text>
                    <Text type="secondary">{bid.date}</Text>
                  </Flex>
                </div>
                <Flex align="center" gap={12}>
                  <Text className="text-blue-400 font-semibold">
                    {bid.amount}
                  </Text>
                  {getStatusTag(bid.status)}
                </Flex>
              </Flex>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BidsClient;