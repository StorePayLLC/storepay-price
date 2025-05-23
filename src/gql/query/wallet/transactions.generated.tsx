import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { WalletTransactionFragmentDoc } from "../../fragment/walletTransaction.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type TransactionsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.WalletTransactionFilter>;
  first?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  after?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type TransactionsQuery = {
  __typename?: "Query";
  walletTransactions: {
    __typename?: "TransactionConnection";
    sum: number;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      endCursor?: string;
      hasPreviousPage: boolean;
      startCursor?: string;
    };
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
};

export const TransactionsDocument = gql`
  query Transactions(
    $filter: WalletTransactionFilter
    $first: Int
    $after: String
  ) {
    walletTransactions(filter: $filter, first: $first, after: $after) {
      sum(field: "amount")
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      nodes {
        ...walletTransaction
      }
    }
  }
  ${WalletTransactionFragmentDoc}
`;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TransactionsQuery,
    TransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(
    TransactionsDocument,
    options,
  );
}
export function useTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TransactionsQuery,
    TransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(
    TransactionsDocument,
    options,
  );
}
export function useTransactionsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        TransactionsQuery,
        TransactionsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TransactionsQuery, TransactionsQueryVariables>(
    TransactionsDocument,
    options,
  );
}
export type TransactionsQueryHookResult = ReturnType<
  typeof useTransactionsQuery
>;
export type TransactionsLazyQueryHookResult = ReturnType<
  typeof useTransactionsLazyQuery
>;
export type TransactionsSuspenseQueryHookResult = ReturnType<
  typeof useTransactionsSuspenseQuery
>;
export type TransactionsQueryResult = Apollo.QueryResult<
  TransactionsQuery,
  TransactionsQueryVariables
>;
