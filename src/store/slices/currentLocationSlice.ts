import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Location } from "../../types/types";
import { AxiosResponse } from "axios";

type CurrentLocation = {
  location: Location;
  isLoading: boolean;
  response: Response;
}

type Response = {
  status: number;
  message: string;
}

const initialState: CurrentLocation = {
    location: {
      location: {
        city: '',
        lat: 0,
        lng: 0,
      }
    },

  isLoading: false,
  response: {
    status: 0,
    message: '',
  }
}

export const CurrentLocationSlice = createSlice({
  name: 'current_location',
  initialState,
  reducers: {
    fetchCurrentLocation(state) {
      state.isLoading = true
    },

    fetchCurrentLocationSuccess(
      state, 
      action: PayloadAction<AxiosResponse<Location>>) 
      {
        state.isLoading = false;
        state.location = action.payload.data;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
      }
    },

    fetchCurrentLocationError(
      state, 
      action: PayloadAction<AxiosResponse<Location>>) 
      {
        state.isLoading = false;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
      }
    }
  }
})

export default CurrentLocationSlice.reducer