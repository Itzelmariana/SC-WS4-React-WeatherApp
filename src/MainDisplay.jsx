import React from 'react';

import './MainDisplay.css';

export default function MainDisplay() {
  return (
    <div className='MainDisplay'>
      <div className='row'>
        <div className='col-3'>
          <h2 className='displayCity'>Texas</h2>
          <ul>
            <li className='currentmain'>Saturday 15:53</li>
            <li className='statusmain'>Clear</li>
          </ul>
        </div>
        <div className='col-3 emojimain'>
          <div id='iconmain'>
            <img id='wicon' src='' alt='icon' />
          </div>
        </div>
        <div className='col-1 tempeturemain'>33</div>
        <span className='col-1 celmain'>°C</span>
        <div className='col-2'>
          <ul className='detailsmain'>
            <li>
              Wind:<span id='wind'></span>km/h
            </li>
            <li>
              Humidity:<span id='humidity'></span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
