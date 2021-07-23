import { createHttpLink, fromPromise, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import fetch from 'isomorphic-fetch'
import { ErrorMessage } from '../../__generated__/globalTypes'
import { getAccessToken } from '../api'

const API_URI = 'http://localhost:4000/graphql'
const WS_URI = 'ws://localhost:4000/graphql'

export const authLink = (accessToken?: string, cookie?: string) => {
  return setContext((_, previousContext) => ({
    headers: {
      ...previousContext.headers,
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      ...(cookie && { cookie }),
    },
  }))
}

export const httpLink = (isServer: boolean) =>
  createHttpLink({
    uri: API_URI,
    ...(isServer ? { fetch: fetch as any } : { credentials: 'include' }),
  })

// eslint-disable-next-line consistent-return
export const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line no-restricted-syntax
    for (const err of graphQLErrors) {
      if (err.message === ErrorMessage.EXPIRED_ACCESS_TOKEN || err.message === ErrorMessage.NOT_FOUND_ACCESS_TOKEN) {
        return fromPromise(getAccessToken())
          .filter((value) => Boolean(value))
          .flatMap(({ accessToken }) => {
            const oldHeaders = operation.getContext().headers
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${accessToken}`,
              },
            })
            return forward(operation)
          })
      }
    }
  }
})

const wsLink = (accessToken?: string, cookie?: string) =>
  new WebSocketLink({
    uri: WS_URI,
    options: {
      reconnect: true,
      connectionParams: {
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
        ...(cookie && { cookie }),
      },
    },
  })

export const splitLink = (accessToken?: string, cookie?: string) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink(accessToken, cookie),
    errorLink.concat(authLink(accessToken, cookie)).concat(httpLink(!!cookie)),
  )
