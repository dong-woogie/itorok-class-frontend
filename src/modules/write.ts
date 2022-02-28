import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WriteState {
  markdown: string
  title: string
}

const initialState: WriteState = {
  markdown: '',
  title: '',
}

const write = createSlice({
  initialState,
  name: 'write',
  reducers: {
    changeMarkdown: (state, action: PayloadAction<string>) => {
      state.markdown = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const { changeMarkdown, changeTitle } = write.actions
export default write.reducer
