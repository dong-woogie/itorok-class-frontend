import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SocialProvider } from '../__generated__/globalTypes'

export interface UserState {
  temporaryAccount: TemporaryAccountState | null
}

interface TemporaryAccountState {
  socialId: string
  displayName: string
  thumbnail: string
  provider: SocialProvider
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
