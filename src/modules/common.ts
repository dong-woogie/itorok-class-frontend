import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  addLinkPopover: AddLinkType | null
}
export interface PositionType {
  top: number
  bottom: number
  left: number
  right?: number
}
export interface AddLinkType {
  onComplete: Function
  position: PositionType
}

const initialState: CommonState = {
  addLinkPopover: null,
}

const common = createSlice({
  initialState,
  name: 'common',
  reducers: {
    openAddLinkPopover(state, action: PayloadAction<AddLinkType>) {
      state.addLinkPopover = action.payload
    },
    closeAddLinkPopover(state) {
      state.addLinkPopover = null
    },
  },
})

export const { closeAddLinkPopover, openAddLinkPopover } = common.actions

export default common.reducer
