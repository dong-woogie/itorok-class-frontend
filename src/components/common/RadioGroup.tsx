import React from 'react'

interface RadioGroupProps {
  selected: string
  name: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  radios: {
    label: string
    value: string
  }[]
}

function RadioGroup({ selected, name, onChange, radios }: RadioGroupProps) {
  return (
    <div className="">
      {radios.map((radio) => (
        <div className="" key={radio.value}>
          <label htmlFor={radio.value}>
            <input
              name={name}
              type="radio"
              className="focus:outline-none"
              onChange={onChange}
              checked={selected === radio.value}
              value={radio.value}
            />
            <span className="ml-2">{radio.label}</span>
          </label>
        </div>
      ))}
    </div>
  )
}

export default RadioGroup
