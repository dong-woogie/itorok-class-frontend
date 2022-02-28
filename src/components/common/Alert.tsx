import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelect } from '../../modules'
import { closeAlert } from '../../modules/common'
import ButtonComponent from './ButtonComponent'

function Alert() {
  const alertMessage = useTypedSelect((state) => state.common.alert)
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(closeAlert())
  }

  if (alertMessage === null) return null
  return (
    <div className="fixed left-0 top-0 w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white w-96 h-48 shadow-deep border border-gray-200 rounded-md py-4 px-8 flex flex-col">
          <div className="pb-4 text-center text-lg font-medium">알림</div>
          <div className="flex-1 text-gray-800">{alertMessage}</div>
          <div className="flex justify-end">
            <ButtonComponent size="sm" onClick={onClose}>
              확인
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
