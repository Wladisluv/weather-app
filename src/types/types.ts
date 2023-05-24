export type Weather = {
  main: {
    temp: number;
  },

  weather: [
    {
      main: string;
    }
  ],
};

export type HourlyWeather = {
    hourly: [{
      dt: number;
      temp: number;
    }]
}

export type Location = {
  location: {
    city: string;
  }
};