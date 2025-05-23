import type * as Types from "../graphql";

import { gql } from "@apollo/client";
import { WalletFragmentDoc } from "./wallet.generated";
export type MerchantFragment = {
  __typename?: "Merchant";
  id: string;
  applicantId?: string;
  name?: string;
  registrationNumber?: string;
  rejectedAt?: any;
  status?: Types.MerchantStatus;
  createdAt: any;
  updatedAt: any;
  preferences?: any;
  email?: string;
  phone?: string;
  country?: string;
  verifiedAt?: any;
  state?: Types.State;
  currency?: string;
  description?: string;
  address?: string;
  number?: string;
  spcWallet?: {
    __typename?: "WalletCrypto";
    id: string;
    expiresAt?: any;
    account?: string;
    balance?: number;
    preferences?: any;
    currency?: string;
    status?: Types.WalletStatus;
    startsAt?: any;
    name?: string;
    owner?:
      | { __typename: "ConfirmableToken"; id: string }
      | { __typename: "Kyc"; id: string }
      | { __typename: "Merchant"; id: string }
      | { __typename: "MerchantUser"; id: string }
      | { __typename: "Offer"; id: string }
      | { __typename: "Token"; id: string }
      | { __typename: "Transaction"; id: string }
      | { __typename: "User"; id: string }
      | { __typename: "WalletCrypto"; id: string }
      | { __typename: "WalletFiat"; id: string };
  };
};

export const MerchantFragmentDoc = gql`
  fragment merchant on Merchant {
    id
    applicantId
    name
    registrationNumber
    rejectedAt
    status
    createdAt
    updatedAt
    preferences
    email
    phone
    country
    verifiedAt
    state
    currency
    description
    address
    number
    spcWallet {
      id
      ...wallet
    }
  }
  ${WalletFragmentDoc}
`;
