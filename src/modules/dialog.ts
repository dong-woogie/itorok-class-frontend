import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DialogState {
  addressDialog: AddressDialogType | null
}

export interface AddressDialogType {
  onComplete: (address: string) => void
}

const initialState: DialogState = {
  addressDialog: null,
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
  },
})

export const { openAddressDialog, closeAddressDialog } = dialog.actions

export default dialog.reducer
