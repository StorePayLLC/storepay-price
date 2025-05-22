'use client';

import React from 'react';
import { ApolloLink, from as ApolloFrom, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition, relayStylePagination } from '@apollo/client/utilities';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support';
import { i18n } from '@lingui/core';
import { notification } from 'antd';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { createClient } from 'graphql-ws';
import Cookie from 'js-cookie';

import { userTokenField } from '@/config/constants';

// import { WebSocketLink } from '@apollo/client/link/ws';
// import { DefinitionNode } from 'graphql/language';
import { AssertionFLow, CredentialsFlow, oauth, OAuth2Token, OwnerFlow } from '../oauth2';

const credentialsFlow = new CredentialsFlow(oauth);
const ownerFlow = new OwnerFlow(oauth);
const assertionFlow = new AssertionFLow(oauth);

let token: OAuth2Token | null = null;
const CLIENT_TOKEN_KEY = 'cs.t';

function parseToken(json?: string | null) {
  if (!json) return;
  try {
    const parsed = JSON.parse(json);
    token = oauth.createToken({
      access_token: parsed.accessToken,
      token_type: parsed.tokenType,
      refresh_token: parsed.refreshToken,
      expires: parsed.expires,
    });
  } catch (e) {
    /*ignore*/
  }
}
const tokenString = Cookie.get(userTokenField) || Cookie.get(CLIENT_TOKEN_KEY);

parseToken(tokenString);

function saveToken(newToken?: OAuth2Token) {
  if (!newToken) return;
  token = newToken;
  Cookie.set(
    typeof newToken.refreshToken === 'undefined' ? CLIENT_TOKEN_KEY : userTokenField,
    JSON.stringify({
      accessToken: newToken.accessToken,
      refreshToken: newToken.refreshToken,
      tokenType: newToken.tokenType,
      expires: newToken.expires,
    }),
  );
  return newToken;
}

async function rotateToken() {
  if (!token) return credentialsFlow.getToken().then(saveToken);
  if (!token.expired()) return token;
  if (token.refreshToken)
    return token
      .refresh()
      .then(saveToken)
      .catch((err) => {
        if (err === 'invalid refresh token') {
          Cookie.remove(userTokenField);
          window?.location?.reload();
        }
      });
  return credentialsFlow.getToken().then(saveToken);
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(graphQLErrors, 'graphQLErrors');
  if (graphQLErrors)
    graphQLErrors.forEach(({ message: msg }) => {
      notification.open({ message: msg, type: 'error', duration: 5 });
      // eslint-disable-next-line no-console
      console.error(`error: ${msg}`);
    });
  if (networkError) {
    // message.error(`[Network error]: ${networkError}`);
    // eslint-disable-next-line no-console
    console.warn(`Network error]: ${networkError}`);
  }
});

const authLink = setContext((_, { headers }) =>
  rotateToken()
    .then((t) => {
      return {
        headers: {
          ...headers,
          'Accept-Language': i18n.locale,
          authorization: `Bearer ${t?.accessToken}`,
        },
      };
    })
    .catch(),
);

function generateLinks() {
  const wsLink = new GraphQLWsLink(
    createClient({
      lazy: true,
      retryAttempts: 1,
      url: `${process.env.NEXT_PUBLIC_SUBSCRIPTION_HOST}/graphql`,
      connectionParams: () =>
        rotateToken().then((t) => {
          if (!t?.refreshToken) return {};
          return { accessToken: t.accessToken };
        }),
    }),
  );

  const httpLink = ApolloLink.split(
    (operation) => operation.getContext().upload,
    createUploadLink({
      uri: `${process.env.NEXT_PUBLIC_HOST}/graphql`,
    }) as unknown as ApolloLink,
    new HttpLink({ uri: `${process.env.NEXT_PUBLIC_HOST}/graphql` }) as ApolloLink,
  );

  const link = ApolloLink.split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  if (typeof window === 'undefined') {
    return ApolloFrom([new SSRMultipartLink({ stripDefer: true }), authLink.concat(link)]);
  }

  return ApolloFrom([errorLink, authLink.concat(link)]);
}

export let apolloClient: ApolloClient<NormalizedCacheObject>;

const rsp = relayStylePagination(['filter', 'sort']);

function makeClient() {
  apolloClient = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            jobLogs: rsp,
          },
        },
        Subscription: {
          fields: {
            jobUpdated: (rawVal: boolean) => rawVal ?? null,
          },
        },
      },
    }),
    link: generateLinks(),
  });

  return apolloClient;
}

export async function loginWithPassword(username: string, password: string) {
  const tkn = await ownerFlow.getToken(username, password);
  apolloClient.resetStore();
  return saveToken(tkn);
}

export async function loginWithAssertion(assertion: string, provider: string) {
  let tkn = await assertionFlow.getToken(assertion, provider);
  return saveToken(tkn);
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
