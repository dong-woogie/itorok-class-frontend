import React, { useEffect } from 'react'
import { X } from 'react-feather'
import DaumPostcode, { AddressData } from 'react-daum-postcode'
import { useDispatch } from 'react-redux'
import { useTypedSelect } from '../../../modules'
import { closeAddressDialog } from '../../../modules/dialog'

function AddressDialog() {
  const addressDialog = useTypedSelect((state) => state.dialog.addressDialog)
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(closeAddressDialog())
  }
  const onComplete = (data: AddressData) => {
    addressDialog?.onComplete(data.roadAddress)
    onClose()
  }

  useEffect(() => {
    return () => onClose()
  }, [])

  if (addressDialog === null) return null
  return (
    <div className="fixed left-0 top-0 bg-white w-full h-full z-50">
      <div className="max-w-screen-sm mx-auto h-full flex flex-col">
        <div className="relative py-3">
          <h2 className="text-center font-semibold">주소입력하기</h2>
          <div
            className="absolute top-0 right-0 p-3 cursor-pointer rounded-full hover:bg-emerald-50 active:bg-emerald-100"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <DaumPostcode onComplete={onComplete} height="100%" autoClose />
        </div>
      </div>
    </div>
  )
}

export default AddressDialog
