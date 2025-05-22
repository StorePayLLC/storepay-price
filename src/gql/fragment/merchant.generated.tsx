import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type MerchantFragment = {
  __typename?: "Merchant";
  id: string;
  applicantId?: string;
  name?: string;
  registrationNumber?: string;
  rejectedAt?: any;
  status?: Types.MerchantStatus;
  createdAt: any;
  updatedAt: any;
  preferences?: any;
  email?: string;
  phone?: string;
  country?: string;
  verifiedAt?: any;
  state?: Types.State;
  currency?: string;
  description?: string;
  address?: string;
  number?: string;
};

export const MerchantFragmentDoc = gql`
  fragment merchant on Merchant {
    id
    applicantId
    name
    registrationNumber
    rejectedAt
    status
    createdAt
    updatedAt
    preferences
    email
    phone
    country
    verifiedAt
    state
    currency
    description
    address
    number
  }
`;
