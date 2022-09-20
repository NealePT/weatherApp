import React from 'react';
import '../styles.css'
import moment from 'moment';

const Weather = ({weatherData}) => {
  return (
    <div className='main'>
      <p className='header'>City Name: {weatherData.name}</p>
      <div>
        <p className='day'>Day: {moment().format('dddd')}</p>
      </div>
      <div>
        <p className='temp'>Temprature: {weatherData.main.temp} &deg;C</p>
      </div>
      {/* <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p> */}
      {/* <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
      {/* <p>Description: {weatherData.weather[0].main}</p> */}
      {/* <p>Humidity: {weatherData.main.humidity} %</p> */}
      {/* <p>Date: {moment().format('LL')}</p> */}
    </div>
  )
};

export default Weather;