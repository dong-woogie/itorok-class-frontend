import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelect } from '../../../modules'
import { closeModal } from '../../../modules/common'
import ButtonComponent from '../ButtonComponent'
import ModalBase from './ModalBase'

function ModalOkCancel() {
  const modal = useTypedSelect((state) => state.common.modal)
  const dispatch = useDispatch()
  const visible = useMemo(() => modal !== null, [modal])

  const onClose = () => dispatch(closeModal())
  const onConfirm = () => {
    modal?.onComplete()
    onClose()
  }
  return (
    <ModalBase visible={visible}>
      <div className="font-semibold text-xl">로그인이 필요합니다.</div>
      <div className="flex-1 flex items-center py-8 font-light">로그인 화면으로 이동하시겠습니까?</div>
      <div className="flex justify-end space-x-4">
        <ButtonComponent size="sm" color="gray" onClick={onClose}>
          취소
        </ButtonComponent>
        <ButtonComponent size="sm" color="rose" onClick={onConfirm}>
          확인
        </ButtonComponent>
      </div>
    </ModalBase>
  )
}

export default ModalOkCancel
