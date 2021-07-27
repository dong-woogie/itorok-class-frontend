import { useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setUser } from '../../modules/user'
import { getUserOnLoad } from '../../__generated__/getUserOnLoad'
import { GET_USER_ON_LOAD } from '../graphql'

export function useLoad() {
  const dispatch = useDispatch()
  const onCompleted = (data: getUserOnLoad) => {
    dispatch(setUser(data.getUserOnLoad))
  }
  useQuery<getUserOnLoad>(GET_USER_ON_LOAD, { onCompleted, fetchPolicy: 'network-only' })
}
