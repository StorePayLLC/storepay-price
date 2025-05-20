import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ResendConfirmableMutationVariables = Types.Exact<{
  input: Types.ConfirmableResendInput;
}>;

export type ResendConfirmableMutation = {
  __typename?: "Mutation";
  confirmableResend?: string;
};

export const ResendConfirmableDocument = gql`
  mutation ResendConfirmable($input: confirmableResendInput!) {
    confirmableResend(input: $input)
  }
`;
export type ResendConfirmableMutationFn = Apollo.MutationFunction<
  ResendConfirmableMutation,
  ResendConfirmableMutationVariables
>;

/**
 * __useResendConfirmableMutation__
 *
 * To run a mutation, you first call `useResendConfirmableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendConfirmableMutation, { data, loading, error }] = useResendConfirmableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResendConfirmableMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResendConfirmableMutation,
    ResendConfirmableMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResendConfirmableMutation,
    ResendConfirmableMutationVariables
  >(ResendConfirmableDocument, options);
}
export type ResendConfirmableMutationHookResult = ReturnType<
  typeof useResendConfirmableMutation
>;
export type ResendConfirmableMutationResult =
  Apollo.MutationResult<ResendConfirmableMutation>;
export type ResendConfirmableMutationOptions = Apollo.BaseMutationOptions<
  ResendConfirmableMutation,
  ResendConfirmableMutationVariables
>;
