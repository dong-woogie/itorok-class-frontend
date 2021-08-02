import React, { forwardRef, useCallback, useState } from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
  name: string
  placeholder?: string
  error?: string
}

const Input = forwardRef((inputProps: InputProps, ref: any) => {
  const { label, name, onChange, placeholder, readOnly, error, ...rest } = inputProps
  const htmlProps = rest as any
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  const focusAndErrorBorderStyle = useCallback(() => {
    if (error) return 'border-rose-400'
    if (focus) return 'border-emerald-400'
    return 'border-gray-300'
  }, [error, focus])

  const focusAndErrorTextStyle = useCallback(() => {
    if (error) return 'text-rose-400'
    if (focus) return 'text-emerald-400'
    return 'text-gray-800'
  }, [error, focus])

  return (
    <div className="py-2 text-base font-semibold">
      <label
        htmlFor={name}
        className={`
        font-semibold
        ${focusAndErrorTextStyle()}`}
      >
        {label}
      </label>
      <input
        {...htmlProps}
        name={name}
        className={`w-full pt-1 pb-2 border-b-2 outline-none tracking-wider placeholder-gray-300 ${focusAndErrorBorderStyle()} ${
          readOnly && 'text-gray-400 bg-gray-100'
        }`}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        readOnly={readOnly}
        ref={ref}
      />
      {error && <p className="mt-1 text-sm text-rose-400">{error}</p>}
    </div>
  )
})

export default Input
