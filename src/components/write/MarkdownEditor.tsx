import React, { createRef, useEffect, useState } from 'react'
import CodeMirror from 'codemirror'
import styled from 'styled-components'
import colors from 'tailwindcss/colors'
import 'codemirror/addon/display/placeholder'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import './atom-one-light.css'
import TitleTextArea from './TitleTextArea'
import Toolbar from './Toolbar'

const MarkdownEditorBlock = styled.div`
  height: 100%;
  overflow-y: scroll;

  .wrapper {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .CodeMirror {
    height: auto;
    font-size: 1.3125rem;
    line-height: 1.5;
    color: ${colors.gray[600]};

    .cm-header {
      line-height: 2;
      color: ${colors.gray[900]};
    }

    .cm-header-1 {
      font-size: 2.5rem;
    }

    .cm-header-2 {
      font-size: 2rem;
    }

    .cm-header-3 {
      font-size: 1.5rem;
    }

    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1.3125rem;
    }

    .cm-strong,
    .cm-em {
      color: ${colors.gray[900]};
    }

    .CodeMirror-placeholder {
      color: ${colors.gray[400]};
      font-style: italic;
    }
  }
`

const PaddingWrapper = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`

function MarkdownEditor() {
  const editorRef = createRef<HTMLTextAreaElement>()
  const toolbarRef = createRef<HTMLDivElement>()
  const [shadow, setShadow] = useState(false)
  const [toolbarTop, setToolbarTop] = useState(0)

  useEffect(() => {
    if (!editorRef.current) return
    if (!toolbarRef.current) return

    CodeMirror.fromTextArea(editorRef.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder: '클래스 소개를 해주세요...',
      viewportMargin: Infinity,
      lineWrapping: true,
    })

    setToolbarTop(toolbarRef.current.getBoundingClientRect().top)
  }, [])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const nextShadow = e.currentTarget.scrollTop > toolbarTop
    if (shadow !== nextShadow) setShadow(nextShadow)
  }

  return (
    <MarkdownEditorBlock onScroll={handleScroll}>
      <div className="wrapper">
        <PaddingWrapper>
          <TitleTextArea placeholder="제목을 입력해주세요." />
        </PaddingWrapper>
        <Toolbar innerRef={toolbarRef} shadow={shadow} />
        <PaddingWrapper>
          <textarea ref={editorRef} />
        </PaddingWrapper>
      </div>
    </MarkdownEditorBlock>
  )
}

export default MarkdownEditor
