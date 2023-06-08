import { AxiosResponse } from "axios"
import api from "../axios"
import { HourlyWeather, Weather } from "../types/types"

export class HourlyWeatherService {
  static getHourlyWeather(lat: number, lon: number):
  Promise<AxiosResponse<HourlyWeather>> {
    return api.get<HourlyWeather>(`/onecall?lat=${lat}&lon=${lon}`) 
  }
} 