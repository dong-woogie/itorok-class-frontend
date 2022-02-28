import React, { ChangeEventHandler, useRef } from 'react'
import { UploadCloud, Camera } from 'react-feather'

interface ThumbnailProps {
  thumbnail: string
  onChange: ChangeEventHandler
}

function Thumbnail({ thumbnail, onChange }: ThumbnailProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickFileInput = () => {
    if (inputRef.current === null) return
    inputRef.current.click()
  }

  return (
    <div className="relative w-32 h-32 sm:w-72 sm:h-48 group" onClick={onClickFileInput}>
      <div
        className="absolute left-0 top-0 w-full h-full rounded-3xl shadow bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("${thumbnail}")` }}
      >
        {!thumbnail && <Camera className="w-1/2 h-1/2" />}
      </div>
      <div className="absolute left-0 top-0 z-10 cursor-pointer rounded-3xl w-full h-full opacity-0 group-hover:opacity-100 flex bg-black bg-opacity-20 text-white text-lg font-bold justify-center items-center">
        <UploadCloud className="w-6 h-6" />
        <span className="ml-2">썸네일 등록</span>
      </div>
      <input type="file" className="hidden" onChange={onChange} ref={inputRef} />
    </div>
  )
}

export default Thumbnail
