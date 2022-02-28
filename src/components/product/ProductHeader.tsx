import React from 'react'
import { ChevronLeft, Search, Home, Send } from 'react-feather'
import { useHistory } from 'react-router'
import IconBlock from '../common/IconBlock'

function ProductHeader() {
  const history = useHistory()

  const onClickBackIcon = () => {
    history.goBack()
  }
  const onClickHomeIcon = () => {
    history.push('/')
  }
  const onClickSendIcon = () => {}
  const onClickSearchIcon = () => {}

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-sm w-full mx-auto text-gray-900 border-b border-gray-100 h-16 bg-white">
        <div className="w-full h-full px-4 flex justify-between items-center">
          <IconBlock onClick={onClickBackIcon}>
            <ChevronLeft />
          </IconBlock>

          <div className="flex space-x-2">
            <IconBlock onClick={onClickHomeIcon}>
              <Home className="w-5 h-5" />
            </IconBlock>
            <IconBlock onClick={onClickSendIcon}>
              <Send className="w-5 h-5" />
            </IconBlock>
            <IconBlock onClick={onClickSearchIcon}>
              <Search className="w-5 h-5" />
            </IconBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader
