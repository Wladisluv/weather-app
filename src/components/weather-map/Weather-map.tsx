import styles from './weather-map.module.scss';
import { useEffect, useState } from 'react';
import { Location } from '../../types/types';
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentLocation } from '../../store/thunks/fetchCurrentLocation';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  location: Location;
}

const WeatherMap = ({location}: Props) => {
  const dispatch = useCustomDispatch();
  
  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);

  const MapComponent = () => {
    const map = useMap();
    map.panTo([location.location.lat, location.location.lng])
    return null;
  }
    
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
      <MapContainer center={[location.location.lat, location.location.lng]} zoom={13} style={{ height: '400px', borderRadius: '5%' }}>
        <MapComponent/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <TileLayer
          attribution='<a href="https://openweathermap.org/">Openweathermap</a>'
          url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=68e0afb55f84682ae49f209717878748"
        />
      <Marker position={[location.location.lat, location.location.lng]}></Marker>
    </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
