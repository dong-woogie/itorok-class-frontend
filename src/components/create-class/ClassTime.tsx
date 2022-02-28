import React from 'react'
import { TimeType } from '../../modules/create-class'

interface ClassTimeProps {
  activeTime: TimeType
  startTime: string
}

function ClassTime({ startTime, activeTime }: ClassTimeProps) {
  const startDate = new Date(startTime)
  const endDate = new Date(startDate)
  endDate.setHours(startDate.getHours() + activeTime.hour, startDate.getMinutes() + activeTime.minute)

  const renderTime = (date: Date) => {
    const hour = date.getHours()
    const minute = date.getMinutes()

    const renderHour = hour < 10 ? `0${hour}` : hour
    const renderMinute = minute < 10 ? `0${minute}` : minute
    return `${renderHour}:${renderMinute}`
  }

  return (
    <div className="mr-4 tracking-wider flex-shrink-0">
      {renderTime(startDate)} ~ {renderTime(endDate)}
    </div>
  )
}

export default ClassTime
