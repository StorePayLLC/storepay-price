import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { MerchantUserFragmentDoc } from "../../fragment/merchantUser.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MerchantUsersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.MerchantUserFilter>;
}>;

export type MerchantUsersQuery = {
  __typename?: "Query";
  merchantUsers: {
    __typename?: "MerchantUserConnection";
    nodes: Array<{
      __typename?: "MerchantUser";
      id: string;
      merchantId?: string;
      role: Types.UserRole;
      status: Types.UserStatus;
      createdAt: any;
      updatedAt: any;
      userId?: string;
    }>;
  };
};

export const MerchantUsersDocument = gql`
  query MerchantUsers($filter: MerchantUserFilter) {
    merchantUsers(filter: $filter) {
      nodes {
        ...merchantUser
      }
    }
  }
  ${MerchantUserFragmentDoc}
`;

/**
 * __useMerchantUsersQuery__
 *
 * To run a query within a React component, call `useMerchantUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMerchantUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useMerchantUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MerchantUsersQuery,
    MerchantUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MerchantUsersQuery, MerchantUsersQueryVariables>(
    MerchantUsersDocument,
    options,
  );
}
export function useMerchantUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MerchantUsersQuery,
    MerchantUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MerchantUsersQuery, MerchantUsersQueryVariables>(
    MerchantUsersDocument,
    options,
  );
}
export function useMerchantUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MerchantUsersQuery,
        MerchantUsersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MerchantUsersQuery,
    MerchantUsersQueryVariables
  >(MerchantUsersDocument, options);
}
export type MerchantUsersQueryHookResult = ReturnType<
  typeof useMerchantUsersQuery
>;
export type MerchantUsersLazyQueryHookResult = ReturnType<
  typeof useMerchantUsersLazyQuery
>;
export type MerchantUsersSuspenseQueryHookResult = ReturnType<
  typeof useMerchantUsersSuspenseQuery
>;
export type MerchantUsersQueryResult = Apollo.QueryResult<
  MerchantUsersQuery,
  MerchantUsersQueryVariables
>;
