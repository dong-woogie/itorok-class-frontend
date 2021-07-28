import React, { ChangeEventHandler, forwardRef, useCallback, useState } from 'react'

interface InputProps {
  label?: string
  name: string
  placeholder?: string
  onChange?: ChangeEventHandler
  error?: string
}

const Input = forwardRef((inputProps: InputProps, ref: any) => {
  const { label, name, onChange, placeholder, error, ...rest } = inputProps
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  return (
    <div className="py-2 text-base font-semibold">
      <label
        htmlFor={name}
        className={`
        font-semibold
        ${error && 'text-rose-400'}
        ${focus ? 'text-sky-400' : 'text-gray-800'}`}
      >
        {label}
      </label>
      <input
        {...rest}
        name={name}
        className={`w-full pt-1 pb-2 border-b-2 outline-none tracking-wider placeholder-gray-300 ${
          error && 'border-rose-400'
        } ${focus ? 'border-sky-400' : 'border-gray-300'}`}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
      {error && <p className="mt-1 text-sm text-rose-400">{error}</p>}
    </div>
  )
})

export default Input
