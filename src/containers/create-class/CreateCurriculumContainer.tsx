import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import CreateClassFooter from '../../components/create-class/CreateClassFooter'
import Editorpanes from '../../components/write/Editorpanes'
import MarkdownEditor from '../../components/write/MarkdownEditor'
import MarkdownPreview from '../../components/write/MarkdownPreview'
import { useTypedSelect } from '../../modules'
import { changeCurrentPage, changeCurriculumMarkdown } from '../../modules/create-class'

function CreateCurriculumContainer() {
  const dispatch = useDispatch()
  const curriculumMarkdown = useTypedSelect((state) => state.createClass.curriculumMarkdown)

  const onChangeMarkdown = (markdown: string) => {
    dispatch(changeCurriculumMarkdown(markdown))
  }
  const onClickNext = () => {
    dispatch(changeCurrentPage('schedule'))
  }
  const onClickPrevious = () => {
    dispatch(changeCurrentPage('introduce'))
  }

  const isDisabledNext = useCallback(() => {
    return !curriculumMarkdown
  }, [curriculumMarkdown])

  return (
    <div className="h-full overflow-y-hidden">
      <Editorpanes
        left={
          <MarkdownEditor
            markdown={curriculumMarkdown}
            placeholder="상세커리큘럼을 입력해주세요..."
            onChangeMarkdown={onChangeMarkdown}
          />
        }
        right={<MarkdownPreview markdown={curriculumMarkdown} />}
      />
      <CreateClassFooter
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        isDisabledNext={isDisabledNext()}
      />
    </div>
  )
}

export default CreateCurriculumContainer
