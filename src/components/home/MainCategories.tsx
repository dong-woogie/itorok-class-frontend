import React from 'react'
import { getPopularCategories_getPopularCategories } from '../../__generated__/getPopularCategories'
import Category from './Category'
import SkeletonCategory from './SkeletonCategory'

interface MainCategoriesProps {
  categories: getPopularCategories_getPopularCategories[]
  loading: boolean
}

function MainCategories({ categories, loading = false }: MainCategoriesProps) {
  return (
    <div className="w-full mt-8 border-b border-gray-300">
      <h4 className="text-center font-mono text-sm font-semibold">인기 카테고리</h4>
      <div className="flex flex-wrap mx-4">
        {categories.map((category) => (
          <Category {...category} key={category.id} />
        ))}

        {loading && Array.from({ length: 8 }).map((empty, index) => <SkeletonCategory key={`empty_${index}`} />)}
      </div>
    </div>
  )
}

export default MainCategories
