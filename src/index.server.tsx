import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { ChunkExtractor } from '@loadable/server'
import path from 'path'
import serveStatic from 'serve-static'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import fetch from 'node-fetch'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './modules'
import { htmlTemplate } from './server/html'

const app = express()
const PORT = 3000

const statsFile = path.join(__dirname, '../build/loadable-stats.json')

app.use(serveStatic(path.resolve('./build'), { index: false }))

app.get('*', async (req, res, next) => {
  const extractor = new ChunkExtractor({ statsFile, publicPath: '/' })
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
      fetch: fetch as any,
      headers: {
        cookie: req.headers.cookie || '',
      },
    }),
    cache: new InMemoryCache(),
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
  } catch (e) {}

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
