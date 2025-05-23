import type * as Types from "../graphql";

import { gql } from "@apollo/client";
export type OfferFragment = {
  __typename?: "Offer";
  id: string;
  merchantId?: string;
  userId?: string;
  amount?: number;
  rate?: number;
  currency?: string;
  feePercent?: number;
  status?: Types.OfferStatus;
  number?: string;
  expiredAt?: any;
  confirmedAt?: any;
  rejectedAt?: any;
  description?: string;
  canceledAt?: any;
  externalId?: string;
  externalPayload?: any;
};

export const OfferFragmentDoc = gql`
  fragment offer on Offer {
    id
    merchantId
    userId
    amount
    rate
    currency
    feePercent
    status
    number
    expiredAt
    confirmedAt
    rejectedAt
    description
    canceledAt
    externalId
    externalPayload
  }
`;
