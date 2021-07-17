import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import RegisterForm, { ProfileType } from '../../components/register/RegisterForm'
import { GET_SOCIAL_PROFILE, REGISTER_WITH_SOCIAL } from '../../lib/graphql'
import { GetSocialProfile } from '../../__generated__/GetSocialProfile'
import {
  registerWithSocialMutation,
  registerWithSocialMutationVariables,
} from '../../__generated__/registerWithSocialMutation'

function RegisterFormContainer() {
  const history = useHistory()
  const [error, setError] = useState('')
  const { data } = useQuery<GetSocialProfile>(GET_SOCIAL_PROFILE)

  const onCompleted = ({ registerWithSocial }: registerWithSocialMutation) => {
    if (registerWithSocial.ok) history.push('/')
    if (registerWithSocial.error) {
      setError(registerWithSocial?.error || '')
      return
    }
    history.push('/login')
  }

  const [registerWithSocial] = useMutation<registerWithSocialMutation, registerWithSocialMutationVariables>(
    REGISTER_WITH_SOCIAL,
    {
      onCompleted,
    },
  )

  const onSubmit = (profile: ProfileType) => {
    registerWithSocial({
      variables: { input: profile },
    })
  }

  return (
    <div className="flex mt-28 flex-col mx-10">
      <h2 className="text-2xl font-semibold">회원가입하기</h2>
      <h4 className="text-base text-gray-400 my-2">회원정보를 입력해주세요.</h4>
      {data?.getSocialProfile.profile && (
        <RegisterForm
          onSubmit={onSubmit}
          defaultValues={{
            username: data?.getSocialProfile.profile.usrename || '',
            displayName: data?.getSocialProfile.profile.displayName || '',
            shortBio: data?.getSocialProfile.profile.shortBio || '',
          }}
          error={error}
        />
      )}
    </div>
  )
}

export default RegisterFormContainer
