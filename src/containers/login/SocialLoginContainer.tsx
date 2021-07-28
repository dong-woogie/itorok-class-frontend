import { useApolloClient, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SocialLoginComponent from '../../components/login/SocialLoginComponent'
import { splitLink } from '../../lib/apollo/link'
import { LOGIN_WITH_SOCIAL } from '../../lib/graphql'
import { setUser } from '../../modules/user'
import { ErrorMessage, SocialProvider, UserRole } from '../../__generated__/globalTypes'
import { loginWithSocialMutation, loginWithSocialMutationVariables } from '../../__generated__/loginWithSocialMutation'

interface SocialLoginContainerProps {
  code: string
  provider: SocialProvider
  role: UserRole
}

function SocialLoginContainer({ code, provider, role }: SocialLoginContainerProps) {
  const history = useHistory()
  const client = useApolloClient()
  const dispatch = useDispatch()
  const onCompleted = ({ loginWithSocial }: loginWithSocialMutation) => {
    if (loginWithSocial.ok) {
      client.setLink(splitLink(loginWithSocial?.accessToken || ''))
      if (loginWithSocial.user) dispatch(setUser(loginWithSocial.user))
      return history.push('/')
    }
    if (loginWithSocial.error === ErrorMessage.NOT_REGISTER_MENTOR) return history.push('/social/mentor/register')
    if (loginWithSocial.error === ErrorMessage.NOT_REGISTER_CLIENT) return history.push('/social/client/register')
    return history.push('/login')
  }

  const [socialLogin, { loading, error }] = useMutation<loginWithSocialMutation, loginWithSocialMutationVariables>(
    LOGIN_WITH_SOCIAL,
    { onCompleted, fetchPolicy: 'no-cache' },
  )

  useEffect(() => {
    socialLogin({
      variables: {
        input: { code, provider, role },
      },
    })
  }, [])
  return <SocialLoginComponent loading={loading} error={error} />
}

export default SocialLoginContainer
