import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import ClientMyPageContainer from '../../containers/mypage/ClientMyPageContainer'

function ClientMyPage() {
  return (
    <div className="base-wrap pt-12">
      <Header />
      <div className="pb-16">
        <ClientMyPageContainer />
      </div>
      <Footer />
    </div>
  )
}

export default ClientMyPage
