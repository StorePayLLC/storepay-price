/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { UserContext } from '@/utils/providers/UserProvider';
import {useMeWithMerchantUsersQuery} from "@/gql/query/merchant/meWithMerchantUsers.generated";

type MerchantType = {
  id: string;
  name: string;
};

type ContextType = {
  merchant: MerchantType;
  merchants: MerchantType[];
  fetching: boolean;
};

export const MerchantContext = createContext<ContextType>({} as ContextType);

type MerchantProviderProps = {
  children: ReactNode;
};

export default function MerchantProvider({ children }: MerchantProviderProps) {
  const {data, loading} = useMeWithMerchantUsersQuery();
  const [merchant, setMerchant] = useState<MerchantType>({} as MerchantType);
  const [merchants, setMerchants] = useState<MerchantType[]>([]);

  useEffect(() => {
    if (data?.me?.merchantUsers && data?.me?.merchantUsers.nodes.length > 0) {
      const merchants: MerchantType[] = []
      data?.me?.merchantUsers.nodes.forEach((merchantUser) => {
        if (merchantUser.merchant) {
          merchants.push({
            id: merchantUser.merchant.id,
            name: merchantUser?.merchant?.name as string,
          });
        }
      });
      setMerchants(merchants);
      setMerchant(merchants[0]);
    }
  }, [data]);

  if (loading) {
    return <>Loading...</>;
  }

  if (merchant && merchant.id && merchant.id !== '') {
    return (
      <MerchantContext.Provider
        value={{
          merchant,
          merchants,
          fetching: loading,
        }}
      >
        {children}
      </MerchantContext.Provider>
    );
  }
}

export const MerchantConsumer = MerchantContext.Consumer;

export const useMerchant = () => useContext(MerchantContext);
