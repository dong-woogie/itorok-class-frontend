import React from 'react'
import MainSlider from '../../components/home/MainSlider'
import PopularCategoriesContainer from './PopularCategoriesContainer'
import PopularProductsContainer from './PopularProductsContainer'

function ContentContainer() {
  return (
    <div className="flex-1 overflow-scroll pt-12 pb-16 none-scrollbar">
      <MainSlider />
      <PopularCategoriesContainer />
      <PopularProductsContainer />
    </div>
  )
}

export default ContentContainer
