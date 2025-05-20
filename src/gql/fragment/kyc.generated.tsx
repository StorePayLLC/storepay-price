import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type KycFragment = {
  __typename?: "Kyc";
  id: string;
  userId?: string;
  status?: Types.KycStatus;
  expiresAt?: any;
  confirmedAt?: any;
  createdAt: any;
  updatedAt: any;
  preferences?: any;
};

export const KycFragmentDoc = gql`
  fragment kyc on Kyc {
    id
    userId
    status
    expiresAt
    confirmedAt
    createdAt
    updatedAt
    preferences
  }
`;
