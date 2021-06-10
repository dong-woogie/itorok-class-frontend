import { createSlice } from "@reduxjs/toolkit";

export interface DialogState {
  dialog: boolean;
}

const initialState: DialogState = {
  dialog: false,
};

const dialog = createSlice({
  initialState,
  name: "dialog",
  reducers: {
    toggleDialog: (state) => {
      state.dialog = !state.dialog;
    },
  },
});

export default dialog;
