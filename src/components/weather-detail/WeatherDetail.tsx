import styles from './weather-detail.module.scss';
import { ReactComponent as Humidity } from '../weather-icons/weather-icons/humidity-icon.svg';
import { ReactComponent as Pressure } from '../weather-icons/weather-icons/pressure-icon.svg';
import { ReactComponent as Wind } from '../weather-icons/weather-icons/wind-icon.svg';
import { ReactComponent as MinTemp } from '../weather-icons/weather-icons/temperature-arrow-down-solid.svg';
import { ReactComponent as MaxTemp } from '../weather-icons/weather-icons/temperature-arrow-up-solid.svg';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

interface weatherDeateilProps {
  weatherHumidity: number;
  weatherPressure: number;
  weatherWind: number;
  tempMin: number;
  tempMax: number;
}

const WeatherDetail = ({weatherHumidity, weatherPressure, weatherWind, tempMin, tempMax}: weatherDeateilProps) => {
  const theme = useTheme();
  return (
    <div className={styles.weather_detail}>

      <div>
        <div>
          <h2><Humidity className={theme.theme === Theme.LIGHT ? '' : styles.weather_detail__icon} />Humidity</h2>
        </div>
      <p>{weatherHumidity}%</p>
      </div>

      <div>
        <div>
          <h2><Pressure className={theme.theme === Theme.LIGHT ? '' : styles.weather_detail__icon} />Pressure</h2>
        </div>
      <p>{weatherPressure}hPa</p>
      </div>

      <div>
        <div>
          <h2><Wind className={theme.theme === Theme.LIGHT ? '' : styles.weather_detail__icon} />Wind</h2>
        </div>
      <p>{weatherWind}kph</p>
      </div>

      <div>
        <div>
          <h2><MinTemp className={theme.theme === Theme.LIGHT ? '' : styles.weather_detail__icon} width={18}/>Temp min</h2>
        </div>
      <p>{tempMin}°</p>
      </div>

      <div>
        <div>
          <h2><MaxTemp className={theme.theme === Theme.LIGHT ? '' : styles.weather_detail__icon} width={18}/>Temp Max</h2>
        </div>
      <p>{tempMax}°</p>
      </div>

    </div>
  );
};

export default WeatherDetail;
