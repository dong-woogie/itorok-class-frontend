import React from 'react'
import { Route, Switch } from 'react-router'
import loadable from '@loadable/component'
import { Helmet } from 'react-helmet-async'
import Favicon from './image/favicon_32x32.ico'
import './styles/styles.css'
import { usePathControl } from './lib/hooks/usePathControl'
import { useLoad } from './lib/hooks/useLoad'

const HomePage = loadable(() => import('./pages/Home'))
const LoginPage = loadable(() => import('./pages/Login'))
const SocialRegisterPage = loadable(() => import('./pages/SocialRegister'))
const SocialLoginPage = loadable(() => import('./pages/SocialLogin'))
const SocialMentorRegisterPage = loadable(() => import('./pages/SocialMentorRegister'))

function App() {
  useLoad()
  usePathControl()
  return (
    <div className="h-screen">
      <Helmet>
        <title>itorok class</title>
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={MentorMyPage} exact />
        <Route path="/class/create" component={CreateClassPage} exact />
        <Route path="/social/login" component={SocialLoginPage} exact />
        <Route path="/social/client/register" component={SocialRegisterPage} exact />
        <Route path="/social/mentor/register" component={SocialMentorRegisterPage} exact />
      </Switch>
    </div>
  )
}

export default App
