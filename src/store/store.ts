import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import currentLocationSliceReducer from "./slices/currentLocationSlice";
import HourlyWeatherSliceReducer from "./slices/hourlyWeatherSlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  currentLocationSliceReducer,
  HourlyWeatherSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof rootReducer>; 
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']