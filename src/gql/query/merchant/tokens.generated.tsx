import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { TokenFragmentDoc } from "../../fragment/token.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MerchantTokensQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TokenFilter>;
}>;

export type MerchantTokensQuery = {
  __typename?: "Query";
  merchantTokens: {
    __typename?: "TokenConnection";
    nodes: Array<{
      __typename?: "Token";
      id: string;
      merchantId?: string;
      secretKey?: string;
      publicKey?: string;
      createdAt: any;
      updatedAt: any;
    }>;
  };
};

export const MerchantTokensDocument = gql`
  query MerchantTokens($filter: TokenFilter) {
    merchantTokens(filter: $filter) {
      nodes {
        ...token
      }
    }
  }
  ${TokenFragmentDoc}
`;

/**
 * __useMerchantTokensQuery__
 *
 * To run a query within a React component, call `useMerchantTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerchantTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantTokensQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMerchantTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MerchantTokensQuery,
    MerchantTokensQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MerchantTokensQuery, MerchantTokensQueryVariables>(
    MerchantTokensDocument,
    options,
  );
}
export function useMerchantTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MerchantTokensQuery,
    MerchantTokensQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MerchantTokensQuery, MerchantTokensQueryVariables>(
    MerchantTokensDocument,
    options,
  );
}
export function useMerchantTokensSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MerchantTokensQuery,
        MerchantTokensQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MerchantTokensQuery,
    MerchantTokensQueryVariables
  >(MerchantTokensDocument, options);
}
export type MerchantTokensQueryHookResult = ReturnType<
  typeof useMerchantTokensQuery
>;
export type MerchantTokensLazyQueryHookResult = ReturnType<
  typeof useMerchantTokensLazyQuery
>;
export type MerchantTokensSuspenseQueryHookResult = ReturnType<
  typeof useMerchantTokensSuspenseQuery
>;
export type MerchantTokensQueryResult = Apollo.QueryResult<
  MerchantTokensQuery,
  MerchantTokensQueryVariables
>;
