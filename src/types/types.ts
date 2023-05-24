export type Weather = {
  main: {
    temp: number;
  },

  weather: [
    {
      main: string;
    }
  ]
};

export type Location = {
  location: {
    city: string;
  }
};