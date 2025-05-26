'use client';

import React, { useState } from 'react';
import WalletSummary from "@/app/[locale]/merchant/components/wallet";
import {useMerchant} from "@/utils/providers";

const WalletClient: React.FC = () => {
  const {merchant} = useMerchant();

  return (
    <WalletSummary wallet={merchant!.spcWallet} />
  );
};

export default WalletClient;