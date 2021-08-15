import React from 'react'
import { Link as LinkSvg, Bold, Code, Image, Italic } from 'react-feather'
import Quote from '../../image/quote.svg'
import Strikethrough from '../../image/strikethrough.svg'

interface ToolbarProps {
  innerRef?: React.RefObject<HTMLDivElement>
  shadow: boolean
  onClick: Function
}

function Toolbar({ innerRef, shadow, onClick }: ToolbarProps) {
  return (
    <div
      ref={innerRef}
      className={`mb-6 px-12 flex flex-wrap sticky top-0 z-10 bg-white h-12 items-center ${shadow && 'shadow'}`}
    >
      <button onClick={onClick('heading1')} className="toolbar-item group">
        <div className="text-gray-400 text-xl group-hover:text-gray-900 font-serif">
          H<span className="text-base group-hover:text-gray-900">1</span>
        </div>
      </button>

      <button onClick={onClick('heading2')} className="toolbar-item group">
        <div className="text-gray-400 text-xl group-hover:text-gray-900 font-serif">
          H<span className="text-base group-hover:text-gray-900">2</span>
        </div>
      </button>

      <button onClick={onClick('heading3')} className="toolbar-item group">
        <div className="text-gray-400 text-xl group-hover:text-gray-900 font-serif">
          H<span className="text-base group-hover:text-gray-900">3</span>
        </div>
      </button>

      <button onClick={onClick('heading4')} className="toolbar-item group">
        <div className="text-gray-400 text-xl group-hover:text-gray-900 font-serif">
          H<span className="text-base group-hover:text-gray-900">4</span>
        </div>
      </button>

      <div className="w-0.5 h-5 bg-gray-300 mx-2" />

      <button onClick={onClick('bold')} className="toolbar-item group">
        <Bold className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} />
      </button>
      <button onClick={onClick('italic')} className="toolbar-item group">
        <Italic className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} fill="currentColor" />
      </button>
      <button onClick={onClick('strike')} className="toolbar-item group">
        <Strikethrough className="toolbar-icon group-hover:text-gray-900" fill="currentColor" />
      </button>

      <div className="w-0.5 h-5 bg-gray-300 mx-2" />

      <button onClick={onClick('blockquote')} className="toolbar-item group">
        <Quote className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} fill="currentColor" />
      </button>
      <button className="toolbar-item group">
        <LinkSvg className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} />
      </button>
      <button className="toolbar-item group">
        <Image className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} />
      </button>
      <button onClick={onClick('codeblock')} className="toolbar-item group">
        <Code className="toolbar-icon group-hover:text-gray-900" strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default Toolbar
