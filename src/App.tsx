import Header from './components/header/Header';
import WeatherMain from './components/weather-main/WeatherMain';
import WeatherMap from './components/weather-map/Weather-map';
import WeatherWeek from './components/weather-week/WeatherWeek';
import { useCustomSelector } from './hooks/store';
import styles from './scss/app.module.scss';
import { selectCurrentLocationData, selectCurrentWeatherData, selectHourlyWeatherData } from './store/selectors';

const App = () => {
  const { weather } = useCustomSelector(selectCurrentWeatherData)
  const { location } = useCustomSelector(selectCurrentLocationData)
  const { hourlyWeather } = useCustomSelector(selectHourlyWeatherData)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header weather={weather}/>
        <div className={styles.main}>
          <WeatherMain weather={weather} location={location} hourlyWeather={hourlyWeather}/>
          <div className={styles.right}>
            <WeatherMap location={location}/>
            <WeatherWeek weather={weather} hourlyWeather={hourlyWeather} location={location}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
