import React from 'react'
import { XIcon } from '@heroicons/react/outline'

interface PopoverProps {
  children: React.ReactElement
}

function Popover({ children }: PopoverProps) {
  return (
    <div className="fixed top-0 z-10 w-full min-h-screen">
      <div className="w-full flex justify-between items-center px-4 py-2 border-b-2">
        <div />
        <h3 className="text-lg">로그인</h3>
        <div>
          <XIcon className="w6 h-6" />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Popover
