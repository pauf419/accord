import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.sass';
import 'swiper/css';
import 'swiper/css/effect-fade';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

