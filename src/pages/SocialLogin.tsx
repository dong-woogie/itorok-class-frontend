import React from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router'
import SocialLoginContainer from '../containers/login/SocialLoginContainer'
import { SocialProvider } from '../__generated__/globalTypes'

function SocialLogin() {
  const location = useLocation()
  const search = qs.parse(location.search)

  return <SocialLoginContainer code={search.code as string} state={search.state as SocialProvider} />
}

export default SocialLogin
