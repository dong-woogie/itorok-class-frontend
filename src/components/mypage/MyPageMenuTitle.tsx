import React from 'react'

interface MyPageMenuTitleProps {
  text: string
}

function MyPageMenuTitle({ text }: MyPageMenuTitleProps) {
  return <li className="text-lg font-bold mb-4">{text}</li>
}

export default MyPageMenuTitle
