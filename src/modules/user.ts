import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  temporaryAccount: TemporaryAccountState | null
}

interface TemporaryAccountState {
  socialId: string
  displayName: string
  thumbnail: string
}

const initialState: UserState = {
  temporaryAccount: null,
}

const user = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setTemporaryAccount(state, action: PayloadAction<TemporaryAccountState>) {
      state.temporaryAccount = action.payload
    },
    resetTemporaryAccount(state) {
      state.temporaryAccount = null
    },
  },
})

export default user
