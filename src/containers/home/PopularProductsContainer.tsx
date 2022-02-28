import { useQuery } from '@apollo/client'
import React from 'react'
import ProductCardList from '../../components/product/ProductCardList'
import { GET_PRODUCTS } from '../../lib/graphql'
import { getProductsQuery } from '../../__generated__/getProductsQuery'

function PopularProductsContainer() {
  const { data, loading } = useQuery<getProductsQuery>(GET_PRODUCTS)
  return (
    <div className="px-4 py-4">
      <div className="mt-2 text-center text-sm font-mono font-semibold">인기 클래스</div>
      <div className="overflow-hidden">
        <ProductCardList products={data?.getProducts.products || []} loading={loading} />
      </div>
    </div>
  )
}

export default PopularProductsContainer
