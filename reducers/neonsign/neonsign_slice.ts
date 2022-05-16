import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NeonsignState {
  color: string;
  strokeColor: string;
}

const initialState: NeonsignState = {
  color: "red",
  strokeColor: "black"
}

export const neonsignSlice = createSlice({
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },
  },
  initialState,
  name: 'neonsign'
})

export const { changeColor, changeStrokeColor } = neonsignSlice.actions

export default neonsignSlice.reducer
