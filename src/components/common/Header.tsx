import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useLogout } from '../../lib/hooks/useLogout'
import { useTypedSelect } from '../../modules'
import { UserRole } from '../../__generated__/globalTypes'

import ButtonComponent from './ButtonComponent'

function Header() {
  const [profilePopover, setProfilePopover] = useState(false)
  const history = useHistory()
  const user = useTypedSelect((state) => state.user.user)
  const logout = useLogout()
  const onFocus = useCallback(() => setProfilePopover(true), [])
  const onBlur = useCallback(() => setProfilePopover(false), [])

  const onClickLogoutButton = () => {
    logout()
    onBlur()
    history.push('/')
  }

  const onRouteMyPage = () => {
    history.push('/mypage')
    onBlur()
  }
  const onRouteMentorLogin = () => {
    history.push(`/login?role=${UserRole.mentor}`)
  }

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="border-b bg-white max-w-screen-sm mx-auto">
        <div className="px-4 py-2 flex justify-between items-center h-12">
          <h1 className="text-2xl text-gray-800 font-bold font-serif tracking-wider cursor-pointer">
            <Link to="/">ITOROK</Link>
          </h1>

          {user ? (
            <button className="relative flex items-center focus:outline-none" onFocus={onFocus} onBlur={onBlur}>
              <div className="h-8 w-8 rounded-full cursor-pointer">
                <img src={user?.profile?.thumbnail} alt="profile" className="w-full h-full rounded-full" />
              </div>

              {profilePopover && (
                <div className="absolute border border-gray-300 rounded-sm w-32 bg-white -right-1/3 top-full z-10 mt-1 shadow-2xl">
                  <div className="flex justify-center p-2 cursor-pointer" onClick={onRouteMyPage}>
                    마이페이지
                  </div>
                  <div className="flex justify-center p-2 cursor-pointer" onClick={onClickLogoutButton}>
                    로그아웃
                  </div>
                </div>
              )}
            </button>
          ) : (
            <ButtonComponent size="sm" onClick={onRouteMentorLogin}>
              멘토로그인
            </ButtonComponent>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
