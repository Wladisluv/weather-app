import styles from './header.module.scss';
import Search from '../search/Search';
import Switch from '../switch/Switch'
import { Weather, Location } from '../../types/types';
import app_logo from '../weather-icons/weather-icons/weather-partly-cloudy-day-svgrepo-com.svg'

interface Props {
  weather: Weather;
  location: Location;
}

const Header = ({weather, location}: Props) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let d = new Date();
  let n = d.getDay();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <div className={styles.header_left__logo}>
            <img className={styles.app_logo} src={app_logo} alt="app logo" width={56}/>
            <h1 className={styles.header__app_name}>Weather app</h1>
          </div>
          <Search location={location}/>
        </div>
        <div className={styles.header_right}>
          <h2>{days[n]}, {Math.round(weather.main.temp)}°C</h2>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;
