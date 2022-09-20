import React from 'react';

const Weather = ({weatherData}) => {
  return (
    <div>
      <header className='header'>City Name: {weatherData.name}</header>
    </div>
  )
};

export default Weather;