import React from 'react'
import { getProductQuery_getProduct_product_schedules } from '../../__generated__/getProductQuery'
import HorizontalSlide from '../common/HorizontalSlide'
import ProductDateButton from './ProductDateButton'

interface ProductDatePickerProps {
  className?: string
  schedules: getProductQuery_getProduct_product_schedules[]
  selectedId: string
  onSelect: Function
}

function ProductDatePicker({ className, schedules, selectedId, onSelect }: ProductDatePickerProps) {
  return (
    <div className={`${className || ''}`}>
      <div className="">클래스 일정</div>
      <div className="py-4">
        <HorizontalSlide>
          {schedules.map((schedule) => (
            <ProductDateButton schedule={schedule} key={schedule.id} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </HorizontalSlide>
      </div>
    </div>
  )
}

export default ProductDatePicker
