import { useQuery } from '@apollo/client'
import React from 'react'
import MainCategories from '../../components/home/MainCategories'
import { GET_POPULAR_CATEOGRIES } from '../../lib/graphql'

function PopularCategoriesContainer() {
  const { data, loading } = useQuery(GET_POPULAR_CATEOGRIES)

  return <MainCategories categories={data?.getPopularCategories || []} loading={loading} />
}

export default PopularCategoriesContainer
