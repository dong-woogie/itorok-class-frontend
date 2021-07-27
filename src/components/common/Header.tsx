import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useLogout } from '../../lib/hooks/useLogout'
import { useTypedSelect } from '../../modules'

function Header() {
  const history = useHistory()
  const [profilePopover, setProfilePopover] = useState(false)
  const user = useTypedSelect((state) => state.user.user)
  const logout = useLogout()
  const onClickLogo = useCallback(() => {
    history.push('/login')
  }, [])

  const onFocus = useCallback(() => setProfilePopover(true), [])
  const onBlur = useCallback(() => setProfilePopover(false), [])

  const onClickLogoutButton = async () => {
    logout()
    onBlur()
  }

  return (
    <div className="border-b bg-white">
      <div className="px-4 py-2 flex justify-between">
        <h1 onClick={onClickLogo} className="text-2xl text-gray-800 font-bold font-serif tracking-wider cursor-pointer">
          ITOROK
        </h1>

        {user ? (
          <button className="relative flex items-center focus:outline-none" onFocus={onFocus} onBlur={onBlur}>
            <div className="h-8 w-8 rounded-full cursor-pointer">
              <img src={user?.profile?.thumbnail} alt="profile" className="w-full h-full rounded-full" />
            </div>

            {profilePopover && (
              <div className="absolute border border-gray-300 rounded-sm w-24 bg-white -right-1/3 top-full z-10 mt-1 shadow-2xl">
                <div className="flex items-center justify-center p-2 cursor-pointer" onClick={onClickLogoutButton}>
                  로그아웃
                </div>
              </div>
            )}
          </button>
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
