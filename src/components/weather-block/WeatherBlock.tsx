import styles from './weather-block.module.scss'
import { WeatherIcons } from "../weather-icons/WeatherIcons";
import { Location, Weather } from '../../types/types';

interface weatherBlockProps {
  weatherId: number;
  tempMin?: number;
  tempMax?: number;
  weatherDate: number;
  weatherUnit: string;
  location: Location;
  weather: Weather;
}

const WeatherBlock = ({weatherId, tempMin, tempMax, weatherDate, weatherUnit, location, weather}: weatherBlockProps) => {
  const date = new Date(weatherDate * 1000);

  console.log(weather.name);
  

  return (
    <div className={ weatherUnit === 'week' ? styles.weather_week : (weather.name.length >= 10 ? styles.weather_hourly_mini : styles.weather_hourly) }>
      <div>
    <h2>{ weatherUnit === 'week' ? date.toString().slice(0,4) : date.toLocaleTimeString().slice(0, 5)}</h2>
    <img
      src={WeatherIcons(weatherId)}
      alt="weather visualization"
      className={styles.icon}
    />
      { weatherUnit === 'week' ? <div><p>{tempMin}°<span className={styles.temp_text_min}>{tempMax}°</span></p></div> : <p>{tempMin}°</p>}
      </div>
  </div>
  )
}

export default WeatherBlock