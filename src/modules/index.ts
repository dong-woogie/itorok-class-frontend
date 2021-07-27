import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { DialogState } from './dialog'
import userReducer, { IUserState } from './user'

export interface RootState {
  dialog: DialogState
  user: IUserState
}

export default combineReducers({
  user: userReducer,
})

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector
