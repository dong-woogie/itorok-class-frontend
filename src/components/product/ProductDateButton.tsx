import React, { useCallback, useMemo } from 'react'
import { DaysLabel_ko, DaysType } from '../../lib/utils'
import { getProductQuery_getProduct_product_schedules } from '../../__generated__/getProductQuery'

interface ProductDateButtonProps {
  schedule: getProductQuery_getProduct_product_schedules
  selectedId: string
  onSelect: Function
}

function ProductDateButton({ schedule, selectedId, onSelect }: ProductDateButtonProps) {
  const date = new Date(schedule.date)
  const label = Object.keys(DaysType)[date.getDay()] as DaysType

  const holiDay = date.getDay() === 0 || date.getDay() === 6
  const isSelected = useMemo(() => schedule.id === selectedId, [selectedId])
  const handleClick = useCallback(() => {
    onSelect(schedule.id)
  }, [])
  return (
    <div
      className={`px-1 flex flex-col justify-center items-center active:opacity-50 ${holiDay ? 'text-rose-500' : ''}`}
      onClick={handleClick}
    >
      <div>{DaysLabel_ko[label]}</div>
      <div
        className={`w-10 h-10 flex items-center justify-center ${
          isSelected ? 'bg-rose-500 text-white rounded-full' : ''
        }`}
      >
        {date.getDate()}
      </div>
    </div>
  )
}

export default ProductDateButton
