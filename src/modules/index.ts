import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import dialogReducer, { DialogState } from './dialog'
import userReducer, { UserStateType } from './user'
import commonReducer, { CommonState } from './common'
import writeReducer, { WriteState } from './write'
import createClassReducer, { CreateClassState } from './create-class'

export interface RootState {
  dialog: DialogState
  user: UserStateType
  common: CommonState
  write: WriteState
  createClass: CreateClassState
}

export default combineReducers({
  user: userReducer,
  dialog: dialogReducer,
  common: commonReducer,
  write: writeReducer,
  createClass: createClassReducer,
})

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector
