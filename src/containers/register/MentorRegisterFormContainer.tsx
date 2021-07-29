import React from 'react'
import MentorRegisterForm from '../../components/register/MentorRegisterForm'
import RegisterFormWrap from '../../components/register/RegisterFormWrap'

function MentorRegisterFormContainer() {
  return (
    <RegisterFormWrap title="멘토 회원가입" description="회원정보를 입력해주세요.">
      <MentorRegisterForm defaultValues={{}} />
    </RegisterFormWrap>
  )
}

export default MentorRegisterFormContainer
