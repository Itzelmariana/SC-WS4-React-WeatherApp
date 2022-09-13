import React, { useState } from 'react';
import axios from 'axios';

import MainDisplay from './MainDisplay';
import Forecast from './Forecast';
import Footer from './Footer';

import './InputCity.css';

export default function InputCity(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = '5f472b7acba333cd8a035ea85a0d4d4c';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className='InputCity'>
        <div className='row mb-3'>
          <div className='col-11'>
            <form onSubmit={handleSubmit}>
              <input
                type='search'
                placeholder='Enter a city'
                id='city-input'
                className='entercity'
                onChange={handleCityChange}
              />
              <button type='submit' className='search'>
                <span role='img' aria-label=''>
                  🔍
                </span>
              </button>
            </form>
          </div>
          <div className='col-1 myBtn'>
            <button className='mylocation'>
              <span role='img' aria-label=''>
                📍
              </span>
            </button>
          </div>
        </div>
        <MainDisplay data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
        <hr />
        <Footer />
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
