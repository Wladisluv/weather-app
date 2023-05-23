import axios, { AxiosResponse } from "axios"
import { Weather } from "../types/types"

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=dace69a54ea427a678bd87593d7c14c0`) 
  }
} 