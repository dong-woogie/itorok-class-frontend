import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ContentContainer from '../containers/home/ContentContainer'

function Home() {
  return (
    <div className="base-wrap flex flex-col">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  )
}

export default Home
