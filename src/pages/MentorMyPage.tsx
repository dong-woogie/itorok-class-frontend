import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import MentorMyPageContainer from '../containers/mypage/MentorMyPageContainer'

function MentorMyPage() {
  return (
    <div className="base-wrap pt-12">
      <Header />
      <div className="pb-16">
        <MentorMyPageContainer />
      </div>
      <Footer />
    </div>
  )
}

export default MentorMyPage
