import { createSlice } from '@reduxjs/toolkit'

type Modes = "light" | "dark";
interface ModeState {
  value: Modes;
}

const initialState: ModeState = {
  value: "light"
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode: (state) => {
      if(state.value === "dark"){
        state.value = "light";
      }else{
        state.value = "dark";
      }
    }
}
})

export const { switchMode } = modeSlice.actions

export default modeSlice.reducer