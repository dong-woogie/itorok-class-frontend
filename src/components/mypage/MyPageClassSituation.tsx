import { useHistory } from 'react-router'
import React, { useCallback } from 'react'
import Button from '../common/Button'

interface MyPageClassSituationProps {
  classCount?: number | null
}

function MyPageClassSituation({ classCount }: MyPageClassSituationProps) {
  const history = useHistory()
  const onClickCreateClassBtn = useCallback(() => {
    history.push('/createclass')
  }, [])
  return (
    <div className="mt-10 border border-gray-200 shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold my-2">운영중인 클래스</h2>
      <h3 className="text-center text-gray-500 font-medium">{classCount || 0}개</h3>
      <div className="mt-4">
        <Button text="클래스 생성하기" size="sm" type="button" onClick={onClickCreateClassBtn} />
      </div>
    </div>
  )
}

export default MyPageClassSituation
