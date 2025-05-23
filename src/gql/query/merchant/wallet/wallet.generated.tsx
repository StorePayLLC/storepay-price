import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import { WalletFragmentDoc } from "../../../fragment/wallet.generated";
import { WalletTransactionFragmentDoc } from "../../../fragment/walletTransaction.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type CryptoWalletQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type CryptoWalletQuery = {
  __typename?: "Query";
  node?:
    | { __typename?: "ConfirmableToken" }
    | { __typename?: "Kyc" }
    | { __typename?: "Merchant" }
    | { __typename?: "MerchantUser" }
    | { __typename?: "Offer" }
    | { __typename?: "Token" }
    | { __typename?: "Transaction" }
    | { __typename?: "User" }
    | {
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
        transactions: {
          __typename?: "TransactionConnection";
          nodes: Array<{
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
          }>;
        };
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
      }
    | { __typename?: "WalletFiat" };
};

export const CryptoWalletDocument = gql`
  query CryptoWallet($id: ID!) {
    node(id: $id) {
      ... on WalletCrypto {
        ...wallet
        transactions(last: 10) {
          nodes {
            ...walletTransaction
          }
        }
      }
    }
  }
  ${WalletFragmentDoc}
  ${WalletTransactionFragmentDoc}
`;

/**
 * __useCryptoWalletQuery__
 *
 * To run a query within a React component, call `useCryptoWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useCryptoWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCryptoWalletQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCryptoWalletQuery(
  baseOptions: Apollo.QueryHookOptions<
    CryptoWalletQuery,
    CryptoWalletQueryVariables
  > &
    (
      | { variables: CryptoWalletQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CryptoWalletQuery, CryptoWalletQueryVariables>(
    CryptoWalletDocument,
    options,
  );
}
export function useCryptoWalletLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CryptoWalletQuery,
    CryptoWalletQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CryptoWalletQuery, CryptoWalletQueryVariables>(
    CryptoWalletDocument,
    options,
  );
}
export function useCryptoWalletSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        CryptoWalletQuery,
        CryptoWalletQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CryptoWalletQuery, CryptoWalletQueryVariables>(
    CryptoWalletDocument,
    options,
  );
}
export type CryptoWalletQueryHookResult = ReturnType<
  typeof useCryptoWalletQuery
>;
export type CryptoWalletLazyQueryHookResult = ReturnType<
  typeof useCryptoWalletLazyQuery
>;
export type CryptoWalletSuspenseQueryHookResult = ReturnType<
  typeof useCryptoWalletSuspenseQuery
>;
export type CryptoWalletQueryResult = Apollo.QueryResult<
  CryptoWalletQuery,
  CryptoWalletQueryVariables
>;
