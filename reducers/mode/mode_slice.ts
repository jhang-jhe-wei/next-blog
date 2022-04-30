import { createSlice } from '@reduxjs/toolkit'

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
    switchMode: (state) => {
      if(state.value == "dark"){
        document.documentElement.className = "";
        state.value = "light";
      }else{
        document.documentElement.className = "dark";
        state.value = "dark";
      }
    }
}
})

export const { switchMode } = modeSlice.actions

export default modeSlice.reducer