import { useEffect } from 'react'
import { LoadableComponent } from '@loadable/component'
import { useHistory, useLocation } from 'react-router'
import { useUser } from '../lib/hooks/useUser'

function withLogged(Component: LoadableComponent<unknown>) {
  const history = useHistory()
  const location = useLocation()
  const { data } = useUser()

  useEffect(() => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/social/login' ||
      location.pathname === '/social/register'
    ) {
      if (data) history.push('/')
    }
  }, [location.pathname])

  return Component
}

export default withLogged
