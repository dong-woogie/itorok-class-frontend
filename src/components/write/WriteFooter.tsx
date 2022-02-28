import React from 'react'
import { ArrowLeft } from 'react-feather'

interface WriteFooterProps {}

function WriteFooter(props: WriteFooterProps) {
  return (
    <div className="h-16 fixed bottom-0 w-full md:w-1/2 flex justify-between items-center px-4 shadow-deep">
      <div className="ml-2 pl-3 pr-6 text-gray-700 text-lg hover:bg-gray-100">
        <button className="focus:outline-none h-10 rounded flex items-center justify-center">
          <ArrowLeft className="w-6 h-6 mr-2" />
          나가기
        </button>
      </div>
      <div className="flex py-4 gap-4">
        <button className="focus:outline-none text-gray-700 text-lg bg-gray-200 hover:bg-gray-100 w-24 h-10 rounded font-semibold">
          임시저장
        </button>
        <button className="focus:outline-none text-white text-lg bg-emerald-400 hover:bg-emerald-300 w-24 h-10 rounded font-semibold">
          출간하기
        </button>
      </div>
    </div>
  )
}

export default WriteFooter
