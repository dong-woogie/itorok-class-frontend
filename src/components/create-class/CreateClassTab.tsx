import React from 'react'

interface CreateClassTabProps {
  currentPage: 'basic' | 'introduce' | 'curriculum' | 'schedule' | 'etc'
}

function CreateClassTab({ currentPage }: CreateClassTabProps) {
  const highlightTab = (highlight: boolean) => {
    if (highlight) return `border-b-2 border-rose-500 text-rose-500 font-bold`
    return 'border-b-2'
  }

  return (
    <div className="pt-2 w-full text-lg text-gray-400 grid grid-cols-4">
      <div className={`text-center py-2 ${highlightTab(currentPage === 'basic')}`}>기본정보</div>
      <div className={`text-center py-2 ${highlightTab(currentPage === 'introduce')}`}>상세소개</div>
      <div className={`text-center py-2 ${highlightTab(currentPage === 'curriculum')}`}>커리큘럼</div>
      <div className={`text-center py-2 ${highlightTab(currentPage === 'schedule')}`}>일정 및 가격</div>
    </div>
  )
}

export default CreateClassTab
