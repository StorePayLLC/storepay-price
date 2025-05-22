import type * as Types from "../graphql";

import { gql } from "@apollo/client";
import { MerchantFragmentDoc } from "../fragment/merchant.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MerchantSubscriptionVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type MerchantSubscription = {
  __typename?: "Subscription";
  merchant?: {
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
  };
};

export const MerchantDocument = gql`
  subscription Merchant($id: ID!) {
    merchant(id: $id) {
      ...merchant
    }
  }
  ${MerchantFragmentDoc}
`;

/**
 * __useMerchantSubscription__
 *
 * To run a query within a React component, call `useMerchantSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMerchantSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMerchantSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMerchantSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    MerchantSubscription,
    MerchantSubscriptionVariables
  > &
    (
      | { variables: MerchantSubscriptionVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    MerchantSubscription,
    MerchantSubscriptionVariables
  >(MerchantDocument, options);
}
export type MerchantSubscriptionHookResult = ReturnType<
  typeof useMerchantSubscription
>;
export type MerchantSubscriptionResult =
  Apollo.SubscriptionResult<MerchantSubscription>;
