import React from 'react';
import '../styles.css'
import moment from 'moment';

const refresh = () => {
  window.location.reload();
}

const Weather = ({weatherData}) => {
  return (
    <div className='main'>
      <div className='top'>
        <p className='header'>{weatherData.name}</p>
        <aside className='button' onClick={refresh}><i class="fa-solid fa-arrows-rotate"></i></aside>
      </div>
      <div className='flex'>
        <p className='day'>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className='description'>{weatherData.weather[0].main}</p>
      </div>
      <div className='flex'>
        <p className='temp'>Temprature: {weatherData.main.temp} &deg;C</p>
        <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
      </div>å
      <div className='flex'>
        <p className='sun'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className='sun'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    </div>
  )
};

export default Weather;