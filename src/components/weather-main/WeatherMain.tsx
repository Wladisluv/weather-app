import styles from './weather-main.module.scss';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCustomDispatch } from '../../hooks/store';
import { useEffect } from 'react';
import { Weather } from '../../types/types';

interface Props {
  weather: Weather;
}

const WeatherMain = ({weather}: Props) => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('Amsterdam'));
  }, [])
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h1>{Math.round(weather.main.temp)}°C</h1>
        <h1>{}</h1>
      </div>
    </div>
  );
};

export default WeatherMain;
