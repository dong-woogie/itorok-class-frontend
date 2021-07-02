import { ChangeEvent, useCallback, useState } from 'react'

function useInput(defaultState: string) {
  const [state, setState] = useState(defaultState)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  return [state, onChange]
}

export default useInput
