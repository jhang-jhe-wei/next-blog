import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StrokeStates = "forward"|"reverse"|"stop";
interface NeonsignState {
  color: string;
  strokeColor: string;
  strokeState: StrokeStates
}

const initialState: NeonsignState = {
  color: "red",
  strokeColor: "black",
  strokeState: "forward"
}

export const neonsignSlice = createSlice({
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
    },
    changeStrokeState: (state, action: PayloadAction<StrokeStates>) => {
      state.strokeState = action.payload;
    }
  },
  initialState,
  name: 'neonsign'
})

export const { changeColor, changeStrokeColor, changeStrokeState } = neonsignSlice.actions

export default neonsignSlice.reducer