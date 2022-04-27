import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FigureState {
  value: Boolean[];
}

const initialState: FigureState = {
  value: Array(2).fill(true)
}

export const figureSlice = createSlice({
  name: 'figure',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      state.value[action.payload] = !state.value[action.payload];
    },
  }
})

export const { toggle } = figureSlice.actions

export default figureSlice.reducer