import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type KycCreateMutationVariables = Types.Exact<{
  input: Types.KycCreateInput;
}>;

export type KycCreateMutation = {
  __typename?: "Mutation";
  kycCreate?: {
    __typename?: "Kyc";
    id: string;
    preferences?: any;
    userId?: string;
    status?: Types.KycStatus;
    createdAt: any;
    confirmedAt?: any;
    expiresAt?: any;
  };
};

export const KycCreateDocument = gql`
  mutation KycCreate($input: kycCreateInput!) {
    kycCreate(input: $input) {
      id
      preferences
      userId
      status
      createdAt
      confirmedAt
      expiresAt
    }
  }
`;
export type KycCreateMutationFn = Apollo.MutationFunction<
  KycCreateMutation,
  KycCreateMutationVariables
>;

/**
 * __useKycCreateMutation__
 *
 * To run a mutation, you first call `useKycCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useKycCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [kycCreateMutation, { data, loading, error }] = useKycCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useKycCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    KycCreateMutation,
    KycCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<KycCreateMutation, KycCreateMutationVariables>(
    KycCreateDocument,
    options,
  );
}
export type KycCreateMutationHookResult = ReturnType<
  typeof useKycCreateMutation
>;
export type KycCreateMutationResult = Apollo.MutationResult<KycCreateMutation>;
export type KycCreateMutationOptions = Apollo.BaseMutationOptions<
  KycCreateMutation,
  KycCreateMutationVariables
>;
