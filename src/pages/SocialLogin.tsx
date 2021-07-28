import React from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router'
import SocialLoginContainer from '../containers/login/SocialLoginContainer'
import { SocialProvider, UserRole } from '../__generated__/globalTypes'

function SocialLogin() {
  const location = useLocation()
  const { code, provider, role } = qs.parse(location.search)
  return <SocialLoginContainer code={code as string} provider={provider as SocialProvider} role={role as UserRole} />
}

export default SocialLogin
