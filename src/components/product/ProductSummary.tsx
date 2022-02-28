import React from 'react'
import { Clock, Slash, MapPin, Users } from 'react-feather'
import { TimeType } from '../../modules/create-class'

interface ProductSummaryProps {
  address: string
  learningTime?: TimeType
  minPerson: number
  maxPerson: number
  isParking: boolean
}

function ProductSummary({
  address,
  learningTime = { hour: 0, minute: 0 },
  minPerson,
  maxPerson,
  isParking = true,
}: ProductSummaryProps) {
  const summaryAddress = `${address.split('로')[0]}로`

  return (
    <div className="py-2 px-4">
      <div className="mb-2">클래스 정보 요약</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-md py-6 flex flex-col items-center justify-center">
          <MapPin className="w-6 h-6" />
          <div className="text-gray-800 font-light">{summaryAddress}</div>
        </div>
        <div className="border rounded-md py-6 flex flex-col items-center justify-center">
          <Clock className="w-6 h-6" />
          <div className="text-gray-800 font-light">
            총 {learningTime.hour}시간 {learningTime.minute}분
          </div>
        </div>
        <div className="border rounded-md py-4 flex flex-col items-center justify-center">
          <Users className="w-6 h-6" />
          <div className="text-gray-800 font-light">
            {minPerson} - {maxPerson}
          </div>
          <span className="text-xs text-rose-400">(최소인원 {minPerson})</span>
        </div>
        <div className="border rounded-md py-4 flex flex-col items-center justify-center">
          {isParking ? (
            <i className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center font-bold">P</i>
          ) : (
            <Slash className="w-6 h-6" />
          )}
          <div className="text-gray-800 font-light">{isParking ? '주차 가능' : '주차 금지'}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductSummary
