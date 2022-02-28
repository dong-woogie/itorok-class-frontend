import React from 'react'

interface DialogTemplateProps {
  onClose: Function
  children: React.ReactChild
}

function DialogTemplate({ onClose, children }: DialogTemplateProps) {
  const onClickBlock = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }
  return (
    <div
      className="fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
      onClick={onClickBlock}
    >
      {children}
    </div>
  )
}

export default DialogTemplate
