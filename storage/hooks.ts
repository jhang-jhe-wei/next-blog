import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { LandingState, LandingDispatch } from "./landing";

export const useLandingDispatch = () => useDispatch<LandingDispatch>();
export const useLandingSelector: TypedUseSelectorHook<LandingState> = useSelector;