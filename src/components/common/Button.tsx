import React from 'react'

interface ButtonProps {
  text?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'full'
  canClick?: boolean
}

function Button({ text, onClick, canClick = true, size = 'medium', ...rest }: ButtonProps) {
  const buttonSize = {
    small: 'py-2 font-medium text-base rounded-md',
    medium: 'py-3 font-semibold text-lg rounded-md',
    full: 'font-medium text-base w-full py-3',
  }

  const isCanClickStyle = canClick
    ? 'bg-emerald-400 active:bg-emerald-600 hover:bg-emerald-500'
    : 'bg-gray-300 pointer-events-none'
  return (
    <button
      onClick={onClick}
      className={`${buttonSize[size]} w-full text-white outline-none focus:outline-none ${isCanClickStyle}`}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
