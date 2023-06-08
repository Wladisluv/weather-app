import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HourlyWeather } from "../../types/types";
import { AxiosResponse } from "axios";

type HourlyWeatherType = {
  hourlyWeather: HourlyWeather;
  isLoading: boolean;
  response: Response;
}

type Response = {
  status: number;
  message: string;
}

const initialState: HourlyWeatherType = {
    hourlyWeather: {
      
      daily: [{
        dt: 0,
    
        temp: {
          min: 0,
          max: 0,
        },
    
        weather: [{
          id: 0,
        }]
      }],

      hourly: [{
        dt: 0,
        temp: 0,
        weather: [{
          id: 0,
          main: ''
        }]
      }]
    },

  isLoading: false,
  response: {
    status: 0,
    message: '',
  }
}

export const HourlyWeatherSlice = createSlice({
  name: 'hourly_weather',
  initialState,
  reducers: {
    fetchHourlyWeather(state) {
      state.isLoading = true
    },

    fetchHourlyWeatherSuccess(
      state, 
      action: PayloadAction<AxiosResponse<HourlyWeather>>) 
      {
        state.isLoading = false;
        state.hourlyWeather = action.payload.data;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
      }
    },

    fetchHourlyWeatherError(
      state, 
      action: PayloadAction<AxiosResponse<HourlyWeather>>) 
      {
        state.isLoading = false;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
      }
    }
  }
})

export default HourlyWeatherSlice.reducer