import React from 'react'
import Logo from '../image/favicon_32x32.ico'
export interface HeaderProps {
  isLogged: boolean
}

function Header() {
  return (
    <div className="base-wrap">
      <div className="px-4 py-2 flex justify-between">
        <h1 className=" text-2xl text-gray-800 font-light italic tracking-wider">ITOROK</h1>
        <div className="bg-emerald-400 px-4 flex items-center justify-center text-white font-semibold rounded-md ring-2 ring-rose-100">
          가입하기
        </div>
      </div>
    </div>
  )
}

export default Header
