import styles from './weather-main.module.scss';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchWeather = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dace69a54ea427a678bd87593d7c14c0`,
  );

  console.log(data);

  return data;
};

const WeatherMain = () => {
  const { data, isLoading, isError } = useQuery('weather', fetchWeather);

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>error while fetching</h3>;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}></div>
    </div>
  );
};

export default WeatherMain;
