import React from 'react';
import '../styles.css'
import moment from 'moment';

const Weather = ({weatherData}) => {
  return (
    <div className='main'>
      <p className='header'>City Name: {weatherData.name}</p>
      <div className='flex'>
        <p className='day'>Day: {moment().format('dddd')}</p>
        <p className='day'>{moment().format('LL')}</p>
      </div>
      <div className='flex'>
        <p className='temp'>Temprature: {weatherData.main.temp} &deg;C</p>
        <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
      </div>
      {/* <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
      {/* <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
      {/* <p>Description: {weatherData.weather[0].main}</p> */}
    </div>
  )
};

export default Weather;