import type * as Types from "../graphql";

import { gql } from "@apollo/client";
import { WalletFragmentDoc } from "./wallet.generated";
export type UserFragment = {
  __typename?: "User";
  id: string;
  firstName?: string;
  lastName?: string;
  language?: string;
  email?: string;
  phone?: string;
  confirmedAt?: any;
  state?: Types.KycState;
  status?: Types.Status;
  dob?: any;
  citizenIdNumber?: string;
  externalKycId?: string;
  gender?: Types.Gender;
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

export const UserFragmentDoc = gql`
  fragment user on User {
    id
    firstName
    lastName
    language
    email
    phone
    confirmedAt
    state
    status
    dob
    citizenIdNumber
    externalKycId
    gender
    language
    spcWallet {
      ...wallet
    }
  }
  ${WalletFragmentDoc}
`;
