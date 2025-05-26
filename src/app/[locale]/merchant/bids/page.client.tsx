'use client';

import React, { useState } from 'react';
import { Card, Typography, Tag, Button, Select, DatePicker, Flex, Empty, Skeleton } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useRouter } from '@/components/navigation';
import {useOffersQuery} from "@/gql/query/offer/offers.generated";
import { useMerchant } from '@/utils/providers';
import {IdFilter} from "@/gql/graphql";
import OfferList from "@/app/[locale]/merchant/components/offer/list";
const BidsClient: React.FC = () => {
  const {merchant} = useMerchant();
  console.log(merchant)
  const {data, loading} = useOffersQuery({
    variables: {
      filter: {
        merchantId: {
          eq: "Z2lkOi8vc3RvcmUtcGF5L01lcmNoYW50OjpNZXJjaGFudC8x"
        }
      },
      first: 10,
    }
  })

  if (loading) return <Skeleton />;

  return (
    <OfferList offers={data!.offers!.nodes} />
  );
};

export default BidsClient;