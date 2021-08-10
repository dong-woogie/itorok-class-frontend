import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import App from '../App'

function RenderJsx({ helmetContext, store, client, req }: { helmetContext: any; store: any; client: any; req: any }) {
  return (
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default RenderJsx
