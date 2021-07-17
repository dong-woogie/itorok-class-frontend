import React from 'react'
import { HomeIcon, SearchIcon, BellIcon, UserIcon, ChatIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 px-4 py-2 border-t-2 w-full">
      <div className="flex justify-between">
        <HomeIcon className="h-8 w-8 text-gray-400" />
        <SearchIcon className="h-8 w-8 text-gray-400" />
        <ChatIcon className="h-8 w-8 text-gray-400" />
        <BellIcon className="h-8 w-8 text-gray-400" />
        <Link to="/login">
          <UserIcon className="h-8 w-8 text-gray-400" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
