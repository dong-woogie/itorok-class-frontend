import React from 'react'
import MarkdownPreview from '../../components/write/MarkdownPreview'
import { useTypedSelect } from '../../modules'

function MarkdownPreviewContainer() {
  const { markdown } = useTypedSelect((state) => state.write)
  return <MarkdownPreview markdown={markdown} />
}

export default MarkdownPreviewContainer
