export type Weather = {
  dt: number;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  },

  name: string;

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
    daily: [{
      dt: number;

      temp: {
        min: number;
        max: number;
      },

      weather: [{
        id: number;
      }]
    }],

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