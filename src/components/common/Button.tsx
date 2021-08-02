import React from 'react'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  text?: string
  size?: 'xs' | 'sm' | 'md' | 'full'
  canClick?: boolean
}

function Button({ text, canClick = true, size = 'md', ...rest }: ButtonProps) {
  const buttonSize = {
    xs: 'py-1 px-3 text-sm rounded-sm',
    sm: 'py-2 font-medium text-base rounded-md',
    md: 'py-3 font-semibold text-lg rounded-md',
    full: 'font-medium text-base w-full py-3',
  }
  const htmlProps = rest as any

  const isCanClickStyle = canClick
    ? 'bg-emerald-400 active:bg-emerald-600 hover:bg-emerald-500'
    : 'bg-gray-300 pointer-events-none'
  return (
    <button
      className={`${buttonSize[size]} w-full text-white outline-none focus:outline-none ${isCanClickStyle}`}
      {...htmlProps}
    >
      {text}
    </button>
  )
}

export default Button
