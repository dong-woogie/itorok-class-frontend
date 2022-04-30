import React from 'react'
import { ChevronRight, Icon } from 'react-feather'
import { Link } from 'react-router-dom'

interface MyPageMenuListProps {
  icon: Icon
  text: string
  href: string
}

function MyPageMenuList({ icon, text, href }: MyPageMenuListProps) {
  const PropIcon = icon
  return (
    <Link to={href}>
      <li className="ml-2 py-4 text-sm border-b text-gray-500 flex">
        <div className="mr-2">
          <PropIcon className="text-gray-400 w-6 h-6" />
        </div>
        <div className="flex items-center">{text}</div>
        <div className="ml-auto">
          <ChevronRight className="text-gray-300" />
        </div>
      </li>
    </Link>
  )
}

export default MyPageMenuList
