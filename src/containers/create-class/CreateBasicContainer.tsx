import React, { ChangeEvent } from 'react'
import NumberFormat from 'react-number-format'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import ButtonComponent from '../../components/common/ButtonComponent'
import ContentWrapper from '../../components/common/ContentWrapper'
import FilesInput from '../../components/common/FilesInput'
import Input from '../../components/common/Input'
import Subject from '../../components/common/Subject'
import Thumbnail from '../../components/common/Thumbnail'
import CreateClassFooter from '../../components/create-class/CreateClassFooter'
import api from '../../lib/api'
import { useCategories } from '../../lib/hooks/useCategories'
import { useTypedSelect } from '../../modules'
import { changeCurrentPage, temporaryClass } from '../../modules/create-class'
import { openAddressDialog, openDetailAddressDialog } from '../../modules/dialog'

function CreateBasicContainer() {
  const categories = useCategories()
  const user = useTypedSelect((state) => state.user.user)
  const dispatch = useDispatch()
  const {
    title,
    category: selectedCategory,
    thumbnail,
    photos,
    minPerson,
    maxPerson,
  } = useTypedSelect((state) => state.createClass)

  const onOpenDetailAddress = (address: string) => {
    dispatch(openDetailAddressDialog({ address }))
  }
  const onChangeAddress = (address: string) => {
    onOpenDetailAddress(address)
  }
  const onOpenAddress = () => {
    dispatch(openAddressDialog({ onComplete: onChangeAddress }))
  }
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(temporaryClass({ title: e.target.value }))
  }
  const onChangeCategory = (e: { label: string; value: string } | null) => {
    if (!e) return
    dispatch(temporaryClass({ category: e.value }))
  }
  const onChangeThumbnail = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()

    const file = e.target.files && e.target.files[0]
    if (!file) return

    formData.append('file', file)
    const { data } = await api.post('/api/upload', formData)

    dispatch(temporaryClass({ thumbnail: data.image }))
  }
  const onChangePhotos = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const files = e.target?.files

    if (!files) return
    Array.from(files).forEach((file) => formData.append('files', file))

    const { data } = await api.post('/api/uploads', formData)
    dispatch(temporaryClass({ photos: data.images }))
  }

  const onChangePersonNum = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return
    dispatch(
      temporaryClass({
        [e.target.name]: +e.target.value.slice(0, -1),
      }),
    )
  }

  const onClickNext = () => {
    dispatch(changeCurrentPage('introduce'))
  }
  const isDisabledNext = () => {
    return !(
      user?.address &&
      user.detailAddress &&
      title &&
      selectedCategory &&
      thumbnail &&
      photos.length >= 3 &&
      minPerson &&
      maxPerson
    )
  }

  return (
    <ContentWrapper className="pb-16">
      <div className="py-5">
        <Subject text="??????????????????" required />
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="category...."
          options={categories.map((category) => ({
            value: category.slug,
            label: category.name,
          }))}
          onChange={onChangeCategory}
        />
      </div>

      <div className="py-5">
        <Input
          name="title"
          label="????????? ????????? ??????????????????."
          description="??????????????? ??????????????? ?????????. ex) [??????]"
          placeholder="????????? ????????? ??????????????????."
          required
          onChange={onChangeTitle}
        />
      </div>

      <div className="py-5 flex space-x-4 sm:space-x-12">
        <div className="flex-1">
          <NumberFormat
            name="minPerson"
            customInput={Input}
            suffix="???"
            placeholder="??????????????? ??????????????????..."
            label="??????????????????"
            required
            value={minPerson === 0 ? undefined : minPerson}
            onChange={onChangePersonNum}
          />
        </div>
        <div className="flex-1">
          <NumberFormat
            name="maxPerson"
            customInput={Input}
            suffix="???"
            placeholder="??????????????? ??????????????????..."
            label="??????????????????"
            isAllowed={({ value }) => {
              return +value >= minPerson || value === ''
            }}
            required
            value={maxPerson === 0 ? undefined : maxPerson}
            onChange={onChangePersonNum}
          />
        </div>
      </div>

      <div className="py-5 flex">
        <div>
          <Subject text="????????????" required />
          <div>{`${user?.address} ${user?.detailAddress}`}</div>
        </div>
        <div className="flex items-end ml-4">
          <ButtonComponent size="sm" onClick={onOpenAddress}>
            ????????????
          </ButtonComponent>
        </div>
      </div>

      <div className="py-5">
        <Subject text="???????????? ??????????????????" required descriptions={['????????? ?????? 1?????? ??????????????????.']} />
        <div className="mt-5">
          <Thumbnail thumbnail={thumbnail || ''} onChange={onChangeThumbnail} />
        </div>
      </div>

      <div className="py-5">
        <Subject text="????????????????????????" required descriptions={['???????????? ?????? 3????????? ??????????????????.']} />
        <div className="mt-5">
          <FilesInput previews={photos} onChange={onChangePhotos} />
        </div>
      </div>

      <CreateClassFooter isDisabledNext={isDisabledNext()} onClickNext={onClickNext} isDisabledPrevious />
    </ContentWrapper>
  )
}

export default CreateBasicContainer
