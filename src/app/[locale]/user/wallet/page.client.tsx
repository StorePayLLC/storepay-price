'use client';

import React, { useState } from 'react';
import WalletSummary from "@/app/[locale]/merchant/components/wallet";
import {useMerchant, useUser} from "@/utils/providers";

const WalletClient: React.FC = () => {
  const {user} = useUser();

  return (
    <WalletSummary wallet={user!.spcWallet} />
  );
};

export default WalletClient;