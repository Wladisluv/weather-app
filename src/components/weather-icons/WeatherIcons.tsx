import styles from './weather-icons.module.scss';
import sunny from './weather-icons/day.svg';
import cloudy from './weather-icons/cloudy-day-1.svg';
import rainy from './weather-icons/rainy-1.svg';
import thunder from './weather-icons/thunder.svg'
import snowy from './weather-icons/snowy-1.svg';

export const WeatherIcons = (weatherId: number) => {

      if (weatherId >= 200 &&  weatherId <= 232) {
        return thunder;
      }
    
      if (weatherId >= 300 &&  weatherId <= 321) {
        return rainy;
      }
      if (weatherId >= 520 && weatherId <= 531) {
        return rainy;
      }
    
      if (weatherId >= 500 && weatherId <= 504) {
        return rainy;
      }
    
      if (weatherId === 511 || weatherId === 621) {
        return rainy;
      }
      if (weatherId >= 611 && weatherId <= 616) {
        return rainy;
      }
    
      if ( weatherId === 600 || weatherId === 620) {
        return snowy;
      }
      if (weatherId >= 600 && weatherId <= 622) {
        return snowy;
      }
    
      if (weatherId === 800) {
        return sunny;
      }
    
      if (weatherId >= 801 && weatherId <= 804) {
        return cloudy;
      }
}