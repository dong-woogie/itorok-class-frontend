import React, { ChangeEventHandler, useCallback, useState } from 'react'

interface InputProps {
  label?: string
  name: string
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange: ChangeEventHandler
}

function Input(inputProps: InputProps) {
  const { label, name, onChange, placeholder, value, disabled } = inputProps
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  return (
    <div className="py-2">
      <label htmlFor={name} className={`font-semibold text-lg ${focus ? 'text-sky-400' : 'text-gray-800'}`}>
        {label}
        <input
          name={name}
          className={`w-full pt-3 pb-2 border-b-2 outline-none text-lg font-semibold tracking-wider placeholder-gray-300 ${
            focus ? 'border-sky-400' : 'border-gray-300'
          }`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default Input
