import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import RegisterForm, { ProfileType } from '../../components/register/RegisterForm'
import { splitLink } from '../../lib/apollo/link'
import { GET_SOCIAL_PROFILE, REGISTER_WITH_SOCIAL } from '../../lib/graphql'
import { setUser } from '../../modules/user'
import { GetSocialProfile } from '../../__generated__/GetSocialProfile'
import {
  registerWithSocialMutation,
  registerWithSocialMutationVariables,
} from '../../__generated__/registerWithSocialMutation'

function RegisterFormContainer() {
  const history = useHistory()
  const [error, setError] = useState('')
  const { data } = useQuery<GetSocialProfile>(GET_SOCIAL_PROFILE, { fetchPolicy: 'network-only' })
  const client = useApolloClient()
  const dispatch = useDispatch()
  const onCompleted = ({ registerWithSocial }: registerWithSocialMutation) => {
    if (registerWithSocial.ok) {
      client.setLink(splitLink(registerWithSocial?.accessToken || ''))
      if (registerWithSocial.user) dispatch(setUser(registerWithSocial.user))
      return history.push('/')
    }
    if (registerWithSocial.error) {
      return setError(registerWithSocial?.error || '')
    }
    return history.push('/login')
  }

  const [registerWithSocial] = useMutation<registerWithSocialMutation, registerWithSocialMutationVariables>(
    REGISTER_WITH_SOCIAL,
    { onCompleted, fetchPolicy: 'no-cache' },
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
            username: data?.getSocialProfile.profile.username || '',
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
