import { InMemoryCache, createHttpLink, ApolloClient } from "@apollo/client";
import fetch from "node-fetch";

export function createApolloClient() {
  const cache = new InMemoryCache();
  const link = createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetch: fetch as any,
    headers: {},
  });
  const isNode = window === undefined;

  if (!isNode) {
    cache.restore(JSON.parse((window as any).__APOLLO_STATE__));
  }
  const client = new ApolloClient({
    ssrMode: isNode,
    link,
    cache,
  });

  return client;
}
