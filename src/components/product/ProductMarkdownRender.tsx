import React from 'react'
import MarkdownRender, { MarkdownRenderProps } from '../write/MarkdownRender'

interface ProductMarkdownRenderProps extends MarkdownRenderProps {}

function ProductMarkdownRender({ markdown, codeTheme, className }: ProductMarkdownRenderProps) {
  return <MarkdownRender markdown={markdown} codeTheme={codeTheme} className={`${className} text-sm px-4`} />
}

export default ProductMarkdownRender
