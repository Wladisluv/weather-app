import { AxiosResponse } from "axios"
import api from "../axios"
import { Weather } from "../types/types"

export class WeatherService {
  static getCurrentWeather(city: string): 
  Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`) 
  }
}