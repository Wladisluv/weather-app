import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import currentLocationSliceReducer from "./slices/currentLocationSlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  currentLocationSliceReducer,
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