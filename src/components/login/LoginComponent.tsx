import React from 'react'
import { socialLoginUrl } from '../../lib'
import { UserRole } from '../../__generated__/globalTypes'

interface LoginComponentProps {
  role?: UserRole
}

function LoginComponent({ role }: LoginComponentProps) {
  return (
    <div className="px-4">
      <h1 className="py-20 text-center font-bold text-4xl tracking-widest italic">로그인</h1>
      <div className="pt-20 grid gap-4">
        <div className="flex justify-center items-center bg-kakao text-white py-2 rounded-md">
          <a href={socialLoginUrl.kakao(role || UserRole.client)}>KaKao로 로그인하기</a>
        </div>
        <div className="flex justify-center items-center bg-facebook text-white py-2 rounded-md">
          Facebook 로그인하기
        </div>
        <div className="flex justify-center items-center bg-emerald-400 text-white py-2 rounded-md">
          Google로 로그인하기
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
