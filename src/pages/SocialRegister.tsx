import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/common/Header'
import RegisterFormContainer from '../containers/register/RegisterFormContainer'

function SocialRegister() {
  return (
    <div className="base-wrap">
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Header />
      <RegisterFormContainer />
    </div>
  )
}

export default SocialRegister
