import React from 'react'
import { DaysLabel_ko, DaysType } from '../../lib/utils'
import { TimeType } from '../../modules/create-class'
import { DaysOfActiveInput } from '../../__generated__/globalTypes'

import ClassTime from './ClassTime'

interface ScheduleLogProps {
  schedules: DaysOfActiveInput
  activeTime: TimeType
}

function ScheduleLog({ schedules, activeTime }: ScheduleLogProps) {
  const days = Object.keys(schedules)
  return (
    <div className="py-2">
      <div className="flex">
        <div className="w-10 text-center text-rose-500 font-bold text-lg">요일</div>
        <div className="flex-1 text-center text-rose-500 font-bold text-lg">수업시간</div>
      </div>
      {Object.values(schedules).map((times: string[], index) => (
        <div className="flex py-2" key={index}>
          <div className="text-lg w-10 text-center">{DaysLabel_ko[days[index] as DaysType]}</div>
          <div className="flex items-center px-4 overflow-scroll none-scrollbar">
            {times.map((startTime) => (
              <ClassTime startTime={startTime} activeTime={activeTime} key={startTime} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScheduleLog
