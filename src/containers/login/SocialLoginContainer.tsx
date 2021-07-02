import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import qs from 'query-string'
import SocialLoginComponent from '../../components/login/SocialLoginComponent'
import { LOGIN_WITH_SOCIAL } from '../../lib/graphql'
import { loginWithSocialMutation, loginWithSocialMutationVariables } from '../../__generated__/loginWithSocialMutation'
import userSlice from '../../modules/user'
import { SocialProvider } from '../../__generated__/globalTypes'

function SocialLoginContainer() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { code, provider } = qs.parse(location.search)
  const [error, setError] = useState('')

  function onCompleted({ loginWithSocial }: loginWithSocialMutation) {
    if (!loginWithSocial.ok) {
      if (!loginWithSocial.error?.includes('register')) return setError(loginWithSocial?.error || 'ERROR')
      dispatch({
        type: userSlice.actions.setTemporaryAccount,
        payload: loginWithSocial.data,
      })
      return history.push('/social/register')
    }
    // correct login
    return history.push('/')
  }
  const [loginWithSocial, { loading }] = useMutation<loginWithSocialMutation, loginWithSocialMutationVariables>(
    LOGIN_WITH_SOCIAL,
    { onCompleted },
  )

  useEffect(() => {
    loginWithSocial({
      variables: {
        input: { code: code as string, provider: provider as SocialProvider },
      },
    })
  }, [])

  return <SocialLoginComponent loading={loading} error={error} />
}

export default SocialLoginContainer
