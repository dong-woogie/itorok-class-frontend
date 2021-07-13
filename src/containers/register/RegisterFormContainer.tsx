import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import RegisterForm, { ProfileType } from '../../components/register/RegisterForm'
import { getSocialProfile, SocialProfileResponse, socialRegister } from '../../lib/api/auth'

function RegisterFormContainer() {
  const [socialProfile, setSocialProfile] = useState<SocialProfileResponse | null>(null)
  const [error, setError] = useState()
  const history = useHistory()

  const onLoadGetSocialProfile = async () => {
    try {
      const profile = await getSocialProfile()
      setSocialProfile(profile)
    } catch {
      history.push('/login')
    }
  }

  useEffect(() => {
    onLoadGetSocialProfile()
  }, [])

  const onSubmit = async (profile: ProfileType) => {
    const responseData = await socialRegister(profile)
    if (responseData.ok) return history.push('/')
    return setError(responseData.error)
  }

  return (
    <div className="flex mt-28 flex-col mx-10">
      <h2 className="text-2xl font-semibold">회원가입하기</h2>
      <h4 className="text-base text-gray-400 my-2">회원정보를 입력해주세요.</h4>
      {socialProfile && (
        <RegisterForm
          onSubmit={onSubmit}
          defaultValues={{
            username: socialProfile?.usrename || '',
            displayName: socialProfile?.displayName || '',
            shortBio: socialProfile?.shortBio || '',
          }}
          error={error}
        />
      )}
    </div>
  )
}

export default RegisterFormContainer
