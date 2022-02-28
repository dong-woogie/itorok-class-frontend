import React from 'react'
import AddLinkPopover from '../components/write/AddLinkPopover'
import Editorpanes from '../components/write/Editorpanes'
import MarkdownEditorContainer from '../containers/write/MarkdownEditorContainer'
import MarkdownPreviewContainer from '../containers/write/MarkdownPreviewContainer'

function WritePage() {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="py-8">우기부기</div>
      <div className="w-full flex-1 flex flex-col overflow-scroll">
        <Editorpanes left={<MarkdownEditorContainer />} right={<MarkdownPreviewContainer />} />
      </div>
      <AddLinkPopover />
    </div>
  )
}

export default WritePage
