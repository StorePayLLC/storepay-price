'use client';
import React, { createContext, useContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { i18n } from '@lingui/core';
import { t } from '@lingui/core/macro';
import { notification } from 'antd';
import cookies from 'js-cookie';

import { usePathname, useRouter } from '@/components/navigation';
import { userTokenField } from '@/config/constants';
// import { usePathname } from 'next-intl/client';

// import { useRouter } from '@/components/NProgress';

export type AuthContextType = {
  isAuth: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  toLogin: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuth, setAuth] = useState(() => {
    // SSR trick, since we are checking auth in middleware
    if (typeof window === 'undefined') return true;
    return !!cookies.get(userTokenField);
  });
  const client = useApolloClient();
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    cookies.remove(userTokenField);
    cookies.remove('cs.t');
    setAuth(false);
    await client.resetStore();
    notification.info({ message: t`Logged out` });
    toLogin();
  };

  const login = async () => {
    await client.resetStore();
    setAuth(true);
  };

  const toLogin = () => {
    router.push('/auth/login');
    cookies.set('redirect', `/${i18n.locale}${pathname}`);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout, toLogin }}>{children}</AuthContext.Provider>;
};

export const AuthConsumer = AuthContext.Consumer;
