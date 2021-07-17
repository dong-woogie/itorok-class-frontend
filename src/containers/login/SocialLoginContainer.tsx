import { useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import SocialLoginComponent from '../../components/login/SocialLoginComponent'
import { LOGIN_WITH_SOCIAL } from '../../lib/graphql'
import { SocialProvider } from '../../__generated__/globalTypes'
import { loginWithSocialMutation, loginWithSocialMutationVariables } from '../../__generated__/loginWithSocialMutation'

interface SocialLoginContainerProps {
  code: string
  state: SocialProvider
}

function SocialLoginContainer({ code, state }: SocialLoginContainerProps) {
  const history = useHistory()
  const onCompleted = ({ loginWithSocial }: loginWithSocialMutation) => {
    if (loginWithSocial.ok) return history.push('/')
    if (loginWithSocial.error) return history.push('/social/register')
    return history.push('/login')
  }

  const [socialLogin, { loading, error }] = useMutation<loginWithSocialMutation, loginWithSocialMutationVariables>(
    LOGIN_WITH_SOCIAL,
    { onCompleted },
  )

  useEffect(() => {
    socialLogin({
      variables: {
        input: { code, state },
      },
    })
  }, [])
  return <SocialLoginComponent loading={loading} error={error} />
}

export default SocialLoginContainer
