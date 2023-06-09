import styles from './weather-main.module.scss';
import AdvancedWeather from '../advanced-weather/AdvancedWeather';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCustomDispatch } from '../../hooks/store';
import { useEffect, useState } from 'react';
import { HourlyWeather, Location, Weather } from '../../types/types';
import { fetchCurrentLocation } from '../../store/thunks/fetchCurrentLocation';
import { WeatherIcons } from '../weather-icons/WeatherIcons';

interface Props {
  weather: Weather;
  location: Location;
  hourlyWeather: HourlyWeather;
}

  const WeatherMain = ({weather, location, hourlyWeather}: Props) => {
  const date = new Date().toLocaleString('en',
  {
    day: 'numeric',
    month: 'long',
  });

  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
      <div className={styles.main_block}>
        <h1 className={styles.city_title}>{weather.name}</h1>
        <p>{date}</p>
        <img
      src={WeatherIcons(weather.weather[0].id)}
      alt="weather visualization"
      className={weather.weather[0].id === 800 ? styles.sunny : styles.icon}
        />
        <h2 className={styles.weather_descr}>{weather.weather[0].main}</h2>
      </div>

      <div className={styles.temp_block}>
      <h1>{Math.round(weather.main.temp)}°C</h1>
      </div>
      </div>
      <AdvancedWeather weather={weather} hourlyWeather={hourlyWeather} location={location}/>
    </div>
  );
};

export default WeatherMain;
