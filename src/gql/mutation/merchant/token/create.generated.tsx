import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import { TokenFragmentDoc } from "../../../fragment/token.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type TokenCreateMutationVariables = Types.Exact<{
  input: Types.MerchantTokenCreateInput;
}>;

export type TokenCreateMutation = {
  __typename?: "Mutation";
  merchantTokenCreate?: {
    __typename?: "Token";
    id: string;
    merchantId?: string;
    secretKey?: string;
    publicKey?: string;
    createdAt: any;
    updatedAt: any;
  };
};

export const TokenCreateDocument = gql`
  mutation TokenCreate($input: merchantTokenCreateInput!) {
    merchantTokenCreate(input: $input) {
      ...token
    }
  }
  ${TokenFragmentDoc}
`;
export type TokenCreateMutationFn = Apollo.MutationFunction<
  TokenCreateMutation,
  TokenCreateMutationVariables
>;

/**
 * __useTokenCreateMutation__
 *
 * To run a mutation, you first call `useTokenCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenCreateMutation, { data, loading, error }] = useTokenCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTokenCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TokenCreateMutation,
    TokenCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TokenCreateMutation, TokenCreateMutationVariables>(
    TokenCreateDocument,
    options,
  );
}
export type TokenCreateMutationHookResult = ReturnType<
  typeof useTokenCreateMutation
>;
export type TokenCreateMutationResult =
  Apollo.MutationResult<TokenCreateMutation>;
export type TokenCreateMutationOptions = Apollo.BaseMutationOptions<
  TokenCreateMutation,
  TokenCreateMutationVariables
>;
