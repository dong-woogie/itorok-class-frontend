import React from 'react'
import Select from 'react-select'
import Button from '../../components/common/Button'
import FileInput from '../../components/common/FileInput'
import Input from '../../components/common/Input'
import { useCategories } from '../../lib/hooks/useCategories'
import { useFilesInput } from '../../lib/hooks/useFilesInput'
import { useTypedSelect } from '../../modules'

function CreateBasicContainer() {
  const categories = useCategories()
  const user = useTypedSelect((state) => state.user.user)
  const { files, onChangeFileInput } = useFilesInput()
  return (
    <div>
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
          options={categories.map((category) => ({
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
        <FileInput onChange={onChangeFileInput} previews={files} />
      </div>
    </div>
  )
}

export default CreateBasicContainer
