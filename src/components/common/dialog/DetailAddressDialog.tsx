import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useUpdateUser } from '../../../lib/hooks/useUpdateUser'
import { useTypedSelect } from '../../../modules'
import { closeDetailAddressDialog } from '../../../modules/dialog'
import ButtonComponent from '../ButtonComponent'
import Input from '../Input'
import DialogTemplate from './DialogTemplate'

function DetailAddressDialog() {
  const dispatch = useDispatch()
  const detailAddress = useTypedSelect((state) => state.dialog.detailAddressDialog)
  const detailAdressRef = useRef<HTMLInputElement>()
  const [updateUser] = useUpdateUser()
  const onClose = () => {
    dispatch(closeDetailAddressDialog())
  }
  const onComplete = () => {
    const address = detailAddress?.address
    const value = detailAdressRef.current?.value || ''
    updateUser({ variables: { input: { address, detailAddress: value } } })
    onClose()
  }

  if (detailAddress === null) return null
  return (
    <DialogTemplate onClose={onClose}>
      <div className="bg-white w-96 rounded p-4">
        <h3 className="py-2 text-lg font-bold text-center">상세주소 입력하기</h3>
        <h4 className="py-2 font-medium">{detailAddress.address}</h4>
        <Input name="detailAddress" label="상세주소" placeholder="상세주소를 입력해주세요..." ref={detailAdressRef} />
        <div className="w-full mt-2">
          <ButtonComponent fullWidth onClick={onComplete}>
            입력하기
          </ButtonComponent>
        </div>
      </div>
    </DialogTemplate>
  )
}

export default DetailAddressDialog
