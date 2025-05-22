'use client';

import React, { useState } from 'react';
import {Card, Form, Input, Select, Button, Avatar, Upload, Typography, Flex, Divider, Modal, Descriptions} from 'antd';
import { UserOutlined, EditOutlined, CreditCardOutlined, WalletOutlined, LockOutlined } from '@ant-design/icons';
import {useMerchant, useUser} from "@/utils/providers";
import LanguageSelector from "@/components/languageSelector";
import GetStarted from "@/app/[locale]/merchant/components/getStarted";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { Option } = Select;

const ProfilePage: React.FC = () => {
  const {user, loading} = useUser();
  const [pinModalVisible, setPinModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {merchant} = useMerchant();

  if (!merchant && loading) return <GetStarted />;

  if (merchant) {
    return (
      <div className="max-w-4xl mx-auto">
        <Title level={2} className="text-white mb-6">
          Profile Settings
        </Title>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-full">
            <Card className="bg-[#111] border border-gray-800">
              <Descriptions
                layout="vertical"
                column={{ xs: 1, sm: 2 }}
                bordered
                className="mb-8"
                contentStyle={{
                  color: 'white'
                }}
                labelStyle={{
                  color: '#9ca3af'
                }}
              >
                <Descriptions.Item label="Registration Number" span={2}>
                  {merchant?.number}
                </Descriptions.Item>

                <Descriptions.Item label="Business Name">
                  {merchant?.name}
                </Descriptions.Item>

                <Descriptions.Item label="Status">
                  {merchant?.status}
                </Descriptions.Item>

                <Descriptions.Item label="Submitted On">
                  {dayjs(merchant?.createdAt).format('YYYY-MM-DD')}
                </Descriptions.Item>

                <Descriptions.Item label="Estimated Completion">
                  {dayjs(merchant?.createdAt).format('YYYY-MM-DD')}
                </Descriptions.Item>

                <Descriptions.Item label="Email Address">
                  {merchant?.email}
                </Descriptions.Item>

                <Descriptions.Item label="Phone Number">
                  {merchant?.phone}
                </Descriptions.Item>

                <Descriptions.Item label="Business Address" span={2}>
                  {merchant?.address}
                </Descriptions.Item>

                <Descriptions.Item label="State">
                  {merchant?.state}
                </Descriptions.Item>

                <Descriptions.Item label="Currency">
                  {merchant?.currency}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </div>
        </div>

        <Modal
          title={
            <Flex align="center" gap={2}>
              <LockOutlined className="text-blue-500" />
              <span>Change Security PIN</span>
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
              onClick={() => false}
              className="bg-blue-600"
            >
              Change PIN
            </Button>
          ]}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="currentPin"
              label={<span className="text-gray-300">Current PIN</span>}
              rules={[
                { required: true, message: 'Please enter your current PIN' },
                { len: 6, message: 'PIN must be 6 digits' },
                { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
              ]}
            >
              <Input.Password
                placeholder="Enter current PIN"
                maxLength={6}
                className="bg-[#1a1a1a] border-gray-700 text-white"
                prefix={<LockOutlined className="text-gray-400" />}
              />
            </Form.Item>

            <Form.Item
              name="newPin"
              label={<span className="text-gray-300">New PIN</span>}
              rules={[
                { required: true, message: 'Please enter your new PIN' },
                { len: 6, message: 'PIN must be 6 digits' },
                { pattern: /^\d+$/, message: 'PIN must contain only numbers' }
              ]}
            >
              <Input.Password
                placeholder="Enter new PIN"
                maxLength={6}
                className="bg-[#1a1a1a] border-gray-700 text-white"
                prefix={<LockOutlined className="text-gray-400" />}
              />
            </Form.Item>

            <Form.Item
              name="confirmPin"
              label={<span className="text-gray-300">Confirm New PIN</span>}
              dependencies={['newPin']}
              rules={[
                { required: true, message: 'Please confirm your new PIN' },
                { len: 6, message: 'PIN must be 6 digits' },
                { pattern: /^\d+$/, message: 'PIN must contain only numbers' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPin') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('PINs do not match'));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm new PIN"
                maxLength={6}
                className="bg-[#1a1a1a] border-gray-700 text-white"
                prefix={<LockOutlined className="text-gray-400" />}
              />
            </Form.Item>

            <Text type="secondary">
              Your PIN is used to confirm important actions like bids and withdrawals.
            </Text>
          </Form>
        </Modal>
      </div>
    );
  }
};

export default ProfilePage;