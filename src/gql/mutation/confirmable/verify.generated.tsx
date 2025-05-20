import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ConfirmableVerifyMutationVariables = Types.Exact<{
  input: Types.ConfirmableConfirmInput;
}>;

export type ConfirmableVerifyMutation = {
  __typename?: "Mutation";
  confirmableConfirm?: string;
};

export const ConfirmableVerifyDocument = gql`
  mutation ConfirmableVerify($input: confirmableConfirmInput!) {
    confirmableConfirm(input: $input)
  }
`;
export type ConfirmableVerifyMutationFn = Apollo.MutationFunction<
  ConfirmableVerifyMutation,
  ConfirmableVerifyMutationVariables
>;

/**
 * __useConfirmableVerifyMutation__
 *
 * To run a mutation, you first call `useConfirmableVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmableVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmableVerifyMutation, { data, loading, error }] = useConfirmableVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmableVerifyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmableVerifyMutation,
    ConfirmableVerifyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ConfirmableVerifyMutation,
    ConfirmableVerifyMutationVariables
  >(ConfirmableVerifyDocument, options);
}
export type ConfirmableVerifyMutationHookResult = ReturnType<
  typeof useConfirmableVerifyMutation
>;
export type ConfirmableVerifyMutationResult =
  Apollo.MutationResult<ConfirmableVerifyMutation>;
export type ConfirmableVerifyMutationOptions = Apollo.BaseMutationOptions<
  ConfirmableVerifyMutation,
  ConfirmableVerifyMutationVariables
>;
