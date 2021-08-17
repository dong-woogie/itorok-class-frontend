import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import dialogReducer, { DialogState } from './dialog'
import userReducer, { UserStateType } from './user'
import commonReducer, { CommonState } from './common'

export interface RootState {
  dialog: DialogState
  user: UserStateType
  common: CommonState
}

export default combineReducers({
  user: userReducer,
  dialog: dialogReducer,
  common: commonReducer,
})

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector
