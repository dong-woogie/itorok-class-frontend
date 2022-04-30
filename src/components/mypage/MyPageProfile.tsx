import React from 'react'
import { ChevronRight } from 'react-feather'
import { UserRole } from '../../__generated__/globalTypes'

interface MyPageProfileProps {
  thumbnail?: string
  displayName?: string
  username?: string
  role?: UserRole
}

function MyPageProfile({ thumbnail, displayName, username, role }: MyPageProfileProps) {
  const roleText = {
    client: '고객',
    mentor: '멘토',
    manager: '매니저',
    admin: '관리자',
  }
  return (
    <div className="mt-6 flex">
      <div className="w-16 h-16">
        <img src={thumbnail} alt="thumbnail" className="rounded-full" />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <div className="text-lg font-semibold">
          {displayName} {role && roleText[role]}님
        </div>
        <div className="text-gray-400 text-sm">{username}</div>
      </div>
      <div className="ml-auto flex items-center">
        <ChevronRight className="w-6 h-6 text-gray-300" />
      </div>
    </div>
  )
}

export default MyPageProfile
