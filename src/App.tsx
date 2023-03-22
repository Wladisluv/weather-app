import Header from './components/header/Header';
import WeatherMain from './components/weather-main/WeatherMain';
import WeatherMap from './components/weather-map/Weather-map';
import WeatherWeek from './components/weather-week/WeatherWeek';
import styles from './scss/app.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <WeatherMain />
          <div className={styles.right}>
            <WeatherMap />
            <WeatherWeek />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
