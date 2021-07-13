import api from '.'
import { ProfileType } from '../../components/register/RegisterForm'

export interface SocialProfileResponse {
  displayName: string
  exp: number
  iat: number
  provider: string
  socialId: string
  thumbnail: string
  shortBio: string
  usrename: string
}

export const getSocialProfile = async () => {
  const response = await api.get<SocialProfileResponse>('/social/profile')
  return response.data
}

export const socialRegister = async (form: ProfileType) => {
  const response = await api.post('/social/register', form)
  return response.data
}
