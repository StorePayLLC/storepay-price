'use client';

import React, { useState } from 'react';
import { Card, Button, Typography, Tag, Flex, List, Avatar, Modal, Form, Input } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  BankOutlined,
} from '@ant-design/icons';
import Transactions from "@/app/[locale]/merchant/components/transactions";

const { Title, Text } = Typography;

type Props = {
  wallet: any
}

export default function WalletSummary ({wallet}: Props) {
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [withdrawForm] = Form.useForm();
  const [loading, setLoading] = useState(false);


  const handleWithdraw = async () => {
    try {
      setLoading(true);
      const values = await withdrawForm.validateFields();
      // Handle withdrawal logic here
      setWithdrawModalVisible(false);
      withdrawForm.resetFields();
    } catch (error) {
      console.error('Withdrawal failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!wallet) return null;

  return (
    <div>
      <Flex justify="space-between" align="center" className="mb-6">
        <Title level={2} className="text-white m-0">
          {wallet.name}
        </Title>
      </Flex>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-[#111827] border border-gray-800">
          <Flex justify="space-between" align="start">
            <div>
              <Text className="text-gray-400">Wallet Balance</Text>
              <Title level={2} className="text-emerald-400 mt-1 mb-2">
                {wallet.balance} SPC
              </Title>
              <Text className="text-gray-400">≈ {(wallet.balance || 0) * 0.41} MNT</Text>
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
              <Text className="text-gray-400">Completed offers</Text>
              <Title level={2} className="text-red-400 mt-1 mb-2">
                3 offers
              </Title>
              <Text className="text-gray-400">Total Value: 1.2 ETH</Text>
            </div>
          </Flex>
        </Card>
      </div>

      <Title level={4} className="text-white mt-8 mb-4">
        Recent Transactions
      </Title>

      <Transactions id={wallet.id as string} />

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
          <Text className="text-2xl text-white">{wallet.balance} ETH</Text>
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
                  if (value && value > wallet!.balance) {
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