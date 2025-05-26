'use client';

import React, { useState } from 'react';
import {Card, Typography, Tag, Button, Flex, Image, Divider, Modal, Input, Form, App} from 'antd';
import { ArrowLeftOutlined, ClockCircleOutlined, ShopOutlined, LockOutlined } from '@ant-design/icons';
import Link from '@/components/link';
import {useConfirmMutation} from "@/gql/mutation/offer/confirm.generated";
import {useRejectMutation} from "@/gql/mutation/offer/reject.generated";
import {useParams} from "next/navigation";

const { Title, Text } = Typography;

const mockBid = {
  id: 1,
  date: '2024-03-10 14:30:00',
  status: 'pending',
  store: 'Electronics Hub',
  totalAmount: '2.1 ETH',
  expiresIn: '6h 30m',
  products: [
    {
      id: 1,
      name: 'Gaming Monitor XL',
      amount: '0.8 ETH',
      originalPrice: '1.2 ETH',
      image: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg',
      description: 'High-end gaming monitor with 240Hz refresh rate and 1ms response time.',
      quantity: 1
    }
  ],
};

const BidDetailClient: React.FC = () => {
  const [pinModalVisible, setPinModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const [confirm, {loading: confirming}] = useConfirmMutation();
  const [reject, {loading: rejecting}] = useRejectMutation();
  const params = useParams();
  const {notification} = App.useApp();


  const handleConfirm = () => {
    setPinModalVisible(true);
  };

  const handlePinSubmit = async () => {
    try {
      setConfirmLoading(true);
      const values = await form.validateFields();
      console.log('PIN submitted:', values);
      // Handle PIN verification and bid confirmation here
      setPinModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('PIN validation failed:', error);
    } finally {
      setConfirmLoading(false);
    }
  };

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
        <Link href="/merchant/bids">
          <Button 
            icon={<ArrowLeftOutlined />} 
            className="border-gray-700 text-white"
          >
            Back to Bid History
          </Button>
        </Link>
        <Flex gap={6}>
          <Button type="primary" danger loading={rejecting}
                  onClick={() => {
                    reject({variables: {input: {id: params.id as string}}}).then(() => {
                      notification.info({message: 'Offer rejected'});
                    })
                  }}>
            Reject
          </Button>
          <Button type="primary" className="bg-blue-600" loading={confirming}
                  onClick={() => {
                    confirm({variables: {input: {id: params.id as string}}}).then(() => {
                      notification.success({message: 'Offer confirmed successfully!'});
                    })
                  }}>
            Confirm
          </Button>
        </Flex>
      </Flex>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#111] border border-gray-800 mb-6">
            <Flex justify="space-between" align="center" className="mb-6">
              <Title level={4} className="text-white m-0">
                Bid #{mockBid.id}
              </Title>
              {getStatusTag(mockBid.status)}
            </Flex>

            <Flex gap={12} className="mb-6">
              <Flex align="center" gap={2}>
                <ShopOutlined className="text-gray-400" />
                <Text type="secondary">{mockBid.store}</Text>
              </Flex>
              <Text type="secondary">•</Text>
              <Flex align="center" gap={2}>
                <ClockCircleOutlined className="text-gray-400" />
                <Text type="secondary">Expires in {mockBid.expiresIn}</Text>
              </Flex>
            </Flex>

            {mockBid.products.map((product) => (
              <div key={product.id} className="border border-gray-800 rounded-lg p-4">
                <Flex gap={4}>
                  <div className="w-24 h-24 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <Title level={5} className="text-white mb-1">
                      {product.name}
                    </Title>
                    <Text className="text-gray-400 block mb-2">
                      {product.description}
                    </Text>
                    <Flex gap={12} align="center">
                      <Text className="text-gray-400">
                        Original: <span className="line-through">{product.originalPrice}</span>
                      </Text>
                      <Text className="text-blue-400 font-semibold">
                        Your bid: {product.amount}
                      </Text>
                      <Text className="text-gray-400">
                        Qty: {product.quantity}
                      </Text>
                    </Flex>
                  </div>
                </Flex>
              </div>
            ))}
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-[#111] border border-gray-800">
            <Title level={4} className="text-white mb-4">
              Bid Summary
            </Title>

            <div className="space-y-3">
              <Flex justify="space-between">
                <Text className="text-gray-400">Original Total</Text>
                <Text className="text-gray-400 line-through">
                  {mockBid.products[0].originalPrice}
                </Text>
              </Flex>
              
              <Flex justify="space-between">
                <Text className="text-gray-400">Your Bid</Text>
                <Text className="text-blue-400 font-semibold">
                  {mockBid.products[0].amount}
                </Text>
              </Flex>

              <Flex justify="space-between">
                <Text className="text-gray-400">Potential Savings</Text>
                <Text className="text-green-400">
                  0.4 ETH
                </Text>
              </Flex>

              <Divider className="border-gray-800 my-4" />

              <Flex justify="space-between" align="center">
                <Text className="text-white">Bid Status</Text>
                {getStatusTag(mockBid.status)}
              </Flex>
            </div>
          </Card>
        </div>
      </div>

      <Modal
        title={
          <Flex align="center" gap={2}>
            <LockOutlined className="text-blue-500" />
            <span>Enter PIN to Confirm</span>
          </Flex>
        }
        open={pinModalVisible}
        onCancel={() => {
          setPinModalVisible(false);
          form.resetFields();
        }}
        footer={[
          <Button 
            key="cancel" 
            onClick={() => {
              setPinModalVisible(false);
              form.resetFields();
            }}
          >
            Cancel
          </Button>,
          <Button 
            key="submit" 
            type="primary" 
            loading={confirming}
            onClick={() => {
              confirm({variables: {input: {id: params.id as string}}}).then(() => {
                notification.success({message: 'Offer confirmed successfully!'});
              })
            }}
            className="bg-blue-600"
          >
            Confirm
          </Button>
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="pin"
            rules={[
              { required: true, message: 'Please enter your PIN' },
              { len: 6, message: 'PIN must be 6 digits' },
              { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
            ]}
          >
            <Input.Password
              placeholder="Enter 6-digit PIN"
              maxLength={6}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              prefix={<LockOutlined className="text-gray-400" />}
            />
          </Form.Item>
          <Text type="secondary">
            Enter your 6-digit PIN to confirm this bid.
          </Text>
        </Form>
      </Modal>
    </div>
  );
};

export default BidDetailClient;