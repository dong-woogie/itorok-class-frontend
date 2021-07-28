import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../lib/hooks/useLogout'
import { useTypedSelect } from '../../modules'
import { UserRole } from '../../__generated__/globalTypes'

function Header() {
  const [profilePopover, setProfilePopover] = useState(false)
  const user = useTypedSelect((state) => state.user.user)
  const logout = useLogout()
  const onFocus = useCallback(() => setProfilePopover(true), [])
  const onBlur = useCallback(() => setProfilePopover(false), [])

  const onClickLogoutButton = async () => {
    logout()
    onBlur()
  }

  return (
    <div className="border-b bg-white">
      <div className="px-4 py-2 flex justify-between">
        <h1 className="text-2xl text-gray-800 font-bold font-serif tracking-wider cursor-pointer">
          <Link to="/">ITOROK</Link>
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
          <div className="bg-emerald-400 px-4 flex items-center justify-center text-white font-semibold rounded-md text-sm">
            <Link to={`/login?role=${UserRole.mentor}`}>멘토 로그인</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
