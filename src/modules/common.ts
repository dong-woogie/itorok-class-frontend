import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export interface ModalType {
  title: string
  body: string
  onComplete: Function
}

export interface CommonState {
  addLinkPopover: AddLinkType | null
  alert: string | null
  modal: ModalType | null
}

const initialState: CommonState = {
  addLinkPopover: null,
  alert: null,
  modal: null,
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
    openAlert(state, action: PayloadAction<string>) {
      state.alert = action.payload
    },
    closeAlert(state) {
      state.alert = null
    },
    openModal(state, action: PayloadAction<ModalType>) {
      state.modal = action.payload
    },
    closeModal(state) {
      state.modal = null
    },
  },
})

export const { closeAddLinkPopover, openAddLinkPopover, openAlert, closeAlert, openModal, closeModal } = common.actions

export default common.reducer
