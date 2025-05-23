import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type WalletTransactionFragment = {
  __typename?: "Transaction";
  id: string;
  amount?: number;
  transactionAt?: any;
  typeCode?: Types.WalletTransactionTypeCode;
  sourceId?: string;
  sourceType?: string;
  category?: Types.TransactionCategory;
  createdAt: any;
  authorizedAt?: any;
  authorizedById?: string;
  balance?: number;
  status: Types.TransactionStatus;
  number: string;
  description?: string;
  withdrawTransactionId?: string;
  dueDate?: any;
  response?: any;
  nonce?: string;
};

export const WalletTransactionFragmentDoc = gql`
  fragment walletTransaction on Transaction {
    id
    amount
    transactionAt
    typeCode
    sourceId
    sourceType
    category
    createdAt
    authorizedAt
    authorizedById
    balance
    status
    number
    description
    withdrawTransactionId
    dueDate
    response
    nonce
  }
`;
