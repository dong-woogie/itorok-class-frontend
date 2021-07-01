import React from 'react'
import { XIcon } from '@heroicons/react/outline'

interface PopoverProps {
  children: React.ReactElement
  title: string
  onClose: () => void
}

function Popover({ children, title, onClose }: PopoverProps) {
  return (
    <div className="fixed top-0 z-10 w-full min-h-screen">
      <div className="w-full flex justify-between items-center px-4 py-2 border-b-2">
        <div />
        <h3 className="text-lg">{title}</h3>
        <div>
          <XIcon className="w6 h-6" onClick={onClose} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Popover
