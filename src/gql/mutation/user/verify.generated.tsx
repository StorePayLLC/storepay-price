import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { UserFragmentDoc } from "../../fragment/user.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserVerifyMutationVariables = Types.Exact<{
  input: Types.UserVerifyInput;
}>;

export type UserVerifyMutation = {
  __typename?: "Mutation";
  userVerify?: {
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

export const UserVerifyDocument = gql`
  mutation UserVerify($input: userVerifyInput!) {
    userVerify(input: $input) {
      ...user
    }
  }
  ${UserFragmentDoc}
`;
export type UserVerifyMutationFn = Apollo.MutationFunction<
  UserVerifyMutation,
  UserVerifyMutationVariables
>;

/**
 * __useUserVerifyMutation__
 *
 * To run a mutation, you first call `useUserVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userVerifyMutation, { data, loading, error }] = useUserVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserVerifyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserVerifyMutation,
    UserVerifyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserVerifyMutation, UserVerifyMutationVariables>(
    UserVerifyDocument,
    options,
  );
}
export type UserVerifyMutationHookResult = ReturnType<
  typeof useUserVerifyMutation
>;
export type UserVerifyMutationResult =
  Apollo.MutationResult<UserVerifyMutation>;
export type UserVerifyMutationOptions = Apollo.BaseMutationOptions<
  UserVerifyMutation,
  UserVerifyMutationVariables
>;
