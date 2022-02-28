import React, { MouseEventHandler } from 'react'
import { ArrowLeft } from 'react-feather'
import { useHistory } from 'react-router'
import { useTypedSelect } from '../../modules'
import ButtonComponent from '../common/ButtonComponent'

interface CreateClassFooterProps {
  onClickPrevious?: MouseEventHandler<HTMLButtonElement>
  onClickNext?: MouseEventHandler<HTMLButtonElement>
  isDisabledPrevious?: boolean
  isDisabledNext?: boolean
}

function CreateClassFooter({
  isDisabledNext,
  isDisabledPrevious,
  onClickNext,
  onClickPrevious,
}: CreateClassFooterProps) {
  const history = useHistory()
  const currentPage = useTypedSelect((state) => state.createClass.currentPage)
  const onOut = () => {
    history.push('/mypage')
  }

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 shadow-deep bg-white">
      <div className="w-screen px-4 sm:px-12 h-full mx-auto flex justify-between">
        <div className="flex items-center gap-5">
          <ButtonComponent color="white" onClick={onOut} size="sm">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 sm:mr-2" />
            <span className="hidden sm:block">나가기</span>
          </ButtonComponent>
        </div>
        <div className="flex items-center gap-5">
          <ButtonComponent disabled={isDisabledPrevious} onClick={onClickPrevious} size="sm">
            이전
          </ButtonComponent>
          <ButtonComponent disabled={isDisabledNext} onClick={onClickNext} size="sm">
            {currentPage === 'schedule' ? '생성하기' : '다음'}
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}

export default CreateClassFooter
