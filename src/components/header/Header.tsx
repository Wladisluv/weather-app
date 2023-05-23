import styles from './header.module.scss';
import Search from '../search/Search';
import Switch from '../switch/Switch'
import { useCustomDispatch } from '../../hooks/store';
import { useEffect } from 'react';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Weather } from '../../types/types';

interface Props {
  weather: Weather;
}

const Header = ({weather}: Props) => {
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
        <Search />
        <div className={styles.header_right}>
          <h2>{days[n]}, {Math.round(weather.main.temp)}°C</h2>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;
