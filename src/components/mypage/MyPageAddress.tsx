import React from 'react'
import Button from '../common/Button'

interface MyPageAddressProps {
  address?: string | null
  detailAddress?: string | null
}

function MyPageAddress({ address, detailAddress }: MyPageAddressProps) {
  return (
    <div className="mt-10 border border-gray-200 shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold py-2">공방 주소</h2>
      <h4 className="text-gray-500 font-medium">{`${address} ${detailAddress}`}</h4>
      <div className="mt-4">
        <Button text="공방 주소변경하기" size="sm" />
      </div>
    </div>
  )
}

export default MyPageAddress
