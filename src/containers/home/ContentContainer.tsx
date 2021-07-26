import { useQuery } from '@apollo/client'
import React from 'react'
import MainCategories from '../../components/home/MainCategories'
import MainSlider from '../../components/home/MainSlider'
import { GET_POPULAR_CATEOGRIES } from '../../lib/graphql'
import { getPopularCategories } from '../../__generated__/getPopularCategories'

function ContentContainer() {
  const { data, loading } = useQuery<getPopularCategories>(GET_POPULAR_CATEOGRIES)
  return (
    <div className="flex-1">
      <MainSlider />
      <MainCategories loading={loading} categories={data?.getPopularCategories || []} />
    </div>
  )
}

export default ContentContainer
