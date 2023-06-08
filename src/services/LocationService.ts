import { AxiosResponse } from "axios"
import { Location } from "../types/types"
import locApi from "../axios/location"

export class LocationService {
  static getCurrentLocation(): 
  Promise<AxiosResponse<Location>> {
    return locApi.get<Location>('')
  }
} 