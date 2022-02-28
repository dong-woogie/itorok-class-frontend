import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'
import serveStatic from 'serve-static'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { FilledContext } from 'react-helmet-async'
import { createStore } from 'redux'
import rootReducer from './modules'
import { htmlTemplate } from './server/html'
import { getAccessToken } from './lib/api'
import { authLink, errorLink, httpLink } from './lib/apollo/link'
import { setUser } from './modules/user'
import RenderJsx from './server/RenderJsx'

process.env.IS_SSR = 'enabled'

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

  const jsx = extractor.collectChunks(RenderJsx({ helmetContext, store, client, req }))

  try {
    await getDataFromTree(jsx)
  } catch {}

  const sheet = new ServerStyleSheet()
  const apolloState = client.extract()

  const userStateKey = Object.keys(apolloState).find((state) => state.includes('User'))
  if (userStateKey) {
    // @ts-ignore
    store.dispatch(setUser(apolloState[userStateKey]))
  }
  const root = extractor.collectChunks(RenderJsx({ helmetContext, store, client, req }))
  const content = renderToString(sheet.collectStyles(root))
  const cssString = await extractor.getCssString()

  const html = htmlTemplate({
    extractor,
    content,
    reduxState: store.getState(),
    apolloState,
    styleTags: sheet.getStyleTags(),
    helmet: helmetContext.helmet,
    cssString,
  })

  res.status(200).send(html)
})

app.listen(PORT, () => console.log(`start server >> http://localhost:${PORT}`))
