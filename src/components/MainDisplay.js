import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

import './MainDisplay.css';

export default function MainDisplay(props) {
  return (
    <div className='MainDisplay'>
      <div className='row'>
        <div className='col-4'>
          <h2 className='displayCity'>{props.data.city}</h2>
          <div className='detailsmain'>
            <FormattedDate date={props.data.date} />
          </div>
          <div className='text-capitalize detailsmain'>
            {props.data.description}
          </div>
        </div>
        <div className='col-2 emojimain'>
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className='col-3 tempeturemain'>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className='col-3 detailsmain'>
          <div>Wind: {props.data.humidity}km/h</div>
          <div>Humidity: {props.data.wind}%</div>
        </div>
      </div>
    </div>
  );
}
