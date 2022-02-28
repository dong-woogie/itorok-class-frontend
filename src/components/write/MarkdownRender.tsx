import React, { useEffect, useState } from 'react'
import remark from 'remark'
import styled from 'styled-components'
import remark2rehype from 'remark-rehype'
import remarkBreaks from 'remark-breaks'
import remarkParse from 'remark-parse'
import stringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import raw from 'rehype-raw'
import sanitize from 'sanitize-html'
import remarkPrism from '../../lib/remark/remark-prism'
import prismTheme from '../../lib/styles/prismTheme'
import Typography from '../common/Typography'
import { isSSR } from '../../lib/utils'

export interface MarkdownRenderProps {
  codeTheme?: string
  className?: string
  markdown: string
}

const MarkdownRenderBlock = styled.div`
  &.atom-one-dark {
    ${prismTheme['atom-one-dark']}
  }
`

const filter = (html: string) => {
  return sanitize(html, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'iframe',
      'span',
      'img',
      'del',
      'input',
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src'],
      iframe: ['src', 'allow', 'allowfullscreen', 'scrolling', 'class'],
      '*': ['class', 'id', 'aria-hidden'],
      span: ['style'],
      input: ['type'],
      ol: ['start'],
    },
    allowedStyles: {
      '*': {
        // Match HEX and RGB
        color: [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
        'text-align': [/^left$/, /^right$/, /^center$/],
      },
    },
  })
}

function MarkdownRender({ codeTheme = 'atom-one-dark', markdown, className }: MarkdownRenderProps) {
  const [html, setHtml] = useState(
    isSSR()
      ? filter(
          remark()
            .use(remarkBreaks)
            .use(remarkParse)
            .use(remarkPrism)
            .use(remarkGfm)
            .use(remark2rehype, { allowDangerousHtml: true })
            .use(raw)
            .use(stringify)
            .processSync(markdown)
            .toString(),
        )
      : '',
  )

  useEffect(() => {
    remark()
      .use(remarkBreaks)
      .use(remarkParse)
      .use(remarkPrism)
      .use(remarkGfm)
      .use(remark2rehype, { allowDangerousHtml: true })
      .use(raw)
      .use(stringify)
      .process(markdown)
      .then((file: any) => setHtml(String(file)))
  }, [markdown])

  const markup = { __html: html }

  return (
    <Typography>
      <MarkdownRenderBlock dangerouslySetInnerHTML={markup} className={`${className} ${codeTheme}`} />
    </Typography>
  )
}

export default MarkdownRender
