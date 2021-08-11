import React from 'react'
import Editorpanes from '../components/write/Editorpanes'
import MarkdownEditor from '../components/write/MarkdownEditor'

function WritePage() {
  return (
    <div className="w-full h-full">
      <Editorpanes left={<MarkdownEditor />} right="right" />
    </div>
  )
}

export default WritePage
