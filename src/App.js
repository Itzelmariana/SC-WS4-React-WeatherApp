import React, { useState } from 'react';
import InputCity from './components/InputCity';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='Frame m-auto'>
        <InputCity defaultCity='New York' />
      </div>
    </div>
  );
}
