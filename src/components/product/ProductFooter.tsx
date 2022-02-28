import React from 'react'
import { toCommas } from '../../lib/utils'
import ButtonComponent from '../common/ButtonComponent'

interface ProductFooterProps {
  price: number
}

function ProductFooter({ price }: ProductFooterProps) {
  return (
    <div className="fixed left-0 w-full bottom-0 z-10">
      <div className="w-full max-w-screen-sm mx-auto py-4 bg-white border-2 border-gray-100">
        <div className="px-4 flex justify-between items-center">
          <div className="flex items-end">
            <div className="text-xl font-semibold">{toCommas(price)}</div>
            <span className="ml-1 font-light">원</span>
          </div>
          <div className="w-1/3">
            <ButtonComponent fullWidth className="bg-rose-500 hover:bg-rose-400 active:bg-rose-300 text-base">
              신청하기
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFooter
