import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GenerateSessionIdMutationVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GenerateSessionIdMutation = {
  __typename?: "Mutation";
  kycGenerateSessionId?: string;
};

export const GenerateSessionIdDocument = gql`
  mutation GenerateSessionId {
    kycGenerateSessionId(input: {})
  }
`;
export type GenerateSessionIdMutationFn = Apollo.MutationFunction<
  GenerateSessionIdMutation,
  GenerateSessionIdMutationVariables
>;

/**
 * __useGenerateSessionIdMutation__
 *
 * To run a mutation, you first call `useGenerateSessionIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSessionIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSessionIdMutation, { data, loading, error }] = useGenerateSessionIdMutation({
 *   variables: {
 *   },
 * });
 */
export function useGenerateSessionIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateSessionIdMutation,
    GenerateSessionIdMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GenerateSessionIdMutation,
    GenerateSessionIdMutationVariables
  >(GenerateSessionIdDocument, options);
}
export type GenerateSessionIdMutationHookResult = ReturnType<
  typeof useGenerateSessionIdMutation
>;
export type GenerateSessionIdMutationResult =
  Apollo.MutationResult<GenerateSessionIdMutation>;
export type GenerateSessionIdMutationOptions = Apollo.BaseMutationOptions<
  GenerateSessionIdMutation,
  GenerateSessionIdMutationVariables
>;
