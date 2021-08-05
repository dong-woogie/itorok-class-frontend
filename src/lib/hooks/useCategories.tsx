import { useQuery } from '@apollo/client'
import { getPopularCategories } from '../../__generated__/getPopularCategories'
import { GET_POPULAR_CATEOGRIES } from '../graphql'

export function useCategories() {
  const { data } = useQuery<getPopularCategories>(GET_POPULAR_CATEOGRIES)
  if (!data) return []
  return data.getPopularCategories
}
