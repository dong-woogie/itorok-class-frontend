import { UserRole } from '../__generated__/globalTypes'

const socialLoginUrl = {
  kakao: (role: UserRole) =>
    `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code&state=${role}`,
}

export { socialLoginUrl }
