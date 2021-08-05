import React, { useState } from 'react'
import CreateBasicContainer from './CreateBasicContainer'
import Button from '../../components/common/Button'
import FixedWrap from '../../components/common/FixedWrap'

function CreateClassContainer() {
  const [page, setPage] = useState<number>(1)
  const onClickNextPage = () => {
    setPage(page + 1)
  }
  const onClickPreviousePage = () => {
    setPage(page - 1)
  }

  return (
    <div className="px-4 pt-4 pb-20">
      <h1 className="py-2 text-center text-xl font-semibold">클래스 등록하기</h1>

      {page === 1 && <CreateBasicContainer />}
      {page === 2 && <div />}
      {page === 3 && <div />}

      <FixedWrap>
        <div className="w-full flex">
          <div className="w-1/2">
            {page !== 1 && <Button text="이전" size="full" color="rose" onClick={onClickPreviousePage} />}
          </div>
          <div className="w-1/2">
            <Button text="다음" size="full" onClick={onClickNextPage} />
          </div>
        </div>
      </FixedWrap>
    </div>
  )
}

export default CreateClassContainer
