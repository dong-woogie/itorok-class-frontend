import React from 'react'
import { getProductsQuery_getProducts_products } from '../../__generated__/getProductsQuery'

import ProductCard from './ProductCard'
import SkeletonCard from './SkeletonCard'

interface ProductCardListProps {
  products: getProductsQuery_getProducts_products[]
  loading?: boolean
}

function ProductCardList({ products, loading }: ProductCardListProps) {
  return (
    <div className="w-full flex flex-wrap">
      {loading && products.map(() => <SkeletonCard />)}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductCardList
