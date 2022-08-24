import React from 'react';

import './InputCity.css';

export default function InputCity() {
  return (
    <div className='InputCity'>
      <div className='row'>
        <div className='col-12'>
          <input
            type='search'
            placeholder='Enter a city'
            id='city-input'
            className='entercity'
          />
          <button type='submit' className='search'>
            <span role='img' aria-label=''>
              🔍
            </span>
          </button>
          <button className='mylocation'>
            <span role='img' aria-label=''>
              📍
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
