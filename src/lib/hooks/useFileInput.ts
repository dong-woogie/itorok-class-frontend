import { ChangeEvent, useState } from 'react'
import api from '../api'

export function useFileInput() {
  const [state, setState] = useState('')

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const file = e.target.files && e.target.files[0]

    if (!file) return
    formData.append('file', file)

    const { data } = await api.post('/api/upload', formData)
    setState(data.image)
  }

  const onDelete = () => {}

  return { file: state, onChangeFile: onChange, onDeleteFile: onDelete }
}
