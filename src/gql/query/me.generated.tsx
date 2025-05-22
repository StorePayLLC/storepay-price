import type * as Types from "../graphql";

import { gql } from "@apollo/client";
import { UserFragmentDoc } from "../fragment/user.generated";
import { MerchantUserFragmentDoc } from "../fragment/merchantUser.generated";
import { MerchantFragmentDoc } from "../fragment/merchant.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
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
        merchantId?: string;
        role: Types.UserRole;
        status: Types.UserStatus;
        createdAt: any;
        updatedAt: any;
        userId?: string;
      }>;
    };
    merchants: {
      __typename?: "MerchantConnection";
      nodes: Array<{
        __typename?: "Merchant";
        id: string;
        applicantId?: string;
        name?: string;
        registrationNumber?: string;
        rejectedAt?: any;
        status?: Types.MerchantStatus;
        createdAt: any;
        updatedAt: any;
        preferences?: any;
        email?: string;
        phone?: string;
        country?: string;
        verifiedAt?: any;
        state?: Types.State;
        currency?: string;
        description?: string;
        address?: string;
        number?: string;
      }>;
    };
  };
};

export const MeDocument = gql`
  query Me {
    me {
      ...user
      merchantUsers {
        nodes {
          ...merchantUser
        }
      }
      merchants {
        nodes {
          ...merchant
        }
      }
    }
  }
  ${UserFragmentDoc}
  ${MerchantUserFragmentDoc}
  ${MerchantFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    options,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
