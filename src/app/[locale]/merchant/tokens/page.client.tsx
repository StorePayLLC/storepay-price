'use client';

import React, { useState } from 'react';
import {
  Card,
  Typography,
  Tag,
  Button,
  Select,
  DatePicker,
  Flex,
  Empty,
  Table,
  Skeleton,
  Modal,
  notification, App
} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useRouter } from '@/components/navigation';
import {useMerchantTokensQuery} from "@/gql/query/merchant/tokens.generated";
import {useTokenCreateMutation} from "@/gql/mutation/merchant/token/create.generated";
import {useTokenDestroyMutation} from "@/gql/mutation/merchant/token/destroy.generated";
import {useMerchant} from "@/utils/providers";
import {IdFilter} from "@/gql/graphql";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const MerchantTokens: React.FC = () => {
  const [create, {loading: creating}] = useTokenCreateMutation();
  const [destroy, {loading: destroying}] = useTokenDestroyMutation();
  const {merchant} = useMerchant();
  const {data, loading, refetch} = useMerchantTokensQuery();
  const {notification} = App.useApp();

  if (loading) return <Skeleton />;

  return (
    <>
      <Button loading={creating} onClick={() =>
        create({variables: {input: {merchantId: merchant!.id}}}).then(async () => {
          await refetch();
          notification.success({message: `Successfully created`});
        })
      }>Create</Button>
      <Table dataSource={data?.merchantTokens.nodes} columns={[
        {
          title: 'secret key',
          dataIndex: 'secretKey',
          key: 'secretKey'
        },
        {
          title: 'public key',
          dataIndex: 'publicKey',
          key: 'publicKey'
        },
        {
          title: 'created date',
          dataIndex: 'createdAt',
          key: 'createdAt'
        }
      ]} />
    </>
  );
};

export default MerchantTokens;