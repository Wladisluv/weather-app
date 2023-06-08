import { HourlyWeatherService } from "../../services/HourlyWeatherService";
import { HourlyWeatherSlice } from "../slices/hourlyWeatherSlice";
import { AppDispatch } from "../store";

export const fetchHourlyWeather = 
  (lat: number, lon: number) => async (dispatch: AppDispatch) => {
    dispatch(HourlyWeatherSlice.actions.fetchHourlyWeather());
    const res = await HourlyWeatherService.getHourlyWeather(lat, lon);
    try {
      if(res.status === 200) {
        dispatch(HourlyWeatherSlice.actions.fetchHourlyWeatherSuccess(res));
      } else {
        dispatch(HourlyWeatherSlice.actions.fetchHourlyWeatherError(res));
      }
    } catch (error) {
      console.log(error );
    }
  };