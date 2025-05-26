import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { OfferFragmentDoc } from "../../fragment/offer.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type RejectMutationVariables = Types.Exact<{
  input: Types.OfferRejectInput;
}>;

export type RejectMutation = {
  __typename?: "Mutation";
  offerReject: {
    __typename?: "Offer";
    id: string;
    merchantId?: string;
    userId?: string;
    amount?: number;
    rate?: number;
    currency?: string;
    feePercent?: number;
    status?: Types.OfferStatus;
    number?: string;
    expiredAt?: any;
    confirmedAt?: any;
    rejectedAt?: any;
    description?: string;
    canceledAt?: any;
    externalId?: string;
    externalPayload?: any;
    createdAt: any;
  };
};

export const RejectDocument = gql`
  mutation Reject($input: offerRejectInput!) {
    offerReject(input: $input) {
      ...offer
    }
  }
  ${OfferFragmentDoc}
`;
export type RejectMutationFn = Apollo.MutationFunction<
  RejectMutation,
  RejectMutationVariables
>;

/**
 * __useRejectMutation__
 *
 * To run a mutation, you first call `useRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectMutation, { data, loading, error }] = useRejectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RejectMutation,
    RejectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RejectMutation, RejectMutationVariables>(
    RejectDocument,
    options,
  );
}
export type RejectMutationHookResult = ReturnType<typeof useRejectMutation>;
export type RejectMutationResult = Apollo.MutationResult<RejectMutation>;
export type RejectMutationOptions = Apollo.BaseMutationOptions<
  RejectMutation,
  RejectMutationVariables
>;
