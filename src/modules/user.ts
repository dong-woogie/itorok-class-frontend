import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUserOnLoad_getUserOnLoad } from '../__generated__/getUserOnLoad'

export interface IUserState {
  user: getUserOnLoad_getUserOnLoad | null
}

const initialState: IUserState = {
  user: null,
}

const user = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser(state, action: PayloadAction<getUserOnLoad_getUserOnLoad>) {
      state.user = action.payload
    },

    resetUser(state) {
      state.user = null
    },
  },
})

export const { setUser, resetUser } = user.actions

export default user.reducer
