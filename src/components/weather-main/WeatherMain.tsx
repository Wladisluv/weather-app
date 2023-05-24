import styles from './weather-main.module.scss';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCustomDispatch } from '../../hooks/store';
import { useEffect, useState } from 'react';
import { Location, Weather } from '../../types/types';
import { fetchCurrentLocation } from '../../store/thunks/fetchCurrentLocation';
import { WeatherIcons } from '../weather-icons/WeatherIcons';

interface Props {
  weather: Weather;
  location: Location;
}

const WeatherMain = ({weather, location}: Props) => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentLocation());
    dispatch(fetchCurrentWeather('Krasnodar'))
  }, []);

  const date = new Date().toLocaleString('en',
  {
    day: 'numeric',
    month: 'long',
  });

  console.log(weather);
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_block}>
        <h1 className={styles.city_title}>{location.location.city}Krasnodar</h1>
        <p>{date}</p>
        <WeatherIcons weather={weather}/>
        <h2 className={styles.weather_descr}>Cloudy</h2>
      </div>

      <div className={styles.temp_block}>
      <h1>{Math.round(weather.main.temp)}°C</h1>
      </div>
    </div>
  );
};

export default WeatherMain;
