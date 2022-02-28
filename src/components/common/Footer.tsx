import React from 'react'
import { Home, Search, Bell, User, MessageCircle } from 'react-feather'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTypedSelect } from '../../modules'
import { openModal } from '../../modules/common'

function Footer() {
  const location = useLocation()
  const user = useTypedSelect((state) => state.user.user)
  const history = useHistory()
  const dispatch = useDispatch()
  const highlightColorToMatchPath = (pathname: string) => {
    return location.pathname === pathname
      ? 'text-gray-800 opacity-100 font-medium'
      : 'text-gray-400 opacity-70 font-extralight'
  }

  const handleClickUserIcon = () => {
    if (user === null) {
      return dispatch(
        openModal({
          title: '로그인이 필요합니다.',
          body: '로그인 페이지로 이동하시겠습니까?',
          onComplete: () => history.push('/login'),
        }),
      )
    }

    return history.push('/mypage')
  }

  return (
    <div className="fixed w-full bottom-0 left-0">
      <div className="max-w-md mx-auto px-4 py-2 border-t flex justify-between bg-white">
        <Link to="/">
          <div className={`relative flex flex-col items-center ${highlightColorToMatchPath('/')}`}>
            <Home className="h-7 w-7" />
            <span className="text-xs">홈</span>
          </div>
        </Link>
        <div className="relative flex flex-col items-center">
          <Search className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">검색</span>
        </div>

        <div className="relative flex flex-col items-center">
          <MessageCircle className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">채팅</span>
        </div>

        <div className="relative flex flex-col items-center">
          <Bell className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">알림</span>
        </div>

        <div className="relative flex flex-col items-center">
          <div onClick={handleClickUserIcon} className="cursor-pointer">
            <User className={`h-7 w-7 ${highlightColorToMatchPath('/mypage')}`} />
            <span className="font-extralight text-xs">내정보</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
