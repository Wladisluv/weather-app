import styles from './header.module.scss';
import Search from '../search/Search';
import { Weather, Location } from '../../types/types';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ReactComponent as Logo } from '../weather-icons/weather-icons/weather-partly-cloudy-day-svgrepo-com.svg';


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

  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  };
  

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <div className={styles.header_left__logo}>
            <Logo className={theme.theme === Theme.LIGHT ? '' : styles.logo} width={56}/>
            <h1 className={styles.header__app_name}>Weather app</h1>
          </div>
          <Search location={location}/>
        </div>
        <div className={styles.header_right}>
          <h2>{days[n]}, {Math.round(weather.main.temp)}°C</h2>
          {/* <Switch onClick={changeTheme}/> */}
          <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
        {theme.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
