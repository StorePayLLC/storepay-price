import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type TokenFragment = {
  __typename?: "Token";
  id: string;
  merchantId?: string;
  secretKey?: string;
  publicKey?: string;
  createdAt: any;
  updatedAt: any;
};

export const TokenFragmentDoc = gql`
  fragment token on Token {
    id
    merchantId
    secretKey
    publicKey
    createdAt
    updatedAt
  }
`;
