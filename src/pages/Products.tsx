import React from 'react'
import { useParams } from 'react-router'
import ProductContainer from '../containers/product/ProductContainer'

function Products() {
  const params = useParams<{ id: string }>()
  return (
    <div className="base-wrap">
      <ProductContainer productId={params.id} />
    </div>
  )
}

export default Products
