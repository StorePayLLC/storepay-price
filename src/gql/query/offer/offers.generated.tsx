import type * as Types from "../../graphql";

import { gql } from "@apollo/client";
import { OfferFragmentDoc } from "../../fragment/offer.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type OffersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.OfferFilter>;
  first?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  after?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type OffersQuery = {
  __typename?: "Query";
  offers: {
    __typename?: "OfferConnection";
    sum: number;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      endCursor?: string;
    };
    nodes: Array<{
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
    }>;
  };
};

export const OffersDocument = gql`
  query Offers($filter: OfferFilter, $first: Int, $after: String) {
    offers(filter: $filter, first: $first, after: $after) {
      sum(field: "amount")
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...offer
      }
    }
  }
  ${OfferFragmentDoc}
`;

/**
 * __useOffersQuery__
 *
 * To run a query within a React component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useOffersQuery(
  baseOptions?: Apollo.QueryHookOptions<OffersQuery, OffersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OffersQuery, OffersQueryVariables>(
    OffersDocument,
    options,
  );
}
export function useOffersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OffersQuery, OffersQueryVariables>(
    OffersDocument,
    options,
  );
}
export function useOffersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<OffersQuery, OffersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<OffersQuery, OffersQueryVariables>(
    OffersDocument,
    options,
  );
}
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersLazyQueryHookResult = ReturnType<typeof useOffersLazyQuery>;
export type OffersSuspenseQueryHookResult = ReturnType<
  typeof useOffersSuspenseQuery
>;
export type OffersQueryResult = Apollo.QueryResult<
  OffersQuery,
  OffersQueryVariables
>;
