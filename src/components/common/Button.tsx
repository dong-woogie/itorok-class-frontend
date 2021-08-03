import React from 'react'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  text?: string
  size?: 'xs' | 'sm' | 'md' | 'full'
  canClick?: boolean
  color?: string
}

function Button({ text, canClick = true, size = 'md', color = 'emerald', ...rest }: ButtonProps) {
  const buttonSize = {
    xs: 'py-1 px-3 text-sm rounded-sm',
    sm: 'py-1.5 font-medium text-base rounded-md',
    md: 'py-3 font-semibold text-lg rounded-md',
    full: 'font-medium text-base w-full py-3',
  }
  const htmlProps = rest as any

  const bgColor = () => {
    return `bg-${color}-400 hover:bg-${color}-500 active:bg-${color}-600`
  }

  const isCanClickStyle = canClick ? bgColor() : 'bg-gray-300 pointer-events-none'
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
