import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

export const selectCurrentLocationData = (state: RootState) =>
  state.currentLocationSliceReducer;

  export const selectHourlyWeatherData = (state: RootState) =>
  state.HourlyWeatherSliceReducer;