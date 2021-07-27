import { useApolloClient, useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { resetUser } from '../../modules/user'
import { logoutMutation } from '../../__generated__/logoutMutation'
import { splitLink } from '../apollo/link'
import { LOGOUT_MUTATION } from '../graphql'

export function useLogout() {
  const client = useApolloClient()
  const dispatch = useDispatch()
  const onCompleted = async (data: logoutMutation) => {
    try {
      if (!data.logout) return null
      client.setLink(splitLink())
      dispatch(resetUser())
      return null
    } catch (e) {
      return null
    }
  }

  const [logout] = useMutation<logoutMutation>(LOGOUT_MUTATION, { onCompleted, fetchPolicy: 'no-cache' })

  return logout
}
