import { LocationService } from "../../services/LocationService";
import { CurrentLocationSlice } from "../slices/currentLocationSlice";
import { AppDispatch } from "../store";

export const fetchCurrentLocation = 
  () => async (dispatch: AppDispatch) => {
    dispatch(CurrentLocationSlice.actions.fetchCurrentLocation());
    const res = await LocationService.getCurrentLocation();
    try {
      if(res.status === 200) {
        dispatch(CurrentLocationSlice.actions.fetchCurrentLocationSuccess(res));
      } else {
        dispatch(CurrentLocationSlice.actions.fetchCurrentLocationError(res));
      }
    } catch (error) {
      console.log(error );
    }
  };