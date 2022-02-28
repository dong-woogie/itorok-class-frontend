import { useMutation } from '@apollo/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import ContentWrapper from '../../components/common/ContentWrapper'
import CreateClassFooter from '../../components/create-class/CreateClassFooter'
import CreateScheduleContent, { SelectedDaysType } from '../../components/create-class/CreateScheduleContent'
import { CREATE_PRODUCT } from '../../lib/graphql'
import { DaysType } from '../../lib/utils'
import { useTypedSelect } from '../../modules'
import { openAlert } from '../../modules/common'
import {
  addSchedule,
  changeActiveTime,
  changeCurrentPage,
  changePrice,
  resetCreateClass,
  TimeType,
} from '../../modules/create-class'
import { createProductMutation, createProductMutationVariables } from '../../__generated__/createProductMutation'

function CreateScheduleContainer() {
  const dispatch = useDispatch()
  const history = useHistory()
  const createClass = useTypedSelect((state) => state.createClass)
  const user = useTypedSelect((state) => state.user.user)
  const { schedules, price, activeTime } = createClass

  const onCompleted = ({ createProduct }: createProductMutation) => {
    if (createProduct.ok) {
      dispatch(resetCreateClass())
      history.push('/')
    } else if (createProduct.error) dispatch(openAlert(createProduct.error))
  }

  const [createProduct] = useMutation<createProductMutation, createProductMutationVariables>(CREATE_PRODUCT, {
    onCompleted,
  })

  const onClickPrevious = () => {
    dispatch(changeCurrentPage('curriculum'))
  }

  const onCreateClass = () => {
    if (!(user && user.address && user.detailAddress && createClass.category)) return

    createProduct({
      variables: {
        input: {
          address: user.address,
          detailAddress: user.detailAddress,
          category: createClass.category,
          title: createClass.title,
          thumbnail: createClass.thumbnail,
          photos: createClass.photos,
          learningTime: createClass.activeTime,
          curriculum: createClass.curriculumMarkdown,
          daysOfActive: createClass.schedules,
          introduce: createClass.introduceMarkdown,
          minPerson: createClass.minPerson,
          maxPerson: createClass.maxPerson,
          price: createClass.price,
        },
      },
    })
  }

  const isDisabledNext = () => {
    return !(
      price &&
      (activeTime.hour || activeTime.minute) &&
      Object.values(schedules).some((schedule: TimeType[]) => schedule.length > 0)
    )
  }

  const inspectSchedule = (days: DaysType, startTime: string) => {
    schedules[days].forEach((schedule) => {
      const scheduleStart = new Date(schedule)
      const scheduleEnd = new Date(scheduleStart)
      scheduleEnd.setHours(scheduleEnd.getHours() + activeTime.hour, scheduleEnd.getMinutes() + activeTime.minute)

      const addScheduleStart = new Date(startTime)
      const addScheduleEnd = new Date(addScheduleStart)
      addScheduleEnd.setHours(
        addScheduleEnd.getHours() + activeTime.hour,
        addScheduleEnd.getMinutes() + activeTime.minute,
      )

      if (
        (scheduleStart <= addScheduleStart && scheduleEnd >= addScheduleStart) ||
        (scheduleStart < addScheduleEnd && scheduleEnd > addScheduleEnd)
      ) {
        throw new Error('클래스 일정이 중복됩니다.')
      }
    })
  }

  const onAddSchedule = ({ selectedDays, startTime }: { selectedDays: SelectedDaysType; startTime: string }) => {
    try {
      const newSchedules = Object.keys(selectedDays).reduce(
        (prev, curr) => {
          const currentValue = curr as DaysType
          if (selectedDays[currentValue]) {
            // 시간 겹치는 거 검사
            inspectSchedule(currentValue, startTime)
            prev[currentValue] = prev[currentValue].concat(startTime)
          }
          return prev
        },
        { ...schedules },
      )
      dispatch(addSchedule({ schedules: newSchedules }))
    } catch (e: any) {
      if (e.message) dispatch(openAlert(e.message))
    }
  }

  const onChangeActiveTime = (time: TimeType) => {
    dispatch(changeActiveTime(time))
  }

  const onChangePrice = (price: number) => {
    dispatch(changePrice(price))
  }

  return (
    <ContentWrapper className="pb-16">
      <CreateScheduleContent
        schedules={schedules}
        activeTime={activeTime}
        price={price}
        onChangePrice={onChangePrice}
        onChangeActiveTime={onChangeActiveTime}
        onAddSchedule={onAddSchedule}
      />
      <CreateClassFooter
        onClickNext={onCreateClass}
        onClickPrevious={onClickPrevious}
        isDisabledNext={isDisabledNext()}
      />
    </ContentWrapper>
  )
}

export default CreateScheduleContainer
