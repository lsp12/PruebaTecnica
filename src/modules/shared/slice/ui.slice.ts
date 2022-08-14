import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUiState {
  theme: string
}

export const initialState: IUiState = {
  theme: localStorage.getItem('theme') || 'light',
}

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
})

export const { setTheme } = uiSlice.actions
export default uiSlice.reducer
