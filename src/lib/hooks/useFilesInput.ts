import { ChangeEvent, useCallback, useState } from 'react'
import api from '../api'

export function useFilesInput() {
  const [state, setState] = useState<string[]>([])
  const onChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData()
      const files = e.target?.files

      if (!files) return
      Array.from(files).forEach((file) => formData.append('files', file))

      const { data } = await api.post('/api/uploads', formData)
      setState(state.concat(data.images))
    },
    [state],
  )

  return {
    onChangeFileInput: onChange,
    files: state,
  }
}
