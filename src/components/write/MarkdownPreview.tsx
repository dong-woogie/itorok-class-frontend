import React from 'react'
import ContentWrapper from '../common/ContentWrapper'
import MarkdownRender from './MarkdownRender'

interface MarkdownPreviewProps {
  markdown: string
}

function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  return (
    <ContentWrapper className="pb-16">
      <MarkdownRender markdown={markdown} />
    </ContentWrapper>
  )
}

export default MarkdownPreview
