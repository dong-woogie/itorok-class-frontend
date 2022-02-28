import React from 'react'

interface EditorpanesProps {
  left?: React.ReactNode
  right?: React.ReactNode
}

function Editorpanes({ left, right }: EditorpanesProps) {
  return (
    <div className="w-full h-full flex">
      <div className="min-w-0 flex-1 ">{left}</div>
      <div className="min-w-0 flex-1 bg-gray-50 hidden xl:block">{right}</div>
    </div>
  )
}

export default Editorpanes
