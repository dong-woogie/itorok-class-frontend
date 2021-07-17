import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export function createApolloClient() {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include',
    }),
    cache: new InMemoryCache({}).restore((window as any).__APOLLO_STATE__),
  })
  return client
}
