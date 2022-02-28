import React from 'react'

interface ContentWrapperProps {
  children: React.ReactNode
  className?: string
}

function ContentWrapper({ className, children }: ContentWrapperProps) {
  return (
    <div className={`${className} min-h-0 flex-1 h-full px-4 text-sm sm:text-base none-scrollbar`}>
      <div className="overflow-y-scroll h-full">{children}</div>
    </div>
  )
}

export default ContentWrapper
