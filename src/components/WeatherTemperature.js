import React, { useState } from 'react';

import './MainDisplay.css';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === 'celsius') {
    return (
      <div className='WeatherTemperature row'>
        <div className='temperature col-5 '>{Math.round(props.celsius)}</div>
        <div className='unit col-7'>
          °C |
          <a href='/' onClick={showFahrenheit}>
            {' '}
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className='WeatherTemperature row'>
        <div className='temperature col-5'>{Math.round(fahrenheit())}</div>
        <div className='unit col-7'>
          <a href='/' onClick={showCelsius}>
            °C{' '}
          </a>
          | °F
        </div>
      </div>
    );
  }
}
