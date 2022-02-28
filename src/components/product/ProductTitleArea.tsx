import React from 'react'

interface ProductTitleAreaProps {
  title: string
  categoryName: string
}

function ProductTitleArea({ title, categoryName }: ProductTitleAreaProps) {
  return (
    <div className="py-2 px-4">
      <p className="text-sm text-gray-500 opacity-70">{categoryName} 클래스</p>
      <div className="text-lg font-medium">{title}</div>
    </div>
  )
}

export default ProductTitleArea
