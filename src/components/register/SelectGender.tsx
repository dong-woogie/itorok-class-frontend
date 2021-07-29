import React from 'react'
import { Gender } from '../../__generated__/globalTypes'

interface SelectGenderProps {
  gender: Gender
  onChange: (gender: Gender) => void
}

function SelectGender({ gender, onChange }: SelectGenderProps) {
  const seletedStyle = (selected: boolean) => {
    return selected ? 'bg-emerald-400 text-white' : 'hover:bg-emerald-50 active:bg-emerald-100 border border-gray-300'
  }
  return (
    <div className="py-2">
      <h4 className="font-semibold">성별</h4>
      <div className="grid grid-cols-2 gap-5 mt-1">
        <div
          className={`${seletedStyle(
            gender === Gender.male,
          )} flex justify-center items-center rounded-md sm:py-2 cursor-pointer`}
          onClick={() => onChange(Gender.male)}
        >
          <span>남성</span>
        </div>
        <div
          className={`${seletedStyle(
            gender === Gender.female,
          )} flex justify-center items-center rounded-md h-10 cursor-pointer`}
          onClick={() => onChange(Gender.female)}
        >
          여성
        </div>
      </div>
    </div>
  )
}

export default SelectGender
