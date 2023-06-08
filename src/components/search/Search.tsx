import { useEffect, useState } from 'react';
import { Location } from '../../types/types';
import styles from './search.module.scss';
import { fetchCurrentLocation } from '../../store/thunks/fetchCurrentLocation';
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { fetchHourlyWeather } from '../../store/thunks/fetchHourlyWeather';

interface Props {
  location: Location;
}

const Search = ({location}: Props) => {
  const dispatch = useCustomDispatch();
  
  
  const [loc, setLoc] = useState('');
  const [city, setCity] = useState(location.location.city);
  
  const [weatherData, setWeatherData] = useState(null);
  
  

  const handleSearch = (e: any) => {
    if (e.keyCode == 13) {
    dispatch(fetchCurrentWeather(loc))
    dispatch(fetchCurrentLocation())
      .then((data: any) => {
        setWeatherData(data);
        setLoc(e.target.value);
        // setCity(city);
      })
      .catch((error: string) => {
        console.log('Error fetching weather data:', error);
      });
    };
    return city;
  };
  
  
  
  
  return (
  <div className={styles.header_search}>
    <input
      type="text"
      value={loc}
      onChange={(e) => {setLoc(e.target.value), setCity(e.target.value)}}
      onKeyDown={handleSearch}
      placeholder="Search location"
    />
  </div>
  );
};

export default Search;
