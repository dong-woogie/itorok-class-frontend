import React from 'react'
import { getPopularCategories_getPopularCategories } from '../../__generated__/getPopularCategories'

function Category({ name, coverImg, slug }: getPopularCategories_getPopularCategories) {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center py-3">
      <div className="w-12 h-12">
        <img src={coverImg} alt={slug} />
      </div>
      <span className="text-xs mt-1 font-semibold text-gray-800">{name}</span>
    </div>
  )
}

export default Category
