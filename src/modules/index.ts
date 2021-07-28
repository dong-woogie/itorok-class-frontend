import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import dialogReducer, { DialogState } from './dialog'
import userReducer, { UserStateType } from './user'

export interface RootState {
  dialog: DialogState
  user: UserStateType
}

export default combineReducers({
  user: userReducer,
  dialog: dialogReducer,
})

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector
