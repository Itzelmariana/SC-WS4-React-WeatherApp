import React from 'react';

import './Forecast.css';

export default function Forecast() {
  return (
    <div className='Forecast'>
      <div className='row'>
        <div className='col week1'>
          <h5>Sun</h5>
          <p className='emojiweek'>
            {' '}
            <i className='fa-solid fa-cloud-sun'></i>
          </p>
          <p className='weektempeture'>37°C </p>
        </div>
        <div className='col week2'>
          <h5>Mon</h5>
          <p className='emojiweek'>
            {' '}
            <i className='fa-solid fa-cloud-sun'></i>
          </p>
          <p className='weektempeture'>28°C </p>
        </div>
        <div className='col week3'>
          <h5>Tue</h5>
          <p className='emojiweek'>
            {' '}
            <i className='fa-solid fa-cloud-sun'></i>
          </p>
          <p className='weektempeture'>29°C </p>
        </div>
        <div className='col week4'>
          <h5>Wed</h5>
          <p className='emojiweek'>
            {' '}
            <i className='fa-solid fa-cloud'></i>
          </p>
          <p className='weektempeture'>30°C </p>
        </div>
        <div className='col week5'>
          <h5>Thu</h5>
          <p className='emojiweek'>
            {' '}
            <i className='fa-solid fa-sun'></i>
          </p>
          <p className='weektempeture'>33°C </p>
        </div>
      </div>
    </div>
  );
}
