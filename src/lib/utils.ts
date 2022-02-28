import { TimeType } from '../modules/create-class'

export enum DaysType {
  sun = 'sun',
  mon = 'mon',
  tue = 'tue',
  wed = 'wed',
  thu = 'thu',
  fri = 'fri',
  sat = 'sat',
}

export const DaysLabel_ko = {
  sun: '일',
  mon: '월',
  tue: '화',
  wed: '수',
  thu: '목',
  fri: '금',
  sat: '토',
}

export const isBetween = ({ start, end }: { start: TimeType; end: TimeType }, target: TimeType) => {
  const date = new Date()
  date.setHours(start.hour)
  date.setMinutes(start.minute)
  const startTime = date.getTime()

  date.setHours(end.hour)
  date.setMinutes(end.minute)
  const endTime = date.getTime()

  date.setHours(target.hour)
  date.setMinutes(target.minute)
  const targetTime = date.getTime()

  return targetTime >= startTime && targetTime <= endTime
}

export const getEndTime = (startTime: TimeType, activeTime: TimeType) => {
  return {
    hour: startTime.hour + activeTime.hour + Math.floor((startTime.minute + activeTime.minute) / 60),
    minute: (startTime.minute + activeTime.minute) % 60,
  }
}

export const toCommas = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const isSSR = () => {
  return process.env.IS_SSR === 'enabled'
}
