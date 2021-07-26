import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useUser } from './useUser'

export function usePathControl() {
  const { data } = useUser()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/social/login' ||
      location.pathname === '/social/register'
    ) {
      if (data) history.push('/')
    }
  }, [location.pathname])
}
