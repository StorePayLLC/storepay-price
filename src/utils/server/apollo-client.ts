import { ApolloClient, from as apf, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { i18n } from '@lingui/core';

const authLink = setContext((_, { headers }) => ({
  headers: { 'Accept-Language': i18n.locale, authorization: `Bearer ${process.env.JWT}`, ...headers },
}));

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: apf([authLink.concat(new HttpLink({ uri: `${process.env.NEXT_PUBLIC_HOST}/graphql` }))]),
    }),
);
