import { useQuery } from '@apollo/client'
import { getUserOnLoad } from '../../__generated__/getUserOnLoad'
import { GET_USER_ON_LOAD } from '../graphql'

export function useUser() {
  return useQuery<getUserOnLoad>(GET_USER_ON_LOAD)
}
