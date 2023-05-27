export type Weather = {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  },

  weather: [
    {
      main: string;
      id: number;
    }
  ],

  wind: {
    speed: number;
  }
};

export type HourlyWeather = {
    hourly: [{
      dt: number;
      temp: number;
      weather: [{
        id: number;
        main: string;
      }]
    }]
}

export type Location = {
  location: {
    city: string;
    lat: number;
    lng: number;
  }
};