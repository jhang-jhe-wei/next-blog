import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FigureState {
  left: boolean;
  right: boolean;
}

const initialState: FigureState = {
  left: true,
  right: true
}

export const figureSlice = createSlice({
  name: 'figure',
  initialState,
  reducers: {
    toggleRight: (state) => {
      state.right = !state.right;
    },
    toggleLeft: (state) => {
      state.left = !state.left;
    }
  }
})

export const { toggleLeft, toggleRight } = figureSlice.actions

export default figureSlice.reducer