import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { toCommas } from '../../lib/utils'
import { getProductsQuery_getProducts_products } from '../../__generated__/getProductsQuery'

interface ProductCardProps {
  product: getProductsQuery_getProducts_products
}

export const ProductCardWrap = styled.div`
  width: 50%;
  margin-top: 1rem;
  flex-shrink: 0;

  &:nth-child(odd) {
    padding-right: 0.5rem;
  }
  &:nth-child(even) {
    padding-left: 0.5rem;
  }
`

export const ThumbnailImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 77%;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

function ProductCard({ product }: ProductCardProps) {
  return (
    <ProductCardWrap>
      <div className="w-full border rounded">
        <Link to={`/products/${product.id}`}>
          <ThumbnailImageWrap>
            <img src={product.thumbnail} alt="class thumbnail" />
          </ThumbnailImageWrap>
        </Link>

        <Link to={`/products/${product.id}`}>
          <div className="mt-2 p-2">
            <p className="text-xs font-semibold font-mono">{product.category.name}클래스</p>
            <p className="mt-1 text-xs font-light font-sans">{product.title}</p>
            <p className="text-lg font-semibold">{toCommas(product.price)}원</p>
          </div>
        </Link>

        <div className="border-t p-2">
          <div className="flex items-center space-x-2">
            <Link to={`/@${product.mentor.username}`}>
              <img src={product.mentor.profile.thumbnail} alt="author" className="w-6 h-6 rounded-full" />
            </Link>

            <span className="text-xs font-extralight">by</span>
            <Link to={`/@${product.mentor.username}`}>
              <span className="text-sm font-mono font-medium">{product.mentor.profile.displayName}</span>
            </Link>
          </div>
        </div>
      </div>
    </ProductCardWrap>
  )
}

export default ProductCard
