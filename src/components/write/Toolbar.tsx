import React from 'react'
import { Underline, Link as LinkSvg, Bold, Code, Image, Italic } from 'react-feather'
import Quote from '../../image/quote.svg'
import Strikethrough from '../../image/strikethrough.svg'

function Toolbar() {
  return (
    <div className="px-12 flex">
      <Strikethrough className="w-6 h-6" />
      <Quote className="w-6 h-6" />
      <Italic className="w-6 h-6" />
      <Underline className="w-6 h-6" />
      <LinkSvg className="w-6 h-6" />
      <Bold className="w-6 h-6" />
      <Code className="w-6 h-6" />
      <Image className="w-6 h-6" />
    </div>
  )
}

export default Toolbar
