import React from 'react';

import InputCity from './components/InputCity';

import './App.css';

export default function App() {
  return (
    <div className=' App'>
      <div className='Frame container'>
        <InputCity defaultCity='New York' />
      </div>
    </div>
  );
}
