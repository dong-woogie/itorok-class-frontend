import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'
import { gql, useMutation } from '@apollo/client'
import { loginWithSocialMutation, loginWithSocialMutationVariables } from '../__generated__/loginWithSocialMutation'

const MUTATION = gql`
  mutation loginWithSocialMutation($input: LoginWithSocialInput!) {
    loginWithSocial(input: $input) {
      ok
      error
      data {
        socialId
        thumbnail
        displayName
      }
    }
  }
`

function SocialLogin() {
  const location = useLocation()
  const history = useHistory()
  const { code, provider } = qs.parse(location.search)
  const [error, setError] = useState('')

  function onCompleted({ loginWithSocial }: loginWithSocialMutation) {
    if (!loginWithSocial.ok) {
      if (!loginWithSocial.error?.includes('register')) return setError(loginWithSocial?.error || 'ERROR')
      return history.push('/social/register')
    }
    // correct login
    return history.push('/')
  }

  const [loginWithSocial, { loading }] = useMutation<loginWithSocialMutation, loginWithSocialMutationVariables>(
    MUTATION,
    {
      onCompleted,
    },
  )

  useEffect(() => {
    loginWithSocial({
      variables: {
        input: { code: code as string, provider: provider as string },
      },
    })
  }, [])

  return (
    <div className="flex h-screen justify-center">
      {loading && (
        <div className="mt-40 flex flex-col items-center">
          <h2 className="font-semibold text-2xl tracking-widest italic">Logging...</h2>
          <h3 className="mt-10 text-5xl">🤸‍♂️</h3>
        </div>
      )}
      {error && (
        <div className="mt-40 flex flex-col items-center">
          <div className="font-semibold text-2xl tracking-widest italic">{error}</div>
          <div className="mt-10 text-5xl">⛹️‍♀️</div>
          <Link to="/login" className="mt-10">
            <h3 className="text-rose-500 underline ">로그인페이지로 이동</h3>
          </Link>
        </div>
      )}
    </div>
  )
}

export default SocialLogin
