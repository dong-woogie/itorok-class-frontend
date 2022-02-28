import React from 'react'
import { getProductSchedulesQuery_getProductSchedules_scheduleTimes } from '../../__generated__/getProductSchedulesQuery'
import HorizontalSlide from '../common/HorizontalSlide'
import ProductTimeSchedule from './ProductTimeSchedule'
import SkeletonTimeSchedule from './SkeletonTimeSchedule'

interface ProductTimeSchedulesProps {
  scheduleTimes: getProductSchedulesQuery_getProductSchedules_scheduleTimes[]
  loading?: boolean
}

function ProductTimeSchedules({ loading, scheduleTimes }: ProductTimeSchedulesProps) {
  return (
    <div className="p-4">
      <HorizontalSlide className="space-x-4">
        {loading && Array.from({ length: 4 }).map((_, index) => <SkeletonTimeSchedule key={index} />)}
        {scheduleTimes.map((scheduleData) => (
          <ProductTimeSchedule scheduleData={scheduleData} key={scheduleData.date} />
        ))}
      </HorizontalSlide>
    </div>
  )
}

export default ProductTimeSchedules
