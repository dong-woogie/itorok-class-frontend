import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { ChunkExtractor } from '@loadable/server'
import path from 'path'
import serveStatic from 'serve-static'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './modules'
import { htmlTemplate } from './server/html'
import { createApolloClient } from './lib/apollo'
import { getAccessToken } from './lib/api'
import fetch from 'node-fetch'
import { authLink, errorLink, httpLink } from './lib/apollo/link'

const app = express()
const PORT = 3000

const statsFile = path.join(__dirname, '../build/loadable-stats.json')

app.use(serveStatic(path.resolve('./build'), { index: false }))

app.get('*', async (req, res, next) => {
  const extractor = new ChunkExtractor({ statsFile, publicPath: '/' })
  const { accessToken } = await getAccessToken(req.headers.cookie)

  const client = new ApolloClient({
    ssrMode: true,
    link: errorLink.concat(authLink(accessToken, req.headers.cookie)).concat(httpLink(true)),
    cache: new InMemoryCache({}),
  })

  const helmetContext = {} as FilledContext
  const store = createStore(rootReducer)
  const reduxState = store.getState()
  const jsx = extractor.collectChunks(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    </HelmetProvider>,
  )

  try {
    await getDataFromTree(jsx)
  } catch {}

  const content = renderToString(jsx)
  const apolloState = client.extract()
  const html = htmlTemplate({
    extractor,
    content,
    reduxState,
    apolloState,
    helmet: helmetContext.helmet,
  })

  res.status(200).send(html)
})

app.listen(PORT, () => console.log(`start server >> http://localhost:${PORT}`))
