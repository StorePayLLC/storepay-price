import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ConfirmableTokenByIdQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type ConfirmableTokenByIdQuery = {
  __typename?: "Query";
  node?:
    | {
        __typename?: "ConfirmableToken";
        id: string;
        expireAt?: any;
        expired: boolean;
      }
    | { __typename?: "Kyc" }
    | { __typename?: "Merchant" }
    | { __typename?: "MerchantUser" }
    | { __typename?: "Offer" }
    | { __typename?: "Token" }
    | { __typename?: "Transaction" }
    | { __typename?: "User" }
    | { __typename?: "WalletCrypto" }
    | { __typename?: "WalletFiat" };
};

export const ConfirmableTokenByIdDocument = gql`
  query ConfirmableTokenById($id: ID!) {
    node(id: $id) {
      ... on ConfirmableToken {
        id
        expireAt
        expired
      }
    }
  }
`;

/**
 * __useConfirmableTokenByIdQuery__
 *
 * To run a query within a React component, call `useConfirmableTokenByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfirmableTokenByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfirmableTokenByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConfirmableTokenByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConfirmableTokenByIdQuery,
    ConfirmableTokenByIdQueryVariables
  > &
    (
      | { variables: ConfirmableTokenByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ConfirmableTokenByIdQuery,
    ConfirmableTokenByIdQueryVariables
  >(ConfirmableTokenByIdDocument, options);
}
export function useConfirmableTokenByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConfirmableTokenByIdQuery,
    ConfirmableTokenByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ConfirmableTokenByIdQuery,
    ConfirmableTokenByIdQueryVariables
  >(ConfirmableTokenByIdDocument, options);
}
export function useConfirmableTokenByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ConfirmableTokenByIdQuery,
        ConfirmableTokenByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ConfirmableTokenByIdQuery,
    ConfirmableTokenByIdQueryVariables
  >(ConfirmableTokenByIdDocument, options);
}
export type ConfirmableTokenByIdQueryHookResult = ReturnType<
  typeof useConfirmableTokenByIdQuery
>;
export type ConfirmableTokenByIdLazyQueryHookResult = ReturnType<
  typeof useConfirmableTokenByIdLazyQuery
>;
export type ConfirmableTokenByIdSuspenseQueryHookResult = ReturnType<
  typeof useConfirmableTokenByIdSuspenseQuery
>;
export type ConfirmableTokenByIdQueryResult = Apollo.QueryResult<
  ConfirmableTokenByIdQuery,
  ConfirmableTokenByIdQueryVariables
>;
