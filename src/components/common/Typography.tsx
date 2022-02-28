import React from 'react'
import styled from 'styled-components'
import colors from 'tailwindcss/colors'

interface TypographyProps {
  children: React.ReactNode
}

const TypographyBlock = styled.div`
  font-size: 1.125rem;
  color: #222426;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  word-wrap: break-word;
  ul,
  ol,
  p,
  b {
      font-weight: 400;
  }
  code {
    background: rgba(27, 31, 35, 0.05);
    padding: 0.2em 0.4em;
    font-size: 85%;
    border-radius: 3px;
  }
    a {
      code {
        color: ${colors.emerald[400]};
      }
    }
  }
  /* font-family: 'Spoqa Han Sans', -apple-system, BlinkMacSystemFont,
  -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo',
  arial, 나눔고딕, 'Nanum Gothic', 돋움; */
  a {
    color: ${colors.emerald[500]};
    text-decoration: none;
    &:hover {
      color: ${colors.emerald[400]};
      text-decoration: underline;
    }
  }
  code {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: #dedede;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  p {
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  p + p {
    margin-top : 1.125rem;
    margin-bottom : 1.125rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.125rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 0.875rem;
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 0.75rem;
    }
    p + h1,
    p + h2,
    p + h3,
    p + h4 {
      margin-top: 2rem;
    }
  }
  pre {
    padding: 1rem;
    border-radius: 4px;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    font-size: 0.875rem;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
  }
  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-left: 4px solid ${colors.emerald[400]};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: ${colors.gray[100]};
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    padding-left: 2rem;
    color: ${colors.gray[900]};
    ul,
    ol {
      padding-left: 1rem;
    }
    *:first-child {
      margin-top: 0;
    }
    *:last-child {
      margin-bottom: 0;
    }
  }
`

function Typography({ children }: TypographyProps) {
  return <TypographyBlock>{children}</TypographyBlock>
}

export default Typography
