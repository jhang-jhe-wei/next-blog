import { configureStore } from '@reduxjs/toolkit'
import light_slice from '../features/light/light_slice'
import figure_slice from '../features/figure/figure_slice';

export const store = configureStore({
  reducer: {
      light: light_slice,
      figure: figure_slice
  }
})

export type LandingDispatch = typeof store.dispatch;
export type LandingState = ReturnType<typeof store.getState>;
export default store;