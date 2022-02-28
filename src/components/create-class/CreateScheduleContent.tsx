import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import moment from 'moment'
import NumberFormat from 'react-number-format'
import ButtonComponent from '../common/ButtonComponent'
import Input from '../common/Input'
import ButtonGroup from '../common/ButtonGroup'
import { DaysLabel_ko, DaysType } from '../../lib/utils'
import { TimeType } from '../../modules/create-class'
import ScheduleLog from './ScheduleLog'
import { DaysOfActiveInput } from '../../__generated__/globalTypes'

interface CreateScheduleContentProps {
  activeTime: TimeType
  schedules: DaysOfActiveInput
  price: number
  onAddSchedule: Function
  onChangeActiveTime: Function
  onChangePrice: Function
}

export interface SelectedDaysType {
  sun: boolean
  mon: boolean
  tue: boolean
  wed: boolean
  thu: boolean
  fri: boolean
  sat: boolean
}

const TimePickerWrapper = styled.div`
  .rc-time-picker-input {
    font-size: 0.875rem;
  }
`

function CreateScheduleContent({
  activeTime,
  schedules,
  price,
  onAddSchedule,
  onChangeActiveTime,
  onChangePrice,
}: CreateScheduleContentProps) {
  const now = moment()
  const [startTime, setStartTime] = useState(now)
  const [selectedDays, setSelectedDays] = useState<SelectedDaysType>({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  })

  const onClickDays = (e: any) => {
    const name = e.target.name as DaysType
    setSelectedDays({
      ...selectedDays,
      [name]: !selectedDays[name],
    })
  }

  const handleChangeActiveTime = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return
    onChangeActiveTime({
      ...activeTime,
      [e.target.name]: +e.target.value.replace(/\D/g, ''),
    })
  }

  const onAdd = () => {
    onAddSchedule({
      selectedDays,
      startTime: startTime.toISOString(),
    })
  }

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const resultPrice = +e.target.value.replace(/\D/g, '')
    onChangePrice(resultPrice)
  }

  const isDisableAddSchedule = () => {
    return !((activeTime.hour || activeTime.minute) && Object.values(selectedDays).some((days) => days))
  }

  return (
    <div className="mt-4">
      <div className="flex flex-wrap lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="w-full lg:flex-1 px-4 rounded-md">
          <div className="py-2">
            <h3>요일선택</h3>
            <ButtonGroup className="py-2">
              {Object.keys(DaysLabel_ko).map((days: string) => (
                <button
                  name={days}
                  className={`button ${selectedDays[days as DaysType] ? 'selected' : ''}`}
                  onClick={onClickDays}
                  key={days}
                >
                  {DaysLabel_ko[days as DaysType]}
                </button>
              ))}
            </ButtonGroup>
          </div>
          <div className="py-2">
            <h3>수업시작시간</h3>
            <TimePickerWrapper>
              <TimePicker
                showSecond={false}
                format="hh:mm a"
                defaultValue={now}
                onChange={setStartTime}
                value={startTime}
                className="w-full mt-2 text-xl"
              />
            </TimePickerWrapper>
          </div>
          <div className="py-2">
            <h3>수업소요시간</h3>
            <div className="w-full flex space-x-4">
              <div className="flex-1">
                <NumberFormat
                  customInput={Input}
                  className="text-sm"
                  placeholder="시간을 입력해주세요..."
                  suffix="시간"
                  isAllowed={({ value }) => {
                    return +value < 12 || value === ''
                  }}
                  name="hour"
                  onChange={handleChangeActiveTime}
                  value={activeTime.hour === 0 ? undefined : activeTime.hour}
                />
              </div>
              <div className="flex-1">
                <NumberFormat
                  customInput={Input}
                  className="text-sm"
                  placeholder="분을 입력해주세요..."
                  suffix="분"
                  name="minute"
                  isAllowed={({ value }) => {
                    return +value < 60
                  }}
                  onChange={handleChangeActiveTime}
                  value={activeTime.minute === 0 ? undefined : activeTime.minute}
                />
              </div>
            </div>
          </div>
          <div className="py-2">
            <ButtonComponent fullWidth size="sm" onClick={onAdd} disabled={isDisableAddSchedule()}>
              스케쥴 추가하기
            </ButtonComponent>
          </div>
        </div>
        <div className="w-full lg:flex-1 px-4 rounded-md">
          <ScheduleLog schedules={schedules} activeTime={activeTime} />
        </div>
      </div>

      <div className="mt-10 w-full">
        <NumberFormat
          customInput={Input}
          label="클래스 가격 입력하기"
          name="price"
          required
          placeholder="클래스 가격을 입력해주세요..."
          value={price === 0 ? undefined : price}
          onChange={handleChangePrice}
          suffix="원"
        />
      </div>
    </div>
  )
}

export default CreateScheduleContent
