import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useUser } from '../../lib/hooks/useUser'

function Header() {
  const history = useHistory()
  const onClickLogo = useCallback(() => {
    history.push('/')
  }, [])
  const { data } = useUser()
  return (
    <div className="border-b">
      <div className="px-4 py-2 flex justify-between">
        <div />
        <h1 onClick={onClickLogo} className="text-2xl text-gray-800 font-bold font-serif tracking-wider cursor-pointer">
          ITOROK
        </h1>

        {data ? (
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full cursor-pointer">
              <img src={data?.getUserOnLoad.profile.thumbnail} alt="profile" className="w-full h-full rounded-full" />
            </div>
          </div>
        ) : (
          <div className="bg-emerald-400 px-4 flex items-center justify-center text-white font-semibold rounded-md">
            클래스 가입하기
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
