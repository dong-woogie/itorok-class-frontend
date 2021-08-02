import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import MentorRegisterForm from '../../components/register/MentorRegisterForm'
import RegisterFormWrap from '../../components/register/RegisterFormWrap'
import api from '../../lib/api'
import { splitLink } from '../../lib/apollo/link'
import { GET_SOCIAL_PROFILE, REGISTER_WITH_SOCIAL } from '../../lib/graphql'
import { setUser } from '../../modules/user'
import { GetSocialProfile } from '../../__generated__/GetSocialProfile'
import { RegisterWithSocialInput } from '../../__generated__/globalTypes'
import {
  registerWithSocialMutation,
  registerWithSocialMutationVariables,
} from '../../__generated__/registerWithSocialMutation'

function MentorRegisterFormContainer() {
  const { data: socialProfileData } = useQuery<GetSocialProfile>(GET_SOCIAL_PROFILE, { fetchPolicy: 'network-only' })
  const [error, setError] = useState<string>('')
  const history = useHistory()
  const dispatch = useDispatch()
  const client = useApolloClient()

  const onCompleted = ({ registerWithSocial }: registerWithSocialMutation) => {
    if (registerWithSocial.ok) {
      if (registerWithSocial.accessToken) client.setLink(splitLink(registerWithSocial.accessToken))
      if (registerWithSocial.user) dispatch(setUser(registerWithSocial.user))
      return history.push('/')
    }
    if (registerWithSocial.error) return setError(registerWithSocial.error)
    return history.push('/login')
  }

  const [registerWithSocial] = useMutation<registerWithSocialMutation, registerWithSocialMutationVariables>(
    REGISTER_WITH_SOCIAL,
    { onCompleted },
  )

  const sendCode = async (phoneNumber: string) => {
    const { data } = await api.post('/api/send-code', { phoneNumber })
    return data.ok
  }
  const verifyCode = async (body: { phoneNumber: string; code: string }) => {
    const { data } = await api.post('/api/verify-code', body)
    return data.ok
  }

  const onSubmit = (profile: RegisterWithSocialInput) => {
    if (!profile.address) return setError('주소를 입력해주세요.')
    return registerWithSocial({
      variables: { input: profile },
    })
  }

  return (
    <RegisterFormWrap title="멘토 회원가입" description="회원정보를 입력해주세요.">
      {socialProfileData && (
        <MentorRegisterForm
          defaultValues={{
            displayName: socialProfileData?.getSocialProfile?.profile?.displayName || '',
            username: socialProfileData?.getSocialProfile?.profile?.username || '',
            shortBio: socialProfileData?.getSocialProfile?.profile?.shortBio || '',
          }}
          sendCode={sendCode}
          verifyCode={verifyCode}
          onSubmit={onSubmit}
          error={error}
        />
      )}
    </RegisterFormWrap>
  )
}

export default MentorRegisterFormContainer
