import { WeatherService } from "../../services/WeatherService";
import { CurrentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather = 
  (payload: string) => async (dispatch: AppDispatch) => {
    dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload);
    try {
      if(res.status === 200) {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error );
    }
  };