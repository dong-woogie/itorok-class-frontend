import { ChangeEvent, useCallback, useState } from 'react'

function useInputs<T>(defaultStates: T | null) {
  const [state, setState] = useState(defaultStates)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!state) return
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }, [])

  const onReset = useCallback(() => {
    setState(null)
  }, [])

  return [state, onChange, onReset] as [T, typeof onChange, typeof onReset]
}

export default useInputs
