import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type UserCreatePasswordMutationVariables = Types.Exact<{
  input: Types.UserPasswordCreateInput;
}>;

export type UserCreatePasswordMutation = {
  __typename?: "Mutation";
  userPasswordCreate?: string;
};

export const UserCreatePasswordDocument = gql`
  mutation UserCreatePassword($input: userPasswordCreateInput!) {
    userPasswordCreate(input: $input)
  }
`;
export type UserCreatePasswordMutationFn = Apollo.MutationFunction<
  UserCreatePasswordMutation,
  UserCreatePasswordMutationVariables
>;

/**
 * __useUserCreatePasswordMutation__
 *
 * To run a mutation, you first call `useUserCreatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreatePasswordMutation, { data, loading, error }] = useUserCreatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserCreatePasswordMutation,
    UserCreatePasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UserCreatePasswordMutation,
    UserCreatePasswordMutationVariables
  >(UserCreatePasswordDocument, options);
}
export type UserCreatePasswordMutationHookResult = ReturnType<
  typeof useUserCreatePasswordMutation
>;
export type UserCreatePasswordMutationResult =
  Apollo.MutationResult<UserCreatePasswordMutation>;
export type UserCreatePasswordMutationOptions = Apollo.BaseMutationOptions<
  UserCreatePasswordMutation,
  UserCreatePasswordMutationVariables
>;
