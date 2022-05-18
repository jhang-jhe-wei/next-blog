import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface LightState {
  value: Boolean[];
}

const initialState: LightState = {
    value: Array(6).fill(false)
}

export const lightSlice = createSlice({
  name: 'light',
  initialState,
  reducers: {
    trunAllOn: state => {
      state.value = Array(6).fill(true);
    },
    trunAllOff: state => {
      state.value = Array(6).fill(false);
    },
    toggle: (state, action: PayloadAction<number>) => {
      state.value[action.payload] = !state.value[action.payload];
    },
    toggleAll: state => {
      state.value = state.value.map(element => (!element));
    }
  },
})

export const { trunAllOn, trunAllOff, toggle, toggleAll } = lightSlice.actions

export default lightSlice.reducer