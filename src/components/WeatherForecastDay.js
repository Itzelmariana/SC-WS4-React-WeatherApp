import React from 'react';
import WeatherIcon from './WeatherIcon';
import './Forecast.css';

export default function WeatherForecastDay(props) {
  const unit = props.unit;

  function fahrenheit(temp) {
    return (temp * 9) / 5 + 32;
  }

  function maxTemperatureFahrenheit() {
    let temperature = Math.round(fahrenheit(props.data.temp.max));
    return `${temperature}°`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function minTemperatureFahrenheit() {
    let temperature = Math.round(fahrenheit(props.data.temp.min));
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  if (unit === 'celsius') {
    return (
      <div>
        <div className='WeatherForecast-day'>{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className='forecastTemps'>
          <span className='forecastTempMin'>{minTemperature()}</span>{' '}
          <span className='forecastTempMax'>{maxTemperature()}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='WeatherForecast-day'>{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className='forecastTemps'>
          <span className='forecastTempMin'>{minTemperatureFahrenheit()}</span>{' '}
          <span className='forecastTempMax'>{maxTemperatureFahrenheit()}</span>
        </div>
      </div>
    );
  }
}
