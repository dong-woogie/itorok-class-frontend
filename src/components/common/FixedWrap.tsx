import React from 'react'

interface FixedWrapProps {
  children: React.ReactNode
}

function FixedWrap({ children }: FixedWrapProps) {
  return (
    <div className="fixed left-0 bottom-0 w-full">
      <div className="max-w-screen-sm mx-auto  bg-white">{children}</div>
    </div>
  )
}

export default FixedWrap
