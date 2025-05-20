'use client';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import Cookie from 'js-cookie';

import { useRouter } from '@/components/navigation';
import { MeQuery, useMeQuery } from '@/gql/query/me.generated';
import {AuthContext, useAuth} from '@/utils/providers/AuthContext';

type ContextType = {
  user: MeQuery['me'];
  refetch: () => void;
  loading: boolean;
};

export const UserContext = createContext<ContextType>({
  user: undefined,
  loading: false,
  refetch: () => Promise,
});

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const { isAuth } = useAuth();
  const { data, refetch, loading } = useMeQuery({ skip: !isAuth });

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <></>;

  return (
    <UserContext.Provider value={{ user: data?.me, refetch, loading }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => React.useContext(UserContext);
