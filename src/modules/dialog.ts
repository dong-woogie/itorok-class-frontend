import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DialogState {
  addressDialog: AddressDialogType | null
  detailAddressDialog: DetailAddressDialogType | null
}

export interface AddressDialogType {
  onComplete: (address: string) => void
}
export interface DetailAddressDialogType {
  address: string
}

const initialState: DialogState = {
  addressDialog: null,
  detailAddressDialog: null,
}

const dialog = createSlice({
  initialState,
  name: 'dialog',
  reducers: {
    openAddressDialog(state, action: PayloadAction<AddressDialogType>) {
      state.addressDialog = action.payload
    },
    closeAddressDialog(state) {
      state.addressDialog = null
    },
    openDetailAddressDialog(state, action: PayloadAction<DetailAddressDialogType>) {
      state.detailAddressDialog = action.payload
    },
    closeDetailAddressDialog(state) {
      state.detailAddressDialog = null
    },
  },
})

export const { openAddressDialog, closeAddressDialog, closeDetailAddressDialog, openDetailAddressDialog } =
  dialog.actions

export default dialog.reducer
