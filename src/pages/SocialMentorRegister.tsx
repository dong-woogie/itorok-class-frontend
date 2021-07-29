import React from 'react'
import { Helmet } from 'react-helmet-async'
import AddressDialog from '../components/common/dialog/AddressDialog'
import Header from '../components/common/Header'
import MentorRegisterFormContainer from '../containers/register/MentorRegisterFormContainer'

function SocialMentorRegister() {
  return (
    <div className="base-wrap flex flex-col">
      <Helmet>멘토 회원가입</Helmet>
      <Header />
      <MentorRegisterFormContainer />
      <AddressDialog />
    </div>
  )
}

export default SocialMentorRegister
