import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import MarkdownEditor from '../../components/write/MarkdownEditor'
import api from '../../lib/api'
import { openAddLinkPopover, PositionType } from '../../modules/common'
import { changeMarkdown } from '../../modules/write'

function MarkdownEditorContainer() {
  const dispatch = useDispatch()
  const onChangeMarkdown = (markdown: string) => {
    dispatch(changeMarkdown(markdown))
  }
  const onUpload = async (e: ChangeEvent<HTMLInputElement>): Promise<string | null> => {
    const formData = new FormData()
    const file = e.target.files && e.target.files[0]

    if (!file) return null
    formData.append('file', file)
    const { data } = await api.post('/api/upload', formData)

    return data.image
  }
  const openLinkPopover = (position: PositionType, onComplete: Function) => {
    dispatch(
      openAddLinkPopover({
        position,
        onComplete,
      }),
    )
  }
  return <MarkdownEditor onUpload={onUpload} onChangeMarkdown={onChangeMarkdown} onOpenAddLink={openLinkPopover} />
}

export default MarkdownEditorContainer
