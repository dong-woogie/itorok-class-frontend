import React from 'react'
import { Route, Switch } from 'react-router'
import loadable from '@loadable/component'
import { Helmet } from 'react-helmet-async'
import Favicon from './image/favicon_32x32.ico'
import './styles/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'

const HomePage = loadable(() => import('./pages/Home'))

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>itorok class</title>
        <link rel="shortcut icon" href={Favicon}></link>
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
