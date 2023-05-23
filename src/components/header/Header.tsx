import styles from './header.module.scss';
import Search from '../search/Search';
import ThemeBtn from '../theme-btn/ThemeBtn';
import Switch from '../switch/Switch'

const Header = () => {
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
          <h2>{days[n]}, 7C</h2>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;
