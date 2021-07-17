import React from 'react'
import { Route, Switch } from 'react-router'
import loadable from '@loadable/component'
import { Helmet } from 'react-helmet-async'
import Favicon from './image/favicon_32x32.ico'
import './styles/styles.css'

const HomePage = loadable(() => import('./pages/Home'))
const LoginPage = loadable(() => import('./pages/Login'))
const SocialRegisterPage = loadable(() => import('./pages/SocialRegister'))
const SocialLoginPage = loadable(() => import('./pages/SocialLogin'))

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>itorok class</title>
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/social/login" component={SocialLoginPage} />
        <Route path="/social/register" component={SocialRegisterPage} exact />
      </Switch>
    </div>
  )
}

export default App
