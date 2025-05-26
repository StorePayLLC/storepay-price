import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { UserFragmentDoc } from "../../fragment/user.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MeWithMerchantUsersQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type MeWithMerchantUsersQuery = {
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
    merchantUsers: {
      __typename?: "MerchantUserConnection";
      nodes: Array<{
        __typename?: "MerchantUser";
        id: string;
        role: Types.UserRole;
        status: Types.UserStatus;
        merchant?: { __typename?: "Merchant"; name?: string; id: string };
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

export const MeWithMerchantUsersDocument = gql`
  query MeWithMerchantUsers {
    me {
      ...user
      merchantUsers {
        nodes {
          id
          merchant {
            name
            id
          }
          role
          status
        }
      }
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useMeWithMerchantUsersQuery__
 *
 * To run a query within a React component, call `useMeWithMerchantUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeWithMerchantUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeWithMerchantUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeWithMerchantUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeWithMerchantUsersQuery,
    MeWithMerchantUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MeWithMerchantUsersQuery,
    MeWithMerchantUsersQueryVariables
  >(MeWithMerchantUsersDocument, options);
}
export function useMeWithMerchantUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeWithMerchantUsersQuery,
    MeWithMerchantUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MeWithMerchantUsersQuery,
    MeWithMerchantUsersQueryVariables
  >(MeWithMerchantUsersDocument, options);
}
export function useMeWithMerchantUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MeWithMerchantUsersQuery,
        MeWithMerchantUsersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MeWithMerchantUsersQuery,
    MeWithMerchantUsersQueryVariables
  >(MeWithMerchantUsersDocument, options);
}
export type MeWithMerchantUsersQueryHookResult = ReturnType<
  typeof useMeWithMerchantUsersQuery
>;
export type MeWithMerchantUsersLazyQueryHookResult = ReturnType<
  typeof useMeWithMerchantUsersLazyQuery
>;
export type MeWithMerchantUsersSuspenseQueryHookResult = ReturnType<
  typeof useMeWithMerchantUsersSuspenseQuery
>;
export type MeWithMerchantUsersQueryResult = Apollo.QueryResult<
  MeWithMerchantUsersQuery,
  MeWithMerchantUsersQueryVariables
>;
