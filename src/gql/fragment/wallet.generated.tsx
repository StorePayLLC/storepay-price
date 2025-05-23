import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type WalletFragment = {
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

export const WalletFragmentDoc = gql`
  fragment wallet on WalletCrypto {
    id
    owner {
      id
      __typename
    }
    expiresAt
    account
    balance
    preferences
    currency
    status
    startsAt
    name
  }
`;
