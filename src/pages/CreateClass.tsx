import React from 'react'
import Header from '../components/common/Header'
import CreateClassContainer from '../containers/create-class/CreateClassContainer'

function CreateClass() {
  return (
    <div className="base-wrap">
      <Header />
      <CreateClassContainer />
    </div>
  )
}

export default CreateClass
