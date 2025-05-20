import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserRegisterMutationVariables = Types.Exact<{
  input: Types.UserRegisterInput;
}>;

export type UserRegisterMutation = {
  __typename?: "Mutation";
  userRegister: string;
};

export const UserRegisterDocument = gql`
  mutation UserRegister($input: userRegisterInput!) {
    userRegister(input: $input)
  }
`;
export type UserRegisterMutationFn = Apollo.MutationFunction<
  UserRegisterMutation,
  UserRegisterMutationVariables
>;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserRegisterMutation,
    UserRegisterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UserRegisterMutation,
    UserRegisterMutationVariables
  >(UserRegisterDocument, options);
}
export type UserRegisterMutationHookResult = ReturnType<
  typeof useUserRegisterMutation
>;
export type UserRegisterMutationResult =
  Apollo.MutationResult<UserRegisterMutation>;
export type UserRegisterMutationOptions = Apollo.BaseMutationOptions<
  UserRegisterMutation,
  UserRegisterMutationVariables
>;
