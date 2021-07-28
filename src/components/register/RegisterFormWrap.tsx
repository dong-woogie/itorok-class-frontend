import React from 'react'

interface RegisterFormWrapProps {
  title: string
  description: string
  children: React.ReactNode
}

function RegisterFormWrap({ title, description, children }: RegisterFormWrapProps) {
  return (
    <div className="flex flex-col mx-10 mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h4 className="text-base text-gray-400 my-2">{description}</h4>
      {children}
    </div>
  )
}

export default RegisterFormWrap
