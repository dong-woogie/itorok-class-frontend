import React from 'react'
import { isFullPageInCreateClassPage } from '../../lib'

interface CreateClassTemplateProps {
  children: React.ReactNode
  currentPage: 'basic' | 'introduce' | 'curriculum' | 'schedule' | 'etc'
}

function CreateClassTemplate({ children, currentPage }: CreateClassTemplateProps) {
  return (
    <div
      className={`h-full ${
        isFullPageInCreateClassPage(currentPage) ? 'w-screen' : 'max-w-screen-lg'
      } mx-auto flex flex-col overflow-hidden`}
    >
      {children}
    </div>
  )
}

export default CreateClassTemplate
