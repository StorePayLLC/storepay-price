import type * as Types from "../../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type FaceCheckMutationVariables = Types.Exact<{
  input: Types.FaceCheckInput;
}>;

export type FaceCheckMutation = {
  __typename?: "Mutation";
  faceCheck?: {
    __typename?: "Kyc";
    id: string;
    userId?: string;
    preferences?: any;
    status?: Types.KycStatus;
    createdAt: any;
    updatedAt: any;
    expiresAt?: any;
  };
};

export const FaceCheckDocument = gql`
  mutation FaceCheck($input: faceCheckInput!) {
    faceCheck(input: $input) {
      id
      userId
      preferences
      status
      createdAt
      updatedAt
      expiresAt
    }
  }
`;
export type FaceCheckMutationFn = Apollo.MutationFunction<
  FaceCheckMutation,
  FaceCheckMutationVariables
>;

/**
 * __useFaceCheckMutation__
 *
 * To run a mutation, you first call `useFaceCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFaceCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [faceCheckMutation, { data, loading, error }] = useFaceCheckMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFaceCheckMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FaceCheckMutation,
    FaceCheckMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<FaceCheckMutation, FaceCheckMutationVariables>(
    FaceCheckDocument,
    options,
  );
}
export type FaceCheckMutationHookResult = ReturnType<
  typeof useFaceCheckMutation
>;
export type FaceCheckMutationResult = Apollo.MutationResult<FaceCheckMutation>;
export type FaceCheckMutationOptions = Apollo.BaseMutationOptions<
  FaceCheckMutation,
  FaceCheckMutationVariables
>;
