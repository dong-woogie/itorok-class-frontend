import React from 'react'
import { useDispatch } from 'react-redux'
import CreateClassFooter from '../../components/create-class/CreateClassFooter'
import Editorpanes from '../../components/write/Editorpanes'
import MarkdownEditor from '../../components/write/MarkdownEditor'
import MarkdownPreview from '../../components/write/MarkdownPreview'
import { useTypedSelect } from '../../modules'
import { changeCurrentPage, changeIntroduceMarkdown } from '../../modules/create-class'

function CreateIntroduceContainer() {
  const dispatch = useDispatch()
  const introduceMarkdown = useTypedSelect((state) => state.createClass.introduceMarkdown)

  const onChangeMarkdown = (markdown: string) => {
    dispatch(changeIntroduceMarkdown(markdown))
  }
  const onClickPrevious = () => {
    dispatch(changeCurrentPage('basic'))
  }
  const onClickNext = () => {
    dispatch(changeCurrentPage('curriculum'))
  }
  const isDisabledNext = () => {
    return !introduceMarkdown
  }

  return (
    <div className="overflow-scroll flex-1">
      <Editorpanes
        left={
          <MarkdownEditor
            markdown={introduceMarkdown}
            placeholder="클래스를 소개해주세요..."
            onChangeMarkdown={onChangeMarkdown}
          />
        }
        right={<MarkdownPreview markdown={introduceMarkdown} />}
      />

      <CreateClassFooter
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
        isDisabledNext={isDisabledNext()}
      />
    </div>
  )
}

export default CreateIntroduceContainer
