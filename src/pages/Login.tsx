import React from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router'
import Header from '../components/common/Header'
import LoginComponent from '../components/login/LoginComponent'
import { UserRole } from '../__generated__/globalTypes'

function Login() {
  const location = useLocation()
  const { role } = qs.parse(location.search)
  return (
    <div className="base-wrap">
      <Header />
      <LoginComponent role={role as UserRole} />
    </div>
  )
}

export default Login
