/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import {useUser} from "@/utils/providers/UserProvider";
import {MeQuery} from "@/gql/query/me.generated";

type MerchantType = NonNullable<MeQuery['me']>['merchants']['nodes'][0] | undefined;

type ContextType = {
  merchants: MerchantType[];
  merchant: MerchantType;
  changeCurrent: (id: string) => void;
};

export const MerchantContext = createContext({} as ContextType);

type MerchantProviderProps = {
  children: ReactNode;
};

export default function MerchantProvider({ children }: MerchantProviderProps) {
  const {user} = useUser();
  const [merchant, setMerchant] = useState<MerchantType>(user?.merchants.nodes[0]);
  const changeCurrent = (id: string) => {
    const currentMerchant = user?.merchants.nodes.find((item) => item.id === id);
    if (currentMerchant) {
      setMerchant(currentMerchant);
    }
  }
  return (
    <MerchantContext.Provider value={{merchant: merchant, merchants: user?.merchants.nodes || [], changeCurrent: changeCurrent}}>
      {children}
    </MerchantContext.Provider>
  );
}

export const useMerchant = () => useContext(MerchantContext);
