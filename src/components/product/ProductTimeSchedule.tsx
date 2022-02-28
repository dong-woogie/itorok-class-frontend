import React from 'react'
import { getProductSchedulesQuery_getProductSchedules_scheduleTimes } from '../../__generated__/getProductSchedulesQuery'

interface ProductTimeScheduleProps {
  scheduleData: getProductSchedulesQuery_getProductSchedules_scheduleTimes
}

function ProductTimeSchedule({ scheduleData }: ProductTimeScheduleProps) {
  const date = new Date(scheduleData.date)
  const endDate = new Date(date)

  endDate.setHours(
    date.getHours() + scheduleData.learningTime.hour,
    date.getMinutes() + scheduleData.learningTime.minute,
  )

  const renderTime = (date: Date) => {
    const hour = date.getHours()
    const minute = date.getMinutes()

    const renderHour = hour < 10 ? `0${hour}` : hour
    const renderMinute = minute < 10 ? `0${minute}` : minute

    return `${renderHour}:${renderMinute}`
  }

  return (
    <div className="flex-shrink-0 p-4 border rounded-md flex flex-col justify-center items-center cursor-pointer">
      <div className="text-xs text-blue-500">모집중</div>
      <div className="font-light text-sm">
        {renderTime(date)} ~ {renderTime(endDate)}
      </div>
      <div className="font-light text-xs">
        {scheduleData.applyPerson} / {scheduleData.maxPerson} 명
      </div>
      <div className="font-light text-xs mt-1">(최소 {scheduleData.minPerson}명)</div>
    </div>
  )
}

export default ProductTimeSchedule
