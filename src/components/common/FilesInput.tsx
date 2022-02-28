import React, { useRef } from 'react'
import { DownloadCloud } from 'react-feather'
import { ChangeHandler } from 'react-hook-form'
import styled from 'styled-components'
import HorizontalSlide from './HorizontalSlide'

interface FilesInputProps {
  onChange: ChangeHandler
  previews: string[]
}

const PriviewBlock = styled.div`
  flex-shrink: 0;
  & + & {
    margin-left: 1rem;
  }
`

function FilesInput({ onChange, previews }: FilesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickFileInput = () => {
    if (inputRef.current === null) return
    inputRef.current.click()
  }

  return (
    <div className="relative border p-2 flex">
      <div
        className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center cursor-pointer"
        onClick={onClickFileInput}
      >
        <DownloadCloud className="w-12 h-12 text-emerald-400" />
        <p className="text-xs font-bold text-emerald-400">사진등록</p>
      </div>
      <input multiple onChange={onChange} ref={inputRef} type="file" className="absolute top-0 right-0 hidden" />

      <HorizontalSlide>
        {previews.map((preview) => (
          <PriviewBlock className="w-24 h-24 flex flex-col items-center justify-center" key={preview}>
            <img src={preview} alt="preview" className="w-full h-full object-cover" />
          </PriviewBlock>
        ))}
      </HorizontalSlide>
    </div>
  )
}

export default FilesInput
