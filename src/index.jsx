import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import InputCity from './InputCity';
import MainDisplay from './MainDisplay';
import Forecast from './Forecast';
import Footer from './Footer';

import './Styles.css';
import './Frame.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <div className='Frame container'>
        <InputCity />
        <MainDisplay />
        <Forecast />
        <hr />
        <Footer />
      </div>
    </div>
  </StrictMode>
);
