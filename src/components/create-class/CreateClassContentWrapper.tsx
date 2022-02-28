import React from 'react'

interface CreateClassContentWrapperProps {
  children: React.ReactNode
}

function CreateClassContentWrapper({ children }: CreateClassContentWrapperProps) {
  return <div className="px-8 lg:px-0 flex-1 flex flex-col overflow-y-scroll">{children}</div>
}

export default CreateClassContentWrapper
