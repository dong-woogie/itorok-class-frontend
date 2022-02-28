import React from 'react'

interface IconBlockProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function IconBlock({ children, className, ...rest }: IconBlockProps) {
  const htmlProps = rest as any
  return (
    <div
      className={`${className} w-10 h-10 hover:bg-black rounded-full hover:bg-opacity-10 active:bg-black active:bg-opacity-20 flex items-center justify-center cursor-pointer`}
      {...htmlProps}
    >
      {children}
    </div>
  )
}

export default IconBlock
