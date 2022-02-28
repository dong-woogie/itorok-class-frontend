import React from 'react'
import { Helmet } from 'react-helmet-async'
import { animated, useSpring } from 'react-spring'
import AddressDialog from '../../components/common/dialog/AddressDialog'
import DetailAddressDialog from '../../components/common/dialog/DetailAddressDialog'
import CreateClassTab from '../../components/create-class/CreateClassTab'
import CreateClassTemplate from '../../components/create-class/CreateClassTemplate'
import AddLinkPopover from '../../components/write/AddLinkPopover'
import { useTypedSelect } from '../../modules'
import CreateBasic from './CreateBasic'
import CreateCurriculum from './CreateCurriculum'
import CreateIntroduce from './CreateIntroduce'
import CreateSchedule from './CreateSchedule'

const CreateClassHead = ({ children, hide }: { children: React.ReactNode; hide: boolean }) => {
  const springStyle = useSpring({
    maxHeight: hide ? 0 : window.screen.height / 2,
    opacity: hide ? 0 : 1,
    config: {
      duration: 500,
    },
  })

  return <animated.div style={springStyle}>{children}</animated.div>
}

function CreateClass() {
  const currentPage = useTypedSelect((state) => state.createClass.currentPage)
  const hideTab = useTypedSelect((state) => state.createClass.hideTab)
  return (
    <CreateClassTemplate currentPage={currentPage}>
      <Helmet>
        <title>클래스 등록하기</title>
      </Helmet>
      <CreateClassHead hide={hideTab}>
        <CreateClassTab currentPage={currentPage} />
      </CreateClassHead>
      {currentPage === 'basic' && <CreateBasic />}
      {currentPage === 'introduce' && <CreateIntroduce />}
      {currentPage === 'curriculum' && <CreateCurriculum />}
      {currentPage === 'schedule' && <CreateSchedule />}
      <AddressDialog />
      <DetailAddressDialog />
      <AddLinkPopover />
    </CreateClassTemplate>
  )
}

export default CreateClass
