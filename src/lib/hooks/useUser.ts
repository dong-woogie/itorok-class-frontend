import { useQuery } from '@apollo/client'
import { getUserOnLoad } from '../../__generated__/getUserOnLoad'
import { GET_USER_ON_LOAD } from '../graphql'

export function useUser() {
  const { data } = useQuery<getUserOnLoad>(GET_USER_ON_LOAD)

  return { data }
}
