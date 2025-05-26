'use client';

import React, { useState } from 'react';
import { Card, Typography, Tag, Button, Select, DatePicker, Flex, Empty } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useRouter } from '@/components/navigation';
import {OfferStatus} from "@/gql/graphql";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

type Props = {
  offers: any[];
}

export default function OfferList ({offers}: Props) {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const getStatusTag = (status: string) => {
    switch (status) {
      case OfferStatus.Confirmed:
        return <Tag color="success" className="rounded-full px-3 py-1">Accepted</Tag>;
      case OfferStatus.Pending:
        return <Tag color="processing" className="rounded-full px-3 py-1">Pending</Tag>;
      case OfferStatus.Rejected:
        return <Tag color="error" className="rounded-full px-3 py-1">Rejected</Tag>;
      case OfferStatus.Expired:
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

      <div className="space-y-4">
        {offers.map((bid) => (
          <Card
            key={bid.id}
            className="bg-[#111] border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors"
            onClick={() => router.push(`/merchant/bids/${bid.id}`)}
          >
            <Flex justify="space-between" align="center" className="w-full">
              <div>
                <Title level={5} className="text-white m-0">
                  {bid.number}
                </Title>
                <Flex align="center" gap={6}>
                  <Text type="secondary">{bid.merchant.name}</Text>
                  <Text type="secondary">•</Text>
                  <Text type="secondary">{bid.createdAt}</Text>
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
    </div>
  );
};