import React, { useRef } from 'react'
import { CloudUploadIcon } from '@heroicons/react/outline'
import { ChangeHandler } from 'react-hook-form'

interface FileInputProps {
  onChange: ChangeHandler
  previews: string[]
}

function FileInput({ onChange, previews }: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickFileInput = () => {
    if (inputRef.current === null) return
    inputRef.current.click()
  }

  return (
    <div className="relative border p-2 flex">
      <div className="w-24 h-24 flex flex-col items-center justify-center cursor-pointer" onClick={onClickFileInput}>
        <CloudUploadIcon className="w-12 h-12 text-emerald-400" />
        <p className="text-xs font-bold text-emerald-400">사진등록</p>
      </div>
      <input multiple onChange={onChange} ref={inputRef} type="file" className="absolute top-0 right-0 hidden" />

      {previews.map((preview) => (
        <div className="w-24 h-24 flex flex-col items-center justify-center" key={preview}>
          <img src={preview} alt="preview" />
        </div>
      ))}
    </div>
  )
}

export default FileInput
