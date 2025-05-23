import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import { TokenFragmentDoc } from "../../../fragment/token.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type TokenDestroyMutationVariables = Types.Exact<{
  input: Types.MerchantTokenDestroyInput;
}>;

export type TokenDestroyMutation = {
  __typename?: "Mutation";
  merchantTokenDestroy?: {
    __typename?: "Token";
    id: string;
    merchantId?: string;
    secretKey?: string;
    publicKey?: string;
    createdAt: any;
    updatedAt: any;
  };
};

export const TokenDestroyDocument = gql`
  mutation TokenDestroy($input: merchantTokenDestroyInput!) {
    merchantTokenDestroy(input: $input) {
      ...token
    }
  }
  ${TokenFragmentDoc}
`;
export type TokenDestroyMutationFn = Apollo.MutationFunction<
  TokenDestroyMutation,
  TokenDestroyMutationVariables
>;

/**
 * __useTokenDestroyMutation__
 *
 * To run a mutation, you first call `useTokenDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenDestroyMutation, { data, loading, error }] = useTokenDestroyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTokenDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TokenDestroyMutation,
    TokenDestroyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TokenDestroyMutation,
    TokenDestroyMutationVariables
  >(TokenDestroyDocument, options);
}
export type TokenDestroyMutationHookResult = ReturnType<
  typeof useTokenDestroyMutation
>;
export type TokenDestroyMutationResult =
  Apollo.MutationResult<TokenDestroyMutation>;
export type TokenDestroyMutationOptions = Apollo.BaseMutationOptions<
  TokenDestroyMutation,
  TokenDestroyMutationVariables
>;
