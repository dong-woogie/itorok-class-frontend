import { ApolloClient, InMemoryCache } from '@apollo/client'
import { splitLink } from './link'

export function createApolloClient(accessToken?: string, cookie?: string) {
  const isServer = typeof window === 'undefined'
  const cache = new InMemoryCache({})
  if (!isServer) {
    cache.restore((window as any).__APOLLO_STATE__)
  }
  const client = new ApolloClient({
    ssrMode: isServer,
    link: splitLink(accessToken, cookie),
    cache,
  })

  return client
}
