import React from 'react'
import Baker from '../../image/baker.png'

function MainCategories() {
  return (
    <div className="w-full mt-8">
      <h4 className="text-center font-mono text-sm">인기 카테고리</h4>
      <div className="flex flex-wrap mx-4">
        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>

        <div className="w-1/4 flex flex-col items-center justify-center py-3">
          <div className="w-12 h-12">
            <img src={Baker} alt="baker" />
          </div>
          <span className="text-xs mt-1 font-semibold text-gray-800">베이커리</span>
        </div>
      </div>
    </div>
  )
}

export default MainCategories
