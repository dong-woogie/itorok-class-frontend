import { combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import dialog, { DialogState } from './dialog'
import user, { UserState } from './user'

export interface RootState {
  dialog: DialogState
  user: UserState
}

const rootReducer = combineReducers({
  dialog: dialog.reducer,
  user: user.reducer,
})

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
