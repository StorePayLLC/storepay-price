import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type MerchantUserFragment = {
  __typename?: "MerchantUser";
  id: string;
  merchantId?: string;
  role: Types.UserRole;
  status: Types.UserStatus;
  createdAt: any;
  updatedAt: any;
  userId?: string;
};

export const MerchantUserFragmentDoc = gql`
  fragment merchantUser on MerchantUser {
    id
    merchantId
    role
    status
    createdAt
    updatedAt
    userId
  }
`;
