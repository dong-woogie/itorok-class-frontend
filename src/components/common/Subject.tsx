import React from 'react'

interface SubjectProps {
  text: string
  required?: boolean
  descriptions?: string[]
}

function Subject({ text, required, descriptions }: SubjectProps) {
  return (
    <div className="">
      <h4 className="text-lg py-2 font-bold text-gray-800">
        {text}
        {required && <span className="ml-2 text-rose-400">*</span>}
      </h4>
      {descriptions &&
        descriptions.map((description) => (
          <p key={description} className="text-sm text-gray-400 font-extralight">
            - {description}
          </p>
        ))}
    </div>
  )
}

export default Subject
