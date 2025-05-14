import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type UserFragment = {
  __typename?: "User";
  id: string;
  firstName?: string;
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
};

export const UserFragmentDoc = gql`
  fragment user on User {
    id
    firstName
    language
    email
    phone
    confirmedAt
    state
    status
    dob
    citizenIdNumber
    externalKycId
    gender
    language
  }
`;
