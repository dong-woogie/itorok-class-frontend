import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useTypedSelect } from '../../modules'

export function usePathControl() {
  const user = useTypedSelect((state) => state.user.user)
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/social/login' ||
      location.pathname === '/social/register'
    ) {
      if (user) history.push('/')
    }
  }, [location.pathname, user])
}
