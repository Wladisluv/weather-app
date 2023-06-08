import styles from './advanced-weather.module.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { fetchHourlyWeather } from '../../store/thunks/fetchHourlyWeather';
import { fetchCurrentLocation } from '../../store/thunks/fetchCurrentLocation';
import { HourlyWeather, Weather, Location } from '../../types/types';
import { WeatherIcons } from '../weather-icons/WeatherIcons';
import WeatherBlock from '../weather-block/WeatherBlock';
import WeatherDetail from '../weather-detail/WeatherDetail';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Props {
  weather: Weather;
  hourlyWeather: HourlyWeather;
  location: Location;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AdvancedWeather({ weather, hourlyWeather, location }: Props) {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather(weather.name));
    dispatch(fetchHourlyWeather(location.location.lat, location.location.lng));
  }, [])
  
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  

  return (
    <Box sx={{ width: '100%', marginTop: '20px'}}>
      <Box sx={{ }}>
        <Tabs textColor="inherit" indicatorColor="primary" value={value} 
              onChange={handleChange} variant="fullWidth">
          <Tab sx={theme.theme === Theme.LIGHT ? {color: Theme.DARK, fontSize: '22px', fontWeight: '600'} : {color: Theme.LIGHT, fontSize: '22px', fontWeight: '600'}} label="Hourly" {...a11yProps(0)}/>
          <Tab sx={theme.theme === Theme.LIGHT ? {color: Theme.DARK, fontSize: '22px', fontWeight: '600'} : {color: Theme.LIGHT, fontSize: '22px', fontWeight: '600'}} label="Details" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={styles.hourly_weather}>

        {
          hourlyWeather.hourly.slice(24).map((acc, index) => {
            if (index % 4 !== 0) return null;
            
            return (
              <WeatherBlock
                weatherUnit={'day'}
                weatherDate={acc.dt}
                weatherId={acc.weather[0].id}
                tempMin={Math.round(acc.temp)}
                location={location}
                weather={weather}
                key={`${acc.dt}_${index}`}
              />
            );
          })}

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WeatherDetail 
        weatherHumidity={weather.main.humidity}
        weatherPressure={weather.main.pressure}
        weatherWind={weather.wind.speed}
        tempMin={weather.main.temp_min}
        tempMax={weather.main.temp_max}
        />
      </TabPanel>
    </Box>
  );
}