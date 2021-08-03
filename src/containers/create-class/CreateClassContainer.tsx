import { useQuery } from '@apollo/client'
import React from 'react'
import { ChangeEvent } from 'react'
import Select from 'react-select'
import Button from '../../components/common/Button'
import FileInput from '../../components/common/FileInput'
import FixedWrap from '../../components/common/FixedWrap'
import Input from '../../components/common/Input'
import { GET_POPULAR_CATEOGRIES } from '../../lib/graphql'
import { useFileInput } from '../../lib/hooks/useFileInput'
import { useTypedSelect } from '../../modules'
import { getPopularCategories } from '../../__generated__/getPopularCategories'

function CreateClassContainer() {
  const { data } = useQuery<getPopularCategories>(GET_POPULAR_CATEOGRIES)
  const user = useTypedSelect((state) => state.user.user)
  const { onChangeFileInput } = useFileInput()
  return (
    <div className="px-4 py-4">
      <h1 className="py-2 text-center text-xl font-semibold">클래스 등록하기</h1>
      <h2 className="text-lg font-medium">
        1. 클래스 기본정보 <span className="ml-auto text-base font-light text-emerald-400">1 / 4</span>
      </h2>

      <div className="py-5">
        <Input label="클래스 타이틀" placeholder="클래스 제목을 입력해주세요." required />
      </div>

      <div className="py-5">
        <div className="flex">
          <h3 className="py-2 font-semibold text-gray-800">카테고리 선택</h3>
          <span className="flex items-center text-xl mx-2 text-rose-400">*</span>
        </div>
        <Select
          className="basic-single"
          classNamePrefix="select"
          options={data?.getPopularCategories.map((category) => ({
            value: category.slug,
            label: `🤗 ${category.name}`,
          }))}
        />
      </div>

      <div className="py-5">
        <h3 className="py-2 font-semibold text-gray-800">공방 주소</h3>
        <h4 className="">
          현주소 - {user?.address} {user?.detailAddress}
        </h4>
        <div className="mt-4">
          <Button text="공방주소 변경하기" size="sm" />
        </div>
      </div>

      <div className="py-5">
        <h3 className="py-2 font-semibold text-gray-800">대표사진 등록하기</h3>
        <FileInput onChange={onChangeFileInput} />
      </div>

      <FixedWrap>
        <div className="w-full flex">
          <div className="w-1/2">
            <Button text="이전" size="full" color="rose" />
          </div>
          <div className="w-1/2">
            <Button text="다음" size="full" />
          </div>
        </div>
      </FixedWrap>
    </div>
  )
}

export default CreateClassContainer
