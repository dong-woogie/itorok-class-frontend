import React, { useCallback } from 'react'
import { useHistory } from 'react-router'

function Header() {
  const history = useHistory()
  const onClickLogo = useCallback(() => {
    history.push('/')
  }, [])
  return (
    <div className="base-wrap">
      <div className="px-4 py-2 flex justify-between">
        <h1 onClick={onClickLogo} className="text-2xl text-gray-800 font-bold italic tracking-wider">
          ITOROK
        </h1>
        <div className="bg-emerald-400 px-4 flex items-center justify-center text-white font-semibold rounded-md">
          클래스 가입하기
        </div>
      </div>
    </div>
  )
}

export default Header
