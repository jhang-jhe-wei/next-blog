import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppState, AppDispatch } from './store';

import { trunAllOn, trunAllOff } from "./light/light_slice";
import { switchMode } from "./mode/mode_slice";

export const navIconItemClicked = createAsyncThunk<void, void, {
  dispatch: AppDispatch, state: AppState,
}>(
  'nav/iconItemClicked',
  (_, thunkAPI) => {
    if (thunkAPI.getState().mode.value === "light") {
      thunkAPI.dispatch(trunAllOn());
    } else {
      thunkAPI.dispatch(trunAllOff());
    }

    thunkAPI.dispatch(switchMode());
  }
)