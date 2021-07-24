import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import MainCategories from '../components/home/MainCategories'
import MainSlider from '../components/home/MainSlider'

function Home() {
  return (
    <div className="base-wrap flex flex-col">
      <Header />
      <div className="flex-1">
        <MainSlider />
        <MainCategories />
      </div>
      <Footer />
    </div>
  )
}

export default Home
