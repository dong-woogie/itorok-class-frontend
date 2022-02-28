import React from 'react'
import { ProductCardWrap, ThumbnailImageWrap } from './ProductCard'

interface SkeletonCardProps {}

function SkeletonCard(props: SkeletonCardProps) {
  return (
    <ProductCardWrap>
      <div className="w-full border rounded">
        <ThumbnailImageWrap />
      </div>
    </ProductCardWrap>
  )
}

export default SkeletonCard
