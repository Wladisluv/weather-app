import { useEffect } from 'react';
import WeatherBlock from '../weather-block/WeatherBlock';
import styles from './weather-week.module.scss';
import { fetchHourlyWeather } from '../../store/thunks/fetchHourlyWeather';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCustomDispatch } from '../../hooks/store';
import { Weather, Location, HourlyWeather } from '../../types/types';

interface Props {
  weather: Weather;
  hourlyWeather: HourlyWeather;
  location: Location;
}

const WeatherWeek = ({weather, hourlyWeather, location}: Props) => {
  const dispatch = useCustomDispatch();
  
  useEffect(() => {
    // dispatch(fetchCurrentLocation());
    dispatch(fetchHourlyWeather(45.04484, 38.97603));
    dispatch(fetchCurrentWeather('Krasnodar'));
  }, []);
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.weather_week}>
      {
          hourlyWeather.daily.map((obj, index) => {
            if (index === 0) return null;
            
            return (
                <WeatherBlock
                  weatherUnit={'week'}
                  weatherDate={obj.dt}
                  tempMin={Math.round(obj.temp.min)}
                  tempMax={Math.round(obj.temp.max)}
                  weatherId={obj.weather[0].id}
                  key={`${obj.dt}_${index}`}
                />
            );
          })}
      </div>
    </div>
  );
};

export default WeatherWeek;
