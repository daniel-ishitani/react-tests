import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
