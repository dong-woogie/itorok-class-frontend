import React from 'react'
import { useHistory } from 'react-router'
import Popover from '../components/Popover'
import { socialLoginUrl } from '../lib'

function Login() {
  const history = useHistory()
  const onClose = () => {
    history.push('/')
  }
  return (
    <Popover title="로그인" onClose={onClose}>
      <div className="px-4">
        <h1 className="py-20 text-center font-bold text-4xl tracking-widest italic">ITOROK</h1>
        <div className="pt-20 grid gap-4">
          <div className="flex justify-center items-center bg-kakao text-white py-2 rounded-md">
            <a href={socialLoginUrl.kakao}>KaKao로 로그인하기</a>
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
