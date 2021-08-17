import React, { FormEvent, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelect } from '../../modules'
import { closeAddLinkPopover } from '../../modules/common'
import Button from '../common/Button'

function AddLinkPopover() {
  const addLinkPopover = useTypedSelect((state) => state.common.addLinkPopover)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const onClose = () => {
    dispatch(closeAddLinkPopover())
  }

  const onClickWrapper = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  useEffect(() => {
    if (!addLinkPopover || !inputRef.current) return
    inputRef.current.focus()
  }, [addLinkPopover])

  if (!addLinkPopover) return null
  const { position, onComplete } = addLinkPopover

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    onComplete(inputRef.current?.value || '')
    onClose()
  }

  return (
    <div onClick={onClickWrapper} className="fixed w-full h-full top-0 left-0 flex z-50">
      <div
        className="relative w-80 h-28 rounded-md border shadow"
        style={{
          ...position,
        }}
      >
        <form onSubmit={onSubmit} className="w-full h-full bg-white flex flex-col justify-center p-4">
          <h4 className="my-2 font-medium">링크등록</h4>
          <div className="flex justify-between">
            <div className="flex-1 pr-4">
              <input
                ref={inputRef}
                placeholder="URL을 입력하세요."
                className="focus:outline-none border-b-2 w-full py-2"
              />
            </div>
            <div className="flex items-center w-16">
              <Button text="확인" size="xs" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddLinkPopover
