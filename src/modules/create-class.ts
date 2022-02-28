import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeepPartial } from 'utility-types'
import { DaysOfActiveInput } from '../__generated__/globalTypes'

export type CurrentPageType = 'basic' | 'introduce' | 'curriculum' | 'schedule'

export interface TimeType {
  hour: number
  minute: number
}

export interface CreateClassState {
  title: string
  category: string
  thumbnail: string
  photos: string[]
  introduceMarkdown: string
  curriculumMarkdown: string
  currentPage: CurrentPageType
  schedules: DaysOfActiveInput
  activeTime: TimeType
  price: number
  hideTab: boolean
  minPerson: number
  maxPerson: number
}

export type TemporaryClassInputType = Omit<Omit<DeepPartial<CreateClassState>, 'photos'>, 'currentPage'> & {
  photos?: string[]
}

const initialState: CreateClassState = {
  title: '',
  category: '',
  thumbnail:
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633248045061_1629110151368_20180923005843_rvhmddqi+(1).jpg',
  introduceMarkdown: '',
  curriculumMarkdown: '',
  hideTab: false,
  photos: [
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633244397705_KakaoTalk_Photo_2021-09-28-20-11-09+001.jpeg',
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633244397714_KakaoTalk_Photo_2021-09-28-20-11-10+002.jpeg',
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633244397719_KakaoTalk_Photo_2021-09-28-20-11-11+003.jpeg',
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633244397725_KakaoTalk_Photo_2021-09-28-20-11-11+004.jpeg',
    'https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/original/1633244397734_KakaoTalk_Photo_2021-09-28-20-11-12+005.jpeg',
  ],
  currentPage: 'basic',
  schedules: {
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  },
  activeTime: {
    hour: 0,
    minute: 0,
  },
  price: 0,
  minPerson: 0,
  maxPerson: 0,
}

const createClass = createSlice({
  initialState,
  name: 'createClass',
  reducers: {
    temporaryClass(state, action: PayloadAction<TemporaryClassInputType>) {
      const { category, title, thumbnail, photos, introduceMarkdown, curriculumMarkdown, minPerson, maxPerson } =
        action.payload

      if (category) state.category = category
      if (title) state.title = title
      if (thumbnail) state.thumbnail = thumbnail
      if (photos) state.photos = photos
      if (introduceMarkdown) state.introduceMarkdown = introduceMarkdown
      if (curriculumMarkdown) state.curriculumMarkdown = curriculumMarkdown
      if (minPerson) state.minPerson = minPerson
      if (maxPerson) state.maxPerson = maxPerson
    },
    changeIntroduceMarkdown(state, action: PayloadAction<string>) {
      state.introduceMarkdown = action.payload
    },
    changeCurriculumMarkdown(state, action: PayloadAction<string>) {
      state.curriculumMarkdown = action.payload
    },
    changeCurrentPage(state, action: PayloadAction<CurrentPageType>) {
      state.currentPage = action.payload
    },
    addSchedule(state, action: PayloadAction<{ schedules: DaysOfActiveInput }>) {
      state.schedules = action.payload.schedules
    },
    changeActiveTime(state, action: PayloadAction<TimeType>) {
      state.activeTime = action.payload
    },
    changePrice(state, action: PayloadAction<number>) {
      state.price = action.payload
    },
    toggleHideTab(state, action: PayloadAction<boolean>) {
      state.hideTab = action.payload
    },
    resetCreateClass(state) {
      state = initialState
      return state
    },
  },
})

export const {
  changeIntroduceMarkdown,
  changeCurriculumMarkdown,
  temporaryClass,
  changeCurrentPage,
  addSchedule,
  changeActiveTime,
  changePrice,
  toggleHideTab,
  resetCreateClass,
} = createClass.actions

export default createClass.reducer
