import React from 'react'

interface MyPageMenuWrapProps {
  children: React.ReactNode
}

function MyPageMenuWrap({ children }: MyPageMenuWrapProps) {
  return <ul className="mt-12">{children}</ul>
}

export default MyPageMenuWrap
