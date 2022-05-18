import { createSlice } from '@reduxjs/toolkit'

import { trunAllOn, trunAllOff } from '../light/light_slice'

interface ModeState {
  value: string
}

const initialState: ModeState = {
  value: "light"
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    // switchMode: (state) => {
    //   if(state.value === "dark"){
    //     document.documentElement.className = "";
    //     state.value = "light";
    //   }else{
    //     document.documentElement.className = "dark";
    //     state.value = "dark";
    //   }
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(trunAllOn, (state) => ({
        value: "dark",
      }))
      .addCase(trunAllOff, (state) => ({
        value: "light",
      }))
  }
})

export default modeSlice.reducer