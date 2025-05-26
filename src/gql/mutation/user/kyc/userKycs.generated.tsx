import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import { UserFragmentDoc } from "../../../fragment/user.generated";
import { KycFragmentDoc } from "../../../fragment/kyc.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetUserKycsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.KycFilter>;
}>;

export type GetUserKycsQuery = {
  __typename?: "Query";
  me?: {
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
    kycs?: {
      __typename?: "KycConnection";
      nodes: Array<{
        __typename?: "Kyc";
        id: string;
        userId?: string;
        status?: Types.KycStatus;
        expiresAt?: any;
        confirmedAt?: any;
        createdAt: any;
        updatedAt: any;
        preferences?: any;
      }>;
    };
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
};

export const GetUserKycsDocument = gql`
  query GetUserKycs($filter: KycFilter) {
    me {
      ...user
      kycs(filter: $filter) {
        nodes {
          ...kyc
        }
      }
    }
  }
  ${UserFragmentDoc}
  ${KycFragmentDoc}
`;

/**
 * __useGetUserKycsQuery__
 *
 * To run a query within a React component, call `useGetUserKycsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserKycsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserKycsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetUserKycsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserKycsQuery,
    GetUserKycsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserKycsQuery, GetUserKycsQueryVariables>(
    GetUserKycsDocument,
    options,
  );
}
export function useGetUserKycsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserKycsQuery,
    GetUserKycsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserKycsQuery, GetUserKycsQueryVariables>(
    GetUserKycsDocument,
    options,
  );
}
export function useGetUserKycsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserKycsQuery,
        GetUserKycsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserKycsQuery, GetUserKycsQueryVariables>(
    GetUserKycsDocument,
    options,
  );
}
export type GetUserKycsQueryHookResult = ReturnType<typeof useGetUserKycsQuery>;
export type GetUserKycsLazyQueryHookResult = ReturnType<
  typeof useGetUserKycsLazyQuery
>;
export type GetUserKycsSuspenseQueryHookResult = ReturnType<
  typeof useGetUserKycsSuspenseQuery
>;
export type GetUserKycsQueryResult = Apollo.QueryResult<
  GetUserKycsQuery,
  GetUserKycsQueryVariables
>;
