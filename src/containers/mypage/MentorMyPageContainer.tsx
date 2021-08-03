import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import Button from '../../components/common/Button'
import { useTypedSelect } from '../../modules'

function MentorMyPageContainer() {
  const user = useTypedSelect((state) => state.user.user)
  const history = useHistory()
  const onClickCreateClassBtn = useCallback(() => {
    history.push('/class/create')
  }, [])

  return (
    <div className="px-4">
      <h1 className="text-center text-xl font-semibold py-2">마이페이지</h1>

      <div className="mt-6 flex">
        <div className="w-16 h-16">
          <img src={user?.profile.thumbnail} alt="thumbnail" className="rounded-full" />
        </div>
        <div className="ml-5 flex flex-col justify-center">
          <div className="text-lg font-semibold">{user?.profile.displayName} 멘토님</div>
          <div className="text-gray-400 text-sm">{user?.username}</div>
        </div>
        <div className="ml-auto flex items-center">
          <ChevronRightIcon className="w-6 h-6 text-gray-300" />
        </div>
      </div>

      <div className="mt-10 border border-gray-200 shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold py-2">공방 주소</h2>
        <h4 className="text-gray-500 font-medium">{`${user?.address} ${user?.detailAddress}`}</h4>
        <div className="mt-4">
          <Button text="공방 주소변경하기" size="sm" />
        </div>
      </div>

      <div className="mt-10 border border-gray-200 shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold my-2">운영중인 클래스</h2>
        <h3 className="text-center text-gray-500 font-medium">0개</h3>
        <div className="mt-4">
          <Button text="클래스 생성하기" size="sm" type="button" onClick={onClickCreateClassBtn} />
        </div>
      </div>
    </div>
  )
}

export default MentorMyPageContainer
