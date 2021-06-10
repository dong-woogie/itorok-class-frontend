import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialog, { DialogState } from "./dialog";

export interface rootState {
  dialog: DialogState;
}

const rootReducer = combineReducers({
  dialog: dialog.reducer,
});

export default rootReducer;
