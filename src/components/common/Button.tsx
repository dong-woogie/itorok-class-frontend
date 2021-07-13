import React from 'react'

interface ButtonProps {
  text?: string
  onClick?: () => void
  size?: 'small' | 'medium'
  canClick?: boolean
}

function Button({ text, onClick, canClick = true, size = 'medium', ...rest }: ButtonProps) {
  const buttonSize = {
    small: 'py-2 font-medium text-base',
    medium: 'py-3 font-semibold text-lg',
  }

  const isCanClickStyle = canClick
    ? 'bg-emerald-400 active:bg-emerald-600 hover:bg-emerald-500'
    : 'bg-gray-300 pointer-events-none'
  return (
    <button
      onClick={onClick}
      className={`${buttonSize[size]} w-full text-white rounded-md outline-none focus:outline-none ${isCanClickStyle}`}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
