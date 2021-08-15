import React, { createRef, useCallback, useEffect, useState } from 'react'
import CodeMirror, { EditorFromTextArea } from 'codemirror'
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
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .CodeMirror {
    height: auto;
    font-size: 1.125rem;
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

    .cm-strong {
      color: ${colors.gray[900]};
    }

    .cm-em {
      color: ${colors.gray[400]};
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
  const [codemirror, setCodemirror] = useState<EditorFromTextArea | null>(null)

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const nextShadow = e.currentTarget.scrollTop > toolbarTop
      if (shadow !== nextShadow) setShadow(nextShadow)
    },
    [shadow],
  )

  const handleClickTools = (mode: string) => () => {
    if (!codemirror) return null

    const cursor = {
      start: codemirror.getCursor('start'),
      end: codemirror.getCursor('end'),
    }
    const line = codemirror.getLine(cursor.start.line)

    const removeHeading = (text: string) => {
      return text.replace(/#{1,6} /, '')
    }

    const setHeading = (shop: '#' | '##' | '###' | '####') => {
      const plain = removeHeading(line)
      codemirror.setSelection({ line: cursor.start.line, ch: 0 }, { line: cursor.start.line, ch: line.length })
      codemirror.replaceSelection(`${shop} ${plain}`)
    }

    const setFont = (chs: '**' | '_' | '~~') => {
      const { length } = chs
      const selection = codemirror.getSelection()

      const isFont = () => {
        const text = codemirror.getRange(
          { line: cursor.start.line, ch: cursor.start.ch - length },
          { line: cursor.end.line, ch: cursor.end.ch + length },
        )
        return text.slice(0, length) === chs && text.slice(-length) === chs
      }

      const setSelectionWhenBold = () => {
        codemirror.setSelection(
          { line: cursor.start.line, ch: cursor.start.ch - length },
          { line: cursor.end.line, ch: cursor.end.ch + length },
        )
      }

      if (!selection) {
        const text = `${chs}텍스트${chs}`
        codemirror.replaceSelection(text)
        codemirror.setSelection(
          { line: cursor.start.line, ch: cursor.start.ch + length },
          { line: cursor.start.line, ch: cursor.start.ch + text.length - length },
        )
        return null
      }

      if (isFont()) {
        setSelectionWhenBold()
        codemirror.replaceSelection(selection)
        codemirror.setSelection(
          { line: cursor.start.line, ch: cursor.start.ch - length },
          { line: cursor.end.line, ch: cursor.end.ch + length },
        )
        return null
      }

      codemirror.replaceSelection(`${chs}${selection}${chs}`)
      codemirror.setSelection(
        { line: cursor.start.line, ch: cursor.start.ch + length },
        { line: cursor.end.line, ch: cursor.start.line === cursor.end.line ? cursor.end.ch + length : cursor.end.ch },
      )
      return null
    }

    const setBlockquote = () => {
      codemirror.setSelection({ line: cursor.start.line, ch: 0 }, { line: cursor.start.line, ch: line.length })

      if (line.slice(0, 2) === '> ') {
        codemirror.replaceSelection(line.slice(2))
      } else {
        codemirror.replaceSelection(`> ${line}`)
      }
    }

    const setCodeBlock = () => {
      const selection = codemirror.getSelection() || '코드를 입력해주세요.'

      const getReplaceContent = () =>
        cursor.start.ch === 0 ? `\`\`\`javascript\n${selection}\n\`\`\`` : `\n\`\`\`javascript\n${selection}\n\`\`\``

      codemirror.replaceSelection(getReplaceContent())

      const newCursor = codemirror.getCursor('start')
      codemirror.setSelection({ line: newCursor.line - 1, ch: 0 }, { line: newCursor.line - 1, ch: selection.length })
    }

    const handlers: {
      [key: string]: () => void
    } = {
      heading1: () => {
        setHeading('#')
      },
      heading2: () => {
        setHeading('##')
      },
      heading3: () => {
        setHeading('###')
      },
      heading4: () => {
        setHeading('####')
      },
      bold: () => {
        setFont('**')
      },
      italic: () => {
        setFont('_')
      },
      strike: () => {
        setFont('~~')
      },
      blockquote: () => {
        setBlockquote()
      },
      link: () => {},
      image: () => {},
      codeblock: () => {
        setCodeBlock()
      },
    }

    handlers[mode]()
    codemirror.focus()
  }

  useEffect(() => {
    if (!(editorRef.current && toolbarRef.current)) return

    const instance = CodeMirror.fromTextArea(editorRef.current, {
      mode: 'markdown',
      theme: 'one-light',
      placeholder: '클래스 소개를 해주세요...',
      viewportMargin: Infinity,
      lineWrapping: true,
    })

    ;(window as any).codemirror = instance
    setCodemirror(instance)
    setToolbarTop(toolbarRef.current.getBoundingClientRect().top)
  }, [])

  return (
    <MarkdownEditorBlock onScroll={handleScroll}>
      <div className="wrapper">
        <PaddingWrapper>
          <TitleTextArea placeholder="제목을 입력해주세요." />
        </PaddingWrapper>
        <Toolbar innerRef={toolbarRef} shadow={shadow} onClick={handleClickTools} />
        <PaddingWrapper>
          <textarea ref={editorRef} />
        </PaddingWrapper>
      </div>
    </MarkdownEditorBlock>
  )
}

export default MarkdownEditor
