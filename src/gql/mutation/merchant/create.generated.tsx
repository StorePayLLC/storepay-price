import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { MerchantFragmentDoc } from "../../fragment/merchant.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MerchantCreateMutationVariables = Types.Exact<{
  input: Types.MerchantCreateByUserInput;
}>;

export type MerchantCreateMutation = {
  __typename?: "Mutation";
  merchantCreateByUser?: {
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

export const MerchantCreateDocument = gql`
  mutation MerchantCreate($input: merchantCreateByUserInput!) {
    merchantCreateByUser(input: $input) {
      ...merchant
    }
  }
  ${MerchantFragmentDoc}
`;
export type MerchantCreateMutationFn = Apollo.MutationFunction<
  MerchantCreateMutation,
  MerchantCreateMutationVariables
>;

/**
 * __useMerchantCreateMutation__
 *
 * To run a mutation, you first call `useMerchantCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMerchantCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [merchantCreateMutation, { data, loading, error }] = useMerchantCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMerchantCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MerchantCreateMutation,
    MerchantCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MerchantCreateMutation,
    MerchantCreateMutationVariables
  >(MerchantCreateDocument, options);
}
export type MerchantCreateMutationHookResult = ReturnType<
  typeof useMerchantCreateMutation
>;
export type MerchantCreateMutationResult =
  Apollo.MutationResult<MerchantCreateMutation>;
export type MerchantCreateMutationOptions = Apollo.BaseMutationOptions<
  MerchantCreateMutation,
  MerchantCreateMutationVariables
>;
