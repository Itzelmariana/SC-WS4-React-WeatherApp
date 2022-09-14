import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

import './MainDisplay.css';

export default function MainDisplay(props) {
  const unit = props.unit;
  const setUnit = props.setUnit;

  return (
    <div className='MainDisplay'>
      <div className='row'>
        <div className='col-sm-12 col-md-4 text-center'>
          <h2 className='displayCity'>{props.data.city}</h2>
          <div className='detailsmain'>
            <FormattedDate date={props.data.date} />
          </div>
          <div className='text-capitalize detailsmain'>
            {props.data.description}
          </div>
        </div>
        <div className='col-sm-6 col-md-2 emojimain text-center'>
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className='col-sm-3 col-md-3 tempeturemain text-center'>
          <WeatherTemperature
            unit={unit}
            setUnit={setUnit}
            celsius={props.data.temperature}
          />
        </div>

        <div className='col-sm-12 col-md-3 detailsmain text-center'>
          <div>Wind: {props.data.humidity}km/h</div>
          <div>Humidity: {props.data.wind}%</div>
        </div>
      </div>
    </div>
  );
}
