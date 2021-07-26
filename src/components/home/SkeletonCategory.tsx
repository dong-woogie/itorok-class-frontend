import React from 'react'

function SkeletonCategory() {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center py-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full" />
      <div className="mt-1 w-10 h-2 bg-gray-200" />
    </div>
  )
}

export default SkeletonCategory
