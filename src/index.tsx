import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { loadableReady } from '@loadable/component'
import ReactDom from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createApolloClient } from './apollo'
import App from './App'
import rootReducer from './modules'

const store = createStore(rootReducer, (window as any).__REDUX_STATE__, composeWithDevTools())

if (process.env.NODE_ENV === 'production') {
  loadableReady(() =>
    ReactDom.hydrate(
      <HelmetProvider>
        <Provider store={store}>
          <ApolloProvider client={createApolloClient()}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ApolloProvider>
        </Provider>
      </HelmetProvider>,
      document.getElementById('root'),
    ),
  )
} else {
  ReactDom.render(
    <HelmetProvider>
      <Provider store={store}>
        <ApolloProvider client={createApolloClient()}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </HelmetProvider>,
    document.getElementById('root'),
  )
}
