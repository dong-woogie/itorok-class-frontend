import { useApolloClient, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import SocialLoginComponent from '../../components/login/SocialLoginComponent'
import { splitLink } from '../../lib/apollo/link'
import { LOGIN_WITH_SOCIAL } from '../../lib/graphql'
import { ErrorMessage, SocialProvider } from '../../__generated__/globalTypes'
import { loginWithSocialMutation, loginWithSocialMutationVariables } from '../../__generated__/loginWithSocialMutation'

interface SocialLoginContainerProps {
  code: string
  state: SocialProvider
}

function SocialLoginContainer({ code, state }: SocialLoginContainerProps) {
  const history = useHistory()
  const client = useApolloClient()
  const onCompleted = ({ loginWithSocial }: loginWithSocialMutation) => {
    if (loginWithSocial.ok) {
      client.setLink(splitLink(loginWithSocial?.accessToken || ''))
      return history.push('/')
    }
    if (loginWithSocial.error === ErrorMessage.NOT_REGISTER) return history.push('/social/register')
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
