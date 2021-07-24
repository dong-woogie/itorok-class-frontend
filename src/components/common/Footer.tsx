import React from 'react'
import { HomeIcon, SearchIcon, BellIcon, UserIcon, ChatIcon } from '@heroicons/react/solid'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const highlightColorToMatchPath = (pathname: string) => {
    return location.pathname === pathname
      ? 'text-gray-800 opacity-100 font-medium'
      : 'text-gray-400 opacity-70 font-extralight'
  }

  return (
    <div className="fixed w-full bottom-0 left-0">
      <div className="max-w-md mx-auto px-4 py-2 border-t flex justify-between">
        <Link to="/">
          <div className={`relative flex flex-col items-center ${highlightColorToMatchPath('/')}`}>
            <HomeIcon className="h-7 w-7" />
            <span className="text-xs">홈</span>
          </div>
        </Link>
        <div className="relative flex flex-col items-center">
          <SearchIcon className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">검색</span>
        </div>

        <div className="relative flex flex-col items-center">
          <ChatIcon className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">채팅</span>
        </div>

        <div className="relative flex flex-col items-center">
          <BellIcon className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">알림</span>
        </div>

        <div className="relative flex flex-col items-center">
          <UserIcon className={`h-7 w-7 ${highlightColorToMatchPath('/unknown')}`} />
          <span className="font-extralight text-xs">내정보</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
