import React from 'react'
import Popover from '../components/Popover'

function Login() {
  return (
    <Popover>
      <div className="px-4">
        <h1 className="py-20 text-center font-bold text-4xl tracking-widest italic">ITOROK</h1>

        <div className="pt-20 grid gap-4">
          <div className="flex justify-center items-center bg-kakao text-white py-2 rounded-md">
            <a
              href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`}
            >
              KaKao로 로그인하기
            </a>
          </div>
          <div className="flex justify-center items-center bg-facebook text-white py-2 rounded-md">
            Facebook 로그인하기
          </div>
          <div className="flex justify-center items-center bg-emerald-400 text-white py-2 rounded-md">
            Google로 로그인하기
          </div>
        </div>
      </div>
    </Popover>
  )
}

export default Login
