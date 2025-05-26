import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { OfferFragmentDoc } from "../../fragment/offer.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ConfirmMutationVariables = Types.Exact<{
  input: Types.OfferConfirmInput;
}>;

export type ConfirmMutation = {
  __typename?: "Mutation";
  offerConfirm: {
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

export const ConfirmDocument = gql`
  mutation Confirm($input: offerConfirmInput!) {
    offerConfirm(input: $input) {
      ...offer
    }
  }
  ${OfferFragmentDoc}
`;
export type ConfirmMutationFn = Apollo.MutationFunction<
  ConfirmMutation,
  ConfirmMutationVariables
>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmMutation,
    ConfirmMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(
    ConfirmDocument,
    options,
  );
}
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<
  ConfirmMutation,
  ConfirmMutationVariables
>;
